---
title: How to automate device action onto Group
lang: en-US
---

# Overview

Developers during their deployment and testing phase encounters challenges of managing multiple devices at a time. Few examples:

- Reboot devices in a group in an automated manner via their application code and do not want to use our GUI dashboard.
- Increase the brightness of the devices to 100% at 6:00 PM everyday.
- Lock the device for use during app ugrade etc.


In this tutorial we will use our APIs and Python SDK combined with our Group functionality to perform device deployments systematically and efficiently throughout your entire device fleet. We will be using an example of rebooting devices in a group but same can be easily extend to other device to group actions.

# Setup

1. [Sign-up free](https://esper.io/signup/) on for the Esper Trial and generate API Key.

2. Install Esper Python SDK from [here](https://docs.esper.io/home/pythonsdk.html).

3. Save your ```endpoint name``` and ```enterprise ID```.

4. Create group and add devices either via GUI or using [DeviceGroupAPI](https://api.esper.io/#tag/Device-Group).

5. Download python script esper_group_actions.py from [here](https://github.com/esper-io/esper-api-sample-code).

6. Configure python script as per your environment. Below are example values, substitute them with your esper trial configurations.

``` js{4}
CONFIG = esperclient.Configuration()
CONFIG.host = 'https://<your-endpoint-name>.shoonyacloud.com/api'
CONFIG.api_key['Authorization'] = '<your-API-Key>'
CONFIG.api_key_prefix['Authorization'] = 'Bearer'
ENTERPRISE_ID = '<your-Enterprise-ID>'
```

# Usage

``` js{4}
esper_group_actions
 -g GROUP_ID
 -c {uninstall, whitelist, brightness, alarm_volume, ring_volume, music_volume, notification_volume, bluetooth, wifi, gps, ping, reboot}
 -v VALUE
```

# Examples
- Reboot all the devices in a group now

``` js{4}
./esper_group_actions -g 83ecfa3c-d2ad-4e76-2cf1-75daff8d7f3d -c reboot
```

- Reboot all devices in a group everyday at midnight. Write a cron job in your system running the above command.

``` js{4}
# crontab -e
@daily  ~/esperSDK/esper_group_actions.py -g 83ecfa3c-d2ad-4e76-2cf1-75daff8d7f3d -c reboot
```

