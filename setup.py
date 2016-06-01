#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
from setuptools import setup, find_packages


# requirements
setup_requirements = ['pytest-runner'] if {'pytest', 'test', 'ptr'}.intersection(sys.argv) else []

install_requirements = open('requirements.txt').readlines()

test_requirements = ['pytest'] + open('libraries.txt').readlines()

dev_requirements = []

setup(name='Auto-Subliminal',
      version='2.1.1',
      license='GPL v3',
      description='Auto-Subliminal, the automated subliminal subtitle downloader',
      long_description=open('README.md').read(),
      keywords='subtitle subtitles video movie episode tv show',
      url='https://github.com/h3llrais3r/Auto-Subliminal',
      author='h3llrais3r',
      author_email='pooh_beer_1@hotmail.com',
      packages=find_packages(),
      setup_requires=['pytest-runner'],
      install_requires=install_requirements,
      tests_require=test_requirements,
      extras_require={
          'test': test_requirements,
          'dev': dev_requirements
      })
