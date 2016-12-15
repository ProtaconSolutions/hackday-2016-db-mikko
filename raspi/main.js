var rpio = require('rpio');
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyDV_ky2n9xsvuMpst6UXTz1zYYBoRPdszE",
  authDomain: "dbmikko.firebaseapp.com",
  databaseURL: "https://dbmikko.firebaseio.com",
  storageBucket: "dbmikko.appspot.com",
  messagingSenderId: "895556899408"
};

firebase.initializeApp(config);

var ordersRef = firebase.database().ref('orders/');

var pins = [15, 13, 11, 18];

ordersRef.on('child_added', function(data) {
  pour(data.key, data.val());
});

ordersRef.on('child_changed', function(data) {
});

ordersRef.on('child_removed', function(data) {
});

setup();

function pour(key, data) {
  console.log(data);

  if (data.state !== 0 || !data.recipe) {
    return;
  }

  // Update state to pouring
  data.state = 1;

  firebase.database().ref('orders/' + key).set(data);

  for (var i = 0; i < data.recipe.length; i++) {
    if (!pins[i]) {
      break;
    }

    if (data.recipe[i] === 0) {
      continue;
    }

    var pin = pins[i];

    rpio.open(pin, rpio.OUTPUT);

    rpio.write(pin, rpio.LOW);

    rpio.msleep(1000 * data.recipe[i]);

    rpio.write(pin, rpio.HIGH);
  }

  // Update state to done
  data.state = 2;
  firebase.database().ref('orders/' + key).set(data);
}

function test(i, time) {
  rpio.open(pins[i], rpio.OUTPUT);

  rpio.write(pins[i], rpio.LOW);

  console.log('Pin ' + pins[i] + ' is currently set ' + (rpio.read(pins[i]) ? 'high' : 'low'));
  rpio.msleep(time);

  rpio.write(pins[i], rpio.HIGH);

}

function setup() {
  for (var i = 0; i < pins.length; i++) {
    rpio.open(pins[i], rpio.OUTPUT);
    rpio.write(pins[i], rpio.HIGH);
  }
}