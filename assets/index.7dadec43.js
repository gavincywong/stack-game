(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function dv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bo={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),fv=Symbol.for("react.portal"),hv=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),mv=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),_v=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),yv=Symbol.for("react.memo"),wv=Symbol.for("react.lazy"),yf=Symbol.iterator;function Sv(n){return n===null||typeof n!="object"?null:(n=yf&&n[yf]||n["@@iterator"],typeof n=="function"?n:null)}var hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pm=Object.assign,mm={};function Rs(n,e,t){this.props=n,this.context=e,this.refs=mm,this.updater=t||hm}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Rs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function gm(){}gm.prototype=Rs.prototype;function fd(n,e,t){this.props=n,this.context=e,this.refs=mm,this.updater=t||hm}var hd=fd.prototype=new gm;hd.constructor=fd;pm(hd,Rs.prototype);hd.isPureReactComponent=!0;var wf=Array.isArray,vm=Object.prototype.hasOwnProperty,pd={current:null},_m={key:!0,ref:!0,__self:!0,__source:!0};function xm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vm.call(e,i)&&!_m.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oo,type:n,key:s,ref:o,props:r,_owner:pd.current}}function Mv(n,e){return{$$typeof:Oo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function md(n){return typeof n=="object"&&n!==null&&n.$$typeof===Oo}function Ev(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Sf=/\/+/g;function ec(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ev(""+n.key):e.toString(36)}function Ua(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Oo:case fv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+ec(o,0):i,wf(r)?(t="",n!=null&&(t=n.replace(Sf,"$&/")+"/"),Ua(r,e,t,"",function(c){return c})):r!=null&&(md(r)&&(r=Mv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",wf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+ec(s,a);o+=Ua(s,e,t,l,r)}else if(l=Sv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+ec(s,a++),o+=Ua(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ko(n,e,t){if(n==null)return n;var i=[],r=0;return Ua(n,i,"","",function(s){return e.call(t,s,r++)}),i}function bv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Ht={current:null},Ga={transition:null},Tv={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:pd};Ie.Children={map:Ko,forEach:function(n,e,t){Ko(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ko(n,function(){e++}),e},toArray:function(n){return Ko(n,function(e){return e})||[]},only:function(n){if(!md(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ie.Component=Rs;Ie.Fragment=hv;Ie.Profiler=mv;Ie.PureComponent=fd;Ie.StrictMode=pv;Ie.Suspense=xv;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;Ie.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=pm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)vm.call(e,l)&&!_m.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oo,type:n.type,key:r,ref:s,props:i,_owner:o}};Ie.createContext=function(n){return n={$$typeof:vv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:gv,_context:n},n.Consumer=n};Ie.createElement=xm;Ie.createFactory=function(n){var e=xm.bind(null,n);return e.type=n,e};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(n){return{$$typeof:_v,render:n}};Ie.isValidElement=md;Ie.lazy=function(n){return{$$typeof:wv,_payload:{_status:-1,_result:n},_init:bv}};Ie.memo=function(n,e){return{$$typeof:yv,type:n,compare:e===void 0?null:e}};Ie.startTransition=function(n){var e=Ga.transition;Ga.transition={};try{n()}finally{Ga.transition=e}};Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ie.useCallback=function(n,e){return Ht.current.useCallback(n,e)};Ie.useContext=function(n){return Ht.current.useContext(n)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(n){return Ht.current.useDeferredValue(n)};Ie.useEffect=function(n,e){return Ht.current.useEffect(n,e)};Ie.useId=function(){return Ht.current.useId()};Ie.useImperativeHandle=function(n,e,t){return Ht.current.useImperativeHandle(n,e,t)};Ie.useInsertionEffect=function(n,e){return Ht.current.useInsertionEffect(n,e)};Ie.useLayoutEffect=function(n,e){return Ht.current.useLayoutEffect(n,e)};Ie.useMemo=function(n,e){return Ht.current.useMemo(n,e)};Ie.useReducer=function(n,e,t){return Ht.current.useReducer(n,e,t)};Ie.useRef=function(n){return Ht.current.useRef(n)};Ie.useState=function(n){return Ht.current.useState(n)};Ie.useSyncExternalStore=function(n,e,t){return Ht.current.useSyncExternalStore(n,e,t)};Ie.useTransition=function(){return Ht.current.useTransition()};Ie.version="18.2.0";(function(n){n.exports=Ie})(Bo);const Cv=dv(Bo.exports);var du={},ym={exports:{}},cn={},wm={exports:{}},Sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,F){var U=N.length;N.push(F);e:for(;0<U;){var $=U-1>>>1,G=N[$];if(0<r(G,F))N[$]=F,N[U]=G,U=$;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],U=N.pop();if(U!==F){N[0]=U;e:for(var $=0,G=N.length,Q=G>>>1;$<Q;){var re=2*($+1)-1,_e=N[re],Y=re+1,be=N[Y];if(0>r(_e,U))Y<G&&0>r(be,_e)?(N[$]=be,N[Y]=U,$=Y):(N[$]=_e,N[re]=U,$=re);else if(Y<G&&0>r(be,U))N[$]=be,N[Y]=U,$=Y;else break e}}return F}function r(N,F){var U=N.sortIndex-F.sortIndex;return U!==0?U:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,u=3,m=!1,_=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var F=t(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=N)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(c)}}function w(N){if(p=!1,x(N),!_)if(t(l)!==null)_=!0,D(S);else{var F=t(c);F!==null&&H(w,F.startTime-N)}}function S(N,F){_=!1,p&&(p=!1,v(y),y=-1),m=!0;var U=u;try{for(x(F),f=t(l);f!==null&&(!(f.expirationTime>F)||N&&!z());){var $=f.callback;if(typeof $=="function"){f.callback=null,u=f.priorityLevel;var G=$(f.expirationTime<=F);F=n.unstable_now(),typeof G=="function"?f.callback=G:f===t(l)&&i(l),x(F)}else i(l);f=t(l)}if(f!==null)var Q=!0;else{var re=t(c);re!==null&&H(w,re.startTime-F),Q=!1}return Q}finally{f=null,u=U,m=!1}}var E=!1,C=null,y=-1,b=5,L=-1;function z(){return!(n.unstable_now()-L<b)}function O(){if(C!==null){var N=n.unstable_now();L=N;var F=!0;try{F=C(!0,N)}finally{F?I():(E=!1,C=null)}}else E=!1}var I;if(typeof g=="function")I=function(){g(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,k=R.port2;R.port1.onmessage=O,I=function(){k.postMessage(null)}}else I=function(){h(O,0)};function D(N){C=N,E||(E=!0,I())}function H(N,F){y=h(function(){N(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||m||(_=!0,D(S))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return u},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(u){case 1:case 2:case 3:var F=3;break;default:F=u}var U=u;u=F;try{return N()}finally{u=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=u;u=N;try{return F()}finally{u=U}},n.unstable_scheduleCallback=function(N,F,U){var $=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?$+U:$):U=$,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=U+G,N={id:d++,callback:F,priorityLevel:N,startTime:U,expirationTime:G,sortIndex:-1},U>$?(N.sortIndex=U,e(c,N),t(l)===null&&N===t(c)&&(p?(v(y),y=-1):p=!0,H(w,U-$))):(N.sortIndex=G,e(l,N),_||m||(_=!0,D(S))),N},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(N){var F=u;return function(){var U=u;u=F;try{return N.apply(this,arguments)}finally{u=U}}}})(Sm);(function(n){n.exports=Sm})(wm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=Bo.exports,ln=wm.exports;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Em=new Set,go={};function Lr(n,e){xs(n,e),xs(n+"Capture",e)}function xs(n,e){for(go[n]=e,n=0;n<e.length;n++)Em.add(e[n])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=Object.prototype.hasOwnProperty,Av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mf={},Ef={};function Lv(n){return fu.call(Ef,n)?!0:fu.call(Mf,n)?!1:Av.test(n)?Ef[n]=!0:(Mf[n]=!0,!1)}function Pv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Rv(n,e,t,i){if(e===null||typeof e>"u"||Pv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Pt[n]=new Wt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Pt[e]=new Wt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Pt[n]=new Wt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Pt[n]=new Wt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Pt[n]=new Wt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Pt[n]=new Wt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Pt[n]=new Wt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Pt[n]=new Wt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Pt[n]=new Wt(n,5,!1,n.toLowerCase(),null,!1,!1)});var gd=/[\-:]([a-z])/g;function vd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(gd,vd);Pt[e]=new Wt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(gd,vd);Pt[e]=new Wt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(gd,vd);Pt[e]=new Wt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Pt[n]=new Wt(n,1,!1,n.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Pt[n]=new Wt(n,1,!1,n.toLowerCase(),null,!0,!0)});function _d(n,e,t,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rv(e,t,r,i)&&(t=null),i||r===null?Lv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var wi=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),pu=Symbol.for("react.suspense"),mu=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Cm=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Bs(n){return n===null||typeof n!="object"?null:(n=bf&&n[bf]||n["@@iterator"],typeof n=="function"?n:null)}var tt=Object.assign,tc;function Js(n){if(tc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+n}var nc=!1;function ic(n,e){if(!n||nc)return"";nc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{nc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Js(n):""}function Dv(n){switch(n.tag){case 5:return Js(n.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return n=ic(n.type,!1),n;case 11:return n=ic(n.type.render,!1),n;case 1:return n=ic(n.type,!0),n;default:return""}}function gu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Jr:return"Fragment";case Qr:return"Portal";case hu:return"Profiler";case xd:return"StrictMode";case pu:return"Suspense";case mu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Tm:return(n.displayName||"Context")+".Consumer";case bm:return(n._context.displayName||"Context")+".Provider";case yd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wd:return e=n.displayName||null,e!==null?e:gu(n.type)||"Memo";case Ii:e=n._payload,n=n._init;try{return gu(n(e))}catch{}}return null}function Iv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gu(e);case 8:return e===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Am(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(n){var e=Am(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Jo(n){n._valueTracker||(n._valueTracker=zv(n))}function Lm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Am(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function el(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vu(n,e){var t=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Tf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Yi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pm(n,e){e=e.checked,e!=null&&_d(n,"checked",e,!1)}function _u(n,e){Pm(n,e);var t=Yi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?xu(n,e.type,t):e.hasOwnProperty("defaultValue")&&xu(n,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Cf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function xu(n,e,t){(e!=="number"||el(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var eo=Array.isArray;function ds(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Yi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function yu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Af(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(eo(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Yi(t)}}function Rm(n,e){var t=Yi(e.value),i=Yi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Lf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Dm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Dm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ea,Im=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function vo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nv=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(n){Nv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),so[e]=so[n]})});function zm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||so.hasOwnProperty(n)&&so[n]?(""+e).trim():e+"px"}function Nm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=zm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Fv=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Su(n,e){if(e){if(Fv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Mu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function Sd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var bu=null,fs=null,hs=null;function Pf(n){if(n=Vo(n)){if(typeof bu!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Dl(e),bu(n.stateNode,n.type,e))}}function Fm(n){fs?hs?hs.push(n):hs=[n]:fs=n}function km(){if(fs){var n=fs,e=hs;if(hs=fs=null,Pf(n),e)for(n=0;n<e.length;n++)Pf(e[n])}}function Bm(n,e){return n(e)}function Om(){}var rc=!1;function Um(n,e,t){if(rc)return n(e,t);rc=!0;try{return Bm(n,e,t)}finally{rc=!1,(fs!==null||hs!==null)&&(Om(),km())}}function _o(n,e){var t=n.stateNode;if(t===null)return null;var i=Dl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Tu=!1;if(gi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Tu=!1}function kv(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var oo=!1,tl=null,nl=!1,Cu=null,Bv={onError:function(n){oo=!0,tl=n}};function Ov(n,e,t,i,r,s,o,a,l){oo=!1,tl=null,kv.apply(Bv,arguments)}function Uv(n,e,t,i,r,s,o,a,l){if(Ov.apply(this,arguments),oo){if(oo){var c=tl;oo=!1,tl=null}else throw Error(ee(198));nl||(nl=!0,Cu=c)}}function Pr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Gm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(n){if(Pr(n)!==n)throw Error(ee(188))}function Gv(n){var e=n.alternate;if(!e){if(e=Pr(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Rf(r),n;if(s===i)return Rf(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function Vm(n){return n=Gv(n),n!==null?Hm(n):null}function Hm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Hm(n);if(e!==null)return e;n=n.sibling}return null}var Wm=ln.unstable_scheduleCallback,Df=ln.unstable_cancelCallback,Vv=ln.unstable_shouldYield,Hv=ln.unstable_requestPaint,lt=ln.unstable_now,Wv=ln.unstable_getCurrentPriorityLevel,Md=ln.unstable_ImmediatePriority,qm=ln.unstable_UserBlockingPriority,il=ln.unstable_NormalPriority,qv=ln.unstable_LowPriority,jm=ln.unstable_IdlePriority,Al=null,$n=null;function jv(n){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Al,n,void 0,(n.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:$v,Xv=Math.log,Yv=Math.LN2;function $v(n){return n>>>=0,n===0?32:31-(Xv(n)/Yv|0)|0}var ta=64,na=4194304;function to(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function rl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=to(a):(s&=o,s!==0&&(i=to(s)))}else o=t&~r,o!==0?i=to(o):s!==0&&(i=to(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Fn(e),r=1<<t,i|=n[t],e&=~r;return i}function Zv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=Zv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Au(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xm(){var n=ta;return ta<<=1,(ta&4194240)===0&&(ta=64),n}function sc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Uo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Fn(e),n[e]=t}function Qv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Fn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ed(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Fn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var qe=0;function Ym(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var $m,bd,Zm,Km,Qm,Lu=!1,ia=[],Oi=null,Ui=null,Gi=null,xo=new Map,yo=new Map,Ni=[],Jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function If(n,e){switch(n){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Us(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vo(e),e!==null&&bd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function e_(n,e,t,i,r){switch(e){case"focusin":return Oi=Us(Oi,n,e,t,i,r),!0;case"dragenter":return Ui=Us(Ui,n,e,t,i,r),!0;case"mouseover":return Gi=Us(Gi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return xo.set(s,Us(xo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,yo.set(s,Us(yo.get(s)||null,n,e,t,i,r)),!0}return!1}function Jm(n){var e=fr(n.target);if(e!==null){var t=Pr(e);if(t!==null){if(e=t.tag,e===13){if(e=Gm(t),e!==null){n.blockedOn=e,Qm(n.priority,function(){Zm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Va(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Pu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Eu=i,t.target.dispatchEvent(i),Eu=null}else return e=Vo(t),e!==null&&bd(e),n.blockedOn=t,!1;e.shift()}return!0}function zf(n,e,t){Va(n)&&t.delete(e)}function t_(){Lu=!1,Oi!==null&&Va(Oi)&&(Oi=null),Ui!==null&&Va(Ui)&&(Ui=null),Gi!==null&&Va(Gi)&&(Gi=null),xo.forEach(zf),yo.forEach(zf)}function Gs(n,e){n.blockedOn===e&&(n.blockedOn=null,Lu||(Lu=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,t_)))}function wo(n){function e(r){return Gs(r,n)}if(0<ia.length){Gs(ia[0],n);for(var t=1;t<ia.length;t++){var i=ia[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Oi!==null&&Gs(Oi,n),Ui!==null&&Gs(Ui,n),Gi!==null&&Gs(Gi,n),xo.forEach(e),yo.forEach(e),t=0;t<Ni.length;t++)i=Ni[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ni.length&&(t=Ni[0],t.blockedOn===null);)Jm(t),t.blockedOn===null&&Ni.shift()}var ps=wi.ReactCurrentBatchConfig,sl=!0;function n_(n,e,t,i){var r=qe,s=ps.transition;ps.transition=null;try{qe=1,Td(n,e,t,i)}finally{qe=r,ps.transition=s}}function i_(n,e,t,i){var r=qe,s=ps.transition;ps.transition=null;try{qe=4,Td(n,e,t,i)}finally{qe=r,ps.transition=s}}function Td(n,e,t,i){if(sl){var r=Pu(n,e,t,i);if(r===null)mc(n,e,i,ol,t),If(n,i);else if(e_(r,n,e,t,i))i.stopPropagation();else if(If(n,i),e&4&&-1<Jv.indexOf(n)){for(;r!==null;){var s=Vo(r);if(s!==null&&$m(s),s=Pu(n,e,t,i),s===null&&mc(n,e,i,ol,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else mc(n,e,i,null,t)}}var ol=null;function Pu(n,e,t,i){if(ol=null,n=Sd(i),n=fr(n),n!==null)if(e=Pr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Gm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ol=n,null}function eg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wv()){case Md:return 1;case qm:return 4;case il:case qv:return 16;case jm:return 536870912;default:return 16}default:return 16}}var ki=null,Cd=null,Ha=null;function tg(){if(Ha)return Ha;var n,e=Cd,t=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ha=r.slice(n,1<i?1-i:void 0)}function Wa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ra(){return!0}function Nf(){return!1}function un(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ra:Nf,this.isPropagationStopped=Nf,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=un(Ds),Go=tt({},Ds,{view:0,detail:0}),r_=un(Go),oc,ac,Vs,Ll=tt({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ld,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vs&&(Vs&&n.type==="mousemove"?(oc=n.screenX-Vs.screenX,ac=n.screenY-Vs.screenY):ac=oc=0,Vs=n),oc)},movementY:function(n){return"movementY"in n?n.movementY:ac}}),Ff=un(Ll),s_=tt({},Ll,{dataTransfer:0}),o_=un(s_),a_=tt({},Go,{relatedTarget:0}),lc=un(a_),l_=tt({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),c_=un(l_),u_=tt({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),d_=un(u_),f_=tt({},Ds,{data:0}),kf=un(f_),h_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g_(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=m_[n])?!!e[n]:!1}function Ld(){return g_}var v_=tt({},Go,{key:function(n){if(n.key){var e=h_[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?p_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ld,charCode:function(n){return n.type==="keypress"?Wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),__=un(v_),x_=tt({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=un(x_),y_=tt({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ld}),w_=un(y_),S_=tt({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),M_=un(S_),E_=tt({},Ll,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),b_=un(E_),T_=[9,13,27,32],Pd=gi&&"CompositionEvent"in window,ao=null;gi&&"documentMode"in document&&(ao=document.documentMode);var C_=gi&&"TextEvent"in window&&!ao,ng=gi&&(!Pd||ao&&8<ao&&11>=ao),Of=String.fromCharCode(32),Uf=!1;function ig(n,e){switch(n){case"keyup":return T_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var es=!1;function A_(n,e){switch(n){case"compositionend":return rg(e);case"keypress":return e.which!==32?null:(Uf=!0,Of);case"textInput":return n=e.data,n===Of&&Uf?null:n;default:return null}}function L_(n,e){if(es)return n==="compositionend"||!Pd&&ig(n,e)?(n=tg(),Ha=Cd=ki=null,es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ng&&e.locale!=="ko"?null:e.data;default:return null}}var P_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!P_[n.type]:e==="textarea"}function sg(n,e,t,i){Fm(i),e=al(e,"onChange"),0<e.length&&(t=new Ad("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var lo=null,So=null;function R_(n){gg(n,0)}function Pl(n){var e=is(n);if(Lm(e))return n}function D_(n,e){if(n==="change")return e}var og=!1;if(gi){var cc;if(gi){var uc="oninput"in document;if(!uc){var Vf=document.createElement("div");Vf.setAttribute("oninput","return;"),uc=typeof Vf.oninput=="function"}cc=uc}else cc=!1;og=cc&&(!document.documentMode||9<document.documentMode)}function Hf(){lo&&(lo.detachEvent("onpropertychange",ag),So=lo=null)}function ag(n){if(n.propertyName==="value"&&Pl(So)){var e=[];sg(e,So,n,Sd(n)),Um(R_,e)}}function I_(n,e,t){n==="focusin"?(Hf(),lo=e,So=t,lo.attachEvent("onpropertychange",ag)):n==="focusout"&&Hf()}function z_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pl(So)}function N_(n,e){if(n==="click")return Pl(e)}function F_(n,e){if(n==="input"||n==="change")return Pl(e)}function k_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var On=typeof Object.is=="function"?Object.is:k_;function Mo(n,e){if(On(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!fu.call(e,r)||!On(n[r],e[r]))return!1}return!0}function Wf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qf(n,e){var t=Wf(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Wf(t)}}function lg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?lg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function cg(){for(var n=window,e=el();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=el(n.document)}return e}function Rd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function B_(n){var e=cg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&lg(t.ownerDocument.documentElement,t)){if(i!==null&&Rd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=qf(t,s);var o=qf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var O_=gi&&"documentMode"in document&&11>=document.documentMode,ts=null,Ru=null,co=null,Du=!1;function jf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Du||ts==null||ts!==el(i)||(i=ts,"selectionStart"in i&&Rd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),co&&Mo(co,i)||(co=i,i=al(Ru,"onSelect"),0<i.length&&(e=new Ad("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ts)))}function sa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ns={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},dc={},ug={};gi&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Rl(n){if(dc[n])return dc[n];if(!ns[n])return n;var e=ns[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ug)return dc[n]=e[t];return n}var dg=Rl("animationend"),fg=Rl("animationiteration"),hg=Rl("animationstart"),pg=Rl("transitionend"),mg=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(n,e){mg.set(n,e),Lr(e,[n])}for(var fc=0;fc<Xf.length;fc++){var hc=Xf[fc],U_=hc.toLowerCase(),G_=hc[0].toUpperCase()+hc.slice(1);Qi(U_,"on"+G_)}Qi(dg,"onAnimationEnd");Qi(fg,"onAnimationIteration");Qi(hg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(pg,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V_=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Yf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Uv(i,e,void 0,n),n.currentTarget=null}function gg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Yf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Yf(r,a,c),s=l}}}if(nl)throw n=Cu,nl=!1,Cu=null,n}function $e(n,e){var t=e[ku];t===void 0&&(t=e[ku]=new Set);var i=n+"__bubble";t.has(i)||(vg(e,n,2,!1),t.add(i))}function pc(n,e,t){var i=0;e&&(i|=4),vg(t,n,i,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function Eo(n){if(!n[oa]){n[oa]=!0,Em.forEach(function(t){t!=="selectionchange"&&(V_.has(t)||pc(t,!1,n),pc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[oa]||(e[oa]=!0,pc("selectionchange",!1,e))}}function vg(n,e,t,i){switch(eg(e)){case 1:var r=n_;break;case 4:r=i_;break;default:r=Td}t=r.bind(null,e,t,n),r=void 0,!Tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function mc(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Um(function(){var c=s,d=Sd(t),f=[];e:{var u=mg.get(n);if(u!==void 0){var m=Ad,_=n;switch(n){case"keypress":if(Wa(t)===0)break e;case"keydown":case"keyup":m=__;break;case"focusin":_="focus",m=lc;break;case"focusout":_="blur",m=lc;break;case"beforeblur":case"afterblur":m=lc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=w_;break;case dg:case fg:case hg:m=c_;break;case pg:m=M_;break;case"scroll":m=r_;break;case"wheel":m=b_;break;case"copy":case"cut":case"paste":m=d_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Bf}var p=(e&4)!==0,h=!p&&n==="scroll",v=p?u!==null?u+"Capture":null:u;p=[];for(var g=c,x;g!==null;){x=g;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,v!==null&&(w=_o(g,v),w!=null&&p.push(bo(g,w,x)))),h)break;g=g.return}0<p.length&&(u=new m(u,_,null,t,d),f.push({event:u,listeners:p}))}}if((e&7)===0){e:{if(u=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",u&&t!==Eu&&(_=t.relatedTarget||t.fromElement)&&(fr(_)||_[vi]))break e;if((m||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,m?(_=t.relatedTarget||t.toElement,m=c,_=_?fr(_):null,_!==null&&(h=Pr(_),_!==h||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(p=Ff,w="onMouseLeave",v="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(p=Bf,w="onPointerLeave",v="onPointerEnter",g="pointer"),h=m==null?u:is(m),x=_==null?u:is(_),u=new p(w,g+"leave",m,t,d),u.target=h,u.relatedTarget=x,w=null,fr(d)===c&&(p=new p(v,g+"enter",_,t,d),p.target=x,p.relatedTarget=h,w=p),h=w,m&&_)t:{for(p=m,v=_,g=0,x=p;x;x=zr(x))g++;for(x=0,w=v;w;w=zr(w))x++;for(;0<g-x;)p=zr(p),g--;for(;0<x-g;)v=zr(v),x--;for(;g--;){if(p===v||v!==null&&p===v.alternate)break t;p=zr(p),v=zr(v)}p=null}else p=null;m!==null&&$f(f,u,m,p,!1),_!==null&&h!==null&&$f(f,h,_,p,!0)}}e:{if(u=c?is(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var S=D_;else if(Gf(u))if(og)S=F_;else{S=z_;var E=I_}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(S=N_);if(S&&(S=S(n,c))){sg(f,S,t,d);break e}E&&E(n,u,c),n==="focusout"&&(E=u._wrapperState)&&E.controlled&&u.type==="number"&&xu(u,"number",u.value)}switch(E=c?is(c):window,n){case"focusin":(Gf(E)||E.contentEditable==="true")&&(ts=E,Ru=c,co=null);break;case"focusout":co=Ru=ts=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,jf(f,t,d);break;case"selectionchange":if(O_)break;case"keydown":case"keyup":jf(f,t,d)}var C;if(Pd)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else es?ig(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(ng&&t.locale!=="ko"&&(es||y!=="onCompositionStart"?y==="onCompositionEnd"&&es&&(C=tg()):(ki=d,Cd="value"in ki?ki.value:ki.textContent,es=!0)),E=al(c,y),0<E.length&&(y=new kf(y,n,null,t,d),f.push({event:y,listeners:E}),C?y.data=C:(C=rg(t),C!==null&&(y.data=C)))),(C=C_?A_(n,t):L_(n,t))&&(c=al(c,"onBeforeInput"),0<c.length&&(d=new kf("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=C))}gg(f,e)})}function bo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function al(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_o(n,t),s!=null&&i.unshift(bo(n,s,r)),s=_o(n,e),s!=null&&i.push(bo(n,s,r))),n=n.return}return i}function zr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $f(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_o(t,s),l!=null&&o.unshift(bo(t,l,a))):r||(l=_o(t,s),l!=null&&o.push(bo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var H_=/\r\n?/g,W_=/\u0000|\uFFFD/g;function Zf(n){return(typeof n=="string"?n:""+n).replace(H_,`
`).replace(W_,"")}function aa(n,e,t){if(e=Zf(e),Zf(n)!==e&&t)throw Error(ee(425))}function ll(){}var Iu=null,zu=null;function Nu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,j_=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(n){return Kf.resolve(null).then(n).catch(X_)}:Fu;function X_(n){setTimeout(function(){throw n})}function gc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),wo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);wo(e)}function Vi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Qf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Is,To="__reactProps$"+Is,vi="__reactContainer$"+Is,ku="__reactEvents$"+Is,Y_="__reactListeners$"+Is,$_="__reactHandles$"+Is;function fr(n){var e=n[Xn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[vi]||t[Xn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Qf(n);n!==null;){if(t=n[Xn])return t;n=Qf(n)}return e}n=t,t=n.parentNode}return null}function Vo(n){return n=n[Xn]||n[vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Dl(n){return n[To]||null}var Bu=[],rs=-1;function Ji(n){return{current:n}}function Ze(n){0>rs||(n.current=Bu[rs],Bu[rs]=null,rs--)}function Xe(n,e){rs++,Bu[rs]=n.current,n.current=e}var $i={},Ft=Ji($i),$t=Ji(!1),Sr=$i;function ys(n,e){var t=n.type.contextTypes;if(!t)return $i;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(n){return n=n.childContextTypes,n!=null}function cl(){Ze($t),Ze(Ft)}function Jf(n,e,t){if(Ft.current!==$i)throw Error(ee(168));Xe(Ft,e),Xe($t,t)}function _g(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,Iv(n)||"Unknown",r));return tt({},t,i)}function ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$i,Sr=Ft.current,Xe(Ft,n),Xe($t,$t.current),!0}function eh(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=_g(n,e,Sr),i.__reactInternalMemoizedMergedChildContext=n,Ze($t),Ze(Ft),Xe(Ft,n)):Ze($t),Xe($t,t)}var ui=null,Il=!1,vc=!1;function xg(n){ui===null?ui=[n]:ui.push(n)}function Z_(n){Il=!0,xg(n)}function er(){if(!vc&&ui!==null){vc=!0;var n=0,e=qe;try{var t=ui;for(qe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ui=null,Il=!1}catch(r){throw ui!==null&&(ui=ui.slice(n+1)),Wm(Md,er),r}finally{qe=e,vc=!1}}return null}var ss=[],os=0,dl=null,fl=0,mn=[],gn=0,Mr=null,fi=1,hi="";function or(n,e){ss[os++]=fl,ss[os++]=dl,dl=n,fl=e}function yg(n,e,t){mn[gn++]=fi,mn[gn++]=hi,mn[gn++]=Mr,Mr=n;var i=fi;n=hi;var r=32-Fn(i)-1;i&=~(1<<r),t+=1;var s=32-Fn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-Fn(e)+r|t<<r|i,hi=s+n}else fi=1<<s|t<<r|i,hi=n}function Dd(n){n.return!==null&&(or(n,1),yg(n,1,0))}function Id(n){for(;n===dl;)dl=ss[--os],ss[os]=null,fl=ss[--os],ss[os]=null;for(;n===Mr;)Mr=mn[--gn],mn[gn]=null,hi=mn[--gn],mn[gn]=null,fi=mn[--gn],mn[gn]=null}var an=null,on=null,Ke=!1,Dn=null;function wg(n,e){var t=_n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function th(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,an=n,on=Vi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,an=n,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Mr!==null?{id:fi,overflow:hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=_n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,an=n,on=null,!0):!1;default:return!1}}function Ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Uu(n){if(Ke){var e=on;if(e){var t=e;if(!th(n,e)){if(Ou(n))throw Error(ee(418));e=Vi(t.nextSibling);var i=an;e&&th(n,e)?wg(i,t):(n.flags=n.flags&-4097|2,Ke=!1,an=n)}}else{if(Ou(n))throw Error(ee(418));n.flags=n.flags&-4097|2,Ke=!1,an=n}}}function nh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function la(n){if(n!==an)return!1;if(!Ke)return nh(n),Ke=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nu(n.type,n.memoizedProps)),e&&(e=on)){if(Ou(n))throw Sg(),Error(ee(418));for(;e;)wg(n,e),e=Vi(e.nextSibling)}if(nh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){on=Vi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}on=null}}else on=an?Vi(n.stateNode.nextSibling):null;return!0}function Sg(){for(var n=on;n;)n=Vi(n.nextSibling)}function ws(){on=an=null,Ke=!1}function zd(n){Dn===null?Dn=[n]:Dn.push(n)}var K_=wi.ReactCurrentBatchConfig;function Pn(n,e){if(n&&n.defaultProps){e=tt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var hl=Ji(null),pl=null,as=null,Nd=null;function Fd(){Nd=as=pl=null}function kd(n){var e=hl.current;Ze(hl),n._currentValue=e}function Gu(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ms(n,e){pl=n,Nd=as=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Yt=!0),n.firstContext=null)}function wn(n){var e=n._currentValue;if(Nd!==n)if(n={context:n,memoizedValue:e,next:null},as===null){if(pl===null)throw Error(ee(308));as=n,pl.dependencies={lanes:0,firstContext:n}}else as=as.next=n;return e}var hr=null;function Bd(n){hr===null?hr=[n]:hr.push(n)}function Mg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Bd(e)):(t.next=r.next,r.next=t),e.interleaved=t,_i(n,i)}function _i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var zi=!1;function Od(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Ne&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(n,t)}return r=i.interleaved,r===null?(e.next=e,Bd(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(n,t)}function qa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ed(n,t)}}function ih(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ml(n,e,t,i){var r=n.updateQueue;zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,m=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,p=a;switch(u=e,m=t,p.tag){case 1:if(_=p.payload,typeof _=="function"){f=_.call(m,f,u);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=p.payload,u=typeof _=="function"?_.call(m,f,u):_,u==null)break e;f=tt({},f,u);break e;case 2:zi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else m={eventTime:m,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(1);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=o,n.lanes=o,n.memoizedState=f}}function rh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var bg=new Mm.Component().refs;function Vu(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:tt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var zl={isMounted:function(n){return(n=n._reactInternals)?Pr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Ut(),r=qi(n),s=pi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Hi(n,s,r),e!==null&&(kn(e,n,r,i),qa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Ut(),r=qi(n),s=pi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Hi(n,s,r),e!==null&&(kn(e,n,r,i),qa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ut(),i=qi(n),r=pi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(n,r,i),e!==null&&(kn(e,n,i,t),qa(e,n,i))}};function sh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(t,i)||!Mo(r,s):!0}function Tg(n,e,t){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=Zt(e)?Sr:Ft.current,i=e.contextTypes,s=(i=i!=null)?ys(n,r):$i),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function oh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&zl.enqueueReplaceState(e,e.state,null)}function Hu(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=bg,Od(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=Zt(e)?Sr:Ft.current,r.context=ys(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vu(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zl.enqueueReplaceState(r,r.state,null),ml(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===bg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function ca(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ah(n){var e=n._init;return e(n._payload)}function Cg(n){function e(v,g){if(n){var x=v.deletions;x===null?(v.deletions=[g],v.flags|=16):x.push(g)}}function t(v,g){if(!n)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function i(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function r(v,g){return v=ji(v,g),v.index=0,v.sibling=null,v}function s(v,g,x){return v.index=x,n?(x=v.alternate,x!==null?(x=x.index,x<g?(v.flags|=2,g):x):(v.flags|=2,g)):(v.flags|=1048576,g)}function o(v){return n&&v.alternate===null&&(v.flags|=2),v}function a(v,g,x,w){return g===null||g.tag!==6?(g=Ec(x,v.mode,w),g.return=v,g):(g=r(g,x),g.return=v,g)}function l(v,g,x,w){var S=x.type;return S===Jr?d(v,g,x.props.children,w,x.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ii&&ah(S)===g.type)?(w=r(g,x.props),w.ref=Hs(v,g,x),w.return=v,w):(w=Ka(x.type,x.key,x.props,null,v.mode,w),w.ref=Hs(v,g,x),w.return=v,w)}function c(v,g,x,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=bc(x,v.mode,w),g.return=v,g):(g=r(g,x.children||[]),g.return=v,g)}function d(v,g,x,w,S){return g===null||g.tag!==7?(g=xr(x,v.mode,w,S),g.return=v,g):(g=r(g,x),g.return=v,g)}function f(v,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ec(""+g,v.mode,x),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qo:return x=Ka(g.type,g.key,g.props,null,v.mode,x),x.ref=Hs(v,null,g),x.return=v,x;case Qr:return g=bc(g,v.mode,x),g.return=v,g;case Ii:var w=g._init;return f(v,w(g._payload),x)}if(eo(g)||Bs(g))return g=xr(g,v.mode,x,null),g.return=v,g;ca(v,g)}return null}function u(v,g,x,w){var S=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(v,g,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qo:return x.key===S?l(v,g,x,w):null;case Qr:return x.key===S?c(v,g,x,w):null;case Ii:return S=x._init,u(v,g,S(x._payload),w)}if(eo(x)||Bs(x))return S!==null?null:d(v,g,x,w,null);ca(v,x)}return null}function m(v,g,x,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(x)||null,a(g,v,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qo:return v=v.get(w.key===null?x:w.key)||null,l(g,v,w,S);case Qr:return v=v.get(w.key===null?x:w.key)||null,c(g,v,w,S);case Ii:var E=w._init;return m(v,g,x,E(w._payload),S)}if(eo(w)||Bs(w))return v=v.get(x)||null,d(g,v,w,S,null);ca(g,w)}return null}function _(v,g,x,w){for(var S=null,E=null,C=g,y=g=0,b=null;C!==null&&y<x.length;y++){C.index>y?(b=C,C=null):b=C.sibling;var L=u(v,C,x[y],w);if(L===null){C===null&&(C=b);break}n&&C&&L.alternate===null&&e(v,C),g=s(L,g,y),E===null?S=L:E.sibling=L,E=L,C=b}if(y===x.length)return t(v,C),Ke&&or(v,y),S;if(C===null){for(;y<x.length;y++)C=f(v,x[y],w),C!==null&&(g=s(C,g,y),E===null?S=C:E.sibling=C,E=C);return Ke&&or(v,y),S}for(C=i(v,C);y<x.length;y++)b=m(C,v,y,x[y],w),b!==null&&(n&&b.alternate!==null&&C.delete(b.key===null?y:b.key),g=s(b,g,y),E===null?S=b:E.sibling=b,E=b);return n&&C.forEach(function(z){return e(v,z)}),Ke&&or(v,y),S}function p(v,g,x,w){var S=Bs(x);if(typeof S!="function")throw Error(ee(150));if(x=S.call(x),x==null)throw Error(ee(151));for(var E=S=null,C=g,y=g=0,b=null,L=x.next();C!==null&&!L.done;y++,L=x.next()){C.index>y?(b=C,C=null):b=C.sibling;var z=u(v,C,L.value,w);if(z===null){C===null&&(C=b);break}n&&C&&z.alternate===null&&e(v,C),g=s(z,g,y),E===null?S=z:E.sibling=z,E=z,C=b}if(L.done)return t(v,C),Ke&&or(v,y),S;if(C===null){for(;!L.done;y++,L=x.next())L=f(v,L.value,w),L!==null&&(g=s(L,g,y),E===null?S=L:E.sibling=L,E=L);return Ke&&or(v,y),S}for(C=i(v,C);!L.done;y++,L=x.next())L=m(C,v,y,L.value,w),L!==null&&(n&&L.alternate!==null&&C.delete(L.key===null?y:L.key),g=s(L,g,y),E===null?S=L:E.sibling=L,E=L);return n&&C.forEach(function(O){return e(v,O)}),Ke&&or(v,y),S}function h(v,g,x,w){if(typeof x=="object"&&x!==null&&x.type===Jr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Qo:e:{for(var S=x.key,E=g;E!==null;){if(E.key===S){if(S=x.type,S===Jr){if(E.tag===7){t(v,E.sibling),g=r(E,x.props.children),g.return=v,v=g;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ii&&ah(S)===E.type){t(v,E.sibling),g=r(E,x.props),g.ref=Hs(v,E,x),g.return=v,v=g;break e}t(v,E);break}else e(v,E);E=E.sibling}x.type===Jr?(g=xr(x.props.children,v.mode,w,x.key),g.return=v,v=g):(w=Ka(x.type,x.key,x.props,null,v.mode,w),w.ref=Hs(v,g,x),w.return=v,v=w)}return o(v);case Qr:e:{for(E=x.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(v,g.sibling),g=r(g,x.children||[]),g.return=v,v=g;break e}else{t(v,g);break}else e(v,g);g=g.sibling}g=bc(x,v.mode,w),g.return=v,v=g}return o(v);case Ii:return E=x._init,h(v,g,E(x._payload),w)}if(eo(x))return _(v,g,x,w);if(Bs(x))return p(v,g,x,w);ca(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(v,g.sibling),g=r(g,x),g.return=v,v=g):(t(v,g),g=Ec(x,v.mode,w),g.return=v,v=g),o(v)):t(v,g)}return h}var Ss=Cg(!0),Ag=Cg(!1),Ho={},Zn=Ji(Ho),Co=Ji(Ho),Ao=Ji(Ho);function pr(n){if(n===Ho)throw Error(ee(174));return n}function Ud(n,e){switch(Xe(Ao,e),Xe(Co,n),Xe(Zn,Ho),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=wu(e,n)}Ze(Zn),Xe(Zn,e)}function Ms(){Ze(Zn),Ze(Co),Ze(Ao)}function Lg(n){pr(Ao.current);var e=pr(Zn.current),t=wu(e,n.type);e!==t&&(Xe(Co,n),Xe(Zn,t))}function Gd(n){Co.current===n&&(Ze(Zn),Ze(Co))}var Je=Ji(0);function gl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Vd(){for(var n=0;n<_c.length;n++)_c[n]._workInProgressVersionPrimary=null;_c.length=0}var ja=wi.ReactCurrentDispatcher,xc=wi.ReactCurrentBatchConfig,Er=0,et=null,_t=null,Et=null,vl=!1,uo=!1,Lo=0,Q_=0;function Rt(){throw Error(ee(321))}function Hd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!On(n[t],e[t]))return!1;return!0}function Wd(n,e,t,i,r,s){if(Er=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ja.current=n===null||n.memoizedState===null?nx:ix,n=t(i,r),uo){s=0;do{if(uo=!1,Lo=0,25<=s)throw Error(ee(301));s+=1,Et=_t=null,e.updateQueue=null,ja.current=rx,n=t(i,r)}while(uo)}if(ja.current=_l,e=_t!==null&&_t.next!==null,Er=0,Et=_t=et=null,vl=!1,e)throw Error(ee(300));return n}function qd(){var n=Lo!==0;return Lo=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?et.memoizedState=Et=n:Et=Et.next=n,Et}function Sn(){if(_t===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=_t.next;var e=Et===null?et.memoizedState:Et.next;if(e!==null)Et=e,_t=n;else{if(n===null)throw Error(ee(310));_t=n,n={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Et===null?et.memoizedState=Et=n:Et=Et.next=n}return Et}function Po(n,e){return typeof e=="function"?e(n):e}function yc(n){var e=Sn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=_t,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Er&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,et.lanes|=d,br|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,On(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,et.lanes|=s,br|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function wc(n){var e=Sn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);On(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Pg(){}function Rg(n,e){var t=et,i=Sn(),r=e(),s=!On(i.memoizedState,r);if(s&&(i.memoizedState=r,Yt=!0),i=i.queue,jd(zg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Et!==null&&Et.memoizedState.tag&1){if(t.flags|=2048,Ro(9,Ig.bind(null,t,i,r,e),void 0,null),Tt===null)throw Error(ee(349));(Er&30)!==0||Dg(t,e,r)}return r}function Dg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ig(n,e,t,i){e.value=t,e.getSnapshot=i,Ng(e)&&Fg(n)}function zg(n,e,t){return t(function(){Ng(e)&&Fg(n)})}function Ng(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!On(n,t)}catch{return!0}}function Fg(n){var e=_i(n,1);e!==null&&kn(e,n,1,-1)}function lh(n){var e=qn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},e.queue=n,n=n.dispatch=tx.bind(null,et,n),[e.memoizedState,n]}function Ro(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function kg(){return Sn().memoizedState}function Xa(n,e,t,i){var r=qn();et.flags|=n,r.memoizedState=Ro(1|e,t,void 0,i===void 0?null:i)}function Nl(n,e,t,i){var r=Sn();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&Hd(i,o.deps)){r.memoizedState=Ro(e,t,s,i);return}}et.flags|=n,r.memoizedState=Ro(1|e,t,s,i)}function ch(n,e){return Xa(8390656,8,n,e)}function jd(n,e){return Nl(2048,8,n,e)}function Bg(n,e){return Nl(4,2,n,e)}function Og(n,e){return Nl(4,4,n,e)}function Ug(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Gg(n,e,t){return t=t!=null?t.concat([n]):null,Nl(4,4,Ug.bind(null,e,n),t)}function Xd(){}function Vg(n,e){var t=Sn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Hd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Hg(n,e){var t=Sn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Hd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Wg(n,e,t){return(Er&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=t):(On(t,e)||(t=Xm(),et.lanes|=t,br|=t,n.baseState=!0),e)}function J_(n,e){var t=qe;qe=t!==0&&4>t?t:4,n(!0);var i=xc.transition;xc.transition={};try{n(!1),e()}finally{qe=t,xc.transition=i}}function qg(){return Sn().memoizedState}function ex(n,e,t){var i=qi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},jg(n))Xg(e,t);else if(t=Mg(n,e,t,i),t!==null){var r=Ut();kn(t,n,i,r),Yg(t,e,i)}}function tx(n,e,t){var i=qi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(jg(n))Xg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(r.next=r,Bd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Mg(n,e,r,i),t!==null&&(r=Ut(),kn(t,n,i,r),Yg(t,e,i))}}function jg(n){var e=n.alternate;return n===et||e!==null&&e===et}function Xg(n,e){uo=vl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Yg(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ed(n,t)}}var _l={readContext:wn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},nx={readContext:wn,useCallback:function(n,e){return qn().memoizedState=[n,e===void 0?null:e],n},useContext:wn,useEffect:ch,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Xa(4194308,4,Ug.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Xa(4194308,4,n,e)},useInsertionEffect:function(n,e){return Xa(4,2,n,e)},useMemo:function(n,e){var t=qn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=qn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ex.bind(null,et,n),[i.memoizedState,n]},useRef:function(n){var e=qn();return n={current:n},e.memoizedState=n},useState:lh,useDebugValue:Xd,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=lh(!1),e=n[0];return n=J_.bind(null,n[1]),qn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=et,r=qn();if(Ke){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Tt===null)throw Error(ee(349));(Er&30)!==0||Dg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ch(zg.bind(null,i,s,n),[n]),i.flags|=2048,Ro(9,Ig.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=qn(),e=Tt.identifierPrefix;if(Ke){var t=hi,i=fi;t=(i&~(1<<32-Fn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Lo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Q_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ix={readContext:wn,useCallback:Vg,useContext:wn,useEffect:jd,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Og,useMemo:Hg,useReducer:yc,useRef:kg,useState:function(){return yc(Po)},useDebugValue:Xd,useDeferredValue:function(n){var e=Sn();return Wg(e,_t.memoizedState,n)},useTransition:function(){var n=yc(Po)[0],e=Sn().memoizedState;return[n,e]},useMutableSource:Pg,useSyncExternalStore:Rg,useId:qg,unstable_isNewReconciler:!1},rx={readContext:wn,useCallback:Vg,useContext:wn,useEffect:jd,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Og,useMemo:Hg,useReducer:wc,useRef:kg,useState:function(){return wc(Po)},useDebugValue:Xd,useDeferredValue:function(n){var e=Sn();return _t===null?e.memoizedState=n:Wg(e,_t.memoizedState,n)},useTransition:function(){var n=wc(Po)[0],e=Sn().memoizedState;return[n,e]},useMutableSource:Pg,useSyncExternalStore:Rg,useId:qg,unstable_isNewReconciler:!1};function Es(n,e){try{var t="",i=e;do t+=Dv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Sc(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Wu(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var sx=typeof WeakMap=="function"?WeakMap:Map;function $g(n,e,t){t=pi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){yl||(yl=!0,ed=i),Wu(n,e)},t}function Zg(n,e,t){t=pi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Wu(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Wu(n,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function uh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new sx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=xx.bind(null,n,e,t),e.then(n,n))}function dh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function fh(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=pi(-1,1),e.tag=2,Hi(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var ox=wi.ReactCurrentOwner,Yt=!1;function Ot(n,e,t,i){e.child=n===null?Ag(e,null,t,i):Ss(e,n.child,t,i)}function hh(n,e,t,i,r){t=t.render;var s=e.ref;return ms(e,r),i=Wd(n,e,t,i,s,r),t=qd(),n!==null&&!Yt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,xi(n,e,r)):(Ke&&t&&Dd(e),e.flags|=1,Ot(n,e,i,r),e.child)}function ph(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!tf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Kg(n,e,s,i,r)):(n=Ka(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Mo,t(o,i)&&n.ref===e.ref)return xi(n,e,r)}return e.flags|=1,n=ji(s,i),n.ref=e.ref,n.return=e,e.child=n}function Kg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Mo(s,i)&&n.ref===e.ref)if(Yt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Yt=!0);else return e.lanes=n.lanes,xi(n,e,r)}return qu(n,e,t,i,r)}function Qg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(cs,rn),rn|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Xe(cs,rn),rn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Xe(cs,rn),rn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Xe(cs,rn),rn|=i;return Ot(n,e,r,t),e.child}function Jg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function qu(n,e,t,i,r){var s=Zt(t)?Sr:Ft.current;return s=ys(e,s),ms(e,r),t=Wd(n,e,t,i,s,r),i=qd(),n!==null&&!Yt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,xi(n,e,r)):(Ke&&i&&Dd(e),e.flags|=1,Ot(n,e,t,r),e.child)}function mh(n,e,t,i,r){if(Zt(t)){var s=!0;ul(e)}else s=!1;if(ms(e,r),e.stateNode===null)Ya(n,e),Tg(e,t,i),Hu(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=Zt(t)?Sr:Ft.current,c=ys(e,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&oh(e,o,i,c),zi=!1;var u=e.memoizedState;o.state=u,ml(e,i,o,r),l=e.memoizedState,a!==i||u!==l||$t.current||zi?(typeof d=="function"&&(Vu(e,t,d,i),l=e.memoizedState),(a=zi||sh(e,t,a,i,u,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Eg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,f=e.pendingProps,u=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=Zt(t)?Sr:Ft.current,l=ys(e,l));var m=t.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||u!==l)&&oh(e,o,i,l),zi=!1,u=e.memoizedState,o.state=u,ml(e,i,o,r);var _=e.memoizedState;a!==f||u!==_||$t.current||zi?(typeof m=="function"&&(Vu(e,t,m,i),_=e.memoizedState),(c=zi||sh(e,t,c,i,u,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),i=!1)}return ju(n,e,t,i,s,r)}function ju(n,e,t,i,r,s){Jg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&eh(e,t,!1),xi(n,e,s);i=e.stateNode,ox.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ss(e,n.child,null,s),e.child=Ss(e,null,a,s)):Ot(n,e,a,s),e.memoizedState=i.state,r&&eh(e,t,!0),e.child}function e0(n){var e=n.stateNode;e.pendingContext?Jf(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Jf(n,e.context,!1),Ud(n,e.containerInfo)}function gh(n,e,t,i,r){return ws(),zd(r),e.flags|=256,Ot(n,e,t,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Yu(n){return{baseLanes:n,cachePool:null,transitions:null}}function t0(n,e,t){var i=e.pendingProps,r=Je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Xe(Je,r&1),n===null)return Uu(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,i,0,null),n=xr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Yu(t),e.memoizedState=Xu,n):Yd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ax(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ji(a,s):(s=xr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Yu(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Xu,i}return s=n.child,n=s.sibling,i=ji(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Yd(n,e){return e=Bl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ua(n,e,t,i){return i!==null&&zd(i),Ss(e,n.child,null,t),n=Yd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ax(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Sc(Error(ee(422))),ua(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Ss(e,n.child,null,o),e.child.memoizedState=Yu(o),e.memoizedState=Xu,s);if((e.mode&1)===0)return ua(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Sc(s,i,void 0),ua(n,e,o,i)}if(a=(o&n.childLanes)!==0,Yt||a){if(i=Tt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(n,r),kn(i,n,r,-1))}return ef(),i=Sc(Error(ee(421))),ua(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=yx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,on=Vi(r.nextSibling),an=e,Ke=!0,Dn=null,n!==null&&(mn[gn++]=fi,mn[gn++]=hi,mn[gn++]=Mr,fi=n.id,hi=n.overflow,Mr=e),e=Yd(e,i.children),e.flags|=4096,e)}function vh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Gu(n.return,e,t)}function Mc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function n0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ot(n,e,i.children,t),i=Je.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vh(n,t,e);else if(n.tag===19)vh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Xe(Je,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&gl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Mc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&gl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Mc(e,!0,t,null,s);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function xi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),br|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=ji(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ji(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function lx(n,e,t){switch(e.tag){case 3:e0(e),ws();break;case 5:Lg(e);break;case 1:Zt(e.type)&&ul(e);break;case 4:Ud(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xe(hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xe(Je,Je.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?t0(n,e,t):(Xe(Je,Je.current&1),n=xi(n,e,t),n!==null?n.sibling:null);Xe(Je,Je.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return n0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xe(Je,Je.current),i)break;return null;case 22:case 23:return e.lanes=0,Qg(n,e,t)}return xi(n,e,t)}var i0,$u,r0,s0;i0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$u=function(){};r0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,pr(Zn.current);var s=null;switch(t){case"input":r=vu(n,r),i=vu(n,i),s=[];break;case"select":r=tt({},r,{value:void 0}),i=tt({},i,{value:void 0}),s=[];break;case"textarea":r=yu(n,r),i=yu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ll)}Su(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(go.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(go.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$e("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};s0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ws(n,e){if(!Ke)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Dt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function cx(n,e,t){var i=e.pendingProps;switch(Id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Zt(e.type)&&cl(),Dt(e),null;case 3:return i=e.stateNode,Ms(),Ze($t),Ze(Ft),Vd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(la(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Dn!==null&&(id(Dn),Dn=null))),$u(n,e),Dt(e),null;case 5:Gd(e);var r=pr(Ao.current);if(t=e.type,n!==null&&e.stateNode!=null)r0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Dt(e),null}if(n=pr(Zn.current),la(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[To]=s,n=(e.mode&1)!==0,t){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(r=0;r<no.length;r++)$e(no[r],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":Tf(i,s),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$e("invalid",i);break;case"textarea":Af(i,s),$e("invalid",i)}Su(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&aa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&aa(i.textContent,a,n),r=["children",""+a]):go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",i)}switch(t){case"input":Jo(i),Cf(i,s,!0);break;case"textarea":Jo(i),Lf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Dm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Xn]=e,n[To]=i,i0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Mu(t,i),t){case"dialog":$e("cancel",n),$e("close",n),r=i;break;case"iframe":case"object":case"embed":$e("load",n),r=i;break;case"video":case"audio":for(r=0;r<no.length;r++)$e(no[r],n);r=i;break;case"source":$e("error",n),r=i;break;case"img":case"image":case"link":$e("error",n),$e("load",n),r=i;break;case"details":$e("toggle",n),r=i;break;case"input":Tf(n,i),r=vu(n,i),$e("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=tt({},i,{value:void 0}),$e("invalid",n);break;case"textarea":Af(n,i),r=yu(n,i),$e("invalid",n);break;default:r=i}Su(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Nm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Im(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&vo(n,l):typeof l=="number"&&vo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",n):l!=null&&_d(n,s,l,o))}switch(t){case"input":Jo(n),Cf(n,i,!1);break;case"textarea":Jo(n),Lf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Yi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ds(n,!!i.multiple,s,!1):i.defaultValue!=null&&ds(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ll)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(n&&e.stateNode!=null)s0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=pr(Ao.current),pr(Zn.current),la(e)){if(i=e.stateNode,t=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==t)&&(n=an,n!==null))switch(n.tag){case 3:aa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&aa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Dt(e),null;case 13:if(Ze(Je),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&on!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Sg(),ws(),e.flags|=98560,s=!1;else if(s=la(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Xn]=e}else ws(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Dn!==null&&(id(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Je.current&1)!==0?xt===0&&(xt=3):ef())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return Ms(),$u(n,e),n===null&&Eo(e.stateNode.containerInfo),Dt(e),null;case 10:return kd(e.type._context),Dt(e),null;case 17:return Zt(e.type)&&cl(),Dt(e),null;case 19:if(Ze(Je),s=e.memoizedState,s===null)return Dt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ws(s,!1);else{if(xt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=gl(n),o!==null){for(e.flags|=128,Ws(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Xe(Je,Je.current&1|2),e.child}n=n.sibling}s.tail!==null&&lt()>bs&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(n=gl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ke)return Dt(e),null}else 2*lt()-s.renderingStartTime>bs&&t!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,t=Je.current,Xe(Je,i?t&1|2:t&1),e):(Dt(e),null);case 22:case 23:return Jd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(rn&1073741824)!==0&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function ux(n,e){switch(Id(e),e.tag){case 1:return Zt(e.type)&&cl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ms(),Ze($t),Ze(Ft),Vd(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Gd(e),null;case 13:if(Ze(Je),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ws()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ze(Je),null;case 4:return Ms(),null;case 10:return kd(e.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var da=!1,Nt=!1,dx=typeof WeakSet=="function"?WeakSet:Set,ue=null;function ls(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){st(n,e,i)}else t.current=null}function Zu(n,e,t){try{t()}catch(i){st(n,e,i)}}var _h=!1;function fx(n,e){if(Iu=sl,n=cg(),Rd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=n,u=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)u=f,f=m;for(;;){if(f===n)break t;if(u===t&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(zu={focusedElem:n,selectionRange:t},sl=!1,ue=e;ue!==null;)if(e=ue,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ue=n;else for(;ue!==null;){e=ue;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var p=_.memoizedProps,h=_.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?p:Pn(e.type,p),h);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(w){st(e,e.return,w)}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}return _=_h,_h=!1,_}function fo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zu(e,t,s)}r=r.next}while(r!==i)}}function Fl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ku(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function o0(n){var e=n.alternate;e!==null&&(n.alternate=null,o0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Xn],delete e[To],delete e[ku],delete e[Y_],delete e[$_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function a0(n){return n.tag===5||n.tag===3||n.tag===4}function xh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||a0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qu(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ll));else if(i!==4&&(n=n.child,n!==null))for(Qu(n,e,t),n=n.sibling;n!==null;)Qu(n,e,t),n=n.sibling}function Ju(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ju(n,e,t),n=n.sibling;n!==null;)Ju(n,e,t),n=n.sibling}var At=null,Rn=!1;function Ei(n,e,t){for(t=t.child;t!==null;)l0(n,e,t),t=t.sibling}function l0(n,e,t){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Al,t)}catch{}switch(t.tag){case 5:Nt||ls(t,e);case 6:var i=At,r=Rn;At=null,Ei(n,e,t),At=i,Rn=r,At!==null&&(Rn?(n=At,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):At.removeChild(t.stateNode));break;case 18:At!==null&&(Rn?(n=At,t=t.stateNode,n.nodeType===8?gc(n.parentNode,t):n.nodeType===1&&gc(n,t),wo(n)):gc(At,t.stateNode));break;case 4:i=At,r=Rn,At=t.stateNode.containerInfo,Rn=!0,Ei(n,e,t),At=i,Rn=r;break;case 0:case 11:case 14:case 15:if(!Nt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Zu(t,e,o),r=r.next}while(r!==i)}Ei(n,e,t);break;case 1:if(!Nt&&(ls(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){st(t,e,a)}Ei(n,e,t);break;case 21:Ei(n,e,t);break;case 22:t.mode&1?(Nt=(i=Nt)||t.memoizedState!==null,Ei(n,e,t),Nt=i):Ei(n,e,t);break;default:Ei(n,e,t)}}function yh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new dx),e.forEach(function(i){var r=wx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function En(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,Rn=!1;break e;case 3:At=a.stateNode.containerInfo,Rn=!0;break e;case 4:At=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(At===null)throw Error(ee(160));l0(s,o,r),At=null,Rn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){st(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c0(e,n),e=e.sibling}function c0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(En(e,n),Gn(n),i&4){try{fo(3,n,n.return),Fl(3,n)}catch(p){st(n,n.return,p)}try{fo(5,n,n.return)}catch(p){st(n,n.return,p)}}break;case 1:En(e,n),Gn(n),i&512&&t!==null&&ls(t,t.return);break;case 5:if(En(e,n),Gn(n),i&512&&t!==null&&ls(t,t.return),n.flags&32){var r=n.stateNode;try{vo(r,"")}catch(p){st(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pm(r,s),Mu(a,o);var c=Mu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Nm(r,f):d==="dangerouslySetInnerHTML"?Im(r,f):d==="children"?vo(r,f):_d(r,d,f,c)}switch(a){case"input":_u(r,s);break;case"textarea":Rm(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ds(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[To]=s}catch(p){st(n,n.return,p)}}break;case 6:if(En(e,n),Gn(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){st(n,n.return,p)}}break;case 3:if(En(e,n),Gn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(p){st(n,n.return,p)}break;case 4:En(e,n),Gn(n);break;case 13:En(e,n),Gn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=lt())),i&4&&yh(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Nt=(c=Nt)||d,En(e,n),Nt=c):En(e,n),Gn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&(n.mode&1)!==0)for(ue=n,d=n.child;d!==null;){for(f=ue=d;ue!==null;){switch(u=ue,m=u.child,u.tag){case 0:case 11:case 14:case 15:fo(4,u,u.return);break;case 1:ls(u,u.return);var _=u.stateNode;if(typeof _.componentWillUnmount=="function"){i=u,t=u.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(p){st(i,t,p)}}break;case 5:ls(u,u.return);break;case 22:if(u.memoizedState!==null){Sh(f);continue}}m!==null?(m.return=u,ue=m):Sh(f)}d=d.sibling}e:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zm("display",o))}catch(p){st(n,n.return,p)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(p){st(n,n.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:En(e,n),Gn(n),i&4&&yh(n);break;case 21:break;default:En(e,n),Gn(n)}}function Gn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(a0(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vo(r,""),i.flags&=-33);var s=xh(n);Ju(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xh(n);Qu(n,a,o);break;default:throw Error(ee(161))}}catch(l){st(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function hx(n,e,t){ue=n,u0(n)}function u0(n,e,t){for(var i=(n.mode&1)!==0;ue!==null;){var r=ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=da;var c=Nt;if(da=o,(Nt=l)&&!c)for(ue=r;ue!==null;)o=ue,l=o.child,o.tag===22&&o.memoizedState!==null?Mh(r):l!==null?(l.return=o,ue=l):Mh(r);for(;s!==null;)ue=s,u0(s),s=s.sibling;ue=r,da=a,Nt=c}wh(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ue=s):wh(n)}}function wh(n){for(;ue!==null;){var e=ue;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Nt||Fl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Pn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}rh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Nt||e.flags&512&&Ku(e)}catch(u){st(e,e.return,u)}}if(e===n){ue=null;break}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}}function Sh(n){for(;ue!==null;){var e=ue;if(e===n){ue=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ue=t;break}ue=e.return}}function Mh(n){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Fl(4,e)}catch(l){st(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){st(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){st(e,s,l)}break;case 5:var o=e.return;try{Ku(e)}catch(l){st(e,o,l)}}}catch(l){st(e,e.return,l)}if(e===n){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var px=Math.ceil,xl=wi.ReactCurrentDispatcher,$d=wi.ReactCurrentOwner,yn=wi.ReactCurrentBatchConfig,Ne=0,Tt=null,ht=null,Lt=0,rn=0,cs=Ji(0),xt=0,Do=null,br=0,kl=0,Zd=0,ho=null,jt=null,Kd=0,bs=1/0,li=null,yl=!1,ed=null,Wi=null,fa=!1,Bi=null,wl=0,po=0,td=null,$a=-1,Za=0;function Ut(){return(Ne&6)!==0?lt():$a!==-1?$a:$a=lt()}function qi(n){return(n.mode&1)===0?1:(Ne&2)!==0&&Lt!==0?Lt&-Lt:K_.transition!==null?(Za===0&&(Za=Xm()),Za):(n=qe,n!==0||(n=window.event,n=n===void 0?16:eg(n.type)),n)}function kn(n,e,t,i){if(50<po)throw po=0,td=null,Error(ee(185));Uo(n,t,i),((Ne&2)===0||n!==Tt)&&(n===Tt&&((Ne&2)===0&&(kl|=t),xt===4&&Fi(n,Lt)),Kt(n,i),t===1&&Ne===0&&(e.mode&1)===0&&(bs=lt()+500,Il&&er()))}function Kt(n,e){var t=n.callbackNode;Kv(n,e);var i=rl(n,n===Tt?Lt:0);if(i===0)t!==null&&Df(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Df(t),e===1)n.tag===0?Z_(Eh.bind(null,n)):xg(Eh.bind(null,n)),j_(function(){(Ne&6)===0&&er()}),t=null;else{switch(Ym(i)){case 1:t=Md;break;case 4:t=qm;break;case 16:t=il;break;case 536870912:t=jm;break;default:t=il}t=_0(t,d0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function d0(n,e){if($a=-1,Za=0,(Ne&6)!==0)throw Error(ee(327));var t=n.callbackNode;if(gs()&&n.callbackNode!==t)return null;var i=rl(n,n===Tt?Lt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Sl(n,i);else{e=i;var r=Ne;Ne|=2;var s=h0();(Tt!==n||Lt!==e)&&(li=null,bs=lt()+500,_r(n,e));do try{vx();break}catch(a){f0(n,a)}while(1);Fd(),xl.current=s,Ne=r,ht!==null?e=0:(Tt=null,Lt=0,e=xt)}if(e!==0){if(e===2&&(r=Au(n),r!==0&&(i=r,e=nd(n,r))),e===1)throw t=Do,_r(n,0),Fi(n,i),Kt(n,lt()),t;if(e===6)Fi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!mx(r)&&(e=Sl(n,i),e===2&&(s=Au(n),s!==0&&(i=s,e=nd(n,s))),e===1))throw t=Do,_r(n,0),Fi(n,i),Kt(n,lt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ar(n,jt,li);break;case 3:if(Fi(n,i),(i&130023424)===i&&(e=Kd+500-lt(),10<e)){if(rl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Ut(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Fu(ar.bind(null,n,jt,li),e);break}ar(n,jt,li);break;case 4:if(Fi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Fn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*px(i/1960))-i,10<i){n.timeoutHandle=Fu(ar.bind(null,n,jt,li),i);break}ar(n,jt,li);break;case 5:ar(n,jt,li);break;default:throw Error(ee(329))}}}return Kt(n,lt()),n.callbackNode===t?d0.bind(null,n):null}function nd(n,e){var t=ho;return n.current.memoizedState.isDehydrated&&(_r(n,e).flags|=256),n=Sl(n,e),n!==2&&(e=jt,jt=t,e!==null&&id(e)),n}function id(n){jt===null?jt=n:jt.push.apply(jt,n)}function mx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!On(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(n,e){for(e&=~Zd,e&=~kl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Fn(e),i=1<<t;n[t]=-1,e&=~i}}function Eh(n){if((Ne&6)!==0)throw Error(ee(327));gs();var e=rl(n,0);if((e&1)===0)return Kt(n,lt()),null;var t=Sl(n,e);if(n.tag!==0&&t===2){var i=Au(n);i!==0&&(e=i,t=nd(n,i))}if(t===1)throw t=Do,_r(n,0),Fi(n,e),Kt(n,lt()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ar(n,jt,li),Kt(n,lt()),null}function Qd(n,e){var t=Ne;Ne|=1;try{return n(e)}finally{Ne=t,Ne===0&&(bs=lt()+500,Il&&er())}}function Tr(n){Bi!==null&&Bi.tag===0&&(Ne&6)===0&&gs();var e=Ne;Ne|=1;var t=yn.transition,i=qe;try{if(yn.transition=null,qe=1,n)return n()}finally{qe=i,yn.transition=t,Ne=e,(Ne&6)===0&&er()}}function Jd(){rn=cs.current,Ze(cs)}function _r(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,q_(t)),ht!==null)for(t=ht.return;t!==null;){var i=t;switch(Id(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cl();break;case 3:Ms(),Ze($t),Ze(Ft),Vd();break;case 5:Gd(i);break;case 4:Ms();break;case 13:Ze(Je);break;case 19:Ze(Je);break;case 10:kd(i.type._context);break;case 22:case 23:Jd()}t=t.return}if(Tt=n,ht=n=ji(n.current,null),Lt=rn=e,xt=0,Do=null,Zd=kl=br=0,jt=ho=null,hr!==null){for(e=0;e<hr.length;e++)if(t=hr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}hr=null}return n}function f0(n,e){do{var t=ht;try{if(Fd(),ja.current=_l,vl){for(var i=et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vl=!1}if(Er=0,Et=_t=et=null,uo=!1,Lo=0,$d.current=null,t===null||t.return===null){xt=1,Do=e,ht=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if((d.mode&1)===0&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=dh(o);if(m!==null){m.flags&=-257,fh(m,o,a,s,e),m.mode&1&&uh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var p=new Set;p.add(l),e.updateQueue=p}else _.add(l);break e}else{if((e&1)===0){uh(s,c,e),ef();break e}l=Error(ee(426))}}else if(Ke&&a.mode&1){var h=dh(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),fh(h,o,a,s,e),zd(Es(l,a));break e}}s=l=Es(l,a),xt!==4&&(xt=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=$g(s,l,e);ih(s,v);break e;case 1:a=l;var g=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Wi===null||!Wi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Zg(s,a,e);ih(s,w);break e}}s=s.return}while(s!==null)}m0(t)}catch(S){e=S,ht===t&&t!==null&&(ht=t=t.return);continue}break}while(1)}function h0(){var n=xl.current;return xl.current=_l,n===null?_l:n}function ef(){(xt===0||xt===3||xt===2)&&(xt=4),Tt===null||(br&268435455)===0&&(kl&268435455)===0||Fi(Tt,Lt)}function Sl(n,e){var t=Ne;Ne|=2;var i=h0();(Tt!==n||Lt!==e)&&(li=null,_r(n,e));do try{gx();break}catch(r){f0(n,r)}while(1);if(Fd(),Ne=t,xl.current=i,ht!==null)throw Error(ee(261));return Tt=null,Lt=0,xt}function gx(){for(;ht!==null;)p0(ht)}function vx(){for(;ht!==null&&!Vv();)p0(ht)}function p0(n){var e=v0(n.alternate,n,rn);n.memoizedProps=n.pendingProps,e===null?m0(n):ht=e,$d.current=null}function m0(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=cx(t,e,rn),t!==null){ht=t;return}}else{if(t=ux(t,e),t!==null){t.flags&=32767,ht=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{xt=6,ht=null;return}}if(e=e.sibling,e!==null){ht=e;return}ht=e=n}while(e!==null);xt===0&&(xt=5)}function ar(n,e,t){var i=qe,r=yn.transition;try{yn.transition=null,qe=1,_x(n,e,t,i)}finally{yn.transition=r,qe=i}return null}function _x(n,e,t,i){do gs();while(Bi!==null);if((Ne&6)!==0)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Qv(n,s),n===Tt&&(ht=Tt=null,Lt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||fa||(fa=!0,_0(il,function(){return gs(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=yn.transition,yn.transition=null;var o=qe;qe=1;var a=Ne;Ne|=4,$d.current=null,fx(n,t),c0(t,n),B_(zu),sl=!!Iu,zu=Iu=null,n.current=t,hx(t),Hv(),Ne=a,qe=o,yn.transition=s}else n.current=t;if(fa&&(fa=!1,Bi=n,wl=r),s=n.pendingLanes,s===0&&(Wi=null),jv(t.stateNode),Kt(n,lt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(yl)throw yl=!1,n=ed,ed=null,n;return(wl&1)!==0&&n.tag!==0&&gs(),s=n.pendingLanes,(s&1)!==0?n===td?po++:(po=0,td=n):po=0,er(),null}function gs(){if(Bi!==null){var n=Ym(wl),e=yn.transition,t=qe;try{if(yn.transition=null,qe=16>n?16:n,Bi===null)var i=!1;else{if(n=Bi,Bi=null,wl=0,(Ne&6)!==0)throw Error(ee(331));var r=Ne;for(Ne|=4,ue=n.current;ue!==null;){var s=ue,o=s.child;if((ue.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ue=c;ue!==null;){var d=ue;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var f=d.child;if(f!==null)f.return=d,ue=f;else for(;ue!==null;){d=ue;var u=d.sibling,m=d.return;if(o0(d),d===c){ue=null;break}if(u!==null){u.return=m,ue=u;break}ue=m}}}var _=s.alternate;if(_!==null){var p=_.child;if(p!==null){_.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}ue=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ue=o;else e:for(;ue!==null;){if(s=ue,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,ue=v;break e}ue=s.return}}var g=n.current;for(ue=g;ue!==null;){o=ue;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,ue=x;else e:for(o=g;ue!==null;){if(a=ue,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Fl(9,a)}}catch(S){st(a,a.return,S)}if(a===o){ue=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,ue=w;break e}ue=a.return}}if(Ne=r,er(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Al,n)}catch{}i=!0}return i}finally{qe=t,yn.transition=e}}return!1}function bh(n,e,t){e=Es(t,e),e=$g(n,e,1),n=Hi(n,e,1),e=Ut(),n!==null&&(Uo(n,1,e),Kt(n,e))}function st(n,e,t){if(n.tag===3)bh(n,n,t);else for(;e!==null;){if(e.tag===3){bh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){n=Es(t,n),n=Zg(e,n,1),e=Hi(e,n,1),n=Ut(),e!==null&&(Uo(e,1,n),Kt(e,n));break}}e=e.return}}function xx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Ut(),n.pingedLanes|=n.suspendedLanes&t,Tt===n&&(Lt&t)===t&&(xt===4||xt===3&&(Lt&130023424)===Lt&&500>lt()-Kd?_r(n,0):Zd|=t),Kt(n,e)}function g0(n,e){e===0&&((n.mode&1)===0?e=1:(e=na,na<<=1,(na&130023424)===0&&(na=4194304)));var t=Ut();n=_i(n,e),n!==null&&(Uo(n,e,t),Kt(n,t))}function yx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),g0(n,t)}function wx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),g0(n,t)}var v0;v0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||$t.current)Yt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Yt=!1,lx(n,e,t);Yt=(n.flags&131072)!==0}else Yt=!1,Ke&&(e.flags&1048576)!==0&&yg(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ya(n,e),n=e.pendingProps;var r=ys(e,Ft.current);ms(e,t),r=Wd(null,e,i,n,r,t);var s=qd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Od(e),r.updater=zl,e.stateNode=r,r._reactInternals=e,Hu(e,i,n,t),e=ju(null,e,i,!0,s,t)):(e.tag=0,Ke&&s&&Dd(e),Ot(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ya(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Mx(i),n=Pn(i,n),r){case 0:e=qu(null,e,i,n,t);break e;case 1:e=mh(null,e,i,n,t);break e;case 11:e=hh(null,e,i,n,t);break e;case 14:e=ph(null,e,i,Pn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),qu(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),mh(n,e,i,r,t);case 3:e:{if(e0(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Eg(n,e),ml(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Es(Error(ee(423)),e),e=gh(n,e,i,t,r);break e}else if(i!==r){r=Es(Error(ee(424)),e),e=gh(n,e,i,t,r);break e}else for(on=Vi(e.stateNode.containerInfo.firstChild),an=e,Ke=!0,Dn=null,t=Ag(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ws(),i===r){e=xi(n,e,t);break e}Ot(n,e,i,t)}e=e.child}return e;case 5:return Lg(e),n===null&&Uu(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Nu(i,r)?o=null:s!==null&&Nu(i,s)&&(e.flags|=32),Jg(n,e),Ot(n,e,o,t),e.child;case 6:return n===null&&Uu(e),null;case 13:return t0(n,e,t);case 4:return Ud(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ss(e,null,i,t):Ot(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),hh(n,e,i,r,t);case 7:return Ot(n,e,e.pendingProps,t),e.child;case 8:return Ot(n,e,e.pendingProps.children,t),e.child;case 12:return Ot(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Xe(hl,i._currentValue),i._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===r.children&&!$t.current){e=xi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Gu(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Gu(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,t),r=wn(r),i=i(r),e.flags|=1,Ot(n,e,i,t),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),ph(n,e,i,r,t);case 15:return Kg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ya(n,e),e.tag=1,Zt(i)?(n=!0,ul(e)):n=!1,ms(e,t),Tg(e,i,r),Hu(e,i,r,t),ju(null,e,i,!0,n,t);case 19:return n0(n,e,t);case 22:return Qg(n,e,t)}throw Error(ee(156,e.tag))};function _0(n,e){return Wm(n,e)}function Sx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,e,t,i){return new Sx(n,e,t,i)}function tf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Mx(n){if(typeof n=="function")return tf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===yd)return 11;if(n===wd)return 14}return 2}function ji(n,e){var t=n.alternate;return t===null?(t=_n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ka(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")tf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Jr:return xr(t.children,r,s,e);case xd:o=8,r|=8;break;case hu:return n=_n(12,t,e,r|2),n.elementType=hu,n.lanes=s,n;case pu:return n=_n(13,t,e,r),n.elementType=pu,n.lanes=s,n;case mu:return n=_n(19,t,e,r),n.elementType=mu,n.lanes=s,n;case Cm:return Bl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case bm:o=10;break e;case Tm:o=9;break e;case yd:o=11;break e;case wd:o=14;break e;case Ii:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=_n(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function xr(n,e,t,i){return n=_n(7,n,i,e),n.lanes=t,n}function Bl(n,e,t,i){return n=_n(22,n,i,e),n.elementType=Cm,n.lanes=t,n.stateNode={isHidden:!1},n}function Ec(n,e,t){return n=_n(6,n,null,e),n.lanes=t,n}function bc(n,e,t){return e=_n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ex(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nf(n,e,t,i,r,s,o,a,l){return n=new Ex(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Od(s),n}function bx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function x0(n){if(!n)return $i;n=n._reactInternals;e:{if(Pr(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(Zt(t))return _g(n,t,e)}return e}function y0(n,e,t,i,r,s,o,a,l){return n=nf(t,i,!0,n,r,s,o,a,l),n.context=x0(null),t=n.current,i=Ut(),r=qi(t),s=pi(i,r),s.callback=e!=null?e:null,Hi(t,s,r),n.current.lanes=r,Uo(n,r,i),Kt(n,i),n}function Ol(n,e,t,i){var r=e.current,s=Ut(),o=qi(r);return t=x0(t),e.context===null?e.context=t:e.pendingContext=t,e=pi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Hi(r,e,o),n!==null&&(kn(n,r,o,s),qa(n,r,o)),o}function Ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Th(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function rf(n,e){Th(n,e),(n=n.alternate)&&Th(n,e)}function Tx(){return null}var w0=typeof reportError=="function"?reportError:function(n){console.error(n)};function sf(n){this._internalRoot=n}Ul.prototype.render=sf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));Ol(n,e,null,null)};Ul.prototype.unmount=sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Tr(function(){Ol(null,n,null,null)}),e[vi]=null}};function Ul(n){this._internalRoot=n}Ul.prototype.unstable_scheduleHydration=function(n){if(n){var e=Km();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ni.length&&e!==0&&e<Ni[t].priority;t++);Ni.splice(t,0,n),t===0&&Jm(n)}};function of(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ch(){}function Cx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ml(o);s.call(c)}}var o=y0(e,i,n,0,null,!1,!1,"",Ch);return n._reactRootContainer=o,n[vi]=o.current,Eo(n.nodeType===8?n.parentNode:n),Tr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ml(l);a.call(c)}}var l=nf(n,0,!1,null,null,!1,!1,"",Ch);return n._reactRootContainer=l,n[vi]=l.current,Eo(n.nodeType===8?n.parentNode:n),Tr(function(){Ol(e,l,t,i)}),l}function Vl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ml(o);a.call(l)}}Ol(e,o,n,r)}else o=Cx(t,e,n,r,i);return Ml(o)}$m=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=to(e.pendingLanes);t!==0&&(Ed(e,t|1),Kt(e,lt()),(Ne&6)===0&&(bs=lt()+500,er()))}break;case 13:Tr(function(){var i=_i(n,1);if(i!==null){var r=Ut();kn(i,n,1,r)}}),rf(n,1)}};bd=function(n){if(n.tag===13){var e=_i(n,134217728);if(e!==null){var t=Ut();kn(e,n,134217728,t)}rf(n,134217728)}};Zm=function(n){if(n.tag===13){var e=qi(n),t=_i(n,e);if(t!==null){var i=Ut();kn(t,n,e,i)}rf(n,e)}};Km=function(){return qe};Qm=function(n,e){var t=qe;try{return qe=n,e()}finally{qe=t}};bu=function(n,e,t){switch(e){case"input":if(_u(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Dl(i);if(!r)throw Error(ee(90));Lm(i),_u(i,r)}}}break;case"textarea":Rm(n,t);break;case"select":e=t.value,e!=null&&ds(n,!!t.multiple,e,!1)}};Bm=Qd;Om=Tr;var Ax={usingClientEntryPoint:!1,Events:[Vo,is,Dl,Fm,km,Qd]},qs={findFiberByHostInstance:fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lx={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vm(n),n===null?null:n.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Al=ha.inject(Lx),$n=ha}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(e))throw Error(ee(200));return bx(n,e,null,t)};cn.createRoot=function(n,e){if(!of(n))throw Error(ee(299));var t=!1,i="",r=w0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=nf(n,1,!1,null,null,t,!1,i,r),n[vi]=e.current,Eo(n.nodeType===8?n.parentNode:n),new sf(e)};cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=Vm(e),n=n===null?null:n.stateNode,n};cn.flushSync=function(n){return Tr(n)};cn.hydrate=function(n,e,t){if(!Gl(e))throw Error(ee(200));return Vl(null,n,e,!0,t)};cn.hydrateRoot=function(n,e,t){if(!of(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=w0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=y0(e,null,n,1,t!=null?t:null,r,!1,s,o),n[vi]=e.current,Eo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ul(e)};cn.render=function(n,e,t){if(!Gl(e))throw Error(ee(200));return Vl(null,n,e,!1,t)};cn.unmountComponentAtNode=function(n){if(!Gl(n))throw Error(ee(40));return n._reactRootContainer?(Tr(function(){Vl(null,null,n,!1,function(){n._reactRootContainer=null,n[vi]=null})}),!0):!1};cn.unstable_batchedUpdates=Qd;cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Gl(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return Vl(n,e,t,!1,i)};cn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=cn})(ym);var Ah=ym.exports;du.createRoot=Ah.createRoot,du.hydrateRoot=Ah.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const af="143",Px=0,Lh=1,Rx=2,S0=1,Dx=2,io=3,Io=0,Bn=1,Ts=2,Ix=1,Xi=0,vs=1,Ph=2,Rh=3,Dh=4,zx=5,Kr=100,Nx=101,Fx=102,Ih=103,zh=104,kx=200,Bx=201,Ox=202,Ux=203,M0=204,E0=205,Gx=206,Vx=207,Hx=208,Wx=209,qx=210,jx=0,Xx=1,Yx=2,rd=3,$x=4,Zx=5,Kx=6,Qx=7,lf=0,Jx=1,ey=2,mi=0,ty=1,ny=2,iy=3,ry=4,sy=5,b0=300,Cs=301,As=302,sd=303,od=304,Hl=306,ad=1e3,zn=1001,ld=1002,Xt=1003,Nh=1004,Fh=1005,vn=1006,oy=1007,Wl=1008,Cr=1009,ay=1010,ly=1011,T0=1012,cy=1013,mr=1014,gr=1015,zo=1016,uy=1017,dy=1018,_s=1020,fy=1021,hy=1022,Yn=1023,py=1024,my=1025,yr=1026,Ls=1027,gy=1028,vy=1029,_y=1030,xy=1031,yy=1033,Tc=33776,Cc=33777,Ac=33778,Lc=33779,kh=35840,Bh=35841,Oh=35842,Uh=35843,wy=36196,Gh=37492,Vh=37496,Hh=37808,Wh=37809,qh=37810,jh=37811,Xh=37812,Yh=37813,$h=37814,Zh=37815,Kh=37816,Qh=37817,Jh=37818,ep=37819,tp=37820,np=37821,ip=36492,Ar=3e3,rt=3001,Sy=3200,My=3201,C0=0,Ey=1,ci="srgb",vr="srgb-linear",Pc=7680,by=519,rp=35044,sp="300 es",cd=1035;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,op=180/Math.PI;function Wo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function Ty(n,e){return(n%e+e)%e}function Dc(n,e,t){return(1-t)*n+t*e}function ap(n){return(n&n-1)===0&&n!==0}function ud(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(){xn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],m=i[5],_=i[8],p=r[0],h=r[3],v=r[6],g=r[1],x=r[4],w=r[7],S=r[2],E=r[5],C=r[8];return s[0]=o*p+a*g+l*S,s[3]=o*h+a*x+l*E,s[6]=o*v+a*w+l*C,s[1]=c*p+d*g+f*S,s[4]=c*h+d*x+f*E,s[7]=c*v+d*w+f*C,s[2]=u*p+m*g+_*S,s[5]=u*h+m*x+_*E,s[8]=u*v+m*w+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,u=a*l-d*s,m=c*s-o*l,_=t*f+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(r*c-d*i)*p,e[2]=(a*i-r*o)*p,e[3]=u*p,e[4]=(d*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],d=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*d,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*d,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function A0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ic={[ci]:{[vr]:wr},[vr]:{[ci]:Qa}},bn={legacyMode:!0,get workingColorSpace(){return vr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Ic[e]&&Ic[e][t]!==void 0){const i=Ic[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},L0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gt={r:0,g:0,b:0},Tn={h:0,s:0,l:0},pa={h:0,s:0,l:0};function zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ma(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vr){return this.r=e,this.g=t,this.b=i,bn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vr){if(e=Ty(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zc(o,s,e+1/3),this.g=zc(o,s,e),this.b=zc(o,s,e-1/3)}return bn.toWorkingColorSpace(this,r),this}setStyle(e,t=ci){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,d=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,d,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ci){const i=L0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return bn.fromWorkingColorSpace(ma(this,gt),e),sn(gt.r*255,0,255)<<16^sn(gt.g*255,0,255)<<8^sn(gt.b*255,0,255)<<0}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vr){bn.fromWorkingColorSpace(ma(this,gt),t);const i=gt.r,r=gt.g,s=gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=vr){return bn.fromWorkingColorSpace(ma(this,gt),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=ci){return bn.fromWorkingColorSpace(ma(this,gt),e),e!==ci?`color(${e} ${gt.r} ${gt.g} ${gt.b})`:`rgb(${gt.r*255|0},${gt.g*255|0},${gt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Tn),Tn.h+=e,Tn.s+=t,Tn.l+=i,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(pa);const i=Dc(Tn.h,pa.h,t),r=Dc(Tn.s,pa.s,t),s=Dc(Tn.l,pa.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=L0;let Nr;class P0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nr===void 0&&(Nr=No("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class R0{constructor(e=null){this.isSource=!0,this.uuid=Wo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nc(r[o].image)):s.push(Nc(r[o]))}else s=Nc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?P0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cy=0;class Mn extends zs{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=zn,r=zn,s=vn,o=Wl,a=Yn,l=Cr,c=1,d=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Wo(),this.name="",this.source=new R0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=b0;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],m=l[5],_=l[9],p=l[2],h=l[6],v=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+p)<.1&&Math.abs(_+h)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(m+1)/2,S=(v+1)/2,E=(d+u)/4,C=(f+p)/4,y=(_+h)/4;return x>w&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=C/i):w>S?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=E/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=C/s,r=y/s),this.set(i,r,s,t),this}let g=Math.sqrt((h-_)*(h-_)+(f-p)*(f-p)+(u-d)*(u-d));return Math.abs(g)<.001&&(g=1),this.x=(h-_)/g,this.y=(f-p)/g,this.z=(u-d)/g,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zi extends zs{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:vn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new R0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class D0 extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ay extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const u=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==u||c!==m||d!==_){let h=1-a;const v=l*u+c*m+d*_+f*p,g=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,v*g);h=Math.sin(h*E)/S,a=Math.sin(a*E)/S}const w=a*g;if(l=l*h+u*w,c=c*h+m*w,d=d*h+_*w,f=f*h+p*w,h===1-a){const S=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=S,c*=S,d*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],u=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+d*f+l*m-c*u,e[t+1]=l*_+d*u+c*f-a*m,e[t+2]=c*_+d*m+a*u-l*f,e[t+3]=d*_-a*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),u=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=u*d*f+c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f-u*m*_;break;case"YXZ":this._x=u*d*f+c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f+u*m*_;break;case"ZXY":this._x=u*d*f-c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f-u*m*_;break;case"ZYX":this._x=u*d*f-c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f+u*m*_;break;case"YZX":this._x=u*d*f+c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f-u*m*_;break;case"XZY":this._x=u*d*f-c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+a+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,d=l*i+a*t-s*r,f=l*r+s*i-o*t,u=-s*t-o*i-a*r;return this.x=c*l+u*-s+d*-a-f*-o,this.y=d*l+u*-o+f*-s-c*-a,this.z=f*l+u*-a+c*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new V,lp=new qo;class jo{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const d=e[l],f=e[l+1],u=e[l+2];d<t&&(t=d),f<i&&(i=f),u<r&&(r=u),d>s&&(s=d),f>o&&(o=f),u>a&&(a=u)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const d=e.getX(l),f=e.getY(l),u=e.getZ(l);d<t&&(t=d),f<i&&(i=f),u<r&&(r=u),d>s&&(s=d),f>o&&(o=f),u>a&&(a=u)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)nr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(nr)}else i.boundingBox===null&&i.computeBoundingBox(),kc.copy(i.boundingBox),kc.applyMatrix4(e.matrixWorld),this.union(kc);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),ga.subVectors(this.max,js),Fr.subVectors(e.a,js),kr.subVectors(e.b,js),Br.subVectors(e.c,js),bi.subVectors(kr,Fr),Ti.subVectors(Br,kr),ir.subVectors(Fr,Br);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-ir.z,ir.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,ir.z,0,-ir.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-ir.y,ir.x,0];return!Bc(t,Fr,kr,Br,ga)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Fr,kr,Br,ga))?!1:(va.crossVectors(bi,Ti),t=[va.x,va.y,va.z],Bc(t,Fr,kr,Br,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return nr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new V,new V,new V,new V,new V,new V,new V,new V],nr=new V,kc=new jo,Fr=new V,kr=new V,Br=new V,bi=new V,Ti=new V,ir=new V,js=new V,ga=new V,va=new V,rr=new V;function Bc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){rr.fromArray(n,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),d=i.dot(rr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ly=new jo,cp=new V,_a=new V,Oc=new V;class cf{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ly.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Oc.subVectors(e,this.center);const t=Oc.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Oc.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?_a.set(0,0,1).multiplyScalar(e.radius):_a.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(cp.copy(e.center).add(_a)),this.expandByPoint(cp.copy(e.center).sub(_a)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new V,Uc=new V,xa=new V,Ci=new V,Gc=new V,ya=new V,Vc=new V;class Py{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.direction).multiplyScalar(t).add(this.origin),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uc.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Uc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=Ci.dot(this.direction),l=-Ci.dot(xa),c=Ci.lengthSq(),d=Math.abs(1-o*o);let f,u,m,_;if(d>0)if(f=o*l-a,u=o*a-l,_=s*d,f>=0)if(u>=-_)if(u<=_){const p=1/d;f*=p,u*=p,m=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(xa).multiplyScalar(u).add(Uc),m}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,r,s){Gc.subVectors(t,e),ya.subVectors(i,e),Vc.crossVectors(Gc,ya);let o=this.direction.dot(Vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(Ci,ya));if(l<0)return null;const c=a*this.direction.dot(Gc.cross(Ci));if(c<0||l+c>o)return null;const d=-a*Ci.dot(Vc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,d,f,u,m,_,p,h){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=d,v[10]=f,v[14]=u,v[3]=m,v[7]=_,v[11]=p,v[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,m=o*f,_=a*d,p=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=u-p*c,t[9]=-a*l,t[2]=p-u*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,m=l*f,_=c*d,p=c*f;t[0]=u+p*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-_,t[6]=p+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,m=l*f,_=c*d,p=c*f;t[0]=u-p*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*d,t[9]=p-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,m=o*f,_=a*d,p=a*f;t[0]=l*d,t[4]=_*c-m,t[8]=u*c+p,t[1]=l*f,t[5]=p*c+u,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,_=a*l,p=a*c;t[0]=l*d,t[4]=p-u*f,t[8]=_*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*f+_,t[10]=u-p*f}else if(e.order==="XZY"){const u=o*l,m=o*c,_=a*l,p=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+p,t[5]=o*d,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*d,t[10]=p*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Dy)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Ai.crossVectors(i,tn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Ai.crossVectors(i,tn)),Ai.normalize(),wa.crossVectors(tn,Ai),r[0]=Ai.x,r[4]=wa.x,r[8]=tn.x,r[1]=Ai.y,r[5]=wa.y,r[9]=tn.y,r[2]=Ai.z,r[6]=wa.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],m=i[13],_=i[2],p=i[6],h=i[10],v=i[14],g=i[3],x=i[7],w=i[11],S=i[15],E=r[0],C=r[4],y=r[8],b=r[12],L=r[1],z=r[5],O=r[9],I=r[13],R=r[2],k=r[6],D=r[10],H=r[14],N=r[3],F=r[7],U=r[11],$=r[15];return s[0]=o*E+a*L+l*R+c*N,s[4]=o*C+a*z+l*k+c*F,s[8]=o*y+a*O+l*D+c*U,s[12]=o*b+a*I+l*H+c*$,s[1]=d*E+f*L+u*R+m*N,s[5]=d*C+f*z+u*k+m*F,s[9]=d*y+f*O+u*D+m*U,s[13]=d*b+f*I+u*H+m*$,s[2]=_*E+p*L+h*R+v*N,s[6]=_*C+p*z+h*k+v*F,s[10]=_*y+p*O+h*D+v*U,s[14]=_*b+p*I+h*H+v*$,s[3]=g*E+x*L+w*R+S*N,s[7]=g*C+x*z+w*k+S*F,s[11]=g*y+x*O+w*D+S*U,s[15]=g*b+x*I+w*H+S*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],m=e[14],_=e[3],p=e[7],h=e[11],v=e[15];return _*(+s*l*f-r*c*f-s*a*u+i*c*u+r*a*m-i*l*m)+p*(+t*l*m-t*c*u+s*o*u-r*o*m+r*c*d-s*l*d)+h*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*d-i*c*d)+v*(-r*a*d-t*l*f+t*a*u+r*o*f-i*o*u+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],m=e[11],_=e[12],p=e[13],h=e[14],v=e[15],g=f*h*c-p*u*c+p*l*m-a*h*m-f*l*v+a*u*v,x=_*u*c-d*h*c-_*l*m+o*h*m+d*l*v-o*u*v,w=d*p*c-_*f*c+_*a*m-o*p*m-d*a*v+o*f*v,S=_*f*l-d*p*l-_*a*u+o*p*u+d*a*h-o*f*h,E=t*g+i*x+r*w+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=g*C,e[1]=(p*u*s-f*h*s-p*r*m+i*h*m+f*r*v-i*u*v)*C,e[2]=(a*h*s-p*l*s+p*r*c-i*h*c-a*r*v+i*l*v)*C,e[3]=(f*l*s-a*u*s-f*r*c+i*u*c+a*r*m-i*l*m)*C,e[4]=x*C,e[5]=(d*h*s-_*u*s+_*r*m-t*h*m-d*r*v+t*u*v)*C,e[6]=(_*l*s-o*h*s-_*r*c+t*h*c+o*r*v-t*l*v)*C,e[7]=(o*u*s-d*l*s+d*r*c-t*u*c-o*r*m+t*l*m)*C,e[8]=w*C,e[9]=(_*f*s-d*p*s-_*i*m+t*p*m+d*i*v-t*f*v)*C,e[10]=(o*p*s-_*a*s+_*i*c-t*p*c-o*i*v+t*a*v)*C,e[11]=(d*a*s-o*f*s-d*i*c+t*f*c+o*i*m-t*a*m)*C,e[12]=S*C,e[13]=(d*p*r-_*f*r+_*i*u-t*p*u-d*i*h+t*f*h)*C,e[14]=(_*a*r-o*p*r-_*i*l+t*p*l+o*i*h-t*a*h)*C,e[15]=(o*f*r-d*a*r+d*i*l-t*f*l-o*i*u+t*a*u)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,f=a+a,u=s*c,m=s*d,_=s*f,p=o*d,h=o*f,v=a*f,g=l*c,x=l*d,w=l*f,S=i.x,E=i.y,C=i.z;return r[0]=(1-(p+v))*S,r[1]=(m+w)*S,r[2]=(_-x)*S,r[3]=0,r[4]=(m-w)*E,r[5]=(1-(u+v))*E,r[6]=(h+g)*E,r[7]=0,r[8]=(_+x)*C,r[9]=(h-g)*C,r[10]=(1-(u+p))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,d=1/o,f=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*l,u=(i+r)*c,m=(o+s)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Or=new V,Cn=new wt,Ry=new V(0,0,0),Dy=new V(1,1,1),Ai=new V,wa=new V,tn=new V,up=new wt,dp=new qo;class Xo{constructor(e=0,t=0,i=0,r=Xo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Xo.DefaultOrder="XYZ";Xo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iy=0;const fp=new V,Ur=new qo,ti=new wt,Sa=new V,Xs=new V,zy=new V,Ny=new qo,hp=new V(1,0,0),pp=new V(0,1,0),mp=new V(0,0,1),Fy={type:"added"},gp={type:"removed"};class Jt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DefaultUp.clone();const e=new V,t=new Xo,i=new qo,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new xn}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Jt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Xs,Sa,this.up):ti.lookAt(Sa,Xs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ti),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(gp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Ny,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DefaultUp=new V(0,1,0);Jt.DefaultMatrixAutoUpdate=!0;const An=new V,ni=new V,Hc=new V,ii=new V,Gr=new V,Vr=new V,vp=new V,Wc=new V,qc=new V,jc=new V;class di{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),An.subVectors(e,t),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){An.subVectors(r,t),ni.subVectors(i,t),Hc.subVectors(e,t);const o=An.dot(An),a=An.dot(ni),l=An.dot(Hc),c=ni.dot(ni),d=ni.dot(Hc),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const u=1/f,m=(c*l-a*d)*u,_=(o*d-a*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ii),ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ii),l.set(0,0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l}static isFrontFacing(e,t,i,r){return An.subVectors(i,t),ni.subVectors(e,t),An.cross(ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),An.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return di.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Vr.subVectors(s,i),Wc.subVectors(e,i);const l=Gr.dot(Wc),c=Vr.dot(Wc);if(l<=0&&c<=0)return t.copy(i);qc.subVectors(e,r);const d=Gr.dot(qc),f=Vr.dot(qc);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Gr,o);jc.subVectors(e,s);const m=Gr.dot(jc),_=Vr.dot(jc);if(_>=0&&m<=_)return t.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Vr,a);const h=d*_-m*f;if(h<=0&&f-d>=0&&m-_>=0)return vp.subVectors(s,r),a=(f-d)/(f-d+(m-_)),t.copy(r).addScaledVector(vp,a);const v=1/(h+p+u);return o=p*v,a=u*v,t.copy(i).addScaledVector(Gr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ky=0;class Yo extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=vs,this.side=Io,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=M0,this.blendDst=E0,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=by,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pc,this.stencilZFail=Pc,this.stencilZPass=Pc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Ix;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Io&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uf extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new V,Ma=new Fe;class Kn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=rp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new We),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Fe),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new V),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new yt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class z0 extends Kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class N0 extends Kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends Kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let By=0;const pn=new wt,Xc=new Jt,Hr=new V,nn=new jo,Ys=new jo,Mt=new V;class Qt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?N0:z0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(nn.min,Ys.min),nn.expandByPoint(Mt),Mt.addVectors(nn.max,Ys.max),nn.expandByPoint(Mt)):(nn.expandByPoint(Ys.min),nn.expandByPoint(Ys.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Mt.fromBufferAttribute(a,c),l&&(Hr.fromBufferAttribute(e,c),Mt.add(Hr)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let L=0;L<a;L++)c[L]=new V,d[L]=new V;const f=new V,u=new V,m=new V,_=new Fe,p=new Fe,h=new Fe,v=new V,g=new V;function x(L,z,O){f.fromArray(r,L*3),u.fromArray(r,z*3),m.fromArray(r,O*3),_.fromArray(o,L*2),p.fromArray(o,z*2),h.fromArray(o,O*2),u.sub(f),m.sub(f),p.sub(_),h.sub(_);const I=1/(p.x*h.y-h.x*p.y);!isFinite(I)||(v.copy(u).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(I),g.copy(m).multiplyScalar(p.x).addScaledVector(u,-h.x).multiplyScalar(I),c[L].add(v),c[z].add(v),c[O].add(v),d[L].add(g),d[z].add(g),d[O].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let L=0,z=w.length;L<z;++L){const O=w[L],I=O.start,R=O.count;for(let k=I,D=I+R;k<D;k+=3)x(i[k+0],i[k+1],i[k+2])}const S=new V,E=new V,C=new V,y=new V;function b(L){C.fromArray(s,L*3),y.copy(C);const z=c[L];S.copy(z),S.sub(C.multiplyScalar(C.dot(z))).normalize(),E.crossVectors(y,z);const I=E.dot(d[L])<0?-1:1;l[L*4]=S.x,l[L*4+1]=S.y,l[L*4+2]=S.z,l[L*4+3]=I}for(let L=0,z=w.length;L<z;++L){const O=w[L],I=O.start,R=O.count;for(let k=I,D=I+R;k<D;k+=3)b(i[k+0]),b(i[k+1]),b(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,d=new V,f=new V;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),p=e.getX(u+1),h=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,h),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,d=Math.min(l.length,o.length-c);for(let f=0,u=c;f<d;f++,u++)o[u]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let m=0,_=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*d;for(let v=0;v<d;v++)u[_++]=c[m++]}return new Kn(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],m=e(u,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _p=new wt,Wr=new Py,Yc=new cf,Li=new V,Pi=new V,Ri=new V,$c=new V,Zc=new V,Kc=new V,Ea=new V,ba=new V,Ta=new V,Ca=new Fe,Aa=new Fe,La=new Fe,Qc=new V,Pa=new V;class bt extends Jt{constructor(e=new Qt,t=new uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Yc.copy(i.boundingSphere),Yc.applyMatrix4(s),e.ray.intersectsSphere(Yc)===!1)||(_p.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(_p),i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,d=i.morphTargetsRelative,f=i.attributes.uv,u=i.attributes.uv2,m=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const v=m[p],g=r[v.materialIndex],x=Math.max(v.start,_.start),w=Math.min(a.count,Math.min(v.start+v.count,_.start+_.count));for(let S=x,E=w;S<E;S+=3){const C=a.getX(S),y=a.getX(S+1),b=a.getX(S+2);o=Ra(this,g,e,Wr,l,c,d,f,u,C,y,b),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let v=p,g=h;v<g;v+=3){const x=a.getX(v),w=a.getX(v+1),S=a.getX(v+2);o=Ra(this,r,e,Wr,l,c,d,f,u,x,w,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const v=m[p],g=r[v.materialIndex],x=Math.max(v.start,_.start),w=Math.min(l.count,Math.min(v.start+v.count,_.start+_.count));for(let S=x,E=w;S<E;S+=3){const C=S,y=S+1,b=S+2;o=Ra(this,g,e,Wr,l,c,d,f,u,C,y,b),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let v=p,g=h;v<g;v+=3){const x=v,w=v+1,S=v+2;o=Ra(this,r,e,Wr,l,c,d,f,u,x,w,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Oy(n,e,t,i,r,s,o,a){let l;if(e.side===Bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Ts,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:n}}function Ra(n,e,t,i,r,s,o,a,l,c,d,f){Li.fromBufferAttribute(r,c),Pi.fromBufferAttribute(r,d),Ri.fromBufferAttribute(r,f);const u=n.morphTargetInfluences;if(s&&u){Ea.set(0,0,0),ba.set(0,0,0),Ta.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=u[_],v=s[_];h!==0&&($c.fromBufferAttribute(v,c),Zc.fromBufferAttribute(v,d),Kc.fromBufferAttribute(v,f),o?(Ea.addScaledVector($c,h),ba.addScaledVector(Zc,h),Ta.addScaledVector(Kc,h)):(Ea.addScaledVector($c.sub(Li),h),ba.addScaledVector(Zc.sub(Pi),h),Ta.addScaledVector(Kc.sub(Ri),h)))}Li.add(Ea),Pi.add(ba),Ri.add(Ta)}n.isSkinnedMesh&&(n.boneTransform(c,Li),n.boneTransform(d,Pi),n.boneTransform(f,Ri));const m=Oy(n,e,t,i,Li,Pi,Ri,Qc);if(m){a&&(Ca.fromBufferAttribute(a,c),Aa.fromBufferAttribute(a,d),La.fromBufferAttribute(a,f),m.uv=di.getUV(Qc,Li,Pi,Ri,Ca,Aa,La,new Fe)),l&&(Ca.fromBufferAttribute(l,c),Aa.fromBufferAttribute(l,d),La.fromBufferAttribute(l,f),m.uv2=di.getUV(Qc,Li,Pi,Ri,Ca,Aa,La,new Fe));const _={a:c,b:d,c:f,normal:new V,materialIndex:0};di.getNormal(Li,Pi,Ri,_.normal),m.face=_}return m}class Ki extends Qt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let u=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function _(p,h,v,g,x,w,S,E,C,y,b){const L=w/C,z=S/y,O=w/2,I=S/2,R=E/2,k=C+1,D=y+1;let H=0,N=0;const F=new V;for(let U=0;U<D;U++){const $=U*z-I;for(let G=0;G<k;G++){const Q=G*L-O;F[p]=Q*g,F[h]=$*x,F[v]=R,c.push(F.x,F.y,F.z),F[p]=0,F[h]=0,F[v]=E>0?1:-1,d.push(F.x,F.y,F.z),f.push(G/C),f.push(1-U/y),H+=1}}for(let U=0;U<y;U++)for(let $=0;$<C;$++){const G=u+$+k*U,Q=u+$+k*(U+1),re=u+($+1)+k*(U+1),_e=u+($+1)+k*U;l.push(G,Q,_e),l.push(Q,re,_e),N+=6}a.addGroup(m,N,b),m+=N,u+=H}}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Uy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const F0={clone:Ps,merge:zt};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class k0 extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends k0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=op*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return op*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=90,jr=1;class Hy extends Jt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new In(qr,jr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new V(1,0,0)),this.add(r);const s=new In(qr,jr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new V(-1,0,0)),this.add(s);const o=new In(qr,jr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new V(0,1,0)),this.add(o);const a=new In(qr,jr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new V(0,-1,0)),this.add(a);const l=new In(qr,jr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new V(0,0,1)),this.add(l);const c=new In(qr,jr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new V(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,d=e.getRenderTarget(),f=e.toneMapping,u=e.xr.enabled;e.toneMapping=mi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(d),e.toneMapping=f,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class B0 extends Mn{constructor(e,t,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wy extends Zi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new B0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:Xi});s.uniforms.tEquirect.value=t;const o=new bt(r,s),a=t.minFilter;return t.minFilter===Wl&&(t.minFilter=vn),new Hy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Jc=new V,qy=new V,jy=new xn;class lr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Jc.subVectors(i,t).cross(qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jy.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new cf,Da=new V;class df{constructor(e=new lr,t=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],d=i[6],f=i[7],u=i[8],m=i[9],_=i[10],p=i[11],h=i[12],v=i[13],g=i[14],x=i[15];return t[0].setComponents(a-r,f-l,p-u,x-h).normalize(),t[1].setComponents(a+r,f+l,p+u,x+h).normalize(),t[2].setComponents(a+s,f+c,p+m,x+v).normalize(),t[3].setComponents(a-s,f-c,p-m,x-v).normalize(),t[4].setComponents(a-o,f-d,p-_,x-g).normalize(),t[5].setComponents(a+o,f+d,p+_,x+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xy(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,u=c.usage,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,f,u),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,d,f){const u=d.array,m=d.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,u):(t?n.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):n.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,d)):f.version<c.version&&(s(f.buffer,c,d),f.version=c.version)}return{get:o,remove:a,update:l}}class Fo extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,u=t/l,m=[],_=[],p=[],h=[];for(let v=0;v<d;v++){const g=v*u-o;for(let x=0;x<c;x++){const w=x*f-s;_.push(w,-g,0),p.push(0,0,1),h.push(x/a),h.push(1-v/l)}}for(let v=0;v<l;v++)for(let g=0;g<a;g++){const x=g+c*v,w=g+c*(v+1),S=g+1+c*(v+1),E=g+1+c*v;m.push(x,w,E),m.push(w,S,E)}this.setIndex(m),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(p,3)),this.setAttribute("uv",new pt(h,2))}static fromJSON(e){return new Fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ew="vec3 transformed = vec3( position );",tw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,iw=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,rw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hw=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,pw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,mw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",ww=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Mw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ew=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Dw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zw=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Nw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Fw=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Gw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Vw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Hw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ww=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$w=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,r1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,a1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,h1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,b1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,C1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F1=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,k1=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,B1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,O1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,U1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,G1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,V1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,H1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,W1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j1=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Z1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,K1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Q1=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,rS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,lS=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fS=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,pS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wS=`uniform float rotation;
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
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Yy,alphamap_pars_fragment:$y,alphatest_fragment:Zy,alphatest_pars_fragment:Ky,aomap_fragment:Qy,aomap_pars_fragment:Jy,begin_vertex:ew,beginnormal_vertex:tw,bsdfs:nw,iridescence_fragment:iw,bumpmap_pars_fragment:rw,clipping_planes_fragment:sw,clipping_planes_pars_fragment:ow,clipping_planes_pars_vertex:aw,clipping_planes_vertex:lw,color_fragment:cw,color_pars_fragment:uw,color_pars_vertex:dw,color_vertex:fw,common:hw,cube_uv_reflection_fragment:pw,defaultnormal_vertex:mw,displacementmap_pars_vertex:gw,displacementmap_vertex:vw,emissivemap_fragment:_w,emissivemap_pars_fragment:xw,encodings_fragment:yw,encodings_pars_fragment:ww,envmap_fragment:Sw,envmap_common_pars_fragment:Mw,envmap_pars_fragment:Ew,envmap_pars_vertex:bw,envmap_physical_pars_fragment:Fw,envmap_vertex:Tw,fog_vertex:Cw,fog_pars_vertex:Aw,fog_fragment:Lw,fog_pars_fragment:Pw,gradientmap_pars_fragment:Rw,lightmap_fragment:Dw,lightmap_pars_fragment:Iw,lights_lambert_vertex:zw,lights_pars_begin:Nw,lights_toon_fragment:kw,lights_toon_pars_fragment:Bw,lights_phong_fragment:Ow,lights_phong_pars_fragment:Uw,lights_physical_fragment:Gw,lights_physical_pars_fragment:Vw,lights_fragment_begin:Hw,lights_fragment_maps:Ww,lights_fragment_end:qw,logdepthbuf_fragment:jw,logdepthbuf_pars_fragment:Xw,logdepthbuf_pars_vertex:Yw,logdepthbuf_vertex:$w,map_fragment:Zw,map_pars_fragment:Kw,map_particle_fragment:Qw,map_particle_pars_fragment:Jw,metalnessmap_fragment:e1,metalnessmap_pars_fragment:t1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:r1,morphtarget_vertex:s1,normal_fragment_begin:o1,normal_fragment_maps:a1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:u1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:h1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,output_fragment:g1,packing:v1,premultiplied_alpha_fragment:_1,project_vertex:x1,dithering_fragment:y1,dithering_pars_fragment:w1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:b1,shadowmap_vertex:T1,shadowmask_pars_fragment:C1,skinbase_vertex:A1,skinning_pars_vertex:L1,skinning_vertex:P1,skinnormal_vertex:R1,specularmap_fragment:D1,specularmap_pars_fragment:I1,tonemapping_fragment:z1,tonemapping_pars_fragment:N1,transmission_fragment:F1,transmission_pars_fragment:k1,uv_pars_fragment:B1,uv_pars_vertex:O1,uv_vertex:U1,uv2_pars_fragment:G1,uv2_pars_vertex:V1,uv2_vertex:H1,worldpos_vertex:W1,background_vert:q1,background_frag:j1,cube_vert:X1,cube_frag:Y1,depth_vert:$1,depth_frag:Z1,distanceRGBA_vert:K1,distanceRGBA_frag:Q1,equirect_vert:J1,equirect_frag:eS,linedashed_vert:tS,linedashed_frag:nS,meshbasic_vert:iS,meshbasic_frag:rS,meshlambert_vert:sS,meshlambert_frag:oS,meshmatcap_vert:aS,meshmatcap_frag:lS,meshnormal_vert:cS,meshnormal_frag:uS,meshphong_vert:dS,meshphong_frag:fS,meshphysical_vert:hS,meshphysical_frag:pS,meshtoon_vert:mS,meshtoon_frag:gS,points_vert:vS,points_frag:_S,shadow_vert:xS,shadow_frag:yS,sprite_vert:wS,sprite_frag:SS},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xn},uv2Transform:{value:new xn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xn}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xn}}},jn={basic:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:zt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:zt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:zt([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:zt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:zt([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:zt([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new xn},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:zt([ie.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:zt([ie.common,ie.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:zt([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};jn.physical={uniforms:zt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function MS(n,e,t,i,r,s){const o=new We(0);let a=r===!0?0:1,l,c,d=null,f=0,u=null;function m(p,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=e.get(g));const x=n.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(g=null),g===null?_(o,a):g&&g.isColor&&(_(g,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Hl)?(c===void 0&&(c=new bt(new Ki(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Ps(jn.cube.uniforms),vertexShader:jn.cube.vertexShader,fragmentShader:jn.cube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,(d!==g||f!==g.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,u=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new bt(new Fo(2,2),new yi({name:"BackgroundMaterial",uniforms:Ps(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Io,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=g,f=g.version,u=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:m}}function ES(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let c=l,d=!1;function f(R,k,D,H,N){let F=!1;if(o){const U=p(H,D,k);c!==U&&(c=U,m(c.object)),F=v(R,H,D,N),F&&g(R,H,D,N)}else{const U=k.wireframe===!0;(c.geometry!==H.id||c.program!==D.id||c.wireframe!==U)&&(c.geometry=H.id,c.program=D.id,c.wireframe=U,F=!0)}N!==null&&t.update(N,34963),(F||d)&&(d=!1,y(R,k,D,H),N!==null&&n.bindBuffer(34963,t.get(N).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function _(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,k,D){const H=D.wireframe===!0;let N=a[R.id];N===void 0&&(N={},a[R.id]=N);let F=N[k.id];F===void 0&&(F={},N[k.id]=F);let U=F[H];return U===void 0&&(U=h(u()),F[H]=U),U}function h(R){const k=[],D=[],H=[];for(let N=0;N<r;N++)k[N]=0,D[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:D,attributeDivisors:H,object:R,attributes:{},index:null}}function v(R,k,D,H){const N=c.attributes,F=k.attributes;let U=0;const $=D.getAttributes();for(const G in $)if($[G].location>=0){const re=N[G];let _e=F[G];if(_e===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;U++}return c.attributesNum!==U||c.index!==H}function g(R,k,D,H){const N={},F=k.attributes;let U=0;const $=D.getAttributes();for(const G in $)if($[G].location>=0){let re=F[G];re===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),N[G]=_e,U++}c.attributes=N,c.attributesNum=U,c.index=H}function x(){const R=c.newAttributes;for(let k=0,D=R.length;k<D;k++)R[k]=0}function w(R){S(R,0)}function S(R,k){const D=c.newAttributes,H=c.enabledAttributes,N=c.attributeDivisors;D[R]=1,H[R]===0&&(n.enableVertexAttribArray(R),H[R]=1),N[R]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),N[R]=k)}function E(){const R=c.newAttributes,k=c.enabledAttributes;for(let D=0,H=k.length;D<H;D++)k[D]!==R[D]&&(n.disableVertexAttribArray(D),k[D]=0)}function C(R,k,D,H,N,F){i.isWebGL2===!0&&(D===5124||D===5125)?n.vertexAttribIPointer(R,k,D,N,F):n.vertexAttribPointer(R,k,D,H,N,F)}function y(R,k,D,H){if(i.isWebGL2===!1&&(R.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=H.attributes,F=D.getAttributes(),U=k.defaultAttributeValues;for(const $ in F){const G=F[$];if(G.location>=0){let Q=N[$];if(Q===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const re=Q.normalized,_e=Q.itemSize,Y=t.get(Q);if(Y===void 0)continue;const be=Y.buffer,ye=Y.type,Me=Y.bytesPerElement;if(Q.isInterleavedBufferAttribute){const de=Q.data,je=de.stride,Te=Q.offset;if(de.isInstancedInterleavedBuffer){for(let xe=0;xe<G.locationSize;xe++)S(G.location+xe,de.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<G.locationSize;xe++)w(G.location+xe);n.bindBuffer(34962,be);for(let xe=0;xe<G.locationSize;xe++)C(G.location+xe,_e/G.locationSize,ye,re,je*Me,(Te+_e/G.locationSize*xe)*Me)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)S(G.location+de,Q.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<G.locationSize;de++)w(G.location+de);n.bindBuffer(34962,be);for(let de=0;de<G.locationSize;de++)C(G.location+de,_e/G.locationSize,ye,re,_e*Me,_e/G.locationSize*de*Me)}}else if(U!==void 0){const re=U[$];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(G.location,re);break;case 3:n.vertexAttrib3fv(G.location,re);break;case 4:n.vertexAttrib4fv(G.location,re);break;default:n.vertexAttrib1fv(G.location,re)}}}}E()}function b(){O();for(const R in a){const k=a[R];for(const D in k){const H=k[D];for(const N in H)_(H[N].object),delete H[N];delete k[D]}delete a[R]}}function L(R){if(a[R.id]===void 0)return;const k=a[R.id];for(const D in k){const H=k[D];for(const N in H)_(H[N].object),delete H[N];delete k[D]}delete a[R.id]}function z(R){for(const k in a){const D=a[k];if(D[R.id]===void 0)continue;const H=D[R.id];for(const N in H)_(H[N].object),delete H[N];delete D[R.id]}}function O(){I(),d=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:w,disableUnusedAttributes:E}}function bS(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,f){if(f===0)return;let u,m;if(r)u=n,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,d,f),t.update(d,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function TS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),u=n.getParameter(35660),m=n.getParameter(3379),_=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),v=n.getParameter(36348),g=n.getParameter(36349),x=u>0,w=o||e.has("OES_texture_float"),S=x&&w,E=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:E}}function CS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new lr,a=new xn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u,m){const _=f.length!==0||u||i!==0||r;return r=u,t=d(f,m,0),i=f.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,u,m){const _=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,v=n.get(f);if(!r||_===null||_.length===0||s&&!h)s?d(null):c();else{const g=s?0:i,x=g*4;let w=v.clippingState||null;l.value=w,w=d(_,u,x,m);for(let S=0;S!==x;++S)w[S]=t[S];v.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,m,_){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const v=m+p*4,g=u.matrixWorldInverse;a.getNormalMatrix(g),(h===null||h.length<v)&&(h=new Float32Array(v));for(let x=0,w=m;x!==p;++x,w+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(h,w),h[w+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function AS(n){let e=new WeakMap;function t(o,a){return a===sd?o.mapping=Cs:a===od&&(o.mapping=As),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sd||a===od)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wy(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $o extends k0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const us=4,xp=[.125,.215,.35,.446,.526,.582],ur=20,eu=new $o,yp=new We;let tu=null;const cr=(1+Math.sqrt(5))/2,Yr=1/cr,wp=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,cr,Yr),new V(0,cr,-Yr),new V(Yr,0,cr),new V(-Yr,0,cr),new V(cr,Yr,0),new V(-cr,Yr,0)];class Sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu),e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:zo,format:Yn,encoding:Ar,depthBuffer:!1},r=Mp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LS(s)),this._blurMaterial=PS(s,e,t)}return r}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,eu)}_sceneToCubeUV(e,t,i,r){const a=new In(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(yp),d.toneMapping=mi,d.autoClear=!1;const m=new uf({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),_=new bt(new Ki,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(yp),p=!0);for(let v=0;v<6;v++){const g=v%3;g===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):g===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const x=this._cubeSize;Ia(r,g*x,v>2?x:0,x,x),d.setRenderTarget(r),p&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Cs||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,eu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wp[(r-1)%wp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new bt(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ur-1),p=s/_,h=isFinite(s)?1+Math.floor(d*p):ur;h>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ur}`);const v=[];let g=0;for(let C=0;C<ur;++C){const y=C/p,b=Math.exp(-y*y/2);v.push(b),C===0?g+=b:C<h&&(g+=2*b)}for(let C=0;C<v.length;C++)v[C]=v[C]/g;u.envMap.value=e.texture,u.samples.value=h,u.weights.value=v,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;const w=this._sizeLods[r],S=3*w*(r>x-us?r-x+us:0),E=4*(this._cubeSize-w);Ia(t,S,E,3*w,2*w),l.setRenderTarget(t),l.render(f,eu)}}function LS(n){const e=[],t=[],i=[];let r=n;const s=n-us+1+xp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-us?l=xp[o-n+us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,p=3,h=2,v=1,g=new Float32Array(p*_*m),x=new Float32Array(h*_*m),w=new Float32Array(v*_*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,y=E>2?0:-1,b=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];g.set(b,p*_*E),x.set(u,h*_*E);const L=[E,E,E,E,E,E];w.set(L,v*_*E)}const S=new Qt;S.setAttribute("position",new Kn(g,p)),S.setAttribute("uv",new Kn(x,h)),S.setAttribute("faceIndex",new Kn(w,v)),e.push(S),r>us&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mp(n,e,t){const i=new Zi(n,e,t);return i.texture.mapping=Hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function PS(n,e,t){const i=new Float32Array(ur),r=new V(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ep(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function bp(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ff(){return`

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
	`}function RS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sd||l===od,d=l===Cs||l===As;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Sp(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new Sp(n));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function DS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IS(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const _ in u)e.update(u[_],34962);const m=f.morphAttributes;for(const _ in m){const p=m[_];for(let h=0,v=p.length;h<v;h++)e.update(p[h],34962)}}function c(f){const u=[],m=f.index,_=f.attributes.position;let p=0;if(m!==null){const g=m.array;p=m.version;for(let x=0,w=g.length;x<w;x+=3){const S=g[x+0],E=g[x+1],C=g[x+2];u.push(S,E,E,C,C,S)}}else{const g=_.array;p=_.version;for(let x=0,w=g.length/3-1;x<w;x+=3){const S=x+0,E=x+1,C=x+2;u.push(S,E,E,C,C,S)}}const h=new(A0(u)?N0:z0)(u,1);h.version=p;const v=s.get(f);v&&e.remove(v),s.set(f,h)}function d(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function zS(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function d(u,m){n.drawElements(s,m,a,u*l),t.update(m,s,1)}function f(u,m,_){if(_===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,u*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f}function NS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function FS(n,e){return n[0]-e[0]}function kS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function nu(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function BS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f,u){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,h=p!==void 0?p.length:0;let v=s.get(d);if(v===void 0||v.count!==h){let D=function(){R.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var _=D;v!==void 0&&v.texture.dispose();const w=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let L=0;w===!0&&(L=1),S===!0&&(L=2),E===!0&&(L=3);let z=d.attributes.position.count*L,O=1;z>e.maxTextureSize&&(O=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*O*4*h),R=new D0(I,z,O,h);R.type=gr,R.needsUpdate=!0;const k=L*4;for(let H=0;H<h;H++){const N=C[H],F=y[H],U=b[H],$=z*O*4*H;for(let G=0;G<N.count;G++){const Q=G*k;w===!0&&(o.fromBufferAttribute(N,G),N.normalized===!0&&nu(o,N),I[$+Q+0]=o.x,I[$+Q+1]=o.y,I[$+Q+2]=o.z,I[$+Q+3]=0),S===!0&&(o.fromBufferAttribute(F,G),F.normalized===!0&&nu(o,F),I[$+Q+4]=o.x,I[$+Q+5]=o.y,I[$+Q+6]=o.z,I[$+Q+7]=0),E===!0&&(o.fromBufferAttribute(U,G),U.normalized===!0&&nu(o,U),I[$+Q+8]=o.x,I[$+Q+9]=o.y,I[$+Q+10]=o.z,I[$+Q+11]=U.itemSize===4?o.w:1)}}v={count:h,texture:R,size:new Fe(z,O)},s.set(d,v),d.addEventListener("dispose",D)}let g=0;for(let w=0;w<m.length;w++)g+=m[w];const x=d.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",m),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const p=m===void 0?0:m.length;let h=i[d.id];if(h===void 0||h.length!==p){h=[];for(let S=0;S<p;S++)h[S]=[S,0];i[d.id]=h}for(let S=0;S<p;S++){const E=h[S];E[0]=S,E[1]=m[S]}h.sort(kS);for(let S=0;S<8;S++)S<p&&h[S][1]?(a[S][0]=h[S][0],a[S][1]=h[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(FS);const v=d.morphAttributes.position,g=d.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const E=a[S],C=E[0],y=E[1];C!==Number.MAX_SAFE_INTEGER&&y?(v&&d.getAttribute("morphTarget"+S)!==v[C]&&d.setAttribute("morphTarget"+S,v[C]),g&&d.getAttribute("morphNormal"+S)!==g[C]&&d.setAttribute("morphNormal"+S,g[C]),r[S]=y,x+=y):(v&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),g&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const w=d.morphTargetsRelative?1:1-x;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function OS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const U0=new Mn,G0=new D0,V0=new Ay,H0=new B0,Tp=[],Cp=[],Ap=new Float32Array(16),Lp=new Float32Array(9),Pp=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tp[r];if(s===void 0&&(s=new Float32Array(r),Tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ql(n,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function US(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function VS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function WS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Pp.set(i),n.uniformMatrix2fv(this.addr,!1,Pp),Vt(t,i)}}function qS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Lp.set(i),n.uniformMatrix3fv(this.addr,!1,Lp),Vt(t,i)}}function jS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Ap.set(i),n.uniformMatrix4fv(this.addr,!1,Ap),Vt(t,i)}}function XS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function YS(n,e){const t=this.cache;Gt(t,e)||(n.uniform2iv(this.addr,e),Vt(t,e))}function $S(n,e){const t=this.cache;Gt(t,e)||(n.uniform3iv(this.addr,e),Vt(t,e))}function ZS(n,e){const t=this.cache;Gt(t,e)||(n.uniform4iv(this.addr,e),Vt(t,e))}function KS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QS(n,e){const t=this.cache;Gt(t,e)||(n.uniform2uiv(this.addr,e),Vt(t,e))}function JS(n,e){const t=this.cache;Gt(t,e)||(n.uniform3uiv(this.addr,e),Vt(t,e))}function eM(n,e){const t=this.cache;Gt(t,e)||(n.uniform4uiv(this.addr,e),Vt(t,e))}function tM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||U0,r)}function nM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||V0,r)}function iM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||H0,r)}function rM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||G0,r)}function sM(n){switch(n){case 5126:return US;case 35664:return GS;case 35665:return VS;case 35666:return HS;case 35674:return WS;case 35675:return qS;case 35676:return jS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return $S;case 35669:case 35673:return ZS;case 5125:return KS;case 36294:return QS;case 36295:return JS;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}function oM(n,e){n.uniform1fv(this.addr,e)}function aM(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function lM(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function cM(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function uM(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dM(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fM(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hM(n,e){n.uniform1iv(this.addr,e)}function pM(n,e){n.uniform2iv(this.addr,e)}function mM(n,e){n.uniform3iv(this.addr,e)}function gM(n,e){n.uniform4iv(this.addr,e)}function vM(n,e){n.uniform1uiv(this.addr,e)}function _M(n,e){n.uniform2uiv(this.addr,e)}function xM(n,e){n.uniform3uiv(this.addr,e)}function yM(n,e){n.uniform4uiv(this.addr,e)}function wM(n,e,t){const i=e.length,r=ql(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||U0,r[s])}function SM(n,e,t){const i=e.length,r=ql(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||V0,r[s])}function MM(n,e,t){const i=e.length,r=ql(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||H0,r[s])}function EM(n,e,t){const i=e.length,r=ql(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||G0,r[s])}function bM(n){switch(n){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return hM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return vM;case 36294:return _M;case 36295:return xM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return EM}}class TM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=sM(t.type)}}class CM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=bM(t.type)}}class AM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function Rp(n,e){n.seq.push(e),n.map[e.id]=e}function LM(n,e,t){const i=n.name,r=i.length;for(iu.lastIndex=0;;){const s=iu.exec(i),o=iu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rp(t,c===void 0?new TM(a,n,e):new CM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new AM(a),Rp(t,f)),t=f}}}class Ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);LM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Dp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let PM=0;function RM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function DM(n){switch(n){case Ar:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ip(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+RM(n.getShaderSource(e),o)}else return r}function IM(n,e){const t=DM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zM(n,e){let t;switch(e){case ty:t="Linear";break;case ny:t="Reinhard";break;case iy:t="OptimizedCineon";break;case ry:t="ACESFilmic";break;case sy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ro).join(`
`)}function FM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ro(n){return n!==""}function zp(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Np(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(n){return n.replace(BM,OM)}function OM(n,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return dd(t)}const UM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,GM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(n){return n.replace(GM,W0).replace(UM,VM)}function VM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),W0(n,e,t,i)}function W0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===io&&(e="SHADOWMAP_TYPE_VSM"),e}function WM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case As:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function jM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lf:e="ENVMAP_BLENDING_MULTIPLY";break;case Jx:e="ENVMAP_BLENDING_MIX";break;case ey:e="ENVMAP_BLENDING_ADD";break}return e}function XM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function YM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=HM(t),c=WM(t),d=qM(t),f=jM(t),u=XM(t),m=t.isWebGL2?"":NM(t),_=FM(s),p=r.createProgram();let h,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter(ro).join(`
`),h.length>0&&(h+=`
`),v=[m,_].filter(ro).join(`
`),v.length>0&&(v+=`
`)):(h=[kp(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),v=[m,kp(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?De.tonemapping_pars_fragment:"",t.toneMapping!==mi?zM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,IM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),o=dd(o),o=zp(o,t),o=Np(o,t),a=dd(a),a=zp(a,t),a=Np(a,t),o=Fp(o),a=Fp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["#define varying in",t.glslVersion===sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=g+h+o,w=g+v+a,S=Dp(r,35633,x),E=Dp(r,35632,w);if(r.attachShader(p,S),r.attachShader(p,E),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(S).trim(),z=r.getShaderInfoLog(E).trim();let O=!0,I=!0;if(r.getProgramParameter(p,35714)===!1){O=!1;const R=Ip(r,S,"vertex"),k=Ip(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+R+`
`+k)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:O,programLog:b,vertexShader:{log:L,prefix:h},fragmentShader:{log:z,prefix:v}})}r.deleteShader(S),r.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new Ja(r,p)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=kM(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=PM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=E,this}let $M=0;class ZM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new KM(e);t.set(e,i)}return t.get(e)}}class KM{constructor(e){this.id=$M++,this.code=e,this.usedTimes=0}}function QM(n,e,t,i,r,s,o){const a=new I0,l=new ZM,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,b,L,z,O){const I=z.fog,R=O.geometry,k=y.isMeshStandardMaterial?z.environment:null,D=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),H=!!D&&D.mapping===Hl?D.image.height:null,N=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const F=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,U=F!==void 0?F.length:0;let $=0;R.morphAttributes.position!==void 0&&($=1),R.morphAttributes.normal!==void 0&&($=2),R.morphAttributes.color!==void 0&&($=3);let G,Q,re,_e;if(N){const je=jn[N];G=je.vertexShader,Q=je.fragmentShader}else G=y.vertexShader,Q=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const Y=n.getRenderTarget(),be=y.alphaTest>0,ye=y.clearcoat>0,Me=y.iridescence>0;return{isWebGL2:d,shaderID:N,shaderName:y.type,vertexShader:G,fragmentShader:Q,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Y===null?n.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Ar,map:!!y.map,matcap:!!y.matcap,envMap:!!D,envMapMode:D&&D.mapping,envMapCubeUVHeight:H,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ey,tangentSpaceNormalMap:y.normalMapType===C0,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===rt,clearcoat:ye,clearcoatMap:ye&&!!y.clearcoatMap,clearcoatRoughnessMap:ye&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!y.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!y.iridescenceMap,iridescenceThicknessMap:Me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===vs,alphaMap:!!y.alphaMap,alphaTest:be,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:mi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ts,flipSided:y.side===Bn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)b.push(L),b.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(v(b,y),g(b,y),b.push(n.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function g(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),b.fog&&a.enable(33),y.push(a.mask),a.disableAll(),b.useFog&&a.enable(0),b.flatShading&&a.enable(1),b.logarithmicDepthBuffer&&a.enable(2),b.skinning&&a.enable(3),b.morphTargets&&a.enable(4),b.morphNormals&&a.enable(5),b.morphColors&&a.enable(6),b.premultipliedAlpha&&a.enable(7),b.shadowMapEnabled&&a.enable(8),b.physicallyCorrectLights&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.specularIntensityMap&&a.enable(14),b.specularColorMap&&a.enable(15),b.transmission&&a.enable(16),b.transmissionMap&&a.enable(17),b.thicknessMap&&a.enable(18),b.sheen&&a.enable(19),b.sheenColorMap&&a.enable(20),b.sheenRoughnessMap&&a.enable(21),b.decodeVideoTexture&&a.enable(22),b.opaque&&a.enable(23),y.push(a.mask)}function x(y){const b=_[y.type];let L;if(b){const z=jn[b];L=F0.clone(z.uniforms)}else L=y.uniforms;return L}function w(y,b){let L;for(let z=0,O=c.length;z<O;z++){const I=c[z];if(I.cacheKey===b){L=I,++L.usedTimes;break}}return L===void 0&&(L=new YM(n,b,y,s),c.push(L)),L}function S(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function JM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function eE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Op(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,u,m,_,p,h){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:h},n[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=h),e++,v}function a(f,u,m,_,p,h){const v=o(f,u,m,_,p,h);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(f,u,m,_,p,h){const v=o(f,u,m,_,p,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,u){t.length>1&&t.sort(f||eE),i.length>1&&i.sort(u||Bp),r.length>1&&r.sort(u||Bp)}function d(){for(let f=e,u=n.length;f<u;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function tE(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Op,n.set(i,[s])):r>=n.get(i).length?(s=new Op,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function nE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new We};break;case"SpotLight":t={position:new V,direction:new V,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function iE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rE=0;function sE(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function oE(n,e){const t=new nE,i=iE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)r.probe.push(new V);const s=new V,o=new wt,a=new wt;function l(d,f){let u=0,m=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let p=0,h=0,v=0,g=0,x=0,w=0,S=0,E=0;d.sort(sE);const C=f!==!0?Math.PI:1;for(let b=0,L=d.length;b<L;b++){const z=d[b],O=z.color,I=z.intensity,R=z.distance,k=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=O.r*I*C,m+=O.g*I*C,_+=O.b*I*C;else if(z.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(z.sh.coefficients[D],I);else if(z.isDirectionalLight){const D=t.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*C),z.castShadow){const H=z.shadow,N=i.get(z);N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,r.directionalShadow[p]=N,r.directionalShadowMap[p]=k,r.directionalShadowMatrix[p]=z.shadow.matrix,w++}r.directional[p]=D,p++}else if(z.isSpotLight){const D=t.get(z);if(D.position.setFromMatrixPosition(z.matrixWorld),D.color.copy(O).multiplyScalar(I*C),D.distance=R,D.coneCos=Math.cos(z.angle),D.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),D.decay=z.decay,z.castShadow){const H=z.shadow,N=i.get(z);N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,r.spotShadow[v]=N,r.spotShadowMap[v]=k,r.spotShadowMatrix[v]=z.shadow.matrix,E++}r.spot[v]=D,v++}else if(z.isRectAreaLight){const D=t.get(z);D.color.copy(O).multiplyScalar(I),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),r.rectArea[g]=D,g++}else if(z.isPointLight){const D=t.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*C),D.distance=z.distance,D.decay=z.decay,z.castShadow){const H=z.shadow,N=i.get(z);N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,N.shadowCameraNear=H.camera.near,N.shadowCameraFar=H.camera.far,r.pointShadow[h]=N,r.pointShadowMap[h]=k,r.pointShadowMatrix[h]=z.shadow.matrix,S++}r.point[h]=D,h++}else if(z.isHemisphereLight){const D=t.get(z);D.skyColor.copy(z.color).multiplyScalar(I*C),D.groundColor.copy(z.groundColor).multiplyScalar(I*C),r.hemi[x]=D,x++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=m,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==p||y.pointLength!==h||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==x||y.numDirectionalShadows!==w||y.numPointShadows!==S||y.numSpotShadows!==E)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=g,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=E,y.directionalLength=p,y.pointLength=h,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=x,y.numDirectionalShadows=w,y.numPointShadows=S,y.numSpotShadows=E,r.version=rE++)}function c(d,f){let u=0,m=0,_=0,p=0,h=0;const v=f.matrixWorldInverse;for(let g=0,x=d.length;g<x;g++){const w=d[g];if(w.isDirectionalLight){const S=r.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),u++}else if(w.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),_++}else if(w.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),a.identity(),o.copy(w.matrixWorld),o.premultiply(v),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(v),m++}else if(w.isHemisphereLight){const S=r.hemi[h];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(v),h++}}}return{setup:l,setupView:c,state:r}}function Up(n,e){const t=new oE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aE(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Up(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Up(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class lE extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dE=`uniform sampler2D shadow_pass;
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
}`;function fE(n,e,t){let i=new df;const r=new Fe,s=new Fe,o=new yt,a=new lE({depthPacking:My}),l=new cE,c={},d=t.maxTextureSize,f={0:Bn,1:Io,2:Ts},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:uE,fragmentShader:dE}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new bt(_,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S0,this.render=function(w,S,E){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const C=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Xi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let z=0,O=w.length;z<O;z++){const I=w[z],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const k=R.getFrameExtents();if(r.multiply(k),s.copy(R.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,R.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,R.mapSize.y=s.y)),R.map===null){const H=this.type!==io?{minFilter:Xt,magFilter:Xt}:{};R.map=new Zi(r.x,r.y,H),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const D=R.getViewportCount();for(let H=0;H<D;H++){const N=R.getViewport(H);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),L.viewport(o),R.updateMatrices(I,H),i=R.getFrustum(),x(S,E,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===io&&v(R,E),R.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(C,y,b)};function v(w,S){const E=e.update(p);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zi(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(S,null,E,u,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(S,null,E,m,p,null)}function g(w,S,E,C,y,b){let L=null;const z=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0?L=z:L=E.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const O=L.uuid,I=S.uuid;let R=c[O];R===void 0&&(R={},c[O]=R);let k=R[I];k===void 0&&(k=L.clone(),R[I]=k),L=k}return L.visible=S.visible,L.wireframe=S.wireframe,b===io?L.side=S.shadowSide!==null?S.shadowSide:S.side:L.side=S.shadowSide!==null?S.shadowSide:f[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=C,L.farDistance=y),L}function x(w,S,E,C,y){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===io)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const z=e.update(w),O=w.material;if(Array.isArray(O)){const I=z.groups;for(let R=0,k=I.length;R<k;R++){const D=I[R],H=O[D.materialIndex];if(H&&H.visible){const N=g(w,H,C,E.near,E.far,y);n.renderBufferDirect(E,null,z,N,w,D)}}}else if(O.visible){const I=g(w,O,C,E.near,E.far,y);n.renderBufferDirect(E,null,z,I,w,null)}}const L=w.children;for(let z=0,O=L.length;z<O;z++)x(L[z],S,E,C,y)}}function hE(n,e,t){const i=t.isWebGL2;function r(){let B=!1;const ce=new yt;let K=null;const le=new yt(0,0,0,0);return{setMask:function(ae){K!==ae&&!B&&(n.colorMask(ae,ae,ae,ae),K=ae)},setLocked:function(ae){B=ae},setClear:function(ae,ke,St,at,Si){Si===!0&&(ae*=at,ke*=at,St*=at),ce.set(ae,ke,St,at),le.equals(ce)===!1&&(n.clearColor(ae,ke,St,at),le.copy(ce))},reset:function(){B=!1,K=null,le.set(-1,0,0,0)}}}function s(){let B=!1,ce=null,K=null,le=null;return{setTest:function(ae){ae?be(2929):ye(2929)},setMask:function(ae){ce!==ae&&!B&&(n.depthMask(ae),ce=ae)},setFunc:function(ae){if(K!==ae){if(ae)switch(ae){case jx:n.depthFunc(512);break;case Xx:n.depthFunc(519);break;case Yx:n.depthFunc(513);break;case rd:n.depthFunc(515);break;case $x:n.depthFunc(514);break;case Zx:n.depthFunc(518);break;case Kx:n.depthFunc(516);break;case Qx:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);K=ae}},setLocked:function(ae){B=ae},setClear:function(ae){le!==ae&&(n.clearDepth(ae),le=ae)},reset:function(){B=!1,ce=null,K=null,le=null}}}function o(){let B=!1,ce=null,K=null,le=null,ae=null,ke=null,St=null,at=null,Si=null;return{setTest:function(nt){B||(nt?be(2960):ye(2960))},setMask:function(nt){ce!==nt&&!B&&(n.stencilMask(nt),ce=nt)},setFunc:function(nt,Qn,fn){(K!==nt||le!==Qn||ae!==fn)&&(n.stencilFunc(nt,Qn,fn),K=nt,le=Qn,ae=fn)},setOp:function(nt,Qn,fn){(ke!==nt||St!==Qn||at!==fn)&&(n.stencilOp(nt,Qn,fn),ke=nt,St=Qn,at=fn)},setLocked:function(nt){B=nt},setClear:function(nt){Si!==nt&&(n.clearStencil(nt),Si=nt)},reset:function(){B=!1,ce=null,K=null,le=null,ae=null,ke=null,St=null,at=null,Si=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let u={},m={},_=new WeakMap,p=[],h=null,v=!1,g=null,x=null,w=null,S=null,E=null,C=null,y=null,b=!1,L=null,z=null,O=null,I=null,R=null;const k=n.getParameter(35661);let D=!1,H=0;const N=n.getParameter(7938);N.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(N)[1]),D=H>=1):N.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),D=H>=2);let F=null,U={};const $=n.getParameter(3088),G=n.getParameter(2978),Q=new yt().fromArray($),re=new yt().fromArray(G);function _e(B,ce,K){const le=new Uint8Array(4),ae=n.createTexture();n.bindTexture(B,ae),n.texParameteri(B,10241,9728),n.texParameteri(B,10240,9728);for(let ke=0;ke<K;ke++)n.texImage2D(ce+ke,0,6408,1,1,0,6408,5121,le);return ae}const Y={};Y[3553]=_e(3553,3553,1),Y[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(rd),Ct(!1),Ce(Lh),be(2884),mt(Xi);function be(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function ye(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Me(B,ce){return m[B]!==ce?(n.bindFramebuffer(B,ce),m[B]=ce,i&&(B===36009&&(m[36160]=ce),B===36160&&(m[36009]=ce)),!0):!1}function de(B,ce){let K=p,le=!1;if(B)if(K=_.get(ce),K===void 0&&(K=[],_.set(ce,K)),B.isWebGLMultipleRenderTargets){const ae=B.texture;if(K.length!==ae.length||K[0]!==36064){for(let ke=0,St=ae.length;ke<St;ke++)K[ke]=36064+ke;K.length=ae.length,le=!0}}else K[0]!==36064&&(K[0]=36064,le=!0);else K[0]!==1029&&(K[0]=1029,le=!0);le&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function je(B){return h!==B?(n.useProgram(B),h=B,!0):!1}const Te={[Kr]:32774,[Nx]:32778,[Fx]:32779};if(i)Te[Ih]=32775,Te[zh]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(Te[Ih]=B.MIN_EXT,Te[zh]=B.MAX_EXT)}const xe={[kx]:0,[Bx]:1,[Ox]:768,[M0]:770,[qx]:776,[Hx]:774,[Gx]:772,[Ux]:769,[E0]:771,[Wx]:775,[Vx]:773};function mt(B,ce,K,le,ae,ke,St,at){if(B===Xi){v===!0&&(ye(3042),v=!1);return}if(v===!1&&(be(3042),v=!0),B!==zx){if(B!==g||at!==b){if((x!==Kr||E!==Kr)&&(n.blendEquation(32774),x=Kr,E=Kr),at)switch(B){case vs:n.blendFuncSeparate(1,771,1,771);break;case Ph:n.blendFunc(1,1);break;case Rh:n.blendFuncSeparate(0,769,0,1);break;case Dh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case vs:n.blendFuncSeparate(770,771,1,771);break;case Ph:n.blendFunc(770,1);break;case Rh:n.blendFuncSeparate(0,769,0,1);break;case Dh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,S=null,C=null,y=null,g=B,b=at}return}ae=ae||ce,ke=ke||K,St=St||le,(ce!==x||ae!==E)&&(n.blendEquationSeparate(Te[ce],Te[ae]),x=ce,E=ae),(K!==w||le!==S||ke!==C||St!==y)&&(n.blendFuncSeparate(xe[K],xe[le],xe[ke],xe[St]),w=K,S=le,C=ke,y=St),g=B,b=null}function kt(B,ce){B.side===Ts?ye(2884):be(2884);let K=B.side===Bn;ce&&(K=!K),Ct(K),B.blending===vs&&B.transparent===!1?mt(Xi):mt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const le=B.stencilWrite;c.setTest(le),le&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?be(32926):ye(32926)}function Ct(B){L!==B&&(B?n.frontFace(2304):n.frontFace(2305),L=B)}function Ce(B){B!==Px?(be(2884),B!==z&&(B===Lh?n.cullFace(1029):B===Rx?n.cullFace(1028):n.cullFace(1032))):ye(2884),z=B}function we(B){B!==O&&(D&&n.lineWidth(B),O=B)}function Ae(B,ce,K){B?(be(32823),(I!==ce||R!==K)&&(n.polygonOffset(ce,K),I=ce,R=K)):ye(32823)}function Ve(B){B?be(3089):ye(3089)}function Qe(B){B===void 0&&(B=33984+k-1),F!==B&&(n.activeTexture(B),F=B)}function P(B,ce){F===null&&Qe();let K=U[F];K===void 0&&(K={type:void 0,texture:void 0},U[F]=K),(K.type!==B||K.texture!==ce)&&(n.bindTexture(B,ce||Y[B]),K.type=B,K.texture=ce)}function T(){const B=U[F];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(B){Q.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function pe(B){re.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function Le(B,ce){let K=f.get(ce);K===void 0&&(K=new WeakMap,f.set(ce,K));let le=K.get(B);le===void 0&&(le=n.getUniformBlockIndex(ce,B.name),K.set(B,le))}function Ue(B,ce){const le=f.get(ce).get(B);d.get(B)!==le&&(n.uniformBlockBinding(ce,le,B.__bindingPointIndex),d.set(B,le))}function ot(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},F=null,U={},m={},_=new WeakMap,p=[],h=null,v=!1,g=null,x=null,w=null,S=null,E=null,C=null,y=null,b=!1,L=null,z=null,O=null,I=null,R=null,Q.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:be,disable:ye,bindFramebuffer:Me,drawBuffers:de,useProgram:je,setBlending:mt,setMaterial:kt,setFlipSided:Ct,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Ae,setScissorTest:Ve,activeTexture:Qe,bindTexture:P,unbindTexture:T,compressedTexImage2D:Z,texImage2D:me,texImage3D:he,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:ge,texStorage3D:j,texSubImage2D:ne,texSubImage3D:te,compressedTexSubImage2D:se,scissor:ve,viewport:pe,reset:ot}}function pE(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return v?new OffscreenCanvas(P,T):No("canvas")}function x(P,T,Z,ne){let te=1;if((P.width>ne||P.height>ne)&&(te=ne/Math.max(P.width,P.height)),te<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const se=T?ud:Math.floor,ge=se(te*P.width),j=se(te*P.height);p===void 0&&(p=g(ge,j));const me=Z?g(ge,j):p;return me.width=ge,me.height=j,me.getContext("2d").drawImage(P,0,0,ge,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ge+"x"+j+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function w(P){return ap(P.width)&&ap(P.height)}function S(P){return a?!1:P.wrapS!==zn||P.wrapT!==zn||P.minFilter!==Xt&&P.minFilter!==vn}function E(P,T){return P.generateMipmaps&&T&&P.minFilter!==Xt&&P.minFilter!==vn}function C(P){n.generateMipmap(P)}function y(P,T,Z,ne,te=!1){if(a===!1)return T;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=T;return T===6403&&(Z===5126&&(se=33326),Z===5131&&(se=33325),Z===5121&&(se=33321)),T===33319&&(Z===5126&&(se=33328),Z===5131&&(se=33327),Z===5121&&(se=33323)),T===6408&&(Z===5126&&(se=34836),Z===5131&&(se=34842),Z===5121&&(se=ne===rt&&te===!1?35907:32856),Z===32819&&(se=32854),Z===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function b(P,T,Z){return E(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==vn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){return P===Xt||P===Nh||P===Fh?9728:9729}function z(P){const T=P.target;T.removeEventListener("dispose",z),I(T),T.isVideoTexture&&_.delete(T)}function O(P){const T=P.target;T.removeEventListener("dispose",O),k(T)}function I(P){const T=i.get(P);if(T.__webglInit===void 0)return;const Z=P.source,ne=h.get(Z);if(ne){const te=ne[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(P),Object.keys(ne).length===0&&h.delete(Z)}i.remove(P)}function R(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const Z=P.source,ne=h.get(Z);delete ne[T.__cacheKey],o.memory.textures--}function k(P){const T=P.texture,Z=i.get(P),ne=i.get(T);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)n.deleteFramebuffer(Z.__webglFramebuffer[te]),Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[te]);else{if(n.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let te=0;te<Z.__webglColorRenderbuffer.length;te++)Z.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[te]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let te=0,se=T.length;te<se;te++){const ge=i.get(T[te]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(T[te])}i.remove(T),i.remove(P)}let D=0;function H(){D=0}function N(){const P=D;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),D+=1,P}function F(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.encoding),T.join()}function U(P,T){const Z=i.get(P);if(P.isVideoTexture&&Ve(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Z,P,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,Z.__webglTexture)}function $(P,T){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){ye(Z,P,T);return}t.activeTexture(33984+T),t.bindTexture(35866,Z.__webglTexture)}function G(P,T){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){ye(Z,P,T);return}t.activeTexture(33984+T),t.bindTexture(32879,Z.__webglTexture)}function Q(P,T){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Me(Z,P,T);return}t.activeTexture(33984+T),t.bindTexture(34067,Z.__webglTexture)}const re={[ad]:10497,[zn]:33071,[ld]:33648},_e={[Xt]:9728,[Nh]:9984,[Fh]:9986,[vn]:9729,[oy]:9985,[Wl]:9987};function Y(P,T,Z){if(Z?(n.texParameteri(P,10242,re[T.wrapS]),n.texParameteri(P,10243,re[T.wrapT]),(P===32879||P===35866)&&n.texParameteri(P,32882,re[T.wrapR]),n.texParameteri(P,10240,_e[T.magFilter]),n.texParameteri(P,10241,_e[T.minFilter])):(n.texParameteri(P,10242,33071),n.texParameteri(P,10243,33071),(P===32879||P===35866)&&n.texParameteri(P,32882,33071),(T.wrapS!==zn||T.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,10240,L(T.magFilter)),n.texParameteri(P,10241,L(T.minFilter)),T.minFilter!==Xt&&T.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(T.type===gr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===zo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function be(P,T){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const ne=T.source;let te=h.get(ne);te===void 0&&(te={},h.set(ne,te));const se=F(T);if(se!==P.__cacheKey){te[se]===void 0&&(te[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),te[se].usedTimes++;const ge=te[P.__cacheKey];ge!==void 0&&(te[P.__cacheKey].usedTimes--,ge.usedTimes===0&&R(T)),P.__cacheKey=se,P.__webglTexture=te[se].texture}return Z}function ye(P,T,Z){let ne=3553;T.isDataArrayTexture&&(ne=35866),T.isData3DTexture&&(ne=32879);const te=be(P,T),se=T.source;if(t.activeTexture(33984+Z),t.bindTexture(ne,P.__webglTexture),se.version!==se.__currentVersion||te===!0){n.pixelStorei(37440,T.flipY),n.pixelStorei(37441,T.premultiplyAlpha),n.pixelStorei(3317,T.unpackAlignment),n.pixelStorei(37443,0);const ge=S(T)&&w(T.image)===!1;let j=x(T.image,ge,!1,d);j=Qe(T,j);const me=w(j)||a,he=s.convert(T.format,T.encoding);let ve=s.convert(T.type),pe=y(T.internalFormat,he,ve,T.encoding,T.isVideoTexture);Y(ne,T,me);let Le;const Ue=T.mipmaps,ot=a&&T.isVideoTexture!==!0,B=se.__currentVersion===void 0||te===!0,ce=b(T,j,me);if(T.isDepthTexture)pe=6402,a?T.type===gr?pe=36012:T.type===mr?pe=33190:T.type===_s?pe=35056:pe=33189:T.type===gr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===yr&&pe===6402&&T.type!==T0&&T.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=mr,ve=s.convert(T.type)),T.format===Ls&&pe===6402&&(pe=34041,T.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=_s,ve=s.convert(T.type))),B&&(ot?t.texStorage2D(3553,1,pe,j.width,j.height):t.texImage2D(3553,0,pe,j.width,j.height,0,he,ve,null));else if(T.isDataTexture)if(Ue.length>0&&me){ot&&B&&t.texStorage2D(3553,ce,pe,Ue[0].width,Ue[0].height);for(let K=0,le=Ue.length;K<le;K++)Le=Ue[K],ot?t.texSubImage2D(3553,K,0,0,Le.width,Le.height,he,ve,Le.data):t.texImage2D(3553,K,pe,Le.width,Le.height,0,he,ve,Le.data);T.generateMipmaps=!1}else ot?(B&&t.texStorage2D(3553,ce,pe,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,he,ve,j.data)):t.texImage2D(3553,0,pe,j.width,j.height,0,he,ve,j.data);else if(T.isCompressedTexture){ot&&B&&t.texStorage2D(3553,ce,pe,Ue[0].width,Ue[0].height);for(let K=0,le=Ue.length;K<le;K++)Le=Ue[K],T.format!==Yn?he!==null?ot?t.compressedTexSubImage2D(3553,K,0,0,Le.width,Le.height,he,Le.data):t.compressedTexImage2D(3553,K,pe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(3553,K,0,0,Le.width,Le.height,he,ve,Le.data):t.texImage2D(3553,K,pe,Le.width,Le.height,0,he,ve,Le.data)}else if(T.isDataArrayTexture)ot?(B&&t.texStorage3D(35866,ce,pe,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,he,ve,j.data)):t.texImage3D(35866,0,pe,j.width,j.height,j.depth,0,he,ve,j.data);else if(T.isData3DTexture)ot?(B&&t.texStorage3D(32879,ce,pe,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,he,ve,j.data)):t.texImage3D(32879,0,pe,j.width,j.height,j.depth,0,he,ve,j.data);else if(T.isFramebufferTexture){if(B)if(ot)t.texStorage2D(3553,ce,pe,j.width,j.height);else{let K=j.width,le=j.height;for(let ae=0;ae<ce;ae++)t.texImage2D(3553,ae,pe,K,le,0,he,ve,null),K>>=1,le>>=1}}else if(Ue.length>0&&me){ot&&B&&t.texStorage2D(3553,ce,pe,Ue[0].width,Ue[0].height);for(let K=0,le=Ue.length;K<le;K++)Le=Ue[K],ot?t.texSubImage2D(3553,K,0,0,he,ve,Le):t.texImage2D(3553,K,pe,he,ve,Le);T.generateMipmaps=!1}else ot?(B&&t.texStorage2D(3553,ce,pe,j.width,j.height),t.texSubImage2D(3553,0,0,0,he,ve,j)):t.texImage2D(3553,0,pe,he,ve,j);E(T,me)&&C(ne),se.__currentVersion=se.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Me(P,T,Z){if(T.image.length!==6)return;const ne=be(P,T),te=T.source;if(t.activeTexture(33984+Z),t.bindTexture(34067,P.__webglTexture),te.version!==te.__currentVersion||ne===!0){n.pixelStorei(37440,T.flipY),n.pixelStorei(37441,T.premultiplyAlpha),n.pixelStorei(3317,T.unpackAlignment),n.pixelStorei(37443,0);const se=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,j=[];for(let K=0;K<6;K++)!se&&!ge?j[K]=x(T.image[K],!1,!0,c):j[K]=ge?T.image[K].image:T.image[K],j[K]=Qe(T,j[K]);const me=j[0],he=w(me)||a,ve=s.convert(T.format,T.encoding),pe=s.convert(T.type),Le=y(T.internalFormat,ve,pe,T.encoding),Ue=a&&T.isVideoTexture!==!0,ot=te.__currentVersion===void 0||ne===!0;let B=b(T,me,he);Y(34067,T,he);let ce;if(se){Ue&&ot&&t.texStorage2D(34067,B,Le,me.width,me.height);for(let K=0;K<6;K++){ce=j[K].mipmaps;for(let le=0;le<ce.length;le++){const ae=ce[le];T.format!==Yn?ve!==null?Ue?t.compressedTexSubImage2D(34069+K,le,0,0,ae.width,ae.height,ve,ae.data):t.compressedTexImage2D(34069+K,le,Le,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+K,le,0,0,ae.width,ae.height,ve,pe,ae.data):t.texImage2D(34069+K,le,Le,ae.width,ae.height,0,ve,pe,ae.data)}}}else{ce=T.mipmaps,Ue&&ot&&(ce.length>0&&B++,t.texStorage2D(34067,B,Le,j[0].width,j[0].height));for(let K=0;K<6;K++)if(ge){Ue?t.texSubImage2D(34069+K,0,0,0,j[K].width,j[K].height,ve,pe,j[K].data):t.texImage2D(34069+K,0,Le,j[K].width,j[K].height,0,ve,pe,j[K].data);for(let le=0;le<ce.length;le++){const ke=ce[le].image[K].image;Ue?t.texSubImage2D(34069+K,le+1,0,0,ke.width,ke.height,ve,pe,ke.data):t.texImage2D(34069+K,le+1,Le,ke.width,ke.height,0,ve,pe,ke.data)}}else{Ue?t.texSubImage2D(34069+K,0,0,0,ve,pe,j[K]):t.texImage2D(34069+K,0,Le,ve,pe,j[K]);for(let le=0;le<ce.length;le++){const ae=ce[le];Ue?t.texSubImage2D(34069+K,le+1,0,0,ve,pe,ae.image[K]):t.texImage2D(34069+K,le+1,Le,ve,pe,ae.image[K])}}}E(T,he)&&C(34067),te.__currentVersion=te.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function de(P,T,Z,ne,te){const se=s.convert(Z.format,Z.encoding),ge=s.convert(Z.type),j=y(Z.internalFormat,se,ge,Z.encoding);i.get(T).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,j,T.width,T.height,T.depth,0,se,ge,null):t.texImage2D(te,0,j,T.width,T.height,0,se,ge,null)),t.bindFramebuffer(36160,P),Ae(T)?u.framebufferTexture2DMultisampleEXT(36160,ne,te,i.get(Z).__webglTexture,0,we(T)):n.framebufferTexture2D(36160,ne,te,i.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function je(P,T,Z){if(n.bindRenderbuffer(36161,P),T.depthBuffer&&!T.stencilBuffer){let ne=33189;if(Z||Ae(T)){const te=T.depthTexture;te&&te.isDepthTexture&&(te.type===gr?ne=36012:te.type===mr&&(ne=33190));const se=we(T);Ae(T)?u.renderbufferStorageMultisampleEXT(36161,se,ne,T.width,T.height):n.renderbufferStorageMultisample(36161,se,ne,T.width,T.height)}else n.renderbufferStorage(36161,ne,T.width,T.height);n.framebufferRenderbuffer(36160,36096,36161,P)}else if(T.depthBuffer&&T.stencilBuffer){const ne=we(T);Z&&Ae(T)===!1?n.renderbufferStorageMultisample(36161,ne,35056,T.width,T.height):Ae(T)?u.renderbufferStorageMultisampleEXT(36161,ne,35056,T.width,T.height):n.renderbufferStorage(36161,34041,T.width,T.height),n.framebufferRenderbuffer(36160,33306,36161,P)}else{const ne=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0;te<ne.length;te++){const se=ne[te],ge=s.convert(se.format,se.encoding),j=s.convert(se.type),me=y(se.internalFormat,ge,j,se.encoding),he=we(T);Z&&Ae(T)===!1?n.renderbufferStorageMultisample(36161,he,me,T.width,T.height):Ae(T)?u.renderbufferStorageMultisampleEXT(36161,he,me,T.width,T.height):n.renderbufferStorage(36161,me,T.width,T.height)}}n.bindRenderbuffer(36161,null)}function Te(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,te=we(T);if(T.depthTexture.format===yr)Ae(T)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,te):n.framebufferTexture2D(36160,36096,3553,ne,0);else if(T.depthTexture.format===Ls)Ae(T)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,te):n.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function xe(P){const T=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,P)}else if(Z){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=n.createRenderbuffer(),je(T.__webglDepthbuffer[ne],P,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),je(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function mt(P,T,Z){const ne=i.get(P);T!==void 0&&de(ne.__webglFramebuffer,P,P.texture,36064,3553),Z!==void 0&&xe(P)}function kt(P){const T=P.texture,Z=i.get(P),ne=i.get(T);P.addEventListener("dispose",O),P.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=T.version,o.memory.textures++);const te=P.isWebGLCubeRenderTarget===!0,se=P.isWebGLMultipleRenderTargets===!0,ge=w(P)||a;if(te){Z.__webglFramebuffer=[];for(let j=0;j<6;j++)Z.__webglFramebuffer[j]=n.createFramebuffer()}else{if(Z.__webglFramebuffer=n.createFramebuffer(),se)if(r.drawBuffers){const j=P.texture;for(let me=0,he=j.length;me<he;me++){const ve=i.get(j[me]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ae(P)===!1){const j=se?T:[T];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let me=0;me<j.length;me++){const he=j[me];Z.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[me]);const ve=s.convert(he.format,he.encoding),pe=s.convert(he.type),Le=y(he.internalFormat,ve,pe,he.encoding),Ue=we(P);n.renderbufferStorageMultisample(36161,Ue,Le,P.width,P.height),n.framebufferRenderbuffer(36160,36064+me,36161,Z.__webglColorRenderbuffer[me])}n.bindRenderbuffer(36161,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),je(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ne.__webglTexture),Y(34067,T,ge);for(let j=0;j<6;j++)de(Z.__webglFramebuffer[j],P,T,36064,34069+j);E(T,ge)&&C(34067),t.unbindTexture()}else if(se){const j=P.texture;for(let me=0,he=j.length;me<he;me++){const ve=j[me],pe=i.get(ve);t.bindTexture(3553,pe.__webglTexture),Y(3553,ve,ge),de(Z.__webglFramebuffer,P,ve,36064+me,3553),E(ve,ge)&&C(3553)}t.unbindTexture()}else{let j=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?j=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,ne.__webglTexture),Y(j,T,ge),de(Z.__webglFramebuffer,P,T,36064,j),E(T,ge)&&C(j),t.unbindTexture()}P.depthBuffer&&xe(P)}function Ct(P){const T=w(P)||a,Z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ne=0,te=Z.length;ne<te;ne++){const se=Z[ne];if(E(se,T)){const ge=P.isWebGLCubeRenderTarget?34067:3553,j=i.get(se).__webglTexture;t.bindTexture(ge,j),C(ge),t.unbindTexture()}}}function Ce(P){if(a&&P.samples>0&&Ae(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Z=P.width,ne=P.height;let te=16384;const se=[],ge=P.stencilBuffer?33306:36096,j=i.get(P),me=P.isWebGLMultipleRenderTargets===!0;if(me)for(let he=0;he<T.length;he++)t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,j.__webglFramebuffer),n.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,j.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,j.__webglFramebuffer);for(let he=0;he<T.length;he++){se.push(36064+he),P.depthBuffer&&se.push(ge);const ve=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(ve===!1&&(P.depthBuffer&&(te|=256),P.stencilBuffer&&(te|=1024)),me&&n.framebufferRenderbuffer(36008,36064,36161,j.__webglColorRenderbuffer[he]),ve===!0&&(n.invalidateFramebuffer(36008,[ge]),n.invalidateFramebuffer(36009,[ge])),me){const pe=i.get(T[he]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,pe,0)}n.blitFramebuffer(0,0,Z,ne,0,0,Z,ne,te,9728),m&&n.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),me)for(let he=0;he<T.length;he++){t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+he,36161,j.__webglColorRenderbuffer[he]);const ve=i.get(T[he]).__webglTexture;t.bindFramebuffer(36160,j.__webglFramebuffer),n.framebufferTexture2D(36009,36064+he,3553,ve,0)}t.bindFramebuffer(36009,j.__webglMultisampledFramebuffer)}}function we(P){return Math.min(f,P.samples)}function Ae(P){const T=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ve(P){const T=o.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function Qe(P,T){const Z=P.encoding,ne=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===cd||Z!==Ar&&(Z===rt?a===!1?e.has("EXT_sRGB")===!0&&ne===Yn?(P.format=cd,P.minFilter=vn,P.generateMipmaps=!1):T=P0.sRGBToLinear(T):(ne!==Yn||te!==Cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),T}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=U,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=mt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ae}function mE(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Cr)return 5121;if(s===uy)return 32819;if(s===dy)return 32820;if(s===ay)return 5120;if(s===ly)return 5122;if(s===T0)return 5123;if(s===cy)return 5124;if(s===mr)return 5125;if(s===gr)return 5126;if(s===zo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fy)return 6406;if(s===Yn)return 6408;if(s===py)return 6409;if(s===my)return 6410;if(s===yr)return 6402;if(s===Ls)return 34041;if(s===gy)return 6403;if(s===hy)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===cd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vy)return 36244;if(s===_y)return 33319;if(s===xy)return 33320;if(s===yy)return 36249;if(s===Tc||s===Cc||s===Ac||s===Lc)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kh||s===Bh||s===Oh||s===Uh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gh||s===Vh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Gh)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hh||s===Wh||s===qh||s===jh||s===Xh||s===Yh||s===$h||s===Zh||s===Kh||s===Qh||s===Jh||s===ep||s===tp||s===np)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ep)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tp)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===np)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ip)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ip)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===_s?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class gE extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class za extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vE={type:"move"};class ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const g=new za;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[p.jointName]=g,c.add(g)}const v=c.joints[p.jointName];h!==null&&(v.matrix.fromArray(h.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=h.radius),v.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class _E extends Mn{constructor(e,t,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:yr,d!==yr&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===yr&&(i=mr),i===void 0&&d===Ls&&(i=_s),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1}}class xE extends zs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,d=null,f=null,u=null,m=null;const _=t.getContextAttributes();let p=null,h=null;const v=[],g=[],x=new In;x.layers.enable(1),x.viewport=new yt;const w=new In;w.layers.enable(2),w.viewport=new yt;const S=[x,w],E=new gE;E.layers.enable(1),E.layers.enable(2);let C=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let U=v[F];return U===void 0&&(U=new ru,v[F]=U),U.getTargetRaySpace()},this.getControllerGrip=function(F){let U=v[F];return U===void 0&&(U=new ru,v[F]=U),U.getGripSpace()},this.getHand=function(F){let U=v[F];return U===void 0&&(U=new ru,v[F]=U),U.getHandSpace()};function b(F){const U=g.indexOf(F.inputSource);if(U===-1)return;const $=v[U];$!==void 0&&$.dispatchEvent({type:F.type,data:F.inputSource})}function L(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",z);for(let F=0;F<v.length;F++){const U=g[F];U!==null&&(g[F]=null,v[F].disconnect(U))}C=null,y=null,e.setRenderTarget(p),u=null,f=null,d=null,r=null,h=null,N.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",L),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:u}),h=new Zi(u.framebufferWidth,u.framebufferHeight,{format:Yn,type:Cr,encoding:e.outputEncoding})}else{let U=null,$=null,G=null;_.depth&&(G=_.stencil?35056:33190,U=_.stencil?Ls:yr,$=_.stencil?_s:mr);const Q={colorFormat:32856,depthFormat:G,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),h=new Zi(f.textureWidth,f.textureHeight,{format:Yn,type:Cr,depthTexture:new _E(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const re=e.properties.get(h);re.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),N.setContext(r),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(F){for(let U=0;U<F.removed.length;U++){const $=F.removed[U],G=g.indexOf($);G>=0&&(g[G]=null,v[G].dispatchEvent({type:"disconnected",data:$}))}for(let U=0;U<F.added.length;U++){const $=F.added[U];let G=g.indexOf($);if(G===-1){for(let re=0;re<v.length;re++)if(re>=g.length){g.push($),G=re;break}else if(g[re]===null){g[re]=$,G=re;break}if(G===-1)break}const Q=v[G];Q&&Q.dispatchEvent({type:"connected",data:$})}}const O=new V,I=new V;function R(F,U,$){O.setFromMatrixPosition(U.matrixWorld),I.setFromMatrixPosition($.matrixWorld);const G=O.distanceTo(I),Q=U.projectionMatrix.elements,re=$.projectionMatrix.elements,_e=Q[14]/(Q[10]-1),Y=Q[14]/(Q[10]+1),be=(Q[9]+1)/Q[5],ye=(Q[9]-1)/Q[5],Me=(Q[8]-1)/Q[0],de=(re[8]+1)/re[0],je=_e*Me,Te=_e*de,xe=G/(-Me+de),mt=xe*-Me;U.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(mt),F.translateZ(xe),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const kt=_e+xe,Ct=Y+xe,Ce=je-mt,we=Te+(G-mt),Ae=be*Y/Ct*kt,Ve=ye*Y/Ct*kt;F.projectionMatrix.makePerspective(Ce,we,Ae,Ve,kt,Ct)}function k(F,U){U===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(U.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;E.near=w.near=x.near=F.near,E.far=w.far=x.far=F.far,(C!==E.near||y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,y=E.far);const U=F.parent,$=E.cameras;k(E,U);for(let Q=0;Q<$.length;Q++)k($[Q],U);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),F.position.copy(E.position),F.quaternion.copy(E.quaternion),F.scale.copy(E.scale),F.matrix.copy(E.matrix),F.matrixWorld.copy(E.matrixWorld);const G=F.children;for(let Q=0,re=G.length;Q<re;Q++)G[Q].updateMatrixWorld(!0);$.length===2?R(E,x,w):E.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(F){f!==null&&(f.fixedFoveation=F),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=F)};let D=null;function H(F,U){if(c=U.getViewerPose(l||o),m=U,c!==null){const $=c.views;u!==null&&(e.setRenderTargetFramebuffer(h,u.framebuffer),e.setRenderTarget(h));let G=!1;$.length!==E.cameras.length&&(E.cameras.length=0,G=!0);for(let Q=0;Q<$.length;Q++){const re=$[Q];let _e=null;if(u!==null)_e=u.getViewport(re);else{const be=d.getViewSubImage(f,re);_e=be.viewport,Q===0&&(e.setRenderTargetTextures(h,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(h))}let Y=S[Q];Y===void 0&&(Y=new In,Y.layers.enable(Q),Y.viewport=new yt,S[Q]=Y),Y.matrix.fromArray(re.transform.matrix),Y.projectionMatrix.fromArray(re.projectionMatrix),Y.viewport.set(_e.x,_e.y,_e.width,_e.height),Q===0&&E.matrix.copy(Y.matrix),G===!0&&E.cameras.push(Y)}}for(let $=0;$<v.length;$++){const G=g[$],Q=v[$];G!==null&&Q!==void 0&&Q.update(G,U,l||o)}D&&D(F,U),m=null}const N=new O0;N.setAnimationLoop(H),this.setAnimationLoop=function(F){D=F},this.dispose=function(){}}}function yE(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,v,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),c(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&u(p,h,x)):h.isMeshMatcapMaterial?(r(p,h),m(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,v,g):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Bn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Bn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const w=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let g;h.map?g=h.map:h.specularMap?g=h.specularMap:h.displacementMap?g=h.displacementMap:h.normalMap?g=h.normalMap:h.bumpMap?g=h.bumpMap:h.roughnessMap?g=h.roughnessMap:h.metalnessMap?g=h.metalnessMap:h.alphaMap?g=h.alphaMap:h.emissiveMap?g=h.emissiveMap:h.clearcoatMap?g=h.clearcoatMap:h.clearcoatNormalMap?g=h.clearcoatNormalMap:h.clearcoatRoughnessMap?g=h.clearcoatRoughnessMap:h.iridescenceMap?g=h.iridescenceMap:h.iridescenceThicknessMap?g=h.iridescenceThicknessMap:h.specularIntensityMap?g=h.specularIntensityMap:h.specularColorMap?g=h.specularColorMap:h.transmissionMap?g=h.transmissionMap:h.thicknessMap?g=h.thicknessMap:h.sheenColorMap?g=h.sheenColorMap:h.sheenRoughnessMap&&(g=h.sheenRoughnessMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,v,g){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*v,p.scale.value=g*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function u(p,h,v){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Bn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function wE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(g,x){const w=x.program;i.uniformBlockBinding(g,w)}function c(g,x){let w=r[g.id];w===void 0&&(_(g),w=d(g),r[g.id]=w,g.addEventListener("dispose",h));const S=x.program;i.updateUBOMapping(g,S);const E=e.render.frame;s[g.id]!==E&&(u(g),s[g.id]=E)}function d(g){const x=f();g.__bindingPointIndex=x;const w=n.createBuffer(),S=g.__size,E=g.usage;return n.bindBuffer(35345,w),n.bufferData(35345,S,E),n.bindBuffer(35345,null),n.bindBufferBase(35345,x,w),w}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){const x=r[g.id],w=g.uniforms,S=g.__cache;n.bindBuffer(35345,x);for(let E=0,C=w.length;E<C;E++){const y=w[E];if(m(y,E,S)===!0){const b=y.value,L=y.__offset;typeof b=="number"?(y.__data[0]=b,n.bufferSubData(35345,L,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):b.toArray(y.__data),n.bufferSubData(35345,L,y.__data))}}n.bindBuffer(35345,null)}function m(g,x,w){const S=g.value;if(w[x]===void 0)return typeof S=="number"?w[x]=S:w[x]=S.clone(),!0;if(typeof S=="number"){if(w[x]!==S)return w[x]=S,!0}else{const E=w[x];if(E.equals(S)===!1)return E.copy(S),!0}return!1}function _(g){const x=g.uniforms;let w=0;const S=16;let E=0;for(let C=0,y=x.length;C<y;C++){const b=x[C],L=p(b);if(b.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=w,C>0){E=w%S;const z=S-E;E!==0&&z-L.boundary<0&&(w+=S-E,b.__offset=w)}w+=L.storage}return E=w%S,E>0&&(w+=S-E),g.__size=w,g.__cache={},this}function p(g){const x=g.value,w={boundary:0,storage:0};return typeof x=="number"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),w}function h(g){const x=g.target;x.removeEventListener("dispose",h);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function v(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}function SE(){const n=No("canvas");return n.style.display="block",n}function q0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:SE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=n.alpha!==void 0?n.alpha:!1;let f=null,u=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ar,this.physicallyCorrectLights=!1,this.toneMapping=mi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,v=0,g=0,x=null,w=-1,S=null;const E=new yt,C=new yt;let y=null,b=e.width,L=e.height,z=1,O=null,I=null;const R=new yt(0,0,b,L),k=new yt(0,0,b,L);let D=!1;const H=new df;let N=!1,F=!1,U=null;const $=new wt,G=new Fe,Q=new V,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return x===null?z:1}let Y=t;function be(A,W){for(let X=0;X<A.length;X++){const q=A[X],J=e.getContext(q,W);if(J!==null)return J}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${af}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Ue,!1),e.addEventListener("webglcontextcreationerror",ot,!1),Y===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),Y=be(W,A),Y===null)throw be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,Me,de,je,Te,xe,mt,kt,Ct,Ce,we,Ae,Ve,Qe,P,T,Z,ne,te,se,ge,j,me,he;function ve(){ye=new DS(Y),Me=new TS(Y,ye,n),ye.init(Me),j=new mE(Y,ye,Me),de=new hE(Y,ye,Me),je=new NS,Te=new JM,xe=new pE(Y,ye,de,Te,Me,j,je),mt=new AS(p),kt=new RS(p),Ct=new Xy(Y,Me),me=new ES(Y,ye,Ct,Me),Ce=new IS(Y,Ct,je,me),we=new OS(Y,Ce,Ct,je),te=new BS(Y,Me,xe),T=new CS(Te),Ae=new QM(p,mt,kt,ye,Me,me,T),Ve=new yE(p,Te),Qe=new tE,P=new aE(ye,Me),ne=new MS(p,mt,de,we,d,o),Z=new fE(p,we,Me),he=new wE(Y,je,Me,de),se=new bS(Y,ye,je,Me),ge=new zS(Y,ye,je,Me),je.programs=Ae.programs,p.capabilities=Me,p.extensions=ye,p.properties=Te,p.renderLists=Qe,p.shadowMap=Z,p.state=de,p.info=je}ve();const pe=new xE(p,Y);this.xr=pe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(b,L,!1))},this.getSize=function(A){return A.set(b,L)},this.setSize=function(A,W,X){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=A,L=W,e.width=Math.floor(A*z),e.height=Math.floor(W*z),X!==!1&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(b*z,L*z).floor()},this.setDrawingBufferSize=function(A,W,X){b=A,L=W,z=X,e.width=Math.floor(A*X),e.height=Math.floor(W*X),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,W,X,q){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,W,X,q),de.viewport(E.copy(R).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(k)},this.setScissor=function(A,W,X,q){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,W,X,q),de.scissor(C.copy(k).multiplyScalar(z).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(A){de.setScissorTest(D=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(A=!0,W=!0,X=!0){let q=0;A&&(q|=16384),W&&(q|=256),X&&(q|=1024),Y.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Qe.dispose(),P.dispose(),Te.dispose(),mt.dispose(),kt.dispose(),we.dispose(),me.dispose(),he.dispose(),Ae.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ke),pe.removeEventListener("sessionend",St),U&&(U.dispose(),U=null),at.stop()};function Le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const A=je.autoReset,W=Z.enabled,X=Z.autoUpdate,q=Z.needsUpdate,J=Z.type;ve(),je.autoReset=A,Z.enabled=W,Z.autoUpdate=X,Z.needsUpdate=q,Z.type=J}function ot(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function B(A){const W=A.target;W.removeEventListener("dispose",B),ce(W)}function ce(A){K(A),Te.remove(A)}function K(A){const W=Te.get(A).programs;W!==void 0&&(W.forEach(function(X){Ae.releaseProgram(X)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,X,q,J,Se){W===null&&(W=re);const Ee=J.isMesh&&J.matrixWorld.determinant()<0,Re=av(A,W,X,q,J);de.setMaterial(q,Ee);let Pe=X.index;const He=X.attributes.position;if(Pe===null){if(He===void 0||He.count===0)return}else if(Pe.count===0)return;let ze=1;q.wireframe===!0&&(Pe=Ce.getWireframeAttribute(X),ze=2),me.setup(J,q,Re,X,Pe);let Be,it=se;Pe!==null&&(Be=Ct.get(Pe),it=ge,it.setIndex(Be));const tr=Pe!==null?Pe.count:He.count,Rr=X.drawRange.start*ze,Dr=X.drawRange.count*ze,Un=Se!==null?Se.start*ze:0,Ge=Se!==null?Se.count*ze:1/0,Ir=Math.max(Rr,Un),ut=Math.min(tr,Rr+Dr,Un+Ge)-1,hn=Math.max(0,ut-Ir+1);if(hn!==0){if(J.isMesh)q.wireframe===!0?(de.setLineWidth(q.wireframeLinewidth*_e()),it.setMode(1)):it.setMode(4);else if(J.isLine){let Mi=q.linewidth;Mi===void 0&&(Mi=1),de.setLineWidth(Mi*_e()),J.isLineSegments?it.setMode(1):J.isLineLoop?it.setMode(2):it.setMode(3)}else J.isPoints?it.setMode(0):J.isSprite&&it.setMode(4);if(J.isInstancedMesh)it.renderInstances(Ir,hn,J.count);else if(X.isInstancedBufferGeometry){const Mi=Math.min(X.instanceCount,X._maxInstanceCount);it.renderInstances(Ir,hn,Mi)}else it.render(Ir,hn)}},this.compile=function(A,W){u=P.get(A),u.init(),_.push(u),A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights(p.physicallyCorrectLights),A.traverse(function(X){const q=X.material;if(q)if(Array.isArray(q))for(let J=0;J<q.length;J++){const Se=q[J];Zl(Se,A,X)}else Zl(q,A,X)}),_.pop(),u=null};let le=null;function ae(A){le&&le(A)}function ke(){at.stop()}function St(){at.start()}const at=new O0;at.setAnimationLoop(ae),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(A){le=A,pe.setAnimationLoop(A),A===null?at.stop():at.start()},pe.addEventListener("sessionstart",ke),pe.addEventListener("sessionend",St),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(W),W=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,W,x),u=P.get(A,_.length),u.init(),_.push(u),$.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H.setFromProjectionMatrix($),F=this.localClippingEnabled,N=T.init(this.clippingPlanes,F,W),f=Qe.get(A,m.length),f.init(),m.push(f),Si(A,W,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(O,I),N===!0&&T.beginShadows();const X=u.state.shadowsArray;if(Z.render(X,A,W),N===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,A),u.setupLights(p.physicallyCorrectLights),W.isArrayCamera){const q=W.cameras;for(let J=0,Se=q.length;J<Se;J++){const Ee=q[J];nt(f,A,Ee,Ee.viewport)}}else nt(f,A,W);x!==null&&(xe.updateMultisampleRenderTarget(x),xe.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(p,A,W),me.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?u=_[_.length-1]:u=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Si(A,W,X,q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){q&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const Ee=we.update(A),Re=A.material;Re.visible&&f.push(A,Ee,Re,X,Q.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==je.render.frame&&(A.skeleton.update(),A.skeleton.frame=je.render.frame),!A.frustumCulled||H.intersectsObject(A))){q&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const Ee=we.update(A),Re=A.material;if(Array.isArray(Re)){const Pe=Ee.groups;for(let He=0,ze=Pe.length;He<ze;He++){const Be=Pe[He],it=Re[Be.materialIndex];it&&it.visible&&f.push(A,Ee,it,X,Q.z,Be)}}else Re.visible&&f.push(A,Ee,Re,X,Q.z,null)}}const Se=A.children;for(let Ee=0,Re=Se.length;Ee<Re;Ee++)Si(Se[Ee],W,X,q)}function nt(A,W,X,q){const J=A.opaque,Se=A.transmissive,Ee=A.transparent;u.setupLightsView(X),Se.length>0&&Qn(J,W,X),q&&de.viewport(E.copy(q)),J.length>0&&fn(J,W,X),Se.length>0&&fn(Se,W,X),Ee.length>0&&fn(Ee,W,X),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Qn(A,W,X){const q=Me.isWebGL2;U===null&&(U=new Zi(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?zo:Cr,minFilter:Wl,samples:q&&s===!0?4:0})),p.getDrawingBufferSize(G),q?U.setSize(G.x,G.y):U.setSize(ud(G.x),ud(G.y));const J=p.getRenderTarget();p.setRenderTarget(U),p.clear();const Se=p.toneMapping;p.toneMapping=mi,fn(A,W,X),p.toneMapping=Se,xe.updateMultisampleRenderTarget(U),xe.updateRenderTargetMipmap(U),p.setRenderTarget(J)}function fn(A,W,X){const q=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Se=A.length;J<Se;J++){const Ee=A[J],Re=Ee.object,Pe=Ee.geometry,He=q===null?Ee.material:q,ze=Ee.group;Re.layers.test(X.layers)&&ov(Re,W,X,Pe,He,ze)}}function ov(A,W,X,q,J,Se){A.onBeforeRender(p,W,X,q,J,Se),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(p,W,X,q,A,Se),J.transparent===!0&&J.side===Ts?(J.side=Bn,J.needsUpdate=!0,p.renderBufferDirect(X,W,q,J,A,Se),J.side=Io,J.needsUpdate=!0,p.renderBufferDirect(X,W,q,J,A,Se),J.side=Ts):p.renderBufferDirect(X,W,q,J,A,Se),A.onAfterRender(p,W,X,q,J,Se)}function Zl(A,W,X){W.isScene!==!0&&(W=re);const q=Te.get(A),J=u.state.lights,Se=u.state.shadowsArray,Ee=J.state.version,Re=Ae.getParameters(A,J.state,Se,W,X),Pe=Ae.getProgramCacheKey(Re);let He=q.programs;q.environment=A.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(A.isMeshStandardMaterial?kt:mt).get(A.envMap||q.environment),He===void 0&&(A.addEventListener("dispose",B),He=new Map,q.programs=He);let ze=He.get(Pe);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===Ee)return _f(A,Re),ze}else Re.uniforms=Ae.getUniforms(A),A.onBuild(X,Re,p),A.onBeforeCompile(Re,p),ze=Ae.acquireProgram(Re,Pe),He.set(Pe,ze),q.uniforms=Re.uniforms;const Be=q.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=T.uniform),_f(A,Re),q.needsLights=cv(A),q.lightsStateVersion=Ee,q.needsLights&&(Be.ambientLightColor.value=J.state.ambient,Be.lightProbe.value=J.state.probe,Be.directionalLights.value=J.state.directional,Be.directionalLightShadows.value=J.state.directionalShadow,Be.spotLights.value=J.state.spot,Be.spotLightShadows.value=J.state.spotShadow,Be.rectAreaLights.value=J.state.rectArea,Be.ltc_1.value=J.state.rectAreaLTC1,Be.ltc_2.value=J.state.rectAreaLTC2,Be.pointLights.value=J.state.point,Be.pointLightShadows.value=J.state.pointShadow,Be.hemisphereLights.value=J.state.hemi,Be.directionalShadowMap.value=J.state.directionalShadowMap,Be.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Be.spotShadowMap.value=J.state.spotShadowMap,Be.spotShadowMatrix.value=J.state.spotShadowMatrix,Be.pointShadowMap.value=J.state.pointShadowMap,Be.pointShadowMatrix.value=J.state.pointShadowMatrix);const it=ze.getUniforms(),tr=Ja.seqWithValue(it.seq,Be);return q.currentProgram=ze,q.uniformsList=tr,ze}function _f(A,W){const X=Te.get(A);X.outputEncoding=W.outputEncoding,X.instancing=W.instancing,X.skinning=W.skinning,X.morphTargets=W.morphTargets,X.morphNormals=W.morphNormals,X.morphColors=W.morphColors,X.morphTargetsCount=W.morphTargetsCount,X.numClippingPlanes=W.numClippingPlanes,X.numIntersection=W.numClipIntersection,X.vertexAlphas=W.vertexAlphas,X.vertexTangents=W.vertexTangents,X.toneMapping=W.toneMapping}function av(A,W,X,q,J){W.isScene!==!0&&(W=re),xe.resetTextureUnits();const Se=W.fog,Ee=q.isMeshStandardMaterial?W.environment:null,Re=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Ar,Pe=(q.isMeshStandardMaterial?kt:mt).get(q.envMap||Ee),He=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!q.normalMap&&!!X.attributes.tangent,Be=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,tr=!!X.morphAttributes.color,Rr=q.toneMapped?p.toneMapping:mi,Dr=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Un=Dr!==void 0?Dr.length:0,Ge=Te.get(q),Ir=u.state.lights;if(N===!0&&(F===!0||A!==S)){const en=A===S&&q.id===w;T.setState(q,A,en)}let ut=!1;q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ir.state.version||Ge.outputEncoding!==Re||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Pe||q.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==T.numPlanes||Ge.numIntersection!==T.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==ze||Ge.morphTargets!==Be||Ge.morphNormals!==it||Ge.morphColors!==tr||Ge.toneMapping!==Rr||Me.isWebGL2===!0&&Ge.morphTargetsCount!==Un)&&(ut=!0):(ut=!0,Ge.__version=q.version);let hn=Ge.currentProgram;ut===!0&&(hn=Zl(q,W,J));let Mi=!1,Fs=!1,Kl=!1;const Bt=hn.getUniforms(),ks=Ge.uniforms;if(de.useProgram(hn.program)&&(Mi=!0,Fs=!0,Kl=!0),q.id!==w&&(w=q.id,Fs=!0),Mi||S!==A){if(Bt.setValue(Y,"projectionMatrix",A.projectionMatrix),Me.logarithmicDepthBuffer&&Bt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,Fs=!0,Kl=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const en=Bt.map.cameraPosition;en!==void 0&&en.setValue(Y,Q.setFromMatrixPosition(A.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Bt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||J.isSkinnedMesh)&&Bt.setValue(Y,"viewMatrix",A.matrixWorldInverse)}if(J.isSkinnedMesh){Bt.setOptional(Y,J,"bindMatrix"),Bt.setOptional(Y,J,"bindMatrixInverse");const en=J.skeleton;en&&(Me.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Bt.setValue(Y,"boneTexture",en.boneTexture,xe),Bt.setValue(Y,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ql=X.morphAttributes;if((Ql.position!==void 0||Ql.normal!==void 0||Ql.color!==void 0&&Me.isWebGL2===!0)&&te.update(J,X,q,hn),(Fs||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,Bt.setValue(Y,"receiveShadow",J.receiveShadow)),Fs&&(Bt.setValue(Y,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&lv(ks,Kl),Se&&q.fog===!0&&Ve.refreshFogUniforms(ks,Se),Ve.refreshMaterialUniforms(ks,q,z,L,U),Ja.upload(Y,Ge.uniformsList,ks,xe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ja.upload(Y,Ge.uniformsList,ks,xe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Bt.setValue(Y,"center",J.center),Bt.setValue(Y,"modelViewMatrix",J.modelViewMatrix),Bt.setValue(Y,"normalMatrix",J.normalMatrix),Bt.setValue(Y,"modelMatrix",J.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const en=q.uniformsGroups;for(let Jl=0,uv=en.length;Jl<uv;Jl++)if(Me.isWebGL2){const xf=en[Jl];he.update(xf,hn),he.bind(xf,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function lv(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function cv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,W,X){Te.get(A.texture).__webglTexture=W,Te.get(A.depthTexture).__webglTexture=X;const q=Te.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const X=Te.get(A);X.__webglFramebuffer=W,X.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,X=0){x=A,v=W,g=X;let q=!0;if(A){const Pe=Te.get(A);Pe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),q=!1):Pe.__webglFramebuffer===void 0?xe.setupRenderTarget(A):Pe.__hasExternalTextures&&xe.rebindTextures(A,Te.get(A.texture).__webglTexture,Te.get(A.depthTexture).__webglTexture)}let J=null,Se=!1,Ee=!1;if(A){const Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture)&&(Ee=!0);const He=Te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(J=He[W],Se=!0):Me.isWebGL2&&A.samples>0&&xe.useMultisampledRTT(A)===!1?J=Te.get(A).__webglMultisampledFramebuffer:J=He,E.copy(A.viewport),C.copy(A.scissor),y=A.scissorTest}else E.copy(R).multiplyScalar(z).floor(),C.copy(k).multiplyScalar(z).floor(),y=D;if(de.bindFramebuffer(36160,J)&&Me.drawBuffers&&q&&de.drawBuffers(A,J),de.viewport(E),de.scissor(C),de.setScissorTest(y),Se){const Pe=Te.get(A.texture);Y.framebufferTexture2D(36160,36064,34069+W,Pe.__webglTexture,X)}else if(Ee){const Pe=Te.get(A.texture),He=W||0;Y.framebufferTextureLayer(36160,36064,Pe.__webglTexture,X||0,He)}w=-1},this.readRenderTargetPixels=function(A,W,X,q,J,Se,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){de.bindFramebuffer(36160,Re);try{const Pe=A.texture,He=Pe.format,ze=Pe.type;if(He!==Yn&&j.convert(He)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===zo&&(ye.has("EXT_color_buffer_half_float")||Me.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ze!==Cr&&j.convert(ze)!==Y.getParameter(35738)&&!(ze===gr&&(Me.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-q&&X>=0&&X<=A.height-J&&Y.readPixels(W,X,q,J,j.convert(He),j.convert(ze),Se)}finally{const Pe=x!==null?Te.get(x).__webglFramebuffer:null;de.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(A,W,X=0){const q=Math.pow(2,-X),J=Math.floor(W.image.width*q),Se=Math.floor(W.image.height*q);xe.setTexture2D(W,0),Y.copyTexSubImage2D(3553,X,0,0,A.x,A.y,J,Se),de.unbindTexture()},this.copyTextureToTexture=function(A,W,X,q=0){const J=W.image.width,Se=W.image.height,Ee=j.convert(X.format),Re=j.convert(X.type);xe.setTexture2D(X,0),Y.pixelStorei(37440,X.flipY),Y.pixelStorei(37441,X.premultiplyAlpha),Y.pixelStorei(3317,X.unpackAlignment),W.isDataTexture?Y.texSubImage2D(3553,q,A.x,A.y,J,Se,Ee,Re,W.image.data):W.isCompressedTexture?Y.compressedTexSubImage2D(3553,q,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Ee,W.mipmaps[0].data):Y.texSubImage2D(3553,q,A.x,A.y,Ee,Re,W.image),q===0&&X.generateMipmaps&&Y.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(A,W,X,q,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,Pe=j.convert(q.format),He=j.convert(q.type);let ze;if(q.isData3DTexture)xe.setTexture3D(q,0),ze=32879;else if(q.isDataArrayTexture)xe.setTexture2DArray(q,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,q.flipY),Y.pixelStorei(37441,q.premultiplyAlpha),Y.pixelStorei(3317,q.unpackAlignment);const Be=Y.getParameter(3314),it=Y.getParameter(32878),tr=Y.getParameter(3316),Rr=Y.getParameter(3315),Dr=Y.getParameter(32877),Un=X.isCompressedTexture?X.mipmaps[0]:X.image;Y.pixelStorei(3314,Un.width),Y.pixelStorei(32878,Un.height),Y.pixelStorei(3316,A.min.x),Y.pixelStorei(3315,A.min.y),Y.pixelStorei(32877,A.min.z),X.isDataTexture||X.isData3DTexture?Y.texSubImage3D(ze,J,W.x,W.y,W.z,Se,Ee,Re,Pe,He,Un.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(ze,J,W.x,W.y,W.z,Se,Ee,Re,Pe,Un.data)):Y.texSubImage3D(ze,J,W.x,W.y,W.z,Se,Ee,Re,Pe,He,Un),Y.pixelStorei(3314,Be),Y.pixelStorei(32878,it),Y.pixelStorei(3316,tr),Y.pixelStorei(3315,Rr),Y.pixelStorei(32877,Dr),J===0&&q.generateMipmaps&&Y.generateMipmap(ze),de.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?xe.setTextureCube(A,0):A.isData3DTexture?xe.setTexture3D(A,0):A.isDataArrayTexture?xe.setTexture2DArray(A,0):xe.setTexture2D(A,0),de.unbindTexture()},this.resetState=function(){v=0,g=0,x=null,de.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ME extends q0{}ME.prototype.isWebGL1Renderer=!0;class EE extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class hf extends Qt{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],u=[],m=[];let _=0;const p=[],h=i/2;let v=0;g(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(m,2));function g(){const w=new V,S=new V;let E=0;const C=(t-e)/i;for(let y=0;y<=s;y++){const b=[],L=y/s,z=L*(t-e)+e;for(let O=0;O<=r;O++){const I=O/r,R=I*l+a,k=Math.sin(R),D=Math.cos(R);S.x=z*k,S.y=-L*i+h,S.z=z*D,f.push(S.x,S.y,S.z),w.set(k,C,D).normalize(),u.push(w.x,w.y,w.z),m.push(I,1-L),b.push(_++)}p.push(b)}for(let y=0;y<r;y++)for(let b=0;b<s;b++){const L=p[b][y],z=p[b+1][y],O=p[b+1][y+1],I=p[b][y+1];d.push(L,z,I),d.push(z,O,I),E+=6}c.addGroup(v,E,0),v+=E}function x(w){const S=_,E=new Fe,C=new V;let y=0;const b=w===!0?e:t,L=w===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,h*L,0),u.push(0,L,0),m.push(.5,.5),_++;const z=_;for(let O=0;O<=r;O++){const R=O/r*l+a,k=Math.cos(R),D=Math.sin(R);C.x=b*D,C.y=h*L,C.z=b*k,f.push(C.x,C.y,C.z),u.push(0,L,0),E.x=k*.5+.5,E.y=D*.5*L+.5,m.push(E.x,E.y),_++}for(let O=0;O<r;O++){const I=S+O,R=z+O;w===!0?d.push(R,R+1,I):d.push(R+1,R,I),y+=3}c.addGroup(v,y,w===!0?1:2),v+=y}}static fromJSON(e){return new hf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class El extends Qt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new V,u=new V,m=[],_=[],p=[],h=[];for(let v=0;v<=i;v++){const g=[],x=v/i;let w=0;v==0&&o==0?w=.5/t:v==i&&l==Math.PI&&(w=-.5/t);for(let S=0;S<=t;S++){const E=S/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),u.copy(f).normalize(),p.push(u.x,u.y,u.z),h.push(E+w,1-x),g.push(c++)}d.push(g)}for(let v=0;v<i;v++)for(let g=0;g<t;g++){const x=d[v][g+1],w=d[v][g],S=d[v+1][g],E=d[v+1][g+1];(v!==0||o>0)&&m.push(x,w,E),(v!==i-1||l<Math.PI)&&m.push(w,S,E)}this.setIndex(m),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(p,3)),this.setAttribute("uv",new pt(h,2))}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bE extends Yo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C0,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Gp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class TE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=c.length;f<u;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}}const CE=new TE;class j0{constructor(e){this.manager=e!==void 0?e:CE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class AE extends j0{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=No("img");function l(){d(),Gp.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class LE extends j0{constructor(e){super(e)}load(e,t,i,r){const s=new Mn,o=new AE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class X0 extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vp=new wt,Hp=new V,Wp=new V;class PE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new df,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),Vp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RE extends PE{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DE extends X0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DefaultUp),this.updateMatrix(),this.target=new Jt,this.shadow=new RE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class IE extends X0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Y0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);class Nn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const i=this.elements,r=e.x,s=e.y,o=e.z;return t.x=i[0]*r+i[1]*s+i[2]*o,t.y=i[3]*r+i[4]*s+i[5]*o,t.z=i[6]*r+i[7]*s+i[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Nn);const i=this.elements,r=e.elements,s=t.elements,o=i[0],a=i[1],l=i[2],c=i[3],d=i[4],f=i[5],u=i[6],m=i[7],_=i[8],p=r[0],h=r[1],v=r[2],g=r[3],x=r[4],w=r[5],S=r[6],E=r[7],C=r[8];return s[0]=o*p+a*g+l*S,s[1]=o*h+a*x+l*E,s[2]=o*v+a*w+l*C,s[3]=c*p+d*g+f*S,s[4]=c*h+d*x+f*E,s[5]=c*v+d*w+f*C,s[6]=u*p+m*g+_*S,s[7]=u*h+m*x+_*E,s[8]=u*v+m*w+_*C,t}scale(e,t){t===void 0&&(t=new Nn);const i=this.elements,r=t.elements;for(let s=0;s!==3;s++)r[3*s+0]=e.x*i[3*s+0],r[3*s+1]=e.y*i[3*s+1],r[3*s+2]=e.z*i[3*s+2];return t}solve(e,t){t===void 0&&(t=new M);const i=3,r=4,s=[];let o,a;for(o=0;o<i*r;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+r*a]=this.elements[o+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let d;const f=4;let u;do{if(o=c-l,s[o+r*o]===0){for(a=o+1;a<c;a++)if(s[o+r*a]!==0){d=f;do u=f-d,s[u+r*o]+=s[u+r*a];while(--d);break}}if(s[o+r*o]!==0)for(a=o+1;a<c;a++){const m=s[o+r*a]/s[o+r*o];d=f;do u=f-d,s[u+r*a]=u<=o?0:s[u+r*a]-s[u+r*o]*m;while(--d)}}while(--l);if(t.z=s[2*r+3]/s[2*r+2],t.y=(s[1*r+3]-s[1*r+2]*t.z)/s[1*r+1],t.x=(s[0*r+3]-s[0*r+2]*t.z-s[0*r+1]*t.y)/s[0*r+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new Nn);const t=3,i=6,r=zE;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)r[s+i*o]=this.elements[s+3*o];r[3+6*0]=1,r[3+6*1]=0,r[3+6*2]=0,r[4+6*0]=0,r[4+6*1]=1,r[4+6*2]=0,r[5+6*0]=0,r[5+6*1]=0,r[5+6*2]=1;let a=3;const l=a;let c;const d=i;let f;do{if(s=l-a,r[s+i*s]===0){for(o=s+1;o<l;o++)if(r[s+i*o]!==0){c=d;do f=d-c,r[f+i*s]+=r[f+i*o];while(--c);break}}if(r[s+i*s]!==0)for(o=s+1;o<l;o++){const u=r[s+i*o]/r[s+i*s];c=d;do f=d-c,r[f+i*o]=f<=s?0:r[f+i*o]-r[f+i*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=r[s+i*o]/r[s+i*s];c=i;do f=i-c,r[f+i*o]=r[f+i*o]-r[f+i*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/r[s+i*s];c=i;do f=i-c,r[f+i*s]=r[f+i*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(f=r[t+o+i*s],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,f)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,r=e.z,s=e.w,o=t+t,a=i+i,l=r+r,c=t*o,d=t*a,f=t*l,u=i*a,m=i*l,_=r*l,p=s*o,h=s*a,v=s*l,g=this.elements;return g[3*0+0]=1-(u+_),g[3*0+1]=d-v,g[3*0+2]=f+h,g[3*1+0]=d+v,g[3*1+1]=1-(c+_),g[3*1+2]=m-p,g[3*2+0]=f-h,g[3*2+1]=m+p,g[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new Nn);const t=this.elements,i=e.elements;let r;return i[0]=t[0],i[4]=t[4],i[8]=t[8],r=t[1],i[1]=t[3],i[3]=r,r=t[2],i[2]=t[6],i[6]=r,r=t[5],i[5]=t[7],i[7]=r,e}}const zE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new M);const i=e.x,r=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*r,t.y=l*i-o*s,t.z=o*r-a*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Nn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,r=Math.sqrt(e*e+t*t+i*i);if(r>0){const s=1/r;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new M);const t=this.x,i=this.y,r=this.z;let s=Math.sqrt(t*t+i*i+r*r);return s>0?(s=1/s,e.x=t*s,e.y=i*s,e.z=r*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-i)*(o-i)+(a-r)*(a-r))}distanceSquared(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-i)*(o-i)+(a-r)*(a-r)}scale(e,t){t===void 0&&(t=new M);const i=this.x,r=this.y,s=this.z;return t.x=e*i,t.y=e*r,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new M),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const r=NE,s=1/i;r.set(this.x*s,this.y*s,this.z*s);const o=FE;Math.abs(r.x)<.9?(o.set(1,0,0),r.cross(o,e)):(o.set(0,1,0),r.cross(o,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const r=this.x,s=this.y,o=this.z;i.x=r+(e.x-r)*t,i.y=s+(e.y-s)*t,i.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(jp),jp.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const NE=new M,FE=new M,jp=new M;class dn{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,r){const s=this.lowerBound,o=this.upperBound,a=i;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Xp),c=Xp),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),r&&(s.x-=r,s.y-=r,s.z-=r,o.x+=r,o.y+=r,o.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new dn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,s=e.upperBound,o=r.x<=i.x&&i.x<=s.x||t.x<=s.x&&s.x<=i.x,a=r.y<=i.y&&i.y<=s.y||t.y<=s.y&&s.y<=i.y,l=r.z<=i.z&&i.z<=s.z||t.z<=s.z&&s.z<=i.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,s=e.upperBound;return t.x<=r.x&&i.x>=s.x&&t.y<=r.y&&i.y>=s.y&&t.z<=r.z&&i.z>=s.z}getCorners(e,t,i,r,s,o,a,l){const c=this.lowerBound,d=this.upperBound;e.copy(c),t.set(d.x,c.y,c.z),i.set(d.x,d.y,c.z),r.set(c.x,d.y,d.z),s.set(d.x,c.y,d.z),o.set(c.x,d.y,c.z),a.set(c.x,c.y,d.z),l.copy(d)}toLocalFrame(e,t){const i=Yp,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],d=i[6],f=i[7];this.getCorners(r,s,o,a,l,c,d,f);for(let u=0;u!==8;u++){const m=i[u];e.pointToLocal(m,m)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=Yp,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],d=i[6],f=i[7];this.getCorners(r,s,o,a,l,c,d,f);for(let u=0;u!==8;u++){const m=i[u];e.pointToWorld(m,m)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,r=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-i.x)*r,l=(this.upperBound.x-i.x)*r,c=(this.lowerBound.y-i.y)*s,d=(this.upperBound.y-i.y)*s,f=(this.lowerBound.z-i.z)*o,u=(this.upperBound.z-i.z)*o,m=Math.max(Math.max(Math.min(a,l),Math.min(c,d)),Math.min(f,u)),_=Math.min(Math.min(Math.max(a,l),Math.max(c,d)),Math.max(f,u));return!(_<0||m>_)}}const Xp=new M,Yp=[new M,new M,new M,new M,new M,new M,new M,new M];class $p{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:r}=t;if(r>i){const s=r;r=i,i=s}return this.matrix[(i*(i+1)>>1)+r-1]}set(e,t,i){let{index:r}=e,{index:s}=t;if(s>r){const o=s;s=r,r=o}this.matrix[(r*(r+1)>>1)+s-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class $0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const r=i[e].indexOf(t);return r!==-1&&i[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const i=this._listeners[e.type];if(i!==void 0){e.target=this;for(let r=0,s=i.length;r<s;r++)i[r].call(this,e)}return this}}class ct{constructor(e,t,i,r){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=kE,r=BE;e.tangents(i,r),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new ct);const i=this.x,r=this.y,s=this.z,o=this.w,a=e.x,l=e.y,c=e.z,d=e.w;return t.x=i*d+o*a+r*c-s*l,t.y=r*d+o*l+s*a-i*c,t.z=s*d+o*c+i*l-r*a,t.w=o*d-i*a-r*l-s*c,t}inverse(e){e===void 0&&(e=new ct);const t=this.x,i=this.y,r=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+i*i+r*r+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new ct),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const i=e.x,r=e.y,s=e.z,o=this.x,a=this.y,l=this.z,c=this.w,d=c*i+a*s-l*r,f=c*r+l*i-o*s,u=c*s+o*r-a*i,m=-o*i-a*r-l*s;return t.x=d*c+m*-o+f*-l-u*-a,t.y=f*c+m*-a+u*-o-d*-l,t.z=u*c+m*-l+d*-a-f*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,r,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const d=o*a+l*c;if(d>.499&&(i=2*Math.atan2(o,c),r=Math.PI/2,s=0),d<-.499&&(i=-2*Math.atan2(o,c),r=-Math.PI/2,s=0),i===void 0){const f=o*o,u=a*a,m=l*l;i=Math.atan2(2*a*c-2*o*l,1-2*u-2*m),r=Math.asin(2*d),s=Math.atan2(2*o*c-2*a*l,1-2*f-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=r,e.x=s}setFromEuler(e,t,i,r){r===void 0&&(r="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),d=Math.sin(i/2);return r==="XYZ"?(this.x=l*o*a+s*c*d,this.y=s*c*a-l*o*d,this.z=s*o*d+l*c*a,this.w=s*o*a-l*c*d):r==="YXZ"?(this.x=l*o*a+s*c*d,this.y=s*c*a-l*o*d,this.z=s*o*d-l*c*a,this.w=s*o*a+l*c*d):r==="ZXY"?(this.x=l*o*a-s*c*d,this.y=s*c*a+l*o*d,this.z=s*o*d+l*c*a,this.w=s*o*a-l*c*d):r==="ZYX"?(this.x=l*o*a-s*c*d,this.y=s*c*a+l*o*d,this.z=s*o*d-l*c*a,this.w=s*o*a+l*c*d):r==="YZX"?(this.x=l*o*a+s*c*d,this.y=s*c*a+l*o*d,this.z=s*o*d-l*c*a,this.w=s*o*a-l*c*d):r==="XZY"&&(this.x=l*o*a-s*c*d,this.y=s*c*a-l*o*d,this.z=s*o*d+l*c*a,this.w=s*o*a+l*c*d),this}clone(){return new ct(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new ct);const r=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,d=e.z,f=e.w,u,m,_,p,h;return m=r*l+s*c+o*d+a*f,m<0&&(m=-m,l=-l,c=-c,d=-d,f=-f),1-m>1e-6?(u=Math.acos(m),_=Math.sin(u),p=Math.sin((1-t)*u)/_,h=Math.sin(t*u)/_):(p=1-t,h=t),i.x=p*r+h*l,i.y=p*s+h*c,i.z=p*o+h*d,i.w=p*a+h*f,i}integrate(e,t,i,r){r===void 0&&(r=new ct);const s=e.x*i.x,o=e.y*i.y,a=e.z*i.z,l=this.x,c=this.y,d=this.z,f=this.w,u=t*.5;return r.x+=u*(s*f+o*d-a*c),r.y+=u*(o*f+a*l-s*d),r.z+=u*(a*f+s*c-o*l),r.w+=u*(-s*l-o*c-a*d),r}}const kE=new M,BE=new M,OE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class oe{constructor(e){e===void 0&&(e={}),this.id=oe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}oe.idCounter=0;oe.types=OE;class Oe{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new ct,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Oe.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Oe.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,r){return r===void 0&&(r=new M),i.vsub(e,r),t.conjugate(Zp),Zp.vmult(r,r),r}static pointToWorldFrame(e,t,i,r){return r===void 0&&(r=new M),t.vmult(i,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new M),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,r){return r===void 0&&(r=new M),t.w*=-1,t.vmult(i,r),t.w*=-1,r}}const Zp=new ct;class mo extends oe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:r=[],axes:s,boundingSphereRadius:o}=e;super({type:oe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const r=new M;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],r),r.normalize();let d=!1;for(let f=0;f!==i.length;f++)if(i[f].almostEquals(r)||i[f].almostEquals(r)){d=!0;break}d||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],r=this.vertices[i[0]],s=this.vertices[i[1]],o=this.vertices[i[2]];mo.computeNormal(r,s,o,t)}static computeNormal(e,t,i,r){const s=new M,o=new M;t.vsub(e,o),i.vsub(t,s),s.cross(o,r),r.isZero()||r.normalize()}clipAgainstHull(e,t,i,r,s,o,a,l,c){const d=new M;let f=-1,u=-Number.MAX_VALUE;for(let _=0;_<i.faces.length;_++){d.copy(i.faceNormals[_]),s.vmult(d,d);const p=d.dot(o);p>u&&(u=p,f=_)}const m=[];for(let _=0;_<i.faces[f].length;_++){const p=i.vertices[i.faces[f][_]],h=new M;h.copy(p),s.vmult(h,h),r.vadd(h,h),m.push(h)}f>=0&&this.clipFaceAgainstHull(o,e,t,m,a,l,c)}findSeparatingAxis(e,t,i,r,s,o,a,l){const c=new M,d=new M,f=new M,u=new M,m=new M,_=new M;let p=Number.MAX_VALUE;const h=this;if(h.uniqueAxes)for(let v=0;v!==h.uniqueAxes.length;v++){i.vmult(h.uniqueAxes[v],c);const g=h.testSepAxis(c,e,t,i,r,s);if(g===!1)return!1;g<p&&(p=g,o.copy(c))}else{const v=a?a.length:h.faces.length;for(let g=0;g<v;g++){const x=a?a[g]:g;c.copy(h.faceNormals[x]),i.vmult(c,c);const w=h.testSepAxis(c,e,t,i,r,s);if(w===!1)return!1;w<p&&(p=w,o.copy(c))}}if(e.uniqueAxes)for(let v=0;v!==e.uniqueAxes.length;v++){s.vmult(e.uniqueAxes[v],d);const g=h.testSepAxis(d,e,t,i,r,s);if(g===!1)return!1;g<p&&(p=g,o.copy(d))}else{const v=l?l.length:e.faces.length;for(let g=0;g<v;g++){const x=l?l[g]:g;d.copy(e.faceNormals[x]),s.vmult(d,d);const w=h.testSepAxis(d,e,t,i,r,s);if(w===!1)return!1;w<p&&(p=w,o.copy(d))}}for(let v=0;v!==h.uniqueEdges.length;v++){i.vmult(h.uniqueEdges[v],u);for(let g=0;g!==e.uniqueEdges.length;g++)if(s.vmult(e.uniqueEdges[g],m),u.cross(m,_),!_.almostZero()){_.normalize();const x=h.testSepAxis(_,e,t,i,r,s);if(x===!1)return!1;x<p&&(p=x,o.copy(_))}}return r.vsub(t,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,i,r,s,o){const a=this;mo.project(a,e,i,r,su),mo.project(t,e,s,o,ou);const l=su[0],c=su[1],d=ou[0],f=ou[1];if(l<f||d<c)return!1;const u=l-f,m=d-c;return u<m?u:m}calculateLocalInertia(e,t){const i=new M,r=new M;this.computeLocalAABB(r,i);const s=i.x-r.x,o=i.y-r.y,a=i.z-r.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],r=this.vertices[t[0]];return-i.dot(r)}clipFaceAgainstHull(e,t,i,r,s,o,a){const l=new M,c=new M,d=new M,f=new M,u=new M,m=new M,_=new M,p=new M,h=this,v=[],g=r,x=v;let w=-1,S=Number.MAX_VALUE;for(let L=0;L<h.faces.length;L++){l.copy(h.faceNormals[L]),i.vmult(l,l);const z=l.dot(e);z<S&&(S=z,w=L)}if(w<0)return;const E=h.faces[w];E.connectedFaces=[];for(let L=0;L<h.faces.length;L++)for(let z=0;z<h.faces[L].length;z++)E.indexOf(h.faces[L][z])!==-1&&L!==w&&E.connectedFaces.indexOf(L)===-1&&E.connectedFaces.push(L);const C=E.length;for(let L=0;L<C;L++){const z=h.vertices[E[L]],O=h.vertices[E[(L+1)%C]];z.vsub(O,c),d.copy(c),i.vmult(d,d),t.vadd(d,d),f.copy(this.faceNormals[w]),i.vmult(f,f),t.vadd(f,f),d.cross(f,u),u.negate(u),m.copy(z),i.vmult(m,m),t.vadd(m,m);const I=E.connectedFaces[L];_.copy(this.faceNormals[I]);const R=this.getPlaneConstantOfFace(I);p.copy(_),i.vmult(p,p);const k=R-p.dot(t);for(this.clipFaceAgainstPlane(g,x,p,k);g.length;)g.shift();for(;x.length;)g.push(x.shift())}_.copy(this.faceNormals[w]);const y=this.getPlaneConstantOfFace(w);p.copy(_),i.vmult(p,p);const b=y-p.dot(t);for(let L=0;L<g.length;L++){let z=p.dot(g[L])+b;if(z<=s&&(console.log(`clamped: depth=${z} to minDist=${s}`),z=s),z<=o){const O=g[L];if(z<=1e-6){const I={point:O,normal:p,depth:z};a.push(I)}}}}clipFaceAgainstPlane(e,t,i,r){let s,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=i.dot(l)+r;for(let d=0;d<a;d++){if(c=e[d],o=i.dot(c)+r,s<0)if(o<0){const f=new M;f.copy(c),t.push(f)}else{const f=new M;l.lerp(c,s/(s-o),f),t.push(f)}else if(o<0){const f=new M;l.lerp(c,s/(s-o),f),t.push(f),t.push(c)}l=c,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const i=this.vertices,r=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(i[s],r[s]),e.vadd(r[s],r[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const s=i[r];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const i=this.faceNormals,r=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(i[s],r[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const r=t[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,r){const s=this.vertices;let o,a,l,c,d,f,u=new M;for(let m=0;m<s.length;m++){u.copy(s[m]),t.vmult(u,u),e.vadd(u,u);const _=u;(o===void 0||_.x<o)&&(o=_.x),(c===void 0||_.x>c)&&(c=_.x),(a===void 0||_.y<a)&&(a=_.y),(d===void 0||_.y>d)&&(d=_.y),(l===void 0||_.z<l)&&(l=_.z),(f===void 0||_.z>f)&&(f=_.z)}i.set(o,a,l),r.set(c,d,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,r=this.vertices;if(t){for(let s=0;s<i;s++){const o=r[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<i;s++){const o=r[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,i=this.faces,r=this.faceNormals,s=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=r[a];const c=t[i[a][0]],d=new M;e.vsub(c,d);const f=l.dot(d),u=new M;o.vsub(c,u);const m=l.dot(u);if(f<0&&m>0||f>0&&m<0)return!1}return s?1:-1}static project(e,t,i,r,s){const o=e.vertices.length,a=UE;let l=0,c=0;const d=GE,f=e.vertices;d.setZero(),Oe.vectorToLocalFrame(i,r,t,a),Oe.pointToLocalFrame(i,r,d,d);const u=d.dot(a);c=l=f[0].dot(a);for(let m=1;m<o;m++){const _=f[m].dot(a);_>l&&(l=_),_<c&&(c=_)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const su=[],ou=[];new M;const UE=new M,GE=new M;class ko extends oe{constructor(e){super({type:oe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,r=M,s=[new r(-e,-t,-i),new r(e,-t,-i),new r(e,t,-i),new r(-e,t,-i),new r(-e,-t,i),new r(e,-t,i),new r(e,t,i),new r(-e,t,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],l=new mo({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),ko.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const r=e;i.x=1/12*t*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*t*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*t*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,t){const i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),t!==void 0)for(let s=0;s!==i.length;s++)t.vmult(i[s],i[s]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const r=this.halfExtents,s=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let o=0;o<s.length;o++)Di.set(s[o][0],s[o][1],s[o][2]),t.vmult(Di,Di),e.vadd(Di,Di),i(Di.x,Di.y,Di.z)}calculateWorldAABB(e,t,i,r){const s=this.halfExtents;Vn[0].set(s.x,s.y,s.z),Vn[1].set(-s.x,s.y,s.z),Vn[2].set(-s.x,-s.y,s.z),Vn[3].set(-s.x,-s.y,-s.z),Vn[4].set(s.x,-s.y,-s.z),Vn[5].set(s.x,s.y,-s.z),Vn[6].set(-s.x,s.y,-s.z),Vn[7].set(s.x,-s.y,s.z);const o=Vn[0];t.vmult(o,o),e.vadd(o,o),r.copy(o),i.copy(o);for(let a=1;a<8;a++){const l=Vn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,d=l.y,f=l.z;c>r.x&&(r.x=c),d>r.y&&(r.y=d),f>r.z&&(r.z=f),c<i.x&&(i.x=c),d<i.y&&(i.y=d),f<i.z&&(i.z=f)}}}const Di=new M,Vn=[new M,new M,new M,new M,new M,new M,new M,new M],pf={DYNAMIC:1,STATIC:2,KINEMATIC:4},mf={AWAKE:0,SLEEPY:1,SLEEPING:2};class fe extends $0{constructor(e){e===void 0&&(e={}),super(),this.id=fe.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?fe.STATIC:fe.DYNAMIC,typeof e.type==typeof fe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=fe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new ct,this.initQuaternion=new ct,this.previousQuaternion=new ct,this.interpolatedQuaternion=new ct,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new Nn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new Nn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new dn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=Boolean(e.isTrigger),e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=fe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===fe.SLEEPING&&this.dispatchEvent(fe.wakeupEvent)}sleep(){this.sleepState=fe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;t===fe.AWAKE&&i<r?(this.sleepState=fe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(fe.sleepyEvent)):t===fe.SLEEPY&&i>r?this.wakeUp():t===fe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(fe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===fe.SLEEPING||this.type===fe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,i){const r=new M,s=new ct;return t&&r.copy(t),i&&s.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let r=0;for(let s=0;s!==i;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),l=o.boundingSphereRadius;a+l>r&&(r=a+l)}this.boundingRadius=r}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,r=e.length,s=VE,o=HE,a=this.quaternion,l=this.aabb,c=WE;for(let d=0;d!==r;d++){const f=e[d];a.vmult(t[d],s),s.vadd(this.position,s),a.mult(i[d],o),f.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),d===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=qE,r=jE;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(t,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==fe.DYNAMIC)return;this.sleepState===fe.SLEEPING&&this.wakeUp();const i=YE;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==fe.DYNAMIC)return;const i=$E,r=ZE;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyForce(i,r)}applyTorque(e){this.type===fe.DYNAMIC&&(this.sleepState===fe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==fe.DYNAMIC)return;this.sleepState===fe.SLEEPING&&this.wakeUp();const i=t,r=KE;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const s=QE;i.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==fe.DYNAMIC)return;const i=JE,r=e2;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyImpulse(i,r)}updateMassProperties(){const e=t2;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ko.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new M;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===fe.DYNAMIC||this.type===fe.KINEMATIC)||this.sleepState===fe.SLEEPING)return;const r=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,d=this.invMass,f=this.invInertiaWorld,u=this.linearFactor,m=d*e;r.x+=a.x*m*u.x,r.y+=a.y*m*u.y,r.z+=a.z*m*u.z;const _=f.elements,p=this.angularFactor,h=l.x*p.x,v=l.y*p.y,g=l.z*p.z;s.x+=e*(_[0]*h+_[1]*v+_[2]*g),s.y+=e*(_[3]*h+_[4]*v+_[5]*g),s.z+=e*(_[6]*h+_[7]*v+_[8]*g),o.x+=r.x*e,o.y+=r.y*e,o.z+=r.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}fe.idCounter=0;fe.COLLIDE_EVENT_NAME="collide";fe.DYNAMIC=pf.DYNAMIC;fe.STATIC=pf.STATIC;fe.KINEMATIC=pf.KINEMATIC;fe.AWAKE=mf.AWAKE;fe.SLEEPY=mf.SLEEPY;fe.SLEEPING=mf.SLEEPING;fe.wakeupEvent={type:"wakeup"};fe.sleepyEvent={type:"sleepy"};fe.sleepEvent={type:"sleep"};const VE=new M,HE=new ct,WE=new dn,qE=new Nn,jE=new Nn,XE=new Nn,YE=new M,$E=new M,ZE=new M,KE=new M,QE=new M,JE=new M,e2=new M,t2=new M;class n2{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&fe.STATIC)!==0||e.sleepState===fe.SLEEPING)&&((t.type&fe.STATIC)!==0||t.sleepState===fe.SLEEPING))}intersectionTest(e,t,i,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,r):this.doBoundingSphereBroadphase(e,t,i,r)}doBoundingSphereBroadphase(e,t,i,r){const s=i2;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(i.push(e),r.push(t))}doBoundingBoxBroadphase(e,t,i,r){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),r.push(t))}makePairsUnique(e,t){const i=r2,r=s2,s=o2,o=e.length;for(let a=0;a!==o;a++)r[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=r[a].id,c=s[a].id,d=l<c?`${l},${c}`:`${c},${l}`;i[d]=a,i.keys.push(d)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];e.push(r[c]),t.push(s[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new M;e.position.vsub(t.position,i);const r=e.shapes[0],s=t.shapes[0];return Math.pow(r.boundingSphereRadius+s.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const i2=new M;new M;new ct;new M;const r2={keys:[]},s2=[],o2=[];new M;new M;new M;class a2 extends n2{constructor(){super()}collisionPairs(e,t,i){const r=e.bodies,s=r.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=r[l],a=r[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let r=0;r<e.bodies.length;r++){const s=e.bodies[r];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&i.push(s)}return i}}class bl{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,r,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(r),this.shape=s,this.body=o,this.distance=a}}let Z0,K0,Q0,J0,ev,tv,nv;const gf={CLOSEST:1,ANY:2,ALL:4};Z0=oe.types.SPHERE;K0=oe.types.PLANE;Q0=oe.types.BOX;J0=oe.types.CYLINDER;ev=oe.types.CONVEXPOLYHEDRON;tv=oe.types.HEIGHTFIELD;nv=oe.types.TRIMESH;class ft{get[Z0](){return this._intersectSphere}get[K0](){return this._intersectPlane}get[Q0](){return this._intersectBox}get[J0](){return this._intersectConvex}get[ev](){return this._intersectConvex}get[tv](){return this._intersectHeightfield}get[nv](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ft.ANY,this.result=new bl,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||ft.ANY,this.result=t.result||new bl,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Kp),au.length=0,e.broadphase.aabbQuery(e,Kp,au),this.intersectBodies(au),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=l2,s=c2;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],r),r.vadd(e.position,r),this.intersectShape(l,s,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,r=e.length;!this.result.shouldStop&&i<r;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,r){const s=this.from;if(M2(s,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,r,e)}_intersectBox(e,t,i,r,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,r,s)}_intersectPlane(e,t,i,r,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);t.vmult(c,c);const d=new M;o.vsub(i,d);const f=d.dot(c);a.vsub(i,d);const u=d.dot(c);if(f*u>0||o.distanceTo(a)<f)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const _=new M,p=new M,h=new M;o.vsub(i,_);const v=-c.dot(_)/m;l.scale(v,p),o.vadd(p,h),this.reportIntersection(c,h,s,r,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,r=this.to,s=this.from;t.x=Math.min(r.x,s.x),t.y=Math.min(r.y,s.y),t.z=Math.min(r.z,s.z),i.x=Math.max(r.x,s.x),i.y=Math.max(r.y,s.y),i.z=Math.max(r.z,s.z)}_intersectHeightfield(e,t,i,r,s){e.data,e.elementSize;const o=u2;o.from.copy(this.from),o.to.copy(this.to),Oe.pointToLocalFrame(i,t,o.from,o.from),Oe.pointToLocalFrame(i,t,o.to,o.to),o.updateDirection();const a=d2;let l,c,d,f;l=c=0,d=f=e.data.length-1;const u=new dn;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),d=Math.min(d,a[0]+1),f=Math.min(f,a[1]+1);for(let m=l;m<d;m++)for(let _=c;_<f;_++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,_,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(m,_,!1),Oe.pointToWorldFrame(i,t,e.pillarOffset,Na),this._intersectConvex(e.pillarConvex,t,Na,r,s,Qp),this.result.shouldStop)return;e.getConvexTrianglePillar(m,_,!0),Oe.pointToWorldFrame(i,t,e.pillarOffset,Na),this._intersectConvex(e.pillarConvex,t,Na,r,s,Qp)}}}_intersectSphere(e,t,i,r,s){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,d=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),f=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-l**2,u=d**2-4*c*f,m=f2,_=h2;if(!(u<0))if(u===0)o.lerp(a,u,m),m.vsub(i,_),_.normalize(),this.reportIntersection(_,m,s,r,-1);else{const p=(-d-Math.sqrt(u))/(2*c),h=(-d+Math.sqrt(u))/(2*c);if(p>=0&&p<=1&&(o.lerp(a,p,m),m.vsub(i,_),_.normalize(),this.reportIntersection(_,m,s,r,-1)),this.result.shouldStop)return;h>=0&&h<=1&&(o.lerp(a,h,m),m.vsub(i,_),_.normalize(),this.reportIntersection(_,m,s,r,-1))}}_intersectConvex(e,t,i,r,s,o){const a=p2,l=Jp,c=o&&o.faceList||null,d=e.faces,f=e.vertices,u=e.faceNormals,m=this.direction,_=this.from,p=this.to,h=_.distanceTo(p),v=c?c.length:d.length,g=this.result;for(let x=0;!g.shouldStop&&x<v;x++){const w=c?c[x]:x,S=d[w],E=u[w],C=t,y=i;l.copy(f[S[0]]),C.vmult(l,l),l.vadd(y,l),l.vsub(_,l),C.vmult(E,a);const b=m.dot(a);if(Math.abs(b)<this.precision)continue;const L=a.dot(l)/b;if(!(L<0)){m.scale(L,qt),qt.vadd(_,qt),Ln.copy(f[S[0]]),C.vmult(Ln,Ln),y.vadd(Ln,Ln);for(let z=1;!g.shouldStop&&z<S.length-1;z++){Hn.copy(f[S[z]]),Wn.copy(f[S[z+1]]),C.vmult(Hn,Hn),C.vmult(Wn,Wn),y.vadd(Hn,Hn),y.vadd(Wn,Wn);const O=qt.distanceTo(_);!(ft.pointInTriangle(qt,Ln,Hn,Wn)||ft.pointInTriangle(qt,Hn,Ln,Wn))||O>h||this.reportIntersection(a,qt,s,r,w)}}}}_intersectTrimesh(e,t,i,r,s,o){const a=m2,l=w2,c=S2,d=Jp,f=g2,u=v2,m=_2,_=y2,p=x2,h=e.indices;e.vertices;const v=this.from,g=this.to,x=this.direction;c.position.copy(i),c.quaternion.copy(t),Oe.vectorToLocalFrame(i,t,x,f),Oe.pointToLocalFrame(i,t,v,u),Oe.pointToLocalFrame(i,t,g,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,m.vsub(u,f),f.normalize();const w=u.distanceSquared(m);e.tree.rayQuery(this,c,l);for(let S=0,E=l.length;!this.result.shouldStop&&S!==E;S++){const C=l[S];e.getNormal(C,a),e.getVertex(h[C*3],Ln),Ln.vsub(u,d);const y=f.dot(a),b=a.dot(d)/y;if(b<0)continue;f.scale(b,qt),qt.vadd(u,qt),e.getVertex(h[C*3+1],Hn),e.getVertex(h[C*3+2],Wn);const L=qt.distanceSquared(u);!(ft.pointInTriangle(qt,Hn,Ln,Wn)||ft.pointInTriangle(qt,Ln,Hn,Wn))||L>w||(Oe.vectorToWorldFrame(t,a,p),Oe.pointToWorldFrame(i,t,qt,_),this.reportIntersection(p,_,s,r,C))}l.length=0}reportIntersection(e,t,i,r,s){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ft.ALL:this.hasHit=!0,c.set(o,a,e,t,i,r,l),c.hasHit=!0,this.callback(c);break;case ft.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,r,l));break;case ft.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,r,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,r){r.vsub(t,dr),i.vsub(t,$s),e.vsub(t,lu);const s=dr.dot(dr),o=dr.dot($s),a=dr.dot(lu),l=$s.dot($s),c=$s.dot(lu);let d,f;return(d=l*a-o*c)>=0&&(f=s*c-o*a)>=0&&d+f<s*l-o*o}}ft.CLOSEST=gf.CLOSEST;ft.ANY=gf.ANY;ft.ALL=gf.ALL;const Kp=new dn,au=[],$s=new M,lu=new M,l2=new M,c2=new ct,qt=new M,Ln=new M,Hn=new M,Wn=new M;new M;new bl;const Qp={faceList:[0]},Na=new M,u2=new ft,d2=[],f2=new M,h2=new M,p2=new M;new M;new M;const Jp=new M,m2=new M,g2=new M,v2=new M,_2=new M,x2=new M,y2=new M;new dn;const w2=[],S2=new Oe,dr=new M,Fa=new M;function M2(n,e,t){t.vsub(n,dr);const i=dr.dot(e);return e.scale(i,Fa),Fa.vadd(n,Fa),t.distanceTo(Fa)}class E2{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class em{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Zo{constructor(e,t,i,r){i===void 0&&(i=-1e6),r===void 0&&(r=1e6),this.id=Zo.idCounter++,this.minForce=i,this.maxForce=r,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new em,this.jacobianElementB=new em,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const r=t,s=e,o=i;this.a=4/(o*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(o*o*s*(1+4*r))}computeB(e,t,i){const r=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-r*t-o*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.position,o=r.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.velocity,o=r.velocity,a=i.angularVelocity,l=r.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.vlambda,o=r.vlambda,a=i.wlambda,l=r.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.force,o=i.torque,a=r.force,l=r.torque,c=i.invMassSolve,d=r.invMassSolve;return s.scale(c,tm),a.scale(d,nm),i.invInertiaWorldSolve.vmult(o,im),r.invInertiaWorldSolve.vmult(l,rm),e.multiplyVectors(tm,im)+t.multiplyVectors(nm,rm)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.invMassSolve,o=r.invMassSolve,a=i.invInertiaWorldSolve,l=r.invInertiaWorldSolve;let c=s+o;return a.vmult(e.rotational,ka),c+=ka.dot(e.rotational),l.vmult(t.rotational,ka),c+=ka.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,s=this.bj,o=b2;r.vlambda.addScaledVector(r.invMassSolve*e,t.spatial,r.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,i.spatial,s.vlambda),r.invInertiaWorldSolve.vmult(t.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda),s.invInertiaWorldSolve.vmult(i.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Zo.idCounter=0;const tm=new M,nm=new M,im=new M,rm=new M,ka=new M,b2=new M;class T2 extends Zo{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,i=this.b,r=this.bi,s=this.bj,o=this.ri,a=this.rj,l=C2,c=A2,d=r.velocity,f=r.angularVelocity;r.force,r.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const _=L2,p=this.jacobianElementA,h=this.jacobianElementB,v=this.ni;o.cross(v,l),a.cross(v,c),v.negate(p.spatial),l.negate(p.rotational),h.spatial.copy(v),h.rotational.copy(c),_.copy(s.position),_.vadd(a,_),_.vsub(r.position,_),_.vsub(o,_);const g=v.dot(_),x=this.restitution+1,w=x*u.dot(v)-x*d.dot(v)+m.dot(c)-f.dot(l),S=this.computeGiMf();return-g*t-w*i-e*S}getImpactVelocityAlongNormal(){const e=P2,t=R2,i=D2,r=I2,s=z2;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,t),e.vsub(t,s),this.ni.dot(s)}}const C2=new M,A2=new M,L2=new M,P2=new M,R2=new M,D2=new M,I2=new M,z2=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class sm extends Zo{constructor(e,t,i){super(e,t,-i,i),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,r=this.rj,s=N2,o=F2,a=this.t;i.cross(a,s),r.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const d=this.computeGW(),f=this.computeGiMf();return-d*t-e*f}}const N2=new M,F2=new M;class jl{constructor(e,t,i){i=E2.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=jl.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}jl.idCounter=0;class Xl{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Xl.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Xl.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ft;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new dn;new M;new dn;new M;new M;new M;new M;new M;new M;new M;new dn;new M;new Oe;new dn;class k2{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class B2 extends k2{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const r=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,d=e;let f,u,m,_,p,h;if(a!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();const v=U2,g=G2,x=O2;v.length=a,g.length=a,x.length=a;for(let w=0;w!==a;w++){const S=o[w];x[w]=0,g[w]=S.computeB(d),v[w]=1/S.computeC()}if(a!==0){for(let E=0;E!==c;E++){const C=l[E],y=C.vlambda,b=C.wlambda;y.set(0,0,0),b.set(0,0,0)}for(i=0;i!==r;i++){_=0;for(let E=0;E!==a;E++){const C=o[E];f=g[E],u=v[E],h=x[E],p=C.computeGWlambda(),m=u*(f-p-C.eps*h),h+m<C.minForce?m=C.minForce-h:h+m>C.maxForce&&(m=C.maxForce-h),x[E]+=m,_+=m>0?m:-m,C.addToWlambda(m)}if(_*_<s)break}for(let E=0;E!==c;E++){const C=l[E],y=C.velocity,b=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),y.vadd(C.vlambda,y),C.wlambda.vmul(C.angularFactor,C.wlambda),b.vadd(C.wlambda,b)}let w=o.length;const S=1/d;for(;w--;)o[w].multiplier=x[w]*S}return i}}const O2=[],U2=[],G2=[];fe.STATIC;class V2{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class H2 extends V2{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const Ye={sphereSphere:oe.types.SPHERE,spherePlane:oe.types.SPHERE|oe.types.PLANE,boxBox:oe.types.BOX|oe.types.BOX,sphereBox:oe.types.SPHERE|oe.types.BOX,planeBox:oe.types.PLANE|oe.types.BOX,convexConvex:oe.types.CONVEXPOLYHEDRON,sphereConvex:oe.types.SPHERE|oe.types.CONVEXPOLYHEDRON,planeConvex:oe.types.PLANE|oe.types.CONVEXPOLYHEDRON,boxConvex:oe.types.BOX|oe.types.CONVEXPOLYHEDRON,sphereHeightfield:oe.types.SPHERE|oe.types.HEIGHTFIELD,boxHeightfield:oe.types.BOX|oe.types.HEIGHTFIELD,convexHeightfield:oe.types.CONVEXPOLYHEDRON|oe.types.HEIGHTFIELD,sphereParticle:oe.types.PARTICLE|oe.types.SPHERE,planeParticle:oe.types.PLANE|oe.types.PARTICLE,boxParticle:oe.types.BOX|oe.types.PARTICLE,convexParticle:oe.types.PARTICLE|oe.types.CONVEXPOLYHEDRON,cylinderCylinder:oe.types.CYLINDER,sphereCylinder:oe.types.SPHERE|oe.types.CYLINDER,planeCylinder:oe.types.PLANE|oe.types.CYLINDER,boxCylinder:oe.types.BOX|oe.types.CYLINDER,convexCylinder:oe.types.CONVEXPOLYHEDRON|oe.types.CYLINDER,heightfieldCylinder:oe.types.HEIGHTFIELD|oe.types.CYLINDER,particleCylinder:oe.types.PARTICLE|oe.types.CYLINDER,sphereTrimesh:oe.types.SPHERE|oe.types.TRIMESH,planeTrimesh:oe.types.PLANE|oe.types.TRIMESH};class W2{get[Ye.sphereSphere](){return this.sphereSphere}get[Ye.spherePlane](){return this.spherePlane}get[Ye.boxBox](){return this.boxBox}get[Ye.sphereBox](){return this.sphereBox}get[Ye.planeBox](){return this.planeBox}get[Ye.convexConvex](){return this.convexConvex}get[Ye.sphereConvex](){return this.sphereConvex}get[Ye.planeConvex](){return this.planeConvex}get[Ye.boxConvex](){return this.boxConvex}get[Ye.sphereHeightfield](){return this.sphereHeightfield}get[Ye.boxHeightfield](){return this.boxHeightfield}get[Ye.convexHeightfield](){return this.convexHeightfield}get[Ye.sphereParticle](){return this.sphereParticle}get[Ye.planeParticle](){return this.planeParticle}get[Ye.boxParticle](){return this.boxParticle}get[Ye.convexParticle](){return this.convexParticle}get[Ye.cylinderCylinder](){return this.convexConvex}get[Ye.sphereCylinder](){return this.sphereConvex}get[Ye.planeCylinder](){return this.planeConvex}get[Ye.boxCylinder](){return this.boxConvex}get[Ye.convexCylinder](){return this.convexConvex}get[Ye.heightfieldCylinder](){return this.heightfieldCylinder}get[Ye.particleCylinder](){return this.particleCylinder}get[Ye.sphereTrimesh](){return this.sphereTrimesh}get[Ye.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new H2,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,r,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new T2(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&r.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,d=r.material||t.material;return c&&d&&c.restitution>=0&&d.restitution>=0&&(a.restitution=c.restitution*d.restitution),a.si=s||i,a.sj=o||r,a}createFrictionEquationsFromContact(e,t){const i=e.bi,r=e.bj,s=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const d=s.material||i.material,f=o.material||r.material;if(d&&f&&d.friction>=0&&f.friction>=0&&(c=d.friction*f.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let m=i.invMass+r.invMass;m>0&&(m=1/m);const _=this.frictionEquationPool,p=_.length?_.pop():new sm(i,r,u*m),h=_.length?_.pop():new sm(i,r,u*m);return p.bi=h.bi=i,p.bj=h.bj=r,p.minForce=h.minForce=-u*m,p.maxForce=h.maxForce=u*m,p.ri.copy(e.ri),p.rj.copy(e.rj),h.ri.copy(e.ri),h.rj.copy(e.rj),e.ni.tangents(p.t,h.t),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),h.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.enabled=h.enabled=e.enabled,t.push(p,h),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];sr.setZero(),$r.setZero(),Zr.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(sr.vadd(t.ni,sr),$r.vadd(t.ri,$r),Zr.vadd(t.rj,Zr)):(sr.vsub(t.ni,sr),$r.vadd(t.rj,$r),Zr.vadd(t.ri,Zr));const o=1/e;$r.scale(o,i.ri),Zr.scale(o,i.rj),r.ri.copy(i.ri),r.rj.copy(i.rj),sr.normalize(),sr.tangents(i.t,r.t)}getContacts(e,t,i,r,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=r,this.frictionResult=o;const l=X2,c=Y2,d=q2,f=j2;for(let u=0,m=e.length;u!==m;u++){const _=e[u],p=t[u];let h=null;_.material&&p.material&&(h=i.getContactMaterial(_.material,p.material)||null);const v=_.type&fe.KINEMATIC&&p.type&fe.STATIC||_.type&fe.STATIC&&p.type&fe.KINEMATIC||_.type&fe.KINEMATIC&&p.type&fe.KINEMATIC;for(let g=0;g<_.shapes.length;g++){_.quaternion.mult(_.shapeOrientations[g],l),_.quaternion.vmult(_.shapeOffsets[g],d),d.vadd(_.position,d);const x=_.shapes[g];for(let w=0;w<p.shapes.length;w++){p.quaternion.mult(p.shapeOrientations[w],c),p.quaternion.vmult(p.shapeOffsets[w],f),f.vadd(p.position,f);const S=p.shapes[w];if(!(x.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&x.collisionFilterGroup)||d.distanceTo(f)>x.boundingSphereRadius+S.boundingSphereRadius)continue;let E=null;x.material&&S.material&&(E=i.getContactMaterial(x.material,S.material)||null),this.currentContactMaterial=E||h||i.defaultContactMaterial;const C=x.type|S.type,y=this[C];if(y){let b=!1;x.type<S.type?b=y.call(this,x,S,d,f,l,c,_,p,x,S,v):b=y.call(this,S,x,f,d,c,l,p,_,x,S,v),b&&v&&(i.shapeOverlapKeeper.set(x.id,S.id),i.bodyOverlapKeeper.set(_.id,p.id))}}}}}sphereSphere(e,t,i,r,s,o,a,l,c,d,f){if(f)return i.distanceSquared(r)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,l,e,t,c,d);r.vsub(i,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(i,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(r,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,i,r,s,o,a,l,c,d,f){const u=this.createContactEquation(a,l,e,t,c,d);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),i.vsub(r,Ba),u.ni.scale(u.ni.dot(Ba),om),Ba.vsub(om,u.rj),-Ba.dot(u.ni)<=e.radius){if(f)return!0;const m=u.ri,_=u.rj;m.vadd(i,m),m.vsub(a.position,m),_.vadd(r,_),_.vsub(l.position,_),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,i,r,s,o,a,l,c,d,f){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,r,s,o,a,l,e,t,f)}sphereBox(e,t,i,r,s,o,a,l,c,d,f){const u=this.v3pool,m=yb;i.vsub(r,Oa),t.getSideNormals(m,o);const _=e.radius;let p=!1;const h=Sb,v=Mb,g=Eb;let x=null,w=0,S=0,E=0,C=null;for(let D=0,H=m.length;D!==H&&p===!1;D++){const N=vb;N.copy(m[D]);const F=N.length();N.normalize();const U=Oa.dot(N);if(U<F+_&&U>0){const $=_b,G=xb;$.copy(m[(D+1)%3]),G.copy(m[(D+2)%3]);const Q=$.length(),re=G.length();$.normalize(),G.normalize();const _e=Oa.dot($),Y=Oa.dot(G);if(_e<Q&&_e>-Q&&Y<re&&Y>-re){const be=Math.abs(U-F-_);if((C===null||be<C)&&(C=be,S=_e,E=Y,x=F,h.copy(N),v.copy($),g.copy(G),w++,f))return!0}}}if(w){p=!0;const D=this.createContactEquation(a,l,e,t,c,d);h.scale(-_,D.ri),D.ni.copy(h),D.ni.negate(D.ni),h.scale(x,h),v.scale(S,v),h.vadd(v,h),g.scale(E,g),h.vadd(g,D.rj),D.ri.vadd(i,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(r,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let y=u.get();const b=wb;for(let D=0;D!==2&&!p;D++)for(let H=0;H!==2&&!p;H++)for(let N=0;N!==2&&!p;N++)if(y.set(0,0,0),D?y.vadd(m[0],y):y.vsub(m[0],y),H?y.vadd(m[1],y):y.vsub(m[1],y),N?y.vadd(m[2],y):y.vsub(m[2],y),r.vadd(y,b),b.vsub(i,b),b.lengthSquared()<_*_){if(f)return!0;p=!0;const F=this.createContactEquation(a,l,e,t,c,d);F.ri.copy(b),F.ri.normalize(),F.ni.copy(F.ri),F.ri.scale(_,F.ri),F.rj.copy(y),F.ri.vadd(i,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(r,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}u.release(y),y=null;const L=u.get(),z=u.get(),O=u.get(),I=u.get(),R=u.get(),k=m.length;for(let D=0;D!==k&&!p;D++)for(let H=0;H!==k&&!p;H++)if(D%3!==H%3){m[H].cross(m[D],L),L.normalize(),m[D].vadd(m[H],z),O.copy(i),O.vsub(z,O),O.vsub(r,O);const N=O.dot(L);L.scale(N,I);let F=0;for(;F===D%3||F===H%3;)F++;R.copy(i),R.vsub(I,R),R.vsub(z,R),R.vsub(r,R);const U=Math.abs(N),$=R.length();if(U<m[F].length()&&$<_){if(f)return!0;p=!0;const G=this.createContactEquation(a,l,e,t,c,d);z.vadd(I,G.rj),G.rj.copy(G.rj),R.negate(G.ni),G.ni.normalize(),G.ri.copy(G.rj),G.ri.vadd(r,G.ri),G.ri.vsub(i,G.ri),G.ri.normalize(),G.ri.scale(_,G.ri),G.ri.vadd(i,G.ri),G.ri.vsub(a.position,G.ri),G.rj.vadd(r,G.rj),G.rj.vsub(l.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}u.release(L,z,O,I,R)}planeBox(e,t,i,r,s,o,a,l,c,d,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,r,s,o,a,l,e,t,f)}convexConvex(e,t,i,r,s,o,a,l,c,d,f,u,m){const _=Ob;if(!(i.distanceTo(r)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,s,r,o,_,u,m)){const p=[],h=Ub;e.clipAgainstHull(i,s,t,r,o,_,-100,100,p);let v=0;for(let g=0;g!==p.length;g++){if(f)return!0;const x=this.createContactEquation(a,l,e,t,c,d),w=x.ri,S=x.rj;_.negate(x.ni),p[g].normal.negate(h),h.scale(p[g].depth,h),p[g].point.vadd(h,w),S.copy(p[g].point),w.vsub(i,w),S.vsub(r,S),w.vadd(i,w),w.vsub(a.position,w),S.vadd(r,S),S.vsub(l.position,S),this.result.push(x),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(e,t,i,r,s,o,a,l,c,d,f){const u=this.v3pool;i.vsub(r,bb);const m=t.faceNormals,_=t.faces,p=t.vertices,h=e.radius;let v=!1;for(let g=0;g!==p.length;g++){const x=p[g],w=Lb;o.vmult(x,w),r.vadd(w,w);const S=Ab;if(w.vsub(i,S),S.lengthSquared()<h*h){if(f)return!0;v=!0;const E=this.createContactEquation(a,l,e,t,c,d);E.ri.copy(S),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(h,E.ri),w.vsub(r,E.rj),E.ri.vadd(i,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(r,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let g=0,x=_.length;g!==x&&v===!1;g++){const w=m[g],S=_[g],E=Pb;o.vmult(w,E);const C=Rb;o.vmult(p[S[0]],C),C.vadd(r,C);const y=Db;E.scale(-h,y),i.vadd(y,y);const b=Ib;y.vsub(C,b);const L=b.dot(E),z=zb;if(i.vsub(C,z),L<0&&z.dot(E)>0){const O=[];for(let I=0,R=S.length;I!==R;I++){const k=u.get();o.vmult(p[S[I]],k),r.vadd(k,k),O.push(k)}if(gb(O,E,i)){if(f)return!0;v=!0;const I=this.createContactEquation(a,l,e,t,c,d);E.scale(-h,I.ri),E.negate(I.ni);const R=u.get();E.scale(-L,R);const k=u.get();E.scale(-h,k),i.vsub(r,I.rj),I.rj.vadd(k,I.rj),I.rj.vadd(R,I.rj),I.rj.vadd(r,I.rj),I.rj.vsub(l.position,I.rj),I.ri.vadd(i,I.ri),I.ri.vsub(a.position,I.ri),u.release(R),u.release(k),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let D=0,H=O.length;D!==H;D++)u.release(O[D]);return}else for(let I=0;I!==S.length;I++){const R=u.get(),k=u.get();o.vmult(p[S[(I+1)%S.length]],R),o.vmult(p[S[(I+2)%S.length]],k),r.vadd(R,R),r.vadd(k,k);const D=Tb;k.vsub(R,D);const H=Cb;D.unit(H);const N=u.get(),F=u.get();i.vsub(R,F);const U=F.dot(H);H.scale(U,N),N.vadd(R,N);const $=u.get();if(N.vsub(i,$),U>0&&U*U<D.lengthSquared()&&$.lengthSquared()<h*h){if(f)return!0;const G=this.createContactEquation(a,l,e,t,c,d);N.vsub(r,G.rj),N.vsub(i,G.ni),G.ni.normalize(),G.ni.scale(h,G.ri),G.rj.vadd(r,G.rj),G.rj.vsub(l.position,G.rj),G.ri.vadd(i,G.ri),G.ri.vsub(a.position,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult);for(let Q=0,re=O.length;Q!==re;Q++)u.release(O[Q]);u.release(R),u.release(k),u.release(N),u.release($),u.release(F);return}u.release(R),u.release(k),u.release(N),u.release($),u.release(F)}for(let I=0,R=O.length;I!==R;I++)u.release(O[I])}}}planeConvex(e,t,i,r,s,o,a,l,c,d,f){const u=Nb,m=Fb;m.set(0,0,1),s.vmult(m,m);let _=0;const p=kb;for(let h=0;h!==t.vertices.length;h++)if(u.copy(t.vertices[h]),o.vmult(u,u),r.vadd(u,u),u.vsub(i,p),m.dot(p)<=0){if(f)return!0;const g=this.createContactEquation(a,l,e,t,c,d),x=Bb;m.scale(m.dot(p),x),u.vsub(x,x),x.vsub(i,g.ri),g.ni.copy(m),u.vsub(r,g.rj),g.ri.vadd(i,g.ri),g.ri.vsub(a.position,g.ri),g.rj.vadd(r,g.rj),g.rj.vsub(l.position,g.rj),this.result.push(g),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(g,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(e,t,i,r,s,o,a,l,c,d,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,r,s,o,a,l,e,t,f)}sphereHeightfield(e,t,i,r,s,o,a,l,c,d,f){const u=t.data,m=e.radius,_=t.elementSize,p=Qb,h=Kb;Oe.pointToLocalFrame(r,o,i,h);let v=Math.floor((h.x-m)/_)-1,g=Math.ceil((h.x+m)/_)+1,x=Math.floor((h.y-m)/_)-1,w=Math.ceil((h.y+m)/_)+1;if(g<0||w<0||v>u.length||x>u[0].length)return;v<0&&(v=0),g<0&&(g=0),x<0&&(x=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),g>=u.length&&(g=u.length-1),w>=u[0].length&&(w=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const S=[];t.getRectMinMax(v,x,g,w,S);const E=S[0],C=S[1];if(h.z-m>C||h.z+m<E)return;const y=this.result;for(let b=v;b<g;b++)for(let L=x;L<w;L++){const z=y.length;let O=!1;if(t.getConvexTrianglePillar(b,L,!1),Oe.pointToWorldFrame(r,o,t.pillarOffset,p),i.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,i,p,s,o,a,l,e,t,f)),f&&O||(t.getConvexTrianglePillar(b,L,!0),Oe.pointToWorldFrame(r,o,t.pillarOffset,p),i.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,i,p,s,o,a,l,e,t,f)),f&&O))return!0;if(y.length-z>2)return}}boxHeightfield(e,t,i,r,s,o,a,l,c,d,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,r,s,o,a,l,e,t,f)}convexHeightfield(e,t,i,r,s,o,a,l,c,d,f){const u=t.data,m=t.elementSize,_=e.boundingSphereRadius,p=$b,h=Zb,v=Yb;Oe.pointToLocalFrame(r,o,i,v);let g=Math.floor((v.x-_)/m)-1,x=Math.ceil((v.x+_)/m)+1,w=Math.floor((v.y-_)/m)-1,S=Math.ceil((v.y+_)/m)+1;if(x<0||S<0||g>u.length||w>u[0].length)return;g<0&&(g=0),x<0&&(x=0),w<0&&(w=0),S<0&&(S=0),g>=u.length&&(g=u.length-1),x>=u.length&&(x=u.length-1),S>=u[0].length&&(S=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);const E=[];t.getRectMinMax(g,w,x,S,E);const C=E[0],y=E[1];if(!(v.z-_>y||v.z+_<C))for(let b=g;b<x;b++)for(let L=w;L<S;L++){let z=!1;if(t.getConvexTrianglePillar(b,L,!1),Oe.pointToWorldFrame(r,o,t.pillarOffset,p),i.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.convexConvex(e,t.pillarConvex,i,p,s,o,a,l,null,null,f,h,null)),f&&z||(t.getConvexTrianglePillar(b,L,!0),Oe.pointToWorldFrame(r,o,t.pillarOffset,p),i.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.convexConvex(e,t.pillarConvex,i,p,s,o,a,l,null,null,f,h,null)),f&&z))return!0}}sphereParticle(e,t,i,r,s,o,a,l,c,d,f){const u=Wb;if(u.set(0,0,1),r.vsub(i,u),u.lengthSquared()<=e.radius*e.radius){if(f)return!0;const _=this.createContactEquation(l,a,t,e,c,d);u.normalize(),_.rj.copy(u),_.rj.scale(e.radius,_.rj),_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(e,t,i,r,s,o,a,l,c,d,f){const u=Gb;u.set(0,0,1),a.quaternion.vmult(u,u);const m=Vb;if(r.vsub(a.position,m),u.dot(m)<=0){if(f)return!0;const p=this.createContactEquation(l,a,t,e,c,d);p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0);const h=Hb;u.scale(u.dot(r),h),r.vsub(h,h),p.rj.copy(h),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(e,t,i,r,s,o,a,l,c,d,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,r,s,o,a,l,e,t,f)}convexParticle(e,t,i,r,s,o,a,l,c,d,f){let u=-1;const m=jb,_=Xb;let p=null;const h=qb;if(h.copy(r),h.vsub(i,h),s.conjugate(am),am.vmult(h,h),e.pointIsInside(h)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let v=0,g=e.faces.length;v!==g;v++){const x=[e.worldVertices[e.faces[v][0]]],w=e.worldFaceNormals[v];r.vsub(x[0],lm);const S=-w.dot(lm);if(p===null||Math.abs(S)<Math.abs(p)){if(f)return!0;p=S,u=v,m.copy(w)}}if(u!==-1){const v=this.createContactEquation(l,a,t,e,c,d);m.scale(p,_),_.vadd(r,_),_.vsub(i,_),v.rj.copy(_),m.negate(v.ni),v.ri.set(0,0,0);const g=v.ri,x=v.rj;g.vadd(r,g),g.vsub(l.position,g),x.vadd(i,x),x.vsub(a.position,x),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,r,s,o,a,l,c,d,f){return this.convexHeightfield(t,e,r,i,o,s,l,a,c,d,f)}particleCylinder(e,t,i,r,s,o,a,l,c,d,f){return this.convexParticle(t,e,r,i,o,s,l,a,c,d,f)}sphereTrimesh(e,t,i,r,s,o,a,l,c,d,f){const u=nb,m=ib,_=rb,p=sb,h=ob,v=ab,g=db,x=tb,w=J2,S=fb;Oe.pointToLocalFrame(r,o,i,h);const E=e.radius;g.lowerBound.set(h.x-E,h.y-E,h.z-E),g.upperBound.set(h.x+E,h.y+E,h.z+E),t.getTrianglesInAABB(g,S);const C=eb,y=e.radius*e.radius;for(let I=0;I<S.length;I++)for(let R=0;R<3;R++)if(t.getVertex(t.indices[S[I]*3+R],C),C.vsub(h,w),w.lengthSquared()<=y){if(x.copy(C),Oe.pointToWorldFrame(r,o,x,C),C.vsub(i,w),f)return!0;let k=this.createContactEquation(a,l,e,t,c,d);k.ni.copy(w),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(e.radius,k.ri),k.ri.vadd(i,k.ri),k.ri.vsub(a.position,k.ri),k.rj.copy(C),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let I=0;I<S.length;I++)for(let R=0;R<3;R++){t.getVertex(t.indices[S[I]*3+R],u),t.getVertex(t.indices[S[I]*3+(R+1)%3],m),m.vsub(u,_),h.vsub(m,v);const k=v.dot(_);h.vsub(u,v);let D=v.dot(_);if(D>0&&k<0&&(h.vsub(u,v),p.copy(_),p.normalize(),D=v.dot(p),p.scale(D,v),v.vadd(u,v),v.distanceTo(h)<e.radius)){if(f)return!0;const N=this.createContactEquation(a,l,e,t,c,d);v.vsub(h,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(i,N.ri),N.ri.vsub(a.position,N.ri),Oe.pointToWorldFrame(r,o,v,v),v.vsub(l.position,N.rj),Oe.vectorToWorldFrame(o,N.ni,N.ni),Oe.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}const b=lb,L=cb,z=ub,O=Q2;for(let I=0,R=S.length;I!==R;I++){t.getTriangleVertices(S[I],b,L,z),t.getNormal(S[I],O),h.vsub(b,v);let k=v.dot(O);if(O.scale(k,v),h.vsub(v,v),k=v.distanceTo(h),ft.pointInTriangle(v,b,L,z)&&k<e.radius){if(f)return!0;let D=this.createContactEquation(a,l,e,t,c,d);v.vsub(h,D.ni),D.ni.normalize(),D.ni.scale(e.radius,D.ri),D.ri.vadd(i,D.ri),D.ri.vsub(a.position,D.ri),Oe.pointToWorldFrame(r,o,v,v),v.vsub(l.position,D.rj),Oe.vectorToWorldFrame(o,D.ni,D.ni),Oe.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}S.length=0}planeTrimesh(e,t,i,r,s,o,a,l,c,d,f){const u=new M,m=$2;m.set(0,0,1),s.vmult(m,m);for(let _=0;_<t.vertices.length/3;_++){t.getVertex(_,u);const p=new M;p.copy(u),Oe.pointToWorldFrame(r,o,p,u);const h=Z2;if(u.vsub(i,h),m.dot(h)<=0){if(f)return!0;const g=this.createContactEquation(a,l,e,t,c,d);g.ni.copy(m);const x=K2;m.scale(h.dot(m),x),u.vsub(x,x),g.ri.copy(x),g.ri.vsub(a.position,g.ri),g.rj.copy(u),g.rj.vsub(l.position,g.rj),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}}}const sr=new M,$r=new M,Zr=new M,q2=new M,j2=new M,X2=new ct,Y2=new ct,$2=new M,Z2=new M,K2=new M,Q2=new M,J2=new M;new M;const eb=new M,tb=new M,nb=new M,ib=new M,rb=new M,sb=new M,ob=new M,ab=new M,lb=new M,cb=new M,ub=new M,db=new dn,fb=[],Ba=new M,om=new M,hb=new M,pb=new M,mb=new M;function gb(n,e,t){let i=null;const r=n.length;for(let s=0;s!==r;s++){const o=n[s],a=hb;n[(s+1)%r].vsub(o,a);const l=pb;a.cross(e,l);const c=mb;t.vsub(o,c);const d=l.dot(c);if(i===null||d>0&&i===!0||d<=0&&i===!1){i===null&&(i=d>0);continue}else return!1}return!0}const Oa=new M,vb=new M,_b=new M,xb=new M,yb=[new M,new M,new M,new M,new M,new M],wb=new M,Sb=new M,Mb=new M,Eb=new M,bb=new M,Tb=new M,Cb=new M,Ab=new M,Lb=new M,Pb=new M,Rb=new M,Db=new M,Ib=new M,zb=new M;new M;new M;const Nb=new M,Fb=new M,kb=new M,Bb=new M,Ob=new M,Ub=new M,Gb=new M,Vb=new M,Hb=new M,Wb=new M,am=new ct,qb=new M;new M;const jb=new M,lm=new M,Xb=new M,Yb=new M,$b=new M,Zb=[0],Kb=new M,Qb=new M;class cm{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),r=this.current;let s=0;for(;i>r[s];)s++;if(i!==r[s]){for(let o=r.length-1;o>=s;o--)r[o+1]=r[o];r[s]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,r=this.previous,s=i.length,o=r.length;let a=0;for(let l=0;l<s;l++){let c=!1;const d=i[l];for(;d>r[a];)a++;c=d===r[a],c||um(e,d)}a=0;for(let l=0;l<o;l++){let c=!1;const d=r[l];for(;d>i[a];)a++;c=i[a]===d,c||um(t,d)}}}function um(n,e){n.push((e&4294901760)>>16,e&65535)}const cu=(n,e)=>n<e?`${n}-${e}`:`${e}-${n}`;class Jb{constructor(){this.data={keys:[]}}get(e,t){const i=cu(e,t);return this.data[i]}set(e,t,i){const r=cu(e,t);this.get(e,t)||this.data.keys.push(r),this.data[r]=i}delete(e,t){const i=cu(e,t),r=this.data.keys.indexOf(i);r!==-1&&this.data.keys.splice(r,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class eT extends $0{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new a2,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new B2,this.constraints=[],this.narrowphase=new W2(this),this.collisionMatrix=new $p,this.collisionMatrixPrevious=new $p,this.bodyOverlapKeeper=new cm,this.shapeOverlapKeeper=new cm,this.contactmaterials=[],this.contactMaterialTable=new Jb,this.defaultMaterial=new Xl("default"),this.defaultContactMaterial=new jl(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof bl?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,r){return i===void 0&&(i={}),i.mode=ft.ALL,i.from=e,i.to=t,i.callback=r,uu.intersectWorld(this,i)}raycastAny(e,t,i,r){return i===void 0&&(i={}),i.mode=ft.ANY,i.from=e,i.to=t,i.result=r,uu.intersectWorld(this,i)}raycastClosest(e,t,i,r){return i===void 0&&(i={}),i.mode=ft.CLOSEST,i.from=e,i.to=t,i.result=r,uu.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof fe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let s=0;s!==i.length;s++)i[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const r=t[i].shapes;for(let s=0;s<r.length;s++){const o=r[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=vt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const r=i-this.lastCallTime;this.step(e,r,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const r=vt.now();let s=0;for(;this.accumulator>=e&&s<i&&(this.internalStep(e),this.accumulator-=e,s++,!(vt.now()-r>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=sT,r=oT,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,d=this.profile,f=fe.DYNAMIC;let u=-1/0;const m=this.constraints,_=rT;l.length();const p=l.x,h=l.y,v=l.z;let g=0;for(c&&(u=vt.now()),g=0;g!==s;g++){const I=o[g];if(I.type===f){const R=I.force,k=I.mass;R.x+=k*p,R.y+=k*h,R.z+=k*v}}for(let I=0,R=this.subsystems.length;I!==R;I++)this.subsystems[I].update();c&&(u=vt.now()),i.length=0,r.length=0,this.broadphase.collisionPairs(this,i,r),c&&(d.broadphase=vt.now()-u);let x=m.length;for(g=0;g!==x;g++){const I=m[g];if(!I.collideConnected)for(let R=i.length-1;R>=0;R-=1)(I.bodyA===i[R]&&I.bodyB===r[R]||I.bodyB===i[R]&&I.bodyA===r[R])&&(i.splice(R,1),r.splice(R,1))}this.collisionMatrixTick(),c&&(u=vt.now());const w=iT,S=t.length;for(g=0;g!==S;g++)w.push(t[g]);t.length=0;const E=this.frictionEquations.length;for(g=0;g!==E;g++)_.push(this.frictionEquations[g]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,r,this,t,w,this.frictionEquations,_),c&&(d.narrowphase=vt.now()-u),c&&(u=vt.now()),g=0;g<this.frictionEquations.length;g++)a.addEquation(this.frictionEquations[g]);const C=t.length;for(let I=0;I!==C;I++){const R=t[I],k=R.bi,D=R.bj,H=R.si,N=R.sj;let F;if(k.material&&D.material?F=this.getContactMaterial(k.material,D.material)||this.defaultContactMaterial:F=this.defaultContactMaterial,F.friction,k.material&&D.material&&(k.material.friction>=0&&D.material.friction>=0&&k.material.friction*D.material.friction,k.material.restitution>=0&&D.material.restitution>=0&&(R.restitution=k.material.restitution*D.material.restitution)),a.addEquation(R),k.allowSleep&&k.type===fe.DYNAMIC&&k.sleepState===fe.SLEEPING&&D.sleepState===fe.AWAKE&&D.type!==fe.STATIC){const U=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),$=D.sleepSpeedLimit**2;U>=$*2&&(k.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===fe.DYNAMIC&&D.sleepState===fe.SLEEPING&&k.sleepState===fe.AWAKE&&k.type!==fe.STATIC){const U=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),$=k.sleepSpeedLimit**2;U>=$*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(k,D,!0),this.collisionMatrixPrevious.get(k,D)||(Zs.body=D,Zs.contact=R,k.dispatchEvent(Zs),Zs.body=k,D.dispatchEvent(Zs)),this.bodyOverlapKeeper.set(k.id,D.id),this.shapeOverlapKeeper.set(H.id,N.id)}for(this.emitContactEvents(),c&&(d.makeContactConstraints=vt.now()-u,u=vt.now()),g=0;g!==s;g++){const I=o[g];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(x=m.length,g=0;g!==x;g++){const I=m[g];I.update();for(let R=0,k=I.equations.length;R!==k;R++){const D=I.equations[R];a.addEquation(D)}}a.solve(e,this),c&&(d.solve=vt.now()-u),a.removeAllEquations();const y=Math.pow;for(g=0;g!==s;g++){const I=o[g];if(I.type&f){const R=y(1-I.linearDamping,e),k=I.velocity;k.scale(R,k);const D=I.angularVelocity;if(D){const H=y(1-I.angularDamping,e);D.scale(H,D)}}}this.dispatchEvent(nT),c&&(u=vt.now());const L=this.stepnumber%(this.quatNormalizeSkip+1)===0,z=this.quatNormalizeFast;for(g=0;g!==s;g++)o[g].integrate(e,L,z);this.clearForces(),this.broadphase.dirty=!0,c&&(d.integrate=vt.now()-u),this.stepnumber+=1,this.dispatchEvent(tT);let O=!0;if(this.allowSleep)for(O=!1,g=0;g!==s;g++){const I=o[g];I.sleepTick(this.time),I.sleepState!==fe.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(ri,si),e){for(let s=0,o=ri.length;s<o;s+=2)Ks.bodyA=this.getBodyById(ri[s]),Ks.bodyB=this.getBodyById(ri[s+1]),this.dispatchEvent(Ks);Ks.bodyA=Ks.bodyB=null}if(t){for(let s=0,o=si.length;s<o;s+=2)Qs.bodyA=this.getBodyById(si[s]),Qs.bodyB=this.getBodyById(si[s+1]),this.dispatchEvent(Qs);Qs.bodyA=Qs.bodyB=null}ri.length=si.length=0;const i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(ri,si),i){for(let s=0,o=ri.length;s<o;s+=2){const a=this.getShapeById(ri[s]),l=this.getShapeById(ri[s+1]);oi.shapeA=a,oi.shapeB=l,a&&(oi.bodyA=a.body),l&&(oi.bodyB=l.body),this.dispatchEvent(oi)}oi.bodyA=oi.bodyB=oi.shapeA=oi.shapeB=null}if(r){for(let s=0,o=si.length;s<o;s+=2){const a=this.getShapeById(si[s]),l=this.getShapeById(si[s+1]);ai.shapeA=a,ai.shapeB=l,a&&(ai.bodyA=a.body),l&&(ai.bodyB=l.body),this.dispatchEvent(ai)}ai.bodyA=ai.bodyB=ai.shapeA=ai.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const r=e[i];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new dn;const uu=new ft,vt=globalThis.performance||{};if(!vt.now){let n=Date.now();vt.timing&&vt.timing.navigationStart&&(n=vt.timing.navigationStart),vt.now=()=>Date.now()-n}new M;const tT={type:"postStep"},nT={type:"preStep"},Zs={type:fe.COLLIDE_EVENT_NAME,body:null,contact:null},iT=[],rT=[],sT=[],oT=[],ri=[],si=[],Ks={type:"beginContact",bodyA:null,bodyB:null},Qs={type:"endContact",bodyA:null,bodyB:null},oi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ai={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function aT(n,e,t){let{color:i=65280,scale:r=1,onInit:s,onUpdate:o}=t===void 0?{}:t;const a=[],l=new uf({color:i!=null?i:65280,wireframe:!0}),c=new M,d=new M,f=new M,u=new ct,m=new El(1),_=new Ki(1,1,1),p=new Fo(10,10,10,10);p.translate(0,0,1e-4);function h(y){const b=new Qt,L=[];for(let O=0;O<y.vertices.length;O++){const I=y.vertices[O];L.push(I.x,I.y,I.z)}b.setAttribute("position",new pt(L,3));const z=[];for(let O=0;O<y.faces.length;O++){const I=y.faces[O],R=I[0];for(let k=1;k<I.length-1;k++){const D=I[k],H=I[k+1];z.push(R,D,H)}}return b.setIndex(z),b.computeBoundingSphere(),b.computeVertexNormals(),b}function v(y){const b=new Qt,L=[],z=c,O=d,I=f;for(let R=0;R<y.indices.length/3;R++)y.getTriangleVertices(R,z,O,I),L.push(z.x,z.y,z.z),L.push(O.x,O.y,O.z),L.push(I.x,I.y,I.z);return b.setAttribute("position",new pt(L,3)),b.computeBoundingSphere(),b.computeVertexNormals(),b}function g(y){const b=new Qt,L=y.elementSize||1,z=y.data.flatMap((I,R)=>I.flatMap((k,D)=>[R*L,D*L,k])),O=[];for(let I=0;I<y.data.length-1;I++)for(let R=0;R<y.data[I].length-1;R++){const k=y.data[I].length,D=I*k+R;O.push(D+1,D+k,D+k+1),O.push(D+k,D+1,D)}return b.setIndex(O),b.setAttribute("position",new pt(z,3)),b.computeBoundingSphere(),b.computeVertexNormals(),b}function x(y){let b=new bt;const{SPHERE:L,BOX:z,PLANE:O,CYLINDER:I,CONVEXPOLYHEDRON:R,TRIMESH:k,HEIGHTFIELD:D}=oe.types;switch(y.type){case L:{b=new bt(m,l);break}case z:{b=new bt(_,l);break}case O:{b=new bt(p,l);break}case I:{const H=new hf(y.radiusTop,y.radiusBottom,y.height,y.numSegments);b=new bt(H,l),y.geometryId=H.id;break}case R:{const H=h(y);b=new bt(H,l),y.geometryId=H.id;break}case k:{const H=v(y);b=new bt(H,l),y.geometryId=H.id;break}case D:{const H=g(y);b=new bt(H,l),y.geometryId=H.id;break}}return n.add(b),b}function w(y,b){const{SPHERE:L,BOX:z,PLANE:O,CYLINDER:I,CONVEXPOLYHEDRON:R,TRIMESH:k,HEIGHTFIELD:D}=oe.types;switch(b.type){case L:{const{radius:H}=b;y.scale.set(H*r,H*r,H*r);break}case z:{y.scale.copy(b.halfExtents),y.scale.multiplyScalar(2*r);break}case O:break;case I:{y.scale.set(1*r,1*r,1*r);break}case R:{y.scale.set(1*r,1*r,1*r);break}case k:{y.scale.copy(b.scale).multiplyScalar(r);break}case D:{y.scale.set(1*r,1*r,1*r);break}}}function S(y,b){if(!y)return!1;const{geometry:L}=y;return L instanceof El&&b.type===oe.types.SPHERE||L instanceof Ki&&b.type===oe.types.BOX||L instanceof Fo&&b.type===oe.types.PLANE||L.id===b.geometryId&&b.type===oe.types.CYLINDER||L.id===b.geometryId&&b.type===oe.types.CONVEXPOLYHEDRON||L.id===b.geometryId&&b.type===oe.types.TRIMESH||L.id===b.geometryId&&b.type===oe.types.HEIGHTFIELD}function E(y,b){let L=a[y],z=!1;return S(L,b)||(L&&n.remove(L),a[y]=L=x(b),z=!0),w(L,b),z}function C(){const y=a,b=c,L=u;let z=0;for(const O of e.bodies)for(let I=0;I!==O.shapes.length;I++){const R=O.shapes[I],k=E(z,R),D=y[z];D&&(O.quaternion.vmult(O.shapeOffsets[I],b),O.position.vadd(b,b),O.quaternion.mult(O.shapeOrientations[I],L),D.position.copy(b),D.quaternion.copy(L),k&&s instanceof Function&&s(O,D,R),!k&&o instanceof Function&&o(O,D,R)),z++}for(let O=z;O<y.length;O++){const I=y[O];I&&n.remove(I)}y.length=z}return{update:C}}const dm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Yl{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const lT=new $o(-1,1,1,-1,0,1),vf=new Qt;vf.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3));vf.setAttribute("uv",new pt([0,2,0,0,2,0],2));class cT{constructor(e){this._mesh=new bt(vf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Tl extends Yl{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=F0.clone(e.uniforms),this.material=new yi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new cT(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class fm extends Yl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class uT extends Yl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dT{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Fe);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Zi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],dm===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Tl===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Tl(dm),this.clock=new Y0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fm!==void 0&&(o instanceof fm?i=!0:o instanceof uT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new $o(-1,1,1,-1,0,1);const iv=new Qt;iv.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3));iv.setAttribute("uv",new pt([0,2,0,0,2,0],2));class fT extends Yl{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const hT={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},pT={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`},mT="/stack-game/assets/bg1.b4a7f108.jpg",gT="/stack-game/assets/overlap.01f6f18d.mp3",vT="/stack-game/assets/game-over.830b2019.wav";var rv={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T=Bo.exports,xT=Symbol.for("react.element"),yT=Symbol.for("react.fragment"),wT=Object.prototype.hasOwnProperty,ST=_T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MT={key:!0,ref:!0,__self:!0,__source:!0};function sv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)wT.call(e,i)&&!MT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xT,type:n,key:s,ref:o,props:r,_owner:ST.current}}$l.Fragment=yT;$l.jsx=sv;$l.jsxs=sv;(function(n){n.exports=$l})(rv);const Cl=rv.exports.jsx;function ET(){return Bo.exports.useEffect(()=>{const a=new EE,l=new Y0,c=[],d=[],f=["#f1c0e8","#cfbaf0","#a3c4f3","#90dbf4","#8eecf5","#98f5e1","#b9fbc0","#fbf8cc","#fde4cf","#ffcfd2"],u=new Audio(gT);var m=document.createElement("div"),_=document.createElement("div"),p=document.createElement("div"),h=document.createElement("div"),v=50,g=50,x="x",w=!0,S=!0,E=!1,C=0,y=60;const b=new eT({gravity:new M(0,-9.81,0)});new aT(a,b,{}),new LE().load(mT,function(Ce){a.background=Ce});const z=window.innerWidth/window.innerHeight,O=80,I=new $o(-O*z,O*z,O,-O,-100,800);I.position.set(50,60,50),I.lookAt(0,0,0);const R=document.getElementById("stackGame"),k=new q0({canvas:R,antialias:!0});k.setSize(window.innerWidth,window.innerHeight),k.setAnimationLoop($),document.body.appendChild(k.domElement);const D=new IE(16777215,.6);a.add(D);const H=new DE(16777215,.6);H.position.set(60,200,20),H.castShadow=!0,a.add(H);const N=new dT(k);N.addPass(new fT(a,I));const F=new Tl(hT);N.addPass(F);const U=new Tl(pT);N.addPass(U),G(0,0),kt(),mt(),["keydown","click"].forEach(Ce=>{window.addEventListener(Ce,function(we){E||(S&&(Ce=="click"||we.keyCode==32)?be():Me())})}),window.addEventListener("resize",()=>je(),!1);function $(Ce){if(c.length>0){const we=c[c.length-1],Ae=l.getDelta(),Ve=we.layer.position[we.direction];Ve<60&&w==!0?(we.layer.position[we.direction]+=y*Ae,we.cannonJS.position[we.direction]+=y*Ae):Ve>-60&&w==!1&&(we.layer.position[we.direction]-=y*Ae,we.cannonJS.position[we.direction]-=y*Ae),Ve>=60?w=!1:Ve<=-60&&(w=!0),b.fixedStep(),d.forEach(Qe=>{Qe.layer.position.copy(Qe.cannonJS.position),Qe.layer.quaternion.copy(Qe.cannonJS.quaternion)}),S?k.render(a,I):N.render()}}function G(Ce,we,Ae){if(c.length>1){const P=c[c.length-1],T=c[c.length-2],Z=P.layer.position[P.direction],ne=T.layer.position[P.direction],te=Z-ne,se=P.direction=="x"?P.width:P.depth,ge=se-Math.abs(te),j=ge/2*Math.sign(te);if(ge>0){if(P.direction=="x"){v=ge,Ce-=te/2;const me=Y(Math.abs(te),g,P.layer.position.x+j,(c.length-1)*10,P.layer.position.z,!0);me.cannonJS.velocity.x=te<0?-Q(1,10):Q(1,10),me.cannonJS.velocity.y=te<0?-Q(1,5):Q(1,5),d.push(me)}else{g=ge,we-=te/2;const me=Y(v,Math.abs(te),P.layer.position.x,(c.length-1)*10,P.layer.position.z+j,!0);me.cannonJS.velocity.z=te<0?-Q(1,10):Q(1,10),me.cannonJS.velocity.y=te<0?-Q(3,5):Q(3,5),d.push(me)}re(ge,se,te,P),_e()}else E=!0,xe()}const Ve=c.length*10,Qe=Y(v,g,Ce,Ve,we,!1);Qe.direction=Ae,c.push(Qe)}function Q(Ce,we){return Math.floor(Math.random()*(we-Ce+1)+Ce)}function re(Ce,we,Ae,Ve){Ve.width=v,Ve.depth=g,Ve.layer.scale[Ve.direction]=Ce/we,Ve.layer.position[Ve.direction]-=Ae/2;const Qe=new fe({mass:0,position:new M(Ve.layer.position.x,(c.length-1)*10,Ve.layer.position.z),shape:new ko(new M(v/2,10/2,g/2))});b.removeBody(Ve.cannonJS),b.addBody(Qe)}function _e(){u.duration>0&&!u.paused&&(u.currentTime=0),u.play()}function Y(Ce,we,Ae,Ve,Qe,P){var T=10,Z=P?f[(c.length-1)%f.length]:f[c.length%f.length],ne=(P?5:0)*(Ce*we)/(50*50);c.length==0&&(T=120,Ae=0,Ve=-55,Qe=0,Z="#b3b3ff");const te=new Ki(Ce,T,we),se=new bE({color:Z}),ge=new bt(te,se);ge.position.set(Ae,Ve,Qe),a.add(ge);const j=new fe({mass:ne,position:new M(ge.position.x,ge.position.y,ge.position.z),shape:new ko(new M(Ce/2,T/2,we/2))});return b.addBody(j),{layer:ge,cannonJS:j,width:Ce,depth:we}}function be(){const Ce=c[c.length-1];Ct(),x=="x"?(G(-50,Ce.layer.position.z,x),x="z"):(G(Ce.layer.position.x,-50,x),x="x"),y*=c.length%5==0?1.1:1,ye()}function ye(){I.position.lerp(new V(50,c.length*10+60,50),.12),H.position.lerp(new V(c.length*10+60,c.length*10+200,c.length*10+20),.2)}async function Me(){var Ce,we;for(_.innerHTML="",_.style.padding="0px",await de(400);a.children.length>2;)Ce=a.children.length-1,we=a.children[Ce],a.remove(we),c.length>0&&c.pop(),b.bodies.length>0&&b.removeBody(b.bodies[b.bodies.length-1]),d.length>0&&d.pop(),ye();await de(500),v=g=50,x="x",y=60,S=!0,G(-50,0),be(),ye()}function de(Ce){return new Promise(we=>setTimeout(we,Ce))}function je(){I.aspect=window.innerWidth/window.innerHeight,I.updateProjectionMatrix(),k.setSize(window.innerWidth,window.innerHeight),m.style.top=window.innerHeight/4+"px",m.style.left=window.innerWidth/2+"px",m.style.transform="translate(-50%, -50%)",_.style.top=window.innerHeight/2+"px",_.style.left=window.innerWidth/2+"px",_.style.transform="translate(-50%, -50%)",p.style.top=window.innerHeight/16+"px",p.style.left=window.innerWidth/2+"px",p.style.transform="translate(-50%, -50%)",h.style.top=window.innerHeight/16+"px",h.style.left=window.innerWidth/2-5+"px",h.style.transform="translate(-50%, -50%)"}function Te(){p.style.position="absolute",p.style.color="white",p.style.fontSize="24px",p.style.padding="10px",p.style.cursor="default",p.style.textAlign="center",p.style.borderRadius="14px",p.style.fontFamily="Poppins",p.innerHTML="Current Score<br>"+(c.length-1),p.style.backgroundColor="rgb(33 36 45 / 30%)",p.style.transform="translate(-50%, -50%)",p.style.top=window.innerHeight/16+"px",p.style.left=window.innerWidth/2+"px",p.style.userSelect="none",document.body.appendChild(p)}async function xe(){var Ce=new Audio(vT);S=!1,v=0,g=0,y=0,Ce.play(),C=Math.max(c.length-2,C),_.style.position="absolute",_.style.color="white",_.style.width="500px",_.style.fontSize="30px",_.style.padding="80px",_.style.fontFamily="Poppins",_.style.textAlign="center",_.style.borderRadius="14px",_.style.backgroundColor="rgb(33 36 45 / 40%)",_.style.zIndex="2",_.innerHTML="<font size ='10px' color='#F88379'>GAME OVER</font> <br><br><font size='4px'> Your Score: "+(c.length-2)+"<br><br>Max Score: "+C+"</font><font size='5px'><br><br>CLICK TO PLAY AGAIN</font>",_.style.top=window.innerHeight/2+"px",_.style.left=window.innerWidth/2+"px",_.style.transform="translate(-50%, -50%)",_.style.userSelect="none",p.style.padding="0px",p.innerHTML="",document.body.appendChild(_),await de(1e3),E=!1}function mt(){h.style.position="absolute",h.style.fontSize="70px",h.style.padding="10px",h.style.cursor="default",h.style.textAlign="center",h.style.fontFamily="Poppins",h.style.backgroundImage="-webkit-linear-gradient(#f1c0e8, #cfbaf0, #a3c4f3, #90dbf4, #8eecf5, #98f5e1, #b9fbc0, #fbf8cc, #fde4cf, #ffcfd2)",h.style.width="100%",h.style.transform="translate(-50%, -50%)",h.style.top=window.innerHeight/16+"px",h.style.left=window.innerWidth/2-5+"px",h.style.userSelect="none",h.innerHTML="STACK GAME",document.body.appendChild(h)}function kt(){m.style.position="absolute",m.style.color="white",m.style.padding="10px",m.style.cursor="pointer",m.style.borderRadius="14px",m.style.fontFamily="Poppins",m.style.textAlign="center",m.innerHTML="Press on mouse or spacebar to<br><br><font size='30px'>START GAME</font>",m.style.backgroundColor="rgb(33 36 45 / 30%)",m.style.transform="translate(-50%, -50%)",m.style.top=window.innerHeight/4+"px",m.style.left=window.innerWidth/2+"px",m.style.userSelect="none",document.body.appendChild(m)}function Ct(){m.style.padding="0px",m.innerHTML="",p.style.padding="0px",p.innerHTML="",h.style.padding="0px",h.innerHTML="",Te()}}),Cl("div",{children:Cl("canvas",{id:"stackGame"})})}du.createRoot(document.getElementById("root")).render(Cl(Cv.StrictMode,{children:Cl(ET,{})}));
