var bluebird = require('bluebird');
var Robot = require('./robot')
var client;

var ready = bluebird.coroutine(function* () {
	yield Robot.forward(100);

	yield Robot.reverse(100);

	yield Robot.stop();

	yield Robot.left(50);

	yield Robot.right(50);

	yield Robot.straight();
});

Robot.on('ready', ready).connect();
