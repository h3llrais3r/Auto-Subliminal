echo off
echo.
echo Removing old venv
echo.
cd ../.venv
rmdir dev /s
cd ..
echo.
echo Creating new venv
python -m venv .venv/dev
echo.
echo Activating venv
call .venv/dev/scripts/activate
echo.
echo Upgrading pip and setuptools
python -m pip install --upgrade pip
python -m pip install --upgrade setuptools
echo.
echo Installing dev dependencies
echo.
python -m pip install -r requirements-dev.txt
rem if "keep-active" is passed as argument, bypass the deactivate check
if "%1%"=="keep-active" goto no
set /p deactivate=Deactivate venv (y/[N]):
if /I "%deactivate%"=="y" goto yes
goto no
:yes
echo.
echo Deactivating venv
call .venv/dev/scripts/deactivate
:no
