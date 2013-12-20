Auto-Subliminal
===============

Thank you for choosing Auto-Subliminal! The automated python subtitle downloader.

This is a modified version of the discontinued Auto-Sub Alpha 0.5.8 (https://code.google.com/p/auto-sub/).
It makes use of Subliminal (https://github.com/Diaoul/subliminal) for checking and downloading subtitles.

What it does:

 * Easy and straightforward script that scans your TV contents
 * If no SRT found it will attempt to download one by using Subliminal
 * Subliminal will attempt to match the correct version of the subtitle with the file located on the disk
 * Once every day it will do a full rescan of your local content
 * If no dutch version can be found it can (based on a setting) download the english version instead

How to use:

 * Install python
 * Install python cheetah package
 * Install Auto-Subliminal (it will automatically install needed packages)
 * Start the script: " python AutoSub.py "
 * A web browser should now open
 * Go to the config page, check the settings, make sure you set at least:
    * Path: Should point to the location where AutoSub.py is located
    * Rootpath: Should point to the root of your series folder
 * Shutdown AutoSub and start it again

Enjoy your subtitles!
