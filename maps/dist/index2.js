/*
   the following code has been put together by Pieterjan van Dijk, an internship employee at Jifeline b.v., Sleeuwijk
   the code has been commented as clearly as possible, if there any questions you can reach out to Pieterjan.v.Dijk@Gmail.com
   some useful links:

   https://developer.here.com/
   https://heremaps.github.io/examples/explorer.html
*/


//the following code is neccesery for the Here Maps api to properly work, the credentials (app_id & app_code) should be correct, you can acquired via https://developer.here.com/

var platform = new H.service.Platform({
// app_id: 'devportal-demo-20180625',
// app_code: '9v2BkviRwi9Ot26kp2IysQ',
// ↑ given credentials
// ↓ my credentials
app_id: 'QlrqwUYhEWf825yeSmpk',
app_code: 'n5l-JOQ2HOaFfX9YSpPa7Q',
// api_key: 'piSDNsDTjIP6r4KymSM0sFnwsFWPCAxZDv9u_UKL09Y',
useHTTPS: true
});

const pixelRatio = devicePixelRatio > 1 ? 2 : 1;
var defaultLayers = platform.createDefaultLayers({
   tileSize: pixelRatio === 1 ? 256 : 512,
   ppi: pixelRatio === 1 ? undefined : 320
});

var map = new H.Map(document.getElementById('map'),
defaultLayers.normal.map, {
   pixelRatio,
   center: new H.geo.Point(51.51, 10.34),
   zoom: 3
});

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, defaultLayers); 
var mapSettings= ui.getControl('mapsettings');
let mapsettings = ui.getControl('mapsettings');
mapSettings.setIncidentsLayer(false);
let menuEntries = mapsettings.getChildren()[1].getChildren();
menuEntries[0].getElement().style.borderBottom = 'none';
for (i=1; i<menuEntries.length; i++)
{
   menuEntries[i].setVisibility(false);
}

window.addEventListener('resize', function()
{
   map.getViewPort().resize();
});

//the following code makes an AJAX call to a php file that makes a connection to the database
//in data_request.php you can change the query to change the callback
//the ajax call should update the information from the database to the browser everey X seconds

var request = $.ajax({
   url: 'dist/source/ajax-request/load-tickets.php',
   type: 'GET',
   contentType: 'application/json; charset=utf-8'
});


//to change the interval with how often the ajax call is being made, change the number at the end of the setInterval() function, this is the amount of milliseconds that it will take for the next call to be made

$(document).ready(function(){
   setInterval(function(){
      request.done(function(data) {
         //to check whether the ajax call is working, the following line will log the ajax result to your console
         console.log(data);
         var tickets = data;
         tickets.forEach(function(ticket){
            geocode(platform, ticket.postal_code, ticket.country, ticket.street, ticket.brand);
         });
      });

      //if anything fails, the following function will be activated and will log the problem to your console
      request.fail(function(jqXHR, textStatus) {
         console.log(result.status + ' ' + result.statusText);
      });
   }, 1500);
});

// jquery ajax call ends here


//this function is currently not active, if you want clustering in your browser, check the following links:
// https://developer.here.com/documentation/examples/maps-js/clustering/marker-clustering
// https://developer.here.com/documentation/examples/maps-js/clustering/custom-cluster-theme
// https://developer.here.com/documentation/android-premium/dev_guide/topics/marker-clustering.html

function clustering()
{
   // var dataPoints = [];
   // for(var i=0; i<markerCoordinates.length; i++)
   // {
   //    coord = markerCoordinates[i];
   //    coord = getCoords(coord);
   //    var coords = coord.split(',');
   //    var coord1 = coords[0];
   //    var coord2 = coords[1];
   //    dataPoints.push(new H.clustering.DataPoint(ticket.longitude, ticket.latitude));
   // }
}




//the following text logs the coordinates of the pointer to the box on the top-left of the screen.
//if you wish to disable this feature you can simply delete/disable the following lines
// https://heremaps.github.io/examples/explorer.html#geocoordinate-on-click

