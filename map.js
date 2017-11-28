console.log("hello");
var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to find your location.';

if(Modernizr.geolocation){
	navigator.geolocation.getCurrentPosition(success, fail);
	elMap.textContent = 'Checking Location...';
} else{
	elMap.textContent = msg;
}

function success(position){
	console.log("Hello!");
	var longitude = Position.coords.longitude;
	var latitude = Position.coords.latitude;
	console.log(longitude, latitude);
}

function fail(msg){
	elMap.textContent = msg;
	console.log(msg.code);
}