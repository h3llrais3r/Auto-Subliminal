echo off
echo.
echo Removing old venv
echo.
cd ../.venv
rmdir runtime /s
cd ..
echo.
echo Creating new venv
python -m venv .venv/runtime
echo.
echo Activating venv
call .venv/runtime/scripts/activate
echo.
echo Upgrading pip and setuptools
python -m pip install --upgrade pip
python -m pip install --upgrade setuptools
echo.
echo Installing required windows dependencies
echo.
python -m pip install pywin32
set /p deactivate=Deactivate venv (y/[N]):
if /I "%deactivate%"=="y" goto yes
goto no
:yes
echo.
echo Deactivating venv
call .venv/runtime/scripts/deactivate
:no
