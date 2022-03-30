(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4026],{58772:function(e,t,r){"use strict";var n=r(90331);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},23615:function(e,t,r){e.exports=r(58772)()},90331:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},56377:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=(n=r(27378))&&n.__esModule?n:{default:n},a=r(11418),i=r(40203),s=r(82404);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return p(f(t=e.call.apply(e,[this].concat(n))||this),"state",void 0),p(f(t),"lastHandleRect",null),p(f(t),"slack",null),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=n.prototype;return s.componentWillUnmount=function(){this.resetData()},s.lockAspectRatio=function(e,t,r){return[e=(t=e/r)*r,t]},s.resetData=function(){this.lastHandleRect=this.slack=null},s.runConstraints=function(e,t){var r=[this.props.minConstraints,this.props.maxConstraints],n=r[0],o=r[1];if(!n&&!o)return[e,t];if(this.props.lockAspectRatio)if(t===this.props.height){var a=this.props.width/this.props.height;e=(t=e/a)*a}else{var i=this.props.height/this.props.width;t=(e=t/i)*i}var s=e,u=t,l=this.slack||[0,0],c=l[0],f=l[1];return e+=c,t+=f,n&&(e=Math.max(n[0],e),t=Math.max(n[1],t)),o&&(e=Math.min(o[0],e),t=Math.min(o[1],t)),this.slack=[c+(s-e),f+(u-t)],[e,t]},s.resizeHandler=function(e,t){var r=this;return function(n,o){var a=o.node,i=o.deltaX,s=o.deltaY;"onResizeStart"===e&&r.resetData();var u=("both"===r.props.axis||"x"===r.props.axis)&&"n"!==t&&"s"!==t,l=("both"===r.props.axis||"y"===r.props.axis)&&"e"!==t&&"w"!==t;if(u||l){var c=t[0],f=t[t.length-1],p=a.getBoundingClientRect();if(null!=r.lastHandleRect){if("w"===f)i+=p.left-r.lastHandleRect.left;if("n"===c)s+=p.top-r.lastHandleRect.top}r.lastHandleRect=p,"w"===f&&(i=-i),"n"===c&&(s=-s);var d=r.props.width+(u?i/r.props.transformScale:0),h=r.props.height+(l?s/r.props.transformScale:0),g=r.runConstraints(d,h);d=g[0],h=g[1];var y=d!==r.props.width||h!==r.props.height,b="function"===typeof r.props[e]?r.props[e]:null;b&&!("onResize"===e&&!y)&&("function"===typeof n.persist&&n.persist(),b(n,{node:a,size:{width:d,height:h},handle:t})),"onResizeStop"===e&&r.resetData()}}},s.renderResizeHandle=function(e){var t=this.props.handle;return t?"function"===typeof t?t(e):t:o.default.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+e})},s.render=function(){var e=this,t=this.props,r=t.children,n=t.className,s=t.draggableOpts,l=(t.width,t.height,t.handle,t.handleSize,t.lockAspectRatio,t.axis,t.minConstraints,t.maxConstraints,t.onResize,t.onResizeStop,t.onResizeStart,t.resizeHandles),f=(t.transformScale,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"]));return(0,i.cloneElement)(r,c(c({},f),{},{className:(n?n+" ":"")+"react-resizable",children:[].concat(r.props.children,l.map((function(t){return o.default.createElement(a.DraggableCore,u({},s,{key:"resizableHandle-"+t,onStop:e.resizeHandler("onResizeStop",t),onStart:e.resizeHandler("onResizeStart",t),onDrag:e.resizeHandler("onResize",t)}),e.renderResizeHandle(t))})))}))},n}(o.default.Component);t.default=d,p(d,"propTypes",s.resizableProps),p(d,"defaultProps",{handleSize:[20,20],lockAspectRatio:!1,axis:"both",minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1})},86060:function(e,t,r){"use strict";t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(27378)),o=s(r(23615)),a=s(r(56377)),i=r(82404);function s(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return d(p(t=e.call.apply(e,[this].concat(n))||this),"state",{width:t.props.width,height:t.props.height,propsWidth:t.props.width,propsHeight:t.props.height}),d(p(t),"onResize",(function(e,r){var n=r.size;t.props.onResize?(e.persist&&e.persist(),t.setState(n,(function(){return t.props.onResize&&t.props.onResize(e,r)}))):t.setState(n)})),t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.getDerivedStateFromProps=function(e,t){return t.propsWidth!==e.width||t.propsHeight!==e.height?{width:e.width,height:e.height,propsWidth:e.width,propsHeight:e.height}:null},o.prototype.render=function(){var e=this.props,t=e.handle,r=e.handleSize,o=(e.onResize,e.onResizeStart),i=e.onResizeStop,s=e.draggableOpts,u=e.minConstraints,c=e.maxConstraints,p=e.lockAspectRatio,d=e.axis,h=(e.width,e.height,e.resizeHandles),g=e.style,y=e.transformScale,b=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"]);return n.createElement(a.default,{axis:d,draggableOpts:s,handle:t,handleSize:r,height:this.state.height,lockAspectRatio:p,maxConstraints:c,minConstraints:u,onResizeStart:o,onResize:this.onResize,onResizeStop:i,resizeHandles:h,transformScale:y,width:this.state.width},n.createElement("div",l({},b,{style:f(f({},g),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},o}(n.Component);t.default=h,d(h,"propTypes",f(f({},i.resizableProps),{},{children:o.default.element}))},82404:function(e,t,r){"use strict";t.__esModule=!0,t.resizableProps=void 0;var n,o=(n=r(23615))&&n.__esModule?n:{default:n};r(11418);var a={axis:o.default.oneOf(["both","x","y","none"]),className:o.default.string,children:o.default.element.isRequired,draggableOpts:o.default.shape({allowAnyClick:o.default.bool,cancel:o.default.string,children:o.default.node,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:o.default.node,grid:o.default.arrayOf(o.default.number),handle:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number}),height:o.default.number.isRequired,handle:o.default.oneOfType([o.default.node,o.default.func]),handleSize:o.default.arrayOf(o.default.number),lockAspectRatio:o.default.bool,maxConstraints:o.default.arrayOf(o.default.number),minConstraints:o.default.arrayOf(o.default.number),onResizeStop:o.default.func,onResizeStart:o.default.func,onResize:o.default.func,resizeHandles:o.default.arrayOf(o.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:o.default.number,width:o.default.number.isRequired};t.resizableProps=a},40203:function(e,t,r){"use strict";t.__esModule=!0,t.cloneElement=function(e,t){t.style&&e.props.style&&(t.style=i(i({},e.props.style),t.style));t.className&&e.props.className&&(t.className=e.props.className+" "+t.className);return o.default.cloneElement(e,t)};var n,o=(n=r(27378))&&n.__esModule?n:{default:n};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},34026:function(e,t,r){"use strict";e.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")},e.exports.Resizable=r(56377).default,e.exports.ResizableBox=r(86060).default},98466:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return f.default}}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r(27378)),a=h(r(23615)),i=h(r(31542)),s=h(r(38944)),u=r(36607),l=r(58100),c=r(95309),f=h(r(59078)),p=h(r(99012)),d=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function h(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){s=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=R(e);if(t){var o=R(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return P(this,r)}}function P(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(c,e);var t,r,n,a=j(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),C(x(t=a.call(this,e)),"onDragStart",(function(e,r){if((0,p.default)("Draggable: onDragStart: %j",r),!1===t.props.onStart(e,(0,l.createDraggableData)(x(t),r)))return!1;t.setState({dragging:!0,dragged:!0})})),C(x(t),"onDrag",(function(e,r){if(!t.state.dragging)return!1;(0,p.default)("Draggable: onDrag: %j",r);var n=(0,l.createDraggableData)(x(t),r),o={x:n.x,y:n.y};if(t.props.bounds){var a=o.x,i=o.y;o.x+=t.state.slackX,o.y+=t.state.slackY;var s=O((0,l.getBoundPosition)(x(t),o.x,o.y),2),u=s[0],c=s[1];o.x=u,o.y=c,o.slackX=t.state.slackX+(a-o.x),o.slackY=t.state.slackY+(i-o.y),n.x=o.x,n.y=o.y,n.deltaX=o.x-t.state.x,n.deltaY=o.y-t.state.y}if(!1===t.props.onDrag(e,n))return!1;t.setState(o)})),C(x(t),"onDragStop",(function(e,r){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,(0,l.createDraggableData)(x(t),r)))return!1;(0,p.default)("Draggable: onDragStop: %j",r);var n={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var o=t.props.position,a=o.x,i=o.y;n.x=a,n.y=i}t.setState(n)})),t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:v({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return t=c,n=[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.position,n=t.prevPropsPosition;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,p.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:v({},r)})}}],(r=[{key:"componentDidMount",value:function(){"undefined"!==typeof window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current)&&void 0!==e?e:i.default.findDOMNode(this)}},{key:"render",value:function(){var e,t=this.props,r=(t.axis,t.bounds,t.children),n=t.defaultPosition,a=t.defaultClassName,i=t.defaultClassNameDragging,c=t.defaultClassNameDragged,p=t.position,h=t.positionOffset,g=(t.scale,b(t,d)),m={},O=null,w=!Boolean(p)||this.state.dragging,S=p||n,D={x:(0,l.canDragX)(this)&&w?this.state.x:S.x,y:(0,l.canDragY)(this)&&w?this.state.y:S.y};this.state.isElementSVG?O=(0,u.createSVGTransform)(D,h):m=(0,u.createCSSTransform)(D,h);var j=(0,s.default)(r.props.className||"",a,(C(e={},i,this.state.dragging),C(e,c,this.state.dragged),e));return o.createElement(f.default,y({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(r),{className:j,style:v(v({},r.props.style),m),transform:O}))}}])&&S(t.prototype,r),n&&S(t,n),c}(o.Component);t.default=E,C(E,"displayName","Draggable"),C(E,"propTypes",v(v({},f.default.propTypes),{},{axis:a.default.oneOf(["both","x","y","none"]),bounds:a.default.oneOfType([a.default.shape({left:a.default.number,right:a.default.number,top:a.default.number,bottom:a.default.number}),a.default.string,a.default.oneOf([!1])]),defaultClassName:a.default.string,defaultClassNameDragging:a.default.string,defaultClassNameDragged:a.default.string,defaultPosition:a.default.shape({x:a.default.number,y:a.default.number}),positionOffset:a.default.shape({x:a.default.oneOfType([a.default.number,a.default.string]),y:a.default.oneOfType([a.default.number,a.default.string])}),position:a.default.shape({x:a.default.number,y:a.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe})),C(E,"defaultProps",v(v({},f.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))},59078:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r(27378)),a=f(r(23615)),i=f(r(31542)),s=r(36607),u=r(58100),l=r(95309),c=f(r(99012));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){s=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D={start:"touchstart",move:"touchmove",stop:"touchend"},j={start:"mousedown",move:"mousemove",stop:"mouseup"},P=j,x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,r,n,a=m(l);function l(){var e;g(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return S(O(e=a.call.apply(a,[this].concat(r))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),S(O(e),"mounted",!1),S(O(e),"handleDragStart",(function(t){if(e.props.onMouseDown(t),!e.props.allowAnyClick&&"number"===typeof t.button&&0!==t.button)return!1;var r=e.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var n=r.ownerDocument;if(!(e.props.disabled||!(t.target instanceof n.defaultView.Node)||e.props.handle&&!(0,s.matchesSelectorAndParentsTo)(t.target,e.props.handle,r)||e.props.cancel&&(0,s.matchesSelectorAndParentsTo)(t.target,e.props.cancel,r))){"touchstart"===t.type&&t.preventDefault();var o=(0,s.getTouchIdentifier)(t);e.setState({touchIdentifier:o});var a=(0,u.getControlPosition)(t,o,O(e));if(null!=a){var i=a.x,l=a.y,f=(0,u.createCoreData)(O(e),i,l);(0,c.default)("DraggableCore: handleDragStart: %j",f),(0,c.default)("calling",e.props.onStart),!1!==e.props.onStart(t,f)&&!1!==e.mounted&&(e.props.enableUserSelectHack&&(0,s.addUserSelectStyles)(n),e.setState({dragging:!0,lastX:i,lastY:l}),(0,s.addEvent)(n,P.move,e.handleDrag),(0,s.addEvent)(n,P.stop,e.handleDragStop))}}})),S(O(e),"handleDrag",(function(t){var r=(0,u.getControlPosition)(t,e.state.touchIdentifier,O(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX,i=o-e.state.lastY,s=d((0,u.snapToGrid)(e.props.grid,a,i),2);if(a=s[0],i=s[1],!a&&!i)return;n=e.state.lastX+a,o=e.state.lastY+i}var l=(0,u.createCoreData)(O(e),n,o);if((0,c.default)("DraggableCore: handleDrag: %j",l),!1!==e.props.onDrag(t,l)&&!1!==e.mounted)e.setState({lastX:n,lastY:o});else try{e.handleDragStop(new MouseEvent("mouseup"))}catch(p){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.handleDragStop(f)}}})),S(O(e),"handleDragStop",(function(t){if(e.state.dragging){var r=(0,u.getControlPosition)(t,e.state.touchIdentifier,O(e));if(null!=r){var n=r.x,o=r.y,a=(0,u.createCoreData)(O(e),n,o);if(!1===e.props.onStop(t,a)||!1===e.mounted)return!1;var i=e.findDOMNode();i&&e.props.enableUserSelectHack&&(0,s.removeUserSelectStyles)(i.ownerDocument),(0,c.default)("DraggableCore: handleDragStop: %j",a),e.setState({dragging:!1,lastX:NaN,lastY:NaN}),i&&((0,c.default)("DraggableCore: Removing handlers"),(0,s.removeEvent)(i.ownerDocument,P.move,e.handleDrag),(0,s.removeEvent)(i.ownerDocument,P.stop,e.handleDragStop))}}})),S(O(e),"onMouseDown",(function(t){return P=j,e.handleDragStart(t)})),S(O(e),"onMouseUp",(function(t){return P=j,e.handleDragStop(t)})),S(O(e),"onTouchStart",(function(t){return P=D,e.handleDragStart(t)})),S(O(e),"onTouchEnd",(function(t){return P=D,e.handleDragStop(t)})),e}return t=l,(r=[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.findDOMNode();e&&(0,s.addEvent)(e,D.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.findDOMNode();if(e){var t=e.ownerDocument;(0,s.removeEvent)(t,j.move,this.handleDrag),(0,s.removeEvent)(t,D.move,this.handleDrag),(0,s.removeEvent)(t,j.stop,this.handleDragStop),(0,s.removeEvent)(t,D.stop,this.handleDragStop),(0,s.removeEvent)(e,D.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,s.removeUserSelectStyles)(t)}}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current)&&void 0!==e?e:i.default.findDOMNode(this)}},{key:"render",value:function(){return o.cloneElement(o.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&y(t.prototype,r),n&&y(t,n),l}(o.Component);t.default=x,S(x,"displayName","DraggableCore"),S(x,"propTypes",{allowAnyClick:a.default.bool,disabled:a.default.bool,enableUserSelectHack:a.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:a.default.arrayOf(a.default.number),handle:a.default.string,cancel:a.default.string,nodeRef:a.default.object,onStart:a.default.func,onDrag:a.default.func,onStop:a.default.func,onMouseDown:a.default.func,scale:a.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),S(x,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},11418:function(e,t,r){"use strict";var n=r(98466),o=n.default,a=n.DraggableCore;e.exports=o,e.exports.default=o,e.exports.DraggableCore=a},36607:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.matchesSelector=f,t.matchesSelectorAndParentsTo=function(e,t,r){var n=e;do{if(f(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},t.addEvent=function(e,t,r,n){if(!e)return;var o=u({capture:!0},n);e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r},t.removeEvent=function(e,t,r,n){if(!e)return;var o=u({capture:!0},n);e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null},t.outerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,o.int)(r.borderTopWidth),t+=(0,o.int)(r.borderBottomWidth)},t.outerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,o.int)(r.borderLeftWidth),t+=(0,o.int)(r.borderRightWidth)},t.innerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,o.int)(r.paddingTop),t-=(0,o.int)(r.paddingBottom)},t.innerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,o.int)(r.paddingLeft),t-=(0,o.int)(r.paddingRight)},t.offsetXYFromParent=function(e,t,r){var n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),o=(e.clientX+t.scrollLeft-n.left)/r,a=(e.clientY+t.scrollTop-n.top)/r;return{x:o,y:a}},t.createCSSTransform=function(e,t){var r=p(e,t,"px");return l({},(0,a.browserPrefixToKey)("transform",a.default),r)},t.createSVGTransform=function(e,t){return p(e,t,"")},t.getTranslation=p,t.getTouch=function(e,t){return e.targetTouches&&(0,o.findInArray)(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&(0,o.findInArray)(e.changedTouches,(function(e){return t===e.identifier}))},t.getTouchIdentifier=function(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier},t.addUserSelectStyles=function(e){if(!e)return;var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t));e.body&&d(e.body,"react-draggable-transparent-selection")},t.removeUserSelectStyles=function(e){if(!e)return;try{if(e.body&&h(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(r){}},t.addClassName=d,t.removeClassName=h;var o=r(95309),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=a?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(o,s,u):o[s]=e[s]}o.default=e,r&&r.set(e,o);return o}(r(70878));function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c="";function f(e,t){return c||(c=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,o.isFunction)(e[t])}))),!!(0,o.isFunction)(e[c])&&e[c](t)}function p(e,t,r){var n=e.x,o=e.y,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){var i="".concat("string"===typeof t.x?t.x:t.x+r),s="".concat("string"===typeof t.y?t.y:t.y+r);a="translate(".concat(i,", ").concat(s,")")+a}return a}function d(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function h(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},70878:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPrefix=n,t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0;var r=["Moz","Webkit","O","ms"];function n(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"===typeof window)return"";var a=null===(e=window.document)||void 0===e||null===(t=e.documentElement)||void 0===t?void 0:t.style;if(!a)return"";if(n in a)return"";for(var i=0;i<r.length;i++)if(o(n,r[i])in a)return r[i];return""}function o(e,t){return t?"".concat(t).concat(function(e){for(var t="",r=!0,n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}var a=n();t.default=a},99012:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},58100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundPosition=function(e,t,r){if(!e.props.bounds)return[t,r];var i=e.props.bounds;i="string"===typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);var s=a(e);if("string"===typeof i){var u,l=s.ownerDocument,c=l.defaultView;if(!((u="parent"===i?s.parentNode:l.querySelector(i))instanceof c.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');var f=u,p=c.getComputedStyle(s),d=c.getComputedStyle(f);i={left:-s.offsetLeft+(0,n.int)(d.paddingLeft)+(0,n.int)(p.marginLeft),top:-s.offsetTop+(0,n.int)(d.paddingTop)+(0,n.int)(p.marginTop),right:(0,o.innerWidth)(f)-(0,o.outerWidth)(s)-s.offsetLeft+(0,n.int)(d.paddingRight)-(0,n.int)(p.marginRight),bottom:(0,o.innerHeight)(f)-(0,o.outerHeight)(s)-s.offsetTop+(0,n.int)(d.paddingBottom)-(0,n.int)(p.marginBottom)}}(0,n.isNum)(i.right)&&(t=Math.min(t,i.right));(0,n.isNum)(i.bottom)&&(r=Math.min(r,i.bottom));(0,n.isNum)(i.left)&&(t=Math.max(t,i.left));(0,n.isNum)(i.top)&&(r=Math.max(r,i.top));return[t,r]},t.snapToGrid=function(e,t,r){var n=Math.round(t/e[0])*e[0],o=Math.round(r/e[1])*e[1];return[n,o]},t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.getControlPosition=function(e,t,r){var n="number"===typeof t?(0,o.getTouch)(e,t):null;if("number"===typeof t&&!n)return null;var i=a(r),s=r.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(n||e,s,r.props.scale)},t.createCoreData=function(e,t,r){var o=e.state,i=!(0,n.isNum)(o.lastX),s=a(e);return i?{node:s,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:s,deltaX:t-o.lastX,deltaY:r-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:r}},t.createDraggableData=function(e,t){var r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}};var n=r(95309),o=r(36607);function a(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},95309:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findInArray=function(e,t){for(var r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]},t.isFunction=function(e){return"function"===typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"===typeof e&&!isNaN(e)},t.int=function(e){return parseInt(e,10)},t.dontSetMe=function(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))}}}]);