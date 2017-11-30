var x = document.getElementById("coords");
var y = document.getElementById("map");

function getLocation() {
	alert("save me");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(generateMap, fail);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function generateMap(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
	var newLat = otherSide(position.coords.latitude);
	var newLong = otherSide(position.coords.longitude);
	makeMap(newLat, newLong);
}

//API key: AIzaSyDpW4XsD9S3yJdENJ4Mems1f1Obw_bVlGk
function makeMap(a, b){
	var mymap = {
		center:new google.maps.LatLng(newLat, newLang);
		zoom: 5;
	};
	var themap = new google.maps.Map(y, mymap);
}

function fail(){
	alert("error while getting coordinates");
}

function otherSide(coord){
	return-1*coord;
}

document.getElementById("loc").addEventListener("click", getLocation);