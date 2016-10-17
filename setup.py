#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import setup, find_packages


setup(name='Auto-Subliminal',
    version='2.1.2',
    license='GPL v3',
    description='Auto-Subliminal, the automated subliminal subtitle downloader',
    long_description=open('README.md').read(),
    keywords='subtitle subtitles video movie episode tv show',
    url='https://github.com/h3llrais3r/Auto-Subliminal',
    author='h3llrais3r',
    author_email='pooh_beer_1@hotmail.com',
    packages=find_packages(),
    install_requires=open('requirements.txt').readlines())
