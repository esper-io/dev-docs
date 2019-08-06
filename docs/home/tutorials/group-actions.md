---
title: How to automate device action onto Group
lang: en-US
---

# Group Actions

Developers during their deployment and testing phase encounters challenging of managing multiple devices at a time e.g they wanted to take some actions on a group in an automated manner via their application and don't want to manually do the same via our GUI for each device one by one. Following are the few use cases:

1. Reboot the device after every app upgrade or every night at specific time.
2. Increase the brightness of the devices to 100% at 6:00 PM routinely.
3. Lock the device for use during app ugrade etc.


In this tutorial we will use our APIs and Python SDK combined with our Group functionality to perform device deployments systematically and efficiently throughout your entire device fleet.

::: tip
Setup
:::

1. Sign-up free on for the Esper Trial and generate API Key.

2. Install Esper Python SDK from here.

3. Get your endpoint name and enterprise ID.

4. Create group and add devices either via GUI or using DeviceGroupAPI.

5. Download python script esper_group_actions.py from here.

6. Configure python script as per your environment. Below are example values, substitute them with your esper trial values

CONFIG = esperclient.Configuration()
CONFIG.host = 'https://<your-endpoint-name>.shoonyacloud.com/api'
CONFIG.api_key['Authorization'] = '<your-API-Key>'
CONFIG.api_key_prefix['Authorization'] = 'Bearer'
ENTERPRISE_ID = '<your-Enterprise-ID>'

::: tip
Usage
:::

esper_group_actions [-h]
-g GROUP_ID
-c {uninstall, whitelist, brightness, alarm_volume, ring_volume, music_volume, notification_volume, bluetooth, wifi, gps, ping, reboot}
-v VALUE


::: tip
Examples
:::
1. Set the ring volume at 50% for all devices in the Group:
./esper_group_actions -g 83ecfa3c-d2ad-4e76-2cf1-75daff8d7f3d -c ring_volume -v 50

2. Reboot all the devices in a group:
./esper_group_actions -g 83ecfa3c-d2ad-4e76-2cf1-75daff8d7f3d -c reboot
Consider the case where you want to reboot your devices in a group everyday at 1:00 AM, so you can write a cron job in your system running the above command.
e.g. 

``` js{4}
# crontab -e

@daily  ~/esperSDK/esper_group_actions.py -g 83ecfa3c-d2ad-4e76-2cf1-75daff8d7f3d -c reboot
```

