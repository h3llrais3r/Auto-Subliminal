# Autosub common.py - http://code.google.com/p/auto-sub/
#
# The Autosub checkSub module
#
# Based on Sickbeard & Guesit, thanks!
# 

import re

#List with all the possible seperators used in filenaming
seperator = u' ._-()[]{}'

show_regex = [re.compile("^((?P<title>.+?)[. _-]+)?s(?P<season>\d+)[x. _-]*e(?P<episode>\d+)[x. _-]*(?P<extra_info>.+)*", re.IGNORECASE),
        re.compile("^((?P<title>.+?)[. _-]+)?(?P<season>\d+)x(?P<episode>\d+)[x. _-]*(?P<extra_info>.+)*", re.IGNORECASE),
        re.compile("^((?P<title>.+?)[. _-]+)?(?P<season>\d{1,2})(?P<episode>\d{2})[x. _-]*(?P<extra_info>.+)*", re.IGNORECASE)]

episode_regex = [re.compile("(s\d+[x. _-]*e\d+|\d+x\d+)", re.IGNORECASE)]

#Every part of the file_info got a list with regex. The first item in this list should be the standardnaming
#The second (and following) regex contains nonstandard naming (either typo's or other renaming tools (like sickbeard)) 
#Nonstandard naming should be renamed using the syn dictionary. 

source = [re.compile("(ahdtv|hdtv|web[. _-]*dl|bluray|dvdrip|webrip)", re.IGNORECASE),
          re.compile("(tv|dvd|bdrip|web)", re.IGNORECASE)]

#A dictionary containing as keys, the nonstandard naming. Followed by there standard naming.
#Very important!!! Should be unicode and all LOWERCASE!!!
source_syn = {u'tv' : u'hdtv',
              u'ahdtv' : u'hdtv',
              u'dvd' : u'dvdrip',
              u'bdrip': u'bluray',
              u'webdl' : u'web-dl',
              u'web' : u'web-dl'}

quality = [re.compile("(1080p|720p)" , re.IGNORECASE), 
           re.compile("(1080[i]*|720|HD|SD)", re.IGNORECASE)]

quality_syn = {u'1080' : u'1080p',
               u'1080i' : u'1080p',
               u'720' : u'720p',
               u'hd': u'720p'}

#A dictionary containing as keys fileextensions followed by the matching quality.
#If the quality regex fails, ProcessFile will look in this dictionary. If the fileextension
#is not here, it will guess that the quality is SD. 
quality_fileext = {u'.mkv' : u'720p',
                   u'.mp4' : u'sd',
                   u'.avi' : u'sd'}

codec = [re.compile("([xh]*264|xvid|dvix)" , re.IGNORECASE)]

#Note: x264 is the opensource implementation of h264.
codec_syn = {u'x264' : u'h264',
               u'264' : u'h264'}

codec_fileext = {u'.mkv' : u'h264',
                   u'.mp4' : u'h264',
                   u'.avi' : u'xvid'}

#The following 2 variables create the regex used for guessing the releasegrp. Functions should not call them!
_releasegrps = ['0TV',
               '2HD',
               'ASAP',
               'aAF',
               'AFG',
               'AVS',
               'BTN',
               'CP',
               'compulsion',
               'CtrlHD',
               'CTU',
               'DIMENSION',
               'ECI',
               'FOV',
               'FQM',
               'GFY',
               'HoodBag',
               'IMMERSE',
               'KiNGS',
               'LOL',
               'mSD',
               'NFHD',
               'NFT',
               'NTb',
               'nodlabs',
               'OOO',
               'ORENJi',
               'P0W4',
               'playXD',
               'SiNNERS',
               'SLOMO',
               'sozin',
               'sundox',
               'T00NG0D',
               'TLA',
               'VASKITTU',
               'MOMENTUM',
               'POD',
               'TjHD',
               'LP',
               'DNR',
               'RANDi',
               'NIN',
               'MMI',
               'DNR',
               'ORPHEUS',
               'NBS',
               'SkyM',
               'CLUE',
               'EVOLVE',
               'TOKUS',
               'hV',
               'GreenBlade',
               'BiA',
               'RRH',
               'TVSMASH',
               'HWD',
               'KYER',
               'UP',
               'LFF',
               'XS',
               'BS',
               'BAJSKORV',
               'PCSYNDICATE',
               'SCT']

_releasegrp_pre = '(' + '|'.join(_releasegrps) + ')$'

releasegrp = [re.compile(_releasegrp_pre, re.IGNORECASE)]

#If the releasegrp is not in the list (_releasegrps), try our old regex.
releasegrp_fallback = [re.compile("(-(?P<releasegrp>[^- \.]+))?$", re.IGNORECASE)]

#If you know a result is invalid you can use the syn dict to renaming it to a None type.
releasegrp_syn = {u'dl': None}