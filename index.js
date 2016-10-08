//DEBUG=* ./bin/homebridge -D -P ../homebridge-CurrentAmbientLightLevel/
var Service, Characteristic;
var request = require('sync-request');

module.exports = function (homebridge) {
   Service = homebridge.hap.Service;
   Characteristic = homebridge.hap.Characteristic;
   homebridge.registerAccessory("homebridge-CurrentAmbientLightLevel", "Light", HttpLight);
}


function HttpLight(log, config) {
   this.log = log;

   // url info
   this.url = config["url"];
   this.http_method = config["http_method"] || "GET";
   this.name = config["name"];
   this.manufacturer = config["manufacturer"] || "@lagunacomputer";
   this.model = config["model"] || "Model not available";
   this.serial = config["serial"] || "Non-defined serial";
}

HttpLight.prototype = {

   httpRequest: function (url, body, method, username, password, sendimmediately, callback) {
      cons
      request({
         url: url,
         body: body,
         method: method,
         rejectUnauthorized: false
      },
      function (error, response, body) {
         callback(error, response, body)
      })
   },

   getState: function (callback) {
      var body;

      var res = request(this.http_method, this.url, {});
      if(res.statusCode > 400){
         this.log('HTTP get state function failed');
         callback(error);
      } else {
         this.log('HTTP get state function succeeded!');
         var info = JSON.parse(res.body);

         this.temperatureService.setCharacteristic(
            Characteristic.CurrentAmbientLightLevel,
            info.lightval
         );
         this.log(info);

         this.lightval = info.lightval;

         callback(null, this.temperature);
      }
   },

   identify: function (callback) {
      this.log("Identify requested!");
      callback(); // success
   },

   getServices: function () {
      this.informationService = new Service.AccessoryInformation();
      this.informationService
      .setCharacteristic(Characteristic.Manufacturer, this.manufacturer)
      .setCharacteristic(Characteristic.Model, this.model)
      .setCharacteristic(Characteristic.SerialNumber, this.serial);

      this.temperatureService = new Service.LightSensor(this.name);
      this.temperatureService
         .getCharacteristic(Characteristic.CurrentAmbientLightLevel)
         .on('get', this.getState.bind(this));

      return [this.informationService, this.temperatureService];
   }
};
