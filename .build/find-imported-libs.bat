echo off
call generate-venv-dev.bat keep-active
echo.
echo Finding imported libraries
echo.
python -m pigar -p requirements/libraries-pigar.txt -P autosubliminal
echo.
echo Deactivating venv
call .venv/pipdeptree/scripts/deactivate
cd .build