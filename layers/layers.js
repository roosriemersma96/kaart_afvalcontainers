var wms_layers = [];

var lyr_BasiskaartAmsterdamLightWebMercator_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.data.amsterdam.nl/maps/topografie?VERSION%3D1.1.0%26",
                              attributions: ' ',
                              params: {
                                "LAYERS": "topo_wm_light",
                                "TILED": "true",
                                "VERSION": "1.1.0"},
                            })),
                            title: 'Basiskaart Amsterdam - Light (Web Mercator)',
                            popuplayertitle: 'Basiskaart Amsterdam - Light (Web Mercator)',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BasiskaartAmsterdamLightWebMercator_0, 0]);
var format_woonboten_centrum_1 = new ol.format.GeoJSON();
var features_woonboten_centrum_1 = format_woonboten_centrum_1.readFeatures(json_woonboten_centrum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_woonboten_centrum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_woonboten_centrum_1.addFeatures(features_woonboten_centrum_1);
var lyr_woonboten_centrum_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_woonboten_centrum_1, 
                style: style_woonboten_centrum_1,
                popuplayertitle: 'woonboten_centrum',
                interactive: true,
                title: '<img src="styles/legend/woonboten_centrum_1.png" /> woonboten_centrum'
            });
var format_openaflocatiescentrum_2 = new ol.format.GeoJSON();
var features_openaflocatiescentrum_2 = format_openaflocatiescentrum_2.readFeatures(json_openaflocatiescentrum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_openaflocatiescentrum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_openaflocatiescentrum_2.addFeatures(features_openaflocatiescentrum_2);
var lyr_openaflocatiescentrum_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_openaflocatiescentrum_2, 
                style: style_openaflocatiescentrum_2,
                popuplayertitle: 'op en af locaties centrum',
                interactive: true,
                title: '<img src="styles/legend/openaflocatiescentrum_2.png" /> op en af locaties centrum'
            });
var format_ligplaatsencentrum_3 = new ol.format.GeoJSON();
var features_ligplaatsencentrum_3 = format_ligplaatsencentrum_3.readFeatures(json_ligplaatsencentrum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligplaatsencentrum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligplaatsencentrum_3.addFeatures(features_ligplaatsencentrum_3);
var lyr_ligplaatsencentrum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligplaatsencentrum_3, 
                style: style_ligplaatsencentrum_3,
                popuplayertitle: 'ligplaatsen centrum',
                interactive: true,
                title: '<img src="styles/legend/ligplaatsencentrum_3.png" /> ligplaatsen centrum'
            });
var format_Loopafstandtotcontainer_4 = new ol.format.GeoJSON();
var features_Loopafstandtotcontainer_4 = format_Loopafstandtotcontainer_4.readFeatures(json_Loopafstandtotcontainer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loopafstandtotcontainer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loopafstandtotcontainer_4.addFeatures(features_Loopafstandtotcontainer_4);
var lyr_Loopafstandtotcontainer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loopafstandtotcontainer_4, 
                style: style_Loopafstandtotcontainer_4,
                popuplayertitle: 'Loopafstand tot container',
                interactive: true,
                title: '<img src="styles/legend/Loopafstandtotcontainer_4.png" /> Loopafstand tot container'
            });
var format_afvalcontainerszonderophfenwater_5 = new ol.format.GeoJSON();
var features_afvalcontainerszonderophfenwater_5 = format_afvalcontainerszonderophfenwater_5.readFeatures(json_afvalcontainerszonderophfenwater_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_afvalcontainerszonderophfenwater_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_afvalcontainerszonderophfenwater_5.addFeatures(features_afvalcontainerszonderophfenwater_5);
var lyr_afvalcontainerszonderophfenwater_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_afvalcontainerszonderophfenwater_5, 
                style: style_afvalcontainerszonderophfenwater_5,
                popuplayertitle: 'afvalcontainers zonder ophf en water',
                interactive: true,
    title: 'afvalcontainers zonder ophf en water<br />\
    <img src="styles/legend/afvalcontainerszonderophfenwater_5_0.png" /> 00 Locatie uitbreiden en eventueel wijzigen<br />\
    <img src="styles/legend/afvalcontainerszonderophfenwater_5_1.png" /> 01 Bestaande container locatie<br />\
    <img src="styles/legend/afvalcontainerszonderophfenwater_5_2.png" /> 04 Nieuwe locatie<br />\
    <img src="styles/legend/afvalcontainerszonderophfenwater_5_3.png" /> 05 Nieuwe locatie reeds aanwezig<br />\
    <img src="styles/legend/afvalcontainerszonderophfenwater_5_4.png" /> 06 K&L verleggen<br />\
    <img src="styles/legend/afvalcontainerszonderophfenwater_5_5.png" /> Optioneel<br />' });
