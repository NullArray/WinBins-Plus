#____   ____             __
#\   \ /   /____   _____/  |_  ___________
# \   Y   // __ \_/ ___\   __\/  _ \_  __ \
# \     /\  ___/\  \___|  | (  <_> )  | \/
#   \___/  \___  >\___  >__|  \____/|__|
#              \/     \/
#--Licensed under GNU GPL 3
#----Authored by Vector/NullArray
#
# Do't forget to run this as well.
# https://dist.torproject.org/torbrowser/9.0.4/tor-win64-0.4.2.5.zip
################################################


# PowerShell RegEdit and HTTP Server
$registryPath = "HKLM\SOFTWARE\Policies\Microsoft\Windows\CurrentVersion\Internet Settings\"

$Name = "EnableLegacyAutoProxyFeatures"

$value = "1"

# Check to see if an entry exists and set value
# If it doesn't create the appropriate subkey
if(!(Test-Path $registryPath)) {
    New-Item -Path $registryPath -Force | Out-Null
    New-ItemProperty -Path $registryPath -Name $name -Value $value `

    -PropertyType DWORD -Force | Out-Null
    }

else {
    New-ItemProperty -Path $registryPath -Name $name -Value $value `
    -PropertyType DWORD -Force | Out-Null
    }

# Http Server
$http = [System.Net.HttpListener]::new()

# Listen at 8080
$http.Prefixes.Add("http://localhost:8080/")

# Start the Http Server
$http.Start()


# Confirm
if ($http.IsListening) {
    write-host " HTTP Server Listening " -f 'gre'
    write-host " Please direct Windows Auto Proxy Config to http://127.0.0.1/:8080 " -f 'gre'
    }


# Server Loop
while ($http.IsListening) {

    $context = $http.GetContext()

    if ($context.Request.HttpMethod -eq 'GET' -and $context.Request.RawUrl -eq '/') {

        # Log to terminal
        write-host "$($context.Request.UserHostAddress)  =>  $($context.Request.Url)" -f 'gre'

# Get proxy.pac data
        [string]$data = Get-Content "C:\some\path\proxy.pac" -Raw
       
        # Field the request
        $buffer = [System.Text.Encoding]::UTF8.GetBytes($data)
        $context.Response.ContentLength64 = $buffer.Length
        $context.Response.OutputStream.Write($buffer, 0, $buffer.Length) # Data stream
        $context.Response.OutputStream.Close() # Close
   
    }
