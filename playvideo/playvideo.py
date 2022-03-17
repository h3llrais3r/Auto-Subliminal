# coding=utf-8

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

import logging
import os
import sys
from urllib.parse import unquote

LOG_FILE = os.path.dirname(os.path.realpath(__file__)) + '/playvideo.log'

logging.basicConfig(filename=LOG_FILE, format='%(asctime)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger('playvideo')


def main(script, url):
    """
    Main program which replaces the custom protocol 'playvideo://' with the known file protocol 'file://'.
    This will trigger your default video player (if any) to open the video.
    """

    # Url needs to be unquoted (because it's triggered from an url)
    url = unquote(url)

    # Reconstruct url (replace the playvideo:// with the file:// protocol to open the file with the default program)
    url = url.replace('playvideo://', 'file://')

    # Start the file with the default program
    try:
        logger.info('Playing video: %s' % url)
        os.startfile(url)
    except Exception as e:
        logger.error(e)
        print(e)


if __name__ == '__main__':
    main(*sys.argv)
