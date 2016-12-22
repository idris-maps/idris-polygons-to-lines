var topojson = require('topojson')

module.exports = function(topology) {
	var t = topology.transform
	var scaleX = t.scale[0]
	var scaleY = t.scale[1]
	var transX = t.translate[0]
	var transY = t.translate[1]

	var feats = []

	topology.arcs.forEach(function(arc) {
		var pts = arc
		var ref = null
		var c = []
		pts.forEach(function(pt, i) {
			if(i === 0) { 
				c.push([pt[0]*scaleX + transX, pt[1]*scaleY + transY]) 
				ref = [pt[0]*scaleX + transX, pt[1]*scaleY + transY] 
			} else {
				c.push([pt[0]*scaleX + ref[0], pt[1]*scaleY + ref[1]])
				ref = [pt[0]*scaleX + ref[0], pt[1]*scaleY + ref[1]]
			}
		})
		feats.push({type: 'Feature', properties: {}, geometry: {type: 'LineString', coordinates: c}})
	})
	return {type: 'FeatureCollection', features: feats}
}

