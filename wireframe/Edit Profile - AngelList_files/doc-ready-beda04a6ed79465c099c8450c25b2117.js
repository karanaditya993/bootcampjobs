!function(t){"use strict";function e(t){"function"==typeof t&&(e.isReady?t():a.push(t))}function n(t){var n="readystatechange"===t.type&&"complete"!==i.readyState;if(!e.isReady&&!n){e.isReady=!0;for(var r=0,o=a.length;o>r;r++){var s=a[r];s()}}}function r(r){return r.bind(i,"DOMContentLoaded",n),r.bind(i,"readystatechange",n),r.bind(t,"load",n),e}var i=t.document,a=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define(["eventie/eventie"],r)):"object"==typeof exports?module.exports=r(require("eventie")):t.docReady=r(t.eventie)}(window);