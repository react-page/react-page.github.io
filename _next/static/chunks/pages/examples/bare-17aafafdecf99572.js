(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9291],{66471:function(e){"use strict";e.exports=function e(n,r){if(n===r)return!0;if(n&&r&&"object"==typeof n&&"object"==typeof r){if(n.constructor!==r.constructor)return!1;var t,o,i;if(Array.isArray(n)){if((t=n.length)!=r.length)return!1;for(o=t;0!==o--;)if(!e(n[o],r[o]))return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if((t=(i=Object.keys(n)).length)!==Object.keys(r).length)return!1;for(o=t;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=t;0!==o--;){var l=i[o];if(!e(n[l],r[l]))return!1}return!0}return n!==n&&r!==r}},69461:function(e,n,r){"use strict";r.r(n);var t=r(27378),o=r(52754),i=r(48650),l=r(71417),a=r(24246),u=[(0,i.ZP)(),l.Z];n.default=function(){var e=(0,t.useState)(null)[0];return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.ZP,{cellPlugins:u,value:e})})}},43771:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/bare",function(){return r(69461)}])},64652:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&e.push(l)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var a in r)t.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},71417:function(e,n,r){"use strict";r.d(n,{Z:function(){return h},F:function(){return d}});var t=r(7256),o=r(27378),i=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(5690)]).then(r.bind(r,15217))})),l={Controls:function(){return o.createElement(o.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return o.createElement(o.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"Existing image URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link to open upon image click",openNewWindow:"Open link in new window",srcPlaceholder:"http://example.com/image.png",buttonContent:"Choose for upload",noFileError:"No file selected",badExtensionError:"Wrong file type",tooBigError:"Image file > 5MB",uploadingError:"Error while uploading",unknownError:"Unknown error"},icon:o.createElement(i,null)},a=function(){return a=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)},u=function(e){var n=a(a({},l),e),r=n.Controls;return{controls:{type:"custom",Component:function(e){return o.createElement(r,a({},e,{translations:n.translations,imageUpload:n.imageUpload}))}},Renderer:n.Renderer,id:"ory/editor/core/content/image",version:1,icon:n.icon,title:n.translations.pluginName,isInlineable:!0,description:n.translations.pluginDescription}},c={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},s=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(5981)]).then(r.bind(r,2431))})),f=function(e){var n=e.data,r=null===n||void 0===n?void 0:n.src,t=null===n||void 0===n?void 0:n.openInNewWindow,i=o.createElement("img",{className:"react-page-plugins-content-image",alt:"",src:r});return r?o.createElement("div",null,(null===n||void 0===n?void 0:n.href)?o.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===n||void 0===n?void 0:n.href,target:t?"_blank":void 0,rel:t?"noreferrer noopener":void 0},i):i):o.createElement("div",null,o.createElement("div",{className:"react-page-plugins-content-image-placeholder"},o.createElement(s,{style:c})))},p=function(){return p=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},p.apply(this,arguments)},g=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(7217),r.e(6547),r.e(8496),r.e(4576),r.e(919),r.e(5439),r.e(7093),r.e(8236),r.e(1740),r.e(8854),r.e(5167)]).then(r.bind(r,35213))})),d=function(e){return u(p({Renderer:f,Controls:g},e))},h=d()}},function(e){e.O(0,[2479,7321,2754,8650,9774,2888,179],(function(){return n=43771,e(e.s=n);var n}));var n=e.O();_N_E=n}]);