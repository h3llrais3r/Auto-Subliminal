Libraries dependency tree
-------------------------

**First level dependencies are directly used/imported in Auto-Subliminal!**

```
|-- aenum
|-- babelfish
|-- beautifulsoup4
    |-- html5lib (optional dependency)
    |-- soupsieve
        |-- backports.functools_lru_cache
|-- cherrypy
    |-- cheroot
        |-- backports.functools_lru_cache
        |-- jaraco.functools
        |-- more-itertools
        |-- six
    |-- contextlib2
    |-- more-itertools
    |-- portend
        |-- tempora
            |-- pytz
            |-- six
            |--jaraco.functools
                |--backports.functools_lru_cache
    |-- six
    |-- zc.lockfile
|-- configparser
|-- dogpile.cache
    |-- decorator
|-- enzyme
|-- gitpython
    |-- gitdb2
        |-- smmap2
|-- gntp
|-- guessit
    |-- babelfish
    |-- python-dateutil
        |-- six
    |-- rebulk
        |-- six
    |-- six
|-- html5lib (used as parser in combination with beautifulsoup4 for parsing html pages)
    |-- webencodings
|-- imdbpie
    |-- attrs
    |-- boto
    |-- diskcache
    |-- python-dateutil
        |-- six
    |-- requests
    |-- six
    |-- trans
|-- jsonpickle
|-- langdetect
    |-- six
|-- mako
    |-- markupsafe
|-- pushbullet.py
    |-- python-magic
    |-- requests
    |-- websocket-client
        |-- six
|-- pysrt
    |-- chardet
|-- python-twitter
    |-- requests
    |-- requests-oauthlib
        |-- chardet
        |-- certify
        |-- idna
        |-- oauthlib
        |-- requests
        |-- urllib3
|-- schema
    |-- contextlib2
|-- simplejson (if not added, fallback to default json library in python)
|-- six
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
            |-- six
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
        |-- six
|-- tvdb_api
    |-- certifi
    |-- python-dateutil
        |-- six
    |-- six
    |-- urllib3
|-- unidecode
|-- ws4py
```
