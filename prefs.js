var prefs = {
    "showTime": true, // Toggle Time widget
    "showDate": true, // Toggle Date widget
    "showDay": true, // Toggle Day widget
    "showBlock": true, // Toggle Block widget
    "showNextBlock": true, // Toggle Next Block widget
    "showcountBlock": true, // Toggle Count Down until next Block widget
    "showTemp": true, // Toggle Temperature widget
    "showKey": true, // Toggle Key widget
    "timeout":5000, // How long to wait for testPage to return status code
    "testPage":"/test.php?url=", // Page to test if server is up. Page must return status code in plain text
    "checkRate":2000, // How often (in milliseconds) should the servers be checked
    "threshold":2, // How many attempts must fail before updating status
    "slack":{
        "enabled":false, // Whether to send messages to slack
        "webhook":"https://hooks.slack.com/services/WEBHOOKID", // Slack webhook. See "Webhook intergrations" in slack intergrations for more info
        "threshold":3 // How many attempts must fail before alerting Slack
    },
    "servers": [ // List of servers to check
        // {
        // "name":"Example Server", Server name
        // "url":"http://example.com" URL to check. Redirects will show as abnormal NOTE: If using slack, protocols are a requirement
        // },
        {
            "name": "VIP",
            "url": "http://vip.chadserver.tk"
        },
        {
            "name": "VIPV2",
            "url": "http://VIPV2.chadserver.tk"
        },
        {
            "name": "VVUSA1",
            "url": "us1.chad-vpn.ml",
            "alert":false
        },
        {
            "name": "USA5",
            "url": "us5.chad-cloud.tk"
        },
        {
            "name": "USA1",
            "url": "us1.chad-v2ray.ml"
        }
    ],
    "colors":{
        "online":"#0F0", // Online server circle color
        "abnormal":"#F70", // Abnomal color
        "offline":"#F00", // Offline color
        "background": "#0000FF", // Full page background
        "text":"#FFF" // Color of all text
    }
}
