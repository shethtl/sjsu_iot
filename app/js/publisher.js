// const SERVER = 'mqtt://chrishyle.com:1883';
const SERVER = 'mqtt://test.mosca.io';  // Test

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var mqtt = require('mqtt');
var mqttClient = mqtt.connect(SERVER);

require('../css/index.css');
require('../css/publisher.css');

class Publisher extends Component {

    publishEvent() {
        mqttClient.publish("buttonPress", "Alert!");
    }

    render() {
        return <div className="publisher">
            <h1>Event Publisher</h1>
            <button id="publishButton" onClick={this.publishEvent}>Send Alert!</button>
        </div>;
    }
}

ReactDOM.render(
    <Publisher />,
    document.getElementById('app')
);
