var phidget = require('phidgetapi').phidget
 , motor=new phidget()
 , _ = require('lodash')
 , MAX= 2.592000E+03
 , MIN= 2.453333E+02
 , enabledServos = [0, 1];

var steering = exports.steering = {
	value: 0
};
var speed = exports.speed = {
	value: 0
};

exports.setSpeed = function(value) {
	setPosition(1, value);
	// this.speed.value = value;
};

exports.setSteering = function(value) {
	console.log('setting steering to ' + value);
	setPosition(0, value);
	// this.steering.value = value;	
};

motor.on(
  "log", function(data){
    // console.log('log ',data);
  }
);

motor.on(
  "error", function(data){
    console.log('error ',data);
  }
);

motor.on(
  'changed', function(data){
  	// console.log(data);
    if(data.type === 'Position') {
    	if(data.key === '0') {
	      var position = translateFrom(data.value);
	      steering.value = parseInt(position);
	    }
    	else if( data.key === '1') {
	      var position = translateFrom(data.value);
	      speed.value = parseInt(position);
	    }
    }
  }
);

motor.on(
  'phidgetReady', function() {
  	_.each(enabledServos, function(position) {
	    motor.set({
        type:'Engaged',
        key: position.toString(),
        value: '1'
      });
	  });
  }
);

var setPosition = function (servo, position) {
  var pos = translateTo(position);
  motor.set( {
    type: 'Position',
    key: servo.toString(),
    value: pos.toString()
  });
}

function translateFrom(value) {
	var VALUE = value - MIN;
  var RANGE = MAX - MIN;
  var PERC = VALUE / RANGE;
  var pos = PERC * 200 - 100;

  return parseInt(pos);
}

function translateTo(value) {
  var range = 200;
  var m = value + 100;
  var perc = m / range;
  
  var RANGE = MAX - MIN;
  var PERC = perc * RANGE;
  var POS = PERC + MIN;
  return POS;
}

motor.connect({
  // host: '10.0.0.42',
  type: 'PhidgetAdvancedServo'
});
