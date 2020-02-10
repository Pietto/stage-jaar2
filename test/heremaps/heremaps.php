<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="initial-scale=1.0,
    width=device-width" />
    <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
    type="text/javascript" charset="utf-8"></script>
    <script src="https://js.api.here.com/v3/3.1/mapsjs-core-legacy.js"
    type="text/javascript" charset="utf-8"></script>
    <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
    type="text/javascript" charset="utf-8"></script>
    <script src="https://js.api.here.com/v3/3.1/mapsjs-service-legacy.js"
    type="text/javascript" charset="utf-8"></script>
</head>
<body>
    <div style="width: 640px; height: 480px" id="mapContainer"></div>
    <script>
      // Initialize the platform object:
      var platform = new H.service.Platform({
      'apikey': 'piSDNsDTjIP6r4KymSM0sFnwsFWPCAxZDv9u_UKL09Y'
      });

      // Obtain the default map types from the platform object:
      var defaultLayers = platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.raster.normal.map,
        {
          zoom: 10,
          center: { lat: 52.5, lng: 13.4 },
          engineType: H.map.render.RenderEngine.EngineType.P2D
        });

      // 'maptypes' variable holds the result of the H.service.Platform#createDefaultLayers call
    var mapSettings = new H.ui.MapSettingsControl({
      alignment: 'top-right',
      baseLayers: [{
      label: 'Normal map',
      layer: maptypes.raster.normal.map
      }]
    });
    ui.addControl('mapsettings', mapSettings);

    </script>
</body>
</html>