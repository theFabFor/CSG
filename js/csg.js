/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

// variable to contain info window of annexArea
var infoWindow;
var AnnexAreaInfoWindow;

function init() {
    //location of infoWindow
    var myLatlng = new google.maps.LatLng(40.330851, -104.896860);
    // variables to contain map overlays
    var annexArea;

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.330851, -104.896860), // Center of CSG

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Define the LatLng coordinates for the annex polygon.
    var annexAreaCoords = [
        new google.maps.LatLng(40.3325315,-104.9010256),
        new google.maps.LatLng(40.3325377,-104.902938),
        new google.maps.LatLng(40.3326113,-104.9046224),
        new google.maps.LatLng(40.3311677,-104.9046144),
        new google.maps.LatLng(40.3311882,-104.9060386),
        new google.maps.LatLng(40.3311473,-104.9060494),
        new google.maps.LatLng(40.327479,-104.9060225),
        new google.maps.LatLng(40.327431999999995,-104.9060172),
        new google.maps.LatLng(40.3273972,-104.9060038),
        new google.maps.LatLng(40.3273625,-104.9059716),
        new google.maps.LatLng(40.32734820000001,-104.905926),
        new google.maps.LatLng(40.32734820000001,-104.9058616),
        new google.maps.LatLng(40.3273502,-104.9057785),
        new google.maps.LatLng(40.32728070000001,-104.9003094),
        new google.maps.LatLng(40.33166460000001,-104.9007627),
        new google.maps.LatLng(40.331773,-104.9007842),
        new google.maps.LatLng(40.3318834,-104.900803),
        new google.maps.LatLng(40.3320183,-104.9008352),
        new google.maps.LatLng(40.332165499999995,-104.9008754),
        new google.maps.LatLng(40.332325,-104.9009344)
    ];

    // Construct the annex polygon.
    annexArea = new google.maps.Polygon({
        paths: annexAreaCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });

    annexArea.setMap(map);

    // Define the LatLng coordinates for the water area polygon.
    var waterAreaCoords = [
        new google.maps.LatLng(40.3330018,-104.8877728),
        new google.maps.LatLng(40.3330427,-104.8884594),
        new google.maps.LatLng(40.33305500000001,-104.8886311),
        new google.maps.LatLng(40.3330509,-104.8887706),
        new google.maps.LatLng(40.3330754,-104.8889047),
        new google.maps.LatLng(40.33310000000001,-104.8890388),
        new google.maps.LatLng(40.3331,-104.88918360000001),
        new google.maps.LatLng(40.33313270000001,-104.8893768),
        new google.maps.LatLng(40.3331449,-104.8895216),
        new google.maps.LatLng(40.333091800000005,-104.889586),
        new google.maps.LatLng(40.3330059,-104.8896074),
        new google.maps.LatLng(40.3329118,-104.8895967),
        new google.maps.LatLng(40.3327483,-104.8895699),
        new google.maps.LatLng(40.332646,-104.88961280000001),
        new google.maps.LatLng(40.3325315,-104.8897254),
        new google.maps.LatLng(40.3324211,-104.8899454),
        new google.maps.LatLng(40.3323271,-104.8901761),
        new google.maps.LatLng(40.3322944,-104.8903853),
        new google.maps.LatLng(40.3322698,-104.890573),
        new google.maps.LatLng(40.33226570000001,-104.8908842),
        new google.maps.LatLng(40.332278,-104.8913133),
        new google.maps.LatLng(40.3312966,-104.8913401),
        new google.maps.LatLng(40.3313088,-104.89222530000002),
        new google.maps.LatLng(40.3307649,-104.8922467),
        new google.maps.LatLng(40.33063,-104.8922467),
        new google.maps.LatLng(40.330311,-104.8922628),
        new google.maps.LatLng(40.32985300000001,-104.8922789),
        new google.maps.LatLng(40.3294809,-104.8922789),
        new google.maps.LatLng(40.32919050000001,-104.8922521),
        new google.maps.LatLng(40.3291373,-104.8922038),
        new google.maps.LatLng(40.32910869999999,-104.8921341),
        new google.maps.LatLng(40.3291128,-104.8920053),
        new google.maps.LatLng(40.32914139999999,-104.8915923),
        new google.maps.LatLng(40.32916190000001,-104.8914421),
        new google.maps.LatLng(40.3292028,-104.8913562),
        new google.maps.LatLng(40.3292355,-104.8912758),
        new google.maps.LatLng(40.3292518,-104.8911792),
        new google.maps.LatLng(40.329235499999996,-104.8910934),
        new google.maps.LatLng(40.3291782,-104.8910183),
        new google.maps.LatLng(40.329137300000006,-104.890911),
        new google.maps.LatLng(40.3291373,-104.8907876),
        new google.maps.LatLng(40.32916190000001,-104.890632),
        new google.maps.LatLng(40.329206899999996,-104.8904872),
        new google.maps.LatLng(40.329305,-104.8902297),
        new google.maps.LatLng(40.3293909,-104.8900098),
        new google.maps.LatLng(40.3294522,-104.8898864),
        new google.maps.LatLng(40.3295667,-104.8896503),
        new google.maps.LatLng(40.3296281,-104.889468),
        new google.maps.LatLng(40.3297221,-104.88913540000001),
        new google.maps.LatLng(40.3298039,-104.888835),
        new google.maps.LatLng(40.3298775,-104.8886043),
        new google.maps.LatLng(40.3299348,-104.8885238),
        new google.maps.LatLng(40.33001250000001,-104.88850770000002),
        new google.maps.LatLng(40.3300902,-104.888497),
        new google.maps.LatLng(40.3301761,-104.888497),
        new google.maps.LatLng(40.3302783,-104.88849160000001),
        new google.maps.LatLng(40.330376400000006,-104.8884219),
        new google.maps.LatLng(40.33045409999999,-104.8883736),
        new google.maps.LatLng(40.33050730000001,-104.8883092),
        new google.maps.LatLng(40.3305482,-104.8881751),
        new google.maps.LatLng(40.33055639999999,-104.8879981),
        new google.maps.LatLng(40.3305768,-104.8878157),
        new google.maps.LatLng(40.3306055,-104.8877299),
        new google.maps.LatLng(40.3306627,-104.887687),
        new google.maps.LatLng(40.3329159,-104.8876441),
        new google.maps.LatLng(40.33297730000001,-104.8876923)
    ];

    // Construct the water area polygon.
    waterArea = new google.maps.Polygon({
        paths: waterAreaCoords,
        strokeColor: '#000099',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#000099',
        fillOpacity: 0.35
    });

    waterArea.setMap(map);

        // Define the LatLng coordinates for the electric substation area polygon.
    var elecAreaCoords = [
        new google.maps.LatLng(40.3338646,-104.8878962),
        new google.maps.LatLng(40.3332165,-104.8879096),
        new google.maps.LatLng(40.3332001,-104.8868421),
        new google.maps.LatLng(40.3337972,-104.8868555),
        new google.maps.LatLng(40.3337972,-104.8869547),
        new google.maps.LatLng(40.3338769,-104.8869547),
        new google.maps.LatLng(40.333879,-104.8870754),
        new google.maps.LatLng(40.33379920000001,-104.8870754),
        new google.maps.LatLng(40.33385030000001,-104.8873651)
    ];

    // Construct the polygon.
    elecArea = new google.maps.Polygon({
        paths: elecAreaCoords,
        strokeColor: '#CCFF33',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#CCFF33',
        fillOpacity: 0.35
    });

    elecArea.setMap(map);

var contentString = '<div id="infoWindow">this is the annexed piece</div>';

    var AnnexAreaInfoWindow = new google.maps.InfoWindow({
        content: contentString
    });

  google.maps.event.addListener(annexArea, 'click', function(event) {
    AnnexAreaInfoWindow.open(map);
    AnnexAreaInfoWindow.setPosition(event.latLng);
  });
}

google.maps.event.addDomListener(window, 'load', init);