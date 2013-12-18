# Autosub Db.py - http://code.google.com/p/auto-sub/
#
# The Autosub downloadSubs module
#

import logging

import autosub
import os
import time
import tempfile

from autosub.Db import lastDown
from autosub.Bierdopje import API
import autosub.notify as notify

log = logging.getLogger('thelogger')

#TODO: Remove DOWNLOADQUEUELOCK everywhere
#TODO: Remove DownloadSubs threath

def DownloadSub(downloadDict):
    #Before we download, lest check if there are enough APICalls left
    if not autosub.Helpers.checkAPICalls():
        log.error("downloadSubs: out of api calls")
        return False
    
    log.debug("downloadSubs: Starting DownloadSub function")
    
    if 'destinationFileLocationOnDisk' in downloadDict.keys() and 'downloadLink' in downloadDict.keys():
        log.debug("downloadSubs: Download dict seems ook. Dumping it for debug: %r" %downloadDict) 
        destsrt = downloadDict['destinationFileLocationOnDisk']
        downloadLink = downloadDict['downloadLink']
        
        try:
            bierdopjeapi = API(downloadLink)
            log.debug("downloadSubs: Trying to download the following subtitle %s" %downloadLink)
        except:
            log.error("downloadSubs: The server returned an error for request %s" % downloadLink)
            return False
        
        destdir = os.path.split(destsrt)[0] #make sure the download dest is there
        if not os.path.exists(destdir):
            log.debug("checkSubs: no destination directory %s" %destdir)
            return False
        elif not os.path.lexists(destdir):
            log.debug("checkSubs: no destination directory %s" %destdir)
            return False
        
        #Lets first download the subtitle to a tempfile and then write it to the destination
        tmpfile = tempfile.TemporaryFile('w+b')
        
        try:
            if bierdopjeapi.resp:
                tmpfile.write(bierdopjeapi.resp.read())
                tmpfile.write('\n') #If subtitle is exclusive for bierdopje, they add some footer which doesn't have a line feed >.>
            bierdopjeapi.close()
        except:
            log.error("downloadSubs: Error while downloading subtitle %s. Common cases: bierdopje.com not reachable or the subtitle is corrupt on bierdopje.com. " % destsrt)
            return False
        
        tmpfile.seek(0) #Return to the start of the file
        try:
            log.debug("downloadSubs: Trying to save the subtitle to the filesystem")
            open(destsrt, 'wb').write(tmpfile.read())
            tmpfile.close()
        except IOError:
            log.error("downloadSubs: Could not write subtitle file. Permission denied? Enough diskspace?")
            tmpfile.close()
            return False
        
        log.info("downloadSubs: DOWNLOADED: %s" % destsrt)
        
        downloadDict['timestamp'] = time.strftime('%Y-%m-%d %H:%M:%S')
        
        lastDown().setlastDown(dict = downloadDict)
        
        notify.notify(downloadDict['downlang'], destsrt, downloadDict["originalFileLocationOnDisk"])

        if autosub.POSTPROCESSCMD:
            postprocesscmdconstructed = autosub.POSTPROCESSCMD + ' "' + downloadDict["destinationFileLocationOnDisk"] + '" "' + downloadDict["originalFileLocationOnDisk"] + '"'
            log.debug("downloadSubs: Postprocess: running %s" % postprocesscmdconstructed)
            log.info("downloadSubs: Running PostProcess")
            postprocessoutput, postprocesserr = autosub.Helpers.RunCmd(postprocesscmdconstructed)
            if postprocesserr:
                log.error("downloadSubs: PostProcess: %s" % postprocesserr)
            log.debug("downloadSubs: PostProcess Output:% s" % postprocessoutput)
        
        log.debug('downloadSubs: ')
        return True
        
    else:
        log.error("downloadSub: No downloadLink or locationOnDisk found at downloadItem, skipping")
        return False
