var bluebird = require('bluebird');
var BaconMobile = require('./robot')
var client;

var ready = bluebird.coroutine(function* () {

	// the code that will work after the school program

//console.log('WARNING: program is about to run');

//	yield BaconMobile.forward(100);

//	yield BaconMobile.reverse(100);

//	yield BaconMobile.left(50);

//	yield BaconMobile.right(50);

//	yield BaconMobile.straight();

//	yield BaconMobile.reverse(80);

//	yield BaconMobile.forward(75);

//	yield BaconMobile.right(20);

//	yield BaconMobile.straight(70);

//	yield BaconMobile.left(70);

//	yield BaconMobile.forward(20);

//yield BaconMobile.stop(100);

//	yield BaconMobile.right(100);

//	yield BaconMobile.right(100);

//	yield BaconMoblie.stop(100)

//	console.log('The program has ended.')

console.log('The school program has started.')

yield BaconMobile.stop();
//this is the school program. Make sure to impress Mrs. Ando!!

yield BaconMobile.right(25)
yield doItFor(3);
yield BaconMobile.forward(15);
yield doItFor(15);
yield BaconMobile.straight()
yield BaconMobile.forward(50);
yield doItFor(15);

yield BaconMobile.right(20)
yield doItFor(3);
yield BaconMobile.straight(70)
yield doItFor(10.5);

yield BaconMobile.right(70)
yield doItFor(3);
yield BaconMobile.straight()
yield doItFor(15.0);
yield BaconMobile.stop();

console.log('The school program is ended.')

console.log('Now you can run your other program =)')


});

BaconMobile.on('ready', ready).connect();

var doItFor = function(seconds) {
	console.log('do this for ' + seconds + ' seconds');
	return bluebird.delay(seconds * 1000.0);
}
