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
        strokeColor: '#FF6600',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF6600',
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
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
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
        strokeColor: '#66FF66',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#66FF66',
        fillOpacity: 0.35
    });

    bldgH.setMap(map);

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