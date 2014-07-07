var Map = (function(){
  
  var _map;
  var _testdata1;
  var _testdata2;
  var  polygon;

  var opts1 = {
    color: "#2A4F6E",
    opacity: 0.8,
    fillColor: "#042037",
    fillOpacity: 0.5
  };

  var opts2 = {
    color: "#F5B800",
    opacity: 0.8,
    fillColor: "#F5B800",
    fillOpacity: 0.5
  }

  function init(data1, data2){
    _addMap();
    _testdata1 = _addTestData(data1, opts1);
    _testdata2 = _addTestData(data2, opts2);
    polygon = misc();
    initializeMeasurmentTool();

  }

  function prt(arg){
    return console.log(arg);
  }

  function _addMap(){
    var opts = {
      zoomControl: false
    };
    _map = new L.Map('map', opts);

    var base = new L.TileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(_map); 
    _map.setView([48.10396368088855, 17.112364768981934], 16);
  }

  function _addTestData(data, opts){
    var geojson = L.geoJson(JSON.parse(data),opts).addTo(_map);
    return geojson;
  }

  function initializeMeasurmentTool(){
    options = {position: 'topleft'};
    var layers = [_testdata1, _testdata2];
    L.Control.measureAreaControl(options, layers).addTo(_map);
    L.control.layers(layers).addTo(_map);
  }

  function misc(){
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(_map);
     options = {position: 'topleft'};
    // L.Control.measureAreaControl(options, [polygon]).addTo(_map);
    return polygon;
  }

  return{
    init: init
  };
})();