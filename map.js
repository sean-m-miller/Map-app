var x = document.getElementById("coords");
var y = document.getElementById("map");
var newLat, newLong;

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
	newLat = otherSide(position.coords.latitude);
	newLong = otherSide(position.coords.longitude);
	y.textNode = makeMap(newLat, newLong);
}

function makeMap(){
	
}

function fail(){
	alert("error while getting coordinates");
}

function otherSide(coord){
	return-1*coord;
}

document.getElementById("loc").addEventListener("click", getLocation);