function setUpClickListener(map) {
   // Attach an event listener to map display
   // obtain the coordinates and display in an alert box.
   map.addEventListener('tap', function (evt) {
      var coord = map.screenToGeo(evt.currentPointer.viewportX,
         evt.currentPointer.viewportY);
      logEvent('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
         ((coord.lat > 0) ? 'N' : 'Z') +
         ' ' + Math.abs(coord.lng.toFixed(4)) +
         ((coord.lng > 0) ? 'O' : 'W'));
   });
}

window.addEventListener('resize', () => map.getViewPort().resize());

//creates log to see coordinates on click
var logContainer = document.createElement('ul');
logContainer.className ='log';
logContainer.innerHTML = 'Try clicking on the map';
map.getElement().appendChild(logContainer);

// Helper for logging events
function logEvent(str) {
   var entry = document.createElement('li');
   entry.className = 'log-entry';
   entry.textContent = str;
   logContainer.insertBefore(entry, logContainer.firstChild);
}
setUpClickListener(map);




//the following code uses the variables pulled out of the database (using the country, postal code and street address) and logs them as markers to the map

//using coordinates: https://developer.here.com/documentation/examples/maps-js/markers/markers-on-the-map
//using addresses: https://developer.here.com/documentation/examples/maps-js/services/geocode-a-location-from-structured-address



//this functions calls the geocode() function which will handle the implementation of the marker
//the given parameters are optional, the variable 'platform' should always be given, in this case the other parameters will be used to specify the marker location
tickets.forEach(function(ticket){
   geocode(platform, ticket.postal_code, ticket.country, ticket.street, ticket.brand);
});


//if the variables contain the correct information, function onSuccess will be executed, otherwise function onError will be executed
function geocode(platform, postalCode, postalCountry, streetName, carBrand) {

   var geocoder = platform.getGeocodingService(),
   geocodingParameters = {
      postalcode : postalCode,
      // housenumber: '999',
      street: streetName,
      // city: 'cityName',
      country: postalCountry,
      carBrand: carBrand,
      jsonattributes : 1
   };

   geocoder.geocode(
      geocodingParameters,
      onSuccess,
      onError
   );
}

//if the variables are correct, this function will execute and activate functoin addLocationsToMap(locations);

function onSuccess(result) {
   if(result.response.view[0]) {
   var locations = result.response.view[0].result;
   addLocationsToMap(locations);

   /*
      * The styling of the geocoding response on the map is entirely under the developer's control.
      * A representitive styling can be found the full JS + HTML code of this example
      * in the functions below:
      */
      // ... etc.
   } else {
      console.log(result);
      console.log('result not found');
   }
}

//if the variables are incorrect or anything fails, this function will be activated

function onError(error) {
   alert('Can\'t reach the remote server');
}

//

var locationsContainer = document.getElementById('panel');

//hold a reference to any infobubble opened
var bubble;


//this function makes it possible to open an infobubble when clicked on a marker, in here you can change the content and styling of the bubble
function openBubble(position, text, id){
   var bubbleContent = '<h1 id=\'bubbleText\'>' + text + '</h1>';
   if(!bubble)
   {
      bubble =  new H.ui.InfoBubble(
         position,
         {content: bubbleContent});
      ui.addBubble(bubble);
      /*bubbleStyling();*/
   }
   else
   {
      bubble.setPosition(position);
      bubble.setContent(bubbleContent);
      bubble.open();
      /*bubbleStyling();*/
  }
}

function bubbleStyling(){
   //specify the bubble styling in here, this can be done using javascript DOM elements.
   //to see which element you need to call out, go to the browser and use the element inspector to check the id/class names of the element that you want to change
   //the bubble styling can also be done in the index.css file
}


//this function adds markers to the map if all the above functions executed correctly
function addLocationsToMap(locations){
   var group = new H.map.Group(),position,i;

   var icon = new H.map.Icon('dist/source/images/car-f.svg', {size: {w: 64, h: 64}});
   marker = new H.map.Marker(
      {lat: locations[0].location.displayPosition.latitude, lng: locations[0].location.displayPosition.longitude}
      //,{icon: icon}  <-- neccesery if you want to use a custom icon, please note that this will give bad performance when used in large quantities
      );
   //the following line specifies what should be in the infobubble
   marker.label = locations[0].location.address.label;
   group.addObject(marker);
   map.addObject(group);   

   group.addEventListener('tap', function (evt){
      openBubble(
         evt.target.getGeometry(), evt.target.label, 0);
   }, false);
}