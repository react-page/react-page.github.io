"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8201],{69774:function(n,r,t){var e=t(27378);r.Z=function(n){var r=n.children;return e.createElement(e.Fragment,null,r)}},6026:function(n,r,t){t.d(r,{xH:function(){return s},_9:function(){return d},e1:function(){return f},EW:function(){return v},w7:function(){return p}});var e=t(46242),o=function(n){var r;return!n||((0,e.j)(n)?0===n.cells.length:!((null===(r=n.rows)||void 0===r?void 0:r.length)>0)&&!n.plugin)},i=t(56007),l=function(){return l=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},l.apply(this,arguments)},a=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]])}return t},u=function(n,r){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),l=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)l.push(e.value)}catch(a){o={error:a}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},c=function(n,r,t){if(t||2===arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))},s=function(n,r){return c(c([],u(n),!1),u(r),!1)},f=function(n){return void 0===n&&(n=[]),n.filter((function(n){return!o(n)}))},p=function(n){return void 0===n&&(n=[]),n.filter((function(n){return!o(n)}))},d=function(n){var r=n.rows,t=a(n,["rows"]),e=l(l({},t),{rows:null===r||void 0===r?void 0:r.map((function(n){var r=n.cells,t=void 0===r?[]:r;if(1!==t.length)return[n];var e=t[0],o=e.rows,i=e.plugin;return(null===o||void 0===o?void 0:o.length)>0&&!i?o:[n]})).reduce(s,[])});return(0,i.Y)(e)},v=function(n){var r=n.cells,t=a(n,["cells"]);return(0,i.Y)(l(l({},t),{cells:null===r||void 0===r?void 0:r.map((function(n){var r=n.rows,t=void 0===r?[]:r,e=n.size;if(1!==t.length||n.plugin)return[n];var o=t[0].cells,i=void 0===o?[]:o;return 1===i.length?i.map((function(n){return l(l({},n),{size:e})})):[n]})).reduce(s,[])}))}},9337:function(n,r,t){t.d(r,{M:function(){return l}});var e=t(42443),o=t(6026),i=function(){return i=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},i.apply(this,arguments)},l=function(n){return void 0===n&&(n=[]),(0,o.w7)(n).map((function(n){var r=(0,o.EW)(n);return r.cells&&(r.cells=(0,e.Ci)((0,e.nq)((0,o.e1)(r.cells.map((function(n){return i(i({},n),{rows:n.rows?l(n.rows):void 0})})))))),r}))}},42443:function(n,r,t){t.d(r,{Ci:function(){return l},Wj:function(){return a},nq:function(){return u}});var e=t(61138),o=function(){return o=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},o.apply(this,arguments)},i=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]])}return t},l=function(n){void 0===n&&(n=[]);var r=2===n.length&&n[0].inline?[o(o({},n[0]),{size:n[0].size||Math.round(6)}),o(o({},n[1]),{size:12,hasInlineNeighbour:n[0].id})]:n.map((function(n){n.hasInlineNeighbour;var r=i(n,["hasInlineNeighbour"]);return o(o({},r),{inline:null})}));return(0,e.Z)(n,r)?n:r},a=function(n,r){void 0===n&&(n=[]);var t=r.id,e=r.size,i=0;return n.map((function(n){if(i>0){var r=o(o({},n),{size:n.size+i-e});return i=0,r}return t===n.id?(n.inline||(i=n.size),o(o({},n),{size:e})):n}))},u=function(n){void 0===n&&(n=[]);var r=function(n){return void 0===n&&(n=[]),n.reduce((function(n,r){var t=n.size,e=void 0===t?99:t,o=n.inline,i=r.size,l=void 0===i?99:i;return{size:(o?0:1)*e+(r.inline?0:1)*l}}),{size:0}).size}(n);if(12===r)return n;var t=n.length,e=Math.floor(12/t),i=12-e*(t-1);return n.map((function(n,r){return o(o({},n),{size:r===t-1?i:e})}))}},46242:function(n,r,t){t.d(r,{j:function(){return e}});var e=function(n){return!!n&&Object.prototype.hasOwnProperty.call(n,"cells")}},28415:function(n,r,t){t.d(r,{M:function(){return e}});var e=function(){return Math.random().toString(36).substr(2,6)}},61138:function(n,r,t){var e=t(66471),o=t.n(e);r.Z=o()},10186:function(n,r,t){t.d(r,{m:function(){return l},q:function(){return a}});var e=function(n,r){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),l=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)l.push(e.value)}catch(a){o={error:a}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},o=function(n,r,t){if(t||2===arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))},i=function(n){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&n[r],e=0;if(t)return t.call(n);if(n&&"number"===typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},l=function(n,r){if(!(null===r||void 0===r?void 0:r.pluginId))return n;var t=r.pluginId?n.find((function(n){return n.id===r.pluginId})):null;return(null===t||void 0===t?void 0:t.cellPlugins)?(Array.isArray(t.cellPlugins)?t.cellPlugins:t.cellPlugins(n,r.data)).reduceRight((function(n,r){return n.some((function(n){return n.id===r.id}))?n:o([r],e(n),!1)}),[]):n},a=function(n,r){var t,e,o=n;try{for(var a=i(r),u=a.next();!u.done;u=a.next()){var c=u.value;o=l(o,c)}}catch(s){t={error:s}}finally{try{u&&!u.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return o}},39277:function(n,r,t){t.d(r,{k:function(){return e}});var e=function(n,r){var t,e,o=n.dataI18n;return null!==(e=null!==(t=null===o||void 0===o?void 0:o[r])&&void 0!==t?t:null===o||void 0===o?void 0:o[Object.keys(o).find((function(n){return o[n]}))])&&void 0!==e?e:{}}},40842:function(n,r,t){t.d(r,{d:function(){return e},o:function(){return o}});var e=function(n,r){return(null===n||void 0===n?void 0:n.cellSpacing)?"function"===typeof(null===n||void 0===n?void 0:n.cellSpacing)?null===n||void 0===n?void 0:n.cellSpacing(r):null===n||void 0===n?void 0:n.cellSpacing:void 0},o=function(n){return n&&-1===["number","string"].indexOf(typeof n)?{x:+n.x||0,y:+n.y||0}:{x:+n||0,y:+n||0}}},56007:function(n,r,t){t.d(r,{Y:function(){return o}});var e=function(){return e=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},e.apply(this,arguments)},o=function(n){return Object.keys(n).reduce((function(r,t){var o,i=n[t];return"undefined"===typeof i||null==i?r:e(e({},r),((o={})[t]=i,o))}),{})}},44497:function(n,r,t){t.r(r),t.d(r,{default:function(){return d}});var e=t(27378),o=t(9334),i=t(47820),l=t(59633),a=t(55933),u={buttonContent:"Upload image",noFileError:"No file selected",badExtensionError:"Bad file type",tooBigError:"Too big",uploadingError:"Error while uploading",unknownError:"Unknown error"},c=t(28854),s=function(){var n=function(r,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])},n(r,t)};return function(r,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=r}n(r,t),r.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),f=function(){return f=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},f.apply(this,arguments)},p=function(n){function r(){var r=null!==n&&n.apply(this,arguments)||this;return r.state={isUploading:!1,hasError:!1,errorText:"",progress:0},r.hasExtension=function(n){var t="("+(r.props.allowedExtensions?r.props.allowedExtensions.map((function(n){return n.toLowerCase()})).join("|"):"").replace(/\./g,"\\.")+")$";return new RegExp(t,"i").test(n.toLowerCase())},r.handleError=function(n){var t="";switch(n){case 1:t=r.props.t(r.props.translations.noFileError);break;case 2:t=r.props.t(r.props.translations.badExtensionError);break;case 3:t=r.props.t(r.props.translations.tooBigError);break;case 4:t=r.props.t(r.props.translations.uploadingError);break;default:t=r.props.t(r.props.translations.unknownError)}r.setState({hasError:!0,errorText:t,isUploading:!0},(function(){return r.setState({isUploading:!1})})),setTimeout((function(){return r.setState({hasError:!1,errorText:""})}),5e3)},r.handleFileSelected=function(n){if(n.target.files&&n.target.files[0]){var t=n.target.files[0];r.hasExtension(t.name)?t.size>r.props.maxFileSize?r.handleError(3):(r.props.imageLoaded&&r.readFile(t).then((function(n){return r.props.imageLoaded(n)})),r.props.imageUpload&&(r.setState({isUploading:!0}),r.props.imageUpload(t,r.handleReportProgress).then((function(n){r.setState({progress:void 0,isUploading:!1}),r.props.imageUploaded&&r.props.imageUploaded(n)})).catch((function(n){r.setState({isUploading:!1}),r.props.imageUploadError&&r.props.imageUploadError(n)})))):r.handleError(2)}else r.handleError(1)},r.handleFileUploadClick=function(){return r.fileInput.click()},r.handleReportProgress=function(n){return r.setState({progress:n})},r.renderChildren=function(){return r.state.isUploading?e.createElement(i.Z,{value:r.state.progress,size:19}):r.state.hasError?e.createElement(e.Fragment,null,r.state.errorText,e.createElement(a.Z,{style:{marginLeft:"8px"}})):e.createElement(e.Fragment,null,r.props.translations.buttonContent,r.props.icon)},r}return s(r,n),r.prototype.readFile=function(n){return new Promise((function(r,t){var e=new FileReader;e.onload=function(t){var e=t.target.result;e=e.replace(";base64",";name=".concat(n.name,";base64")),r({file:n,dataUrl:e})},e.readAsDataURL(n)}))},r.prototype.render=function(){var n=this;return e.createElement(e.Fragment,null,e.createElement(o.Z,{disabled:this.state.isUploading,variant:"contained",color:this.state.hasError?"secondary":"primary",onClick:this.handleFileUploadClick,style:this.props.style,size:"small"},this.renderChildren()),!this.state.isUploading&&e.createElement("input",{style:{display:"none"},ref:function(r){return n.fileInput=r},type:"file",onChange:this.handleFileSelected}))},r.defaultProps={icon:e.createElement(l.Z,{style:{marginLeft:"8px"}}),allowedExtensions:["jpg","jpeg","png"],maxFileSize:5242880,translations:u},r}(e.Component),d=function(n){var r=(0,c.WW)().t;return e.createElement(p,f({},n,{t:r}))}}}]);