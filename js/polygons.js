



  var annexArea;

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Define the LatLng coordinates for the polygon.
  var annexAreaCoords = [
      new google.maps.LatLng(40.3321615,-104.88966380000001),
      new google.maps.LatLng(40.3321717,-104.8913187),
      new google.maps.LatLng(40.3321737,-104.8915306),
      new google.maps.LatLng(40.3321676,-104.8916593),
      new google.maps.LatLng(40.3321615,-104.8917666),
      new google.maps.LatLng(40.3321492,-104.8919088),
      new google.maps.LatLng(40.3321022,-104.8923513),
      new google.maps.LatLng(40.3320899,-104.8924693),
      new google.maps.LatLng(40.3320858,-104.8925927),
      new google.maps.LatLng(40.3320858,-104.8927188),
      new google.maps.LatLng(40.3320858,-104.8928073),
      new google.maps.LatLng(40.3321063,-104.8945239),
      new google.maps.LatLng(40.3321083,-104.89476260000002),
      new google.maps.LatLng(40.3321144,-104.8949262),
      new google.maps.LatLng(40.3321287,-104.89506840000001),
      new google.maps.LatLng(40.332139,-104.8951569),
      new google.maps.LatLng(40.3321574,-104.8952374),
      new google.maps.LatLng(40.3321819,-104.8953366),
      new google.maps.LatLng(40.3322126,-104.8954439),
      new google.maps.LatLng(40.3322473,-104.8955378),
      new google.maps.LatLng(40.33228,-104.8956156),
      new google.maps.LatLng(40.3323046,-104.8956558),
      new google.maps.LatLng(40.3323455,-104.89572820000001),
      new google.maps.LatLng(40.3323741,-104.8957711),
      new google.maps.LatLng(40.3324252,-104.89584360000002),
      new google.maps.LatLng(40.3339342,-104.8977023),
      new google.maps.LatLng(40.3340303,-104.8978338),
      new google.maps.LatLng(40.3341223,-104.8979625),
      new google.maps.LatLng(40.3342245,-104.89811),
      new google.maps.LatLng(40.3342961,-104.8982415),
      new google.maps.LatLng(40.3343676,-104.8984158),
      new google.maps.LatLng(40.33443100000001,-104.8985767),
      new google.maps.LatLng(40.3344821,-104.8987269),
      new google.maps.LatLng(40.3345189,-104.8988798),
      new google.maps.LatLng(40.3345373,-104.8989925),
      new google.maps.LatLng(40.3345557,-104.8991373),
      new google.maps.LatLng(40.33457,-104.8992634),
      new google.maps.LatLng(40.3345762,-104.8993948)
  ];

  // Construct the polygon.
annexArea = new google.maps.Polygon({
    paths: annexAreaCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

annexArea.setMap(map);

  // Add a listener for the click event.
  google.maps.event.addListener(annexArea, 'click', annexAreaInfoWindow);

  infoWindow = new google.maps.InfoWindow();
}

/** @this {google.maps.Polygon} */
function annexAreaInfoWindow(event) {

  var contentString = '<b>Residential Annex</b><br>' +
      'Walking distance from city hall<br>';

  }

  // Replace the info window's content and position.
  infoWindow.setContent(contentString);
  //infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
}

google.maps.event.addDomListener(window, 'load', initialize);