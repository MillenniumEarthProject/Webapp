function basemap()
{
		var map = L.map('map',{minZoom: 2}).setView([11.505,  -0.09], 2);
		L.esri.basemapLayer("Topographic").addTo(map);

		tileURL = 'https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png'
		featureURL = "http://dev.consciousglobalchange.org/arcgis/rest/services/MEP/noRelate_tester/FeatureServer/0"
		mapServerURL = "http://dev.consciousglobalchange.org/arcgis/rest/services/MEP/webmap_catalog/MapServer/0"

		L.tileLayer(tileURL, 
		{
			attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
		}).addTo(map);

}
