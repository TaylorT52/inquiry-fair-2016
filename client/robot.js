var swagger = require('swagger-client');

var client;
var events = {};
var MAX_SPEED = 100;
var MAX_TURN = 100;

module.exports = {
	on: function(scope, fn) {
		events[scope] = fn;
		return this;
	},
	connect: function () {
		return new swagger({
			url: 'http://10.0.0.42:8080/api-docs',
			usePromise: true
		}).then(function (_client) {
			client = _client;
			if(typeof events.ready === 'function') {
				events.ready();
			}
		})
	},
	forward: function(speed) {
		speed = Math.abs(speed);
		speed = speed > MAX_SPEED ? MAX_SPEED : speed;
		console.log('set forward to ' + speed);
		return client.Robot.setSpeed({speed: speed, wait: true});
	},
	reverse: function(speed) {
		speed = Math.abs(speed);
		speed = speed > MAX_SPEED ? MAX_SPEED : speed;
		console.log('set reverse to ' + speed);
		return client.Robot.setSpeed({speed: - speed, wait: true});
	},
	stop: function() {
		console.log('stop');
		return client.Robot.setSpeed({speed: 0, wait: true});
	},
	left: function(amount) {
		amount = Math.abs(amount);
		amount = amount > MAX_TURN ? MAX_TURN : amount;
		console.log('turn left ' + amount);
		return client.Robot.setSteeringPosition({position: - amount, wait: true});
	},
	right: function(amount) {
		amount = Math.abs(amount);
		amount = amount > MAX_TURN ? MAX_TURN : amount;
		console.log('turn right ' + amount);
		return client.Robot.setSteeringPosition({position: amount, wait: true});
	},
	straight: function(amount) {
		console.log('stop');
		return client.Robot.setSteeringPosition({position: 0, wait: true});
	}
}