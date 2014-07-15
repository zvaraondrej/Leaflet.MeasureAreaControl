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
```
   L.Control.measureAreaControl(options, layers[]);
```
```
   L.Control.measureAreaControl(options);
```
```
   L.Control.measureAreaControl();
```

| Constructor | Descrition 
| --- | --- | --- | ---
| L.Control.measureAreaControl(<Object> options, <Array> layers[]); | String
| L.Control.measureAreaControl(<Object> options); | Desc
| L.Control.measureAreaControl(); | Desc 

####Options
| Property | Type | Default | Description
| --- | --- | --- | ---
| position | String | 'topright' | The position of the control. More [here] (http://leafletjs.com/reference.html#control-positions).
| geodesic | Boolean | true | If true, returns walue in square meters. Else, returns hectares

####Methods 
```
   addLayer(L.Path);
```
```
   L.Control.measureAreaControl();
```
```
   L.Control.measureAreaControl();
```
```
   L.Control.measureAreaControl();
```

 control
  control.addLayer(geojson);

### Usage examples

code  example








Construktor:

1)
options = {position: 'topleft'};
var layers = [_testdata2];
L.Control.measureAreaControl(options, layers).addTo(_map);

2)
L.Control.measureAreaControl(options)

3)
L.Control.measureAreaControl()


**************************************************
pridavanie a uberanie vrstiev
 control.addLayer(polygon);
  control.addLayer(geojson);

to iste pre removal

*************************************************

circles are not supported

******

sudo npm install
grunt install


*****
TODO:
