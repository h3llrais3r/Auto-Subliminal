import re
import logging

from autosub import utils
from autosub.common import seperator, source, source_syn, quality, quality_syn, quality_fileext, codec, codec_syn, codec_fileext, releasegrp, releasegrp_syn, releasegrp_fallback, show_regex, episode_regex


log = logging.getLogger(__name__)


def _check_title(title):
    if not title:
        log.error(
            "Invalid title. Auto-Subliminal needs a showtitle in the video file! S01E02.mkv file are not supported...")
        return

    for reg in episode_regex:
        results = re.findall(reg, title)
        if not results:
            return utils.clean_series_name(title)
        log.error("Title containing episode information (info like: S01E02). Title is: %s" % title)


def _return_hit(regex, file_info):
    if not file_info:
        return

    for reg in regex:
        results = re.findall(reg, file_info)
        if results:
            for result in results:
                pos = file_info.find(result.lower())
                if pos != -1:
                    end = pos + len(result)
                    # Make sure our word is always surrounded by separators
                    if ((pos > 0 and file_info[pos - 1] not in seperator) or
                            (end < len(file_info) and file_info[end] not in seperator)):
                        # Note: sep is a regexp, but in this case using it as a sequence achieves the same goal
                        continue
                    result = re.sub("[. _-]", "-", result)
                    return result.lower()


def _return_group(regex, tosearch):
    if not tosearch:
        return {}

    for reg in regex:
        match = re.search(reg, tosearch)
        if match:
            matchdic = match.groupdict()
            return matchdic


def _check_synonyms(synonyms, result):
    if result in synonyms.keys():
        if synonyms[result]:
            return synonyms[result].lower()
    else:
        return result


def _get_source(file_info):
    result = _check_synonyms(source_syn, _return_hit(source, file_info))
    return result


def _get_quality(file_info, fileext):
    result = _check_synonyms(quality_syn, _return_hit(quality, file_info))

    if not result:
        if fileext in quality_fileext.keys():
            result = quality_fileext[fileext]

    if not result:
        result = u'sd'

    return result.lower()


def _get_codec(file_info, fileext):
    result = _check_synonyms(codec_syn,
                             _return_hit(codec, file_info))

    if not result:
        if fileext in codec_fileext.keys():
            result = codec_fileext[fileext]

    return result


def _get_release_group(file_info):
    result = _return_hit(releasegrp, file_info)

    if not result:
        resultdict = _return_group(releasegrp_fallback, file_info)
        if 'releasegrp' in resultdict.keys():
            result = resultdict['releasegrp']
        result = _check_synonyms(releasegrp_syn,
                                 result)

    return result


def _return_scene_number(number):
    if not number:
        return

    number = int(number)
    if number <= 9:
        number = '0' + str(number)
    else:
        number = str(number)
    return unicode(number)


def process_filename(filename, fileext):
    show_info = _return_group(show_regex, filename)
    log.debug("Dumping show_info dict for debug %r" % show_info)
    title = None
    season = None
    episode = None
    file_info = None

    if show_info:
        if 'title' in show_info.keys(): title = _check_title(show_info['title'])
        if 'season' in show_info.keys(): season = _return_scene_number(show_info['season'])
        if 'episode' in show_info.keys(): episode = _return_scene_number(show_info['episode'])
        if 'extra_info' in show_info.keys(): file_info = show_info['extra_info']

        if file_info:
            file_info = file_info.lower()

    source = _get_source(file_info)
    quality = _get_quality(file_info, fileext)
    codec = _get_codec(file_info, fileext)
    releasegrp = _get_release_group(file_info)

    if title and season and episode:
        show_dict = {'title': title, 'season': season, 'episode': episode, 'source': source, 'quality': quality,
                     'codec': codec, 'releasegrp': releasegrp}
        log.debug("Dumping dict for debug %r" % show_dict)
        return show_dict
    else:
        log.error("Could not process %s" % filename)
        return {}
