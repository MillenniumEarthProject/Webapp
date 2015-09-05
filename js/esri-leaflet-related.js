L.esri.Tasks.QueryRelated = L.esri.Tasks.Task.extend({
  setters: {
    'offset': 'offset',
    'limit': 'limit',
    'outFields': 'fields[]',
    'objectIds': 'objectIds[]',
    'relationshipId': 'relationshipId[]',
    'definitionExpression': 'definitionExpression',
    'precision': 'geometryPrecision',
    'featureIds': 'objectIds[]',
    'returnGeometry': 'returnGeometry',
    'returnZ' : 'returnZ',
    'returnM' : 'returnM',
    'token': 'token'
  },

  path: 'queryRelatedRecords',

  params: {
    returnGeometry: true,
    outSr: 4326,
    outFields: '*',
    returnZ: true,
    returnM: false
  },

  //http://resources.arcgis.com/en/help/arcgis-rest-api/#/Query_Related_Records/02r300000115000000/

  simplify: function(map, factor){
    var mapWidth = Math.abs(map.getBounds().getWest() - map.getBounds().getEast());
    this.params.maxAllowableOffset = (mapWidth / map.getSize().y) * factor;
    return this;
  },

  run: function(callback, context){
    return this.request(function(error, response){
      //if more than one objectId is specified, we loop through the features and pass a single collection to the utility method which converts to geoJson
        var result = {"features":[]};
        for (var i = 0; i < response.relatedRecordGroups.length; i++){
          for (var k = 0; k < response.relatedRecordGroups[i].relatedRecords.length; k++){
            result.features.push(response.relatedRecordGroups[i].relatedRecords[k])
          }
        }
        callback.call(context, error, (response && L.esri.Util.responseToFeatureCollection(result)), response);
    }, context);
  },

  layer: function(layer){
    this.path = layer + '/queryRelatedRecords';
    return this;
  },

});

L.esri.Tasks.queryRelated = function(url, params){
  return new L.esri.Tasks.QueryRelated(url, params);
};
