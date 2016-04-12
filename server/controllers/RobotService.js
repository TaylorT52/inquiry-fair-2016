'use strict';

exports.getSpeed = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "value" : 123
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.getSteeringPosition = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "value" : 123
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.setSpeed = function(args, res, next) {
  /**
   * parameters expected in the args:
  * speed (Integer)
  * wait (Boolean)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.setSteeringPosition = function(args, res, next) {
  /**
   * parameters expected in the args:
  * position (Integer)
  * wait (Boolean)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

