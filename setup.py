# coding=utf-8

import io
import os
import re
import site
import sys

from setuptools import find_packages, setup

# Integrated libraries - add them to the system path (needed for running tests)
# Include libraries at position 1 because position 0 must remain the current directory)
sys.path, remainder = sys.path[:1], sys.path[1:]

# Insert common libs for all python versions
site.addsitedir(os.path.abspath(os.path.join(os.path.dirname(__file__), 'lib')))

# Add remainder of the system path
sys.path.extend(remainder)

# Root path
root_path = os.path.abspath(os.path.dirname(__file__))

# Version (version must be compliant with version.StrictVersion of distutils)
with io.open(os.path.join(root_path, 'autosubliminal', 'version.py'), 'r') as f:
    version = re.search(r'^RELEASE_VERSION\s*=\s*[\'\"]((\d+)\.(\d+)(\.(\d+))?([ab](\d+))?)[\'\"]$', f.read(),
                        flags=re.MULTILINE).group(1)

# Readme
with io.open(os.path.join(root_path, 'README.md'), encoding='utf-8') as f:
    readme = f.read()

# Requirements
setup_requirements = ['pytest-runner'] if {'pytest', 'test', 'ptr'}.intersection(sys.argv) else []

install_requirements = []

test_requirements = ['pytest', 'pytest-mock', 'pytest-flake8', 'requests-mock', 'vcrpy']

dev_requirements = ['autopep8', 'flake8', 'isort', 'pigar']

# Setup
setup(name='Auto-Subliminal',
      version=version,
      license='GPL v3',
      description='Auto-Subliminal, the automated subliminal subtitle downloader',
      long_description=readme,
      keywords='subtitle subtitles video movie episode tv show',
      url='https://github.com/h3llrais3r/Auto-Subliminal',
      author='h3llrais3r',
      author_email='pooh_beer_1@hotmail.com',
      classifiers=[
          'Development Status :: 5 - Production/Stable',
          'License :: OSI Approved :: GNU General Public License v3 (GPLv3)',
          'Operating System :: OS Independent',
          'Programming Language :: Python :: 3.6',
          'Programming Language :: Python :: 3.7',
          'Programming Language :: Python :: 3.8'
          'Topic :: Multimedia :: Video'
      ],
      packages=find_packages(),
      setup_requires=setup_requirements,
      install_requires=install_requirements,
      tests_require=test_requirements,
      extras_require={
          'test': test_requirements,
          'dev': dev_requirements
      })
