# homebridge-CurrentAmbientLightLevel
Creates a Light Sensor Accessory for Homekit via Homebridge.

This is a feeble attempt at a work in progress.  Most of the code is stolen from other authors, will update as I go.
the basic idea here is to rip off https://github.com/lucacri/homebridge-http-temperature-humidity, but change the Accessory/Service info for CurrentAmbientLightLevel instead of CurrentTemperature, and then mess with returning as a % or not for the Home app icon.

Once this is complete, basically all sorts of input sensors become available to us ....

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
      "accessory": "PhotoCell",
      "name": "Light Sensor",
      }
    ],

    "platforms": []
    }
