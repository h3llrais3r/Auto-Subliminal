# Autosub Bierdopje.py - http://code.google.com/p/auto-sub/
#
# The Bierdopje API module
#

import urllib
import urllib2
import logging
import time

from xml.dom import minidom
from operator import itemgetter

import autosub.Helpers
from autosub.ProcessFilename import ProcessFilename
# Settings
log = logging.getLogger('thelogger')

class API:
    """
    One place to rule them all, a function that handels all the request to the server

    Keyword arguments:
    url - the URL that is requested
    
    """
    def __init__(self,url,RSS=False):
        self.errorcode = None
        if RSS:
            self.req = None
            self.req = urllib2.Request(url)
            self.req.add_header("User-agent", autosub.USERAGENT)
            self.connect()
        elif autosub.Helpers.checkAPICalls(use=True):
            self.req = None
            self.req = urllib2.Request(url)
            self.req.add_header("User-agent", autosub.USERAGENT)
            self.connect()
        else:
            log.error("API: out of api calls")
             
    def connect(self):
        import socket
        socket.setdefaulttimeout(autosub.TIMEOUT)
        
        try:
            self.resp = urllib2.urlopen(self.req)
            self.errorcode = self.resp.getcode()
        except urllib2.HTTPError, e:
            self.errorcode = e.getcode()
        
        if self.errorcode == 200:
            log.debug("API: HTTP Code: 200: OK!")
        elif self.errorcode == 429:
            log.debug("API: HTTP Code: 429 You have exceeded your number of allowed requests for this period.")
            log.error("API: You have exceeded your number of allowed requests for this period. (either 1 con/s or 300 con/day))")
            log.warning("API: Forcing a 1 minute rest to relieve bierdopje.com. If you see this info more then once. Cleanup your wanted list!")
            time.sleep(54)
        
        log.debug("API: Resting for 6 seconds to prevent 429 errors")
        time.sleep(6) #Max 0.5 connections each second
        
    def close(self):
        self.resp.close()
        

def getShowidApi(showName):
    """
    Search for the showid by using the Bierdopje API and the name of the show.
    Using showid for future searches reduces the load on the Bierdopje servers.

    Keyword arguments:
    showName -- Name of the show to search the showid for
    """
    api = autosub.API

    getShowIdUrl = "%sGetShowByName/%s" % (api, urllib.quote(showName.encode('utf8')))
    try:
        bierdopjeapi = API(getShowIdUrl)
        dom = minidom.parse(bierdopjeapi.resp)
        bierdopjeapi.resp.close()
    except:
        log.error("getShowid: The server returned an error for request %s" % getShowIdUrl)
        return None

    if not dom or len(dom.getElementsByTagName('showid')) == 0:
        return None
    
    showid = dom.getElementsByTagName('showid')[0].firstChild.data
    return showid


def getSubLink(showid, lang, releaseDetails):
    """
    Return the link to download the best matching subtitle.
    Matching is based on the provided release details.

    Keyword arguments:
    showid -- The id of the show on Bierdopje
    lang -- Language of the wanted subtitle, Dutch or English
    releaseDetails -- Dict containing the quality, releasegrp, source season and episode.
    """
    api = autosub.API

    if showid == -1:
        return (None, None)
    quality = None
    releasegrp = None
    source = None
    season = releaseDetails['season']
    episode = releaseDetails['episode']

    getSubLinkUrl = "%sGetAllSubsFor/%s/%s/%s/%s" % (api, showid, season, episode, lang)

    try:
        bierdopjeapi = API(getSubLinkUrl)
        dom = minidom.parse(bierdopjeapi.resp)
        bierdopjeapi.resp.close()
    except:
        log.error("getSubLink: The server returned an error for request %s" % getSubLinkUrl)
        return (None, None)
    
    if 'quality' in releaseDetails.keys(): quality = releaseDetails['quality']
    if 'releasegrp' in releaseDetails.keys(): releasegrp = releaseDetails['releasegrp']
    if 'source' in releaseDetails.keys(): source = releaseDetails['source']
    if 'codec' in releaseDetails.keys(): codec = releaseDetails['codec']

    if not dom or len(dom.getElementsByTagName('result')) == 0:
        return (None, None)

    scoredict = {}
    releasedict = {}

    for sub in dom.getElementsByTagName('result'):
        release = sub.getElementsByTagName('filename')[0].firstChild.data
        release = release.lower()
        # Remove the .srt extension some of the uploaders leave on the file
        if release.endswith(".srt"):
            release = release[:-4]
        # Scoredict is a dictionary with a download link and its match score. This will be used to determine the best match (the highest matchscore)
        scoredict[sub.getElementsByTagName('downloadlink')[0].firstChild.data] = autosub.Helpers.scoreMatch(ProcessFilename(release, ''), release, quality, releasegrp, source, codec)
        
        # Releasedict is a dictionary with the release name, used for the lastdownload database
        releasedict[sub.getElementsByTagName('downloadlink')[0].firstChild.data] = release
        
        if scoredict[sub.getElementsByTagName('downloadlink')[0].firstChild.data] == 15:
            # Sometimes you just find a perfect match, why should we continue to search if we got a perfect match?
            log.debug('getSubLink: A perfect match found, returning the download link')
            return (sub.getElementsByTagName('downloadlink')[0].firstChild.data, release)
    # Done comparing all the results, lets sort them and return the highest result
    # If there are results with the same score, the download links which comes first (alphabetically) will be returned
    # Also check if the result match the minimal score
    sortedscoredict = sorted(scoredict.items(), key=itemgetter(1), reverse=True)
    toDelete = []
    for index, item in enumerate(sortedscoredict):
        log.debug('getSubLink: checking minimal match score for %s. Minimal match score is: %s' %(item,autosub.MINMATCHSCORE))
        score = item[1]
        link = item[0]
        if not score >= autosub.MINMATCHSCORE:
            log.debug('getSubLink: %s does not match the minimal match score' % link)
            toDelete.append(index)
    i = len(toDelete) - 1
    while i >= 0:
        log.debug("getSubLink: Removed item from the ScoreDict at index %s" % toDelete[i])
        sortedscoredict.pop(toDelete[i])
        i = i - 1
    if len (sortedscoredict) > 0:
        release = releasedict[sortedscoredict[0][0]]
        return (sortedscoredict[0][0], release)
    
    return (None, None)
