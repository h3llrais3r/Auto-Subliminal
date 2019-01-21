# coding=utf-8

from guessit.rules.common.comparators import marker_sorted
from guessit.rules.common.formatters import cleanup
from guessit.rules.properties.type import TypeProcessor

from rebulk import Rebulk
from rebulk.processors import POST_PROCESS
from rebulk.rules import AppendMatch, RemoveMatch, RenameMatch, Rule

from autosubliminal.util.encoding import s2n


class RenamePartsToEpisodeNumbers(Rule):
    """Rename parts to episode numbers.

    Example:
    guessit -t episode "Show.Name.Season.1.Part.3.720p.HDTV.x264-Group.mkv"

    without the rule:
        For: Show.Name.Season.1.Part.3.720p.HDTV.x264-Group.mkv
        GuessIt found: {
            "title": "Show Name",
            "season": 1,
            "part": 3,
            "screen_size": "720p",
            "source": "HDTV",
            "video_codec": "H.264",
            "release_group": "Group",
            "container": "mkv",
            "type": "episode"
        }

    with the rule:
        For: Show.Name.Season.1.Part.3.720p.HDTV.x264-Group.mkv
        GuessIt found: {
            "title": "Show Name",
            "season": 1,
            "episode": 3,
            "screen_size": "720p",
            "source": "HDTV",
            "video_codec": "H.264",
            "release_group": "Group",
            "container": "mkv",
            "type": "episode"
        }
    """

    priority = POST_PROCESS
    dependency = TypeProcessor  # To guess the type before
    consequence = RenameMatch('episode')

    def when(self, matches, context):
        """Evaluate the rule.

        :param matches:
        :type matches: rebulk.match.Matches
        :param context:
        :type context: dict
        :return:
        """
        if not matches.named('type', lambda m: m.value == 'episode'):
            return

        to_rename = []
        file_parts = matches.markers.named('path')
        for file_part in marker_sorted(file_parts, matches):
            parts = matches.range(file_part.start, file_part.end, predicate=lambda match: match.name == 'part')
            # Only apply when there's no episode
            if parts and not matches.range(file_part.start, file_part.end,
                                           predicate=lambda match: match.name == 'episode'):
                to_rename.extend(parts)

        return to_rename


class AppendPartToMovieTile(Rule):
    """Append 'Part x' to the movie title.

    Example:
    guessit -t movie "The.Hunger.Games.Mockingjay.Part.2.2015.1080p.BluRay.x264-SPARKS.mkv"

    without the rule:
        For: The.Hunger.Games.Mockingjay.Part.2.2015.1080p.BluRay.x264-SPARKS.mkv
        GuessIt found: {
            "title": "The Hunger Games Mockingjay",
            "part": 2,
            "year": 2015,
            "screen_size": "1080p",
            "source": "Blu-ray",
            "video_codec": "H.264",
            "release_group": "SPARKS",
            "container": "mkv",
            "type": "movie"
        }

    with the rule:
        For: The.Hunger.Games.Mockingjay.Part.2.2015.1080p.BluRay.x264-SPARKS.mkv
        GuessIt found: {
            "title": "The Hunger Games Mockingjay part 2",
            "year": 2015,
            "screen_size": "1080p",
            "source": "Blu-ray",
            "video_codec": "H.264",
            "release_group": "SPARKS",
            "container": "mkv",
            "type": "movie"
        }
    """

    priority = POST_PROCESS
    dependency = TypeProcessor  # To guess the type before
    consequence = [RemoveMatch, AppendMatch]

    def when(self, matches, context):
        """Evaluate the rule.

        :param matches:
        :type matches: rebulk.match.Matches
        :param context:
        :type context: dict
        :return:
        """
        if not matches.named('type', lambda m: m.value == 'movie'):
            return

        to_remove = []
        to_append = []
        parts = matches.named('part')
        if parts:
            part = parts[0]
            previous = matches.previous(part, predicate=lambda match: match.name == 'title')
            if previous:
                # Append part to title
                title = previous[0]
                title.value = cleanup(title.initiator.raw + s2n(' ') + part.initiator.raw)
                to_remove.extend(parts)
                to_append.append(title)

        return to_remove, to_append


class AppendLineToMovieTitle(Rule):
    """Append 'Line' to the movie title.

    Example:
    guessit -t movie "The.Thin.Red.Line.1998.1080p.BluRay.H264.AAC-RARBG.mkv"

    without the rule:
        For: The.Thin.Red.Line.1998.1080p.BluRay.H264.AAC-RARBG.mkv
        GuessIt found: {
            "title": "The Thin Red",
            "other": "Line Audio",
            "year": 1998,
            "screen_size": "1080p",
            "source": "Blu-ray",
            "video_codec": "H.264",
            "audio_codec": "AAC",
            "release_group": "SPARKS",
            "container": "mkv",
            "type": "movie"
        }

    with the rule:
        For: The.Thin.Red.Line.1998.1080p.BluRay.H264.AAC-RARBG.mkv
        GuessIt found: {
            "title": "The Thin Red Line",
            "year": 1998,
            "screen_size": "1080p",
            "source": "Blu-ray",
            "video_codec": "H.264",
            "audio_codec": "AAC",
            "release_group": "SPARKS",
            "container": "mkv",
            "type": "movie"
        }
    """

    priority = POST_PROCESS
    dependency = TypeProcessor  # To guess the type before
    consequence = [RemoveMatch, AppendMatch]

    def when(self, matches, context):
        """Evaluate the rule.

        :param matches:
        :type matches: rebulk.match.Matches
        :param context:
        :type context: dict
        :return:
        """
        if not matches.named('type', lambda m: m.value == 'movie'):
            return

        to_remove = []
        to_append = []
        others = matches.named('other')
        if others:
            other = others[0]
            if other.initiator.value == 'Line Audio':
                previous = matches.previous(other, predicate=lambda match: match.name == 'title')
                if previous:
                    # Append part to title
                    title = previous[0]
                    title.value = cleanup(title.initiator.raw + s2n(' ') + other.initiator.raw)
                    to_remove.extend(others)
                    to_append.append(title)

        return to_remove, to_append


def rules():
    """Return all our custom rules to be applied to the guessit api.

    IMPORTANT:
    - DO NOT define priority or dependency in each rule. Just define order here.
    - Only allowed dependency is TypeProcessor because we want to apply rules for certain types only
    """
    return Rebulk().rules(RenamePartsToEpisodeNumbers, AppendPartToMovieTile, AppendLineToMovieTitle)
