# Technical

## API

-   Where can I find the Group ID?
    

You can find the Group ID in the URL when inspecting the Group settings page of a particular Group. To get to the Group settings page, visit the "Devices & Groups" page. Find the Group you want the ID for, then click the Group name.

  

![group id](https://lh4.googleusercontent.com/tjOv67g_dox5pac9kN7FoCrZhgMCDE9rJTDNJRuHK85zEbSU6-dy3UK15FkJ6HPmYFFaFBvSaYKiCibAkKVb-U6CQZLlFWKxyl4PH-uFxNRyd6QoMbZ2wk6OvCJ0KKbWWQlA3QauiOZ7qXJeGrwsug)

  

-   Where do I find the Device ID?
    

You can find the Device ID in the URL when inspecting the Device settings page of a particular device. To get to the Device settings page, visit the "Devices & Groups" page. Find the device you want the ID for, then click the Device name.

  

![device id](https://lh3.googleusercontent.com/FFa_yL6KUW34ltgTu77zPT8yGEdd-Tgb8oCb7aGJoZpj10qtqmljN_ibMCpBw5s7Klmnx5oteQR3ck5NjTDDJAJFM977JnuxLy3aG3MJgp03HyLGh-jd4hgsfpXPk4hS16ceA0bJDI9s1slOjqcfmQ)

## Device info

-   What is the default device font size? Can I increase or decrease it using JSON?
    

The default font size is 1. You can use the following JSON code in the Template or the Blueprint to customize the font size.

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
  

1.15 and 0.9 are predefined values that Android uses, but the OS accepts any value from 0.01 to 1000+

  

-   Can I export the MAC address?
    

Use the following parameter in the [get device info SDK](http://ing-the-esper-sdk-in-your-application) to fetch the Wi-Fi MAC address for the device.

String  wifiMacAddress = esperDeviceInfo.getWifiMacAddress()

  

Alternatively, you can use Esper’s open-source tool to generate a report containing the Wi-Fi MAC ID and some other fields found on the Device information page. You can find a link to an executable of the tool here: [Esper API Support Tool](https://github.com/esper-io/esper-api-support-tool/releases). You can find the user manual of the tool [here](https://docs.google.com/document/d/1WwDIQ-7CzQscVNFhiErbYtIwMyE34hGxE_MQWBqc9_k/).

## JSON settings

-   Can I apply JSON settings at a Device level?
    

Nope, JSON settings are applied at a Group level. Via the Console, they are a part of the Blueprint/Provisioning Template. However, you can use our API to apply JSON settings to the device.

```java
{  
   "command_type": "DEVICE",  
   "command": "UPDATE_DEVICE_CONFIG",  
   "command_args": {  
   "custom_settings_config": {  
   "dpcParams": [  
      {  
        JSON key-value pair  
      }  
     ]  
    }  
  },  
"devices": [  
"Device ID"  
],  
"device_type": "all"  
}
```
  

-   Can I enable USB tethering via JSON?
    

The USB configuration is not editable via JSON as these settings are hidden under developer settings. During provisioning, we disable it. You can choose from the tethering options available under the Android settings or use the mobile hotspot for wireless connections.

## Device SDK

-   Can I set Wi-Fi credentials via SDK?
    

Currently, you cannot directly set the Wi-Fi credentials. However, follow these [steps](https://docs.esper.io/home/devicesdk.html#enabling-the-esper-sdk-in-your-application) to get the ‘write’ access and enable/disable Wi-Fi settings.

  

For enabling Wi-Fi:

```java
WifiManager wifi = (WifiManager) getSystemService(Context.WIFI_SERVICE);  
wifi.setWifiEnabled(true);
```
  

For disabling Wi-Fi:

```java
WifiManager wifi = (WifiManager) getSystemService(Context.WIFI_SERVICE);  
wifi.setWifiEnabled(false);
```
  

## Reboot

-   Can I schedule a reboot on a device?
    

Currently, we do not support this functionality on the Console. However,you can use our APIs to schedule the command. You can find a scheduled reboot code sample [here](https://github.com/esper-io/dev-docs/blob/develop/docs/home/code-samples/Scheduled_Reboot_Video_Demo.py).

  

Request URL :

https<nolink>://{endpoint-name}-api.esper.cloud/api/v0/enterprise/{enterpriseID}/command/

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
