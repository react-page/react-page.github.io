"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1640],{31640:function(t,e,n){n.r(e),n.d(e,{getActiveList:function(){return a},getActiveListType:function(){return l},getPreviousListItem:function(){return d},increaseListIndention:function(){return u},decreaseListIndention:function(){return f}});var r=n(55185),o=n(84027),i=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},s=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},a=function(t){return i(r.Editor.nodes(t,{match:function(t){var e=t.type;return(null===e||void 0===e?void 0:e.startsWith(o.v))&&e!==o.LI},mode:"lowest"}),1)[0]},l=function(t){var e,n;return null===(n=null===(e=a(t))||void 0===e?void 0:e[0])||void 0===n?void 0:n.type},d=function(t,e){var n=i(r.Editor.nodes(t,{match:function(t){return t.type===e},mode:"lowest"}),1)[0];return n&&n[1][n[1].length-1]>0?r.Editor.node(t,r.Path.previous(n[1])):null},u=function(t,e,n){var o=l(t),a=d(t,e.listItemType);r.Transforms.setNodes(t,{type:e.listItemType}),a?(r.Transforms.setNodes(t,{type:null},{at:a[1]}),r.Transforms.wrapNodes(t,{type:e.listItemType,children:[]},{at:a[1]}),r.Transforms.moveNodes(t,{to:s(s([],i(a[1]),!1),[1],!1)}),r.Transforms.wrapNodes(t,{type:null!==n&&void 0!==n?n:o,children:[]})):r.Transforms.wrapNodes(t,{type:null!==n&&void 0!==n?n:o,children:[]})},c=function(t,e,n,o){var i;if(r.Transforms.moveNodes(t,{at:e,to:n}),!o){var s=r.Editor.node(t,n);(null===(i=(null===s||void 0===s?void 0:s[0]).children)||void 0===i?void 0:i.every((function(e){return r.Text.isText(e)||r.Editor.isInline(t,e)})))?r.Transforms.setNodes(t,{type:null},{at:n}):r.Transforms.unwrapNodes(t,{at:n})}},f=function(t,e){var n,o=i(r.Editor.nodes(t,{match:function(t){return t.type===e.listItemType},mode:"lowest"}),1)[0][1],a=r.Path.parent(o),l=r.Path.parent(a),d=r.Editor.node(t,l),u=(null===d||void 0===d?void 0:d[0].type)===e.listItemType,f=0===o[o.length-1],v=u?r.Path.next(l):r.Path.next(a);do{(n=r.Editor.next(t,{at:o}))&&c(t,n[1],v,u)}while(n);if(c(t,o,v,u),f&&(r.Transforms.removeNodes(t,{at:a}),u)){var p=s(s([],i(r.Path.previous(v)),!1),[0],!1),y=r.Editor.node(t,p);(null===y||void 0===y?void 0:y[0].type)||r.Transforms.unwrapNodes(t,{at:p,split:!0})}}}}]);