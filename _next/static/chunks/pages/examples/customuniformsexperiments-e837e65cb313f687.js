(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4661],{21874:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/customuniformsexperiments",function(){return t(64441)}])},64441:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(24246),o=t(27378),i=t(44719),u=t(12217),l=t(52754),c=t(48650),s=t(74974),a=t(3833),d={Renderer:function(e){var n=e.data;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Name"}),(0,r.jsxs)("p",{children:["title: ",n.title]}),(0,r.jsxs)("p",{children:["description: ",n.description]})]})},id:"custom-content-plugin-with-custom-actions",title:"Custom content plugin",description:"Some custom content plugin with special actions",version:1,controls:{type:"autoform",schema:{properties:{title:{type:"string"},description:{type:"string"}},required:[]},Content:function(e){var n=e.nodeId,t=e.onChange,o=e.remove;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["node ",n]}),(0,r.jsx)(a.Z,{variant:"outlined",onClick:function(){t({title:"Good day, sir"},{lang:"en"})},children:'set title in English to "Good day, sir"'}),(0,r.jsx)(a.Z,{variant:"outlined",onClick:function(){t({title:"Guten Tag"},{lang:"de"})},children:'set title in German to "Guten Tag"'}),(0,r.jsx)(i.UE,{}),(0,r.jsx)(a.Z,{variant:"outlined",onClick:o,color:"error",children:"Remove this cell"})]})}}},f=[(0,c.ZP)(),d],p=(0,u.y)({rows:[[{plugin:d}]]},{cellPlugins:f,lang:"default"});function m(){var e=(0,o.useState)(p),n=e[0],t=e[1];return(0,r.jsx)(s.Z,{children:(0,r.jsx)(l.ZP,{cellPlugins:f,value:n,onChange:t,languages:[{label:"English",lang:"en"},{label:"Deutsch",lang:"de"}]})})}},80458:function(e,n,t){"use strict";t.d(n,{D:function(){return i}});var r=t(24150),o=t(72369),i=function(){var e=(0,r.Z)();return(0,o.Z)(e.breakpoints.down("sm"))}},44719:function(e,n,t){"use strict";t.d(n,{NE:function(){return c},UE:function(){return s},lK:function(){return a}});var r=t(27378),o=t(80458),i=t(7256),u=t(62847),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},l.apply(this,arguments)},c=(0,i.Z)((function(){return Promise.all([t.e(6333),t.e(291),t.e(3355),t.e(9816),t.e(3985),t.e(1866),t.e(6737),t.e(1743),t.e(2241),t.e(9775),t.e(4709),t.e(9655),t.e(5031)]).then(t.bind(t,15031))})),s=((0,i.Z)((function(){return Promise.all([t.e(6333),t.e(291),t.e(3355),t.e(9816),t.e(3985),t.e(1866),t.e(6737),t.e(1743),t.e(2241),t.e(9775),t.e(9655),t.e(1268)]).then(t.bind(t,41268))})),(0,i.Z)((function(){return Promise.all([t.e(6333),t.e(291),t.e(3355),t.e(9816),t.e(3985),t.e(1866),t.e(6737),t.e(1743),t.e(2241),t.e(9775),t.e(9655),t.e(675)]).then(t.bind(t,90675))})));function a(e){var n=e.onChange,t=e.data,i=e.schema,a=e.columnCount,d=void 0===a?2:a,f=e.Content,p=(0,r.useMemo)((function(){return(0,u.Z)(i)}),[i]);(0,r.useEffect)((function(){var e=l(l({},function(e){return e.getSubfields().reduce((function(n,t){var r;return l(l({},n),((r={})[t]=e.getInitialValue(t),r))}),{})}(p)),null!==t&&void 0!==t?t:{});n(e)}),[p]);var m=(0,o.D)();return r.createElement(c,{model:t,autosave:!0,schema:p,onSubmit:n},f?r.createElement(f,l({},e,{columnCount:d})):r.createElement("div",{style:{columnCount:m?1:d,columnRule:"1px solid #E0E0E0",columnGap:48}},r.createElement(s,{element:r.Fragment})))}},62847:function(e,n,t){"use strict";var r=t(14498),o=t(17140),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},l=new r.ZP({allErrors:!0,useDefaults:!0});l.addKeyword("uniforms"),n.Z=function(e){var n=i({type:"object"},e),t=new o.j(n,function(e){var n=l.compile(e);return function(e){var t;if(n(e),n.errors&&n.errors.length)return(null===(t=n.errors)||void 0===t?void 0:t.length)?{details:n.errors}:null}}(n)),r=t.getProps;return t.getProps=function(e){var n=r.call(this,e),t=n.component,o=u(n,["component"]);return t?i({_customComponent:t},o):o},t}}},function(e){e.O(0,[4879,5482,6597,2983,6333,1255,6948,3202,4025,4281,2965,9209,1358,2754,8650,3427,9774,2888,179],(function(){return n=21874,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=customuniformsexperiments-e837e65cb313f687.js.map