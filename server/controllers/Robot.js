'use strict';

var url = require('url');


var Robot = require('./RobotService');


module.exports.getSpeed = function getSpeed (req, res, next) {
  Robot.getSpeed(req.swagger.params, res, next);
};

module.exports.getSteeringPosition = function getSteeringPosition (req, res, next) {
  Robot.getSteeringPosition(req.swagger.params, res, next);
};

module.exports.setSpeed = function setSpeed (req, res, next) {
  Robot.setSpeed(req.swagger.params, res, next);
};

module.exports.setSteeringPosition = function setSteeringPosition (req, res, next) {
  Robot.setSteeringPosition(req.swagger.params, res, next);
};
