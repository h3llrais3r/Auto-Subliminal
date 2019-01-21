# coding=utf-8

from guessit.rules.common.comparators import marker_sorted
from guessit.rules.common.formatters import cleanup
from guessit.rules.properties.type import TypeProcessor

from rebulk import Rebulk
from rebulk.match import Match
from rebulk.processors import POST_PROCESS
from rebulk.rules import AppendMatch, RemoveMatch, RenameMatch, Rule

from autosubliminal.util.encoding import s2n


class PartsAsEpisodeNumbers(Rule):
    """Treat parts as episode numbers.

    Example:
    guessit -t episode "Show.Name.Part.3.720p.HDTV.x264-Group.mkv"

    without the rule:
        For: Show.Name.Part.3.720p.HDTV.x264-Group.mkv
        GuessIt found: {
            "title": "Show Name",
            "part": 3,
            "screen_size": "720p",
            "source": "HDTV",
            "video_codec": "H.264",
            "release_group": "Group",
            "container": "mkv",
            "type": "episode"
        }

    with the rule:
        For: Show.Name.Part.3.720p.HDTV.x264-Group.mkv
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
    consequence = RenameMatch('episode'), AppendMatch

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
        to_append = None
        file_parts = matches.markers.named('path')
        for file_part in marker_sorted(file_parts, matches):
            parts = matches.range(file_part.start, file_part.end, predicate=lambda match: match.name == 'part')
            # Only apply when there's no season and no episode and assume it's season 1
            if parts and not matches.range(file_part.start, file_part.end,
                                           predicate=lambda match: match.name in ('season', 'episode', 'date')):
                to_rename.extend(parts)
                to_append = Match(-1, -1, value=1, name='season')

        return to_rename, to_append


class PartAsMovieTile(Rule):
    """Treat part as title for movies.

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

        to_remove = None
        to_append = None
        parts = matches.named('part')
        if parts:
            part = parts[0]
            previous = matches.previous(part, predicate=lambda match: match.name == 'title')
            if previous:
                # Append part to title
                title = previous[0]
                title.value = cleanup(title.initiator.value + s2n(' ') + part.initiator.value)
                to_remove = part
                to_append = title

        return to_remove, to_append


def rules():
    """Return all our custom rules to be applied to the guessit api.

    IMPORTANT:
    - DO NOT define priority or dependency in each rule. Just define order here.
    - Only allowed dependency is TypeProcessor because we want to apply rules for certain types only
    """
    return Rebulk().rules(PartsAsEpisodeNumbers, PartAsMovieTile)
