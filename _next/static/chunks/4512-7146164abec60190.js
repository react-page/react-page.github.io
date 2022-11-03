"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4512],{35870:function(e,t){function r(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var n=r();n.withExtraArgument=r,t.Z=n},90893:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActionCreators=t.ActionTypes=void 0;var r={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"};t.ActionTypes=r;var n={undo:function(){return{type:r.UNDO}},redo:function(){return{type:r.REDO}},jumpToFuture:function(e){return{type:r.JUMP_TO_FUTURE,index:e}},jumpToPast:function(e){return{type:r.JUMP_TO_PAST,index:e}},jump:function(e){return{type:r.JUMP,index:e}},clearHistory:function(){return{type:r.CLEAR_HISTORY}}};t.ActionCreators=n},80536:function(e,t){function r(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n,o;Object.defineProperty(t,"__esModule",{value:!0}),t.set=function(e){n=e},t.start=function(e,t){void(o={header:[],prev:[],action:[],next:[],msgs:[]}),n&&(console.group?(o.header=["%credux-undo","font-style: italic","action",e.type],o.action=u("action",s,e),o.prev=u("prev history",i,t)):(o.header=["redux-undo action",e.type],o.action=["action",e],o.prev=["prev history",t]))},t.end=function(e){n&&(console.group?o.next=u("next history",a,e):o.next=["next history",e],function(){var e=o,t=e.header,n=e.prev,i=e.next,s=e.action,a=e.msgs;if(console.group){var u,c,d,l,f;(u=console).groupCollapsed.apply(u,r(t)),(c=console).log.apply(c,r(n)),(d=console).log.apply(d,r(s)),(l=console).log.apply(l,r(i)),(f=console).log.apply(f,r(a)),console.groupEnd()}else{var h,p,g,v,y;(h=console).log.apply(h,r(t)),(p=console).log.apply(p,r(n)),(g=console).log.apply(g,r(s)),(v=console).log.apply(v,r(i)),(y=console).log.apply(y,r(a))}}())},t.log=function(){if(n){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o.msgs=o.msgs.concat([].concat(t,["\n"]))}};var i="#9E9E9E",s="#03A9F4",a="#4CAF50";function u(e,t,r){return["%c".concat(e),"color: ".concat(t,"; font-weight: bold"),r]}},85996:function(e,t){function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Array.isArray(e)?e:"string"===typeof e?[e]:t}Object.defineProperty(t,"__esModule",{value:!0}),t.parseActions=r,t.isHistory=function(e){return"undefined"!==typeof e.present&&"undefined"!==typeof e.future&&"undefined"!==typeof e.past&&Array.isArray(e.future)&&Array.isArray(e.past)},t.includeAction=function(e){var t=r(e);return function(e){return t.indexOf(e.type)>=0}},t.excludeAction=function(e){var t=r(e);return function(e){return t.indexOf(e.type)<0}},t.combineFilters=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return function(r,n,o){return e(r,n,o)&&t(r,n,o)}}),(function(){return!0}))},t.groupByActionTypes=function(e){var t=r(e);return function(e){return t.indexOf(e.type)>=0?e.type:null}},t.newHistory=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{past:e,present:t,future:r,group:n,_latestUnfiltered:t,index:e.length,limit:e.length+r.length+1}}},92795:function(e,t,r){Object.defineProperty(t,"MF",{enumerable:!0,get:function(){return o.ActionTypes}}),Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return s.default}});var n,o=r(90893),i=r(85996),s=(n=r(37809))&&n.__esModule?n:{default:n}},37809:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o.set(t.debug);var r,n=c({limit:void 0,filter:function(){return!0},groupBy:function(){return null},undoType:i.ActionTypes.UNDO,redoType:i.ActionTypes.REDO,jumpToPastType:i.ActionTypes.JUMP_TO_PAST,jumpToFutureType:i.ActionTypes.JUMP_TO_FUTURE,jumpType:i.ActionTypes.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1},t,{initTypes:(0,s.parseActions)(t.initTypes,["@@redux-undo/INIT"]),clearHistoryType:(0,s.parseActions)(t.clearHistoryType,[i.ActionTypes.CLEAR_HISTORY])}),a=n.neverSkipReducer?function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return c({},t,{present:e.apply(void 0,[t.present,r].concat(o))})}:function(e){return e};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o.start(i,t);for(var u,c=t,d=arguments.length,l=new Array(d>2?d-2:0),m=2;m<d;m++)l[m-2]=arguments[m];if(!r){if(o.log("history is uninitialized"),void 0===t){var T={type:"@@redux-undo/CREATE_HISTORY"},D=e.apply(void 0,[t,T].concat(l));return c=f(D,n.ignoreInitialState),o.log("do not set initialState on probe actions"),o.end(c),c}(0,s.isHistory)(t)?(c=r=n.ignoreInitialState?t:(0,s.newHistory)(t.past,t.present,t.future),o.log("initialHistory initialized: initialState is a history",r)):(c=r=f(t,n.ignoreInitialState),o.log("initialHistory initialized: initialState is not a history",r))}switch(i.type){case void 0:return c;case n.undoType:return u=v(c,-1),o.log("perform undo"),o.end(u),a.apply(void 0,[u,i].concat(l));case n.redoType:return u=v(c,1),o.log("perform redo"),o.end(u),a.apply(void 0,[u,i].concat(l));case n.jumpToPastType:return u=g(c,i.index),o.log("perform jumpToPast to ".concat(i.index)),o.end(u),a.apply(void 0,[u,i].concat(l));case n.jumpToFutureType:return u=p(c,i.index),o.log("perform jumpToFuture to ".concat(i.index)),o.end(u),a.apply(void 0,[u,i].concat(l));case n.jumpType:return u=v(c,i.index),o.log("perform jump to ".concat(i.index)),o.end(u),a.apply(void 0,[u,i].concat(l));case y(i.type,n.clearHistoryType):return u=f(c.present,n.ignoreInitialState),o.log("perform clearHistory"),o.end(u),a.apply(void 0,[u,i].concat(l));default:if(u=e.apply(void 0,[c.present,i].concat(l)),n.initTypes.some((function(e){return e===i.type})))return o.log("reset history due to init action"),o.end(r),r;if(c._latestUnfiltered===u)return c;var b="function"===typeof n.filter&&!n.filter(i,u,c);if(b){var E=(0,s.newHistory)(c.past,u,c.future,c.group);return n.syncFilter||(E._latestUnfiltered=c._latestUnfiltered),o.log("filter ignored action, not storing it in past"),o.end(E),E}var S=n.groupBy(i,u,c);if(null!=S&&S===c.group){var O=(0,s.newHistory)(c.past,u,c.future,c.group);return o.log("groupBy grouped the action with the previous action"),o.end(O),O}return c=h(c,u,n.limit,S),o.log("inserted new state into history"),o.end(c),c}}};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(80536)),i=r(90893),s=r(85996);function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){var r=(0,s.newHistory)([],e,[]);return t&&(r._latestUnfiltered=null),r}function h(e,t,r,n){var i=e.past.length+1;o.log("inserting",t),o.log("new free: ",r-i);var a=e.past,u=e._latestUnfiltered,c=r&&r<=i,d=a.slice(c?1:0),f=null!=u?[].concat(l(d),[u]):d;return(0,s.newHistory)(f,t,[],n)}function p(e,t){if(t<0||t>=e.future.length)return e;var r=e.past,n=e.future,o=e._latestUnfiltered,i=[].concat(l(r),[o],l(n.slice(0,t))),a=n[t],u=n.slice(t+1);return(0,s.newHistory)(i,a,u)}function g(e,t){if(t<0||t>=e.past.length)return e;var r=e.past,n=e.future,o=e._latestUnfiltered,i=r.slice(0,t),a=[].concat(l(r.slice(t+1)),[o],l(n)),u=r[t];return(0,s.newHistory)(i,u,a)}function v(e,t){return t>0?p(e,t-1):t<0?g(e,e.past.length+t):e}function y(e,t){return t.indexOf(e)>-1?e:!e}},57001:function(e,t){var r=60103,n=60106,o=60107,i=60108,s=60114,a=60109,u=60110,c=60112,d=60113,l=60120,f=60115,h=60116,p=60121,g=60122,v=60117,y=60129,m=60131;if("function"===typeof Symbol&&Symbol.for){var T=Symbol.for;r=T("react.element"),n=T("react.portal"),o=T("react.fragment"),i=T("react.strict_mode"),s=T("react.profiler"),a=T("react.provider"),u=T("react.context"),c=T("react.forward_ref"),d=T("react.suspense"),l=T("react.suspense_list"),f=T("react.memo"),h=T("react.lazy"),p=T("react.block"),g=T("react.server.block"),v=T("react.fundamental"),y=T("react.debug_trace_mode"),m=T("react.legacy_hidden")}function D(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case s:case i:case d:case l:return e;default:switch(e=e&&e.$$typeof){case u:case c:case h:case f:case a:return e;default:return t}}case n:return t}}}},37353:function(e,t,r){r(57001)},9673:function(e,t,r){r.d(t,{zt:function(){return d},AS:function(){return p},gR:function(){return v},fw:function(){return f}});var n=r(27378),o=n.createContext(null);var i=function(e){e()},s=function(){return i};var a={notify:function(){},get:function(){return[]}};function u(e,t){var r,n=a;function o(){u.onStateChange&&u.onStateChange()}function i(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){var e=s(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var u={addNestedSub:function(e){return i(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=a)},getListeners:function(){return n}};return u}var c="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;var d=function(e){var t=e.store,r=e.context,i=e.children,s=(0,n.useMemo)((function(){var e=u(t);return{store:t,subscription:e}}),[t]),a=(0,n.useMemo)((function(){return t.getState()}),[t]);c((function(){var e=s.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[s,a]);var d=r||o;return n.createElement(d.Provider,{value:s},i)};r(55839),r(37353);r(25773);function l(){return(0,n.useContext)(o)}function f(e){void 0===e&&(e=o);var t=e===o?l:function(){return(0,n.useContext)(e)};return function(){return t().store}}var h=f();function p(e){void 0===e&&(e=o);var t=e===o?h:f(e);return function(){return t().dispatch}}var g=function(e,t){return e===t};function v(e){void 0===e&&(e=o);var t=e===o?l:function(){return(0,n.useContext)(e)};return function(e,r){void 0===r&&(r=g);var o=t(),i=function(e,t,r,o){var i,s=(0,n.useReducer)((function(e){return e+1}),0)[1],a=(0,n.useMemo)((function(){return u(r,o)}),[r,o]),d=(0,n.useRef)(),l=(0,n.useRef)(),f=(0,n.useRef)(),h=(0,n.useRef)(),p=r.getState();try{if(e!==l.current||p!==f.current||d.current){var g=e(p);i=void 0!==h.current&&t(g,h.current)?h.current:g}else i=h.current}catch(v){throw d.current&&(v.message+="\nThe error may be correlated with this previous error:\n"+d.current.stack+"\n\n"),v}return c((function(){l.current=e,f.current=p,h.current=i,d.current=void 0})),c((function(){function e(){try{var e=r.getState();if(e===f.current)return;var n=l.current(e);if(t(n,h.current))return;h.current=n,f.current=e}catch(v){d.current=v}s()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[r,a]),i}(e,r,o.store,o.subscription);return(0,n.useDebugValue)(i),i}}var y,m=r(31542);y=m.unstable_batchedUpdates,i=y},91179:function(e,t,r){r.d(t,{PD:function(){return O}});var n={};function o(e){let t=null;return()=>(null==t&&(t=e()),t)}r.r(n),r.d(n,{FILE:function(){return f},HTML:function(){return g},TEXT:function(){return p},URL:function(){return h}});class i{enter(e){const t=this.entered.length;return this.entered=function(e,t){const r=new Set,n=e=>r.add(e);e.forEach(n),t.forEach(n);const o=[];return r.forEach((e=>o.push(e))),o}(this.entered.filter((t=>this.isNodeInDocument(t)&&(!t.contains||t.contains(e)))),[e]),0===t&&this.entered.length>0}leave(e){const t=this.entered.length;var r,n;return this.entered=(r=this.entered.filter(this.isNodeInDocument),n=e,r.filter((e=>e!==n))),t>0&&0===this.entered.length}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}const s=o((()=>/firefox/i.test(navigator.userAgent))),a=o((()=>Boolean(window.safari)));class u{interpolate(e){const{xs:t,ys:r,c1s:n,c2s:o,c3s:i}=this;let s=t.length-1;if(e===t[s])return r[s];let a,u=0,c=i.length-1;for(;u<=c;){a=Math.floor(.5*(u+c));const n=t[a];if(n<e)u=a+1;else{if(!(n>e))return r[a];c=a-1}}s=Math.max(0,c);const d=e-t[s],l=d*d;return r[s]+n[s]*d+o[s]*l+i[s]*d*l}constructor(e,t){const{length:r}=e,n=[];for(let h=0;h<r;h++)n.push(h);n.sort(((t,r)=>e[t]<e[r]?-1:1));const o=[],i=[],s=[];let a,u;for(let h=0;h<r-1;h++)a=e[h+1]-e[h],u=t[h+1]-t[h],i.push(a),o.push(u),s.push(u/a);const c=[s[0]];for(let h=0;h<i.length-1;h++){const e=s[h],t=s[h+1];if(e*t<=0)c.push(0);else{a=i[h];const r=i[h+1],n=a+r;c.push(3*n/((n+r)/e+(n+a)/t))}}c.push(s[s.length-1]);const d=[],l=[];let f;for(let h=0;h<c.length-1;h++){f=s[h];const e=c[h],t=1/i[h],r=e+c[h+1]-f-f;d.push((f-e-r)*t),l.push(r*t*t)}this.xs=e,this.ys=t,this.c1s=c,this.c2s=d,this.c3s=l}}function c(e){const t=1===e.nodeType?e:e.parentElement;if(!t)return null;const{top:r,left:n}=t.getBoundingClientRect();return{x:n,y:r}}function d(e){return{x:e.clientX,y:e.clientY}}function l(e,t,r,n,o){const i=function(e){var t;return"IMG"===e.nodeName&&(s()||!(null===(t=document.documentElement)||void 0===t?void 0:t.contains(e)))}(t),d=c(i?e:t),l={x:r.x-d.x,y:r.y-d.y},{offsetWidth:f,offsetHeight:h}=e,{anchorX:p,anchorY:g}=n,{dragPreviewWidth:v,dragPreviewHeight:y}=function(e,t,r,n){let o=e?t.width:r,i=e?t.height:n;return a()&&e&&(i/=window.devicePixelRatio,o/=window.devicePixelRatio),{dragPreviewWidth:o,dragPreviewHeight:i}}(i,t,f,h),{offsetX:m,offsetY:T}=o,D=0===T||T;return{x:0===m||m?m:new u([0,.5,1],[l.x,l.x/f*v,l.x+v-f]).interpolate(p),y:D?T:(()=>{let e=new u([0,.5,1],[l.y,l.y/h*y,l.y+y-h]).interpolate(g);return a()&&i&&(e+=(window.devicePixelRatio-1)*y),e})()}}const f="__NATIVE_FILE__",h="__NATIVE_URL__",p="__NATIVE_TEXT__",g="__NATIVE_HTML__";function v(e,t,r){const n=t.reduce(((t,r)=>t||e.getData(r)),"");return null!=n?n:r}const y={[f]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[g]:{exposeProperties:{html:(e,t)=>v(e,t,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[h]:{exposeProperties:{urls:(e,t)=>v(e,t,"").split("\n"),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[p]:{exposeProperties:{text:(e,t)=>v(e,t,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};class m{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach((e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get:()=>(console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null)})}))}loadDataTransfer(e){if(e){const t={};Object.keys(this.config.exposeProperties).forEach((r=>{const n=this.config.exposeProperties[r];null!=n&&(t[r]={value:n(e,this.config.matchesTypes),configurable:!0,enumerable:!0})})),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,t){return t===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}function T(e){if(!e)return null;const t=Array.prototype.slice.call(e.types||[]);return Object.keys(y).filter((e=>{const r=y[e];return!!(null===r||void 0===r?void 0:r.matchesTypes)&&r.matchesTypes.some((e=>t.indexOf(e)>-1))}))[0]||null}class D{get window(){return this.globalContext?this.globalContext:"undefined"!==typeof window?window:void 0}get document(){var e;return(null===(e=this.globalContext)||void 0===e?void 0:e.document)?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return(null===(e=this.optionsArgs)||void 0===e?void 0:e.rootElement)||this.window}constructor(e,t){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=t}}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}class S{profile(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:(null===(e=this.dragStartSourceIds)||void 0===e?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(void 0!==e){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;var t;void 0!==e&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&(null===(t=this.window)||void 0===t||t.cancelAnimationFrame(this.asyncEndDragFrameId)))}connectDragPreview(e,t,r){return this.sourcePreviewNodeOptions.set(e,r),this.sourcePreviewNodes.set(e,t),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,t,r){this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,r);const n=t=>this.handleDragStart(t,e),o=e=>this.handleSelectStart(e);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",n),t.addEventListener("selectstart",o),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",n),t.removeEventListener("selectstart",o),t.setAttribute("draggable","false")}}connectDropTarget(e,t){const r=t=>this.handleDragEnter(t,e),n=t=>this.handleDragOver(t,e),o=t=>this.handleDrop(t,e);return t.addEventListener("dragenter",r),t.addEventListener("dragover",n),t.addEventListener("drop",o),()=>{t.removeEventListener("dragenter",r),t.removeEventListener("dragover",n),t.removeEventListener("drop",o)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return E({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId();return E({anchorX:.5,anchorY:.5,captureDraggingState:!1},this.sourcePreviewNodeOptions.get(e)||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(n).some((t=>n[t]===e))}beginDragNativeItem(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=function(e,t){const r=y[e];if(!r)throw new Error(`native type ${e} has no configuration`);const n=new m(r);return n.loadDataTransfer(t),n}(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;this.mouseMoveTimeoutTimer=setTimeout((()=>{var e;return null===(e=this.rootElement)||void 0===e?void 0:e.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}),1e3)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){var e;if(this.currentDragSourceNode=null,this.rootElement)null===(e=this.window)||void 0===e||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0);return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(e,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(e,t){this.dropTargetIds.unshift(t)}constructor(e,t,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=e=>{const t=this.sourceNodes.get(e);return t&&c(t)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=e=>Boolean(e&&this.document&&this.document.body&&this.document.body.contains(e)),this.endDragIfSourceWasRemovedFromDOM=()=>{const e=this.currentDragSourceNode;null==e||this.isNodeInDocument(e)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=e=>{null===this.hoverRafId&&"undefined"!==typeof requestAnimationFrame&&(this.hoverRafId=requestAnimationFrame((()=>{this.monitor.isDragging()&&this.actions.hover(e||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null})))},this.cancelHover=()=>{null!==this.hoverRafId&&"undefined"!==typeof cancelAnimationFrame&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=e=>{if(e.defaultPrevented)return;const{dragStartSourceIds:t}=this;this.dragStartSourceIds=null;const r=d(e);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:r});const{dataTransfer:n}=e,o=T(n);if(this.monitor.isDragging()){if(n&&"function"===typeof n.setDragImage){const e=this.monitor.getSourceId(),t=this.sourceNodes.get(e),o=this.sourcePreviewNodes.get(e)||t;if(o){const{anchorX:e,anchorY:i,offsetX:s,offsetY:a}=this.getCurrentSourcePreviewNodeOptions(),u=l(t,o,r,{anchorX:e,anchorY:i},{offsetX:s,offsetY:a});n.setDragImage(o,u.x,u.y)}}try{null===n||void 0===n||n.setData("application/json",{})}catch(i){}this.setCurrentDragSourceNode(e.target);const{captureDraggingState:t}=this.getCurrentSourcePreviewNodeOptions();t?this.actions.publishDragSource():setTimeout((()=>this.actions.publishDragSource()),0)}else if(o)this.beginDragNativeItem(o);else{if(n&&!n.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=e=>{var t;(this.dragEnterTargetIds=[],this.isDraggingNativeItem())&&(null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer));if(!this.enterLeaveCounter.enter(e.target)||this.monitor.isDragging())return;const{dataTransfer:r}=e,n=T(r);n&&this.beginDragNativeItem(n,r)},this.handleTopDragEnter=e=>{const{dragEnterTargetIds:t}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=e.altKey,t.length>0&&this.actions.hover(t,{clientOffset:d(e)});t.some((e=>this.monitor.canDropOnTarget(e)))&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=e=>{var t;(this.dragOverTargetIds=[],this.isDraggingNativeItem())&&(null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer))},this.handleTopDragOver=e=>{const{dragOverTargetIds:t}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer&&(e.dataTransfer.dropEffect="none"));this.altKeyPressed=e.altKey,this.lastClientOffset=d(e),this.scheduleHover(t);(t||[]).some((e=>this.monitor.canDropOnTarget(e)))?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=e=>{this.isDraggingNativeItem()&&e.preventDefault();this.enterLeaveCounter.leave(e.target)&&(this.isDraggingNativeItem()&&setTimeout((()=>this.endDragNativeItem()),0),this.cancelHover())},this.handleTopDropCapture=e=>{var t;(this.dropTargetIds=[],this.isDraggingNativeItem())?(e.preventDefault(),null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)):T(e.dataTransfer)&&e.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=e=>{const{dropTargetIds:t}=this;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:d(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=e=>{const t=e.target;"function"===typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))},this.options=new D(t,r),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new i(this.isNodeInDocument)}}const O=function(e,t,r){return new S(e,t,r)}}}]);
//# sourceMappingURL=4512-7146164abec60190.js.map