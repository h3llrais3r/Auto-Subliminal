echo off
echo.
echo Deactivating venv %1
cd ..
call .venv/%1/scripts/deactivate
echo.
