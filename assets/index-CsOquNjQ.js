(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wm={exports:{}},cu={},Xm={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),d0=Symbol.for("react.portal"),h0=Symbol.for("react.fragment"),p0=Symbol.for("react.strict_mode"),m0=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),y0=Symbol.for("react.suspense"),x0=Symbol.for("react.memo"),S0=Symbol.for("react.lazy"),Bh=Symbol.iterator;function M0(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ym=Object.assign,$m={};function cs(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||jm}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qm(){}qm.prototype=cs.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||jm}var dd=fd.prototype=new qm;dd.constructor=fd;Ym(dd,cs.prototype);dd.isPureReactComponent=!0;var zh=Array.isArray,Km=Object.prototype.hasOwnProperty,hd={current:null},Zm={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Km.call(e,i)&&!Zm.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];r.children=u}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:ma,type:t,key:o,ref:s,props:r,_owner:hd.current}}function E0(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function T0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hh=/\/+/g;function ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?T0(""+t.key):e.toString(36)}function gl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ma:case d0:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ku(s,0):i,zh(r)?(n="",t!=null&&(n=t.replace(Hh,"$&/")+"/"),gl(r,e,n,"",function(c){return c})):r!=null&&(pd(r)&&(r=E0(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Hh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",zh(t))for(var l=0;l<t.length;l++){o=t[l];var u=i+ku(o,l);s+=gl(o,e,n,u,r)}else if(u=M0(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=i+ku(o,l++),s+=gl(o,e,n,u,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function La(t,e,n){if(t==null)return t;var i=[],r=0;return gl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function w0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},vl={transition:null},A0={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:vl,ReactCurrentOwner:hd};function Jm(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=cs;rt.Fragment=h0;rt.Profiler=m0;rt.PureComponent=fd;rt.StrictMode=p0;rt.Suspense=y0;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;rt.act=Jm;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ym({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=hd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Km.call(e,u)&&!Zm.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:ma,type:t.type,key:r,ref:o,props:i,_owner:s}};rt.createContext=function(t){return t={$$typeof:v0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g0,_context:t},t.Consumer=t};rt.createElement=Qm;rt.createFactory=function(t){var e=Qm.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:_0,render:t}};rt.isValidElement=pd;rt.lazy=function(t){return{$$typeof:S0,_payload:{_status:-1,_result:t},_init:w0}};rt.memo=function(t,e){return{$$typeof:x0,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};rt.unstable_act=Jm;rt.useCallback=function(t,e){return gn.current.useCallback(t,e)};rt.useContext=function(t){return gn.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};rt.useEffect=function(t,e){return gn.current.useEffect(t,e)};rt.useId=function(){return gn.current.useId()};rt.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return gn.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};rt.useRef=function(t){return gn.current.useRef(t)};rt.useState=function(t){return gn.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return gn.current.useTransition()};rt.version="18.3.1";Xm.exports=rt;var sr=Xm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=sr,R0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),L0=Object.prototype.hasOwnProperty,b0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D0={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)L0.call(e,i)&&!D0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:R0,type:t,key:o,ref:s,props:r,_owner:b0.current}}cu.Fragment=P0;cu.jsx=eg;cu.jsxs=eg;Wm.exports=cu;var Ni=Wm.exports,tg={exports:{}},kn={},ng={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,ee){var ie=F.length;F.push(ee);e:for(;0<ie;){var me=ie-1>>>1,Ce=F[me];if(0<r(Ce,ee))F[me]=ee,F[ie]=Ce,ie=me;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var ee=F[0],ie=F.pop();if(ie!==ee){F[0]=ie;e:for(var me=0,Ce=F.length,We=Ce>>>1;me<We;){var te=2*(me+1)-1,ce=F[te],Se=te+1,Ee=F[Se];if(0>r(ce,ie))Se<Ce&&0>r(Ee,ce)?(F[me]=Ee,F[Se]=ie,me=Se):(F[me]=ce,F[te]=ie,me=te);else if(Se<Ce&&0>r(Ee,ie))F[me]=Ee,F[Se]=ie,me=Se;else break e}}return ee}function r(F,ee){var ie=F.sortIndex-ee.sortIndex;return ie!==0?ie:F.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],h=1,m=null,p=3,y=!1,E=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=F)i(c),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(c)}}function w(F){if(T=!1,x(F),!E)if(n(u)!==null)E=!0,z(B);else{var ee=n(c);ee!==null&&Y(w,ee.startTime-F)}}function B(F,ee){E=!1,T&&(T=!1,d(O),O=-1),y=!0;var ie=p;try{for(x(ee),m=n(u);m!==null&&(!(m.expirationTime>ee)||F&&!R());){var me=m.callback;if(typeof me=="function"){m.callback=null,p=m.priorityLevel;var Ce=me(m.expirationTime<=ee);ee=t.unstable_now(),typeof Ce=="function"?m.callback=Ce:m===n(u)&&i(u),x(ee)}else i(u);m=n(u)}if(m!==null)var We=!0;else{var te=n(c);te!==null&&Y(w,te.startTime-ee),We=!1}return We}finally{m=null,p=ie,y=!1}}var I=!1,b=null,O=-1,P=5,v=-1;function R(){return!(t.unstable_now()-v<P)}function j(){if(b!==null){var F=t.unstable_now();v=F;var ee=!0;try{ee=b(!0,F)}finally{ee?V():(I=!1,b=null)}}else I=!1}var V;if(typeof S=="function")V=function(){S(j)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ne=J.port2;J.port1.onmessage=j,V=function(){ne.postMessage(null)}}else V=function(){_(j,0)};function z(F){b=F,I||(I=!0,V())}function Y(F,ee){O=_(function(){F(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){E||y||(E=!0,z(B))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(p){case 1:case 2:case 3:var ee=3;break;default:ee=p}var ie=p;p=ee;try{return F()}finally{p=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,ee){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ie=p;p=F;try{return ee()}finally{p=ie}},t.unstable_scheduleCallback=function(F,ee,ie){var me=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?me+ie:me):ie=me,F){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=ie+Ce,F={id:h++,callback:ee,priorityLevel:F,startTime:ie,expirationTime:Ce,sortIndex:-1},ie>me?(F.sortIndex=ie,e(c,F),n(u)===null&&F===n(c)&&(T?(d(O),O=-1):T=!0,Y(w,ie-me))):(F.sortIndex=Ce,e(u,F),E||y||(E=!0,z(B))),F},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(F){var ee=p;return function(){var ie=p;p=ee;try{return F.apply(this,arguments)}finally{p=ie}}}})(ig);ng.exports=ig;var U0=ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=sr,On=U0;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,Zs={};function Jr(t,e){Qo(t,e),Qo(t+"Capture",e)}function Qo(t,e){for(Zs[t]=e,t=0;t<e.length;t++)rg.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=Object.prototype.hasOwnProperty,N0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vh={},Gh={};function F0(t){return kc.call(Gh,t)?!0:kc.call(Vh,t)?!1:N0.test(t)?Gh[t]=!0:(Vh[t]=!0,!1)}function O0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k0(t,e,n,i){if(e===null||typeof e>"u"||O0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);tn[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);tn[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);tn[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vd(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k0(e,n,r,i)&&(n=null),i||r===null?F0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Po=Symbol.for("react.portal"),Lo=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),sg=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),Wh=Symbol.iterator;function Ms(t){return t===null||typeof t!="object"?null:(t=Wh&&t[Wh]||t["@@iterator"],typeof t=="function"?t:null)}var It=Object.assign,Bu;function Fs(t){if(Bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bu=e&&e[1]||""}return`
`+Bu+t}var zu=!1;function Hu(t,e){if(!t||zu)return"";zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,l=o.length-1;1<=s&&0<=l&&r[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(r[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||r[s]!==o[l]){var u=`
`+r[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function B0(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function Vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lo:return"Fragment";case Po:return"Portal";case Bc:return"Profiler";case _d:return"StrictMode";case zc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case og:return(t._context.displayName||"Context")+".Provider";case yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xd:return e=t.displayName||null,e!==null?e:Vc(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Vc(t(e))}catch{}}return null}function z0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vc(e);case 8:return e===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H0(t){var e=lg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=H0(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=lg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gc(t,e){var n=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cg(t,e){e=e.checked,e!=null&&vd(t,"checked",e,!1)}function Wc(t,e){cg(t,e);var n=vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xc(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xc(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Go(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(Os(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function fg(t,e){var n=vr(e.value),i=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ua,hg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V0=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){V0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var G0=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(t,e){if(e){if(G0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,Wo=null,Xo=null;function qh(t){if(t=_a(t)){if(typeof Zc!="function")throw Error(de(280));var e=t.stateNode;e&&(e=mu(e),Zc(t.stateNode,t.type,e))}}function gg(t){Wo?Xo?Xo.push(t):Xo=[t]:Wo=t}function vg(){if(Wo){var t=Wo,e=Xo;if(Xo=Wo=null,qh(t),e)for(t=0;t<e.length;t++)qh(e[t])}}function _g(t,e){return t(e)}function yg(){}var Vu=!1;function xg(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return _g(t,e,n)}finally{Vu=!1,(Wo!==null||Xo!==null)&&(yg(),vg())}}function Js(t,e){var n=t.stateNode;if(n===null)return null;var i=mu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var Qc=!1;if(Oi)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Qc=!1}function W0(t,e,n,i,r,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Vs=!1,Nl=null,Fl=!1,Jc=null,X0={onError:function(t){Vs=!0,Nl=t}};function j0(t,e,n,i,r,o,s,l,u){Vs=!1,Nl=null,W0.apply(X0,arguments)}function Y0(t,e,n,i,r,o,s,l,u){if(j0.apply(this,arguments),Vs){if(Vs){var c=Nl;Vs=!1,Nl=null}else throw Error(de(198));Fl||(Fl=!0,Jc=c)}}function eo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kh(t){if(eo(t)!==t)throw Error(de(188))}function $0(t){var e=t.alternate;if(!e){if(e=eo(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Kh(r),t;if(o===i)return Kh(r),e;o=o.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,l=r.child;l;){if(l===n){s=!0,n=r,i=o;break}if(l===i){s=!0,i=r,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,i=r;break}if(l===i){s=!0,i=o,n=r;break}l=l.sibling}if(!s)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function Mg(t){return t=$0(t),t!==null?Eg(t):null}function Eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Eg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=On.unstable_scheduleCallback,Zh=On.unstable_cancelCallback,q0=On.unstable_shouldYield,K0=On.unstable_requestPaint,Ot=On.unstable_now,Z0=On.unstable_getCurrentPriorityLevel,Md=On.unstable_ImmediatePriority,wg=On.unstable_UserBlockingPriority,Ol=On.unstable_NormalPriority,Q0=On.unstable_LowPriority,Ag=On.unstable_IdlePriority,fu=null,yi=null;function J0(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(fu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:ny,ey=Math.log,ty=Math.LN2;function ny(t){return t>>>=0,t===0?32:31-(ey(t)/ty|0)|0}var Ia=64,Na=4194304;function ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~r;l!==0?i=ks(l):(o&=s,o!==0&&(i=ks(o)))}else s=n&~r,s!==0?i=ks(s):o!==0&&(i=ks(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function iy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-li(o),l=1<<s,u=r[s];u===-1?(!(l&n)||l&i)&&(r[s]=iy(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function oy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pg,Td,Lg,bg,Dg,tf=!1,Fa=[],ar=null,lr=null,ur=null,ea=new Map,ta=new Map,tr=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qh(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function Ts(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=_a(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ay(t,e,n,i,r){switch(e){case"focusin":return ar=Ts(ar,t,e,n,i,r),!0;case"dragenter":return lr=Ts(lr,t,e,n,i,r),!0;case"mouseover":return ur=Ts(ur,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ea.set(o,Ts(ea.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ta.set(o,Ts(ta.get(o)||null,t,e,n,i,r)),!0}return!1}function Ug(t){var e=kr(t.target);if(e!==null){var n=eo(e);if(n!==null){if(e=n.tag,e===13){if(e=Sg(n),e!==null){t.blockedOn=e,Dg(t.priority,function(){Lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Kc=i,n.target.dispatchEvent(i),Kc=null}else return e=_a(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function Jh(t,e,n){_l(t)&&n.delete(e)}function ly(){tf=!1,ar!==null&&_l(ar)&&(ar=null),lr!==null&&_l(lr)&&(lr=null),ur!==null&&_l(ur)&&(ur=null),ea.forEach(Jh),ta.forEach(Jh)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,tf||(tf=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,ly)))}function na(t){function e(r){return ws(r,t)}if(0<Fa.length){ws(Fa[0],t);for(var n=1;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&ws(ar,t),lr!==null&&ws(lr,t),ur!==null&&ws(ur,t),ea.forEach(e),ta.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Ug(n),n.blockedOn===null&&tr.shift()}var jo=Gi.ReactCurrentBatchConfig,Bl=!0;function uy(t,e,n,i){var r=pt,o=jo.transition;jo.transition=null;try{pt=1,wd(t,e,n,i)}finally{pt=r,jo.transition=o}}function cy(t,e,n,i){var r=pt,o=jo.transition;jo.transition=null;try{pt=4,wd(t,e,n,i)}finally{pt=r,jo.transition=o}}function wd(t,e,n,i){if(Bl){var r=nf(t,e,n,i);if(r===null)Ju(t,e,i,zl,n),Qh(t,i);else if(ay(r,t,e,n,i))i.stopPropagation();else if(Qh(t,i),e&4&&-1<sy.indexOf(t)){for(;r!==null;){var o=_a(r);if(o!==null&&Pg(o),o=nf(t,e,n,i),o===null&&Ju(t,e,i,zl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Ju(t,e,i,null,n)}}var zl=null;function nf(t,e,n,i){if(zl=null,t=Sd(i),t=kr(t),t!==null)if(e=eo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function Ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z0()){case Md:return 1;case wg:return 4;case Ol:case Q0:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var rr=null,Ad=null,yl=null;function Ng(){if(yl)return yl;var t,e=Ad,n=e.length,i,r="value"in rr?rr.value:rr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return yl=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function ep(){return!1}function Bn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oa:ep,this.isPropagationStopped=ep,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=Bn(fs),va=It({},fs,{view:0,detail:0}),fy=Bn(va),Wu,Xu,As,du=It({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Wu=t.screenX-As.screenX,Xu=t.screenY-As.screenY):Xu=Wu=0,As=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:Xu}}),tp=Bn(du),dy=It({},du,{dataTransfer:0}),hy=Bn(dy),py=It({},va,{relatedTarget:0}),ju=Bn(py),my=It({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Bn(my),vy=It({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_y=Bn(vy),yy=It({},fs,{data:0}),np=Bn(yy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=My[t])?!!e[t]:!1}function Rd(){return Ey}var Ty=It({},va,{key:function(t){if(t.key){var e=xy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wy=Bn(Ty),Ay=It({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Bn(Ay),Cy=It({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),Ry=Bn(Cy),Py=It({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ly=Bn(Py),by=It({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=Bn(by),Uy=[9,13,27,32],Pd=Oi&&"CompositionEvent"in window,Gs=null;Oi&&"documentMode"in document&&(Gs=document.documentMode);var Iy=Oi&&"TextEvent"in window&&!Gs,Fg=Oi&&(!Pd||Gs&&8<Gs&&11>=Gs),rp=" ",op=!1;function Og(t,e){switch(t){case"keyup":return Uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bo=!1;function Ny(t,e){switch(t){case"compositionend":return kg(e);case"keypress":return e.which!==32?null:(op=!0,rp);case"textInput":return t=e.data,t===rp&&op?null:t;default:return null}}function Fy(t,e){if(bo)return t==="compositionend"||!Pd&&Og(t,e)?(t=Ng(),yl=Ad=rr=null,bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fg&&e.locale!=="ko"?null:e.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Oy[t.type]:e==="textarea"}function Bg(t,e,n,i){gg(i),e=Hl(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ws=null,ia=null;function ky(t){Kg(t,0)}function hu(t){var e=Io(t);if(ug(e))return t}function By(t,e){if(t==="change")return e}var zg=!1;if(Oi){var Yu;if(Oi){var $u="oninput"in document;if(!$u){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),$u=typeof ap.oninput=="function"}Yu=$u}else Yu=!1;zg=Yu&&(!document.documentMode||9<document.documentMode)}function lp(){Ws&&(Ws.detachEvent("onpropertychange",Hg),ia=Ws=null)}function Hg(t){if(t.propertyName==="value"&&hu(ia)){var e=[];Bg(e,ia,t,Sd(t)),xg(ky,e)}}function zy(t,e,n){t==="focusin"?(lp(),Ws=e,ia=n,Ws.attachEvent("onpropertychange",Hg)):t==="focusout"&&lp()}function Hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(ia)}function Vy(t,e){if(t==="click")return hu(e)}function Gy(t,e){if(t==="input"||t==="change")return hu(e)}function Wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:Wy;function ra(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!kc.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,e){var n=up(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function Vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xy(t){var e=Gg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vg(n.ownerDocument.documentElement,n)){if(i!==null&&Ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=cp(n,o);var s=cp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jy=Oi&&"documentMode"in document&&11>=document.documentMode,Do=null,rf=null,Xs=null,of=!1;function fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||Do==null||Do!==Il(i)||(i=Do,"selectionStart"in i&&Ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xs&&ra(Xs,i)||(Xs=i,i=Hl(rf,"onSelect"),0<i.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Do)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Uo={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},qu={},Wg={};Oi&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Uo.animationend.animation,delete Uo.animationiteration.animation,delete Uo.animationstart.animation),"TransitionEvent"in window||delete Uo.transitionend.transition);function pu(t){if(qu[t])return qu[t];if(!Uo[t])return t;var e=Uo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wg)return qu[t]=e[n];return t}var Xg=pu("animationend"),jg=pu("animationiteration"),Yg=pu("animationstart"),$g=pu("transitionend"),qg=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){qg.set(t,e),Jr(e,[t])}for(var Ku=0;Ku<dp.length;Ku++){var Zu=dp[Ku],Yy=Zu.toLowerCase(),$y=Zu[0].toUpperCase()+Zu.slice(1);Sr(Yy,"on"+$y)}Sr(Xg,"onAnimationEnd");Sr(jg,"onAnimationIteration");Sr(Yg,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr($g,"onTransitionEnd");Qo("onMouseEnter",["mouseout","mouseover"]);Qo("onMouseLeave",["mouseout","mouseover"]);Qo("onPointerEnter",["pointerout","pointerover"]);Qo("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function hp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Y0(i,e,void 0,t),t.currentTarget=null}function Kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var l=i[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&r.isPropagationStopped())break e;hp(r,l,c),o=u}else for(s=0;s<i.length;s++){if(l=i[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&r.isPropagationStopped())break e;hp(r,l,c),o=u}}}if(Fl)throw t=Jc,Fl=!1,Jc=null,t}function Tt(t,e){var n=e[cf];n===void 0&&(n=e[cf]=new Set);var i=t+"__bubble";n.has(i)||(Zg(e,t,2,!1),n.add(i))}function Qu(t,e,n){var i=0;e&&(i|=4),Zg(n,t,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Ba]){t[Ba]=!0,rg.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||Qu(n,!1,t),Qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,Qu("selectionchange",!1,e))}}function Zg(t,e,n,i){switch(Ig(e)){case 1:var r=uy;break;case 4:r=cy;break;default:r=wd}n=r.bind(null,e,n,t),r=void 0,!Qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ju(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;s=s.return}for(;l!==null;){if(s=kr(l),s===null)return;if(u=s.tag,u===5||u===6){i=o=s;continue e}l=l.parentNode}}i=i.return}xg(function(){var c=o,h=Sd(n),m=[];e:{var p=qg.get(t);if(p!==void 0){var y=Cd,E=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":y=wy;break;case"focusin":E="focus",y=ju;break;case"focusout":E="blur",y=ju;break;case"beforeblur":case"afterblur":y=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ry;break;case Xg:case jg:case Yg:y=gy;break;case $g:y=Ly;break;case"scroll":y=fy;break;case"wheel":y=Dy;break;case"copy":case"cut":case"paste":y=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ip}var T=(e&4)!==0,_=!T&&t==="scroll",d=T?p!==null?p+"Capture":null:p;T=[];for(var S=c,x;S!==null;){x=S;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,d!==null&&(w=Js(S,d),w!=null&&T.push(sa(S,w,x)))),_)break;S=S.return}0<T.length&&(p=new y(p,E,null,n,h),m.push({event:p,listeners:T}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Kc&&(E=n.relatedTarget||n.fromElement)&&(kr(E)||E[ki]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(E=n.relatedTarget||n.toElement,y=c,E=E?kr(E):null,E!==null&&(_=eo(E),E!==_||E.tag!==5&&E.tag!==6)&&(E=null)):(y=null,E=c),y!==E)){if(T=tp,w="onMouseLeave",d="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(T=ip,w="onPointerLeave",d="onPointerEnter",S="pointer"),_=y==null?p:Io(y),x=E==null?p:Io(E),p=new T(w,S+"leave",y,n,h),p.target=_,p.relatedTarget=x,w=null,kr(h)===c&&(T=new T(d,S+"enter",E,n,h),T.target=x,T.relatedTarget=_,w=T),_=w,y&&E)t:{for(T=y,d=E,S=0,x=T;x;x=co(x))S++;for(x=0,w=d;w;w=co(w))x++;for(;0<S-x;)T=co(T),S--;for(;0<x-S;)d=co(d),x--;for(;S--;){if(T===d||d!==null&&T===d.alternate)break t;T=co(T),d=co(d)}T=null}else T=null;y!==null&&pp(m,p,y,T,!1),E!==null&&_!==null&&pp(m,_,E,T,!0)}}e:{if(p=c?Io(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var B=By;else if(sp(p))if(zg)B=Gy;else{B=Hy;var I=zy}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(B=Vy);if(B&&(B=B(t,c))){Bg(m,B,n,h);break e}I&&I(t,p,c),t==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&Xc(p,"number",p.value)}switch(I=c?Io(c):window,t){case"focusin":(sp(I)||I.contentEditable==="true")&&(Do=I,rf=c,Xs=null);break;case"focusout":Xs=rf=Do=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,fp(m,n,h);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":fp(m,n,h)}var b;if(Pd)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else bo?Og(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Fg&&n.locale!=="ko"&&(bo||O!=="onCompositionStart"?O==="onCompositionEnd"&&bo&&(b=Ng()):(rr=h,Ad="value"in rr?rr.value:rr.textContent,bo=!0)),I=Hl(c,O),0<I.length&&(O=new np(O,t,null,n,h),m.push({event:O,listeners:I}),b?O.data=b:(b=kg(n),b!==null&&(O.data=b)))),(b=Iy?Ny(t,n):Fy(t,n))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(h=new np("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=b))}Kg(m,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Js(t,n),o!=null&&i.unshift(sa(t,o,r)),o=Js(t,e),o!=null&&i.push(sa(t,o,r))),t=t.return}return i}function co(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===i)break;l.tag===5&&c!==null&&(l=c,r?(u=Js(n,o),u!=null&&s.unshift(sa(n,u,l))):r||(u=Js(n,o),u!=null&&s.push(sa(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Ky=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function mp(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Zy,"")}function za(t,e,n){if(e=mp(e),mp(t)!==e&&n)throw Error(de(425))}function Vl(){}var sf=null,af=null;function lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(t){return gp.resolve(null).then(t).catch(ex)}:uf;function ex(t){setTimeout(function(){throw t})}function ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),gi="__reactFiber$"+ds,aa="__reactProps$"+ds,ki="__reactContainer$"+ds,cf="__reactEvents$"+ds,tx="__reactListeners$"+ds,nx="__reactHandles$"+ds;function kr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[gi])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[gi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function mu(t){return t[aa]||null}var ff=[],No=-1;function Mr(t){return{current:t}}function At(t){0>No||(t.current=ff[No],ff[No]=null,No--)}function St(t,e){No++,ff[No]=t.current,t.current=e}var _r={},un=Mr(_r),wn=Mr(!1),jr=_r;function Jo(t,e){var n=t.type.contextTypes;if(!n)return _r;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function Gl(){At(wn),At(un)}function _p(t,e,n){if(un.current!==_r)throw Error(de(168));St(un,e),St(wn,n)}function Qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,z0(t)||"Unknown",r));return It({},n,i)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,jr=un.current,St(un,t),St(wn,wn.current),!0}function yp(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=Qg(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,At(wn),At(un),St(un,t)):At(wn),St(wn,n)}var Pi=null,gu=!1,tc=!1;function Jg(t){Pi===null?Pi=[t]:Pi.push(t)}function ix(t){gu=!0,Jg(t)}function Er(){if(!tc&&Pi!==null){tc=!0;var t=0,e=pt;try{var n=Pi;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Pi=null,gu=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(t+1)),Tg(Md,Er),r}finally{pt=e,tc=!1}}return null}var Fo=[],Oo=0,Xl=null,jl=0,Gn=[],Wn=0,Yr=null,bi=1,Di="";function Dr(t,e){Fo[Oo++]=jl,Fo[Oo++]=Xl,Xl=t,jl=e}function ev(t,e,n){Gn[Wn++]=bi,Gn[Wn++]=Di,Gn[Wn++]=Yr,Yr=t;var i=bi;t=Di;var r=32-li(i)-1;i&=~(1<<r),n+=1;var o=32-li(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,bi=1<<32-li(e)+r|n<<r|i,Di=o+t}else bi=1<<o|n<<r|i,Di=t}function bd(t){t.return!==null&&(Dr(t,1),ev(t,1,0))}function Dd(t){for(;t===Xl;)Xl=Fo[--Oo],Fo[Oo]=null,jl=Fo[--Oo],Fo[Oo]=null;for(;t===Yr;)Yr=Gn[--Wn],Gn[Wn]=null,Di=Gn[--Wn],Gn[Wn]=null,bi=Gn[--Wn],Gn[Wn]=null}var Nn=null,In=null,Pt=!1,oi=null;function tv(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,In=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:bi,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,In=null,!0):!1;default:return!1}}function df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hf(t){if(Pt){var e=In;if(e){var n=e;if(!xp(t,e)){if(df(t))throw Error(de(418));e=cr(n.nextSibling);var i=Nn;e&&xp(t,e)?tv(i,n):(t.flags=t.flags&-4097|2,Pt=!1,Nn=t)}}else{if(df(t))throw Error(de(418));t.flags=t.flags&-4097|2,Pt=!1,Nn=t}}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Ha(t){if(t!==Nn)return!1;if(!Pt)return Sp(t),Pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lf(t.type,t.memoizedProps)),e&&(e=In)){if(df(t))throw nv(),Error(de(418));for(;e;)tv(t,e),e=cr(e.nextSibling)}if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Nn?cr(t.stateNode.nextSibling):null;return!0}function nv(){for(var t=In;t;)t=cr(t.nextSibling)}function es(){In=Nn=null,Pt=!1}function Ud(t){oi===null?oi=[t]:oi.push(t)}var rx=Gi.ReactCurrentBatchConfig;function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=r.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mp(t){var e=t._init;return e(t._payload)}function iv(t){function e(d,S){if(t){var x=d.deletions;x===null?(d.deletions=[S],d.flags|=16):x.push(S)}}function n(d,S){if(!t)return null;for(;S!==null;)e(d,S),S=S.sibling;return null}function i(d,S){for(d=new Map;S!==null;)S.key!==null?d.set(S.key,S):d.set(S.index,S),S=S.sibling;return d}function r(d,S){return d=pr(d,S),d.index=0,d.sibling=null,d}function o(d,S,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<S?(d.flags|=2,S):x):(d.flags|=2,S)):(d.flags|=1048576,S)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,S,x,w){return S===null||S.tag!==6?(S=lc(x,d.mode,w),S.return=d,S):(S=r(S,x),S.return=d,S)}function u(d,S,x,w){var B=x.type;return B===Lo?h(d,S,x.props.children,w,x.key):S!==null&&(S.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ji&&Mp(B)===S.type)?(w=r(S,x.props),w.ref=Cs(d,S,x),w.return=d,w):(w=Cl(x.type,x.key,x.props,null,d.mode,w),w.ref=Cs(d,S,x),w.return=d,w)}function c(d,S,x,w){return S===null||S.tag!==4||S.stateNode.containerInfo!==x.containerInfo||S.stateNode.implementation!==x.implementation?(S=uc(x,d.mode,w),S.return=d,S):(S=r(S,x.children||[]),S.return=d,S)}function h(d,S,x,w,B){return S===null||S.tag!==7?(S=Wr(x,d.mode,w,B),S.return=d,S):(S=r(S,x),S.return=d,S)}function m(d,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return S=lc(""+S,d.mode,x),S.return=d,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ba:return x=Cl(S.type,S.key,S.props,null,d.mode,x),x.ref=Cs(d,null,S),x.return=d,x;case Po:return S=uc(S,d.mode,x),S.return=d,S;case Ji:var w=S._init;return m(d,w(S._payload),x)}if(Os(S)||Ms(S))return S=Wr(S,d.mode,x,null),S.return=d,S;Va(d,S)}return null}function p(d,S,x,w){var B=S!==null?S.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return B!==null?null:l(d,S,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ba:return x.key===B?u(d,S,x,w):null;case Po:return x.key===B?c(d,S,x,w):null;case Ji:return B=x._init,p(d,S,B(x._payload),w)}if(Os(x)||Ms(x))return B!==null?null:h(d,S,x,w,null);Va(d,x)}return null}function y(d,S,x,w,B){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(x)||null,l(S,d,""+w,B);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ba:return d=d.get(w.key===null?x:w.key)||null,u(S,d,w,B);case Po:return d=d.get(w.key===null?x:w.key)||null,c(S,d,w,B);case Ji:var I=w._init;return y(d,S,x,I(w._payload),B)}if(Os(w)||Ms(w))return d=d.get(x)||null,h(S,d,w,B,null);Va(S,w)}return null}function E(d,S,x,w){for(var B=null,I=null,b=S,O=S=0,P=null;b!==null&&O<x.length;O++){b.index>O?(P=b,b=null):P=b.sibling;var v=p(d,b,x[O],w);if(v===null){b===null&&(b=P);break}t&&b&&v.alternate===null&&e(d,b),S=o(v,S,O),I===null?B=v:I.sibling=v,I=v,b=P}if(O===x.length)return n(d,b),Pt&&Dr(d,O),B;if(b===null){for(;O<x.length;O++)b=m(d,x[O],w),b!==null&&(S=o(b,S,O),I===null?B=b:I.sibling=b,I=b);return Pt&&Dr(d,O),B}for(b=i(d,b);O<x.length;O++)P=y(b,d,O,x[O],w),P!==null&&(t&&P.alternate!==null&&b.delete(P.key===null?O:P.key),S=o(P,S,O),I===null?B=P:I.sibling=P,I=P);return t&&b.forEach(function(R){return e(d,R)}),Pt&&Dr(d,O),B}function T(d,S,x,w){var B=Ms(x);if(typeof B!="function")throw Error(de(150));if(x=B.call(x),x==null)throw Error(de(151));for(var I=B=null,b=S,O=S=0,P=null,v=x.next();b!==null&&!v.done;O++,v=x.next()){b.index>O?(P=b,b=null):P=b.sibling;var R=p(d,b,v.value,w);if(R===null){b===null&&(b=P);break}t&&b&&R.alternate===null&&e(d,b),S=o(R,S,O),I===null?B=R:I.sibling=R,I=R,b=P}if(v.done)return n(d,b),Pt&&Dr(d,O),B;if(b===null){for(;!v.done;O++,v=x.next())v=m(d,v.value,w),v!==null&&(S=o(v,S,O),I===null?B=v:I.sibling=v,I=v);return Pt&&Dr(d,O),B}for(b=i(d,b);!v.done;O++,v=x.next())v=y(b,d,O,v.value,w),v!==null&&(t&&v.alternate!==null&&b.delete(v.key===null?O:v.key),S=o(v,S,O),I===null?B=v:I.sibling=v,I=v);return t&&b.forEach(function(j){return e(d,j)}),Pt&&Dr(d,O),B}function _(d,S,x,w){if(typeof x=="object"&&x!==null&&x.type===Lo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ba:e:{for(var B=x.key,I=S;I!==null;){if(I.key===B){if(B=x.type,B===Lo){if(I.tag===7){n(d,I.sibling),S=r(I,x.props.children),S.return=d,d=S;break e}}else if(I.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ji&&Mp(B)===I.type){n(d,I.sibling),S=r(I,x.props),S.ref=Cs(d,I,x),S.return=d,d=S;break e}n(d,I);break}else e(d,I);I=I.sibling}x.type===Lo?(S=Wr(x.props.children,d.mode,w,x.key),S.return=d,d=S):(w=Cl(x.type,x.key,x.props,null,d.mode,w),w.ref=Cs(d,S,x),w.return=d,d=w)}return s(d);case Po:e:{for(I=x.key;S!==null;){if(S.key===I)if(S.tag===4&&S.stateNode.containerInfo===x.containerInfo&&S.stateNode.implementation===x.implementation){n(d,S.sibling),S=r(S,x.children||[]),S.return=d,d=S;break e}else{n(d,S);break}else e(d,S);S=S.sibling}S=uc(x,d.mode,w),S.return=d,d=S}return s(d);case Ji:return I=x._init,_(d,S,I(x._payload),w)}if(Os(x))return E(d,S,x,w);if(Ms(x))return T(d,S,x,w);Va(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,S!==null&&S.tag===6?(n(d,S.sibling),S=r(S,x),S.return=d,d=S):(n(d,S),S=lc(x,d.mode,w),S.return=d,d=S),s(d)):n(d,S)}return _}var ts=iv(!0),rv=iv(!1),Yl=Mr(null),$l=null,ko=null,Id=null;function Nd(){Id=ko=$l=null}function Fd(t){var e=Yl.current;At(Yl),t._currentValue=e}function pf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Yo(t,e){$l=t,Id=ko=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},ko===null){if($l===null)throw Error(de(308));ko=t,$l.dependencies={lanes:0,firstContext:t}}else ko=ko.next=t;return e}var Br=null;function Od(t){Br===null?Br=[t]:Br.push(t)}function ov(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Od(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Od(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}function Ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,i){var r=t.updateQueue;er=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=r.baseState;s=0,h=c=u=null,l=o;do{var p=l.lane,y=l.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=t,T=l;switch(p=e,y=n,T.tag){case 1:if(E=T.payload,typeof E=="function"){m=E.call(y,m,p);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=T.payload,p=typeof E=="function"?E.call(y,m,p):E,p==null)break e;m=It({},m,p);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[l]:p.push(l))}else y={eventTime:y,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=y,u=m):h=h.next=y,s|=p;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;p=l,l=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(u=m),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);qr|=s,t.lanes=s,t.memoizedState=m}}function Tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var ya={},xi=Mr(ya),la=Mr(ya),ua=Mr(ya);function zr(t){if(t===ya)throw Error(de(174));return t}function Bd(t,e){switch(St(ua,e),St(la,t),St(xi,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}At(xi),St(xi,e)}function ns(){At(xi),At(la),At(ua)}function av(t){zr(ua.current);var e=zr(xi.current),n=Yc(e,t.type);e!==n&&(St(la,t),St(xi,n))}function zd(t){la.current===t&&(At(xi),At(la))}var Dt=Mr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nc=[];function Hd(){for(var t=0;t<nc.length;t++)nc[t]._workInProgressVersionPrimary=null;nc.length=0}var Ml=Gi.ReactCurrentDispatcher,ic=Gi.ReactCurrentBatchConfig,$r=0,Ut=null,Ht=null,$t=null,Zl=!1,js=!1,ca=0,ox=0;function rn(){throw Error(de(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function Gd(t,e,n,i,r,o){if($r=o,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?ux:cx,t=n(i,r),js){o=0;do{if(js=!1,ca=0,25<=o)throw Error(de(301));o+=1,$t=Ht=null,e.updateQueue=null,Ml.current=fx,t=n(i,r)}while(js)}if(Ml.current=Ql,e=Ht!==null&&Ht.next!==null,$r=0,$t=Ht=Ut=null,Zl=!1,e)throw Error(de(300));return t}function Wd(){var t=ca!==0;return ca=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Ut.memoizedState=$t=t:$t=$t.next=t,$t}function Kn(){if(Ht===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=$t===null?Ut.memoizedState:$t.next;if(e!==null)$t=e,Ht=t;else{if(t===null)throw Error(de(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},$t===null?Ut.memoizedState=$t=t:$t=$t.next=t}return $t}function fa(t,e){return typeof e=="function"?e(t):e}function rc(t){var e=Kn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var l=s=null,u=null,c=o;do{var h=c.lane;if(($r&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,s=i):u=u.next=m,Ut.lanes|=h,qr|=h}c=c.next}while(c!==null&&c!==o);u===null?s=i:u.next=l,ci(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=u,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,Ut.lanes|=o,qr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oc(t){var e=Kn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ci(o,e.memoizedState)||(Tn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function lv(){}function uv(t,e){var n=Ut,i=Kn(),r=e(),o=!ci(i.memoizedState,r);if(o&&(i.memoizedState=r,Tn=!0),i=i.queue,Xd(dv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,da(9,fv.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(de(349));$r&30||cv(n,e,r)}return r}function cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fv(t,e,n,i){e.value=n,e.getSnapshot=i,hv(e)&&pv(t)}function dv(t,e,n){return n(function(){hv(e)&&pv(t)})}function hv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function pv(t){var e=Bi(t,1);e!==null&&ui(e,t,1,-1)}function wp(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=lx.bind(null,Ut,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function mv(){return Kn().memoizedState}function El(t,e,n,i){var r=hi();Ut.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function vu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var o=void 0;if(Ht!==null){var s=Ht.memoizedState;if(o=s.destroy,i!==null&&Vd(i,s.deps)){r.memoizedState=da(e,n,o,i);return}}Ut.flags|=t,r.memoizedState=da(1|e,n,o,i)}function Ap(t,e){return El(8390656,8,t,e)}function Xd(t,e){return vu(2048,8,t,e)}function gv(t,e){return vu(4,2,t,e)}function vv(t,e){return vu(4,4,t,e)}function _v(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yv(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,_v.bind(null,e,t),n)}function jd(){}function xv(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Sv(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Mv(t,e,n){return $r&21?(ci(n,e)||(n=Cg(),Ut.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=n)}function sx(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=ic.transition;ic.transition={};try{t(!1),e()}finally{pt=n,ic.transition=i}}function Ev(){return Kn().memoizedState}function ax(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tv(t))wv(e,n);else if(n=ov(t,e,n,i),n!==null){var r=mn();ui(n,t,i,r),Av(n,e,i)}}function lx(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tv(t))wv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(r.hasEagerState=!0,r.eagerState=l,ci(l,s)){var u=e.interleaved;u===null?(r.next=r,Od(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}n=ov(t,e,r,i),n!==null&&(r=mn(),ui(n,t,i,r),Av(n,e,i))}}function Tv(t){var e=t.alternate;return t===Ut||e!==null&&e===Ut}function wv(t,e){js=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Av(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}var Ql={readContext:qn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},ux={readContext:qn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:Ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,_v.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ax.bind(null,Ut,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:jd,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=sx.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ut,r=hi();if(Pt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Kt===null)throw Error(de(349));$r&30||cv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Ap(dv.bind(null,i,o,t),[t]),i.flags|=2048,da(9,fv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=hi(),e=Kt.identifierPrefix;if(Pt){var n=Di,i=bi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ox++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cx={readContext:qn,useCallback:xv,useContext:qn,useEffect:Xd,useImperativeHandle:yv,useInsertionEffect:gv,useLayoutEffect:vv,useMemo:Sv,useReducer:rc,useRef:mv,useState:function(){return rc(fa)},useDebugValue:jd,useDeferredValue:function(t){var e=Kn();return Mv(e,Ht.memoizedState,t)},useTransition:function(){var t=rc(fa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:lv,useSyncExternalStore:uv,useId:Ev,unstable_isNewReconciler:!1},fx={readContext:qn,useCallback:xv,useContext:qn,useEffect:Xd,useImperativeHandle:yv,useInsertionEffect:gv,useLayoutEffect:vv,useMemo:Sv,useReducer:oc,useRef:mv,useState:function(){return oc(fa)},useDebugValue:jd,useDeferredValue:function(t){var e=Kn();return Ht===null?e.memoizedState=t:Mv(e,Ht.memoizedState,t)},useTransition:function(){var t=oc(fa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:lv,useSyncExternalStore:uv,useId:Ev,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=It({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:It({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?eo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=hr(t),o=Fi(i,r);o.payload=e,n!=null&&(o.callback=n),e=fr(t,o,r),e!==null&&(ui(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=hr(t),o=Fi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=fr(t,o,r),e!==null&&(ui(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=hr(t),r=Fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(ui(e,t,i,n),Sl(e,t,i))}};function Cp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,o):!0}function Cv(t,e,n){var i=!1,r=_r,o=e.contextType;return typeof o=="object"&&o!==null?o=qn(o):(r=An(e)?jr:un.current,i=e.contextTypes,o=(i=i!=null)?Jo(t,r):_r),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=qn(o):(o=An(e)?jr:un.current,r.context=Jo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(mf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_u.enqueueReplaceState(r,r.state,null),ql(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e){try{var n="",i=e;do n+=B0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dx=typeof WeakMap=="function"?WeakMap:Map;function Rv(t,e,n){n=Fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){eu||(eu=!0,Cf=i),vf(t,e)},n}function Pv(t,e,n){n=Fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Pp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ax.bind(null,t,e,n),e.then(t,t))}function Lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fi(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var hx=Gi.ReactCurrentOwner,Tn=!1;function pn(t,e,n,i){e.child=t===null?rv(e,null,n,i):ts(e,t.child,n,i)}function Dp(t,e,n,i,r){n=n.render;var o=e.ref;return Yo(e,r),i=Gd(t,e,n,i,o,r),n=Wd(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(Pt&&n&&bd(e),e.flags|=1,pn(t,e,i,r),e.child)}function Up(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!eh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Lv(t,e,o,i,r)):(t=Cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(s,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=pr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Lv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ra(o,i)&&t.ref===e.ref)if(Tn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Tn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return _f(t,e,n,i,r)}function bv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(zo,Un),Un|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(zo,Un),Un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,St(zo,Un),Un|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,St(zo,Un),Un|=i;return pn(t,e,r,n),e.child}function Dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,i,r){var o=An(n)?jr:un.current;return o=Jo(e,o),Yo(e,r),n=Gd(t,e,n,i,o,r),i=Wd(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(Pt&&i&&bd(e),e.flags|=1,pn(t,e,n,r),e.child)}function Ip(t,e,n,i,r){if(An(n)){var o=!0;Wl(e)}else o=!1;if(Yo(e,r),e.stateNode===null)Tl(t,e),Cv(e,n,i),gf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=An(n)?jr:un.current,c=Jo(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==i||u!==c)&&Rp(e,s,i,c),er=!1;var p=e.memoizedState;s.state=p,ql(e,i,s,r),u=e.memoizedState,l!==i||p!==u||wn.current||er?(typeof h=="function"&&(mf(e,n,h,i),u=e.memoizedState),(l=er||Cp(e,n,l,i,p,u,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=c,i=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,sv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ii(e.type,l),s.props=c,m=e.pendingProps,p=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=qn(u):(u=An(n)?jr:un.current,u=Jo(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||p!==u)&&Rp(e,s,i,u),er=!1,p=e.memoizedState,s.state=p,ql(e,i,s,r);var E=e.memoizedState;l!==m||p!==E||wn.current||er?(typeof y=="function"&&(mf(e,n,y,i),E=e.memoizedState),(c=er||Cp(e,n,c,i,p,E,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,E,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,E,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),s.props=i,s.state=E,s.context=u,i=c):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,o,r)}function yf(t,e,n,i,r,o){Dv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&yp(e,n,!1),zi(t,e,o);i=e.stateNode,hx.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=ts(e,t.child,null,o),e.child=ts(e,null,l,o)):pn(t,e,l,o),e.memoizedState=i.state,r&&yp(e,n,!0),e.child}function Uv(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),Bd(t,e.containerInfo)}function Np(t,e,n,i,r){return es(),Ud(r),e.flags|=256,pn(t,e,n,i),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iv(t,e,n){var i=e.pendingProps,r=Dt.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(Dt,r&1),t===null)return hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Su(s,i,0,null),t=Wr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Sf(n),e.memoizedState=xf,t):Yd(e,s));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return px(t,e,s,i,l,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,l=r.sibling;var u={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=pr(r,u),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?o=pr(l,o):(o=Wr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Sf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=xf,i}return o=t.child,t=o.sibling,i=pr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yd(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,i){return i!==null&&Ud(i),ts(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function px(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=sc(Error(de(422))),Ga(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Su({mode:"visible",children:i.children},r,0,null),o=Wr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ts(e,t.child,null,s),e.child.memoizedState=Sf(s),e.memoizedState=xf,o);if(!(e.mode&1))return Ga(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,o=Error(de(419)),i=sc(o,i,void 0),Ga(t,e,s,i)}if(l=(s&t.childLanes)!==0,Tn||l){if(i=Kt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Bi(t,r),ui(i,t,r,-1))}return Jd(),i=sc(Error(de(421))),Ga(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Cx.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,In=cr(r.nextSibling),Nn=e,Pt=!0,oi=null,t!==null&&(Gn[Wn++]=bi,Gn[Wn++]=Di,Gn[Wn++]=Yr,bi=t.id,Di=t.overflow,Yr=e),e=Yd(e,i.children),e.flags|=4096,e)}function Fp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pf(t.return,e,n)}function ac(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Nv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(pn(t,e,i.children,n),i=Dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,n,e);else if(t.tag===19)Fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(Dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ac(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ac(e,!0,n,null,o);break;case"together":ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mx(t,e,n){switch(e.tag){case 3:Uv(e),es();break;case 5:av(e);break;case 1:An(e.type)&&Wl(e);break;case 4:Bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(Dt,Dt.current&1),e.flags|=128,null):n&e.child.childLanes?Iv(t,e,n):(St(Dt,Dt.current&1),t=zi(t,e,n),t!==null?t.sibling:null);St(Dt,Dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Nv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(Dt,Dt.current),i)break;return null;case 22:case 23:return e.lanes=0,bv(t,e,n)}return zi(t,e,n)}var Fv,Mf,Ov,kv;Fv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};Ov=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(xi.current);var o=null;switch(n){case"input":r=Gc(t,r),i=Gc(t,i),o=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),o=[];break;case"textarea":r=jc(t,r),i=jc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vl)}$c(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var u=i[c];if(l=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Tt("scroll",t),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};kv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Rs(t,e){if(!Pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gx(t,e,n){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return An(e.type)&&Gl(),on(e),null;case 3:return i=e.stateNode,ns(),At(wn),At(un),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(Lf(oi),oi=null))),Mf(t,e),on(e),null;case 5:zd(e);var r=zr(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Ov(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return on(e),null}if(t=zr(xi.current),Ha(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[gi]=e,i[aa]=o,t=(e.mode&1)!==0,n){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(r=0;r<Bs.length;r++)Tt(Bs[r],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Xh(i,o),Tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Tt("invalid",i);break;case"textarea":Yh(i,o),Tt("invalid",i)}$c(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?i.textContent!==l&&(o.suppressHydrationWarning!==!0&&za(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&za(i.textContent,l,t),r=["children",""+l]):Zs.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Tt("scroll",i)}switch(n){case"input":Da(i),jh(i,o,!0);break;case"textarea":Da(i),$h(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[gi]=e,t[aa]=i,Fv(t,e,!1,!1),e.stateNode=t;e:{switch(s=qc(n,i),n){case"dialog":Tt("cancel",t),Tt("close",t),r=i;break;case"iframe":case"object":case"embed":Tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bs.length;r++)Tt(Bs[r],t);r=i;break;case"source":Tt("error",t),r=i;break;case"img":case"image":case"link":Tt("error",t),Tt("load",t),r=i;break;case"details":Tt("toggle",t),r=i;break;case"input":Xh(t,i),r=Gc(t,i),Tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),Tt("invalid",t);break;case"textarea":Yh(t,i),r=jc(t,i),Tt("invalid",t);break;default:r=i}$c(n,r),l=r;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?mg(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hg(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qs(t,u):typeof u=="number"&&Qs(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Tt("scroll",t):u!=null&&vd(t,o,u,s))}switch(n){case"input":Da(t),jh(t,i,!1);break;case"textarea":Da(t),$h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Go(t,!!i.multiple,o,!1):i.defaultValue!=null&&Go(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)kv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=zr(ua.current),zr(xi.current),Ha(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(o=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return on(e),null;case 13:if(At(Dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pt&&In!==null&&e.mode&1&&!(e.flags&128))nv(),es(),e.flags|=98560,o=!1;else if(o=Ha(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(de(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(de(317));o[gi]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),o=!1}else oi!==null&&(Lf(oi),oi=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Dt.current&1?Vt===0&&(Vt=3):Jd())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return ns(),Mf(t,e),t===null&&oa(e.stateNode.containerInfo),on(e),null;case 10:return Fd(e.type._context),on(e),null;case 17:return An(e.type)&&Gl(),on(e),null;case 19:if(At(Dt),o=e.memoizedState,o===null)return on(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Rs(o,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Kl(t),s!==null){for(e.flags|=128,Rs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(Dt,Dt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ot()>rs&&(e.flags|=128,i=!0,Rs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Kl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pt)return on(e),null}else 2*Ot()-o.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,i=!0,Rs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ot(),e.sibling=null,n=Dt.current,St(Dt,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return Qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Un&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function vx(t,e){switch(Dd(e),e.tag){case 1:return An(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),At(wn),At(un),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zd(e),null;case 13:if(At(Dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return At(Dt),null;case 4:return ns(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Wa=!1,ln=!1,_x=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Bo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function Ef(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Op=!1;function yx(t,e){if(sf=Bl,t=Gg(),Ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,h=0,m=t,p=null;t:for(;;){for(var y;m!==n||r!==0&&m.nodeType!==3||(l=s+r),m!==o||i!==0&&m.nodeType!==3||(u=s+i),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===t)break t;if(p===n&&++c===r&&(l=s),p===o&&++h===i&&(u=s),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(af={focusedElem:t,selectionRange:n},Bl=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var T=E.memoizedProps,_=E.memoizedState,d=e.stateNode,S=d.getSnapshotBeforeUpdate(e.elementType===e.type?T:ii(e.type,T),_);d.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(w){Nt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return E=Op,Op=!1,E}function Ys(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Ef(e,n,o)}r=r.next}while(r!==i)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bv(t){var e=t.alternate;e!==null&&(t.alternate=null,Bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[aa],delete e[cf],delete e[tx],delete e[nx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zv(t){return t.tag===5||t.tag===3||t.tag===4}function kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(i!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}var Jt=null,ri=!1;function ji(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(fu,n)}catch{}switch(n.tag){case 5:ln||Bo(n,e);case 6:var i=Jt,r=ri;Jt=null,ji(t,e,n),Jt=i,ri=r,Jt!==null&&(ri?(t=Jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Jt.removeChild(n.stateNode));break;case 18:Jt!==null&&(ri?(t=Jt,n=n.stateNode,t.nodeType===8?ec(t.parentNode,n):t.nodeType===1&&ec(t,n),na(t)):ec(Jt,n.stateNode));break;case 4:i=Jt,r=ri,Jt=n.stateNode.containerInfo,ri=!0,ji(t,e,n),Jt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ef(n,e,s),r=r.next}while(r!==i)}ji(t,e,n);break;case 1:if(!ln&&(Bo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Nt(n,e,l)}ji(t,e,n);break;case 21:ji(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,ji(t,e,n),ln=i):ji(t,e,n);break;default:ji(t,e,n)}}function Bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _x),e.forEach(function(i){var r=Rx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:Jt=l.stateNode,ri=!1;break e;case 3:Jt=l.stateNode.containerInfo,ri=!0;break e;case 4:Jt=l.stateNode.containerInfo,ri=!0;break e}l=l.return}if(Jt===null)throw Error(de(160));Hv(o,s,r),Jt=null,ri=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vv(e,t),e=e.sibling}function Vv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),di(t),i&4){try{Ys(3,t,t.return),yu(3,t)}catch(T){Nt(t,t.return,T)}try{Ys(5,t,t.return)}catch(T){Nt(t,t.return,T)}}break;case 1:Jn(e,t),di(t),i&512&&n!==null&&Bo(n,n.return);break;case 5:if(Jn(e,t),di(t),i&512&&n!==null&&Bo(n,n.return),t.flags&32){var r=t.stateNode;try{Qs(r,"")}catch(T){Nt(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&cg(r,o),qc(l,s);var c=qc(l,o);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?mg(r,m):h==="dangerouslySetInnerHTML"?hg(r,m):h==="children"?Qs(r,m):vd(r,h,m,c)}switch(l){case"input":Wc(r,o);break;case"textarea":fg(r,o);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Go(r,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Go(r,!!o.multiple,o.defaultValue,!0):Go(r,!!o.multiple,o.multiple?[]:"",!1))}r[aa]=o}catch(T){Nt(t,t.return,T)}}break;case 6:if(Jn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(T){Nt(t,t.return,T)}}break;case 3:if(Jn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(T){Nt(t,t.return,T)}break;case 4:Jn(e,t),di(t);break;case 13:Jn(e,t),di(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=Ot())),i&4&&Bp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||h,Jn(e,t),ln=c):Jn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Pe=t,h=t.child;h!==null;){for(m=Pe=h;Pe!==null;){switch(p=Pe,y=p.child,p.tag){case 0:case 11:case 14:case 15:Ys(4,p,p.return);break;case 1:Bo(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(T){Nt(i,n,T)}}break;case 5:Bo(p,p.return);break;case 22:if(p.memoizedState!==null){Hp(m);continue}}y!==null?(y.return=p,Pe=y):Hp(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=pg("display",s))}catch(T){Nt(t,t.return,T)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(T){Nt(t,t.return,T)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Jn(e,t),di(t),i&4&&Bp(t);break;case 21:break;default:Jn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zv(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qs(r,""),i.flags&=-33);var o=kp(t);Af(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,l=kp(t);wf(t,l,s);break;default:throw Error(de(161))}}catch(u){Nt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xx(t,e,n){Pe=t,Gv(t)}function Gv(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Wa;if(!s){var l=r.alternate,u=l!==null&&l.memoizedState!==null||ln;l=Wa;var c=ln;if(Wa=s,(ln=u)&&!c)for(Pe=r;Pe!==null;)s=Pe,u=s.child,s.tag===22&&s.memoizedState!==null?Vp(r):u!==null?(u.return=s,Pe=u):Vp(r);for(;o!==null;)Pe=o,Gv(o),o=o.sibling;Pe=r,Wa=l,ln=c}zp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Pe=o):zp(t)}}function zp(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Tp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tp(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&na(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}ln||e.flags&512&&Tf(e)}catch(p){Nt(e,e.return,p)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Hp(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Vp(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(u){Nt(e,n,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(u){Nt(e,r,u)}}var o=e.return;try{Tf(e)}catch(u){Nt(e,o,u)}break;case 5:var s=e.return;try{Tf(e)}catch(u){Nt(e,s,u)}}}catch(u){Nt(e,e.return,u)}if(e===t){Pe=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Pe=l;break}Pe=e.return}}var Sx=Math.ceil,Jl=Gi.ReactCurrentDispatcher,$d=Gi.ReactCurrentOwner,$n=Gi.ReactCurrentBatchConfig,ut=0,Kt=null,zt=null,en=0,Un=0,zo=Mr(0),Vt=0,ha=null,qr=0,xu=0,qd=0,$s=null,Mn=null,Kd=0,rs=1/0,Ri=null,eu=!1,Cf=null,dr=null,Xa=!1,or=null,tu=0,qs=0,Rf=null,wl=-1,Al=0;function mn(){return ut&6?Ot():wl!==-1?wl:wl=Ot()}function hr(t){return t.mode&1?ut&2&&en!==0?en&-en:rx.transition!==null?(Al===0&&(Al=Cg()),Al):(t=pt,t!==0||(t=window.event,t=t===void 0?16:Ig(t.type)),t):1}function ui(t,e,n,i){if(50<qs)throw qs=0,Rf=null,Error(de(185));ga(t,n,i),(!(ut&2)||t!==Kt)&&(t===Kt&&(!(ut&2)&&(xu|=n),Vt===4&&nr(t,en)),Cn(t,i),n===1&&ut===0&&!(e.mode&1)&&(rs=Ot()+500,gu&&Er()))}function Cn(t,e){var n=t.callbackNode;ry(t,e);var i=kl(t,t===Kt?en:0);if(i===0)n!==null&&Zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zh(n),e===1)t.tag===0?ix(Gp.bind(null,t)):Jg(Gp.bind(null,t)),Jy(function(){!(ut&6)&&Er()}),n=null;else{switch(Rg(i)){case 1:n=Md;break;case 4:n=wg;break;case 16:n=Ol;break;case 536870912:n=Ag;break;default:n=Ol}n=Zv(n,Wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wv(t,e){if(wl=-1,Al=0,ut&6)throw Error(de(327));var n=t.callbackNode;if($o()&&t.callbackNode!==n)return null;var i=kl(t,t===Kt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nu(t,i);else{e=i;var r=ut;ut|=2;var o=jv();(Kt!==t||en!==e)&&(Ri=null,rs=Ot()+500,Gr(t,e));do try{Tx();break}catch(l){Xv(t,l)}while(!0);Nd(),Jl.current=o,ut=r,zt!==null?e=0:(Kt=null,en=0,e=Vt)}if(e!==0){if(e===2&&(r=ef(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=ha,Gr(t,0),nr(t,i),Cn(t,Ot()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Mx(r)&&(e=nu(t,i),e===2&&(o=ef(t),o!==0&&(i=o,e=Pf(t,o))),e===1))throw n=ha,Gr(t,0),nr(t,i),Cn(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Ur(t,Mn,Ri);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=Kd+500-Ot(),10<e)){if(kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(Ur.bind(null,t,Mn,Ri),e);break}Ur(t,Mn,Ri);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-li(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sx(i/1960))-i,10<i){t.timeoutHandle=uf(Ur.bind(null,t,Mn,Ri),i);break}Ur(t,Mn,Ri);break;case 5:Ur(t,Mn,Ri);break;default:throw Error(de(329))}}}return Cn(t,Ot()),t.callbackNode===n?Wv.bind(null,t):null}function Pf(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=nu(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&Lf(e)),t}function Lf(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function Mx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ci(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~qd,e&=~xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function Gp(t){if(ut&6)throw Error(de(327));$o();var e=kl(t,0);if(!(e&1))return Cn(t,Ot()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var i=ef(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=ha,Gr(t,0),nr(t,e),Cn(t,Ot()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,Mn,Ri),Cn(t,Ot()),null}function Zd(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&(rs=Ot()+500,gu&&Er())}}function Kr(t){or!==null&&or.tag===0&&!(ut&6)&&$o();var e=ut;ut|=1;var n=$n.transition,i=pt;try{if($n.transition=null,pt=1,t)return t()}finally{pt=i,$n.transition=n,ut=e,!(ut&6)&&Er()}}function Qd(){Un=zo.current,At(zo)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qy(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gl();break;case 3:ns(),At(wn),At(un),Hd();break;case 5:zd(i);break;case 4:ns();break;case 13:At(Dt);break;case 19:At(Dt);break;case 10:Fd(i.type._context);break;case 22:case 23:Qd()}n=n.return}if(Kt=t,zt=t=pr(t.current,null),en=Un=e,Vt=0,ha=null,qd=xu=qr=0,Mn=$s=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Br=null}return t}function Xv(t,e){do{var n=zt;try{if(Nd(),Ml.current=Ql,Zl){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zl=!1}if($r=0,$t=Ht=Ut=null,js=!1,ca=0,$d.current=null,n===null||n.return===null){Vt=1,ha=e,zt=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=en,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Lp(s);if(y!==null){y.flags&=-257,bp(y,s,l,o,e),y.mode&1&&Pp(o,c,e),e=y,u=c;var E=e.updateQueue;if(E===null){var T=new Set;T.add(u),e.updateQueue=T}else E.add(u);break e}else{if(!(e&1)){Pp(o,c,e),Jd();break e}u=Error(de(426))}}else if(Pt&&l.mode&1){var _=Lp(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),bp(_,s,l,o,e),Ud(is(u,l));break e}}o=u=is(u,l),Vt!==4&&(Vt=2),$s===null?$s=[o]:$s.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Rv(o,u,e);Ep(o,d);break e;case 1:l=u;var S=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof S.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(dr===null||!dr.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Pv(o,l,e);Ep(o,w);break e}}o=o.return}while(o!==null)}$v(n)}catch(B){e=B,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function jv(){var t=Jl.current;return Jl.current=Ql,t===null?Ql:t}function Jd(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Kt===null||!(qr&268435455)&&!(xu&268435455)||nr(Kt,en)}function nu(t,e){var n=ut;ut|=2;var i=jv();(Kt!==t||en!==e)&&(Ri=null,Gr(t,e));do try{Ex();break}catch(r){Xv(t,r)}while(!0);if(Nd(),ut=n,Jl.current=i,zt!==null)throw Error(de(261));return Kt=null,en=0,Vt}function Ex(){for(;zt!==null;)Yv(zt)}function Tx(){for(;zt!==null&&!q0();)Yv(zt)}function Yv(t){var e=Kv(t.alternate,t,Un);t.memoizedProps=t.pendingProps,e===null?$v(t):zt=e,$d.current=null}function $v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vx(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,zt=null;return}}else if(n=gx(n,e,Un),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Vt===0&&(Vt=5)}function Ur(t,e,n){var i=pt,r=$n.transition;try{$n.transition=null,pt=1,wx(t,e,n,i)}finally{$n.transition=r,pt=i}return null}function wx(t,e,n,i){do $o();while(or!==null);if(ut&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(oy(t,o),t===Kt&&(zt=Kt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,Zv(Ol,function(){return $o(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$n.transition,$n.transition=null;var s=pt;pt=1;var l=ut;ut|=4,$d.current=null,yx(t,n),Vv(n,t),Xy(af),Bl=!!sf,af=sf=null,t.current=n,xx(n),K0(),ut=l,pt=s,$n.transition=o}else t.current=n;if(Xa&&(Xa=!1,or=t,tu=r),o=t.pendingLanes,o===0&&(dr=null),J0(n.stateNode),Cn(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(eu)throw eu=!1,t=Cf,Cf=null,t;return tu&1&&t.tag!==0&&$o(),o=t.pendingLanes,o&1?t===Rf?qs++:(qs=0,Rf=t):qs=0,Er(),null}function $o(){if(or!==null){var t=Rg(tu),e=$n.transition,n=pt;try{if($n.transition=null,pt=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,tu=0,ut&6)throw Error(de(331));var r=ut;for(ut|=4,Pe=t.current;Pe!==null;){var o=Pe,s=o.child;if(Pe.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Pe=c;Pe!==null;){var h=Pe;switch(h.tag){case 0:case 11:case 15:Ys(8,h,o)}var m=h.child;if(m!==null)m.return=h,Pe=m;else for(;Pe!==null;){h=Pe;var p=h.sibling,y=h.return;if(Bv(h),h===c){Pe=null;break}if(p!==null){p.return=y,Pe=p;break}Pe=y}}}var E=o.alternate;if(E!==null){var T=E.child;if(T!==null){E.child=null;do{var _=T.sibling;T.sibling=null,T=_}while(T!==null)}}Pe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Pe=s;else e:for(;Pe!==null;){if(o=Pe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ys(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,Pe=d;break e}Pe=o.return}}var S=t.current;for(Pe=S;Pe!==null;){s=Pe;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,Pe=x;else e:for(s=S;Pe!==null;){if(l=Pe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(B){Nt(l,l.return,B)}if(l===s){Pe=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,Pe=w;break e}Pe=l.return}}if(ut=r,Er(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(fu,t)}catch{}i=!0}return i}finally{pt=n,$n.transition=e}}return!1}function Wp(t,e,n){e=is(n,e),e=Rv(t,e,1),t=fr(t,e,1),e=mn(),t!==null&&(ga(t,1,e),Cn(t,e))}function Nt(t,e,n){if(t.tag===3)Wp(t,t,n);else for(;e!==null;){if(e.tag===3){Wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=is(n,t),t=Pv(e,t,1),e=fr(e,t,1),t=mn(),e!==null&&(ga(e,1,t),Cn(e,t));break}}e=e.return}}function Ax(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(en&n)===n&&(Vt===4||Vt===3&&(en&130023424)===en&&500>Ot()-Kd?Gr(t,0):qd|=n),Cn(t,e)}function qv(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=mn();t=Bi(t,e),t!==null&&(ga(t,e,n),Cn(t,n))}function Cx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qv(t,n)}function Rx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),qv(t,n)}var Kv;Kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)Tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tn=!1,mx(t,e,n);Tn=!!(t.flags&131072)}else Tn=!1,Pt&&e.flags&1048576&&ev(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tl(t,e),t=e.pendingProps;var r=Jo(e,un.current);Yo(e,n),r=Gd(null,e,i,t,r,n);var o=Wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(o=!0,Wl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kd(e),r.updater=_u,e.stateNode=r,r._reactInternals=e,gf(e,i,t,n),e=yf(null,e,i,!0,o,n)):(e.tag=0,Pt&&o&&bd(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Tl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Lx(i),t=ii(i,t),r){case 0:e=_f(null,e,i,t,n);break e;case 1:e=Ip(null,e,i,t,n);break e;case 11:e=Dp(null,e,i,t,n);break e;case 14:e=Up(null,e,i,ii(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),_f(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Ip(t,e,i,r,n);case 3:e:{if(Uv(e),t===null)throw Error(de(387));i=e.pendingProps,o=e.memoizedState,r=o.element,sv(t,e),ql(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=is(Error(de(423)),e),e=Np(t,e,i,n,r);break e}else if(i!==r){r=is(Error(de(424)),e),e=Np(t,e,i,n,r);break e}else for(In=cr(e.stateNode.containerInfo.firstChild),Nn=e,Pt=!0,oi=null,n=rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),i===r){e=zi(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return av(e),t===null&&hf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,lf(i,r)?s=null:o!==null&&lf(i,o)&&(e.flags|=32),Dv(t,e),pn(t,e,s,n),e.child;case 6:return t===null&&hf(e),null;case 13:return Iv(t,e,n);case 4:return Bd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ts(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Dp(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,St(Yl,i._currentValue),i._currentValue=s,o!==null)if(ci(o.value,s)){if(o.children===r.children&&!wn.current){e=zi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===i){if(o.tag===1){u=Fi(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),pf(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(de(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Yo(e,n),r=qn(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),Up(t,e,i,r,n);case 15:return Lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Tl(t,e),e.tag=1,An(i)?(t=!0,Wl(e)):t=!1,Yo(e,n),Cv(e,i,r),gf(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return Nv(t,e,n);case 22:return bv(t,e,n)}throw Error(de(156,e.tag))};function Zv(t,e){return Tg(t,e)}function Px(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new Px(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lx(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yd)return 11;if(t===xd)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")eh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Lo:return Wr(n.children,r,o,e);case _d:s=8,r|=8;break;case Bc:return t=jn(12,n,e,r|2),t.elementType=Bc,t.lanes=o,t;case zc:return t=jn(13,n,e,r),t.elementType=zc,t.lanes=o,t;case Hc:return t=jn(19,n,e,r),t.elementType=Hc,t.lanes=o,t;case ag:return Su(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case og:s=10;break e;case sg:s=9;break e;case yd:s=11;break e;case xd:s=14;break e;case Ji:s=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=jn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Wr(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Su(t,e,n,i){return t=jn(22,t,i,e),t.elementType=ag,t.lanes=n,t.stateNode={isHidden:!1},t}function lc(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function uc(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,o,s,l,u){return t=new bx(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=jn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(o),t}function Dx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qv(t){if(!t)return _r;t=t._reactInternals;e:{if(eo(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(An(n))return Qg(t,n,e)}return e}function Jv(t,e,n,i,r,o,s,l,u){return t=th(n,i,!0,t,r,o,s,l,u),t.context=Qv(null),n=t.current,i=mn(),r=hr(n),o=Fi(i,r),o.callback=e??null,fr(n,o,r),t.current.lanes=r,ga(t,r,i),Cn(t,i),t}function Mu(t,e,n,i){var r=e.current,o=mn(),s=hr(r);return n=Qv(n),e.context===null?e.context=n:e.pendingContext=n,e=Fi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,s),t!==null&&(ui(t,r,s,o),Sl(t,r,s)),s}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){Xp(t,e),(t=t.alternate)&&Xp(t,e)}function Ux(){return null}var e_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}Eu.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));Mu(t,e,null,null)};Eu.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Mu(null,t,null,null)}),e[ki]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Ug(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Ix(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=iu(s);o.call(c)}}var s=Jv(e,i,t,0,null,!1,!1,"",jp);return t._reactRootContainer=s,t[ki]=s.current,oa(t.nodeType===8?t.parentNode:t),Kr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var c=iu(u);l.call(c)}}var u=th(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=u,t[ki]=u.current,oa(t.nodeType===8?t.parentNode:t),Kr(function(){Mu(e,u,n,i)}),u}function wu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var l=r;r=function(){var u=iu(s);l.call(u)}}Mu(e,s,t,r)}else s=Ix(n,e,t,r,i);return iu(s)}Pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ks(e.pendingLanes);n!==0&&(Ed(e,n|1),Cn(e,Ot()),!(ut&6)&&(rs=Ot()+500,Er()))}break;case 13:Kr(function(){var i=Bi(t,1);if(i!==null){var r=mn();ui(i,t,1,r)}}),nh(t,1)}};Td=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=mn();ui(e,t,134217728,n)}nh(t,134217728)}};Lg=function(t){if(t.tag===13){var e=hr(t),n=Bi(t,e);if(n!==null){var i=mn();ui(n,t,e,i)}nh(t,e)}};bg=function(){return pt};Dg=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};Zc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mu(i);if(!r)throw Error(de(90));ug(i),Wc(i,r)}}}break;case"textarea":fg(t,n);break;case"select":e=n.value,e!=null&&Go(t,!!n.multiple,e,!1)}};_g=Zd;yg=Kr;var Nx={usingClientEntryPoint:!1,Events:[_a,Io,mu,gg,vg,Zd]},Ps={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fx={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||Ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{fu=ja.inject(Fx),yi=ja}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(de(200));return Dx(t,e,null,n)};kn.createRoot=function(t,e){if(!rh(t))throw Error(de(299));var n=!1,i="",r=e_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,oa(t.nodeType===8?t.parentNode:t),new ih(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=Mg(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return Kr(t)};kn.hydrate=function(t,e,n){if(!Tu(e))throw Error(de(200));return wu(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=e_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Jv(e,null,t,1,n??null,r,!1,o,s),t[ki]=e.current,oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Eu(e)};kn.render=function(t,e,n){if(!Tu(e))throw Error(de(200));return wu(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(de(40));return t._reactRootContainer?(Kr(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};kn.unstable_batchedUpdates=Zd;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tu(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return wu(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function t_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t_)}catch(t){console.error(t)}}t_(),tg.exports=kn;var Ox=tg.exports,n_,Yp=Ox;n_=Yp.createRoot,Yp.hydrateRoot;var kx={};(function(){var t;function e(a){var f=0;return function(){return f<a.length?{done:!1,value:a[f++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,g){return a==Array.prototype||a==Object.prototype||(a[f]=g.value),a};function i(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vo=="object"&&Vo];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=i(this);function o(a,f){if(f)e:{var g=r;a=a.split(".");for(var M=0;M<a.length-1;M++){var L=a[M];if(!(L in g))break e;g=g[L]}a=a[a.length-1],M=g[a],f=f(M),f!=M&&f!=null&&n(g,a,{configurable:!0,writable:!0,value:f})}}o("Symbol",function(a){function f(U){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new g(M+(U||"")+"_"+L++,U)}function g(U,D){this.h=U,n(this,"description",{configurable:!0,writable:!0,value:D})}if(a)return a;g.prototype.toString=function(){return this.h};var M="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",L=0;return f}),o("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var f="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),g=0;g<f.length;g++){var M=r[f[g]];typeof M=="function"&&typeof M.prototype[a]!="function"&&n(M.prototype,a,{configurable:!0,writable:!0,value:function(){return s(e(this))}})}return a});function s(a){return a={next:a},a[Symbol.iterator]=function(){return this},a}function l(a){var f=typeof Symbol<"u"&&Symbol.iterator&&a[Symbol.iterator];return f?f.call(a):{next:e(a)}}function u(a){if(!(a instanceof Array)){a=l(a);for(var f,g=[];!(f=a.next()).done;)g.push(f.value);a=g}return a}var c=typeof Object.assign=="function"?Object.assign:function(a,f){for(var g=1;g<arguments.length;g++){var M=arguments[g];if(M)for(var L in M)Object.prototype.hasOwnProperty.call(M,L)&&(a[L]=M[L])}return a};o("Object.assign",function(a){return a||c});var h=typeof Object.create=="function"?Object.create:function(a){function f(){}return f.prototype=a,new f},m;if(typeof Object.setPrototypeOf=="function")m=Object.setPrototypeOf;else{var p;e:{var y={a:!0},E={};try{E.__proto__=y,p=E.a;break e}catch{}p=!1}m=p?function(a,f){if(a.__proto__=f,a.__proto__!==f)throw new TypeError(a+" is not extensible");return a}:null}var T=m;function _(a,f){if(a.prototype=h(f.prototype),a.prototype.constructor=a,T)T(a,f);else for(var g in f)if(g!="prototype")if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(f,g);M&&Object.defineProperty(a,g,M)}else a[g]=f[g];a.ya=f.prototype}function d(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function S(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}d.prototype.u=function(a){this.i=a};function x(a,f){a.l={ma:f,na:!0},a.h=a.s||a.v}d.prototype.return=function(a){this.l={return:a},this.h=this.v};function w(a,f,g){return a.h=g,{value:f}}function B(a){this.h=new d,this.i=a}function I(a,f){S(a.h);var g=a.h.j;return g?b(a,"return"in g?g.return:function(M){return{value:M,done:!0}},f,a.h.return):(a.h.return(f),O(a))}function b(a,f,g,M){try{var L=f.call(a.h.j,g);if(!(L instanceof Object))throw new TypeError("Iterator result "+L+" is not an object");if(!L.done)return a.h.m=!1,L;var U=L.value}catch(D){return a.h.j=null,x(a.h,D),O(a)}return a.h.j=null,M.call(a.h,U),O(a)}function O(a){for(;a.h.h;)try{var f=a.i(a.h);if(f)return a.h.m=!1,{value:f.value,done:!1}}catch(g){a.h.i=void 0,x(a.h,g)}if(a.h.m=!1,a.h.l){if(f=a.h.l,a.h.l=null,f.na)throw f.ma;return{value:f.return,done:!0}}return{value:void 0,done:!0}}function P(a){this.next=function(f){return S(a.h),a.h.j?f=b(a,a.h.j.next,f,a.h.u):(a.h.u(f),f=O(a)),f},this.throw=function(f){return S(a.h),a.h.j?f=b(a,a.h.j.throw,f,a.h.u):(x(a.h,f),f=O(a)),f},this.return=function(f){return I(a,f)},this[Symbol.iterator]=function(){return this}}function v(a){function f(M){return a.next(M)}function g(M){return a.throw(M)}return new Promise(function(M,L){function U(D){D.done?M(D.value):Promise.resolve(D.value).then(f,g).then(U,L)}U(a.next())})}function R(a){return v(new P(new B(a)))}o("Promise",function(a){function f(D){this.i=0,this.j=void 0,this.h=[],this.u=!1;var H=this.l();try{D(H.resolve,H.reject)}catch(K){H.reject(K)}}function g(){this.h=null}function M(D){return D instanceof f?D:new f(function(H){H(D)})}if(a)return a;g.prototype.i=function(D){if(this.h==null){this.h=[];var H=this;this.j(function(){H.m()})}this.h.push(D)};var L=r.setTimeout;g.prototype.j=function(D){L(D,0)},g.prototype.m=function(){for(;this.h&&this.h.length;){var D=this.h;this.h=[];for(var H=0;H<D.length;++H){var K=D[H];D[H]=null;try{K()}catch(ue){this.l(ue)}}}this.h=null},g.prototype.l=function(D){this.j(function(){throw D})},f.prototype.l=function(){function D(ue){return function(_e){K||(K=!0,ue.call(H,_e))}}var H=this,K=!1;return{resolve:D(this.I),reject:D(this.m)}},f.prototype.I=function(D){if(D===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(D instanceof f)this.L(D);else{e:switch(typeof D){case"object":var H=D!=null;break e;case"function":H=!0;break e;default:H=!1}H?this.F(D):this.s(D)}},f.prototype.F=function(D){var H=void 0;try{H=D.then}catch(K){this.m(K);return}typeof H=="function"?this.M(H,D):this.s(D)},f.prototype.m=function(D){this.v(2,D)},f.prototype.s=function(D){this.v(1,D)},f.prototype.v=function(D,H){if(this.i!=0)throw Error("Cannot settle("+D+", "+H+"): Promise already settled in state"+this.i);this.i=D,this.j=H,this.i===2&&this.K(),this.H()},f.prototype.K=function(){var D=this;L(function(){if(D.D()){var H=r.console;typeof H<"u"&&H.error(D.j)}},1)},f.prototype.D=function(){if(this.u)return!1;var D=r.CustomEvent,H=r.Event,K=r.dispatchEvent;return typeof K>"u"?!0:(typeof D=="function"?D=new D("unhandledrejection",{cancelable:!0}):typeof H=="function"?D=new H("unhandledrejection",{cancelable:!0}):(D=r.document.createEvent("CustomEvent"),D.initCustomEvent("unhandledrejection",!1,!0,D)),D.promise=this,D.reason=this.j,K(D))},f.prototype.H=function(){if(this.h!=null){for(var D=0;D<this.h.length;++D)U.i(this.h[D]);this.h=null}};var U=new g;return f.prototype.L=function(D){var H=this.l();D.T(H.resolve,H.reject)},f.prototype.M=function(D,H){var K=this.l();try{D.call(H,K.resolve,K.reject)}catch(ue){K.reject(ue)}},f.prototype.then=function(D,H){function K(De,Me){return typeof De=="function"?function(He){try{ue(De(He))}catch(nt){_e(nt)}}:Me}var ue,_e,ze=new f(function(De,Me){ue=De,_e=Me});return this.T(K(D,ue),K(H,_e)),ze},f.prototype.catch=function(D){return this.then(void 0,D)},f.prototype.T=function(D,H){function K(){switch(ue.i){case 1:D(ue.j);break;case 2:H(ue.j);break;default:throw Error("Unexpected state: "+ue.i)}}var ue=this;this.h==null?U.i(K):this.h.push(K),this.u=!0},f.resolve=M,f.reject=function(D){return new f(function(H,K){K(D)})},f.race=function(D){return new f(function(H,K){for(var ue=l(D),_e=ue.next();!_e.done;_e=ue.next())M(_e.value).T(H,K)})},f.all=function(D){var H=l(D),K=H.next();return K.done?M([]):new f(function(ue,_e){function ze(He){return function(nt){De[He]=nt,Me--,Me==0&&ue(De)}}var De=[],Me=0;do De.push(void 0),Me++,M(K.value).T(ze(De.length-1),_e),K=H.next();while(!K.done)})},f});function j(a,f){a instanceof String&&(a+="");var g=0,M=!1,L={next:function(){if(!M&&g<a.length){var U=g++;return{value:f(U,a[U]),done:!1}}return M=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.keys",function(a){return a||function(){return j(this,function(f){return f})}}),o("Array.prototype.fill",function(a){return a||function(f,g,M){var L=this.length||0;for(0>g&&(g=Math.max(0,L+g)),(M==null||M>L)&&(M=L),M=Number(M),0>M&&(M=Math.max(0,L+M)),g=Number(g||0);g<M;g++)this[g]=f;return this}});function V(a){return a||Array.prototype.fill}o("Int8Array.prototype.fill",V),o("Uint8Array.prototype.fill",V),o("Uint8ClampedArray.prototype.fill",V),o("Int16Array.prototype.fill",V),o("Uint16Array.prototype.fill",V),o("Int32Array.prototype.fill",V),o("Uint32Array.prototype.fill",V),o("Float32Array.prototype.fill",V),o("Float64Array.prototype.fill",V),o("Object.is",function(a){return a||function(f,g){return f===g?f!==0||1/f===1/g:f!==f&&g!==g}}),o("Array.prototype.includes",function(a){return a||function(f,g){var M=this;M instanceof String&&(M=String(M));var L=M.length;for(g=g||0,0>g&&(g=Math.max(g+L,0));g<L;g++){var U=M[g];if(U===f||Object.is(U,f))return!0}return!1}}),o("String.prototype.includes",function(a){return a||function(f,g){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(f instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(f,g||0)!==-1}});var J=this||self;function ne(a,f){a=a.split(".");var g=J;a[0]in g||typeof g.execScript>"u"||g.execScript("var "+a[0]);for(var M;a.length&&(M=a.shift());)a.length||f===void 0?g[M]&&g[M]!==Object.prototype[M]?g=g[M]:g=g[M]={}:g[M]=f}function z(a){var f;e:{if((f=J.navigator)&&(f=f.userAgent))break e;f=""}return f.indexOf(a)!=-1}var Y=Array.prototype.map?function(a,f){return Array.prototype.map.call(a,f,void 0)}:function(a,f){for(var g=a.length,M=Array(g),L=typeof a=="string"?a.split(""):a,U=0;U<g;U++)U in L&&(M[U]=f.call(void 0,L[U],U,a));return M},F={},ee=null;function ie(a){var f=a.length,g=3*f/4;g%3?g=Math.floor(g):"=.".indexOf(a[f-1])!=-1&&(g="=.".indexOf(a[f-2])!=-1?g-2:g-1);var M=new Uint8Array(g),L=0;return me(a,function(U){M[L++]=U}),L!==g?M.subarray(0,L):M}function me(a,f){function g(K){for(;M<a.length;){var ue=a.charAt(M++),_e=ee[ue];if(_e!=null)return _e;if(!/^[\s\xa0]*$/.test(ue))throw Error("Unknown base64 encoding at char: "+ue)}return K}Ce();for(var M=0;;){var L=g(-1),U=g(0),D=g(64),H=g(64);if(H===64&&L===-1)break;f(L<<2|U>>4),D!=64&&(f(U<<4&240|D>>2),H!=64&&f(D<<6&192|H))}}function Ce(){if(!ee){ee={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),f=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var M=a.concat(f[g].split(""));F[g]=M;for(var L=0;L<M.length;L++){var U=M[L];ee[U]===void 0&&(ee[U]=L)}}}}var We=typeof Uint8Array<"u",te=!(z("Trident")||z("MSIE"))&&typeof J.btoa=="function";function ce(a){if(!te){var f;f===void 0&&(f=0),Ce(),f=F[f];for(var g=Array(Math.floor(a.length/3)),M=f[64]||"",L=0,U=0;L<a.length-2;L+=3){var D=a[L],H=a[L+1],K=a[L+2],ue=f[D>>2];D=f[(D&3)<<4|H>>4],H=f[(H&15)<<2|K>>6],K=f[K&63],g[U++]=ue+D+H+K}switch(ue=0,K=M,a.length-L){case 2:ue=a[L+1],K=f[(ue&15)<<2]||M;case 1:a=a[L],g[U]=f[a>>2]+f[(a&3)<<4|ue>>4]+K+M}return g.join("")}for(f="";10240<a.length;)f+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);return f+=String.fromCharCode.apply(null,a),btoa(f)}var Se=RegExp("[-_.]","g");function Ee(a){switch(a){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function je(a){if(!te)return ie(a);Se.test(a)&&(a=a.replace(Se,Ee)),a=atob(a);for(var f=new Uint8Array(a.length),g=0;g<a.length;g++)f[g]=a.charCodeAt(g);return f}var qe;function Ze(){return qe||(qe=new Uint8Array(0))}var mt={},k=typeof Uint8Array.prototype.slice=="function",Qe=0,Xe=0;function ft(a){var f=0>a;a=Math.abs(a);var g=a>>>0;a=Math.floor((a-g)/4294967296),f&&(g=l(Lt(g,a)),f=g.next().value,a=g.next().value,g=f),Qe=g>>>0,Xe=a>>>0}var Ue=typeof BigInt=="function";function Lt(a,f){return f=~f,a?a=~a+1:f+=1,[a,f]}function Ve(a,f){this.i=a>>>0,this.h=f>>>0}function Ye(a){if(!a)return N||(N=new Ve(0,0));if(!/^-?\d+$/.test(a))return null;if(16>a.length)ft(Number(a));else if(Ue)a=BigInt(a),Qe=Number(a&BigInt(4294967295))>>>0,Xe=Number(a>>BigInt(32)&BigInt(4294967295));else{var f=+(a[0]==="-");Xe=Qe=0;for(var g=a.length,M=f,L=(g-f)%6+f;L<=g;M=L,L+=6)M=Number(a.slice(M,L)),Xe*=1e6,Qe=1e6*Qe+M,4294967296<=Qe&&(Xe+=Qe/4294967296|0,Qe%=4294967296);f&&(f=l(Lt(Qe,Xe)),a=f.next().value,f=f.next().value,Qe=a,Xe=f)}return new Ve(Qe,Xe)}var N;function A(a,f){return Error("Invalid wire type: "+a+" (at position "+f+")")}function Z(){return Error("Failed to read varint, encoding is invalid.")}function ae(a,f){return Error("Tried to read past the end of the data "+f+" > "+a)}function le(){throw Error("Invalid UTF8")}function se(a,f){return f=String.fromCharCode.apply(null,f),a==null?f:a+f}var Ie=void 0,ye,Re=typeof TextDecoder<"u",$e,pe=typeof TextEncoder<"u",Te;function it(a){if(a!==mt)throw Error("illegal external caller")}function Fe(a,f){if(it(f),this.V=a,a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values")}function we(){return Te||(Te=new Fe(null,mt))}function Ge(a){it(mt);var f=a.V;return f=f==null||We&&f!=null&&f instanceof Uint8Array?f:typeof f=="string"?je(f):null,f==null?f:a.V=f}function Je(a){if(typeof a=="string")return{buffer:je(a),C:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),C:!1};if(a.constructor===Uint8Array)return{buffer:a,C:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),C:!1};if(a.constructor===Fe)return{buffer:Ge(a)||Ze(),C:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function yt(a,f){this.i=null,this.m=!1,this.h=this.j=this.l=0,G(this,a,f)}function G(a,f,g){g=g===void 0?{}:g,a.S=g.S===void 0?!1:g.S,f&&(f=Je(f),a.i=f.buffer,a.m=f.C,a.l=0,a.j=a.i.length,a.h=a.l)}yt.prototype.reset=function(){this.h=this.l};function he(a,f){if(a.h=f,f>a.j)throw ae(a.j,f)}function re(a){var f=a.i,g=a.h,M=f[g++],L=M&127;if(M&128&&(M=f[g++],L|=(M&127)<<7,M&128&&(M=f[g++],L|=(M&127)<<14,M&128&&(M=f[g++],L|=(M&127)<<21,M&128&&(M=f[g++],L|=M<<28,M&128&&f[g++]&128&&f[g++]&128&&f[g++]&128&&f[g++]&128&&f[g++]&128)))))throw Z();return he(a,g),L}function oe(a,f){if(0>f)throw Error("Tried to read a negative byte length: "+f);var g=a.h,M=g+f;if(M>a.j)throw ae(f,a.j-g);return a.h=M,g}var ge=[];function Oe(){this.h=[]}Oe.prototype.length=function(){return this.h.length},Oe.prototype.end=function(){var a=this.h;return this.h=[],a};function ot(a,f,g){for(;0<g||127<f;)a.h.push(f&127|128),f=(f>>>7|g<<25)>>>0,g>>>=7;a.h.push(f)}function gt(a,f){for(;127<f;)a.h.push(f&127|128),f>>>=7;a.h.push(f)}function Ft(a,f){if(ge.length){var g=ge.pop();G(g,a,f),a=g}else a=new yt(a,f);this.h=a,this.j=this.h.h,this.i=this.l=-1,this.setOptions(f)}Ft.prototype.setOptions=function(a){a=a===void 0?{}:a,this.ca=a.ca===void 0?!1:a.ca},Ft.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function lt(a){var f=a.h;if(f.h==f.j)return!1;a.j=a.h.h;var g=re(a.h)>>>0;if(f=g>>>3,g&=7,!(0<=g&&5>=g))throw A(g,a.j);if(1>f)throw Error("Invalid field number: "+f+" (at position "+a.j+")");return a.l=f,a.i=g,!0}function _n(a){switch(a.i){case 0:if(a.i!=0)_n(a);else e:{a=a.h;for(var f=a.h,g=f+10,M=a.i;f<g;)if(!(M[f++]&128)){he(a,f);break e}throw Z()}break;case 1:a=a.h,he(a,a.h+8);break;case 2:a.i!=2?_n(a):(f=re(a.h)>>>0,a=a.h,he(a,a.h+f));break;case 5:a=a.h,he(a,a.h+4);break;case 3:f=a.l;do{if(!lt(a))throw Error("Unmatched start-group tag: stream EOF");if(a.i==4){if(a.l!=f)throw Error("Unmatched end-group tag");break}_n(a)}while(!0);break;default:throw A(a.i,a.j)}}var cn=[];function Ta(){this.j=[],this.i=0,this.h=new Oe}function yn(a,f){f.length!==0&&(a.j.push(f),a.i+=f.length)}function gs(a,f){if(f=f.R){yn(a,a.h.end());for(var g=0;g<f.length;g++)yn(a,Ge(f[g])||Ze())}}var zn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function fi(a,f){return zn?a[zn]|=f:a.A!==void 0?a.A|=f:(Object.defineProperties(a,{A:{value:f,configurable:!0,writable:!0,enumerable:!1}}),f)}function wr(a,f){zn?a[zn]&&(a[zn]&=~f):a.A!==void 0&&(a.A&=~f)}function Ct(a){var f;return zn?f=a[zn]:f=a.A,f??0}function fn(a,f){zn?a[zn]=f:a.A!==void 0?a.A=f:Object.defineProperties(a,{A:{value:f,configurable:!0,writable:!0,enumerable:!1}})}function no(a){return fi(a,1),a}function wa(a,f){fn(f,(a|0)&-51)}function io(a,f){fn(f,(a|18)&-41)}var vs={};function ro(a){return a!==null&&typeof a=="object"&&!Array.isArray(a)&&a.constructor===Object}var C,W=[];fn(W,23),C=Object.freeze(W);function $(a){if(Ct(a.o)&2)throw Error("Cannot mutate an immutable Message")}function q(a){var f=a.length;(f=f?a[f-1]:void 0)&&ro(f)?f.g=1:(f={},a.push((f.g=1,f)))}function X(a){var f=a.i+a.G;return a.B||(a.B=a.o[f]={})}function fe(a,f){return f===-1?null:f>=a.i?a.B?a.B[f]:void 0:a.o[f+a.G]}function ve(a,f,g,M){$(a),Ae(a,f,g,M)}function Ae(a,f,g,M){a.j&&(a.j=void 0),f>=a.i||M?X(a)[f]=g:(a.o[f+a.G]=g,(a=a.B)&&f in a&&delete a[f])}function Le(a,f,g,M){var L=fe(a,f);Array.isArray(L)||(L=C);var U=Ct(L);if(U&1||no(L),M)U&2||fi(L,2),g&1||Object.freeze(L);else{M=!(g&2);var D=U&2;g&1||!D?M&&U&16&&!D&&wr(L,16):(L=no(Array.prototype.slice.call(L)),Ae(a,f,L))}return L}function ke(a,f){var g=fe(a,f),M=g==null?g:typeof g=="number"||g==="NaN"||g==="Infinity"||g==="-Infinity"?Number(g):void 0;return M!=null&&M!==g&&Ae(a,f,M),M}function Be(a,f,g,M,L){a.h||(a.h={});var U=a.h[g],D=Le(a,g,3,L);if(!U){var H=D;U=[];var K=!!(Ct(a.o)&16);D=!!(Ct(H)&2);var ue=H;!L&&D&&(H=Array.prototype.slice.call(H));for(var _e=D,ze=0;ze<H.length;ze++){var De=H[ze],Me=f,He=!1;if(He=He===void 0?!1:He,De=Array.isArray(De)?new Me(De):He?new Me:void 0,De!==void 0){Me=De.o;var nt=He=Ct(Me);D&&(nt|=2),K&&(nt|=16),nt!=He&&fn(Me,nt),Me=nt,_e=_e||!!(2&Me),U.push(De)}}return a.h[g]=U,K=Ct(H),f=K|33,f=_e?f&-9:f|8,K!=f&&(_e=H,Object.isFrozen(_e)&&(_e=Array.prototype.slice.call(_e)),fn(_e,f),H=_e),ue!==H&&Ae(a,g,H),(L||M&&D)&&fi(U,2),M&&Object.freeze(U),U}return L||(L=Object.isFrozen(U),M&&!L?Object.freeze(U):!M&&L&&(U=Array.prototype.slice.call(U),a.h[g]=U)),U}function Ne(a,f,g){var M=!!(Ct(a.o)&2);if(f=Be(a,f,g,M,M),a=Le(a,g,3,M),!(M||Ct(a)&8)){for(M=0;M<f.length;M++){if(g=f[M],Ct(g.o)&2){var L=Zn(g,!1);L.j=g}else L=g;g!==L&&(f[M]=L,a[M]=L.o)}fi(a,8)}return f}function Ke(a,f,g){if(g!=null&&typeof g!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof g+": "+g);ve(a,f,g)}function Mt(a,f,g,M,L){$(a);var U=Be(a,g,f,!1,!1);return g=M??new g,a=Le(a,f,2,!1),L!=null?(U.splice(L,0,g),a.splice(L,0,g.o)):(U.push(g),a.push(g.o)),g.C()&&wr(a,8),g}function _t(a,f){return a??f}function Rt(a,f,g){return g=g===void 0?0:g,_t(ke(a,f),g)}var st;function be(a){switch(typeof a){case"number":return isFinite(a)?a:String(a);case"object":if(a)if(Array.isArray(a)){if(Ct(a)&128)return a=Array.prototype.slice.call(a),q(a),a}else{if(We&&a!=null&&a instanceof Uint8Array)return ce(a);if(a instanceof Fe){var f=a.V;return f==null?"":typeof f=="string"?f:a.V=ce(f)}}}return a}function kt(a,f,g,M){if(a!=null){if(Array.isArray(a))a=at(a,f,g,M!==void 0);else if(ro(a)){var L={},U;for(U in a)L[U]=kt(a[U],f,g,M);a=L}else a=f(a,M);return a}}function at(a,f,g,M){var L=Ct(a);M=M?!!(L&16):void 0,a=Array.prototype.slice.call(a);for(var U=0;U<a.length;U++)a[U]=kt(a[U],f,g,M);return g(L,a),a}function Ln(a){return a.ja===vs?a.toJSON():be(a)}function Wi(a,f){a&128&&q(f)}function nn(a,f,g){if(g=g===void 0?io:g,a!=null){if(We&&a instanceof Uint8Array)return a.length?new Fe(new Uint8Array(a),mt):we();if(Array.isArray(a)){var M=Ct(a);return M&2?a:f&&!(M&32)&&(M&16||M===0)?(fn(a,M|2),a):(a=at(a,nn,M&4?io:g,!0),f=Ct(a),f&4&&f&2&&Object.freeze(a),a)}return a.ja===vs?bt(a):a}}function oo(a,f,g,M,L,U,D){if(a=a.h&&a.h[g]){if(M=Ct(a),M&2?M=a:(U=Y(a,bt),io(M,U),Object.freeze(U),M=U),$(f),D=M==null?C:no([]),M!=null){for(U=!!M.length,a=0;a<M.length;a++){var H=M[a];U=U&&!(Ct(H.o)&2),D[a]=H.o}U=(U?8:0)|1,a=Ct(D),(a&U)!==U&&(Object.isFrozen(D)&&(D=Array.prototype.slice.call(D)),fn(D,a|U)),f.h||(f.h={}),f.h[g]=M}else f.h&&(f.h[g]=void 0);Ae(f,g,D,L)}else ve(f,g,nn(M,U,D),L)}function bt(a){return Ct(a.o)&2||(a=Zn(a,!0),fi(a.o,2)),a}function Zn(a,f){var g=a.o,M=[];fi(M,16);var L=a.constructor.h;if(L&&M.push(L),L=a.B,L){M.length=g.length,M.fill(void 0,M.length,g.length);var U={};M[M.length-1]=U}Ct(g)&128&&q(M),f=f||a.C()?io:wa,U=a.constructor,st=M,M=new U(M),st=void 0,a.R&&(M.R=a.R.slice()),U=!!(Ct(g)&16);for(var D=L?g.length-1:g.length,H=0;H<D;H++)oo(a,M,H-a.G,g[H],!1,U,f);if(L)for(var K in L)oo(a,M,+K,L[K],!0,U,f);return M}function jt(a,f,g){a==null&&(a=st),st=void 0;var M=this.constructor.i||0,L=0<M,U=this.constructor.h,D=!1;if(a==null){a=U?[U]:[];var H=48,K=!0;L&&(M=0,H|=128),fn(a,H)}else{if(!Array.isArray(a)||U&&U!==a[0])throw Error();var ue=H=fi(a,0);if((K=(16&ue)!==0)&&((D=(32&ue)!==0)||(ue|=32)),L){if(128&ue)M=0;else if(0<a.length){var _e=a[a.length-1];if(ro(_e)&&"g"in _e){M=0,ue|=128,delete _e.g;var ze=!0,De;for(De in _e){ze=!1;break}ze&&a.pop()}}}else if(128&ue)throw Error();H!==ue&&fn(a,ue)}this.G=(U?0:-1)-M,this.h=void 0,this.o=a;e:{if(U=this.o.length,M=U-1,U&&(U=this.o[M],ro(U))){this.B=U,this.i=M-this.G;break e}f!==void 0&&-1<f?(this.i=Math.max(f,M+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!L&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(g){f=K&&!D&&!0,L=this.i;var Me;for(K=0;K<g.length;K++)D=g[K],D<L?(D+=this.G,(M=a[D])?dn(M,f):a[D]=C):(Me||(Me=X(this)),(M=Me[D])?dn(M,f):Me[D]=C)}}jt.prototype.toJSON=function(){return at(this.o,Ln,Wi)},jt.prototype.C=function(){return!!(Ct(this.o)&2)};function dn(a,f){if(Array.isArray(a)){var g=Ct(a),M=1;!f||g&2||(M|=16),(g&M)!==M&&fn(a,g|M)}}jt.prototype.ja=vs,jt.prototype.toString=function(){return this.o.toString()};function so(a,f,g){if(g){var M={},L;for(L in g){var U=g[L],D=U.qa;D||(M.J=U.wa||U.oa.W,U.ia?(M.aa=yh(U.ia),D=function(H){return function(K,ue,_e){return H.J(K,ue,_e,H.aa)}}(M)):U.ka?(M.Z=xh(U.da.P,U.ka),D=function(H){return function(K,ue,_e){return H.J(K,ue,_e,H.Z)}}(M)):D=M.J,U.qa=D),D(f,a,U.da),M={J:M.J,aa:M.aa,Z:M.Z}}}gs(f,a)}var ao=Symbol();function _s(a,f,g){return a[ao]||(a[ao]=function(M,L){return f(M,L,g)})}function gh(a){var f=a[ao];if(!f){var g=Du(a);f=function(M,L){return Sh(M,L,g)},a[ao]=f}return f}function I_(a){var f=a.ia;if(f)return gh(f);if(f=a.va)return _s(a.da.P,f,a.ka)}function N_(a){var f=I_(a),g=a.da,M=a.oa.U;return f?function(L,U){return M(L,U,g,f)}:function(L,U){return M(L,U,g)}}function vh(a,f){var g=a[f];return typeof g=="function"&&g.length===0&&(g=g(),a[f]=g),Array.isArray(g)&&(xs in g||ys in g||0<g.length&&typeof g[0]=="function")?g:void 0}function _h(a,f,g,M,L,U){f.P=a[0];var D=1;if(a.length>D&&typeof a[D]!="number"){var H=a[D++];g(f,H)}for(;D<a.length;){g=a[D++];for(var K=D+1;K<a.length&&typeof a[K]!="number";)K++;switch(H=a[D++],K-=D,K){case 0:M(f,g,H);break;case 1:(K=vh(a,D))?(D++,L(f,g,H,K)):M(f,g,H,a[D++]);break;case 2:K=D++,K=vh(a,K),L(f,g,H,K,a[D++]);break;case 3:U(f,g,H,a[D++],a[D++],a[D++]);break;case 4:U(f,g,H,a[D++],a[D++],a[D++],a[D++]);break;default:throw Error("unexpected number of binary field arguments: "+K)}}return f}var Aa=Symbol();function yh(a){var f=a[Aa];if(!f){var g=bu(a);f=function(M,L){return Mh(M,L,g)},a[Aa]=f}return f}function xh(a,f){var g=a[Aa];return g||(g=function(M,L){return so(M,L,f)},a[Aa]=g),g}var ys=Symbol();function F_(a,f){a.push(f)}function O_(a,f,g){a.push(f,g.W)}function k_(a,f,g,M){var L=yh(M),U=bu(M).P,D=g.W;a.push(f,function(H,K,ue){return D(H,K,ue,U,L)})}function B_(a,f,g,M,L,U){var D=xh(M,U),H=g.W;a.push(f,function(K,ue,_e){return H(K,ue,_e,M,D)})}function bu(a){var f=a[ys];return f||(f=_h(a,a[ys]=[],F_,O_,k_,B_),xs in a&&ys in a&&(a.length=0),f)}var xs=Symbol();function z_(a,f){a[0]=f}function H_(a,f,g,M){var L=g.U;a[f]=M?function(U,D,H){return L(U,D,H,M)}:L}function V_(a,f,g,M,L){var U=g.U,D=gh(M),H=Du(M).P;a[f]=function(K,ue,_e){return U(K,ue,_e,H,D,L)}}function G_(a,f,g,M,L,U,D){var H=g.U,K=_s(M,L,U);a[f]=function(ue,_e,ze){return H(ue,_e,ze,M,K,D)}}function Du(a){var f=a[xs];return f||(f=_h(a,a[xs]={},z_,H_,V_,G_),xs in a&&ys in a&&(a.length=0),f)}function Sh(a,f,g){for(;lt(f)&&f.i!=4;){var M=f.l,L=g[M];if(!L){var U=g[0];U&&(U=U[M])&&(L=g[M]=N_(U))}if(!L||!L(f,a,M)){L=f,M=a,U=L.j,_n(L);var D=L;if(!D.ca){if(L=D.h.h-U,D.h.h=U,D=D.h,L==0)L=we();else{if(U=oe(D,L),D.S&&D.m)L=D.i.subarray(U,U+L);else{D=D.i;var H=U;L=U+L,L=H===L?Ze():k?D.slice(H,L):new Uint8Array(D.subarray(H,L))}L=L.length==0?we():new Fe(L,mt)}(U=M.R)?U.push(L):M.R=[L]}}}return a}function Mh(a,f,g){for(var M=g.length,L=M%2==1,U=L?1:0;U<M;U+=2)(0,g[U+1])(f,a,g[U]);so(a,f,L?g[0]:void 0)}function Ss(a,f){return{U:a,W:f}}var Qn=Ss(function(a,f,g){if(a.i!==5)return!1;a=a.h;var M=a.i,L=a.h,U=M[L],D=M[L+1],H=M[L+2];return M=M[L+3],he(a,a.h+4),D=(U<<0|D<<8|H<<16|M<<24)>>>0,a=2*(D>>31)+1,U=D>>>23&255,D&=8388607,ve(f,g,U==255?D?NaN:1/0*a:U==0?a*Math.pow(2,-149)*D:a*Math.pow(2,U-150)*(D+Math.pow(2,23))),!0},function(a,f,g){if(f=ke(f,g),f!=null){gt(a.h,8*g+5),a=a.h;var M=+f;M===0?0<1/M?Qe=Xe=0:(Xe=0,Qe=2147483648):isNaN(M)?(Xe=0,Qe=2147483647):(M=(g=0>M?-2147483648:0)?-M:M,34028234663852886e22<M?(Xe=0,Qe=(g|2139095040)>>>0):11754943508222875e-54>M?(M=Math.round(M/Math.pow(2,-149)),Xe=0,Qe=(g|M)>>>0):(f=Math.floor(Math.log(M)/Math.LN2),M*=Math.pow(2,-f),M=Math.round(8388608*M),16777216<=M&&++f,Xe=0,Qe=(g|f+127<<23|M&8388607)>>>0)),g=Qe,a.h.push(g>>>0&255),a.h.push(g>>>8&255),a.h.push(g>>>16&255),a.h.push(g>>>24&255)}}),W_=Ss(function(a,f,g){if(a.i!==0)return!1;var M=a.h,L=0,U=a=0,D=M.i,H=M.h;do{var K=D[H++];L|=(K&127)<<U,U+=7}while(32>U&&K&128);for(32<U&&(a|=(K&127)>>4),U=3;32>U&&K&128;U+=7)K=D[H++],a|=(K&127)<<U;if(he(M,H),128>K)M=L>>>0,K=a>>>0,(a=K&2147483648)&&(M=~M+1>>>0,K=~K>>>0,M==0&&(K=K+1>>>0)),M=4294967296*K+(M>>>0);else throw Z();return ve(f,g,a?-M:M),!0},function(a,f,g){f=fe(f,g),f!=null&&(typeof f=="string"&&Ye(f),f!=null&&(gt(a.h,8*g),typeof f=="number"?(a=a.h,ft(f),ot(a,Qe,Xe)):(g=Ye(f),ot(a.h,g.i,g.h))))}),X_=Ss(function(a,f,g){return a.i!==0?!1:(ve(f,g,re(a.h)),!0)},function(a,f,g){if(f=fe(f,g),f!=null&&f!=null)if(gt(a.h,8*g),a=a.h,g=f,0<=g)gt(a,g);else{for(f=0;9>f;f++)a.h.push(g&127|128),g>>=7;a.h.push(1)}}),Eh=Ss(function(a,f,g){if(a.i!==2)return!1;var M=re(a.h)>>>0;a=a.h;var L=oe(a,M);if(a=a.i,Re){var U=a,D;(D=ye)||(D=ye=new TextDecoder("utf-8",{fatal:!0})),a=L+M,U=L===0&&a===U.length?U:U.subarray(L,a);try{var H=D.decode(U)}catch(ze){if(Ie===void 0){try{D.decode(new Uint8Array([128]))}catch{}try{D.decode(new Uint8Array([97])),Ie=!0}catch{Ie=!1}}throw!Ie&&(ye=void 0),ze}}else{H=L,M=H+M,L=[];for(var K=null,ue,_e;H<M;)ue=a[H++],128>ue?L.push(ue):224>ue?H>=M?le():(_e=a[H++],194>ue||(_e&192)!==128?(H--,le()):L.push((ue&31)<<6|_e&63)):240>ue?H>=M-1?le():(_e=a[H++],(_e&192)!==128||ue===224&&160>_e||ue===237&&160<=_e||((U=a[H++])&192)!==128?(H--,le()):L.push((ue&15)<<12|(_e&63)<<6|U&63)):244>=ue?H>=M-2?le():(_e=a[H++],(_e&192)!==128||(ue<<28)+(_e-144)>>30||((U=a[H++])&192)!==128||((D=a[H++])&192)!==128?(H--,le()):(ue=(ue&7)<<18|(_e&63)<<12|(U&63)<<6|D&63,ue-=65536,L.push((ue>>10&1023)+55296,(ue&1023)+56320))):le(),8192<=L.length&&(K=se(K,L),L.length=0);H=se(K,L)}return ve(f,g,H),!0},function(a,f,g){if(f=fe(f,g),f!=null){var M=!1;if(M=M===void 0?!1:M,pe){if(M&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(f))throw Error("Found an unpaired surrogate");f=($e||($e=new TextEncoder)).encode(f)}else{for(var L=0,U=new Uint8Array(3*f.length),D=0;D<f.length;D++){var H=f.charCodeAt(D);if(128>H)U[L++]=H;else{if(2048>H)U[L++]=H>>6|192;else{if(55296<=H&&57343>=H){if(56319>=H&&D<f.length){var K=f.charCodeAt(++D);if(56320<=K&&57343>=K){H=1024*(H-55296)+K-56320+65536,U[L++]=H>>18|240,U[L++]=H>>12&63|128,U[L++]=H>>6&63|128,U[L++]=H&63|128;continue}else D--}if(M)throw Error("Found an unpaired surrogate");H=65533}U[L++]=H>>12|224,U[L++]=H>>6&63|128}U[L++]=H&63|128}}f=L===U.length?U:U.subarray(0,L)}gt(a.h,8*g+2),gt(a.h,f.length),yn(a,a.h.end()),yn(a,f)}}),Th=Ss(function(a,f,g,M,L){if(a.i!==2)return!1;f=Mt(f,g,M),g=a.h.j,M=re(a.h)>>>0;var U=a.h.h+M,D=U-g;if(0>=D&&(a.h.j=U,L(f,a,void 0,void 0,void 0),D=U-a.h.h),D)throw Error("Message parsing ended unexpectedly. Expected to read "+(M+" bytes, instead read "+(M-D)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return a.h.h=U,a.h.j=g,!0},function(a,f,g,M,L){if(f=Ne(f,M,g),f!=null)for(M=0;M<f.length;M++){var U=a;gt(U.h,8*g+2);var D=U.h.end();yn(U,D),D.push(U.i),U=D,L(f[M],a),D=a;var H=U.pop();for(H=D.i+D.h.length()-H;127<H;)U.push(H&127|128),H>>>=7,D.i++;U.push(H),D.i++}});function Uu(a){return function(f,g){e:{if(cn.length){var M=cn.pop();M.setOptions(g),G(M.h,f,g),f=M}else f=new Ft(f,g);try{var L=Du(a),U=Sh(new L.P,f,L);break e}finally{L=f.h,L.i=null,L.m=!1,L.l=0,L.j=0,L.h=0,L.S=!1,f.l=-1,f.i=-1,100>cn.length&&cn.push(f)}U=void 0}return U}}function Iu(a){return function(){var f=new Ta;Mh(this,f,bu(a)),yn(f,f.h.end());for(var g=new Uint8Array(f.i),M=f.j,L=M.length,U=0,D=0;D<L;D++){var H=M[D];g.set(H,U),U+=H.length}return f.j=[g],g}}function lo(a){jt.call(this,a)}_(lo,jt);var wh=[lo,1,X_,2,Qn,3,Eh,4,Eh];lo.prototype.l=Iu(wh);function Nu(a){jt.call(this,a,-1,j_)}_(Nu,jt),Nu.prototype.addClassification=function(a,f){return Mt(this,1,lo,a,f),this};var j_=[1],Ah=Uu([Nu,1,Th,wh]);function uo(a){jt.call(this,a)}_(uo,jt);var Ch=[uo,1,Qn,2,Qn,3,Qn,4,Qn,5,Qn];uo.prototype.l=Iu(Ch);function Rh(a){jt.call(this,a,-1,Y_)}_(Rh,jt);var Y_=[1],Ph=Uu([Rh,1,Th,Ch]);function Ca(a){jt.call(this,a)}_(Ca,jt);var Lh=[Ca,1,Qn,2,Qn,3,Qn,4,Qn,5,Qn,6,W_],$_=Uu(Lh);Ca.prototype.l=Iu(Lh);function bh(a,f,g){if(g=a.createShader(g===0?a.VERTEX_SHADER:a.FRAGMENT_SHADER),a.shaderSource(g,f),a.compileShader(g),!a.getShaderParameter(g,a.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+a.getShaderInfoLog(g));return g}function Dh(a){return Ne(a,lo,1).map(function(f){var g=fe(f,1);return{index:g??0,score:Rt(f,2),label:fe(f,3)!=null?_t(fe(f,3),""):void 0,displayName:fe(f,4)!=null?_t(fe(f,4),""):void 0}})}function Uh(a){return{x:Rt(a,1),y:Rt(a,2),z:Rt(a,3),visibility:ke(a,4)!=null?Rt(a,4):void 0}}function Ih(a){return a.map(function(f){return Ne(Ph(f),uo,1).map(Uh)})}function Fu(a,f){this.i=a,this.h=f,this.m=0}function Nh(a,f,g){return q_(a,f),typeof a.h.canvas.transferToImageBitmap=="function"?Promise.resolve(a.h.canvas.transferToImageBitmap()):g?Promise.resolve(a.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(a.h.canvas):(a.j===void 0&&(a.j=document.createElement("canvas")),new Promise(function(M){a.j.height=a.h.canvas.height,a.j.width=a.h.canvas.width,a.j.getContext("2d",{}).drawImage(a.h.canvas,0,0,a.h.canvas.width,a.h.canvas.height),M(a.j)}))}function q_(a,f){var g=a.h;if(a.s===void 0){var M=bh(g,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),L=bh(g,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),U=g.createProgram();if(g.attachShader(U,M),g.attachShader(U,L),g.linkProgram(U),!g.getProgramParameter(U,g.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+g.getProgramInfoLog(U));M=a.s=U,g.useProgram(M),L=g.getUniformLocation(M,"sampler0"),a.l={O:g.getAttribLocation(M,"aVertex"),N:g.getAttribLocation(M,"aTex"),xa:L},a.v=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,a.v),g.enableVertexAttribArray(a.l.O),g.vertexAttribPointer(a.l.O,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),a.u=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,a.u),g.enableVertexAttribArray(a.l.N),g.vertexAttribPointer(a.l.N,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),g.uniform1i(L,0)}M=a.l,g.useProgram(a.s),g.canvas.width=f.width,g.canvas.height=f.height,g.viewport(0,0,f.width,f.height),g.activeTexture(g.TEXTURE0),a.i.bindTexture2d(f.glName),g.enableVertexAttribArray(M.O),g.bindBuffer(g.ARRAY_BUFFER,a.v),g.vertexAttribPointer(M.O,2,g.FLOAT,!1,0,0),g.enableVertexAttribArray(M.N),g.bindBuffer(g.ARRAY_BUFFER,a.u),g.vertexAttribPointer(M.N,2,g.FLOAT,!1,0,0),g.bindFramebuffer(g.DRAW_FRAMEBUFFER?g.DRAW_FRAMEBUFFER:g.FRAMEBUFFER,null),g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.colorMask(!0,!0,!0,!0),g.drawArrays(g.TRIANGLE_FAN,0,4),g.disableVertexAttribArray(M.O),g.disableVertexAttribArray(M.N),g.bindBuffer(g.ARRAY_BUFFER,null),a.i.bindTexture2d(0)}function K_(a){this.h=a}var Z_=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Q_(a,f){return f+a}function Fh(a,f){window[a]=f}function J_(a){var f=document.createElement("script");return f.setAttribute("src",a),f.setAttribute("crossorigin","anonymous"),new Promise(function(g){f.addEventListener("load",function(){g()},!1),f.addEventListener("error",function(){g()},!1),document.body.appendChild(f)})}function e0(){return R(function(a){switch(a.h){case 1:return a.s=2,w(a,WebAssembly.instantiate(Z_),4);case 4:a.h=3,a.s=0;break;case 2:return a.s=0,a.l=null,a.return(!1);case 3:return a.return(!0)}})}function Ou(a){if(this.h=a,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=a&&a.locateFile||Q_,typeof window=="object")var f=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")f=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=f,a.options){f=l(Object.keys(a.options));for(var g=f.next();!g.done;g=f.next()){g=g.value;var M=a.options[g].default;M!==void 0&&(this.l[g]=typeof M=="function"?M():M)}}}t=Ou.prototype,t.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function t0(a){var f,g,M,L,U,D,H,K,ue,_e,ze;return R(function(De){switch(De.h){case 1:return a.ga?(f=a.h.files===void 0?[]:typeof a.h.files=="function"?a.h.files(a.l):a.h.files,w(De,e0(),2)):De.return();case 2:if(g=De.i,typeof window=="object")return Fh("createMediapipeSolutionsWasm",{locateFile:a.locateFile}),Fh("createMediapipeSolutionsPackedAssets",{locateFile:a.locateFile}),D=f.filter(function(Me){return Me.data!==void 0}),H=f.filter(function(Me){return Me.data===void 0}),K=Promise.all(D.map(function(Me){var He=Ra(a,Me.url);if(Me.path!==void 0){var nt=Me.path;He=He.then(function(Et){return a.overrideFile(nt,Et),Promise.resolve(Et)})}return He})),ue=Promise.all(H.map(function(Me){return Me.simd===void 0||Me.simd&&g||!Me.simd&&!g?J_(a.locateFile(Me.url,a.ha)):Promise.resolve()})).then(function(){var Me,He,nt;return R(function(Et){if(Et.h==1)return Me=window.createMediapipeSolutionsWasm,He=window.createMediapipeSolutionsPackedAssets,nt=a,w(Et,Me(He),2);nt.i=Et.i,Et.h=0})}),_e=function(){return R(function(Me){return a.h.graph&&a.h.graph.url?Me=w(Me,Ra(a,a.h.graph.url),0):(Me.h=0,Me=void 0),Me})}(),w(De,Promise.all([ue,K,_e]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return M=f.filter(function(Me){return Me.simd===void 0||Me.simd&&g||!Me.simd&&!g}).map(function(Me){return a.locateFile(Me.url,a.ha)}),importScripts.apply(null,u(M)),L=a,w(De,createMediapipeSolutionsWasm(Module),6);case 6:L.i=De.i,a.m=new OffscreenCanvas(1,1),a.i.canvas=a.m,U=a.i.GL.createContext(a.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),a.i.GL.makeContextCurrent(U),De.h=4;break;case 7:if(a.m=document.createElement("canvas"),ze=a.m.getContext("webgl2",{}),!ze&&(ze=a.m.getContext("webgl",{}),!ze))return alert("Failed to create WebGL canvas context when passing video frame."),De.return();a.K=ze,a.i.canvas=a.m,a.i.createContext(a.m,!0,!0,{});case 4:a.j=new a.i.SolutionWasm,a.ga=!1,De.h=0}})}function n0(a){var f,g,M,L,U,D,H,K;return R(function(ue){if(ue.h==1){if(a.h.graph&&a.h.graph.url&&a.fa===a.h.graph.url)return ue.return();if(a.u=!0,!a.h.graph||!a.h.graph.url){ue.h=2;return}return a.fa=a.h.graph.url,w(ue,Ra(a,a.h.graph.url),3)}for(ue.h!=2&&(f=ue.i,a.j.loadGraph(f)),g=l(Object.keys(a.D)),M=g.next();!M.done;M=g.next())L=M.value,a.j.overrideFile(L,a.D[L]);if(a.D={},a.h.listeners)for(U=l(a.h.listeners),D=U.next();!D.done;D=U.next())H=D.value,s0(a,H);K=a.l,a.l={},a.setOptions(K),ue.h=0})}t.reset=function(){var a=this;return R(function(f){a.j&&(a.j.reset(),a.s={},a.v={}),f.h=0})},t.setOptions=function(a,f){var g=this;if(f=f||this.h.options){for(var M=[],L=[],U={},D=l(Object.keys(a)),H=D.next();!H.done;U={X:U.X,Y:U.Y},H=D.next())if(H=H.value,!(H in this.l&&this.l[H]===a[H])){this.l[H]=a[H];var K=f[H];K!==void 0&&(K.onChange&&(U.X=K.onChange,U.Y=a[H],M.push(function(ue){return function(){var _e;return R(function(ze){if(ze.h==1)return w(ze,ue.X(ue.Y),2);_e=ze.i,_e===!0&&(g.u=!0),ze.h=0})}}(U))),K.graphOptionXref&&(H=Object.assign({},{calculatorName:"",calculatorIndex:0},K.graphOptionXref,{valueNumber:K.type===1?a[H]:0,valueBoolean:K.type===0?a[H]:!1,valueString:K.type===2?a[H]:""}),L.push(H)))}(M.length!==0||L.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(L),this.F=(this.F===void 0?[]:this.F).concat(M))}};function i0(a){var f,g,M,L,U,D,H;return R(function(K){switch(K.h){case 1:if(!a.u)return K.return();if(!a.F){K.h=2;break}f=l(a.F),g=f.next();case 3:if(g.done){K.h=5;break}return M=g.value,w(K,M(),4);case 4:g=f.next(),K.h=3;break;case 5:a.F=void 0;case 2:if(a.H){for(L=new a.i.GraphOptionChangeRequestList,U=l(a.H),D=U.next();!D.done;D=U.next())H=D.value,L.push_back(H);a.j.changeOptions(L),L.delete(),a.H=void 0}a.u=!1,K.h=0}})}t.initialize=function(){var a=this;return R(function(f){return f.h==1?w(f,t0(a),2):f.h!=3?w(f,n0(a),3):w(f,i0(a),0)})};function Ra(a,f){var g,M;return R(function(L){return f in a.L?L.return(a.L[f]):(g=a.locateFile(f,""),M=fetch(g).then(function(U){return U.arrayBuffer()}),a.L[f]=M,L.return(M))})}t.overrideFile=function(a,f){this.j?this.j.overrideFile(a,f):this.D[a]=f},t.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},t.send=function(a,f){var g=this,M,L,U,D,H,K,ue,_e,ze;return R(function(De){switch(De.h){case 1:return g.h.inputs?(M=1e3*(f??performance.now()),w(De,g.I,2)):De.return();case 2:return w(De,g.initialize(),3);case 3:for(L=new g.i.PacketDataList,U=l(Object.keys(a)),D=U.next();!D.done;D=U.next())if(H=D.value,K=g.h.inputs[H]){e:{var Me=a[H];switch(K.type){case"video":var He=g.s[K.stream];if(He||(He=new Fu(g.i,g.K),g.s[K.stream]=He),He.m===0&&(He.m=He.i.createTexture()),typeof HTMLVideoElement<"u"&&Me instanceof HTMLVideoElement)var nt=Me.videoWidth,Et=Me.videoHeight;else typeof HTMLImageElement<"u"&&Me instanceof HTMLImageElement?(nt=Me.naturalWidth,Et=Me.naturalHeight):(nt=Me.width,Et=Me.height);Et={glName:He.m,width:nt,height:Et},nt=He.h,nt.canvas.width=Et.width,nt.canvas.height=Et.height,nt.activeTexture(nt.TEXTURE0),He.i.bindTexture2d(He.m),nt.texImage2D(nt.TEXTURE_2D,0,nt.RGBA,nt.RGBA,nt.UNSIGNED_BYTE,Me),He.i.bindTexture2d(0),He=Et;break e;case"detections":for(He=g.s[K.stream],He||(He=new K_(g.i),g.s[K.stream]=He),He.data||(He.data=new He.h.DetectionListData),He.data.reset(Me.length),Et=0;Et<Me.length;++Et){nt=Me[Et];var xt=He.data,Zt=xt.setBoundingBox,Hn=Et,xn=nt.la,ct=new Ca;if(Ke(ct,1,xn.ra),Ke(ct,2,xn.sa),Ke(ct,3,xn.height),Ke(ct,4,xn.width),Ke(ct,5,xn.rotation),ve(ct,6,xn.pa),xn=ct.l(),Zt.call(xt,Hn,xn),nt.ea)for(xt=0;xt<nt.ea.length;++xt){ct=nt.ea[xt],Zt=He.data,Hn=Zt.addNormalizedLandmark,xn=Et,ct=Object.assign({},ct,{visibility:ct.visibility?ct.visibility:0});var Qt=new uo;Ke(Qt,1,ct.x),Ke(Qt,2,ct.y),Ke(Qt,3,ct.z),ct.visibility&&Ke(Qt,4,ct.visibility),ct=Qt.l(),Hn.call(Zt,xn,ct)}if(nt.ba)for(xt=0;xt<nt.ba.length;++xt)Zt=He.data,Hn=Zt.addClassification,xn=Et,ct=nt.ba[xt],Qt=new lo,Ke(Qt,2,ct.score),ct.index&&ve(Qt,1,ct.index),ct.label&&ve(Qt,3,ct.label),ct.displayName&&ve(Qt,4,ct.displayName),ct=Qt.l(),Hn.call(Zt,xn,ct)}He=He.data;break e;default:He={}}}switch(ue=He,_e=K.stream,K.type){case"video":L.pushTexture2d(Object.assign({},ue,{stream:_e,timestamp:M}));break;case"detections":ze=ue,ze.stream=_e,ze.timestamp=M,L.pushDetectionList(ze);break;default:throw Error("Unknown input config type: '"+K.type+"'")}}return g.j.send(L),w(De,g.I,4);case 4:L.delete(),De.h=0}})};function r0(a,f,g){var M,L,U,D,H,K,ue,_e,ze,De,Me,He,nt,Et;return R(function(xt){switch(xt.h){case 1:if(!g)return xt.return(f);for(M={},L=0,U=l(Object.keys(g)),D=U.next();!D.done;D=U.next())H=D.value,K=g[H],typeof K!="string"&&K.type==="texture"&&f[K.stream]!==void 0&&++L;1<L&&(a.M=!1),ue=l(Object.keys(g)),D=ue.next();case 2:if(D.done){xt.h=4;break}if(_e=D.value,ze=g[_e],typeof ze=="string")return nt=M,Et=_e,w(xt,o0(a,_e,f[ze]),14);if(De=f[ze.stream],ze.type==="detection_list"){if(De){for(var Zt=De.getRectList(),Hn=De.getLandmarksList(),xn=De.getClassificationsList(),ct=[],Qt=0;Qt<Zt.size();++Qt){var Xi=$_(Zt.get(Qt)),a0=Rt(Xi,1),l0=Rt(Xi,2),u0=Rt(Xi,3),c0=Rt(Xi,4),f0=Rt(Xi,5,0),Pa=void 0;Pa=Pa===void 0?0:Pa,Xi={la:{ra:a0,sa:l0,height:u0,width:c0,rotation:f0,pa:_t(fe(Xi,6),Pa)},ea:Ne(Ph(Hn.get(Qt)),uo,1).map(Uh),ba:Dh(Ah(xn.get(Qt)))},ct.push(Xi)}Zt=ct}else Zt=[];M[_e]=Zt,xt.h=7;break}if(ze.type==="proto_list"){if(De){for(Zt=Array(De.size()),Hn=0;Hn<De.size();Hn++)Zt[Hn]=De.get(Hn);De.delete()}else Zt=[];M[_e]=Zt,xt.h=7;break}if(De===void 0){xt.h=3;break}if(ze.type==="float_list"){M[_e]=De,xt.h=7;break}if(ze.type==="proto"){M[_e]=De,xt.h=7;break}if(ze.type!=="texture")throw Error("Unknown output config type: '"+ze.type+"'");return Me=a.v[_e],Me||(Me=new Fu(a.i,a.K),a.v[_e]=Me),w(xt,Nh(Me,De,a.M),13);case 13:He=xt.i,M[_e]=He;case 7:ze.transform&&M[_e]&&(M[_e]=ze.transform(M[_e])),xt.h=3;break;case 14:nt[Et]=xt.i;case 3:D=ue.next(),xt.h=2;break;case 4:return xt.return(M)}})}function o0(a,f,g){var M;return R(function(L){return typeof g=="number"||g instanceof Uint8Array||g instanceof a.i.Uint8BlobList?L.return(g):g instanceof a.i.Texture2dDataOut?(M=a.v[f],M||(M=new Fu(a.i,a.K),a.v[f]=M),L.return(Nh(M,g,a.M))):L.return(void 0)})}function s0(a,f){for(var g=f.name||"$",M=[].concat(u(f.wants)),L=new a.i.StringList,U=l(f.wants),D=U.next();!D.done;D=U.next())L.push_back(D.value);U=a.i.PacketListener.implement({onResults:function(H){for(var K={},ue=0;ue<f.wants.length;++ue)K[M[ue]]=H.get(ue);var _e=a.listeners[g];_e&&(a.I=r0(a,K,f.outs).then(function(ze){ze=_e(ze);for(var De=0;De<f.wants.length;++De){var Me=K[M[De]];typeof Me=="object"&&Me.hasOwnProperty&&Me.hasOwnProperty("delete")&&Me.delete()}ze&&(a.I=ze)}))}}),a.j.attachMultiListener(L,U),L.delete()}t.onResults=function(a,f){this.listeners[f||"$"]=a},ne("Solution",Ou),ne("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Oh(a){return a===void 0&&(a=0),a===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function kh(a){var f=this;a=a||{},this.h=new Ou({locateFile:a.locateFile,files:function(g){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Oh(g.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Ih},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Ih},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(g){return g.map(function(M){return Dh(Ah(M))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(g){var M,L,U;return R(function(D){return D.h==1?(M=Oh(g),L="third_party/mediapipe/modules/hand_landmark/"+M,w(D,Ra(f.h,M),2)):(U=D.i,f.h.overrideFile(L,U),D.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}t=kh.prototype,t.close=function(){return this.h.close(),Promise.resolve()},t.onResults=function(a){this.h.onResults(a)},t.initialize=function(){var a=this;return R(function(f){return w(f,a.h.initialize(),0)})},t.reset=function(){this.h.reset()},t.send=function(a){var f=this;return R(function(g){return w(g,f.h.send(a),0)})},t.setOptions=function(a){this.h.setOptions(a)},ne("Hands",kh),ne("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),ne("VERSION","0.4.1675469240")}).call(Vo);var Bx={};(function(){function t(v){var R=0;return function(){return R<v.length?{done:!1,value:v[R++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(v,R,j){return v==Array.prototype||v==Object.prototype||(v[R]=j.value),v};function n(v){v=[typeof globalThis=="object"&&globalThis,v,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vo=="object"&&Vo];for(var R=0;R<v.length;++R){var j=v[R];if(j&&j.Math==Math)return j}throw Error("Cannot find global object")}var i=n(this);function r(v,R){if(R)e:{var j=i;v=v.split(".");for(var V=0;V<v.length-1;V++){var J=v[V];if(!(J in j))break e;j=j[J]}v=v[v.length-1],V=j[v],R=R(V),R!=V&&R!=null&&e(j,v,{configurable:!0,writable:!0,value:R})}}r("Symbol",function(v){function R(ne){if(this instanceof R)throw new TypeError("Symbol is not a constructor");return new j(V+(ne||"")+"_"+J++,ne)}function j(ne,z){this.g=ne,e(this,"description",{configurable:!0,writable:!0,value:z})}if(v)return v;j.prototype.toString=function(){return this.g};var V="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",J=0;return R}),r("Symbol.iterator",function(v){if(v)return v;v=Symbol("Symbol.iterator");for(var R="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),j=0;j<R.length;j++){var V=i[R[j]];typeof V=="function"&&typeof V.prototype[v]!="function"&&e(V.prototype,v,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return v});function o(v){return v={next:v},v[Symbol.iterator]=function(){return this},v}function s(v){var R=typeof Symbol<"u"&&Symbol.iterator&&v[Symbol.iterator];return R?R.call(v):{next:t(v)}}function l(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function u(v){if(v.i)throw new TypeError("Generator is already running");v.i=!0}l.prototype.l=function(v){this.o=v};function c(v,R){v.h={F:R,G:!0},v.j=v.m}l.prototype.return=function(v){this.h={return:v},this.j=this.m};function h(v){this.g=new l,this.h=v}function m(v,R){u(v.g);var j=v.g.g;return j?p(v,"return"in j?j.return:function(V){return{value:V,done:!0}},R,v.g.return):(v.g.return(R),y(v))}function p(v,R,j,V){try{var J=R.call(v.g.g,j);if(!(J instanceof Object))throw new TypeError("Iterator result "+J+" is not an object");if(!J.done)return v.g.i=!1,J;var ne=J.value}catch(z){return v.g.g=null,c(v.g,z),y(v)}return v.g.g=null,V.call(v.g,ne),y(v)}function y(v){for(;v.g.j;)try{var R=v.h(v.g);if(R)return v.g.i=!1,{value:R.value,done:!1}}catch(j){v.g.o=void 0,c(v.g,j)}if(v.g.i=!1,v.g.h){if(R=v.g.h,v.g.h=null,R.G)throw R.F;return{value:R.return,done:!0}}return{value:void 0,done:!0}}function E(v){this.next=function(R){return u(v.g),v.g.g?R=p(v,v.g.g.next,R,v.g.l):(v.g.l(R),R=y(v)),R},this.throw=function(R){return u(v.g),v.g.g?R=p(v,v.g.g.throw,R,v.g.l):(c(v.g,R),R=y(v)),R},this.return=function(R){return m(v,R)},this[Symbol.iterator]=function(){return this}}function T(v){function R(V){return v.next(V)}function j(V){return v.throw(V)}return new Promise(function(V,J){function ne(z){z.done?V(z.value):Promise.resolve(z.value).then(R,j).then(ne,J)}ne(v.next())})}r("Promise",function(v){function R(z){this.h=0,this.i=void 0,this.g=[],this.o=!1;var Y=this.j();try{z(Y.resolve,Y.reject)}catch(F){Y.reject(F)}}function j(){this.g=null}function V(z){return z instanceof R?z:new R(function(Y){Y(z)})}if(v)return v;j.prototype.h=function(z){if(this.g==null){this.g=[];var Y=this;this.i(function(){Y.l()})}this.g.push(z)};var J=i.setTimeout;j.prototype.i=function(z){J(z,0)},j.prototype.l=function(){for(;this.g&&this.g.length;){var z=this.g;this.g=[];for(var Y=0;Y<z.length;++Y){var F=z[Y];z[Y]=null;try{F()}catch(ee){this.j(ee)}}}this.g=null},j.prototype.j=function(z){this.i(function(){throw z})},R.prototype.j=function(){function z(ee){return function(ie){F||(F=!0,ee.call(Y,ie))}}var Y=this,F=!1;return{resolve:z(this.A),reject:z(this.l)}},R.prototype.A=function(z){if(z===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(z instanceof R)this.C(z);else{e:switch(typeof z){case"object":var Y=z!=null;break e;case"function":Y=!0;break e;default:Y=!1}Y?this.v(z):this.m(z)}},R.prototype.v=function(z){var Y=void 0;try{Y=z.then}catch(F){this.l(F);return}typeof Y=="function"?this.D(Y,z):this.m(z)},R.prototype.l=function(z){this.u(2,z)},R.prototype.m=function(z){this.u(1,z)},R.prototype.u=function(z,Y){if(this.h!=0)throw Error("Cannot settle("+z+", "+Y+"): Promise already settled in state"+this.h);this.h=z,this.i=Y,this.h===2&&this.B(),this.H()},R.prototype.B=function(){var z=this;J(function(){if(z.I()){var Y=i.console;typeof Y<"u"&&Y.error(z.i)}},1)},R.prototype.I=function(){if(this.o)return!1;var z=i.CustomEvent,Y=i.Event,F=i.dispatchEvent;return typeof F>"u"?!0:(typeof z=="function"?z=new z("unhandledrejection",{cancelable:!0}):typeof Y=="function"?z=new Y("unhandledrejection",{cancelable:!0}):(z=i.document.createEvent("CustomEvent"),z.initCustomEvent("unhandledrejection",!1,!0,z)),z.promise=this,z.reason=this.i,F(z))},R.prototype.H=function(){if(this.g!=null){for(var z=0;z<this.g.length;++z)ne.h(this.g[z]);this.g=null}};var ne=new j;return R.prototype.C=function(z){var Y=this.j();z.s(Y.resolve,Y.reject)},R.prototype.D=function(z,Y){var F=this.j();try{z.call(Y,F.resolve,F.reject)}catch(ee){F.reject(ee)}},R.prototype.then=function(z,Y){function F(Ce,We){return typeof Ce=="function"?function(te){try{ee(Ce(te))}catch(ce){ie(ce)}}:We}var ee,ie,me=new R(function(Ce,We){ee=Ce,ie=We});return this.s(F(z,ee),F(Y,ie)),me},R.prototype.catch=function(z){return this.then(void 0,z)},R.prototype.s=function(z,Y){function F(){switch(ee.h){case 1:z(ee.i);break;case 2:Y(ee.i);break;default:throw Error("Unexpected state: "+ee.h)}}var ee=this;this.g==null?ne.h(F):this.g.push(F),this.o=!0},R.resolve=V,R.reject=function(z){return new R(function(Y,F){F(z)})},R.race=function(z){return new R(function(Y,F){for(var ee=s(z),ie=ee.next();!ie.done;ie=ee.next())V(ie.value).s(Y,F)})},R.all=function(z){var Y=s(z),F=Y.next();return F.done?V([]):new R(function(ee,ie){function me(te){return function(ce){Ce[te]=ce,We--,We==0&&ee(Ce)}}var Ce=[],We=0;do Ce.push(void 0),We++,V(F.value).s(me(Ce.length-1),ie),F=Y.next();while(!F.done)})},R});var _=typeof Object.assign=="function"?Object.assign:function(v,R){for(var j=1;j<arguments.length;j++){var V=arguments[j];if(V)for(var J in V)Object.prototype.hasOwnProperty.call(V,J)&&(v[J]=V[J])}return v};r("Object.assign",function(v){return v||_});var d=this||self,S={facingMode:"user",width:640,height:480};function x(v,R){this.video=v,this.i=0,this.h=Object.assign(Object.assign({},S),R)}x.prototype.stop=function(){var v=this,R,j,V,J;return T(new E(new h(function(ne){if(v.g){for(R=v.g.getTracks(),j=s(R),V=j.next();!V.done;V=j.next())J=V.value,J.stop();v.g=void 0}ne.j=0})))},x.prototype.start=function(){var v=this,R;return T(new E(new h(function(j){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),R=v.h,j.return(navigator.mediaDevices.getUserMedia({video:{facingMode:R.facingMode,width:R.width,height:R.height}}).then(function(V){B(v,V)}).catch(function(V){var J="Failed to acquire camera feed: "+V;throw console.error(J),alert(J),V}))})))};function w(v){window.requestAnimationFrame(function(){I(v)})}function B(v,R){v.g=R,v.video.srcObject=R,v.video.onloadedmetadata=function(){v.video.play(),w(v)}}function I(v){var R=null;v.video.paused||v.video.currentTime===v.i||(v.i=v.video.currentTime,R=v.h.onFrame()),R?R.then(function(){w(v)}):w(v)}var b=["Camera"],O=d;b[0]in O||typeof O.execScript>"u"||O.execScript("var "+b[0]);for(var P;b.length&&(P=b.shift());)b.length||x===void 0?O[P]&&O[P]!==Object.prototype[P]?O=O[P]:O=O[P]={}:O[P]=x}).call(Vo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="167",zx=0,$p=1,Hx=2,i_=1,Vx=2,Ci=3,yr=0,Rn=1,Li=2,mr=0,qo=1,qp=2,Kp=3,Zp=4,Gx=5,Fr=100,Wx=101,Xx=102,jx=103,Yx=104,$x=200,qx=201,Kx=202,Zx=203,bf=204,Df=205,Qx=206,Jx=207,eS=208,tS=209,nS=210,iS=211,rS=212,oS=213,sS=214,aS=0,lS=1,uS=2,ru=3,cS=4,fS=5,dS=6,hS=7,r_=0,pS=1,mS=2,gr=0,gS=1,vS=2,_S=3,yS=4,xS=5,SS=6,MS=7,o_=300,os=301,ss=302,Uf=303,If=304,Au=306,Nf=1e3,Hr=1001,Ff=1002,Yn=1003,ES=1004,Ya=1005,si=1006,cc=1007,Vr=1008,Hi=1009,s_=1010,a_=1011,pa=1012,sh=1013,Zr=1014,Ui=1015,xa=1016,ah=1017,lh=1018,as=1020,l_=35902,u_=1021,c_=1022,ai=1023,f_=1024,d_=1025,Ko=1026,ls=1027,h_=1028,uh=1029,p_=1030,ch=1031,fh=1033,Rl=33776,Pl=33777,Ll=33778,bl=33779,Of=35840,kf=35841,Bf=35842,zf=35843,Hf=36196,Vf=37492,Gf=37496,Wf=37808,Xf=37809,jf=37810,Yf=37811,$f=37812,qf=37813,Kf=37814,Zf=37815,Qf=37816,Jf=37817,ed=37818,td=37819,nd=37820,id=37821,Dl=36492,rd=36494,od=36495,m_=36283,sd=36284,ad=36285,ld=36286,TS=3200,wS=3201,AS=0,CS=1,ir="",pi="srgb",Tr="srgb-linear",dh="display-p3",Cu="display-p3-linear",ou="linear",wt="srgb",su="rec709",au="p3",fo=7680,Qp=519,RS=512,PS=513,LS=514,g_=515,bS=516,DS=517,US=518,IS=519,Jp=35044,em="300 es",Ii=2e3,lu=2001;class hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,ud=180/Math.PI;function Sa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function En(t,e,n){return Math.max(e,Math.min(n,t))}function NS(t,e){return(t%e+e)%e}function dc(t,e,n){return(1-n)*t+n*e}function Ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,n=0){ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,n,i,r,o,s,l,u,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,l,u,c)}set(e,n,i,r,o,s,l,u,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=o,h[5]=u,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],l=i[3],u=i[6],c=i[1],h=i[4],m=i[7],p=i[2],y=i[5],E=i[8],T=r[0],_=r[3],d=r[6],S=r[1],x=r[4],w=r[7],B=r[2],I=r[5],b=r[8];return o[0]=s*T+l*S+u*B,o[3]=s*_+l*x+u*I,o[6]=s*d+l*w+u*b,o[1]=c*T+h*S+m*B,o[4]=c*_+h*x+m*I,o[7]=c*d+h*w+m*b,o[2]=p*T+y*S+E*B,o[5]=p*_+y*x+E*I,o[8]=p*d+y*w+E*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],u=e[6],c=e[7],h=e[8];return n*s*h-n*l*c-i*o*h+i*l*u+r*o*c-r*s*u}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],u=e[6],c=e[7],h=e[8],m=h*s-l*c,p=l*u-h*o,y=c*o-s*u,E=n*m+i*p+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=m*T,e[1]=(r*c-h*i)*T,e[2]=(l*i-r*s)*T,e[3]=p*T,e[4]=(h*n-r*u)*T,e[5]=(r*o-l*n)*T,e[6]=y*T,e[7]=(i*u-c*n)*T,e[8]=(s*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,l){const u=Math.cos(o),c=Math.sin(o);return this.set(i*u,i*c,-i*(u*s+c*l)+s+e,-r*c,r*u,-r*(-c*s+u*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(hc.makeScale(e,n)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new tt;function v_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function FS(){const t=uu("canvas");return t.style.display="block",t}const tm={};function Ks(t){t in tm||(tm[t]=!0,console.warn(t))}function OS(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const nm=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),im=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Tr]:{transfer:ou,primaries:su,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[pi]:{transfer:wt,primaries:su,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Cu]:{transfer:ou,primaries:au,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm)},[dh]:{transfer:wt,primaries:au,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm).convertLinearToSRGB()}},kS=new Set([Tr,Cu]),dt={enabled:!0,_workingColorSpace:Tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!kS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=bs[e].toReference,r=bs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return bs[t].primaries},getTransfer:function(t){return t===ir?ou:bs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(bs[e].luminanceCoefficients)}};function Zo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ho;class BS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ho===void 0&&(ho=uu("canvas")),ho.width=e.width,ho.height=e.height;const i=ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Zo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zo(n[i]/255)*255):n[i]=Zo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zS=0;class __{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,l=r.length;s<l;s++)r[s].isDataTexture?o.push(mc(r[s].image)):o.push(mc(r[s]))}else o=mc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?BS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HS=0;class Pn extends hs{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,i=Hr,r=Hr,o=si,s=Vr,l=ai,u=Hi,c=Pn.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Sa(),this.name="",this.source=new __(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=u,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=o_;Pn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const u=e.elements,c=u[0],h=u[4],m=u[8],p=u[1],y=u[5],E=u[9],T=u[2],_=u[6],d=u[10];if(Math.abs(h-p)<.01&&Math.abs(m-T)<.01&&Math.abs(E-_)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+T)<.1&&Math.abs(E+_)<.1&&Math.abs(c+y+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,w=(y+1)/2,B=(d+1)/2,I=(h+p)/4,b=(m+T)/4,O=(E+_)/4;return x>w&&x>B?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=I/i,o=b/i):w>B?w<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),i=I/r,o=O/r):B<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(B),i=b/o,r=O/o),this.set(i,r,o,n),this}let S=Math.sqrt((_-E)*(_-E)+(m-T)*(m-T)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(_-E)/S,this.y=(m-T)/S,this.z=(p-h)/S,this.w=Math.acos((c+y+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let l=0;l<s;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new __(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends VS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class y_ extends Pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GS extends Pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,l){let u=i[r+0],c=i[r+1],h=i[r+2],m=i[r+3];const p=o[s+0],y=o[s+1],E=o[s+2],T=o[s+3];if(l===0){e[n+0]=u,e[n+1]=c,e[n+2]=h,e[n+3]=m;return}if(l===1){e[n+0]=p,e[n+1]=y,e[n+2]=E,e[n+3]=T;return}if(m!==T||u!==p||c!==y||h!==E){let _=1-l;const d=u*p+c*y+h*E+m*T,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const B=Math.sqrt(x),I=Math.atan2(B,d*S);_=Math.sin(_*I)/B,l=Math.sin(l*I)/B}const w=l*S;if(u=u*_+p*w,c=c*_+y*w,h=h*_+E*w,m=m*_+T*w,_===1-l){const B=1/Math.sqrt(u*u+c*c+h*h+m*m);u*=B,c*=B,h*=B,m*=B}}e[n]=u,e[n+1]=c,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,o,s){const l=i[r],u=i[r+1],c=i[r+2],h=i[r+3],m=o[s],p=o[s+1],y=o[s+2],E=o[s+3];return e[n]=l*E+h*m+u*y-c*p,e[n+1]=u*E+h*p+c*m-l*y,e[n+2]=c*E+h*y+l*p-u*m,e[n+3]=h*E-l*m-u*p-c*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,l=Math.cos,u=Math.sin,c=l(i/2),h=l(r/2),m=l(o/2),p=u(i/2),y=u(r/2),E=u(o/2);switch(s){case"XYZ":this._x=p*h*m+c*y*E,this._y=c*y*m-p*h*E,this._z=c*h*E+p*y*m,this._w=c*h*m-p*y*E;break;case"YXZ":this._x=p*h*m+c*y*E,this._y=c*y*m-p*h*E,this._z=c*h*E-p*y*m,this._w=c*h*m+p*y*E;break;case"ZXY":this._x=p*h*m-c*y*E,this._y=c*y*m+p*h*E,this._z=c*h*E+p*y*m,this._w=c*h*m-p*y*E;break;case"ZYX":this._x=p*h*m-c*y*E,this._y=c*y*m+p*h*E,this._z=c*h*E-p*y*m,this._w=c*h*m+p*y*E;break;case"YZX":this._x=p*h*m+c*y*E,this._y=c*y*m+p*h*E,this._z=c*h*E-p*y*m,this._w=c*h*m-p*y*E;break;case"XZY":this._x=p*h*m-c*y*E,this._y=c*y*m-p*h*E,this._z=c*h*E+p*y*m,this._w=c*h*m+p*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],l=n[5],u=n[9],c=n[2],h=n[6],m=n[10],p=i+l+m;if(p>0){const y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(h-u)*y,this._y=(o-c)*y,this._z=(s-r)*y}else if(i>l&&i>m){const y=2*Math.sqrt(1+i-l-m);this._w=(h-u)/y,this._x=.25*y,this._y=(r+s)/y,this._z=(o+c)/y}else if(l>m){const y=2*Math.sqrt(1+l-i-m);this._w=(o-c)/y,this._x=(r+s)/y,this._y=.25*y,this._z=(u+h)/y}else{const y=2*Math.sqrt(1+m-i-l);this._w=(s-r)/y,this._x=(o+c)/y,this._y=(u+h)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,l=n._x,u=n._y,c=n._z,h=n._w;return this._x=i*h+s*l+r*c-o*u,this._y=r*h+s*u+o*l-i*c,this._z=o*h+s*c+i*u-r*l,this._w=s*h-i*l-r*u-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let l=s*e._w+i*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const u=1-l*l;if(u<=Number.EPSILON){const y=1-n;return this._w=y*s+n*this._w,this._x=y*i+n*this._x,this._y=y*r+n*this._y,this._z=y*o+n*this._z,this.normalize(),this}const c=Math.sqrt(u),h=Math.atan2(c,l),m=Math.sin((1-n)*h)/c,p=Math.sin(n*h)/c;return this._w=s*m+this._w*p,this._x=i*m+this._x*p,this._y=r*m+this._y*p,this._z=o*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,l=e.z,u=e.w,c=2*(s*r-l*i),h=2*(l*n-o*r),m=2*(o*i-s*n);return this.x=n+u*c+s*m-l*h,this.y=i+u*h+l*c-o*m,this.z=r+u*m+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,l=n.y,u=n.z;return this.x=r*u-o*l,this.y=o*s-i*u,this.z=i*l-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new Q,rm=new Ma;class Ea{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=o.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,ei):ei.fromBufferAttribute(o,s),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),qa.subVectors(this.max,Ds),po.subVectors(e.a,Ds),mo.subVectors(e.b,Ds),go.subVectors(e.c,Ds),Yi.subVectors(mo,po),$i.subVectors(go,mo),Ar.subVectors(po,go);let n=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-Ar.z,Ar.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,Ar.z,0,-Ar.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-Ar.y,Ar.x,0];return!vc(n,po,mo,go,qa)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,po,mo,go,qa))?!1:(Ka.crossVectors(Yi,$i),n=[Ka.x,Ka.y,Ka.z],vc(n,po,mo,go,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ei=new Q,$a=new Ea,po=new Q,mo=new Q,go=new Q,Yi=new Q,$i=new Q,Ar=new Q,Ds=new Q,qa=new Q,Ka=new Q,Cr=new Q;function vc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Cr.fromArray(t,o);const l=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),u=e.dot(Cr),c=n.dot(Cr),h=i.dot(Cr);if(Math.max(-Math.max(u,c,h),Math.min(u,c,h))>l)return!1}return!0}const WS=new Ea,Us=new Q,_c=new Q;class hh{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):WS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const n=Us.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(_c)),this.expandByPoint(Us.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new Q,yc=new Q,Za=new Q,qi=new Q,xc=new Q,Qa=new Q,Sc=new Q;class XS{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(yc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Za),l=qi.dot(this.direction),u=-qi.dot(Za),c=qi.lengthSq(),h=Math.abs(1-s*s);let m,p,y,E;if(h>0)if(m=s*u-l,p=s*l-u,E=o*h,m>=0)if(p>=-E)if(p<=E){const T=1/h;m*=T,p*=T,y=m*(m+s*p+2*l)+p*(s*m+p+2*u)+c}else p=o,m=Math.max(0,-(s*p+l)),y=-m*m+p*(p+2*u)+c;else p=-o,m=Math.max(0,-(s*p+l)),y=-m*m+p*(p+2*u)+c;else p<=-E?(m=Math.max(0,-(-s*o+l)),p=m>0?-o:Math.min(Math.max(-o,-u),o),y=-m*m+p*(p+2*u)+c):p<=E?(m=0,p=Math.min(Math.max(-o,-u),o),y=p*(p+2*u)+c):(m=Math.max(0,-(s*o+l)),p=m>0?o:Math.min(Math.max(-o,-u),o),y=-m*m+p*(p+2*u)+c);else p=s>0?-o:o,m=Math.max(0,-(s*p+l)),y=-m*m+p*(p+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(yc).addScaledVector(Za,p),y}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),l=i-s,u=i+s;return u<0?null:l<0?this.at(u,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,l,u;const c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(o=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(o=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),m>=0?(l=(e.min.z-p.z)*m,u=(e.max.z-p.z)*m):(l=(e.max.z-p.z)*m,u=(e.min.z-p.z)*m),i>u||l>r)||((l>i||i!==i)&&(i=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,o){xc.subVectors(n,e),Qa.subVectors(i,e),Sc.crossVectors(xc,Qa);let s=this.direction.dot(Sc),l;if(s>0){if(r)return null;l=1}else if(s<0)l=-1,s=-s;else return null;qi.subVectors(this.origin,e);const u=l*this.direction.dot(Qa.crossVectors(qi,Qa));if(u<0)return null;const c=l*this.direction.dot(xc.cross(qi));if(c<0||u+c>s)return null;const h=-l*qi.dot(Sc);return h<0?null:this.at(h/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,i,r,o,s,l,u,c,h,m,p,y,E,T,_){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,l,u,c,h,m,p,y,E,T,_)}set(e,n,i,r,o,s,l,u,c,h,m,p,y,E,T,_){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=l,d[13]=u,d[2]=c,d[6]=h,d[10]=m,d[14]=p,d[3]=y,d[7]=E,d[11]=T,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vo.setFromMatrixColumn(e,0).length(),o=1/vo.setFromMatrixColumn(e,1).length(),s=1/vo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),l=Math.sin(i),u=Math.cos(r),c=Math.sin(r),h=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const p=s*h,y=s*m,E=l*h,T=l*m;n[0]=u*h,n[4]=-u*m,n[8]=c,n[1]=y+E*c,n[5]=p-T*c,n[9]=-l*u,n[2]=T-p*c,n[6]=E+y*c,n[10]=s*u}else if(e.order==="YXZ"){const p=u*h,y=u*m,E=c*h,T=c*m;n[0]=p+T*l,n[4]=E*l-y,n[8]=s*c,n[1]=s*m,n[5]=s*h,n[9]=-l,n[2]=y*l-E,n[6]=T+p*l,n[10]=s*u}else if(e.order==="ZXY"){const p=u*h,y=u*m,E=c*h,T=c*m;n[0]=p-T*l,n[4]=-s*m,n[8]=E+y*l,n[1]=y+E*l,n[5]=s*h,n[9]=T-p*l,n[2]=-s*c,n[6]=l,n[10]=s*u}else if(e.order==="ZYX"){const p=s*h,y=s*m,E=l*h,T=l*m;n[0]=u*h,n[4]=E*c-y,n[8]=p*c+T,n[1]=u*m,n[5]=T*c+p,n[9]=y*c-E,n[2]=-c,n[6]=l*u,n[10]=s*u}else if(e.order==="YZX"){const p=s*u,y=s*c,E=l*u,T=l*c;n[0]=u*h,n[4]=T-p*m,n[8]=E*m+y,n[1]=m,n[5]=s*h,n[9]=-l*h,n[2]=-c*h,n[6]=y*m+E,n[10]=p-T*m}else if(e.order==="XZY"){const p=s*u,y=s*c,E=l*u,T=l*c;n[0]=u*h,n[4]=-m,n[8]=c*h,n[1]=p*m+T,n[5]=s*h,n[9]=y*m-E,n[2]=E*m-y,n[6]=l*h,n[10]=T*m+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jS,e,YS)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ki.crossVectors(i,bn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ki.crossVectors(i,bn)),Ki.normalize(),Ja.crossVectors(bn,Ki),r[0]=Ki.x,r[4]=Ja.x,r[8]=bn.x,r[1]=Ki.y,r[5]=Ja.y,r[9]=bn.y,r[2]=Ki.z,r[6]=Ja.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],l=i[4],u=i[8],c=i[12],h=i[1],m=i[5],p=i[9],y=i[13],E=i[2],T=i[6],_=i[10],d=i[14],S=i[3],x=i[7],w=i[11],B=i[15],I=r[0],b=r[4],O=r[8],P=r[12],v=r[1],R=r[5],j=r[9],V=r[13],J=r[2],ne=r[6],z=r[10],Y=r[14],F=r[3],ee=r[7],ie=r[11],me=r[15];return o[0]=s*I+l*v+u*J+c*F,o[4]=s*b+l*R+u*ne+c*ee,o[8]=s*O+l*j+u*z+c*ie,o[12]=s*P+l*V+u*Y+c*me,o[1]=h*I+m*v+p*J+y*F,o[5]=h*b+m*R+p*ne+y*ee,o[9]=h*O+m*j+p*z+y*ie,o[13]=h*P+m*V+p*Y+y*me,o[2]=E*I+T*v+_*J+d*F,o[6]=E*b+T*R+_*ne+d*ee,o[10]=E*O+T*j+_*z+d*ie,o[14]=E*P+T*V+_*Y+d*me,o[3]=S*I+x*v+w*J+B*F,o[7]=S*b+x*R+w*ne+B*ee,o[11]=S*O+x*j+w*z+B*ie,o[15]=S*P+x*V+w*Y+B*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],l=e[5],u=e[9],c=e[13],h=e[2],m=e[6],p=e[10],y=e[14],E=e[3],T=e[7],_=e[11],d=e[15];return E*(+o*u*m-r*c*m-o*l*p+i*c*p+r*l*y-i*u*y)+T*(+n*u*y-n*c*p+o*s*p-r*s*y+r*c*h-o*u*h)+_*(+n*c*m-n*l*y-o*s*m+i*s*y+o*l*h-i*c*h)+d*(-r*l*h-n*u*m+n*l*p+r*s*m-i*s*p+i*u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],u=e[6],c=e[7],h=e[8],m=e[9],p=e[10],y=e[11],E=e[12],T=e[13],_=e[14],d=e[15],S=m*_*c-T*p*c+T*u*y-l*_*y-m*u*d+l*p*d,x=E*p*c-h*_*c-E*u*y+s*_*y+h*u*d-s*p*d,w=h*T*c-E*m*c+E*l*y-s*T*y-h*l*d+s*m*d,B=E*m*u-h*T*u-E*l*p+s*T*p+h*l*_-s*m*_,I=n*S+i*x+r*w+o*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/I;return e[0]=S*b,e[1]=(T*p*o-m*_*o-T*r*y+i*_*y+m*r*d-i*p*d)*b,e[2]=(l*_*o-T*u*o+T*r*c-i*_*c-l*r*d+i*u*d)*b,e[3]=(m*u*o-l*p*o-m*r*c+i*p*c+l*r*y-i*u*y)*b,e[4]=x*b,e[5]=(h*_*o-E*p*o+E*r*y-n*_*y-h*r*d+n*p*d)*b,e[6]=(E*u*o-s*_*o-E*r*c+n*_*c+s*r*d-n*u*d)*b,e[7]=(s*p*o-h*u*o+h*r*c-n*p*c-s*r*y+n*u*y)*b,e[8]=w*b,e[9]=(E*m*o-h*T*o-E*i*y+n*T*y+h*i*d-n*m*d)*b,e[10]=(s*T*o-E*l*o+E*i*c-n*T*c-s*i*d+n*l*d)*b,e[11]=(h*l*o-s*m*o-h*i*c+n*m*c+s*i*y-n*l*y)*b,e[12]=B*b,e[13]=(h*T*r-E*m*r+E*i*p-n*T*p-h*i*_+n*m*_)*b,e[14]=(E*l*r-s*T*r-E*i*u+n*T*u+s*i*_-n*l*_)*b,e[15]=(s*m*r-h*l*r+h*i*u-n*m*u-s*i*p+n*l*p)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,l=e.y,u=e.z,c=o*s,h=o*l;return this.set(c*s+i,c*l-r*u,c*u+r*l,0,c*l+r*u,h*l+i,h*u-r*s,0,c*u-r*l,h*u+r*s,o*u*u+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,l=n._z,u=n._w,c=o+o,h=s+s,m=l+l,p=o*c,y=o*h,E=o*m,T=s*h,_=s*m,d=l*m,S=u*c,x=u*h,w=u*m,B=i.x,I=i.y,b=i.z;return r[0]=(1-(T+d))*B,r[1]=(y+w)*B,r[2]=(E-x)*B,r[3]=0,r[4]=(y-w)*I,r[5]=(1-(p+d))*I,r[6]=(_+S)*I,r[7]=0,r[8]=(E+x)*b,r[9]=(_-S)*b,r[10]=(1-(p+T))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=vo.set(r[0],r[1],r[2]).length();const s=vo.set(r[4],r[5],r[6]).length(),l=vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/o,h=1/s,m=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=m,ti.elements[9]*=m,ti.elements[10]*=m,n.setFromRotationMatrix(ti),i.x=o,i.y=s,i.z=l,this}makePerspective(e,n,i,r,o,s,l=Ii){const u=this.elements,c=2*o/(n-e),h=2*o/(i-r),m=(n+e)/(n-e),p=(i+r)/(i-r);let y,E;if(l===Ii)y=-(s+o)/(s-o),E=-2*s*o/(s-o);else if(l===lu)y=-s/(s-o),E=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,l=Ii){const u=this.elements,c=1/(n-e),h=1/(i-r),m=1/(s-o),p=(n+e)*c,y=(i+r)*h;let E,T;if(l===Ii)E=(s+o)*m,T=-2*m;else if(l===lu)E=o*m,T=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-p,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-y,u[2]=0,u[6]=0,u[10]=T,u[14]=-E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vo=new Q,ti=new Gt,jS=new Q(0,0,0),YS=new Q(1,1,1),Ki=new Q,Ja=new Q,bn=new Q,om=new Gt,sm=new Ma;class Vi{constructor(e=0,n=0,i=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],l=r[8],u=r[1],c=r[5],h=r[9],m=r[2],p=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,y),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(En(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-En(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(En(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-En(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class x_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const am=new Q,_o=new Ma,Ti=new Gt,el=new Q,Is=new Q,qS=new Q,KS=new Ma,lm=new Q(1,0,0),um=new Q(0,1,0),cm=new Q(0,0,1),fm={type:"added"},ZS={type:"removed"},yo={type:"childadded",child:null},Mc={type:"childremoved",child:null};class Fn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new Q,n=new Vi,i=new Ma,r=new Q(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new tt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?el.copy(e):el.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Is,el,this.up):Ti.lookAt(el,Is,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),_o.setFromRotationMatrix(Ti),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),yo.child=e,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZS),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let c=0,h=u.length;c<h;c++){const m=u[c];o(e.shapes,m)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,c=this.material.length;u<c;u++)l.push(o(e.materials,this.material[u]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(o(e.animations,u))}}if(n){const l=s(e.geometries),u=s(e.materials),c=s(e.textures),h=s(e.images),m=s(e.shapes),p=s(e.skeletons),y=s(e.animations),E=s(e.nodes);l.length>0&&(i.geometries=l),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),p.length>0&&(i.skeletons=p),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=r,i;function s(l){const u=[];for(const c in l){const h=l[c];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Fn.DEFAULT_UP=new Q(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new Q,wi=new Q,Ec=new Q,Ai=new Q,xo=new Q,So=new Q,dm=new Q,Tc=new Q,wc=new Q,Ac=new Q;class vi{constructor(e=new Q,n=new Q,i=new Q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){ni.subVectors(r,n),wi.subVectors(i,n),Ec.subVectors(e,n);const s=ni.dot(ni),l=ni.dot(wi),u=ni.dot(Ec),c=wi.dot(wi),h=wi.dot(Ec),m=s*c-l*l;if(m===0)return o.set(0,0,0),null;const p=1/m,y=(c*u-l*h)*p,E=(s*h-l*u)*p;return o.set(1-y-E,E,y)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,o,s,l,u){return this.getBarycoord(e,n,i,r,Ai)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Ai.x),u.addScaledVector(s,Ai.y),u.addScaledVector(l,Ai.z),u)}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),wi.subVectors(e,n),ni.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ni.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return vi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,l;xo.subVectors(r,i),So.subVectors(o,i),Tc.subVectors(e,i);const u=xo.dot(Tc),c=So.dot(Tc);if(u<=0&&c<=0)return n.copy(i);wc.subVectors(e,r);const h=xo.dot(wc),m=So.dot(wc);if(h>=0&&m<=h)return n.copy(r);const p=u*m-h*c;if(p<=0&&u>=0&&h<=0)return s=u/(u-h),n.copy(i).addScaledVector(xo,s);Ac.subVectors(e,o);const y=xo.dot(Ac),E=So.dot(Ac);if(E>=0&&y<=E)return n.copy(o);const T=y*c-u*E;if(T<=0&&c>=0&&E<=0)return l=c/(c-E),n.copy(i).addScaledVector(So,l);const _=h*E-y*m;if(_<=0&&m-h>=0&&y-E>=0)return dm.subVectors(o,r),l=(m-h)/(m-h+(y-E)),n.copy(r).addScaledVector(dm,l);const d=1/(_+T+p);return s=T*d,l=p*d,n.copy(i).addScaledVector(xo,s).addScaledVector(So,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Cc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class vt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=NS(e,1),n=En(n,0,1),i=En(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Cc(s,o,e+1/3),this.g=Cc(s,o,e),this.b=Cc(s,o,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,n=pi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],l=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const i=S_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return dt.fromWorkingColorSpace(an.copy(this),e),Math.round(En(an.r*255,0,255))*65536+Math.round(En(an.g*255,0,255))*256+Math.round(En(an.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.fromWorkingColorSpace(an.copy(this),n);const i=an.r,r=an.g,o=an.b,s=Math.max(i,r,o),l=Math.min(i,r,o);let u,c;const h=(l+s)/2;if(l===s)u=0,c=0;else{const m=s-l;switch(c=h<=.5?m/(s+l):m/(2-s-l),s){case i:u=(r-o)/m+(r<o?6:0);break;case r:u=(o-i)/m+2;break;case o:u=(i-r)/m+4;break}u/=6}return e.h=u,e.s=c,e.l=h,e}getRGB(e,n=dt.workingColorSpace){return dt.fromWorkingColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=pi){dt.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(tl);const i=dc(Zi.h,tl.h,n),r=dc(Zi.s,tl.s,n),o=dc(Zi.l,tl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new vt;vt.NAMES=S_;let QS=0;class Ru extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=qo,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Df,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ru,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qo&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bf&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ru&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const l in o){const u=o[l];delete u.metadata,s.push(u)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ph extends Ru{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new Q,nl=new ht;class Si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ks("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),o=Sn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class M_ extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class E_ extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xr extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let JS=0;const Vn=new Gt,Rc=new Fn,Mo=new Q,Dn=new Ea,Ns=new Ea,Yt=new Q;class to extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v_(e)?E_:M_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new tt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const l=n[o];Ns.setFromBufferAttribute(l),this.morphTargetsRelative?(Yt.addVectors(Dn.min,Ns.min),Dn.expandByPoint(Yt),Yt.addVectors(Dn.max,Ns.max),Dn.expandByPoint(Yt)):(Dn.expandByPoint(Ns.min),Dn.expandByPoint(Ns.max))}Dn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Yt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let o=0,s=n.length;o<s;o++){const l=n[o],u=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Yt.fromBufferAttribute(l,c),u&&(Mo.fromBufferAttribute(e,c),Yt.add(Mo)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),l=[],u=[];for(let O=0;O<i.count;O++)l[O]=new Q,u[O]=new Q;const c=new Q,h=new Q,m=new Q,p=new ht,y=new ht,E=new ht,T=new Q,_=new Q;function d(O,P,v){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,P),m.fromBufferAttribute(i,v),p.fromBufferAttribute(o,O),y.fromBufferAttribute(o,P),E.fromBufferAttribute(o,v),h.sub(c),m.sub(c),y.sub(p),E.sub(p);const R=1/(y.x*E.y-E.x*y.y);isFinite(R)&&(T.copy(h).multiplyScalar(E.y).addScaledVector(m,-y.y).multiplyScalar(R),_.copy(m).multiplyScalar(y.x).addScaledVector(h,-E.x).multiplyScalar(R),l[O].add(T),l[P].add(T),l[v].add(T),u[O].add(_),u[P].add(_),u[v].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,P=S.length;O<P;++O){const v=S[O],R=v.start,j=v.count;for(let V=R,J=R+j;V<J;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new Q,w=new Q,B=new Q,I=new Q;function b(O){B.fromBufferAttribute(r,O),I.copy(B);const P=l[O];x.copy(P),x.sub(B.multiplyScalar(B.dot(P))).normalize(),w.crossVectors(I,P);const R=w.dot(u[O])<0?-1:1;s.setXYZW(O,x.x,x.y,x.z,R)}for(let O=0,P=S.length;O<P;++O){const v=S[O],R=v.start,j=v.count;for(let V=R,J=R+j;V<J;V+=3)b(e.getX(V+0)),b(e.getX(V+1)),b(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,y=i.count;p<y;p++)i.setXYZ(p,0,0,0);const r=new Q,o=new Q,s=new Q,l=new Q,u=new Q,c=new Q,h=new Q,m=new Q;if(e)for(let p=0,y=e.count;p<y;p+=3){const E=e.getX(p+0),T=e.getX(p+1),_=e.getX(p+2);r.fromBufferAttribute(n,E),o.fromBufferAttribute(n,T),s.fromBufferAttribute(n,_),h.subVectors(s,o),m.subVectors(r,o),h.cross(m),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),c.fromBufferAttribute(i,_),l.add(h),u.add(h),c.add(h),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(T,u.x,u.y,u.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,y=n.count;p<y;p+=3)r.fromBufferAttribute(n,p+0),o.fromBufferAttribute(n,p+1),s.fromBufferAttribute(n,p+2),h.subVectors(s,o),m.subVectors(r,o),h.cross(m),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(l,u){const c=l.array,h=l.itemSize,m=l.normalized,p=new c.constructor(u.length*h);let y=0,E=0;for(let T=0,_=u.length;T<_;T++){l.isInterleavedBufferAttribute?y=u[T]*l.data.stride+l.offset:y=u[T]*h;for(let d=0;d<h;d++)p[E++]=c[y++]}return new Si(p,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new to,i=this.index.array,r=this.attributes;for(const l in r){const u=r[l],c=e(u,i);n.setAttribute(l,c)}const o=this.morphAttributes;for(const l in o){const u=[],c=o[l];for(let h=0,m=c.length;h<m;h++){const p=c[h],y=e(p,i);u.push(y)}n.morphAttributes[l]=u}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,u=s.length;l<u;l++){const c=s[l];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],h=[];for(let m=0,p=c.length;m<p;m++){const y=c[m];h.push(y.toJSON(e.data))}h.length>0&&(r[u]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const o=e.morphAttributes;for(const c in o){const h=[],m=o[c];for(let p=0,y=m.length;p<y;p++)h.push(m[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const m=s[c];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new Gt,Rr=new XS,il=new hh,pm=new Q,Eo=new Q,To=new Q,wo=new Q,Pc=new Q,rl=new Q,ol=new ht,sl=new ht,al=new ht,mm=new Q,gm=new Q,vm=new Q,ll=new Q,ul=new Q;class _i extends Fn{constructor(e=new to,n=new ph){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){rl.set(0,0,0);for(let u=0,c=o.length;u<c;u++){const h=l[u],m=o[u];h!==0&&(Pc.fromBufferAttribute(m,e),s?rl.addScaledVector(Pc,h):rl.addScaledVector(Pc.sub(n),h))}n.add(rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(o),Rr.copy(e.ray).recast(e.near),!(il.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(il,pm)===null||Rr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(o).invert(),Rr.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,l=o.index,u=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,m=o.attributes.normal,p=o.groups,y=o.drawRange;if(l!==null)if(Array.isArray(s))for(let E=0,T=p.length;E<T;E++){const _=p[E],d=s[_.materialIndex],S=Math.max(_.start,y.start),x=Math.min(l.count,Math.min(_.start+_.count,y.start+y.count));for(let w=S,B=x;w<B;w+=3){const I=l.getX(w),b=l.getX(w+1),O=l.getX(w+2);r=cl(this,d,e,i,c,h,m,I,b,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(l.count,y.start+y.count);for(let _=E,d=T;_<d;_+=3){const S=l.getX(_),x=l.getX(_+1),w=l.getX(_+2);r=cl(this,s,e,i,c,h,m,S,x,w),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(u!==void 0)if(Array.isArray(s))for(let E=0,T=p.length;E<T;E++){const _=p[E],d=s[_.materialIndex],S=Math.max(_.start,y.start),x=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let w=S,B=x;w<B;w+=3){const I=w,b=w+1,O=w+2;r=cl(this,d,e,i,c,h,m,I,b,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(u.count,y.start+y.count);for(let _=E,d=T;_<d;_+=3){const S=_,x=_+1,w=_+2;r=cl(this,s,e,i,c,h,m,S,x,w),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function eM(t,e,n,i,r,o,s,l){let u;if(e.side===Rn?u=i.intersectTriangle(s,o,r,!0,l):u=i.intersectTriangle(r,o,s,e.side===yr,l),u===null)return null;ul.copy(l),ul.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ul);return c<n.near||c>n.far?null:{distance:c,point:ul.clone(),object:t}}function cl(t,e,n,i,r,o,s,l,u,c){t.getVertexPosition(l,Eo),t.getVertexPosition(u,To),t.getVertexPosition(c,wo);const h=eM(t,e,n,i,Eo,To,wo,ll);if(h){r&&(ol.fromBufferAttribute(r,l),sl.fromBufferAttribute(r,u),al.fromBufferAttribute(r,c),h.uv=vi.getInterpolation(ll,Eo,To,wo,ol,sl,al,new ht)),o&&(ol.fromBufferAttribute(o,l),sl.fromBufferAttribute(o,u),al.fromBufferAttribute(o,c),h.uv1=vi.getInterpolation(ll,Eo,To,wo,ol,sl,al,new ht)),s&&(mm.fromBufferAttribute(s,l),gm.fromBufferAttribute(s,u),vm.fromBufferAttribute(s,c),h.normal=vi.getInterpolation(ll,Eo,To,wo,mm,gm,vm,new Q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a:l,b:u,c,normal:new Q,materialIndex:0};vi.getNormal(Eo,To,wo,m.normal),h.face=m}return h}class ps extends to{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const l=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const u=[],c=[],h=[],m=[];let p=0,y=0;E("z","y","x",-1,-1,i,n,e,s,o,0),E("z","y","x",1,-1,i,n,-e,s,o,1),E("x","z","y",1,1,e,i,n,r,s,2),E("x","z","y",1,-1,e,i,-n,r,s,3),E("x","y","z",1,-1,e,n,i,r,o,4),E("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new Xr(c,3)),this.setAttribute("normal",new Xr(h,3)),this.setAttribute("uv",new Xr(m,2));function E(T,_,d,S,x,w,B,I,b,O,P){const v=w/b,R=B/O,j=w/2,V=B/2,J=I/2,ne=b+1,z=O+1;let Y=0,F=0;const ee=new Q;for(let ie=0;ie<z;ie++){const me=ie*R-V;for(let Ce=0;Ce<ne;Ce++){const We=Ce*v-j;ee[T]=We*S,ee[_]=me*x,ee[d]=J,c.push(ee.x,ee.y,ee.z),ee[T]=0,ee[_]=0,ee[d]=I>0?1:-1,h.push(ee.x,ee.y,ee.z),m.push(Ce/b),m.push(1-ie/O),Y+=1}}for(let ie=0;ie<O;ie++)for(let me=0;me<b;me++){const Ce=p+me+ne*ie,We=p+me+ne*(ie+1),te=p+(me+1)+ne*(ie+1),ce=p+(me+1)+ne*ie;u.push(Ce,We,ce),u.push(We,te,ce),F+=6}l.addGroup(y,F,P),y+=F,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=us(t[n]);for(const r in i)e[r]=i[r]}return e}function tM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function T_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const nM={clone:us,merge:hn};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Ru{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class w_ extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new Q,_m=new ht,ym=new ht;class Xn extends w_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ud*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,_m,ym),n.subVectors(ym,_m)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/u,n-=s.offsetY*i/c,r*=s.width/u,i*=s.height/c}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ao=-90,Co=1;class oM extends Fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(Ao,Co,e,n);r.layers=this.layers,this.add(r);const o=new Xn(Ao,Co,e,n);o.layers=this.layers,this.add(o);const s=new Xn(Ao,Co,e,n);s.layers=this.layers,this.add(s);const l=new Xn(Ao,Co,e,n);l.layers=this.layers,this.add(l);const u=new Xn(Ao,Co,e,n);u.layers=this.layers,this.add(u);const c=new Xn(Ao,Co,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,l,u]=n;for(const c of n)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,l,u,c,h]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,u),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(m,p,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class A_ extends Pn{constructor(e,n,i,r,o,s,l,u,c,h){e=e!==void 0?e:[],n=n!==void 0?n:os,super(e,n,i,r,o,s,l,u,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sM extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new A_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ps(5,5,5),o=new xr({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:mr});o.uniforms.tEquirect.value=n;const s=new _i(r,o),l=n.minFilter;return n.minFilter===Vr&&(n.minFilter=si),new oM(1,10,this).update(e,s),n.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Lc=new Q,aM=new Q,lM=new tt;class Ir{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lc.subVectors(i,n).cross(aM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lM.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new hh,fl=new Q;class C_{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,o=new Ir,s=new Ir){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(o),l[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii){const i=this.planes,r=e.elements,o=r[0],s=r[1],l=r[2],u=r[3],c=r[4],h=r[5],m=r[6],p=r[7],y=r[8],E=r[9],T=r[10],_=r[11],d=r[12],S=r[13],x=r[14],w=r[15];if(i[0].setComponents(u-o,p-c,_-y,w-d).normalize(),i[1].setComponents(u+o,p+c,_+y,w+d).normalize(),i[2].setComponents(u+s,p+h,_+E,w+S).normalize(),i[3].setComponents(u-s,p-h,_-E,w-S).normalize(),i[4].setComponents(u-l,p-m,_-T,w-x).normalize(),n===Ii)i[5].setComponents(u+l,p+m,_+T,w+x).normalize();else if(n===lu)i[5].setComponents(l,m,T,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function uM(t){const e=new WeakMap;function n(l,u){const c=l.array,h=l.usage,m=c.byteLength,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,c,h),l.onUploadCallback();let y;if(c instanceof Float32Array)y=t.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?y=t.HALF_FLOAT:y=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)y=t.SHORT;else if(c instanceof Uint32Array)y=t.UNSIGNED_INT;else if(c instanceof Int32Array)y=t.INT;else if(c instanceof Int8Array)y=t.BYTE;else if(c instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:y,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,u,c){const h=u.array,m=u._updateRange,p=u.updateRanges;if(t.bindBuffer(c,l),m.count===-1&&p.length===0&&t.bufferSubData(c,0,h),p.length!==0){for(let y=0,E=p.length;y<E;y++){const T=p[y];t.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}u.clearUpdateRanges()}m.count!==-1&&(t.bufferSubData(c,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count),m.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(t.deleteBuffer(u.buffer),e.delete(l))}function s(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,n(l,u));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,u),c.version=l.version}}return{get:r,remove:o,update:s}}class Pu extends to{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,l=Math.floor(i),u=Math.floor(r),c=l+1,h=u+1,m=e/l,p=n/u,y=[],E=[],T=[],_=[];for(let d=0;d<h;d++){const S=d*p-s;for(let x=0;x<c;x++){const w=x*m-o;E.push(w,-S,0),T.push(0,0,1),_.push(x/l),_.push(1-d/u)}}for(let d=0;d<u;d++)for(let S=0;S<l;S++){const x=S+c*d,w=S+c*(d+1),B=S+1+c*(d+1),I=S+1+c*d;y.push(x,w,I),y.push(w,B,I)}this.setIndex(y),this.setAttribute("position",new Xr(E,3)),this.setAttribute("normal",new Xr(T,3)),this.setAttribute("uv",new Xr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.widthSegments,e.heightSegments)}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ME=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:cM,alphahash_pars_fragment:fM,alphamap_fragment:dM,alphamap_pars_fragment:hM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:vM,batching_pars_vertex:_M,batching_vertex:yM,begin_vertex:xM,beginnormal_vertex:SM,bsdfs:MM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:wM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:RM,color_fragment:PM,color_pars_fragment:LM,color_pars_vertex:bM,color_vertex:DM,common:UM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:NM,displacementmap_pars_vertex:FM,displacementmap_vertex:OM,emissivemap_fragment:kM,emissivemap_pars_fragment:BM,colorspace_fragment:zM,colorspace_pars_fragment:HM,envmap_fragment:VM,envmap_common_pars_fragment:GM,envmap_pars_fragment:WM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:nE,envmap_vertex:jM,fog_vertex:YM,fog_pars_vertex:$M,fog_fragment:qM,fog_pars_fragment:KM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:QM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:eE,lights_pars_begin:tE,lights_toon_fragment:iE,lights_toon_pars_fragment:rE,lights_phong_fragment:oE,lights_phong_pars_fragment:sE,lights_physical_fragment:aE,lights_physical_pars_fragment:lE,lights_fragment_begin:uE,lights_fragment_maps:cE,lights_fragment_end:fE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:hE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:_E,map_particle_pars_fragment:yE,metalnessmap_fragment:xE,metalnessmap_pars_fragment:SE,morphinstance_vertex:ME,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:wE,morphtarget_vertex:AE,normal_fragment_begin:CE,normal_fragment_maps:RE,normal_pars_fragment:PE,normal_pars_vertex:LE,normal_vertex:bE,normalmap_pars_fragment:DE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:IE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:FE,opaque_fragment:OE,packing:kE,premultiplied_alpha_fragment:BE,project_vertex:zE,dithering_fragment:HE,dithering_pars_fragment:VE,roughnessmap_fragment:GE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:XE,shadowmap_pars_vertex:jE,shadowmap_vertex:YE,shadowmask_pars_fragment:$E,skinbase_vertex:qE,skinning_pars_vertex:KE,skinning_vertex:ZE,skinnormal_vertex:QE,specularmap_fragment:JE,specularmap_pars_fragment:e1,tonemapping_fragment:t1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:r1,uv_pars_fragment:o1,uv_pars_vertex:s1,uv_vertex:a1,worldpos_vertex:l1,background_vert:u1,background_frag:c1,backgroundCube_vert:f1,backgroundCube_frag:d1,cube_vert:h1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distanceRGBA_vert:v1,distanceRGBA_frag:_1,equirect_vert:y1,equirect_frag:x1,linedashed_vert:S1,linedashed_frag:M1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:w1,meshlambert_frag:A1,meshmatcap_vert:C1,meshmatcap_frag:R1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:b1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:I1,meshtoon_vert:N1,meshtoon_frag:F1,points_vert:O1,points_frag:k1,shadow_vert:B1,shadow_frag:z1,sprite_vert:H1,sprite_frag:V1},xe={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},mi={basic:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new vt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:hn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:hn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new vt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:hn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:hn([xe.points,xe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:hn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:hn([xe.common,xe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:hn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:hn([xe.sprite,xe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:hn([xe.common,xe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:hn([xe.lights,xe.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};mi.physical={uniforms:hn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const dl={r:0,b:0,g:0},Lr=new Vi,G1=new Gt;function W1(t,e,n,i,r,o,s){const l=new vt(0);let u=o===!0?0:1,c,h,m=null,p=0,y=null;function E(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?n:e).get(x)),x}function T(S){let x=!1;const w=E(S);w===null?d(l,u):w&&w.isColor&&(d(w,1),x=!0);const B=t.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,s):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(S,x){const w=E(x);w&&(w.isCubeTexture||w.mapping===Au)?(h===void 0&&(h=new _i(new ps(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:us(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Lr.copy(x.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(Lr)),h.material.toneMapped=dt.getTransfer(w.colorSpace)!==wt,(m!==w||p!==w.version||y!==t.toneMapping)&&(h.material.needsUpdate=!0,m=w,p=w.version,y=t.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new _i(new Pu(2,2),new xr({name:"BackgroundMaterial",uniforms:us(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(w.colorSpace)!==wt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||p!==w.version||y!==t.toneMapping)&&(c.material.needsUpdate=!0,m=w,p=w.version,y=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,x){S.getRGB(dl,T_(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,x,s)}return{getClearColor:function(){return l},setClearColor:function(S,x=1){l.set(S),u=x,d(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(S){u=S,d(l,u)},render:T,addToRenderList:_}}function X1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,s=!1;function l(v,R,j,V,J){let ne=!1;const z=m(V,j,R);o!==z&&(o=z,c(o.object)),ne=y(v,V,j,J),ne&&E(v,V,j,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(ne||s)&&(s=!1,w(v,R,j,V),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function u(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function h(v){return t.deleteVertexArray(v)}function m(v,R,j){const V=j.wireframe===!0;let J=i[v.id];J===void 0&&(J={},i[v.id]=J);let ne=J[R.id];ne===void 0&&(ne={},J[R.id]=ne);let z=ne[V];return z===void 0&&(z=p(u()),ne[V]=z),z}function p(v){const R=[],j=[],V=[];for(let J=0;J<n;J++)R[J]=0,j[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:j,attributeDivisors:V,object:v,attributes:{},index:null}}function y(v,R,j,V){const J=o.attributes,ne=R.attributes;let z=0;const Y=j.getAttributes();for(const F in Y)if(Y[F].location>=0){const ie=J[F];let me=ne[F];if(me===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;z++}return o.attributesNum!==z||o.index!==V}function E(v,R,j,V){const J={},ne=R.attributes;let z=0;const Y=j.getAttributes();for(const F in Y)if(Y[F].location>=0){let ie=ne[F];ie===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),J[F]=me,z++}o.attributes=J,o.attributesNum=z,o.index=V}function T(){const v=o.newAttributes;for(let R=0,j=v.length;R<j;R++)v[R]=0}function _(v){d(v,0)}function d(v,R){const j=o.newAttributes,V=o.enabledAttributes,J=o.attributeDivisors;j[v]=1,V[v]===0&&(t.enableVertexAttribArray(v),V[v]=1),J[v]!==R&&(t.vertexAttribDivisor(v,R),J[v]=R)}function S(){const v=o.newAttributes,R=o.enabledAttributes;for(let j=0,V=R.length;j<V;j++)R[j]!==v[j]&&(t.disableVertexAttribArray(j),R[j]=0)}function x(v,R,j,V,J,ne,z){z===!0?t.vertexAttribIPointer(v,R,j,J,ne):t.vertexAttribPointer(v,R,j,V,J,ne)}function w(v,R,j,V){T();const J=V.attributes,ne=j.getAttributes(),z=R.defaultAttributeValues;for(const Y in ne){const F=ne[Y];if(F.location>=0){let ee=J[Y];if(ee===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),ee!==void 0){const ie=ee.normalized,me=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const We=Ce.buffer,te=Ce.type,ce=Ce.bytesPerElement,Se=te===t.INT||te===t.UNSIGNED_INT||ee.gpuType===sh;if(ee.isInterleavedBufferAttribute){const Ee=ee.data,je=Ee.stride,qe=ee.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ze=0;Ze<F.locationSize;Ze++)d(F.location+Ze,Ee.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ze=0;Ze<F.locationSize;Ze++)_(F.location+Ze);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Ze=0;Ze<F.locationSize;Ze++)x(F.location+Ze,me/F.locationSize,te,ie,je*ce,(qe+me/F.locationSize*Ze)*ce,Se)}else{if(ee.isInstancedBufferAttribute){for(let Ee=0;Ee<F.locationSize;Ee++)d(F.location+Ee,ee.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<F.locationSize;Ee++)_(F.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Ee=0;Ee<F.locationSize;Ee++)x(F.location+Ee,me/F.locationSize,te,ie,me*ce,me/F.locationSize*Ee*ce,Se)}}else if(z!==void 0){const ie=z[Y];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(F.location,ie);break;case 3:t.vertexAttrib3fv(F.location,ie);break;case 4:t.vertexAttrib4fv(F.location,ie);break;default:t.vertexAttrib1fv(F.location,ie)}}}}S()}function B(){O();for(const v in i){const R=i[v];for(const j in R){const V=R[j];for(const J in V)h(V[J].object),delete V[J];delete R[j]}delete i[v]}}function I(v){if(i[v.id]===void 0)return;const R=i[v.id];for(const j in R){const V=R[j];for(const J in V)h(V[J].object),delete V[J];delete R[j]}delete i[v.id]}function b(v){for(const R in i){const j=i[R];if(j[v.id]===void 0)continue;const V=j[v.id];for(const J in V)h(V[J].object),delete V[J];delete j[v.id]}}function O(){P(),s=!0,o!==r&&(o=r,c(o.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:O,resetDefaultState:P,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:b,initAttributes:T,enableAttribute:_,disableUnusedAttributes:S}}function j1(t,e,n){let i;function r(c){i=c}function o(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,m){m!==0&&(t.drawArraysInstanced(i,c,h,m),n.update(h,i,m))}function l(c,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,m);let y=0;for(let E=0;E<m;E++)y+=h[E];n.update(y,i,1)}function u(c,h,m,p){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<c.length;E++)s(c[E],h[E],p[E]);else{y.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,m);let E=0;for(let T=0;T<m;T++)E+=h[T];for(let T=0;T<p.length;T++)n.update(E,i,p[T])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Y1(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(I){return!(I!==ai&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(I){const b=I===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Hi&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ui&&!b)}function u(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=u(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),T=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=y>0,B=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:s,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:m,maxTextures:p,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:T,maxAttributes:_,maxVertexUniforms:d,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:B}}function $1(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Ir,l=new tt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const y=m.length!==0||p||i!==0||r;return r=p,i=m.length,y},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,p){n=h(m,p,0)},this.setState=function(m,p,y){const E=m.clippingPlanes,T=m.clipIntersection,_=m.clipShadows,d=t.get(m);if(!r||E===null||E.length===0||o&&!_)o?h(null):c();else{const S=o?0:i,x=S*4;let w=d.clippingState||null;u.value=w,w=h(E,p,x,y);for(let B=0;B!==x;++B)w[B]=n[B];d.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=S}};function c(){u.value!==n&&(u.value=n,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,p,y,E){const T=m!==null?m.length:0;let _=null;if(T!==0){if(_=u.value,E!==!0||_===null){const d=y+T*4,S=p.matrixWorldInverse;l.getNormalMatrix(S),(_===null||_.length<d)&&(_=new Float32Array(d));for(let x=0,w=y;x!==T;++x,w+=4)s.copy(m[x]).applyMatrix4(S,l),s.normal.toArray(_,w),_[w+3]=s.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function q1(t){let e=new WeakMap;function n(s,l){return l===Uf?s.mapping=os:l===If&&(s.mapping=ss),s}function i(s){if(s&&s.isTexture){const l=s.mapping;if(l===Uf||l===If)if(e.has(s)){const u=e.get(s).texture;return n(u,s.mapping)}else{const u=s.image;if(u&&u.height>0){const c=new sM(u.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const l=s.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class K1 extends w_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,l=r+n,u=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ho=4,xm=[.125,.215,.35,.446,.526,.582],Or=20,bc=new K1,Sm=new vt;let Dc=null,Uc=0,Ic=0,Nc=!1;const Nr=(1+Math.sqrt(5))/2,Ro=1/Nr,Mm=[new Q(-Nr,Ro,0),new Q(Nr,Ro,0),new Q(-Ro,0,Nr),new Q(Ro,0,Nr),new Q(0,Nr,-Ro),new Q(0,Nr,Ro),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Uc,Ic),this._renderer.xr.enabled=Nc,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===os||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:xa,format:ai,colorSpace:Tr,depthBuffer:!1},r=Tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(o)),this._blurMaterial=Q1(o,e,n)}return r}_compileMaterial(e){const n=new _i(this._lodPlanes[0],e);this._renderer.compile(n,bc)}_sceneToCubeUV(e,n,i,r){const l=new Xn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(Sm),h.toneMapping=gr,h.autoClear=!1;const y=new ph({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),E=new _i(new ps,y);let T=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,T=!0):(y.color.copy(Sm),T=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(l.up.set(0,u[d],0),l.lookAt(c[d],0,0)):S===1?(l.up.set(0,0,u[d]),l.lookAt(0,c[d],0)):(l.up.set(0,u[d],0),l.lookAt(0,0,c[d]));const x=this._cubeSize;hl(r,S*x,d>2?x:0,x,x),h.setRenderTarget(r),T&&h.render(E,l),h.render(e,l)}E.geometry.dispose(),E.material.dispose(),h.toneMapping=p,h.autoClear=m,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===os||e.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new _i(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const u=this._cubeSize;hl(n,0,0,3*u,2*u),i.setRenderTarget(n),i.render(s,bc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Mm[(r-o-1)%Mm.length];this._blur(e,o-1,o,s,l)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,l){const u=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new _i(this._lodPlanes[r],c),p=c.uniforms,y=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Or-1),T=o/E,_=isFinite(o)?1+Math.floor(h*T):Or;_>Or&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Or}`);const d=[];let S=0;for(let b=0;b<Or;++b){const O=b/T,P=Math.exp(-O*O/2);d.push(P),b===0?S+=P:b<_&&(S+=2*P)}for(let b=0;b<d.length;b++)d[b]=d[b]/S;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=d,p.latitudinal.value=s==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:x}=this;p.dTheta.value=E,p.mipInt.value=x-i;const w=this._sizeLods[r],B=3*w*(r>x-Ho?r-x+Ho:0),I=4*(this._cubeSize-w);hl(n,B,I,3*w,2*w),u.setRenderTarget(n),u.render(m,bc)}}function Z1(t){const e=[],n=[],i=[];let r=t;const o=t-Ho+1+xm.length;for(let s=0;s<o;s++){const l=Math.pow(2,r);n.push(l);let u=1/l;s>t-Ho?u=xm[s-t+Ho-1]:s===0&&(u=0),i.push(u);const c=1/(l-2),h=-c,m=1+c,p=[h,h,m,h,m,m,h,h,m,m,h,m],y=6,E=6,T=3,_=2,d=1,S=new Float32Array(T*E*y),x=new Float32Array(_*E*y),w=new Float32Array(d*E*y);for(let I=0;I<y;I++){const b=I%3*2/3-1,O=I>2?0:-1,P=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];S.set(P,T*E*I),x.set(p,_*E*I);const v=[I,I,I,I,I,I];w.set(v,d*E*I)}const B=new to;B.setAttribute("position",new Si(S,T)),B.setAttribute("uv",new Si(x,_)),B.setAttribute("faceIndex",new Si(w,d)),e.push(B),r>Ho&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Tm(t,e,n){const i=new Qr(t,e,n);return i.texture.mapping=Au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Q1(t,e,n){const i=new Float32Array(Or),r=new Q(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function wm(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Am(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J1(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const u=l.mapping,c=u===Uf||u===If,h=u===os||u===ss;if(c||h){let m=e.get(l);const p=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new Em(t)),m=c?n.fromEquirectangular(l,m):n.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const y=l.image;return c&&y&&y.height>0||h&&y&&r(y)?(n===null&&(n=new Em(t)),m=c?n.fromEquirectangular(l):n.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",o),m.texture):null}}}return l}function r(l){let u=0;const c=6;for(let h=0;h<c;h++)l[h]!==void 0&&u++;return u===c}function o(l){const u=l.target;u.removeEventListener("dispose",o);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function eT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ks("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tT(t,e,n,i){const r={},o=new WeakMap;function s(m){const p=m.target;p.index!==null&&e.remove(p.index);for(const E in p.attributes)e.remove(p.attributes[E]);for(const E in p.morphAttributes){const T=p.morphAttributes[E];for(let _=0,d=T.length;_<d;_++)e.remove(T[_])}p.removeEventListener("dispose",s),delete r[p.id];const y=o.get(p);y&&(e.remove(y),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function l(m,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,n.memory.geometries++),p}function u(m){const p=m.attributes;for(const E in p)e.update(p[E],t.ARRAY_BUFFER);const y=m.morphAttributes;for(const E in y){const T=y[E];for(let _=0,d=T.length;_<d;_++)e.update(T[_],t.ARRAY_BUFFER)}}function c(m){const p=[],y=m.index,E=m.attributes.position;let T=0;if(y!==null){const S=y.array;T=y.version;for(let x=0,w=S.length;x<w;x+=3){const B=S[x+0],I=S[x+1],b=S[x+2];p.push(B,I,I,b,b,B)}}else if(E!==void 0){const S=E.array;T=E.version;for(let x=0,w=S.length/3-1;x<w;x+=3){const B=x+0,I=x+1,b=x+2;p.push(B,I,I,b,b,B)}}else return;const _=new(v_(p)?E_:M_)(p,1);_.version=T;const d=o.get(m);d&&e.remove(d),o.set(m,_)}function h(m){const p=o.get(m);if(p){const y=m.index;y!==null&&p.version<y.version&&c(m)}else c(m);return o.get(m)}return{get:l,update:u,getWireframeAttribute:h}}function nT(t,e,n){let i;function r(p){i=p}let o,s;function l(p){o=p.type,s=p.bytesPerElement}function u(p,y){t.drawElements(i,y,o,p*s),n.update(y,i,1)}function c(p,y,E){E!==0&&(t.drawElementsInstanced(i,y,o,p*s,E),n.update(y,i,E))}function h(p,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,o,p,0,E);let _=0;for(let d=0;d<E;d++)_+=y[d];n.update(_,i,1)}function m(p,y,E,T){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<p.length;d++)c(p[d]/s,y[d],T[d]);else{_.multiDrawElementsInstancedWEBGL(i,y,0,o,p,0,T,0,E);let d=0;for(let S=0;S<E;S++)d+=y[S];for(let S=0;S<T.length;S++)n.update(d,i,T[S])}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function iT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,l){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=l*(o/3);break;case t.LINES:n.lines+=l*(o/2);break;case t.LINE_STRIP:n.lines+=l*(o-1);break;case t.LINE_LOOP:n.lines+=l*o;break;case t.POINTS:n.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rT(t,e,n){const i=new WeakMap,r=new qt;function o(s,l,u){const c=s.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=h!==void 0?h.length:0;let p=i.get(l);if(p===void 0||p.count!==m){let v=function(){O.dispose(),i.delete(l),l.removeEventListener("dispose",v)};var y=v;p!==void 0&&p.texture.dispose();const E=l.morphAttributes.position!==void 0,T=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],S=l.morphAttributes.normal||[],x=l.morphAttributes.color||[];let w=0;E===!0&&(w=1),T===!0&&(w=2),_===!0&&(w=3);let B=l.attributes.position.count*w,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const b=new Float32Array(B*I*4*m),O=new y_(b,B,I,m);O.type=Ui,O.needsUpdate=!0;const P=w*4;for(let R=0;R<m;R++){const j=d[R],V=S[R],J=x[R],ne=B*I*4*R;for(let z=0;z<j.count;z++){const Y=z*P;E===!0&&(r.fromBufferAttribute(j,z),b[ne+Y+0]=r.x,b[ne+Y+1]=r.y,b[ne+Y+2]=r.z,b[ne+Y+3]=0),T===!0&&(r.fromBufferAttribute(V,z),b[ne+Y+4]=r.x,b[ne+Y+5]=r.y,b[ne+Y+6]=r.z,b[ne+Y+7]=0),_===!0&&(r.fromBufferAttribute(J,z),b[ne+Y+8]=r.x,b[ne+Y+9]=r.y,b[ne+Y+10]=r.z,b[ne+Y+11]=J.itemSize===4?r.w:1)}}p={count:m,texture:O,size:new ht(B,I)},i.set(l,p),l.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)u.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let E=0;for(let _=0;_<c.length;_++)E+=c[_];const T=l.morphTargetsRelative?1:1-E;u.getUniforms().setValue(t,"morphTargetBaseInfluence",T),u.getUniforms().setValue(t,"morphTargetInfluences",c)}u.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:o}}function oT(t,e,n,i){let r=new WeakMap;function o(u){const c=i.render.frame,h=u.geometry,m=e.get(u,h);if(r.get(m)!==c&&(e.update(m),r.set(m,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return m}function s(){r=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class P_ extends Pn{constructor(e,n,i,r,o,s,l,u,c,h=Ko){if(h!==Ko&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ko&&(i=Zr),i===void 0&&h===ls&&(i=as),super(null,r,o,s,l,u,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Yn,this.minFilter=u!==void 0?u:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const L_=new Pn,Cm=new P_(1,1),b_=new y_,D_=new GS,U_=new A_,Rm=[],Pm=[],Lm=new Float32Array(16),bm=new Float32Array(9),Dm=new Float32Array(4);function ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Rm[r];if(o===void 0&&(o=new Float32Array(r),Rm[r]=o),e!==0){i.toArray(o,0);for(let s=1,l=0;s!==e;++s)l+=n,t[s].toArray(o,l)}return o}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lu(t,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Dm.set(i),t.uniformMatrix2fv(this.addr,!1,Dm),Xt(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;bm.set(i),t.uniformMatrix3fv(this.addr,!1,bm),Xt(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),Xt(n,i)}}function hT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Cm.compareFunction=g_,o=Cm):o=L_,n.setTexture2D(e||o,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||D_,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||U_,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||b_,r)}function wT(t){switch(t){case 5126:return sT;case 35664:return aT;case 35665:return lT;case 35666:return uT;case 35674:return cT;case 35675:return fT;case 35676:return dT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return _T;case 36295:return yT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}function AT(t,e){t.uniform1fv(this.addr,e)}function CT(t,e){const n=ms(e,this.size,2);t.uniform2fv(this.addr,n)}function RT(t,e){const n=ms(e,this.size,3);t.uniform3fv(this.addr,n)}function PT(t,e){const n=ms(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bT(t,e){const n=ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DT(t,e){const n=ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UT(t,e){t.uniform1iv(this.addr,e)}function IT(t,e){t.uniform2iv(this.addr,e)}function NT(t,e){t.uniform3iv(this.addr,e)}function FT(t,e){t.uniform4iv(this.addr,e)}function OT(t,e){t.uniform1uiv(this.addr,e)}function kT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function zT(t,e){t.uniform4uiv(this.addr,e)}function HT(t,e,n){const i=this.cache,r=e.length,o=Lu(n,r);Wt(i,o)||(t.uniform1iv(this.addr,o),Xt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||L_,o[s])}function VT(t,e,n){const i=this.cache,r=e.length,o=Lu(n,r);Wt(i,o)||(t.uniform1iv(this.addr,o),Xt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||D_,o[s])}function GT(t,e,n){const i=this.cache,r=e.length,o=Lu(n,r);Wt(i,o)||(t.uniform1iv(this.addr,o),Xt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||U_,o[s])}function WT(t,e,n){const i=this.cache,r=e.length,o=Lu(n,r);Wt(i,o)||(t.uniform1iv(this.addr,o),Xt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||b_,o[s])}function XT(t){switch(t){case 5126:return AT;case 35664:return CT;case 35665:return RT;case 35666:return PT;case 35674:return LT;case 35675:return bT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return IT;case 35668:case 35672:return NT;case 35669:case 35673:return FT;case 5125:return OT;case 36294:return kT;case 36295:return BT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wT(n.type)}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XT(n.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const l=r[o];l.setValue(e,n[l.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function Um(t,e){t.seq.push(e),t.map[e.id]=e}function qT(t,e,n){const i=t.name,r=i.length;for(Fc.lastIndex=0;;){const o=Fc.exec(i),s=Fc.lastIndex;let l=o[1];const u=o[2]==="]",c=o[3];if(u&&(l=l|0),c===void 0||c==="["&&s+2===r){Um(n,c===void 0?new jT(l,t,e):new YT(l,t,e));break}else{let m=n.map[l];m===void 0&&(m=new $T(l),Um(n,m)),n=m}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);qT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const l=n[o],u=i[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Im(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KT=37297;let ZT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const l=s+1;i.push(`${l===e?">":" "} ${l}: ${n[s]}`)}return i.join(`
`)}function JT(t){const e=dt.getPrimaries(dt.workingColorSpace),n=dt.getPrimaries(t);let i;switch(e===n?i="":e===au&&n===su?i="LinearDisplayP3ToLinearSRGB":e===su&&n===au&&(i="LinearSRGBToLinearDisplayP3"),t){case Tr:case Cu:return[i,"LinearTransferOETF"];case pi:case dh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Nm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+QT(t.getShaderSource(e),s)}else return r}function ew(t,e){const n=JT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tw(t,e){let n;switch(e){case gS:n="Linear";break;case vS:n="Reinhard";break;case _S:n="OptimizedCineon";break;case yS:n="ACESFilmic";break;case SS:n="AgX";break;case MS:n="Neutral";break;case xS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new Q;function nw(){dt.getLuminanceCoefficients(pl);const t=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function rw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ow(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let l=1;o.type===t.FLOAT_MAT2&&(l=2),o.type===t.FLOAT_MAT3&&(l=3),o.type===t.FLOAT_MAT4&&(l=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:l}}return n}function zs(t){return t!==""}function Fm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(t){return t.replace(sw,lw)}const aw=new Map;function lw(t,e){let n=et[e];if(n===void 0){const i=aw.get(e);if(i!==void 0)n=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cd(n)}const uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(t){return t.replace(uw,cw)}function cw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Bm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function dw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case os:case ss:e="ENVMAP_TYPE_CUBE";break;case Au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case pS:e="ENVMAP_BLENDING_MIX";break;case mS:e="ENVMAP_BLENDING_ADD";break}return e}function mw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gw(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,l=n.fragmentShader;const u=fw(n),c=dw(n),h=hw(n),m=pw(n),p=mw(n),y=iw(n),E=rw(o),T=r.createProgram();let _,d,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zs).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zs).join(`
`),d.length>0&&(d+=`
`)):(_=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),d=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?et.tonemapping_pars_fragment:"",n.toneMapping!==gr?tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ew("linearToOutputTexel",n.outputColorSpace),nw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zs).join(`
`)),s=cd(s),s=Fm(s,n),s=Om(s,n),l=cd(l),l=Fm(l,n),l=Om(l,n),s=km(s),l=km(l),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=S+_+s,w=S+d+l,B=Im(r,r.VERTEX_SHADER,x),I=Im(r,r.FRAGMENT_SHADER,w);r.attachShader(T,B),r.attachShader(T,I),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function b(R){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(T).trim(),V=r.getShaderInfoLog(B).trim(),J=r.getShaderInfoLog(I).trim();let ne=!0,z=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,B,I);else{const Y=Nm(r,B,"vertex"),F=Nm(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+j+`
`+Y+`
`+F)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||J==="")&&(z=!1);z&&(R.diagnostics={runnable:ne,programLog:j,vertexShader:{log:V,prefix:_},fragmentShader:{log:J,prefix:d}})}r.deleteShader(B),r.deleteShader(I),O=new Ul(r,T),P=ow(r,T)}let O;this.getUniforms=function(){return O===void 0&&b(this),O};let P;this.getAttributes=function(){return P===void 0&&b(this),P};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(T,KT)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=I,this}let vw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yw(e),n.set(e,i)),i}}class yw{constructor(e){this.id=vw++,this.code=e,this.usedTimes=0}}function xw(t,e,n,i,r,o,s){const l=new x_,u=new _w,c=new Set,h=[],m=r.logarithmicDepthBuffer,p=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return c.add(P),P===0?"uv":`uv${P}`}function _(P,v,R,j,V){const J=j.fog,ne=V.geometry,z=P.isMeshStandardMaterial?j.environment:null,Y=(P.isMeshStandardMaterial?n:e).get(P.envMap||z),F=Y&&Y.mapping===Au?Y.image.height:null,ee=E[P.type];P.precision!==null&&(y=r.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const ie=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,me=ie!==void 0?ie.length:0;let Ce=0;ne.morphAttributes.position!==void 0&&(Ce=1),ne.morphAttributes.normal!==void 0&&(Ce=2),ne.morphAttributes.color!==void 0&&(Ce=3);let We,te,ce,Se;if(ee){const lt=mi[ee];We=lt.vertexShader,te=lt.fragmentShader}else We=P.vertexShader,te=P.fragmentShader,u.update(P),ce=u.getVertexShaderID(P),Se=u.getFragmentShaderID(P);const Ee=t.getRenderTarget(),je=V.isInstancedMesh===!0,qe=V.isBatchedMesh===!0,Ze=!!P.map,mt=!!P.matcap,k=!!Y,Qe=!!P.aoMap,Xe=!!P.lightMap,ft=!!P.bumpMap,Ue=!!P.normalMap,Lt=!!P.displacementMap,Ve=!!P.emissiveMap,Ye=!!P.metalnessMap,N=!!P.roughnessMap,A=P.anisotropy>0,Z=P.clearcoat>0,ae=P.dispersion>0,le=P.iridescence>0,se=P.sheen>0,Ie=P.transmission>0,ye=A&&!!P.anisotropyMap,Re=Z&&!!P.clearcoatMap,$e=Z&&!!P.clearcoatNormalMap,pe=Z&&!!P.clearcoatRoughnessMap,Te=le&&!!P.iridescenceMap,it=le&&!!P.iridescenceThicknessMap,Fe=se&&!!P.sheenColorMap,we=se&&!!P.sheenRoughnessMap,Ge=!!P.specularMap,Je=!!P.specularColorMap,yt=!!P.specularIntensityMap,G=Ie&&!!P.transmissionMap,he=Ie&&!!P.thicknessMap,re=!!P.gradientMap,oe=!!P.alphaMap,ge=P.alphaTest>0,Oe=!!P.alphaHash,ot=!!P.extensions;let gt=gr;P.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Ft={shaderID:ee,shaderType:P.type,shaderName:P.name,vertexShader:We,fragmentShader:te,defines:P.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:qe,batchingColor:qe&&V._colorsTexture!==null,instancing:je,instancingColor:je&&V.instanceColor!==null,instancingMorph:je&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Tr,alphaToCoverage:!!P.alphaToCoverage,map:Ze,matcap:mt,envMap:k,envMapMode:k&&Y.mapping,envMapCubeUVHeight:F,aoMap:Qe,lightMap:Xe,bumpMap:ft,normalMap:Ue,displacementMap:p&&Lt,emissiveMap:Ve,normalMapObjectSpace:Ue&&P.normalMapType===CS,normalMapTangentSpace:Ue&&P.normalMapType===AS,metalnessMap:Ye,roughnessMap:N,anisotropy:A,anisotropyMap:ye,clearcoat:Z,clearcoatMap:Re,clearcoatNormalMap:$e,clearcoatRoughnessMap:pe,dispersion:ae,iridescence:le,iridescenceMap:Te,iridescenceThicknessMap:it,sheen:se,sheenColorMap:Fe,sheenRoughnessMap:we,specularMap:Ge,specularColorMap:Je,specularIntensityMap:yt,transmission:Ie,transmissionMap:G,thicknessMap:he,gradientMap:re,opaque:P.transparent===!1&&P.blending===qo&&P.alphaToCoverage===!1,alphaMap:oe,alphaTest:ge,alphaHash:Oe,combine:P.combine,mapUv:Ze&&T(P.map.channel),aoMapUv:Qe&&T(P.aoMap.channel),lightMapUv:Xe&&T(P.lightMap.channel),bumpMapUv:ft&&T(P.bumpMap.channel),normalMapUv:Ue&&T(P.normalMap.channel),displacementMapUv:Lt&&T(P.displacementMap.channel),emissiveMapUv:Ve&&T(P.emissiveMap.channel),metalnessMapUv:Ye&&T(P.metalnessMap.channel),roughnessMapUv:N&&T(P.roughnessMap.channel),anisotropyMapUv:ye&&T(P.anisotropyMap.channel),clearcoatMapUv:Re&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:$e&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:it&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:we&&T(P.sheenRoughnessMap.channel),specularMapUv:Ge&&T(P.specularMap.channel),specularColorMapUv:Je&&T(P.specularColorMap.channel),specularIntensityMapUv:yt&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:he&&T(P.thicknessMap.channel),alphaMapUv:oe&&T(P.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ue||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ne.attributes.uv&&(Ze||oe),fog:!!J,useFog:P.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:V.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ce,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:P.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ze&&P.map.isVideoTexture===!0&&dt.getTransfer(P.map.colorSpace)===wt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Li,flipSided:P.side===Rn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function d(P){const v=[];if(P.shaderID?v.push(P.shaderID):(v.push(P.customVertexShaderID),v.push(P.customFragmentShaderID)),P.defines!==void 0)for(const R in P.defines)v.push(R),v.push(P.defines[R]);return P.isRawShaderMaterial===!1&&(S(v,P),x(v,P),v.push(t.outputColorSpace)),v.push(P.customProgramCacheKey),v.join()}function S(P,v){P.push(v.precision),P.push(v.outputColorSpace),P.push(v.envMapMode),P.push(v.envMapCubeUVHeight),P.push(v.mapUv),P.push(v.alphaMapUv),P.push(v.lightMapUv),P.push(v.aoMapUv),P.push(v.bumpMapUv),P.push(v.normalMapUv),P.push(v.displacementMapUv),P.push(v.emissiveMapUv),P.push(v.metalnessMapUv),P.push(v.roughnessMapUv),P.push(v.anisotropyMapUv),P.push(v.clearcoatMapUv),P.push(v.clearcoatNormalMapUv),P.push(v.clearcoatRoughnessMapUv),P.push(v.iridescenceMapUv),P.push(v.iridescenceThicknessMapUv),P.push(v.sheenColorMapUv),P.push(v.sheenRoughnessMapUv),P.push(v.specularMapUv),P.push(v.specularColorMapUv),P.push(v.specularIntensityMapUv),P.push(v.transmissionMapUv),P.push(v.thicknessMapUv),P.push(v.combine),P.push(v.fogExp2),P.push(v.sizeAttenuation),P.push(v.morphTargetsCount),P.push(v.morphAttributeCount),P.push(v.numDirLights),P.push(v.numPointLights),P.push(v.numSpotLights),P.push(v.numSpotLightMaps),P.push(v.numHemiLights),P.push(v.numRectAreaLights),P.push(v.numDirLightShadows),P.push(v.numPointLightShadows),P.push(v.numSpotLightShadows),P.push(v.numSpotLightShadowsWithMaps),P.push(v.numLightProbes),P.push(v.shadowMapType),P.push(v.toneMapping),P.push(v.numClippingPlanes),P.push(v.numClipIntersection),P.push(v.depthPacking)}function x(P,v){l.disableAll(),v.supportsVertexTextures&&l.enable(0),v.instancing&&l.enable(1),v.instancingColor&&l.enable(2),v.instancingMorph&&l.enable(3),v.matcap&&l.enable(4),v.envMap&&l.enable(5),v.normalMapObjectSpace&&l.enable(6),v.normalMapTangentSpace&&l.enable(7),v.clearcoat&&l.enable(8),v.iridescence&&l.enable(9),v.alphaTest&&l.enable(10),v.vertexColors&&l.enable(11),v.vertexAlphas&&l.enable(12),v.vertexUv1s&&l.enable(13),v.vertexUv2s&&l.enable(14),v.vertexUv3s&&l.enable(15),v.vertexTangents&&l.enable(16),v.anisotropy&&l.enable(17),v.alphaHash&&l.enable(18),v.batching&&l.enable(19),v.dispersion&&l.enable(20),v.batchingColor&&l.enable(21),P.push(l.mask),l.disableAll(),v.fog&&l.enable(0),v.useFog&&l.enable(1),v.flatShading&&l.enable(2),v.logarithmicDepthBuffer&&l.enable(3),v.skinning&&l.enable(4),v.morphTargets&&l.enable(5),v.morphNormals&&l.enable(6),v.morphColors&&l.enable(7),v.premultipliedAlpha&&l.enable(8),v.shadowMapEnabled&&l.enable(9),v.doubleSided&&l.enable(10),v.flipSided&&l.enable(11),v.useDepthPacking&&l.enable(12),v.dithering&&l.enable(13),v.transmission&&l.enable(14),v.sheen&&l.enable(15),v.opaque&&l.enable(16),v.pointsUvs&&l.enable(17),v.decodeVideoTexture&&l.enable(18),v.alphaToCoverage&&l.enable(19),P.push(l.mask)}function w(P){const v=E[P.type];let R;if(v){const j=mi[v];R=nM.clone(j.uniforms)}else R=P.uniforms;return R}function B(P,v){let R;for(let j=0,V=h.length;j<V;j++){const J=h[j];if(J.cacheKey===v){R=J,++R.usedTimes;break}}return R===void 0&&(R=new gw(t,v,P,o),h.push(R)),R}function I(P){if(--P.usedTimes===0){const v=h.indexOf(P);h[v]=h[h.length-1],h.pop(),P.destroy()}}function b(P){u.remove(P)}function O(){u.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:w,acquireProgram:B,releaseProgram:I,releaseShaderCache:b,programs:h,dispose:O}}function Sw(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,l){t.get(o)[s]=l}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Mw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(m,p,y,E,T,_){let d=t[e];return d===void 0?(d={id:m.id,object:m,geometry:p,material:y,groupOrder:E,renderOrder:m.renderOrder,z:T,group:_},t[e]=d):(d.id=m.id,d.object=m,d.geometry=p,d.material=y,d.groupOrder=E,d.renderOrder=m.renderOrder,d.z=T,d.group=_),e++,d}function l(m,p,y,E,T,_){const d=s(m,p,y,E,T,_);y.transmission>0?i.push(d):y.transparent===!0?r.push(d):n.push(d)}function u(m,p,y,E,T,_){const d=s(m,p,y,E,T,_);y.transmission>0?i.unshift(d):y.transparent===!0?r.unshift(d):n.unshift(d)}function c(m,p){n.length>1&&n.sort(m||Mw),i.length>1&&i.sort(p||zm),r.length>1&&r.sort(p||zm)}function h(){for(let m=e,p=t.length;m<p;m++){const y=t[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:u,finish:h,sort:c}}function Ew(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Hm,t.set(i,[s])):r>=o.length?(s=new Hm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new vt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return t[e.id]=n,n}}}function ww(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Aw=0;function Cw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Rw(t){const e=new Tw,n=ww(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,o=new Gt,s=new Gt;function l(c){let h=0,m=0,p=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let y=0,E=0,T=0,_=0,d=0,S=0,x=0,w=0,B=0,I=0,b=0;c.sort(Cw);for(let P=0,v=c.length;P<v;P++){const R=c[P],j=R.color,V=R.intensity,J=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=j.r*V,m+=j.g*V,p+=j.b*V;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],V);b++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,F=n.get(R);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,i.directionalShadow[y]=F,i.directionalShadowMap[y]=ne,i.directionalShadowMatrix[y]=R.shadow.matrix,S++}i.directional[y]=z,y++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(j).multiplyScalar(V),z.distance=J,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[T]=z;const Y=R.shadow;if(R.map&&(i.spotLightMap[B]=R.map,B++,Y.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[T]=Y.matrix,R.castShadow){const F=n.get(R);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,i.spotShadow[T]=F,i.spotShadowMap[T]=ne,w++}T++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(j).multiplyScalar(V),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[_]=z,_++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const Y=R.shadow,F=n.get(R);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,F.shadowCameraNear=Y.camera.near,F.shadowCameraFar=Y.camera.far,i.pointShadow[E]=F,i.pointShadowMap[E]=ne,i.pointShadowMatrix[E]=R.shadow.matrix,x++}i.point[E]=z,E++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(V),z.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[d]=z,d++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=p;const O=i.hash;(O.directionalLength!==y||O.pointLength!==E||O.spotLength!==T||O.rectAreaLength!==_||O.hemiLength!==d||O.numDirectionalShadows!==S||O.numPointShadows!==x||O.numSpotShadows!==w||O.numSpotMaps!==B||O.numLightProbes!==b)&&(i.directional.length=y,i.spot.length=T,i.rectArea.length=_,i.point.length=E,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=w+B-I,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=b,O.directionalLength=y,O.pointLength=E,O.spotLength=T,O.rectAreaLength=_,O.hemiLength=d,O.numDirectionalShadows=S,O.numPointShadows=x,O.numSpotShadows=w,O.numSpotMaps=B,O.numLightProbes=b,i.version=Aw++)}function u(c,h){let m=0,p=0,y=0,E=0,T=0;const _=h.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const x=c[d];if(x.isDirectionalLight){const w=i.directional[m];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),m++}else if(x.isSpotLight){const w=i.spot[y];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),y++}else if(x.isRectAreaLight){const w=i.rectArea[E];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),s.identity(),o.copy(x.matrixWorld),o.premultiply(_),s.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),E++}else if(x.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),p++}else if(x.isHemisphereLight){const w=i.hemi[T];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(_),T++}}}return{setup:l,setupView:u,state:i}}function Vm(t){const e=new Rw(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function o(h){n.push(h)}function s(h){i.push(h)}function l(){e.setup(n)}function u(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function Pw(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let l;return s===void 0?(l=new Vm(t),e.set(r,[l])):o>=s.length?(l=new Vm(t),s.push(l)):l=s[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Lw extends Ru{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bw extends Ru{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iw(t,e,n){let i=new C_;const r=new ht,o=new ht,s=new qt,l=new Lw({depthPacking:wS}),u=new bw,c={},h=n.maxTextureSize,m={[yr]:Rn,[Rn]:yr,[Li]:Li},p=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Dw,fragmentShader:Uw}),y=p.clone();y.defines.HORIZONTAL_PASS=1;const E=new to;E.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new _i(E,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i_;let d=this.type;this.render=function(I,b,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const P=t.getRenderTarget(),v=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),j=t.state;j.setBlending(mr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=d!==Ci&&this.type===Ci,J=d===Ci&&this.type!==Ci;for(let ne=0,z=I.length;ne<z;ne++){const Y=I[ne],F=Y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const ee=F.getFrameExtents();if(r.multiply(ee),o.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/ee.x),r.x=o.x*ee.x,F.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/ee.y),r.y=o.y*ee.y,F.mapSize.y=o.y)),F.map===null||V===!0||J===!0){const me=this.type!==Ci?{minFilter:Yn,magFilter:Yn}:{};F.map!==null&&F.map.dispose(),F.map=new Qr(r.x,r.y,me),F.map.texture.name=Y.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const ie=F.getViewportCount();for(let me=0;me<ie;me++){const Ce=F.getViewport(me);s.set(o.x*Ce.x,o.y*Ce.y,o.x*Ce.z,o.y*Ce.w),j.viewport(s),F.updateMatrices(Y,me),i=F.getFrustum(),w(b,O,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===Ci&&S(F,O),F.needsUpdate=!1}d=this.type,_.needsUpdate=!1,t.setRenderTarget(P,v,R)};function S(I,b){const O=e.update(T);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qr(r.x,r.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(b,null,O,p,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(b,null,O,y,T,null)}function x(I,b,O,P){let v=null;const R=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)v=R;else if(v=O.isPointLight===!0?u:l,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const j=v.uuid,V=b.uuid;let J=c[j];J===void 0&&(J={},c[j]=J);let ne=J[V];ne===void 0&&(ne=v.clone(),J[V]=ne,b.addEventListener("dispose",B)),v=ne}if(v.visible=b.visible,v.wireframe=b.wireframe,P===Ci?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:m[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const j=t.properties.get(v);j.light=O}return v}function w(I,b,O,P,v){if(I.visible===!1)return;if(I.layers.test(b.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===Ci)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const V=e.update(I),J=I.material;if(Array.isArray(J)){const ne=V.groups;for(let z=0,Y=ne.length;z<Y;z++){const F=ne[z],ee=J[F.materialIndex];if(ee&&ee.visible){const ie=x(I,ee,P,v);I.onBeforeShadow(t,I,b,O,V,ie,F),t.renderBufferDirect(O,null,V,ie,I,F),I.onAfterShadow(t,I,b,O,V,ie,F)}}}else if(J.visible){const ne=x(I,J,P,v);I.onBeforeShadow(t,I,b,O,V,ne,null),t.renderBufferDirect(O,null,V,ne,I,null),I.onAfterShadow(t,I,b,O,V,ne,null)}}const j=I.children;for(let V=0,J=j.length;V<J;V++)w(j[V],b,O,P,v)}function B(I){I.target.removeEventListener("dispose",B);for(const O in c){const P=c[O],v=I.target.uuid;v in P&&(P[v].dispose(),delete P[v])}}}function Nw(t){function e(){let G=!1;const he=new qt;let re=null;const oe=new qt(0,0,0,0);return{setMask:function(ge){re!==ge&&!G&&(t.colorMask(ge,ge,ge,ge),re=ge)},setLocked:function(ge){G=ge},setClear:function(ge,Oe,ot,gt,Ft){Ft===!0&&(ge*=gt,Oe*=gt,ot*=gt),he.set(ge,Oe,ot,gt),oe.equals(he)===!1&&(t.clearColor(ge,Oe,ot,gt),oe.copy(he))},reset:function(){G=!1,re=null,oe.set(-1,0,0,0)}}}function n(){let G=!1,he=null,re=null,oe=null;return{setTest:function(ge){ge?Se(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(ge){he!==ge&&!G&&(t.depthMask(ge),he=ge)},setFunc:function(ge){if(re!==ge){switch(ge){case aS:t.depthFunc(t.NEVER);break;case lS:t.depthFunc(t.ALWAYS);break;case uS:t.depthFunc(t.LESS);break;case ru:t.depthFunc(t.LEQUAL);break;case cS:t.depthFunc(t.EQUAL);break;case fS:t.depthFunc(t.GEQUAL);break;case dS:t.depthFunc(t.GREATER);break;case hS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=ge}},setLocked:function(ge){G=ge},setClear:function(ge){oe!==ge&&(t.clearDepth(ge),oe=ge)},reset:function(){G=!1,he=null,re=null,oe=null}}}function i(){let G=!1,he=null,re=null,oe=null,ge=null,Oe=null,ot=null,gt=null,Ft=null;return{setTest:function(lt){G||(lt?Se(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(lt){he!==lt&&!G&&(t.stencilMask(lt),he=lt)},setFunc:function(lt,_n,cn){(re!==lt||oe!==_n||ge!==cn)&&(t.stencilFunc(lt,_n,cn),re=lt,oe=_n,ge=cn)},setOp:function(lt,_n,cn){(Oe!==lt||ot!==_n||gt!==cn)&&(t.stencilOp(lt,_n,cn),Oe=lt,ot=_n,gt=cn)},setLocked:function(lt){G=lt},setClear:function(lt){Ft!==lt&&(t.clearStencil(lt),Ft=lt)},reset:function(){G=!1,he=null,re=null,oe=null,ge=null,Oe=null,ot=null,gt=null,Ft=null}}}const r=new e,o=new n,s=new i,l=new WeakMap,u=new WeakMap;let c={},h={},m=new WeakMap,p=[],y=null,E=!1,T=null,_=null,d=null,S=null,x=null,w=null,B=null,I=new vt(0,0,0),b=0,O=!1,P=null,v=null,R=null,j=null,V=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,z=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ne=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ne=z>=2);let F=null,ee={};const ie=t.getParameter(t.SCISSOR_BOX),me=t.getParameter(t.VIEWPORT),Ce=new qt().fromArray(ie),We=new qt().fromArray(me);function te(G,he,re,oe){const ge=new Uint8Array(4),Oe=t.createTexture();t.bindTexture(G,Oe),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<re;ot++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(he+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return Oe}const ce={};ce[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),Se(t.DEPTH_TEST),o.setFunc(ru),ft(!1),Ue($p),Se(t.CULL_FACE),Qe(mr);function Se(G){c[G]!==!0&&(t.enable(G),c[G]=!0)}function Ee(G){c[G]!==!1&&(t.disable(G),c[G]=!1)}function je(G,he){return h[G]!==he?(t.bindFramebuffer(G,he),h[G]=he,G===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=he),G===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=he),!0):!1}function qe(G,he){let re=p,oe=!1;if(G){re=m.get(he),re===void 0&&(re=[],m.set(he,re));const ge=G.textures;if(re.length!==ge.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Oe=0,ot=ge.length;Oe<ot;Oe++)re[Oe]=t.COLOR_ATTACHMENT0+Oe;re.length=ge.length,oe=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,oe=!0);oe&&t.drawBuffers(re)}function Ze(G){return y!==G?(t.useProgram(G),y=G,!0):!1}const mt={[Fr]:t.FUNC_ADD,[Wx]:t.FUNC_SUBTRACT,[Xx]:t.FUNC_REVERSE_SUBTRACT};mt[jx]=t.MIN,mt[Yx]=t.MAX;const k={[$x]:t.ZERO,[qx]:t.ONE,[Kx]:t.SRC_COLOR,[bf]:t.SRC_ALPHA,[nS]:t.SRC_ALPHA_SATURATE,[eS]:t.DST_COLOR,[Qx]:t.DST_ALPHA,[Zx]:t.ONE_MINUS_SRC_COLOR,[Df]:t.ONE_MINUS_SRC_ALPHA,[tS]:t.ONE_MINUS_DST_COLOR,[Jx]:t.ONE_MINUS_DST_ALPHA,[iS]:t.CONSTANT_COLOR,[rS]:t.ONE_MINUS_CONSTANT_COLOR,[oS]:t.CONSTANT_ALPHA,[sS]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(G,he,re,oe,ge,Oe,ot,gt,Ft,lt){if(G===mr){E===!0&&(Ee(t.BLEND),E=!1);return}if(E===!1&&(Se(t.BLEND),E=!0),G!==Gx){if(G!==T||lt!==O){if((_!==Fr||x!==Fr)&&(t.blendEquation(t.FUNC_ADD),_=Fr,x=Fr),lt)switch(G){case qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qp:t.blendFunc(t.ONE,t.ONE);break;case Kp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Kp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}d=null,S=null,w=null,B=null,I.set(0,0,0),b=0,T=G,O=lt}return}ge=ge||he,Oe=Oe||re,ot=ot||oe,(he!==_||ge!==x)&&(t.blendEquationSeparate(mt[he],mt[ge]),_=he,x=ge),(re!==d||oe!==S||Oe!==w||ot!==B)&&(t.blendFuncSeparate(k[re],k[oe],k[Oe],k[ot]),d=re,S=oe,w=Oe,B=ot),(gt.equals(I)===!1||Ft!==b)&&(t.blendColor(gt.r,gt.g,gt.b,Ft),I.copy(gt),b=Ft),T=G,O=!1}function Xe(G,he){G.side===Li?Ee(t.CULL_FACE):Se(t.CULL_FACE);let re=G.side===Rn;he&&(re=!re),ft(re),G.blending===qo&&G.transparent===!1?Qe(mr):Qe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const oe=G.stencilWrite;s.setTest(oe),oe&&(s.setMask(G.stencilWriteMask),s.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),s.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ve(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function ft(G){P!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),P=G)}function Ue(G){G!==zx?(Se(t.CULL_FACE),G!==v&&(G===$p?t.cullFace(t.BACK):G===Hx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),v=G}function Lt(G){G!==R&&(ne&&t.lineWidth(G),R=G)}function Ve(G,he,re){G?(Se(t.POLYGON_OFFSET_FILL),(j!==he||V!==re)&&(t.polygonOffset(he,re),j=he,V=re)):Ee(t.POLYGON_OFFSET_FILL)}function Ye(G){G?Se(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function N(G){G===void 0&&(G=t.TEXTURE0+J-1),F!==G&&(t.activeTexture(G),F=G)}function A(G,he,re){re===void 0&&(F===null?re=t.TEXTURE0+J-1:re=F);let oe=ee[re];oe===void 0&&(oe={type:void 0,texture:void 0},ee[re]=oe),(oe.type!==G||oe.texture!==he)&&(F!==re&&(t.activeTexture(re),F=re),t.bindTexture(G,he||ce[G]),oe.type=G,oe.texture=he)}function Z(){const G=ee[F];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{t.texImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(G){Ce.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function we(G){We.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),We.copy(G))}function Ge(G,he){let re=u.get(he);re===void 0&&(re=new WeakMap,u.set(he,re));let oe=re.get(G);oe===void 0&&(oe=t.getUniformBlockIndex(he,G.name),re.set(G,oe))}function Je(G,he){const oe=u.get(he).get(G);l.get(he)!==oe&&(t.uniformBlockBinding(he,oe,G.__bindingPointIndex),l.set(he,oe))}function yt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},F=null,ee={},h={},m=new WeakMap,p=[],y=null,E=!1,T=null,_=null,d=null,S=null,x=null,w=null,B=null,I=new vt(0,0,0),b=0,O=!1,P=null,v=null,R=null,j=null,V=null,Ce.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:Se,disable:Ee,bindFramebuffer:je,drawBuffers:qe,useProgram:Ze,setBlending:Qe,setMaterial:Xe,setFlipSided:ft,setCullFace:Ue,setLineWidth:Lt,setPolygonOffset:Ve,setScissorTest:Ye,activeTexture:N,bindTexture:A,unbindTexture:Z,compressedTexImage2D:ae,compressedTexImage3D:le,texImage2D:Te,texImage3D:it,updateUBOMapping:Ge,uniformBlockBinding:Je,texStorage2D:$e,texStorage3D:pe,texSubImage2D:se,texSubImage3D:Ie,compressedTexSubImage2D:ye,compressedTexSubImage3D:Re,scissor:Fe,viewport:we,reset:yt}}function Gm(t,e,n,i){const r=Fw(i);switch(n){case u_:return t*e;case f_:return t*e;case d_:return t*e*2;case h_:return t*e/r.components*r.byteLength;case uh:return t*e/r.components*r.byteLength;case p_:return t*e*2/r.components*r.byteLength;case ch:return t*e*2/r.components*r.byteLength;case c_:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case fh:return t*e*4/r.components*r.byteLength;case Rl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ll:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:case zf:return Math.max(t,16)*Math.max(e,8)/4;case Of:case Bf:return Math.max(t,8)*Math.max(e,8)/2;case Hf:case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $f:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Dl:case rd:case od:return Math.ceil(t/4)*Math.ceil(e/4)*16;case m_:case sd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ad:case ld:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Fw(t){switch(t){case Hi:case s_:return{byteLength:1,components:1};case pa:case a_:case xa:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case Zr:case sh:case Ui:return{byteLength:4,components:1};case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Ow(t,e,n,i,r,o,s){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let m;const p=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return y?new OffscreenCanvas(N,A):uu("canvas")}function T(N,A,Z){let ae=1;const le=Ye(N);if((le.width>Z||le.height>Z)&&(ae=Z/Math.max(le.width,le.height)),ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const se=Math.floor(ae*le.width),Ie=Math.floor(ae*le.height);m===void 0&&(m=E(se,Ie));const ye=A?E(se,Ie):m;return ye.width=se,ye.height=Ie,ye.getContext("2d").drawImage(N,0,0,se,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+se+"x"+Ie+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),N;return N}function _(N){return N.generateMipmaps&&N.minFilter!==Yn&&N.minFilter!==si}function d(N){t.generateMipmap(N)}function S(N,A,Z,ae,le=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let se=A;if(A===t.RED&&(Z===t.FLOAT&&(se=t.R32F),Z===t.HALF_FLOAT&&(se=t.R16F),Z===t.UNSIGNED_BYTE&&(se=t.R8)),A===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(se=t.R8UI),Z===t.UNSIGNED_SHORT&&(se=t.R16UI),Z===t.UNSIGNED_INT&&(se=t.R32UI),Z===t.BYTE&&(se=t.R8I),Z===t.SHORT&&(se=t.R16I),Z===t.INT&&(se=t.R32I)),A===t.RG&&(Z===t.FLOAT&&(se=t.RG32F),Z===t.HALF_FLOAT&&(se=t.RG16F),Z===t.UNSIGNED_BYTE&&(se=t.RG8)),A===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(se=t.RG8UI),Z===t.UNSIGNED_SHORT&&(se=t.RG16UI),Z===t.UNSIGNED_INT&&(se=t.RG32UI),Z===t.BYTE&&(se=t.RG8I),Z===t.SHORT&&(se=t.RG16I),Z===t.INT&&(se=t.RG32I)),A===t.RGB&&Z===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),A===t.RGBA){const Ie=le?ou:dt.getTransfer(ae);Z===t.FLOAT&&(se=t.RGBA32F),Z===t.HALF_FLOAT&&(se=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(se=Ie===wt?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(N,A){let Z;return N?A===null||A===Zr||A===as?Z=t.DEPTH24_STENCIL8:A===Ui?Z=t.DEPTH32F_STENCIL8:A===pa&&(Z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Zr||A===as?Z=t.DEPTH_COMPONENT24:A===Ui?Z=t.DEPTH_COMPONENT32F:A===pa&&(Z=t.DEPTH_COMPONENT16),Z}function w(N,A){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==Yn&&N.minFilter!==si?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function B(N){const A=N.target;A.removeEventListener("dispose",B),b(A),A.isVideoTexture&&h.delete(A)}function I(N){const A=N.target;A.removeEventListener("dispose",I),P(A)}function b(N){const A=i.get(N);if(A.__webglInit===void 0)return;const Z=N.source,ae=p.get(Z);if(ae){const le=ae[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&O(N),Object.keys(ae).length===0&&p.delete(Z)}i.remove(N)}function O(N){const A=i.get(N);t.deleteTexture(A.__webglTexture);const Z=N.source,ae=p.get(Z);delete ae[A.__cacheKey],s.memory.textures--}function P(N){const A=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(A.__webglFramebuffer[ae]))for(let le=0;le<A.__webglFramebuffer[ae].length;le++)t.deleteFramebuffer(A.__webglFramebuffer[ae][le]);else t.deleteFramebuffer(A.__webglFramebuffer[ae]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let ae=0;ae<A.__webglFramebuffer.length;ae++)t.deleteFramebuffer(A.__webglFramebuffer[ae]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ae=0;ae<A.__webglColorRenderbuffer.length;ae++)A.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[ae]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=N.textures;for(let ae=0,le=Z.length;ae<le;ae++){const se=i.get(Z[ae]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),s.memory.textures--),i.remove(Z[ae])}i.remove(N)}let v=0;function R(){v=0}function j(){const N=v;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),v+=1,N}function V(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function J(N,A){const Z=i.get(N);if(N.isVideoTexture&&Lt(N),N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){const ae=N.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(Z,N,A);return}}n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+A)}function ne(N,A){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){We(Z,N,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+A)}function z(N,A){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){We(Z,N,A);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+A)}function Y(N,A){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){te(Z,N,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+A)}const F={[Nf]:t.REPEAT,[Hr]:t.CLAMP_TO_EDGE,[Ff]:t.MIRRORED_REPEAT},ee={[Yn]:t.NEAREST,[ES]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[si]:t.LINEAR,[cc]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},ie={[RS]:t.NEVER,[IS]:t.ALWAYS,[PS]:t.LESS,[g_]:t.LEQUAL,[LS]:t.EQUAL,[US]:t.GEQUAL,[bS]:t.GREATER,[DS]:t.NOTEQUAL};function me(N,A){if(A.type===Ui&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===si||A.magFilter===cc||A.magFilter===Ya||A.magFilter===Vr||A.minFilter===si||A.minFilter===cc||A.minFilter===Ya||A.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,F[A.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,F[A.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,F[A.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,ee[A.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,ee[A.minFilter]),A.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,ie[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Yn||A.minFilter!==Ya&&A.minFilter!==Vr||A.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ce(N,A){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",B));const ae=A.source;let le=p.get(ae);le===void 0&&(le={},p.set(ae,le));const se=V(A);if(se!==N.__cacheKey){le[se]===void 0&&(le[se]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Z=!0),le[se].usedTimes++;const Ie=le[N.__cacheKey];Ie!==void 0&&(le[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&O(A)),N.__cacheKey=se,N.__webglTexture=le[se].texture}return Z}function We(N,A,Z){let ae=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=t.TEXTURE_3D);const le=Ce(N,A),se=A.source;n.bindTexture(ae,N.__webglTexture,t.TEXTURE0+Z);const Ie=i.get(se);if(se.version!==Ie.__version||le===!0){n.activeTexture(t.TEXTURE0+Z);const ye=dt.getPrimaries(dt.workingColorSpace),Re=A.colorSpace===ir?null:dt.getPrimaries(A.colorSpace),$e=A.colorSpace===ir||ye===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let pe=T(A.image,!1,r.maxTextureSize);pe=Ve(A,pe);const Te=o.convert(A.format,A.colorSpace),it=o.convert(A.type);let Fe=S(A.internalFormat,Te,it,A.colorSpace,A.isVideoTexture);me(ae,A);let we;const Ge=A.mipmaps,Je=A.isVideoTexture!==!0,yt=Ie.__version===void 0||le===!0,G=se.dataReady,he=w(A,pe);if(A.isDepthTexture)Fe=x(A.format===ls,A.type),yt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Fe,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Fe,pe.width,pe.height,0,Te,it,null));else if(A.isDataTexture)if(Ge.length>0){Je&&yt&&n.texStorage2D(t.TEXTURE_2D,he,Fe,Ge[0].width,Ge[0].height);for(let re=0,oe=Ge.length;re<oe;re++)we=Ge[re],Je?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,we.width,we.height,Te,it,we.data):n.texImage2D(t.TEXTURE_2D,re,Fe,we.width,we.height,0,Te,it,we.data);A.generateMipmaps=!1}else Je?(yt&&n.texStorage2D(t.TEXTURE_2D,he,Fe,pe.width,pe.height),G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe.width,pe.height,Te,it,pe.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,pe.width,pe.height,0,Te,it,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Je&&yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Fe,Ge[0].width,Ge[0].height,pe.depth);for(let re=0,oe=Ge.length;re<oe;re++)if(we=Ge[re],A.format!==ai)if(Te!==null)if(Je){if(G)if(A.layerUpdates.size>0){const ge=Gm(we.width,we.height,A.format,A.type);for(const Oe of A.layerUpdates){const ot=we.data.subarray(Oe*ge/we.data.BYTES_PER_ELEMENT,(Oe+1)*ge/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Oe,we.width,we.height,1,Te,ot,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,pe.depth,Te,we.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Fe,we.width,we.height,pe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,pe.depth,Te,it,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Fe,we.width,we.height,pe.depth,0,Te,it,we.data)}else{Je&&yt&&n.texStorage2D(t.TEXTURE_2D,he,Fe,Ge[0].width,Ge[0].height);for(let re=0,oe=Ge.length;re<oe;re++)we=Ge[re],A.format!==ai?Te!==null?Je?G&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,we.width,we.height,Te,we.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,we.width,we.height,Te,it,we.data):n.texImage2D(t.TEXTURE_2D,re,Fe,we.width,we.height,0,Te,it,we.data)}else if(A.isDataArrayTexture)if(Je){if(yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Fe,pe.width,pe.height,pe.depth),G)if(A.layerUpdates.size>0){const re=Gm(pe.width,pe.height,A.format,A.type);for(const oe of A.layerUpdates){const ge=pe.data.subarray(oe*re/pe.data.BYTES_PER_ELEMENT,(oe+1)*re/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,pe.width,pe.height,1,Te,it,ge)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Te,it,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,pe.width,pe.height,pe.depth,0,Te,it,pe.data);else if(A.isData3DTexture)Je?(yt&&n.texStorage3D(t.TEXTURE_3D,he,Fe,pe.width,pe.height,pe.depth),G&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Te,it,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,pe.width,pe.height,pe.depth,0,Te,it,pe.data);else if(A.isFramebufferTexture){if(yt)if(Je)n.texStorage2D(t.TEXTURE_2D,he,Fe,pe.width,pe.height);else{let re=pe.width,oe=pe.height;for(let ge=0;ge<he;ge++)n.texImage2D(t.TEXTURE_2D,ge,Fe,re,oe,0,Te,it,null),re>>=1,oe>>=1}}else if(Ge.length>0){if(Je&&yt){const re=Ye(Ge[0]);n.texStorage2D(t.TEXTURE_2D,he,Fe,re.width,re.height)}for(let re=0,oe=Ge.length;re<oe;re++)we=Ge[re],Je?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Te,it,we):n.texImage2D(t.TEXTURE_2D,re,Fe,Te,it,we);A.generateMipmaps=!1}else if(Je){if(yt){const re=Ye(pe);n.texStorage2D(t.TEXTURE_2D,he,Fe,re.width,re.height)}G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,it,pe)}else n.texImage2D(t.TEXTURE_2D,0,Fe,Te,it,pe);_(A)&&d(ae),Ie.__version=se.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function te(N,A,Z){if(A.image.length!==6)return;const ae=Ce(N,A),le=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+Z);const se=i.get(le);if(le.version!==se.__version||ae===!0){n.activeTexture(t.TEXTURE0+Z);const Ie=dt.getPrimaries(dt.workingColorSpace),ye=A.colorSpace===ir?null:dt.getPrimaries(A.colorSpace),Re=A.colorSpace===ir||Ie===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,pe=A.image[0]&&A.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!$e&&!pe?Te[oe]=T(A.image[oe],!0,r.maxCubemapSize):Te[oe]=pe?A.image[oe].image:A.image[oe],Te[oe]=Ve(A,Te[oe]);const it=Te[0],Fe=o.convert(A.format,A.colorSpace),we=o.convert(A.type),Ge=S(A.internalFormat,Fe,we,A.colorSpace),Je=A.isVideoTexture!==!0,yt=se.__version===void 0||ae===!0,G=le.dataReady;let he=w(A,it);me(t.TEXTURE_CUBE_MAP,A);let re;if($e){Je&&yt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ge,it.width,it.height);for(let oe=0;oe<6;oe++){re=Te[oe].mipmaps;for(let ge=0;ge<re.length;ge++){const Oe=re[ge];A.format!==ai?Fe!==null?Je?G&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,Ge,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,0,0,Oe.width,Oe.height,Fe,we,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,Ge,Oe.width,Oe.height,0,Fe,we,Oe.data)}}}else{if(re=A.mipmaps,Je&&yt){re.length>0&&he++;const oe=Ye(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ge,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(pe){Je?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,Fe,we,Te[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,Te[oe].width,Te[oe].height,0,Fe,we,Te[oe].data);for(let ge=0;ge<re.length;ge++){const ot=re[ge].image[oe].image;Je?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,0,0,ot.width,ot.height,Fe,we,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,Ge,ot.width,ot.height,0,Fe,we,ot.data)}}else{Je?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe,we,Te[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,Fe,we,Te[oe]);for(let ge=0;ge<re.length;ge++){const Oe=re[ge];Je?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,0,0,Fe,we,Oe.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,Ge,Fe,we,Oe.image[oe])}}}_(A)&&d(t.TEXTURE_CUBE_MAP),se.__version=le.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ce(N,A,Z,ae,le,se){const Ie=o.convert(Z.format,Z.colorSpace),ye=o.convert(Z.type),Re=S(Z.internalFormat,Ie,ye,Z.colorSpace);if(!i.get(A).__hasExternalTextures){const pe=Math.max(1,A.width>>se),Te=Math.max(1,A.height>>se);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,se,Re,pe,Te,A.depth,0,Ie,ye,null):n.texImage2D(le,se,Re,pe,Te,0,Ie,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Ue(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,le,i.get(Z).__webglTexture,0,ft(A)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,le,i.get(Z).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(N,A,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,N),A.depthBuffer){const ae=A.depthTexture,le=ae&&ae.isDepthTexture?ae.type:null,se=x(A.stencilBuffer,le),Ie=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=ft(A);Ue(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,se,A.width,A.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,se,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,se,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,N)}else{const ae=A.textures;for(let le=0;le<ae.length;le++){const se=ae[le],Ie=o.convert(se.format,se.colorSpace),ye=o.convert(se.type),Re=S(se.internalFormat,Ie,ye,se.colorSpace),$e=ft(A);Z&&Ue(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,Re,A.width,A.height):Ue(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,Re,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Re,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);const ae=i.get(A.depthTexture).__webglTexture,le=ft(A);if(A.depthTexture.format===Ko)Ue(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(A.depthTexture.format===ls)Ue(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function je(N){const A=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ee(A.__webglFramebuffer,N)}else if(Z){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]=t.createRenderbuffer(),Se(A.__webglDepthbuffer[ae],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),Se(A.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(N,A,Z){const ae=i.get(N);A!==void 0&&ce(ae.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&je(N)}function Ze(N){const A=N.texture,Z=i.get(N),ae=i.get(A);N.addEventListener("dispose",I);const le=N.textures,se=N.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=A.version,s.memory.textures++),se){Z.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[ye]=[];for(let Re=0;Re<A.mipmaps.length;Re++)Z.__webglFramebuffer[ye][Re]=t.createFramebuffer()}else Z.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ye=0;ye<A.mipmaps.length;ye++)Z.__webglFramebuffer[ye]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let ye=0,Re=le.length;ye<Re;ye++){const $e=i.get(le[ye]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),s.memory.textures++)}if(N.samples>0&&Ue(N)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const Re=le[ye];Z.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[ye]);const $e=o.convert(Re.format,Re.colorSpace),pe=o.convert(Re.type),Te=S(Re.internalFormat,$e,pe,Re.colorSpace,N.isXRRenderTarget===!0),it=ft(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,Te,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Z.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),Se(Z.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),me(t.TEXTURE_CUBE_MAP,A);for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0)for(let Re=0;Re<A.mipmaps.length;Re++)ce(Z.__webglFramebuffer[ye][Re],N,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Re);else ce(Z.__webglFramebuffer[ye],N,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);_(A)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let ye=0,Re=le.length;ye<Re;ye++){const $e=le[ye],pe=i.get($e);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),me(t.TEXTURE_2D,$e),ce(Z.__webglFramebuffer,N,$e,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),_($e)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,ae.__webglTexture),me(ye,A),A.mipmaps&&A.mipmaps.length>0)for(let Re=0;Re<A.mipmaps.length;Re++)ce(Z.__webglFramebuffer[Re],N,A,t.COLOR_ATTACHMENT0,ye,Re);else ce(Z.__webglFramebuffer,N,A,t.COLOR_ATTACHMENT0,ye,0);_(A)&&d(ye),n.unbindTexture()}N.depthBuffer&&je(N)}function mt(N){const A=N.textures;for(let Z=0,ae=A.length;Z<ae;Z++){const le=A[Z];if(_(le)){const se=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(le).__webglTexture;n.bindTexture(se,Ie),d(se),n.unbindTexture()}}}const k=[],Qe=[];function Xe(N){if(N.samples>0){if(Ue(N)===!1){const A=N.textures,Z=N.width,ae=N.height;let le=t.COLOR_BUFFER_BIT;const se=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(N),ye=A.length>1;if(ye)for(let Re=0;Re<A.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ye){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const $e=i.get(A[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,Z,ae,0,0,Z,ae,le,t.NEAREST),u===!0&&(k.length=0,Qe.length=0,k.push(t.COLOR_ATTACHMENT0+Re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(k.push(se),Qe.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,k))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Re=0;Re<A.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const $e=i.get(A[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const A=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function ft(N){return Math.min(r.maxSamples,N.samples)}function Ue(N){const A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Lt(N){const A=s.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function Ve(N,A){const Z=N.colorSpace,ae=N.format,le=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Tr&&Z!==ir&&(dt.getTransfer(Z)===wt?(ae!==ai||le!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=ne,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=qe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ue}function kw(t,e){function n(i,r=ir){let o;const s=dt.getTransfer(r);if(i===Hi)return t.UNSIGNED_BYTE;if(i===ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===l_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===s_)return t.BYTE;if(i===a_)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===sh)return t.INT;if(i===Zr)return t.UNSIGNED_INT;if(i===Ui)return t.FLOAT;if(i===xa)return t.HALF_FLOAT;if(i===u_)return t.ALPHA;if(i===c_)return t.RGB;if(i===ai)return t.RGBA;if(i===f_)return t.LUMINANCE;if(i===d_)return t.LUMINANCE_ALPHA;if(i===Ko)return t.DEPTH_COMPONENT;if(i===ls)return t.DEPTH_STENCIL;if(i===h_)return t.RED;if(i===uh)return t.RED_INTEGER;if(i===p_)return t.RG;if(i===ch)return t.RG_INTEGER;if(i===fh)return t.RGBA_INTEGER;if(i===Rl||i===Pl||i===Ll||i===bl)if(s===wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Rl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Rl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ll)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Of||i===kf||i===Bf||i===zf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Of)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hf||i===Vf||i===Gf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Hf||i===Vf)return s===wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Gf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wf||i===Xf||i===jf||i===Yf||i===$f||i===qf||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd||i===id)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Wf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$f)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jf)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ed)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===td)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nd)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===id)return s===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===rd||i===od)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Dl)return s===wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===od)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===m_||i===sd||i===ad||i===ld)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Dl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===sd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ad)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ld)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Bw extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zw={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const l=this._targetRay,u=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const T of e.hand.values()){const _=n.getJointPose(T,i),d=this._getHandJoint(c,T);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=h.position.distanceTo(m.position),y=.02,E=.005;c.inputState.pinching&&p>y+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=y-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(zw)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ml;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Pn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new xr({vertexShader:Hw,fragmentShader:Vw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new Pu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ww extends hs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,l="local-floor",u=1,c=null,h=null,m=null,p=null,y=null,E=null;const T=new Gw,_=n.getContextAttributes();let d=null,S=null;const x=[],w=[],B=new ht;let I=null;const b=new Xn;b.layers.enable(1),b.viewport=new qt;const O=new Xn;O.layers.enable(2),O.viewport=new qt;const P=[b,O],v=new Bw;v.layers.enable(1),v.layers.enable(2);let R=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=x[te];return ce===void 0&&(ce=new Oc,x[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=x[te];return ce===void 0&&(ce=new Oc,x[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=x[te];return ce===void 0&&(ce=new Oc,x[te]=ce),ce.getHandSpace()};function V(te){const ce=w.indexOf(te.inputSource);if(ce===-1)return;const Se=x[ce];Se!==void 0&&(Se.update(te.inputSource,te.frame,c||s),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ne);for(let te=0;te<x.length;te++){const ce=w[te];ce!==null&&(w[te]=null,x[te].disconnect(ce))}R=null,j=null,T.reset(),e.setRenderTarget(d),y=null,p=null,m=null,r=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),S=new Qr(y.framebufferWidth,y.framebufferHeight,{format:ai,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ce=null,Se=null,Ee=null;_.depth&&(Ee=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=_.stencil?ls:Ko,Se=_.stencil?as:Zr);const je={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:o};m=new XRWebGLBinding(r,n),p=m.createProjectionLayer(je),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new Qr(p.textureWidth,p.textureHeight,{format:ai,type:Hi,depthTexture:new P_(p.textureWidth,p.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(u),c=null,s=await r.requestReferenceSpace(l),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ne(te){for(let ce=0;ce<te.removed.length;ce++){const Se=te.removed[ce],Ee=w.indexOf(Se);Ee>=0&&(w[Ee]=null,x[Ee].disconnect(Se))}for(let ce=0;ce<te.added.length;ce++){const Se=te.added[ce];let Ee=w.indexOf(Se);if(Ee===-1){for(let qe=0;qe<x.length;qe++)if(qe>=w.length){w.push(Se),Ee=qe;break}else if(w[qe]===null){w[qe]=Se,Ee=qe;break}if(Ee===-1)break}const je=x[Ee];je&&je.connect(Se)}}const z=new Q,Y=new Q;function F(te,ce,Se){z.setFromMatrixPosition(ce.matrixWorld),Y.setFromMatrixPosition(Se.matrixWorld);const Ee=z.distanceTo(Y),je=ce.projectionMatrix.elements,qe=Se.projectionMatrix.elements,Ze=je[14]/(je[10]-1),mt=je[14]/(je[10]+1),k=(je[9]+1)/je[5],Qe=(je[9]-1)/je[5],Xe=(je[8]-1)/je[0],ft=(qe[8]+1)/qe[0],Ue=Ze*Xe,Lt=Ze*ft,Ve=Ee/(-Xe+ft),Ye=Ve*-Xe;ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ye),te.translateZ(Ve),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const N=Ze+Ve,A=mt+Ve,Z=Ue-Ye,ae=Lt+(Ee-Ye),le=k*mt/A*N,se=Qe*mt/A*N;te.projectionMatrix.makePerspective(Z,ae,le,se,N,A),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ee(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;T.texture!==null&&(te.near=T.depthNear,te.far=T.depthFar),v.near=O.near=b.near=te.near,v.far=O.far=b.far=te.far,(R!==v.near||j!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,j=v.far,b.near=R,b.far=j,O.near=R,O.far=j,b.updateProjectionMatrix(),O.updateProjectionMatrix(),te.updateProjectionMatrix());const ce=te.parent,Se=v.cameras;ee(v,ce);for(let Ee=0;Ee<Se.length;Ee++)ee(Se[Ee],ce);Se.length===2?F(v,b,O):v.projectionMatrix.copy(b.projectionMatrix),ie(te,v,ce)};function ie(te,ce,Se){Se===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ud*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&y===null))return u},this.setFoveation=function(te){u=te,p!==null&&(p.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(v)};let me=null;function Ce(te,ce){if(h=ce.getViewerPose(c||s),E=ce,h!==null){const Se=h.views;y!==null&&(e.setRenderTargetFramebuffer(S,y.framebuffer),e.setRenderTarget(S));let Ee=!1;Se.length!==v.cameras.length&&(v.cameras.length=0,Ee=!0);for(let qe=0;qe<Se.length;qe++){const Ze=Se[qe];let mt=null;if(y!==null)mt=y.getViewport(Ze);else{const Qe=m.getViewSubImage(p,Ze);mt=Qe.viewport,qe===0&&(e.setRenderTargetTextures(S,Qe.colorTexture,p.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(S))}let k=P[qe];k===void 0&&(k=new Xn,k.layers.enable(qe),k.viewport=new qt,P[qe]=k),k.matrix.fromArray(Ze.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Ze.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(mt.x,mt.y,mt.width,mt.height),qe===0&&(v.matrix.copy(k.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ee===!0&&v.cameras.push(k)}const je=r.enabledFeatures;if(je&&je.includes("depth-sensing")){const qe=m.getDepthInformation(Se[0]);qe&&qe.isValid&&qe.texture&&T.init(e,qe,r.renderState)}}for(let Se=0;Se<x.length;Se++){const Ee=w[Se],je=x[Se];Ee!==null&&je!==void 0&&je.update(Ee,ce,c||s)}me&&me(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),E=null}const We=new R_;We.setAnimationLoop(Ce),this.setAnimationLoop=function(te){me=te},this.dispose=function(){}}}const br=new Vi,Xw=new Gt;function jw(t,e){function n(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,T_(t)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,S,x,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(_,d):d.isMeshToonMaterial?(o(_,d),m(_,d)):d.isMeshPhongMaterial?(o(_,d),h(_,d)):d.isMeshStandardMaterial?(o(_,d),p(_,d),d.isMeshPhysicalMaterial&&y(_,d,w)):d.isMeshMatcapMaterial?(o(_,d),E(_,d)):d.isMeshDepthMaterial?o(_,d):d.isMeshDistanceMaterial?(o(_,d),T(_,d)):d.isMeshNormalMaterial?o(_,d):d.isLineBasicMaterial?(s(_,d),d.isLineDashedMaterial&&l(_,d)):d.isPointsMaterial?u(_,d,S,x):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,n(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===Rn&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,n(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===Rn&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,n(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,n(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const S=e.get(d),x=S.envMap,w=S.envMapRotation;x&&(_.envMap.value=x,br.copy(w),br.x*=-1,br.y*=-1,br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),_.envMapRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(br)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,_.aoMapTransform))}function s(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform))}function l(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function u(_,d,S,x){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*S,_.scale.value=x*.5,d.map&&(_.map.value=d.map,n(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function h(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function m(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function p(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function y(_,d,S){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rn&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,d){d.matcap&&(_.matcap.value=d.matcap)}function T(_,d){const S=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yw(t,e,n,i){let r={},o={},s=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,x){const w=x.program;i.uniformBlockBinding(S,w)}function c(S,x){let w=r[S.id];w===void 0&&(E(S),w=h(S),r[S.id]=w,S.addEventListener("dispose",_));const B=x.program;i.updateUBOMapping(S,B);const I=e.render.frame;o[S.id]!==I&&(p(S),o[S.id]=I)}function h(S){const x=m();S.__bindingPointIndex=x;const w=t.createBuffer(),B=S.__size,I=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,B,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,w),w}function m(){for(let S=0;S<l;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const x=r[S.id],w=S.uniforms,B=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let I=0,b=w.length;I<b;I++){const O=Array.isArray(w[I])?w[I]:[w[I]];for(let P=0,v=O.length;P<v;P++){const R=O[P];if(y(R,I,P,B)===!0){const j=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let J=0;for(let ne=0;ne<V.length;ne++){const z=V[ne],Y=T(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,j+J,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,J),J+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function y(S,x,w,B){const I=S.value,b=x+"_"+w;if(B[b]===void 0)return typeof I=="number"||typeof I=="boolean"?B[b]=I:B[b]=I.clone(),!0;{const O=B[b];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return B[b]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function E(S){const x=S.uniforms;let w=0;const B=16;for(let b=0,O=x.length;b<O;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,R=P.length;v<R;v++){const j=P[v],V=Array.isArray(j.value)?j.value:[j.value];for(let J=0,ne=V.length;J<ne;J++){const z=V[J],Y=T(z),F=w%B,ee=F%Y.boundary,ie=F+ee;w+=ee,ie!==0&&B-ie<Y.storage&&(w+=B-ie),j.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=Y.storage}}}const I=w%B;return I>0&&(w+=B-I),S.__size=w,S.__cache={},this}function T(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function _(S){const x=S.target;x.removeEventListener("dispose",_);const w=s.indexOf(x.__bindingPointIndex);s.splice(w,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function d(){for(const S in r)t.deleteBuffer(r[S]);s=[],r={},o={}}return{bind:u,update:c,dispose:d}}class $w{constructor(e={}){const{canvas:n=FS(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const y=new Uint32Array(4),E=new Int32Array(4);let T=null,_=null;const d=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=gr,this.toneMappingExposure=1;const x=this;let w=!1,B=0,I=0,b=null,O=-1,P=null;const v=new qt,R=new qt;let j=null;const V=new vt(0);let J=0,ne=n.width,z=n.height,Y=1,F=null,ee=null;const ie=new qt(0,0,ne,z),me=new qt(0,0,ne,z);let Ce=!1;const We=new C_;let te=!1,ce=!1;const Se=new Gt,Ee=new Q,je=new qt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function mt(){return b===null?Y:1}let k=i;function Qe(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oh}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",ge,!1),k===null){const W="webgl2";if(k=Qe(W,C),k===null)throw Qe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Xe,ft,Ue,Lt,Ve,Ye,N,A,Z,ae,le,se,Ie,ye,Re,$e,pe,Te,it,Fe,we,Ge,Je,yt;function G(){Xe=new eT(k),Xe.init(),Ge=new kw(k,Xe),ft=new Y1(k,Xe,e,Ge),Ue=new Nw(k),Lt=new iT(k),Ve=new Sw,Ye=new Ow(k,Xe,Ue,Ve,ft,Ge,Lt),N=new q1(x),A=new J1(x),Z=new uM(k),Je=new X1(k,Z),ae=new tT(k,Z,Lt,Je),le=new oT(k,ae,Z,Lt),it=new rT(k,ft,Ye),$e=new $1(Ve),se=new xw(x,N,A,Xe,ft,Je,$e),Ie=new jw(x,Ve),ye=new Ew,Re=new Pw(Xe),Te=new W1(x,N,A,Ue,le,p,u),pe=new Iw(x,le,ft),yt=new Yw(k,Lt,ft,Ue),Fe=new j1(k,Xe,Lt),we=new nT(k,Xe,Lt),Lt.programs=se.programs,x.capabilities=ft,x.extensions=Xe,x.properties=Ve,x.renderLists=ye,x.shadowMap=pe,x.state=Ue,x.info=Lt}G();const he=new Ww(x,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(ne,z,!1))},this.getSize=function(C){return C.set(ne,z)},this.setSize=function(C,W,$=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,z=W,n.width=Math.floor(C*Y),n.height=Math.floor(W*Y),$===!0&&(n.style.width=C+"px",n.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ne*Y,z*Y).floor()},this.setDrawingBufferSize=function(C,W,$){ne=C,z=W,Y=$,n.width=Math.floor(C*$),n.height=Math.floor(W*$),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(v)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,W,$,q){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,W,$,q),Ue.viewport(v.copy(ie).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,W,$,q){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,W,$,q),Ue.scissor(R.copy(me).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(C){Ue.setScissorTest(Ce=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(C=!0,W=!0,$=!0){let q=0;if(C){let X=!1;if(b!==null){const fe=b.texture.format;X=fe===fh||fe===ch||fe===uh}if(X){const fe=b.texture.type,ve=fe===Hi||fe===Zr||fe===pa||fe===as||fe===ah||fe===lh,Ae=Te.getClearColor(),Le=Te.getClearAlpha(),ke=Ae.r,Be=Ae.g,Ne=Ae.b;ve?(y[0]=ke,y[1]=Be,y[2]=Ne,y[3]=Le,k.clearBufferuiv(k.COLOR,0,y)):(E[0]=ke,E[1]=Be,E[2]=Ne,E[3]=Le,k.clearBufferiv(k.COLOR,0,E))}else q|=k.COLOR_BUFFER_BIT}W&&(q|=k.DEPTH_BUFFER_BIT),$&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),Re.dispose(),Ve.dispose(),N.dispose(),A.dispose(),le.dispose(),Je.dispose(),yt.dispose(),se.dispose(),he.dispose(),he.removeEventListener("sessionstart",cn),he.removeEventListener("sessionend",Ta),yn.stop()};function re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=Lt.autoReset,W=pe.enabled,$=pe.autoUpdate,q=pe.needsUpdate,X=pe.type;G(),Lt.autoReset=C,pe.enabled=W,pe.autoUpdate=$,pe.needsUpdate=q,pe.type=X}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Oe(C){const W=C.target;W.removeEventListener("dispose",Oe),ot(W)}function ot(C){gt(C),Ve.remove(C)}function gt(C){const W=Ve.get(C).programs;W!==void 0&&(W.forEach(function($){se.releaseProgram($)}),C.isShaderMaterial&&se.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,$,q,X,fe){W===null&&(W=qe);const ve=X.isMesh&&X.matrixWorld.determinant()<0,Ae=io(C,W,$,q,X);Ue.setMaterial(q,ve);let Le=$.index,ke=1;if(q.wireframe===!0){if(Le=ae.getWireframeAttribute($),Le===void 0)return;ke=2}const Be=$.drawRange,Ne=$.attributes.position;let Ke=Be.start*ke,Mt=(Be.start+Be.count)*ke;fe!==null&&(Ke=Math.max(Ke,fe.start*ke),Mt=Math.min(Mt,(fe.start+fe.count)*ke)),Le!==null?(Ke=Math.max(Ke,0),Mt=Math.min(Mt,Le.count)):Ne!=null&&(Ke=Math.max(Ke,0),Mt=Math.min(Mt,Ne.count));const _t=Mt-Ke;if(_t<0||_t===1/0)return;Je.setup(X,q,Ae,$,Le);let Rt,st=Fe;if(Le!==null&&(Rt=Z.get(Le),st=we,st.setIndex(Rt)),X.isMesh)q.wireframe===!0?(Ue.setLineWidth(q.wireframeLinewidth*mt()),st.setMode(k.LINES)):st.setMode(k.TRIANGLES);else if(X.isLine){let be=q.linewidth;be===void 0&&(be=1),Ue.setLineWidth(be*mt()),X.isLineSegments?st.setMode(k.LINES):X.isLineLoop?st.setMode(k.LINE_LOOP):st.setMode(k.LINE_STRIP)}else X.isPoints?st.setMode(k.POINTS):X.isSprite&&st.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)st.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))st.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const be=X._multiDrawStarts,kt=X._multiDrawCounts,at=X._multiDrawCount,Ln=Le?Z.get(Le).bytesPerElement:1,Wi=Ve.get(q).currentProgram.getUniforms();for(let nn=0;nn<at;nn++)Wi.setValue(k,"_gl_DrawID",nn),st.render(be[nn]/Ln,kt[nn])}else if(X.isInstancedMesh)st.renderInstances(Ke,_t,X.count);else if($.isInstancedBufferGeometry){const be=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kt=Math.min($.instanceCount,be);st.renderInstances(Ke,_t,kt)}else st.render(Ke,_t)};function Ft(C,W,$){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,fn(C,W,$),C.side=yr,C.needsUpdate=!0,fn(C,W,$),C.side=Li):fn(C,W,$)}this.compile=function(C,W,$=null){$===null&&($=C),_=Re.get($),_.init(W),S.push(_),$.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),C!==$&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const q=new Set;return C.traverse(function(X){const fe=X.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const Ae=fe[ve];Ft(Ae,$,X),q.add(Ae)}else Ft(fe,$,X),q.add(fe)}),S.pop(),_=null,q},this.compileAsync=function(C,W,$=null){const q=this.compile(C,W,$);return new Promise(X=>{function fe(){if(q.forEach(function(ve){Ve.get(ve).currentProgram.isReady()&&q.delete(ve)}),q.size===0){X(C);return}setTimeout(fe,10)}Xe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let lt=null;function _n(C){lt&&lt(C)}function cn(){yn.stop()}function Ta(){yn.start()}const yn=new R_;yn.setAnimationLoop(_n),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(C){lt=C,he.setAnimationLoop(C),C===null?yn.stop():yn.start()},he.addEventListener("sessionstart",cn),he.addEventListener("sessionend",Ta),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(W),W=he.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,W,b),_=Re.get(C,S.length),_.init(W),S.push(_),Se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),We.setFromProjectionMatrix(Se),ce=this.localClippingEnabled,te=$e.init(this.clippingPlanes,ce),T=ye.get(C,d.length),T.init(),d.push(T),he.enabled===!0&&he.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&gs(fe,W,-1/0,x.sortObjects)}gs(C,W,0,x.sortObjects),T.finish(),x.sortObjects===!0&&T.sort(F,ee),Ze=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ze&&Te.addToRenderList(T,C),this.info.render.frame++,te===!0&&$e.beginShadows();const $=_.state.shadowsArray;pe.render($,C,W),te===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=T.opaque,X=T.transmissive;if(_.setupLights(),W.isArrayCamera){const fe=W.cameras;if(X.length>0)for(let ve=0,Ae=fe.length;ve<Ae;ve++){const Le=fe[ve];fi(q,X,C,Le)}Ze&&Te.render(C);for(let ve=0,Ae=fe.length;ve<Ae;ve++){const Le=fe[ve];zn(T,C,Le,Le.viewport)}}else X.length>0&&fi(q,X,C,W),Ze&&Te.render(C),zn(T,C,W);b!==null&&(Ye.updateMultisampleRenderTarget(b),Ye.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(x,C,W),Je.resetDefaultState(),O=-1,P=null,S.pop(),S.length>0?(_=S[S.length-1],te===!0&&$e.setGlobalState(x.clippingPlanes,_.state.camera)):_=null,d.pop(),d.length>0?T=d[d.length-1]:T=null};function gs(C,W,$,q){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||We.intersectsSprite(C)){q&&je.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const ve=le.update(C),Ae=C.material;Ae.visible&&T.push(C,ve,Ae,$,je.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||We.intersectsObject(C))){const ve=le.update(C),Ae=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),je.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),je.copy(ve.boundingSphere.center)),je.applyMatrix4(C.matrixWorld).applyMatrix4(Se)),Array.isArray(Ae)){const Le=ve.groups;for(let ke=0,Be=Le.length;ke<Be;ke++){const Ne=Le[ke],Ke=Ae[Ne.materialIndex];Ke&&Ke.visible&&T.push(C,ve,Ke,$,je.z,Ne)}}else Ae.visible&&T.push(C,ve,Ae,$,je.z,null)}}const fe=C.children;for(let ve=0,Ae=fe.length;ve<Ae;ve++)gs(fe[ve],W,$,q)}function zn(C,W,$,q){const X=C.opaque,fe=C.transmissive,ve=C.transparent;_.setupLightsView($),te===!0&&$e.setGlobalState(x.clippingPlanes,$),q&&Ue.viewport(v.copy(q)),X.length>0&&wr(X,W,$),fe.length>0&&wr(fe,W,$),ve.length>0&&wr(ve,W,$),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function fi(C,W,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[q.id]===void 0&&(_.state.transmissionRenderTarget[q.id]=new Qr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?xa:Hi,minFilter:Vr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const fe=_.state.transmissionRenderTarget[q.id],ve=q.viewport||v;fe.setSize(ve.z,ve.w);const Ae=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(V),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Ze&&Te.render($);const Le=x.toneMapping;x.toneMapping=gr;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),te===!0&&$e.setGlobalState(x.clippingPlanes,q),wr(C,$,q),Ye.updateMultisampleRenderTarget(fe),Ye.updateRenderTargetMipmap(fe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,Ke=W.length;Ne<Ke;Ne++){const Mt=W[Ne],_t=Mt.object,Rt=Mt.geometry,st=Mt.material,be=Mt.group;if(st.side===Li&&_t.layers.test(q.layers)){const kt=st.side;st.side=Rn,st.needsUpdate=!0,Ct(_t,$,q,Rt,st,be),st.side=kt,st.needsUpdate=!0,Be=!0}}Be===!0&&(Ye.updateMultisampleRenderTarget(fe),Ye.updateRenderTargetMipmap(fe))}x.setRenderTarget(Ae),x.setClearColor(V,J),ke!==void 0&&(q.viewport=ke),x.toneMapping=Le}function wr(C,W,$){const q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,fe=C.length;X<fe;X++){const ve=C[X],Ae=ve.object,Le=ve.geometry,ke=q===null?ve.material:q,Be=ve.group;Ae.layers.test($.layers)&&Ct(Ae,W,$,Le,ke,Be)}}function Ct(C,W,$,q,X,fe){C.onBeforeRender(x,W,$,q,X,fe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.transparent===!0&&X.side===Li&&X.forceSinglePass===!1?(X.side=Rn,X.needsUpdate=!0,x.renderBufferDirect($,W,q,X,C,fe),X.side=yr,X.needsUpdate=!0,x.renderBufferDirect($,W,q,X,C,fe),X.side=Li):x.renderBufferDirect($,W,q,X,C,fe),C.onAfterRender(x,W,$,q,X,fe)}function fn(C,W,$){W.isScene!==!0&&(W=qe);const q=Ve.get(C),X=_.state.lights,fe=_.state.shadowsArray,ve=X.state.version,Ae=se.getParameters(C,X.state,fe,W,$),Le=se.getProgramCacheKey(Ae);let ke=q.programs;q.environment=C.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(C.isMeshStandardMaterial?A:N).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",Oe),ke=new Map,q.programs=ke);let Be=ke.get(Le);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===ve)return wa(C,Ae),Be}else Ae.uniforms=se.getUniforms(C),C.onBeforeCompile(Ae,x),Be=se.acquireProgram(Ae,Le),ke.set(Le,Be),q.uniforms=Ae.uniforms;const Ne=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=$e.uniform),wa(C,Ae),q.needsLights=ro(C),q.lightsStateVersion=ve,q.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function no(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Ul.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function wa(C,W){const $=Ve.get(C);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function io(C,W,$,q,X){W.isScene!==!0&&(W=qe),Ye.resetTextureUnits();const fe=W.fog,ve=q.isMeshStandardMaterial?W.environment:null,Ae=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Tr,Le=(q.isMeshStandardMaterial?A:N).get(q.envMap||ve),ke=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Be=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!$.morphAttributes.position,Ke=!!$.morphAttributes.normal,Mt=!!$.morphAttributes.color;let _t=gr;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,st=Rt!==void 0?Rt.length:0,be=Ve.get(q),kt=_.state.lights;if(te===!0&&(ce===!0||C!==P)){const dn=C===P&&q.id===O;$e.setState(q,C,dn)}let at=!1;q.version===be.__version?(be.needsLights&&be.lightsStateVersion!==kt.state.version||be.outputColorSpace!==Ae||X.isBatchedMesh&&be.batching===!1||!X.isBatchedMesh&&be.batching===!0||X.isBatchedMesh&&be.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&be.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&be.instancing===!1||!X.isInstancedMesh&&be.instancing===!0||X.isSkinnedMesh&&be.skinning===!1||!X.isSkinnedMesh&&be.skinning===!0||X.isInstancedMesh&&be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&be.instancingMorph===!1&&X.morphTexture!==null||be.envMap!==Le||q.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==$e.numPlanes||be.numIntersection!==$e.numIntersection)||be.vertexAlphas!==ke||be.vertexTangents!==Be||be.morphTargets!==Ne||be.morphNormals!==Ke||be.morphColors!==Mt||be.toneMapping!==_t||be.morphTargetsCount!==st)&&(at=!0):(at=!0,be.__version=q.version);let Ln=be.currentProgram;at===!0&&(Ln=fn(q,W,X));let Wi=!1,nn=!1,oo=!1;const bt=Ln.getUniforms(),Zn=be.uniforms;if(Ue.useProgram(Ln.program)&&(Wi=!0,nn=!0,oo=!0),q.id!==O&&(O=q.id,nn=!0),Wi||P!==C){bt.setValue(k,"projectionMatrix",C.projectionMatrix),bt.setValue(k,"viewMatrix",C.matrixWorldInverse);const dn=bt.map.cameraPosition;dn!==void 0&&dn.setValue(k,Ee.setFromMatrixPosition(C.matrixWorld)),ft.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,nn=!0,oo=!0)}if(X.isSkinnedMesh){bt.setOptional(k,X,"bindMatrix"),bt.setOptional(k,X,"bindMatrixInverse");const dn=X.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),bt.setValue(k,"boneTexture",dn.boneTexture,Ye))}X.isBatchedMesh&&(bt.setOptional(k,X,"batchingTexture"),bt.setValue(k,"batchingTexture",X._matricesTexture,Ye),bt.setOptional(k,X,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",X._indirectTexture,Ye),bt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",X._colorsTexture,Ye));const jt=$.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&it.update(X,$,Ln),(nn||be.receiveShadow!==X.receiveShadow)&&(be.receiveShadow=X.receiveShadow,bt.setValue(k,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Zn.envMap.value=Le,Zn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&W.environment!==null&&(Zn.envMapIntensity.value=W.environmentIntensity),nn&&(bt.setValue(k,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&vs(Zn,oo),fe&&q.fog===!0&&Ie.refreshFogUniforms(Zn,fe),Ie.refreshMaterialUniforms(Zn,q,Y,z,_.state.transmissionRenderTarget[C.id]),Ul.upload(k,no(be),Zn,Ye)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ul.upload(k,no(be),Zn,Ye),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(k,"center",X.center),bt.setValue(k,"modelViewMatrix",X.modelViewMatrix),bt.setValue(k,"normalMatrix",X.normalMatrix),bt.setValue(k,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const dn=q.uniformsGroups;for(let so=0,ao=dn.length;so<ao;so++){const _s=dn[so];yt.update(_s,Ln),yt.bind(_s,Ln)}}return Ln}function vs(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function ro(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,W,$){Ve.get(C.texture).__webglTexture=W,Ve.get(C.depthTexture).__webglTexture=$;const q=Ve.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const $=Ve.get(C);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,$=0){b=C,B=W,I=$;let q=!0,X=null,fe=!1,ve=!1;if(C){const Le=Ve.get(C);Le.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(k.FRAMEBUFFER,null),q=!1):Le.__webglFramebuffer===void 0?Ye.setupRenderTarget(C):Le.__hasExternalTextures&&Ye.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const Be=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?X=Be[W][$]:X=Be[W],fe=!0):C.samples>0&&Ye.useMultisampledRTT(C)===!1?X=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[$]:X=Be,v.copy(C.viewport),R.copy(C.scissor),j=C.scissorTest}else v.copy(ie).multiplyScalar(Y).floor(),R.copy(me).multiplyScalar(Y).floor(),j=Ce;if(Ue.bindFramebuffer(k.FRAMEBUFFER,X)&&q&&Ue.drawBuffers(C,X),Ue.viewport(v),Ue.scissor(R),Ue.setScissorTest(j),fe){const Le=Ve.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,$)}else if(ve){const Le=Ve.get(C.texture),ke=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Le.__webglTexture,$||0,ke)}O=-1},this.readRenderTargetPixels=function(C,W,$,q,X,fe,ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){Ue.bindFramebuffer(k.FRAMEBUFFER,Ae);try{const Le=C.texture,ke=Le.format,Be=Le.type;if(!ft.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-q&&$>=0&&$<=C.height-X&&k.readPixels(W,$,q,X,Ge.convert(ke),Ge.convert(Be),fe)}finally{const Le=b!==null?Ve.get(b).__webglFramebuffer:null;Ue.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(C,W,$,q,X,fe,ve){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){Ue.bindFramebuffer(k.FRAMEBUFFER,Ae);try{const Le=C.texture,ke=Le.format,Be=Le.type;if(!ft.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-q&&$>=0&&$<=C.height-X){const Ne=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ne),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),k.readPixels(W,$,q,X,Ge.convert(ke),Ge.convert(Be),0),k.flush();const Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await OS(k,Ke,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,Ne),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe)}finally{k.deleteBuffer(Ne),k.deleteSync(Ke)}return fe}}finally{const Le=b!==null?Ve.get(b).__webglFramebuffer:null;Ue.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(C,W=null,$=0){C.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-$),X=Math.floor(C.image.width*q),fe=Math.floor(C.image.height*q),ve=W!==null?W.x:0,Ae=W!==null?W.y:0;Ye.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,ve,Ae,X,fe),Ue.unbindTexture()},this.copyTextureToTexture=function(C,W,$=null,q=null,X=0){C.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,$=null);let fe,ve,Ae,Le,ke,Be;$!==null?(fe=$.max.x-$.min.x,ve=$.max.y-$.min.y,Ae=$.min.x,Le=$.min.y):(fe=C.image.width,ve=C.image.height,Ae=0,Le=0),q!==null?(ke=q.x,Be=q.y):(ke=0,Be=0);const Ne=Ge.convert(W.format),Ke=Ge.convert(W.type);Ye.setTexture2D(W,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Mt=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Rt=k.getParameter(k.UNPACK_SKIP_PIXELS),st=k.getParameter(k.UNPACK_SKIP_ROWS),be=k.getParameter(k.UNPACK_SKIP_IMAGES),kt=C.isCompressedTexture?C.mipmaps[X]:C.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,kt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,kt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ae),k.pixelStorei(k.UNPACK_SKIP_ROWS,Le),C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,ke,Be,fe,ve,Ne,Ke,kt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,ke,Be,kt.width,kt.height,Ne,kt.data):k.texSubImage2D(k.TEXTURE_2D,X,ke,Be,fe,ve,Ne,Ke,kt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Rt),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,be),X===0&&W.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(C,W,$=null,q=null,X=0){C.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0);let fe,ve,Ae,Le,ke,Be,Ne,Ke,Mt;const _t=C.isCompressedTexture?C.mipmaps[X]:C.image;$!==null?(fe=$.max.x-$.min.x,ve=$.max.y-$.min.y,Ae=$.max.z-$.min.z,Le=$.min.x,ke=$.min.y,Be=$.min.z):(fe=_t.width,ve=_t.height,Ae=_t.depth,Le=0,ke=0,Be=0),q!==null?(Ne=q.x,Ke=q.y,Mt=q.z):(Ne=0,Ke=0,Mt=0);const Rt=Ge.convert(W.format),st=Ge.convert(W.type);let be;if(W.isData3DTexture)Ye.setTexture3D(W,0),be=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Ye.setTexture2DArray(W,0),be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const kt=k.getParameter(k.UNPACK_ROW_LENGTH),at=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ln=k.getParameter(k.UNPACK_SKIP_PIXELS),Wi=k.getParameter(k.UNPACK_SKIP_ROWS),nn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Le),k.pixelStorei(k.UNPACK_SKIP_ROWS,ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Be),C.isDataTexture||C.isData3DTexture?k.texSubImage3D(be,X,Ne,Ke,Mt,fe,ve,Ae,Rt,st,_t.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(be,X,Ne,Ke,Mt,fe,ve,Ae,Rt,_t.data):k.texSubImage3D(be,X,Ne,Ke,Mt,fe,ve,Ae,Rt,st,_t),k.pixelStorei(k.UNPACK_ROW_LENGTH,kt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ln),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,nn),X===0&&W.generateMipmaps&&k.generateMipmap(be),Ue.unbindTexture()},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&Ye.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ye.setTextureCube(C,0):C.isData3DTexture?Ye.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ye.setTexture2DArray(C,0):Ye.setTexture2D(C,0),Ue.unbindTexture()},this.resetState=function(){B=0,I=0,b=null,Ue.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===dh?"display-p3":"srgb",n.unpackColorSpace=dt.workingColorSpace===Cu?"display-p3":"srgb"}}class qw extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);const Kw=({rotation:t})=>{const e=sr.useRef(null);return sr.useEffect(()=>{const n=new qw,i=new Xn(75,e.current.clientWidth/e.current.clientHeight,.1,1e3),r=new $w;r.setSize(e.current.clientWidth,e.current.clientHeight),e.current.appendChild(r.domElement);const o=new ps,s=new ph({color:65280}),l=new _i(o,s);n.add(l),i.position.z=5;const u=()=>{requestAnimationFrame(u),l.rotation.x=t.x,l.rotation.y=t.y,r.render(n,i)};return u(),()=>{e.current.removeChild(r.domElement)}},[t]),Ni.jsx("div",{ref:e,style:{width:"100%",height:"400px"}})},Zw=()=>{const[t,e]=sr.useState({x:0,y:0}),n=sr.useRef(null);return sr.useEffect(()=>{const i=new kx.Hands({locateFile:o=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${o}`});i.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),i.onResults(o=>{if(o.multiHandLandmarks.length>0){const s=o.multiHandLandmarks[0],l=(s[0].x-.5)*2*Math.PI,u=(s[0].y-.5)*2*Math.PI;e({x:u,y:l})}}),new Bx.Camera(n.current,{onFrame:async()=>{await i.send({image:n.current})},width:640,height:480}).start()},[]),Ni.jsxs("div",{children:[Ni.jsx("video",{ref:n,style:{display:"none"}}),Ni.jsx(Kw,{rotation:t})]})};function Qw(){return Ni.jsxs("div",{className:"App",children:[Ni.jsx("h1",{children:"Rotate Cube with Your Hand"}),Ni.jsx(Zw,{})]})}n_(document.getElementById("root")).render(Ni.jsx(sr.StrictMode,{children:Ni.jsx(Qw,{})}));
