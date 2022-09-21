"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7916],{58868:function(e,r,t){var n=t(25773),a=t(53782),o=t(27378),i=t(38944),l=t(33056),u=t(82617),c=t(74662),s=t(50220),f=o.forwardRef((function(e,r){var t=e.classes,u=e.className,c=e.color,f=void 0===c?"primary":c,d=e.value,p=e.valueBuffer,g=e.variant,v=void 0===g?"indeterminate":g,h=(0,a.Z)(e,["classes","className","color","value","valueBuffer","variant"]),m=(0,s.Z)(),b={},y={bar1:{},bar2:{}};if("determinate"===v||"buffer"===v)if(void 0!==d){b["aria-valuenow"]=Math.round(d),b["aria-valuemin"]=0,b["aria-valuemax"]=100;var E=d-100;"rtl"===m.direction&&(E=-E),y.bar1.transform="translateX(".concat(E,"%)")}else 0;if("buffer"===v)if(void 0!==p){var C=(p||0)-100;"rtl"===m.direction&&(C=-C),y.bar2.transform="translateX(".concat(C,"%)")}else 0;return o.createElement("div",(0,n.Z)({className:(0,i.default)(t.root,t["color".concat((0,l.Z)(f))],u,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[v]),role:"progressbar"},b,{ref:r},h),"buffer"===v?o.createElement("div",{className:(0,i.default)(t.dashed,t["dashedColor".concat((0,l.Z)(f))])}):null,o.createElement("div",{className:(0,i.default)(t.bar,t["barColor".concat((0,l.Z)(f))],("indeterminate"===v||"query"===v)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[v]),style:y.bar1}),"determinate"===v?null:o.createElement("div",{className:(0,i.default)(t.bar,("indeterminate"===v||"query"===v)&&t.bar2Indeterminate,"buffer"===v?[t["color".concat((0,l.Z)(f))],t.bar2Buffer]:t["barColor".concat((0,l.Z)(f))]),style:y.bar2}))}));r.Z=(0,u.Z)((function(e){var r=function(r){return"light"===e.palette.type?(0,c.$n)(r,.62):(0,c._j)(r,.5)},t=r(e.palette.primary.main),n=r(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(f)},97082:function(e,r,t){t.d(r,{Bx:function(){return i},JU:function(){return l},T8:function(){return a},Z6:function(){return u},n8:function(){return o}});var n=t(44321),a=function(e,r){return{type:o,payload:{ids:r},meta:{resource:e,fetch:n.Jd,onFailure:{notification:{body:"ra.notification.http_error",level:"warning"}}}}},o="RA/CRUD_GET_MANY",i="RA/CRUD_GET_MANY_LOADING",l="RA/CRUD_GET_MANY_FAILURE",u="RA/CRUD_GET_MANY_SUCCESS"},83763:function(e,r,t){t.d(r,{UH:function(){return u},Uf:function(){return a},i_:function(){return l}});var n=function(e){return e&&void 0!==e.error},a=function(e){var r=e.input,t=e.matchingReferences,a=e.referenceRecord,o=e.translate,i=void 0===o?function(e){return e}:o,l=n(t)?i(t.error,{_:t.error}):null,u=r.value&&!a?i("ra.input.references.single_missing",{_:"ra.input.references.single_missing"}):null;return{waiting:r.value&&u&&!t||!r.value&&!t,error:r.value&&u&&l||!r.value&&l?r.value?u:l:null,warning:u||l,choices:Array.isArray(t)?t:[a].filter((function(e){return e}))}},o="REFERENCES_STATUS_READY",i="REFERENCES_STATUS_EMPTY",l=function(e,r){return e.value&&e.value.length!==r.length?r.length>0?"REFERENCES_STATUS_INCOMPLETE":i:o},u=function(e){var r=e.input,t=e.matchingReferences,a=e.referenceRecords,u=e.translate,c=void 0===u?function(e){return e}:u,s=l(r,a),f=n(t)?c(t.error,{_:t.error}):null;return{waiting:!t&&r.value&&s===i||!t&&!r.value,error:f&&(!r.value||r.value&&s===i)?c("ra.input.references.all_missing",{_:"ra.input.references.all_missing"}):null,warning:f||r.value&&s!==o?f||c("ra.input.references.many_missing",{_:"ra.input.references.many_missing"}):null,choices:Array.isArray(t)?t:a}}},47580:function(e,r,t){t.d(r,{O:function(){return h}});var n=t(27378),a=t(35344),o=t(83763),i=t(33753),l=t(12412),u=t(73208),c=t(10605),s=t(14911),f=t(6338),d=t(67901),p=function(){return p=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},p.apply(this,arguments)},g=function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))},v={},h=function(e){var r,t,h,y,E=e.basePath,C=e.input,S=e.page,O=void 0===S?1:S,w=e.perPage,P=void 0===w?25:w,T=e.filter,R=void 0===T?v:T,_=e.reference,x=e.filterToQuery,k=e.sort,Z=e.enableGetChoices,j=(0,d.e)(e),A=(0,i.Z)(),N=(0,u.Z)({page:O,perPage:P}),V=N.pagination,I=N.setPagination,F=N.page,q=N.setPage,D=N.perPage,U=N.setPerPage,L=(0,c.Z)(k),B=L.sort,G=L.setSort,M=(0,n.useCallback)((function(e,r){void 0===r&&(r="ASC"),G({field:e,order:r}),q(1)}),[q,G]),Q=(0,s.Z)({permanentFilter:R,filterToQuery:x}),Y=Q.filter,z=Q.setFilter,J=(0,f.Z)(),$=J.selectedIds,W=J.onSelect,X=J.onToggleItem,H=J.onUnselectItems,K=(0,a.Z)(_,V,B,Y,{action:"CUSTOM_QUERY",enabled:!Z||Z(Y)}),ee=K.ids,re=K.data,te=K.total,ne=K.loaded,ae=K.loading,oe=K.error,ie=K.refetch,le=(0,l.Z)({id:C.value,reference:_}),ue=le.referenceRecord,ce=le.refetch,se=le.error,fe=le.loading,de=le.loaded;!ue||ee.includes(C.value)?(t=ee,h=re,y=te):(t=g([C.value],ee,!0),h=p(((r={})[C.value]=ue,r),re),y=te+1);var pe=(0,o.Uf)({input:C,matchingReferences:Object.keys(h).map((function(e){return h[e]})),referenceRecord:ue,translate:A}),ge=(0,n.useCallback)((function(){ie(),ce()}),[ie,ce]);return{possibleValues:{basePath:E,data:h,ids:t,total:y,error:oe,loaded:ne,loading:ae,hasCreate:!1,page:F,setPage:q,perPage:D,setPerPage:U,currentSort:B,setSort:M,filterValues:Y,displayedFilters:[],setFilters:z,showFilter:b,hideFilter:m,selectedIds:$,onSelect:W,onToggleItem:X,onUnselectItems:H,refetch:ge,resource:j},referenceRecord:{data:ue,loaded:de,loading:fe,error:se,refetch:ce},dataStatus:{error:pe.error,loading:pe.waiting,warning:pe.warning},choices:t.map((function(e){return h[e]})),error:pe.error,loading:ae||fe,loaded:ne&&de,filter:Y,refetch:ge,setFilter:z,pagination:V,setPagination:I,sort:B,setSort:G,warning:pe.warning}},m=function(){},b=function(){}},14911:function(e,r,t){var n=t(27378),a=t(66726),o=t.n(a),i=t(56141),l=t.n(i),u=t(59526),c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},c.apply(this,arguments)},s=function(e){return{q:e}};r.Z=function(e){var r=e.filterToQuery,t=void 0===r?s:r,a=e.permanentFilter,i=void 0===a?{}:a,f=e.debounceTime,d=void 0===f?500:f,p=(0,n.useRef)(i),g=(0,n.useRef)(),v=(0,u.kj)(c(c({},i),t(""))),h=v[0],m=v[1],b=JSON.stringify(i);return(0,n.useEffect)((function(){l()(p.current,i)||(p.current=i,m(c(c({},i),t(g.current))))}),[b,p,t]),{filter:h,setFilter:(0,n.useCallback)(o()((function(e){m(c(c({},i),t(e))),g.current=e}),d),[b])}}},73208:function(e,r,t){var n=t(27378),a=function(){return a=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},a.apply(this,arguments)},o=function(e,r){return a(a({},e),r)},i={page:1,perPage:25};r.Z=function(e){void 0===e&&(e={});var r=(0,n.useReducer)(o,a(a({},i),e)),t=r[0],l=r[1],u=(0,n.useRef)(!0),c=(0,n.useCallback)((function(e){return l({perPage:e,page:1})}),[]),s=(0,n.useCallback)((function(e){return l({page:e})}),[]);return(0,n.useEffect)((function(){u.current?u.current=!1:c(e.perPage||25)}),[e.perPage,c]),{page:t.page,perPage:t.perPage,pagination:t,setPage:s,setPerPage:c,setPagination:l}}},12412:function(e,r,t){var n=t(87230);r.Z=function(e){var r=e.reference,t=e.id,a=(0,n.Z)(r,[t]),o=a.data,i=a.error,l=a.loading,u=a.loaded,c=a.refetch;return{referenceRecord:i?void 0:o[0],refetch:c,error:i,loading:l,loaded:u}}},6338:function(e,r,t){var n=t(27378),a=t(59526),o=function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))},i=[];r.Z=function(e){void 0===e&&(e=i);var r=(0,a.kj)(e),t=r[0],l=r[1],u=(0,n.useRef)(!0);return(0,n.useEffect)((function(){u.current?u.current=!1:l(e)}),[e,l]),{selectedIds:t,onSelect:(0,n.useCallback)((function(e){l(e)}),[l]),onToggleItem:(0,n.useCallback)((function(e){l((function(r){var t=r.indexOf(e);return t>-1?o(o([],r.slice(0,t),!0),r.slice(t+1),!0):o(o([],r,!0),[e],!1)}))}),[l]),onUnselectItems:(0,n.useCallback)((function(){l([])}),[l])}}},10605:function(e,r,t){var n=t(27378),a=t(76316),o=function(){return o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},o.apply(this,arguments)},i=function(e,r){switch(r.type){case"SET_SORT":return r.payload.sort;case"SET_SORT_FIELD":var t=r.payload.field;return{field:t,order:n=e.field===t&&e.order===a.Dn?a.hW:a.Dn};case"SET_SORT_ORDER":var n=r.payload.order;return o(o({},e),{order:n});default:return e}},l={field:"id",order:"DESC"};r.Z=function(e){void 0===e&&(e=l);var r=(0,n.useReducer)(i,e),t=r[0],a=r[1],o=(0,n.useRef)(!0);return(0,n.useEffect)((function(){o.current?o.current=!1:a({type:"SET_SORT",payload:{sort:e}})}),[e.field,e.order]),{setSort:(0,n.useCallback)((function(e){return a({type:"SET_SORT",payload:{sort:e}})}),[a]),setSortField:(0,n.useCallback)((function(e){return a({type:"SET_SORT_FIELD",payload:{field:e}})}),[a]),setSortOrder:(0,n.useCallback)((function(e){return a({type:"SET_SORT_ORDER",payload:{order:e}})}),[a]),sort:t}}},35344:function(e,r,t){var n=t(27378),a=t(99729),o=t.n(a),i=t(11318),l={page:1,perPage:25},u={field:"id",order:"DESC"},c={},s=[],f={},d=function(e){return null!==e.ids};r.Z=function(e,r,t,a,p){void 0===r&&(r=l),void 0===t&&(t=u),void 0===a&&(a=c);var g=JSON.stringify({pagination:r,sort:t,filter:a}),v=(0,i.W)({type:"getList",resource:e,payload:{pagination:r,sort:t,filter:a}},p,(function(r){return{ids:o()(r.admin.resources,[e,"list","cachedRequests",g,"ids"],null),allRecords:o()(r.admin.resources,[e,"data"],f)}}),(function(r){return o()(r.admin.resources,[e,"list","cachedRequests",g,"total"])}),d),h=v.data,m=h.ids,b=h.allRecords,y=v.total,E=v.error,C=v.loading,S=v.loaded,O=v.refetch;return{data:(0,n.useMemo)((function(){return null===m?f:m.map((function(e){return b[e]})).reduce((function(e,r){return r?(e[r.id]=r,e):e}),{})}),[m,b]),ids:null===m?s:m,total:y,error:E,loading:C,loaded:S,refetch:O}}},87230:function(e,r,t){var n,a=t(27378),o=t(31542),i=t(37254),l=t(45683),u=t(66726),c=t.n(u),s=t(68946),f=t.n(s),d=t(56141),p=t.n(d),g=t(99729),v=t.n(g),h=t(97082),m=t(59526),b=t(20684),y=t(40137),E=function(){return E=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},E.apply(this,arguments)},C=function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))},S={},O={action:h.n8},w=function(){return(0,l.P1)([function(e,r){return v()(e,["admin","resources",r,"data"])},function(e,r,t){return t}],(function(e,r){return e?r.map((function(r){return e[r]})):r.map((function(e){}))}))},P=c()((function(){Object.keys(S).forEach((function(e){var r=C([],S[e],!0),t=r.reduce((function(e,r){var t=r.ids;return f()(e,t)}),[]).filter((function(e){return null!=e&&""!==e}));0!==t.length?(n.getMany(e,{ids:t},O).then((function(e){return o.unstable_batchedUpdates((function(){return r.forEach((function(r){var t=r.ids,n=r.setState,a=r.onSuccess;(n((function(e){return E(E({},e),{error:null,loading:!1,loaded:!0})})),a)&&a({data:t.map((function(r){return e.data.find((function(e){return e.id==r}))}))})}))}))})).catch((function(e){return o.unstable_batchedUpdates((function(){return r.forEach((function(r){var t=r.setState,n=r.onFailure;t({error:e,loading:!1,loaded:!1}),n&&n(e)}))}))})),delete S[e]):r.forEach((function(e){e.ids;var r=e.setState,t=e.onSuccess;r({data:T,loading:!1,loaded:!0}),t&&t({data:T})}))}))})),T=[];r.Z=function(e,r,t){var o;void 0===t&&(t={enabled:!0});var l=(0,a.useMemo)(w,[]),u=(0,i.v9)((function(t){return l(t,e,r)})),c=(0,y.Z)(),s=(0,m.kj)(0),f=s[0],d=s[1],g=(0,a.useCallback)((function(){d((function(e){return e+1}))}),[d]),v=(0,m.kj)({data:u,error:null,loading:0!==r.length,loaded:0!==u.length&&!u.includes(void 0),refetch:g}),h=v[0],C=v[1];if(!p()(h.data,u)){var O=E(E({},h),{data:(null===u||void 0===u?void 0:u.includes(void 0))?h.data:u,loading:0!==(null===(o=h.data)||void 0===o?void 0:o.length)&&(h.loading||(null===u||void 0===u?void 0:u.includes(void 0)))});p()(h,O)||C(O)}return n=(0,b.Z)(),(0,a.useEffect)((function(){!1!==t.enabled&&(S[e]||(S[e]=[]),S[e]=S[e].concat({ids:r,setState:C,onSuccess:t&&t.onSuccess,onFailure:t&&t.onFailure}),P())}),[JSON.stringify({resource:e,ids:r,options:t,version:c,innerVersion:f}),n]),h}},44641:function(e,r,t){var n=t(27378),a=t(99729),o=t.n(a),i=t(33753);r.Z=function(e){var r=e.optionText,t=void 0===r?"name":r,a=e.optionValue,l=void 0===a?"id":a,u=e.disableValue,c=void 0===u?"disabled":u,s=e.translateChoice,f=void 0===s||s,d=(0,i.Z)();return{getChoiceText:(0,n.useCallback)((function(e){if((0,n.isValidElement)(t))return(0,n.cloneElement)(t,{record:e});var r="function"===typeof t?t(e):o()(e,t);return(0,n.isValidElement)(r)?r:f?d(r,{_:r}):String(r)}),[t,d,f]),getChoiceValue:(0,n.useCallback)((function(e){return o()(e,l)}),[l]),getDisableValue:(0,n.useCallback)((function(e){return o()(e,c)}),[c])}}},10262:function(e,r,t){var n=t(27378),a=t(23615),o=t.n(a),i=t(20919),l=function(e){var r=e.label,t=e.error;return n.createElement(i.Z,{error:!0,disabled:!0,label:r,value:t,margin:"normal"})};l.propTypes={error:o().string.isRequired,label:o().string.isRequired},r.Z=l},49983:function(e,r,t){var n=t(27378),a=t(23615),o=t.n(a),i=t(20587),l=t(47580),u=t(16921),c=t(9836),s=t(26702),f=t(39766),d=t(10262),p=function(){return p=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},p.apply(this,arguments)},g=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},v=function(e){var r=e.format,t=e.onBlur,a=e.onChange,o=e.onFocus,u=e.parse,c=e.validate,s=g(e,["format","onBlur","onChange","onFocus","parse","validate"]),f=(0,i.Z)(p({format:r,onBlur:t,onChange:a,onFocus:o,parse:u,validate:c},s));return n.createElement(h,p({},f,s,(0,l.O)(p(p({},s),f))))};v.propTypes={allowEmpty:o().bool,basePath:o().string,children:o().element.isRequired,className:o().string,classes:o().object,filter:o().object,filterToQuery:o().func.isRequired,label:o().string,onChange:o().func,perPage:o().number,record:o().object,reference:o().string.isRequired,resource:o().string,sort:o().shape({field:o().string,order:o().oneOf(["ASC","DESC"])}),source:o().string},v.defaultProps={filter:{},filterToQuery:function(e){return e?{q:e}:{}},perPage:25,sort:{field:"id",order:"DESC"}};var h=function(e){var r=e.allowEmpty,t=e.basePath,a=e.children,o=e.choices,i=e.classes,l=e.className,v=e.error,h=e.helperText,m=(e.id,e.input),b=e.isRequired,y=e.label,E=e.meta,C=e.possibleValues,S=e.resource,O=e.reference,w=e.setFilter,P=e.setPagination,T=e.setSort,R=e.source,_=e.warning,x=g(e,["allowEmpty","basePath","children","choices","classes","className","error","helperText","id","input","isRequired","label","meta","possibleValues","resource","reference","setFilter","setPagination","setSort","source","warning"]);if(1!==n.Children.count(a))throw new Error("<ReferenceInput> only accepts a single child");if(v)return n.createElement(d.Z,{label:y,error:v});var k=_?p(p({},E),{error:_}):E;(0,u.Z)(void 0!==h&&!1!==h,"<ReferenceInput> doesn't accept a helperText prop. Set the helperText prop on the child component instead");var Z=!1===h?{helperText:h}:{};return n.createElement(c.U,{value:O},n.createElement(s.Z,{value:C},(0,n.cloneElement)(a,p(p({allowEmpty:r,classes:i,className:l,input:m,isRequired:b,label:y,resource:S,meta:k,source:R,choices:o,basePath:t,setFilter:w,setPagination:P,setSort:T,translateChoice:!1},Z),function(e){e.dataStatus,e.enableGetChoices,e.filter,e.filterToQuery,e.onChange,e.perPage,e.reference,e.referenceRecord,e.referenceSource,e.sort,e.validation;var r=g(e,["dataStatus","enableGetChoices","filter","filterToQuery","onChange","perPage","reference","referenceRecord","referenceSource","sort","validation"]);return(0,f.Z)(r)}(x)))))};r.Z=v},11839:function(e,r,t){t.d(r,{l:function(){return w}});var n=t(27378),a=t(23615),o=t.n(a),i=t(5633),l=t(20373),u=t(33753),c=t(16921),s=t(44641),f=t(20587),d=t(71333),p=t(87398),g=t(62162),v=t(39766),h=t(34661),m=t(83879),b=t(21252),y=function(){return y=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},y.apply(this,arguments)},E=function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(r){o(r)}}function l(e){try{u(n.throw(e))}catch(r){o(r)}}function u(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,l)}u((n=n.apply(e,r||[])).next())}))},C=function(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(l){o=[6,l],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},S=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},O=function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))},w=function(e){var r=e.allowEmpty,t=e.choices,a=void 0===t?[]:t,o=(e.classes,e.className),l=e.create,v=e.createLabel,w=e.createValue,R=e.disableValue,_=e.emptyText,x=e.emptyValue,k=e.format,Z=e.helperText,j=e.label,A=(e.loaded,e.loading),N=e.margin,V=void 0===N?"dense":N,I=e.onBlur,F=e.onChange,q=e.onCreate,D=e.onFocus,U=e.options,L=e.optionText,B=e.optionValue,G=e.parse,M=e.resource,Q=e.source,Y=e.translateChoice,z=e.validate,J=S(e,["allowEmpty","choices","classes","className","create","createLabel","createValue","disableValue","emptyText","emptyValue","format","helperText","label","loaded","loading","margin","onBlur","onChange","onCreate","onFocus","options","optionText","optionValue","parse","resource","source","translateChoice","validate"]),$=(0,u.Z)(),W=T(e);(0,c.Z)(void 0===Q,"If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the source prop"),(0,c.Z)(void 0===a,"If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the choices prop");var X=(0,s.Z)({optionText:L,optionValue:B,disableValue:R,translateChoice:Y}),H=X.getChoiceText,K=X.getChoiceValue,ee=X.getDisableValue,re=(0,f.Z)(y({format:k,onBlur:I,onChange:F,onFocus:D,parse:G,resource:M,source:Q,validate:z},J)),te=re.id,ne=re.input,ae=re.isRequired,oe=re.meta,ie=oe.touched,le=oe.error,ue=oe.submitError,ce=(0,n.useCallback)((function(){return n.isValidElement(_)?n.cloneElement(_):""===_?"\u2003":$(_,{_:_})}),[_,$]),se=(0,n.useCallback)((function(e){return H(e)}),[H]),fe=(0,n.useCallback)((function(e,r){return E(void 0,void 0,void 0,(function(){var t;return C(this,(function(n){return r?(t=K(r),ne.onChange(t),[2]):(ne.onChange(e),[2])}))}))}),[ne,K]),de=(0,b.p)({create:l,createLabel:v,createValue:w,handleChange:fe,onCreate:q,optionText:L}),pe=de.getCreateItem,ge=de.handleChange,ve=de.createElement,he=l||q?pe():null,me=l||q?O(O([],a,!0),[he],!1):a,be=(0,n.useCallback)((function(e){return e?n.createElement(i.Z,{key:K(e),value:K(e),disabled:ee(e)},se(he&&(null===e||void 0===e?void 0:e.id)===he.id?he:e)):null}),[K,ee,se,he]);return A?n.createElement(h.Z,{id:te,label:j,source:Q,resource:M,className:o,isRequired:ae,meta:oe,input:ne,margin:V},n.createElement(m.Z,null)):n.createElement(n.Fragment,null,n.createElement(p.Z,y({id:te},ne,{onChange:ge,select:!0,label:""!==j&&!1!==j&&n.createElement(d.Z,{label:j,source:Q,resource:M,isRequired:ae}),className:W.input+" "+o,clearAlwaysVisible:!0,error:!(!ie||!le&&!ue),helperText:n.createElement(g.Z,{touched:ie,error:le||ue,helperText:Z}),margin:V},U,P(J)),r?n.createElement(i.Z,{value:x,key:"null","aria-label":$("ra.action.clear_input_value"),title:$("ra.action.clear_input_value")},ce()):null,me.map(be)),ve)};w.propTypes={allowEmpty:o().bool,emptyText:o().oneOfType([o().string,o().element]),emptyValue:o().any,choices:o().arrayOf(o().object),classes:o().object,className:o().string,label:o().oneOfType([o().string,o().bool]),options:o().object,optionText:o().oneOfType([o().string,o().func,o().element]).isRequired,optionValue:o().string.isRequired,disableValue:o().string,resettable:o().bool,resource:o().string,source:o().string,translateChoice:o().bool},w.defaultProps={emptyText:"",emptyValue:"",options:{},optionText:"name",optionValue:"id",translateChoice:!0,disableValue:"disabled"};var P=function(e){e.addLabel,e.afterSubmit,e.allowNull,e.beforeSubmit,e.choices,e.className,e.crudGetMatching,e.crudGetOne,e.data,e.filter,e.filterToQuery,e.formatOnBlur,e.isEqual,e.limitChoicesToValue,e.multiple,e.name,e.pagination,e.perPage,e.ref,e.reference,e.refetch,e.render,e.setFilter,e.setPagination,e.setSort,e.sort,e.subscription,e.type,e.validateFields,e.validation,e.value;var r=S(e,["addLabel","afterSubmit","allowNull","beforeSubmit","choices","className","crudGetMatching","crudGetOne","data","filter","filterToQuery","formatOnBlur","isEqual","limitChoicesToValue","multiple","name","pagination","perPage","ref","reference","refetch","render","setFilter","setPagination","setSort","sort","subscription","type","validateFields","validation","value"]);return(0,v.Z)(r)},T=(0,l.Z)((function(e){return y(y({},p.n),{input:{minWidth:e.spacing(20)}})}),{name:"RaSelectInput"})},21252:function(e,r,t){t.d(r,{p:function(){return s},q:function(){return d}});var n=t(27378),a=t(33753),o=t(47215),i=t.n(o),l=function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(r){o(r)}}function l(e){try{u(n.throw(e))}catch(r){o(r)}}function u(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,l)}u((n=n.apply(e,r||[])).next())}))},u=function(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(l){o=[6,l],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},c=function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))},s=function(e){var r=e.create,t=e.createLabel,o=void 0===t?"ra.action.create":t,s=e.createItemLabel,d=void 0===s?"ra.action.create_item":s,p=e.createValue,g=void 0===p?"@@ra-create":p,v=e.optionText,h=void 0===v?"name":v,m=e.filter,b=e.handleChange,y=e.onCreate,E=(0,a.Z)(),C=(0,n.useState)(!1),S=C[0],O=C[1],w={filter:m,onCancel:function(){return O(!1)},onCreate:function(e){O(!1),b(void 0,e)}};return{getCreateItem:function(){return"string"!==typeof h?{id:g,name:m&&d?E(d,{item:m,_:d}):E(o,{_:o})}:i()({id:g},h,m&&d?E(d,{item:m,_:d}):E(o,{_:o}))},handleChange:function(e){return l(void 0,void 0,void 0,(function(){var t,a,o,i;return u(this,(function(l){switch(l.label){case 0:return t=(null===(i=e.target)||void 0===i?void 0:i.value)||e,a=Array.isArray(t)?c([],t,!0).pop():t,(null===e||void 0===e?void 0:e.preventDefault)&&(e.preventDefault(),e.stopPropagation()),(null===a||void 0===a?void 0:a.id)!==g&&a!==g?[3,3]:(0,n.isValidElement)(r)?[3,2]:[4,y(m)];case 1:return(o=l.sent())?(b(e,o),[2]):[3,3];case 2:return O(!0),[2];case 3:return b(e,void 0),[2]}}))}))},createElement:S&&(0,n.isValidElement)(r)?n.createElement(f.Provider,{value:w},r):null}},f=(0,n.createContext)(void 0),d=function(){return(0,n.useContext)(f)}},83879:function(e,r,t){var n=t(27378),a=t(58868),o=t(23615),i=t.n(o),l=t(20373),u=t(60042),c=t.n(u),s=t(59526),f=function(){return f=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},f.apply(this,arguments)},d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},p=(0,l.Z)((function(e){return{root:{margin:e.spacing(1)+"px 0",width:e.spacing(20)+"px"}}}),{name:"RaLinearProgress"}),g=function(e){var r=e.timeout,t=void 0===r?1e3:r,o=d(e,["timeout"]),i=(o.classes,o.className),l=d(o,["classes","className"]),u=p(o);return(0,s.KS)(t)?n.createElement(a.Z,f({className:c()(u.root,i)},l)):null};g.propTypes={classes:i().object,className:i().string,timeout:i().number},g.displayName="LinearProgress",r.Z=g},45683:function(e,r){function t(e,r){return e===r}function n(e,r,t){if(null===r||null===t||r.length!==t.length)return!1;for(var n=r.length,a=0;a<n;a++)if(!e(r[a],t[a]))return!1;return!0}function a(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=null,o=null;return function(){return n(r,a,arguments)||(o=e.apply(null,arguments)),a=arguments,o}}function o(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"===typeof e}))){var t=r.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return r}function i(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return function(){for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];var l=0,u=n.pop(),c=o(n),s=e.apply(void 0,[function(){return l++,u.apply(null,arguments)}].concat(t)),f=a((function(){for(var e=[],r=c.length,t=0;t<r;t++)e.push(c[t].apply(null,arguments));return s.apply(null,e)}));return f.resultFunc=u,f.recomputations=function(){return l},f.resetRecomputations=function(){return l=0},f}}var l=r.P1=i(a)}}]);