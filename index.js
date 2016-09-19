
var ds18b20 = require('ds18b20');
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory("homebridge-CurrentAmbientLightLevel", "PhotoCell", LightSensorAccessory);
}

function LightSensorAccessory(log, config) {
  this.log = log;
  this.name = config["name"];
  this.device = config["device"];

  this.service = new Service.LightSensor(this.name);

  this.service
    .getCharacteristic(Characteristic.CurrentAmbientLightLevel)
    .setProps({ minValue: -55, maxValue: 125 })
    .on('get', this.getState.bind(this));
}

// LightSensorAccessory.prototype.getState = function(callback) {
//  ds18b20.temperature(this.device, function(err,value){
//    callback(err, value);
//  });
// }





LightSensorAccessory.prototype.getState = function(callback) {
  this.log("Getting current state...");
  
  request.get({
    url: "http://192.168.1.201/?light",
    qs: { access_token: this.accessToken }
  }, function(err, response, body) {
    
    if (!err && response.statusCode == 200) {
      var json = JSON.parse(body);
      var state = json.lightval; // change temp or humidty to lightval in arduino
      var locked = state == "lock"
      callback(err, value) // success
    }
    else {
      this.log("Error getting state (status code %s): %s", response.statusCode, err);
      callback(err);
    }
  }.bind(this));
}










LightSensorAccessory.prototype.getServices = function() {
  return [this.service];
}
