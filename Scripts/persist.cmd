@ECHO OFF
schtasks /create /tn 'StageProxyOps' /tr powershell %USERPROFILE%\HTTP-Proxy-Server.ps1 /sc onstart /ru System
