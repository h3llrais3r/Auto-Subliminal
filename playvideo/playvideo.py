# Custom protocol handler script to play a remote video with your default video player from within the application.
# This script should be registered as a custom protocol handler to play a video with the protocol 'playvideo://'.
#
# This script can be used on any remote (or local) machine that has access to your video paths.
# With this script, you will be able to launch the video from within the application with the protocol 'playvideo://'.
#
# When you are running on windows machines:
# - Adapt playvideo.reg (use '\\' instead of '\'):
#   - Change path to your py.ico [HKEY_CLASSES_ROOT\playvideo\DefaultIcon]
#   - Change path to your python installation in [HKEY_CLASSES_ROOT\playvideo\shell\open\command]
#   - Change path to this playvideo script in [HKEY_CLASSES_ROOT\playvideo\shell\open\command]
# - Double click playvideo.reg to install this script in the registry
#
# When you are running on unix machines:
# TODO: check out how to do this on unix machines
#

import os
import sys
import urllib


def main(script, url):
    """
    Main program which replaces the custom protocol 'playvideo://' with the known file protocol 'file://'.
    This will trigger your default video player (if any) to open the video.
    """

    # Url need to be unquoted (because it's triggered from an url) and decoded from utf-8 to cover special characters
    url = urllib.unquote(url).decode('utf-8')

    # Reconstruct url (replace the playvideo:// with the file:// protocol to open the file with the default program)
    url = url.replace('playvideo://', 'file://')

    # Start the file with the default program
    try:
        os.startfile(url)
    except Exception, e:
        print(e)


if __name__ == '__main__':
    main(*sys.argv)