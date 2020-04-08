@ECHO OFF
SETLOCAL

REM #-KILL IT WITH FIRE-#

echo Uninstalling updates relevant to telemetry ops
echo Delete KB2902907 (Microsoft Security Essentials)
start "title" /b /wait wusa.exe /kb:2902907 /uninstall /quiet /norestart

echo Delete KB3022345 (telemetry)
start "title" /b /wait wusa.exe /kb:3022345 /uninstall /quiet /norestart

echo Delete KB3068708 (telemetry)
start "title" /b /wait wusa.exe /kb:3068708 /uninstall /quiet /norestart

echo Delete KB3080149 (Telemetry)
start "title" /b /wait wusa.exe /kb:3080149 /uninstall /quiet /norestart
