"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6685],{80458:function(e,n,t){t.d(n,{D:function(){return l}});var r=t(24150),o=t(72369),l=function(){var e=(0,r.Z)();return(0,o.Z)(e.breakpoints.down("sm"))}},44719:function(e,n,t){t.d(n,{NE:function(){return u},UE:function(){return c},lK:function(){return s}});var r=t(27378),o=t(80458),l=t(7256),i=t(62847),a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)},u=(0,l.Z)((function(){return Promise.all([t.e(6333),t.e(291),t.e(3355),t.e(9816),t.e(216),t.e(1866),t.e(2241),t.e(9763),t.e(4709),t.e(5878),t.e(5031)]).then(t.bind(t,15031))})),c=((0,l.Z)((function(){return Promise.all([t.e(6333),t.e(291),t.e(3355),t.e(9816),t.e(216),t.e(1866),t.e(2241),t.e(9763),t.e(5878),t.e(1268)]).then(t.bind(t,41268))})),(0,l.Z)((function(){return Promise.all([t.e(6333),t.e(291),t.e(3355),t.e(9816),t.e(216),t.e(1866),t.e(2241),t.e(9763),t.e(5878),t.e(675)]).then(t.bind(t,90675))})));function s(e){var n=e.onChange,t=e.data,l=e.schema,s=e.columnCount,f=void 0===s?2:s,d=e.Content,v=(0,r.useMemo)((function(){return(0,i.Z)(l)}),[l]);(0,r.useEffect)((function(){var e=a(a({},function(e){return e.getSubfields().reduce((function(n,t){var r;return a(a({},n),((r={})[t]=e.getInitialValue(t),r))}),{})}(v)),null!==t&&void 0!==t?t:{});n(e)}),[v]);var p=(0,o.D)();return r.createElement(u,{model:t,autosave:!0,schema:v,onSubmit:n},d?r.createElement(d,a({},e,{columnCount:f})):r.createElement("div",{style:{columnCount:p?1:f,columnRule:"1px solid #E0E0E0",columnGap:48}},r.createElement(c,{element:r.Fragment})))}},62847:function(e,n,t){var r=t(14498),o=t(17140),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},l.apply(this,arguments)},i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},a=new r.ZP({allErrors:!0,useDefaults:!0});a.addKeyword("uniforms"),n.Z=function(e){var n=l({type:"object"},e),t=new o.j(n,function(e){var n=a.compile(e);return function(e){var t;if(n(e),n.errors&&n.errors.length)return(null===(t=n.errors)||void 0===t?void 0:t.length)?{details:n.errors}:null}}(n)),r=t.getProps;return t.getProps=function(e){var n=r.call(this,e),t=n.component,o=i(n,["component"]);return t?l({_customComponent:t},o):o},t}},56079:function(e,n,t){t.d(n,{A1:function(){return i},Yp:function(){return a}});var r=t(27378),o=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i},l=r.createContext({}),i=function(){var e;return null===(e=(0,r.useContext)(l))||void 0===e?void 0:e.visible},a=function(){var e;return null===(e=(0,r.useContext)(l))||void 0===e?void 0:e.setVisible};n.ZP=function(e){var n=e.children,t=o((0,r.useState)(!1),2),i=t[0],a=t[1],u=(0,r.useMemo)((function(){return{visible:i,setVisible:a}}),[i,a]);return r.createElement(l.Provider,{value:u},n)}},1604:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(27378),o=t(85912),l=t(78895),i=t(59323),a=t(25596),u=function(e,n){var t=(0,a.L)(e,n);if(t){var r=t[0];return"component"===n.pluginType&&"mark"===n.object?r[n.type]:r.data}return n.getInitialData?n.getInitialData():{}},c=t(8894),s=t(7023),f=t(97878),d=t(85672),v=t(39210),p=t(15830),m=t(59816),y=t(16655),h=t(51807),b=t(62847),g=t(44719),E=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i};var T=function(e){var n=e.schema?(0,b.Z)(e.schema):null,t=Boolean(e.schema),o=(0,r.useRef)(),l=E((0,r.useState)(null),2),i=l[0],a=l[1],u=(0,r.useCallback)((function(n){e.close(),e.shouldInsertWithText?e.add({text:i,data:n}):e.add({data:n})}),[e.shouldInsertWithText,i]),c=(0,r.useCallback)((function(){o.current&&o.current.submit()}),[o.current]),s=(0,r.useCallback)((function(){n?c():u({})}),[c,u,t]);return r.createElement(f.Z,{disableEnforceFocus:!0,PaperProps:{style:{minWidth:300}},open:e.open},r.createElement(d.Z,null,e.shouldInsertWithText?r.createElement("div",{style:{marginBottom:"1em"}},r.createElement(m.Z,{autoFocus:!0,placeholder:"Text",onChange:function(e){return a(e.target.value)},value:i})):null,t&&n?r.createElement(g.NE,{ref:o,model:e.data,schema:n,onSubmit:u},r.createElement(g.UE,null)):null),r.createElement(v.Z,null,r.createElement(p.Z,{variant:"text",onClick:function(){e.close()},style:{marginRight:"auto"}},e.cancelLabel||"Cancel"),e.isActive?r.createElement(p.Z,{variant:"contained",color:"secondary",onClick:function(){e.remove(),e.close()}},e.removeLabel||"Remove",r.createElement(y.Z,{style:{marginLeft:10}})):null,t?r.createElement(p.Z,{variant:"contained",color:"primary",onClick:s},e.submitLabel||"Ok",r.createElement(h.Z,{style:{marginLeft:10}})):null))},Z=t(56079),j=function(){return j=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},j.apply(this,arguments)},k=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i};var C=r.memo((function(e){var n,t,a,f,d,v,p=e.plugin,m=(0,r.useRef)(),y=!("component"===p.pluginType&&("inline"===p.object||"block"===p.object)&&p.isVoid)&&(!(null===(n=null===m||void 0===m?void 0:m.current)||void 0===n?void 0:n.selection)||o.Range.isCollapsed(null===(t=null===m||void 0===m?void 0:m.current)||void 0===t?void 0:t.selection))&&!(null===(a=null===m||void 0===m?void 0:m.current)||void 0===a?void 0:a.isActive),h=(0,i.Z)(p),b=(0,s.Z)(p),g=(0,l.ui)(),E=(0,Z.Yp)(),C=k((0,r.useState)(!1),2),O=(C[0],C[1]),x=(0,c.Z)(p);(0,r.useEffect)((function(){return null===E||void 0===E||E(e.open),O(e.open),e.open&&(m.current={selection:g.selection,isActive:x,data:u(g,p)}),function(){null===E||void 0===E||E(!1)}}),[e.open,E,O]);var w=p.controls,S=(0,r.useMemo)((function(){return w?"autoform"===w.type?function(e){return r.createElement(T,j({},e,{schema:null===w||void 0===w?void 0:w.schema}))}:w.Component:T}),[w]),P=(0,r.useCallback)((function(e){var n,t;(null===(n=null===m||void 0===m?void 0:m.current)||void 0===n?void 0:n.selection)&&o.Transforms.select(g,null===(t=null===m||void 0===m?void 0:m.current)||void 0===t?void 0:t.selection),h(e)}),[h]),N=(0,r.useCallback)((function(){setTimeout((function(){var e,n;(null===(e=null===m||void 0===m?void 0:m.current)||void 0===e?void 0:e.selection)&&o.Transforms.select(g,null===(n=null===m||void 0===m?void 0:m.current)||void 0===n?void 0:n.selection),b()}),100)}),[b]);return e.open?r.createElement(S,j({pluginConfig:p,add:P,remove:N,isActive:null!==(d=null===(f=null===m||void 0===m?void 0:m.current)||void 0===f?void 0:f.isActive)&&void 0!==d&&d,shouldInsertWithText:y,data:null===(v=null===m||void 0===m?void 0:m.current)||void 0===v?void 0:v.data},e)):null}))},56685:function(e,n,t){t.r(n);var r=t(27378),o=t(85912),l=t(78895),i=t(1604),a=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i};n.default=function(e){var n=e.plugin,t=e.element,u=e.component,c=a((0,r.useState)(!1),2),s=c[0],f=c[1],d=(0,l._7)(),v=(0,r.useCallback)((function(e){e.stopPropagation();var n=l.F3.findPath(d,t);f(!0),o.Transforms.select(d,n)}),[d,t]),p=(0,r.useCallback)((function(){return f(!1)}),[]),m="inline"===n.object?"span":"div",y=(0,l.vt)();return r.createElement(r.Fragment,null,s?r.createElement(i.Z,{open:s,close:p,plugin:n}):null,r.createElement(m,{onClick:v,style:{cursor:"pointer",outline:y?"1px dotted grey":void 0}},r.createElement(m,{style:{pointerEvents:"none"}},u)))}},59323:function(e,n,t){t.d(n,{G:function(){return s}});var r=t(27378),o=t(85912),l=t(78895),i=t(25596),a=t(7023),u=t(27763),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)},s=function(e,n,t){var r,l=t||{},s=l.data,f=l.text,d=(0,i.L)(e,n);if(f){var v="component"===n.pluginType&&"inline"===n.object&&n.addExtraSpace?f+" ":f;e.insertText(v),e.selection&&o.Transforms.select(e,{anchor:e.selection.anchor,focus:c(c({},e.selection.focus),{offset:e.selection.focus.offset-v.length})})}var p=s||(n.getInitialData?n.getInitialData():null);if(d&&(o.Transforms.select(e,d[1]),(0,a.J)(e,n)),n.customAdd)n.customAdd(e);else if("component"===n.pluginType){if("mark"===n.object)e.addMark(n.type,p||!0);else if(n.isVoid)o.Transforms.insertNodes(e,{type:n.type,data:p,children:[{text:""}]});else if("block"===n.object&&n.replaceWithDefaultOnRemove)o.Transforms.setNodes(e,{type:n.type,data:p});else if(o.Transforms.wrapNodes(e,{type:n.type,children:[],data:p},{split:!0}),"inline"===n.object&&n.addExtraSpace&&!f&&e.selection){var m=c({},e.selection.focus);o.Transforms.insertText(e," ",{at:e.selection.focus}),o.Transforms.select(e,m)}}else if("data"===n.pluginType){var y=null!==(r=(0,u.Z)(e))&&void 0!==r?r:{};o.Transforms.setNodes(e,{data:c(c({},y),null!==p&&void 0!==p?p:{})})}};n.Z=function(e){var n=(0,l.ui)();return(0,r.useCallback)((function(t){return s(n,e,t)}),[])}},25596:function(e,n,t){t.d(n,{L:function(){return i}});var r=t(85912),o=t(78895),l=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i},i=function(e,n){if("custom"===n.pluginType)return null;var t="component"===n.pluginType?"mark"===n.object?function(e){return Boolean(e[n.type])}:function(e){return e.type===n.type}:"data"===n.pluginType?function(e){var t=e.data;return n.dataMatches(t)}:null;if(!t)return null;try{return l(r.Editor.nodes(e,{match:t,mode:"lowest"}),1)[0]}catch(o){return null}};n.Z=function(e){var n=(0,o.ui)();return i(n,e)}},8894:function(e,n,t){var r=t(25596);n.Z=function(e){var n=(0,r.Z)(e);return Boolean(n)}},7023:function(e,n,t){t.d(n,{J:function(){return u}});var r=t(27378),o=t(85912),l=t(78895),i=t(27763),a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)},u=function(e,n){if(n.customRemove)n.customRemove(e);else if("component"===n.pluginType)"mark"===n.object?e.removeMark(n.type):"inline"===n.object?n.isVoid?o.Transforms.removeNodes(e,{match:function(e){return e.type===n.type}}):o.Transforms.unwrapNodes(e,{match:function(e){return e.type===n.type}}):"block"===n.object&&(n.isVoid?o.Transforms.removeNodes(e,{match:function(e){return e.type===n.type}}):n.replaceWithDefaultOnRemove?o.Transforms.setNodes(e,{type:null}):o.Transforms.unwrapNodes(e,{match:function(e){return e.type===n.type},split:!0}));else if("data"===n.pluginType)if(n.properties){var t=(0,i.Z)(e),r=Object.keys(t).reduce((function(e,r){var o,l;return(null===(l=n.properties)||void 0===l?void 0:l.includes(r))?e:a(a({},e),((o={})[r]=t[r],o))}),{});o.Transforms.setNodes(e,{data:r})}else;};n.Z=function(e){var n=(0,l.ui)();return(0,r.useCallback)((function(){return u(n,e)}),[])}},27763:function(e,n,t){var r=t(85912),o=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i};n.Z=function(e){var n,t=o(r.Editor.nodes(e,{mode:"all",match:function(e){return Boolean(e.data)}}),1)[0];return t?null===(n=t[0])||void 0===n?void 0:n.data:{}}}}]);
//# sourceMappingURL=6685.db869c58c0e1bea5.js.map