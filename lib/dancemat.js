var HID = require('node-hid'),
    util = require('util'),
    colors = require('colors'),
    events = require('events');

var buttons = {
  'up': {
    'block': 2,
    'bitwise': parseInt(1000000, 2)
  },
  'down':{
    'block': 2,
    'bitwise': parseInt(10000000, 2)
  },
  'left':{
    'block': 3,
    'bitwise': 0x1
  },
  'right':{
    'block': 3,
    'bitwise': 0x2
  },
  'start':{
    'block': 2,
    'bitwise': 0x10
  },
  'select':{
    'block': 2,
    'bitwise': 0x20
  },
  'cross':{
    'block': 2,
    'bitwise': 0x1
  },
  'circle':{
    'block': 2,
    'bitwise': 0x2
  },
  'triangle':{
    'block': 2,
    'bitwise': 0x4
  },
  'square':{
    'block': 2,
    'bitwise': 0x8
  }
}


function uint8Toint16(low, high) {
  var buffer = new ArrayBuffer(4);
  var int8View = new Uint8Array(buffer);
  var int16View = new Int16Array(buffer);

  int8View[0] = low;
  int8View[1] = high;
  return int16View[0];
}

function DancematController()
{
    var devices = HID.devices();
    var device
    devices.forEach((function(d) {
      if(typeof d === 'object' && d.product.toLowerCase().indexOf('gamepad') !== -1) {
        device = new HID.HID(d.path)
      }
    }).bind(this))
    this.hid = device
    this.position = 0;

    for (var key in buttons) {
      this[key] = 0;
    }

    try{
      this.hid.read(this.interpretData.bind(this));
    }
    catch ( ex ){
      console.log( 'error: '.red, 'Dancemat controller could not be found.' );
    }
}

util.inherits(DancematController, events.EventEmitter);

var exec = require('child_process').exec;

DancematController.prototype.interpretData = function(error, data) {
    for (var key in buttons) {
      var address = buttons[key]
      var state = data[address.block] & address.bitwise

      if(state ^ this[key]){
        this.emit((state ? key+':press': key+':release'), key);
        this[key] = state
      }
    }

    this.hid.read(this.interpretData.bind(this));
}

module.exports = DancematController