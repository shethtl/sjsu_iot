// const SERVER = 'mqtt://chrishyle.com:1883';
const SERVER = 'mqtt://test.mosca.io';  // Test

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var mqtt = require('mqtt');
var mqttClient = mqtt.connect(SERVER);


class Publisher extends Component {

    publishEvent() {
        mqttClient.publish("buttonPress", "hello");
    }

    render() {
        return <div className="publisher">
            <button onClick={this.publishEvent}>Publish</button>
        </div>;
    }
}

ReactDOM.render(
    <Publisher />,
    document.getElementById('app')
);
