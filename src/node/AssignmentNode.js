/*global window:true*/
'use strict';

const jsEnv = require('browser-or-node');

if (jsEnv.isBrowser) {
  window['math'].expression.node.AssignmentNode.prototype.toCMathMLNode = function() {
    return _toCMathMLNode.apply(this, arguments);
  };
}

if (jsEnv.isNode) {
  exports.name = 'toCMathMLNode';
  exports.path = 'expression.node.AssignmentNode.prototype';
  exports.factory = function() {
    return function() {
      return _toCMathMLNode.apply(this, arguments);
    };
  };
}

function _toCMathMLNode(parentXML) {
  let apply = parentXML.ownerDocument.createElement('apply');
  apply.appendChild(parentXML.ownerDocument.createElement('eq'));

  this.object.toCMathMLNode(apply);
  this.value.toCMathMLNode(apply);

  parentXML.appendChild(apply);
}
