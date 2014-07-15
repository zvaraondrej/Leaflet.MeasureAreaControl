#L.MeasureAreaControl
Simple Leaflet control for measuring element's area.

Check the [demo](http://zvaraondrej.github.io/Leaflet.MeasureAreaControl/example/).

Implements [GeometryUtil.js] (https://github.com/Leaflet/Leaflet.draw/blob/master/src/ext/GeometryUtil.js) by [Leaflet.draw]  (https://github.com/Leaflet/Leaflet.draw)


### Requirements

+ Leaflet 0.7.3
+ Font-awesome 4.1.0


### Cross-browser compatibility

+ IE
+ Mozilla
+ Chrome
+ Opera


### Usage 

code  example

### API







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
