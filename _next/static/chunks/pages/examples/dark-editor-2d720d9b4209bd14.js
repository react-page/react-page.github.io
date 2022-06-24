(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5248],{68666:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var a=t(14484),n=t(97308),o=t(27378),i=t(38944),l=t(81923),s=t(82267),c=t(7818),d=t(25608),p=t(22399),u=t(18751),h=t(51640),x=t(6749);function m(e){return(0,x.Z)("MuiButton",e)}var v=(0,t(44124).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var f=o.createContext({}),b=t(24246);const g=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`${t.variant}${(0,h.Z)(t.color)}`],r[`size${(0,h.Z)(t.size)}`],r[`${t.variant}Size${(0,h.Z)(t.size)}`],"inherit"===t.color&&r.colorInherit,t.disableElevation&&r.disableElevation,t.fullWidth&&r.fullWidth]}})((({theme:e,ownerState:r})=>{var t,a;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===r.variant&&"inherit"!==r.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===r.variant&&"inherit"!==r.color&&{border:`1px solid ${(e.vars||e).palette[r.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===r.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===r.variant&&"inherit"!==r.color&&{backgroundColor:(e.vars||e).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[r.color].main}}),"&:active":(0,n.Z)({},"contained"===r.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${v.focusVisible}`]:(0,n.Z)({},"contained"===r.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${v.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===r.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===r.variant&&"secondary"===r.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===r.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===r.variant&&{padding:"6px 8px"},"text"===r.variant&&"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main},"outlined"===r.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===r.variant&&"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[r.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[r.color].main,.5)}`},"contained"===r.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(a=e.palette).getContrastText)?void 0:t.call(a,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===r.variant&&"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].contrastText,backgroundColor:(e.vars||e).palette[r.color].main},"inherit"===r.color&&{color:"inherit",borderColor:"currentColor"},"small"===r.size&&"text"===r.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===r.size&&"text"===r.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===r.size&&"outlined"===r.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===r.size&&"outlined"===r.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===r.size&&"contained"===r.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===r.size&&"contained"===r.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},r.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),j=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.startIcon,r[`iconSize${(0,h.Z)(t.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),S=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.endIcon,r[`iconSize${(0,h.Z)(t.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var w=o.forwardRef((function(e,r){const t=o.useContext(f),c=(0,l.Z)(t,e),d=(0,p.Z)({props:c,name:"MuiButton"}),{children:u,color:x="primary",component:v="button",className:y,disabled:w=!1,disableElevation:z=!1,disableFocusRipple:C=!1,endIcon:k,focusVisibleClassName:P,fullWidth:$=!1,size:I="medium",startIcon:R,type:O,variant:E="text"}=d,M=(0,a.Z)(d,g),T=(0,n.Z)({},d,{color:x,component:v,disabled:w,disableElevation:z,disableFocusRipple:C,fullWidth:$,size:I,type:O,variant:E}),N=(e=>{const{color:r,disableElevation:t,fullWidth:a,size:o,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,h.Z)(r)}`,`size${(0,h.Z)(o)}`,`${i}Size${(0,h.Z)(o)}`,"inherit"===r&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(o)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(o)}`]},d=(0,s.Z)(c,m,l);return(0,n.Z)({},l,d)})(T),_=R&&(0,b.jsx)(j,{className:N.startIcon,ownerState:T,children:R}),W=k&&(0,b.jsx)(S,{className:N.endIcon,ownerState:T,children:k});return(0,b.jsxs)(Z,(0,n.Z)({ownerState:T,className:(0,i.default)(y,t.className),component:v,disabled:w,focusRipple:!C,focusVisibleClassName:(0,i.default)(N.focusVisible,P),ref:r,type:O},M,{classes:N,children:[_,u,W]}))}))},38143:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/dark-editor",function(){return t(92064)}])},8044:function(e,r,t){"use strict";t.d(r,{Z:function(){return k}});var a=t(24246),n=t(15366),o=t(59522),i=t(77545),l=t(25310),s=t(86597),c=t(79119),d=t(30004),p=t(44468),u=t(92384),h=t(2750),x=t(52754),m=t(27378),v=t(10872),f=t(88483),b=t(12577),g=t(79894),y=t(11386),Z=t(12211),j=t(63221),S=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(g.default,{passHref:!0,href:"/docs",children:(0,a.jsxs)(f.ZP,{component:"a",children:[(0,a.jsx)(Z.Z,{children:(0,a.jsx)(y.Z,{})}),(0,a.jsx)(b.Z,{primary:"Docs"})]})}),(0,a.jsx)(g.default,{passHref:!0,href:"https://github.com/react-page/react-page",children:(0,a.jsxs)(f.ZP,{component:"a",children:[(0,a.jsx)(Z.Z,{children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)(b.Z,{primary:"Github"})]})}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(g.default,{passHref:!0,href:"/",children:(0,a.jsx)(f.ZP,{component:"a",children:(0,a.jsx)(b.Z,{primary:"Demo"})})}),(0,a.jsx)(g.default,{passHref:!0,href:"/readonly",children:(0,a.jsx)(f.ZP,{component:"a",children:(0,a.jsx)(b.Z,{primary:"Read only"})})}),(0,a.jsx)(g.default,{passHref:!0,href:"/empty",children:(0,a.jsx)(f.ZP,{component:"a",children:(0,a.jsx)(b.Z,{primary:"Empty editor"})})}),(0,a.jsx)(g.default,{passHref:!0,href:"/examples/reactadmin",children:(0,a.jsx)(f.ZP,{component:"a",children:(0,a.jsx)(b.Z,{primary:"React Admin example"})})}),(0,a.jsx)(c.Z,{}),(0,a.jsxs)(v.Z,{children:[(0,a.jsx)(g.default,{passHref:!0,href:"/old/demo",children:(0,a.jsx)(f.ZP,{component:"a",children:(0,a.jsx)(b.Z,{primary:"Old demo (v0)"})})}),(0,a.jsx)(g.default,{passHref:!0,href:"/old/fromhtml",children:(0,a.jsx)(f.ZP,{component:"a",children:(0,a.jsx)(b.Z,{primary:"Old import-from-html-Demo"})})})]}),(0,a.jsx)(c.Z,{}),(0,a.jsxs)(v.Z,{children:[(0,a.jsx)(f.ZP,{component:"a",href:"https://react-page.github.io/",children:(0,a.jsx)(b.Z,{primary:"Latest version"})}),(0,a.jsx)(f.ZP,{component:"a",href:"https://react-page.github.io/beta",children:(0,a.jsx)(b.Z,{primary:"beta version"})})]})]})};function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function z(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(o.push(a.value),!r||o.length!==r);i=!0);}catch(s){l=!0,n=s}finally{try{i||null==t.return||t.return()}finally{if(l)throw n}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return w(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=240,k=function(e){var r=e.children,t=z(m.useState(!1),2),v=t[0],f=t[1],b=function(){f(!v)},g=(0,a.jsxs)("div",{children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(S,{})]});return(0,a.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,a.jsx)(s.ZP,{}),(0,a.jsx)(i.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(C,"px)")},ml:{sm:"".concat(C,"px")}},children:(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(p.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:b,sx:{mr:2,display:{sm:"none"}},children:(0,a.jsx)(n.Z,{})}),(0,a.jsxs)(h.Z,{variant:"h6",noWrap:!0,component:"div",children:["React Page ",x.q4]}),(0,a.jsx)(p.Z,{href:"https://github.com/react-page/react-page",target:"_blank",color:"inherit","aria-label":"open drawer",sx:{marginLeft:"auto"},children:(0,a.jsx)(o.Z,{})})]})}),(0,a.jsxs)(l.Z,{component:"nav",sx:{width:{sm:C},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,a.jsx)(d.ZP,{variant:"temporary",open:v,onClose:b,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:C}},children:g}),(0,a.jsx)(d.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{zIndex:10,boxSizing:"border-box",width:C}},open:!0,children:g})]}),(0,a.jsxs)(l.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(C,"px)")},background:function(e){return e.palette.grey[100]}},children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)(l.Z,{sx:{flexGrow:1,p:4,backgroundColor:"white",maxWidth:1280,margin:"auto"},children:r})]})]})}},92064:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var a=t(24246),n=t(90770),o=t(52754),i=t(89148),l=t(27378),s=t(49e3),c=t(8044),d=t(42905),p=t(68666);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var h=[{lang:"en",label:"English"},{lang:"de",label:"Deutsch"}],x=(0,d.Z)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){u(e,r,t[r])}))}return e}({},n.T,{palette:{mode:"dark"}}));function m(){var e=(0,l.useState)(i.T),r=e[0],t=e[1];return(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(o.ZP,{cellPlugins:s.C,value:r,lang:h[0].lang,onChange:t,languages:h,uiTheme:x}),(0,a.jsx)(p.Z,{onClick:function(){return t(i.T)},children:"Reset"})]})}},90770:function(e,r,t){"use strict";t.d(r,{T:function(){return n},u:function(){return o}});var a=t(42905),n={components:{MuiTextField:{defaultProps:{variant:"standard"}}}},o=(0,a.Z)(n)}},function(e){e.O(0,[9071,8751,8371,3554,7732,1593,5396,5659,6841,2754,8650,9e3,9148,9774,2888,179],(function(){return r=38143,e(e.s=r);var r}));var r=e.O();_N_E=r}]);