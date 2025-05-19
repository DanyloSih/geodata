var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Вінницька область',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Вінницька область'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr__1];
lyr__1.set('fieldAliases', {'Оренд': 'Оренд', 'Місце': 'Місце', 'X': 'X', 'Y': 'Y', 'Загал': 'Загал', 'Докум': 'Докум', 'На ба�': 'На ба�', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr__1.set('fieldImages', {'Оренд': 'TextEdit', 'Місце': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Загал': 'TextEdit', 'Докум': 'TextEdit', 'На ба�': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', });
lyr__1.set('fieldLabels', {'Оренд': 'inline label - always visible', 'Місце': 'no label', 'X': 'no label', 'Y': 'no label', 'Загал': 'no label', 'Докум': 'no label', 'На ба�': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});