echo off
echo Removing old venv
echo.
cd ../.venv
rmdir dev /s
cd ..
echo Creating new venv
echo.
python -m venv .venv/dev
echo Activating venv
echo.
call .venv/dev/scripts/activate
echo Installing dev dependencies
echo.
python -m pip install -r requirements-dev.txt
echo Finding imported libraries
echo.
python -m pigar -p requirements/libraries-pigar.txt -P autosubliminal
cd .build