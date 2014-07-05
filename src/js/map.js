var Map = (function(){
  
  var _map;
  var _zoom = L.control.zoom({});

  function init(){
    _addMap();
  }

  function prt(arg){
    return console.log(arg);
  }

  function _addMap(){
    var opts = {
      zoom: 14,
      zoomControl: false,
      minZoom: 12
    };
    _map = new L.Map('map', opts);

    var base = new L.TileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(_map); 
    _map.setView([52.534199, 13.3889], 16);
  }

  return{
    init: init
  };
})();