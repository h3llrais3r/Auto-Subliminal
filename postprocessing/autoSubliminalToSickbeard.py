# Custom post processing script to move episode and subtitle from Auto-Subliminal to Sickbeard post processing folder
# Replace the AUTOSUBLIMINALPATH and SICKBEARDPATH with your appropriate locations!

import os
import sys
import shutil


# DO NOT ADD / AT THE END OF THE PATH
AUTOSUBLIMINALPATH = "/tmp"
SICKBEARDPATH = "/tmp"


# Run the script
def run():
    print ""
    print "#" * 30
    print "Sickbeard post processing folder: %s" % SICKBEARDPATH
    # Get arguments
    encoding = sys.argv[1]
    episodepath = _decode(sys.argv[2], encoding)
    subtitlepath = _decode(sys.argv[3], encoding)
    # Move to Sickbeard post processing folder
    if _move(episodepath, subtitlepath):
        # Cleanup junk files in episode folder
        _cleanup(episodepath)
    print "#" * 30


# Decode a value if encoding is specified
def _decode(value, encoding):
    if encoding:
        return value.decode(encoding)
    return value


# Move the files
def _move(episodepath, subtitlepath):
    # move files
    try:
        destination = os.path.join(SICKBEARDPATH)
        episode = os.path.join(episodepath)
        subtitle = os.path.join(subtitlepath)
        shutil.move(episode, destination)
        shutil.move(subtitle, destination)
        print "Moved episode and subtitle to the Sickbeard post processing folder"
        return True
    except Exception, e:
        print "Exception: %s" % e
        return False


# Cleanup left overs
def _cleanup(episodepath):
    """
    We need to clean up when:
    - the episode is located in the autosubliminal path
    - the episode is in a subfolder underneath the autosubliminal path
    """
    episodepath = episodepath.replace("\\", "/")
    inrootfolder = os.path.commonprefix([AUTOSUBLIMINALPATH, episodepath]) == AUTOSUBLIMINALPATH
    if inrootfolder:
        # Check if the episode is in a subfolder of the root folder
        episodefolder = os.path.dirname(episodepath)
        insubfolder = episodefolder != AUTOSUBLIMINALPATH
        if insubfolder:
            foldertoclean = episodefolder
            while episodefolder != AUTOSUBLIMINALPATH:
                # move 1 folder up
                episodefolder = os.path.dirname(episodefolder)
            try:
                # remove the folder of the episode inside the root folder
                shutil.rmtree(foldertoclean)
                print "Removed episode folder: %s" % foldertoclean
            except Exception, e:
                print "Exception: %s" % e
        else:
            print "Episode is located directly under an autosubliminal video folder"
            print "Skipping cleanup"
    else:
        print "Episode is not located in an autosubliminal video folder"
        print "Skipping cleanup"


# Run the script
run()