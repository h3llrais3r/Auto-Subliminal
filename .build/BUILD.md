# BUILD

## Install development tools

Install `poetry` (check `pyproject.toml` for minminal required version) for python backend development globally on your system.

Install `nodejs` (check `package.json` for minimal required version) for nodejs/angular frontend development globally on your system.

## Python backend development

### Install python dependencies

Run `poetry install` in the root of the project.

This will create a virtual environment `.venv` in the root of the project with all runtime and dev dependencies.

### Install/upgrade python dependencies

Run `poetry add <package>@<version>` to add/update a fixed version of a runtime dependency

Run `poetry add <package>@<version> --dev` to add/update a fixed version of a dev dependency

We always use fixed versions!

### Generate python dependency files

Run `generate-requirements.sh` to generate all python dependency files:
* `requirements.txt` - contains all runtime dependencies
* `.build/generated/requirements.md` - contains all runtime dependencies
* `.build/generated/requirements-deptree.md` - contains dependency tree for all runtime dependencies
* `.build/generated/requirements-imported.md` - contains all top level (imported) runtime dependencies

This should be run every time a package is added/updated.

## Nodejs/angular frontend development

REMARK: Frontend located inside `web/autosubliminal` folder.

### Install nodejs dependencies

Run `npm install` in the `web/autosubliminal` folder of the project.

This will create a `node_modules` folder inside `web/autosubliminal` folder and install all runtime and dev dependencies.

### Install/upgrade frontend dependencies

Run `npm install -E <package>@<version>` to install a fixed version of a runtime dependency.

Run `npm install -E -D <package>@<version>` to install a fixed version of a dev dependency.

You can omit the `@<version>` if you want to install the latest version.

### Build frontend

Run `npm run build` to build the frontend after any frontend change.

This will make sure that the code is build for production and copied to the right location.
