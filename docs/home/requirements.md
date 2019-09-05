
# Requirements
<div class="avg-reading-time">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}s</div>

In order to use Esper Dev, the following are the minimum requirements covering the various tools available from Esper Dev.

## Web-Based Dev Console Requirements
The Dev Console requires Chrome v57+ for desktop.

## Device Requirements
Targeted Dedicated Devices must run Android version 4.4 KitKat (API Level 19) or above. Alternatively, Esper Development Devices running Esper Enhanced Android can be used; this opens up additional features when using Esper Dev.

Please make sure to whitelist the following URLs and Ports if your devices are behind any firewall with restrictions in placed for inbound and outbound traffic.

### URLs
 - *.s3.amazonaws.com
 - clients3.google.com
 - google.com
 - mqtt.shoonyacloud.com:1883  
 - *.shoonyacloud.com
 - *.esper.cloud
 - 13.52.132.230 -> This will allow secure remote adb access to the devices

### Ports
 -  5228
 -  5229
 -  5230 

## Esper Dev Tools Requirements
To use the Esper Dev Tools you need to have Python installed. Depending on the tool in use, you can install the required Python version for your platform from [python.org](https://www.python.org/)

| Tool       | Python 2.7           | Python 3.6+  |
| ------------- |:-------------:| -----:|
| Esper SDK     | Yes | Yes |
| Esper CLI     |     |   Yes |


#### Esper SDK Language Support
- Python

:::tip
Esper plans to release SDK support for Kotlin, Java, and JavaScript. If you are using a language other than Python and would like to immediately work with the Esper APIs, please consider calling the APIs directly. You can refer to the Esper API documentation [here](./api.md).
:::

#### Supported Development Platforms: 
- Linux
- MacOS
- Windows


If you face any issues setting up your requirements for Esper, please  reach out to Esper Dev [Support](./support.md)

## Next steps
To get started, please see [Getting Started Guide](./gettingstarted.md)\
To know more about Esper, visit [esper.io](https://esper.io)
