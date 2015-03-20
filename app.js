var ol = require('openlayers');

map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.MapQuest({
        layer: 'sat'
      })
    })
  ],
  view: new ol.View({
    center: ol.proj.transform(
      [3.6656, 45.9192],
      'EPSG:4326',
      'EPSG:3857'
    ),
    zoom: 6
  })
});
