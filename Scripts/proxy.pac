<script type="application/x-ns-proxy-autoconfig">

//#____   ____             __
//#\   \ /   /____   _____/  |_  ___________
//# \   Y   // __ \_/ ___\   __\/  _ \_  __ \
//#  \     /\  ___/\  \___|  | (  <_> )  | \/
//#   \___/  \___  >\___  >__|  \____/|__|
//#              \/     \/
//#--Licensed under GNU GPL 3
//#----Authored by Vector/NullArray
//###############################################

// Declare vars
var normal = "DIRECT";
var torsocks = "PROXY 127.0.0.1:9050"
var blackhole = "PROXY 127.0.0.1:55555"; 

function FindProxyForURL(url, host) {
   
    if (dnsResolve(host) || shExpMatch(host, '*.local')
|| isInNet(dnsResolve(host), '10.0.0.0', '255.0.0.0')
|| isInNet(dnsResolve(host), '172.16.0.0',  '255.240.0.0')
|| isInNet(dnsResolve(host), '192.168.0.0',  '255.255.0.0')
|| isInNet(dnsResolve(host), '127.0.0.0', '255.255.255.0')) {
    return normal;
}

    if (shExpMatch((url, "*oca.telemetry.microsoft.com*")
|| shExpMatch(url, "*telecommand.telemetry.microsoft.com*")
|| shExpMatch(url, "*oca.telemetry.microsoft.com.nsatc.net*")
|| shExpMatch(url, "*a-0001.a-msedge.net*")
|| shExpMatch(url, "*a-0002.a-msedge.net*")
|| shExpMatch(url, "*a-0003.a-msedge.net*")
|| shExpMatch(url, "*a-0004.a-msedge.net*")
|| shExpMatch(url, "*a-0004.a-msedge.net*")
|| shExpMatch(url, "*a-0005.a-msedge.net*")
|| shExpMatch(url, "*a-0006.a-msedge.net*")
|| shExpMatch(url, "*a-0006.a-msedge.net*")
|| shExpMatch(url, "*a-0007.a-msedge.net*")
|| shExpMatch(url, "*a-0008.a-msedge.net*")
|| shExpMatch(url, "*a-0009.a-msedge.net*")
|| shExpMatch(url, "*i1.services.social.microsoft.com")
|| shExpMatch(url, "*telecommand.telemetry.microsoft.com.nsatc.net*")
|| shExpMatch(url, "*sqm.df.telemetry.microsoft.com*")
|| shExpMatch(url, "telemetry.appex.bing.net*")
|| shExpMatch(url, "*settings-sandbox.data.microsoft.com*")
|| shExpMatch(url, "*pre.footprintpredict.com")
|| shExpMatch(url, "*aidps.atdmt.com*")
|| shExpMatch(url, "*aka-cdn-ns.adtech.de*")
|| shExpMatch(url, "*a-msedge.net*")
|| shExpMatch(url, "*b.rad.msn.com*")
|| shExpMatch(url, "*az361816.vo.msecnd.net*")
|| shExpMatch(url, "*b.ads1.msn.com*")
|| shExpMatch(url, "*b.ads2.msads.net*")
|| shExpMatch(url, "*watson.telemetry.microsoft.com*")
|| shExpMatch(url, "*wes.df.telemetry.microsoft.com*")
|| shExpMatch(url, "*bs.serving-sys.com*")
|| shExpMatch(url, "*redir.metaservices.microsoft.com*")
|| shExpMatch(url, "*reports.wes.df.telemetry.microsoft.com*")
|| shExpMatch(url, "*cs1.wpc.v0cdn.net*")
|| shExpMatch(url, "*corpext.msitadfs.glbdns2.microsoft.comt*")
|| shExpMatch(url, "*df.telemetry.microsoft.com*")
|| shExpMatch(url, "*services.wes.df.telemetry.microsoft.com*")
|| shExpMatch(url, "*watson.telemetry.microsoft.com.nsatc.net*")
|| shExpMatch(url, "*sqm.telemetry.microsoft.com*")
|| shExpMatch(url, "*sqm.telemetry.microsoft.com.nsatc.net*")
|| shExpMatch(url, "*watson.ppe.telemetry.microsoft.com*")
|| shExpMatch(url, "*telemetry.microsoft.com*")
|| shExpMatch(url, "*telemetry.urs.microsoft.com*")
|| shExpMatch(url, "*survey.watson.microsoft.com*")
|| shExpMatch(url, "*watson.live.com*")
|| shExpMatch(url, "*vortex-sandbox.data.microsoft.com*")
|| shExpMatch(url, "*settings-win.data.microsoft.com*")
|| shExpMatch(url, "*watson.microsoft.com*")
|| shExpMatch(url, "*db3aqu.atdmt.com*")
|| shExpMatch(url, "*diagnostics.support.microsoft.com*")
|| shExpMatch(url, "*statsfe2.update.microsoft.com.akadns.net*")
|| shExpMatch(url, "*fe2.update.microsoft.com.akadns.net*")
|| shExpMatch(url, "*schemas.microsoft.akadns.net*")
|| shExpMatch(url, "*feedback.microsoft-hohm.com*")
|| shExpMatch(url, "*feedback.search.microsoft.com*")
|| shExpMatch(url, "*statsfe1.ws.microsoft.com*")
|| shExpMatch(url, "*statsfe1.ws.microsoft.com*")
|| shExpMatch(url, "*c.atdmt.com*")) {
// More to be added, maybe check against
// _dnsDomainIs as well
    return blackhole;
   
    } else {
    return torsocks;
    }
}
</script>
