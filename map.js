var x = document.getElementById("demo");

function getLocation() {
	alert("save me");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
		//navigator.geolocation.getCurrentPosition(succes, fail);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

/*function success(){
	alert("Hey bby");
}

function fail(){
	return;
}*/

document.getElementById("loc").addEventListener("click", getLocation, false);