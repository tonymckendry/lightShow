var SerialPort = require('serialport')
var port = new SerialPort('/dev/serial/by-id/usb-Arduino__www.arduino.cc__0043_5573932373735170B1A1-if00',
	{
	baudRate:9600, 
	dataBits: 8, 
	parity: 'none', 
	stopBits: 1, 
	flowControl: false}, function(err){
		console.log('Error', err.message)
	})

var prompt = require('prompt')

prompt.start()
prompt.get([{name: 'command'}], function(err, res){

	port.write(res.command, function(err){
		if(err){
			return console.log('Error on write: ', err.message)
		}
		console.log('message written')
	})

prompt.start()
prompt.get([{name: 'command'}], function(err, res){

	port.write(res.command, function(err){
		if(err){
			return console.log('Error on write: ', err.message)
		}
		console.log('message written')
	})
})

})

port.on('error', function(err){console.log('Error: ' , err.message)})

// port.on('data', function(data) { 
//	         console.log(data.toString())
// })

var ask = function(){

}
