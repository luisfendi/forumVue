function Ql(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sm=Ql(Im);function Qf(n){return!!n||n===""}function Xl(n){if(G(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ve(i)?xm(i):Xl(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Ve(n))return n;if(xe(n))return n}}const Am=/;(?![^(]*\))/g,Rm=/:(.+)/;function xm(n){const e={};return n.split(Am).forEach(t=>{if(t){const i=t.split(Rm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jl(n){let e="";if(Ve(n))e=n;else if(G(n))for(let t=0;t<n.length;t++){const i=Jl(n[t]);i&&(e+=i+" ")}else if(xe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Pm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Qi(n[i],e[i]);return t}function Qi(n,e){if(n===e)return!0;let t=Uc(n),i=Uc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=G(n),i=G(e),t||i)return t&&i?Pm(n,e):!1;if(t=xe(n),i=xe(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Qi(n[o],e[o]))return!1}}return String(n)===String(e)}function Xf(n,e){return n.findIndex(t=>Qi(t,e))}const kS=n=>Ve(n)?n:n==null?"":G(n)||xe(n)&&(n.toString===ed||!te(n.toString))?JSON.stringify(n,Jf,2):String(n),Jf=(n,e)=>e&&e.__v_isRef?Jf(n,e.value):Vi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:Yo(e)?{[`Set(${e.size})`]:[...e.values()]}:xe(e)&&!G(e)&&!td(e)?String(e):e,De={},Hi=[],Nt=()=>{},km=()=>!1,Nm=/^on[^a-z]/,Ko=n=>Nm.test(n),Zl=n=>n.startsWith("onUpdate:"),He=Object.assign,eu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Om=Object.prototype.hasOwnProperty,ce=(n,e)=>Om.call(n,e),G=Array.isArray,Vi=n=>Qo(n)==="[object Map]",Yo=n=>Qo(n)==="[object Set]",Uc=n=>n instanceof Date,te=n=>typeof n=="function",Ve=n=>typeof n=="string",tu=n=>typeof n=="symbol",xe=n=>n!==null&&typeof n=="object",Zf=n=>xe(n)&&te(n.then)&&te(n.catch),ed=Object.prototype.toString,Qo=n=>ed.call(n),Fm=n=>Qo(n).slice(8,-1),td=n=>Qo(n)==="[object Object]",nu=n=>Ve(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Jr=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Mm=/-(\w)/g,qt=Xo(n=>n.replace(Mm,(e,t)=>t?t.toUpperCase():"")),Lm=/\B([A-Z])/g,gs=Xo(n=>n.replace(Lm,"-$1").toLowerCase()),Jo=Xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sa=Xo(n=>n?`on${Jo(n)}`:""),sr=(n,e)=>!Object.is(n,e),Zr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},lo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},uo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Wc;const Bm=()=>Wc||(Wc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Qt;class Um{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Qt&&(this.parent=Qt,this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Qt=this,e()}finally{Qt=this.parent}}on(){Qt=this}off(){Qt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Wm(n,e=Qt){e&&e.active&&e.effects.push(n)}const iu=n=>{const e=new Set(n);return e.w=0,e.n=0,e},nd=n=>(n.w&Un)>0,id=n=>(n.n&Un)>0,Hm=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Un},Vm=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];nd(s)&&!id(s)?s.delete(n):e[t++]=s,s.w&=~Un,s.n&=~Un}e.length=t}},il=new WeakMap;let Ls=0,Un=1;const sl=30;let $t;const hi=Symbol(""),rl=Symbol("");class su{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Wm(this,i)}run(){if(!this.active)return this.fn();let e=$t,t=Pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Pn=!0,Un=1<<++Ls,Ls<=sl?Hm(this):Hc(this),this.fn()}finally{Ls<=sl&&Vm(this),Un=1<<--Ls,$t=this.parent,Pn=t,this.parent=void 0}}stop(){this.active&&(Hc(this),this.onStop&&this.onStop(),this.active=!1)}}function Hc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Pn=!0;const sd=[];function ms(){sd.push(Pn),Pn=!1}function ys(){const n=sd.pop();Pn=n===void 0?!0:n}function mt(n,e,t){if(Pn&&$t){let i=il.get(n);i||il.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=iu()),rd(s)}}function rd(n,e){let t=!1;Ls<=sl?id(n)||(n.n|=Un,t=!nd(n)):t=!n.has($t),t&&(n.add($t),$t.deps.push(n))}function an(n,e,t,i,s,r){const o=il.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&G(n))o.forEach((l,u)=>{(u==="length"||u>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":G(n)?nu(t)&&a.push(o.get("length")):(a.push(o.get(hi)),Vi(n)&&a.push(o.get(rl)));break;case"delete":G(n)||(a.push(o.get(hi)),Vi(n)&&a.push(o.get(rl)));break;case"set":Vi(n)&&a.push(o.get(hi));break}if(a.length===1)a[0]&&ol(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);ol(iu(l))}}function ol(n,e){for(const t of G(n)?n:[...n])(t!==$t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const $m=Ql("__proto__,__v_isRef,__isVue"),od=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(tu)),zm=ru(),jm=ru(!1,!0),qm=ru(!0),Vc=Gm();function Gm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=fe(this);for(let r=0,o=this.length;r<o;r++)mt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ms();const i=fe(this)[e].apply(this,t);return ys(),i}}),n}function ru(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?uy:hd:e?cd:ud).get(i))return i;const o=G(i);if(!n&&o&&ce(Vc,s))return Reflect.get(Vc,s,r);const a=Reflect.get(i,s,r);return(tu(s)?od.has(s):$m(s))||(n||mt(i,"get",s),e)?a:qe(a)?!o||!nu(s)?a.value:a:xe(a)?n?fd(a):Sr(a):a}}const Km=ad(),Ym=ad(!0);function ad(n=!1){return function(t,i,s,r){let o=t[i];if(rr(o)&&qe(o)&&!qe(s))return!1;if(!n&&!rr(s)&&(dd(s)||(s=fe(s),o=fe(o)),!G(t)&&qe(o)&&!qe(s)))return o.value=s,!0;const a=G(t)&&nu(i)?Number(i)<t.length:ce(t,i),l=Reflect.set(t,i,s,r);return t===fe(r)&&(a?sr(s,o)&&an(t,"set",i,s):an(t,"add",i,s)),l}}function Qm(n,e){const t=ce(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&an(n,"delete",e,void 0),i}function Xm(n,e){const t=Reflect.has(n,e);return(!tu(e)||!od.has(e))&&mt(n,"has",e),t}function Jm(n){return mt(n,"iterate",G(n)?"length":hi),Reflect.ownKeys(n)}const ld={get:zm,set:Km,deleteProperty:Qm,has:Xm,ownKeys:Jm},Zm={get:qm,set(n,e){return!0},deleteProperty(n,e){return!0}},ey=He({},ld,{get:jm,set:Ym}),ou=n=>n,Zo=n=>Reflect.getPrototypeOf(n);function $r(n,e,t=!1,i=!1){n=n.__v_raw;const s=fe(n),r=fe(e);e!==r&&!t&&mt(s,"get",e),!t&&mt(s,"get",r);const{has:o}=Zo(s),a=i?ou:t?uu:or;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function zr(n,e=!1){const t=this.__v_raw,i=fe(t),s=fe(n);return n!==s&&!e&&mt(i,"has",n),!e&&mt(i,"has",s),n===s?t.has(n):t.has(n)||t.has(s)}function jr(n,e=!1){return n=n.__v_raw,!e&&mt(fe(n),"iterate",hi),Reflect.get(n,"size",n)}function $c(n){n=fe(n);const e=fe(this);return Zo(e).has.call(e,n)||(e.add(n),an(e,"add",n,n)),this}function zc(n,e){e=fe(e);const t=fe(this),{has:i,get:s}=Zo(t);let r=i.call(t,n);r||(n=fe(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?sr(e,o)&&an(t,"set",n,e):an(t,"add",n,e),this}function jc(n){const e=fe(this),{has:t,get:i}=Zo(e);let s=t.call(e,n);s||(n=fe(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&an(e,"delete",n,void 0),r}function qc(){const n=fe(this),e=n.size!==0,t=n.clear();return e&&an(n,"clear",void 0,void 0),t}function qr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=fe(o),l=e?ou:n?uu:or;return!n&&mt(a,"iterate",hi),o.forEach((u,c)=>i.call(s,l(u),l(c),r))}}function Gr(n,e,t){return function(...i){const s=this.__v_raw,r=fe(s),o=Vi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),c=t?ou:e?uu:or;return!e&&mt(r,"iterate",l?rl:hi),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function pn(n){return function(...e){return n==="delete"?!1:this}}function ty(){const n={get(r){return $r(this,r)},get size(){return jr(this)},has:zr,add:$c,set:zc,delete:jc,clear:qc,forEach:qr(!1,!1)},e={get(r){return $r(this,r,!1,!0)},get size(){return jr(this)},has:zr,add:$c,set:zc,delete:jc,clear:qc,forEach:qr(!1,!0)},t={get(r){return $r(this,r,!0)},get size(){return jr(this,!0)},has(r){return zr.call(this,r,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:qr(!0,!1)},i={get(r){return $r(this,r,!0,!0)},get size(){return jr(this,!0)},has(r){return zr.call(this,r,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:qr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Gr(r,!1,!1),t[r]=Gr(r,!0,!1),e[r]=Gr(r,!1,!0),i[r]=Gr(r,!0,!0)}),[n,t,e,i]}const[ny,iy,sy,ry]=ty();function au(n,e){const t=e?n?ry:sy:n?iy:ny;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ce(t,s)&&s in i?t:i,s,r)}const oy={get:au(!1,!1)},ay={get:au(!1,!0)},ly={get:au(!0,!1)},ud=new WeakMap,cd=new WeakMap,hd=new WeakMap,uy=new WeakMap;function cy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hy(n){return n.__v_skip||!Object.isExtensible(n)?0:cy(Fm(n))}function Sr(n){return rr(n)?n:lu(n,!1,ld,oy,ud)}function fy(n){return lu(n,!1,ey,ay,cd)}function fd(n){return lu(n,!0,Zm,ly,hd)}function lu(n,e,t,i,s){if(!xe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=hy(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function $i(n){return rr(n)?$i(n.__v_raw):!!(n&&n.__v_isReactive)}function rr(n){return!!(n&&n.__v_isReadonly)}function dd(n){return!!(n&&n.__v_isShallow)}function pd(n){return $i(n)||rr(n)}function fe(n){const e=n&&n.__v_raw;return e?fe(e):n}function _d(n){return lo(n,"__v_skip",!0),n}const or=n=>xe(n)?Sr(n):n,uu=n=>xe(n)?fd(n):n;function gd(n){Pn&&$t&&(n=fe(n),rd(n.dep||(n.dep=iu())))}function md(n,e){n=fe(n),n.dep&&ol(n.dep)}function qe(n){return!!(n&&n.__v_isRef===!0)}function dy(n){return yd(n,!1)}function py(n){return yd(n,!0)}function yd(n,e){return qe(n)?n:new _y(n,e)}class _y{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:fe(e),this._value=t?e:or(e)}get value(){return gd(this),this._value}set value(e){e=this.__v_isShallow?e:fe(e),sr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:or(e),md(this))}}function zs(n){return qe(n)?n.value:n}const gy={get:(n,e,t)=>zs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return qe(s)&&!qe(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Dd(n){return $i(n)?n:new Proxy(n,gy)}class my{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new su(e,()=>{this._dirty||(this._dirty=!0,md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=fe(this);return gd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yy(n,e,t=!1){let i,s;const r=te(n);return r?(i=n,s=Nt):(i=n.get,s=n.set),new my(i,s,r||!s,t)}Promise.resolve();function kn(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){ea(r,e,t)}return s}function It(n,e,t,i){if(te(n)){const r=kn(n,e,t,i);return r&&Zf(r)&&r.catch(o=>{ea(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(It(n[r],e,t,i));return s}function ea(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const u=r.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){kn(l,null,10,[n,o,a]);return}}Dy(n,t,s,i)}function Dy(n,e,t,i=!0){console.error(n)}let co=!1,al=!1;const pt=[];let Zt=0;const js=[];let Bs=null,Oi=0;const qs=[];let Dn=null,Fi=0;const vd=Promise.resolve();let cu=null,ll=null;function Cd(n){const e=cu||vd;return n?e.then(this?n.bind(this):n):e}function vy(n){let e=Zt+1,t=pt.length;for(;e<t;){const i=e+t>>>1;ar(pt[i])<n?e=i+1:t=i}return e}function Ed(n){(!pt.length||!pt.includes(n,co&&n.allowRecurse?Zt+1:Zt))&&n!==ll&&(n.id==null?pt.push(n):pt.splice(vy(n.id),0,n),wd())}function wd(){!co&&!al&&(al=!0,cu=vd.then(Id))}function Cy(n){const e=pt.indexOf(n);e>Zt&&pt.splice(e,1)}function Td(n,e,t,i){G(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),wd()}function Ey(n){Td(n,Bs,js,Oi)}function wy(n){Td(n,Dn,qs,Fi)}function hu(n,e=null){if(js.length){for(ll=e,Bs=[...new Set(js)],js.length=0,Oi=0;Oi<Bs.length;Oi++)Bs[Oi]();Bs=null,Oi=0,ll=null,hu(n,e)}}function bd(n){if(qs.length){const e=[...new Set(qs)];if(qs.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((t,i)=>ar(t)-ar(i)),Fi=0;Fi<Dn.length;Fi++)Dn[Fi]();Dn=null,Fi=0}}const ar=n=>n.id==null?1/0:n.id;function Id(n){al=!1,co=!0,hu(n),pt.sort((t,i)=>ar(t)-ar(i));const e=Nt;try{for(Zt=0;Zt<pt.length;Zt++){const t=pt[Zt];t&&t.active!==!1&&kn(t,null,14)}}finally{Zt=0,pt.length=0,bd(),co=!1,cu=null,(pt.length||js.length||qs.length)&&Id(n)}}function Ty(n,e,...t){const i=n.vnode.props||De;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[c]||De;f?s=t.map(d=>d.trim()):h&&(s=t.map(uo))}let a,l=i[a=Sa(e)]||i[a=Sa(qt(e))];!l&&r&&(l=i[a=Sa(gs(e))]),l&&It(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,It(u,n,6,s)}}function Sd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!te(n)){const l=u=>{const c=Sd(u,e,!0);c&&(a=!0,He(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(i.set(n,null),null):(G(r)?r.forEach(l=>o[l]=null):He(o,r),i.set(n,o),o)}function fu(n,e){return!n||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(n,e[0].toLowerCase()+e.slice(1))||ce(n,gs(e))||ce(n,e))}let _t=null,ta=null;function ho(n){const e=_t;return _t=n,ta=n&&n.type.__scopeId||null,e}function NS(n){ta=n}function OS(){ta=null}function by(n,e=_t,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ih(-1);const r=ho(e),o=n(...s);return ho(r),i._d&&ih(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Aa(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:u,render:c,renderCache:h,data:f,setupState:d,ctx:_,inheritAttrs:p}=n;let m,D;const C=ho(n);try{if(t.shapeFlag&4){const T=s||i;m=Wt(c.call(T,T,h,r,d,f,_)),D=l}else{const T=e;m=Wt(T.length>1?T(r,{attrs:l,slots:a,emit:u}):T(r,null)),D=e.props?l:Iy(l)}}catch(T){Gs.length=0,ea(T,n,1),m=Ye(Ft)}let E=m;if(D&&p!==!1){const T=Object.keys(D),{shapeFlag:w}=E;T.length&&w&7&&(o&&T.some(Zl)&&(D=Sy(D,o)),E=Xi(E,D))}return t.dirs&&(E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),m=E,ho(C),m}const Iy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ko(t))&&((e||(e={}))[t]=n[t]);return e},Sy=(n,e)=>{const t={};for(const i in n)(!Zl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ay(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gc(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(o[f]!==i[f]&&!fu(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gc(i,o,u):!0:!!o;return!1}function Gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!fu(t,r))return!0}return!1}function Ry({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const xy=n=>n.__isSuspense;function Py(n,e){e&&e.pendingBranch?G(n)?e.effects.push(...n):e.effects.push(n):wy(n)}function eo(n,e){if(Ue){let t=Ue.provides;const i=Ue.parent&&Ue.parent.provides;i===t&&(t=Ue.provides=Object.create(i)),t[n]=e}}function Nn(n,e,t=!1){const i=Ue||_t;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&te(e)?e.call(i.proxy):e}}const Kc={};function to(n,e,t){return Ad(n,e,t)}function Ad(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=De){const a=Ue;let l,u=!1,c=!1;if(qe(n)?(l=()=>n.value,u=dd(n)):$i(n)?(l=()=>n,i=!0):G(n)?(c=!0,u=n.some($i),l=()=>n.map(D=>{if(qe(D))return D.value;if($i(D))return ai(D);if(te(D))return kn(D,a,2)})):te(n)?e?l=()=>kn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(n,a,3,[f])}:l=Nt,e&&i){const D=l;l=()=>ai(D())}let h,f=D=>{h=m.onStop=()=>{kn(D,a,4)}};if(cr)return f=Nt,e?t&&It(e,a,3,[l(),c?[]:void 0,f]):l(),Nt;let d=c?[]:Kc;const _=()=>{if(!!m.active)if(e){const D=m.run();(i||u||(c?D.some((C,E)=>sr(C,d[E])):sr(D,d)))&&(h&&h(),It(e,a,3,[D,d===Kc?void 0:d,f]),d=D)}else m.run()};_.allowRecurse=!!e;let p;s==="sync"?p=_:s==="post"?p=()=>et(_,a&&a.suspense):p=()=>{!a||a.isMounted?Ey(_):_()};const m=new su(l,p);return e?t?_():d=m.run():s==="post"?et(m.run.bind(m),a&&a.suspense):m.run(),()=>{m.stop(),a&&a.scope&&eu(a.scope.effects,m)}}function ky(n,e,t){const i=this.proxy,s=Ve(n)?n.includes(".")?Rd(i,n):()=>i[n]:n.bind(i,i);let r;te(e)?r=e:(r=e.handler,t=e);const o=Ue;Ji(this);const a=Ad(s,r.bind(i),t);return o?Ji(o):di(),a}function Rd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ai(n,e){if(!xe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),qe(n))ai(n.value,e);else if(G(n))for(let t=0;t<n.length;t++)ai(n[t],e);else if(Yo(n)||Vi(n))n.forEach(t=>{ai(t,e)});else if(td(n))for(const t in n)ai(n[t],e);return n}function xd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fd(()=>{n.isMounted=!0}),Ld(()=>{n.isUnmounting=!0}),n}const vt=[Function,Array],Ny={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},setup(n,{slots:e}){const t=tp(),i=xd();let s;return()=>{const r=e.default&&du(e.default(),!0);if(!r||!r.length)return;const o=fe(n),{mode:a}=o,l=r[0];if(i.isLeaving)return Ra(l);const u=Yc(l);if(!u)return Ra(l);const c=lr(u,o,i,t);ur(u,c);const h=t.subTree,f=h&&Yc(h);let d=!1;const{getTransitionKey:_}=u.type;if(_){const p=_();s===void 0?s=p:p!==s&&(s=p,d=!0)}if(f&&f.type!==Ft&&(!ri(u,f)||d)){const p=lr(f,o,i,t);if(ur(f,p),a==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update()},Ra(l);a==="in-out"&&u.type!==Ft&&(p.delayLeave=(m,D,C)=>{const E=kd(i,f);E[String(f.key)]=f,m._leaveCb=()=>{D(),m._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=C})}return l}}},Pd=Ny;function kd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function lr(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:D,onAppearCancelled:C}=e,E=String(n.key),T=kd(t,n),w=(I,k)=>{I&&It(I,i,9,k)},b={mode:r,persisted:o,beforeEnter(I){let k=a;if(!t.isMounted)if(s)k=p||a;else return;I._leaveCb&&I._leaveCb(!0);const S=T[E];S&&ri(n,S)&&S.el._leaveCb&&S.el._leaveCb(),w(k,[I])},enter(I){let k=l,S=u,$=c;if(!t.isMounted)if(s)k=m||l,S=D||u,$=C||c;else return;let Y=!1;const B=I._enterCb=J=>{Y||(Y=!0,J?w($,[I]):w(S,[I]),b.delayedLeave&&b.delayedLeave(),I._enterCb=void 0)};k?(k(I,B),k.length<=1&&B()):B()},leave(I,k){const S=String(n.key);if(I._enterCb&&I._enterCb(!0),t.isUnmounting)return k();w(h,[I]);let $=!1;const Y=I._leaveCb=B=>{$||($=!0,k(),B?w(_,[I]):w(d,[I]),I._leaveCb=void 0,T[S]===n&&delete T[S])};T[S]=n,f?(f(I,Y),f.length<=1&&Y()):Y()},clone(I){return lr(I,e,t,i)}};return b}function Ra(n){if(na(n))return n=Xi(n),n.children=null,n}function Yc(n){return na(n)?n.children?n.children[0]:void 0:n}function ur(n,e){n.shapeFlag&6&&n.component?ur(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function du(n,e=!1){let t=[],i=0;for(let s=0;s<n.length;s++){const r=n[s];r.type===dt?(r.patchFlag&128&&i++,t=t.concat(du(r.children,e))):(e||r.type!==Ft)&&t.push(r)}if(i>1)for(let s=0;s<t.length;s++)t[s].patchFlag=-2;return t}function Nd(n){return te(n)?{setup:n,name:n.name}:n}const ul=n=>!!n.type.__asyncLoader,na=n=>n.type.__isKeepAlive;function Oy(n,e){Od(n,"a",e)}function Fy(n,e){Od(n,"da",e)}function Od(n,e,t=Ue){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ia(e,i,t),t){let s=t.parent;for(;s&&s.parent;)na(s.parent.vnode)&&My(i,e,t,s),s=s.parent}}function My(n,e,t,i){const s=ia(e,n,i,!0);Bd(()=>{eu(i[e],s)},t)}function ia(n,e,t=Ue,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ms(),Ji(t);const a=It(e,t,n,o);return di(),ys(),a});return i?s.unshift(r):s.push(r),r}}const fn=n=>(e,t=Ue)=>(!cr||n==="sp")&&ia(n,e,t),Ly=fn("bm"),Fd=fn("m"),By=fn("bu"),Md=fn("u"),Ld=fn("bum"),Bd=fn("um"),Uy=fn("sp"),Wy=fn("rtg"),Hy=fn("rtc");function Vy(n,e=Ue){ia("ec",n,e)}let cl=!0;function $y(n){const e=Wd(n),t=n.proxy,i=n.ctx;cl=!1,e.beforeCreate&&Qc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:p,deactivated:m,beforeDestroy:D,beforeUnmount:C,destroyed:E,unmounted:T,render:w,renderTracked:b,renderTriggered:I,errorCaptured:k,serverPrefetch:S,expose:$,inheritAttrs:Y,components:B,directives:J,filters:ne}=e;if(u&&zy(u,i,null,n.appContext.config.unwrapInjectedRef),o)for(const Z in o){const ae=o[Z];te(ae)&&(i[Z]=ae.bind(t))}if(s){const Z=s.call(t,t);xe(Z)&&(n.data=Sr(Z))}if(cl=!0,r)for(const Z in r){const ae=r[Z],Pe=te(ae)?ae.bind(t,t):te(ae.get)?ae.get.bind(t,t):Nt,Dt=!te(ae)&&te(ae.set)?ae.set.bind(t):Nt,ze=Ht({get:Pe,set:Dt});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>ze.value,set:ct=>ze.value=ct})}if(a)for(const Z in a)Ud(a[Z],i,t,Z);if(l){const Z=te(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(ae=>{eo(ae,Z[ae])})}c&&Qc(c,n,"c");function Q(Z,ae){G(ae)?ae.forEach(Pe=>Z(Pe.bind(t))):ae&&Z(ae.bind(t))}if(Q(Ly,h),Q(Fd,f),Q(By,d),Q(Md,_),Q(Oy,p),Q(Fy,m),Q(Vy,k),Q(Hy,b),Q(Wy,I),Q(Ld,C),Q(Bd,T),Q(Uy,S),G($))if($.length){const Z=n.exposed||(n.exposed={});$.forEach(ae=>{Object.defineProperty(Z,ae,{get:()=>t[ae],set:Pe=>t[ae]=Pe})})}else n.exposed||(n.exposed={});w&&n.render===Nt&&(n.render=w),Y!=null&&(n.inheritAttrs=Y),B&&(n.components=B),J&&(n.directives=J)}function zy(n,e,t=Nt,i=!1){G(n)&&(n=hl(n));for(const s in n){const r=n[s];let o;xe(r)?"default"in r?o=Nn(r.from||s,r.default,!0):o=Nn(r.from||s):o=Nn(r),qe(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Qc(n,e,t){It(G(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ud(n,e,t,i){const s=i.includes(".")?Rd(t,i):()=>t[i];if(Ve(n)){const r=e[n];te(r)&&to(s,r)}else if(te(n))to(s,n.bind(t));else if(xe(n))if(G(n))n.forEach(r=>Ud(r,e,t,i));else{const r=te(n.handler)?n.handler.bind(t):e[n.handler];te(r)&&to(s,r,n)}}function Wd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>fo(l,u,o,!0)),fo(l,e,o)),r.set(e,l),l}function fo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&fo(n,r,t,!0),s&&s.forEach(o=>fo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=jy[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const jy={data:Xc,props:Zn,emits:Zn,methods:Zn,computed:Zn,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Zn,directives:Zn,watch:Gy,provide:Xc,inject:qy};function Xc(n,e){return e?n?function(){return He(te(n)?n.call(this,this):n,te(e)?e.call(this,this):e)}:e:n}function qy(n,e){return Zn(hl(n),hl(e))}function hl(n){if(G(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Je(n,e){return n?[...new Set([].concat(n,e))]:e}function Zn(n,e){return n?He(He(Object.create(null),n),e):e}function Gy(n,e){if(!n)return e;if(!e)return n;const t=He(Object.create(null),n);for(const i in e)t[i]=Je(n[i],e[i]);return t}function Ky(n,e,t,i=!1){const s={},r={};lo(r,sa,1),n.propsDefaults=Object.create(null),Hd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:fy(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Yy(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=fe(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];const d=e[f];if(l)if(ce(r,f))d!==r[f]&&(r[f]=d,u=!0);else{const _=qt(f);s[_]=fl(l,a,_,d,n,!1)}else d!==r[f]&&(r[f]=d,u=!0)}}}else{Hd(n,e,s,r)&&(u=!0);let c;for(const h in a)(!e||!ce(e,h)&&((c=gs(h))===h||!ce(e,c)))&&(l?t&&(t[h]!==void 0||t[c]!==void 0)&&(s[h]=fl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ce(e,h)&&!0)&&(delete r[h],u=!0)}u&&an(n,"set","$attrs")}function Hd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Jr(l))continue;const u=e[l];let c;s&&ce(s,c=qt(l))?!r||!r.includes(c)?t[c]=u:(a||(a={}))[c]=u:fu(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=fe(t),u=a||De;for(let c=0;c<r.length;c++){const h=r[c];t[h]=fl(s,l,h,u[h],n,!ce(u,h))}}return o}function fl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ce(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&te(l)){const{propsDefaults:u}=s;t in u?i=u[t]:(Ji(s),i=u[t]=l.call(null,e),di())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===gs(t))&&(i=!0))}return i}function Vd(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!te(n)){const c=h=>{l=!0;const[f,d]=Vd(h,e,!0);He(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return i.set(n,Hi),Hi;if(G(r))for(let c=0;c<r.length;c++){const h=qt(r[c]);Jc(h)&&(o[h]=De)}else if(r)for(const c in r){const h=qt(c);if(Jc(h)){const f=r[c],d=o[h]=G(f)||te(f)?{type:f}:f;if(d){const _=th(Boolean,d.type),p=th(String,d.type);d[0]=_>-1,d[1]=p<0||_<p,(_>-1||ce(d,"default"))&&a.push(h)}}}const u=[o,a];return i.set(n,u),u}function Jc(n){return n[0]!=="$"}function Zc(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function eh(n,e){return Zc(n)===Zc(e)}function th(n,e){return G(e)?e.findIndex(t=>eh(t,n)):te(e)&&eh(e,n)?0:-1}const $d=n=>n[0]==="_"||n==="$stable",pu=n=>G(n)?n.map(Wt):[Wt(n)],Qy=(n,e,t)=>{const i=by((...s)=>pu(e(...s)),t);return i._c=!1,i},zd=(n,e,t)=>{const i=n._ctx;for(const s in n){if($d(s))continue;const r=n[s];if(te(r))e[s]=Qy(s,r,i);else if(r!=null){const o=pu(r);e[s]=()=>o}}},jd=(n,e)=>{const t=pu(e);n.slots.default=()=>t},Xy=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=fe(e),lo(e,"_",t)):zd(e,n.slots={})}else n.slots={},e&&jd(n,e);lo(n.slots,sa,1)},Jy=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=De;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(He(s,e),!t&&a===1&&delete s._):(r=!e.$stable,zd(e,s)),o=e}else e&&(jd(n,e),o={default:1});if(r)for(const a in s)!$d(a)&&!(a in o)&&delete s[a]};function FS(n,e){const t=_t;if(t===null)return n;const i=t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,u=De]=e[r];te(o)&&(o={mounted:o,updated:o}),o.deep&&ai(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:u})}return n}function Kn(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ms(),It(l,t,8,[n.el,a,n,e]),ys())}}function qd(){return{app:null,config:{isNativeTag:km,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zy=0;function eD(n,e){return function(i,s=null){s!=null&&!xe(s)&&(s=null);const r=qd(),o=new Set;let a=!1;const l=r.app={_uid:Zy++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ED,get config(){return r.config},set config(u){},use(u,...c){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(l,...c)):te(u)&&(o.add(u),u(l,...c))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,c){return c?(r.components[u]=c,l):r.components[u]},directive(u,c){return c?(r.directives[u]=c,l):r.directives[u]},mount(u,c,h){if(!a){const f=Ye(i,s);return f.appContext=r,c&&e?e(f,u):n(f,u,h),a=!0,l._container=u,u.__vue_app__=l,mu(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(u,c){return r.provides[u]=c,l}};return l}}function dl(n,e,t,i,s=!1){if(G(n)){n.forEach((f,d)=>dl(f,e&&(G(e)?e[d]:e),t,i,s));return}if(ul(i)&&!s)return;const r=i.shapeFlag&4?mu(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,u=e&&e.r,c=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(Ve(u)?(c[u]=null,ce(h,u)&&(h[u]=null)):qe(u)&&(u.value=null)),te(l))kn(l,a,12,[o,c]);else{const f=Ve(l),d=qe(l);if(f||d){const _=()=>{if(n.f){const p=f?c[l]:l.value;s?G(p)&&eu(p,r):G(p)?p.includes(r)||p.push(r):f?c[l]=[r]:(l.value=[r],n.k&&(c[n.k]=l.value))}else f?(c[l]=o,ce(h,l)&&(h[l]=o)):qe(l)&&(l.value=o,n.k&&(c[n.k]=o))};o?(_.id=-1,et(_,t)):_()}}}const et=Py;function tD(n){return nD(n)}function nD(n,e){const t=Bm();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:d=Nt,cloneNode:_,insertStaticContent:p}=n,m=(g,y,v,x=null,R=null,F=null,U=!1,O=null,M=!!y.dynamicChildren)=>{if(g===y)return;g&&!ri(g,y)&&(x=V(g),Ae(g,R,F,!0),g=null),y.patchFlag===-2&&(M=!1,y.dynamicChildren=null);const{type:P,ref:z,shapeFlag:W}=y;switch(P){case _u:D(g,y,v,x);break;case Ft:C(g,y,v,x);break;case no:g==null&&E(y,v,x,U);break;case dt:J(g,y,v,x,R,F,U,O,M);break;default:W&1?b(g,y,v,x,R,F,U,O,M):W&6?ne(g,y,v,x,R,F,U,O,M):(W&64||W&128)&&P.process(g,y,v,x,R,F,U,O,M,Ee)}z!=null&&R&&dl(z,g&&g.ref,F,y||g,!y)},D=(g,y,v,x)=>{if(g==null)i(y.el=a(y.children),v,x);else{const R=y.el=g.el;y.children!==g.children&&u(R,y.children)}},C=(g,y,v,x)=>{g==null?i(y.el=l(y.children||""),v,x):y.el=g.el},E=(g,y,v,x)=>{[g.el,g.anchor]=p(g.children,y,v,x,g.el,g.anchor)},T=({el:g,anchor:y},v,x)=>{let R;for(;g&&g!==y;)R=f(g),i(g,v,x),g=R;i(y,v,x)},w=({el:g,anchor:y})=>{let v;for(;g&&g!==y;)v=f(g),s(g),g=v;s(y)},b=(g,y,v,x,R,F,U,O,M)=>{U=U||y.type==="svg",g==null?I(y,v,x,R,F,U,O,M):$(g,y,R,F,U,O,M)},I=(g,y,v,x,R,F,U,O)=>{let M,P;const{type:z,props:W,shapeFlag:j,transition:X,patchFlag:ue,dirs:Ie}=g;if(g.el&&_!==void 0&&ue===-1)M=g.el=_(g.el);else{if(M=g.el=o(g.type,F,W&&W.is,W),j&8?c(M,g.children):j&16&&S(g.children,M,null,x,R,F&&z!=="foreignObject",U,O),Ie&&Kn(g,null,x,"created"),W){for(const Te in W)Te!=="value"&&!Jr(Te)&&r(M,Te,null,W[Te],F,g.children,x,R,L);"value"in W&&r(M,"value",null,W.value),(P=W.onVnodeBeforeMount)&&Bt(P,x,g)}k(M,g,g.scopeId,U,x)}Ie&&Kn(g,null,x,"beforeMount");const _e=(!R||R&&!R.pendingBranch)&&X&&!X.persisted;_e&&X.beforeEnter(M),i(M,y,v),((P=W&&W.onVnodeMounted)||_e||Ie)&&et(()=>{P&&Bt(P,x,g),_e&&X.enter(M),Ie&&Kn(g,null,x,"mounted")},R)},k=(g,y,v,x,R)=>{if(v&&d(g,v),x)for(let F=0;F<x.length;F++)d(g,x[F]);if(R){let F=R.subTree;if(y===F){const U=R.vnode;k(g,U,U.scopeId,U.slotScopeIds,R.parent)}}},S=(g,y,v,x,R,F,U,O,M=0)=>{for(let P=M;P<g.length;P++){const z=g[P]=O?vn(g[P]):Wt(g[P]);m(null,z,y,v,x,R,F,U,O)}},$=(g,y,v,x,R,F,U)=>{const O=y.el=g.el;let{patchFlag:M,dynamicChildren:P,dirs:z}=y;M|=g.patchFlag&16;const W=g.props||De,j=y.props||De;let X;v&&Yn(v,!1),(X=j.onVnodeBeforeUpdate)&&Bt(X,v,y,g),z&&Kn(y,g,v,"beforeUpdate"),v&&Yn(v,!0);const ue=R&&y.type!=="foreignObject";if(P?Y(g.dynamicChildren,P,O,v,x,ue,F):U||Pe(g,y,O,null,v,x,ue,F,!1),M>0){if(M&16)B(O,y,W,j,v,x,R);else if(M&2&&W.class!==j.class&&r(O,"class",null,j.class,R),M&4&&r(O,"style",W.style,j.style,R),M&8){const Ie=y.dynamicProps;for(let _e=0;_e<Ie.length;_e++){const Te=Ie[_e],Rt=W[Te],xi=j[Te];(xi!==Rt||Te==="value")&&r(O,Te,Rt,xi,R,g.children,v,x,L)}}M&1&&g.children!==y.children&&c(O,y.children)}else!U&&P==null&&B(O,y,W,j,v,x,R);((X=j.onVnodeUpdated)||z)&&et(()=>{X&&Bt(X,v,y,g),z&&Kn(y,g,v,"updated")},x)},Y=(g,y,v,x,R,F,U)=>{for(let O=0;O<y.length;O++){const M=g[O],P=y[O],z=M.el&&(M.type===dt||!ri(M,P)||M.shapeFlag&70)?h(M.el):v;m(M,P,z,null,x,R,F,U,!0)}},B=(g,y,v,x,R,F,U)=>{if(v!==x){for(const O in x){if(Jr(O))continue;const M=x[O],P=v[O];M!==P&&O!=="value"&&r(g,O,P,M,U,y.children,R,F,L)}if(v!==De)for(const O in v)!Jr(O)&&!(O in x)&&r(g,O,v[O],null,U,y.children,R,F,L);"value"in x&&r(g,"value",v.value,x.value)}},J=(g,y,v,x,R,F,U,O,M)=>{const P=y.el=g?g.el:a(""),z=y.anchor=g?g.anchor:a("");let{patchFlag:W,dynamicChildren:j,slotScopeIds:X}=y;X&&(O=O?O.concat(X):X),g==null?(i(P,v,x),i(z,v,x),S(y.children,v,z,R,F,U,O,M)):W>0&&W&64&&j&&g.dynamicChildren?(Y(g.dynamicChildren,j,v,R,F,U,O),(y.key!=null||R&&y===R.subTree)&&Gd(g,y,!0)):Pe(g,y,v,z,R,F,U,O,M)},ne=(g,y,v,x,R,F,U,O,M)=>{y.slotScopeIds=O,g==null?y.shapeFlag&512?R.ctx.activate(y,v,x,U,M):de(y,v,x,R,F,U,M):Q(g,y,M)},de=(g,y,v,x,R,F,U)=>{const O=g.component=_D(g,x,R);if(na(g)&&(O.ctx.renderer=Ee),gD(O),O.asyncDep){if(R&&R.registerDep(O,Z),!g.el){const M=O.subTree=Ye(Ft);C(null,M,y,v)}return}Z(O,g,y,v,R,F,U)},Q=(g,y,v)=>{const x=y.component=g.component;if(Ay(g,y,v))if(x.asyncDep&&!x.asyncResolved){ae(x,y,v);return}else x.next=y,Cy(x.update),x.update();else y.component=g.component,y.el=g.el,x.vnode=y},Z=(g,y,v,x,R,F,U)=>{const O=()=>{if(g.isMounted){let{next:z,bu:W,u:j,parent:X,vnode:ue}=g,Ie=z,_e;Yn(g,!1),z?(z.el=ue.el,ae(g,z,U)):z=ue,W&&Zr(W),(_e=z.props&&z.props.onVnodeBeforeUpdate)&&Bt(_e,X,z,ue),Yn(g,!0);const Te=Aa(g),Rt=g.subTree;g.subTree=Te,m(Rt,Te,h(Rt.el),V(Rt),g,R,F),z.el=Te.el,Ie===null&&Ry(g,Te.el),j&&et(j,R),(_e=z.props&&z.props.onVnodeUpdated)&&et(()=>Bt(_e,X,z,ue),R)}else{let z;const{el:W,props:j}=y,{bm:X,m:ue,parent:Ie}=g,_e=ul(y);if(Yn(g,!1),X&&Zr(X),!_e&&(z=j&&j.onVnodeBeforeMount)&&Bt(z,Ie,y),Yn(g,!0),W&&ee){const Te=()=>{g.subTree=Aa(g),ee(W,g.subTree,g,R,null)};_e?y.type.__asyncLoader().then(()=>!g.isUnmounted&&Te()):Te()}else{const Te=g.subTree=Aa(g);m(null,Te,v,x,g,R,F),y.el=Te.el}if(ue&&et(ue,R),!_e&&(z=j&&j.onVnodeMounted)){const Te=y;et(()=>Bt(z,Ie,Te),R)}y.shapeFlag&256&&g.a&&et(g.a,R),g.isMounted=!0,y=v=x=null}},M=g.effect=new su(O,()=>Ed(g.update),g.scope),P=g.update=M.run.bind(M);P.id=g.uid,Yn(g,!0),P()},ae=(g,y,v)=>{y.component=g;const x=g.vnode.props;g.vnode=y,g.next=null,Yy(g,y.props,x,v),Jy(g,y.children,v),ms(),hu(void 0,g.update),ys()},Pe=(g,y,v,x,R,F,U,O,M=!1)=>{const P=g&&g.children,z=g?g.shapeFlag:0,W=y.children,{patchFlag:j,shapeFlag:X}=y;if(j>0){if(j&128){ze(P,W,v,x,R,F,U,O,M);return}else if(j&256){Dt(P,W,v,x,R,F,U,O,M);return}}X&8?(z&16&&L(P,R,F),W!==P&&c(v,W)):z&16?X&16?ze(P,W,v,x,R,F,U,O,M):L(P,R,F,!0):(z&8&&c(v,""),X&16&&S(W,v,x,R,F,U,O,M))},Dt=(g,y,v,x,R,F,U,O,M)=>{g=g||Hi,y=y||Hi;const P=g.length,z=y.length,W=Math.min(P,z);let j;for(j=0;j<W;j++){const X=y[j]=M?vn(y[j]):Wt(y[j]);m(g[j],X,v,null,R,F,U,O,M)}P>z?L(g,R,F,!0,!1,W):S(y,v,x,R,F,U,O,M,W)},ze=(g,y,v,x,R,F,U,O,M)=>{let P=0;const z=y.length;let W=g.length-1,j=z-1;for(;P<=W&&P<=j;){const X=g[P],ue=y[P]=M?vn(y[P]):Wt(y[P]);if(ri(X,ue))m(X,ue,v,null,R,F,U,O,M);else break;P++}for(;P<=W&&P<=j;){const X=g[W],ue=y[j]=M?vn(y[j]):Wt(y[j]);if(ri(X,ue))m(X,ue,v,null,R,F,U,O,M);else break;W--,j--}if(P>W){if(P<=j){const X=j+1,ue=X<z?y[X].el:x;for(;P<=j;)m(null,y[P]=M?vn(y[P]):Wt(y[P]),v,ue,R,F,U,O,M),P++}}else if(P>j)for(;P<=W;)Ae(g[P],R,F,!0),P++;else{const X=P,ue=P,Ie=new Map;for(P=ue;P<=j;P++){const ht=y[P]=M?vn(y[P]):Wt(y[P]);ht.key!=null&&Ie.set(ht.key,P)}let _e,Te=0;const Rt=j-ue+1;let xi=!1,Mc=0;const Rs=new Array(Rt);for(P=0;P<Rt;P++)Rs[P]=0;for(P=X;P<=W;P++){const ht=g[P];if(Te>=Rt){Ae(ht,R,F,!0);continue}let Lt;if(ht.key!=null)Lt=Ie.get(ht.key);else for(_e=ue;_e<=j;_e++)if(Rs[_e-ue]===0&&ri(ht,y[_e])){Lt=_e;break}Lt===void 0?Ae(ht,R,F,!0):(Rs[Lt-ue]=P+1,Lt>=Mc?Mc=Lt:xi=!0,m(ht,y[Lt],v,null,R,F,U,O,M),Te++)}const Lc=xi?iD(Rs):Hi;for(_e=Lc.length-1,P=Rt-1;P>=0;P--){const ht=ue+P,Lt=y[ht],Bc=ht+1<z?y[ht+1].el:x;Rs[P]===0?m(null,Lt,v,Bc,R,F,U,O,M):xi&&(_e<0||P!==Lc[_e]?ct(Lt,v,Bc,2):_e--)}}},ct=(g,y,v,x,R=null)=>{const{el:F,type:U,transition:O,children:M,shapeFlag:P}=g;if(P&6){ct(g.component.subTree,y,v,x);return}if(P&128){g.suspense.move(y,v,x);return}if(P&64){U.move(g,y,v,Ee);return}if(U===dt){i(F,y,v);for(let W=0;W<M.length;W++)ct(M[W],y,v,x);i(g.anchor,y,v);return}if(U===no){T(g,y,v);return}if(x!==2&&P&1&&O)if(x===0)O.beforeEnter(F),i(F,y,v),et(()=>O.enter(F),R);else{const{leave:W,delayLeave:j,afterLeave:X}=O,ue=()=>i(F,y,v),Ie=()=>{W(F,()=>{ue(),X&&X()})};j?j(F,ue,Ie):Ie()}else i(F,y,v)},Ae=(g,y,v,x=!1,R=!1)=>{const{type:F,props:U,ref:O,children:M,dynamicChildren:P,shapeFlag:z,patchFlag:W,dirs:j}=g;if(O!=null&&dl(O,null,v,g,!0),z&256){y.ctx.deactivate(g);return}const X=z&1&&j,ue=!ul(g);let Ie;if(ue&&(Ie=U&&U.onVnodeBeforeUnmount)&&Bt(Ie,y,g),z&6)H(g.component,v,x);else{if(z&128){g.suspense.unmount(v,x);return}X&&Kn(g,null,y,"beforeUnmount"),z&64?g.type.remove(g,y,v,R,Ee,x):P&&(F!==dt||W>0&&W&64)?L(P,y,v,!1,!0):(F===dt&&W&384||!R&&z&16)&&L(M,y,v),x&&At(g)}(ue&&(Ie=U&&U.onVnodeUnmounted)||X)&&et(()=>{Ie&&Bt(Ie,y,g),X&&Kn(g,null,y,"unmounted")},v)},At=g=>{const{type:y,el:v,anchor:x,transition:R}=g;if(y===dt){A(v,x);return}if(y===no){w(g);return}const F=()=>{s(v),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(g.shapeFlag&1&&R&&!R.persisted){const{leave:U,delayLeave:O}=R,M=()=>U(v,F);O?O(g.el,F,M):M()}else F()},A=(g,y)=>{let v;for(;g!==y;)v=f(g),s(g),g=v;s(y)},H=(g,y,v)=>{const{bum:x,scope:R,update:F,subTree:U,um:O}=g;x&&Zr(x),R.stop(),F&&(F.active=!1,Ae(U,g,y,v)),O&&et(O,y),et(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},L=(g,y,v,x=!1,R=!1,F=0)=>{for(let U=F;U<g.length;U++)Ae(g[U],y,v,x,R)},V=g=>g.shapeFlag&6?V(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),pe=(g,y,v)=>{g==null?y._vnode&&Ae(y._vnode,null,null,!0):m(y._vnode||null,g,y,null,null,null,v),bd(),y._vnode=g},Ee={p:m,um:Ae,m:ct,r:At,mt:de,mc:S,pc:Pe,pbc:Y,n:V,o:n};let re,ee;return e&&([re,ee]=e(Ee)),{render:pe,hydrate:re,createApp:eD(pe,re)}}function Yn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Gd(n,e,t=!1){const i=n.children,s=e.children;if(G(i)&&G(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=vn(s[r]),a.el=o.el),t||Gd(o,a))}}function iD(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<u?r=a+1:o=a;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const sD=n=>n.__isTeleport,Kd="components";function MS(n,e){return oD(Kd,n,!0,e)||n}const rD=Symbol();function oD(n,e,t=!0,i=!1){const s=_t||Ue;if(s){const r=s.type;if(n===Kd){const a=vD(r);if(a&&(a===e||a===qt(e)||a===Jo(qt(e))))return r}const o=nh(s[n]||r[n],e)||nh(s.appContext[n],e);return!o&&i?r:o}}function nh(n,e){return n&&(n[e]||n[qt(e)]||n[Jo(qt(e))])}const dt=Symbol(void 0),_u=Symbol(void 0),Ft=Symbol(void 0),no=Symbol(void 0),Gs=[];let fi=null;function Yd(n=!1){Gs.push(fi=n?null:[])}function aD(){Gs.pop(),fi=Gs[Gs.length-1]||null}let po=1;function ih(n){po+=n}function Qd(n){return n.dynamicChildren=po>0?fi||Hi:null,aD(),po>0&&fi&&fi.push(n),n}function LS(n,e,t,i,s,r){return Qd(Zd(n,e,t,i,s,r,!0))}function Xd(n,e,t,i,s){return Qd(Ye(n,e,t,i,s,!0))}function _o(n){return n?n.__v_isVNode===!0:!1}function ri(n,e){return n.type===e.type&&n.key===e.key}const sa="__vInternal",Jd=({key:n})=>n!=null?n:null,io=({ref:n,ref_key:e,ref_for:t})=>n!=null?Ve(n)||qe(n)||te(n)?{i:_t,r:n,k:e,f:!!t}:n:null;function Zd(n,e=null,t=null,i=0,s=null,r=n===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jd(e),ref:e&&io(e),scopeId:ta,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(gu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ve(t)?8:16),po>0&&!o&&fi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fi.push(l),l}const Ye=lD;function lD(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===rD)&&(n=Ft),_o(n)){const a=Xi(n,e,!0);return t&&gu(a,t),a}if(CD(n)&&(n=n.__vccOpts),e){e=uD(e);let{class:a,style:l}=e;a&&!Ve(a)&&(e.class=Jl(a)),xe(l)&&(pd(l)&&!G(l)&&(l=He({},l)),e.style=Xl(l))}const o=Ve(n)?1:xy(n)?128:sD(n)?64:xe(n)?4:te(n)?2:0;return Zd(n,e,t,i,s,o,r,!0)}function uD(n){return n?pd(n)||sa in n?He({},n):n:null}function Xi(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?hD(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Jd(a),ref:e&&e.ref?t&&s?G(s)?s.concat(io(e)):[s,io(e)]:io(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xi(n.ssContent),ssFallback:n.ssFallback&&Xi(n.ssFallback),el:n.el,anchor:n.anchor}}function cD(n=" ",e=0){return Ye(_u,null,n,e)}function BS(n,e){const t=Ye(no,null,n);return t.staticCount=e,t}function US(n="",e=!1){return e?(Yd(),Xd(Ft,null,n)):Ye(Ft,null,n)}function Wt(n){return n==null||typeof n=="boolean"?Ye(Ft):G(n)?Ye(dt,null,n.slice()):typeof n=="object"?vn(n):Ye(_u,null,String(n))}function vn(n){return n.el===null||n.memo?n:Xi(n)}function gu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(G(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),gu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(sa in e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:_t},t=32):(e=String(e),i&64?(t=16,e=[cD(e)]):t=8);n.children=e,n.shapeFlag|=t}function hD(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Jl([e.class,i.class]));else if(s==="style")e.style=Xl([e.style,i.style]);else if(Ko(s)){const r=e[s],o=i[s];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Bt(n,e,t,i=null){It(n,e,7,[t,i])}function WS(n,e,t,i){let s;const r=t&&t[i];if(G(n)||Ve(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(xe(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(n[u],u,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}function HS(n,e,t={},i,s){if(_t.isCE)return Ye("slot",e==="default"?null:{name:e},i&&i());let r=n[e];r&&r._c&&(r._d=!1),Yd();const o=r&&ep(r(t)),a=Xd(dt,{key:t.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function ep(n){return n.some(e=>_o(e)?!(e.type===Ft||e.type===dt&&!ep(e.children)):!0)?n:null}const pl=n=>n?np(n)?mu(n)||n.proxy:pl(n.parent):null,go=He(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pl(n.parent),$root:n=>pl(n.root),$emit:n=>n.emit,$options:n=>Wd(n),$forceUpdate:n=>()=>Ed(n.update),$nextTick:n=>Cd.bind(n.proxy),$watch:n=>ky.bind(n)}),fD={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let u;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(i!==De&&ce(i,e))return o[e]=1,i[e];if(s!==De&&ce(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&ce(u,e))return o[e]=3,r[e];if(t!==De&&ce(t,e))return o[e]=4,t[e];cl&&(o[e]=0)}}const c=go[e];let h,f;if(c)return e==="$attrs"&&mt(n,"get",e),c(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==De&&ce(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ce(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return s!==De&&ce(s,e)?(s[e]=t,!0):i!==De&&ce(i,e)?(i[e]=t,!0):ce(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==De&&ce(n,o)||e!==De&&ce(e,o)||(a=r[0])&&ce(a,o)||ce(i,o)||ce(go,o)||ce(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?this.set(n,e,t.get(),null):t.value!=null&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},dD=qd();let pD=0;function _D(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||dD,r={uid:pD++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vd(i,s),emitsOptions:Sd(i,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:i.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ty.bind(null,r),n.ce&&n.ce(r),r}let Ue=null;const tp=()=>Ue||_t,Ji=n=>{Ue=n,n.scope.on()},di=()=>{Ue&&Ue.scope.off(),Ue=null};function np(n){return n.vnode.shapeFlag&4}let cr=!1;function gD(n,e=!1){cr=e;const{props:t,children:i}=n.vnode,s=np(n);Ky(n,t,s,e),Xy(n,i);const r=s?mD(n,e):void 0;return cr=!1,r}function mD(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=_d(new Proxy(n.ctx,fD));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?DD(n):null;Ji(n),ms();const r=kn(i,n,0,[n.props,s]);if(ys(),di(),Zf(r)){if(r.then(di,di),e)return r.then(o=>{sh(n,o,e)}).catch(o=>{ea(o,n,0)});n.asyncDep=r}else sh(n,r,e)}else ip(n,e)}function sh(n,e,t){te(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xe(e)&&(n.setupState=Dd(e)),ip(n,t)}let rh;function ip(n,e,t){const i=n.type;if(!n.render){if(!e&&rh&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,u=He(He({isCustomElement:r,delimiters:a},o),l);i.render=rh(s,u)}}n.render=i.render||Nt}Ji(n),ms(),$y(n),ys(),di()}function yD(n){return new Proxy(n.attrs,{get(e,t){return mt(n,"get","$attrs"),e[t]}})}function DD(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=yD(n))},slots:n.slots,emit:n.emit,expose:e}}function mu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Dd(_d(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in go)return go[t](n)}}))}function vD(n){return te(n)&&n.displayName||n.name}function CD(n){return te(n)&&"__vccOpts"in n}const Ht=(n,e)=>yy(n,e,cr);function yu(n,e,t){const i=arguments.length;return i===2?xe(e)&&!G(e)?_o(e)?Ye(n,null,[e]):Ye(n,e):Ye(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&_o(t)&&(t=[t]),Ye(n,e,t))}const ED="3.2.31",wD="http://www.w3.org/2000/svg",oi=typeof document!="undefined"?document:null,oh=oi&&oi.createElement("template"),TD={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?oi.createElementNS(wD,n):oi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{oh.innerHTML=i?`<svg>${n}</svg>`:n;const a=oh.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function bD(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function ID(n,e,t){const i=n.style,s=Ve(t);if(t&&!s){for(const r in t)_l(i,r,t[r]);if(e&&!Ve(e))for(const r in e)t[r]==null&&_l(i,r,"")}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const ah=/\s*!important$/;function _l(n,e,t){if(G(t))t.forEach(i=>_l(n,e,i));else if(e.startsWith("--"))n.setProperty(e,t);else{const i=SD(n,e);ah.test(t)?n.setProperty(gs(i),t.replace(ah,""),"important"):n[i]=t}}const lh=["Webkit","Moz","ms"],xa={};function SD(n,e){const t=xa[e];if(t)return t;let i=qt(e);if(i!=="filter"&&i in n)return xa[e]=i;i=Jo(i);for(let s=0;s<lh.length;s++){const r=lh[s]+i;if(r in n)return xa[e]=r}return e}const uh="http://www.w3.org/1999/xlink";function AD(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(uh,e.slice(6,e.length)):n.setAttributeNS(uh,e,t);else{const r=Sm(e);t==null||r&&!Qf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function RD(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const a=t==null?"":t;(n.value!==a||n.tagName==="OPTION")&&(n.value=a),t==null&&n.removeAttribute(e);return}if(t===""||t==null){const a=typeof n[e];if(a==="boolean"){n[e]=Qf(t);return}else if(t==null&&a==="string"){n[e]="",n.removeAttribute(e);return}else if(a==="number"){try{n[e]=0}catch{}n.removeAttribute(e);return}}try{n[e]=t}catch{}}let mo=Date.now,sp=!1;if(typeof window!="undefined"){mo()>document.createEvent("Event").timeStamp&&(mo=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);sp=!!(n&&Number(n[1])<=53)}let gl=0;const xD=Promise.resolve(),PD=()=>{gl=0},kD=()=>gl||(xD.then(PD),gl=mo());function En(n,e,t,i){n.addEventListener(e,t,i)}function ND(n,e,t,i){n.removeEventListener(e,t,i)}function OD(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=FD(e);if(i){const u=r[e]=MD(i,s);En(n,a,u,l)}else o&&(ND(n,a,o,l),r[e]=void 0)}}const ch=/(?:Once|Passive|Capture)$/;function FD(n){let e;if(ch.test(n)){e={};let t;for(;t=n.match(ch);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[gs(n.slice(2)),e]}function MD(n,e){const t=i=>{const s=i.timeStamp||mo();(sp||s>=t.attached-1)&&It(LD(i,t.value),e,5,[i])};return t.value=n,t.attached=kD(),t}function LD(n,e){if(G(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const hh=/^on[a-z]/,BD=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?bD(n,i,s):e==="style"?ID(n,t,i):Ko(e)?Zl(e)||OD(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):UD(n,e,i,s))?RD(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),AD(n,e,i,s))};function UD(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&hh.test(e)&&te(t)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||hh.test(e)&&Ve(t)?!1:e in n}const _n="transition",xs="animation",rp=(n,{slots:e})=>yu(Pd,ap(n),e);rp.displayName="Transition";const op={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},WD=rp.props=He({},Pd.props,op),Qn=(n,e=[])=>{G(n)?n.forEach(t=>t(...e)):n&&n(...e)},fh=n=>n?G(n)?n.some(e=>e.length>1):n.length>1:!1;function ap(n){const e={};for(const B in n)B in op||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,_=HD(s),p=_&&_[0],m=_&&_[1],{onBeforeEnter:D,onEnter:C,onEnterCancelled:E,onLeave:T,onLeaveCancelled:w,onBeforeAppear:b=D,onAppear:I=C,onAppearCancelled:k=E}=e,S=(B,J,ne)=>{ei(B,J?c:a),ei(B,J?u:o),ne&&ne()},$=(B,J)=>{ei(B,d),ei(B,f),J&&J()},Y=B=>(J,ne)=>{const de=B?I:C,Q=()=>S(J,B,ne);Qn(de,[J,Q]),dh(()=>{ei(J,B?l:r),Xt(J,B?c:a),fh(de)||ph(J,i,p,Q)})};return He(e,{onBeforeEnter(B){Qn(D,[B]),Xt(B,r),Xt(B,o)},onBeforeAppear(B){Qn(b,[B]),Xt(B,l),Xt(B,u)},onEnter:Y(!1),onAppear:Y(!0),onLeave(B,J){const ne=()=>$(B,J);Xt(B,h),up(),Xt(B,f),dh(()=>{ei(B,h),Xt(B,d),fh(T)||ph(B,i,m,ne)}),Qn(T,[B,ne])},onEnterCancelled(B){S(B,!1),Qn(E,[B])},onAppearCancelled(B){S(B,!0),Qn(k,[B])},onLeaveCancelled(B){$(B),Qn(w,[B])}})}function HD(n){if(n==null)return null;if(xe(n))return[Pa(n.enter),Pa(n.leave)];{const e=Pa(n);return[e,e]}}function Pa(n){return uo(n)}function Xt(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function ei(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function dh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let VD=0;function ph(n,e,t,i){const s=n._endId=++VD,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=lp(n,e);if(!o)return i();const u=o+"end";let c=0;const h=()=>{n.removeEventListener(u,f),r()},f=d=>{d.target===n&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),n.addEventListener(u,f)}function lp(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(_n+"Delay"),r=i(_n+"Duration"),o=_h(s,r),a=i(xs+"Delay"),l=i(xs+"Duration"),u=_h(a,l);let c=null,h=0,f=0;e===_n?o>0&&(c=_n,h=o,f=r.length):e===xs?u>0&&(c=xs,h=u,f=l.length):(h=Math.max(o,u),c=h>0?o>u?_n:xs:null,f=c?c===_n?r.length:l.length:0);const d=c===_n&&/\b(transform|all)(,|$)/.test(t[_n+"Property"]);return{type:c,timeout:h,propCount:f,hasTransform:d}}function _h(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>gh(t)+gh(n[i])))}function gh(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function up(){return document.body.offsetHeight}const cp=new WeakMap,hp=new WeakMap,$D={name:"TransitionGroup",props:He({},WD,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=tp(),i=xd();let s,r;return Md(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!GD(s[0].el,t.vnode.el,o))return;s.forEach(zD),s.forEach(jD);const a=s.filter(qD);up(),a.forEach(l=>{const u=l.el,c=u.style;Xt(u,o),c.transform=c.webkitTransform=c.transitionDuration="";const h=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",h),u._moveCb=null,ei(u,o))};u.addEventListener("transitionend",h)})}),()=>{const o=fe(n),a=ap(o);let l=o.tag||dt;s=r,r=e.default?du(e.default()):[];for(let u=0;u<r.length;u++){const c=r[u];c.key!=null&&ur(c,lr(c,a,i,t))}if(s)for(let u=0;u<s.length;u++){const c=s[u];ur(c,lr(c,a,i,t)),cp.set(c,c.el.getBoundingClientRect())}return Ye(l,null,r)}}},VS=$D;function zD(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function jD(n){hp.set(n,n.el.getBoundingClientRect())}function qD(n){const e=cp.get(n),t=hp.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",n}}function GD(n,e,t){const i=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:r}=lp(i);return s.removeChild(i),r}const Zi=n=>{const e=n.props["onUpdate:modelValue"];return G(e)?t=>Zr(e,t):e};function KD(n){n.target.composing=!0}function mh(n){const e=n.target;e.composing&&(e.composing=!1,YD(e,"input"))}function YD(n,e){const t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),n.dispatchEvent(t)}const $S={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=Zi(s);const r=i||s.props&&s.props.type==="number";En(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t?a=a.trim():r&&(a=uo(a)),n._assign(a)}),t&&En(n,"change",()=>{n.value=n.value.trim()}),e||(En(n,"compositionstart",KD),En(n,"compositionend",mh),En(n,"change",mh))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=Zi(r),n.composing||document.activeElement===n&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&uo(n.value)===e))return;const o=e==null?"":e;n.value!==o&&(n.value=o)}},zS={deep:!0,created(n,e,t){n._assign=Zi(t),En(n,"change",()=>{const i=n._modelValue,s=fp(n),r=n.checked,o=n._assign;if(G(i)){const a=Xf(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const u=[...i];u.splice(a,1),o(u)}}else if(Yo(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(dp(n,r))})},mounted:yh,beforeUpdate(n,e,t){n._assign=Zi(t),yh(n,e,t)}};function yh(n,{value:e,oldValue:t},i){n._modelValue=e,G(e)?n.checked=Xf(e,i.props.value)>-1:Yo(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=Qi(e,dp(n,!0)))}const jS={created(n,{value:e},t){n.checked=Qi(e,t.props.value),n._assign=Zi(t),En(n,"change",()=>{n._assign(fp(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n._assign=Zi(i),e!==t&&(n.checked=Qi(e,i.props.value))}};function fp(n){return"_value"in n?n._value:n.value}function dp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const QD=["ctrl","shift","alt","meta"],XD={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>QD.some(t=>n[`${t}Key`]&&!e.includes(t))},qS=(n,e)=>(t,...i)=>{for(let s=0;s<e.length;s++){const r=XD[e[s]];if(r&&r(t,e))return}return n(t,...i)},JD=He({patchProp:BD},TD);let Dh;function ZD(){return Dh||(Dh=tD(JD))}const GS=(...n)=>{const e=ZD().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=ev(i);if(!s)return;const r=e._component;!te(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ev(n){return Ve(n)?document.querySelector(n):n}var Du={exports:{}};function vu(){}vu.prototype={on:function(n,e,t){var i=this.e||(this.e={});return(i[n]||(i[n]=[])).push({fn:e,ctx:t}),this},once:function(n,e,t){var i=this;function s(){i.off(n,s),e.apply(t,arguments)}return s._=e,this.on(n,s,t)},emit:function(n){var e=[].slice.call(arguments,1),t=((this.e||(this.e={}))[n]||[]).slice(),i=0,s=t.length;for(i;i<s;i++)t[i].fn.apply(t[i].ctx,e);return this},off:function(n,e){var t=this.e||(this.e={}),i=t[n],s=[];if(i&&e)for(var r=0,o=i.length;r<o;r++)i[r].fn!==e&&i[r].fn._!==e&&s.push(i[r]);return s.length?t[n]=s:delete t[n],this}};Du.exports=vu;Du.exports.TinyEmitter=vu;var KS=Du.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(n,e){if(!n)throw Ds(e)},Ds=function(n){return new Error("Firebase Database ("+pp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},tv=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,c=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(f=64)),i.push(t[c],t[h],t[f],t[d])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_p(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||u==null||h==null)throw Error();const f=r<<2|a>>4;if(i.push(f),u!==64){const d=a<<4&240|u>>2;if(i.push(d),h!==64){const _=u<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Eu=function(n){const e=_p(n);return Cu.encodeByteArray(e,!0)},ml=function(n){try{return Cu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(n){return gp(void 0,n)}function gp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!iv(t)||(n[t]=gp(n[t],e[t]));return n}function iv(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function sv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rv(){const n=Xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yp(){return pp.NODE_ADMIN===!0}function ov(){return typeof indexedDB=="object"}function av(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="FirebaseError";class vs extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=lv,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?uv(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vs(s,a,i)}}function uv(n,e){return n.replace(cv,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const cv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){return JSON.parse(n)}function Ne(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=hr(ml(r[0])||""),t=hr(ml(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},hv=function(n){const e=Dp(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fv=function(n){const e=Dp(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function es(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function yl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yo(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Do(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(vh(r)&&vh(o)){if(!Do(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function vh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Us(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Ws(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^r&(o^a),c=1518500249):(u=r^o^a,c=1859775393):h<60?(u=r&o|a&(r|o),c=2400959708):(u=r^o^a,c=3395469782);const f=(s<<5|s>>>27)+u+l+c+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function pv(n,e){const t=new _v(n,e);return t.subscribe.bind(t)}class _v{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");gv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ka),s.error===void 0&&(s.error=ka),s.complete===void 0&&(s.complete=ka);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ka(){}function Tu(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,N(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},oa=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n){return n&&n._delegate?n._delegate:n}class Di{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ra;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vv(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Dv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dv(n){return n===ti?void 0:n}function vv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const Ev={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},wv=ye.INFO,Tv={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},bv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Tv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=wv,this._logHandler=bv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ev[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}function Iv(n){return Array.prototype.slice.call(n)}function vp(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function Iu(n,e,t){var i,s=new Promise(function(r,o){i=n[e].apply(n,t),vp(i).then(r,o)});return s.request=i,s}function Sv(n,e,t){var i=Iu(n,e,t);return i.then(function(s){if(!!s)return new fr(s,i.request)})}function Es(n,e,t){t.forEach(function(i){Object.defineProperty(n.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function Su(n,e,t,i){i.forEach(function(s){s in t.prototype&&(n.prototype[s]=function(){return Iu(this[e],s,arguments)})})}function aa(n,e,t,i){i.forEach(function(s){s in t.prototype&&(n.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function Cp(n,e,t,i){i.forEach(function(s){s in t.prototype&&(n.prototype[s]=function(){return Sv(this[e],s,arguments)})})}function Si(n){this._index=n}Es(Si,"_index",["name","keyPath","multiEntry","unique"]);Su(Si,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Cp(Si,"_index",IDBIndex,["openCursor","openKeyCursor"]);function fr(n,e){this._cursor=n,this._request=e}Es(fr,"_cursor",["direction","key","primaryKey","value"]);Su(fr,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(fr.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),vp(e._request).then(function(i){if(!!i)return new fr(i,e._request)})})})});function Kt(n){this._store=n}Kt.prototype.createIndex=function(){return new Si(this._store.createIndex.apply(this._store,arguments))};Kt.prototype.index=function(){return new Si(this._store.index.apply(this._store,arguments))};Es(Kt,"_store",["name","keyPath","indexNames","autoIncrement"]);Su(Kt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Cp(Kt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);aa(Kt,"_store",IDBObjectStore,["deleteIndex"]);function Rr(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}Rr.prototype.objectStore=function(){return new Kt(this._tx.objectStore.apply(this._tx,arguments))};Es(Rr,"_tx",["objectStoreNames","mode"]);aa(Rr,"_tx",IDBTransaction,["abort"]);function la(n,e,t){this._db=n,this.oldVersion=e,this.transaction=new Rr(t)}la.prototype.createObjectStore=function(){return new Kt(this._db.createObjectStore.apply(this._db,arguments))};Es(la,"_db",["name","version","objectStoreNames"]);aa(la,"_db",IDBDatabase,["deleteObjectStore","close"]);function ua(n){this._db=n}ua.prototype.transaction=function(){return new Rr(this._db.transaction.apply(this._db,arguments))};Es(ua,"_db",["name","version","objectStoreNames"]);aa(ua,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(n){[Kt,Si].forEach(function(e){n in e.prototype&&(e.prototype[n.replace("open","iterate")]=function(){var t=Iv(arguments),i=t[t.length-1],s=this._store||this._index,r=s[n].apply(s,t.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[Si,Kt].forEach(function(n){n.prototype.getAll||(n.prototype.getAll=function(e,t){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(o){if(!o){r(s);return}if(s.push(o.value),t!==void 0&&s.length==t){r(s);return}o.continue()})})})});function Av(n,e,t){var i=Iu(indexedDB,"open",[n,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){t&&t(new la(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new ua(r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function xv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dl="@firebase/app",Ch="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new bu("@firebase/app"),Pv="@firebase/app-compat",kv="@firebase/analytics-compat",Nv="@firebase/analytics",Ov="@firebase/app-check-compat",Fv="@firebase/app-check",Mv="@firebase/auth",Lv="@firebase/auth-compat",Bv="@firebase/database",Uv="@firebase/database-compat",Wv="@firebase/functions",Hv="@firebase/functions-compat",Vv="@firebase/installations",$v="@firebase/installations-compat",zv="@firebase/messaging",jv="@firebase/messaging-compat",qv="@firebase/performance",Gv="@firebase/performance-compat",Kv="@firebase/remote-config",Yv="@firebase/remote-config-compat",Qv="@firebase/storage",Xv="@firebase/storage-compat",Jv="@firebase/firestore",Zv="@firebase/firestore-compat",e0="firebase",t0="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="[DEFAULT]",n0={[Dl]:"fire-core",[Pv]:"fire-core-compat",[Nv]:"fire-analytics",[kv]:"fire-analytics-compat",[Fv]:"fire-app-check",[Ov]:"fire-app-check-compat",[Mv]:"fire-auth",[Lv]:"fire-auth-compat",[Bv]:"fire-rtdb",[Uv]:"fire-rtdb-compat",[Wv]:"fire-fn",[Hv]:"fire-fn-compat",[Vv]:"fire-iid",[$v]:"fire-iid-compat",[zv]:"fire-fcm",[jv]:"fire-fcm-compat",[qv]:"fire-perf",[Gv]:"fire-perf-compat",[Kv]:"fire-rc",[Yv]:"fire-rc-compat",[Qv]:"fire-gcs",[Xv]:"fire-gcs-compat",[Jv]:"fire-fst",[Zv]:"fire-fst-compat","fire-js":"fire-js",[e0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Map,vl=new Map;function i0(n,e){try{n.container.addComponent(e)}catch(t){Au.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if(vl.has(e))return Au.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,n);for(const t of vo.values())i0(t,n);return!0}function Ru(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Wn=new Ar("app","Firebase",s0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=t0;function YS(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Ep,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});const s=vo.get(i);if(s){if(Do(n,s.options)&&Do(t,s.config))return s;throw Wn.create("duplicate-app",{appName:i})}const r=new Cv(i);for(const a of vl.values())r.addComponent(a);const o=new r0(n,t,r);return vo.set(i,o),o}function wp(n=Ep){const e=vo.get(n);if(!e)throw Wn.create("no-app",{appName:n});return e}function On(n,e,t){var i;let s=(i=n0[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Au.warn(a.join(" "));return}ts(new Di(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebase-heartbeat-database",a0=1,vi="firebase-heartbeat-store";let Na=null;function xu(){return Na||(Na=Av(o0,a0,n=>{switch(n.oldVersion){case 0:n.createObjectStore(vi)}}).catch(n=>{throw Wn.create("storage-open",{originalErrorMessage:n.message})})),Na}async function l0(n){try{return(await xu()).transaction(vi).objectStore(vi).get(Pu(n))}catch(e){throw Wn.create("storage-get",{originalErrorMessage:e.message})}}async function Oa(n,e){try{const i=(await xu()).transaction(vi,"readwrite");return await i.objectStore(vi).put(e,Pu(n)),i.complete}catch(t){throw Wn.create("storage-set",{originalErrorMessage:t.message})}}async function u0(n){try{const t=(await xu()).transaction(vi,"readwrite");return await t.objectStore(vi).delete(Pu(n)),t.complete}catch(e){throw Wn.create("storage-delete",{originalErrorMessage:e.message})}}function Pu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=1024,h0=30*24*60*60*1e3;class f0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _0(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=d0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(s=>s.date===i))return this._heartbeatsCache.push({date:i,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=h0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:t}=p0(this._heartbeatsCache),i=Eu(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),i}}function d0(){return new Date().toISOString().substring(0,10)}function p0(n,e=c0){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.userAgent===s.userAgent);if(r){if(r.dates.push(s.date),Eh(t)>e){r.dates.pop();break}}else if(t.push({userAgent:s.userAgent,dates:[s.date]}),Eh(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class _0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ov()?av().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await l0(this.app);return(t==null?void 0:t.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Oa(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Oa(this.app,{heartbeats:[...i,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Oa(this.app,{heartbeats:i.filter(s=>!e.includes(s))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return u0(this.app)}}function Eh(n){return Eu(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(n){ts(new Di("platform-logger",e=>new Rv(e),"PRIVATE")),ts(new Di("heartbeat",e=>new f0(e),"PRIVATE")),On(Dl,Ch,n),On(Dl,Ch,"esm2017"),On("fire-js","")}g0("");var m0="firebase",y0="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(m0,y0,"app");const wh="@firebase/database",Th="0.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tp="";function D0(n){Tp=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:hr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new v0(e)}}catch{}return new C0},li=bp("localStorage"),Cl=bp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new bu("@firebase/database"),E0=function(){let n=1;return function(){return n++}}(),Ip=function(n){const e=mv(n),t=new dv;t.update(e);const i=t.digest();return Cu.encodeByteArray(i)},Pr=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Pr.apply(null,i):typeof i=="object"?e+=Ne(i):e+=i,e+=" "}return e};let pi=null,bh=!0;const w0=function(n,e){N(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(zi.logLevel=ye.VERBOSE,pi=zi.log.bind(zi),e&&Cl.set("logging_enabled",!0)):typeof n=="function"?pi=n:(pi=null,Cl.remove("logging_enabled"))},Ge=function(...n){if(bh===!0&&(bh=!1,pi===null&&Cl.get("logging_enabled")===!0&&w0(!0)),pi){const e=Pr.apply(null,n);pi(e)}},kr=function(n){return function(...e){Ge(n,...e)}},El=function(...n){const e="FIREBASE INTERNAL ERROR: "+Pr(...n);zi.error(e)},Ci=function(...n){const e=`FIREBASE FATAL ERROR: ${Pr(...n)}`;throw zi.error(e),new Error(e)},st=function(...n){const e="FIREBASE WARNING: "+Pr(...n);zi.warn(e)},T0=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sp=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},b0=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ns="[MIN_NAME]",Ei="[MAX_NAME]",ws=function(n,e){if(n===e)return 0;if(n===ns||e===Ei)return-1;if(e===ns||n===Ei)return 1;{const t=Ih(n),i=Ih(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},I0=function(n,e){return n===e?0:n<e?-1:1},Ps=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ne(e))},ku=function(n){if(typeof n!="object"||n===null)return Ne(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Ne(e[i]),t+=":",t+=ku(n[e[i]]);return t+="}",t},Ap=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function lt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Rp=function(n){N(!Sp(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},S0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},A0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function R0(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const x0=new RegExp("^-?(0*)\\d{1,10}$"),P0=-2147483648,k0=2147483647,Ih=function(n){if(x0.test(n)){const e=Number(n);if(e>=P0&&e<=k0)return e}return null},Ts=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw st("Exception was thrown by user callback.",t),e},Math.floor(0))}},N0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ks=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class wl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="5",xp="v",Pp="s",kp="r",Np="f",Op=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fp="ls",M0="p",Tl="ac",Mp="websocket",Lp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=li.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&li.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function B0(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Bp(n,e,t){N(typeof e=="string","typeof type must == string"),N(typeof t=="object","typeof params must == object");let i;if(e===Mp)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Lp)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);B0(n)&&(t.ns=n.namespace);const s=[];return lt(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.counters_={}}incrementCounter(e,t=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return nv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa={},Ma={};function Ou(n){const e=n.toString();return Fa[e]||(Fa[e]=new U0),Fa[e]}function W0(n,e){const t=n.toString();return Ma[t]||(Ma[t]=e()),Ma[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ts(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="start",V0="close",$0="pLPCommand",z0="pRTLPCB",Up="id",Wp="pw",Hp="ser",j0="cb",q0="seg",G0="ts",K0="d",Y0="dframe",Vp=1870,$p=30,Q0=Vp-$p,X0=25e3,J0=3e4;class Li{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kr(e),this.stats_=Ou(t),this.urlFn=l=>(this.appCheckToken&&(l[Tl]=this.appCheckToken),Bp(t,Lp,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new H0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(J0)),b0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fu((...r)=>{const[o,a,l,u,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sh)this.id=a,this.password=l;else if(o===V0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Sh]="t",i[Hp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[j0]=this.scriptTagHolder.uniqueCallbackIdentifier),i[xp]=Nu,this.transportSessionId&&(i[Pp]=this.transportSessionId),this.lastSessionId&&(i[Fp]=this.lastSessionId),this.applicationId&&(i[M0]=this.applicationId),this.appCheckToken&&(i[Tl]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Op.test(location.hostname)&&(i[kp]=Np);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!S0()&&!A0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ne(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Eu(t),s=Ap(i,Q0);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Y0]="t",i[Up]=e,i[Wp]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ne(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fu{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=E0(),window[$0+this.uniqueCallbackIdentifier]=e,window[z0+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fu.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Up]=this.myID,e[Wp]=this.myPW,e[Hp]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$p+i.length<=Vp;){const o=this.pendingSegs.shift();i=i+"&"+q0+s+"="+o.seg+"&"+G0+s+"="+o.ts+"&"+K0+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(X0)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=16384,eC=45e3;let Co=null;typeof MozWebSocket!="undefined"?Co=MozWebSocket:typeof WebSocket!="undefined"&&(Co=WebSocket);class xt{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kr(this.connId),this.stats_=Ou(t),this.connURL=xt.connectionURL_(t,o,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s){const r={};return r[xp]=Nu,typeof location!="undefined"&&location.hostname&&Op.test(location.hostname)&&(r[kp]=Np),t&&(r[Pp]=t),i&&(r[Fp]=i),s&&(r[Tl]=s),Bp(e,Mp,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,li.set("previous_websocket_failure",!0);try{if(!yp()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Co(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Co!==null&&!xt.forceDisallow_}static previouslyFailed(){return li.isInMemoryStorage||li.get("previous_websocket_failure")===!0}markConnectionHealthy(){li.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=hr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Ne(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ap(t,Z0);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Li,xt]}initTransports_(e){const t=xt&&xt.isAvailable();let i=t&&!xt.previouslyFailed();if(e.webSocketOnly&&(t||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[xt];else{const s=this.transports_=[];for(const r of Mu.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=6e4,nC=5e3,iC=10*1024,sC=100*1024,La="t",Ah="d",rC="s",Rh="r",oC="e",xh="o",Ph="a",kh="n",Nh="p",aC="h";class lC{constructor(e,t,i,s,r,o,a,l,u,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kr("c:"+this.id+":"),this.transportManager_=new Mu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(La in e){const t=e[La];t===Ph?this.upgradeIfSecondaryHealthy_():t===Rh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===xh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ps("t",e),i=Ps("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ph,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ps("t",e),i=Ps("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ps(La,e);if(Ah in e){const i=e[Ah];if(t===aC)this.onHandshake_(i);else if(t===kh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===rC?this.onConnectionShutdown_(i):t===Rh?this.onReset_(i):t===oC?El("Server Error: "+i):t===xh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):El("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Nu!==i&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends jp{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!wu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Eo}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=32,Fh=768;class Ce{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function he(){return new Ce("")}function ie(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Hn(n){return n.pieces_.length-n.pieceNum_}function we(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ce(n.pieces_,e)}function qp(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function uC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Gp(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Kp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ce(e,0)}function Oe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof Ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new Ce(t,0)}function oe(n){return n.pieceNum_>=n.pieces_.length}function Ze(n,e){const t=ie(n),i=ie(e);if(t===null)return e;if(t===i)return Ze(we(n),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Lu(n,e){if(Hn(n)!==Hn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Pt(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Hn(n)>Hn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class cC{constructor(e,t){this.errorPrefix_=t,this.parts_=Gp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=oa(this.parts_[i]);Yp(this)}}function hC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=oa(e),Yp(n)}function fC(n){const e=n.parts_.pop();n.byteLength_-=oa(e),n.parts_.length>0&&(n.byteLength_-=1)}function Yp(n){if(n.byteLength_>Fh)throw new Error(n.errorPrefix_+"has a key path longer than "+Fh+" bytes ("+n.byteLength_+").");if(n.parts_.length>Oh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Oh+") or object contains a cycle "+ni(n))}function ni(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends jp{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Bu}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=1e3,dC=60*5*1e3,pC=3*1e3,Mh=30*1e3,_C=1.3,gC=3e4,mC="server_kill",Lh=3;class sn extends zp{constructor(e,t,i,s,r,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=sn.nextPersistentConnectionId_++,this.log_=kr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ks,this.maxReconnectDelay_=dC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!yp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Eo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Ne(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new ra,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},pC),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;sn.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&dn(e,"w")){const i=es(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=hv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):El("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gC&&(this.reconnectDelay_=ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_C)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+sn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(h){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new lC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,d=>{st(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(mC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&st(h),l())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yl(this.interruptReasons_)&&(this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ku(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new Ce(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ge("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lh&&(this.reconnectDelay_=Mh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ge("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Tp.replace(/\./g,"-")]=1,wu()?e["framework.cordova"]=1:mp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Eo.getInstance().currentlyOnline();return yl(this.interruptReasons_)&&e}}sn.nextPersistentConnectionId_=0;sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new se(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new se(ns,e),s=new se(ns,t);return this.compare(i,s)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;class Qp extends ca{static get __EMPTY_NODE(){return Kr}static set __EMPTY_NODE(e){Kr=e}compare(e,t){return ws(e.name,t.name)}isDefinedOn(e){throw Ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return se.MIN}maxPost(){return new se(Ei,Kr)}makePost(e,t){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Kr)}toString(){return".key"}}const ji=new Qp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Me.RED,this.left=s!=null?s:it.EMPTY_NODE,this.right=r!=null?r:it.EMPTY_NODE}copy(e,t,i,s,r){return new Me(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return it.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class yC{copy(e,t,i,s,r){return this}insert(e,t,i){return new Me(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class it{constructor(e,t=it.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new it(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new it(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Yr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Yr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Yr(this.root_,null,this.comparator_,!0,e)}}it.EMPTY_NODE=new yC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(n,e){return ws(n.name,e.name)}function Uu(n,e){return ws(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;function vC(n){bl=n}const Xp=function(n){return typeof n=="number"?"number:"+Rp(n):"string:"+n},Jp=function(n){if(n.isLeafNode()){const e=n.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else N(n===bl||n.isEmpty(),"priority of unexpected type.");N(n===bl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh;class Fe{constructor(e,t=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jp(this.priorityNode_)}static set __childrenNodeConstructor(e){Bh=e}static get __childrenNodeConstructor(){return Bh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ie(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ie(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(N(i!==".priority"||Hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Rp(this.value_):e+=this.value_,this.lazyHash_=Ip(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Fe.VALUE_TYPE_ORDER.indexOf(t),r=Fe.VALUE_TYPE_ORDER.indexOf(i);return N(s>=0,"Unknown leaf type: "+t),N(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zp,e_;function CC(n){Zp=n}function EC(n){e_=n}class wC extends ca{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ws(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Ei,new Fe("[PRIORITY-POST]",e_))}makePost(e,t){const i=Zp(e);return new se(t,new Fe("[PRIORITY-POST]",i))}toString(){return".priority"}}const Re=new wC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=Math.log(2);class bC{constructor(e){const t=r=>parseInt(Math.log(r)/TC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wo=function(n,e,t,i){n.sort(e);const s=function(l,u){const c=u-l;let h,f;if(c===0)return null;if(c===1)return h=n[l],f=t?t(h):h,new Me(f,h.node,Me.BLACK,null,null);{const d=parseInt(c/2,10)+l,_=s(l,d),p=s(d+1,u);return h=n[d],f=t?t(h):h,new Me(f,h.node,Me.BLACK,_,p)}},r=function(l){let u=null,c=null,h=n.length;const f=function(_,p){const m=h-_,D=h;h-=_;const C=s(m+1,D),E=n[m],T=t?t(E):E;d(new Me(T,E.node,p,null,C))},d=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<l.count;++_){const p=l.nextBitIsOne(),m=Math.pow(2,l.count-(_+1));p?f(m,Me.BLACK):(f(m,Me.BLACK),f(m,Me.RED))}return c},o=new bC(n.length),a=r(o);return new it(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;const Pi={};class en{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return N(Pi&&Re,"ChildrenNode.ts has not been loaded"),Ba=Ba||new en({".priority":Pi},{".priority":Re}),Ba}get(e){const t=es(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof it?t:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,t){N(e!==ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(se.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=wo(i,e.getCompare()):a=Pi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new en(c,u)}addToIndexes(e,t){const i=yo(this.indexes_,(s,r)=>{const o=es(this.indexSet_,r);if(N(o,"Missing index implementation for "+r),s===Pi)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(se.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),wo(a,o.getCompare())}else return Pi;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new se(e.name,a))),l.insert(e,e.node)}});return new en(i,this.indexSet_)}removeFromIndexes(e,t){const i=yo(this.indexes_,s=>{if(s===Pi)return s;{const r=t.get(e.name);return r?s.remove(new se(e.name,r)):s}});return new en(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class q{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Jp(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ns||(Ns=new q(new it(Uu),null,en.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ns}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ns:t}}getChild(e){const t=ie(e);return t===null?this:this.getImmediateChild(t).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(N(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new se(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ns:this.priorityNode_;return new q(s,o,r)}}updateChild(e,t){const i=ie(e);if(i===null)return t;{N(ie(e)!==".priority"||Hn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(we(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Re,(o,a)=>{t[o]=a.val(e),i++,r&&q.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xp(this.getPriority().val())+":"),this.forEachChild(Re,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ip(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new se(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new se(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new se(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,se.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nr?-1:0}withIndex(e){if(e===ji||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Re),s=t.getIterator(Re);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ji?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IC extends q{constructor(){super(new it(Uu),q.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Nr=new IC;Object.defineProperties(se,{MIN:{value:new se(ns,q.EMPTY_NODE)},MAX:{value:new se(Ei,Nr)}});Qp.__EMPTY_NODE=q.EMPTY_NODE;Fe.__childrenNodeConstructor=q;vC(Nr);EC(Nr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=!0;function Be(n,e=null){if(n===null)return q.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Fe(t,Be(e))}if(!(n instanceof Array)&&SC){const t=[];let i=!1;if(lt(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new se(o,l)))}}),t.length===0)return q.EMPTY_NODE;const r=wo(t,DC,o=>o.name,Uu);if(i){const o=wo(t,Re.getCompare());return new q(r,Be(e),new en({".priority":o},{".priority":Re}))}else return new q(r,Be(e),en.Default)}else{let t=q.EMPTY_NODE;return lt(n,(i,s)=>{if(dn(n,i)&&i.substring(0,1)!=="."){const r=Be(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Be(e))}}CC(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC extends ca{constructor(e){super();this.indexPath_=e,N(!oe(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ws(e.name,t.name):r}makePost(e,t){const i=Be(e),s=q.EMPTY_NODE.updateChild(this.indexPath_,i);return new se(t,s)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Nr);return new se(Ei,e)}toString(){return Gp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC extends ca{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ws(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,t){const i=Be(e);return new se(t,i)}toString(){return".value"}}const xC=new RC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",PC=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Uh.charAt(t%64),t=Math.floor(t/64);N(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Uh.charAt(e[s]);return N(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n){return{type:"value",snapshotNode:n}}function is(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function dr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function pr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function kC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(dr(t,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(is(t,i)):o.trackChildChange(pr(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Re,(s,r)=>{t.hasChild(s)||i.trackChildChange(dr(s,r))}),t.isLeafNode()||t.forEachChild(Re,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(pr(s,r,o))}else i.trackChildChange(is(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.indexedFilter_=new Wu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_r.getStartPost_(e),this.endPost_=_r.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new se(t,i))||(i=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=q.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(q.EMPTY_NODE);const r=this;return t.forEachChild(Re,(o,a)=>{r.matches(new se(o,a))||(s=s.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.rangedFilter_=new _r(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new se(t,i))||(i=q.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(q.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(f,d)=>h(d,f)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(r,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:s=s.updateImmediateChild(h.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new se(t,i),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,l);if(c&&!i.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(pr(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(dr(t,h));const p=a.updateImmediateChild(t,q.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(is(f.name,f.node)),p.updateImmediateChild(f.name,f.node)):p}}else return i.isEmpty()?e:c&&o(u,l)>=0?(r!=null&&(r.trackChildChange(dr(u.name,u.node)),r.trackChildChange(is(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(u.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ns}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new Hu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function OC(n){return n.loadsAllData()?new Wu(n.getIndex()):n.hasLimit()?new NC(n):new _r(n)}function Wh(n){const e={};if(n.isDefault())return e;let t;return n.index_===Re?t="$priority":n.index_===xC?t="$value":n.index_===ji?t="$key":(N(n.index_ instanceof AC,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ne(t),n.startSet_&&(e.startAt=Ne(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+Ne(n.indexStartName_))),n.endSet_&&(e.endAt=Ne(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+Ne(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Hh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Re&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends zp{constructor(e,t,i,s){super();this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=kr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=To.getListenId_(e,i),a={};this.listens_[o]=a;const l=Wh(e._queryParams);this.restRequest_(r+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,i),es(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,t){const i=To.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Wh(e._queryParams),i=e._path.toString(),s=new ra;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hr(a.responseText)}catch{st("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){return{value:null,children:new Map}}function n_(n,e,t){if(oe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=ie(e);n.children.has(i)||n.children.set(i,bo());const s=n.children.get(i);e=we(e),n_(s,e,t)}}function Il(n,e,t){n.value!==null?t(e,n.value):MC(n,(i,s)=>{const r=new Ce(e.toString()+"/"+i);Il(s,r,t)})}function MC(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&lt(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=10*1e3,BC=30*1e3,UC=5*60*1e3;class WC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new LC(e);const i=Vh+(BC-Vh)*Math.random();Ks(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;lt(e,(s,r)=>{r>0&&dn(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*UC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kt||(kt={}));function i_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $u(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=kt.ACK_USER_WRITE,this.source=i_()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ce(e));return new Io(he(),t,this.revert)}}else return N(ie(this.path)===e,"operationForChild called for unrelated child."),new Io(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.source=e,this.path=t,this.type=kt.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new gr(this.source,he()):new gr(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=kt.OVERWRITE}operationForChild(e){return oe(this.path)?new wi(this.source,he(),this.snap.getImmediateChild(e)):new wi(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=kt.MERGE}operationForChild(e){if(oe(this.path)){const t=this.children.subtree(new Ce(e));return t.isEmpty()?null:t.value?new wi(this.source,he(),t.value):new mr(this.source,he(),t)}else return N(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mr(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ie(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function VC(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(kC(o.childName,o.snapshotNode))}),Os(n,s,"child_removed",e,i,t),Os(n,s,"child_added",e,i,t),Os(n,s,"child_moved",r,i,t),Os(n,s,"child_changed",e,i,t),Os(n,s,"value",e,i,t),s}function Os(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>zC(n,a,l)),o.forEach(a=>{const l=$C(n,a,r);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function $C(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function zC(n,e,t){if(e.childName==null||t.childName==null)throw Ds("Should only compare child_ events.");const i=new se(e.childName,e.snapshotNode),s=new se(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n,e){return{eventCache:n,serverCache:e}}function Ys(n,e,t,i){return ha(new Vn(e,t,i),n.serverCache)}function s_(n,e,t,i){return ha(n.eventCache,new Vn(e,t,i))}function So(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ti(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;const jC=()=>(Ua||(Ua=new it(I0)),Ua);class be{constructor(e,t=jC()){this.value=e,this.children=t}static fromObject(e){let t=new be(null);return lt(e,(i,s)=>{t=t.set(new Ce(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:he(),value:this.value};if(oe(e))return null;{const i=ie(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(we(e),t);return r!=null?{path:Oe(new Ce(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const t=ie(e),i=this.children.get(t);return i!==null?i.subtree(we(e)):new be(null)}}set(e,t){if(oe(e))return new be(t,this.children);{const i=ie(e),r=(this.children.get(i)||new be(null)).set(we(e),t),o=this.children.insert(i,r);return new be(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const t=ie(e),i=this.children.get(t);if(i){const s=i.remove(we(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(oe(e))return this.value;{const t=ie(e),i=this.children.get(t);return i?i.get(we(e)):null}}setTree(e,t){if(oe(e))return t;{const i=ie(e),r=(this.children.get(i)||new be(null)).setTree(we(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new be(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Oe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,he(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(oe(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(we(e),Oe(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,he(),t)}foreachOnPath_(e,t,i){if(oe(e))return this;{this.value&&i(t,this.value);const s=ie(e),r=this.children.get(s);return r?r.foreachOnPath_(we(e),Oe(t,s),i):new be(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Oe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new be(null))}}function Qs(n,e,t){if(oe(e))return new Ot(new be(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ze(s,e);return r=r.updateChild(o,t),new Ot(n.writeTree_.set(s,r))}else{const s=new be(t),r=n.writeTree_.setTree(e,s);return new Ot(r)}}}function $h(n,e,t){let i=n;return lt(t,(s,r)=>{i=Qs(i,Oe(e,s),r)}),i}function zh(n,e){if(oe(e))return Ot.empty();{const t=n.writeTree_.setTree(e,new be(null));return new Ot(t)}}function Sl(n,e){return Ai(n,e)!=null}function Ai(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ze(t.path,e)):null}function jh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Re,(i,s)=>{e.push(new se(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new se(i,s.value))}),e}function Fn(n,e){if(oe(e))return n;{const t=Ai(n,e);return t!=null?new Ot(new be(t)):new Ot(n.writeTree_.subtree(e))}}function Al(n){return n.writeTree_.isEmpty()}function ss(n,e){return r_(he(),n.writeTree_,e)}function r_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=r_(Oe(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Oe(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n,e){return u_(e,n)}function qC(n,e,t,i,s){N(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Qs(n.visibleWrites,e,t)),n.lastWriteId=i}function GC(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function KC(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);N(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&YC(a,i.path)?s=!1:Pt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return QC(n),!0;if(i.snap)n.visibleWrites=zh(n.visibleWrites,i.path);else{const a=i.children;lt(a,l=>{n.visibleWrites=zh(n.visibleWrites,Oe(i.path,l))})}return!0}else return!1}function YC(n,e){if(n.snap)return Pt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Pt(Oe(n.path,t),e))return!0;return!1}function QC(n){n.visibleWrites=o_(n.allWrites,XC,he()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function XC(n){return n.visible}function o_(n,e,t){let i=Ot.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Pt(t,o)?(a=Ze(t,o),i=Qs(i,a,r.snap)):Pt(o,t)&&(a=Ze(o,t),i=Qs(i,he(),r.snap.getChild(a)));else if(r.children){if(Pt(t,o))a=Ze(t,o),i=$h(i,a,r.children);else if(Pt(o,t))if(a=Ze(o,t),oe(a))i=$h(i,he(),r.children);else{const l=es(r.children,ie(a));if(l){const u=l.getChild(we(a));i=Qs(i,he(),u)}}}else throw Ds("WriteRecord should have .snap or .children")}}return i}function a_(n,e,t,i,s){if(!i&&!s){const r=Ai(n.visibleWrites,e);if(r!=null)return r;{const o=Fn(n.visibleWrites,e);if(Al(o))return t;if(t==null&&!Sl(o,he()))return null;{const a=t||q.EMPTY_NODE;return ss(o,a)}}}else{const r=Fn(n.visibleWrites,e);if(!s&&Al(r))return t;if(!s&&t==null&&!Sl(r,he()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(Pt(u.path,e)||Pt(e,u.path))},a=o_(n.allWrites,o,e),l=t||q.EMPTY_NODE;return ss(a,l)}}}function JC(n,e,t){let i=q.EMPTY_NODE;const s=Ai(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Re,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Fn(n.visibleWrites,e);return t.forEachChild(Re,(o,a)=>{const l=ss(Fn(r,new Ce(o)),a);i=i.updateImmediateChild(o,l)}),jh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Fn(n.visibleWrites,e);return jh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ZC(n,e,t,i,s){N(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Oe(e,t);if(Sl(n.visibleWrites,r))return null;{const o=Fn(n.visibleWrites,r);return Al(o)?s.getChild(t):ss(o,s.getChild(t))}}function eE(n,e,t,i){const s=Oe(e,t),r=Ai(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Fn(n.visibleWrites,s);return ss(o,i.getNode().getImmediateChild(t))}else return null}function tE(n,e){return Ai(n.visibleWrites,e)}function nE(n,e,t,i,s,r,o){let a;const l=Fn(n.visibleWrites,e),u=Ai(l,he());if(u!=null)a=u;else if(t!=null)a=ss(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&c.length<s;)h(d,i)!==0&&c.push(d),d=f.getNext();return c}else return[]}function iE(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Ao(n,e,t,i){return a_(n.writeTree,n.treePath,e,t,i)}function zu(n,e){return JC(n.writeTree,n.treePath,e)}function qh(n,e,t,i){return ZC(n.writeTree,n.treePath,e,t,i)}function Ro(n,e){return tE(n.writeTree,Oe(n.treePath,e))}function sE(n,e,t,i,s,r){return nE(n.writeTree,n.treePath,e,t,i,s,r)}function ju(n,e,t){return eE(n.writeTree,n.treePath,e,t)}function l_(n,e){return u_(Oe(n.treePath,e),n.writeTree)}function u_(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;N(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),N(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,pr(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,dr(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,is(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,pr(i,e.snapshotNode,s.oldSnap));else throw Ds("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const c_=new oE;class qu{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ju(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ti(this.viewCache_),r=sE(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n){return{filter:n}}function lE(n,e){N(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function uE(n,e,t,i,s){const r=new rE;let o,a;if(t.type===kt.OVERWRITE){const u=t;u.source.fromUser?o=Rl(n,e,u.path,u.snap,i,s,r):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!oe(u.path),o=xo(n,e,u.path,u.snap,i,s,a,r))}else if(t.type===kt.MERGE){const u=t;u.source.fromUser?o=hE(n,e,u.path,u.children,i,s,r):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=xl(n,e,u.path,u.children,i,s,a,r))}else if(t.type===kt.ACK_USER_WRITE){const u=t;u.revert?o=pE(n,e,u.path,i,s,r):o=fE(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===kt.LISTEN_COMPLETE)o=dE(n,e,t.path,i,r);else throw Ds("Unknown operation type: "+t.type);const l=r.getChanges();return cE(e,o,l),{viewCache:o,changes:l}}function cE(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=So(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(t_(So(e)))}}function h_(n,e,t,i,s,r){const o=e.eventCache;if(Ro(i,t)!=null)return e;{let a,l;if(oe(t))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ti(e),c=u instanceof q?u:q.EMPTY_NODE,h=zu(i,c);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=Ao(i,Ti(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=ie(t);if(u===".priority"){N(Hn(t)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=qh(i,t,c,l);h!=null?a=n.filter.updatePriority(c,h):a=o.getNode()}else{const c=we(t);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=qh(i,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(u).updateChild(c,f):h=o.getNode().getImmediateChild(u)}else h=ju(i,u,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),u,h,c,s,r):a=o.getNode()}}return Ys(e,a,o.isFullyInitialized()||oe(t),n.filter.filtersNodes())}}function xo(n,e,t,i,s,r,o,a){const l=e.serverCache;let u;const c=o?n.filter:n.filter.getIndexedFilter();if(oe(t))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(t,i);u=c.updateFullNode(l.getNode(),d,null)}else{const d=ie(t);if(!l.isCompleteForPath(t)&&Hn(t)>1)return e;const _=we(t),m=l.getNode().getImmediateChild(d).updateChild(_,i);d===".priority"?u=c.updatePriority(l.getNode(),m):u=c.updateChild(l.getNode(),d,m,_,c_,null)}const h=s_(e,u,l.isFullyInitialized()||oe(t),c.filtersNodes()),f=new qu(s,h,r);return h_(n,h,t,s,f,a)}function Rl(n,e,t,i,s,r,o){const a=e.eventCache;let l,u;const c=new qu(s,e,r);if(oe(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ys(e,u,!0,n.filter.filtersNodes());else{const h=ie(t);if(h===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),l=Ys(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=we(t),d=a.getNode().getImmediateChild(h);let _;if(oe(f))_=i;else{const p=c.getCompleteChild(h);p!=null?qp(f)===".priority"&&p.getChild(Kp(f)).isEmpty()?_=p:_=p.updateChild(f,i):_=q.EMPTY_NODE}if(d.equals(_))l=e;else{const p=n.filter.updateChild(a.getNode(),h,_,f,c,o);l=Ys(e,p,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Gh(n,e){return n.eventCache.isCompleteForChild(e)}function hE(n,e,t,i,s,r,o){let a=e;return i.foreach((l,u)=>{const c=Oe(t,l);Gh(e,ie(c))&&(a=Rl(n,a,c,u,s,r,o))}),i.foreach((l,u)=>{const c=Oe(t,l);Gh(e,ie(c))||(a=Rl(n,a,c,u,s,r,o))}),a}function Kh(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function xl(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;oe(t)?u=i:u=new be(null).setTree(t,i);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(c.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),_=Kh(n,d,f);l=xo(n,l,new Ce(h),_,s,r,o,a)}}),u.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!c.hasChild(h)&&!d){const _=e.serverCache.getNode().getImmediateChild(h),p=Kh(n,_,f);l=xo(n,l,new Ce(h),p,s,r,o,a)}}),l}function fE(n,e,t,i,s,r,o){if(Ro(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(oe(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return xo(n,e,t,l.getNode().getChild(t),s,r,a,o);if(oe(t)){let u=new be(null);return l.getNode().forEachChild(ji,(c,h)=>{u=u.set(new Ce(c),h)}),xl(n,e,t,u,s,r,a,o)}else return e}else{let u=new be(null);return i.foreach((c,h)=>{const f=Oe(t,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),xl(n,e,t,u,s,r,a,o)}}function dE(n,e,t,i,s){const r=e.serverCache,o=s_(e,r.getNode(),r.isFullyInitialized()||oe(t),r.isFiltered());return h_(n,o,t,i,c_,s)}function pE(n,e,t,i,s,r){let o;if(Ro(i,t)!=null)return e;{const a=new qu(i,e,s),l=e.eventCache.getNode();let u;if(oe(t)||ie(t)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ao(i,Ti(e));else{const h=e.serverCache.getNode();N(h instanceof q,"serverChildren would be complete if leaf node"),c=zu(i,h)}c=c,u=n.filter.updateFullNode(l,c,r)}else{const c=ie(t);let h=ju(i,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=n.filter.updateChild(l,c,h,we(t),a,r):e.eventCache.getNode().hasChild(c)?u=n.filter.updateChild(l,c,q.EMPTY_NODE,we(t),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ao(i,Ti(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Ro(i,he())!=null,Ys(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Wu(i.getIndex()),r=OC(i);this.processor_=aE(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(q.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(q.EMPTY_NODE,a.getNode(),null),c=new Vn(l,o.isFullyInitialized(),s.filtersNodes()),h=new Vn(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ha(h,c),this.eventGenerator_=new HC(this.query_)}get query(){return this.query_}}function gE(n){return n.viewCache_.serverCache.getNode()}function mE(n){return So(n.viewCache_)}function yE(n,e){const t=Ti(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!oe(e)&&!t.getImmediateChild(ie(e)).isEmpty())?t.getChild(e):null}function Yh(n){return n.eventRegistrations_.length===0}function DE(n,e){n.eventRegistrations_.push(e)}function Qh(n,e,t){const i=[];if(t){N(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Xh(n,e,t,i){e.type===kt.MERGE&&e.source.queryId!==null&&(N(Ti(n.viewCache_),"We should always have a full cache before handling merges"),N(So(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=uE(n.processor_,s,e,t,i);return lE(n.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,f_(n,r.changes,r.viewCache.eventCache.getNode(),null)}function vE(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Re,(r,o)=>{i.push(is(r,o))}),t.isFullyInitialized()&&i.push(t_(t.getNode())),f_(n,i,t.getNode(),e)}function f_(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return VC(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;class d_{constructor(){this.views=new Map}}function CE(n){N(!Po,"__referenceConstructor has already been defined"),Po=n}function EE(){return N(Po,"Reference.ts has not been loaded"),Po}function wE(n){return n.views.size===0}function Gu(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return N(r!=null,"SyncTree gave us an op for an invalid query."),Xh(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Xh(o,e,t,i));return r}}function p_(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ao(t,s?i:null),l=!1;a?l=!0:i instanceof q?(a=zu(t,i),l=!1):(a=q.EMPTY_NODE,l=!1);const u=ha(new Vn(a,l,!1),new Vn(i,s,!1));return new _E(e,u)}return o}function TE(n,e,t,i,s,r){const o=p_(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),DE(o,t),vE(o,t)}function bE(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=$n(n);if(s==="default")for(const[l,u]of n.views.entries())o=o.concat(Qh(u,t,i)),Yh(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=n.views.get(s);l&&(o=o.concat(Qh(l,t,i)),Yh(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!$n(n)&&r.push(new(EE())(e._repo,e._path)),{removed:r,events:o}}function __(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Mn(n,e){let t=null;for(const i of n.views.values())t=t||yE(i,e);return t}function g_(n,e){if(e._queryParams.loadsAllData())return da(n);{const i=e._queryIdentifier;return n.views.get(i)}}function m_(n,e){return g_(n,e)!=null}function $n(n){return da(n)!=null}function da(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;function IE(n){N(!ko,"__referenceConstructor has already been defined"),ko=n}function SE(){return N(ko,"Reference.ts has not been loaded"),ko}let AE=1;class Jh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=iE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function y_(n,e,t,i,s){return qC(n.pendingWriteTree_,e,t,i,s),s?Fr(n,new wi(i_(),e,t)):[]}function ui(n,e,t=!1){const i=GC(n.pendingWriteTree_,e);if(KC(n.pendingWriteTree_,e)){let r=new be(null);return i.snap!=null?r=r.set(he(),!0):lt(i.children,o=>{r=r.set(new Ce(o),!0)}),Fr(n,new Io(i.path,r,t))}else return[]}function Or(n,e,t){return Fr(n,new wi(Vu(),e,t))}function RE(n,e,t){const i=be.fromObject(t);return Fr(n,new mr(Vu(),e,i))}function xE(n,e){return Fr(n,new gr(Vu(),e))}function PE(n,e,t){const i=Yu(n,t);if(i){const s=Qu(i),r=s.path,o=s.queryId,a=Ze(r,e),l=new gr($u(o),a);return Xu(n,r,l)}else return[]}function Pl(n,e,t,i){const s=e._path,r=n.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||m_(r,e))){const a=bE(r,e,t,i);wE(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=a.removed;o=a.events;const u=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=n.syncPointTree_.findOnPath(s,(h,f)=>$n(f));if(u&&!c){const h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=FE(h);for(let d=0;d<f.length;++d){const _=f[d],p=_.query,m=C_(n,_);n.listenProvider_.startListening(Xs(p),No(n,p),m.hashFn,m.onComplete)}}}!c&&l.length>0&&!i&&(u?n.listenProvider_.stopListening(Xs(e),null):l.forEach(h=>{const f=n.queryToTagMap.get(pa(h));n.listenProvider_.stopListening(Xs(h),f)})),ME(n,l)}return o}function kE(n,e,t,i){const s=Yu(n,i);if(s!=null){const r=Qu(s),o=r.path,a=r.queryId,l=Ze(o,e),u=new wi($u(a),l,t);return Xu(n,o,u)}else return[]}function NE(n,e,t,i){const s=Yu(n,i);if(s){const r=Qu(s),o=r.path,a=r.queryId,l=Ze(o,e),u=be.fromObject(t),c=new mr($u(a),l,u);return Xu(n,o,c)}else return[]}function Zh(n,e,t){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(h,f)=>{const d=Ze(h,i);s=s||Mn(f,d),r=r||$n(f)});let o=n.syncPointTree_.get(i);o?(r=r||$n(o),s=s||Mn(o,he())):(o=new d_,n.syncPointTree_=n.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=q.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,d)=>{const _=Mn(d,he());_&&(s=s.updateImmediateChild(f,_))}));const l=m_(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=pa(e);N(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=LE();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=fa(n.pendingWriteTree_,i);let c=TE(o,e,t,u,s,a);if(!l&&!r){const h=g_(o,e);c=c.concat(BE(n,e,h))}return c}function Ku(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ze(o,e),u=Mn(a,l);if(u)return u});return a_(s,e,r,t,!0)}function OE(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(u,c)=>{const h=Ze(u,t);i=i||Mn(c,h)});let s=n.syncPointTree_.get(t);s?i=i||Mn(s,he()):(s=new d_,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Vn(i,!0,!1):null,a=fa(n.pendingWriteTree_,e._path),l=p_(s,e,a,r?o.getNode():q.EMPTY_NODE,r);return mE(l)}function Fr(n,e){return D_(e,n.syncPointTree_,null,fa(n.pendingWriteTree_,he()))}function D_(n,e,t,i){if(oe(n.path))return v_(n,e,t,i);{const s=e.get(he());t==null&&s!=null&&(t=Mn(s,he()));let r=[];const o=ie(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,c=l_(i,o);r=r.concat(D_(a,l,u,c))}return s&&(r=r.concat(Gu(s,n,i,t))),r}}function v_(n,e,t,i){const s=e.get(he());t==null&&s!=null&&(t=Mn(s,he()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=l_(i,o),c=n.operationForChild(o);c&&(r=r.concat(v_(c,a,l,u)))}),s&&(r=r.concat(Gu(s,n,i,t))),r}function C_(n,e){const t=e.query,i=No(n,t);return{hashFn:()=>(gE(e)||q.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?PE(n,t._path,i):xE(n,t._path);{const r=R0(s,t);return Pl(n,t,null,r)}}}}function No(n,e){const t=pa(e);return n.queryToTagMap.get(t)}function pa(n){return n._path.toString()+"$"+n._queryIdentifier}function Yu(n,e){return n.tagToQueryMap.get(e)}function Qu(n){const e=n.indexOf("$");return N(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ce(n.substr(0,e))}}function Xu(n,e,t){const i=n.syncPointTree_.get(e);N(i,"Missing sync point for query tag that we're tracking");const s=fa(n.pendingWriteTree_,e);return Gu(i,t,s,null)}function FE(n){return n.fold((e,t,i)=>{if(t&&$n(t))return[da(t)];{let s=[];return t&&(s=__(t)),lt(i,(r,o)=>{s=s.concat(o)}),s}})}function Xs(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(SE())(n._repo,n._path):n}function ME(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=pa(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function LE(){return AE++}function BE(n,e,t){const i=e._path,s=No(n,e),r=C_(n,t),o=n.listenProvider_.startListening(Xs(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)N(!$n(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!oe(u)&&c&&$n(c))return[da(c).query];{let f=[];return c&&(f=f.concat(__(c).map(d=>d.query))),lt(h,(d,_)=>{f=f.concat(_)}),f}});for(let u=0;u<l.length;++u){const c=l[u];n.listenProvider_.stopListening(Xs(c),No(n,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ju(t)}node(){return this.node_}}class Zu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Oe(this.path_,e);return new Zu(this.syncTree_,t)}node(){return Ku(this.syncTree_,this.path_)}}const UE=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ef=function(n,e,t){if(!n||typeof n!="object")return n;if(N(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return WE(n[".sv"],e,t);if(typeof n[".sv"]=="object")return HE(n[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},WE=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:N(!1,"Unexpected server value: "+n)}},HE=function(n,e,t){n.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&N(!1,"Unexpected increment value: "+i);const s=e.node();if(N(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},VE=function(n,e,t,i){return ec(e,new Zu(t,n),i)},E_=function(n,e,t){return ec(n,new Ju(e),t)};function ec(n,e,t){const i=n.getPriority().val(),s=ef(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ef(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Fe(a,Be(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Fe(s))),o.forEachChild(Re,(a,l)=>{const u=ec(l,e.getImmediateChild(a),t);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function nc(n,e){let t=e instanceof Ce?e:new Ce(e),i=n,s=ie(t);for(;s!==null;){const r=es(i.node.children,s)||{children:{},childCount:0};i=new tc(s,i,r),t=we(t),s=ie(t)}return i}function bs(n){return n.node.value}function w_(n,e){n.node.value=e,kl(n)}function T_(n){return n.node.childCount>0}function $E(n){return bs(n)===void 0&&!T_(n)}function _a(n,e){lt(n.node.children,(t,i)=>{e(new tc(t,n,i))})}function b_(n,e,t,i){t&&!i&&e(n),_a(n,s=>{b_(s,e,!0,i)}),t&&i&&e(n)}function zE(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Mr(n){return new Ce(n.parent===null?n.name:Mr(n.parent)+"/"+n.name)}function kl(n){n.parent!==null&&jE(n.parent,n.name,n)}function jE(n,e,t){const i=$E(t),s=dn(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,kl(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,kl(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=/[\[\].#$\/\u0000-\u001F\u007F]/,GE=/[\[\].#$\u0000-\u001F\u007F]/,Wa=10*1024*1024,I_=function(n){return typeof n=="string"&&n.length!==0&&!qE.test(n)},S_=function(n){return typeof n=="string"&&n.length!==0&&!GE.test(n)},KE=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),S_(n)},A_=function(n,e,t,i){i&&e===void 0||ic(Tu(n,"value"),e,t)},ic=function(n,e,t){const i=t instanceof Ce?new cC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ni(i));if(typeof e=="function")throw new Error(n+"contains a function "+ni(i)+" with contents = "+e.toString());if(Sp(e))throw new Error(n+"contains "+e.toString()+" "+ni(i));if(typeof e=="string"&&e.length>Wa/3&&oa(e)>Wa)throw new Error(n+"contains a string greater than "+Wa+" utf8 bytes "+ni(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(lt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!I_(o)))throw new Error(n+" contains an invalid key ("+o+") "+ni(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hC(i,o),ic(n,a,i),fC(i)}),s&&r)throw new Error(n+' contains ".value" child '+ni(i)+" in addition to actual children.")}},R_=function(n,e,t,i){if(!(i&&t===void 0)&&!S_(t))throw new Error(Tu(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YE=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),R_(n,e,t,i)},x_=function(n,e){if(ie(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},QE=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!I_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!KE(t))throw new Error(Tu(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sc(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Lu(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function rc(n,e,t){sc(n,t),P_(n,i=>Lu(i,e))}function ln(n,e,t){sc(n,t),P_(n,i=>Pt(i,e)||Pt(e,i))}function P_(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(JE(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function JE(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();pi&&Ge("event: "+t.toString()),Ts(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="repo_interrupt",ew=25;class tw{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new XE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bo(),this.transactionQueueTree_=new tc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nw(n,e,t){if(n.stats_=Ou(n.repoInfo_),n.forceRestClient_||N0())n.server_=new To(n.repoInfo_,(i,s,r,o)=>{tf(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>nf(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new sn(n.repoInfo_,e,(i,s,r,o)=>{tf(n,i,s,r,o)},i=>{nf(n,i)},i=>{iw(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=W0(n.repoInfo_,()=>new WC(n.stats_,n.server_)),n.infoData_=new FC,n.infoSyncTree_=new Jh({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Or(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ac(n,"connected",!1),n.serverSyncTree_=new Jh({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const u=o(a,l);ln(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function k_(n){const t=n.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function oc(n){return UE({timestamp:k_(n)})}function tf(n,e,t,i,s){n.dataUpdateCount++;const r=new Ce(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=yo(t,u=>Be(u));o=NE(n.serverSyncTree_,r,l,s)}else{const l=Be(t);o=kE(n.serverSyncTree_,r,l,s)}else if(i){const l=yo(t,u=>Be(u));o=RE(n.serverSyncTree_,r,l)}else{const l=Be(t);o=Or(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ma(n,r)),ln(n.eventQueue_,a,o)}function nf(n,e){ac(n,"connected",e),e===!1&&ow(n)}function iw(n,e){lt(e,(t,i)=>{ac(n,t,i)})}function ac(n,e,t){const i=new Ce("/.info/"+e),s=Be(t);n.infoData_.updateSnapshot(i,s);const r=Or(n.infoSyncTree_,i,s);ln(n.eventQueue_,i,r)}function N_(n){return n.nextWriteId_++}function sw(n,e){const t=OE(n.serverSyncTree_,e);return t!=null?Promise.resolve(t):n.server_.get(e).then(i=>{const s=Be(i).withIndex(e._queryParams.getIndex()),r=Or(n.serverSyncTree_,e._path,s);return rc(n.eventQueue_,e._path,r),Promise.resolve(s)},i=>(ga(n,"get for query "+Ne(e)+" failed: "+i),Promise.reject(new Error(i))))}function rw(n,e,t,i,s){ga(n,"set",{path:e.toString(),value:t,priority:i});const r=oc(n),o=Be(t,i),a=Ku(n.serverSyncTree_,e),l=E_(o,a,r),u=N_(n),c=y_(n.serverSyncTree_,e,l,u,!0);sc(n.eventQueue_,c),n.server_.put(e.toString(),o.val(!0),(f,d)=>{const _=f==="ok";_||st("set at "+e+" failed: "+f);const p=ui(n.serverSyncTree_,u,!_);ln(n.eventQueue_,e,p),uw(n,s,f,d)});const h=B_(n,e);ma(n,h),ln(n.eventQueue_,h,[])}function ow(n){ga(n,"onDisconnectEvents");const e=oc(n),t=bo();Il(n.onDisconnect_,he(),(s,r)=>{const o=VE(s,r,n.serverSyncTree_,e);n_(t,s,o)});let i=[];Il(t,he(),(s,r)=>{i=i.concat(Or(n.serverSyncTree_,s,r));const o=B_(n,s);ma(n,o)}),n.onDisconnect_=bo(),ln(n.eventQueue_,he(),i)}function aw(n,e,t){let i;ie(e._path)===".info"?i=Zh(n.infoSyncTree_,e,t):i=Zh(n.serverSyncTree_,e,t),rc(n.eventQueue_,e._path,i)}function sf(n,e,t){let i;ie(e._path)===".info"?i=Pl(n.infoSyncTree_,e,t):i=Pl(n.serverSyncTree_,e,t),rc(n.eventQueue_,e._path,i)}function lw(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ZE)}function ga(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ge(t,...e)}function uw(n,e,t,i){e&&Ts(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function O_(n,e,t){return Ku(n.serverSyncTree_,e,t)||q.EMPTY_NODE}function lc(n,e=n.transactionQueueTree_){if(e||ya(n,e),bs(e)){const t=M_(n,e);N(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&cw(n,Mr(e),t)}else T_(e)&&_a(e,t=>{lc(n,t)})}function cw(n,e,t){const i=t.map(u=>u.currentWriteId),s=O_(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const c=t[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Ze(e,c.path);r=r.updateChild(h,c.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,u=>{ga(n,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,c=c.concat(ui(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();ya(n,nc(n.transactionQueueTree_,e)),lc(n,n.transactionQueueTree_),ln(n.eventQueue_,e,c);for(let f=0;f<h.length;f++)Ts(h[f])}else{if(u==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{st("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=u}ma(n,e)}},o)}function ma(n,e){const t=F_(n,e),i=Mr(t),s=M_(n,t);return hw(n,s,i),i}function hw(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ze(t,l.path);let c=!1,h;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,s=s.concat(ui(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ew)c=!0,h="maxretry",s=s.concat(ui(n.serverSyncTree_,l.currentWriteId,!0));else{const f=O_(n,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){ic("transaction failed: Data returned ",d,l.path);let _=Be(d);typeof d=="object"&&d!=null&&dn(d,".priority")||(_=_.updatePriority(f.getPriority()));const m=l.currentWriteId,D=oc(n),C=E_(_,f,D);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=C,l.currentWriteId=N_(n),o.splice(o.indexOf(m),1),s=s.concat(y_(n.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),s=s.concat(ui(n.serverSyncTree_,m,!0))}else c=!0,h="nodata",s=s.concat(ui(n.serverSyncTree_,l.currentWriteId,!0))}ln(n.eventQueue_,t,s),s=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}ya(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ts(i[a]);lc(n,n.transactionQueueTree_)}function F_(n,e){let t,i=n.transactionQueueTree_;for(t=ie(e);t!==null&&bs(i)===void 0;)i=nc(i,t),e=we(e),t=ie(e);return i}function M_(n,e){const t=[];return L_(n,e,t),t.sort((i,s)=>i.order-s.order),t}function L_(n,e,t){const i=bs(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);_a(e,s=>{L_(n,s,t)})}function ya(n,e){const t=bs(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,w_(e,t.length>0?t:void 0)}_a(e,i=>{ya(n,i)})}function B_(n,e){const t=Mr(F_(n,e)),i=nc(n.transactionQueueTree_,e);return zE(i,s=>{Ha(n,s)}),Ha(n,i),b_(i,s=>{Ha(n,s)}),t}function Ha(n,e){const t=bs(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(N(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(N(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ui(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?w_(e,void 0):t.length=r+1,ln(n.eventQueue_,Mr(e),s);for(let o=0;o<i.length;o++)Ts(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dw(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):st(`Invalid query segment '${t}' in query '${n}'`)}return e}const rf=function(n,e){const t=pw(n),i=t.namespace;t.domain==="firebase.com"&&Ci(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||T0();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new L0(t.host,t.secure,i,e,s,"",i!==t.subdomain),path:new Ce(t.pathString)}},pw=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let c=n.indexOf("/");c===-1&&(c=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(c,h)),c<h&&(s=fw(n.substring(c,h)));const f=dw(n.substring(Math.min(n.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const d=e.slice(0,u);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class W_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return oe(this._path)?null:qp(this._path)}get ref(){return new Yt(this._repo,this._path)}get _queryIdentifier(){const e=Hh(this._queryParams),t=ku(e);return t==="{}"?"default":t}get _queryObject(){return Hh(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof uc))return!1;const t=this._repo===e._repo,i=Lu(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+uC(this._path)}}class Yt extends uc{constructor(e,t){super(e,t,new Hu,!1)}get parent(){const e=Kp(this._path);return e===null?null:new Yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rs{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ce(e),i=os(this.ref,e);return new rs(this._node.getChild(t),i,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new rs(s,os(this.ref,i),Re)))}hasChild(e){const t=new Ce(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function QS(n,e){return n=ut(n),n._checkNotDeleted("ref"),e!==void 0?os(n._root,e):n._root}function os(n,e){return n=ut(n),ie(n._path)===null?YE("child","path",e,!1):R_("child","path",e,!1),new Yt(n._repo,Oe(n._path,e))}function XS(n,e){n=ut(n),x_("push",n._path),A_("push",e,n._path,!0);const t=k_(n._repo),i=PC(t),s=os(n,i),r=os(n,i);let o;return e!=null?o=gw(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function gw(n,e){n=ut(n),x_("set",n._path),A_("set",e,n._path,!1);const t=new ra;return rw(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function JS(n){return n=ut(n),sw(n._repo,n).then(e=>new rs(e,new Yt(n._repo,n._path),n._queryParams.getIndex()))}class cc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new U_("value",this,new rs(e.snapshotNode,new Yt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new W_(this,e,t):null}matches(e){return e instanceof cc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hc{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new W_(this,e,t):null}createEvent(e,t){N(e.childName!=null,"Child events should have a childName.");const i=os(new Yt(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new U_(e.type,this,new rs(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function mw(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,u=(c,h)=>{sf(n._repo,n,a),l(c,h)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new _w(t,r||void 0),a=e==="value"?new cc(o):new hc(e,o);return aw(n._repo,n,a),()=>sf(n._repo,n,a)}function ZS(n,e,t,i){return mw(n,"value",e,t,i)}CE(Yt);IE(Yt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="FIREBASE_DATABASE_EMULATOR_HOST",Nl={};let Dw=!1;function vw(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=rf(r,s),a=o.repoInfo,l,u;typeof process!="undefined"&&(u=process.env[yw]),u?(l=!0,r=`http://${u}?ns=${a.namespace}`,o=rf(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const c=s&&l?new wl(wl.OWNER):new F0(n.name,n.options,e);QE("Invalid Firebase Database URL",o),oe(o.path)||Ci("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ew(a,n,c,new O0(n.name,t));return new ww(h,n)}function Cw(n,e){const t=Nl[e];(!t||t[n.key]!==n)&&Ci(`Database ${e}(${n.repoInfo_}) has already been deleted.`),lw(n),delete t[n.key]}function Ew(n,e,t,i){let s=Nl[e.name];s||(s={},Nl[e.name]=s);let r=s[n.toURLString()];return r&&Ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tw(n,Dw,t,i),s[n.toURLString()]=r,r}class ww{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yt(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Cw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ci("Cannot call "+e+" on a deleted database.")}}function eA(n=wp(),e){return Ru(n,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(n){D0(xr),ts(new Di("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vw(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),On(wh,Th,n),On(wh,Th,"esm2017")}sn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};sn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Tw();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function fc(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function H_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bw=H_,V_=new Ar("auth","Firebase",H_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new bu("@firebase/auth");function so(n,...e){of.logLevel<=ye.ERROR&&of.error(`Auth (${xr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,...e){throw dc(n,...e)}function zt(n,...e){return dc(n,...e)}function Iw(n,e,t){const i=Object.assign(Object.assign({},bw()),{[e]:t});return new Ar("auth","Firebase",i).create(e,{appName:n.name})}function dc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return V_.create(n,...e)}function K(n,e,...t){if(!n)throw dc(e,...t)}function tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw so(e),new Error(e)}function un(n,e){n||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function nn(n){un(n instanceof Function,"Expected a class definition");let e=af.get(n);return e?(un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,af.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n,e){const t=Ru(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Do(r,e!=null?e:{}))return s;Mt(s,"already-initialized")}return t.initialize({options:e})}function Aw(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Rw(){return lf()==="http:"||lf()==="https:"}function lf(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rw()||sv()||"connection"in navigator)?navigator.onLine:!0}function Pw(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.shortDelay=e,this.longDelay=t,un(t>e,"Short delay should be less than long delay!"),this.isMobile=wu()||mp()}get(){return xw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,e){un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new Lr(3e4,6e4);function Br(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Is(n,e,t,i,s={}){return z_(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Cs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),$_.fetch()(j_(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function z_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},kw),e);try{const s=new Ow(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Va(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Va(n,"email-already-in-use",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Iw(n,c,u);Mt(n,c)}}catch(s){if(s instanceof vs)throw s;Mt(n,"network-request-failed")}}async function Ur(n,e,t,i,s={}){const r=await Is(n,e,t,i,s);return"mfaPendingCredential"in r&&Mt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function j_(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?pc(n.config,s):`${n.config.apiScheme}://${s}`}class Ow{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(zt(this.auth,"network-request-failed")),Nw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Va(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=zt(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(n,e){return Is(n,"POST","/v1/accounts:delete",e)}async function Mw(n,e){return Is(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lw(n,e=!1){const t=ut(n),i=await t.getIdToken(e),s=_c(i);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Js($a(s.auth_time)),issuedAtTime:Js($a(s.iat)),expirationTime:Js($a(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $a(n){return Number(n)*1e3}function _c(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const s=ml(t);return s?JSON.parse(s):(so("Failed to decode base64 JWT payload"),null)}catch(s){return so("Caught error parsing JWT payload as JSON",s),null}}function Bw(n){const e=_c(n);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof vs&&Uw(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Uw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n){var e;const t=n.auth,i=await n.getIdToken(),s=await as(n,Mw(t,{idToken:i}));K(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?$w(r.providerUserInfo):[],a=Vw(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new q_(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function Hw(n){const e=ut(n);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vw(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function $w(n){return n.map(e=>{var{providerId:t}=e,i=fc(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(n,e){const t=await z_(n,{},async()=>{const i=Cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=j_(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$_.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Bw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await zw(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new yr;return i&&(K(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yr,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,e){K(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class _i{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=fc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ww(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new q_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await as(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Lw(this,e)}reload(){return Hw(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Oo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await as(this,Fw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,u,c;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,d=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,D=(u=t.createdAt)!==null&&u!==void 0?u:void 0,C=(c=t.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:E,emailVerified:T,isAnonymous:w,providerData:b,stsTokenManager:I}=t;K(E&&I,e,"internal-error");const k=yr.fromJSON(this.name,I);K(typeof E=="string",e,"internal-error"),gn(h,e.name),gn(f,e.name),K(typeof T=="boolean",e,"internal-error"),K(typeof w=="boolean",e,"internal-error"),gn(d,e.name),gn(_,e.name),gn(p,e.name),gn(m,e.name),gn(D,e.name),gn(C,e.name);const S=new _i({uid:E,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:w,photoURL:_,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:D,lastLoginAt:C});return b&&Array.isArray(b)&&(S.providerData=b.map($=>Object.assign({},$))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,i=!1){const s=new yr;s.updateFromServerResponse(t);const r=new _i({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Oo(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}G_.type="NONE";const uf=G_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n,e,t){return`firebase:${n}:${e}:${t}`}class qi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ro(this.userKey,s.apiKey,r),this.fullPersistenceKey=ro("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new qi(nn(uf),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||nn(uf);const o=ro(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const c=await u._get(o);if(c){const h=_i._fromJSON(e,c);u!==r&&(a=h),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new qi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new qi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(Z_(e))return"Webos";if(gc(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(X_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function K_(n=Xe()){return/firefox\//i.test(n)}function gc(n=Xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(n=Xe()){return/crios\//i.test(n)}function Q_(n=Xe()){return/iemobile/i.test(n)}function X_(n=Xe()){return/android/i.test(n)}function J_(n=Xe()){return/blackberry/i.test(n)}function Z_(n=Xe()){return/webos/i.test(n)}function Da(n=Xe()){return/iphone|ipad|ipod/i.test(n)}function jw(n=Xe()){var e;return Da(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qw(){return rv()&&document.documentMode===10}function eg(n=Xe()){return Da(n)||X_(n)||Z_(n)||J_(n)||/windows phone/i.test(n)||Q_(n)}function Gw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e=[]){let t;switch(n){case"Browser":t=cf(Xe());break;case"Worker":t=`${cf(Xe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xr}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hf(this),this.idTokenSubscription=new hf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nn(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oo(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ut(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nn(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function va(n){return ut(n)}class hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=pv(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,t){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function Yw(n,e){return Is(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(n,e){return Ur(n,"POST","/v1/accounts:signInWithPassword",Br(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(n,e){return Ur(n,"POST","/v1/accounts:signInWithEmailLink",Br(n,e))}async function Jw(n,e){return Ur(n,"POST","/v1/accounts:signInWithEmailLink",Br(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends mc{constructor(e,t,i,s=null){super("password",i);this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Dr(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Dr(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Qw(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xw(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Yw(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Jw(e,{idToken:t,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(n,e){return Ur(n,"POST","/v1/accounts:signInWithIdp",Br(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="http://localhost";class bi extends mc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=fc(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new bi(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Gi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Gi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gi(e,t)}buildRequest(){const e={requestUri:Zw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tT(n){const e=Us(Ws(n)).link,t=e?Us(Ws(e)).deep_link_id:null,i=Us(Ws(n)).deep_link_id;return(i?Us(Ws(i)).link:null)||i||t||e||n}class yc{constructor(e){var t,i,s,r,o,a;const l=Us(Ws(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,c=(i=l.oobCode)!==null&&i!==void 0?i:null,h=eT((s=l.mode)!==null&&s!==void 0?s:null);K(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=tT(e);try{return new yc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,t){return Dr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=yc.parseLink(t);return K(i,"argument-error"),Dr._fromEmailAndCode(e,i.code,i.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends ng{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Wr{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Wr{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return bi._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Tn.credential(t,i)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Wr{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Wr{constructor(){super("twitter.com")}static credential(e,t){return bi._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return In.credential(t,i)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(n,e){return Ur(n,"POST","/v1/accounts:signUp",Br(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await _i._fromIdTokenResponse(e,i,s),o=ff(i);return new Ii({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ff(i);return new Ii({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ff(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends vs{constructor(e,t,i,s){var r;super(t.code,t.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Fo(e,t,i,s)}}function ig(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(n,r,e,i):r})}async function iT(n,e,t=!1){const i=await as(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ii._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await as(n,ig(i,s,e,n),t);K(r.idToken,i,"internal-error");const o=_c(r.idToken);K(o,i,"internal-error");const{sub:a}=o;return K(n.uid===a,i,"user-mismatch"),Ii._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Mt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e,t=!1){const i="signIn",s=await ig(n,i,e),r=await Ii._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function rT(n,e){return sg(va(n),e)}async function tA(n,e,t){const i=va(n),s=await nT(i,{returnSecureToken:!0,email:e,password:t}),r=await Ii._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function nA(n,e,t){return rT(ut(n),Ss.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(n,e){return Is(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ut(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await as(i,oT(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function sA(n,e,t,i){return ut(n).onAuthStateChanged(e,t,i)}function rA(n){return ut(n).signOut()}const Mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){const n=Xe();return gc(n)||Da(n)}const lT=1e3,uT=10;class og extends rg{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aT()&&Gw(),this.fallbackToPolling=eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);qw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uT):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},lT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}og.type="LOCAL";const cT=og;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ag.type="SESSION";const lg=ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Ca(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,r)),l=await hT(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Dc("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(c),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function dT(n){jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(){return typeof jt().WorkerGlobalScope!="undefined"&&typeof jt().importScripts=="function"}async function pT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _T(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gT(){return ug()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="firebaseLocalStorageDb",mT=1,Lo="firebaseLocalStorage",hg="fbase_key";class Hr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ea(n,e){return n.transaction([Lo],e?"readwrite":"readonly").objectStore(Lo)}function yT(){const n=indexedDB.deleteDatabase(cg);return new Hr(n).toPromise()}function Fl(){const n=indexedDB.open(cg,mT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Lo,{keyPath:hg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Lo)?e(i):(i.close(),await yT(),e(await Fl()))})})}async function df(n,e,t){const i=Ea(n,!0).put({[hg]:e,value:t});return new Hr(i).toPromise()}async function DT(n,e){const t=Ea(n,!1).get(e),i=await new Hr(t).toPromise();return i===void 0?null:i.value}function pf(n,e){const t=Ea(n,!0).delete(e);return new Hr(t).toPromise()}const vT=800,CT=3;class fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>CT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(gT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await pT(),!this.activeServiceWorker)return;this.sender=new fT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_T()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fl();return await df(e,Mo,"1"),await pf(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>df(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>DT(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ea(s,!1).getAll();return new Hr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fg.type="LOCAL";const ET=fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function TT(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=zt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",wT().appendChild(i)})}function bT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Lr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n,e){return e?nn(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends mc{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ST(n){return sg(n.auth,new vc(n),n.bypassAuthState)}function AT(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),sT(t,new vc(n),n.bypassAuthState)}async function RT(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),iT(t,new vc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ST;case"linkViaPopup":case"linkViaRedirect":return RT;case"reauthViaPopup":case"reauthViaRedirect":return AT;default:Mt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new Lr(2e3,1e4);class Bi extends dg{constructor(e,t,i,s,r){super(e,t,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,xT.get())};e()}}Bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="pendingRedirect",za=new Map;class kT extends dg{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const i=await NT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NT(n,e){const t=FT(e),i=OT(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function OT(n){return nn(n._redirectPersistence)}function FT(n){return ro(PT,n.config.apiKey,n.name)}async function MT(n,e,t=!1){const i=va(n),s=IT(i,e),o=await new kT(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=10*60*1e3;class BT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!pg(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(zt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LT&&this.cachedEventUids.clear(),this.cachedEventUids.has(_f(e))}saveEventToCache(e){this.cachedEventUids.add(_f(e)),this.lastProcessedEventTime=Date.now()}}function _f(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(n,e={}){return Is(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VT=/^https?/;async function $T(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WT(n);for(const t of e)try{if(zT(t))return}catch{}Mt(n,"unauthorized-domain")}function zT(n){const e=Ol(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!VT.test(t))return!1;if(HT.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new Lr(3e4,6e4);function gf(){const n=jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qT(n){return new Promise((e,t)=>{var i,s,r;function o(){gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gf(),t(zt(n,"network-request-failed"))},timeout:jT.get()})}if(!((s=(i=jt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=jt().gapi)===null||r===void 0)&&r.load)o();else{const a=bT("iframefcb");return jt()[a]=()=>{gapi.load?o():t(zt(n,"network-request-failed"))},TT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw oo=null,e})}let oo=null;function GT(n){return oo=oo||qT(n),oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=new Lr(5e3,15e3),YT="__/auth/iframe",QT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZT(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?pc(e,QT):`https://${n.config.authDomain}/${YT}`,i={apiKey:e.apiKey,appName:n.name,v:xr},s=JT.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Cs(i).slice(1)}`}async function eb(n){const e=await GT(n),t=jt().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:ZT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=zt(n,"network-request-failed"),a=jt().setTimeout(()=>{r(o)},KT.get());function l(){jt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nb=500,ib=600,sb="_blank",rb="http://localhost";class mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ob(n,e,t,i=nb,s=ib){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tb),{width:i.toString(),height:s.toString(),top:r,left:o}),u=Xe().toLowerCase();t&&(a=Y_(u)?sb:t),K_(u)&&(e=e||rb,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[d,_])=>`${f}${d}=${_},`,"");if(jw(u)&&a!=="_self")return ab(e||"",a),new mf(null);const h=window.open(e||"",a,c);K(h,n,"popup-blocked");try{h.focus()}catch{}return new mf(h)}function ab(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="__/auth/handler",ub="emulator/auth/handler";function yf(n,e,t,i,s,r){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xr,eventId:s};if(e instanceof ng){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(r||{}))o[l]=u}if(e instanceof Wr){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cb(n)}?${Cs(a).slice(1)}`}function cb({config:n}){return n.emulator?pc(n,ub):`https://${n.authDomain}/${lb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lg,this._completeRedirectFn=MT}async _openPopup(e,t,i,s){var r;un((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=yf(e,t,i,Ol(),s);return ob(e,o,Dc())}async _openRedirect(e,t,i,s){return await this._originValidation(e),dT(yf(e,t,i,Ol(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(un(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await eb(e),i=new BT(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ja,{type:ja},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ja];o!==void 0&&t(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$T(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eg()||gc()||Da()}}const fb=hb;var Df="@firebase/auth",vf="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _b(n){ts(new Di("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{K(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),K(!(r!=null&&r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tg(n)},l=new Kw(o,a);return Aw(l,t),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ts(new Di("auth-internal",e=>{const t=va(e.getProvider("auth").getImmediate());return(i=>new db(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Df,vf,pb(n)),On(Df,vf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n=wp()){const e=Ru(n,"auth");return e.isInitialized()?e.getImmediate():Sw(n,{popupRedirectResolver:fb,persistence:[ET,cT,lg]})}_b("Browser");/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _g=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",As=n=>_g?Symbol(n):"_vr_"+n,gb=As("rvlm"),Cf=As("rvd"),Cc=As("r"),gg=As("rl"),Ml=As("rvl"),Mi=typeof window!="undefined";function mb(n){return n.__esModule||_g&&n[Symbol.toStringTag]==="Module"}const me=Object.assign;function qa(n,e){const t={};for(const i in e){const s=e[i];t[i]=Array.isArray(s)?s.map(n):n(s)}return t}const Zs=()=>{},yb=/\/$/,Db=n=>n.replace(yb,"");function Ga(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),s=n(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=wb(i!=null?i:e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function vb(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ef(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Cb(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&ls(e.matched[i],t.matched[s])&&mg(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ls(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function mg(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Eb(n[t],e[t]))return!1;return!0}function Eb(n,e){return Array.isArray(n)?wf(n,e):Array.isArray(e)?wf(e,n):n===e}function wf(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function wb(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let s=t.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],!(s===1||o==="."))if(o==="..")s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var vr;(function(n){n.pop="pop",n.push="push"})(vr||(vr={}));var er;(function(n){n.back="back",n.forward="forward",n.unknown=""})(er||(er={}));function Tb(n){if(!n)if(Mi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Db(n)}const bb=/^[^#]+#/;function Ib(n,e){return n.replace(bb,"#")+e}function Sb(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ab(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Sb(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tf(n,e){return(history.state?history.state.position-e:-1)+n}const Ll=new Map;function Rb(n,e){Ll.set(n,e)}function xb(n){const e=Ll.get(n);return Ll.delete(n),e}let Pb=()=>location.protocol+"//"+location.host;function yg(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ef(l,"")}return Ef(t,n)+i+s}function kb(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=yg(n,location),_=t.value,p=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}m=p?f.position-p.position:0}else i(d);s.forEach(D=>{D(t.value,_,{delta:m,type:vr.pop,direction:m?m>0?er.forward:er.back:er.unknown})})};function l(){o=t.value}function u(f){s.push(f);const d=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(d),d}function c(){const{history:f}=window;!f.state||f.replaceState(me({},f.state,{scroll:wa()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:h}}function bf(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?wa():null}}function Nb(n){const{history:e,location:t}=window,i={value:yg(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:Pb()+n+l;try{e[c?"replaceState":"pushState"](u,"",f),s.value=u}catch(d){console.error(d),t[c?"replace":"assign"](f)}}function o(l,u){const c=me({},e.state,bf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});r(l,c,!0),i.value=l}function a(l,u){const c=me({},s.value,e.state,{forward:l,scroll:wa()});r(c.current,c,!0);const h=me({},bf(i.value,l,null),{position:c.position+1},u);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Ob(n){n=Tb(n);const e=Nb(n),t=kb(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=me({location:"",base:n,go:i,createHref:Ib.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function aA(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Ob(n)}function Fb(n){return typeof n=="string"||n&&typeof n=="object"}function Dg(n){return typeof n=="string"||typeof n=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vg=As("nf");var If;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(If||(If={}));function us(n,e){return me(new Error,{type:n,[vg]:!0},e)}function yn(n,e){return n instanceof Error&&vg in n&&(e==null||!!(n.type&e))}const Sf="[^/]+?",Mb={sensitive:!1,strict:!1,start:!0,end:!0},Lb=/[.+*?^${}()[\]/\\]/g;function Bb(n,e){const t=me({},Mb,e),i=[];let s=t.start?"^":"";const r=[];for(const u of n){const c=u.length?[]:[90];t.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const f=u[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Lb,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:p,optional:m,regexp:D}=f;r.push({name:_,repeatable:p,optional:m});const C=D||Sf;if(C!==Sf){d+=10;try{new RegExp(`(${C})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+T.message)}}let E=p?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(E=m&&u.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,d+=20,m&&(d+=-8),p&&(d+=-20),C===".*"&&(d+=-50)}c.push(d)}i.push(c)}if(t.strict&&t.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let f=1;f<c.length;f++){const d=c[f]||"",_=r[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function l(u){let c="",h=!1;for(const f of n){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const d of f)if(d.type===0)c+=d.value;else if(d.type===1){const{value:_,repeatable:p,optional:m}=d,D=_ in u?u[_]:"";if(Array.isArray(D)&&!p)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray(D)?D.join("/"):D;if(!C)if(m)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);c+=C}}return c}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Ub(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Wb(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Ub(i[t],s[t]);if(r)return r;t++}return s.length-i.length}const Hb={type:0,value:""},Vb=/[a-zA-Z0-9_]/;function $b(n){if(!n)return[[]];if(n==="/")return[[Hb]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${u}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,u="",c="";function h(){!u||(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:Vb.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=3:c+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function zb(n,e,t){const i=Bb($b(n.path),t),s=me(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function jb(n,e){const t=[],i=new Map;e=Rf({strict:!1,end:!0,sensitive:!1},e);function s(c){return i.get(c)}function r(c,h,f){const d=!f,_=Gb(c);_.aliasOf=f&&f.record;const p=Rf(e,c),m=[_];if("alias"in c){const E=typeof c.alias=="string"?[c.alias]:c.alias;for(const T of E)m.push(me({},_,{components:f?f.record.components:_.components,path:T,aliasOf:f?f.record:_}))}let D,C;for(const E of m){const{path:T}=E;if(h&&T[0]!=="/"){const w=h.record.path,b=w[w.length-1]==="/"?"":"/";E.path=h.record.path+(T&&b+T)}if(D=zb(E,h,p),f?f.alias.push(D):(C=C||D,C!==D&&C.alias.push(D),d&&c.name&&!Af(D)&&o(c.name)),"children"in _){const w=_.children;for(let b=0;b<w.length;b++)r(w[b],D,f&&f.children[b])}f=f||D,l(D)}return C?()=>{o(C)}:Zs}function o(c){if(Dg(c)){const h=i.get(c);h&&(i.delete(c),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(c);h>-1&&(t.splice(h,1),c.record.name&&i.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return t}function l(c){let h=0;for(;h<t.length&&Wb(c,t[h])>=0&&(c.record.path!==t[h].record.path||!Cg(c,t[h]));)h++;t.splice(h,0,c),c.record.name&&!Af(c)&&i.set(c.record.name,c)}function u(c,h){let f,d={},_,p;if("name"in c&&c.name){if(f=i.get(c.name),!f)throw us(1,{location:c});p=f.record.name,d=me(qb(h.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),c.params),_=f.stringify(d)}else if("path"in c)_=c.path,f=t.find(C=>C.re.test(_)),f&&(d=f.parse(_),p=f.record.name);else{if(f=h.name?i.get(h.name):t.find(C=>C.re.test(h.path)),!f)throw us(1,{location:c,currentLocation:h});p=f.record.name,d=me({},h.params,c.params),_=f.stringify(d)}const m=[];let D=f;for(;D;)m.unshift(D.record),D=D.parent;return{name:p,path:_,params:d,matched:m,meta:Yb(m)}}return n.forEach(c=>r(c)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function qb(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Gb(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Kb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function Kb(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Af(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Yb(n){return n.reduce((e,t)=>me(e,t.meta),{})}function Rf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Cg(n,e){return e.children.some(t=>t===n||Cg(n,t))}const Eg=/#/g,Qb=/&/g,Xb=/\//g,Jb=/=/g,Zb=/\?/g,wg=/\+/g,eI=/%5B/g,tI=/%5D/g,Tg=/%5E/g,nI=/%60/g,bg=/%7B/g,iI=/%7C/g,Ig=/%7D/g,sI=/%20/g;function Ec(n){return encodeURI(""+n).replace(iI,"|").replace(eI,"[").replace(tI,"]")}function rI(n){return Ec(n).replace(bg,"{").replace(Ig,"}").replace(Tg,"^")}function Bl(n){return Ec(n).replace(wg,"%2B").replace(sI,"+").replace(Eg,"%23").replace(Qb,"%26").replace(nI,"`").replace(bg,"{").replace(Ig,"}").replace(Tg,"^")}function oI(n){return Bl(n).replace(Jb,"%3D")}function aI(n){return Ec(n).replace(Eg,"%23").replace(Zb,"%3F")}function lI(n){return n==null?"":aI(n).replace(Xb,"%2F")}function Bo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function uI(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(wg," "),o=r.indexOf("="),a=Bo(o<0?r:r.slice(0,o)),l=o<0?null:Bo(r.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function xf(n){let e="";for(let t in n){const i=n[t];if(t=oI(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(r=>r&&Bl(r)):[i&&Bl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function cI(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function Fs(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Cn(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(us(4,{from:t,to:e})):h instanceof Error?a(h):Fb(h)?a(us(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},u=n.call(i&&i.instances[s],e,t,l);let c=Promise.resolve(u);n.length<3&&(c=c.then(l)),c.catch(h=>a(h))})}function Ka(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(hI(a)){const u=(a.__vccOpts||a)[e];u&&s.push(Cn(u,t,i,r,o))}else{let l=a();s.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const c=mb(u)?u.default:u;r.components[o]=c;const f=(c.__vccOpts||c)[e];return f&&Cn(f,t,i,r,o)()}))}}return s}function hI(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Pf(n){const e=Nn(Cc),t=Nn(gg),i=Ht(()=>e.resolve(zs(n.to))),s=Ht(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],h=t.matched;if(!c||!h.length)return-1;const f=h.findIndex(ls.bind(null,c));if(f>-1)return f;const d=kf(l[u-2]);return u>1&&kf(c)===d&&h[h.length-1].path!==d?h.findIndex(ls.bind(null,l[u-2])):f}),r=Ht(()=>s.value>-1&&_I(t.params,i.value.params)),o=Ht(()=>s.value>-1&&s.value===t.matched.length-1&&mg(t.params,i.value.params));function a(l={}){return pI(l)?e[zs(n.replace)?"replace":"push"](zs(n.to)).catch(Zs):Promise.resolve()}return{route:i,href:Ht(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const fI=Nd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pf,setup(n,{slots:e}){const t=Sr(Pf(n)),{options:i}=Nn(Cc),s=Ht(()=>({[Nf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Nf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:yu("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),dI=fI;function pI(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function _I(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function kf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Nf=(n,e,t)=>n!=null?n:e!=null?e:t,gI=Nd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(n,{attrs:e,slots:t}){const i=Nn(Ml),s=Ht(()=>n.route||i.value),r=Nn(Cf,0),o=Ht(()=>s.value.matched[r]);eo(Cf,r+1),eo(gb,o),eo(Ml,s);const a=dy();return to(()=>[a.value,o.value,n.name],([l,u,c],[h,f,d])=>{u&&(u.instances[c]=l,f&&f!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!ls(u,f)||!h)&&(u.enterCallbacks[c]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=s.value,u=o.value,c=u&&u.components[n.name],h=n.name;if(!c)return Of(t.default,{Component:c,route:l});const f=u.props[n.name],d=f?f===!0?l.params:typeof f=="function"?f(l):f:null,p=yu(c,me({},d,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Of(t.default,{Component:p,route:l})||p}}});function Of(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const mI=gI;function lA(n){const e=jb(n.routes,n),t=n.parseQuery||uI,i=n.stringifyQuery||xf,s=n.history,r=Fs(),o=Fs(),a=Fs(),l=py(mn);let u=mn;Mi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=qa.bind(null,A=>""+A),h=qa.bind(null,lI),f=qa.bind(null,Bo);function d(A,H){let L,V;return Dg(A)?(L=e.getRecordMatcher(A),V=H):V=A,e.addRoute(V,L)}function _(A){const H=e.getRecordMatcher(A);H&&e.removeRoute(H)}function p(){return e.getRoutes().map(A=>A.record)}function m(A){return!!e.getRecordMatcher(A)}function D(A,H){if(H=me({},H||l.value),typeof A=="string"){const ee=Ga(t,A,H.path),g=e.resolve({path:ee.path},H),y=s.createHref(ee.fullPath);return me(ee,g,{params:f(g.params),hash:Bo(ee.hash),redirectedFrom:void 0,href:y})}let L;if("path"in A)L=me({},A,{path:Ga(t,A.path,H.path).path});else{const ee=me({},A.params);for(const g in ee)ee[g]==null&&delete ee[g];L=me({},A,{params:h(A.params)}),H.params=h(H.params)}const V=e.resolve(L,H),pe=A.hash||"";V.params=c(f(V.params));const Ee=vb(i,me({},A,{hash:rI(pe),path:V.path})),re=s.createHref(Ee);return me({fullPath:Ee,hash:pe,query:i===xf?cI(A.query):A.query||{}},V,{redirectedFrom:void 0,href:re})}function C(A){return typeof A=="string"?Ga(t,A,l.value.path):me({},A)}function E(A,H){if(u!==A)return us(8,{from:H,to:A})}function T(A){return I(A)}function w(A){return T(me(C(A),{replace:!0}))}function b(A){const H=A.matched[A.matched.length-1];if(H&&H.redirect){const{redirect:L}=H;let V=typeof L=="function"?L(A):L;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=C(V):{path:V},V.params={}),me({query:A.query,hash:A.hash,params:A.params},V)}}function I(A,H){const L=u=D(A),V=l.value,pe=A.state,Ee=A.force,re=A.replace===!0,ee=b(L);if(ee)return I(me(C(ee),{state:pe,force:Ee,replace:re}),H||L);const g=L;g.redirectedFrom=H;let y;return!Ee&&Cb(i,V,L)&&(y=us(16,{to:g,from:V}),Dt(V,V,!0,!1)),(y?Promise.resolve(y):S(g,V)).catch(v=>yn(v)?yn(v,2)?v:Pe(v):Z(v,g,V)).then(v=>{if(v){if(yn(v,2))return I(me(C(v.to),{state:pe,force:Ee,replace:re}),H||g)}else v=Y(g,V,!0,re,pe);return $(g,V,v),v})}function k(A,H){const L=E(A,H);return L?Promise.reject(L):Promise.resolve()}function S(A,H){let L;const[V,pe,Ee]=yI(A,H);L=Ka(V.reverse(),"beforeRouteLeave",A,H);for(const ee of V)ee.leaveGuards.forEach(g=>{L.push(Cn(g,A,H))});const re=k.bind(null,A,H);return L.push(re),ki(L).then(()=>{L=[];for(const ee of r.list())L.push(Cn(ee,A,H));return L.push(re),ki(L)}).then(()=>{L=Ka(pe,"beforeRouteUpdate",A,H);for(const ee of pe)ee.updateGuards.forEach(g=>{L.push(Cn(g,A,H))});return L.push(re),ki(L)}).then(()=>{L=[];for(const ee of A.matched)if(ee.beforeEnter&&!H.matched.includes(ee))if(Array.isArray(ee.beforeEnter))for(const g of ee.beforeEnter)L.push(Cn(g,A,H));else L.push(Cn(ee.beforeEnter,A,H));return L.push(re),ki(L)}).then(()=>(A.matched.forEach(ee=>ee.enterCallbacks={}),L=Ka(Ee,"beforeRouteEnter",A,H),L.push(re),ki(L))).then(()=>{L=[];for(const ee of o.list())L.push(Cn(ee,A,H));return L.push(re),ki(L)}).catch(ee=>yn(ee,8)?ee:Promise.reject(ee))}function $(A,H,L){for(const V of a.list())V(A,H,L)}function Y(A,H,L,V,pe){const Ee=E(A,H);if(Ee)return Ee;const re=H===mn,ee=Mi?history.state:{};L&&(V||re?s.replace(A.fullPath,me({scroll:re&&ee&&ee.scroll},pe)):s.push(A.fullPath,pe)),l.value=A,Dt(A,H,L,re),Pe()}let B;function J(){B=s.listen((A,H,L)=>{const V=D(A),pe=b(V);if(pe){I(me(pe,{replace:!0}),V).catch(Zs);return}u=V;const Ee=l.value;Mi&&Rb(Tf(Ee.fullPath,L.delta),wa()),S(V,Ee).catch(re=>yn(re,12)?re:yn(re,2)?(I(re.to,V).then(ee=>{yn(ee,20)&&!L.delta&&L.type===vr.pop&&s.go(-1,!1)}).catch(Zs),Promise.reject()):(L.delta&&s.go(-L.delta,!1),Z(re,V,Ee))).then(re=>{re=re||Y(V,Ee,!1),re&&(L.delta?s.go(-L.delta,!1):L.type===vr.pop&&yn(re,20)&&s.go(-1,!1)),$(V,Ee,re)}).catch(Zs)})}let ne=Fs(),de=Fs(),Q;function Z(A,H,L){Pe(A);const V=de.list();return V.length?V.forEach(pe=>pe(A,H,L)):console.error(A),Promise.reject(A)}function ae(){return Q&&l.value!==mn?Promise.resolve():new Promise((A,H)=>{ne.add([A,H])})}function Pe(A){return Q||(Q=!A,J(),ne.list().forEach(([H,L])=>A?L(A):H()),ne.reset()),A}function Dt(A,H,L,V){const{scrollBehavior:pe}=n;if(!Mi||!pe)return Promise.resolve();const Ee=!L&&xb(Tf(A.fullPath,0))||(V||!L)&&history.state&&history.state.scroll||null;return Cd().then(()=>pe(A,H,Ee)).then(re=>re&&Ab(re)).catch(re=>Z(re,A,H))}const ze=A=>s.go(A);let ct;const Ae=new Set;return{currentRoute:l,addRoute:d,removeRoute:_,hasRoute:m,getRoutes:p,resolve:D,options:n,push:T,replace:w,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:ae,install(A){const H=this;A.component("RouterLink",dI),A.component("RouterView",mI),A.config.globalProperties.$router=H,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>zs(l)}),Mi&&!ct&&l.value===mn&&(ct=!0,T(s.location).catch(pe=>{}));const L={};for(const pe in mn)L[pe]=Ht(()=>l.value[pe]);A.provide(Cc,H),A.provide(gg,Sr(L)),A.provide(Ml,l);const V=A.unmount;Ae.add(A),A.unmount=function(){Ae.delete(A),Ae.size<1&&(u=mn,B&&B(),l.value=mn,ct=!1,Q=!1),V()}}}}function ki(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function yI(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(u=>ls(u,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(u=>ls(u,l))||s.push(l))}return[t,i,s]}function Jt(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Sg(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cs={duration:.5,overwrite:!1,delay:0},wc,wt=1e8,ve=1/wt,Ul=Math.PI*2,DI=Ul/4,vI=0,Ag=Math.sqrt,CI=Math.cos,EI=Math.sin,$e=function(e){return typeof e=="string"},We=function(e){return typeof e=="function"},cn=function(e){return typeof e=="number"},Tc=function(e){return typeof e=="undefined"},hn=function(e){return typeof e=="object"},rt=function(e){return e!==!1},Rg=function(){return typeof window!="undefined"},Qr=function(e){return We(e)||$e(e)},xg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qe=Array.isArray,Wl=/(?:-?\.?\d|\.)+/gi,Pg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ui=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ya=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kg=/[+-]=-?[.\d]+/,Ng=/[^,'"\[\]\s]+/gi,wI=/[\d.+\-=]+(?:e[-+]\d*)*/i,Se,Ut,Hl,bc,yt={},Uo={},Og,Fg=function(e){return(Uo=hs(e,yt))&&Gt},Ic=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wo=function(e,t){return!t&&console.warn(e)},Mg=function(e,t){return e&&(yt[e]=t)&&Uo&&(Uo[e]=t)||yt},Cr=function(){return 0},Sc={},Ln=[],Vl={},Lg,ft={},Qa={},Ff=30,ao=[],Ac="",Rc=function(e){var t=e[0],i,s;if(hn(t)||We(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=ao.length;s--&&!ao[s].targetTest(t););i=ao[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new rm(e[s],i)))||e.splice(s,1);return e},gi=function(e){return e._gsap||Rc(Tt(e))[0]._gsap},Bg=function(e,t,i){return(i=e[t])&&We(i)?e[t]():Tc(i)&&e.getAttribute&&e.getAttribute(t)||i},ot=function(e,t){return(e=e.split(",")).forEach(t)||e},ke=function(e){return Math.round(e*1e5)/1e5||0},Ke=function(e){return Math.round(e*1e7)/1e7||0},TI=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Ho=function(){var e=Ln.length,t=Ln.slice(0),i,s;for(Vl={},Ln.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Ug=function(e,t,i,s){Ln.length&&Ho(),e.render(t,i,s),Ln.length&&Ho()},Wg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ng).length<2?t:$e(e)?e.trim():e},Hg=function(e){return e},St=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},bI=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},hs=function(e,t){for(var i in t)e[i]=t[i];return e},Mf=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=hn(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Vo=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},tr=function(e){var t=e.parent||Se,i=e.keyframes?bI(Qe(e.keyframes)):St;if(rt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},II=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},SI=function(e,t,i,s,r){i===void 0&&(i="_first"),s===void 0&&(s="_last");var o=e[s],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},Ta=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},rn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},mi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},AI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},RI=function n(e){return!e||e._ts&&n(e.parent)},Lf=function(e){return e._repeat?fs(e._tTime,e=e.duration()+e._rDelay)*e:0},fs=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},$o=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ba=function(e){return e._end=Ke(e._start+(e._tDur/Math.abs(e._ts||e._rts||ve)||0))},Vg=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ke(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ba(e),i._dirty||mi(i,e)),e},$g=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=$o(e.rawTime(),t),(!t._dur||Vr(0,t.totalDuration(),i)-t._tTime>ve)&&t.render(i,!0)),mi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ve}},Vt=function(e,t,i,s){return t.parent&&rn(t),t._start=Ke((cn(i)?i:i||e!==Se?Ct(e,i,t):e._time)+t._delay),t._end=Ke(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),SI(e,t,"_first","_last",e._sort?"_start":0),$l(t)||(e._recent=t),s||$g(e,t),e},zg=function(e,t){return(yt.ScrollTrigger||Ic("scrollTrigger",t))&&yt.ScrollTrigger.create(t,e)},jg=function(e,t,i,s){if(JI(e,t),!e._initted)return 1;if(!i&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Lg!==Et.frame)return Ln.push(e),e._lazy=[t,s],1},xI=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},$l=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},PI=function(e,t,i,s){var r=e.ratio,o=t<0||!t&&(!e._start&&xI(e)&&!(!e._initted&&$l(e))||(e._ts<0||e._dp._ts<0)&&!$l(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=Vr(0,e._tDur,t),c=fs(l,a),e._yoyo&&c&1&&(o=1-o),c!==fs(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||s||e._zTime===ve||!t&&e._zTime){if(!e._initted&&jg(e,t,s,i))return;for(h=e._zTime,e._zTime=t||(i?ve:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!i&&bt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&bt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&rn(e,1),i||(bt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kI=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},ds=function(e,t,i,s){var r=e._repeat,o=Ke(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Ke(o*(r+1)+e._rDelay*r):o,a>0&&!s?Vg(e,e._tTime=e._tDur*a):e.parent&&ba(e),i||mi(e.parent,e),e},Bf=function(e){return e instanceof nt?mi(e):ds(e,e._dur)},NI={_start:0,endTime:Cr,totalDuration:Cr},Ct=function n(e,t,i){var s=e.labels,r=e._recent||NI,o=e.duration()>=wt?r.endTime(!1):e._dur,a,l,u;return $e(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?r:i).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Qe(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},nr=function(e,t,i){var s=cn(t[1]),r=(s?2:1)+(e<2?0:1),o=t[r],a,l;if(s&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=rt(l.vars.inherit)&&l.parent;o.immediateRender=rt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Le(t[0],o,t[r+1])},Gn=function(e,t){return e||e===0?t(e):t},Vr=function(e,t,i){return i<e?e:i>t?t:i},tt=function(e,t){return!$e(e)||!(t=wI.exec(e))?"":e.substr(t.index+t[0].length)},OI=function(e,t,i){return Gn(i,function(s){return Vr(e,t,s)})},zl=[].slice,qg=function(e,t){return e&&hn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hn(e[0]))&&!e.nodeType&&e!==Ut},FI=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var r;return $e(s)&&!t||qg(s,1)?(r=i).push.apply(r,Tt(s)):i.push(s)})||i},Tt=function(e,t,i){return $e(e)&&!i&&(Hl||!ps())?zl.call((t||bc).querySelectorAll(e),0):Qe(e)?FI(e,i):qg(e)?zl.call(e,0):e?[e]:[]},MI=function(e){return e=Tt(e)[0]||Wo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Tt(t,i.querySelectorAll?i:i===e?Wo("Invalid scope")||bc.createElement("div"):e)}},Gg=function(e){return e.sort(function(){return .5-Math.random()})},Kg=function(e){if(We(e))return e;var t=hn(e)?e:{each:e},i=yi(t.ease),s=t.from||0,r=parseFloat(t.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,u=t.axis,c=s,h=s;return $e(s)?c=h={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(c=s[0],h=s[1]),function(f,d,_){var p=(_||t).length,m=o[p],D,C,E,T,w,b,I,k,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,wt])[1],!S){for(I=-wt;I<(I=_[S++].getBoundingClientRect().left)&&S<p;);S--}for(m=o[p]=[],D=l?Math.min(S,p)*c-.5:s%S,C=S===wt?0:l?p*h/S-.5:s/S|0,I=0,k=wt,b=0;b<p;b++)E=b%S-D,T=C-(b/S|0),m[b]=w=u?Math.abs(u==="y"?T:E):Ag(E*E+T*T),w>I&&(I=w),w<k&&(k=w);s==="random"&&Gg(m),m.max=I-k,m.min=k,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(S>p?p-1:u?u==="y"?p/S:S:Math.max(S,p/S))||0)*(s==="edges"?-1:1),m.b=p<0?r-p:r,m.u=tt(t.amount||t.each)||0,i=i&&p<0?nm(i):i}return p=(m[f]-m.min)/m.max||0,Ke(m.b+(i?i(p):p)*m.v)+m.u}},jl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Math.round(parseFloat(i)/e)*e*t;return(s-s%1)/t+(cn(i)?0:tt(i))}},Yg=function(e,t){var i=Qe(e),s,r;return!i&&hn(e)&&(s=i=e.radius||wt,e.values?(e=Tt(e.values),(r=!cn(e[0]))&&(s*=s)):e=jl(e.increment)),Gn(t,i?We(e)?function(o){return r=e(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),u=wt,c=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!s||u<=s?e[c]:o,r||c===o||cn(o)?c:c+tt(o)}:jl(e))},Qg=function(e,t,i,s){return Gn(Qe(e)?!t:i===!0?!!(i=0):!s,function(){return Qe(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},LI=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(r,o){return o(r)},s)}},BI=function(e,t){return function(i){return e(parseFloat(i))+(t||tt(i))}},UI=function(e,t,i){return Jg(e,t,0,1,i)},Xg=function(e,t,i){return Gn(i,function(s){return e[~~t(s)]})},WI=function n(e,t,i){var s=t-e;return Qe(e)?Xg(e,n(0,e.length),t):Gn(i,function(r){return(s+(r-e)%s)%s+e})},HI=function n(e,t,i){var s=t-e,r=s*2;return Qe(e)?Xg(e,n(0,e.length-1),t):Gn(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>s?r-o:o)})},Er=function(e){for(var t=0,i="",s,r,o,a;~(s=e.indexOf("random(",t));)o=e.indexOf(")",s),a=e.charAt(s+7)==="[",r=e.substr(s+7,o-s-7).match(a?Ng:Wl),i+=e.substr(t,s-t)+Qg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Jg=function(e,t,i,s,r){var o=t-e,a=s-i;return Gn(r,function(l){return i+((l-e)/o*a||0)})},VI=function n(e,t,i,s){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=$e(e),a={},l,u,c,h,f;if(i===!0&&(s=1)&&(i=null),o)e={p:e},t={p:t};else if(Qe(e)&&!Qe(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,r=function(_){_*=h;var p=Math.min(f,~~_);return c[p](_-p)},i=t}else s||(e=hs(Qe(e)?[]:{},e));if(!c){for(l in t)xc.call(a,e,l,"get",t[l]);r=function(_){return Nc(_,a)||(o?e.p:e)}}}return Gn(i,r)},Uf=function(e,t,i){var s=e.labels,r=wt,o,a,l;for(o in s)a=s[o]-t,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},bt=function(e,t,i){var s=e.vars,r=s[t],o,a;if(!!r)return o=s[t+"Params"],a=s.callbackScope||e,i&&Ln.length&&Ho(),o?r.apply(a,o):r.call(a)},Hs=function(e){return rn(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&bt(e,"onInterrupt"),e},Wi,$I=function(e){e=!e.name&&e.default||e;var t=e.name,i=We(e),s=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Cr,render:Nc,add:xc,kill:rS,modifier:sS,rawVars:0},o={targetTest:0,get:0,getSetter:kc,aliases:{},register:0};if(ps(),e!==s){if(ft[t])return;St(s,St(Vo(e,r),o)),hs(s.prototype,hs(r,Vo(e,o))),ft[s.prop=t]=s,e.targetTest&&(ao.push(s),Sc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Mg(t,s),e.register&&e.register(Gt,s,at)},ge=255,Vs={aqua:[0,ge,ge],lime:[0,ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ge],navy:[0,0,128],white:[ge,ge,ge],olive:[128,128,0],yellow:[ge,ge,0],orange:[ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ge,0,0],pink:[ge,192,203],cyan:[0,ge,ge],transparent:[ge,ge,ge,0]},Xa=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ge+.5|0},Zg=function(e,t,i){var s=e?cn(e)?[e>>16,e>>8&ge,e&ge]:0:Vs.black,r,o,a,l,u,c,h,f,d,_;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Vs[e])s=Vs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&ge,s&ge,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&ge,e&ge]}else if(e.substr(0,3)==="hsl"){if(s=_=e.match(Wl),!t)l=+s[0]%360/360,u=+s[1]/100,c=+s[2]/100,o=c<=.5?c*(u+1):c+u-c*u,r=c*2-o,s.length>3&&(s[3]*=1),s[0]=Xa(l+1/3,r,o),s[1]=Xa(l,r,o),s[2]=Xa(l-1/3,r,o);else if(~e.indexOf("="))return s=e.match(Pg),i&&s.length<4&&(s[3]=1),s}else s=e.match(Wl)||Vs.transparent;s=s.map(Number)}return t&&!_&&(r=s[0]/ge,o=s[1]/ge,a=s[2]/ge,h=Math.max(r,o,a),f=Math.min(r,o,a),c=(h+f)/2,h===f?l=u=0:(d=h-f,u=c>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),s[0]=~~(l+.5),s[1]=~~(u*100+.5),s[2]=~~(c*100+.5)),i&&s.length<4&&(s[3]=1),s},em=function(e){var t=[],i=[],s=-1;return e.split(Bn).forEach(function(r){var o=r.match(Ui)||[];t.push.apply(t,o),i.push(s+=o.length+1)}),t.c=i,t},Wf=function(e,t,i){var s="",r=(e+s).match(Bn),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!r)return e;if(r=r.map(function(f){return(f=Zg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=em(e),l=i.c,l.join(s)!==c.c.join(s)))for(u=e.replace(Bn,"1").split(Ui),h=u.length-1;a<h;a++)s+=u[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:i).shift());if(!u)for(u=e.split(Bn),h=u.length-1;a<h;a++)s+=u[a]+r[a];return s+u[h]},Bn=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Vs)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),zI=/hsl[a]?\(/,tm=function(e){var t=e.join(" "),i;if(Bn.lastIndex=0,Bn.test(t))return i=zI.test(t),e[1]=Wf(e[1],i),e[0]=Wf(e[0],i,em(e[1])),!0},zo,Et=function(){var n=Date.now,e=500,t=33,i=n(),s=i,r=1e3/240,o=r,a=[],l,u,c,h,f,d,_=function p(m){var D=n()-s,C=m===!0,E,T,w,b;if(D>e&&(i+=D-t),s+=D,w=s-i,E=w-o,(E>0||C)&&(b=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=E+(E>=r?4:r-E),T=1),C||(l=u(p)),T)for(d=0;d<a.length;d++)a[d](w,f,b,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Og&&(!Hl&&Rg()&&(Ut=Hl=window,bc=Ut.document||{},yt.gsap=Gt,(Ut.gsapVersions||(Ut.gsapVersions=[])).push(Gt.version),Fg(Uo||Ut.GreenSockGlobals||!Ut.gsap&&Ut||{}),c=Ut.requestAnimationFrame),l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},zo=1,_(2))},sleep:function(){(c?Ut.cancelAnimationFrame:clearTimeout)(l),zo=0,u=Cr},lagSmoothing:function(m,D){e=m||1/ve,t=Math.min(D,e,0)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m){a.indexOf(m)<0&&a.push(m),ps()},remove:function(m,D){~(D=a.indexOf(m))&&a.splice(D,1)&&d>=D&&d--},_listeners:a},h}(),ps=function(){return!zo&&Et.wake()},le={},jI=/^[\d.\-M][\d.\-,\s]/,qI=/["']/g,GI=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],r=1,o=i.length,a,l,u;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[s]=isNaN(u)?u.replace(qI,"").trim():+u,s=l.substr(a+1).trim();return t},KI=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},YI=function(e){var t=(e+"").split("("),i=le[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[GI(t[1])]:KI(e).split(",").map(Wg)):le._CE&&jI.test(e)?le._CE("",e):i},nm=function(e){return function(t){return 1-e(1-t)}},im=function n(e,t){for(var i=e._first,s;i;)i instanceof nt?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},yi=function(e,t){return e&&(We(e)?e:le[e]||YI(e))||t},Ri=function(e,t,i,s){i===void 0&&(i=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:s},o;return ot(e,function(a){le[a]=yt[a]=r,le[o=a.toLowerCase()]=i;for(var l in r)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=r[l]}),r},sm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ja=function n(e,t,i){var s=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/Ul*(Math.asin(1/s)||0),a=function(c){return c===1?1:s*Math.pow(2,-10*c)*EI((c-o)*r)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:sm(a);return r=Ul/r,l.config=function(u,c){return n(e,u,c)},l},Za=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:sm(i);return s.config=function(r){return n(e,r)},s};ot("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ri(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;Ri("Elastic",Ja("in"),Ja("out"),Ja());(function(n,e){var t=1/e,i=2*t,s=2.5*t,r=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<s?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ri("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ri("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Ri("Circ",function(n){return-(Ag(1-n*n)-1)});Ri("Sine",function(n){return n===1?1:-CI(n*DI)+1});Ri("Back",Za("in"),Za("out"),Za());le.SteppedEase=le.steps=yt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),r=t?1:0,o=1-ve;return function(a){return((s*Vr(0,o,a)|0)+r)*i}}};cs.ease=le["quad.out"];ot("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ac+=n+","+n+"Params,"});var rm=function(e,t){this.id=vI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Bg,this.set=t?t.getSetter:kc},wr=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ds(this,+t.duration,1,1),this.data=t.data,zo||Et.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ds(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(ps(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Vg(this,i),!r._dp||r.parent||$g(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Vt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===ve||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ug(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Lf(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Lf(this),s):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,s):this._repeat?fs(this._tTime,r)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?$o(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ve?0:this._rts,AI(this.totalTime(Vr(-this._delay,this._tDur,s),!0)),ba(this),this},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ve&&(this._tTime-=ve)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Vt(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(rt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$o(s.rawTime(i),this):this._tTime:this._tTime},e.globalTime=function(i){for(var s=this,r=arguments.length?i:s.rawTime();s;)r=s._start+r/(s._ts||1),s=s._dp;return r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Bf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,Bf(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Ct(this,i),rt(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,rt(s))},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ve:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=s&&r<this.endTime(!0)-ve)},e.eventCallback=function(i,s,r){var o=this.vars;return arguments.length>1?(s?(o[i]=s,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=s)):delete o[i],this):o[i]},e.then=function(i){var s=this;return new Promise(function(r){var o=We(i)?i:Hg,a=function(){var u=s.then;s.then=null,We(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),r(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},e.kill=function(){Hs(this)},n}();St(wr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var nt=function(n){Sg(e,n);function e(i,s){var r;return i===void 0&&(i={}),r=n.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=rt(i.sortChildren),Se&&Vt(i.parent||Se,Jt(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&zg(Jt(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,o){return nr(0,arguments,this),this},t.from=function(s,r,o){return nr(1,arguments,this),this},t.fromTo=function(s,r,o,a){return nr(2,arguments,this),this},t.set=function(s,r,o){return r.duration=0,r.parent=this,tr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Le(s,r,Ct(this,o),1),this},t.call=function(s,r,o){return Vt(this,Le.delayedCall(0,s,r),o)},t.staggerTo=function(s,r,o,a,l,u,c){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Le(s,o,Ct(this,l)),this},t.staggerFrom=function(s,r,o,a,l,u,c){return o.runBackwards=1,tr(o).immediateRender=rt(o.immediateRender),this.staggerTo(s,r,o,a,l,u,c)},t.staggerFromTo=function(s,r,o,a,l,u,c,h){return a.startAt=o,tr(a).immediateRender=rt(a.immediateRender),this.staggerTo(s,r,a,l,u,c,h)},t.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=s<=0?0:Ke(s),h=this._zTime<0!=s<0&&(this._initted||!u),f,d,_,p,m,D,C,E,T,w,b,I;if(this!==Se&&c>l&&s>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,s+=this._time-a),f=c,T=this._start,E=this._ts,D=!E,h&&(u||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(b=this._yoyo,m=u+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,o);if(f=Ke(c%m),c===l?(p=this._repeat,f=u):(p=~~(c/m),p&&p===c/m&&(f=u,p--),f>u&&(f=u)),w=fs(this._tTime,m),!a&&this._tTime&&w!==p&&(w=p),b&&p&1&&(f=u-f,I=1),p!==w&&!this._lock){var k=b&&w&1,S=k===(b&&p&1);if(p<w&&(k=!k),a=k?0:u,this._lock=1,this.render(a||(I?0:Ke(p*m)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),a&&a!==this._time||D!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=k?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!D)return this;im(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=kI(this,Ke(a),Ke(f)),C&&(c-=f-(f=C._start))),this._tTime=c,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&f&&!r&&(bt(this,"onStart"),this._tTime!==c))return this;if(f>=a&&s>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&C!==d){if(d.parent!==this)return this.render(s,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!D){C=0,_&&(c+=this._zTime=-ve);break}}d=_}else{d=this._last;for(var $=s<0?s:f;d;){if(_=d._prev,(d._act||$<=d._end)&&d._ts&&C!==d){if(d.parent!==this)return this.render(s,r,o);if(d.render(d._ts>0?($-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+($-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!D){C=0,_&&(c+=this._zTime=$?-ve:ve);break}}d=_}}if(C&&!r&&(this.pause(),C.render(f>=a?0:-ve)._zTime=f>=a?1:-1,this._ts))return this._start=T,ba(this),this.render(s,r,o);this._onUpdate&&!r&&bt(this,"onUpdate",!0),(c===l&&l>=this.totalDuration()||!c&&a)&&(T===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((s||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&rn(this,1),!r&&!(s<0&&!a)&&(c||a||!l)&&(bt(this,c===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var o=this;if(cn(r)||(r=Ct(this,r,s)),!(s instanceof wr)){if(Qe(s))return s.forEach(function(a){return o.add(a,r)}),this;if($e(s))return this.addLabel(s,r);if(We(s))s=Le.delayedCall(0,s);else return this}return this!==s?Vt(this,s,r):this},t.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-wt);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Le?r&&l.push(u):(o&&l.push(u),s&&l.push.apply(l,u.getChildren(!0,r,o)))),u=u._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},t.remove=function(s){return $e(s)?this.removeLabel(s):We(s)?this.killTweensOf(s):(Ta(this,s),s===this._recent&&(this._recent=this._last),mi(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ke(Et.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=Ct(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,o){var a=Le.delayedCall(0,r||Cr,o);return a.data="isPause",this._hasPause=1,Vt(this,a,Ct(this,s))},t.removePause=function(s){var r=this._first;for(s=Ct(this,s);r;)r._start===s&&r.data==="isPause"&&rn(r),r=r._next},t.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)Sn!==a[l]&&a[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var o=[],a=Tt(s),l=this._first,u=cn(r),c;l;)l instanceof Le?TI(l._targets,a)&&(u?(!Sn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(a,r)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(s,r){r=r||{};var o=this,a=Ct(o,s),l=r,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Le.to(o,St({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||ve,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&ds(_,m,0,1).render(_._time,!0,!0),d=1}c&&c.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(s,r,o){return this.tweenTo(r,St({startAt:{time:Ct(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Uf(this,Ct(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Uf(this,Ct(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+ve)},t.shiftChildren=function(s,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(u in l)l[u]>=o&&(l[u]+=s);return mi(this)},t.invalidate=function(){var s=this._first;for(this._lock=0;s;)s.invalidate(),s=s._next;return n.prototype.invalidate.call(this)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),mi(this)},t.totalDuration=function(s){var r=0,o=this,a=o._last,l=wt,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Vt(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(r-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=u;ds(o,o===Se&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(Se._ts&&(Ug(Se,$o(s,Se)),Lg=Et.frame),Et.frame>=Ff){Ff+=gt.autoSleep||120;var r=Se._first;if((!r||!r._ts)&&gt.autoSleep&&Et._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Et.sleep()}}},e}(wr);St(nt.prototype,{_lock:0,_hasPause:0,_forcing:0});var QI=function(e,t,i,s,r,o,a){var l=new at(this._pt,e,t,0,1,hm,null,r),u=0,c=0,h,f,d,_,p,m,D,C;for(l.b=i,l.e=s,i+="",s+="",(D=~s.indexOf("random("))&&(s=Er(s)),o&&(C=[i,s],o(C,e,t),i=C[0],s=C[1]),f=i.match(Ya)||[];h=Ya.exec(s);)_=h[0],p=s.substring(u,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:m,c:_.charAt(1)==="="?parseFloat(_.substr(2))*(_.charAt(0)==="-"?-1:1):parseFloat(_)-m,m:d&&d<4?Math.round:0},u=Ya.lastIndex);return l.c=u<s.length?s.substring(u,s.length):"",l.fp=a,(kg.test(s)||D)&&(l.e=0),this._pt=l,l},xc=function(e,t,i,s,r,o,a,l,u){We(s)&&(s=s(r||0,e,o));var c=e[t],h=i!=="get"?i:We(c)?u?e[t.indexOf("set")||!We(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():c,f=We(c)?u?tS:um:Pc,d;if($e(s)&&(~s.indexOf("random(")&&(s=Er(s)),s.charAt(1)==="="&&(d=parseFloat(h)+parseFloat(s.substr(2))*(s.charAt(0)==="-"?-1:1)+(tt(h)||0),(d||d===0)&&(s=d))),h!==s)return!isNaN(h*s)&&s!==""?(d=new at(this._pt,e,t,+h||0,s-(h||0),typeof c=="boolean"?iS:cm,0,f),u&&(d.fp=u),a&&d.modifier(a,this,e),this._pt=d):(!c&&!(t in e)&&Ic(t,s),QI.call(this,e,t,h,s,f,l||gt.stringFilter,u))},XI=function(e,t,i,s,r){if(We(e)&&(e=ir(e,r,t,i,s)),!hn(e)||e.style&&e.nodeType||Qe(e)||xg(e))return $e(e)?ir(e,r,t,i,s):e;var o={},a;for(a in e)o[a]=ir(e[a],r,t,i,s);return o},om=function(e,t,i,s,r,o){var a,l,u,c;if(ft[e]&&(a=new ft[e]).init(r,a.rawVars?t[e]:XI(t[e],s,r,o,i),i,s,o)!==!1&&(i._pt=l=new at(i._pt,r,e,0,1,a.render,a,0,a.priority),i!==Wi))for(u=i._ptLookup[i._targets.indexOf(r)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Sn,JI=function n(e,t){var i=e.vars,s=i.ease,r=i.startAt,o=i.immediateRender,a=i.lazy,l=i.onUpdate,u=i.onUpdateParams,c=i.callbackScope,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,_=i.autoRevert,p=e._dur,m=e._startAt,D=e._targets,C=e.parent,E=C&&C.data==="nested"?C.parent._targets:D,T=e._overwrite==="auto"&&!wc,w=e.timeline,b,I,k,S,$,Y,B,J,ne,de,Q,Z,ae;if(w&&(!d||!s)&&(s="none"),e._ease=yi(s,cs.ease),e._yEase=f?nm(yi(f===!0?s:f,cs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!w&&!!i.runBackwards,!w||d&&!i.stagger){if(J=D[0]?gi(D[0]).harness:0,Z=J&&i[J.prop],b=Vo(i,Sc),m&&rn(m.render(-1,!0)),r)if(rn(e._startAt=Le.set(D,St({data:"isStart",overwrite:!1,parent:C,immediateRender:!0,lazy:rt(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:c,stagger:0},r))),t<0&&!o&&!_&&e._startAt.render(-1,!0),o){if(t>0&&!_&&(e._startAt=0),p&&t<=0){t&&(e._zTime=t);return}}else _===!1&&(e._startAt=0);else if(h&&p){if(m)!_&&(e._startAt=0);else if(t&&(o=!1),k=St({overwrite:!1,data:"isFromStart",lazy:o&&rt(a),immediateRender:o,stagger:0,parent:C},b),Z&&(k[J.prop]=Z),rn(e._startAt=Le.set(D,k)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!o)n(e._startAt,ve);else if(!t)return}for(e._pt=0,a=p&&rt(a)||a&&!p,I=0;I<D.length;I++){if($=D[I],B=$._gsap||Rc(D)[I]._gsap,e._ptLookup[I]=de={},Vl[B.id]&&Ln.length&&Ho(),Q=E===D?I:E.indexOf($),J&&(ne=new J).init($,Z||b,e,Q,E)!==!1&&(e._pt=S=new at(e._pt,$,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(Pe){de[Pe]=S}),ne.priority&&(Y=1)),!J||Z)for(k in b)ft[k]&&(ne=om(k,b,e,Q,$,E))?ne.priority&&(Y=1):de[k]=S=xc.call(e,$,k,"get",b[k],Q,E,0,i.stringFilter);e._op&&e._op[I]&&e.kill($,e._op[I]),T&&e._pt&&(Sn=e,Se.killTweensOf($,de,e.globalTime(t)),ae=!e.parent,Sn=0),e._pt&&a&&(Vl[B.id]=1)}Y&&fm(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ae,d&&t<=0&&w.render(wt,!0,!0)},ZI=function(e,t){var i=e[0]?gi(e[0]).harness:0,s=i&&i.aliases,r,o,a,l;if(!s)return t;r=hs({},t);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},eS=function(e,t,i,s){var r=t.ease||s||"power1.inOut",o,a;if(Qe(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:r})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ir=function(e,t,i,s,r){return We(e)?e.call(t,i,s,r):$e(e)&&~e.indexOf("random(")?Er(e):e},am=Ac+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",lm={};ot(am+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return lm[n]=1});var Le=function(n){Sg(e,n);function e(i,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=n.call(this,o?s:tr(s))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,p=l.defaults,m=l.scrollTrigger,D=l.yoyoEase,C=s.parent||Se,E=(Qe(i)||xg(i)?cn(i[0]):"length"in s)?[i]:Tt(i),T,w,b,I,k,S,$,Y;if(a._targets=E.length?Rc(E):Wo("GSAP target "+i+" not found. https://greensock.com",!gt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Qr(u)||Qr(c)){if(s=a.vars,T=a.timeline=new nt({data:"nested",defaults:p||{}}),T.kill(),T.parent=T._dp=Jt(a),T._start=0,f||Qr(u)||Qr(c)){if(I=E.length,$=f&&Kg(f),hn(f))for(k in f)~am.indexOf(k)&&(Y||(Y={}),Y[k]=f[k]);for(w=0;w<I;w++)b=Vo(s,lm),b.stagger=0,D&&(b.yoyoEase=D),Y&&hs(b,Y),S=E[w],b.duration=+ir(u,Jt(a),w,S,E),b.delay=(+ir(c,Jt(a),w,S,E)||0)-a._delay,!f&&I===1&&b.delay&&(a._delay=c=b.delay,a._start+=c,b.delay=0),T.to(S,b,$?$(w,S,E):0),T._ease=le.none;T.duration()?u=c=0:a.timeline=0}else if(_){tr(St(T.vars.defaults,{ease:"none"})),T._ease=yi(_.ease||s.ease||"none");var B=0,J,ne,de;if(Qe(_))_.forEach(function(Q){return T.to(E,Q,">")});else{b={};for(k in _)k==="ease"||k==="easeEach"||eS(k,_[k],b,_.easeEach);for(k in b)for(J=b[k].sort(function(Q,Z){return Q.t-Z.t}),B=0,w=0;w<J.length;w++)ne=J[w],de={ease:ne.e,duration:(ne.t-(w?J[w-1].t:0))/100*u},de[k]=ne.v,T.to(E,de,B),B+=de.duration;T.duration()<u&&T.to({},{duration:u-T.duration()})}}u||a.duration(u=T.duration())}else a.timeline=0;return d===!0&&!wc&&(Sn=Jt(a),Se.killTweensOf(E),Sn=0),Vt(C,Jt(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(h||!u&&!_&&a._start===Ke(C._time)&&rt(h)&&RI(Jt(a))&&C.data!=="nested")&&(a._tTime=-ve,a.render(Math.max(0,-c))),m&&zg(Jt(a),m),a}var t=e.prototype;return t.render=function(s,r,o){var a=this._time,l=this._tDur,u=this._dur,c=s>l-ve&&s>=0?l:s<ve?0:s,h,f,d,_,p,m,D,C,E;if(!u)PI(this,s,r,o);else if(c!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=s<0){if(h=c,C=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(_*100+s,r,o);if(h=Ke(c%_),c===l?(d=this._repeat,h=u):(d=~~(c/_),d&&d===c/_&&(h=u,d--),h>u&&(h=u)),m=this._yoyo&&d&1,m&&(E=this._yEase,h=u-h),p=fs(this._tTime,_),h===a&&!o&&this._initted)return this;d!==p&&(C&&this._yEase&&im(C,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=o=1,this.render(Ke(_*d),!0).invalidate()._lock=0))}if(!this._initted){if(jg(this,s<0?s:h,o,r))return this._tTime=0,this;if(u!==this._dur)return this.render(s,r,o)}if(this._tTime=c,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=D=(E||this._ease)(h/u),this._from&&(this.ratio=D=1-D),h&&!a&&!r&&(bt(this,"onStart"),this._tTime!==c))return this;for(f=this._pt;f;)f.r(D,f.d),f=f._next;C&&C.render(s<0?s:!h&&m?-ve:C._dur*C._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(s<0&&this._startAt&&this._startAt.render(s,!0,o),bt(this,"onUpdate")),this._repeat&&d!==p&&this.vars.onRepeat&&!r&&this.parent&&bt(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(s<0&&this._startAt&&!this._onUpdate&&this._startAt.render(s,!0,!0),(s||!u)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&rn(this,1),!r&&!(s<0&&!a)&&(c||a)&&(bt(this,c===l?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),n.prototype.invalidate.call(this)},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Sn&&Sn.vars.overwrite!==!0)._first||Hs(this),this.parent&&o!==this.timeline.totalDuration()&&ds(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?Tt(s):a,u=this._ptLookup,c=this._pt,h,f,d,_,p,m,D;if((!r||r==="all")&&II(a,l))return r==="all"&&(this._pt=0),Hs(this);for(h=this._op=this._op||[],r!=="all"&&($e(r)&&(p={},ot(r,function(C){return p[C]=1}),r=p),r=ZI(a,r)),D=a.length;D--;)if(~l.indexOf(a[D])){f=u[D],r==="all"?(h[D]=r,_=f,d={}):(d=h[D]=h[D]||{},_=r);for(p in _)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Ta(this,m,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&c&&Hs(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return nr(1,arguments)},e.delayedCall=function(s,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,r,o){return nr(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,o){return Se.killTweensOf(s,r,o)},e}(wr);St(Le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ot("staggerTo,staggerFrom,staggerFromTo",function(n){Le[n]=function(){var e=new nt,t=zl.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Pc=function(e,t,i){return e[t]=i},um=function(e,t,i){return e[t](i)},tS=function(e,t,i,s){return e[t](s.fp,i)},nS=function(e,t,i){return e.setAttribute(t,i)},kc=function(e,t){return We(e[t])?um:Tc(e[t])&&e.setAttribute?nS:Pc},cm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},iS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hm=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Nc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},sS=function(e,t,i,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(e,t,i),r=o},rS=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Ta(this,t,"_pt"):t.dep||(i=1),t=s;return!i},oS=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},fm=function(e){for(var t=e._pt,i,s,r,o;t;){for(i=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:o=t,t=i}e._pt=r},at=function(){function n(t,i,s,r,o,a,l,u,c){this.t=i,this.s=r,this.c=o,this.p=s,this.r=a||cm,this.d=l||this,this.set=u||Pc,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,s,r){this.mSet=this.mSet||this.set,this.set=oS,this.m=i,this.mt=r,this.tween=s},n}();ot(Ac+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Sc[n]=1});yt.TweenMax=yt.TweenLite=Le;yt.TimelineLite=yt.TimelineMax=nt;Se=new nt({sortChildren:!1,defaults:cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gt.stringFilter=tm;var jo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return $I(s)})},timeline:function(e){return new nt(e)},getTweensOf:function(e,t){return Se.getTweensOf(e,t)},getProperty:function(e,t,i,s){$e(e)&&(e=Tt(e)[0]);var r=gi(e||{}).get,o=i?Hg:Wg;return i==="native"&&(i=""),e&&(t?o((ft[t]&&ft[t].get||r)(e,t,i,s)):function(a,l,u){return o((ft[a]&&ft[a].get||r)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Tt(e),e.length>1){var s=e.map(function(c){return Gt.quickSetter(c,t,i)}),r=s.length;return function(c){for(var h=r;h--;)s[h](c)}}e=e[0]||{};var o=ft[t],a=gi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Wi._pt=0,h.init(e,i?c+i:c,Wi,0,[e]),h.render(1,h),Wi._pt&&Nc(1,Wi)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},isTweening:function(e){return Se.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yi(e.ease,cs.ease)),Mf(cs,e||{})},config:function(e){return Mf(gt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,r=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!ft[a]&&!yt[a]&&Wo(t+" effect requires "+a+" plugin.")}),Qa[t]=function(a,l,u){return i(Tt(a),St(l||{},r),u)},o&&(nt.prototype[t]=function(a,l,u){return this.add(Qa[t](a,hn(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){le[e]=yi(t)},parseEase:function(e,t){return arguments.length?yi(e,t):le},getById:function(e){return Se.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new nt(e),s,r;for(i.smoothChildTiming=rt(e.smoothChildTiming),Se.remove(i),i._dp=0,i._time=i._tTime=Se._time,s=Se._first;s;)r=s._next,(t||!(!s._dur&&s instanceof Le&&s.vars.onComplete===s._targets[0]))&&Vt(i,s,s._start-s._delay),s=r;return Vt(Se,i,0),i},utils:{wrap:WI,wrapYoyo:HI,distribute:Kg,random:Qg,snap:Yg,normalize:UI,getUnit:tt,clamp:OI,splitColor:Zg,toArray:Tt,selector:MI,mapRange:Jg,pipe:LI,unitize:BI,interpolate:VI,shuffle:Gg},install:Fg,effects:Qa,ticker:Et,updateRoot:nt.updateRoot,plugins:ft,globalTimeline:Se,core:{PropTween:at,globals:Mg,Tween:Le,Timeline:nt,Animation:wr,getCache:gi,_removeLinkedListItem:Ta,suppressOverwrites:function(e){return wc=e}}};ot("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return jo[n]=Le[n]});Et.add(nt.updateRoot);Wi=jo.to({},{duration:0});var aS=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},lS=function(e,t){var i=e._targets,s,r,o;for(s in t)for(r=i.length;r--;)o=e._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=aS(o,s)),o&&o.modifier&&o.modifier(t[s],e,i[r],s))},el=function(e,t){return{name:e,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,u;if($e(r)&&(l={},ot(r,function(c){return l[c]=1}),r=l),t){l={};for(u in r)l[u]=t(r[u]);r=l}lS(a,r)}}}},Gt=jo.registerPlugin({name:"attr",init:function(e,t,i,s,r){var o,a;for(o in t)a=this.add(e,"setAttribute",(e.getAttribute(o)||0)+"",t[o],s,r,0,0,o),a&&(a.op=o),this._props.push(o)}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i])}},el("roundProps",jl),el("modifiers"),el("snap",Yg))||jo;Le.version=nt.version=Gt.version="3.9.1";Og=1;Rg()&&ps();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hf,An,Ki,Oc,ci,Vf,uS=function(){return typeof window!="undefined"},zn={},ii=180/Math.PI,Yi=Math.PI/180,Ni=Math.atan2,$f=1e8,dm=/([A-Z])/g,cS=/(?:left|right|width|margin|padding|x)/i,hS=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},_m=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_S=function(e,t,i){return e.style[t]=i},gS=function(e,t,i){return e.style.setProperty(t,i)},mS=function(e,t,i){return e._gsap[t]=i},yS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},DS=function(e,t,i,s,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},vS=function(e,t,i,s,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},je="transform",jn=je+"Origin",mm,ql=function(e,t){var i=An.createElementNS?An.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):An.createElement(e);return i.style?i:An.createElement(e)},on=function n(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(dm,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&n(e,_s(t)||t,1)||""},zf="O,Moz,ms,Ms,Webkit".split(","),_s=function(e,t,i){var s=t||ci,r=s.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(zf[o]+e in r););return o<0?null:(o===3?"ms":o>=0?zf[o]:"")+e},Gl=function(){uS()&&window.document&&(Hf=window,An=Hf.document,Ki=An.documentElement,ci=ql("div")||{style:{}},ql("div"),je=_s(je),jn=je+"Origin",ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mm=!!_s("perspective"),Oc=1)},tl=function n(e){var t=ql("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,s=this.nextSibling,r=this.style.cssText,o;if(Ki.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(s?i.insertBefore(this,s):i.appendChild(this)),Ki.removeChild(t),this.style.cssText=r,o},jf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ym=function(e){var t;try{t=e.getBBox()}catch{t=tl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===tl||(t=tl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+jf(e,["x","cx","x1"])||0,y:+jf(e,["y","cy","y1"])||0,width:0,height:0}:t},Dm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ym(e))},Tr=function(e,t){if(t){var i=e.style;t in zn&&t!==jn&&(t=je),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(dm,"-$1").toLowerCase())):i.removeAttribute(t)}},xn=function(e,t,i,s,r,o){var a=new at(e._pt,t,i,0,1,o?gm:_m);return e._pt=a,a.b=s,a.e=r,e._props.push(i),a},qf={deg:1,rad:1,turn:1},qn=function n(e,t,i,s){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=ci.style,l=cS.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=s==="px",d=s==="%",_,p,m,D;return s===o||!r||qf[s]||qf[o]?r:(o!=="px"&&!f&&(r=n(e,t,i,"px")),D=e.getCTM&&Dm(e),(d||o==="%")&&(zn[t]||~t.indexOf("adius"))?(_=D?e.getBBox()[l?"width":"height"]:e[c],ke(d?r/_*h:r/100*_)):(a[l?"width":"height"]=h+(f?o:s),p=~t.indexOf("adius")||s==="em"&&e.appendChild&&!u?e:e.parentNode,D&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===An||!p.appendChild)&&(p=An.body),m=p._gsap,m&&d&&m.width&&l&&m.time===Et.time?ke(r/m.width*h):((d||o==="%")&&(a.position=on(e,"position")),p===e&&(a.position="static"),p.appendChild(ci),_=ci[c],p.removeChild(ci),a.position="absolute",l&&d&&(m=gi(p),m.time=Et.time,m.width=p[c]),ke(f?_*r/h:_&&r?h/_*r:0))))},si=function(e,t,i,s){var r;return Oc||Gl(),t in Rn&&t!=="transform"&&(t=Rn[t],~t.indexOf(",")&&(t=t.split(",")[0])),zn[t]&&t!=="transform"?(r=Ir(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Go(on(e,jn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=qo[t]&&qo[t](e,t,i)||on(e,t)||Bg(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?qn(e,t,r,i)+i:r},CS=function(e,t,i,s){if(!i||i==="none"){var r=_s(t,e,1),o=r&&on(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=on(e,"borderTopColor"))}var a=new at(this._pt,e.style,t,0,1,hm),l=0,u=0,c,h,f,d,_,p,m,D,C,E,T,w,b;if(a.b=i,a.e=s,i+="",s+="",s==="auto"&&(e.style[t]=s,s=on(e,t)||s,e.style[t]=i),c=[i,s],tm(c),i=c[0],s=c[1],f=i.match(Ui)||[],b=s.match(Ui)||[],b.length){for(;h=Ui.exec(s);)m=h[0],C=s.substring(l,h.index),_?_=(_+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(_=1),m!==(p=f[u++]||"")&&(d=parseFloat(p)||0,T=p.substr((d+"").length),w=m.charAt(1)==="="?+(m.charAt(0)+"1"):0,w&&(m=m.substr(2)),D=parseFloat(m),E=m.substr((D+"").length),l=Ui.lastIndex-E.length,E||(E=E||gt.units[t]||T,l===s.length&&(s+=E,a.e+=E)),T!==E&&(d=qn(e,t,p,E)||0),a._pt={_next:a._pt,p:C||u===1?C:",",s:d,c:w?w*D:D-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=t==="display"&&s==="none"?gm:_m;return kg.test(s)&&(a.e=0),this._pt=a,a},Gf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ES=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=Gf[i]||i,t[1]=Gf[s]||s,t.join(" ")},wS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,r=t.u,o=i._gsap,a,l,u;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],zn[a]&&(l=1,a=a==="transformOrigin"?jn:je),Tr(i,a);l&&(Tr(i,je),o&&(o.svg&&i.removeAttribute("transform"),Ir(i,1),o.uncache=1))}},qo={clearProps:function(e,t,i,s,r){if(r.data!=="isFromStart"){var o=e._pt=new at(e._pt,t,i,0,0,wS);return o.u=s,o.pr=-10,o.tween=r,e._props.push(i),1}}},br=[1,0,0,1,0,0],vm={},Cm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kf=function(e){var t=on(e,je);return Cm(t)?br:t.substr(7).match(Pg).map(ke)},Fc=function(e,t){var i=e._gsap||gi(e),s=e.style,r=Kf(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?br:r):(r===br&&!e.offsetParent&&e!==Ki&&!i.svg&&(l=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextSibling,Ki.appendChild(e)),r=Kf(e),l?s.display=l:Tr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ki.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Kl=function(e,t,i,s,r,o){var a=e._gsap,l=r||Fc(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],p=l[2],m=l[3],D=l[4],C=l[5],E=t.split(" "),T=parseFloat(E[0])||0,w=parseFloat(E[1])||0,b,I,k,S;i?l!==br&&(I=d*m-_*p)&&(k=T*(m/I)+w*(-p/I)+(p*C-m*D)/I,S=T*(-_/I)+w*(d/I)-(d*C-_*D)/I,T=k,w=S):(b=ym(e),T=b.x+(~E[0].indexOf("%")?T/100*b.width:T),w=b.y+(~(E[1]||E[0]).indexOf("%")?w/100*b.height:w)),s||s!==!1&&a.smooth?(D=T-u,C=w-c,a.xOffset=h+(D*d+C*p)-D,a.yOffset=f+(D*_+C*m)-C):a.xOffset=a.yOffset=0,a.xOrigin=T,a.yOrigin=w,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!i,e.style[jn]="0px 0px",o&&(xn(o,a,"xOrigin",u,T),xn(o,a,"yOrigin",c,w),xn(o,a,"xOffset",h,a.xOffset),xn(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",T+" "+w)},Ir=function(e,t){var i=e._gsap||new rm(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,r=i.scaleX<0,o="px",a="deg",l=on(e,jn)||"0",u,c,h,f,d,_,p,m,D,C,E,T,w,b,I,k,S,$,Y,B,J,ne,de,Q,Z,ae,Pe,Dt,ze,ct,Ae,At;return u=c=h=_=p=m=D=C=E=0,f=d=1,i.svg=!!(e.getCTM&&Dm(e)),b=Fc(e,i.svg),i.svg&&(Q=(!i.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Kl(e,Q||l,!!Q||i.originIsAbsolute,i.smooth!==!1,b)),T=i.xOrigin||0,w=i.yOrigin||0,b!==br&&($=b[0],Y=b[1],B=b[2],J=b[3],u=ne=b[4],c=de=b[5],b.length===6?(f=Math.sqrt($*$+Y*Y),d=Math.sqrt(J*J+B*B),_=$||Y?Ni(Y,$)*ii:0,D=B||J?Ni(B,J)*ii+_:0,D&&(d*=Math.abs(Math.cos(D*Yi))),i.svg&&(u-=T-(T*$+w*B),c-=w-(T*Y+w*J))):(At=b[6],ct=b[7],Pe=b[8],Dt=b[9],ze=b[10],Ae=b[11],u=b[12],c=b[13],h=b[14],I=Ni(At,ze),p=I*ii,I&&(k=Math.cos(-I),S=Math.sin(-I),Q=ne*k+Pe*S,Z=de*k+Dt*S,ae=At*k+ze*S,Pe=ne*-S+Pe*k,Dt=de*-S+Dt*k,ze=At*-S+ze*k,Ae=ct*-S+Ae*k,ne=Q,de=Z,At=ae),I=Ni(-B,ze),m=I*ii,I&&(k=Math.cos(-I),S=Math.sin(-I),Q=$*k-Pe*S,Z=Y*k-Dt*S,ae=B*k-ze*S,Ae=J*S+Ae*k,$=Q,Y=Z,B=ae),I=Ni(Y,$),_=I*ii,I&&(k=Math.cos(I),S=Math.sin(I),Q=$*k+Y*S,Z=ne*k+de*S,Y=Y*k-$*S,de=de*k-ne*S,$=Q,ne=Z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=ke(Math.sqrt($*$+Y*Y+B*B)),d=ke(Math.sqrt(de*de+At*At)),I=Ni(ne,de),D=Math.abs(I)>2e-4?I*ii:0,E=Ae?1/(Ae<0?-Ae:Ae):0),i.svg&&(Q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Cm(on(e,je)),Q&&e.setAttribute("transform",Q))),Math.abs(D)>90&&Math.abs(D)<270&&(r?(f*=-1,D+=_<=0?180:-180,_+=_<=0?180:-180):(d*=-1,D+=D<=0?180:-180)),i.x=u-((i.xPercent=u&&(i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=c-((i.yPercent=c&&(i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-c)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=ke(f),i.scaleY=ke(d),i.rotation=ke(_)+a,i.rotationX=ke(p)+a,i.rotationY=ke(m)+a,i.skewX=D+a,i.skewY=C+a,i.transformPerspective=E+o,(i.zOrigin=parseFloat(l.split(" ")[2])||0)&&(s[jn]=Go(l)),i.xOffset=i.yOffset=0,i.force3D=gt.force3D,i.renderTransform=i.svg?bS:mm?Em:TS,i.uncache=0,i},Go=function(e){return(e=e.split(" "))[0]+" "+e[1]},nl=function(e,t,i){var s=tt(t);return ke(parseFloat(t)+parseFloat(qn(e,"x",i+"px",s)))+s},TS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Em(e,t)},Xn="0deg",Ms="0px",Jn=") ",Em=function(e,t){var i=t||this,s=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,_=i.scaleX,p=i.scaleY,m=i.transformPerspective,D=i.force3D,C=i.target,E=i.zOrigin,T="",w=D==="auto"&&e&&e!==1||D===!0;if(E&&(h!==Xn||c!==Xn)){var b=parseFloat(c)*Yi,I=Math.sin(b),k=Math.cos(b),S;b=parseFloat(h)*Yi,S=Math.cos(b),o=nl(C,o,I*S*-E),a=nl(C,a,-Math.sin(b)*-E),l=nl(C,l,k*S*-E+E)}m!==Ms&&(T+="perspective("+m+Jn),(s||r)&&(T+="translate("+s+"%, "+r+"%) "),(w||o!==Ms||a!==Ms||l!==Ms)&&(T+=l!==Ms||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Jn),u!==Xn&&(T+="rotate("+u+Jn),c!==Xn&&(T+="rotateY("+c+Jn),h!==Xn&&(T+="rotateX("+h+Jn),(f!==Xn||d!==Xn)&&(T+="skew("+f+", "+d+Jn),(_!==1||p!==1)&&(T+="scale("+_+", "+p+Jn),C.style[je]=T||"translate(0, 0)"},bS=function(e,t){var i=t||this,s=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,_=i.xOrigin,p=i.yOrigin,m=i.xOffset,D=i.yOffset,C=i.forceCSS,E=parseFloat(o),T=parseFloat(a),w,b,I,k,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Yi,u*=Yi,w=Math.cos(l)*h,b=Math.sin(l)*h,I=Math.sin(l-u)*-f,k=Math.cos(l-u)*f,u&&(c*=Yi,S=Math.tan(u-c),S=Math.sqrt(1+S*S),I*=S,k*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),w*=S,b*=S)),w=ke(w),b=ke(b),I=ke(I),k=ke(k)):(w=h,k=f,b=I=0),(E&&!~(o+"").indexOf("px")||T&&!~(a+"").indexOf("px"))&&(E=qn(d,"x",o,"px"),T=qn(d,"y",a,"px")),(_||p||m||D)&&(E=ke(E+_-(_*w+p*I)+m),T=ke(T+p-(_*b+p*k)+D)),(s||r)&&(S=d.getBBox(),E=ke(E+s/100*S.width),T=ke(T+r/100*S.height)),S="matrix("+w+","+b+","+I+","+k+","+E+","+T+")",d.setAttribute("transform",S),C&&(d.style[je]=S)},IS=function(e,t,i,s,r,o){var a=360,l=$e(r),u=parseFloat(r)*(l&&~r.indexOf("rad")?ii:1),c=o?u*o:u-s,h=s+c+"deg",f,d;return l&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*$f)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*$f)%a-~~(c/a)*a)),e._pt=d=new at(e._pt,t,i,s,c,fS),d.e=h,d.u="deg",e._props.push(i),d},Yf=function(e,t){for(var i in t)e[i]=t[i];return e},SS=function(e,t,i){var s=Yf({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,d,_;s.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[je]=t,a=Ir(i,1),Tr(i,je),i.setAttribute("transform",u)):(u=getComputedStyle(i)[je],o[je]=t,a=Ir(i,1),o[je]=u);for(l in zn)u=s[l],c=a[l],u!==c&&r.indexOf(l)<0&&(d=tt(u),_=tt(c),h=d!==_?qn(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new at(e._pt,a,l,h,f-h,pm),e._pt.u=_||0,e._props.push(l));Yf(a,s)};ot("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",s="Bottom",r="Left",o=(e<3?[t,i,s,r]:[t+r,t+i,s+i,s+r]).map(function(a){return e<2?n+a:"border"+a+n});qo[e>1?"border"+n:n]=function(a,l,u,c,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return si(a,_,u)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(c+"").split(" "),d={},o.forEach(function(_,p){return d[_]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,h)}});var wm={name:"css",register:Gl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,r){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,d,_,p,m,D,C,E,T,w,b,I;Oc||Gl();for(p in t)if(p!=="autoRound"&&(c=t[p],!(ft[p]&&om(p,t,i,s,e,r)))){if(d=typeof c,_=qo[p],d==="function"&&(c=c.call(i,s,e,r),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Er(c)),_)_(this,e,p,c,i)&&(I=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),c+="",Bn.lastIndex=0,Bn.test(u)||(m=tt(u),D=tt(c)),D?m!==D&&(u=qn(e,p,u,D)+D):m&&(c+=m),this.add(a,"setProperty",u,c,s,r,0,0,p),o.push(p);else if(d!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(i,s,e,r):l[p],$e(u)&&~u.indexOf("random(")&&(u=Er(u)),tt(u+"")||(u+=gt.units[p]||tt(si(e,p))||""),(u+"").charAt(1)==="="&&(u=si(e,p))):u=si(e,p),f=parseFloat(u),C=d==="string"&&c.charAt(1)==="="?+(c.charAt(0)+"1"):0,C&&(c=c.substr(2)),h=parseFloat(c),p in Rn&&(p==="autoAlpha"&&(f===1&&si(e,"visibility")==="hidden"&&h&&(f=0),xn(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Rn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),E=p in zn,E){if(T||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ir(e,t.parseTransform),b=t.smoothOrigin!==!1&&w.smooth,T=this._pt=new at(this._pt,a,je,0,1,w.renderTransform,w,0,-1),T.dep=1),p==="scale")this._pt=new at(this._pt,w,"scaleY",w.scaleY,(C?C*h:h-w.scaleY)||0),o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){c=ES(c),w.svg?Kl(e,c,0,b,0,this):(D=parseFloat(c.split(" ")[2])||0,D!==w.zOrigin&&xn(this,w,"zOrigin",w.zOrigin,D),xn(this,a,p,Go(u),Go(c)));continue}else if(p==="svgOrigin"){Kl(e,c,1,b,0,this);continue}else if(p in vm){IS(this,w,p,f,c,C);continue}else if(p==="smoothOrigin"){xn(this,w,"smooth",w.smooth,c);continue}else if(p==="force3D"){w[p]=c;continue}else if(p==="transform"){SS(this,c,e);continue}}else p in a||(p=_s(p)||p);if(E||(h||h===0)&&(f||f===0)&&!hS.test(c)&&p in a)m=(u+"").substr((f+"").length),h||(h=0),D=tt(c)||(p in gt.units?gt.units[p]:m),m!==D&&(f=qn(e,p,u,D)),this._pt=new at(this._pt,E?w:a,p,f,C?C*h:h-f,!E&&(D==="px"||p==="zIndex")&&t.autoRound!==!1?pS:pm),this._pt.u=D||0,m!==D&&D!=="%"&&(this._pt.b=u,this._pt.r=dS);else if(p in a)CS.call(this,e,p,u,c);else if(p in e)this.add(e,p,u||e[p],c,s,r);else{Ic(p,c);continue}o.push(p)}}I&&fm(this)},get:si,aliases:Rn,getSetter:function(e,t,i){var s=Rn[t];return s&&s.indexOf(",")<0&&(t=s),t in zn&&t!==jn&&(e._gsap.x||si(e,"x"))?i&&Vf===i?t==="scale"?yS:mS:(Vf=i||{})&&(t==="scale"?DS:vS):e.style&&!Tc(e.style[t])?_S:~t.indexOf("-")?gS:kc(e,t)},core:{_removeProperty:Tr,_getMatrix:Fc}};Gt.utils.checkPrefix=_s;(function(n,e,t,i){var s=ot(n+","+e+","+t,function(r){zn[r]=1});ot(e,function(r){gt.units[r]="deg",vm[r]=1}),Rn[s[13]]=n+","+e,ot(i,function(r){var o=r.split(":");Rn[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ot("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){gt.units[n]="px"});Gt.registerPlugin(wm);var AS=Gt.registerPlugin(wm)||Gt;AS.core.Tween;/*!
 * strings: 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var RS=/(^\s+|\s+$)/g,xS=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Tm(n){var e=n.nodeType,t="";if(e===1||e===9||e===11){if(typeof n.textContent=="string")return n.textContent;for(n=n.firstChild;n;n=n.nextSibling)t+=Tm(n)}else if(e===3||e===4)return n.nodeValue;return t}function Yl(n,e,t,i){for(var s=n.firstChild,r=[],o;s;)s.nodeType===3?(o=(s.nodeValue+"").replace(/^\n+/g,""),i||(o=o.replace(/\s+/g," ")),r.push.apply(r,bm(o,e,t,i))):(s.nodeName+"").toLowerCase()==="br"?r[r.length-1]+="<br>":r.push(s.outerHTML),s=s.nextSibling;for(o=r.length;o--;)r[o]==="&"&&r.splice(o,1,"&amp;");return r}function bm(n,e,t,i){if(n+="",t&&(n=n.replace(RS,"")),e&&e!=="")return n.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var s=[],r=n.length,o=0,a,l;o<r;o++)l=n.charAt(o),(l.charCodeAt(0)>=55296&&l.charCodeAt(0)<=56319||n.charCodeAt(o+1)>=65024&&n.charCodeAt(o+1)<=65039)&&(a=((n.substr(o,12).split(xS)||[])[1]||"").length||2,l=n.substr(o,a),s.emoji=1,o+=a-1),s.push(l===">"?"&gt;":l==="<"?"&lt;":i&&l===" "&&(n.charAt(o-1)===" "||n.charAt(o+1)===" ")?"&nbsp;":l);return s}/*!
 * TextPlugin 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $s,Xr,PS=function(){return $s||typeof window!="undefined"&&($s=window.gsap)&&$s.registerPlugin&&$s},Ia={version:"3.9.1",name:"text",init:function(e,t,i){var s=e.nodeName.toUpperCase(),r=this,o,a,l,u,c,h,f,d;if(r.svg=e.getBBox&&(s==="TEXT"||s==="TSPAN"),!("innerHTML"in e)&&!r.svg)return!1;if(r.target=e,typeof t!="object"&&(t={value:t}),!("value"in t)){r.text=r.original=[""];return}for(r.delimiter=t.delimiter||"",l=Yl(e,r.delimiter,!1,t.preserveSpaces),Xr||(Xr=document.createElement("div")),Xr.innerHTML=t.value,a=Yl(Xr,r.delimiter),r.from=i._from,r.from&&(s=l,l=a,a=s),r.hasClass=!!(t.newClass||t.oldClass),r.newClass=t.newClass,r.oldClass=t.oldClass,s=l.length-a.length,o=s<0?l:a,r.fillChar=t.fillChar||(t.padSpace?"&nbsp;":""),s<0&&(s=-s);--s>-1;)o.push(r.fillChar);if(t.type==="diff"){for(u=0,c=[],h=[],f="",s=0;s<a.length;s++)d=a[s],d===l[s]?f+=d:(c[u]=f+d,h[u++]=f+l[s],f="");a=c,l=h,f&&(a.push(f),l.push(f))}t.speed&&i.duration(Math.min(.05/t.speed*o.length,t.maxDuration||9999)),this.original=l,this.text=a,this._props.push("text")},render:function(e,t){e>1?e=1:e<0&&(e=0),t.from&&(e=1-e);var i=t.text,s=t.hasClass,r=t.newClass,o=t.oldClass,a=t.delimiter,l=t.target,u=t.fillChar,c=t.original,h=i.length,f=e*h+.5|0,d,_,p;s&&e?(d=r&&f,_=o&&f!==h,p=(d?"<span class='"+r+"'>":"")+i.slice(0,f).join(a)+(d?"</span>":"")+(_?"<span class='"+o+"'>":"")+a+c.slice(f).join(a)+(_?"</span>":"")):p=i.slice(0,f).join(a)+a+c.slice(f).join(a),t.svg?l.textContent=p:l.innerHTML=u==="&nbsp;"&&~p.indexOf("  ")?p.split("  ").join("&nbsp;&nbsp;"):p}};Ia.splitInnerHTML=Yl;Ia.emojiSafeSplit=bm;Ia.getText=Tm;PS()&&$s.registerPlugin(Ia);export{Ht as A,AS as B,Ia as C,BS as D,KS as E,dt as F,XS as G,gw as H,$S as I,qS as J,ZS as K,VS as L,jS as M,Jl as N,yu as O,lA as P,aA as Q,GS as R,rp as T,HS as a,LS as b,Xd as c,Zd as d,FS as e,Ye as f,WS as g,US as h,OS as i,cD as j,YS as k,eA as l,JS as m,QS as n,Yd as o,NS as p,oA as q,MS as r,rA as s,kS as t,tA as u,zS as v,by as w,iA as x,nA as y,sA as z};
