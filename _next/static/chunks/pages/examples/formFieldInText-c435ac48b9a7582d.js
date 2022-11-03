(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2439],{15830:function(e,t,o){"use strict";o.d(t,{Z:function(){return C}});var a=o(30808),n=o(25773),r=o(27378),i=o(38944),l=o(81923),s=o(82267),d=o(7818),c=o(95147),p=o(93596),u=o(25482),h=o(89090),v=o(44124),m=o(6749);function b(e){return(0,m.Z)("MuiButton",e)}var x=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var f=r.createContext({}),g=o(24246);const y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,h.Z)(o.color)}`],t[`size${(0,h.Z)(o.size)}`],t[`${o.variant}Size${(0,h.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,a;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(a=e.palette).getContrastText)?void 0:o.call(a,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}})),w=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e)))),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))));var C=r.forwardRef((function(e,t){const o=r.useContext(f),d=(0,l.Z)(o,e),c=(0,p.Z)({props:d,name:"MuiButton"}),{children:u,color:v="primary",component:m="button",className:x,disabled:S=!1,disableElevation:C=!1,disableFocusRipple:$=!1,endIcon:I,focusVisibleClassName:O,fullWidth:P=!1,size:k="medium",startIcon:F,type:R,variant:j="text"}=c,N=(0,a.Z)(c,y),E=(0,n.Z)({},c,{color:v,component:m,disabled:S,disableElevation:C,disableFocusRipple:$,fullWidth:P,size:k,type:R,variant:j}),T=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:r,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(r)}`,`${i}Size${(0,h.Z)(r)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(r)}`]},c=(0,s.Z)(d,b,l);return(0,n.Z)({},l,c)})(E),W=F&&(0,g.jsx)(w,{className:T.startIcon,ownerState:E,children:F}),_=I&&(0,g.jsx)(Z,{className:T.endIcon,ownerState:E,children:I});return(0,g.jsxs)(z,(0,n.Z)({ownerState:E,className:(0,i.default)(o.className,T.root,x),component:m,disabled:S,focusRipple:!$,focusVisibleClassName:(0,i.default)(T.focusVisible,O),ref:t,type:R},N,{classes:T,children:[W,u,_]}))}))},96861:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/formFieldInText",function(){return o(17133)}])},17133:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return x}});var a=o(9722),n=o(70169),r=o(24246),i=o(27378),l=o(12217),s=o(15830),d=o(52754),c=o(48650),p=o(60686),u=o(74974),h=p.Z({Component:function(e){return(0,r.jsx)("input",{placeholder:e.placeholder,type:"text",onChange:function(t){return console.log("filled out field "+e.fieldName+", with "+t.target.value)}})},controls:{type:"autoform",schema:{properties:{fieldName:{type:"string"},placeholder:{type:"string"}}}},addHoverButton:!0,addToolbarButton:!0,type:"FormField",object:"inline",isVoid:!0,icon:(0,r.jsx)("span",{children:"FormField"}),label:"FormField"}),v=(0,c.ZP)((function(e){return(0,n.Z)((0,a.Z)({},e),{plugins:(0,n.Z)((0,a.Z)({},e.plugins),{form:{formField:h}})})})),m=[v],b=(0,l.y)({rows:[[{plugin:v,data:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Hello, my Name is "},{type:"FormField",data:{fieldName:"firstname",placeholder:"fill Firstname"},children:[{text:""}]},{text:" "},{type:"FormField",data:{fieldName:"lastname",placeholder:"fill Lastname"},children:[{text:""}]},{text:" and i work as a "},{type:"FormField",data:{fieldName:"jobDescription",placeholder:"Job Description"},children:[{text:""}]},{text:"."}]}]}}]]},{cellPlugins:m,lang:"default"});function x(){var e=(0,i.useState)(!1),t=e[0],o=e[1],a=(0,i.useState)(b),n=a[0],l=a[1];return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(s.Z,{onClick:function(){return o(!t)},children:"Toggle read only"}),(0,r.jsx)(d.ZP,{readOnly:t,cellPlugins:m,value:n,onChange:l})]})}},70169:function(e,t,o){"use strict";function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}o.d(t,{Z:function(){return a}})}},function(e){e.O(0,[4879,5482,6597,2983,6333,1255,6948,3202,4025,2754,8650,3427,9774,2888,179],(function(){return t=96861,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=formFieldInText-c435ac48b9a7582d.js.map