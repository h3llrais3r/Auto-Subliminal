#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import sys
from setuptools import setup, find_packages


# integrated libraries - add them to the system path (needed for running tests)
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'lib')))

# requirements
setup_requirements = ['pytest-runner'] if {'pytest', 'test', 'ptr'}.intersection(sys.argv) else []

install_requirements = open('requirements.txt').readlines()

test_requirements = ['pytest', 'pytest-pep8', 'pytest-flakes']

dev_requirements = []

# setup
setup(name='Auto-Subliminal',
      version='2.2.1',
      license='GPL v3',
      description='Auto-Subliminal, the automated subliminal subtitle downloader',
      long_description=open('README.md').read(),
      keywords='subtitle subtitles video movie episode tv show',
      url='https://github.com/h3llrais3r/Auto-Subliminal',
      author='h3llrais3r',
      author_email='pooh_beer_1@hotmail.com',
      packages=find_packages(),
      setup_requires=setup_requirements,
      install_requires=install_requirements,
      tests_require=test_requirements,
      extras_require={
          'test': test_requirements,
          'dev': dev_requirements
      })
