"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4841],{71236:function(n,r){for(var t="undefined"!=typeof window&&/Mac|iPod|iPhone|iPad/.test(window.navigator.platform),e={alt:"altKey",control:"ctrlKey",meta:"metaKey",shift:"shiftKey"},o={add:"+",break:"pause",cmd:"meta",command:"meta",ctl:"control",ctrl:"control",del:"delete",down:"arrowdown",esc:"escape",ins:"insert",left:"arrowleft",mod:t?"meta":"control",opt:"alt",option:"alt",return:"enter",right:"arrowright",space:" ",spacebar:" ",up:"arrowup",win:"meta",windows:"meta"},i={backspace:8,tab:9,enter:13,shift:16,control:17,alt:18,pause:19,capslock:20,escape:27," ":32,pageup:33,pagedown:34,end:35,home:36,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,insert:45,delete:46,meta:91,numlock:144,scrolllock:145,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},l=1;l<20;l++)i["f"+l]=111+l;function u(n){return n=o[n=n.toLowerCase()]||n}r.ZP=function(n,r,t){!r||"byKey"in r||(t=r,r=null),Array.isArray(n)||(n=[n]);var l=n.map(function(n){return function(n,r){var t=r&&r.byKey,l={},a=(n=n.replace("++","+add")).split("+"),c=a.length;for(var f in e)l[e[f]]=!1;var s=!0,d=!1,p=void 0;try{for(var v,y=a[Symbol.iterator]();!(s=(v=y.next()).done);s=!0){var h,m=v.value,g=m.endsWith("?")&&m.length>1;g&&(m=m.slice(0,-1));var b=u(m),w=e[b];if(m.length>1&&!w&&!o[m]&&!i[b])throw TypeError('Unknown modifier: "'+m+'"');1!==c&&w||(t?l.key=b:l.which=(h=m,i[h=u(h)]||h.toUpperCase().charCodeAt(0))),w&&(l[w]=!g||null)}}catch(O){d=!0,p=O}finally{try{!s&&y.return&&y.return()}finally{if(d)throw p}}return l}(n,r)}),a=function(n){return l.some(function(r){return function(n,r){for(var t in n){var e=n[t],o=void 0;if(null!=e&&(null!=(o="key"===t&&null!=r.key?r.key.toLowerCase():"which"===t?91===e&&93===r.which?91:r.which:r[t])||!1!==e)&&o!==e)return!1}return!0}(r,n)})};return null==t?a:a(t)}},69774:function(n,r,t){var e=t(27378);r.Z=function(n){var r=n.children;return e.createElement(e.Fragment,null,r)}},44838:function(n,r,t){t.d(r,{lp:function(){return d},sq:function(){return s},CK:function(){return v},rG:function(){return p},rV:function(){return y}});var e=t(27378),o=t(77534),i=t(7524),l=function(n){return n&&n.reactPage&&n.reactPage.focus},u=function(n){var r,t,e;return null!==(e=null===(t=null===(r=l(n))||void 0===r?void 0:r.nodeIds)||void 0===t?void 0:t.filter(function(r){var t;return null===(t=(0,i.$5)(n,r))||void 0===t?void 0:t.node}))&&void 0!==e?e:[]},a=function(n){var r=u(n);return(null==r?void 0:r.length)===1?r[0]:null},c=function(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),l=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)l.push(e.value)}catch(u){o={error:u}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},f=function(n,r,t){if(t||2==arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))},s=function(){return(0,o.v9)(a)},d=function(){return(0,o.v9)(u)},p=function(n){return(0,o.v9)(function(r){return u(r).includes(n)})},v=function(n){return(0,o.v9)(function(r){return a(r)===n})},y=function(n,r,t){var i=(0,o.v9)(function(r){var t=l(r),e=a(r);return t&&e===n?t.scrollToCell:null});(0,e.useEffect)(function(){if(i)return r()},f([i],c(t),!1))}},32365:function(n,r,t){t.d(r,{_:function(){return c},Z:function(){return f}});var e=t(28415),o=t(56007),i=t(77876),l=function(){return(l=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}).apply(this,arguments)},u=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&0>r.indexOf(e)&&(t[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)0>r.indexOf(e[o])&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]]);return t},a=new i.U({fromVersion:0,toVersion:1,migrate:function(n,r){var t,a,c=n.cells,f=n.id,s=r.lang,d=function(n){var r,t=n.cells;return l(l({},u(n,["cells"])),{id:(0,e.M)(),cells:null!==(r=null==t?void 0:t.map(p))&&void 0!==r?r:[]})},p=function(n){var r,t,a,c=n.content,f=n.layout,p=n.rows,v=u(n,["content","layout","rows"]),y=null!=f?f:c,h=null!==(t=null==y?void 0:y.stateI18n)&&void 0!==t?t:(null==y?void 0:y.state)?((r={})[s]=null!==(a=y.state)&&void 0!==a?a:null,r):void 0,m=y?{id:y.plugin.name,version:(0,i.K)(y.plugin.version)}:void 0;return(0,o.Y)(l(l({},v),{rows:null==p?void 0:p.map(d),plugin:m,dataI18n:h,id:(0,e.M)()}))},v=null!==(t=null==c?void 0:c.map(p))&&void 0!==t?t:[];return{id:f,rows:1!==v.length||v[0].plugin?[{id:(0,e.M)(),cells:v}]:null!==(a=v[0].rows)&&void 0!==a?a:[],version:0}}}),c=1,f=[a]},6026:function(n,r,t){t.d(r,{xH:function(){return f},_9:function(){return p},e1:function(){return s},EW:function(){return v},w7:function(){return d}});var e=t(46242),o=function(n){var r;return!n||((0,e.j)(n)?0===n.cells.length:(!n.rows||!((null===(r=n.rows)||void 0===r?void 0:r.length)>0))&&!n.plugin)},i=t(56007),l=function(){return(l=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}).apply(this,arguments)},u=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&0>r.indexOf(e)&&(t[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)0>r.indexOf(e[o])&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]]);return t},a=function(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),l=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)l.push(e.value)}catch(u){o={error:u}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},c=function(n,r,t){if(t||2==arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))},f=function(n,r){return c(c([],a(n),!1),a(r),!1)},s=function(n){return void 0===n&&(n=[]),n.filter(function(n){return!o(n)})},d=function(n){return void 0===n&&(n=[]),n.filter(function(n){return!o(n)})},p=function(n){var r=n.rows,t=l(l({},u(n,["rows"])),{rows:null==r?void 0:r.map(function(n){var r=n.cells,t=void 0===r?[]:r;if(1!==t.length)return[n];var e=t[0],o=e.rows,i=e.plugin;return o&&(null==o?void 0:o.length)>0&&!i?o:[n]}).reduce(f,[])});return(0,i.Y)(t)},v=function(n){var r=n.cells,t=u(n,["cells"]);return(0,i.Y)(l(l({},t),{cells:null==r?void 0:r.map(function(n){var r=n.rows,t=n.size;if(!r||1!==r.length||n.plugin)return[n];var e=r[0].cells,o=void 0===e?[]:e;return 1===o.length?o.map(function(n){return l(l({},n),{size:t})}):[n]}).reduce(f,[])}))}},9337:function(n,r,t){t.d(r,{M:function(){return l}});var e=t(42443),o=t(6026),i=function(){return(i=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}).apply(this,arguments)},l=function(n){return void 0===n&&(n=[]),(0,o.w7)(n).map(function(n){var r=(0,o.EW)(n);return r.cells&&(r.cells=(0,e.Ci)((0,e.nq)((0,o.e1)(r.cells.map(function(n){return i(i({},n),{rows:n.rows?l(n.rows):void 0})}))))),r})}},42443:function(n,r,t){t.d(r,{Ci:function(){return l},Wj:function(){return u},nq:function(){return a}});var e=t(61138),o=function(){return(o=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}).apply(this,arguments)},i=function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&0>r.indexOf(e)&&(t[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)0>r.indexOf(e[o])&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]]);return t},l=function(n){void 0===n&&(n=[]);var r=2===n.length&&n[0].inline?[o(o({},n[0]),{size:n[0].size||Math.round(6)}),o(o({},n[1]),{size:12,hasInlineNeighbour:n[0].id})]:n.map(function(n){return n.hasInlineNeighbour,o(o({},i(n,["hasInlineNeighbour"])),{inline:null})});return(0,e.Z)(n,r)?n:r},u=function(n,r){void 0===n&&(n=[]);var t=r.id,e=r.size,i=0;return n.map(function(n){var r,l;if(i>0){var u=o(o({},n),{size:(null!==(r=n.size)&&void 0!==r?r:0)+i-(null!=e?e:0)});return i=0,u}return t===n.id?(n.inline||(i=null!==(l=n.size)&&void 0!==l?l:0),o(o({},n),{size:e})):n})},a=function(n){if(void 0===n&&(n=[]),void 0===(r=n)&&(r=[]),12===r.reduce(function(n,r){var t=n.size,e=n.inline,o=r.size;return{size:(e?0:1)*(void 0===t?99:t)+(r.inline?0:1)*(void 0===o?99:o)}},{size:0}).size)return n;var r,t=n.length,e=Math.floor(12/t),i=12-e*(t-1);return n.map(function(n,r){return o(o({},n),{size:r===t-1?i:e})})}},46242:function(n,r,t){t.d(r,{j:function(){return e}});var e=function(n){return!!n&&Object.prototype.hasOwnProperty.call(n,"cells")}},28415:function(n,r,t){t.d(r,{M:function(){return e}});var e=function(){return Math.random().toString(36).substr(2,6)}},61138:function(n,r,t){var e=t(87222),o=t.n(e);r.Z=o()},10186:function(n,r,t){t.d(r,{m:function(){return l},q:function(){return u}});var e=function(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),l=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)l.push(e.value)}catch(u){o={error:u}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},o=function(n,r,t){if(t||2==arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))},i=function(n){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&n[r],e=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},l=function(n,r){if(!(null==r?void 0:r.pluginId))return n;var t=r.pluginId?n.find(function(n){return n.id===r.pluginId}):null;return(null==t?void 0:t.cellPlugins)?(Array.isArray(t.cellPlugins)?t.cellPlugins:t.cellPlugins(n,r.data)).reduceRight(function(n,r){return n.some(function(n){return n.id===r.id})?n:o([r],e(n),!1)},[]):n},u=function(n,r){var t,e,o=n;try{for(var u=i(r),a=u.next();!a.done;a=u.next()){var c=a.value;o=l(o,c)}}catch(f){t={error:f}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(t)throw t.error}}return o}},39277:function(n,r,t){t.d(r,{k:function(){return e}});var e=function(n,r){var t,e,o,i=null==n?void 0:n.dataI18n;return null!==(o=null!==(t=null==i?void 0:i[r])&&void 0!==t?t:null==i?void 0:i[null!==(e=Object.keys(i).find(function(n){return i[n]}))&&void 0!==e?e:"default"])&&void 0!==o?o:{}}},40842:function(n,r,t){t.d(r,{d:function(){return e},o:function(){return o}});var e=function(n,r){return(null==n?void 0:n.cellSpacing)?"function"==typeof(null==n?void 0:n.cellSpacing)?null==n?void 0:n.cellSpacing(r):null==n?void 0:n.cellSpacing:null},o=function(n){return(void 0===n&&(n=0),n)?-1!==["number","string"].indexOf(typeof n)?{x:+n||0,y:+n||0}:{x:+n.x||0,y:+n.y||0}:{x:0,y:0}}},56007:function(n,r,t){t.d(r,{Y:function(){return o}});var e=function(){return(e=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}).apply(this,arguments)},o=function(n){return Object.keys(n).reduce(function(r,t){var o,i=n[t];return void 0===i||null==i?r:e(e({},r),((o={})[t]=i,o))},{})}},56079:function(n,r,t){t.d(r,{A1:function(){return l},Yp:function(){return u}});var e=t(27378),o=function(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),l=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)l.push(e.value)}catch(u){o={error:u}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},i=e.createContext({}),l=function(){var n;return null===(n=(0,e.useContext)(i))||void 0===n?void 0:n.visible},u=function(){var n;return null===(n=(0,e.useContext)(i))||void 0===n?void 0:n.setVisible};r.ZP=function(n){var r=n.children,t=o((0,e.useState)(!1),2),l=t[0],u=t[1],a=(0,e.useMemo)(function(){return{visible:l,setVisible:u}},[l,u]);return e.createElement(i.Provider,{value:a},r)}},63466:function(n,r,t){t.r(r),t.d(r,{default:function(){return m}});var e=t(7256),o=t(44838),i=t(28854),l=t(27378),u=t(78895),a=t(56079),c=t(71236),f=t(59323),s=t(25596),d=t(7023),p=function(n,r){var t=n.plugins,e=(0,u.ui)();return l.useCallback(function(n){return(t.filter(function(n){return n.hotKey}).forEach(function(r){r.hotKey&&(0,c.ZP)(r.hotKey,n)&&(n.preventDefault(),(0,s.L)(e,r)?(0,d.J)(e,r):(0,f.G)(e,r))}),(0,c.ZP)(["mod+z","mod+y"],n))?(n.preventDefault(),!0):(0,c.ZP)(["esc"],n)?(u.F3.blur(e),!0):(0,c.ZP)("shift+enter",n)?(n.preventDefault(),e.insertText("\n"),!0):void 0},r)},v=t(7108),y=(0,e.Z)(function(){return Promise.all([t.e(4879),t.e(5482),t.e(6597),t.e(2983),t.e(291),t.e(3355),t.e(4281),t.e(9816),t.e(2965),t.e(9209),t.e(1106),t.e(5869),t.e(2172)]).then(t.bind(t,52172))}),h=l.memo(function(n){var r=n.plugins,t=n.defaultPluginType,e=n.readOnly,i=n.placeholder,c={useSelected:u.vt,useFocused:u.UE,readOnly:e},f=(0,v.E)({plugins:r,defaultPluginType:t,injections:c},[]),s=(0,v.g)({plugins:r,injections:c},[]),d=p({plugins:r},[]),y=(0,a.A1)(),h=(0,o.lp)().length>1;return l.createElement(u.CX,{placeholder:e?void 0:i,readOnly:y||e||h,renderElement:f,renderLeaf:s,onKeyDown:e?void 0:d})}),m=l.memo(function(n){var r,t,e=n.plugins,o=n.focused,u=n.readOnly,a=(0,i.WW)().t;return l.createElement(l.Fragment,null,!u&&o&&l.createElement(y,{plugins:n.plugins,translations:n.translations}),l.createElement(h,{placeholder:null!==(t=a(null===(r=n.translations)||void 0===r?void 0:r.placeholder))&&void 0!==t?t:"",readOnly:u,plugins:e,defaultPluginType:n.defaultPluginType}))})},59323:function(n,r,t){t.d(r,{G:function(){return f}});var e=t(27378),o=t(85912),i=t(78895),l=t(25596),u=t(7023),a=t(27763),c=function(){return(c=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}).apply(this,arguments)},f=function(n,r,t){var e,i=t||{},f=i.data,s=i.text,d=(0,l.L)(n,r);if(s){var p="component"===r.pluginType&&"inline"===r.object&&r.addExtraSpace?s+" ":s;n.insertText(p),n.selection&&o.Transforms.select(n,{anchor:n.selection.anchor,focus:c(c({},n.selection.focus),{offset:n.selection.focus.offset-p.length})})}var v=f||(r.getInitialData?r.getInitialData():null);if(d&&(o.Transforms.select(n,d[1]),(0,u.J)(n,r)),r.customAdd)r.customAdd(n);else if("component"===r.pluginType){if("mark"===r.object)n.addMark(r.type,v||!0);else if(r.isVoid)o.Transforms.insertNodes(n,{type:r.type,data:v,children:[{text:""}]});else if("block"===r.object&&r.replaceWithDefaultOnRemove)o.Transforms.setNodes(n,{type:r.type,data:v});else if(o.Transforms.wrapNodes(n,{type:r.type,children:[],data:v},{split:!0}),"inline"===r.object&&r.addExtraSpace&&!s&&n.selection){var y=c({},n.selection.focus);o.Transforms.insertText(n," ",{at:n.selection.focus}),o.Transforms.select(n,y)}}else if("data"===r.pluginType){var h=null!==(e=(0,a.Z)(n))&&void 0!==e?e:{};o.Transforms.setNodes(n,{data:c(c({},h),null!=v?v:{})})}};r.Z=function(n){var r=(0,i.ui)();return(0,e.useCallback)(function(t){return f(r,n,t)},[])}},25596:function(n,r,t){t.d(r,{L:function(){return l}});var e=t(85912),o=t(78895),i=function(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),l=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)l.push(e.value)}catch(u){o={error:u}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},l=function(n,r){if("custom"===r.pluginType)return null;var t="component"===r.pluginType?"mark"===r.object?function(n){return Boolean(n[r.type])}:function(n){return n.type===r.type}:"data"===r.pluginType?function(n){var t=n.data;return r.dataMatches(t)}:null;if(!t)return null;try{return i(e.Editor.nodes(n,{match:t,mode:"lowest"}),1)[0]}catch(o){return null}};r.Z=function(n){return l((0,o.ui)(),n)}},7023:function(n,r,t){t.d(r,{J:function(){return a}});var e=t(27378),o=t(85912),i=t(78895),l=t(27763),u=function(){return(u=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}).apply(this,arguments)},a=function(n,r){if(r.customRemove)r.customRemove(n);else if("component"===r.pluginType)"mark"===r.object?n.removeMark(r.type):"inline"===r.object?r.isVoid?o.Transforms.removeNodes(n,{match:function(n){return n.type===r.type}}):o.Transforms.unwrapNodes(n,{match:function(n){return n.type===r.type}}):"block"===r.object&&(r.isVoid?o.Transforms.removeNodes(n,{match:function(n){return n.type===r.type}}):r.replaceWithDefaultOnRemove?o.Transforms.setNodes(n,{type:null}):o.Transforms.unwrapNodes(n,{match:function(n){return n.type===r.type},split:!0}));else if("data"===r.pluginType&&r.properties){var t=(0,l.Z)(n),e=Object.keys(t).reduce(function(n,e){var o,i;return(null===(i=r.properties)||void 0===i?void 0:i.includes(e))?n:u(u({},n),((o={})[e]=t[e],o))},{});o.Transforms.setNodes(n,{data:e})}};r.Z=function(n){var r=(0,i.ui)();return(0,e.useCallback)(function(){return a(r,n)},[])}},27763:function(n,r,t){var e=t(85912),o=function(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,i=t.call(n),l=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)l.push(e.value)}catch(u){o={error:u}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l};r.Z=function(n){var r,t=o(e.Editor.nodes(n,{mode:"all",match:function(n){return Boolean(n.data)}}),1)[0];return t?null===(r=t[0])||void 0===r?void 0:r.data:{}}}}]);
//# sourceMappingURL=4841.d6062795896bd595.js.map