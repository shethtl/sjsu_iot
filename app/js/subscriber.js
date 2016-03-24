// const SERVER = 'mqtt://chrishyle.com:1883';
const SERVER = 'mqtt://test.mosca.io';  // Test

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var mqtt = require('mqtt');
var mqttClient = mqtt.connect(SERVER);

require('../css/index.css');
require('../css/subscriber.css');

class Subscriber extends Component {

    state = { messages: [] }

    didRecieveMessage(topic, message) {
        var messages = this.state.messages;
        messages.push(<li>{message.toString()}</li>);
        this.setState({ messages: messages })
    }

    componentDidMount() {
        mqttClient.subscribe('buttonPress');
        mqttClient.on("message", this.didRecieveMessage.bind(this));
    }

    render() {
        return <div class="subscriber">
            <h1>Event Subscriber</h1>
            <p>Alerts recieved:</p>
            <ul>
                {this.state.messages}
            </ul>
        </div>;
    }
}

ReactDOM.render(
    <Subscriber />,
    document.getElementById('app')
);
