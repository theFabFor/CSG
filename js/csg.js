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

// variable to contain info window
var infoWindow;

function init() {
    //location of map center
    var mapLatlng = new google.maps.LatLng(40.330851, -104.896860);
    // variables to contain map overlays
    var annexArea;

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in the initial maps should be
        zoom: 16,

        // user controled zoom
        zoomControl: true,

        // zoom control size
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },

        // map type control disabled
        mapTypeControl: false,

        // The latitude and longitude to center the map
        center: mapLatlng,

        // makes satellite view the default view
        mapTypeId: google.maps.MapTypeId.SATELLITE,

        // Disables the default Google Maps UI components
        // disableDefaultUI: true,
        scrollwheel: false,
        //draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
    /*    styles: [{
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
                "color": "#FF0000"
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
        }]*/
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Define the LatLng coordinates for the railYard polygon.
    var railYardCoords = [
        new google.maps.LatLng(40.3321676,-104.8951328),
        new google.maps.LatLng(40.3328566,-104.8948967),
        new google.maps.LatLng(40.3329834,-104.894878),
        new google.maps.LatLng(40.3330754,-104.8948485),
        new google.maps.LatLng(40.3336663,-104.8945454),
        new google.maps.LatLng(40.333742,-104.8944783),
        new google.maps.LatLng(40.3338197,-104.8943442),
        new google.maps.LatLng(40.3338565,-104.8943415),
        new google.maps.LatLng(40.33389739999999,-104.8966992),
        new google.maps.LatLng(40.3339076,-104.8968548),
        new google.maps.LatLng(40.333926,-104.897005),
        new google.maps.LatLng(40.3339648,-104.8971847),
        new google.maps.LatLng(40.3339955,-104.8973161),
        new google.maps.LatLng(40.3340446,-104.8974904),
        new google.maps.LatLng(40.334128400000004,-104.8976943),
        new google.maps.LatLng(40.3342061,-104.8978767),
        new google.maps.LatLng(40.3342879,-104.8980698),
        new google.maps.LatLng(40.334255199999994,-104.8981073),
        new google.maps.LatLng(40.33415500000001,-104.8979437),
        new google.maps.LatLng(40.334079300000006,-104.8978311),
        new google.maps.LatLng(40.33327370000001,-104.8968521),
        new google.maps.LatLng(40.3324314,-104.8958087),
        new google.maps.LatLng(40.3323312,-104.8956504),
        new google.maps.LatLng(40.33225960000001,-104.8954895),
        new google.maps.LatLng(40.332224800000006,-104.8953849),
        new google.maps.LatLng(40.332184,-104.8952374)
    ];

    // Construct the railYard polygon.
    railYard = new google.maps.Polygon({
        paths: railYardCoords,
        strokeColor: '#999933',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#999933',
        fillOpacity: 0.35
    });

    railYard.setMap(map);

    // Define the LatLng coordinates for the bnsfCon polyline.
    var bnsfConCoords = [
        new google.maps.LatLng(40.4016503,-105.0760531),
        new google.maps.LatLng(40.4020588,-105.07577420000001),
        new google.maps.LatLng(40.4023692,-105.07545230000001),
        new google.maps.LatLng(40.402598,-105.0750446),
        new google.maps.LatLng(40.4026961,-105.0747871),
        new google.maps.LatLng(40.4026961,-105.0745296),
        new google.maps.LatLng(40.402647,-105.0636506),
        new google.maps.LatLng(40.40045740000001,-105.0599384),
        new google.maps.LatLng(40.4003267,-105.059638),
        new google.maps.LatLng(40.400245,-105.0593591),
        new google.maps.LatLng(40.4001143,-105.0588012),
        new google.maps.LatLng(40.4000816,-105.0584149),
        new google.maps.LatLng(40.3999018,-104.95574),
        new google.maps.LatLng(40.3998365,-104.9550104),
        new google.maps.LatLng(40.3997384,-104.9544525),
        new google.maps.LatLng(40.399526,-104.9538517),
        new google.maps.LatLng(40.3992318,-104.9532938),
        new google.maps.LatLng(40.3797669,-104.9239182),
        new google.maps.LatLng(40.3792602,-104.9233174),
        new google.maps.LatLng(40.3788352,-104.92284540000001),
        new google.maps.LatLng(40.378263,-104.9224806),
        new google.maps.LatLng(40.3776746,-104.9220943),
        new google.maps.LatLng(40.3511721,-104.9067307),
        new google.maps.LatLng(40.3507633,-104.9064946),
        new google.maps.LatLng(40.3503054,-104.9063015),
        new google.maps.LatLng(40.3498312,-104.9062157),
        new google.maps.LatLng(40.3493896,-104.9062157),
        new google.maps.LatLng(40.3417686,-104.906044),
        new google.maps.LatLng(40.3404439,-104.9060869),
        new google.maps.LatLng(40.3386448,-104.9060869),
        new google.maps.LatLng(40.3381705,-104.9059796),
        new google.maps.LatLng(40.3378924,-104.9058723),
        new google.maps.LatLng(40.3376144,-104.9057114),
        new google.maps.LatLng(40.3373854,-104.9055505),
        new google.maps.LatLng(40.3371482,-104.9053144),
        new google.maps.LatLng(40.3369029,-104.9051106),
        new google.maps.LatLng(40.3351282,-104.90299700000001),
        new google.maps.LatLng(40.3349565,-104.9026322),
        new google.maps.LatLng(40.3347929,-104.9022567),
        new google.maps.LatLng(40.3346273,-104.9015567)
    ];

    // Construct the bnsfCon polyline.
    bnsfCon = new google.maps.Polyline({
        path: bnsfConCoords,
        strokeColor: '#FF9900',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    bnsfCon.setMap(map);

    // Define the LatLng coordinates for the upCon polyline.
    var upConCoords = [
        new google.maps.LatLng(40.3329752,-104.8554468),
        new google.maps.LatLng(40.3331122,-104.8558572),
        new google.maps.LatLng(40.3331408,-104.8559618),
        new google.maps.LatLng(40.333192,-104.856171),
        new google.maps.LatLng(40.3332329,-104.8564768),
        new google.maps.LatLng(40.333243100000004,-104.8566806),
        new google.maps.LatLng(40.3332185,-104.8568389),
        new google.maps.LatLng(40.3328464,-104.858467),
        new google.maps.LatLng(40.3327626,-104.8587728),
        new google.maps.LatLng(40.3327442,-104.8588639),
        new google.maps.LatLng(40.332599,-104.8597759),
        new google.maps.LatLng(40.3326113,-104.8618278),
        new google.maps.LatLng(40.3327278,-104.8632601),
        new google.maps.LatLng(40.3329323,-104.8676509),
        new google.maps.LatLng(40.3333739,-104.8709822),
        new google.maps.LatLng(40.3340671,-104.87511550000002),
        new google.maps.LatLng(40.3341632,-104.875786),
        new google.maps.LatLng(40.3342061,-104.8763224),
        new google.maps.LatLng(40.3342327,-104.876985),
        new google.maps.LatLng(40.3343717,-104.88648),
        new google.maps.LatLng(40.3345762,-104.8993948),
        new google.maps.LatLng(40.3346273,-104.9015567)
    ];

    // Construct the upCon polyline.
    upCon = new google.maps.Polyline({
        path: upConCoords,
        strokeColor: '#FF9900',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    upCon.setMap(map);

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
        strokeColor: '#3333FF',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#3333FF',
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

    // Define the LatLng coordinates for the eastNearRoad polygon.
    var eastNearRoadCoords = [
        new google.maps.LatLng(40.333194,-104.8867804),
        new google.maps.LatLng(40.3332226,-104.887982),
        new google.maps.LatLng(40.3331613,-104.8879713),
        new google.maps.LatLng(40.3331163,-104.8879176),
        new google.maps.LatLng(40.3330959,-104.8878157),
        new google.maps.LatLng(40.3330795,-104.8876709),
        new google.maps.LatLng(40.333046800000005,-104.8875904),
        new google.maps.LatLng(40.3329977,-104.88755290000002),
        new google.maps.LatLng(40.33070359999999,-104.8876226),
        new google.maps.LatLng(40.3306259,-104.8876226),
        new google.maps.LatLng(40.3305523,-104.8876709),
        new google.maps.LatLng(40.3305114,-104.8877782),
        new google.maps.LatLng(40.3305032,-104.8879284),
        new google.maps.LatLng(40.330495,-104.8880947),
        new google.maps.LatLng(40.33046230000001,-104.8882073),
        new google.maps.LatLng(40.33040509999999,-104.8882985),
        new google.maps.LatLng(40.3303233,-104.8883468),
        new google.maps.LatLng(40.3302006,-104.8883951),
        new google.maps.LatLng(40.3300861,-104.8883951),
        new google.maps.LatLng(40.3299348,-104.8883897),
        new google.maps.LatLng(40.3299716,-104.888159),
        new google.maps.LatLng(40.3300043,-104.88792300000001),
        new google.maps.LatLng(40.3300288,-104.8876441),
        new google.maps.LatLng(40.3300411,-104.8873651),
        new google.maps.LatLng(40.33003699999999,-104.887054),
        new google.maps.LatLng(40.3300575,-104.8867536)
    ];

    // Construct the eastNearRoad polygon.
    eastNearRoad = new google.maps.Polygon({
        paths: eastNearRoadCoords,
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

    eastNearRoad.setMap(map);

    // Define the LatLng coordinates for the csgOffice polygon.
    var csgOfficeCoords = [
        new google.maps.LatLng(40.3328362,-104.89388290000001),
        new google.maps.LatLng(40.332689,-104.8938936),
        new google.maps.LatLng(40.3326869,-104.8935449),
        new google.maps.LatLng(40.3328341,-104.8935449)
    ];

    // Construct the csgOffice polygon.
    csgOffice = new google.maps.Polygon({
        paths: csgOfficeCoords,
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

    csgOffice.setMap(map);

    // Define the LatLng coordinates for the bldgG polygon.
    var bldgGCoords = [
        new google.maps.LatLng(40.33316130000001,-104.89280190000001),
        new google.maps.LatLng(40.3328934,-104.89281),
        new google.maps.LatLng(40.3328873,-104.89253910000001),
        new google.maps.LatLng(40.333157199999995,-104.892531)
    ];

    // Construct the bldgG polygon.
    bldgG = new google.maps.Polygon({
        paths: bldgGCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.5
    });

    bldgG.setMap(map);

    // Define the LatLng coordinates for the bldgH polygon.
    var bldgHCoords = [
        new google.maps.LatLng(40.3324845,-104.8928261),
        new google.maps.LatLng(40.332239200000004,-104.8928341),
        new google.maps.LatLng(40.3322269,-104.8928073),
        new google.maps.LatLng(40.33221459999999,-104.8925793),
        new google.maps.LatLng(40.3322473,-104.8925471),
        new google.maps.LatLng(40.3323802,-104.8925498),
        new google.maps.LatLng(40.3323802,-104.89259540000002),
        new google.maps.LatLng(40.33247839999999,-104.89259540000002)
    ];

    // Construct the bldgH polygon.
    bldgH = new google.maps.Polygon({
        paths: bldgHCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.5
    });

    bldgH.setMap(map);

    // Define the LatLng coordinates for the nWsection polygon.
    var nWsectionCoords = [
        new google.maps.LatLng(40.3314458,-104.90068230000001),
        new google.maps.LatLng(40.331462200000004,-104.900068),
        new google.maps.LatLng(40.3314254,-104.899891),
        new google.maps.LatLng(40.331315000000004,-104.8996952),
        new google.maps.LatLng(40.33124750000001,-104.8995799),
        new google.maps.LatLng(40.3311943,-104.8994324),
        new google.maps.LatLng(40.331178,-104.8992741),
        new google.maps.LatLng(40.3311739,-104.8990515),
        new google.maps.LatLng(40.3312454,-104.8985928),
        new google.maps.LatLng(40.33133130000001,-104.89831660000002),
        new google.maps.LatLng(40.33139270000001,-104.8981288),
        new google.maps.LatLng(40.3314192,-104.8979813),
        new google.maps.LatLng(40.3314458,-104.8978686),
        new google.maps.LatLng(40.331544,-104.8977238),
        new google.maps.LatLng(40.3316217,-104.89759240000001),
        new google.maps.LatLng(40.331652299999995,-104.897528),
        new google.maps.LatLng(40.3316769,-104.8974448),
        new google.maps.LatLng(40.331683,-104.8973429),
        new google.maps.LatLng(40.3316728,-104.8972464),
        new google.maps.LatLng(40.3316482,-104.8971632),
        new google.maps.LatLng(40.3316585,-104.8971069),
        new google.maps.LatLng(40.3317198,-104.8970586),
        new google.maps.LatLng(40.331824100000006,-104.896946),
        new google.maps.LatLng(40.3318936,-104.8968816),
        new google.maps.LatLng(40.3319733,-104.8968226),
        new google.maps.LatLng(40.3320776,-104.8967797),
        new google.maps.LatLng(40.3321471,-104.8967662),
        new google.maps.LatLng(40.3322616,-104.8967367),
        new google.maps.LatLng(40.3323639,-104.8967206),
        new google.maps.LatLng(40.3324477,-104.8967099),
        new google.maps.LatLng(40.33256430000001,-104.8967716),
        new google.maps.LatLng(40.33287909999999,-104.8971538),
        new google.maps.LatLng(40.3329221,-104.8972021),
        new google.maps.LatLng(40.3329824,-104.8972303),
        new google.maps.LatLng(40.333046800000005,-104.8972316),
        new google.maps.LatLng(40.3331061,-104.8971994),
        new google.maps.LatLng(40.3331889,-104.89706400000001),
        new google.maps.LatLng(40.33319500000001,-104.8969755),
        new google.maps.LatLng(40.3340241,-104.8979706),
        new google.maps.LatLng(40.3341836,-104.8981959),
        new google.maps.LatLng(40.3343063,-104.8984212),
        new google.maps.LatLng(40.33434720000001,-104.900111),
        new google.maps.LatLng(40.3334721,-104.8992366),
        new google.maps.LatLng(40.33332899999999,-104.8994404),
        new google.maps.LatLng(40.33316949999999,-104.8997569),
        new google.maps.LatLng(40.3330427,-104.8999661),
        new google.maps.LatLng(40.3329732,-104.90024510000002),
        new google.maps.LatLng(40.3329118,-104.900583),
        new google.maps.LatLng(40.332850500000006,-104.9008512),
        new google.maps.LatLng(40.3328096,-104.9010457),
        new google.maps.LatLng(40.33252540000001,-104.9009344),
        new google.maps.LatLng(40.3324201,-104.9008888),
        new google.maps.LatLng(40.3323148,-104.9008593),
        new google.maps.LatLng(40.3321482,-104.9008083),
        new google.maps.LatLng(40.33199989999999,-104.9007721),
        new google.maps.LatLng(40.33187830000001,-104.90074660000002),
        new google.maps.LatLng(40.3317863,-104.9007292),
        new google.maps.LatLng(40.3316278,-104.9007064)
    ];

    // Construct the nWsection polygon.
    nWsection = new google.maps.Polygon({
        paths: nWsectionCoords,
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

    nWsection.setMap(map);

    // Define the LatLng coordinates for the nSection polygon.
    var nSectionCoords = [
        new google.maps.LatLng(40.3335743,-104.8929602),
        new google.maps.LatLng(40.3338851,-104.8929521),
        new google.maps.LatLng(40.3339526,-104.8929414),
        new google.maps.LatLng(40.3340364,-104.8929119),
        new google.maps.LatLng(40.3341161,-104.892869),
        new google.maps.LatLng(40.3342081,-104.89281800000002),
        new google.maps.LatLng(40.3342879,-104.8980698),
        new google.maps.LatLng(40.3340405,-104.8974636),
        new google.maps.LatLng(40.333973,-104.8972088),
        new google.maps.LatLng(40.333926,-104.897005),
        new google.maps.LatLng(40.33389739999999,-104.8966992),
        new google.maps.LatLng(40.3338565,-104.8943415),
        new google.maps.LatLng(40.333862599999996,-104.894194),
        new google.maps.LatLng(40.3335948,-104.8941967)
    ];

    // Construct the nSection polygon.
    nSection = new google.maps.Polygon({
        paths: nSectionCoords,
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

    nSection.setMap(map);

    // Define the LatLng coordinates for the cWsection polygon.
    var cWsectionCoords = [
        new google.maps.LatLng(40.3312598,-104.8973215),
        new google.maps.LatLng(40.3313415,-104.8973536),
        new google.maps.LatLng(40.3314029,-104.8974127),
        new google.maps.LatLng(40.3315869,-104.8975736),
        new google.maps.LatLng(40.3315378,-104.8976755),
        new google.maps.LatLng(40.33146419999999,-104.8977774),
        new google.maps.LatLng(40.3313988,-104.8978794),
        new google.maps.LatLng(40.3313661,-104.8980671),
        new google.maps.LatLng(40.3313252,-104.898228),
        new google.maps.LatLng(40.33126789999999,-104.8984104),
        new google.maps.LatLng(40.33121069999999,-104.8985767),
        new google.maps.LatLng(40.3311821,-104.898802),
        new google.maps.LatLng(40.3311453,-104.8990595),
        new google.maps.LatLng(40.3311453,-104.8992741),
        new google.maps.LatLng(40.33115750000001,-104.8994458),
        new google.maps.LatLng(40.3312189,-104.8996067),
        new google.maps.LatLng(40.3313088,-104.8997676),
        new google.maps.LatLng(40.3313906,-104.8999178),
        new google.maps.LatLng(40.3314438,-104.9000788),
        new google.maps.LatLng(40.3314438,-104.9002397),
        new google.maps.LatLng(40.3314397,-104.9004167),
        new google.maps.LatLng(40.3314274,-104.9006742),
        new google.maps.LatLng(40.3283031,-104.90035240000002),
        new google.maps.LatLng(40.3283276,-104.9001324),
        new google.maps.LatLng(40.32838490000001,-104.8999608),
        new google.maps.LatLng(40.328483000000006,-104.8997945),
        new google.maps.LatLng(40.32860980000001,-104.8996282),
        new google.maps.LatLng(40.3287038,-104.8994672),
        new google.maps.LatLng(40.3287897,-104.8993117),
        new google.maps.LatLng(40.3288306,-104.8991615),
        new google.maps.LatLng(40.3288552,-104.8989522),
        new google.maps.LatLng(40.3288674,-104.898802),
        new google.maps.LatLng(40.3289247,-104.8986733),
        new google.maps.LatLng(40.32904739999999,-104.8984855),
        new google.maps.LatLng(40.3291823,-104.8982763),
        new google.maps.LatLng(40.329235499999996,-104.8980993),
        new google.maps.LatLng(40.3292764,-104.8978955),
        new google.maps.LatLng(40.32930090000001,-104.8976541),
        new google.maps.LatLng(40.3292846,-104.8974502),
        new google.maps.LatLng(40.3292518,-104.8972946),
        new google.maps.LatLng(40.3292028,-104.8971337),
        new google.maps.LatLng(40.33015559999999,-104.8971927),
        new google.maps.LatLng(40.331186100000004,-104.897241)
    ];

    // Construct the cWsection polygon.
    cWsection = new google.maps.Polygon({
        paths: cWsectionCoords,
        strokeColor: '#FF6600',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF6600',
        fillOpacity: 0.35
    });

    cWsection.setMap(map);

    // Define the LatLng coordinates for the southSection polygon.
    var southSectionCoords = [
        new google.maps.LatLng(40.3280004,-104.8867656),
        new google.maps.LatLng(40.327976899999996,-104.88681790000001),
        new google.maps.LatLng(40.3280741,-104.887007),
        new google.maps.LatLng(40.3284186,-104.8874737),
        new google.maps.LatLng(40.3284881,-104.8875274),
        new google.maps.LatLng(40.32854129999999,-104.887636),
        new google.maps.LatLng(40.3285689,-104.88777150000001),
        new google.maps.LatLng(40.32860260000001,-104.8882824),
        new google.maps.LatLng(40.32860370000001,-104.88839640000002),
        new google.maps.LatLng(40.3285566,-104.8884675),
        new google.maps.LatLng(40.3284994,-104.8886298),
        new google.maps.LatLng(40.3284748,-104.8888081),
        new google.maps.LatLng(40.328438,-104.8889516),
        new google.maps.LatLng(40.3283552,-104.8890294),
        new google.maps.LatLng(40.328253,-104.889071),
        new google.maps.LatLng(40.328164,-104.8891863),
        new google.maps.LatLng(40.328115,-104.889358),
        new google.maps.LatLng(40.3280965,-104.8895377),
        new google.maps.LatLng(40.3281558,-104.8898381),
        new google.maps.LatLng(40.328255,-104.89008620000001),
        new google.maps.LatLng(40.3283297,-104.8901868),
        new google.maps.LatLng(40.328393,-104.8903906),
        new google.maps.LatLng(40.3283603,-104.8910236),
        new google.maps.LatLng(40.3283767,-104.8914059),
        new google.maps.LatLng(40.328438,-104.8918846),
        new google.maps.LatLng(40.3284339,-104.8920764),
        new google.maps.LatLng(40.3284002,-104.8922373),
        new google.maps.LatLng(40.3283348,-104.8923929),
        new google.maps.LatLng(40.32808330000001,-104.8926571),
        new google.maps.LatLng(40.32795440000001,-104.8928931),
        new google.maps.LatLng(40.32785220000001,-104.8931292),
        new google.maps.LatLng(40.32775000000001,-104.8934524),
        new google.maps.LatLng(40.327783700000005,-104.89366430000001),
        new google.maps.LatLng(40.3278103,-104.8937984),
        new google.maps.LatLng(40.32782460000001,-104.8939674),
        new google.maps.LatLng(40.3277684,-104.8941216),
        new google.maps.LatLng(40.32766610000001,-104.8942047),
        new google.maps.LatLng(40.3275485,-104.894194),
        new google.maps.LatLng(40.3274821,-104.8943777),
        new google.maps.LatLng(40.3274688,-104.8946004),
        new google.maps.LatLng(40.327603800000006,-104.8950402),
        new google.maps.LatLng(40.3276334,-104.8952186),
        new google.maps.LatLng(40.32769170000001,-104.8953769),
        new google.maps.LatLng(40.3277459,-104.8954868),
        new google.maps.LatLng(40.327797,-104.8955525),
        new google.maps.LatLng(40.327863400000005,-104.8955807),
        new google.maps.LatLng(40.3279319,-104.8955552),
        new google.maps.LatLng(40.327982000000006,-104.8955673),
        new google.maps.LatLng(40.3280454,-104.8956518),
        new google.maps.LatLng(40.3281231,-104.8958154),
        new google.maps.LatLng(40.3281231,-104.89593880000001),
        new google.maps.LatLng(40.32801880000001,-104.896148),
        new google.maps.LatLng(40.3279882,-104.896266),
        new google.maps.LatLng(40.3279994,-104.8963961),
        new google.maps.LatLng(40.3280332,-104.8965168),
        new google.maps.LatLng(40.3280955,-104.8966227),
        new google.maps.LatLng(40.3281374,-104.8967046),
        new google.maps.LatLng(40.3281354,-104.8968185),
        new google.maps.LatLng(40.3281211,-104.896954),
        new google.maps.LatLng(40.3280873,-104.8972249),
        new google.maps.LatLng(40.32809139999999,-104.8974234),
        new google.maps.LatLng(40.32803109999999,-104.897591),
        new google.maps.LatLng(40.3278941,-104.89770900000002),
        new google.maps.LatLng(40.327748899999996,-104.8977667),
        new google.maps.LatLng(40.32768349999999,-104.89776400000001),
        new google.maps.LatLng(40.327617000000004,-104.8979062),
        new google.maps.LatLng(40.3275966,-104.8980054),
        new google.maps.LatLng(40.3275291,-104.8980738),
        new google.maps.LatLng(40.3275046,-104.8981717),
        new google.maps.LatLng(40.327491300000005,-104.8983568),
        new google.maps.LatLng(40.3274944,-104.8985888),
        new google.maps.LatLng(40.32744829999999,-104.89876990000002),
        new google.maps.LatLng(40.3273747,-104.8989402),
        new google.maps.LatLng(40.3273522,-104.8991387),
        new google.maps.LatLng(40.32734609999999,-104.8993117),
        new google.maps.LatLng(40.3272837,-104.8995477),
        new google.maps.LatLng(40.3272612,-104.8973121),
        new google.maps.LatLng(40.32724389999999,-104.8953836),
        new google.maps.LatLng(40.3272234,-104.89333440000001),
        new google.maps.LatLng(40.327204,-104.89213000000001),
        new google.maps.LatLng(40.3271733,-104.8903263),
        new google.maps.LatLng(40.3271478,-104.8887478),
        new google.maps.LatLng(40.3271161,-104.8873289),
        new google.maps.LatLng(40.3270977,-104.8868273),
        new google.maps.LatLng(40.3271161,-104.8867764),
        new google.maps.LatLng(40.3271559,-104.88673750000001),
        new google.maps.LatLng(40.327203,-104.8867254),
        new google.maps.LatLng(40.3279943,-104.8867415)
    ];

    // Construct the southSection polygon.
    southSection = new google.maps.Polygon({
        paths: southSectionCoords,
        strokeColor: '#FF6600',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF6600',
        fillOpacity: 0.35
    });

    southSection.setMap(map);

    // Define the LatLng coordinates for the greenWay polygon.
    var greenWayCoords = [
        new google.maps.LatLng(40.3286139,-104.88676970000002),
        new google.maps.LatLng(40.3300575,-104.8867536),
        new google.maps.LatLng(40.33003699999999,-104.887054),
        new google.maps.LatLng(40.3300411,-104.8873651),
        new google.maps.LatLng(40.3300288,-104.8876119),
        new google.maps.LatLng(40.3300043,-104.88792300000001),
        new google.maps.LatLng(40.3299634,-104.8882395),
        new google.maps.LatLng(40.3299348,-104.8883897),
        new google.maps.LatLng(40.3298734,-104.88849160000001),
        new google.maps.LatLng(40.3298244,-104.8885936),
        new google.maps.LatLng(40.329787599999996,-104.888733),
        new google.maps.LatLng(40.329718,-104.8889959),
        new google.maps.LatLng(40.3296567,-104.8892319),
        new google.maps.LatLng(40.3295954,-104.8894304),
        new google.maps.LatLng(40.32950949999999,-104.8896503),
        new google.maps.LatLng(40.3294236,-104.8898488),
        new google.maps.LatLng(40.329321400000005,-104.8900849),
        new google.maps.LatLng(40.3292314,-104.8903048),
        new google.maps.LatLng(40.3291455,-104.89051940000002),
        new google.maps.LatLng(40.3291128,-104.8906428),
        new google.maps.LatLng(40.3291005,-104.8907715),
        new google.maps.LatLng(40.3291005,-104.8909163),
        new google.maps.LatLng(40.32914139999999,-104.8910451),
        new google.maps.LatLng(40.32918639999999,-104.8911256),
        new google.maps.LatLng(40.32921090000001,-104.89121140000002),
        new google.maps.LatLng(40.32918230000001,-104.891308),
        new google.maps.LatLng(40.3291414,-104.8913884),
        new google.maps.LatLng(40.3291128,-104.8914796),
        new google.maps.LatLng(40.3290924,-104.89162450000002),
        new google.maps.LatLng(40.32908009999999,-104.89190340000002),
        new google.maps.LatLng(40.3290801,-104.8921341),
        new google.maps.LatLng(40.329051500000006,-104.89222530000002),
        new google.maps.LatLng(40.3289901,-104.8923326),
        new google.maps.LatLng(40.3289778,-104.8924077),
        new google.maps.LatLng(40.329014699999995,-104.8925149),
        new google.maps.LatLng(40.3290392,-104.8926651),
        new google.maps.LatLng(40.3290637,-104.8928368),
        new google.maps.LatLng(40.3290637,-104.8930031),
        new google.maps.LatLng(40.32901059999999,-104.8930943),
        new google.maps.LatLng(40.32897380000001,-104.89319090000001),
        new google.maps.LatLng(40.3289165,-104.8934001),
        new google.maps.LatLng(40.3288552,-104.8936522),
        new google.maps.LatLng(40.3287856,-104.8939365),
        new google.maps.LatLng(40.3287243,-104.8941511),
        new google.maps.LatLng(40.3286834,-104.89437640000001),
        new google.maps.LatLng(40.3286589,-104.8945695),
        new google.maps.LatLng(40.3286589,-104.89478950000002),
        new google.maps.LatLng(40.3286711,-104.8949504),
        new google.maps.LatLng(40.328695700000004,-104.8951167),
        new google.maps.LatLng(40.3287202,-104.8952776),
        new google.maps.LatLng(40.3290392,-104.8966348),
        new google.maps.LatLng(40.32907600000001,-104.8967797),
        new google.maps.LatLng(40.3291128,-104.8969781),
        new google.maps.LatLng(40.3291578,-104.8971391),
        new google.maps.LatLng(40.3292191,-104.8973536),
        new google.maps.LatLng(40.3292478,-104.8975199),
        new google.maps.LatLng(40.3292478,-104.8976862),
        new google.maps.LatLng(40.32922730000001,-104.8978633),
        new google.maps.LatLng(40.3291864,-104.8980778),
        new google.maps.LatLng(40.3291292,-104.8982441),
        new google.maps.LatLng(40.3290474,-104.8983783),
        new google.maps.LatLng(40.3289615,-104.898507),
        new google.maps.LatLng(40.3288674,-104.89864650000001),
        new google.maps.LatLng(40.3288143,-104.8987484),
        new google.maps.LatLng(40.3287979,-104.8988718),
        new google.maps.LatLng(40.32879789999999,-104.8990005),
        new google.maps.LatLng(40.32877750000001,-104.8991615),
        new google.maps.LatLng(40.3287325,-104.8992956),
        new google.maps.LatLng(40.3286302,-104.8994887),
        new google.maps.LatLng(40.3285444,-104.8996174),
        new google.maps.LatLng(40.328446199999995,-104.8997462),
        new google.maps.LatLng(40.32836439999999,-104.8999125),
        new google.maps.LatLng(40.3283031,-104.9000573),
        new google.maps.LatLng(40.3282622,-104.9002182),
        new google.maps.LatLng(40.3282458,-104.90035240000002),
        new google.maps.LatLng(40.32728070000001,-104.90024510000002),
        new google.maps.LatLng(40.3272848,-104.8995745),
        new google.maps.LatLng(40.32732570000001,-104.8994243),
        new google.maps.LatLng(40.327354299999996,-104.8993117),
        new google.maps.LatLng(40.32735840000001,-104.8991454),
        new google.maps.LatLng(40.3273829,-104.8989469),
        new google.maps.LatLng(40.327456500000004,-104.89876990000002),
        new google.maps.LatLng(40.3275015,-104.8985875),
        new google.maps.LatLng(40.3275015,-104.8983568),
        new google.maps.LatLng(40.327513800000006,-104.8981744),
        new google.maps.LatLng(40.3275342,-104.8980832),
        new google.maps.LatLng(40.3276038,-104.8980081),
        new google.maps.LatLng(40.3276242,-104.8979115),
        new google.maps.LatLng(40.3276855,-104.8977721),
        new google.maps.LatLng(40.3277469,-104.8977774),
        new google.maps.LatLng(40.3278982,-104.8977184),
        new google.maps.LatLng(40.3280373,-104.897595),
        new google.maps.LatLng(40.3281027,-104.8974234),
        new google.maps.LatLng(40.3280945,-104.8972303),
        new google.maps.LatLng(40.32813130000001,-104.8969513),
        new google.maps.LatLng(40.3281436,-104.8968172),
        new google.maps.LatLng(40.3281436,-104.8966992),
        new google.maps.LatLng(40.3281027,-104.8966134),
        new google.maps.LatLng(40.3280413,-104.8965114),
        new google.maps.LatLng(40.3280086,-104.8963934),
        new google.maps.LatLng(40.3279964,-104.89627),
        new google.maps.LatLng(40.328025,-104.896152),
        new google.maps.LatLng(40.3280863,-104.8960233),
        new google.maps.LatLng(40.32813130000001,-104.8959428),
        new google.maps.LatLng(40.3281313,-104.8958784),
        new google.maps.LatLng(40.3281313,-104.8958087),
        new google.maps.LatLng(40.328049500000006,-104.8956424),
        new google.maps.LatLng(40.3279841,-104.8955566),
        new google.maps.LatLng(40.3279309,-104.8955458),
        new google.maps.LatLng(40.3278614,-104.8955673),
        new google.maps.LatLng(40.32780009999999,-104.8955405),
        new google.maps.LatLng(40.327751,-104.8954761),
        new google.maps.LatLng(40.32769780000001,-104.8953688),
        new google.maps.LatLng(40.3276406,-104.8952132),
        new google.maps.LatLng(40.3276119,-104.8950362),
        new google.maps.LatLng(40.3275588,-104.8948699),
        new google.maps.LatLng(40.3275056,-104.8946929),
        new google.maps.LatLng(40.327477,-104.8945963),
        new google.maps.LatLng(40.3274892,-104.8943818),
        new google.maps.LatLng(40.3275506,-104.8942047),
        new google.maps.LatLng(40.327665100000004,-104.8942155),
        new google.maps.LatLng(40.3277755,-104.8941296),
        new google.maps.LatLng(40.3278328,-104.8939687),
        new google.maps.LatLng(40.3278205,-104.8937917),
        new google.maps.LatLng(40.327791899999994,-104.8936576),
        new google.maps.LatLng(40.3277592,-104.89345370000001),
        new google.maps.LatLng(40.32781640000001,-104.893266),
        new google.maps.LatLng(40.3278614,-104.8931319),
        new google.maps.LatLng(40.327959500000006,-104.8929012),
        new google.maps.LatLng(40.3280904,-104.8926651),
        new google.maps.LatLng(40.3282254,-104.8925257),
        new google.maps.LatLng(40.3283399,-104.8924023),
        new google.maps.LatLng(40.3284094,-104.892236),
        new google.maps.LatLng(40.3284421,-104.8920804),
        new google.maps.LatLng(40.3284462,-104.8918873),
        new google.maps.LatLng(40.3284217,-104.8917049),
        new google.maps.LatLng(40.3283849,-104.8914152),
        new google.maps.LatLng(40.3283685,-104.8910236),
        new google.maps.LatLng(40.32838490000001,-104.8906589),
        new google.maps.LatLng(40.3284012,-104.8903906),
        new google.maps.LatLng(40.3283358,-104.8901814),
        new google.maps.LatLng(40.3282622,-104.8900795),
        new google.maps.LatLng(40.32816400000001,-104.8898327),
        new google.maps.LatLng(40.32810680000001,-104.8895323),
        new google.maps.LatLng(40.3281231,-104.8893607),
        new google.maps.LatLng(40.328172200000004,-104.8891944),
        new google.maps.LatLng(40.328254,-104.8890817),
        new google.maps.LatLng(40.3283562,-104.8890388),
        new google.maps.LatLng(40.328446199999995,-104.8889583),
        new google.maps.LatLng(40.32848299999999,-104.8888081),
        new google.maps.LatLng(40.3285075,-104.8886311),
        new google.maps.LatLng(40.32856480000001,-104.8884755),
        new google.maps.LatLng(40.32860980000001,-104.88840040000001),
        new google.maps.LatLng(40.32860980000001,-104.8882878),
        new google.maps.LatLng(40.328589300000004,-104.8879123),
        new google.maps.LatLng(40.3285771,-104.8877728),
        new google.maps.LatLng(40.328548399999995,-104.887628),
        new google.maps.LatLng(40.32849529999999,-104.8875207),
        new google.maps.LatLng(40.3284176,-104.8874563),
        new google.maps.LatLng(40.3282867,-104.8872846),
        new google.maps.LatLng(40.3281845,-104.8871344),
        new google.maps.LatLng(40.328078100000006,-104.886995),
        new google.maps.LatLng(40.3279841,-104.88681790000001),
        new google.maps.LatLng(40.3280086,-104.8867643)
    ];

    // Construct the greenWay polygon.
    greenWay = new google.maps.Polygon({
        paths: greenWayCoords,
        strokeColor: '#336633',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#336633',
        fillOpacity: 0.35
    });

    greenWay.setMap(map);

    // Define the LatLng coordinates for the CenterSection polygon.
    var CenterSectionCoords = [
        new google.maps.LatLng(40.33159919999999,-104.8970747),
        new google.maps.LatLng(40.3315215,-104.8971176),
        new google.maps.LatLng(40.3313865,-104.8971337),
        new google.maps.LatLng(40.3312516,-104.8971605),
        new google.maps.LatLng(40.331178,-104.8971766),
        new google.maps.LatLng(40.3291823,-104.8970693),
        new google.maps.LatLng(40.3291169,-104.8967367),
        new google.maps.LatLng(40.3289942,-104.8962539),
        new google.maps.LatLng(40.328814300000005,-104.8954707),
        new google.maps.LatLng(40.3287447,-104.895165),
        new google.maps.LatLng(40.3287038,-104.8947948),
        new google.maps.LatLng(40.3287161,-104.8945159),
        new google.maps.LatLng(40.3287447,-104.8943013),
        new google.maps.LatLng(40.3289697,-104.8933733),
        new google.maps.LatLng(40.3290187,-104.8931801),
        new google.maps.LatLng(40.3290883,-104.8930728),
        new google.maps.LatLng(40.32919050000001,-104.8930138),
        new google.maps.LatLng(40.3293336,-104.8929548),
        new google.maps.LatLng(40.3294563,-104.8928905),
        new google.maps.LatLng(40.3295545,-104.8928261),
        new google.maps.LatLng(40.32964030000001,-104.8927832),
        new google.maps.LatLng(40.331006200000004,-104.8927563),
        new google.maps.LatLng(40.3312598,-104.8927242),
        new google.maps.LatLng(40.331317,-104.8928046),
        new google.maps.LatLng(40.3314479,-104.8952937),
        new google.maps.LatLng(40.33146419999999,-104.8957336),
        new google.maps.LatLng(40.33146419999999,-104.8960716),
        new google.maps.LatLng(40.33146419999999,-104.8962539),
        new google.maps.LatLng(40.331501,-104.89637200000001),
        new google.maps.LatLng(40.331546,-104.8964792),
        new google.maps.LatLng(40.3315665,-104.8966187),
        new google.maps.LatLng(40.331591,-104.8968118),
        new google.maps.LatLng(40.3316074,-104.8969835),
        new google.maps.LatLng(40.3316401,-104.8970586)
    ];

    // Construct the CenterSection polygon.
    CenterSection = new google.maps.Polygon({
        paths: CenterSectionCoords,
        strokeColor: '#FF6600',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF6600',
        fillOpacity: 0.35
    });

   CenterSection.setMap(map);

    // Define the LatLng coordinates for the transLoadFacility polygon.
    var transLoadFacilityCoords = [
        new google.maps.LatLng(40.3321512,-104.8950335),
        new google.maps.LatLng(40.332184,-104.8952374),
        new google.maps.LatLng(40.3322494,-104.8954546),
        new google.maps.LatLng(40.3323312,-104.8956504),
        new google.maps.LatLng(40.3324314,-104.8958087),
        new google.maps.LatLng(40.3324927,-104.89589180000002),
        new google.maps.LatLng(40.33327370000001,-104.8968521),
        new google.maps.LatLng(40.3331858,-104.8969728),
        new google.maps.LatLng(40.33317970000001,-104.8970613),
        new google.maps.LatLng(40.3331408,-104.897131),
        new google.maps.LatLng(40.333102,-104.89719),
        new google.maps.LatLng(40.333046800000005,-104.8972222),
        new google.maps.LatLng(40.3329855,-104.8972195),
        new google.maps.LatLng(40.3329241,-104.89719),
        new google.maps.LatLng(40.33287909999999,-104.8971418),
        new google.maps.LatLng(40.3326624,-104.8968789),
        new google.maps.LatLng(40.3322985,-104.8964337),
        new google.maps.LatLng(40.3321962,-104.8962995),
        new google.maps.LatLng(40.3321533,-104.8962271),
        new google.maps.LatLng(40.3321144,-104.8961627),
        new google.maps.LatLng(40.332094000000005,-104.8960957),
        new google.maps.LatLng(40.3320817,-104.896026),
        new google.maps.LatLng(40.332071500000005,-104.8959026),
        new google.maps.LatLng(40.3320592,-104.8957551),
        new google.maps.LatLng(40.332049000000005,-104.8956451),
        new google.maps.LatLng(40.3320265,-104.8955271),
        new google.maps.LatLng(40.331997900000005,-104.8954412),
        new google.maps.LatLng(40.3319733,-104.8953742),
        new google.maps.LatLng(40.331957,-104.89529100000001),
        new google.maps.LatLng(40.331957,-104.8952186),
        new google.maps.LatLng(40.3319815,-104.8951489),
        new google.maps.LatLng(40.33202450000001,-104.89509250000002),
        new google.maps.LatLng(40.3320879,-104.8950577)
    ];

    // Construct the transLoadFacility polygon.
    transLoadFacility = new google.maps.Polygon({
        paths: transLoadFacilityCoords,
        strokeColor: '#999933',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#999933',
        fillOpacity: 0.75
    });

   transLoadFacility.setMap(map);

    // Define the LatLng coordinates for the northEastSection polygon.
    var northEastSectionCoords = [
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

    // Construct the northEastSection polygon.
    northEastSection = new google.maps.Polygon({
        paths: northEastSectionCoords,
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

   northEastSection.setMap(map);

    // Define the LatLng coordinates for the grainStorageSection polygon.
    var grainStorageSectionCoords = [
      new google.maps.LatLng(40.3331899,-104.8889422),
      new google.maps.LatLng(40.3340078,-104.8889261),
      new google.maps.LatLng(40.33404049999999,-104.8917425),
      new google.maps.LatLng(40.3332267,-104.8917532)
    ];

    // Construct the grainStorageSection polygon.
    grainStorageSection = new google.maps.Polygon({
        paths: grainStorageSectionCoords,
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

   grainStorageSection.setMap(map);

    // Define the LatLng coordinates for the nearSubstationSection polygon.
    var nearSubstationSectionCoords = [
      new google.maps.LatLng(40.3332165,-104.8879096),
      new google.maps.LatLng(40.3340037,-104.8878962),
      new google.maps.LatLng(40.3340078,-104.8889261),
      new google.maps.LatLng(40.3332349,-104.8889261)
    ];

    // Construct the nearSubstationSection polygon.
    nearSubstationSection = new google.maps.Polygon({
        paths: nearSubstationSectionCoords,
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

   nearSubstationSection.setMap(map);

    // Define the LatLng coordinates for the btmDumpSection polygon.
    var btmDumpSectionCoords = [
        new google.maps.LatLng(40.3321492,-104.8913214),
        new google.maps.LatLng(40.332278,-104.8913133),
        new google.maps.LatLng(40.3322882,-104.8915467),
        new google.maps.LatLng(40.33230459999999,-104.8917317),
        new google.maps.LatLng(40.332337300000006,-104.8918578),
        new google.maps.LatLng(40.3323598,-104.891898),
        new google.maps.LatLng(40.332376100000005,-104.8919329),
        new google.maps.LatLng(40.332339299999994,-104.8919758),
        new google.maps.LatLng(40.3323107,-104.8920241),
        new google.maps.LatLng(40.332267800000004,-104.8920858),
        new google.maps.LatLng(40.33223709999999,-104.8921475),
        new google.maps.LatLng(40.3322126,-104.8922119),
        new google.maps.LatLng(40.3321799,-104.8923057),
        new google.maps.LatLng(40.3321349,-104.8923889),
        new google.maps.LatLng(40.33211240000001,-104.89243180000001),
        new google.maps.LatLng(40.3320756,-104.8924506),
        new google.maps.LatLng(40.3320265,-104.8924452),
        new google.maps.LatLng(40.3319979,-104.8924103),
        new google.maps.LatLng(40.3319856,-104.8923486),
        new google.maps.LatLng(40.3319918,-104.8922789),
        new google.maps.LatLng(40.3320204,-104.8921636),
        new google.maps.LatLng(40.3320592,-104.8920482),
        new google.maps.LatLng(40.3320879,-104.8919356),
        new google.maps.LatLng(40.33211239999999,-104.8918095),
        new google.maps.LatLng(40.3321287,-104.8916808),
        new google.maps.LatLng(40.332139,-104.8915762),
        new google.maps.LatLng(40.3321431,-104.8914555)
    ];

    // Construct the btmDumpSection polygon.
    btmDumpSection = new google.maps.Polygon({
        paths: btmDumpSectionCoords,
        strokeColor: '#00FFCC',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#00FFCC',
        fillOpacity: 0.5
    });

   btmDumpSection.setMap(map);

    // Define the LatLng coordinates for the oilStorSection polygon.
    var oilStorSectionCoords = [
        new google.maps.LatLng(40.331893599999994,-104.8928314),
        new google.maps.LatLng(40.3320838,-104.8928314),
        new google.maps.LatLng(40.332096,-104.8942235),
        new google.maps.LatLng(40.33172999999999,-104.8942235),
        new google.maps.LatLng(40.3317055,-104.8941913),
        new google.maps.LatLng(40.3316789,-104.8941618),
        new google.maps.LatLng(40.3316523,-104.89394720000001),
        new google.maps.LatLng(40.331636,-104.8937434),
        new google.maps.LatLng(40.3316258,-104.8935342),
        new google.maps.LatLng(40.3316094,-104.8933035),
        new google.maps.LatLng(40.3316053,-104.8931131),
        new google.maps.LatLng(40.3316012,-104.8930031),
        new google.maps.LatLng(40.3316155,-104.8929736),
        new google.maps.LatLng(40.3316953,-104.8929736),
        new google.maps.LatLng(40.33172390000001,-104.8929521),
        new google.maps.LatLng(40.3317443,-104.89292),
        new google.maps.LatLng(40.3317771,-104.892877),
        new google.maps.LatLng(40.3318118,-104.8928449),
        new google.maps.LatLng(40.3318486,-104.8928261)
    ];

    // Construct the oilStorSection polygon.
    oilStorSection = new google.maps.Polygon({
        paths: oilStorSectionCoords,
        strokeColor: '#663399',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#663399',
        fillOpacity: 0.5
    });

   oilStorSection.setMap(map);

    // Define the LatLng coordinates for the grainElev polygon.
    var grainElevCoords = [
        new google.maps.LatLng(40.332037799999995,-104.8942262),
        new google.maps.LatLng(40.332096,-104.8942235),
        new google.maps.LatLng(40.332095,-104.894013),
        new google.maps.LatLng(40.3324324,-104.8940183),
        new google.maps.LatLng(40.3324344,-104.894131),
        new google.maps.LatLng(40.3325459,-104.8941296),
        new google.maps.LatLng(40.3325336,-104.8946393),
        new google.maps.LatLng(40.332528499999995,-104.8947197),
        new google.maps.LatLng(40.3325131,-104.8948109),
        new google.maps.LatLng(40.3324825,-104.8948686),
        new google.maps.LatLng(40.3324487,-104.8949088),
        new google.maps.LatLng(40.3324119,-104.8949356),
        new google.maps.LatLng(40.3323772,-104.894945),
        new google.maps.LatLng(40.3323424,-104.894937),
        new google.maps.LatLng(40.3323107,-104.8949128),
        new google.maps.LatLng(40.3322831,-104.8948766),
        new google.maps.LatLng(40.3322555,-104.8948351),
        new google.maps.LatLng(40.33223,-104.894772),
        new google.maps.LatLng(40.3322116,-104.89470630000001),
        new google.maps.LatLng(40.33220240000001,-104.8946366),
        new google.maps.LatLng(40.33209500000001,-104.8946406),
        new google.maps.LatLng(40.3320868,-104.8944032),
        new google.maps.LatLng(40.3320418,-104.8944032)
    ];

    // Construct the grainElev polygon.
    grainElev = new google.maps.Polygon({
        paths: grainElevCoords,
        strokeColor: '#FFFF00',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FFFF00',
        fillOpacity: 0.5
    });

   grainElev.setMap(map);

    // Define the LatLng coordinates for the bldgP polygon.
    var bldgPCoords = [
        new google.maps.LatLng(40.3324682,-104.8930031),
        new google.maps.LatLng(40.33248040000001,-104.8935878),
        new google.maps.LatLng(40.3321972,-104.8935905),
        new google.maps.LatLng(40.3321962,-104.8933893),
        new google.maps.LatLng(40.3321277,-104.8933907),
        new google.maps.LatLng(40.3321267,-104.8931479),
        new google.maps.LatLng(40.3321625,-104.8931466),
        new google.maps.LatLng(40.33216250000001,-104.8930299),
        new google.maps.LatLng(40.332186,-104.8930286),
        new google.maps.LatLng(40.332186,-104.8930138)
    ];

    // Construct the bldgP polygon.
    bldgP = new google.maps.Polygon({
        paths: bldgPCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.5
    });

   bldgP.setMap(map);

    // Define the LatLng coordinates for the bldgI polygon.
    var bldgICoords = [
        new google.maps.LatLng(40.333192999999994,-104.8941511),
        new google.maps.LatLng(40.3331899,-104.8945642),
        new google.maps.LatLng(40.3330805,-104.8945655),
        new google.maps.LatLng(40.3330754,-104.8941256),
        new google.maps.LatLng(40.33317460000001,-104.894127)
    ];

    // Construct the bldgI polygon.
    bldgI = new google.maps.Polygon({
        paths: bldgICoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.5
    });

   bldgI.setMap(map);

    // Define the LatLng coordinates for the bldgL polygon.
    var bldgLCoords = [
        new google.maps.LatLng(40.3335201,-104.8936334),
        new google.maps.LatLng(40.3335334,-104.8941927),
        new google.maps.LatLng(40.3334394,-104.8941953),
        new google.maps.LatLng(40.3334383,-104.8942879),
        new google.maps.LatLng(40.3333882,-104.8942865),
        new google.maps.LatLng(40.3333862,-104.894198),
        new google.maps.LatLng(40.3332973,-104.8941953),
        new google.maps.LatLng(40.33329419999999,-104.8939633),
        new google.maps.LatLng(40.3332492,-104.893962),
        new google.maps.LatLng(40.3332502,-104.8938279),
        new google.maps.LatLng(40.3332932,-104.8938265),
        new google.maps.LatLng(40.3332901,-104.8936026),
        new google.maps.LatLng(40.33331770000001,-104.8936026),
        new google.maps.LatLng(40.3333177,-104.8936401)
    ];

    // Construct the bldgL polygon.
    bldgL = new google.maps.Polygon({
        paths: bldgLCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.5
    });

   bldgL.setMap(map);

    // Define the LatLng coordinates for the bldgJ polygon.
    var bldgJCoords = [
        new google.maps.LatLng(40.333559,-104.89494100000002),
        new google.maps.LatLng(40.3335661,-104.8953916),
        new google.maps.LatLng(40.333424,-104.8953916),
        new google.maps.LatLng(40.333421,-104.8949423)
    ];

    // Construct the bldgJ polygon.
    bldgJ = new google.maps.Polygon({
        paths: bldgJCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.5
    });

   bldgJ.setMap(map);

    // Define the LatLng coordinates for the bldgK polygon.
    var bldgKCoords = [
        new google.maps.LatLng(40.3337307,-104.8958409),
        new google.maps.LatLng(40.333736900000005,-104.8962124),
        new google.maps.LatLng(40.33365200000001,-104.8962164),
        new google.maps.LatLng(40.333651,-104.89595490000002),
        new google.maps.LatLng(40.3336213,-104.8959562),
        new google.maps.LatLng(40.3336224,-104.8958744),
        new google.maps.LatLng(40.3336489,-104.8958744),
        new google.maps.LatLng(40.3336489,-104.8958409)
    ];

    // Construct the bldgK polygon.
    bldgK = new google.maps.Polygon({
        paths: bldgKCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.5
    });

   bldgK.setMap(map);

    // Define the LatLng coordinates for the truckScale polygon.
    var truckScaleCoords = [
        new google.maps.LatLng(40.3341294,-104.8959669),
        new google.maps.LatLng(40.334131500000005,-104.8962298),
        new google.maps.LatLng(40.3340855,-104.8962285),
        new google.maps.LatLng(40.33408550000001,-104.8961882),
        new google.maps.LatLng(40.3340609,-104.8961882),
        new google.maps.LatLng(40.3340609,-104.8961279),
        new google.maps.LatLng(40.3340221,-104.8961225),
        new google.maps.LatLng(40.334022100000006,-104.89606620000002),
        new google.maps.LatLng(40.33403129999999,-104.8960675),
        new google.maps.LatLng(40.3340313,-104.8960353),
        new google.maps.LatLng(40.33405580000001,-104.8960327),
        new google.maps.LatLng(40.3340568,-104.8959669)
    ];

    // Construct the truckScale polygon.
    truckScale = new google.maps.Polygon({
        paths: truckScaleCoords,
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

   truckScale.setMap(map);

    // Define the LatLng coordinates for the rrTrack 1 polyline.
    var rrTrack1Coords = [
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

    // Construct the rrTrack 1 polyline.
    rrTrack1 = new google.maps.Polyline({
        path: rrTrack1Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack1.setMap(map);

    // Define the LatLng coordinates for the rrTrack 2 polyline.
    var rrTrack2Coords = [
        new google.maps.LatLng(40.3321063,-104.8944864),
        new google.maps.LatLng(40.3321134,-104.8946004),
        new google.maps.LatLng(40.3321216,-104.8947251),
        new google.maps.LatLng(40.332139,-104.8948538),
        new google.maps.LatLng(40.3321635,-104.895004),
        new google.maps.LatLng(40.3321921,-104.8951381),
        new google.maps.LatLng(40.3322269,-104.8952562),
        new google.maps.LatLng(40.332267800000004,-104.89537020000002),
        new google.maps.LatLng(40.3323046,-104.8954506),
        new google.maps.LatLng(40.3323475,-104.8955271),
        new google.maps.LatLng(40.3324068,-104.89561290000002),
        new google.maps.LatLng(40.3325683,-104.8958422),
        new google.maps.LatLng(40.332688,-104.8959965),
        new google.maps.LatLng(40.3339566,-104.8975696),
        new google.maps.LatLng(40.3340149,-104.89764470000001),
        new google.maps.LatLng(40.3340722,-104.8977198),
        new google.maps.LatLng(40.3341243,-104.8978029),
        new google.maps.LatLng(40.334173400000005,-104.8978887),
        new google.maps.LatLng(40.3342194,-104.8979706),
        new google.maps.LatLng(40.3342552,-104.898043),
        new google.maps.LatLng(40.334294,-104.8981288),
        new google.maps.LatLng(40.3343349,-104.8982254),
        new google.maps.LatLng(40.3343737,-104.8983233),
        new google.maps.LatLng(40.33440850000001,-104.8984158),
        new google.maps.LatLng(40.3344382,-104.8985083),
        new google.maps.LatLng(40.3344637,-104.8986049),
        new google.maps.LatLng(40.3344934,-104.8987135),
        new google.maps.LatLng(40.3345107,-104.8988114),
        new google.maps.LatLng(40.3345271,-104.8989174),
        new google.maps.LatLng(40.3345373,-104.8989925)
    ];

    // Construct the rrTrack 2 polyline.
    rrTrack2 = new google.maps.Polyline({
        path: rrTrack2Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack2.setMap(map);

    // Define the LatLng coordinates for the rrTrack 3 polyline.
    var rrTrack3Coords = [
        new google.maps.LatLng(40.3321482,-104.8931412),
        new google.maps.LatLng(40.3321645,-104.8945105),
        new google.maps.LatLng(40.3321707,-104.8946527),
        new google.maps.LatLng(40.3321819,-104.89478950000002),
        new google.maps.LatLng(40.3322013,-104.8949155),
        new google.maps.LatLng(40.3322248,-104.8950416),
        new google.maps.LatLng(40.3322545,-104.895165),
        new google.maps.LatLng(40.3322862,-104.8952709),
        new google.maps.LatLng(40.33233010000001,-104.8953769),
        new google.maps.LatLng(40.3323915,-104.895511),
        new google.maps.LatLng(40.3324549,-104.8956491),
        new google.maps.LatLng(40.3325142,-104.8957524),
        new google.maps.LatLng(40.3325683,-104.8958422)
    ];

    // Construct the rrTrack 3 polyline.
    rrTrack3 = new google.maps.Polyline({
        path: rrTrack3Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack3.setMap(map);

    // Define the LatLng coordinates for the rrTrack 4 polyline.
    var rrTrack4Coords = [
        new google.maps.LatLng(40.332554,-104.89537020000002),
        new google.maps.LatLng(40.3325765,-104.8954788),
        new google.maps.LatLng(40.3326031,-104.8955821),
        new google.maps.LatLng(40.3326348,-104.895688),
        new google.maps.LatLng(40.3326644,-104.8957752),
        new google.maps.LatLng(40.332700200000005,-104.8958637),
        new google.maps.LatLng(40.3327411,-104.8959509),
        new google.maps.LatLng(40.3327922,-104.8960488),
        new google.maps.LatLng(40.3328393,-104.8961319),
        new google.maps.LatLng(40.3328894,-104.8962164),
        new google.maps.LatLng(40.3329323,-104.89628880000001),
        new google.maps.LatLng(40.3329814,-104.8963626)
    ];

    // Construct the rrTrack 4 polyline.
    rrTrack4 = new google.maps.Polyline({
        path: rrTrack4Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack4.setMap(map);

    // Define the LatLng coordinates for the rrTrack 5 polyline.
    var rrTrack5Coords = [
        new google.maps.LatLng(40.3326706,-104.8949879),
        new google.maps.LatLng(40.3326726,-104.8951462),
        new google.maps.LatLng(40.3326839,-104.8952763),
        new google.maps.LatLng(40.3326972,-104.8953728),
        new google.maps.LatLng(40.3327196,-104.8954989),
        new google.maps.LatLng(40.3327452,-104.8956142),
        new google.maps.LatLng(40.3327697,-104.8957095),
        new google.maps.LatLng(40.3328025,-104.8958234),
        new google.maps.LatLng(40.3328311,-104.8959066),
        new google.maps.LatLng(40.3328679,-104.8960125),
        new google.maps.LatLng(40.3329047,-104.8961024),
        new google.maps.LatLng(40.3329486,-104.896199),
        new google.maps.LatLng(40.3329947,-104.8962834),
        new google.maps.LatLng(40.33304580000001,-104.896376),
        new google.maps.LatLng(40.3330938,-104.8964605),
        new google.maps.LatLng(40.3331429,-104.8965463),
        new google.maps.LatLng(40.333193,-104.8966241)
    ];

    // Construct the rrTrack 5 polyline.
    rrTrack5 = new google.maps.Polyline({
        path: rrTrack5Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack5.setMap(map);

    // Define the LatLng coordinates for the rrTrack 6 polyline.
    var rrTrack6Coords = [
        new google.maps.LatLng(40.3329865,-104.8949946),
        new google.maps.LatLng(40.3330171,-104.8951623),
        new google.maps.LatLng(40.3330989,-104.8956276),
        new google.maps.LatLng(40.3331214,-104.8957309),
        new google.maps.LatLng(40.333147,-104.8958395),
        new google.maps.LatLng(40.3331725,-104.8959307),
        new google.maps.LatLng(40.3332124,-104.8960474),
        new google.maps.LatLng(40.3332472,-104.8961319),
        new google.maps.LatLng(40.33328190000001,-104.8962097),
        new google.maps.LatLng(40.3339137,-104.8974489),
        new google.maps.LatLng(40.3339607,-104.897532),
        new google.maps.LatLng(40.3340067,-104.8976085),
        new google.maps.LatLng(40.3340967,-104.8977587)
    ];

    // Construct the rrTrack 6 polyline.
    rrTrack6 = new google.maps.Polyline({
        path: rrTrack6Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack6.setMap(map);

    // Define the LatLng coordinates for the rrTrack 7 polyline.
    var rrTrack7Coords = [
        new google.maps.LatLng(40.3332727,-104.8939794),
        new google.maps.LatLng(40.3332952,-104.8954774),
        new google.maps.LatLng(40.3333013,-104.8955968),
        new google.maps.LatLng(40.3333116,-104.8957054),
        new google.maps.LatLng(40.3333259,-104.895802),
        new google.maps.LatLng(40.3333422,-104.8958865),
        new google.maps.LatLng(40.3333698,-104.8959924),
        new google.maps.LatLng(40.3334015,-104.8960997),
        new google.maps.LatLng(40.3334322,-104.8961923),
        new google.maps.LatLng(40.3334772,-104.89630490000002),
        new google.maps.LatLng(40.3342654,-104.8980591),
        new google.maps.LatLng(40.3343063,-104.8981583)
    ];

    // Construct the rrTrack 7 polyline.
    rrTrack7 = new google.maps.Polyline({
        path: rrTrack7Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack7.setMap(map);

    // Define the LatLng coordinates for the rrTrack 8 polyline.
    var rrTrack8Coords = [
        new google.maps.LatLng(40.3330376,-104.8949718),
        new google.maps.LatLng(40.333149,-104.8956008),
        new google.maps.LatLng(40.3331828,-104.8957349),
        new google.maps.LatLng(40.3332175,-104.8958422),
        new google.maps.LatLng(40.3332523,-104.8959428),
        new google.maps.LatLng(40.3333167,-104.8960997),
        new google.maps.LatLng(40.3335487,-104.8966482),
        new google.maps.LatLng(40.3335896,-104.8967555),
        new google.maps.LatLng(40.3336356,-104.8968816),
        new google.maps.LatLng(40.3336806,-104.8969929)
    ];

    // Construct the rrTrack 8 polyline.
    rrTrack8 = new google.maps.Polyline({
        path: rrTrack8Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack8.setMap(map);

    // Define the LatLng coordinates for the rrTrack 9 polyline.
    var rrTrack9Coords = [
        new google.maps.LatLng(40.3337788,-104.89446760000001),
        new google.maps.LatLng(40.3338156,-104.8965409),
        new google.maps.LatLng(40.3338176,-104.8966335),
        new google.maps.LatLng(40.3338227,-104.89672200000001),
        new google.maps.LatLng(40.3338319,-104.8968145),
        new google.maps.LatLng(40.3338462,-104.8969004),
        new google.maps.LatLng(40.3338657,-104.8969875),
        new google.maps.LatLng(40.3339372,-104.8972397),
        new google.maps.LatLng(40.3339699,-104.897351),
        new google.maps.LatLng(40.3340037,-104.8974515),
        new google.maps.LatLng(40.3340671,-104.8976165)
    ];

    // Construct the rrTrack 9 polyline.
    rrTrack9 = new google.maps.Polyline({
        path: rrTrack9Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack9.setMap(map);

    // Define the LatLng coordinates for the rrTrack 10 polyline.
    var rrTrack10Coords = [
        new google.maps.LatLng(40.3338135,-104.89440050000002),
        new google.maps.LatLng(40.3338514,-104.8966214),
        new google.maps.LatLng(40.3338565,-104.896726),
        new google.maps.LatLng(40.3338667,-104.896832),
        new google.maps.LatLng(40.333881,-104.8969433),
        new google.maps.LatLng(40.3338974,-104.8970532),
        new google.maps.LatLng(40.3339158,-104.8971458),
        new google.maps.LatLng(40.3339403,-104.8972517)
    ];

    // Construct the rrTrack 10 polyline.
    rrTrack10 = new google.maps.Polyline({
        path: rrTrack10Coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
    });

    rrTrack10.setMap(map);


    var InfoWindow = new google.maps.InfoWindow({
    });

    var railYardContent = '<div id="railYard" class="infoWindow">\
        <h5>Railyard</h5>\
        <h6>Two on-site locomotives</h6>\
        <h6>Transloading</h6>\
        <h6><a href="#contact">Inquiries</a></h6>\
        <h6><a href=#facilities>More Info</a></h6></div>';

    google.maps.event.addListener(railYard, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(railYardContent);
    });

    var AnnexAreaContent = '<div id="AnnexArea" class="infoWindow">\
        <h5>Parish Annex</h5>\
        <h6>Residential</h6>\
        <h6>Commercial</h6>\
        <h6><a href=#annex>More Info</a></h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';


    google.maps.event.addListener(annexArea, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(AnnexAreaContent);
    });
    
    var waterAreaContent = '<div id="waterArea" class="infoWindow">\
        <h5>Water sales & storage</h5>\
        <h6>Multiple Sources</h6>\
        <h6>600 gpm loading facility</h6>\
        <h6>183 ac.ft. storage</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(waterArea, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(waterAreaContent);
    });
    
    var elecAreaContent = '<div id="elecArea" class="infoWindow">\
        <h5>64 mW sub-station</h5>\
        <h6>built in the mid 1990s</h6>\
        <h6>natural gas, city sewer & water also available</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(elecArea, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(elecAreaContent);
    });
    
    var eastNearRoadContent = '<div id="eastNearRoad" class="infoWindow">\
        <h5>7.1 acres potential industrial</h5>\
        <h6>county road 19 frontage</h6>\
        <h6>All or part</h6>\
        <h6>Land lease / build to suite</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(eastNearRoad, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(eastNearRoadContent);
    });
    
    var csgOfficeContent = '<div id="csgOffice" class="infoWindow">\
        <h5>Colorado Sweet Gold offices</h5>\
        <h6>8714 Colorado 60, Johnstown, CO 80534</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(csgOffice, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(csgOfficeContent);
    });
    
    var bldgGContent = '<div id="bldgG" class="infoWindow">\
        <h5>Office Building</h5>\
        <h6>2400 sq. ft.</h6>\
        <h6>full basement</h6>\
        <h6>Leased till 2019</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(bldgG, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(bldgGContent);
    });
    
    var bldgHContent = '<div id="bldgH" class="infoWindow">\
        <h5>Office Building</h5>\
        <h6>Leased till 2019</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(bldgH, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(bldgHContent);
    });
    
    var nWsectionContent = '<div id="nWsection" class="infoWindow">\
        <h5>20.9 Acres</h5>\
        <h6>Potential Industrial</h6>\
        <h6>Land Lease / Build to suit</h6>\
        <h6>All or part</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(nWsection, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(nWsectionContent);
    });
    
    var nSectionContent = '<div id="nSection" class="infoWindow">\
        <h5>North section</h5>\
        <h6>Highway Frontage</h6>\
        <h6>Available</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(nSection, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(nSectionContent);
    });
    
    var cWsectionContent = '<div id="cWsection" class="infoWindow">\
        <h5>Ag Use</h5>\
        <h6>18.9 acres</h6>\
        <h6>Annual lease</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(cWsection, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(cWsectionContent);
    });
    
    var southSectionContent = '<div id="southSection" class="infoWindow">\
        <h5>Ag Use</h5>\
        <h6>24.6 acres</h6>\
        <h6>Annual lease</h6>\
        <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(southSection, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(southSectionContent);
    });
    
    var greenWayContent = '<div id="greenWay" class="infoWindow">\
    <h5>Greenway</h5>\
    <h6><a href="http://en.wikipedia.org/wiki/Little_Thompson_River"\
    target="blank">Little Thompson River</a></h6>\
    <h6><a href="http://www.townofjohnstown.com/documents/12/jm%20master%20plan%20with%20maps.pdf"\
     target="_blank">Proposed nature trail</a></h6></div>';

    google.maps.event.addListener(greenWay, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(greenWayContent);
    });
    
    var CenterSectionContent = '<div id="CenterSection" class="infoWindow">\
    <h5>Ag Use</h5>\
    <h6>25.5 acres</h6>\
    <h6>Annual lease</h6>\
    <h6><a href="#contact">Inquiries</a></h6></div>';

    google.maps.event.addListener(CenterSection, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(CenterSectionContent);
    });
    
    var transLoadFacilityContent = '<div id="transLoadFacility" class="infoWindow">\
        <h5>Transloading Facility</h5>\
        <h6>Manned Locomotives</h6>\
        <h6>Oil Storage</h6>\
        <h6><a href="#contact">inquiries</a></h6></div>';

    google.maps.event.addListener(transLoadFacility, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(transLoadFacilityContent);
    });
    
    var northEastSectionContent = '<div id="northEastSection" class="infoWindow">\
        <h5>Occupied</h5>\
        <h6>11.5 acres</h6></div>';

    google.maps.event.addListener(northEastSection, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(northEastSectionContent);
    });
    
    var btmDumpSectionContent = '<div id="btmDumpSection" class="infoWindow">\
        <h5>Bottom Dump rail car station</h5>\
        <h6>elevator</h6>\
        <h6>dry material transfer</h6>\
        <h6><a href="#contact">inquiries</a></h6></div>';

    google.maps.event.addListener(btmDumpSection, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(btmDumpSectionContent);
    });
    
    var oilStorContent = '<div id="oilStor" class="infoWindow">\
        <h5>Liquid Storage</h5>\
        <h6>2 - 1 million Gallon tanks</h6>\
        <h6>1- 350,000 gallon tank</h6>\
        <h6>Rail car access</h6>\
        <h6>Truck access</h6>\
        <h6><a href="#contact">inquiries</a></h6></div>';

    google.maps.event.addListener(oilStorSection, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(oilStorContent);
    });
    
    var grainElevContent = '<div id="grainElev" class="infoWindow">\
        <h5>Grain Elevator</h5>\
        <h6>75,000 bushel capacity</h6>\
        <h6>Leased till 2019</h6></div>';

    google.maps.event.addListener(grainElev, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(grainElevContent);
    });

    var bldgPContent = '<div id="bldgP" class="infoWindow">\
        <h5>Brick warehouse</h5>\
        <h6>18,439 Square Feet</h6>\
        <h6>Rail & truck dock</h6>\
        <h6>Infrared heating</h6>\
        <h6>440 3 phase elec.</h6>\
        <h6>City utilities</h6>\
        <h6>Offices</h6>\
        <h6><a href="#contact">inquiries</a></h6></div>';

    google.maps.event.addListener(bldgP, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(bldgPContent);
    });

    var bldgIContent = '<div id="bldgI" class="infoWindow">\
        <h5>Maintenance Shop</h5>\
        <h6>4,169 Square Feet</h6>\
        <h6><a href="#contact">inquiries</a></h6></div>';

    google.maps.event.addListener(bldgI, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(bldgIContent);
    });

    var bldgLContent = '<div id="bldgL" class="infoWindow">\
        <h5>Commodities warehouse</h5>\
        <h6>11,325 Square Feet</h6>\
        <h6>Rail & truck dock</h6>\
        <h6>Leased till 2019</h6></div>';

    google.maps.event.addListener(bldgL, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(bldgLContent);
    });

    var bldgJContent = '<div id="bldgJ" class="infoWindow">\
        <h5>Warehouse</h5>\
        <h6>6,000 Square Feet</h6>\
        <h6>Vehicle access</h6>\
        <h6>440 3 phase elec.</h6>\
        <h6>City utilities</h6>\
        <h6>Offices</h6>\
        <h6><a href="#contact">inquiries</a></h6>\
        </div>';

    google.maps.event.addListener(bldgJ, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(bldgJContent);
    });

    var bldgKContent = '<div id="bldgK" class="infoWindow">\
        <h5>Brick warehouse</h5>\
        <h6>18,439 Square Feet</h6>\
        <h6>Rail & truck dock</h6>\
        <h6>Infrared heating</h6>\
        <h6>440 3 phase elec.</h6>\
        <h6>City utilities</h6>\
        <h6>Offices</h6>\
        <h6><a href="#contact">inquiries</a></h6>\
        </div>';

    google.maps.event.addListener(bldgK, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(bldgKContent);
    });

    var truckScaleContent = '<div id="truckScale" class="infoWindow">\
        <h5>Scalehouse</h5>\
        <h6>M-F 6am-6pm</h6>\
        <h6>Sat 11am-5pm</h6>\
        <h6>Sun 6am-5pm</h6>\
        <h6>8714 Colorado 60, Johnstown, CO</h6></div>';

    google.maps.event.addListener(truckScale, 'click', function(event) {
        InfoWindow.open(map);
        InfoWindow.setPosition(event.latLng);
        InfoWindow.setContent(truckScaleContent);
    });
    
    
}

google.maps.event.addDomListener(window, 'load', init);

/*(window).resize(function () {
    var h = $(window).height(),
        offsetTop = 60; // Calculate the top offset

('#map').css('height', (h - offsetTop));
}).resize();*/