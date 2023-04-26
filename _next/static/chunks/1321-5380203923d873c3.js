"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1321],{68330:function(e,n,t){t.d(n,{G:function(){return d},T:function(){return c}});var l=t(27378),r=t(80978),o=t(31309),i=t(77534),a=t(99892),u=t(28854),c=function(){var e=(0,i.I0)();return(0,l.useMemo)(function(){return{dragCell:function(n){return e((0,r.SJ)(n))},clear:function(){return e((0,r.I9)())},cancelCellDrag:function(){return e((0,r.Ey)())},above:function(n,t,l){return e((0,r.G2)(n,t,null==l?void 0:l.level))},below:function(n,t,l){return e((0,r.j5)(n,t,null==l?void 0:l.level))},leftOf:function(n,t,l){return e((0,r.oe)(n,t,null==l?void 0:l.level))},rightOf:function(n,t,l){return e((0,r.Pr)(n,t,null==l?void 0:l.level))},inlineLeft:function(n,t){return e((0,r.gT)(n,t))},inlineRight:function(n,t){return e((0,r.XW)(n,t))}}},[e])},d=function(e){var n=(0,i.I0)(),t=(0,u.Jr)(),c=(0,a.Ks)(e);return(0,l.useMemo)(function(){return{above:function(e,l,r){return n((0,o.kB)({cellPlugins:c,lang:t})(e,l,r))},below:function(e,l,r){return n((0,o.E3)({cellPlugins:c,lang:t})(e,l,r))},leftOf:function(e,l,r){return n((0,o.F)({cellPlugins:c,lang:t})(e,l,r))},rightOf:function(e,l,r){return n((0,o.iH)({cellPlugins:c,lang:t})(e,l,r))},inlineLeft:function(e,l){return n((0,o.cR)({cellPlugins:c,lang:t})(e,l))},inlineRight:function(e,l){return n((0,o._S)({cellPlugins:c,lang:t})(e,l))},dragCell:function(e){return n((0,r.SJ)(e))},clear:function(){return n((0,r.I9)())},cancelCellDrag:function(){return n((0,r.Ey)())}}},[n,t,c])}},80458:function(e,n,t){t.d(n,{D:function(){return o}});var l=t(24150),r=t(72369),o=function(){var e=(0,l.Z)();return(0,r.Z)(e.breakpoints.down("sm"))}},24813:function(e,n,t){t.d(n,{p:function(){return f}});var l=t(24150),r=t(11871),o=t(74082),i=t(87949),a=t(27378),u=t(80458),c=function(){return(c=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},d="rgba(0, 0, 0, 0.87)",f=function(e){var n=e.className,t=e.anchor,f=e.open,v=e.scale,s=e.children,m=e.style,g=a.createElement(r.Z,{style:{marginLeft:-24,marginRight:-24,marginTop:12,marginBottom:12}}),y=a.Children.toArray(s).filter(Boolean),E=(0,u.D)(),h="dark"===(0,l.Z)().palette.mode;return a.createElement(o.Z,null,a.createElement(i.ZP,{SlideProps:{mountOnEnter:!0,unmountOnExit:!0},variant:"persistent",className:n,open:f,anchor:t,PaperProps:{style:{zIndex:10,backgroundColor:"transparent",border:"none",overflow:"visible",pointerEvents:"none"}}},a.createElement("div",{style:c(c(c({pointerEvents:"all",border:"".concat(h?d:"rgba(0, 0, 0, 0.12)"," 1px solid"),borderRadius:"4px 4px 0 0",backgroundColor:h?d:"rgba(255,255,255, 0.98)",padding:"12px 24px"},E?{marginLeft:20,marginRight:80}:{marginLeft:"auto",marginRight:"auto",minWidth:"50vw",maxWidth:"min(1280px, calc(100vw - 250px))"}),{boxShadow:"0px 1px 8px -1px rgba(0,0,0,0.4)",position:"relative",transformOrigin:"bottom",transform:"scale(".concat(void 0===v?1:v,")"),transition:"scale 0.3s"}),void 0===m?{}:m)},y.map(function(e,n){return a.createElement(a.Fragment,{key:n},e,n<y.length-1?g:null)}))))}},41321:function(e,n,t){t.d(n,{hx:function(){return z}});var l=t(27378),r=t(24813),o=t(269),i=t(44887),a=t(29277),u=t(99892),c=t(28854),d=t(11377),f=t(34125),v=function(e){var n=e.nodeId;return l.createElement("div",{style:{transform:"scale(0.8)"}},l.createElement(f.WT,{nodeId:n}),l.createElement(f.iD,{nodeId:n}),l.createElement(f.HQ,{nodeId:n}),l.createElement(f.LG,{nodeId:n}))},s=t(81847),m=t(25833),g=t(16655),y=t(9741),E=t(2867),h=t(11722),p=t(80622),b=function(e){var n,t,r=e.nodeId,o=e.lang,i=(0,c.WW)().t,a=(0,u.Ri)(r,function(e){return{isDraft:null==e?void 0:e.isDraft,isDraftI18n:null==e?void 0:e.isDraftI18n}}),f=(0,d.Ke)(r),v=(0,c.Jr)();if(!a)return null;var m=null!=o?o:v,g=Boolean(a.isDraftI18n),b=null!==(t=null===(n=null==a?void 0:a.isDraftI18n)||void 0===n?void 0:n[m])&&void 0!==t?t:null==a?void 0:a.isDraft,I=i(b?"Content is hidden":"Content is visible");return a?l.createElement(s.Z,{title:I+(g?" in "+m:"")},l.createElement(y.Z,{style:{marginRight:5},labelPlacement:"start",control:l.createElement(E.Z,{color:"primary",checked:!b,onChange:function(e){f(!e.target.checked,m)}}),label:b?l.createElement(p.Z,{style:{marginTop:5}}):l.createElement(h.Z,{style:{marginTop:5}})})):null},I=t(44062),Z=l.memo(function(e){var n,t=e.nodeId,r=(0,d.uC)(t),o=(0,c.WW)().t;return l.createElement(s.Z,{title:null!==(n=o("Duplicate Plugin"))&&void 0!==n?n:""},l.createElement(m.Z,{onClick:r,"aria-label":"delete",color:"default"},l.createElement(I.Z,null)))}),x=t(97878),C=t(35430),k=t(83355),w=t(50577),P=(0,l.memo)(function(){var e=(0,c.Fv)("languages"),n=(0,c.Jr)(),t=(0,d.fK)();return e&&(null==e?void 0:e.length)>0?l.createElement(k.Z,{variant:"standard",value:n||"",onChange:function(e){return t(e.target.value)}},e.map(function(e){return l.createElement(w.Z,{key:e.lang,value:e.lang},e.label)})):null}),O=t(85672),S=t(66845),W=t(3833),N=function(e){var n,t=e.nodeId,r=e.onClose,o=(0,c.Jr)(),i=(0,c.Fv)("languages"),a=(0,c.WW)().t,f=(0,d.fK)(),v=(0,u.Nk)(t),s=(0,d.YN)(t),m=(0,l.useCallback)(function(e){s(null,{lang:e})},[s]),g=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.label;return l.createElement(O.Z,null,l.createElement("div",{style:{display:"flex",alignItems:"center"}},l.createElement(C.Z,{style:{marginRight:"auto"}})," ",l.createElement(P,null)),l.createElement("hr",null),l.createElement(S.Z,null,l.createElement("tbody",null,null==i?void 0:i.map(function(e,n){var r=null==v?void 0:v[e.lang],i=o===e.lang,u=Boolean(r);return l.createElement("tr",{key:e.lang},l.createElement("th",{style:{textAlign:"left",textDecoration:i?"underline":void 0}},l.createElement(W.Z,{onClick:function(){return f(e.lang)}},e.label," ",0===n?a("(default)"):null)),l.createElement("td",null,l.createElement(b,{nodeId:t,lang:e.lang})),l.createElement("td",null,u?"✔️":" "),l.createElement("td",null,u&&0!==n?l.createElement(W.Z,{onClick:function(){m(e.lang)}},a("Reset to ".concat(g," ⚠️"))):null))}))),l.createElement(W.Z,{onClick:function(){return r()}},a("Close")))},D=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var l,r,o=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(l=o.next()).done;)i.push(l.value)}catch(a){r={error:a}}finally{try{l&&!l.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return i},L=l.memo(function(e){var n=e.nodeId,t=(0,c.Fv)("languages"),r=D((0,l.useState)(!1),2),o=r[0],i=r[1],a=t&&(null==t?void 0:t.length)>0,u=function(){return i(!1)};return a?l.createElement(l.Fragment,null,l.createElement(x.Z,{open:o,onClose:u},l.createElement(N,{nodeId:n,onClose:u})),l.createElement("div",{style:{display:"flex",alignItems:"center"}},l.createElement(m.Z,{onClick:function(){return i(!0)},"aria-label":"i18n",color:"secondary"},l.createElement(C.Z,null)),l.createElement(P,null))):null}),R=t(53088),j=l.memo(function(e){var n,t=e.nodeId,r=(0,u.gG)(t),o=(0,c.WW)().t,i=(0,d.Bk)(r);return r?l.createElement(m.Z,{className:"bottomToolbar__selectParentButton",onClick:function(){return i()},color:"default",title:null!==(n=o("Select parent"))&&void 0!==n?n:""},l.createElement(R.Z,null)):null}),B=l.memo(function(e){var n,t=e.nodeId,r=(0,c.WW)().t,o=(0,d.XL)(t);return l.createElement("div",{style:{display:"flex",alignItems:"center"}},l.createElement(L,{nodeId:t}),l.createElement(b,{nodeId:t}),l.createElement(j,{nodeId:t}),l.createElement(Z,{nodeId:t}),l.createElement(s.Z,{title:null!==(n=r("Remove Plugin"))&&void 0!==n?n:""},l.createElement(m.Z,{onClick:function(){return o()},"aria-label":"delete",color:"secondary"},l.createElement(g.Z,null))))}),T=l.memo(function(e){var n,t=e.nodeId,r=e.actionsLeft,f=null!==(n=(0,u.R7)(t))&&void 0!==n?n:{},s=f.title,m=f.icon,g=(0,c.WW)().t,y=(0,d.Bk)(t),E=(0,c.Fv)("showMoveButtonsInBottomToolbar");return l.createElement("div",null,l.createElement(o.ZP,{container:!0,direction:"row",alignItems:"center"},m||s?l.createElement(o.ZP,{item:!0},l.createElement(i.Z,{onClick:function(){return y(!0)},children:m||(s?s[0]:""),style:{cursor:"pointer",marginRight:16}})):null,l.createElement(o.ZP,{item:!0},l.createElement(a.Z,{variant:"subtitle1"},g(s))),r&&l.Children.map(r,function(e,n){return l.createElement(o.ZP,{item:!0,key:n},e)}),E?l.createElement(o.ZP,{item:!0,style:{marginLeft:"auto"}},l.createElement(v,{nodeId:t})):null,l.createElement(o.ZP,{item:!0,style:{marginLeft:"auto"}},l.createElement(B,{nodeId:t}))))}),A=t(91725),F=[1,.8,.6,1.2],G=F[0],_=function(e){var n,t=e.scale,r=e.setScale,o=(0,c.WW)().t,i=l.useCallback(function(){var e=F[(F.indexOf(null!=G?G:t)+1)%F.length];r(e),G=e},[t,G,r]);return l.createElement(s.Z,{title:null!==(n=o("Change size of this window"))&&void 0!==n?n:""},l.createElement(m.Z,{onClick:i,"aria-label":"Change size of this window",color:"primary"},l.createElement(A.default,null)))},J=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var l,r,o=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(l=o.next()).done;)i.push(l.value)}catch(a){r={error:a}}finally{try{l&&!l.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return i},M=function(e,n,t){if(t||2==arguments.length)for(var l,r=0,o=n.length;r<o;r++)!l&&r in n||(l||(l=Array.prototype.slice.call(n,0,r)),l[r]=n[r]);return e.concat(l||Array.prototype.slice.call(n))},z=l.memo(function(e){var n=e.open,t=e.className,o=e.anchor,i=e.pluginControls,a=e.nodeId,u=e.actionsLeft,c=e.style,d=e.children,f=J(l.useState(1),2),v=f[0],s=f[1];return l.createElement(r.p,{className:t,open:void 0!==n&&n,anchor:void 0===o?"bottom":o,scale:v,style:c},d,i,l.createElement(T,{nodeId:a,actionsLeft:M([l.createElement(_,{key:"scalebutton",scale:v,setScale:s})],J(l.Children.toArray(u)),!1)}))})},34125:function(e,n,t){t.d(n,{HQ:function(){return C},WT:function(){return k},LG:function(){return w},iD:function(){return x}});var l=t(97768),r=t(27378),o=t(48978),i=t(60007),a=t(82420),u=t(67053),c=t(46242),d=t(7935),f=t(68330),v=t(99892),s=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var l,r,o=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(l=o.next()).done;)i.push(l.value)}catch(a){r={error:a}}finally{try{l&&!l.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return i},m=function(e,n,t){if(t||2==arguments.length)for(var l,r=0,o=n.length;r<o;r++)!l&&r in n||(l||(l=Array.prototype.slice.call(n,0,r)),l[r]=n[r]);return e.concat(l||Array.prototype.slice.call(n))},g=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],l=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&l>=e.length&&(e=void 0),{value:e&&e[l++],done:!e}}};throw TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},y=function(e,n,t){var l="previous"===t?-1:1,r=s(n),o=r[0],i=r.slice(1);if(!o)return null;var a=i[0];if((0,c.j)(o)){if(a&&!(0,c.j)(a)&&a.rows){var u=a.rows.findIndex(function(e){return e.id===o.id}),d=a.rows[u+l];if(d)return E(d,t)}}else{if(!o.rows)return null;var f=o.rows.findIndex(function(n){return n.id===e}),d=o.rows[f+l];if(d)return E(d,t)}return y(o.id,i,t)},E=function(e,n){var t,l,r,o,i=null;if((0,c.j)(e)){var a="previous"===n?m([],s(e.cells),!1).reverse():e.cells;try{for(var u=g(a),d=u.next();!d.done;d=u.next()){var f=d.value;if(i=E(f,n))break}}catch(v){t={error:v}}finally{try{d&&!d.done&&(l=u.return)&&l.call(u)}finally{if(t)throw t.error}}i||(i=e)}else if(e.rows){var y="previous"===n?m([],s(e.rows),!1).reverse():e.rows;try{for(var h=g(y),p=h.next();!p.done;p=h.next()){var b=p.value;if(i=E(b,n))break}}catch(I){r={error:I}}finally{try{p&&!p.done&&(o=h.return)&&o.call(h)}finally{if(r)throw r.error}}}return i},h=function(e,n,t){void 0===t&&(t=0);var l=t*((n+1)/e),r=t===e-1,o=r?n-1:Math.min(Math.floor(l),n-1);return{action:r||l-o>.5?"rightOf":"leftOf",index:o}},p=function(e,n){var t=(0,f.G)(e),l=(0,v.Lp)(e,n),o=l.node,i=l.targetNodeId,a=l.action,u=(0,d.CG)(),c=(0,v.l4)(void 0===i?null:i);return(0,r.useMemo)(function(){return c&&o?function(){t[a](o,c,{focusAfter:u})}:null},[u,t,c,o])},b=function(e,n,t){for(var l=0;l<e.length;l++){var r=e[l],o=e[l+1],i=(0,c.j)(r)?r:null,a=o&&(0,c.j)(o)?null:o;if(i){var u=n(i,a);if(u)return u}if(t&&t(i,a))break}return null},I=function(){return(I=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},Z=function(e){var n=e.onClick,t=e.icon,o=e.style;return r.createElement(l.Z,{disabled:!n,style:I({margin:10,pointerEvents:"all"},o),size:"small",onClick:null!=n?n:void 0,color:"default"},t)},x=function(e){var n=e.nodeId,t=e.style,l=p(n,function(e,t){var l,r,o,i,a=b(t,function(e){return(null==e?void 0:e.cells.length)>1?e:null},function(e,n){var t,l;return null!==(l=e&&n&&(null===(t=null==n?void 0:n.rows)||void 0===t?void 0:t.findIndex(function(n){return n.id===e.id}))!==0)&&void 0!==l&&l});if(a)return{action:"above",node:e,targetNodeId:null==a?void 0:a.id};var u=(0,c.j)(null==t?void 0:t[0])?null==t?void 0:t[0]:null,d=null==u?void 0:u.cells.findIndex(function(e){return e.id===n}),f=y(n,t,"previous"),v=null==f?void 0:f.cells,s=h(null!==(r=null===(l=null==u?void 0:u.cells)||void 0===l?void 0:l.length)&&void 0!==r?r:0,null!==(o=null==v?void 0:v.length)&&void 0!==o?o:0,d),m=s.index;return{action:s.action,node:e,targetNodeId:null===(i=null==v?void 0:v[m])||void 0===i?void 0:i.id}});return r.createElement(Z,{onClick:l,icon:r.createElement(o.Z,null),style:t})},C=function(e){var n=e.nodeId,t=e.style,l=p(n,function(e,t){var l,r,o,i,a,u=b(t,function(e){return(null==e?void 0:e.cells.length)>1?e:null},function(e,n){var t,l,r,o;return null!==(o=e&&n&&(null===(t=null==n?void 0:n.rows)||void 0===t?void 0:t.findIndex(function(n){return n.id===e.id}))!==(null!==(r=null===(l=n.rows)||void 0===l?void 0:l.length)&&void 0!==r?r:0)-1)&&void 0!==o&&o});if(u)return{action:"below",node:e,targetNodeId:null==u?void 0:u.id};var d=(0,c.j)(null==t?void 0:t[0])?null==t?void 0:t[0]:null,f=y(n,t,"next"),v=null!==(l=null==d?void 0:d.cells.findIndex(function(e){return e.id===n}))&&void 0!==l?l:0,s=null==f?void 0:f.cells,m=h(null!==(o=null===(r=null==d?void 0:d.cells)||void 0===r?void 0:r.length)&&void 0!==o?o:0,null!==(i=null==s?void 0:s.length)&&void 0!==i?i:0,v),g=m.index;return{action:m.action,node:e,targetNodeId:null===(a=null==s?void 0:s[g])||void 0===a?void 0:a.id}});return r.createElement(Z,{onClick:l,icon:r.createElement(i.Z,null),style:t})},k=function(e){var n=e.nodeId,t=e.style,l=p(n,function(e,t){var l=b(t,function(e){var t=null==e?void 0:e.cells.findIndex(function(e){return e.id===n});return null==e?void 0:e.cells[t-1]});return{action:"leftOf",node:e,targetNodeId:null==l?void 0:l.id}});return r.createElement(Z,{onClick:l,icon:r.createElement(u.Z,null),style:t})},w=function(e){var n=e.nodeId,t=e.style,l=p(n,function(e,t){var l=b(t,function(e){var t=null==e?void 0:e.cells.findIndex(function(e){return e.id===n});return null==e?void 0:e.cells[t+1]});return{action:"rightOf",node:e,targetNodeId:null==l?void 0:l.id}});return r.createElement(Z,{onClick:l,icon:r.createElement(a.Z,null),style:t})}}}]);
//# sourceMappingURL=1321-5380203923d873c3.js.map