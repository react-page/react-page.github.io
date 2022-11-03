(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6865],{66471:function(n){"use strict";n.exports=function n(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){if(r.constructor!==t.constructor)return!1;var e,o,i;if(Array.isArray(r)){if((e=r.length)!=t.length)return!1;for(o=e;0!==o--;)if(!n(r[o],t[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if((e=(i=Object.keys(r)).length)!==Object.keys(t).length)return!1;for(o=e;0!==o--;)if(!Object.prototype.hasOwnProperty.call(t,i[o]))return!1;for(o=e;0!==o--;){var u=i[o];if(!n(r[u],t[u]))return!1}return!0}return r!==r&&t!==t}},25389:function(n,r,t){var e=t(88799),o=t(26194),i=t(89278);n.exports=function(n,r){var t={};return r=i(r,3),o(n,(function(n,o,i){e(t,o,r(n,o,i))})),t}},23548:function(n,r,t){"use strict";t.d(r,{e:function(){return c}});var e=t(25389),o=t.n(e),i=t(27378),u=t(73456),l=t(45453);function c(n,r){function t(t){const[e,c]=(0,l.U)(t.name,t,r),a=function(n,r,t){if("leaf"===(null===t||void 0===t?void 0:t.kind))return n;const e=""!==r.name,i=Object.keys(n.state).some((n=>{const t=r[n];return null!==t&&void 0!==t}));if(!e&&!i)return n;const u=Object.assign({},n);return e&&(u.name=u.name.concat(r.name)),i&&(u.state=o()(u.state,((n,t)=>{const e=r[t];return null!==e&&void 0!==e?!!e:n}))),u}(c,t,r),s=i.createElement(n,Object.assign({},t,e));return c===a?s:i.createElement(u.D.Provider,{children:s,value:a})}return t.displayName=`${n.displayName||n.name}Field`,Object.assign(t,{Component:n,options:r})}},73456:function(n,r,t){"use strict";t.d(r,{D:function(){return e}});const e=(0,t(27378).createContext)(null)},45453:function(n,r,t){"use strict";t.d(r,{U:function(){return f}});var e=t(99729),o=t.n(e),i=t(25389),u=t.n(i),l=t(27378),c=t(64576),a=t(45939);function s(n,r,t,e){const o=!0===n||void 0===n,i=!0===r||void 0===r,u=i?e:r;return[""===n||!1===n||null===n||o&&(i||!t)?"":o?u:n,u]}function f(n,r,t){var e;const i=(0,a.c)(),f=(0,c.m)((null===t||void 0===t?void 0:t.absoluteName)?"":i.name,n),d=i.schema.getField(f),v=!1!==(null===t||void 0===t?void 0:t.initialValue),p=v?(0,l.useRef)(!1):{current:!1},h=u()(i.state,((n,t)=>{const e=r[t];return null!==e&&void 0!==e?!!e:n})),g=!!o()(i.changedMap,f),y=i.schema.getError(f,i.error),b=i.schema.getErrorMessage(f,i.error),m=i.schema.getType(f),O=i.schema.getSubfields(f),j=i.schema.getProps(f,Object.assign(Object.assign({},h),r)),[w,C]=s(r.label,j.label,h.label,""),[P]=s(r.placeholder,j.placeholder,h.placeholder,w||C),S=(0,l.useMemo)((()=>i.randomId()),[]),E=(0,l.useCallback)(((n,r=f)=>{p.current=!0,i.onChange(r,n)}),[i.onChange,f]),x=o()(i.model,f);let k,z=null!==(e=r.value)&&void 0!==e?e:x;v&&(p.current||(void 0===z?(z=i.schema.getInitialValue(f,r),k=z):void 0!==r.value&&r.value!==x&&(k=r.value)),(0,l.useEffect)((()=>{var n;(null!==(n=r.required)&&void 0!==n?n:j.required)&&void 0!==k&&E(k)}),[]));return[Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({id:S},h),{changed:g,error:y,errorMessage:b,field:d,fieldType:m,fields:O,onChange:E,value:z}),j),r),{label:w,name:f,placeholder:P}),i]}},45939:function(n,r,t){"use strict";t.d(r,{c:function(){return l}});var e=t(3996),o=t.n(e),i=t(27378),u=t(73456);function l(){const n=(0,i.useContext)(u.D);return o()(null!==n,"useForm must be used within a form.\n\nTwo most common reasons for this error are:\n1. Component calling this function doesn't have a parent Form component in the tree.\n2. A duplicate uniforms dependency is installed in node_modules.\n\nFor more info check FAQ: https://uniforms.tools/docs/faq/#useform-must-be-used-within-a-form\n  "),n}},69774:function(n,r,t){"use strict";var e=t(27378);r.Z=function(n){var r=n.children;return e.createElement(e.Fragment,null,r)}},32365:function(n,r,t){"use strict";t.d(r,{_:function(){return a},Z:function(){return s}});var e=t(28415),o=t(56007),i=t(77876),u=function(){return u=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},u.apply(this,arguments)},l=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]])}return t},c=new i.U({fromVersion:0,toVersion:1,migrate:function(n,r){var t,c,a=n.cells,s=n.id,f=r.lang,d=function(n){var r,t=n.cells,o=l(n,["cells"]);return u(u({},o),{id:(0,e.M)(),cells:null!==(r=null===t||void 0===t?void 0:t.map(v))&&void 0!==r?r:[]})},v=function(n){var r,t,c,a=n.content,s=n.layout,v=n.rows,p=l(n,["content","layout","rows"]),h=null!==s&&void 0!==s?s:a,g=null!==(t=null===h||void 0===h?void 0:h.stateI18n)&&void 0!==t?t:(null===h||void 0===h?void 0:h.state)?((r={})[f]=null!==(c=h.state)&&void 0!==c?c:null,r):void 0,y=h?{id:h.plugin.name,version:(0,i.K)(h.plugin.version)}:void 0;return(0,o.Y)(u(u({},p),{rows:null===v||void 0===v?void 0:v.map(d),plugin:y,dataI18n:g,id:(0,e.M)()}))},p=null!==(t=null===a||void 0===a?void 0:a.map(v))&&void 0!==t?t:[];return{id:s,rows:1!==p.length||p[0].plugin?[{id:(0,e.M)(),cells:p}]:null!==(c=p[0].rows)&&void 0!==c?c:[],version:0}}}),a=1,s=[c]},6026:function(n,r,t){"use strict";t.d(r,{xH:function(){return s},_9:function(){return v},e1:function(){return f},EW:function(){return p},w7:function(){return d}});var e=t(46242),o=function(n){var r;return!n||((0,e.j)(n)?0===n.cells.length:!(n.rows&&(null===(r=n.rows)||void 0===r?void 0:r.length)>0)&&!n.plugin)},i=t(56007),u=function(){return u=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},u.apply(this,arguments)},l=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]])}return t},c=function(n,r){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),u=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(l){o={error:l}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u},a=function(n,r,t){if(t||2===arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))},s=function(n,r){return a(a([],c(n),!1),c(r),!1)},f=function(n){return void 0===n&&(n=[]),n.filter((function(n){return!o(n)}))},d=function(n){return void 0===n&&(n=[]),n.filter((function(n){return!o(n)}))},v=function(n){var r=n.rows,t=l(n,["rows"]),e=u(u({},t),{rows:null===r||void 0===r?void 0:r.map((function(n){var r=n.cells,t=void 0===r?[]:r;if(1!==t.length)return[n];var e=t[0],o=e.rows,i=e.plugin;return o&&(null===o||void 0===o?void 0:o.length)>0&&!i?o:[n]})).reduce(s,[])});return(0,i.Y)(e)},p=function(n){var r=n.cells,t=l(n,["cells"]);return(0,i.Y)(u(u({},t),{cells:null===r||void 0===r?void 0:r.map((function(n){var r=n.rows,t=n.size;if(!r||1!==r.length||n.plugin)return[n];var e=r[0].cells,o=void 0===e?[]:e;return 1===o.length?o.map((function(n){return u(u({},n),{size:t})})):[n]})).reduce(s,[])}))}},9337:function(n,r,t){"use strict";t.d(r,{M:function(){return u}});var e=t(42443),o=t(6026),i=function(){return i=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},i.apply(this,arguments)},u=function(n){return void 0===n&&(n=[]),(0,o.w7)(n).map((function(n){var r=(0,o.EW)(n);return r.cells&&(r.cells=(0,e.Ci)((0,e.nq)((0,o.e1)(r.cells.map((function(n){return i(i({},n),{rows:n.rows?u(n.rows):void 0})})))))),r}))}},42443:function(n,r,t){"use strict";t.d(r,{Ci:function(){return u},Wj:function(){return l},nq:function(){return c}});var e=t(61138),o=function(){return o=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},o.apply(this,arguments)},i=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]])}return t},u=function(n){void 0===n&&(n=[]);var r=2===n.length&&n[0].inline?[o(o({},n[0]),{size:n[0].size||Math.round(6)}),o(o({},n[1]),{size:12,hasInlineNeighbour:n[0].id})]:n.map((function(n){n.hasInlineNeighbour;var r=i(n,["hasInlineNeighbour"]);return o(o({},r),{inline:null})}));return(0,e.Z)(n,r)?n:r},l=function(n,r){void 0===n&&(n=[]);var t=r.id,e=r.size,i=0;return n.map((function(n){var r,u;if(i>0){var l=o(o({},n),{size:(null!==(r=n.size)&&void 0!==r?r:0)+i-(null!==e&&void 0!==e?e:0)});return i=0,l}return t===n.id?(n.inline||(i=null!==(u=n.size)&&void 0!==u?u:0),o(o({},n),{size:e})):n}))},c=function(n){void 0===n&&(n=[]);var r=function(n){return void 0===n&&(n=[]),n.reduce((function(n,r){var t=n.size,e=void 0===t?99:t,o=n.inline,i=r.size,u=void 0===i?99:i;return{size:(o?0:1)*e+(r.inline?0:1)*u}}),{size:0}).size}(n);if(12===r)return n;var t=n.length,e=Math.floor(12/t),i=12-e*(t-1);return n.map((function(n,r){return o(o({},n),{size:r===t-1?i:e})}))}},46242:function(n,r,t){"use strict";t.d(r,{j:function(){return e}});var e=function(n){return!!n&&Object.prototype.hasOwnProperty.call(n,"cells")}},28415:function(n,r,t){"use strict";t.d(r,{M:function(){return e}});var e=function(){return Math.random().toString(36).substr(2,6)}},61138:function(n,r,t){"use strict";var e=t(66471),o=t.n(e);r.Z=o()},10186:function(n,r,t){"use strict";t.d(r,{m:function(){return u},q:function(){return l}});var e=function(n,r){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),u=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(l){o={error:l}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u},o=function(n,r,t){if(t||2===arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))},i=function(n){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&n[r],e=0;if(t)return t.call(n);if(n&&"number"===typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},u=function(n,r){if(!(null===r||void 0===r?void 0:r.pluginId))return n;var t=r.pluginId?n.find((function(n){return n.id===r.pluginId})):null;return(null===t||void 0===t?void 0:t.cellPlugins)?(Array.isArray(t.cellPlugins)?t.cellPlugins:t.cellPlugins(n,r.data)).reduceRight((function(n,r){return n.some((function(n){return n.id===r.id}))?n:o([r],e(n),!1)}),[]):n},l=function(n,r){var t,e,o=n;try{for(var l=i(r),c=l.next();!c.done;c=l.next()){var a=c.value;o=u(o,a)}}catch(s){t={error:s}}finally{try{c&&!c.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}return o}},39277:function(n,r,t){"use strict";t.d(r,{k:function(){return e}});var e=function(n,r){var t,e,o,i=null===n||void 0===n?void 0:n.dataI18n;return null!==(o=null!==(t=null===i||void 0===i?void 0:i[r])&&void 0!==t?t:null===i||void 0===i?void 0:i[null!==(e=Object.keys(i).find((function(n){return i[n]})))&&void 0!==e?e:"default"])&&void 0!==o?o:{}}},40842:function(n,r,t){"use strict";t.d(r,{d:function(){return e},o:function(){return o}});var e=function(n,r){return(null===n||void 0===n?void 0:n.cellSpacing)?"function"===typeof(null===n||void 0===n?void 0:n.cellSpacing)?null===n||void 0===n?void 0:n.cellSpacing(r):null===n||void 0===n?void 0:n.cellSpacing:null},o=function(n){return void 0===n&&(n=0),n?-1!==["number","string"].indexOf(typeof n)?{x:+n||0,y:+n||0}:{x:+n.x||0,y:+n.y||0}:{x:0,y:0}}},56007:function(n,r,t){"use strict";t.d(r,{Y:function(){return o}});var e=function(){return e=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},e.apply(this,arguments)},o=function(n){return Object.keys(n).reduce((function(r,t){var o,i=n[t];return"undefined"===typeof i||null==i?r:e(e({},r),((o={})[t]=i,o))}),{})}},35424:function(n,r,t){"use strict";t.r(r);var e=t(15830),o=t(90291),i=t(2974),u=t(27378),l=t(68624),c=t(21462),a=function(){var n=function(r,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])},n(r,t)};return function(r,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=r}n(r,t),r.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),s=function(){return s=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},s.apply(this,arguments)},f=function(n){function r(){var r=null!==n&&n.apply(this,arguments)||this;return r.anchorEl=null,r.state={isColorPickerVisible:!1},r.handleClickShowColorPicker=function(n){var t;(null===(t=r.props)||void 0===t?void 0:t.onDialogOpen)&&r.props.onDialogOpen(),r.setState({isColorPickerVisible:!r.state.isColorPickerVisible})},r.onChange=function(n){return r.props.onChange&&r.props.onChange(n.rgb)},r.handleChangeComplete=function(n){return r.props.onChangeComplete&&r.props.onChangeComplete(n.rgb)},r}return a(r,n),r.prototype.render=function(){var n,r=this;return u.createElement(u.Fragment,null,u.createElement(e.Z,{ref:function(n){r.anchorEl=n},variant:"contained",onClick:this.handleClickShowColorPicker,style:s(s({},this.props.style),{borderColor:(0,c.U)(this.props.color),borderStyle:"solid",borderWidth:"2px"})},this.props.buttonContent,this.props.icon),u.createElement(o.ZP,{open:this.state.isColorPickerVisible,anchorEl:this.anchorEl,onClose:this.handleClickShowColorPicker,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}},u.createElement("div",null,u.createElement(l.AI,{color:null!==(n=this.props.color)&&void 0!==n?n:void 0,onChange:this.onChange,onChangeComplete:this.handleChangeComplete}))))},r.defaultProps={buttonContent:"Change color",icon:u.createElement(i.Z,{style:{marginLeft:"4px",fontSize:"19px"}})},r}(u.Component);r.default=f},44532:function(n,r,t){"use strict";t.r(r);var e=t(27378),o=t(23548),i=t(35424),u=t(21462),l=t(28854),c=(0,o.e)((function(n){var r,t=(0,l.WW)().t;return e.createElement(i.default,{style:{marginBottom:8},color:(0,u.u)(n.value),buttonContent:null!==(r=t(n.label))&&void 0!==r?r:"",onChange:function(r){n.onChange((0,u.U)(r))}})}));r.default=c},21462:function(n,r,t){"use strict";t.d(r,{U:function(){return o},u:function(){return i}});var e=t(39340),o=function(n){return n?"rgba("+n.r+", "+n.g+", "+n.b+", "+n.a+")":void 0},i=function(n){var r=(0,e.Z)(n);return r&&"rgb"===r.space?{r:r.values[0],g:r.values[1],b:r.values[2],a:r.alpha}:null}}}]);
//# sourceMappingURL=6865.cd96df1c90303d3e.js.map