(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9529],{58772:function(t,e,n){"use strict";var r=n(90331);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},23615:function(t,e,n){t.exports=n(58772)()},90331:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},55322:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),e.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==g(t)&&"function"!==typeof t)return{default:t};var e=p();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n(27378)),o=d(n(23615)),a=d(n(31542)),i=d(n(60042)),u=n(88065),l=n(39237),s=n(70972),c=d(n(50700)),f=d(n(73936));function d(t){return t&&t.__esModule?t:{default:t}}function p(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return p=function(){return t},t}function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y.apply(this,arguments)}function h(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e,n){return e&&O(t.prototype,e),n&&O(t,n),t}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(t,e){return!e||"object"!==g(e)&&"function"!==typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(n,t);var e=P(n);function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),E(x(r=e.call(this,t)),"onDragStart",(function(t,e){if((0,f.default)("Draggable: onDragStart: %j",e),!1===r.props.onStart(t,(0,l.createDraggableData)(x(r),e)))return!1;r.setState({dragging:!0,dragged:!0})})),E(x(r),"onDrag",(function(t,e){if(!r.state.dragging)return!1;(0,f.default)("Draggable: onDrag: %j",e);var n=(0,l.createDraggableData)(x(r),e),o={x:n.x,y:n.y};if(r.props.bounds){var a=o.x,i=o.y;o.x+=r.state.slackX,o.y+=r.state.slackY;var u=b((0,l.getBoundPosition)(x(r),o.x,o.y),2),s=u[0],c=u[1];o.x=s,o.y=c,o.slackX=r.state.slackX+(a-o.x),o.slackY=r.state.slackY+(i-o.y),n.x=o.x,n.y=o.y,n.deltaX=o.x-r.state.x,n.deltaY=o.y-r.state.y}if(!1===r.props.onDrag(t,n))return!1;r.setState(o)})),E(x(r),"onDragStop",(function(t,e){if(!r.state.dragging)return!1;if(!1===r.props.onStop(t,(0,l.createDraggableData)(x(r),e)))return!1;(0,f.default)("Draggable: onDragStop: %j",e);var n={dragging:!1,slackX:0,slackY:0};if(Boolean(r.props.position)){var o=r.props.position,a=o.x,i=o.y;n.x=a,n.y=i}r.setState(n)})),r.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:S({},t.position),slackX:0,slackY:0,isElementSVG:!1},!t.position||t.onDrag||t.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),r}return D(n,null,[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.position,r=e.prevPropsPosition;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,f.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:S({},n)})}}]),D(n,[{key:"componentDidMount",value:function(){"undefined"!==typeof window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){return this.props.nodeRef?this.props.nodeRef.current:a.default.findDOMNode(this)}},{key:"render",value:function(){var t,e=this.props,n=(e.axis,e.bounds,e.children),o=e.defaultPosition,a=e.defaultClassName,s=e.defaultClassNameDragging,f=e.defaultClassNameDragged,d=e.position,p=e.positionOffset,g=(e.scale,h(e,["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"])),b={},m=null,v=!Boolean(d)||this.state.dragging,O=d||o,D={x:(0,l.canDragX)(this)&&v?this.state.x:O.x,y:(0,l.canDragY)(this)&&v?this.state.y:O.y};this.state.isElementSVG?m=(0,u.createSVGTransform)(D,p):b=(0,u.createCSSTransform)(D,p);var w=(0,i.default)(n.props.className||"",a,(E(t={},s,this.state.dragging),E(t,f,this.state.dragged),t));return r.createElement(c.default,y({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),r.cloneElement(r.Children.only(n),{className:w,style:S(S({},n.props.style),b),transform:m}))}}]),n}(r.Component);e.default=M,E(M,"displayName","Draggable"),E(M,"propTypes",S(S({},c.default.propTypes),{},{axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe})),E(M,"defaultProps",S(S({},c.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null,scale:1}))},50700:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==d(t)&&"function"!==typeof t)return{default:t};var e=f();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n(27378)),o=c(n(23615)),a=c(n(31542)),i=n(88065),u=n(39237),l=n(70972),s=c(n(73936));function c(t){return t&&t.__esModule?t:{default:t}}function f(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return f=function(){return t},t}function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==d(e)&&"function"!==typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w={start:"touchstart",move:"touchmove",stop:"touchend"},P={start:"mousedown",move:"mousemove",stop:"mouseup"},j=P,x=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(c,t);var e,n,o,l=m(c);function c(){var t;y(this,c);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return D(S(t=l.call.apply(l,[this].concat(n))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),D(S(t),"mounted",!1),D(S(t),"handleDragStart",(function(e){if(t.props.onMouseDown(e),!t.props.allowAnyClick&&"number"===typeof e.button&&0!==e.button)return!1;var n=t.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var r=n.ownerDocument;if(!(t.props.disabled||!(e.target instanceof r.defaultView.Node)||t.props.handle&&!(0,i.matchesSelectorAndParentsTo)(e.target,t.props.handle,n)||t.props.cancel&&(0,i.matchesSelectorAndParentsTo)(e.target,t.props.cancel,n))){"touchstart"===e.type&&e.preventDefault();var o=(0,i.getTouchIdentifier)(e);t.setState({touchIdentifier:o});var a=(0,u.getControlPosition)(e,o,S(t));if(null!=a){var l=a.x,c=a.y,f=(0,u.createCoreData)(S(t),l,c);(0,s.default)("DraggableCore: handleDragStart: %j",f),(0,s.default)("calling",t.props.onStart),!1!==t.props.onStart(e,f)&&!1!==t.mounted&&(t.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(r),t.setState({dragging:!0,lastX:l,lastY:c}),(0,i.addEvent)(r,j.move,t.handleDrag),(0,i.addEvent)(r,j.stop,t.handleDragStop))}}})),D(S(t),"handleDrag",(function(e){var n=(0,u.getControlPosition)(e,t.state.touchIdentifier,S(t));if(null!=n){var r=n.x,o=n.y;if(Array.isArray(t.props.grid)){var a=r-t.state.lastX,i=o-t.state.lastY,l=p((0,u.snapToGrid)(t.props.grid,a,i),2);if(a=l[0],i=l[1],!a&&!i)return;r=t.state.lastX+a,o=t.state.lastY+i}var c=(0,u.createCoreData)(S(t),r,o);if((0,s.default)("DraggableCore: handleDrag: %j",c),!1!==t.props.onDrag(e,c)&&!1!==t.mounted)t.setState({lastX:r,lastY:o});else try{t.handleDragStop(new MouseEvent("mouseup"))}catch(d){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.handleDragStop(f)}}})),D(S(t),"handleDragStop",(function(e){if(t.state.dragging){var n=(0,u.getControlPosition)(e,t.state.touchIdentifier,S(t));if(null!=n){var r=n.x,o=n.y,a=(0,u.createCoreData)(S(t),r,o);if(!1===t.props.onStop(e,a)||!1===t.mounted)return!1;var l=t.findDOMNode();l&&t.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(l.ownerDocument),(0,s.default)("DraggableCore: handleDragStop: %j",a),t.setState({dragging:!1,lastX:NaN,lastY:NaN}),l&&((0,s.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(l.ownerDocument,j.move,t.handleDrag),(0,i.removeEvent)(l.ownerDocument,j.stop,t.handleDragStop))}}})),D(S(t),"onMouseDown",(function(e){return j=P,t.handleDragStart(e)})),D(S(t),"onMouseUp",(function(e){return j=P,t.handleDragStop(e)})),D(S(t),"onTouchStart",(function(e){return j=w,t.handleDragStart(e)})),D(S(t),"onTouchEnd",(function(e){return j=w,t.handleDragStop(e)})),t}return e=c,(n=[{key:"componentDidMount",value:function(){this.mounted=!0;var t=this.findDOMNode();t&&(0,i.addEvent)(t,w.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var t=this.findDOMNode();if(t){var e=t.ownerDocument;(0,i.removeEvent)(e,P.move,this.handleDrag),(0,i.removeEvent)(e,w.move,this.handleDrag),(0,i.removeEvent)(e,P.stop,this.handleDragStop),(0,i.removeEvent)(e,w.stop,this.handleDragStop),(0,i.removeEvent)(t,w.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(e)}}},{key:"findDOMNode",value:function(){return this.props.nodeRef?this.props.nodeRef.current:a.default.findDOMNode(this)}},{key:"render",value:function(){return r.cloneElement(r.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&h(e.prototype,n),o&&h(e,o),c}(r.Component);e.default=x,D(x,"displayName","DraggableCore"),D(x,"propTypes",{allowAnyClick:o.default.bool,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),D(x,"defaultProps",{allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},49529:function(t,e,n){"use strict";var r=n(55322),o=r.default,a=r.DraggableCore;t.exports=o,t.exports.default=o,t.exports.DraggableCore=a},88065:function(t,e,n){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.matchesSelector=f,e.matchesSelectorAndParentsTo=function(t,e,n){var r=t;do{if(f(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},e.addEvent=function(t,e,n,r){if(!t)return;var o=l({capture:!0},r);t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},e.removeEvent=function(t,e,n,r){if(!t)return;var o=l({capture:!0},r);t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null},e.outerHeight=function(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,o.int)(n.borderTopWidth),e+=(0,o.int)(n.borderBottomWidth)},e.outerWidth=function(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,o.int)(n.borderLeftWidth),e+=(0,o.int)(n.borderRightWidth)},e.innerHeight=function(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,o.int)(n.paddingTop),e-=(0,o.int)(n.paddingBottom)},e.innerWidth=function(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,o.int)(n.paddingLeft),e-=(0,o.int)(n.paddingRight)},e.offsetXYFromParent=function(t,e,n){var r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),o=(t.clientX+e.scrollLeft-r.left)/n,a=(t.clientY+e.scrollTop-r.top)/n;return{x:o,y:a}},e.createCSSTransform=function(t,e){var n=d(t,e,"px");return s({},(0,a.browserPrefixToKey)("transform",a.default),n)},e.createSVGTransform=function(t,e){return d(t,e,"")},e.getTranslation=d,e.getTouch=function(t,e){return t.targetTouches&&(0,o.findInArray)(t.targetTouches,(function(t){return e===t.identifier}))||t.changedTouches&&(0,o.findInArray)(t.changedTouches,(function(t){return e===t.identifier}))},e.getTouchIdentifier=function(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier},e.addUserSelectStyles=function(t){if(!t)return;var e=t.getElementById("react-draggable-style-el");e||((e=t.createElement("style")).type="text/css",e.id="react-draggable-style-el",e.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",e.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(e));t.body&&p(t.body,"react-draggable-transparent-selection")},e.removeUserSelectStyles=function(t){if(!t)return;try{if(t.body&&g(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{var e=(t.defaultView||window).getSelection();e&&"Caret"!==e.type&&e.removeAllRanges()}}catch(n){}},e.addClassName=p,e.removeClassName=g;var o=n(70972),a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var u=o?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n(42249));function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c="";function f(t,e){return c||(c=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(e){return(0,o.isFunction)(t[e])}))),!!(0,o.isFunction)(t[c])&&t[c](e)}function d(t,e,n){var r=t.x,o=t.y,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){var i="".concat("string"===typeof e.x?e.x:e.x+n),u="".concat("string"===typeof e.y?e.y:e.y+n);a="translate(".concat(i,", ").concat(u,")")+a}return a}function p(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function g(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}},42249:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPrefix=r,e.browserPrefixToKey=o,e.browserPrefixToStyle=function(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t},e.default=void 0;var n=["Moz","Webkit","O","ms"];function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"===typeof window||"undefined"===typeof window.document)return"";var e=window.document.documentElement.style;if(t in e)return"";for(var r=0;r<n.length;r++)if(o(t,n[r])in e)return n[r];return""}function o(t,e){return e?"".concat(e).concat(function(t){for(var e="",n=!0,r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):"-"===t[r]?n=!0:e+=t[r];return e}(t)):t}var a=r();e.default=a},73936:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){0}},39237:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getBoundPosition=function(t,e,n){if(!t.props.bounds)return[e,n];var i=t.props.bounds;i="string"===typeof i?i:function(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}(i);var u=a(t);if("string"===typeof i){var l,s=u.ownerDocument,c=s.defaultView;if(!((l="parent"===i?u.parentNode:s.querySelector(i))instanceof c.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');var f=c.getComputedStyle(u),d=c.getComputedStyle(l);i={left:-u.offsetLeft+(0,r.int)(d.paddingLeft)+(0,r.int)(f.marginLeft),top:-u.offsetTop+(0,r.int)(d.paddingTop)+(0,r.int)(f.marginTop),right:(0,o.innerWidth)(l)-(0,o.outerWidth)(u)-u.offsetLeft+(0,r.int)(d.paddingRight)-(0,r.int)(f.marginRight),bottom:(0,o.innerHeight)(l)-(0,o.outerHeight)(u)-u.offsetTop+(0,r.int)(d.paddingBottom)-(0,r.int)(f.marginBottom)}}(0,r.isNum)(i.right)&&(e=Math.min(e,i.right));(0,r.isNum)(i.bottom)&&(n=Math.min(n,i.bottom));(0,r.isNum)(i.left)&&(e=Math.max(e,i.left));(0,r.isNum)(i.top)&&(n=Math.max(n,i.top));return[e,n]},e.snapToGrid=function(t,e,n){var r=Math.round(e/t[0])*t[0],o=Math.round(n/t[1])*t[1];return[r,o]},e.canDragX=function(t){return"both"===t.props.axis||"x"===t.props.axis},e.canDragY=function(t){return"both"===t.props.axis||"y"===t.props.axis},e.getControlPosition=function(t,e,n){var r="number"===typeof e?(0,o.getTouch)(t,e):null;if("number"===typeof e&&!r)return null;var i=a(n),u=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(r||t,u,n.props.scale)},e.createCoreData=function(t,e,n){var o=t.state,i=!(0,r.isNum)(o.lastX),u=a(t);return i?{node:u,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:u,deltaX:e-o.lastX,deltaY:n-o.lastY,lastX:o.lastX,lastY:o.lastY,x:e,y:n}},e.createDraggableData=function(t,e){var n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}};var r=n(70972),o=n(88065);function a(t){var e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}},70972:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.findInArray=function(t,e){for(var n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]},e.isFunction=function(t){return"function"===typeof t||"[object Function]"===Object.prototype.toString.call(t)},e.isNum=function(t){return"number"===typeof t&&!isNaN(t)},e.int=function(t){return parseInt(t,10)},e.dontSetMe=function(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}}}]);