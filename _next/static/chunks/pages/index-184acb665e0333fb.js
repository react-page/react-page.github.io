(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{68666:function(e,a,o){"use strict";o.d(a,{Z:function(){return z}});var r=o(30808),n=o(25773),t=o(27378),i=o(38944),s=o(81923),l=o(82267),d=o(7818),c=o(25608),p=o(22399),h=o(18751),x=o(51640),u=o(6749);function m(e){return(0,u.Z)("MuiButton",e)}var v=(0,o(44124).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=t.createContext({}),g=o(24246);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),j=(0,c.ZP)(h.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],a[`${o.variant}${(0,x.Z)(o.color)}`],a[`size${(0,x.Z)(o.size)}`],a[`${o.variant}Size${(0,x.Z)(o.size)}`],"inherit"===o.color&&a.colorInherit,o.disableElevation&&a.disableElevation,o.fullWidth&&a.fullWidth]}})((({theme:e,ownerState:a})=>{var o,r;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${v.focusVisible}`]:(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${v.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===a.variant&&"secondary"===a.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(r=e.palette).getContrastText)?void 0:o.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),y=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.startIcon,a[`iconSize${(0,x.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e)))),S=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.endIcon,a[`iconSize${(0,x.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e))));var z=t.forwardRef((function(e,a){const o=t.useContext(b),d=(0,s.Z)(o,e),c=(0,p.Z)({props:d,name:"MuiButton"}),{children:h,color:u="primary",component:v="button",className:Z,disabled:z=!1,disableElevation:w=!1,disableFocusRipple:C=!1,endIcon:k,focusVisibleClassName:$,fullWidth:P=!1,size:R="medium",startIcon:I,type:E,variant:M="text"}=c,N=(0,r.Z)(c,f),_=(0,n.Z)({},c,{color:u,component:v,disabled:z,disableElevation:w,disableFocusRipple:C,fullWidth:P,size:R,type:E,variant:M}),T=(e=>{const{color:a,disableElevation:o,fullWidth:r,size:t,variant:i,classes:s}=e,d={root:["root",i,`${i}${(0,x.Z)(a)}`,`size${(0,x.Z)(t)}`,`${i}Size${(0,x.Z)(t)}`,"inherit"===a&&"colorInherit",o&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,x.Z)(t)}`],endIcon:["endIcon",`iconSize${(0,x.Z)(t)}`]},c=(0,l.Z)(d,m,s);return(0,n.Z)({},s,c)})(_),W=I&&(0,g.jsx)(y,{className:T.startIcon,ownerState:_,children:I}),O=k&&(0,g.jsx)(S,{className:T.endIcon,ownerState:_,children:k});return(0,g.jsxs)(j,(0,n.Z)({ownerState:_,className:(0,i.default)(Z,o.className),component:v,disabled:z,focusRipple:!C,focusVisibleClassName:(0,i.default)(T.focusVisible,$),ref:a,type:E},N,{classes:T,children:[W,h,O]}))}))},49536:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(16440)}])},74974:function(e,a,o){"use strict";o.d(a,{Z:function(){return k}});var r=o(52050),n=o(24246),t=o(15366),i=o(59522),s=o(77545),l=o(25310),d=o(86597),c=o(79119),p=o(30004),h=o(44468),x=o(92384),u=o(2750),m=o(52754),v=o(27378),b=o(10872),g=o(88483),f=o(12577),Z=o(79894),j=o.n(Z),y=o(11386),S=o(12211),z=o(63221),w=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(j(),{passHref:!0,href:"/docs",children:(0,n.jsxs)(g.ZP,{component:"a",children:[(0,n.jsx)(S.Z,{children:(0,n.jsx)(y.Z,{})}),(0,n.jsx)(f.Z,{primary:"Docs"})]})}),(0,n.jsx)(j(),{passHref:!0,href:"https://github.com/react-page/react-page",children:(0,n.jsxs)(g.ZP,{component:"a",children:[(0,n.jsx)(S.Z,{children:(0,n.jsx)(z.Z,{})}),(0,n.jsx)(f.Z,{primary:"Github"})]})}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(j(),{passHref:!0,href:"/",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(f.Z,{primary:"Demo"})})}),(0,n.jsx)(j(),{passHref:!0,href:"/readonly",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(f.Z,{primary:"Read only"})})}),(0,n.jsx)(j(),{passHref:!0,href:"/empty",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(f.Z,{primary:"Empty editor"})})}),(0,n.jsx)(j(),{passHref:!0,href:"/examples/reactadmin",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(f.Z,{primary:"React Admin example"})})}),(0,n.jsx)(c.Z,{}),(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(j(),{passHref:!0,href:"/old/demo",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(f.Z,{primary:"Old demo (v0)"})})}),(0,n.jsx)(j(),{passHref:!0,href:"/old/fromhtml",children:(0,n.jsx)(g.ZP,{component:"a",children:(0,n.jsx)(f.Z,{primary:"Old import-from-html-Demo"})})})]}),(0,n.jsx)(c.Z,{}),(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(g.ZP,{component:"a",href:"https://react-page.github.io/",children:(0,n.jsx)(f.Z,{primary:"Latest version"})}),(0,n.jsx)(g.ZP,{component:"a",href:"https://react-page.github.io/beta",children:(0,n.jsx)(f.Z,{primary:"beta version"})})]})]})},C=240,k=function(e){var a=e.children,o=(0,r.Z)(v.useState(!1),2),b=o[0],g=o[1],f=function(){g(!b)},Z=(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(w,{})]});return(0,n.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,n.jsx)(d.ZP,{}),(0,n.jsx)(s.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(C,"px)")},ml:{sm:"".concat(C,"px")}},children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(h.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:f,sx:{mr:2,display:{sm:"none"}},children:(0,n.jsx)(t.Z,{})}),(0,n.jsxs)(u.Z,{variant:"h6",noWrap:!0,component:"div",children:["React Page ",m.q4]}),(0,n.jsx)(h.Z,{href:"https://github.com/react-page/react-page",target:"_blank",color:"inherit","aria-label":"open drawer",sx:{marginLeft:"auto"},children:(0,n.jsx)(i.Z,{})})]})}),(0,n.jsxs)(l.Z,{component:"nav",sx:{width:{sm:C},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,n.jsx)(p.ZP,{variant:"temporary",open:b,onClose:f,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:C}},children:Z}),(0,n.jsx)(p.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{zIndex:10,boxSizing:"border-box",width:C}},open:!0,children:Z})]}),(0,n.jsxs)(l.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(C,"px)")},background:function(e){return e.palette.grey[100]}},children:[(0,n.jsx)(x.Z,{}),(0,n.jsx)(l.Z,{sx:{flexGrow:1,p:4,backgroundColor:"white",maxWidth:1280,margin:"auto"},children:a})]})]})}},16440:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return p}});var r=o(24246),n=o(68666),t=o(52754),i=o(27378),s=o(74974),l=o(43465),d=o(28356),c=[{lang:"en",label:"English"},{lang:"de",label:"Deutsch"}];function p(){var e=(0,i.useState)(d.T),a=e[0],o=e[1];return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(t.ZP,{cellPlugins:l.C,value:a,lang:c[0].lang,onChange:o,languages:c}),(0,r.jsx)(n.Z,{onClick:function(){return o(d.T)},children:"Reset"})]})}}},function(e){e.O(0,[9071,8751,8371,3554,6693,9228,4875,3202,4595,1499,2754,8650,3465,8356,9774,2888,179],(function(){return a=49536,e(e.s=a);var a}));var a=e.O();_N_E=a}]);