var x = document.getElementById("coords");
var newLat;
var newLang;

function getLocation() {
	if(Modernizr.geolocation){
    	if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(generateMap);
    	} else { 
        	x.innerHTML = "Position error";
    	}
	}
	else{
		alert("Sorry... Geolocation is not supported by this browser, or you have rejected the offer.");
	}
}

function generateMap(position) {
	newLat = position.coords.latitude * -1;
	if(position.coords.longitude < 0){
		newLong = position.coords.longitude + 180;
	}
	else{
		newLong = position.coords.longitude - 180;
	}
    x.innerHTML = "Your Current Latitude: " + position.coords.latitude + " Your NEW Latitude: " + newLat +
    "<br>Your Current Longitude: " + position.coords.longitude + " Your NEW Longitude: " + newLong;
	initMap();
}

function initMap() {
  var otherSide = {lat: newLat, lng: newLong};
  var current = {lat: newLat*-1, lng: newLong+180};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
	center: otherSide
  });
  var marker = new google.maps.Marker({
    position: otherSide,
    map: map,
	title: 'Other Side of the World!',
  });
  var marker2 = new google.maps.Marker({
	position: current,
	map: map,
	title: 'Current Location',
  });
  marker.setMap(map);
  marker2.setMap(map);
  google.maps.event.addListener(marker , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
          content:'Other Side of the World!',
          position: otherSide,
        });
        infowindow.open(map);
  });
  google.maps.event.addListener(marker2 , 'click', function(){
        var infowindow = new google.maps.InfoWindow({
          content:'Current Location',
          position: current,
        });
        infowindow.open(map);
  });
}

document.getElementById("loc").addEventListener("click", getLocation);