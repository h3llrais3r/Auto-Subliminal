echo off
echo Installing libraries
echo.
set /p deps=Include dependencies(y/n):
if /I "%deps%"=="y" goto yes_deps
goto no_deps
:yes_deps
set params=--no-deps
goto next
:no_deps
set params=
:next
set /p deps=Force reinstall(y/n):
if /I "%deps%"=="y" goto yes_reinstall
goto no_reinstall
:yes_reinstall
set params=%params% --upgrade
goto install
:no_reinstall
set params=%params%
:install
cd ..
pip install -t lib2 -r requirements/libraries.txt %params%
cd .build