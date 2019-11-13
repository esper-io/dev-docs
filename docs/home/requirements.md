# Requirements

<div class="avg-reading-time">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}s</div>

Following sections talk about the minimum requirements for using various parts of Esper.

## Web-Based Console (\*.esper.cloud)

The Console requires [Chrome](https://www.google.com/chrome) v57 or above. At present, viewing the console on mobile devices is not supported.

## Dedicated Android Devices

Targeted Dedicated Devices must run Android version 4.4 KitKat (API Level 19) or above. However, we recommend that devices running Android version 7.0 Nougat (API Level 24) or above be used with Esper.

Esper Development Devices running Esper Enhanced Android will always be supported be used. Such devices open up additional features for developers, when using Esper.

## Infrastructure

Dedicated devices are often behind corporate firewalls, preventing Esper backend to communicate with them (or vice-versa). Please make sure to whitelist the following URLs and Ports, in case your fleet is running behind such a firewall.

### URLs

* \*.s3.amazonaws.com
* clients3.google.com
* google.com
* mqtt.shoonyacloud.com:1883
* \*.shoonyacloud.com
* \*.esper.cloud
* 13.52.132.230 (required only if want to allow secure remote ADB access to your devices)

### Ports

* 5228
* 5229
* 5230

## Esper Dev Tools Requirements

Various Esper tools and SDK require a Python installation. The table below lists the requirements for Python, depending on the tool you would like to use. Python can be downloaded and installed from [python.org](https://www.python.org/).

| Tool      | Python 2.7 | Python 3.6+ |
| --------- | :--------: | ----------: |
| Esper SDK |    Yes     |         Yes |
| Esper CLI |            |         Yes |

#### Esper SDK Language Support

* Python

To use the Esper Python SDK, please ensure you are using Python v2.7 or above.

> Note: Esper plans to release SDK support for Kotlin, Java, and JavaScript. If you are using a language other than Python and would like to start work with the Esper APIs right away, please consider calling the APIs directly. You can refer to the Esper API documentation [here](./api.md).

## Supported Development Platforms

* MacOS
* Windows
* Linux

At Esper, our developers use all of the above platforms to interact with Esper itself. So feel free to use whatever platform fits well for you!

## Help

If you face any issues setting up your requirements for Esper, please don't hesitate to [ask for some help!](./support.md) We'll be happy to assist you.
