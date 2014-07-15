#L.MeasureAreaControl
Simple Leaflet control for measuring element's area. Check the [demo](http://zvaraondrej.github.io/Leaflet.MeasureAreaControl/example/).

Implements [GeometryUtil.js] (https://github.com/Leaflet/Leaflet.draw/blob/master/src/ext/GeometryUtil.js) by [Leaflet.draw]  (https://github.com/Leaflet/Leaflet.draw)


### Requirements

+ Leaflet 0.7.3
+ Font-awesome 4.1.0


### Cross-browser compatibility

+ IE
+ Mozilla
+ Chrome
+ Opera

### API
####Constructor

| Constructor | Description 
| --- | --- 
| L.Control.measureAreaControl(Object options, Array layers[]); | Accepts *options* object and array of layers of different types
| L.Control.measureAreaControl(Object options); | Accepts *options* object
| L.Control.measureAreaControl(); | Uses default *options*

The constructor accepts *options* object, just like L.Control does. For more details about *options* see below. Second parameter is an array of layers of class [L.Polygon] (http://leafletjs.com/reference.html#polygon)/[L.Rectangle] (http://leafletjs.com/reference.html#rectangle) and [L.LayerGroup] (http://leafletjs.com/reference.html#layergroup) as well as all its children ([L.FeatureGroup] (http://leafletjs.com/reference.html#featuregroup) and [L.GeoJson] (http://leafletjs.com/reference.html#geojson), consisting of L.Polygon or L.Rectangle. [L.Circle] (http://leafletjs.com/reference.html#circle) and [L.CircleMarker] (http://leafletjs.com/reference.html#circlemarker) are NOT supported!



####Options

| Property | Type | Default | Description
| --- | --- | --- | ---
| position | String | 'topright' | The position of the control. More [here] (http://leafletjs.com/reference.html#control-positions).
| geodesic | Boolean | true | If true, returns value in square meters. Else, returns hectares



####Methods 

| method | Param | Description 
| --- | --- | ---
| addLayer(layer) | layers of different types (see note) | 
| removeLayer(layer) | layers of different types (see note) | 

Accepts same types of layers as constructor, but not as an array, but as single objects. L.Circle is NOT suported.



####Usage 

Initialize tool and pass layers to constructor: 

```javascript
   // adding test data
   var geojson1 = L.geoJson(JSON.parse(data1),opts1).addTo(map);
   var geojson2= L.geoJson(JSON.parse(data2),opts2).addTo(map);
   
   // setting options 
   var options = {geodesic: true};
      
   //input parameter is Array of layers
   var layers = [geojson1, geojson2];
   
   // initialize control
   var control = L.Control.measureAreaControl(options, layers).addTo(map);
```

You can add or remove layers also later:
```javascript
   var polygon = L.polygon([
        [48.10804729138659, 17.106292247772217],
        [48.10853443729303, 17.106292247772217],
        [48.10853443729303, 17.1071720123291],
        [48.10804729138659, 17.1071720123291],
        [48.10804729138659, 17.106292247772217]
    ]).addTo(_map);
    control.addLayer(polygon);
   // control.removeLayer(polygon);
```



####Package instruction

1. download and unpack repo
2. cd *repo*
3. sudo npm install
4. grunt install

...and you are up and running.



####TODO
Feel free to propose, report or whatever.



###Thanks

Thanks to guys from [Leaflet.draw] (https://github.com/Leaflet/Leaflet.draw) for inspiration.


