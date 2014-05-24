$(function() {

  // Google Map

  function initializeMap() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(51.470377, -0.069115)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var ganapati = new google.maps.Marker({
        position: new google.maps.LatLng(51.469571, -0.073086),
        map: map
    });

    var therye = new google.maps.Marker({
        position: new google.maps.LatLng(51.464646, -0.065705),
        map: map
    });

    var refreshment = new google.maps.Marker({
        position: new google.maps.LatLng(51.469655, -0.069126),
        map: map
    });

    var barstory = new google.maps.Marker({
        position: new google.maps.LatLng(51.469528, -0.069920),
        map: map
    });

    var pelican = new google.maps.Marker({
        position: new google.maps.LatLng(51.474092, -0.077290),
        map: map
    });

    var infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(ganapati, 'click', function() {
      infowindow.setContent("Ganapati")
      infowindow.open(map, ganapati);
    });

    google.maps.event.addListener(therye, 'click', function() {
      infowindow.setContent("The Rye")
      infowindow.open(map, therye);
    });

    google.maps.event.addListener(refreshment, 'click', function() {
      infowindow.setContent("Peckham Refreshment Rooms")
      infowindow.open(map, refreshment);
    });

    google.maps.event.addListener(barstory, 'click', function() {
      infowindow.setContent("Peckham Refreshment Rooms")
      infowindow.open(map, barstory);
    });

    google.maps.event.addListener(pelican, 'click', function() {
      infowindow.setContent("Peckham Pelican")
      infowindow.open(map, pelican);
    });
    
  };

  google.maps.event.addDomListener(window, 'load', initializeMap);

  // Map expander
  $("#map-expander").on("click", function(event) {
    $("#map-canvas").toggleClass("active");
  });

});
