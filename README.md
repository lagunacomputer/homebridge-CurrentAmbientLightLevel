# homebridge-CurrentAmbientLightLevel
Creates a Light Sensor Accessory for iOS Home app/Homekit via Homebridge.

 Please feel free to fix it, I am a copy/paste type of programmer and my skills are meager and limited.


This is a feeble attempt at a work in progress.  Most of the code is stolen from other authors, will update as I go.
the basic idea here is to rip off https://github.com/lucacri/homebridge-http-temperature-humidity and/or https://github.com/metbosch/homebridge-http-temperature/blob/master/index.js, but change the Accessory/Service info for CurrentAmbientLightLevel instead of CurrentTemperature, and then mess with returning as a % or not for the Home app icon.

Once this is complete, basically all sorts of input sensors become available to us ....
The list of possible sensor types are here: https://github.com/KhaosT/HAP-NodeJS/blob/master/lib/gen/HomeKitTypes.js
I imagine that soon HomeKit will include all kinds of options for automation based on input sensors. 
ie: "when its dark, turn on the light"  etc...

*update 10/7/2016
looks like i got it working as output in lux.  Need to fix code because arduino returns a 'light' value of between 0-1024 based on the resistance, it is NOT LUX AS REPORTED IN HOMEKIT!



    {

    "bridge": {
    "name": "HomeBridge",
    "username": "CC:22:3D:E3:CE:30",
    "port": 51826,
    "pin": "031-45-154"
    },

    "description": "",


        "accessories": [
        {
            "accessory": "Light",
            "name": "Light Sensor",
            "url": "http://192.168.1.210/light",
            "sendimmediately": "",
            "http_method": "GET"
        }
    ]

    "platforms": []
    }
