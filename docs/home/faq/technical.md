# Technical

## SAML/SSO

1. Will all my users be required to sign in via SAML SSO (my IdP) when this is set up?

 Yes, once you configure the SAML SSO configuration, all users will be routed to sign-in via your own IdP.

 
2.Can anyone update the SAML SSO configuration in Esper?

 No, only Enterprise Admins are able to enable/disable the SAML SSO configuration.

## API

1.How to find the group id?
    

You can find the Group Id in the URL when inspecting the group settings page of a particular group. To get to the Group Settings page, first visit the "Devices & Groups" page. Find the Group you want the id for then click the grop name.

![How to find groupid](https://lh5.googleusercontent.com/LUONO92MqdMDPo_-2zd7PoLboXxemydIpaEgoGbqECJy6AemuVmVFhNLX_i7_0JeBY4dPs7Ysy_zNDNEVYYtNFaB8xB7GCgZhOvBe1w4tQiAddTY70usBpoD8mwMYYb1oXyVtPOC7dTo42XxXA)

  

2.How do i get the device id?
    

You can find the Group Id in the URL when inspecting the group settings page of a particular group. To get to the Group Settings page, first visit the "Devices & Groups" page. Find the Group you want the id for then click the grop name.

## Device info

1.What is the default font size? Can I increase or decrease it using JSON? Is there any limitation?
    

The default font size is 1. You can use the following JSON code in the template or the Blueprint to customize the font size.

```java
{  
     "settings": {  
     "system": [  
     {  
       "key": "font_scale",  
       "value": "1.15"  
     }  
    ]  
  }  
}
```

1.15 and 0.9 are predefined values that Android uses, but the OS accepts any value from like 0.01 to 1000+

2.Can I export the Mac address?
    

Use the following parameter in the [get device info SDK](http://ing-the-esper-sdk-in-your-application) to fetch the Wifi Mac address for the device.

String  wifiMacAddress = esperDeviceInfo.getWifiMacAddress()

  

Alternatively, you can use our open-source tool that uses our API and allows you to generate a report which contains the Wifi Mac Id and some other fields we display in the device information page. You can find a link to an executable of the tool here: Release Esper API Support Tool v0.191 · esper-io/esper-api-support-tool (github.com) - [https://github.com/esper-io/esper-api-support-tool/releases/tag/0.191](https://github.com/esper-io/esper-api-support-tool/releases/tag/0.191) . You can find some documentation about how to use the tool here: [https://docs.google.com/document/d/1WwDIQ-7CzQscVNFhiErbYtIwMyE34hGxE_MQWBqc9_k/](https://docs.google.com/document/d/1WwDIQ-7CzQscVNFhiErbYtIwMyE34hGxE_MQWBqc9_k/)

  
## JSON settings

1.Can I apply JSON setting at a device level?
    

No JSON settings are applied at a group level. They are a part of the Blueprint/ Provisioning Template.

  

2.Can I enable USB tethering via JSON?
    

The USB configuration in developer settings is not editable via JSON as these settings are hidden under dev settings and during provisioning; we disable it. You can choose from the tethering options available under the Android settings or use the mobile hotspot for wireless connections.

## Device SDK

1.Can I set Wi-Fi credentials via SDK?
    

Currently, you cannot directly set the Wi-Fi credentials. However, follow [step](https://docs.esper.io/home/devicesdk.html#enabling-the-esper-sdk-in-your-application) to get the system settings write access and then enable/disabel Wi-Fi settings.

  

For enabling WiFi:

```java
WifiManager wifi = (WifiManager) getSystemService(Context.WIFI_SERVICE);

wifi.setWifiEnabled(true);
```
  

For disabling Wifi:

```java
WifiManager wifi = (WifiManager) getSystemService(Context.WIFI_SERVICE);

wifi.setWifiEnabled(false);
```

## Reboot

1.Can I schedule a reboot on a device?
    

Currently we do not support the same on the console. But you can use our APIs to schedule the command as you wish.

  

Request URL :

https://<endpoint-name>-api.esper.cloud/api/v0/enterprise/<;enterpriseID>/command/

Request Body:

```java
{  
    "command_type": "GROUP",  
    "groups": [  
    "String"  
     ],  
    "device_type": "active",  
    "command": "REBOOT",  
    "command_args": {  
    },  
    "schedule": "WINDOW",  
    "schedule_args": {  
    "name": "Reboot",  
    "start_datetime": "2020-12-30T12:00:00Z",  
    "end_datetime": "2020-12-31T12:10:00Z",  
    "time_type": "device"  
}  
}
```
