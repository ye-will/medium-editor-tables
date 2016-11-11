(function (root, factory) {
  'use strict';
  var isElectron = typeof module === 'object' && process && process.versions && process.versions.electron;
  if (!isElectron && typeof module === 'object') {
    var MediumEditor = require('medium-editor');
    module.exports = factory(MediumEditor);
  } else if (typeof define === 'function' && define.amd) {
    define(['medium-editor'], factory);
  } else {
    root.MediumEditorTable = factory(root.MediumEditor);
  }
}(this, function (MediumEditor) {
  'use strict';
