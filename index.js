var SerialPort = require('serialport')
var port = new SerialPort('/dev/serial/by-id/usb-Arduino__www.arduino.cc__0043_5573932373735170B1A1-if00',{baudRate:9600}, function(err){console.log('Error', err.message)})

console.log('trying')
port.write('>A=0', function(err){

	if(err){
		return console.log('Error on write: ', err.message)
	}
	console.log('message written')
})

port.on('error', function(err){console.log('Error: ' , err.message)})
