Libraries dependency tree
-------------------------

**First level dependencies are directly used/imported in Auto-Subliminal!**

```
|-- babelfish
|-- beautifulsoup4
    |-- html5lib (optional dependency)
    |-- lxml (optional dependency)
|-- cherrypy
    |-- cheroot
        |-- backports.functools_lru_cache
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
|-- enum34
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
|-- lxml (used to speed up some parsing, can be used by different libraries is available)
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
        |-- oauthlib
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
|-- tvdb_api_v2
    |-- certifi
    |-- python-dateutil
        |-- six
    |-- six
    |-- urllib3
|-- unidecode
|-- ws4py
```
