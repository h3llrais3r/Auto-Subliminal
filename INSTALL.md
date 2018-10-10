Installation
============
Install from source in Python system installation with requirements:

    python setup.py install

Installation in virtualenv for development
==========================================
- create virtual environment: 

        virtualenv 'name'

- activate virtual environment 'name'

- install with dev requirements (run from where setup.py is located):

        pip install -r requirements-dev.txt
        
- use virtual environment as runtime in PyCharm (or your editor)

Configure PyCharm to use virtualenv in terminal
===============================================
Go to Settings, Tools, Terminal -> add /K <path-to-your-activate.bat> to Shell path

Installation of new python library
==================================
    pip install <library>

Installation of new python library in lib folder
================================================
    pip install <library> -t lib

Installation of new python library from github in lib folder
============================================================
    pip install git+<github_url>@<branch>#egg=<folder> -t lib

Example branch:

    pip install git+https://github.com/Diaoul/subliminal.git@develop#egg=subliminal -t lib
  
Example commit: 

    pip install git+https://github.com/Diaoul/subliminal.git@7bbc7a1cfc5e8f9e556998a69b655daa07c231c4#egg=subliminal -t lib

Pip options:

    --no-deps
    --no-compile
    --no-cache-dir
    --no-binary :all:

Export installed libraries to file
==================================
    pip freeze > requirements/libraries.txt

This does not work for libraries exported in other folder (f.e. lib)

Install javascript library
==========================
Install javascript library via npm:

    npm install --save --save-exact <library_name>

Adapt gulpfile.js to include needed files of the library (javascript, css, images, fonts, ...)

Run gulp build task to include the new library in the vendor files:

    npm run build