// const SERVER = 'mqtt://chrishyle.com:1883';
const SERVER = 'mqtt://test.mosca.io';  // Test

// CSS
require('../css/index.css');
require('../css/subscriber.css');

// MQTT stuff
var mqtt = require('mqtt');
var mqttClient = mqtt.connect(SERVER);

//


function didRecieveMessage(topic, message) {
    var info = JSON.parse(message); // TODO: error handling
    if (topic === 'sjsuIOT::userConnected') {
        showConnectedUser(info);
    }
    
    // Log stuff: (make better)
    var messagesElement = document.getElementById('messages');
    var messageElement = document.createElement('li')
    messageElement.innerText = message.toString();
    messagesElement.appendChild(messageElement);

}

function showConnectedUser(userInfo) {
    // 1. Add marker to map
    // 2. Re-center on marker
    //
    // … TODO
    //
    debugger;
    //
    // https://developers.google.com/maps/documentation/javascript/tutorials/firebase#add-a-marker-when-the-user-clicks-the-map
    // var marker = new google.maps.Marker({
    // position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
  //   map: map
  // });

}


mqttClient.subscribe('sjsuIOT::userConnected');
mqttClient.on('message', didRecieveMessage);


// Create Map
// … TODO
