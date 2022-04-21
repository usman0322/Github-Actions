import { setCenterAndRadius, radiusInM } from '../../src/index';
var zoomChange = false;
  export function initMap() {
    var map = new google.maps.Map(document.getElementById('map-main'), {
        zoom: 8,
        scrollwheel: false,
        
        center: new google.maps.LatLng(43.40988780000001, -79.8161073),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        panControl: true,
        fullscreenControl: true,
        navigationControl: false,
        streetViewControl: true,
        animation: google.maps.Animation.BOUNCE,
        gestureHandling: 'cooperative',
        styles: [{featureType:"administrative",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{gamma:"0.00"},{weight:"0.01"},{visibility:"on"},{color:"#8c8c8c"}]},{featureType:"administrative.neighborhood",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#898989"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"},{weight:"4.00"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{visibility:"simplified"},{color:"#ffffff"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"landscape.natural",elementType:"labels.text.fill",stylers:[{color:"#8d8d8d"}]},{featureType:"landscape.natural.terrain",elementType:"geometry.stroke",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#cef8d5"},{visibility:"on"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#60b36c"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:"-100"},{lightness:"32"},{visibility:"on"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#f3f3f3"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#e1e1e1"}]},{featureType:"road",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"},{lightness:"63"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#f3f3f3"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e1e1e1"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#cce4ff"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#6095a5"}]}]
    });
    return map;
  }
  export function mainMap(locations,center) {
    var map = initMap();
    var cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#F6C8C8",
        fillOpacity: 0.35,
        map,
        center: map.center,
        radius: radiusInM,
      });
    console.log("[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]",cityCircle.getBounds())
    balanceMapZoom();
    
    function balanceMapZoom() {
        if (radiusInM <= 20 * 1000) {
            map.setZoom(10);
        } else if (radiusInM > 20 * 1000 && radiusInM <= 50 * 1000) {
            map.setZoom(8.7);
        } else if (radiusInM > 50 * 1000 && radiusInM <= 100 * 1000) {
            map.setZoom(7.7);
        } else if (radiusInM > 100 * 1000 && radiusInM <= 150 * 1000) {
            map.setZoom(7);
        } else if (radiusInM > 150 * 1000 && radiusInM <= 200 * 1000) {
            map.setZoom(6.7);
        } else {
            map.setZoom(6);
        }
    }

    map.addListener('click', function(e) {
        if (!zoomChange){
            setCenterAndRadius([e.latLng.lat(),e.latLng.lng()]);
        }
        zoomChange = false;
      });
    map.addListener('zoom_changed', function(e) {
        console.log("?>?>?>?>?>?>?>?>?>?<><><><><><><><",map.zoom)
        zoomChange = true;
      });
    if (center) {
        map.setCenter({lat: center[0], lng: center[1]});
        cityCircle.setCenter({lat: center[0], lng: center[1]})
        setTimeout(() => {cityCircle.setMap(null)}, 3000);
    }
    var boxText = document.createElement("div");
    boxText.className = 'map-box'
    var currentInfobox;
    var boxOptions = {
        content: boxText,
        disableAutoPan: true,
        alignBottom: true,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-110, -45),
        zIndex: null,
        boxStyle: {
            width: "260px"
        },
        closeBoxMargin: "0",
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
    };
    var markerCluster, marker, i;
    var allMarkers = [];
    var clusterStyles = [{
        textColor: 'white',
        url: '',
        height: 50,
        width: 50
    }];
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            icon: locations[i][4],
            id: i
        });
        allMarkers.push(marker);
        var ib = new InfoBox();
  
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                ib.setOptions(boxOptions);
                boxText.innerHTML = locations[i][0];
                ib.close();
                ib.open(map, marker);
                currentInfobox = marker.id;
                var latLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
                map.panTo(latLng);
                map.panBy(0, -180);
                google.maps.event.addListener(ib, 'domready', function () {
                    $('.infoBox-close').click(function (e) {
                        e.preventDefault();
                        ib.close();
                    });
                });
            }
        })(marker, i));
    }
    var options = {
        imagePath: 'images/',
        styles: clusterStyles,
        minClusterSize: 2
    };
    markerCluster = new MarkerClusterer(map, allMarkers, options);
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
  
    $('.nextmap-nav').on("click", function (e) {
        e.preventDefault();
        map.setZoom(15);
        var index = currentInfobox;
        if (index + 1 < allMarkers.length) {
            google.maps.event.trigger(allMarkers[index + 1], 'click');
        } else {
            google.maps.event.trigger(allMarkers[0], 'click');
        }
    });
    $('.prevmap-nav').on("click", function (e) {
        e.preventDefault();
        map.setZoom(15);
        if (typeof (currentInfobox) == "undefined") {
            google.maps.event.trigger(allMarkers[allMarkers.length - 1], 'click');
        } else {
            var index = currentInfobox;
            if (index - 1 < 0) {
                google.maps.event.trigger(allMarkers[allMarkers.length - 1], 'click');
            } else {
                google.maps.event.trigger(allMarkers[index - 1], 'click');
            }
        }
    });
    $('.map-item').on("click", function (e) {
        e.preventDefault();
     map.setZoom(15);
        var index = currentInfobox;
        var marker_index = parseInt($(this).attr('href').split('#')[1], 10);
        google.maps.event.trigger(allMarkers[marker_index-1], "click");
  if ($(this).hasClass("scroll-top-map")){
    $('html, body').animate({
    scrollTop: $(".map-container").offset().top+ "-70px"
    }, 500)
  }
  else if ($(window).width()<1064){
    $('html, body').animate({
    scrollTop: $(".map-container").offset().top+ "-70px"
    }, 500)
  }
    });
  // Scroll enabling button
  var scrollEnabling = $('.scrollContorl');
  
  $(scrollEnabling).click(function(e){
      e.preventDefault();
      $(this).toggleClass("enabledsroll");
  
      if ( $(this).is(".enabledsroll") ) {
         map.setOptions({'scrollwheel': true});
      } else {
         map.setOptions({'scrollwheel': false});
      }
  });		
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);
    function ZoomControl(controlDiv, map) {
        zoomControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
        controlDiv.style.padding = '5px';
        var controlWrapper = document.createElement('div');
        controlDiv.appendChild(controlWrapper);
        var zoomInButton = document.createElement('div');
        zoomInButton.className = "mapzoom-in";
        controlWrapper.appendChild(zoomInButton);
        var zoomOutButton = document.createElement('div');
        zoomOutButton.className = "mapzoom-out";
        controlWrapper.appendChild(zoomOutButton);
        google.maps.event.addDomListener(zoomInButton, 'click', function () {
            map.setZoom(map.getZoom() + 1);
        });
        google.maps.event.addDomListener(zoomOutButton, 'click', function () {
            map.setZoom(map.getZoom() - 1);
        });
    }
  }
  var map = document.getElementById('map-main');
  if (typeof (map) != 'undefined' && map != null) {
    google.maps.event.addDomListener(window, 'load', mainMap);
  }