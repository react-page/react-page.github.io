(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5788],{33198:function(t,n,e){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,d=function(){return f.Date.now()};function y(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var e=o.test(t);return e||u.test(t)?a(t.slice(2),e?2:8):i.test(t)?NaN:+t}t.exports=function(t,n,e){var r,i,o,u,a,c,l=0,f=!1,s=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=r,o=i;return r=i=void 0,l=n,u=t.apply(o,e)}function g(t){return l=t,a=setTimeout(w,n),f?m(t):u}function x(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-l>=o}function w(){var t=d();if(x(t))return T(t);a=setTimeout(w,function(t){var e=n-(t-c);return s?p(e,o-(t-l)):e}(t))}function T(t){return a=void 0,h&&r?m(t):(r=i=void 0,u)}function j(){var t=d(),e=x(t);if(r=arguments,i=this,c=t,e){if(void 0===a)return g(c);if(s)return a=setTimeout(w,n),m(c)}return void 0===a&&(a=setTimeout(w,n)),u}return n=b(n)||0,y(e)&&(f=!!e.leading,o=(s="maxWait"in e)?v(b(e.maxWait)||0,n):o,h="trailing"in e?!!e.trailing:h),j.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},j.flush=function(){return void 0===a?u:T(d())},j}},61138:function(t,n,e){"use strict";var r=e(66471),i=e.n(r);n.Z=i()},24832:function(t,n,e){"use strict";e.d(n,{G:function(){return r}});var r=function(t){return!!t&&"id"in t}},56079:function(t,n,e){"use strict";e.d(n,{A1:function(){return u},Yp:function(){return a}});var r=e(27378),i=function(t,n){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,i,o=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)u.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(e=o.return)&&e.call(o)}finally{if(i)throw i.error}}return u},o=r.createContext({}),u=function(){var t;return null===(t=(0,r.useContext)(o))||void 0===t?void 0:t.visible},a=function(){var t;return null===(t=(0,r.useContext)(o))||void 0===t?void 0:t.setVisible};n.ZP=function(t){var n=t.children,e=i((0,r.useState)(!1),2),u=e[0],a=e[1],c=(0,r.useMemo)((function(){return{visible:u,setVisible:a}}),[u,a]);return r.createElement(o.Provider,{value:c},n)}},25788:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var r=e(61138),i=e(33198),o=e.n(i),u=e(27378),a=e(55185),c=e(80164),l=function(t){return function(n){var e=n.isInline,r=n.isVoid;return n.isInline=function(n){return!!t.some((function(t){return"component"===t.pluginType&&"inline"===t.object&&t.type===n.type}))||e(n)},n.isVoid=function(n){return!!t.some((function(t){return"component"===t.pluginType&&("block"===t.object||"inline"===t.object)&&t.type===n.type&&t.isVoid}))||r(n)},n}},f=e(24832),s=e(39946),v=function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{c(r.next(t))}catch(n){o(n)}}function a(t){try{c(r.throw(t))}catch(n){o(n)}}function c(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))},p=function(t,n){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(t,u)}catch(a){o=[6,a],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},d=function(t,n){return function(e){var r=e.insertData,i=(0,s.P)({plugins:t});return e.insertData=function(t){return v(void 0,void 0,void 0,(function(){var o,u,c,l,s,v,d,y,b,h,m;return p(this,(function(p){switch(p.label){case 0:return t.getData("application/x-slate-fragment")?(r(t),[2]):(o=t.getData("text/html"))?[4,i(o)]:[3,2];case 1:return u=p.sent().slate,a.Transforms.insertFragment(e,u),[2];case 2:if(c=t.getData("text/plain")){try{if(l=JSON.parse(c),(0,f.G)(l))return[2]}catch(g){}for(s=c.split("\n"),v=!1,d=0;d<s.length;d++)y=s[d],b=s[d+1],h=!b||!b.trim(),m=y+(h?"":"\n"),y.trim()?v?(a.Transforms.insertNodes(e,{type:n,children:[{text:m}]}),v=!1):(a.Transforms.insertText(e,m),v=!1):v=!0;return[2]}return r(t),[2]}}))}))},e}},y=e(56079),b=function(t,n){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,i,o=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)u.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(e=o.return)&&e.call(o)}finally{if(i)throw i.error}}return u},h=function(t){var n=t.data,e=t.plugins,i=t.children,f=t.defaultPluginType,s=b((0,u.useState)(null===n||void 0===n?void 0:n.slate),2),v=s[0],p=s[1],h=(0,u.useRef)(v);h.current=v;var m=(0,u.useMemo)((function(){return d(e,f)((0,c.BU)(l(e)((0,a.createEditor)())))}),[]),g=(0,u.useCallback)(o()((function(){t.onChange({slate:h.current,selection:m.selection},{notUndoable:(0,r.Z)(h.current,n.slate)})}),200),[t.onChange,m,n.slate]);(0,u.useEffect)((function(){n.selection?a.Transforms.select(m,n.selection):a.Transforms.deselect(m),p(null===n||void 0===n?void 0:n.slate)}),[null===n||void 0===n?void 0:n.slate,null===n||void 0===n?void 0:n.selection]);var x=(0,u.useCallback)((function(t){m.selection&&(p(t),g())}),[g]);return u.createElement(y.ZP,null,u.createElement(c.mH,{editor:m,value:v,onChange:x},i))}}}]);