(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{60042:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var u=typeof r;if("string"===u||"number"===u)t.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&t.push(l)}}else if("object"===u)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&t.push(i);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},66471:function(t){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,o,u;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!==o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(u=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,u[o]))return!1;for(o=n;0!==o--;){var l=u[o];if(!t(e[l],r[l]))return!1}return!0}return e!==e&&r!==r}},98970:function(t,e,r){"use strict";r.r(e);var n=r(50489),o=r(52754),u=r(27378),l=r(20587),i=r(34661),a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},f=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};e.default=function(t){var e=t.label,r=void 0===e?"Content":e,c=t.source,s=t.style,p=f(t,["label","source","style"]),y=(0,l.Z)({source:c}).input,g=y.value,v=y.onChange;return u.createElement(i.Z,{label:r,source:c,fullWidth:!0},u.createElement(u.Fragment,null,u.createElement(n.Z,{elevation:5,style:a({overflow:"visible",padding:16,marginRight:64},s)},u.createElement(o.ZP,a({value:g,onChange:v},p)))))}}}]);