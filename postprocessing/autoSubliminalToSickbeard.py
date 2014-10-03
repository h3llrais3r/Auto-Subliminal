# Custom Auto-Subliminal post processing script.
# It moves an episode and its subtitle from Auto-Subliminal to the Sick-Beard post processing folder.
# CONFIGURATION: changes the values of AUTOSUBLIMINAL_PATH and SICKBEARD_PATH to your paths.

# Auto-Subliminal parameters passed to the script at startup:
# %1 - encoding
# %2 - episode path
# %3 - subtitle path


import os
import sys
import shutil

# Paths
AUTOSUBLIMINAL_PATH = "/tmp"
SICKBEARD_PATH = "/tmp"

# Normalized paths (path and case) because paths are compaired when executing cleanup
NORM_AUTOSUBLIMINAL_PATH = os.path.normcase(os.path.normpath(AUTOSUBLIMINAL_PATH))
NORM_SICKBEARD_PATH = os.path.normcase(os.path.normpath(SICKBEARD_PATH))


def run():
    print ""
    print "#" * 30
    print "Sickbeard post processing folder: %s" % NORM_SICKBEARD_PATH

    # Read parameters
    encoding = sys.argv[1]
    episode_path = _decode(sys.argv[2], encoding)
    subtitle_path = _decode(sys.argv[3], encoding)

    # Print parameters
    print "encoding: " + encoding
    print "episode path: " + episode_path
    print "subtitle path: " + subtitle_path

    # Move
    if _move(episode_path, subtitle_path):
        # Cleanup
        _cleanup(episode_path)

    print "#" * 30


def _decode(value, encoding):
    # Decode a value if encoding is specified
    if encoding:
        return value.decode(encoding)
    return value


def _move(episode_path, subtitle_path):
    try:
        destination = os.path.join(NORM_SICKBEARD_PATH)
        episode = os.path.join(episode_path)
        subtitle = os.path.join(subtitle_path)
        shutil.move(episode, destination)
        shutil.move(subtitle, destination)
        print "Moved episode and subtitle to the Sickbeard post processing folder"
        return True
    except Exception, e:
        print "Exception: %s" % e
        return False


def _cleanup(episode_path):
    """
    Cleanup leftovers.
    We need to clean up when:
    - the episode is located in the autosubliminal path
    - the episode is in a subfolder underneath the autosubliminal path
    """
    norm_episode_path = os.path.normcase(os.path.normpath(episode_path))
    in_root_folder = os.path.commonprefix([NORM_AUTOSUBLIMINAL_PATH, norm_episode_path]) == NORM_AUTOSUBLIMINAL_PATH
    if in_root_folder:
        # Check if the episode is in a subfolder of the root folder
        episode_folder = os.path.dirname(norm_episode_path)
        in_sub_folder = episode_folder != NORM_AUTOSUBLIMINAL_PATH
        if in_sub_folder:
            folder_to_clean = episode_folder
            while episode_folder != NORM_AUTOSUBLIMINAL_PATH:
                # Move 1 folder up
                episode_folder = os.path.dirname(episode_folder)
            try:
                # Remove the folder of the episode inside the root folder
                shutil.rmtree(folder_to_clean)
                print "Removed episode folder: %s" % folder_to_clean
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