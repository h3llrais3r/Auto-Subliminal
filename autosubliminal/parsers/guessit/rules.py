# coding=utf-8

from typing import Any, Dict

from guessit.rules.common.comparators import marker_sorted
from guessit.rules.common.formatters import cleanup
from guessit.rules.properties.type import TypeProcessor
from rebulk import Rebulk
from rebulk.match import Matches
from rebulk.processors import POST_PROCESS
from rebulk.rules import AppendMatch, RemoveMatch, RenameMatch, Rule


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

    def when(self, matches: Matches, context: Dict[str, Any]):
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
            if parts and not matches.range(
                file_part.start, file_part.end, predicate=lambda match: match.name == 'episode'
            ):
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

    def when(self, matches: Matches, context: Dict[str, Any]):
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
                # Append to title
                title = previous[0]
                title.value = cleanup(title.initiator.raw + ' ' + part.initiator.raw)
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

    def when(self, matches: Matches, context: Dict[str, Any]):
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
                    # Append to title
                    title = previous[0]
                    title.value = cleanup(title.initiator.raw + ' ' + other.initiator.raw)
                    to_remove.extend(others)
                    to_append.append(title)

        return to_remove, to_append


class AppendUsToMovieTitle(Rule):
    """Append 'Us' to the movie title.

    Example:
    guessit -t movie "Werewolf.The.Beast.Among.Us.2012.1080p.BluRay.x264.DTS-FGT.mkv"

    without the rule:
        For: Werewolf.The.Beast.Among.Us.2012.1080p.BluRay.x264.DTS-FGT.mkv
        GuessIt found: {
            "title": "Werewolf The Beast Among",
            "country": "UNITED STATES",
            "year": 2012,
            "screen_size": "1080p",
            "source": "Blu-ray",
            "video_codec": "H.264",
            "audio_codec": "DTS",
            "release_group": "FGT",
            "container": "mkv",
            "type": "movie"
        }

    with the rule:
        For: Werewolf.The.Beast.Among.Us.2012.1080p.BluRay.x264.DTS-FGT.mkv
        GuessIt found: {
            "title": "Werewolf The Beast Among Us",
            "year": 2012,
            "screen_size": "1080p",
            "source": "Blu-ray",
            "video_codec": "H.264",
            "audio_codec": "DTS",
            "release_group": "FGT",
            "container": "mkv",
            "type": "movie"
        }
    """

    priority = POST_PROCESS
    dependency = TypeProcessor  # To guess the type before
    consequence = [RemoveMatch, AppendMatch]

    def when(self, matches: Matches, context: Dict[str, Any]):
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
        countries = matches.named('country')
        if countries:
            country = countries[0]
            if country.initiator.value == 'US':
                previous = matches.previous(country, predicate=lambda match: match.name == 'title')
                if previous:
                    # Append to title
                    title = previous[0]
                    title.value = cleanup(title.initiator.raw + ' ' + country.initiator.raw)
                    to_remove.extend(countries)
                    to_append.append(title)

        return to_remove, to_append


class PrependXxxToMovieTitle(Rule):
    """Prepend 'Xxx' to the movie title.

    Example:
    guessit -t movie "xXx.Return.of.Xander.Cage.2017.1080p.BluRay.H264.AAC-RARBG.mkv"

    without the rule:
        For: xXx.Return.of.Xander.Cage.2017.1080p.BluRay.H264.AAC-RARBG.mkv
        GuessIt found: {
            "other": "XXX",
            "title": "Return of Xander Cage",
            "year": 2017,
            "screen_size": "1080p",
            "source": "Blu-ray",
            "video_codec": "H.264",
            "audio_codec": "AAC",
            "release_group": "RARBG",
            "container": "mkv",
            "type": "movie"
        }

    with the rule:
        For: xXx.Return.of.Xander.Cage.2017.1080p.BluRay.H264.AAC-RARBG.mkv
        GuessIt found: {
            "title": "xXx Return of Xander Cage",
            "year": 2017,
            "screen_size": "1080p",
            "source": "Blu-ray",
            "video_codec": "H.264",
            "audio_codec": "AAC",
            "release_group": "RARBG",
            "container": "mkv",
            "type": "movie"
        }
    """

    priority = POST_PROCESS
    dependency = TypeProcessor  # To guess the type before
    consequence = [RemoveMatch, AppendMatch]

    def when(self, matches: Matches, context: Dict[str, Any]):
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
            if other.initiator.value == 'XXX':
                next = matches.next(other, predicate=lambda match: match.name == 'title')
                if next:
                    # Prepend to title
                    title = next[0]
                    title.value = cleanup(other.initiator.raw + ' ' + title.initiator.raw)
                    to_remove.extend(others)
                    to_append.append(title)

        return to_remove, to_append


class VhsAsMovieTitle(Rule):
    """'VHS' as the movie title.

    Example:
    guessit -t movie "VHS 2012 BluRay 720p DTS x264-CHD.mkv"

    without the rule:
        For: VHS 2012 BluRay 720p DTS x264-CHD.mkv
        GuessIt found: {
            "source": [
                "VHS",
                "Blu-ray"
            ],
            "year": 2012,
            "screen_size": "720p",
            "audio_codec": "DTS",
            "video_codec": "H.264",
            "title": "CHD",
            "container": "mkv",
            "type": "movie"
        }

    with the rule:
        For: VHS 2012 BluRay 720p DTS x264-CHD.mkv
        GuessIt found: {
            "title": "VHS",
            "year": 2012,
            "source": "Blu-ray"
            "screen_size": "720p",
            "audio_codec": "DTS",
            "video_codec": "H.264",
            "release_group": "CHD",
            "container": "mkv",
            "type": "movie"
        }
    """

    priority = POST_PROCESS
    dependency = TypeProcessor  # To guess the type before
    consequence = RenameMatch('title')

    def when(self, matches: Matches, context: Dict[str, Any]):
        """Evaluate the rule.

        :param matches:
        :type matches: rebulk.match.Matches
        :param context:
        :type context: dict
        :return:
        """
        if not matches.named('type', lambda m: m.value == 'movie'):
            return

        sources = matches.named('source')
        if sources:
            title = matches.named('title')
            if not title:
                for source in sources:
                    if source.value == 'VHS' and matches.next(source, predicate=lambda match: match.name == 'year'):
                        return source


def rules() -> Rebulk:
    """Return all our custom rules to be applied to the guessit api.

    IMPORTANT:
    - DO NOT define priority or dependency in each rule. Just define order here.
    - Only allowed dependency is TypeProcessor because we want to apply rules for certain types only
    """
    return Rebulk().rules(
        RenamePartsToEpisodeNumbers,
        AppendPartToMovieTile,
        AppendLineToMovieTitle,
        AppendUsToMovieTitle,
        PrependXxxToMovieTitle,
        VhsAsMovieTitle,
    )
