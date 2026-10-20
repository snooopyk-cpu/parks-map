var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: 'Земельные_участки',
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> Земельные_участки'
            });
var format___MultiPolygon_2 = new ol.format.GeoJSON();
var features___MultiPolygon_2 = format___MultiPolygon_2.readFeatures(json___MultiPolygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___MultiPolygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___MultiPolygon_2.addFeatures(features___MultiPolygon_2);
var lyr___MultiPolygon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___MultiPolygon_2, 
                style: style___MultiPolygon_2,
                popuplayertitle: 'Парки — Границы_парков_MultiPolygon',
                interactive: true,
                title: '<img src="styles/legend/__MultiPolygon_2.png" /> Парки — Границы_парков_MultiPolygon'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr___1.setVisible(true);lyr___MultiPolygon_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr___1,lyr___MultiPolygon_2];
lyr___1.set('fieldAliases', {'fid': 'fid', 'Кадастровый_номер': 'Кадастровый_номер', 'ID_парка': 'ID_парка', 'Площадь_ЕГРН': 'Площадь_ЕГРН', });
lyr___MultiPolygon_2.set('fieldAliases', {'fid': 'fid', 'Название_парка': 'Название_парка', 'ID_парка': 'ID_парка', 'Постановление': 'Постановление', });
lyr___1.set('fieldImages', {'fid': 'TextEdit', 'Кадастровый_номер': 'TextEdit', 'ID_парка': 'TextEdit', 'Площадь_ЕГРН': 'TextEdit', });
lyr___MultiPolygon_2.set('fieldImages', {'fid': 'TextEdit', 'Название_парка': 'TextEdit', 'ID_парка': 'TextEdit', 'Постановление': 'TextEdit', });
lyr___1.set('fieldLabels', {'fid': 'hidden field', 'Кадастровый_номер': 'inline label - visible with data', 'ID_парка': 'hidden field', 'Площадь_ЕГРН': 'inline label - visible with data', });
lyr___MultiPolygon_2.set('fieldLabels', {'fid': 'hidden field', 'Название_парка': 'inline label - visible with data', 'ID_парка': 'hidden field', 'Постановление': 'inline label - visible with data', });
lyr___MultiPolygon_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});