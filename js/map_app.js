function initMap() {
	var _position = {lat: 22.997846, lng: 120.218399};
	var map
    var styles =[
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "labels",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "landscape.man_made",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#f2f2f2"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  }
		]; 
	  // Create a new StyledMapType object, passing it the array of styles,
	  // as well as the name to be displayed on the map type control.
	  var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

	  // Create a map object, and include the MapTypeId to add
	  // to the map type control.
	  var mapOptions = {
		zoom: 16,
		center: _position,
		disableDefaultUI: true,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	  };
	   map = new google.maps.Map(document.getElementById('map'),mapOptions);

	  //Associate the styled map with the MapTypeId and set it to display.
	  map.mapTypes.set('map_style', styledMap);
	  map.setMapTypeId('map_style');
    //----------------------------------------------------------
    /*map = new google.maps.Map(document.getElementById('map'), {
			center: _position,
			zoom: 16,
			disableDefaultUI: true
		 });*/
		/* initialize image*/
		var browserSupportFlag =  new Boolean();
		var initialLocation;
	/*	if(window.navigator.geolocation){
			browserSupportFlag =true;
			window.navigator.geolocation.getCurrentPosition(function(position){
			initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			
			var lat_ = position.coords.latitude;
			var lng_ = position.coords.longitude;
			//userPosition =  {lat:_lat ,lng:_lng}; //使用者位置
			userPosition.lat = lat_;
			userPosition.lng = lng_;
			map.setCenter(initialLocation);
			}, function(){
				 handleNoGeolocation(browserSupportFlag);
			 });
		}else{
			browserSupportFlag = false;
			handleNoGeolocation(browserSupportFlag);
		}*/
	var Marker_tmp = new google.maps.Marker({
						position: _position,
						map: map,
						draggable: false,
						//shape:shape
		            });
	getMarker(map)
 }

 function getMarker(map){
 	$.ajax({
 		url: '/get-marker',
 		type: 'POST',
 		dataType: 'json',
 		data: '',
 		contenType: '',
 		complete: function(data){
 			console.log('success')
 			drawMarker(map,data)
 		},
 		error: function(){
 			console.log('error')
 		}
 	})
 }

function drawMarker(map,data){
 	const data_length = data["articles"].length
 	console.log(data_length)
 	for( let i = 0 ; i < data_length ; i++ ){
 		let position = {
 			lat: data["articles"][i])["content"]["location"]["lat"],
			lng: data["articles"][i])["content"]["location"]["lng"]
 		}
 		let marker = new google.maps.Marker({
 			position: position,
 			map: map,
			draggable: false,
 		})
 	}
}