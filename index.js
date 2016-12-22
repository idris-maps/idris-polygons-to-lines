var topojson = require('topojson')
var onlyPoly = require('./lib/only-polygons')
var toLines = require('./lib/to-lines')

module.exports = function(data) {
	var topology = topojson.topology({ poly: onlyPoly(data) }, 1e4)
	return toLines(topology)
}



