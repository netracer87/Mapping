// Store our API endpoint inside queryUrl
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

var eMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: API_KEY
    });

    var myMap = L.map("map", {
          center: [
            37.09, -95.71
          ],
          zoom: 5,
          layers: [eMap]
        });

var queryUrl2 = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
"2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

d3.json(queryUrl2, function(data){
  console.log(data)
  data.features.forEach(function (geo) {
    L.circle([geo.geometry.coordinates[1], geo.geometry.coordinates[0]],{
      color: "red",
      fillColor: "pink",
      fillOpacity: 0.65,
      radius: 20000*geo.properties.mag
    }).addTo(myMap);
  })
  
})

