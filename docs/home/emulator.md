# Esper Virtual Device
<div class="avg-reading-time">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}s</div>


Virtual devices are a convenient means to target a device without having the available hardware, or when you do not want to risk breaking the actual hardware device. By trading off the lower performance of a virtual device, you gain a very capable and streamlined virtual device that can hugely boost your productivity during development and early testing.

The Esper Android Tools provide a customized Esper Virtual Device (EVD) image based on the x86 platform allowing you to try out Esper Enhanced Android providing features such as Zero-touch enrollment. You can register your EVD serial number or IMEI number using an Esper Device Template of your choice and then re-start the EVD. On boot the EVD will then get enrolled to your Endpoint automatically and you can start accessing the EVD and take actions using the Esper Console or through our APIs, SDK, and CLI.

In this guide we will help you with creating your own Esper emulated device.

## Requirements

Before you start with this guide, make sure you have the following things in place:

- You should have Android Studio and Android SDK installed. The emulator functionality depends on the Android SDK and it is important for it to be in place. Download [Android Studio from here](https://developer.android.com/studio#downloads) if you haven't already.
- You should have Java JDK 1.8 installed. The SDK tools require a specific version of Java and and our installer script requires the same. Make sure you have set Java 8 as the default environment. You can execute ```java -version``` to check which version you are currently on.
- The installed script requires Python 3 installed. You can [download it from here](https://www.python.org/downloads/).
- We also require an additional python library to help us download the emulator images hassle free. We will get more in to that in the next section.
- Currently only Windows and MacOSX are supported platforms. The script probably wouldn't work on Linux.

## Getting started with the installation script

We provide you with a handy script that downloads all the right components and installs the AVD for you with minimum effort from your side. You can just run the script and let it do all the work for you.

### Downloading the script

You can download [the script from here](https://downloads.esper.io/avd_creator.zip). Just unzip the file somewhere and start a terminal or command prompt at the extracted folder location.

Before you run the script please install the python ```requests``` library. You can do it by issuing the following command windows OR:

```pip3 install requests```

Or on a Mac run the following on your terminal:

```sudo pip3 install requests```

### Running the script

With the script in place you can simply execute it. You can start a terminal on mac (or command prompt/powershell on Windows) and issue the following command:

```python3 avd_creator.py```

This will take some time as the script downloads the required files and sets up the Esper AVD.

Once the script has successfully executed you need to start the emulator. You can do it from Android Studio. Within Android Studio Menu choose Tools > AVDManager. You can see the Esper AVD. Simply click on the green run button under the actions column and this should launch your AVD.

Optionally if you are facing an issue or do not want to run android studio to launch the AVD, head to the SDK tools directory. And execute the following.

```bash
cd ~/Library/Android/sdk/tools
./emulator @esper
```

On Windows you can do the same from your command prompt.

```cmd
cd %LOCALAPPDATA%\Android\Sdk\tools
emulator.exe @esper
```

