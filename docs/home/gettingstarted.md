# Getting Started


## Setup
To get started with Esper, you need a dedicated Esper environment set up on Esper Cloud through our Esper Dev Trial. An Esper environment is a private instance where you can access the Esper Dev Console, Esper Manage Dashboard, and the Esper APIs. Follow the steps below to setup your Esper Dev Trial, which will create your Esper account, Android Studio session, and target Dedicated Devices.


1. **Esper Dev Trial** Sign up for the Esper Dev Trial to obtain access to the Esper Dev Console with a private Esper Cloud account. During that process you will set up your environment name. Once your environment is set you can login to your account on `foo.shoonyacloud.com` where “foo” is your chosen environment name giving you access to both the Esper Dev Console and the Esper Manage Dashboard. See [Requesting an Esper Dev Trial account](./module/register.md)
2. **Target Device**  An Android device used with Esper to directly target a Dedicated Device outside of emulation. If you don’t have a suitable device you can work with the emulation environment in Android Studio. Or if you’d like to try Esper Enhanced Android you can use the Esper Virtual Image for Android Studio. You can also use your own device or devices if they meet the requirements stated earlier. Or, as a final option, you can purchase Esper Development Devices running Esper Enhanced Android from Esper. See [Purchasing DevKits](./module/devkits.md)
3. **Device template** Next you create a Device Template where you define the initial profile for your device's security, apps, and settings. A device is then provisioned using the  Device Template. See [Creating a device template](https://consoledocs.esper.io/device-template/)
4. **Device Provisioning** Now you can provision your device using any of the supported methods.

    1. [AFW provisioning](https://consoledocs.esper.io/device-provisioning/afw-provisioning/)
    2. [ADB provisioning](https://consoledocs.esper.io/device-provisioning/adb-provisioning/)
    3. [IMEI or Serial number based provisioning](https://consoledocs.esper.io/device-provisioning/imei-or-serial-number-based-provisioning/)
    4. [6 tap provisioning](https://consoledocs.esper.io/device-provisioning/6-tap-provisioning/)

    See [Provisioning a device](https://consoledocs.esper.io/device-provisioning/)

5. **Start Playing** Once you have set up Android Studio, start coding in Python using the Esper APIs. Try the Esper CLI by downloading directly from GitHub and installing it on your system. Explore the Web-based Esper Dev Console and Esper Manage Dashboard on the Esper Cloud using your Esper Dev Console account, or access the Esper APIs using one of the method mentioned below

    - If you are calling the Esper APIs using `HTTP`, see the Esper [API Reference v1](https://api.esper.io)
    - If you are using the Python SDK in Android Studio to call the Esper APIs using the Esper SDK, see [Esper SDK](./pythonsdk.md)
    - Download the Command line tool, Esper CLI with full source code, to work the Esper APIs. Download the Esper CLI [here](./espercli.md)

## Quick links

Below are the quick links to the guide for specific actions on the Esper platform.

- [Learn about Device management](https://consoledocs.esper.io/device-management/)
- [Learn about Application management](https://consoledocs.esper.io/app-management/)
- [Learn about Device Group management](https://consoledocs.esper.io/group-management/)
- [Getting started with Esper SDK](./pythonsdk.md)
- [Getting started with Esper CLI](./espercli.md)
