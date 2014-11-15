



  var annexArea;

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Define the LatLng coordinates for the polygon.
  var annexAreaCoords = [
      new google.maps.LatLng(40.3331388,-104.8895431),
      new google.maps.LatLng(40.3331633,-104.8895752),
      new google.maps.LatLng(40.3332104,-104.8921984),
      new google.maps.LatLng(40.3331756,-104.8921984),
      new google.maps.LatLng(40.33308769999999,-104.8921448),
      new google.maps.LatLng(40.3327728,-104.8921528),
      new google.maps.LatLng(40.3327789,-104.8923701),
      new google.maps.LatLng(40.33256430000001,-104.8923782),
      new google.maps.LatLng(40.332511100000005,-104.8924264),
      new google.maps.LatLng(40.3322432,-104.89243180000001),
      new google.maps.LatLng(40.332206400000004,-104.8923755),
      new google.maps.LatLng(40.33223709999999,-104.8922467),
      new google.maps.LatLng(40.33230660000001,-104.8921153),
      new google.maps.LatLng(40.3323598,-104.89203480000002),
      new google.maps.LatLng(40.3324068,-104.8919812),
      new google.maps.LatLng(40.3324354,-104.8919463),
      new google.maps.LatLng(40.3323741,-104.8918256),
      new google.maps.LatLng(40.332345499999995,-104.8916861),
      new google.maps.LatLng(40.33232910000001,-104.8914313),
      new google.maps.LatLng(40.332325,-104.89076610000001),
      new google.maps.LatLng(40.332335300000004,-104.8905167),
      new google.maps.LatLng(40.33237,-104.8903048),
      new google.maps.LatLng(40.33244160000001,-104.8900795),
      new google.maps.LatLng(40.3325295,-104.8898649),
      new google.maps.LatLng(40.3326256,-104.8897174),
      new google.maps.LatLng(40.33273809999999,-104.8896477),
      new google.maps.LatLng(40.332838200000005,-104.8896235),
      new google.maps.LatLng(40.3329711,-104.8896423),
      new google.maps.LatLng(40.3330591,-104.8896584),
      new google.maps.LatLng(40.3331265,-104.8896074),
      new google.maps.LatLng(40.3331388,-104.8895431)
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