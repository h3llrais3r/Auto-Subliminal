# BUILD

## Generate virtual environment for development

Run `generate-venv-dev.bat` to create the `dev` virtual environment in the `.env` folder.

This virtual environment should be used within your editor when developing.

It contains all libraries for dev and test tools.

## Generate virtual environment for runtime

Run `generate-venv-runtime.bat` to create the `runtime` virtual environment in the `.env` folder.

This virtual environment should be used to test the application with only the packaged libraries.

## Generate libraries dependency tree

Run `generate-pipdeptree.bat` to generate the `requirements/libraries-pipdeptree.md` file that contains the dependency tree for all packaged libraries.

This should be run every time a package is added/updated.

## Find imported libraries

Run `find-imported-libs.bat` to generate a file `requirements/libraries-pigar.txt` that contains all imported libraries within the application.

This file can be used as a base to keep track of all directly imported libraries in the file `requirements/libraries-imported.md`.

## Install packaged libraries

Run `install-libs.bat` to install all packaged libraries in the `lib` folder.

The script contains the option to force a clean install and to include the dependencies or not.

## Install a single packaged library

Run `pip install -t lib <library>` to install the library from pypi in the `lib` folder.

Run `pip install -t lib git+<github_url>@<branch>#egg=<folder>` to install the library from git in the `lib` folder.

Optionally you can add the following options:

- `--no-deps` -> skip dependencies
- `--no-compile` -> do not compile python files
- `--no-cache-dir` -> do not use pip cache dir but force online check

## Upgrade a single packaged library

Run `pip install -t lib --upgrade <library>` to upgrade the library from pypi in the `lib` folder.
Run `pip freeze --path lib > requirements/libraries.txt` to update the `requirements/libraries.txt` file. Be sure to run it in terminal which has `utf-8` encoding.
Run `generate-pipdeptree.bat` to update the `requirements/libraries-pipdeptree.md` file.

## Packaged libaries

All packaged libraries and their versions are kept in the `requirements/libraries.txt`.

Any new library or version upgrade should be added in this file.

In case we should regenerate the `requirements/libraries.txt` from scratch, we can do this in the `pipdeptree` virtual environment by running the command: `pip freeze --path lib > requirements/libraries.txt`.

## Install a frontend library

Frontend is located in the `web/autosubliminal` folder and is written in angular.

Run `npm install -E <library>` to install a runtime dependency.

Run `npm install -E -D <library>` to install a dev dependency.

## Build frontend

Frontend is located in the `web/autosubliminal` folder and is written in angular.

Run `npm run build` to build the frontend after any frontend change.

This will make sure that the code is build for production and copied to the right location.
