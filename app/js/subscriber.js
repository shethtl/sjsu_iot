// const SERVER = 'mqtt://chrishyle.com:1883';
const SERVER = 'mqtt://test.mosca.io';  // Test

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var mqtt = require('mqtt');
var mqttClient = mqtt.connect(SERVER);


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
        return <ul className="subscriber">
            {this.state.messages}
        </ul>;
    }
}

ReactDOM.render(
    <Subscriber />,
    document.getElementById('app')
);
