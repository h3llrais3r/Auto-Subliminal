Installation
============
    python setup.py install

Installation in virtualenv for dev/test
=======================================
- create virtual environment: 

        virtualenv 'name'

- activate virtual environment 'name'

- install with test dependencies (run from where setup.py is located):

        pip install -e .[test]
        
- use virtual environment as runtime in PyCharm (or your editor)

Configure PyCharm to use virtualenv in terminal
===============================================
Go to Settings, Tools, Terminal -> add /K <path-to-your-activate.bat> to Shell path

Installation of new python libraries in lib folder
==================================================
    pip install <library> -t lib

Installation of new python libraries from github in lib folder
==============================================================
    pip install git+<github_url>@<branch>#egg=<folder> -t lib

Example branch:

    pip install git+https://github.com/Diaoul/subliminal.git@develop#egg=subliminal -t lib
  
Example commit: 

    pip install git+https://github.com/Diaoul/subliminal.git@7bbc7a1cfc5e8f9e556998a69b655daa07c231c4#egg=subliminal -t lib

Export installed libraries to file
==================================
    pip freeze > requirements/libraries.txt

This does not work for libraries exported in other folder (f.e. lib)
