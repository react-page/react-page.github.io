(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9492],{16655:function(e,t,o){"use strict";var n=o(73203);t.Z=void 0;var r=n(o(19124)),i=o(24246),a=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=a},51807:function(e,t,o){"use strict";var n=o(73203);t.Z=void 0;var r=n(o(19124)),i=o(24246),a=(0,r.default)((0,i.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.Z=a},19124:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=o(33545)},68666:function(e,t,o){"use strict";o.d(t,{Z:function(){return z}});var n=o(30808),r=o(25773),i=o(27378),a=o(38944),l=o(81923),s=o(82267),c=o(7818),d=o(25608),u=o(22399),p=o(18751),v=o(51640),f=o(6749);function m(e){return(0,f.Z)("MuiButton",e)}var h=(0,o(44124).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=i.createContext({}),g=o(24246);const Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,v.Z)(o.color)}`],t[`size${(0,v.Z)(o.size)}`],t[`${o.variant}Size${(0,v.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,n;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${h.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${h.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(n=e.palette).getContrastText)?void 0:o.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${h.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${h.disabled}`]:{boxShadow:"none"}})),w=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},x(e)))),y=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},x(e))));var z=i.forwardRef((function(e,t){const o=i.useContext(b),c=(0,l.Z)(o,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:f="primary",component:h="button",className:x,disabled:z=!1,disableElevation:C=!1,disableFocusRipple:k=!1,endIcon:$,focusVisibleClassName:M,fullWidth:R=!1,size:W="medium",startIcon:P,type:I,variant:N="text"}=d,B=(0,n.Z)(d,Z),D=(0,r.Z)({},d,{color:f,component:h,disabled:z,disableElevation:C,disableFocusRipple:k,fullWidth:R,size:W,type:I,variant:N}),T=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:i,variant:a,classes:l}=e,c={root:["root",a,`${a}${(0,v.Z)(t)}`,`size${(0,v.Z)(i)}`,`${a}Size${(0,v.Z)(i)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(i)}`]},d=(0,s.Z)(c,m,l);return(0,r.Z)({},l,d)})(D),E=P&&(0,g.jsx)(w,{className:T.startIcon,ownerState:D,children:P}),j=$&&(0,g.jsx)(y,{className:T.endIcon,ownerState:D,children:$});return(0,g.jsxs)(S,(0,r.Z)({ownerState:D,className:(0,a.default)(x,o.className),component:h,disabled:z,focusRipple:!k,focusVisibleClassName:(0,a.default)(T.focusVisible,M),ref:t,type:I},B,{classes:T,children:[E,p,j]}))}))},24473:function(e,t,o){"use strict";o.d(t,{Z:function(){return $}});var n=o(30808),r=o(25773),i=o(27378),a=o(38944),l=o(82267),s=o(56320),c=o(51640),d=o(63554),u=o(69761),p=o(74919),v=o(22399),f=o(25608),m=o(6749);function h(e){return(0,m.Z)("MuiDialog",e)}var b=(0,o(44124).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var g=(0,i.createContext)({}),Z=o(51093),x=o(94776),S=o(24246);const w=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],y=(0,f.ZP)(Z.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),z=(0,f.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),C=(0,f.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.container,t[`scroll${(0,c.Z)(o.scroll)}`]]}})((({ownerState:e})=>(0,r.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),k=(0,f.ZP)(p.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`scrollPaper${(0,c.Z)(o.scroll)}`],t[`paperWidth${(0,c.Z)(String(o.maxWidth))}`],o.fullWidth&&t.paperFullWidth,o.fullScreen&&t.paperFullScreen]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${b.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${b.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${b.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})));var $=i.forwardRef((function(e,t){const o=(0,v.Z)({props:e,name:"MuiDialog"}),d=(0,x.Z)(),f={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":m,"aria-labelledby":b,BackdropComponent:Z,BackdropProps:$,children:M,className:R,disableEscapeKeyDown:W=!1,fullScreen:P=!1,fullWidth:I=!1,maxWidth:N="sm",onBackdropClick:B,onClose:D,open:T,PaperComponent:E=p.Z,PaperProps:j={},scroll:F="paper",TransitionComponent:L=u.Z,transitionDuration:V=f,TransitionProps:_}=o,A=(0,n.Z)(o,w),O=(0,r.Z)({},o,{disableEscapeKeyDown:W,fullScreen:P,fullWidth:I,maxWidth:N,scroll:F}),q=(e=>{const{classes:t,scroll:o,maxWidth:n,fullWidth:r,fullScreen:i}=e,a={root:["root"],container:["container",`scroll${(0,c.Z)(o)}`],paper:["paper",`paperScroll${(0,c.Z)(o)}`,`paperWidth${(0,c.Z)(String(n))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return(0,l.Z)(a,h,t)})(O),Y=i.useRef(),H=(0,s.Z)(b),K=i.useMemo((()=>({titleId:H})),[H]);return(0,S.jsx)(z,(0,r.Z)({className:(0,a.default)(q.root,R),BackdropProps:(0,r.Z)({transitionDuration:V,as:Z},$),closeAfterTransition:!0,BackdropComponent:y,disableEscapeKeyDown:W,onClose:D,open:T,ref:t,onClick:e=>{Y.current&&(Y.current=null,B&&B(e),D&&D(e,"backdropClick"))},ownerState:O},A,{children:(0,S.jsx)(L,(0,r.Z)({appear:!0,in:T,timeout:V,role:"presentation"},_,{children:(0,S.jsx)(C,{className:(0,a.default)(q.container),onMouseDown:e=>{Y.current=e.target===e.currentTarget},ownerState:O,children:(0,S.jsx)(k,(0,r.Z)({as:E,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":H},j,{className:(0,a.default)(q.paper,j.className),ownerState:O,children:(0,S.jsx)(g.Provider,{value:K,children:M})}))})}))}))}))},25996:function(e,t,o){"use strict";o.d(t,{Z:function(){return m}});var n=o(30808),r=o(25773),i=o(27378),a=o(38944),l=o(82267),s=o(25608),c=o(22399),d=o(6749);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,o(44124).Z)("MuiDialogActions",["root","spacing"]);var p=o(24246);const v=["className","disableSpacing"],f=(0,s.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,r.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var m=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:s=!1}=o,d=(0,n.Z)(o,v),m=(0,r.Z)({},o,{disableSpacing:s}),h=(e=>{const{classes:t,disableSpacing:o}=e,n={root:["root",!o&&"spacing"]};return(0,l.Z)(n,u,t)})(m);return(0,p.jsx)(f,(0,r.Z)({className:(0,a.default)(h.root,i),ownerState:m,ref:t},d))}))},76607:function(e,t,o){"use strict";o.d(t,{Z:function(){return b}});var n=o(30808),r=o(25773),i=o(27378),a=o(38944),l=o(82267),s=o(25608),c=o(22399),d=o(6749),u=o(44124);function p(e){return(0,d.Z)("MuiDialogContent",e)}(0,u.Z)("MuiDialogContent",["root","dividers"]);var v=(0,u.Z)("MuiDialogTitle",["root"]),f=o(24246);const m=["className","dividers"],h=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dividers&&t.dividers]}})((({theme:e,ownerState:t})=>(0,r.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${v.root} + &`]:{paddingTop:0}})));var b=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiDialogContent"}),{className:i,dividers:s=!1}=o,d=(0,n.Z)(o,m),u=(0,r.Z)({},o,{dividers:s}),v=(e=>{const{classes:t,dividers:o}=e,n={root:["root",o&&"dividers"]};return(0,l.Z)(n,p,t)})(u);return(0,f.jsx)(h,(0,r.Z)({className:(0,a.default)(v.root,i),ownerState:u,ref:t},d))}))},10872:function(e,t,o){"use strict";o.d(t,{Z:function(){return h}});var n=o(30808),r=o(25773),i=o(27378),a=o(38944),l=o(82267),s=o(25608),c=o(22399),d=o(78849),u=o(6749);function p(e){return(0,u.Z)("MuiList",e)}(0,o(44124).Z)("MuiList",["root","padding","dense","subheader"]);var v=o(24246);const f=["children","className","component","dense","disablePadding","subheader"],m=(0,s.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})((({ownerState:e})=>(0,r.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})));var h=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiList"}),{children:s,className:u,component:h="ul",dense:b=!1,disablePadding:g=!1,subheader:Z}=o,x=(0,n.Z)(o,f),S=i.useMemo((()=>({dense:b})),[b]),w=(0,r.Z)({},o,{component:h,dense:b,disablePadding:g}),y=(e=>{const{classes:t,disablePadding:o,dense:n,subheader:r}=e,i={root:["root",!o&&"padding",n&&"dense",r&&"subheader"]};return(0,l.Z)(i,p,t)})(w);return(0,v.jsx)(d.Z.Provider,{value:S,children:(0,v.jsxs)(m,(0,r.Z)({as:h,className:(0,a.default)(y.root,u),ref:t,ownerState:w},x,{children:[Z,s]}))})}))},78849:function(e,t,o){"use strict";const n=o(27378).createContext({});t.Z=n},65698:function(e,t,o){"use strict";var n=o(36397);t.Z=n.Z},76576:function(e,t,o){"use strict";o.d(t,{Z:function(){return g}});var n=o(25773),r=o(27378),i=o(30808),a=o(38944),l=o(82267),s=o(51640),c=o(22399),d=o(25608),u=o(6749);function p(e){return(0,u.Z)("MuiSvgIcon",e)}(0,o(44124).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=o(24246);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],m=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"inherit"!==o.color&&t[`color${(0,s.Z)(o.color)}`],t[`fontSize${(0,s.Z)(o.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var o,n,r,i,a,l,s,c,d,u,p,v,f,m,h,b,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(o=e.transitions)||null==(n=o.create)?void 0:n.call(o,"fill",{duration:null==(r=e.transitions)||null==(i=r.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(l=a.pxToRem)?void 0:l.call(a,20))||"1.25rem",medium:(null==(s=e.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(d=e.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875"}[t.fontSize],color:null!=(p=null==(v=(e.vars||e).palette)||null==(f=v[t.color])?void 0:f.main)?p:{action:null==(m=(e.vars||e).palette)||null==(h=m.action)?void 0:h.active,disabled:null==(b=(e.vars||e).palette)||null==(g=b.action)?void 0:g.disabled,inherit:void 0}[t.color]}})),h=r.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:r,className:d,color:u="inherit",component:h="svg",fontSize:b="medium",htmlColor:g,inheritViewBox:Z=!1,titleAccess:x,viewBox:S="0 0 24 24"}=o,w=(0,i.Z)(o,f),y=(0,n.Z)({},o,{color:u,component:h,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:Z,viewBox:S}),z={};Z||(z.viewBox=S);const C=(e=>{const{color:t,fontSize:o,classes:n}=e,r={root:["root","inherit"!==t&&`color${(0,s.Z)(t)}`,`fontSize${(0,s.Z)(o)}`]};return(0,l.Z)(r,p,n)})(y);return(0,v.jsxs)(m,(0,n.Z)({as:h,className:(0,a.default)(C.root,d),ownerState:y,focusable:"false",color:g,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:t},z,w,{children:[r,x?(0,v.jsx)("title",{children:x}):null]}))}));h.muiName="SvgIcon";var b=h;function g(e,t){const o=(o,r)=>(0,v.jsx)(b,(0,n.Z)({"data-testid":`${t}Icon`,ref:r},o,{children:e}));return o.muiName=b.muiName,r.memo(r.forwardRef(o))}},77999:function(e,t,o){"use strict";var n=o(71203);t.Z=n.Z},33545:function(e,t,o){"use strict";o.r(t),o.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return a.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return v},unstable_ClassNameGenerator:function(){return S},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return h},useControlled:function(){return b.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return x.Z}});var n=o(70544),r=o(51640),i=o(65698),a=o(76576),l=o(77999);var s=function(e,t){return()=>null},c=o(74942),d=o(2444),u=o(24255);o(25773);var p=function(e,t){return()=>null},v=o(40514).Z,f=o(16758),m=o(56839);var h=function(e,t,o,n,r){return null},b=o(18817),g=o(67151),Z=o(51183),x=o(1328);const S={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),n.Z.configure(e)}}},74942:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(27378);var r=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},2444:function(e,t,o){"use strict";var n=o(70624);t.Z=n.Z},24255:function(e,t,o){"use strict";var n=o(89275);t.Z=n.Z},18817:function(e,t,o){"use strict";var n=o(45566);t.Z=n.Z},16758:function(e,t,o){"use strict";var n=o(18030);t.Z=n.Z},56839:function(e,t,o){"use strict";var n=o(56320);t.Z=n.Z},36397:function(e,t,o){"use strict";function n(...e){return e.reduce(((e,t)=>null==t?e:function(...o){e.apply(this,o),t.apply(this,o)}),(()=>{}))}o.d(t,{Z:function(){return n}})},71203:function(e,t,o){"use strict";function n(e,t=166){let o;function n(...n){clearTimeout(o),o=setTimeout((()=>{e.apply(this,n)}),t)}return n.clear=()=>{clearTimeout(o)},n}o.d(t,{Z:function(){return n}})},70624:function(e,t,o){"use strict";function n(e){return e&&e.ownerDocument||document}o.d(t,{Z:function(){return n}})},89275:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(70624);function r(e){return(0,n.Z)(e).defaultView||window}},45566:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(27378);function r({controlled:e,default:t,name:o,state:r="value"}){const{current:i}=n.useRef(void 0!==e),[a,l]=n.useState(t);return[i?e:a,n.useCallback((e=>{i||l(e)}),[])]}},56320:function(e,t,o){"use strict";var n;o.d(t,{Z:function(){return l}});var r=o(27378);let i=0;const a=(n||(n=o.t(r,2))).useId;function l(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,o]=r.useState(e),n=e||t;return r.useEffect((()=>{null==t&&(i+=1,o(`mui-${i}`))}),[t]),n}(e)}},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);