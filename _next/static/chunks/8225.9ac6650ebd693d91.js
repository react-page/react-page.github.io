(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8225],{58772:function(e,t,r){"use strict";var n=r(90331);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},23615:function(e,t,r){e.exports=r(58772)()},90331:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},68225:function(e,t,r){var n,o,a,i;i=function(e,t,r,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}Object.defineProperty(e,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(e,{BlockMath:()=>p,InlineMath:()=>f}),t=i(t),r=o(r),n=o(n);const u=(e,{displayMode:o})=>{const a=({children:r,errorColor:a,math:i,renderError:u})=>{const c=null!==i&&void 0!==i?i:r,{html:l,error:s}=(0,t.useMemo)((()=>{try{return{html:n.default.renderToString(c,{displayMode:o,errorColor:a,throwOnError:!!u}),error:void 0}}catch(s){if(s instanceof n.default.ParseError||s instanceof TypeError)return{error:s};throw s}}),[c,a,u]);return s?u?u(s):t.default.createElement(e,{html:`${s.message}`}):t.default.createElement(e,{html:l})};return a.propTypes={children:r.default.string,errorColor:r.default.string,math:r.default.string,renderError:r.default.func},a},c={html:r.default.string.isRequired},l=({html:e})=>t.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:e}});l.propTypes=c;const s=({html:e})=>t.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:e}});s.propTypes=c;const p=u(l,{displayMode:!0}),f=u(s,{displayMode:!1})},"object"===typeof e.exports?i(t,r(27378),r(23615),r(77651)):(o=[t,r(27378),r(23615),r(77651)],void 0===(a="function"===typeof(n=i)?n.apply(t,o):n)||(e.exports=a))}}]);