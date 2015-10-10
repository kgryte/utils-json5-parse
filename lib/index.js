'use strict';

// MODULES //

var json5 = require( 'json5' );


// PARSE //

/**
* FUNCTION: parse( value[, reviver] )
*	Attempts to parse a value as JSON5.
*
* @param {*} value - value to parse
* @param {Function} reviver - transformation function
* @returns {*|Error} parsed value or an error
*/
function parse( value, reviver ) {
	try {
		return json5.parse( value, reviver );
	} catch ( error ) {
		return error;
	}
} // end FUNCTION parse()


// EXPORTS //

module.exports = parse;
