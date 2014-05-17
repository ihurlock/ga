function createMap() {

	var officeLocation = new google.maps.LatLng(51.522534, -0.109436);
	var homeLocation = new google.maps.LatLng(51.522545, -0.102389);

	var mapOptions = {
		zoom: 15,
		center: officeLocation
	}

	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	var office = new google.maps.Marker({
		position: officeLocation,
		map: map
	});

	var home = new google.maps.Marker({
		position: homeLocation,
		map: map
	});

	var infoWindow = new google.maps.InfoWindow();

	google.maps.event.addListener(office, 'click', function() {
		infoWindow.setContent('hello!');
		infoWindow.open(map, office);
	});

	google.maps.event.addListener(home, 'click', function() {
		infoWindow.setContent('Home!');
		infoWindow.open(map, home);
		map.setCenter(homeLocation);
	});
};

google.maps.event.addDomListener(window, 'load', createMap)