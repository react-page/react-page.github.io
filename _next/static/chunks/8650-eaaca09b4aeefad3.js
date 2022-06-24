"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8650],{7256:function(e,n,t){var r=t(95381);n.Z=r.ZP},77876:function(e,n,t){t.d(n,{K:function(){return o},U:function(){return i}});var r=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},o=function(e){if(!e)return 0;if("string"===typeof e){var n=r(e.replace(/\^|\*/g,"").split(".").map(Number),3);return n[0]+.01*n[1]+.01*n[2]*.01}return e},i=function(e){var n=e.toVersion,t=e.migrate,r=e.fromVersion,i=e.fromVersionRange,l=null!==r&&void 0!==r?r:i;this.toVersion=o(n),this.migrate=t,this.fromVersion=o(l)}},7108:function(e,n,t){t.d(n,{E:function(){return y},g:function(){return m}});var r=t(56753),o=t(7256),i=t(57434),l=t.n(i),a=t(27378),u=t(71969),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)},s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},f=(0,o.Z)((function(){return Promise.all([t.e(5095),t.e(9071),t.e(8751),t.e(8371),t.e(3554),t.e(2697),t.e(3380),t.e(4281),t.e(8381),t.e(3525),t.e(7810),t.e(8275),t.e(9492),t.e(6685)]).then(t.bind(t,56685))})),d=function(e){return e&&l()(e)?Object.keys(e).reduce((function(n,t){var o;return(0,r.Z)(t)?c(c({},n),((o={})[t]=e[t],o)):n}),{}):{}},p={useFocused:function(){return!1},useSelected:function(){return!1},readOnly:!0},y=function(e,n){var t=e.plugins,r=e.defaultPluginType,o=e.injections,i=void 0===o?p:o,l=function(e,n){var t=e.plugins;return(0,a.useMemo)((function(){return t.filter((function(e){return"component"===e.pluginType&&"mark"!==e.object}))}),n)}({plugins:t},n);return(0,a.useCallback)((function(e){var n,o=e.element,s=e.children,p=e.attributes,y=o.type,m=o.data,v=void 0===m?{}:m,h=o.children,b=null!==(n=l.find((function(e){return e.type===y})))&&void 0!==n?n:l.find((function(e){return e.type===r}));if(b){var g=b.Component,P=b.getStyle,w={children:s,style:P?P(v||{}):void 0};if("string"===typeof g||g instanceof String){var O=d(v);return a.createElement(g,c({},p,w,O))}g.displayName="SlatePlugin("+b.type+")";var E=c({childNodes:h,getTextContents:function(){return(0,u.L)(h,{slatePlugins:t})}},i),I=a.createElement(g,c({},w,v,{attributes:p},E));return("inline"===b.object||"block"===b.object)&&b.isVoid&&!i.readOnly?a.createElement(f,{component:I,element:o,plugin:b},s):I}return a.createElement("p",null,"unknown component ",y)}),n)},m=function(e,n){var t=e.plugins,r=e.injections,o=void 0===r?p:r,i=e.readOnly,u=void 0!==i&&i,f=function(e,n){var t=e.plugins;return(0,a.useMemo)((function(){return t.filter((function(e){return"component"===e.pluginType&&"mark"===e.object}))}),n)}({plugins:t},n);return(0,a.useCallback)((function(e){var n=e.leaf,t=n.text,r=s(n,["text"]),i=e.attributes,p=e.children,y=u?a.Fragment:"span";return a.createElement(y,c({},i),Object.keys(r).reduce((function(e,n){var i=f.find((function(e){return e.type===n}));if(i){var u=i.Component,s=i.getStyle,p=r[n],y=l()(p)?p:{},m=s?s(y):void 0;if("string"===typeof u||u instanceof String){var v=d(y);return a.createElement(u,c({},v,{style:m}),e)}return a.createElement(u,c({childNodes:[{text:t}],getTextContents:function(){return[t]},useSelected:o.useSelected,useFocused:o.useFocused,style:m},y),e)}return e}),p))}),n)}},39946:function(e,n,t){t.d(n,{P:function(){return i}});var r=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function l(e){try{u(r.next(e))}catch(n){i(n)}}function a(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,a)}u((r=r.apply(e,n||[])).next())}))},o=function(e,n){var t,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(a){i=[6,a],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=function(e){var n=e.plugins;return function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,Promise.all([t.e(5095),t.e(281),t.e(5079)]).then(t.bind(t,75079))];case 1:return[2,(0,r.sent().default)({plugins:n})(e)]}}))}))}}},48650:function(e,n,t){t.d(n,{lD:function(){return De},ZP:function(){return xe}});var r=t(7256),o=t(27378),i=t(1948),l=t(7108),a=o.memo((function(e){var n=e.plugins,t=e.defaultPluginType,r=(0,l.E)({plugins:n,defaultPluginType:t},[]),a=(0,l.g)({plugins:n,readOnly:!0},[]);return o.createElement("div",{style:{position:"relative",outline:"none",whiteSpace:"pre-wrap",overflowWrap:"break-word"}},o.createElement(i.H,{renderElement:r,renderLeaf:a,value:e.data.slate,LeafWrapper:o.Fragment}))})),u=t(39946),c=t(77876),s=t(757),f=t.n(s),d=function(){return d=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},d.apply(this,arguments)},p=new c.U({toVersion:"0.0.2",fromVersionRange:"^0.0.1",migrate:function(e){return e=d(d({},e),e.serialized?{serialized:{document:e.serialized}}:{}),e=f()(e,(function(e){switch(e){case"kind":return"object";case"ranges":return"leaves";default:return e}}))}}),y=function(){return y=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},y.apply(this,arguments)},m=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},v=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))},h=function(e){return e?e.reduce((function(e,n){if(n.leaves)return v(v([],m(e),!1),m(n.leaves.map((function(e){return y(y({},e),{object:"text"})}))),!1);var t=n.nodes?y(y({},n),{nodes:h(n.nodes)}):n;return v(v([],m(e),!1),[t],!1)}),[]):[]},b=new c.U({toVersion:"0.0.3",fromVersionRange:"^0.0.2",migrate:function(e){return e?e.serialized&&e.serialized.document?y(y({},e),{serialized:y(y({},e.serialized),{document:y(y({},e.serialized.document),{nodes:h(e.serialized.document.nodes)})})}):e:{}}}),g=t(22712),P=t.n(g),w=function(){return w=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},w.apply(this,arguments)},O=function(e){return"text"===e.object?function(e){var n,t;return w({text:e.text},null!==(t=null===(n=e.marks)||void 0===n?void 0:n.reduce((function(e,n){var t;return w(w({},e),((t={})[n.type]=!!P()(n.data)||n.data,t))}),{}))&&void 0!==t?t:{})}(e):function(e){var n,t,r;return{data:null!==(n=e.data)&&void 0!==n?n:{},type:e.type,children:null!==(r=null===(t=e.nodes)||void 0===t?void 0:t.map(O))&&void 0!==r?r:[]}}(e)},E=new c.U({toVersion:"0.0.4",fromVersionRange:"^0.0.3",migrate:function(e){var n,t,r,o;if(!e)return{};var i={slate:null!==(o=null===(r=null===(t=null===(n=e.serialized)||void 0===n?void 0:n.document)||void 0===t?void 0:t.nodes)||void 0===r?void 0:r.map(O))&&void 0!==o?o:[]};return e.importFromHtml&&(i.importFromHtml=e.importFromHtml),i}}),I=function(){return I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},I.apply(this,arguments)};var j=function e(n){var t=function(t){return void 0===t&&(t=function(e){return e}),e(t(n))};return t.toPlugin=function(){return I({pluginType:"data"},n)},t},k=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(6193)]).then(t.bind(t,16193))})),T=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(2259)]).then(t.bind(t,32259))})),N=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(4673)]).then(t.bind(t,94673))})),S=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(4068)]).then(t.bind(t,64068))})),A={left:j({icon:o.createElement(k,null),label:"Align Left",object:"block",addToolbarButton:!0,addHoverButton:!1,dataMatches:function(e){return"left"===(null===e||void 0===e?void 0:e.align)},getInitialData:function(){return{align:"left"}}}),center:j({icon:o.createElement(T,null),label:"Align Center",object:"block",addToolbarButton:!0,addHoverButton:!1,dataMatches:function(e){return"center"===(null===e||void 0===e?void 0:e.align)},getInitialData:function(){return{align:"center"}}}),right:j({icon:o.createElement(N,null),label:"Align Right",object:"block",addToolbarButton:!0,addHoverButton:!1,dataMatches:function(e){return"right"===(null===e||void 0===e?void 0:e.align)},getInitialData:function(){return{align:"right"}}}),justify:j({icon:o.createElement(S,null),label:"Align Justify",object:"block",addToolbarButton:!0,addHoverButton:!1,dataMatches:function(e){return"justify"===(null===e||void 0===e?void 0:e.align)},getInitialData:function(){return{align:"justify"}}})},Z=t(60686),L=function(){return L=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},L.apply(this,arguments)},D=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(7529)]).then(t.bind(t,97529))})),H=(0,Z.Z)({type:"CODE/CODE",object:"block",icon:o.createElement(D,null),label:"Code Block",addToolbarButton:!0,addHoverButton:!1,deserialize:{tagName:"code"},Component:function(e){var n=e.children,t=e.attributes;return o.createElement("code",L({},t,{style:{display:"block",overflow:"scroll"}}),n)}}),x={mark:(0,Z.Z)({type:"CODE/CODE",object:"mark",icon:o.createElement(D,null),label:"Code",addHoverButton:!0,addToolbarButton:!1,deserialize:{tagName:"code"},Component:function(e){var n=e.children,t=e.attributes;return o.createElement("code",L({style:{whiteSpace:"pre-wrap"}},t),n)}}),block:H},B=function(){return B=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},B.apply(this,arguments)},R=function(e){return(0,Z.Z)({type:e.type,object:"mark",hotKey:e.hotKey,icon:e.icon,label:e.label,addToolbarButton:!1,addHoverButton:!0,deserialize:{tagName:e.tagName},Component:function(n){var t=n.children,r=n.attributes,i=e.tagName;return o.createElement(i,B({},r),t)}})},z=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(7627)]).then(t.bind(t,7627))})),C=R({type:"EMPHASIZE/EM",tagName:"em",icon:o.createElement(z,null),label:"Italic",hotKey:"mod+i"}),G=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(4194)]).then(t.bind(t,4194))})),K=R({type:"EMPHASIZE/STRONG",tagName:"strong",icon:o.createElement(G,null),label:"Bold",hotKey:"mod+b"}),F=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(1716)]).then(t.bind(t,21716))})),M={em:C,strong:K,underline:R({type:"EMPHASIZE/U",tagName:"u",icon:o.createElement(F,null),label:"Underline",hotKey:"mod+u"})},U=t(39417);var V=function(e){return(0,U.Z)({type:e.type,hotKey:"mod+"+e.level,replaceWithDefaultOnRemove:!0,icon:e.icon,label:"Heading ".concat(e.level),tagName:"h"+e.level})},W=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(7831)]).then(t.bind(t,7831))})),_=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(1273)]).then(t.bind(t,31273))})),q=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(6675)]).then(t.bind(t,36675))})),Q=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(6069)]).then(t.bind(t,26069))})),J=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(8484)]).then(t.bind(t,48484))})),X=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(6)]).then(t.bind(t,10006))})),Y={h1:V({type:"HEADINGS/HEADING-ONE",level:1,icon:o.createElement(W,null)}),h2:V({type:"HEADINGS/HEADING-TWO",level:2,icon:o.createElement(_,null)}),h3:V({type:"HEADINGS/HEADING-THREE",level:3,icon:o.createElement(q,null)}),h4:V({type:"HEADINGS/HEADING-FOUR",level:4,icon:o.createElement(Q,null)}),h5:V({type:"HEADINGS/HEADING-FIVE",level:5,icon:o.createElement(J,null)}),h6:V({type:"HEADINGS/HEADING-SIX",level:6,icon:o.createElement(X,null)})},$=function(){return $=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},$.apply(this,arguments)},ee=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(8489)]).then(t.bind(t,58489))})),ne=(0,Z.Z)({type:"LINK/LINK",object:"inline",icon:o.createElement(ee,null),label:"Link",addHoverButton:!0,addToolbarButton:!0,controls:{type:"autoform",schema:{type:"object",required:["href"],properties:{href:{type:"string"},openInNewWindow:{type:"boolean"}}}},deserialize:{tagName:"a",getData:function(e){return{href:e.getAttribute("href")||"",openInNewWindow:"_blank"===e.getAttribute("target")}}},Component:function(e){var n=e.children,t=e.openInNewWindow,r=e.href,i=e.attributes;return o.createElement("a",$({},i,{target:t?"_blank":void 0,href:r}),n)}}),te={anchor:j({addHoverButton:!1,addToolbarButton:!0,object:"block",label:"Id for Link Anchor",icon:o.createElement("span",null,"#"),properties:["id"],dataMatches:function(e){return Boolean(null===e||void 0===e?void 0:e.id)},controls:{type:"autoform",schema:{type:"object",required:["id"],properties:{id:{type:"string"}}}}}),link:ne},re=t(49776),oe=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function l(e){try{u(r.next(e))}catch(n){i(n)}}function a(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,a)}u((r=r.apply(e,n||[])).next())}))},ie=function(e,n){var t,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(a){i=[6,a],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};var le=function e(n){var r=function(t){return e(t(n))};return r.toPlugin=function(){return function(e){return[{pluginType:"custom",addToolbarButton:!0,addHoverButton:!1,icon:e.iconIncrease,label:e.labelIncrease,customAdd:function(n){return oe(void 0,void 0,void 0,(function(){return ie(this,(function(r){switch(r.label){case 0:return[4,Promise.all([t.e(5095),t.e(2980)]).then(t.bind(t,31640))];case 1:return(0,r.sent().increaseListIndention)(n,{listItemType:e.listItemType}),[2]}}))}))},customRemove:function(n){return oe(void 0,void 0,void 0,(function(){return ie(this,(function(r){switch(r.label){case 0:return[4,Promise.all([t.e(5095),t.e(2980)]).then(t.bind(t,31640))];case 1:return(0,r.sent().decreaseListIndention)(n,{listItemType:e.listItemType}),[2]}}))}))},isDisabled:function(n){return oe(void 0,void 0,void 0,(function(){return ie(this,(function(r){switch(r.label){case 0:return[4,Promise.all([t.e(5095),t.e(2980)]).then(t.bind(t,31640))];case 1:return[2,!(0,r.sent().getPreviousListItem)(n,e.listItemType)]}}))}))}},{pluginType:"custom",addToolbarButton:!0,addHoverButton:!1,icon:e.iconDecrease,label:e.labelDecrease,customAdd:function(n){return oe(void 0,void 0,void 0,(function(){return ie(this,(function(r){switch(r.label){case 0:return[4,Promise.all([t.e(5095),t.e(2980)]).then(t.bind(t,31640))];case 1:return(0,r.sent().decreaseListIndention)(n,{listItemType:e.listItemType}),[2]}}))}))},customRemove:function(n){return oe(void 0,void 0,void 0,(function(){return ie(this,(function(r){switch(r.label){case 0:return[4,Promise.all([t.e(5095),t.e(2980)]).then(t.bind(t,31640))];case 1:return(0,r.sent().increaseListIndention)(n,{listItemType:e.listItemType}),[2]}}))}))},isDisabled:function(e){return oe(void 0,void 0,void 0,(function(){return ie(this,(function(n){switch(n.label){case 0:return[4,Promise.all([t.e(5095),t.e(2980)]).then(t.bind(t,31640))];case 1:return[2,!(0,n.sent().getActiveListType)(e)]}}))}))}}]}(n)},r},ae=t(55386),ue=t(84027),ce=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(3596)]).then(t.bind(t,23596))})),se=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(2662)]).then(t.bind(t,2662))})),fe=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(5779)]).then(t.bind(t,5779))})),de=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(5749)]).then(t.bind(t,15749))})),pe={ol:(0,ae.Z)({type:ue.OL,icon:o.createElement(se,null),label:"Ordered List",tagName:"ol"}),ul:(0,ae.Z)({type:ue.UL,icon:o.createElement(ce,null),label:"Unordered List",tagName:"ul"}),li:(0,re.Z)({tagName:"li",type:ue.LI}),indention:le({iconIncrease:o.createElement(fe,null),iconDecrease:o.createElement(de,null),listItemType:ue.LI,labelIncrease:"Increase Indentation",labelDecrease:"Decrease Indentation"})},ye=t(60884),me=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(5574)]).then(t.bind(t,5574))})),ve={blockQuote:(0,U.Z)({type:"BLOCKQUOTE/BLOCKQUOTE",icon:o.createElement(me,null),label:"Quote",tagName:"blockquote"})},he={paragraphs:ye.Z,headings:Y,link:te,lists:pe,quotes:ve,code:x,emphasize:M,alignment:A},be=t(71969);function ge(e){return Array.isArray(e)?e.reduce((function(e,n){return Array.isArray(n)?e.concat(ge(n)):e.concat(n)}),[]):[e]}var Pe=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},we=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))},Oe=function(){return Oe=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Oe.apply(this,arguments)},Ee=function(e){return e.map((function(e){var n;if(e.plugin){var t=e,r=ge(t.plugin.toPlugin?t.plugin.toPlugin():t.plugin).find((function(e){return"component"===e.pluginType||e}));return r&&"component"===r.pluginType?Oe(Oe({type:r.type},null!==(n=t.data)&&void 0!==n?n:{}),{children:t.children?Ee(t.children):[]}):null}if("string"===typeof e)return{text:e}}))},Ie=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l};var je=function(){return je=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},je.apply(this,arguments)},ke=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},Te=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},Ne=(0,r.Z)((function(){return Promise.all([t.e(5095),t.e(5439),t.e(919),t.e(8275),t.e(8854),t.e(4841)]).then(t.bind(t,63466))})),Se=(0,r.Z)((function(){return Promise.all([t.e(9071),t.e(4414)]).then(t.bind(t,54414))})),Ae=(0,r.Z)((function(){return Promise.all([t.e(5095),t.e(9071),t.e(8751),t.e(8371),t.e(3554),t.e(2697),t.e(3380),t.e(5439),t.e(4281),t.e(8381),t.e(919),t.e(3525),t.e(7810),t.e(8275),t.e(9492),t.e(8854),t.e(5869),t.e(2261)]).then(t.bind(t,77912))})),Ze=(0,r.Z)((function(){return Promise.all([t.e(5095),t.e(8275),t.e(5788)]).then(t.bind(t,25788))})),Le=[p,b,E],De="ory/editor/core/content/slate",He={icon:o.createElement(Se,null),plugins:he,defaultPluginType:"PARAGRAPH/PARAGRAPH",id:De,version:1,translations:{pluginName:"Text",pluginDescription:"An advanced rich text area.",placeholder:"Write here...",linkPlugin:{cancel:"Cancel",ok:"Ok",createLink:"Create a link",linkTitlePlaceholder:"Link title",linkHrefPlaceholder:"http://example.com/my/link.html",linkOpenInNewWindowLabel:"Open in new window"}},migrations:Le,allowInlineNeighbours:!0};var xe=function(e){var n=e?e(He):He,t=function(e){return e?(t=e({plugins:n.plugins}),{slate:Ee(t.children)}):{slate:[]};var t},r=function(){return t((function(e){return{children:[{plugin:e.plugins.paragraphs.paragraph,children:[""]}]}}))},i=function(e){return Object.keys(e).reduce((function(n,t){var r=e[t],o=Object.keys(r).reduce((function(n,r){var o=e[t][r],i=o.toPlugin?o.toPlugin():o;return we(we([],Pe(n),!1),Pe(ge(i)),!1)}),[]);return we(we([],Pe(n),!1),Pe(o),!1)}),[])}(n.plugins),l=(0,u.P)({plugins:i});return{Renderer:function(e){var t=je(je({},e),{plugins:i,translations:n.translations,defaultPluginType:n.defaultPluginType}),r=Te(function(e){var n=Ie(o.useState(e),2),t=n[0],r=n[1],i=o.useRef(!1);return o.useEffect((function(){return i.current=!0,function(){i.current=!1}}),[]),[t,o.useCallback((function(e){if(i.current)return r(e)}),[i,r])]}(!1),2),l=r[0],u=r[1];return e.readOnly||Ze.load().then((function(e){return u(!0)})),e.readOnly||!l?o.createElement(a,je({},t)):o.createElement(Ne,je({},t,{fallback:o.createElement(a,je({},t))}))},Provider:function(e){return o.createElement(Ze,je({},e,{plugins:i,translations:n.translations,defaultPluginType:n.defaultPluginType,fallback:o.createElement(o.Fragment,null,e.children)}))},disableProviderInReadOnly:!0,controls:{type:"custom",Component:function(e){return o.createElement(Ae,je({},e,{plugins:i,translations:n.translations}))}},id:n.id||n.name,version:n.version,icon:n.icon,title:n.title||n.translations.pluginName,description:n.description||n.translations.pluginDescription,hideInMenu:n.hideInMenu,allowInlineNeighbours:n.allowInlineNeighbours,allowClickInside:!0,handleRemoveHotKey:function(){return Promise.reject()},handleFocusPreviousHotKey:function(){return Promise.reject()},handleFocusNextHotKey:function(e,n){return Promise.reject()},createInitialData:r,createInitialState:r,createInitialSlateState:t,createData:t,createDataFromHtml:l,getTextContents:function(e){return(0,be.L)(e.slate,{slatePlugins:i})},serialize:function(e){void 0===e&&(e={slate:[]});var n=e.slate,t=(e.selection,ke(e,["slate","selection"]));return je({slate:n},t)},cellClassName:"slate",unserialize:function(e){return(null===e||void 0===e?void 0:e.importFromHtml)?je(je({importFromHtml:e.importFromHtml},e),r()):(null===e||void 0===e?void 0:e.slate)?je(je({},e),{selection:null}):r()},migrations:n.migrations}}},60686:function(e,n){var t=function(){return t=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},t.apply(this,arguments)};n.Z=function e(n){var r=function(t){return void 0===t&&(t=function(e){return e}),e(t(n))};return r.toPlugin=function(){return t(t({},n),{pluginType:"component"})},r}},49776:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(39417);function o(e){return(0,r.Z)({noButton:!0,tagName:e.tagName,type:e.type})}},55386:function(e,n,t){var r=t(84027),o=t(49776),i=t(39417),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},l.apply(this,arguments)},a=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function l(e){try{u(r.next(e))}catch(n){i(n)}}function a(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,a)}u((r=r.apply(e,n||[])).next())}))},u=function(e,n){var t,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(a){i=[6,a],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};n.Z=function(e){var n,c=l(l({},e),{type:r.v+e.type,listItem:null!==(n=e.listItem)&&void 0!==n?n:{tagName:"li",type:r.LI}}),s=function(e,n){var l=function(t){return s(e,(r=n,o=t,{customizeList:function(e){var n=(null===r||void 0===r?void 0:r.customizeList)?r.customizeList(e):e;return(null===o||void 0===o?void 0:o.customizeList)?o.customizeList(n):n},customizeListItem:function(e){var n=(null===r||void 0===r?void 0:r.customizeList)?r.customizeListItem(e):e;return(null===o||void 0===o?void 0:o.customizeList)?o.customizeListItem(n):n}}));var r,o};return l.toPlugin=function(){return function(e,n){var l,c=this;void 0===n&&(n={});var s=null!==(l=e.listItem)&&void 0!==l?l:{tagName:"li",type:r.LI};return[(0,i.Z)({type:e.type,icon:e.icon,label:e.label,noButton:e.noButton,tagName:e.tagName,getStyle:e.getStyle,customAdd:function(n){return a(c,void 0,void 0,(function(){var r,o,i,l;return u(this,(function(a){switch(a.label){case 0:return[4,Promise.all([t.e(5095),t.e(2980)]).then(t.bind(t,31640))];case 1:return r=a.sent(),o=r.getActiveList,i=r.increaseListIndention,(l=o(n))?[3,2]:(i(n,{listItemType:s.type},e.type),[3,4]);case 2:return[4,Promise.all([t.e(5095),t.e(92)]).then(t.bind(t,85912))];case 3:a.sent().Transforms.setNodes(n,{type:e.type},{at:l[1]}),a.label=4;case 4:return[2]}}))}))},customRemove:function(e){return a(c,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,Promise.all([t.e(5095),t.e(2980)]).then(t.bind(t,31640))];case 1:return(0,n.sent().decreaseListIndention)(e,{listItemType:s.type}),[2]}}))}))}})(n.customizeList),(0,o.Z)(s)(n.customizeListItem)]}(e,n).map((function(e){return e.toPlugin()}))},l};return s(c)}},39417:function(e,n,t){var r=t(60884),o=t(60686),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)};n.Z=function(e){return(0,o.Z)({type:e.type,object:"block",hotKey:e.hotKey,replaceWithDefaultOnRemove:e.replaceWithDefaultOnRemove,icon:e.icon,label:e.label,onKeyDown:e.onKeyDown,addToolbarButton:!e.noButton,customAdd:e.customAdd,customRemove:e.customRemove,controls:e.controls,addHoverButton:!1,deserialize:{tagName:e.tagName,getData:e.getData||r.D},getStyle:function(n){var t,r;return i({textAlign:n.align},null!==(r=null===(t=e.getStyle)||void 0===t?void 0:t.call(e,n))&&void 0!==r?r:{})},Component:e.tagName})}},84027:function(e,n,t){t.d(n,{v:function(){return r},UL:function(){return o},OL:function(){return i},LI:function(){return l}});var r="LISTS/",o="UNORDERED-LIST",i="ORDERED-LIST",l="LISTS/LIST-ITEM"},60884:function(e,n,t){t.d(n,{D:function(){return o}});var r=t(60686),o=function(e){var n,t=null===(n=null===e||void 0===e?void 0:e.style)||void 0===n?void 0:n.textAlign;if(t)return{align:t}};n.Z={paragraph:(0,r.Z)({type:"PARAGRAPH/PARAGRAPH",label:"Paragraph",object:"block",addToolbarButton:!1,addHoverButton:!1,deserialize:{tagName:"p",getData:o},getStyle:function(e){return{textAlign:e.align}},Component:"p"}),pre:(0,r.Z)({type:"PARAGRAPH/PRE",label:"Pre",object:"block",addToolbarButton:!1,addHoverButton:!1,deserialize:{tagName:"pre",getData:o},getStyle:function(e){return{textAlign:e.align}},Component:"pre"})}},71969:function(e,n,t){t.d(n,{L:function(){return l}});var r=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return l},o=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))},i=function(e){return Boolean(e.text)},l=function(e,n){return e.reduce((function(e,t){if(i(t))return o(o([],r(e),!1),[t.text],!1);if(t.children){var a=l(t.children,n),u=t.children.every((function(e){if(i(e))return!0;var t=n.slatePlugins.find((function(n){return"component"===n.pluginType&&n.type===e.type}));return!t||"block"!==t.object}));return o(o([],r(e),!1),r(u?[a.join("")]:a),!1)}return e}),[])}}}]);