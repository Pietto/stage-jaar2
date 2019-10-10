(function () {
    'use strict';


    // /**
    //  * Creates a new marker and adds it to a group
    //  * @param {H.map.Group} group       The group holding the new marker
    //  * @param {H.geo.Point} coordinate  The location of the marker
    //  * @param {String} html             Data associated with the marker
    //  */
    // function addMarkerToGroup(group, coordinate, html) {
    //     var marker = new H.map.Marker(coordinate);
    //     // add custom data to the marker
    //     marker.setData(html);
    //     group.addObject(marker);
    // }
    //
    // /**
    //  * Add two markers showing the position of Liverpool and Manchester City football clubs.
    //  * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
    //  * @param  {H.Map} map      A HERE Map instance within the application
    //  */
    // function addInfoBubble(map) {
    //     var group = new H.map.Group();
    //
    //     map.addObject(group);
    //
    //     // add 'tap' event listener, that opens info bubble, to the group
    //     group.addEventListener('tap', function (evt) {
    //         // event target is the marker itself, group is a parent event target
    //         // for all objects that it contains
    //         var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
    //             // read custom data
    //             content: evt.target.getData()
    //         });
    //         // show info bubble
    //         ui.addBubble(bubble);
    //     }, false);
    //
    //      addMarkerToGroup(group, {lat:53.439, lng:-2.221},' Manchester City' +  '  City of Manchester Stadium    Capacity: 48,000    ');
    //      addMarkerToGroup(group, {lat:53.430, lng:-2.961},'Liverpool' +    '  Anfield     Capacity: 45,362    ');
    //
    // }

    var app_id = "DemoAppId01082013GAL";
    var app_code = "AJKnXv84fjrb0KIHawS0Tg";

// Initialize communication with the platform, to access your own data, change the values below
// https://developer.here.com/documentation/geovisualization/topics/getting-credentials.html

// We recommend you use the CIT environment. Find more details on our platforms below
// https://developer.here.com/documentation/map-tile/common/request-cit-environment-rest.html

    const platform = new H.service.Platform({
        app_id,
        app_code,
        useCIT: true,
        useHTTPS: true
    });

    const pixelRatio = devicePixelRatio > 1 ? 2 : 1;
    let defaultLayers = platform.createDefaultLayers({
        tileSize: 256 * pixelRatio
    });
    const layers = platform.createDefaultLayers({
        tileSize: 256 * pixelRatio,
        ppi: pixelRatio > 1 ? 320 : 72
    });

// initialize a map  - not specifying a location will give a whole world view.
    let map = new H.Map(
        document.getElementsByClassName('dl-map')[0],
        defaultLayers.satellite.base,
        {
            pixelRatio,
            center: new H.geo.Point(51.51, 10.34),
            zoom:6

            // Nederland
            // pixelRatio,
            // center: new H.geo.Point(51.61, 5.34),
            // zoom:8
        },
        defaultLayers.normal.base,
        {
            pixelRatio,
            center: new H.geo.Point(51.51, 10.34),
            zoom:6
        }
    );

// make the map interactive
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    let ui = H.ui.UI.createDefault(map, layers, 'nl-NL');
//ui.removeControl('mapsettings');

// resize map on window resize
    window.addEventListener('resize', function() {
        map.getViewPort().resize();
    });


    /***
     *
     * HOMEMADE RAYMOND
     *
     */




    // let hoveredObject;
    // var group = new H.map.Group();
    //
    // map.addObject(group);
    //
    // // add 'tap' event listener, that opens info bubble, to the group
    // group.addEventListener('tap', function (evt) {
    //     // event target is the marker itself, group is a parent event target
    //     // for all objects that it contains
    //     var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
    //         // read custom data
    //         content: evt.target.getData()
    //     });
    //
    //     bubble.addClass('info-bubble');
    //     // bubble.setContent(`
    //     //         <div class="info-bubble-title" style="width:200px;">${facility}</div>
    //     //         <div class="info-bubble-label">
    //     //             ${address} <br />
    //     //             ${SUBahn} <br />
    //     //             ${periode1} <br />
    //     //             ${periode2} <br />
    //     //         </div>`);
    //     //
    //     // bubble.setContent(`
    //     //         <div class="info-bubble-title" style="width:200px;">${facility}</div>
    //     //         <div class="info-bubble-label">
    //     //             ${address} <br />
    //     //             ${SUBahn} <br />
    //     //             ${periode1} <br />
    //     //             ${periode2} <br />
    //     //         </div>`);
    //
    //     // show info bubble
    //
    //     // if (hoveredObject && hoveredObject !== evt.target) {
    //     //     bubble.close();
    //     // }
    //
    //     hoveredObject = evt.target;
    //     if (hoveredObject.icon) {
    //         let row = hoveredObject.getData();
    //         if (row) {
    //             let facility = row[1];
    //             let address = row[2];
    //             let SUBahn = row[3];
    //             let periode1 = row[5];
    //             let periode2 = row[6];
    //
    //             let pos = map.screenToGeo(
    //                 evt.currentPointer.viewportX,
    //                 evt.currentPointer.viewportY);
    //             bubble.setPosition(pos);
    //             // infoBubble.click(function() {
    //             //     alert(1);
    //             // });
    //
    //             // hoveredObject.
    //
    //             bubble.setContent(`
    //             <div class="info-bubble-title" style="width:200px;">${facility}</div>
    //             <div class="info-bubble-label">
    //                 ${address} <br />
    //                 ${SUBahn} <br />
    //                 ${periode1} <br />
    //                 ${periode2} <br />
    //             </div>`);
    //             bubble.open();
    //         }
    //     }
    //
    //
    //     ui.addBubble(bubble);
    // }, false);

    //let hoveredObject;
    //let infoBubble = new H.ui.InfoBubble({lat: 0, lng: 0}, {});
    //bubble.addClass('info-bubble');
    //bubble.close();
    //ui.addBubble(infoBubble);

    // map.addEventListener('pointermove', (e) => {
    //     if (hoveredObject && hoveredObject !== e.target) {
    //         infoBubble.close();
    //     }
    //
    //     hoveredObject = e.target;
    //     if (hoveredObject.icon) {
    //         let row = hoveredObject.getData();
    //         if (row) {
    //             let facility = row[1];
    //             let address = row[2];
    //             let SUBahn = row[3];
    //             let periode1 = row[5];
    //             let periode2 = row[6];
    //
    //             let pos = map.screenToGeo(
    //                 e.currentPointer.viewportX,
    //                 e.currentPointer.viewportY);
    //             infoBubble.setPosition(pos);
    //             // infoBubble.click(function() {
    //             //     alert(1);
    //             // });
    //
    //             // hoveredObject.
    //
    //             infoBubble.setContent(`
    //             <div class="info-bubble-title" style="width:200px;">${facility}</div>
    //             <div class="info-bubble-label">
    //                 ${address} <br />
    //                 ${SUBahn} <br />
    //                 ${periode1} <br />
    //                 ${periode2} <br />
    //             </div>`);
    //             infoBubble.open();
    //         }
    //     }
    // });


    /***
     *
     * HOMEMADE RAYMOND
     *
     */

// data from the Open Berlin Data
// https://www.berlin.de/sen/kultur/kulturpolitik/statistik-open-data/orte-geodaten/
// download link:
// https://www.berlin.de/sen/kultur/_assets/statistiken/kultureinrichtungen_alle.xlsx
    let provider = new H.datalens.RawDataProvider({
        //dataUrl: '../../laatste_1000_klanten.csv?' + Date.now(),
        dataUrl: 'dist/geo_data.csv?' + Date.now(),
        dataToFeatures: (data) => {
            let parsed = helpers.parseCSV(data);
            let features = [];
            let new_data_array = [];
            let row = null;
            let feature = null;

            for (let i = 1, l = parsed.length; i < l; i++) {
                row = parsed[i];
                feature = {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [Number(row[3]), Number(row[2])]
                    },
                    'properties': {
                        'facility': row[0],
                        'address': row[1],
                        'SUBahn': row[4],
                        'type':  row[5],
                        'periode1':  row[6],
                        'periode2':  row[7]
                    }
                };
                features.push(feature);
            }
            return features;
        },
        featuresToRows: (features) => {
            let rows = [], feature;
            for (let i = 0, l = features.length; i < l; i++) {
                feature = features[i];
                rows.push([{
                    lat: feature.geometry.coordinates[1],
                    lng: feature.geometry.coordinates[0]
                },
                    feature.properties.facility,
                    feature.properties.address,
                    feature.properties.SUBahn,
                    feature.properties.type,
                    feature.properties.periode1,
                    feature.properties.periode2
                ]);
            }
            return rows;
        }
    });

    let layer = new H.datalens.ObjectLayer(provider, {
        pixelRatio: window.devicePixelRatio,

        // accepts data row and returns map object
        rowToMapObject: function (data) {
            let coordinates = data[0];
            let facility = data[1];

            //console.log(facility);

            //addMarkerToGroup(group, coordinates,facility);

            return new H.map.Marker(coordinates);
        },

        rowToStyle: function (data, zoom) {
            if (!venueIcons[data[4]]) { return }
            let icon = H.datalens.ObjectLayer.createIcon(venueIcons[data[4]],
                //{size: (20 * pixelRatio});
                // {size: (zoom*3) * (3)});
                {size: (zoom/2) * (20)});
            return {icon};
        }
    });

// add layer to map
    map.addLayer(layer);

// show info bubble on hover
    const format = d3.format('.2f');
    let hoveredObject;
    let infoBubble = new H.ui.InfoBubble({lat: 0, lng: 0}, {});
    infoBubble.addClass('info-bubble');
    infoBubble.close();
    ui.addBubble(infoBubble);

    map.addEventListener('pointermove', (e) => {
        if (hoveredObject && hoveredObject !== e.target) {
            infoBubble.close();
        }

        hoveredObject = e.target;
        if (hoveredObject.icon) {
            let row = hoveredObject.getData();
            if (row) {
                let facility = row[1];
                let address = row[2];
                let SUBahn = row[3];
                let periode1 = row[5];
                let periode2 = row[6];

                let pos = map.screenToGeo(
                    e.currentPointer.viewportX,
                    e.currentPointer.viewportY);
                infoBubble.setPosition(pos);
                // infoBubble.click(function() {
                //     alert(1);
                // });

                // hoveredObject.

                infoBubble.setContent(`
                <div class="info-bubble-title" style="width:300px;font-size: 18px;">${facility}</div>
                <div class="info-bubble-label" style="font-size: 16px;color: white;">
                    ${address} <br />
                    ${SUBahn} <br />
                    ${periode1} <br />
                    ${periode2} <br />
                </div>`);
                infoBubble.open();
            }
        }
    });




}());
