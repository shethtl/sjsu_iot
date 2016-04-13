// const SERVER = 'mqtt://chrishyle.com:1883';
const SERVER = 'mqtt://test.mosca.io';  // Test

var mqtt = require('mqtt');
var mqttClient = mqtt.connect(SERVER);
var store = require('store');

require('../css/index.css');
require('../css/publisher.css');

var _position, _guid;


// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

if (store.enabled) {
    _guid = store.get('guid') || store.set('guid', guid());
}

navigator.geolocation.getCurrentPosition((position) => {
    console.log('position found:', position);
    _position = position;
});


function sendAlert() {
    var connectionInfo = JSON.stringify({
        id: _guid,
        lat: _position.coords.latitude,
        long: _position.coords.longitude
    });
    console.log('sending:', connectionInfo)
    mqttClient.publish('sjsuIOT::userConnected', connectionInfo);
}

document.getElementById('publishButton').addEventListener('click', sendAlert);
