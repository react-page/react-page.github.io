(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9913],{89303:function(e,n,r){"use strict";r.r(n);var t=r(97865),o=r(27378),i=r(52754),l=r(48650),a=r(71417),u=r(37076),c=r(9334),s=r(24246),d=[(0,l.ZP)(),a.Z];n.default=function(){var e=o.useState(u.T),n=(0,t.Z)(e,1)[0],r=(0,o.useState)(!0),l=r[0],a=r[1],p=o.useMemo((function(){return l?{CellPluginMissing:function(e){return(0,s.jsxs)("p",{style:{color:"red"},children:["sorry, plugin ",e.pluginId," not found \ud83d\ude22"," "]})}}:{}}),[l]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{onClick:function(){return a(!l)},children:"Toggle custom missing plugin"}),(0,s.jsx)(i.ZP,{cellPlugins:d,value:n,components:p})]})}},19278:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/customMissingPlugin",function(){return r(89303)}])},71417:function(e,n,r){"use strict";r.d(n,{Z:function(){return f},F:function(){return m}});var t=r(7256),o=r(27378),i=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(5690)]).then(r.bind(r,15217))})),l={Controls:function(){return o.createElement(o.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return o.createElement(o.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"Existing image URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link to open upon image click",openNewWindow:"Open link in new window",srcPlaceholder:"http://example.com/image.png",buttonContent:"Choose for upload",noFileError:"No file selected",badExtensionError:"Wrong file type",tooBigError:"Image file > 5MB",uploadingError:"Error while uploading",unknownError:"Unknown error"},icon:o.createElement(i,null)},a=function(){return a=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)},u=function(e){var n=a(a({},l),e),r=n.Controls;return{controls:{type:"custom",Component:function(e){return o.createElement(r,a({},e,{translations:n.translations,imageUpload:n.imageUpload}))}},Renderer:n.Renderer,id:"ory/editor/core/content/image",version:1,icon:n.icon,title:n.translations.pluginName,isInlineable:!0,description:n.translations.pluginDescription}},c={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},s=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(5981)]).then(r.bind(r,2431))})),d=function(e){var n=e.data,r=null===n||void 0===n?void 0:n.src,t=null===n||void 0===n?void 0:n.openInNewWindow,i=o.createElement("img",{className:"react-page-plugins-content-image",alt:"",src:r});return r?o.createElement("div",null,(null===n||void 0===n?void 0:n.href)?o.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===n||void 0===n?void 0:n.href,target:t?"_blank":void 0,rel:t?"noreferrer noopener":void 0},i):i):o.createElement("div",null,o.createElement("div",{className:"react-page-plugins-content-image-placeholder"},o.createElement(s,{style:c})))},p=function(){return p=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},p.apply(this,arguments)},g=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(7217),r.e(6547),r.e(8496),r.e(4576),r.e(919),r.e(5439),r.e(7093),r.e(8236),r.e(1740),r.e(8854),r.e(5167)]).then(r.bind(r,35213))})),m=function(e){return u(p({Renderer:d,Controls:g},e))},f=m()}},function(e){e.O(0,[3140,7217,2479,7321,4750,2754,8650,7076,9774,2888,179],(function(){return n=19278,e(e.s=n);var n}));var n=e.O();_N_E=n}]);