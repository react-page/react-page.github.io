(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8778],{91301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/customToolbar",function(){return t(26943)}])},26943:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var o=t(52050),r=t(24246),i=t(27378),l=t(52754),a=t(48650),u=t(71417),s=t(9722),c=t(70169),d=t(31373),p=t(2750),m=t(99892),g=t(41321),f=t(50127),v=t(44468),h=t(35491),b=t(1743),y=function(e){var n=e.collapsed,t=e.setCollapsed,o=i.useCallback((function(){t(!n)}),[n,t]);return(0,r.jsx)(f.Z,{title:n?"Restore Panel":"Collapse Panel",children:(0,r.jsx)(v.Z,{onClick:o,"aria-label":"delete",color:"default",children:n?(0,r.jsx)(b.Z,{}):(0,r.jsx)(h.Z,{})})})},w=i.memo(y),C=i.memo((function(e){var n=e.pluginControls,t=(0,d.Z)(e,["pluginControls"]),l=(0,o.Z)(i.useState(!1),2),a=l[0],u=l[1],f=(0,m.R7)(t.nodeId);return(0,r.jsx)(g.hx,(0,c.Z)((0,s.Z)({},t),{style:{borderRadius:20,borderColor:"red"},pluginControls:a?null:n,actionsLeft:[(0,r.jsx)(w,{collapsed:a,setCollapsed:u},"collapse button")],children:(0,r.jsxs)(p.Z,{children:["Custom Toolbar for ",null===f||void 0===f?void 0:f.title]})}))})),x=t(68666),E=t(63914),j=[(0,a.ZP)(),u.Z,E.Z],Z=function(){var e=(0,o.Z)(i.useState(null),2),n=e[0],t=e[1],a=(0,i.useState)(!0),u=a[0],s=a[1],c=i.useMemo((function(){return u?{BottomToolbar:C}:{}}),[u]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,{onClick:function(){return s(!u)},children:"Toggle custom toolbar"}),(0,r.jsx)(l.ZP,{cellPlugins:j,value:n,onChange:t,components:c})]})}},63914:function(e,n,t){"use strict";var o=t(24246),r=t(12742),i=(t(27378),function(e){return"custom"===(null===e||void 0===e?void 0:e.variant)?e.customTextColor:"highlight"===(null===e||void 0===e?void 0:e.variant)?"white":"black"}),l={Renderer:function(e){var n,t,r,l,a=e.data;return(0,o.jsxs)("div",{style:{backgroundColor:(l=null===a||void 0===a||null===(n=a.style)||void 0===n?void 0:n.pallete,"custom"===(null===l||void 0===l?void 0:l.variant)?l.customBackgroundColor:"highlight"===(null===l||void 0===l?void 0:l.variant)?"#3f51b5":"white"),color:i(null===a||void 0===a||null===(t=a.style)||void 0===t?void 0:t.pallete),padding:null===a||void 0===a||null===(r=a.style)||void 0===r?void 0:r.padding},children:[(0,o.jsx)("h3",{children:a.title}),(0,o.jsxs)("p",{children:["Firstname: ",a.firstName]}),(0,o.jsxs)("p",{children:["Lastname: ",a.lastName]}),(0,o.jsxs)("p",{children:["Age: ",a.age]})]})},id:"custom-content-plugin",title:"Custom content plugin",description:"Some custom content plugin with multiple controls",version:1,controls:[{title:"Default config",controls:{type:"autoform",schema:{properties:{title:{type:"string",default:"I am a custom plugin with multiple controls, this is my configuration"},firstName:{type:"string"},lastName:{type:"string"},age:{title:"Age in years",type:"integer",minimum:0}},required:["firstName","lastName"]}}},{title:"Styling",controls:{type:"autoform",schema:{type:"object",required:[],properties:{style:{type:"object",required:[],properties:{pallete:{type:"object",properties:{variant:{type:"string",enum:["default","highlight","custom"]},customBackgroundColor:{type:"string",default:"white",uniforms:{component:r.F8,showIf:function(e){var n,t;return"custom"===(null===(n=e.style)||void 0===n||null===(t=n.pallete)||void 0===t?void 0:t.variant)}}},customTextColor:{type:"string",default:"black",uniforms:{component:r.F8,showIf:function(e){var n,t;return"custom"===(null===(n=e.style)||void 0===n||null===(t=n.pallete)||void 0===t?void 0:t.variant)}}}}},padding:{type:"number",default:10}}}}}}}]};n.Z=l},12742:function(e,n,t){"use strict";t.d(n,{F8:function(){return i},zH:function(){return r}});var o=t(7256),r=(0,o.Z)((function(){return Promise.all([t.e(8751),t.e(8371),t.e(3554),t.e(2697),t.e(4281),t.e(1866),t.e(2678),t.e(5424)]).then(t.bind(t,35424))})),i=(0,o.Z)((function(){return Promise.all([t.e(8751),t.e(8371),t.e(3554),t.e(2697),t.e(5439),t.e(4281),t.e(919),t.e(1866),t.e(2678),t.e(8854),t.e(6865)]).then(t.bind(t,44532))}))},71417:function(e,n,t){"use strict";t.d(n,{Z:function(){return f},F:function(){return g}});var o=t(7256),r=t(27378),i=(0,o.Z)((function(){return Promise.all([t.e(9071),t.e(4613)]).then(t.bind(t,24613))})),l={Controls:function(){return r.createElement(r.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return r.createElement(r.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"Existing image URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link to open upon image click",altPlaceholder:"Image's description",altLabel:"Image's alternative description",openNewWindow:"Open link in new window",srcPlaceholder:"http://example.com/image.png",buttonContent:"Choose for upload",noFileError:"No file selected",badExtensionError:"Wrong file type",tooBigError:"Image file > 5MB",uploadingError:"Error while uploading",unknownError:"Unknown error"},icon:r.createElement(i,null)},a=function(){return a=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},a.apply(this,arguments)},u=function(e){var n,t,o=a(a({},l),e),i=o.Controls;return{controls:{type:"custom",Component:function(e){return r.createElement(i,a({},e,{translations:o.translations,imageUpload:o.imageUpload}))}},Renderer:o.Renderer,id:"ory/editor/core/content/image",version:1,icon:o.icon,title:null===(n=o.translations)||void 0===n?void 0:n.pluginName,isInlineable:!0,description:null===(t=o.translations)||void 0===t?void 0:t.pluginDescription}},s={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},c=(0,o.Z)((function(){return Promise.all([t.e(9071),t.e(3904)]).then(t.bind(t,23904))})),d=function(e){var n=e.data,t=null===n||void 0===n?void 0:n.src,o=null===n||void 0===n?void 0:n.alt,i=null===n||void 0===n?void 0:n.openInNewWindow,l=r.createElement("img",{className:"react-page-plugins-content-image",alt:o,src:t});return t?r.createElement("div",null,(null===n||void 0===n?void 0:n.href)?r.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===n||void 0===n?void 0:n.href,target:i?"_blank":void 0,rel:i?"noreferrer noopener":void 0},l):l):r.createElement("div",null,r.createElement("div",{className:"react-page-plugins-content-image-placeholder"},r.createElement(c,{style:s})))},p=function(){return p=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},p.apply(this,arguments)},m=(0,o.Z)((function(){return Promise.all([t.e(9071),t.e(8751),t.e(8371),t.e(3554),t.e(2697),t.e(3380),t.e(5439),t.e(8381),t.e(919),t.e(9135),t.e(8854),t.e(3738)]).then(t.bind(t,35213))})),g=function(e){return u(p({Renderer:d,Controls:m},e))},f=g()}},function(e){e.O(0,[9071,8751,8371,3554,9228,4875,2697,3380,5439,919,8743,127,8481,6470,9565,2754,8650,8854,8917,1321,9774,2888,179],(function(){return n=91301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);