var format_OAISCE1_6 = new ol.format.GeoJSON();
var features_OAISCE1_6 = format_OAISCE1_6.readFeatures(json_OAISCE1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OAISCE1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OAISCE1_6.addFeatures(features_OAISCE1_6);
var lyr_OAISCE1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OAISCE1_6, 
                style: style_OAISCE1_6,
                popuplayertitle: 'OAISCE~1',
                interactive: true,
                title: '<img src="styles/legend/OAISCE1_6.png" /> OAISCE~1'
            });
var format_OAISCE4_7 = new ol.format.GeoJSON();
var features_OAISCE4_7 = format_OAISCE4_7.readFeatures(json_OAISCE4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OAISCE4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OAISCE4_7.addFeatures(features_OAISCE4_7);
var lyr_OAISCE4_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OAISCE4_7, 
                style: style_OAISCE4_7,
                popuplayertitle: 'OAISCE~4',
                interactive: true,
                title: '<img src="styles/legend/OAISCE4_7.png" /> OAISCE~4'
            });
var group_Versie2 = new ol.layer.Group({
                                layers: [lyr_Loopafstandtotcontainer_4,lyr_afvalcontainerszonderophfenwater_5,],
                                fold: 'open',
                                title: 'Versie 2'});
var group_Passagiersvaart = new ol.layer.Group({
                                layers: [lyr_openaflocatiescentrum_2,lyr_ligplaatsencentrum_3,],
                                fold: 'open',
                                title: 'Passagiersvaart'});
var group_Woonboot = new ol.layer.Group({
                                layers: [lyr_woonboten_centrum_1,],
                                fold: 'open',
                                title: 'Woonboot'});

