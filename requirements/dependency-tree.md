Libraries dependency tree
-------------------------

**First level dependencies are directly used/imported in Auto-Subliminal!**

```
|-- babelfish
|-- beautifulsoup4
    |-- html5lib (optional dependency)
    |-- lxml (optional dependency)
|-- Cheetah
|-- cherrypy
    |-- cheroot
        |-- more-itertools
        |-- six
    |-- portend
        |-- pytz
        |-- six
        |-- tempora
    |-- six
|-- dogpile.cache
|-- enum34
|-- enzyme
|-- gitpython
    |-- gitdb2
        |-- smmap2
|-- growl
|-- guessit
    |-- babelfish
    |-- python-dateutil
    |-- rebulk
        |-- six
|-- html5lib (used as parser in combination with beautifulsoup4 for parsing html pages)
    |-- webencodings
|-- imdbpy
|-- langdetect
    |-- six
|-- lxml (used to speed up some parsing, can be used by different libraries is available)
|-- pushbullet.py
    |-- python-magic
    |-- requests
    |-- websocket-client
        |-- six
|-- pynma
|-- pysrt
    |-- chardet
|-- python-twitter
    |-- requests
    |-- requests-oauthlib
        |-- oauthlib
|-- simplejson (if not added, fallback to default json library in python)
|-- subliminal
    |-- appdirs
    |-- babelfish
    |-- beautifulsoup4
    |-- chardet
    |-- click
    |-- dogpile.cache
    |-- enzyme
    |-- futures
    |-- guessit
        |-- babelfish
        |-- rebulk
            |-- six
        |-- python-dateutil
    |-- rarfile
    |-- requests
        |-- certify
        |-- chardet
        |-- idna
        |-- urllib3
    |-- pysrt
    |-- pytz
    |-- six
    |-- stevedore
|-- tvdb_api_v2
    |-- certifi
    |-- python-dateutil
    |-- six
    |-- urllib3
|-- ws4py
```
