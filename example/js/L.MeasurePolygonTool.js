L.Polygon.Measure = L.Handler.extend({
  includes: L.Mixin.Events,
 
  initialize: function(map, layers){
    L.Handler.prototype.initialize.call(this, map);
    this._layers = layers || null;
  },

  enable: function(){
    if(!this._enabled){
      this.fire('enabled', { handler: this.type });
      L.Handler.prototype.enable.call(this);
    }
  },

  disable: function(){
    if(this._enabled){
      this.fire('disabled', { handler: this.type });
      L.Handler.prototype.disable.call(this);
    }
  },

  addHooks: function () {
    var map = this._map;
    if (map) {
      console.log("addHooks");
      //to each layer bound click event
      this.bindEventListener();

    }
  },

  removeHooks: function () {
    if (this._map) {
      console.log("removeHooks");
     

    }
  },

  bindEventListener: function () {
    var data = this._layers;
    for (var i in data) {
      console.log(data[i].layer._layers);
      for (var j in data[i].layer._layers) {
        data[i].layer._layers[j].on('click', this.onElementClick, this);
      }
    }
  },

  onElementClick: function(e) {
    var area = this.getArea(e);
    var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('<p>' + area + '</p>')
      .openOn(this._map);
  },

  getArea: function(e){
    var obj = e.target;
    var area =  L.GeometryUtil.geodesicArea(obj.getLatLngs());
    return L.GeometryUtil.readableArea(area);
  }


 //return L.GeometryUtil.readableArea(area, this.options.metric);
});


L.Control.MeasureArea = L.Control.extend({

    statics: {
        TITLE: 'Measure polygon'
    },
    options: {
        position: 'topleft',
        handler: {}
    },

    initialize: function (options, layers) {
      L.Control.prototype.initialize.call(this, options);

      this._layers = {};
      for (var i in layers) {
        this.addLayer(layers[i], i);
      }
    },

    onAdd: function(map) {
      var className = 'leaflet-control-draw';
      this._container = L.DomUtil.create('div', 'leaflet-bar');
      var link = L.DomUtil.create('a', className+'-measure', this._container);
      link.href = '#';
      link.title = L.Control.MeasureArea.TITLE;

      //this.handler = new L.Polygon.Measure(map, this.options.handler);
      this.handler = new L.Polygon.Measure(map, this._layers);
      
      this.handler.on('enabled', function () {
          L.DomUtil.addClass(this._container, 'enabled');
      }, this);

      this.handler.on('disabled', function () {
          L.DomUtil.removeClass(this._container, 'enabled');
      }, this);

      L.DomEvent
        .addListener(link, 'click', L.DomEvent.stopPropagation)
        .addListener(link, 'click', L.DomEvent.preventDefault)
        .addListener(link, 'click', this.toggle, this);

      return this._container;
    },

    addLayer: function (layer, name) {
      var id = L.stamp(layer);
      this._layers[id] = {
        layer: layer,
        name: name
      };
    },

    removeLayer: function (layer) {
      var id = L.stamp(layer);
      delete this._layers[id];
      return this;
    },

    toggle: function() {
      if (this.handler.enabled()) {
          this.handler.disable.call(this.handler);
      } else {
          this.handler.enable.call(this.handler);
      }
    },
});

L.Control.measureAreaControl = function (options, layers) {
    return new L.Control.MeasureArea(options, layers);
};

