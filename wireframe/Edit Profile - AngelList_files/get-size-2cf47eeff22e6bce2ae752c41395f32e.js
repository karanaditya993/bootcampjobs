!function(t){"use strict";function e(t){var e=parseFloat(t),n=-1===t.indexOf("%")&&!isNaN(e);return n&&e}function n(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,n=o.length;n>e;e++){var r=o[e];t[r]=0}return t}function r(t){function r(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var r=a(t);if("none"===r.display)return n();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var c=i.isBorderBox=!(!u||!r[u]||"border-box"!==r[u]),h=0,f=o.length;f>h;h++){var d=o[h],p=r[d];p=s(t,p);var g=parseFloat(p);i[d]=isNaN(g)?0:g}var v=i.paddingLeft+i.paddingRight,m=i.paddingTop+i.paddingBottom,y=i.marginLeft+i.marginRight,_=i.marginTop+i.marginBottom,b=i.borderLeftWidth+i.borderRightWidth,x=i.borderTopWidth+i.borderBottomWidth,w=c&&l,D=e(r.width);D!==!1&&(i.width=D+(w?0:v+b));var S=e(r.height);return S!==!1&&(i.height=S+(w?0:m+x)),i.innerWidth=i.width-(v+b),i.innerHeight=i.height-(m+x),i.outerWidth=i.width+y,i.outerHeight=i.height+_,i}}function s(t,e){if(i||-1===e.indexOf("%"))return e;var n=t.style,r=n.left,a=t.runtimeStyle,o=a&&a.left;return o&&(a.left=t.currentStyle.left),n.left=e,e=n.pixelLeft,n.left=r,o&&(a.left=o),e}var l,u=t("boxSizing");return function(){if(u){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[u]="border-box";var n=document.body||document.documentElement;n.appendChild(t);var r=a(t);l=200===e(r.width),n.removeChild(t)}}(),r}var i=t.getComputedStyle,a=i?function(t){return i(t,null)}:function(t){return t.currentStyle},o=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property/get-style-property"],r):"object"==typeof exports?module.exports=r(require("get-style-property")):t.getSize=r(t.getStyleProperty)}(window);