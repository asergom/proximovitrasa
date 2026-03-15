var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ParadasVitrasa_1 = new ol.format.GeoJSON();
var features_ParadasVitrasa_1 = format_ParadasVitrasa_1.readFeatures(json_ParadasVitrasa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParadasVitrasa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadasVitrasa_1.addFeatures(features_ParadasVitrasa_1);
var lyr_ParadasVitrasa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParadasVitrasa_1, 
                style: style_ParadasVitrasa_1,
                popuplayertitle: 'Paradas Vitrasa',
                interactive: true,
                title: '<img src="styles/legend/ParadasVitrasa_1.png" /> Paradas Vitrasa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ParadasVitrasa_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ParadasVitrasa_1];
lyr_ParadasVitrasa_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'líneas': 'líneas', 'parada': 'parada', 'nombre': 'nombre', 'link': 'link', });
lyr_ParadasVitrasa_1.set('fieldImages', {'fid': 'Hidden', 'full_id': 'Hidden', 'osm_id': 'Hidden', 'líneas': 'TextEdit', 'parada': 'TextEdit', 'nombre': 'TextEdit', 'link': 'TextEdit', });
lyr_ParadasVitrasa_1.set('fieldLabels', {'líneas': 'inline label - visible with data', 'parada': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'link': 'inline label - visible with data', });
lyr_ParadasVitrasa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});