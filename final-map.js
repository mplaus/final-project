
      function initialize() {
        //snazzy maps options
        var mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
        
        var mapOptions = {
          center: { lat: 43.0000, lng: -0.0333 },
          zoom: 3,
          mapTypeId:google.maps.MapTypeId.TERRAIN
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        
        //Set Map Options
        map.setOptions({styles: mapStyles});
        
        
        var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Chapel Hill</h1>'+
      '<div id="bodyContent">'+
      '<p></p>'+
      '</div>'+
      '</div>';

  

  var marker = new google.maps.Marker({
          position: { lat: 43.5100, lng: 16.4500 },
          map: map,
          title: 'Hello World!'
  });
  
  var marker2 = new google.maps.Marker({
          position: { lat: 52.2888, lng: -5.872693 },
          map: map,
          title: 'Hello World!'
  });
  
  var marker3 = new google.maps.Marker({
          position: { lat: 54.5970, lng: -5.9300 },
          map: map,
          title: 'Hello World!'
  });
  
  var marker4 = new google.maps.Marker({
          position: { lat: 30.9167, lng: -6.9167 },
          map: map,
          title: 'Hello World!'
  });
  
  var marker5 = new google.maps.Marker({
          position: { lat: 42.6403, lng: 18.1083 },
          map: map,
          title: 'Hello World!'
  });
  
  var marker6 = new google.maps.Marker({
          position: { lat: 31.6300, lng: -8.0089 },
          map: map,
          title: 'Hello World!'
  });
  
  var infowindow = new google.maps.InfoWindow({
      content: "Split, Croatia"
  });
  
  var infowindow2 = new google.maps.InfoWindow({
      content: "Larne, Northern Ireland, Uk"
  });
  
  var infowindow3 = new google.maps.InfoWindow({
      content: "Belfast, Northern Ireland, UK"
  });
  
  var infowindow4 = new google.maps.InfoWindow({
      content: "Ouarzazate, Morocco"
  });
  
  var infowindow5 = new google.maps.InfoWindow({
      content: "Dobrovnick, Croatia"
  });
  
  var infowindow6 = new google.maps.InfoWindow({
      content: "Marrakech, Morocco"
  });
  
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  
  });
  
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  });
  
  google.maps.event.addListener(marker3, 'click', function() {
    infowindow3.open(map,marker3);
  });
  
  google.maps.event.addListener(marker4, 'click', function() {
    infowindow4.open(map,marker4);
  });
  
  google.maps.event.addListener(marker5, 'click', function() {
    infowindow5.open(map,marker5);
  });
  
  google.maps.event.addListener(marker6, 'click', function() {
    infowindow6.open(map,marker6);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

  //    google.maps.event.addDomListener(window, 'load', initialize);

