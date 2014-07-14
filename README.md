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
TODO:
