# coding=utf-8

from guessit.api import default_api

from autosubliminal.parsers.guessit.rules import rules

# Add our custom rules to the default guessit api
default_api.configure({})
default_api.rebulk.rebulk(rules())
