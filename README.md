# homebridge-CurrentAmbientLightLevel
Creates a Light Sensor Accessory for Homekit via Homebridge.

This is a feeble attempt at a work in progress.  Most of the code is stolen from other authors, will update as I go.

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
