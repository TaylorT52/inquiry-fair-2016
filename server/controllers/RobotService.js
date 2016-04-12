'use strict';

var controller = require('../services/AdvancedServo');

var getSpeed = exports.getSpeed = function(args, res, next) {
  var response = controller.speed;  
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response, null, 2));
}

var getSteeringPosition = exports.getSteeringPosition = function(args, res, next) {
  var response = controller.steering
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response, null, 2));
}

exports.setSpeed = function(args, res, next) {
  var ticks = 0;
  var speed = args.speed.value;

  controller.setSpeed(speed);

  function doWait() {
    ticks += 1;
    var delta = Math.abs(controller.speed.value - speed);
    if(delta <= 1) {
      res.end();
    }
    else if (ticks > 30) {
      console.log('timed out waiting');
      res.end();
    }
    else {
      setTimeout(doWait, 20);
    }
  }

  if(args.wait.value) {
    doWait();
  }
  else {
    res.end();
  }
}

exports.setSteeringPosition = function(args, res, next) {
  var ticks = 0;
  var position = args.position.value;
  controller.setSteering(position);

  function doWait() {
    ticks += 1;
    if(Math.abs(controller.steering.value - position) <= 1) {
      res.end();
    }
    else if (ticks > 30) {
      console.log('timed out waiting');
      res.end();
    }
    else {
      setTimeout(doWait, 20);
    }
  }
  if(args.wait.value) {
    doWait();
  }
  else {
    res.end();
  }

}