lyr_BasiskaartAmsterdamLightWebMercator_0.setVisible(true);lyr_woonboten_centrum_1.setVisible(true);lyr_openaflocatiescentrum_2.setVisible(true);lyr_ligplaatsencentrum_3.setVisible(true);lyr_Loopafstandtotcontainer_4.setVisible(true);lyr_afvalcontainerszonderophfenwater_5.setVisible(true);lyr_OAISCE1_6.setVisible(true);lyr_OAISCE4_7.setVisible(true);
var layersList = [lyr_BasiskaartAmsterdamLightWebMercator_0,group_Woonboot,group_Passagiersvaart,group_Versie2,lyr_OAISCE1_6,lyr_OAISCE4_7];
lyr_woonboten_centrum_1.set('fieldAliases', {'feature_id': 'feature_id', 'rdf_seeals': 'rdf_seeals', 'identifica': 'identifica', 'status': 'status', 'openbare_r': 'openbare_r', 'openbare_1': 'openbare_1', 'huisnummer': 'huisnummer', 'huisletter': 'huisletter', 'toevoeging': 'toevoeging', 'postcode': 'postcode', 'woonplaats': 'woonplaats', 'nummeraand': 'nummeraand', 'openbare_2': 'openbare_2', 'woonplaa_1': 'woonplaa_1', 'bronhouder': 'bronhouder', 'gebr_doel': 'gebr_doel', });
lyr_openaflocatiescentrum_2.set('fieldAliases', {'fid': 'fid', 'Nieuwe Num': 'Nieuwe Num', 'Volgnr': 'Volgnr', 'Code': 'Code', 'Staddeel': 'Staddeel', 'Vaarwater': 'Vaarwater', 'Kunstwerk': 'Kunstwerk', 'Start reno': 'Start reno', 'Locatie': 'Locatie', 'Breedte gr': 'Breedte gr', 'Lengte gra': 'Lengte gra', 'Aantal sto': 'Aantal sto', 'Type locat': 'Type locat', 'Omgevingsp': 'Omgevingsp', 'Bestemming': 'Bestemming', 'Mede beste': 'Mede beste', 'Lengte in': 'Lengte in', 'Lengte afm': 'Lengte afm', 'Hoogtevers': 'Hoogtevers', 'Afstand to': 'Afstand to', 'Doorvoer b': 'Doorvoer b', 'Situatie t': 'Situatie t', 'Grondslag': 'Grondslag', 'Jaar': 'Jaar', 'Afdeling': 'Afdeling', 'Verkeersbe': 'Verkeersbe', 'Datum besl': 'Datum besl', 'Bebording': 'Bebording', 'Wens vanui': 'Wens vanui', 'Wens van_1': 'Wens van_1', 'Betreft Tr': 'Betreft Tr', 'Samenvatti': 'Samenvatti', 'Is verkeer': 'Is verkeer', 'Venstertij': 'Venstertij', 'Verkeers_1': 'Verkeers_1', 'Intresse Z': 'Intresse Z', 'Intresse O': 'Intresse O', 'Opmerkinge': 'Opmerkinge', 'Relevant?': 'Relevant?', 'Op en afst': 'Op en afst', 'Laad/Los': 'Laad/Los', 'Laad/Los_1': 'Laad/Los_1', 'Status 201': 'Status 201', 'Status 202': 'Status 202', 'Correct?': 'Correct?', 'Input Stad': 'Input Stad', 'Conclusie': 'Conclusie', 'Actie': 'Actie', 'Wie': 'Wie', 'Klaar': 'Klaar', 'Status': 'Status', 'Kleur op k': 'Kleur op k', 'Length': 'Length', 'length hal': 'length hal', });
lyr_ligplaatsencentrum_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'id': 'id', 'naam_vaart': 'naam_vaart', 'naam_klant': 'naam_klant', 'ligplaats_': 'ligplaats_', 'kenmerk_ve': 'kenmerk_ve', 'datum_eind': 'datum_eind', 'id_ligplaa': 'id_ligplaa', 'verwerking': 'verwerking', 'gbd_buurt_': 'gbd_buurt_', 'locatie_ad': 'locatie_ad', });
lyr_Loopafstandtotcontainer_4.set('fieldAliases', {'OBJE_LAAGN': 'OBJE_LAAGN', 'OBJE_KLEUR': 'OBJE_KLEUR', 'OBJE_NUMME': 'OBJE_NUMME', });
lyr_afvalcontainerszonderophfenwater_5.set('fieldAliases', {'OBJE_LAAGN': 'OBJE_LAAGN', 'OBJE_KLEUR': 'OBJE_KLEUR', 'OBJE_NUMME': 'OBJE_NUMME', });
lyr_OAISCE1_6.set('fieldAliases', {});
lyr_OAISCE4_7.set('fieldAliases', {'OBJE_LAAGN': 'OBJE_LAAGN', 'OBJE_KLEUR': 'OBJE_KLEUR', 'OBJE_NUMME': 'OBJE_NUMME', });
lyr_woonboten_centrum_1.set('fieldImages', {'feature_id': 'TextEdit', 'rdf_seeals': 'TextEdit', 'identifica': 'TextEdit', 'status': 'TextEdit', 'openbare_r': 'TextEdit', 'openbare_1': 'TextEdit', 'huisnummer': 'TextEdit', 'huisletter': 'TextEdit', 'toevoeging': 'TextEdit', 'postcode': 'TextEdit', 'woonplaats': 'TextEdit', 'nummeraand': 'TextEdit', 'openbare_2': 'TextEdit', 'woonplaa_1': 'TextEdit', 'bronhouder': 'TextEdit', 'gebr_doel': 'TextEdit', });
lyr_openaflocatiescentrum_2.set('fieldImages', {'fid': 'TextEdit', 'Nieuwe Num': 'TextEdit', 'Volgnr': 'TextEdit', 'Code': 'TextEdit', 'Staddeel': 'TextEdit', 'Vaarwater': 'TextEdit', 'Kunstwerk': 'TextEdit', 'Start reno': 'TextEdit', 'Locatie': 'TextEdit', 'Breedte gr': 'TextEdit', 'Lengte gra': 'TextEdit', 'Aantal sto': 'TextEdit', 'Type locat': 'TextEdit', 'Omgevingsp': 'TextEdit', 'Bestemming': 'TextEdit', 'Mede beste': 'TextEdit', 'Lengte in': 'TextEdit', 'Lengte afm': 'TextEdit', 'Hoogtevers': 'TextEdit', 'Afstand to': 'TextEdit', 'Doorvoer b': 'TextEdit', 'Situatie t': 'TextEdit', 'Grondslag': 'TextEdit', 'Jaar': 'TextEdit', 'Afdeling': 'TextEdit', 'Verkeersbe': 'TextEdit', 'Datum besl': 'TextEdit', 'Bebording': 'TextEdit', 'Wens vanui': 'TextEdit', 'Wens van_1': 'TextEdit', 'Betreft Tr': 'TextEdit', 'Samenvatti': 'TextEdit', 'Is verkeer': 'TextEdit', 'Venstertij': 'TextEdit', 'Verkeers_1': 'TextEdit', 'Intresse Z': 'TextEdit', 'Intresse O': 'TextEdit', 'Opmerkinge': 'TextEdit', 'Relevant?': 'TextEdit', 'Op en afst': 'TextEdit', 'Laad/Los': 'TextEdit', 'Laad/Los_1': 'TextEdit', 'Status 201': 'TextEdit', 'Status 202': 'TextEdit', 'Correct?': 'TextEdit', 'Input Stad': 'TextEdit', 'Conclusie': 'TextEdit', 'Actie': 'TextEdit', 'Wie': 'TextEdit', 'Klaar': 'TextEdit', 'Status': 'TextEdit', 'Kleur op k': 'TextEdit', 'Length': 'TextEdit', 'length hal': 'TextEdit', });
lyr_ligplaatsencentrum_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'id': 'TextEdit', 'naam_vaart': 'TextEdit', 'naam_klant': 'TextEdit', 'ligplaats_': 'TextEdit', 'kenmerk_ve': 'TextEdit', 'datum_eind': 'TextEdit', 'id_ligplaa': 'TextEdit', 'verwerking': 'DateTime', 'gbd_buurt_': 'TextEdit', 'locatie_ad': 'TextEdit', });
lyr_Loopafstandtotcontainer_4.set('fieldImages', {'OBJE_LAAGN': 'TextEdit', 'OBJE_KLEUR': 'TextEdit', 'OBJE_NUMME': 'TextEdit', });
lyr_afvalcontainerszonderophfenwater_5.set('fieldImages', {'OBJE_LAAGN': 'TextEdit', 'OBJE_KLEUR': 'TextEdit', 'OBJE_NUMME': 'TextEdit', });
lyr_OAISCE1_6.set('fieldImages', {});
lyr_OAISCE4_7.set('fieldImages', {'OBJE_LAAGN': 'TextEdit', 'OBJE_KLEUR': 'TextEdit', 'OBJE_NUMME': 'TextEdit', });
lyr_woonboten_centrum_1.set('fieldLabels', {'feature_id': 'no label', 'rdf_seeals': 'no label', 'identifica': 'no label', 'status': 'no label', 'openbare_r': 'no label', 'openbare_1': 'no label', 'huisnummer': 'no label', 'huisletter': 'no label', 'toevoeging': 'no label', 'postcode': 'no label', 'woonplaats': 'no label', 'nummeraand': 'no label', 'openbare_2': 'no label', 'woonplaa_1': 'no label', 'bronhouder': 'no label', 'gebr_doel': 'no label', });
lyr_openaflocatiescentrum_2.set('fieldLabels', {'fid': 'no label', 'Nieuwe Num': 'no label', 'Volgnr': 'no label', 'Code': 'no label', 'Staddeel': 'no label', 'Vaarwater': 'no label', 'Kunstwerk': 'no label', 'Start reno': 'no label', 'Locatie': 'no label', 'Breedte gr': 'no label', 'Lengte gra': 'no label', 'Aantal sto': 'no label', 'Type locat': 'no label', 'Omgevingsp': 'no label', 'Bestemming': 'no label', 'Mede beste': 'no label', 'Lengte in': 'no label', 'Lengte afm': 'no label', 'Hoogtevers': 'no label', 'Afstand to': 'no label', 'Doorvoer b': 'no label', 'Situatie t': 'no label', 'Grondslag': 'no label', 'Jaar': 'no label', 'Afdeling': 'no label', 'Verkeersbe': 'no label', 'Datum besl': 'no label', 'Bebording': 'no label', 'Wens vanui': 'no label', 'Wens van_1': 'no label', 'Betreft Tr': 'no label', 'Samenvatti': 'no label', 'Is verkeer': 'no label', 'Venstertij': 'no label', 'Verkeers_1': 'no label', 'Intresse Z': 'no label', 'Intresse O': 'no label', 'Opmerkinge': 'no label', 'Relevant?': 'no label', 'Op en afst': 'no label', 'Laad/Los': 'no label', 'Laad/Los_1': 'no label', 'Status 201': 'no label', 'Status 202': 'no label', 'Correct?': 'no label', 'Input Stad': 'no label', 'Conclusie': 'no label', 'Actie': 'no label', 'Wie': 'no label', 'Klaar': 'no label', 'Status': 'no label', 'Kleur op k': 'no label', 'Length': 'no label', 'length hal': 'no label', });
lyr_ligplaatsencentrum_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'id': 'no label', 'naam_vaart': 'no label', 'naam_klant': 'no label', 'ligplaats_': 'no label', 'kenmerk_ve': 'no label', 'datum_eind': 'no label', 'id_ligplaa': 'no label', 'verwerking': 'no label', 'gbd_buurt_': 'no label', 'locatie_ad': 'no label', });
lyr_Loopafstandtotcontainer_4.set('fieldLabels', {'OBJE_LAAGN': 'no label', 'OBJE_KLEUR': 'no label', 'OBJE_NUMME': 'no label', });
lyr_afvalcontainerszonderophfenwater_5.set('fieldLabels', {'OBJE_LAAGN': 'no label', 'OBJE_KLEUR': 'no label', 'OBJE_NUMME': 'no label', });
lyr_OAISCE1_6.set('fieldLabels', {});
lyr_OAISCE4_7.set('fieldLabels', {'OBJE_LAAGN': 'no label', 'OBJE_KLEUR': 'no label', 'OBJE_NUMME': 'no label', });
lyr_OAISCE4_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});