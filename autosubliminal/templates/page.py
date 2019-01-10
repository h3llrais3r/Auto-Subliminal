# coding=utf-8

import os
import time

from mako.lookup import TemplateLookup
from mako.template import Template

import autosubliminal

mako_templates_dir = os.path.abspath(os.path.join(autosubliminal.PATH, 'web/templates'))
mako_cache_dir = os.path.abspath(os.path.join(autosubliminal.CACHEDIR, 'mako'))
mako_lookup = TemplateLookup(directories=[mako_templates_dir], module_directory=mako_cache_dir)


class PageTemplate(Template):
    """
    Mako page template.
    """

    def __init__(self, filename):
        self.lookup = mako_lookup
        self.template = self.lookup.get_template(filename)
        # Default arguments for all pages
        self.arguments = {
            'appPID': autosubliminal.PID,
            'appUUID': autosubliminal.UUID
        }

    def render(self, *args, **kwargs):
        """
        Render the Page template.
        """
        for key in self.arguments:
            if key not in kwargs:
                kwargs[key] = self.arguments[key]
        # Default render arguments (must be set at render time)
        kwargs['makoStartTime'] = time.time()
        # Render unicode by default
        return self.template.render_unicode(*args, **kwargs)
