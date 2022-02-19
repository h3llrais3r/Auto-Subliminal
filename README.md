Auto-Subliminal [![License](https://img.shields.io/github/license/h3llrais3r/Auto-Subliminal.svg)](https://github.com/h3llrais3r/Auto-Subliminal/blob/master/LICENSE) [![Percentage of issues still open](http://isitmaintained.com/badge/open/h3llrais3r/Auto-Subliminal.svg)](http://isitmaintained.com/project/h3llrais3r/Auto-Subliminal "Percentage of issues still open") [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/h3llrais3r/Auto-Subliminal.svg)](http://isitmaintained.com/project/h3llrais3r/Auto-Subliminal "Average time to resolve an issue")
===============

| Status | Master | Development |
| -------| ------:| -----------:|
| CI | [![CI Status](https://github.com/h3llrais3r/Auto-Subliminal/actions/workflows/ci.yaml/badge.svg?branch=master)](https://github.com/h3llrais3r/Auto-Subliminal/actions/workflows/ci.yaml?query=branch:master) | [![CI Status](https://github.com/h3llrais3r/Auto-Subliminal/actions/workflows/ci.yaml/badge.svg?branch=development)](https://github.com/h3llrais3r/Auto-Subliminal/actions/workflows/ci.yaml?query=branch:development) |
| Coverage | [![Coverage Status](https://coveralls.io/repos/github/h3llrais3r/Auto-Subliminal/badge.svg?branch=master)](https://coveralls.io/github/h3llrais3r/Auto-Subliminal?branch=master) | [![Coverage Status](https://coveralls.io/repos/github/h3llrais3r/Auto-Subliminal/badge.svg?branch=development)](https://coveralls.io/github/h3llrais3r/Auto-Subliminal?branch=development) |

About
-----

Welcome to Auto-Subliminal, the automated python subtitle downloader!

This is a modified version of the discontinued Auto-Sub Alpha 0.5.8 project (https://code.google.com/p/auto-sub/).
It makes use of Subliminal (https://github.com/Diaoul/subliminal) for checking and downloading subtitles.

What it does
------------

 * Easy and straightforward script that scans your TV and MOVIE contents
 * If no SUBTITLE is found (externally or internally) it will attempt to download one by using Subliminal
 * Subliminal will attempt to match the correct version of the subtitle with the file located on the disk
 * Once every day it will do a full rescan of your local content
 * Support to search/save/delete a subtitle individually
 * Support to play a video remotely (need to register a custom protocol handler on your remote machine)

Dependencies
------------

 * To run Auto-Subliminal from source you need Python 3.7 or higher
 * Required dependencies: see [requirements.txt](requirements.txt)

How to use
----------

 * Install python
 * Create a virtual environment and activate it
 * Install all requirements in the virtual environment: `pip install -r requirements.txt`
 * Start the script: `python AutoSubliminal.py`
 * If you didn't create a virutal environment, the script creates one for you with the name `.venv` in the project root and will restart the script in the virtual environment
 * If you didn't install the requirements, the script will install them for you in the virtual environment
 * A web browser should now open
 * Go to the config menu, check the settings and make sure you set at least:
    * Video paths: The root folder(s) of your series and/or movies
    * Default language: Your primary subtitle language
    * Subliminal settings: Your minimal match score and used providers
 * Restart Auto-Subliminal

Enjoy your subtitles!
