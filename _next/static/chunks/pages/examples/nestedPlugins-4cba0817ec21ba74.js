(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2973],{3833:function(e,n,r){"use strict";r.d(n,{Z:function(){return C}});var o=r(30808),t=r(25773),i=r(27378),a=r(38944),l=r(81923),s=r(82267),d=r(7818),c=r(95147),p=r(93596),u=r(25482),h=r(89090),m=r(44124),x=r(6749);function g(e){return(0,x.Z)("MuiButton",e)}let v=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var f=r(4141),b=r(24246);let y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>{let{color:n,disableElevation:r,fullWidth:o,size:i,variant:a,classes:l}=e,d={root:["root",a,`${a}${(0,h.Z)(n)}`,`size${(0,h.Z)(i)}`,`${a}Size${(0,h.Z)(i)}`,"inherit"===n&&"colorInherit",r&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(i)}`]},c=(0,s.Z)(d,g,l);return(0,t.Z)({},l,c)},j=e=>(0,t.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:r}=e;return[n.root,n[r.variant],n[`${r.variant}${(0,h.Z)(r.color)}`],n[`size${(0,h.Z)(r.size)}`],n[`${r.variant}Size${(0,h.Z)(r.size)}`],"inherit"===r.color&&n.colorInherit,r.disableElevation&&n.disableElevation,r.fullWidth&&n.fullWidth]}})(({theme:e,ownerState:n})=>{var r,o;return(0,t.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,t.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:`1px solid ${(e.vars||e).palette[n.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:(e.vars||e).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[n.color].main}}),"&:active":(0,t.Z)({},"contained"===n.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${v.focusVisible}`]:(0,t.Z)({},"contained"===n.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${v.disabled}`]:(0,t.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===n.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===n.variant&&"secondary"===n.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===n.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===n.variant&&"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[n.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[n.color].main,.5)}`},"contained"===n.variant&&{color:e.vars?e.vars.palette.text.primary:null==(r=(o=e.palette).getContrastText)?void 0:r.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].contrastText,backgroundColor:(e.vars||e).palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}}),w=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,n)=>{let{ownerState:r}=e;return[n.startIcon,n[`iconSize${(0,h.Z)(r.size)}`]]}})(({ownerState:e})=>(0,t.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},j(e))),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,n)=>{let{ownerState:r}=e;return[n.endIcon,n[`iconSize${(0,h.Z)(r.size)}`]]}})(({ownerState:e})=>(0,t.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},j(e))),P=i.forwardRef(function(e,n){let r=i.useContext(f.Z),s=(0,l.Z)(r,e),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:c,color:u="primary",component:h="button",className:m,disabled:x=!1,disableElevation:g=!1,disableFocusRipple:v=!1,endIcon:j,focusVisibleClassName:P,fullWidth:C=!1,size:k="medium",startIcon:I,type:E,variant:R="text"}=d,$=(0,o.Z)(d,y),O=(0,t.Z)({},d,{color:u,component:h,disabled:x,disableElevation:g,disableFocusRipple:v,fullWidth:C,size:k,type:E,variant:R}),B=Z(O),N=I&&(0,b.jsx)(w,{className:B.startIcon,ownerState:O,children:I}),M=j&&(0,b.jsx)(z,{className:B.endIcon,ownerState:O,children:j});return(0,b.jsxs)(S,(0,t.Z)({ownerState:O,className:(0,a.default)(r.className,B.root,m),component:h,disabled:x,focusRipple:!v,focusVisibleClassName:(0,a.default)(B.focusVisible,P),ref:n,type:E},$,{classes:B,children:[N,c,M]}))});var C=P},4141:function(e,n,r){"use strict";var o=r(27378);let t=o.createContext({});n.Z=t},22506:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/nestedPlugins",function(){return r(20938)}])},8044:function(e,n,r){"use strict";r.d(n,{Z:function(){return P}});var o=r(24246),t=r(15366),i=r(59522),a=r(81267),l=r(20922),s=r(94827),d=r(11871),c=r(87949),p=r(25833),u=r(23884),h=r(29277),m=r(52754),x=r(27378),g=r(58293),v=r(82111),f=r(98269),b=r(79894),y=r.n(b),Z=r(11386),j=r(20518),S=r(63221);let w=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{}),(0,o.jsx)(d.Z,{}),(0,o.jsx)(y(),{passHref:!0,legacyBehavior:!0,href:"/docs",children:(0,o.jsxs)(v.ZP,{component:"a",children:[(0,o.jsx)(j.Z,{children:(0,o.jsx)(Z.Z,{})}),(0,o.jsx)(f.Z,{primary:"Docs"})]})}),(0,o.jsx)(y(),{passHref:!0,legacyBehavior:!0,href:"https://github.com/react-page/react-page",children:(0,o.jsxs)(v.ZP,{component:"a",children:[(0,o.jsx)(j.Z,{children:(0,o.jsx)(S.Z,{})}),(0,o.jsx)(f.Z,{primary:"Github"})]})}),(0,o.jsx)(d.Z,{}),(0,o.jsx)(y(),{passHref:!0,legacyBehavior:!0,href:"/",children:(0,o.jsx)(v.ZP,{component:"a",children:(0,o.jsx)(f.Z,{primary:"Demo"})})}),(0,o.jsx)(y(),{passHref:!0,legacyBehavior:!0,href:"/readonly",children:(0,o.jsx)(v.ZP,{component:"a",children:(0,o.jsx)(f.Z,{primary:"Read only"})})}),(0,o.jsx)(y(),{passHref:!0,legacyBehavior:!0,href:"/empty",children:(0,o.jsx)(v.ZP,{component:"a",children:(0,o.jsx)(f.Z,{primary:"Empty editor"})})}),(0,o.jsx)(y(),{passHref:!0,legacyBehavior:!0,href:"/examples/reactadmin",children:(0,o.jsx)(v.ZP,{component:"a",children:(0,o.jsx)(f.Z,{primary:"React Admin example"})})}),(0,o.jsx)(d.Z,{}),(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(y(),{passHref:!0,legacyBehavior:!0,href:"/old/demo",children:(0,o.jsx)(v.ZP,{component:"a",children:(0,o.jsx)(f.Z,{primary:"Old demo (v0)"})})}),(0,o.jsx)(y(),{passHref:!0,legacyBehavior:!0,href:"/old/fromhtml",children:(0,o.jsx)(v.ZP,{component:"a",children:(0,o.jsx)(f.Z,{primary:"Old import-from-html-Demo"})})})]}),(0,o.jsx)(d.Z,{}),(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(v.ZP,{component:"a",href:"https://react-page.github.io/",children:(0,o.jsx)(f.Z,{primary:"Latest version"})}),(0,o.jsx)(v.ZP,{component:"a",href:"https://react-page.github.io/beta",children:(0,o.jsx)(f.Z,{primary:"beta version"})})]})]}),z=e=>{let{children:n}=e,[r,g]=x.useState(!1),v=()=>{g(!r)},f=(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{}),(0,o.jsx)(d.Z,{}),(0,o.jsx)(w,{})]});return(0,o.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,o.jsx)(s.ZP,{}),(0,o.jsx)(a.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(240,"px)")},ml:{sm:"".concat(240,"px")}},children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(p.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:v,sx:{mr:2,display:{sm:"none"}},children:(0,o.jsx)(t.Z,{})}),(0,o.jsxs)(h.Z,{variant:"h6",noWrap:!0,component:"div",children:["React Page ",m.q4]}),(0,o.jsx)(p.Z,{href:"https://github.com/react-page/react-page",target:"_blank",color:"inherit","aria-label":"open drawer",sx:{marginLeft:"auto"},children:(0,o.jsx)(i.Z,{})})]})}),(0,o.jsxs)(l.Z,{component:"nav",sx:{width:{sm:240},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,o.jsx)(c.ZP,{variant:"temporary",open:r,onClose:v,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:f}),(0,o.jsx)(c.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{zIndex:10,boxSizing:"border-box",width:240}},open:!0,children:f})]}),(0,o.jsxs)(l.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(240,"px)")},background:e=>e.palette.grey[100]},children:[(0,o.jsx)(u.Z,{}),(0,o.jsx)(l.Z,{sx:{flexGrow:1,p:4,backgroundColor:"white",maxWidth:1280,margin:"auto"},children:n})]})]})};var P=z},20938:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var o=r(24246),t=r(27378),i=r(52754),a=r(48650),l=r(71417),s=r(8044),d=r(3833);let c=(0,a.ZP)(),p=(0,a.ZP)(e=>({...e,title:"reduced slate",plugins:{headings:{h3:e.plugins.headings.h3(e=>({...e,getStyle:()=>({color:"red"})}))},paragraphs:e.plugins.paragraphs,emphasize:e.plugins.emphasize}})),u={id:"some-other-plugin",title:"Some plugin",description:"Some plugin that is only available inside another plugin",Renderer:e=>(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"Helloooo"})}),version:1},h=[c,l.Z,{id:"some-plugin",title:"Some plugin with different cellPlugins",Renderer:e=>(0,o.jsx)("div",{style:{border:"5px solid black"},children:e.children}),cellPlugins:[p,u],version:1,cellStyle:{padding:0}},{id:"some-plugin-2",title:"Some plugin that extends the parent plugins",Renderer:e=>(0,o.jsx)("div",{style:{border:"5px solid black"},children:e.children}),cellPlugins:e=>[p,u,...e.filter(e=>"some-plugin-2"!==e.id)],version:1,cellStyle:{padding:0}},{id:"some-plugin-a",title:"Some plugin A with needply nested child plugins",Renderer:e=>(0,o.jsxs)("div",{style:{border:"5px solid blue"},children:[(0,o.jsx)("p",{children:e.nodeId}),e.children]}),cellPlugins:[p,{id:"some-plugin-b",title:"Some plugin B with nested child plugins",Renderer:e=>(0,o.jsxs)("div",{style:{border:"5px solid red"},children:[(0,o.jsx)("p",{children:e.nodeId}),e.children]}),cellPlugins:[p,{id:"some-plugin-c",title:"Some plugin C with nested child plugins",Renderer:e=>(0,o.jsxs)("div",{style:{border:"5px solid orange"},children:[(0,o.jsx)("p",{children:e.nodeId}),e.children]}),cellPlugins:[p],version:1,cellStyle:{padding:0}}],version:1,cellStyle:{padding:0}}],version:1,cellStyle:{padding:0}}];function m(){let[e,n]=(0,t.useState)(null),[r,a]=(0,t.useState)(!1);return(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(d.Z,{onClick:()=>a(!r),children:r?"read only":"editable"}),(0,o.jsx)(i.ZP,{cellPlugins:h,value:e,onChange:n,readOnly:r})]})}},71417:function(e,n,r){"use strict";r.d(n,{Z:function(){return x},F:function(){return m}});var o=r(7256),t=r(27378),i=(0,o.Z)(function(){return Promise.all([r.e(4879),r.e(4613)]).then(r.bind(r,24613))}),a={Controls:function(){return t.createElement(t.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return t.createElement(t.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"Existing image URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link to open upon image click",altPlaceholder:"Image's description",altLabel:"Image's alternative description",openNewWindow:"Open link in new window",srcPlaceholder:"http://example.com/image.png",buttonContent:"Choose for upload",noFileError:"No file selected",badExtensionError:"Wrong file type",tooBigError:"Image file > 5MB",uploadingError:"Error while uploading",unknownError:"Unknown error"},icon:t.createElement(i,null)},l=function(){return(l=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}).apply(this,arguments)},s=function(e){var n,r,o=l(l({},a),e),i=o.Controls;return{controls:{type:"custom",Component:function(e){return t.createElement(i,l({},e,{translations:o.translations,imageUpload:o.imageUpload}))}},Renderer:o.Renderer,id:"ory/editor/core/content/image",version:1,icon:o.icon,title:null===(n=o.translations)||void 0===n?void 0:n.pluginName,isInlineable:!0,description:null===(r=o.translations)||void 0===r?void 0:r.pluginDescription}},d={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},c=(0,o.Z)(function(){return Promise.all([r.e(4879),r.e(3904)]).then(r.bind(r,23904))}),p=function(e){var n=e.data,r=null==n?void 0:n.src,o=null==n?void 0:n.alt,i=null==n?void 0:n.openInNewWindow,a=t.createElement("img",{className:"react-page-plugins-content-image",alt:o,src:r});return r?t.createElement("div",null,(null==n?void 0:n.href)?t.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null==n?void 0:n.href,target:i?"_blank":void 0,rel:i?"noreferrer noopener":void 0},a):a):t.createElement("div",null,t.createElement("div",{className:"react-page-plugins-content-image-placeholder"},t.createElement(c,{style:d})))},u=function(){return(u=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}).apply(this,arguments)},h=(0,o.Z)(function(){return Promise.all([r.e(4879),r.e(5482),r.e(6597),r.e(2983),r.e(291),r.e(3355),r.e(9816),r.e(5240),r.e(4512),r.e(6735),r.e(8854),r.e(3738)]).then(r.bind(r,35213))}),m=function(e){return s(u({Renderer:p,Controls:h},e))},x=m()}},function(e){e.O(0,[4879,5482,6597,2983,6333,1255,6948,9894,6731,2754,8650,9774,2888,179],function(){return e(e.s=22506)}),_N_E=e.O()}]);
//# sourceMappingURL=nestedPlugins-4cba0817ec21ba74.js.map