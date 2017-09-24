/* Node.js currently doesn't support import and export feature of ES6.
 * But classes,const,let and other features can be used in node.js
 * Hence for now use require() and module.exports
*/

/* 
var f = require('./app/calculate');

var k = new f.Shape();

k.add(); */

require('./app/product/index')
require('./app/config/server')