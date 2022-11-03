(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{15830:function(e,a,o){"use strict";o.d(a,{Z:function(){return w}});var n=o(30808),r=o(25773),t=o(27378),i=o(38944),s=o(81923),l=o(82267),d=o(7818),c=o(95147),p=o(93596),h=o(25482),x=o(89090),u=o(44124),m=o(6749);function v(e){return(0,m.Z)("MuiButton",e)}var b=(0,u.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var g=t.createContext({}),f=o(24246);const Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],j=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,c.ZP)(h.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],a[`${o.variant}${(0,x.Z)(o.color)}`],a[`size${(0,x.Z)(o.size)}`],a[`${o.variant}Size${(0,x.Z)(o.size)}`],"inherit"===o.color&&a.colorInherit,o.disableElevation&&a.disableElevation,o.fullWidth&&a.fullWidth]}})((({theme:e,ownerState:a})=>{var o,n;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,r.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,r.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===a.variant&&"secondary"===a.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(n=e.palette).getContrastText)?void 0:o.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),y=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.startIcon,a[`iconSize${(0,x.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},j(e)))),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.endIcon,a[`iconSize${(0,x.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},j(e))));var w=t.forwardRef((function(e,a){const o=t.useContext(g),d=(0,s.Z)(o,e),c=(0,p.Z)({props:d,name:"MuiButton"}),{children:h,color:u="primary",component:m="button",className:b,disabled:j=!1,disableElevation:w=!1,disableFocusRipple:C=!1,endIcon:k,focusVisibleClassName:$,fullWidth:I=!1,size:P="medium",startIcon:R,type:E,variant:M="text"}=c,W=(0,n.Z)(c,Z),N=(0,r.Z)({},c,{color:u,component:m,disabled:j,disableElevation:w,disableFocusRipple:C,fullWidth:I,size:P,type:E,variant:M}),_=(e=>{const{color:a,disableElevation:o,fullWidth:n,size:t,variant:i,classes:s}=e,d={root:["root",i,`${i}${(0,x.Z)(a)}`,`size${(0,x.Z)(t)}`,`${i}Size${(0,x.Z)(t)}`,"inherit"===a&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,x.Z)(t)}`],endIcon:["endIcon",`iconSize${(0,x.Z)(t)}`]},c=(0,l.Z)(d,v,s);return(0,r.Z)({},s,c)})(N),T=R&&(0,f.jsx)(y,{className:_.startIcon,ownerState:N,children:R}),O=k&&(0,f.jsx)(z,{className:_.endIcon,ownerState:N,children:k});return(0,f.jsxs)(S,(0,r.Z)({ownerState:N,className:(0,i.default)(o.className,_.root,b),component:m,disabled:j,focusRipple:!C,focusVisibleClassName:(0,i.default)(_.focusVisible,$),ref:a,type:E},W,{classes:_,children:[T,h,O]}))}))},49536:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(16440)}])},74974:function(e,a,o){"use strict";o.d(a,{Z:function(){return k}});var n=o(52050),r=o(24246),t=o(15366),i=o(59522),s=o(81267),l=o(20922),d=o(94827),c=o(11871),p=o(87949),h=o(25833),x=o(23884),u=o(29277),m=o(52754),v=o(27378),b=o(58293),g=o(82111),f=o(98269),Z=o(79894),j=o.n(Z),S=o(11386),y=o(20518),z=o(63221),w=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(j(),{passHref:!0,href:"/docs",children:(0,r.jsxs)(g.ZP,{component:"a",children:[(0,r.jsx)(y.Z,{children:(0,r.jsx)(S.Z,{})}),(0,r.jsx)(f.Z,{primary:"Docs"})]})}),(0,r.jsx)(j(),{passHref:!0,href:"https://github.com/react-page/react-page",children:(0,r.jsxs)(g.ZP,{component:"a",children:[(0,r.jsx)(y.Z,{children:(0,r.jsx)(z.Z,{})}),(0,r.jsx)(f.Z,{primary:"Github"})]})}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(j(),{passHref:!0,href:"/",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(f.Z,{primary:"Demo"})})}),(0,r.jsx)(j(),{passHref:!0,href:"/readonly",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(f.Z,{primary:"Read only"})})}),(0,r.jsx)(j(),{passHref:!0,href:"/empty",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(f.Z,{primary:"Empty editor"})})}),(0,r.jsx)(j(),{passHref:!0,href:"/examples/reactadmin",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(f.Z,{primary:"React Admin example"})})}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(j(),{passHref:!0,href:"/old/demo",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(f.Z,{primary:"Old demo (v0)"})})}),(0,r.jsx)(j(),{passHref:!0,href:"/old/fromhtml",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(f.Z,{primary:"Old import-from-html-Demo"})})})]}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(g.ZP,{component:"a",href:"https://react-page.github.io/",children:(0,r.jsx)(f.Z,{primary:"Latest version"})}),(0,r.jsx)(g.ZP,{component:"a",href:"https://react-page.github.io/beta",children:(0,r.jsx)(f.Z,{primary:"beta version"})})]})]})},C=240,k=function(e){var a=e.children,o=(0,n.Z)(v.useState(!1),2),b=o[0],g=o[1],f=function(){g(!b)},Z=(0,r.jsxs)("div",{children:[(0,r.jsx)(x.Z,{}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(w,{})]});return(0,r.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,r.jsx)(d.ZP,{}),(0,r.jsx)(s.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(C,"px)")},ml:{sm:"".concat(C,"px")}},children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:f,sx:{mr:2,display:{sm:"none"}},children:(0,r.jsx)(t.Z,{})}),(0,r.jsxs)(u.Z,{variant:"h6",noWrap:!0,component:"div",children:["React Page ",m.q4]}),(0,r.jsx)(h.Z,{href:"https://github.com/react-page/react-page",target:"_blank",color:"inherit","aria-label":"open drawer",sx:{marginLeft:"auto"},children:(0,r.jsx)(i.Z,{})})]})}),(0,r.jsxs)(l.Z,{component:"nav",sx:{width:{sm:C},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,r.jsx)(p.ZP,{variant:"temporary",open:b,onClose:f,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:C}},children:Z}),(0,r.jsx)(p.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{zIndex:10,boxSizing:"border-box",width:C}},open:!0,children:Z})]}),(0,r.jsxs)(l.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(C,"px)")},background:function(e){return e.palette.grey[100]}},children:[(0,r.jsx)(x.Z,{}),(0,r.jsx)(l.Z,{sx:{flexGrow:1,p:4,backgroundColor:"white",maxWidth:1280,margin:"auto"},children:a})]})]})}},16440:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return p}});var n=o(24246),r=o(15830),t=o(52754),i=o(27378),s=o(74974),l=o(43465),d=o(28356),c=[{lang:"en",label:"English"},{lang:"de",label:"Deutsch"}];function p(){var e=(0,i.useState)(d.T),a=e[0],o=e[1];return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(t.ZP,{cellPlugins:l.C,value:a,lang:c[0].lang,onChange:o,languages:c}),(0,n.jsx)(r.Z,{onClick:function(){return o(d.T)},children:"Reset"})]})}}},function(e){e.O(0,[4879,5482,6597,2983,6333,1255,6948,3202,4025,7103,2754,8650,3465,8356,9774,2888,179],(function(){return a=49536,e(e.s=a);var a}));var a=e.O();_N_E=a}]);
//# sourceMappingURL=index-47f26a3fc401a7c6.js.map