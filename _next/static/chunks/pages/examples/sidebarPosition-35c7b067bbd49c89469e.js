_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{"/zyB":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/sidebarPosition",function(){return t("c4pO")}])},c4pO:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var r=t("mXGw"),o=t.n(r),i=t("LSll"),l=t("33kk"),a=t("deX4"),u=t("atfL"),c=o.a.createElement,s=[Object(l.b)(),a.a];function d(){var e=Object(r.useState)(null),n=e[0],t=e[1],o=Object(r.useState)("rightAbsolute"),l=o[0],a=o[1];return c(u.a,null,c("select",{onChange:function(e){return a(e.target.value)}},c("option",null,"rightAbsolute"),c("option",null,"rightRelative"),c("option",null,"leftRelative"),c("option",{value:"leftAbsolute"},"leftAbsolute (currently buggy and interfers with other ui elements)")),c(i.b,{cellPlugins:s,value:n,onChange:t,sidebarPosition:l}))}},deX4:function(e,n,t){"use strict";t.d(n,"b",(function(){return f}));var r=t("4uDH"),o=t("mXGw"),i=t.n(o),l=Object(r.a)((function(){return Promise.all([t.e(1),t.e(0),t.e(93)]).then(t.t.bind(null,"Yipg",7))})),a={Controls:function(){return i.a.createElement(i.a.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return i.a.createElement(i.a.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"Existing image URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link to open upon image click",openNewWindow:"Open link in new window",srcPlaceholder:"http://example.com/image.png",buttonContent:"Choose for upload",noFileError:"No file selected",badExtensionError:"Wrong file type",tooBigError:"Image file > 5MB",uploadingError:"Error while uploading",unknownError:"Unknown error"},icon:i.a.createElement(l,null)},u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},c=function(e){var n=u(u({},a),e),t=n.Controls;return{controls:{type:"custom",Component:function(e){return i.a.createElement(t,u({},e,{translations:n.translations,imageUpload:n.imageUpload}))}},Renderer:n.Renderer,id:"ory/editor/core/content/image",version:1,icon:n.icon,title:n.translations.pluginName,isInlineable:!0,description:n.translations.pluginDescription}},s={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},d=Object(r.a)((function(){return Promise.all([t.e(1),t.e(0),t.e(11)]).then(t.t.bind(null,"q8G3",7))})),p=function(e){var n=e.data,t=null===n||void 0===n?void 0:n.src,r=null===n||void 0===n?void 0:n.openInNewWindow,o=i.a.createElement("img",{className:"react-page-plugins-content-image",alt:"",src:t});return t?i.a.createElement("div",null,(null===n||void 0===n?void 0:n.href)?i.a.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===n||void 0===n?void 0:n.href,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0},o):o):i.a.createElement("div",null,i.a.createElement("div",{className:"react-page-plugins-content-image-placeholder"},i.a.createElement(d,{style:s})))},g=function(){return(g=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},m=Object(r.a)((function(){return Promise.all([t.e(1),t.e(0),t.e(11),t.e(67)]).then(t.bind(null,"t/Zn"))})),f=function(e){return c(g({Renderer:p,Controls:m},e))},h=f();n.a=h}},[["/zyB",2,1,0,3,4,5,6,7,8,9,10]]]);