(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4454],{68666:function(e,a,o){"use strict";o.d(a,{Z:function(){return z}});var r=o(30808),n=o(25773),t=o(27378),i=o(38944),s=o(81923),l=o(82267),c=o(7818),d=o(25608),p=o(22399),h=o(18751),x=o(51640),u=o(6749);function m(e){return(0,u.Z)("MuiButton",e)}var v=(0,o(44124).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=t.createContext({}),g=o(24246);const Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),j=(0,d.ZP)(h.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],a[`${o.variant}${(0,x.Z)(o.color)}`],a[`size${(0,x.Z)(o.size)}`],a[`${o.variant}Size${(0,x.Z)(o.size)}`],"inherit"===o.color&&a.colorInherit,o.disableElevation&&a.disableElevation,o.fullWidth&&a.fullWidth]}})((({theme:e,ownerState:a})=>{var o,r;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${v.focusVisible}`]:(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${v.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===a.variant&&"secondary"===a.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(r=e.palette).getContrastText)?void 0:o.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),y=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.startIcon,a[`iconSize${(0,x.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},f(e)))),S=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.endIcon,a[`iconSize${(0,x.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},f(e))));var z=t.forwardRef((function(e,a){const o=t.useContext(b),c=(0,s.Z)(o,e),d=(0,p.Z)({props:c,name:"MuiButton"}),{children:h,color:u="primary",component:v="button",className:f,disabled:z=!1,disableElevation:w=!1,disableFocusRipple:k=!1,endIcon:C,focusVisibleClassName:$,fullWidth:P=!1,size:R="medium",startIcon:I,type:E,variant:M="text"}=d,N=(0,r.Z)(d,Z),T=(0,n.Z)({},d,{color:u,component:v,disabled:z,disableElevation:w,disableFocusRipple:k,fullWidth:P,size:R,type:E,variant:M}),_=(e=>{const{color:a,disableElevation:o,fullWidth:r,size:t,variant:i,classes:s}=e,c={root:["root",i,`${i}${(0,x.Z)(a)}`,`size${(0,x.Z)(t)}`,`${i}Size${(0,x.Z)(t)}`,"inherit"===a&&"colorInherit",o&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,x.Z)(t)}`],endIcon:["endIcon",`iconSize${(0,x.Z)(t)}`]},d=(0,l.Z)(c,m,s);return(0,n.Z)({},s,d)})(T),W=I&&(0,g.jsx)(y,{className:_.startIcon,ownerState:T,children:I}),O=C&&(0,g.jsx)(S,{className:_.endIcon,ownerState:T,children:C});return(0,g.jsxs)(j,(0,n.Z)({ownerState:T,className:(0,i.Z)(f,o.className),component:v,disabled:z,focusRipple:!k,focusVisibleClassName:(0,i.Z)(_.focusVisible,$),ref:a,type:E},N,{classes:_,children:[W,h,O]}))}))},72002:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/i18n",function(){return o(34957)}])},74974:function(e,a,o){"use strict";o.d(a,{Z:function(){return C}});var r=o(52050),n=o(24246),t=o(15366),i=o(59522),s=o(77545),l=o(25310),c=o(86597),d=o(79119),p=o(30004),h=o(44468),x=o(92384),u=o(2750),m=o(52754),v=o(27378),b=o(10872),g=o(88483),Z=o(12577),f=o(79894),j=o.n(f),y=o(11386),S=o(12211),z=o(63221),w=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{}),(0,n.jsx)(d.Z,{}),(0,n.jsx)(j(),{passHref:!0,href:"/docs",children:(0,n.jsxs)(g.ZP,{component:"a",children:[(0,n.jsx)(S.Z,{children:(0,n.jsx)(y.Z,{})}),(0,n.jsx)(Z.Z,{primary:"Docs"})]})}),(0,n.jsx)(j(),{passHref:!0,href:"https://github.com/react-page/react-page",children:(0,n.jsxs)(g.ZP,{component:"a",children:[(0,n.jsx)(S.Z,{children:(0,n.jsx)(z.Z,{})}),(0,n.jsx)(Z.Z,{primary:"Github"})]})}),(0,n.jsx)(d.Z,{}),(0,n.jsx)(j(),{passHref:!0,href:"/",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(Z.Z,{primary:"Demo"})})}),(0,n.jsx)(j(),{passHref:!0,href:"/readonly",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(Z.Z,{primary:"Read only"})})}),(0,n.jsx)(j(),{passHref:!0,href:"/empty",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(Z.Z,{primary:"Empty editor"})})}),(0,n.jsx)(j(),{passHref:!0,href:"/examples/reactadmin",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(Z.Z,{primary:"React Admin example"})})}),(0,n.jsx)(d.Z,{}),(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(j(),{passHref:!0,href:"/old/demo",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(Z.Z,{primary:"Old demo (v0)"})})}),(0,n.jsx)(j(),{passHref:!0,href:"/old/fromhtml",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(Z.Z,{primary:"Old import-from-html-Demo"})})})]}),(0,n.jsx)(d.Z,{}),(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(g.ZP,{component:"a",href:"https://react-page.github.io/",children:(0,n.jsx)(Z.Z,{primary:"Latest version"})}),(0,n.jsx)(g.ZP,{component:"a",href:"https://react-page.github.io/beta",children:(0,n.jsx)(Z.Z,{primary:"beta version"})})]})]})},k=240,C=function(e){var a=e.children,o=(0,r.Z)(v.useState(!1),2),b=o[0],g=o[1],Z=function(){g(!b)},f=(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{}),(0,n.jsx)(d.Z,{}),(0,n.jsx)(w,{})]});return(0,n.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,n.jsx)(c.ZP,{}),(0,n.jsx)(s.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(k,"px)")},ml:{sm:"".concat(k,"px")}},children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(h.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:Z,sx:{mr:2,display:{sm:"none"}},children:(0,n.jsx)(t.Z,{})}),(0,n.jsxs)(u.Z,{variant:"h6",noWrap:!0,component:"div",children:["React Page ",m.q4]}),(0,n.jsx)(h.Z,{href:"https://github.com/react-page/react-page",target:"_blank",color:"inherit","aria-label":"open drawer",sx:{marginLeft:"auto"},children:(0,n.jsx)(i.Z,{})})]})}),(0,n.jsxs)(l.Z,{component:"nav",sx:{width:{sm:k},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,n.jsx)(p.ZP,{variant:"temporary",open:b,onClose:Z,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:k}},children:f}),(0,n.jsx)(p.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{zIndex:10,boxSizing:"border-box",width:k}},open:!0,children:f})]}),(0,n.jsxs)(l.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(k,"px)")},background:function(e){return e.palette.grey[100]}},children:[(0,n.jsx)(x.Z,{}),(0,n.jsx)(l.Z,{sx:{flexGrow:1,p:4,backgroundColor:"white",maxWidth:1280,margin:"auto"},children:a})]})]})}},34957:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return h}});var r=o(24246),n=o(52754),t=o(28356),i=o(27378),s=o(43465),l=o(74974),c=o(68666),d=[{lang:"en",label:"English"},{lang:"de",label:"Deutsch"}],p={"Edit blocks":"\u7f16\u8f91","Add blocks":"\u6dfb\u52a0","Move blocks":"\u79fb\u52a8","Resize blocks":"\u8c03\u6574\u5927\u5c0f","Preview blocks":"\u9884\u89c8\u6a21\u5f0f"};function h(){var e=(0,i.useState)(t.T),a=e[0],o=e[1],h=(0,i.useCallback)((function(e){return e&&void 0!==p[e]?p[e]:"".concat(e,"(to translate)")}),[]);return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(n.ZP,{cellPlugins:s.C,value:a,lang:d[0].lang,onChange:o,languages:d,uiTranslator:h}),(0,r.jsx)(c.Z,{onClick:function(){return o(t.T)},children:"Reset"})]})}}},function(e){e.O(0,[9071,8751,8371,3554,6693,9228,4875,3202,6199,1499,2754,8650,3465,8356,9774,2888,179],(function(){return a=72002,e(e.s=a);var a}));var a=e.O();_N_E=a}]);