module.exports = function(collection) {
	var poly = []
	collection.features.forEach(function(f) {
		var t = f.geometry.type
		if(t === 'Polygon' || t === 'MultiPolygon') {
			poly.push(f)
		}
	})
	return { type: 'FeatureCollection', features: poly }
}
