
download sdk and google usb drive
install sdk

plug-in nexus device
go to device settings -> Debugging option
enable "USB debugging"

go to windows control panel -> device manager
locate connected "andriod device"
update the drive[provide google usb drive location]

http://developer.android.com/tools/help/adb.html

adb devices

adb shell pm list packages

adb shell pm path <package-name>

adb pull <source-path> <destination-path>


Framework-res.apk basically contains the elements of the Graphical User Interface for the phone. This file is available at /system/framework/framework-res.apk.

Poking in this file would mean changing the complete look and feel of your device. Since it is the main element of your screen, replacing it directly by pushing it through ADB would lead to soft-brick. Therefore, this apk should carefully be modified and replaced using the recovery module of the phone. 

http://www.apad.tv/apadforum/entry.php?199-Modifying-the-framework-res.apk-%28theming-the-user-interface%29

http://droidorigin.blogspot.in/2013/10/how-to-decompile-and-recompile-apk-with.html

http://stackoverflow.com/questions/5257830/how-to-use-dextojar/19954951#19954951

