//var socket = io();

var socket = io('http://localhost:10101');
socket.on('news', function(data) {
	console.log(data);
	socket.emit('my other event', {
		my : 'data'
	});
});