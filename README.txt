README

Thank you for choosing AutoSub! The automated python subtitle downloader for Bierdopje.com.

Many thanks for the administrators of Bierdopje.com to expose and facilitate the API's and 
RSS feeds so that we lazy users can enjoy automated scripts like this.

Easy and straightforward script that scans your TV contents. 
If no SRT found it will attempt to download one from Bierdopje.com. 
Where the script will attempt to match the correct version of the subtitle with the file located on the disk. 
If not found it will monitor the Bierdopje RSS feeds for a new release. 
Once every day it will do a full rescan of your local content versus the Bierdopje API.

If no dutch version can be found it can (based on a setting) download the english version instead.

To use:

Windows
 * Downloads the script from our download page, make sure you download the windows version
 * Unpack the zip
 * Click AutoSub.exe, a webbrowser should now open
 * Go to the config page, check the settings, make sure you set atleast: path 
   (Should point to the location where AutoSub.py is located. Rootpath (Should point to the root of your series folder)
 * Shutdown AutoSub and start it again
Enjoy your subtitles!

Ubuntu
Make sure you have python installed. Also you need the python-cheetah package:
 * sudo apt-get install python-cheetah
 * Download the zip file from our download section
 * Unzip the file, change to the directory where AutoSub.py is located
 * Start the script: " python AutoSub.py "
 * A webbrowser should now open
 * Go to the config page, check the settings, make sure you set atleast: path 
(Should point to the location where AutoSub.py is located. Rootpath (Should point to the root of your series folder)
 * Shutdown AutoSub and start it again
Enjoy your subtitles!