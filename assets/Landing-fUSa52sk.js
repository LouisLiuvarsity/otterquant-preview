import{c as go,r as l,j as e,a as xo,y as uo,o as ho,m as bo,s as mo,X as B,f as fo,e as vo,I as yo,L as Ka}from"./index-F0UYWkrr.js";import wo from"./AlphaDetail-bsVFDvnW.js";import{U as jo,P as na}from"./user-DP_V3zR5.js";import{M as _o}from"./mail-Ddtn3RXT.js";import{K as Lr}from"./key-jtkd2fjo.js";import{C as Ya}from"./copy-JTQQCWYH.js";import{C as Ga}from"./check-nzjMcmuE.js";import{R as qa}from"./refresh-cw-Cg1SvCSU.js";import{P as Lo,E as Ha}from"./plus-DL3p59UO.js";import{A as Za}from"./arrow-up-right-DHugEVYP.js";import{T as ko}from"./trash-2-Bkq5SuMf.js";import{a as So,E as No}from"./eye-BZhw3S_E.js";import{A as Qa}from"./arrow-left-lu2jaE2V.js";import{S as kr}from"./search-B8P53N6L.js";import{S as Xa}from"./star-BQn_nzgx.js";import{U as Sr}from"./users-BBlezRhd.js";import{C as Nr,T as Cr,a as Co}from"./trending-up-DgY_-I2N.js";import{W as Or}from"./wallet-CUB4HF4B.js";import{C as Oo}from"./chart-column-CHsCk24b.js";import{h as Po,i as Ao,p as zo,r as $o}from"./index-DSJwTzf3.js";import"./button-BiVq5pEM.js";import"./sparkles-BA7RXsXK.js";import"./loader-circle-Gt3kWVFR.js";import"./chevron-up-CPGSMHLl.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=go("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);function Eo(){!Po.current&&Ao();const[t]=l.useState(zo.current);return t}const Mo={some:0,all:1};function Do(t,a,{root:i,margin:s,amount:n="some"}={}){const o=$o(t),g=new WeakMap,x=h=>{h.forEach(f=>{const k=g.get(f.target);if(f.isIntersecting!==!!k)if(f.isIntersecting){const j=a(f.target,f);typeof j=="function"?g.set(f.target,j):m.unobserve(f.target)}else typeof k=="function"&&(k(f),g.delete(f.target))})},m=new IntersectionObserver(x,{root:i,rootMargin:s,threshold:typeof n=="number"?n:Mo[n]});return o.forEach(h=>m.observe(h)),()=>m.disconnect()}function Io(t,{root:a,margin:i,amount:s,once:n=!1,initial:o=!1}={}){const[g,x]=l.useState(o);return l.useEffect(()=>{if(!t.current||n&&g)return;const m=()=>(x(!0),n?void 0:()=>x(!1)),h={root:a&&a.current||void 0,margin:i,amount:s};return Do(t.current,m,h)},[a,t,i,n,s]),g}var Fo=function(a){return typeof window<"u"?matchMedia&&matchMedia("(prefers-color-scheme: ".concat(a,")")):{matches:!1}},Ja,Ro=l.createContext({appearance:"light",setAppearance:function(){},isDarkMode:!1,themeMode:"light",setThemeMode:function(){},browserPrefers:(Ja=Fo("dark"))!==null&&Ja!==void 0&&Ja.matches?"dark":"light"}),Bo=function(){return l.useContext(Ro)};const gi=(t,a)=>{if(a)return"row";switch(t){case"horizontal":return"row";case"horizontal-reverse":return"row-reverse";case"vertical":default:return"column";case"vertical-reverse":return"column-reverse"}},Wo=t=>{if(t)return["space-between","space-around","space-evenly"].includes(t)},Vo=(t,a)=>gi(t,a)==="row",Fe=t=>typeof t=="number"?`${t}px`:t,Uo=({visible:t,flex:a,gap:i,direction:s,horizontal:n,align:o,justify:g,distribution:x,height:m,width:h,allowShrink:f,padding:k,paddingInline:j,paddingBlock:b,prefixCls:E,as:N="div",className:y,style:T,children:S,wrap:C,ref:_,...$})=>{const O=g||x,z=Vo(s,n)&&!h&&Wo(O)?"100%":Fe(h),V={...a!==void 0?{"--lobe-flex":String(a)}:{},...s||n?{"--lobe-flex-direction":gi(s,n)}:{},...C!==void 0?{"--lobe-flex-wrap":C}:{},...O!==void 0?{"--lobe-flex-justify":O}:{},...o!==void 0?{"--lobe-flex-align":o}:{},...z!==void 0?{"--lobe-flex-width":z}:{},...m!==void 0?{"--lobe-flex-height":Fe(m)}:{},...k!==void 0?{"--lobe-flex-padding":Fe(k)}:{},...j!==void 0?{"--lobe-flex-padding-inline":Fe(j)}:{},...b!==void 0?{"--lobe-flex-padding-block":Fe(b)}:{},...i!==void 0?{"--lobe-flex-gap":Fe(i)}:{},...f?{minWidth:0}:{},...T},q="lobe-flex",P=[q,t===!1?`${q}--hidden`:void 0,E?`${E}-flex`:void 0,y].filter(Boolean).join(" ");return e.jsx(N,{ref:_,...$,className:P,style:V,children:S})};var xi=l.memo(Uo);const Ko=({children:t,ref:a,...i})=>e.jsx(xi,{...i,align:"center",justify:"center",ref:a,children:t}),Yo=new RegExp("\\p{Lu}?\\p{Ll}+|[0-9]+|\\p{Lu}+(?!\\p{Ll})|\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|\\p{L}+","gu");function Go(t){return Array.from(t.match(Yo)??[])}function ui(t){return Go(t).map(a=>a.toLowerCase()).join("-")}l.createContext(null);var qo=function(a,i){if(i){if(a&&i==="#000")return"0 0 0 1px rgba(255,255,255,0.1) inset";if(!a&&i==="#fff")return"0 0 0 1px rgba(0,0,0,0.05) inset"}};function tt(t){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},tt(t)}var Ho=["shape","color","background","size","style","iconMultiple","Icon","iconStyle","iconClassName"];function Pr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function ra(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Pr(Object(i),!0).forEach(function(s){Zo(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Pr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Zo(t,a,i){return a=Qo(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function Qo(t){var a=Xo(t,"string");return tt(a)=="symbol"?a:String(a)}function Xo(t,a){if(tt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(tt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Jo(t,a){if(t==null)return{};var i=el(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function el(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var Ln=l.memo(function(t){var a=t.shape,i=a===void 0?"circle":a,s=t.color,n=s===void 0?"#fff":s,o=t.background,g=t.size,x=t.style,m=t.iconMultiple,h=m===void 0?.75:m,f=t.Icon,k=t.iconStyle,j=t.iconClassName,b=Jo(t,Ho),E=Bo(),N=E.isDarkMode;return e.jsx(Ko,ra(ra({flex:"none",style:ra({background:o,borderRadius:i==="circle"?"50%":Math.floor(g*.1),boxShadow:qo(N,o),color:n,height:g,overflow:"hidden",width:g},x)},b),{},{children:f&&e.jsx(f,{className:j,color:n,size:g,style:ra({transform:"scale(".concat(h,")")},k)})}))});function at(t){"@babel/helpers - typeof";return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},at(t)}var tl=["Icon","style","Text","color","size","spaceMultiple","textMultiple","extra","extraStyle","showText","showLogo","extraClassName","iconProps","inverse"];function Ar(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function ue(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Ar(Object(i),!0).forEach(function(s){al(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ar(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function al(t,a,i){return a=nl(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function nl(t){var a=rl(t,"string");return at(a)=="symbol"?a:String(a)}function rl(t,a){if(at(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(at(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function il(t,a){if(t==null)return{};var i=sl(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function sl(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var kn=l.memo(function(t){var a=t.Icon,i=t.style,s=t.Text,n=t.color,o=t.size,g=o===void 0?24:o,x=t.spaceMultiple,m=x===void 0?1:x,h=t.textMultiple,f=h===void 0?1:h,k=t.extra,j=t.extraStyle,b=t.showText,E=b===void 0?!0:b,N=t.showLogo,y=N===void 0?!0:N,T=t.extraClassName,S=t.iconProps,C=t.inverse,_=il(t,tl),$=a&&y&&e.jsx(a,ue(ue({size:g},S),{},{style:ue(C?{marginLeft:g*m}:{marginRight:g*m},S?.style)})),O=E&&s&&e.jsx(s,{size:g*f});return e.jsxs(xi,ue(ue({align:"center",flex:"none",horizontal:!0,justify:"flex-start",style:ue({color:n},i)},_),{},{children:[C?e.jsxs(e.Fragment,{children:[O,$]}):e.jsxs(e.Fragment,{children:[$,O]}),k&&e.jsx("span",{className:T,style:ue({fontSize:g*f*.95,lineHeight:1},j),children:k})]}))}),hi=function(a){var i=l.useId(),s="lobe-icons-".concat(ui(a),"-").concat(i);return l.useMemo(function(){return{fill:"url(#".concat(s,")"),id:s}},[a])},ol=function(a,i){var s=l.useId();return l.useMemo(function(){return Array.from({length:i},function(n,o){var g="lobe-icons-".concat(ui(a),"-").concat(o,"-").concat(s);return{fill:"url(#".concat(g,")"),id:g}})},[a,i,s])},Re="Claude",ll=.8,cl=.1,bi="#D97757",dl=bi,pl="#fff",gl=.75;function nt(t){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},nt(t)}var xl=["size","style"];function zr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function en(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?zr(Object(i),!0).forEach(function(s){ul(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):zr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function ul(t,a,i){return a=hl(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function hl(t){var a=bl(t,"string");return nt(a)=="symbol"?a:String(a)}function bl(t,a){if(nt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(nt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function ml(t,a){if(t==null)return{};var i=fl(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function fl(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var Sn=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=ml(t,xl);return e.jsxs("svg",en(en({fill:"currentColor",fillRule:"evenodd",height:i,style:en({flex:"none",lineHeight:1},s),viewBox:"0 0 24 24",width:i,xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:Re}),e.jsx("path",{d:"M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"})]}))});function rt(t){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},rt(t)}function $r(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function vl(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?$r(Object(i),!0).forEach(function(s){yl(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$r(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function yl(t,a,i){return a=wl(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function wl(t){var a=jl(t,"string");return rt(a)=="symbol"?a:String(a)}function jl(t,a){if(rt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(rt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function _l(t){if(t==null)throw new TypeError("Cannot destructure "+t)}var Ll=l.memo(function(t){var a=Object.assign({},(_l(t),t));return e.jsx(Ln,vl({Icon:Sn,"aria-label":Re,background:dl,color:pl,iconMultiple:gl},a))});function it(t){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},it(t)}var kl=["size","style"];function Tr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function tn(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Tr(Object(i),!0).forEach(function(s){Sl(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Tr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Sl(t,a,i){return a=Nl(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function Nl(t){var a=Cl(t,"string");return it(a)=="symbol"?a:String(a)}function Cl(t,a){if(it(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(it(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Ol(t,a){if(t==null)return{};var i=Pl(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function Pl(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var mi=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=Ol(t,kl);return e.jsxs("svg",tn(tn({height:i,style:tn({flex:"none",lineHeight:1},s),viewBox:"0 0 24 24",width:i,xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:Re}),e.jsx("path",{d:"M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z",fill:"#D97757",fillRule:"nonzero"})]}))});function st(t){"@babel/helpers - typeof";return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},st(t)}var Al=["size","style"];function Er(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function an(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Er(Object(i),!0).forEach(function(s){zl(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Er(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function zl(t,a,i){return a=$l(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function $l(t){var a=Tl(t,"string");return st(a)=="symbol"?a:String(a)}function Tl(t,a){if(st(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(st(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function El(t,a){if(t==null)return{};var i=Ml(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function Ml(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var fi=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=El(t,Al);return e.jsxs("svg",an(an({fill:"currentColor",fillRule:"nonzero",height:i,style:an({flex:"none",lineHeight:1},s),viewBox:"0 0 97 24",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:Re}),e.jsx("path",{d:"M13.623 20.222c-3.417 0-5.753-1.901-6.855-4.827a12.992 12.992 0 01-.838-4.772c0-4.907 2.206-8.315 7.08-8.315 3.275 0 5.297 1.425 6.448 4.826h1.402l-.19-4.69C18.709 1.18 16.258.543 13.276.543c-4.2 0-7.775 1.874-9.763 5.254a11.357 11.357 0 00-1.511 5.872c0 3.753 1.777 7.08 5.113 8.926a11.95 11.95 0 005.943 1.398c3.254 0 5.835-.617 8.122-1.697l.593-5.172h-1.43c-.858 2.362-1.88 3.78-3.574 4.534-.831.373-1.88.564-3.146.564zm14.74-17.914L28.499 0h-.967L23.23 1.29v.699l1.907.882v16.142c0 1.1-.565 1.344-2.043 1.528v1.18h7.319v-1.18c-1.484-.184-2.042-.428-2.042-1.528V2.315l-.007-.007zm29.104 19.685h.565l4.95-.937v-1.208l-.695-.054c-1.157-.109-1.457-.346-1.457-1.29V9.897l.137-2.763h-.783l-4.678.672v1.181l.457.082c1.266.183 1.64.536 1.64 1.419v7.67c-1.212.937-2.369 1.527-3.744 1.527-1.525 0-2.471-.774-2.471-2.58V9.905l.136-2.763h-.804l-4.684.672v1.181l.484.082c1.266.183 1.64.536 1.64 1.418v7.08c0 3 1.703 4.426 4.412 4.426 2.07 0 3.765-1.1 5.038-2.627L57.474 22l-.007-.007zm-13.602-9.55c0-3.836-2.043-5.309-5.733-5.309-3.254 0-5.616 1.344-5.616 3.57 0 .666.238 1.175.721 1.528l2.478-.326c-.109-.746-.163-1.201-.163-1.391 0-1.263.674-1.901 2.042-1.901 2.022 0 3.044 1.419 3.044 3.7v.746l-5.106 1.527c-1.702.462-2.67.863-3.316 1.8a3.386 3.386 0 00-.476 1.9c0 2.172 1.497 3.706 4.057 3.706 1.852 0 3.493-.835 4.922-2.416.51 1.581 1.294 2.416 2.69 2.416 1.13 0 2.15-.455 3.063-1.344l-.272-.937a4.363 4.363 0 01-1.178.163c-.783 0-1.157-.617-1.157-1.826v-5.607zm-6.536 7.378c-1.396 0-2.26-.808-2.26-2.226 0-.964.456-1.528 1.43-1.854l4.139-1.31v3.965c-1.321.997-2.097 1.425-3.31 1.425zm43.095 1.235v-1.208l-.701-.054c-1.158-.109-1.45-.346-1.45-1.29V2.308L78.409 0h-.974l-4.302 1.29v.699l1.906.882V8.18a6.024 6.024 0 00-3.656-1.046c-4.276 0-7.612 3.245-7.612 8.098 0 3.998 2.397 6.761 6.346 6.761 2.042 0 3.819-.99 4.922-2.525l-.136 2.525h.571l4.95-.937zm-8.96-12.313c2.043 0 3.575 1.181 3.575 3.353v6.11a4.91 4.91 0 01-3.547 1.425c-2.928 0-4.412-2.308-4.412-5.39 0-3.462 1.695-5.498 4.385-5.498zm19.424 3.055c-.381-1.792-1.484-2.81-3.016-2.81-2.288 0-3.874 1.717-3.874 4.18 0 3.646 1.934 6.008 5.059 6.008a5.858 5.858 0 005.03-2.953l.913.245c-.408 3.163-3.281 5.525-6.808 5.525-4.14 0-6.992-3.054-6.992-7.399 0-4.378 3.098-7.46 7.237-7.46 3.09 0 5.27 1.853 5.97 5.07l-10.783 3.3V14.05l7.264-2.247v-.006z"})]}))});function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ot(t)}var Dl=["type"];function Mr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function Il(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Mr(Object(i),!0).forEach(function(s){Fl(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Mr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Fl(t,a,i){return a=Rl(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function Rl(t){var a=Bl(t,"string");return ot(a)=="symbol"?a:String(a)}function Bl(t,a){if(ot(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(ot(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Wl(t,a){if(t==null)return{};var i=Vl(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function Vl(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var Ul=l.memo(function(t){var a=t.type,i=a===void 0?"mono":a,s=Wl(t,Dl),n=i==="color"?mi:Sn;return e.jsx(kn,Il({Icon:n,Text:fi,"aria-label":Re,spaceMultiple:cl,textMultiple:ll},s))}),he=Sn;he.Color=mi;he.Text=fi;he.Combine=Ul;he.Avatar=Ll;he.colorPrimary=bi;he.title=Re;var ie="Codex",Kl=.8,Yl=.2,vi="#fff",Gl=vi,ql="#fff",Hl=.7;function lt(t){"@babel/helpers - typeof";return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},lt(t)}var Zl=["size","style"];function Dr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function nn(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Dr(Object(i),!0).forEach(function(s){Ql(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Dr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Ql(t,a,i){return a=Xl(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function Xl(t){var a=Jl(t,"string");return lt(a)=="symbol"?a:String(a)}function Jl(t,a){if(lt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(lt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function ec(t,a){if(t==null)return{};var i=tc(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function tc(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var ac=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=ec(t,Zl),o=hi(ie),g=o.id,x=o.fill;return e.jsxs("svg",nn(nn({height:i,style:nn({flex:"none",lineHeight:1},s),viewBox:"0 0 24 24",width:i,xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:ie}),e.jsx("path",{clipRule:"evenodd",d:"M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z",fill:x,fillRule:"evenodd"}),e.jsx("defs",{children:e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:g,x1:"12",x2:"12",y1:"0",y2:"24",children:[e.jsx("stop",{stopColor:"#B1A7FF"}),e.jsx("stop",{offset:".5",stopColor:"#7A9DFF"}),e.jsx("stop",{offset:"1",stopColor:"#3941FF"})]})})]}))});function ct(t){"@babel/helpers - typeof";return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ct(t)}function Ir(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function nc(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Ir(Object(i),!0).forEach(function(s){rc(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ir(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function rc(t,a,i){return a=ic(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function ic(t){var a=sc(t,"string");return ct(a)=="symbol"?a:String(a)}function sc(t,a){if(ct(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(ct(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function oc(t){if(t==null)throw new TypeError("Cannot destructure "+t)}var lc=l.memo(function(t){var a=Object.assign({},(oc(t),t));return e.jsx(Ln,nc({Icon:ac,"aria-label":ie,background:Gl,color:ql,iconMultiple:Hl},a))});function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},dt(t)}var cc=["size","style"];function Fr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function rn(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Fr(Object(i),!0).forEach(function(s){dc(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Fr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function dc(t,a,i){return a=pc(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function pc(t){var a=gc(t,"string");return dt(a)=="symbol"?a:String(a)}function gc(t,a){if(dt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(dt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function xc(t,a){if(t==null)return{};var i=uc(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function uc(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var yi=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=xc(t,cc),o=hi(ie),g=o.id,x=o.fill;return e.jsxs("svg",rn(rn({height:i,style:rn({flex:"none",lineHeight:1},s),viewBox:"0 0 24 24",width:i,xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:ie}),e.jsx("path",{d:"M19.503 0H4.496A4.496 4.496 0 000 4.496v15.007A4.496 4.496 0 004.496 24h15.007A4.496 4.496 0 0024 19.503V4.496A4.496 4.496 0 0019.503 0z",fill:"#fff"}),e.jsx("path",{d:"M9.064 3.344a4.578 4.578 0 012.285-.312c1 .115 1.891.54 2.673 1.275.01.01.024.017.037.021a.09.09 0 00.043 0 4.55 4.55 0 013.046.275l.047.022.116.057a4.581 4.581 0 012.188 2.399c.209.51.313 1.041.315 1.595a4.24 4.24 0 01-.134 1.223.123.123 0 00.03.115c.594.607.988 1.33 1.183 2.17.289 1.425-.007 2.71-.887 3.854l-.136.166a4.548 4.548 0 01-2.201 1.388.123.123 0 00-.081.076c-.191.551-.383 1.023-.74 1.494-.9 1.187-2.222 1.846-3.711 1.838-1.187-.006-2.239-.44-3.157-1.302a.107.107 0 00-.105-.024c-.388.125-.78.143-1.204.138a4.441 4.441 0 01-1.945-.466 4.544 4.544 0 01-1.61-1.335c-.152-.202-.303-.392-.414-.617a5.81 5.81 0 01-.37-.961 4.582 4.582 0 01-.014-2.298.124.124 0 00.006-.056.085.085 0 00-.027-.048 4.467 4.467 0 01-1.034-1.651 3.896 3.896 0 01-.251-1.192 5.189 5.189 0 01.141-1.6c.337-1.112.982-1.985 1.933-2.618.212-.141.413-.251.601-.33.215-.089.43-.164.646-.227a.098.098 0 00.065-.066 4.51 4.51 0 01.829-1.615 4.535 4.535 0 011.837-1.388zm3.482 10.565a.637.637 0 000 1.272h3.636a.637.637 0 100-1.272h-3.636zM8.462 9.23a.637.637 0 00-1.106.631l1.272 2.224-1.266 2.136a.636.636 0 101.095.649l1.454-2.455a.636.636 0 00.005-.64L8.462 9.23z",fill:x}),e.jsx("defs",{children:e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:g,x1:"12",x2:"12",y1:"3",y2:"21",children:[e.jsx("stop",{stopColor:"#B1A7FF"}),e.jsx("stop",{offset:".5",stopColor:"#7A9DFF"}),e.jsx("stop",{offset:"1",stopColor:"#3941FF"})]})})]}))});function pt(t){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},pt(t)}var hc=["size","style"];function Rr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function sn(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Rr(Object(i),!0).forEach(function(s){bc(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Rr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function bc(t,a,i){return a=mc(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function mc(t){var a=fc(t,"string");return pt(a)=="symbol"?a:String(a)}function fc(t,a){if(pt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(pt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function vc(t,a){if(t==null)return{};var i=yc(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function yc(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var wi=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=vc(t,hc);return e.jsxs("svg",sn(sn({fill:"currentColor",fillRule:"evenodd",height:i,style:sn({flex:"none",lineHeight:1},s),viewBox:"0 0 24 24",width:i,xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:ie}),e.jsx("path",{clipRule:"evenodd",d:"M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z"})]}))});function gt(t){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},gt(t)}var wc=["size","style"];function Br(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function on(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Br(Object(i),!0).forEach(function(s){jc(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Br(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function jc(t,a,i){return a=_c(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function _c(t){var a=Lc(t,"string");return gt(a)=="symbol"?a:String(a)}function Lc(t,a){if(gt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(gt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function kc(t,a){if(t==null)return{};var i=Sc(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function Sc(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var ji=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=kc(t,wc);return e.jsxs("svg",on(on({fill:"currentColor",fillRule:"evenodd",height:i,style:on({flex:"none",lineHeight:1},s),viewBox:"0 0 91 24",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:ie}),e.jsx("path",{d:"M79.915 14.964l-5.53-7.548h3.33l3.88 5.256 3.88-5.256h3.24l-5.5 7.486 5.683 7.792h-3.361l-4.003-5.5-4.064 5.5H74.2l5.715-7.73zM66.368 23c-1.345 0-2.567-.326-3.667-.978-1.08-.652-1.935-1.579-2.567-2.78-.631-1.203-.947-2.608-.947-4.217 0-1.59.316-2.974.947-4.156.652-1.202 1.518-2.129 2.597-2.78 1.08-.652 2.272-.978 3.575-.978 1.813 0 3.33.55 4.553 1.65 1.222 1.1 1.956 2.597 2.2 4.491.082.693.112 1.477.092 2.353H62.09c.06 1.548.489 2.76 1.283 3.636.815.876 1.793 1.314 2.933 1.314h.184c.855 0 1.599-.224 2.23-.672.632-.448 1.06-1.06 1.284-1.833h2.933a6.147 6.147 0 01-2.322 3.575C69.433 22.54 68.018 23 66.368 23zm3.819-9.687c-.082-1.16-.469-2.077-1.161-2.75-.693-.692-1.558-1.038-2.597-1.038h-.214c-.978 0-1.844.315-2.597.947-.734.611-1.212 1.558-1.437 2.841h8.006zM47.834 23c-1.324 0-2.516-.326-3.575-.978-1.039-.652-1.854-1.579-2.444-2.78-.591-1.202-.887-2.598-.887-4.187 0-1.588.306-2.984.917-4.186.611-1.201 1.446-2.128 2.506-2.78 1.08-.652 2.281-.978 3.605-.978 1.08 0 2.047.224 2.903.672.855.449 1.497 1.019 1.925 1.711V1.306h2.903v21.388h-2.903v-2.108c-.408.672-1.06 1.242-1.956 1.711-.896.469-1.894.703-2.994.703zm.58-2.475c.856 0 1.62-.234 2.292-.703.672-.468 1.192-1.11 1.558-1.925.387-.835.58-1.782.58-2.841 0-1.06-.193-1.997-.58-2.812-.366-.835-.886-1.487-1.558-1.955a3.911 3.911 0 00-2.292-.703h-.183c-1.304 0-2.363.51-3.178 1.528-.794 1.018-1.191 2.332-1.191 3.941 0 1.61.397 2.924 1.191 3.942.815 1.019 1.874 1.528 3.178 1.528h.183zM31.022 23c-1.406 0-2.679-.337-3.82-1.009a7.367 7.367 0 01-2.688-2.841c-.652-1.223-.978-2.587-.978-4.095 0-1.507.326-2.862.978-4.064.651-1.222 1.548-2.17 2.688-2.841 1.141-.693 2.414-1.04 3.82-1.04 1.405 0 2.668.347 3.789 1.04 1.14.672 2.037 1.62 2.688 2.841.652 1.202.978 2.557.978 4.064 0 1.508-.326 2.872-.977 4.095a7.367 7.367 0 01-2.69 2.841C33.69 22.663 32.428 23 31.023 23zm.06-2.476c.857 0 1.62-.224 2.293-.672.672-.468 1.201-1.11 1.589-1.925.386-.835.58-1.792.58-2.872 0-1.08-.194-2.027-.58-2.841-.388-.836-.917-1.477-1.59-1.925a3.911 3.911 0 00-2.291-.703H30.9c-1.304 0-2.373.51-3.209 1.528-.814.998-1.222 2.312-1.222 3.941 0 1.63.407 2.954 1.222 3.972.835.998 1.905 1.497 3.209 1.497h.183zM12.053 23c-2.037 0-3.82-.469-5.348-1.406-1.507-.957-2.668-2.271-3.483-3.941S2 14.098 2 12c0-2.098.407-3.982 1.222-5.653.835-1.67 2.017-2.974 3.545-3.91C8.294 1.478 10.057 1 12.053 1c1.609 0 3.055.316 4.338.947 1.304.611 2.363 1.477 3.178 2.597.815 1.1 1.304 2.374 1.467 3.82h-3.117c-.244-1.365-.876-2.465-1.894-3.3-1.019-.856-2.302-1.283-3.85-1.283h-.245c-1.385 0-2.597.356-3.636 1.069-1.039.713-1.833 1.69-2.383 2.933-.55 1.243-.825 2.648-.825 4.217 0 1.568.275 2.974.825 4.216.55 1.243 1.344 2.22 2.383 2.934 1.04.713 2.251 1.07 3.636 1.07h.245c1.548 0 2.831-.418 3.85-1.254 1.039-.855 1.68-1.976 1.925-3.36h3.086c-.184 1.446-.683 2.729-1.497 3.85-.795 1.12-1.844 1.996-3.148 2.627-1.303.611-2.75.917-4.338.917z"})]}))});function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},xt(t)}var Nc=["type"];function Wr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function Cc(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Wr(Object(i),!0).forEach(function(s){Oc(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Wr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Oc(t,a,i){return a=Pc(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function Pc(t){var a=Ac(t,"string");return xt(a)=="symbol"?a:String(a)}function Ac(t,a){if(xt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(xt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function zc(t,a){if(t==null)return{};var i=$c(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function $c(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var Tc=l.memo(function(t){var a=t.type,i=a===void 0?"mono":a,s=zc(t,Nc),n=i==="color"?yi:wi;return e.jsx(kn,Cc({Icon:n,Text:ji,"aria-label":ie,spaceMultiple:Yl,textMultiple:Kl},s))}),Se=wi;Se.Color=yi;Se.Text=ji;Se.Combine=Tc;Se.Avatar=lc;Se.colorPrimary=vi;Se.title=ie;var ke="OpenClaw",Ec=.75,Mc=.2,Dc="#ff4d4d",Ic="#000",Fc="#fff",Rc=.75;function ut(t){"@babel/helpers - typeof";return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ut(t)}var Bc=["size","style"];function Vr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function ln(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Vr(Object(i),!0).forEach(function(s){Wc(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Vr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Wc(t,a,i){return a=Vc(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function Vc(t){var a=Uc(t,"string");return ut(a)=="symbol"?a:String(a)}function Uc(t,a){if(ut(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(ut(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Kc(t,a){return Hc(t)||qc(t,a)||Gc(t,a)||Yc()}function Yc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gc(t,a){if(t){if(typeof t=="string")return Ur(t,a);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ur(t,a)}}function Ur(t,a){(a==null||a>t.length)&&(a=t.length);for(var i=0,s=new Array(a);i<a;i++)s[i]=t[i];return s}function qc(t,a){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var s,n,o,g,x=[],m=!0,h=!1;try{if(o=(i=i.call(t)).next,a!==0)for(;!(m=(s=o.call(i)).done)&&(x.push(s.value),x.length!==a);m=!0);}catch(f){h=!0,n=f}finally{try{if(!m&&i.return!=null&&(g=i.return(),Object(g)!==g))return}finally{if(h)throw n}}return x}}function Hc(t){if(Array.isArray(t))return t}function Zc(t,a){if(t==null)return{};var i=Qc(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function Qc(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var Nn=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=Zc(t,Bc),o=ol(ke,3),g=Kc(o,3),x=g[0],m=g[1],h=g[2];return e.jsxs("svg",ln(ln({height:i,style:ln({flex:"none",lineHeight:1},s),viewBox:"0 0 24 24",width:i,xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:ke}),e.jsx("path",{d:"M12 2.568c-6.33 0-9.495 5.275-9.495 9.495 0 4.22 3.165 8.44 6.33 9.494v2.11h2.11v-2.11s1.055.422 2.11 0v2.11h2.11v-2.11c3.165-1.055 6.33-5.274 6.33-9.494S18.33 2.568 12 2.568z",fill:x.fill}),e.jsx("path",{d:"M3.56 9.953C.396 8.898-.66 11.008.396 13.118c1.055 2.11 3.164 1.055 4.22-1.055.632-1.477 0-2.11-1.056-2.11z",fill:m.fill}),e.jsx("path",{d:"M20.44 9.953c3.164-1.055 4.22 1.055 3.164 3.165-1.055 2.11-3.164 1.055-4.22-1.055-.632-1.477 0-2.11 1.056-2.11z",fill:h.fill}),e.jsx("path",{d:"M5.507 1.875c.476-.285 1.036-.233 1.615.037.577.27 1.223.774 1.937 1.488a.316.316 0 01-.447.447c-.693-.693-1.279-1.138-1.757-1.361-.475-.222-.795-.205-1.022-.069a.317.317 0 01-.326-.542zM16.877 1.913c.58-.27 1.14-.323 1.616-.038a.317.317 0 01-.326.542c-.227-.136-.547-.153-1.022.069-.478.223-1.064.668-1.756 1.361a.316.316 0 11-.448-.447c.714-.714 1.36-1.218 1.936-1.487z",fill:"#FF4D4D"}),e.jsx("path",{d:"M8.835 9.109a1.266 1.266 0 100-2.532 1.266 1.266 0 000 2.532zM15.165 9.109a1.266 1.266 0 100-2.532 1.266 1.266 0 000 2.532z",fill:"#050810"}),e.jsx("path",{d:"M9.046 8.16a.527.527 0 100-1.056.527.527 0 000 1.055zM15.376 8.16a.527.527 0 100-1.055.527.527 0 000 1.054z",fill:"#00E5CC"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:x.id,x1:"-.659",x2:"27.023",y1:".458",y2:"22.855",children:[e.jsx("stop",{stopColor:"#FF4D4D"}),e.jsx("stop",{offset:"1",stopColor:"#991B1B"})]}),e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:m.id,x1:"0",x2:"4.311",y1:"9.672",y2:"14.949",children:[e.jsx("stop",{stopColor:"#FF4D4D"}),e.jsx("stop",{offset:"1",stopColor:"#991B1B"})]}),e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:h.id,x1:"19.385",x2:"24.399",y1:"9.953",y2:"14.462",children:[e.jsx("stop",{stopColor:"#FF4D4D"}),e.jsx("stop",{offset:"1",stopColor:"#991B1B"})]})]})]}))});function ht(t){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ht(t)}function Kr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function Xc(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Kr(Object(i),!0).forEach(function(s){Jc(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Kr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Jc(t,a,i){return a=ed(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function ed(t){var a=td(t,"string");return ht(a)=="symbol"?a:String(a)}function td(t,a){if(ht(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(ht(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function ad(t){if(t==null)throw new TypeError("Cannot destructure "+t)}var nd=l.memo(function(t){var a=Object.assign({},(ad(t),t));return e.jsx(Ln,Xc({Icon:Nn,"aria-label":ke,background:Ic,color:Fc,iconMultiple:Rc},a))});function bt(t){"@babel/helpers - typeof";return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},bt(t)}var rd=["size","style"];function Yr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function cn(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Yr(Object(i),!0).forEach(function(s){id(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Yr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function id(t,a,i){return a=sd(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function sd(t){var a=od(t,"string");return bt(a)=="symbol"?a:String(a)}function od(t,a){if(bt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(bt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function ld(t,a){if(t==null)return{};var i=cd(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function cd(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var _i=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=ld(t,rd);return e.jsxs("svg",cn(cn({fill:"currentColor",fillRule:"evenodd",height:i,style:cn({flex:"none",lineHeight:1},s),viewBox:"0 0 24 24",width:i,xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:ke}),e.jsxs("g",{clipPath:"url(#a)",children:[e.jsx("path",{d:"M9.046 7.104a.527.527 0 110 1.055.527.527 0 010-1.055z"}),e.jsx("path",{d:"M15.376 7.104a.528.528 0 110 1.056.528.528 0 010-1.056z"}),e.jsx("path",{clipRule:"evenodd",d:"M16.877 1.912c.58-.27 1.14-.323 1.616-.037a.317.317 0 01-.326.542c-.227-.136-.547-.153-1.022.068-.352.165-.765.45-1.234.866 2.683 1.17 4.4 3.5 5.148 5.921a6.421 6.421 0 00-.704.184c-.578.016-1.174.204-1.502.735-.338.55-.268 1.276.072 2.069l.005.012.007.014c.523 1.045 1.318 1.91 2.2 2.284-.912 3.274-3.44 6.144-5.972 6.988v2.109h-2.11v-2.11c-1.043.417-2.086.01-2.11 0v2.11h-2.11v-2.11c-2.531-.843-5.061-3.713-5.973-6.987.882-.373 1.678-1.238 2.2-2.284l.007-.014.006-.012c.34-.793.41-1.518.071-2.069-.327-.531-.923-.719-1.503-.735a6.409 6.409 0 00-.704-.183c.749-2.421 2.466-4.751 5.149-5.922-.47-.416-.88-.701-1.234-.866-.474-.221-.794-.204-1.021-.068a.318.318 0 01-.435-.109.317.317 0 01.109-.433c.476-.286 1.036-.233 1.615.037.49.229 1.031.628 1.621 1.182A9.924 9.924 0 0112 2.568c1.199 0 2.284.19 3.256.526.59-.554 1.13-.953 1.62-1.182zM8.835 6.577a1.266 1.266 0 100 2.532 1.266 1.266 0 000-2.532zm6.33 0a1.267 1.267 0 100 2.533 1.267 1.267 0 000-2.533z"}),e.jsx("path",{d:"M.395 13.118c-.966-1.932-.163-3.863 2.41-3.365v-.001l.05.01c.084.018.17.038.26.06.033.009.067.017.1.027.084.022.168.048.255.076l.09.027c.528 0 .95.158 1.16.501.212.343.212.87-.105 1.61-.085.17-.178.333-.276.489l-.01.017a4.967 4.967 0 01-.62.791l-.019.02c-1.092 1.117-2.496 1.336-3.295-.262z"}),e.jsx("path",{d:"M21.193 9.753c2.574-.5 3.378 1.433 2.411 3.365-.58 1.159-1.476 1.361-2.342.96l-.011-.005a2.419 2.419 0 01-.114-.056l-.019-.01a2.751 2.751 0 01-.115-.067l-.023-.014c-.035-.022-.071-.044-.106-.068l-.05-.035c-.55-.388-1.062-1.007-1.44-1.76-.276-.647-.311-1.132-.174-1.472.176-.439.636-.639 1.23-.639.032-.011.066-.02.099-.03.08-.026.16-.05.238-.072l.117-.03a5.502 5.502 0 01.3-.067z"})]}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:"b",x1:"-.659",x2:"27.023",y1:".458",y2:"22.855",children:[e.jsx("stop",{stopColor:"#FF4D4D"}),e.jsx("stop",{offset:"1",stopColor:"#991B1B"})]}),e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:"c",x1:"-.659",x2:"27.023",y1:".458",y2:"22.855",children:[e.jsx("stop",{stopColor:"#FF4D4D"}),e.jsx("stop",{offset:"1",stopColor:"#991B1B"})]}),e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:"d",x1:"-.659",x2:"27.023",y1:".458",y2:"22.855",children:[e.jsx("stop",{stopColor:"#FF4D4D"}),e.jsx("stop",{offset:"1",stopColor:"#991B1B"})]}),e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:"e",x1:"-.659",x2:"27.023",y1:".458",y2:"22.855",children:[e.jsx("stop",{stopColor:"#FF4D4D"}),e.jsx("stop",{offset:"1",stopColor:"#991B1B"})]}),e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:"f",x1:"-.659",x2:"27.023",y1:".458",y2:"22.855",children:[e.jsx("stop",{stopColor:"#FF4D4D"}),e.jsx("stop",{offset:"1",stopColor:"#991B1B"})]}),e.jsx("clipPath",{id:"a",children:e.jsx("path",{d:"M0 0h24v24H0z"})})]})]}))});function mt(t){"@babel/helpers - typeof";return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},mt(t)}var dd=["size","style"];function Gr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function dn(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Gr(Object(i),!0).forEach(function(s){pd(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Gr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function pd(t,a,i){return a=gd(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function gd(t){var a=xd(t,"string");return mt(a)=="symbol"?a:String(a)}function xd(t,a){if(mt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(mt(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function ud(t,a){if(t==null)return{};var i=hd(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function hd(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var Li=l.memo(function(t){var a=t.size,i=a===void 0?"1em":a,s=t.style,n=ud(t,dd);return e.jsxs("svg",dn(dn({fill:"currentColor",fillRule:"nonzero",height:i,style:dn({flex:"none",lineHeight:1},s),viewBox:"0 0 140 24",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[e.jsx("title",{children:ke}),e.jsx("path",{d:"M122.59 19.6h-6.082l-3.287-13.044h5.047l.932 4.71.492 4.659h.336l1.087-5.177 1.294-4.192h6.264l1.294 4.192 1.087 5.177h.336l.518-4.659.906-4.71h4.969L134.341 19.6h-6.082l-1.683-5.228-.957-3.908h-.337l-.983 3.908-1.709 5.228zM112.685 19.6h-4.555v-2.899h-.259v-4.633c0-.655-.173-1.07-.518-1.242-.328-.19-.923-.285-1.786-.285-.793 0-1.345.095-1.656.285-.293.19-.44.561-.44 1.113v.104h-4.866v-.052c0-1.156.302-2.157.906-3.002.604-.863 1.458-1.527 2.562-1.993 1.105-.466 2.39-.7 3.857-.7 1.518 0 2.778.242 3.779.726 1 .465 1.742 1.138 2.225 2.018.501.863.751 1.907.751 3.132V19.6zm-9.732.259c-1.466 0-2.605-.32-3.416-.958-.794-.638-1.19-1.51-1.19-2.614 0-.62.146-1.173.44-1.656.293-.483.75-.872 1.371-1.165.621-.31 1.424-.518 2.407-.621l5.565-.543v2.691l-4.271.492c-.224.017-.388.069-.491.155a.453.453 0 00-.13.337c0 .207.095.345.285.414.207.052.5.078.88.078.863 0 1.544-.044 2.044-.13.501-.104.863-.285 1.087-.543.225-.26.337-.63.337-1.113l.362-.104v2.278h-.362c-.242.914-.768 1.648-1.579 2.2-.811.535-1.924.802-3.339.802zM97.18 19.6h-4.865V2.26h4.865V19.6zM81.715 19.858c-2.001 0-3.718-.362-5.15-1.087-1.432-.742-2.528-1.777-3.287-3.105-.76-1.346-1.14-2.925-1.14-4.737 0-1.811.38-3.382 1.14-4.71.759-1.346 1.855-2.381 3.287-3.106C77.997 2.37 79.714 2 81.715 2c1.95 0 3.615.293 4.995.88 1.398.587 2.468 1.432 3.21 2.536.742 1.105 1.113 2.433 1.113 3.986v.44h-5.436v-.44c0-.983-.276-1.682-.828-2.096-.552-.432-1.544-.647-2.976-.647-1.174 0-2.088.12-2.744.362a2.179 2.179 0 00-1.346 1.268c-.258.604-.388 1.484-.388 2.64 0 1.139.13 2.019.389 2.64a2.266 2.266 0 001.345 1.294c.656.225 1.57.337 2.744.337 1.432 0 2.424-.207 2.976-.621.552-.432.828-1.14.828-2.123v-.44h5.436v.44c0 1.536-.371 2.864-1.113 3.986-.742 1.104-1.812 1.95-3.21 2.537-1.38.586-3.045.88-4.995.88zM70.96 19.6h-4.866v-6.574c0-.914-.199-1.535-.596-1.863-.397-.345-1.13-.518-2.2-.518-1.07 0-1.786.164-2.148.492-.345.31-.518.888-.518 1.734h-.491l-.414-2.355h.854a5.758 5.758 0 01.698-2.045c.38-.638.932-1.156 1.657-1.553.742-.414 1.69-.621 2.847-.621 1.173 0 2.14.216 2.899.647.776.431 1.346 1.018 1.708 1.76.38.742.57 1.587.57 2.536v8.36zm-10.328 0h-4.865V6.556h4.555v4.011l.31.13V19.6zM47.192 19.859c-1.467 0-2.77-.224-3.908-.673-1.14-.449-2.028-1.173-2.666-2.174-.639-1-.958-2.312-.958-3.934 0-1.415.32-2.623.958-3.624a6.219 6.219 0 012.614-2.329c1.121-.552 2.407-.828 3.856-.828 1.501 0 2.804.25 3.908.75 1.105.484 1.959 1.208 2.563 2.175.604.949.906 2.122.906 3.52 0 .224-.009.43-.026.62 0 .173-.017.38-.052.622H42.844v-2.459h8.023l-1.061 1.527v-.906c0-.794-.207-1.346-.621-1.656-.397-.31-1.13-.466-2.2-.466-1.105 0-1.855.172-2.252.518-.38.345-.57.966-.57 1.863v1.242c0 .915.199 1.536.596 1.864.397.328 1.147.492 2.252.492.983 0 1.639-.087 1.967-.26.345-.189.517-.474.517-.853v-.285h4.866v.31c0 .967-.293 1.82-.88 2.563-.587.742-1.415 1.328-2.485 1.76-1.07.414-2.338.621-3.804.621zM32.648 19.859c-1.536 0-2.692-.328-3.469-.984-.776-.672-1.26-1.552-1.449-2.64h-.75v-3.002h.491c0 .604.112 1.07.337 1.398.241.31.595.526 1.06.647.484.103 1.088.155 1.813.155.759 0 1.354-.078 1.785-.233.449-.155.768-.405.958-.75.19-.345.285-.803.285-1.372 0-.587-.095-1.044-.285-1.372-.19-.345-.509-.586-.958-.724-.431-.156-1.026-.233-1.786-.233-1.087 0-1.898.146-2.432.44-.518.293-.777.914-.777 1.863h-.492l-.362-2.976h.802c.207-1.294.716-2.243 1.527-2.847.811-.622 1.976-.932 3.494-.932 1.33 0 2.45.276 3.365.828.932.535 1.63 1.311 2.096 2.33.484 1 .725 2.208.725 3.623s-.233 2.631-.699 3.65c-.465 1-1.147 1.776-2.044 2.329-.88.535-1.959.802-3.236.802zM27.47 24h-4.866V6.556h4.556v3.675l.31.336V24zM11.602 19.858c-2.001 0-3.727-.362-5.176-1.087-1.432-.742-2.528-1.777-3.287-3.105C2.379 14.32 2 12.74 2 10.929c0-1.811.38-3.382 1.139-4.71.759-1.346 1.855-2.381 3.287-3.106C7.876 2.37 9.6 2 11.602 2c2.07 0 3.822.371 5.254 1.113 1.45.725 2.554 1.76 3.313 3.106.76 1.328 1.139 2.899 1.139 4.71 0 1.812-.38 3.39-1.139 4.737-.76 1.328-1.863 2.363-3.313 3.105-1.432.725-3.183 1.087-5.254 1.087zm0-4.658c1.173 0 2.088-.112 2.744-.337.655-.241 1.113-.673 1.371-1.294.276-.621.414-1.501.414-2.64 0-1.156-.138-2.036-.414-2.64-.258-.62-.716-1.044-1.371-1.268-.656-.241-1.57-.362-2.744-.362-1.173 0-2.079.12-2.717.362A2.179 2.179 0 007.539 8.29c-.242.604-.363 1.484-.363 2.64 0 1.139.121 2.019.363 2.64a2.266 2.266 0 001.346 1.294c.638.225 1.544.337 2.717.337z"})]}))});function ft(t){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ft(t)}var bd=["type"];function qr(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,s)}return i}function md(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?qr(Object(i),!0).forEach(function(s){fd(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):qr(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function fd(t,a,i){return a=vd(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function vd(t){var a=yd(t,"string");return ft(a)=="symbol"?a:String(a)}function yd(t,a){if(ft(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,a);if(ft(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function wd(t,a){if(t==null)return{};var i=jd(t,a),s,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)s=o[n],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}function jd(t,a){if(t==null)return{};var i={},s=Object.keys(t),n,o;for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var _d=l.memo(function(t){var a=t.type,i=a===void 0?"mono":a,s=wd(t,bd),n=i==="color"?Nn:_i;return e.jsx(kn,md({Icon:n,Text:Li,"aria-label":ke,spaceMultiple:Mc,textMultiple:Ec},s))}),Ne=_i;Ne.Color=Nn;Ne.Text=Li;Ne.Combine=_d;Ne.Avatar=nd;Ne.colorPrimary=Dc;Ne.title=ke;const Ld="animal-wrapper-pbOTq",kd="animal-trigger-2-Ahh",Sd="animal-open-867xo",Nd="animal-value-623RB",Cd="animal-placeholder-vpC8E",Od="animal-arrow-xNbxA",Pd="animal-dropdown-0l6jF",Ad="animal-option-GEkLI",zd="animal-active-jtSpt",$d="animal-hovered-N-cco",Td="animal-pillBar-O9cTb",Ed="animal-optionDot-FQtyw",Md="animal-disabled-Oy12C",Y={wrapper:Ld,trigger:kd,open:Sd,value:Nd,placeholder:Cd,arrow:Od,dropdown:Pd,option:Ad,active:zd,hovered:$d,pillBar:Td,optionDot:Ed,disabled:Md},vn=({options:t,value:a,onChange:i,placeholder:s="请选择",disabled:n=!1})=>{const[o,g]=l.useState(!1),[x,m]=l.useState(null),[h,f]=l.useState({}),[k,j]=l.useState(!1),b=l.useRef(null),E=t.find(y=>y.key===a)?.label||s;l.useEffect(()=>{const y=T=>{b.current&&!b.current.contains(T.target)&&(g(!1),j(!1))};return o&&document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[o]),l.useEffect(()=>{if(o&&b.current){const y=b.current.getBoundingClientRect(),T=window.innerWidth,S=window.innerHeight,C=t.length*44+24,_={position:"absolute"};y.right+200>T?(_.right="100%",_.marginRight="6px",_.left="auto"):(_.left="100%",_.marginLeft="6px",_.right="auto");const $=S-y.bottom,O=y.top;$<C&&O>$?(_.top="auto",_.bottom="100%",_.marginBottom="6px",delete _.transform):$<C||y.top<C?(_.top="100%",_.marginTop="6px",_.bottom="auto",delete _.transform):(_.top="50%",_.transform="translateY(-50%)",_.bottom="auto"),f(_),requestAnimationFrame(()=>{j(!0)})}else o||j(!1)},[o,t.length]);const N=y=>{i(y),g(!1),j(!1)};return e.jsxs("div",{ref:b,className:`${Y.wrapper} ${n?Y.disabled:""}`,children:[e.jsxs("div",{className:`${Y.trigger} ${o?Y.open:""}`,onClick:()=>!n&&g(!o),children:[e.jsx("span",{className:a?Y.value:Y.placeholder,children:E}),e.jsx("span",{className:Y.arrow,children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),o&&k&&e.jsx("div",{className:Y.dropdown,style:h,children:t.map(y=>e.jsxs("div",{className:`${Y.option} ${a===y.key?Y.active:""} ${x===y.key?Y.hovered:""}`,onClick:()=>N(y.key),onMouseEnter:()=>m(y.key),onMouseLeave:()=>m(null),children:[e.jsx("span",{className:Y.optionDot}),y.label,a===y.key&&e.jsx("div",{className:Y.pillBar})]},y.key))})]})};vn.displayName="Select";var Hr={exports:{}},Zr;function Dd(){return Zr||(Zr=1,(function(t){(function(){var a={}.hasOwnProperty;function i(){for(var o="",g=0;g<arguments.length;g++){var x=arguments[g];x&&(o=n(o,s(x)))}return o}function s(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return i.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var g="";for(var x in o)a.call(o,x)&&o[x]&&(g=n(g,x));return g}function n(o,g){return g?o?o+" "+g:o+g:o}t.exports?(i.default=i,t.exports=i):window.classNames=i})()})(Hr)),Hr.exports}Dd();const Id=["80% 55%","69% 34%","8% 6%","41% 38%","86% 85%","82% 18%","51% 4%"],Fd=["--gradient-one","--gradient-two","--gradient-three","--gradient-four","--gradient-five","--gradient-six","--gradient-seven"],Rd=[0,1,2,0,1,2,1];function Bd(t){const a=t.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);return a?{h:Number(a[1]),s:Number(a[2]),l:Number(a[3])}:{h:40,s:80,l:80}}function Wd(t,a){const{h:i,s,l:n}=Bd(t),o=`${i}deg ${s}% ${n}%`,g=[100,60,50,40,30,20,10],x=["","-60","-50","-40","-30","-20","-10"],m={};for(let h=0;h<g.length;h+=1)m[`--glow-color${x[h]}`]=`hsl(${o} / ${Math.min(g[h]*a,100)}%)`;return m}function Vd(t){const a={};for(let i=0;i<7;i+=1){const s=t[Math.min(Rd[i],t.length-1)];a[Fd[i]]=`radial-gradient(at ${Id[i]}, ${s} 0px, transparent 50%)`}return a["--gradient-base"]=`linear-gradient(${t[0]} 0 100%)`,a}function Ud({as:t,children:a,className:i,edgeSensitivity:s=30,glowColor:n="40 80 80",backgroundColor:o="#120F17",borderRadius:g=28,glowRadius:x=40,glowIntensity:m=1,coneSpread:h=25,animated:f=!1,animationDurationMs:k=5e3,colors:j=["#c084fc","#f472b6","#38bdf8"],fillOpacity:b=.5,perimeterGlow:E=!1,holographic:N=!1,...y}){const T=t||"div",S=l.useRef(null),C=N,_=["border-glow-card",E?"border-glow-card--perimeter":"",C?"border-glow-card--holographic":"",i].filter(Boolean).join(" "),$=l.useCallback(P=>{const{width:A,height:D}=P.getBoundingClientRect();return[A/2,D/2]},[]),O=l.useCallback((P,A,D)=>{const[H,F]=$(P),U=A-H,ee=D-F;let se=1/0,K=1/0;return U!==0&&(se=H/Math.abs(U)),ee!==0&&(K=F/Math.abs(ee)),Math.min(Math.max(1/Math.min(se,K),0),1)},[$]),M=l.useCallback((P,A,D)=>{const[H,F]=$(P),U=A-H,ee=D-F;if(U===0&&ee===0)return 0;let K=Math.atan2(ee,U)*180/Math.PI+90;return K<0&&(K+=360),K},[$]),z=l.useCallback(P=>{const A=S.current;if(!A)return;const D=A.getBoundingClientRect(),H=P.clientX-D.left,F=P.clientY-D.top,U=O(A,H,F),ee=M(A,H,F);A.style.setProperty("--edge-proximity",`${(U*100).toFixed(3)}`),A.style.setProperty("--cursor-angle",`${ee.toFixed(3)}deg`)},[M,O]);l.useEffect(()=>{if(!(f||C))return document.addEventListener("pointermove",z,{passive:!0}),()=>{document.removeEventListener("pointermove",z)}},[f,z,C]),l.useEffect(()=>{if(!f||C||!S.current)return;const P=S.current,A=k;let D=0;const H=performance.now();P.classList.add("sweep-active"),P.style.setProperty("--edge-proximity","100");const F=U=>{const se=(U-H)%A/A;P.style.setProperty("--cursor-angle",`${(se*360).toFixed(3)}deg`),D=requestAnimationFrame(F)};return D=requestAnimationFrame(F),()=>{cancelAnimationFrame(D),P.classList.remove("sweep-active")}},[f,k,C]);const V=Wd(n,m),q=Vd(j);return e.jsxs(T,{"data-loc":"client/src/components/ui/border-glow-card.tsx:184",ref:S,className:_,style:{"--card-bg":o,"--edge-sensitivity":s,"--border-radius":`${g}px`,"--glow-padding":`${x}px`,"--cone-spread":h,"--fill-opacity":b,...V,...q},...y,children:[!C&&e.jsxs(e.Fragment,{children:[e.jsx("span",{"data-loc":"client/src/components/ui/border-glow-card.tsx:201",className:"border-glow-card__mesh","aria-hidden":"true"}),e.jsx("span",{"data-loc":"client/src/components/ui/border-glow-card.tsx:202",className:"border-glow-card__fill","aria-hidden":"true"}),E&&e.jsx("span",{"data-loc":"client/src/components/ui/border-glow-card.tsx:203",className:"border-glow-card__orbit","aria-hidden":"true"}),e.jsx("span",{"data-loc":"client/src/components/ui/border-glow-card.tsx:204",className:"edge-light"})]}),C&&e.jsxs(e.Fragment,{children:[e.jsx("span",{"data-loc":"client/src/components/ui/border-glow-card.tsx:209",className:"border-glow-card__holographic-glow","aria-hidden":"true"}),e.jsx("span",{"data-loc":"client/src/components/ui/border-glow-card.tsx:210",className:"border-glow-card__holographic-shift","aria-hidden":"true"})]}),e.jsx("div",{"data-loc":"client/src/components/ui/border-glow-card.tsx:213",className:"border-glow-inner",children:a})]})}const Kd=["all","starred"],Yd=["7D","30D","90D","365D"],Gd=["all","starred"],qd=["all","SSS","SS","S","A","B","C","D","prop","misc"],vt=100,pn=1e6,Qr=1e4,oa=1,yn=100,ki=74.19,Xr=Math.round(ki*vt),wn=1e3,Hd=5e5,Zd=1920,Qd=1040,Jr=10,Xd=30,G={coin:"/assets/hud-coin.svg",fish:"/assets/hud-fish.svg",pond:"/assets/hud-pond.svg",market:"/assets/hud-market.svg",guide:"/assets/inventory-menu-icon-v2.svg",wallet:"/assets/wallet-menu-icon-new.svg",leaderboard:"/assets/hud-leaderboard.svg",settings:"/assets/settings.svg",rod:"/assets/cast.svg",basket:"/assets/hud-basket-button.svg"},Le={coin:"/assets/ranking-modal/coin.svg",mascotWeek:"/assets/ranking-modal/mascot.png",mascotMonth:"/assets/ranking-modal/mascot-month.png",rank1:"/assets/ranking-modal/rank-1.svg",rank2:"/assets/ranking-modal/rank-2.svg",rank3:"/assets/ranking-modal/rank-3.svg"},Si=["Ethereum (ERC20)","BNB Smart Chain (BEP20)","Arbitrum One (ARB)","Solana (SOL)"],Jd=Si[0],ep=[{id:"wallet-1",orderNo:"WLT-20260428-001",reasonEn:"Sold S-grade factor",reasonZh:"售出S级因子",occurredAt:"2026-04-28T10:24:00+08:00",amount:32,direction:"increase"},{id:"wallet-2",orderNo:"WLT-20260420-002",reasonEn:"Withdrawal",reasonZh:"提现",occurredAt:"2026-04-20T09:00:00+08:00",amount:20,direction:"decrease"},{id:"wallet-3",orderNo:"WLT-20260418-003",reasonEn:"Sold A-grade factor",reasonZh:"售出A级因子",occurredAt:"2026-04-18T16:42:00+08:00",amount:18,direction:"increase"},{id:"wallet-4",orderNo:"WLT-20260415-004",reasonEn:"Withdrawal",reasonZh:"提现",occurredAt:"2026-04-15T21:18:00+08:00",amount:6,direction:"decrease"},{id:"wallet-5",orderNo:"WLT-20260412-005",reasonEn:"Sold SS-grade factor",reasonZh:"售出SS级因子",occurredAt:"2026-04-12T12:06:00+08:00",amount:12,direction:"increase"},{id:"wallet-6",orderNo:"WLT-20260408-006",reasonEn:"Withdrawal",reasonZh:"提现",occurredAt:"2026-04-08T19:35:00+08:00",amount:4,direction:"decrease"},{id:"wallet-7",orderNo:"WLT-20260404-007",reasonEn:"Sold B-grade factor",reasonZh:"售出B级因子",occurredAt:"2026-04-04T11:20:00+08:00",amount:9,direction:"increase"},{id:"wallet-8",orderNo:"WLT-20260330-008",reasonEn:"Withdrawal",reasonZh:"提现",occurredAt:"2026-03-30T14:52:00+08:00",amount:3,direction:"decrease"},{id:"wallet-9",orderNo:"WLT-20260326-009",reasonEn:"Sold C-grade factor",reasonZh:"售出C级因子",occurredAt:"2026-03-26T08:30:00+08:00",amount:5,direction:"increase"},{id:"wallet-10",orderNo:"WLT-20260321-010",reasonEn:"Withdrawal",reasonZh:"提现",occurredAt:"2026-03-21T17:48:00+08:00",amount:15,direction:"decrease"}],jn="current-user",tp=[{id:"angler-01",nickname:"LakeQuant",weekBalance:182.45,monthBalance:738.2,weekCasts:42,monthCasts:168},{id:"angler-02",nickname:"鲸鱼信号",weekBalance:245.8,monthBalance:612.75,weekCasts:37,monthCasts:146},{id:"angler-03",nickname:"AlphaCat",weekBalance:156.3,monthBalance:881.9,weekCasts:31,monthCasts:174},{id:"angler-04",nickname:"Moon Fisher",weekBalance:118.6,monthBalance:502.4,weekCasts:29,monthCasts:132},{id:"angler-05",nickname:"因子猎手",weekBalance:96.25,monthBalance:455.1,weekCasts:24,monthCasts:109},{id:"angler-06",nickname:"CEX Otter",weekBalance:82.5,monthBalance:390.3,weekCasts:21,monthCasts:96},{id:"angler-07",nickname:"River Bot",weekBalance:75.15,monthBalance:318.65,weekCasts:19,monthCasts:82},{id:"angler-08",nickname:"小满仓",weekBalance:61.9,monthBalance:286.45,weekCasts:17,monthCasts:77},{id:jn,nickname:"捕鱼大师",weekBalance:38.5,monthBalance:900,weekCasts:12,monthCasts:188}],ei=["QuantNami","River Alpha","蓝鲸策略","Beta Fisher","Coral Signal","星潮猎手","Delta Hook","WaveBot","Pixel Trader","海盐因子","North Lake","K线水手","Signal Bay","Otter Desk","潮汐量化","Sunny Cast"],ap=[...tp,...Array.from({length:56},(t,a)=>{const i=ei[a%ei.length],s=Math.max(42,224-a*3.18+a%5*.42),n=Math.max(245,910-a*11.6+a%7*2.15);return{id:`angler-auto-${a+1}`,nickname:`${i}${a+1}`,weekBalance:Number(s.toFixed(2)),monthBalance:Number(n.toFixed(2)),weekCasts:Math.max(14,54-Math.floor(a*.7)),monthCasts:Math.max(62,210-Math.floor(a*2.4))}})],ti=[{id:"codex",name:"Codex",mark:"C",icon:"codex"},{id:"claude-code",name:"Claude Code",mark:"C",icon:"claude"},{id:"openclaw",name:"OpenClaw",mark:"O",icon:"openclaw"}],np="https://chatgpt.com/activate",W="v2.4.1",rp=[{id:"1",name:"My Trading Bot",apiKey:"ot_sk_7x9kM2nP4qR8sT6uW3yA1bC5dE0fG2h",skillVersion:"v2.4.1",createdAt:"2026-03-01",updatedAt:"2026-03-28"},{id:"2",name:"Research Agent",apiKey:"ot_sk_hJ2kL4mN6pQ8rS0tU2vW4xY6zA8bC0dE",skillVersion:"v2.3.0",createdAt:"2026-02-15",updatedAt:"2026-03-15"}],gn=[{id:"claude-code",label:"Claude Code",command:t=>`claude mcp add quandora --scope user --env API_KEY="${t}" -- https://api.quandora.trade/v1/mcp`,verifyCommand:"claude mcp list"},{id:"vs-code",label:"VS Code",command:t=>`code --add-mcp '{"name":"quandora","url":"https://api.quandora.trade/v1/mcp","env":{"API_KEY":"${t}"}}'`,verifyCommand:"code --list-extensions"},{id:"cursor",label:"Cursor",command:t=>`cursor --add-mcp '{"name":"quandora","url":"https://api.quandora.trade/v1/mcp","env":{"API_KEY":"${t}"}}'`,verifyCommand:"cursor --version"},{id:"windsurf",label:"Windsurf",command:t=>`windsurf --add-mcp '{"name":"quandora","url":"https://api.quandora.trade/v1/mcp","env":{"API_KEY":"${t}"}}'`,verifyCommand:"windsurf --version"},{id:"cline",label:"Cline",command:t=>`cline mcp add quandora --env API_KEY="${t}" --url https://api.quandora.trade/v1/mcp`,verifyCommand:"cline mcp list"}],ip=()=>{const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",a=i=>Array.from({length:i},()=>t[Math.floor(Math.random()*t.length)]).join("");return`${a(4)}-${a(5)}`},sp=()=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return`ot_sk_${Array.from({length:32},()=>t[Math.floor(Math.random()*t.length)]).join("")}`},xn=(t,a)=>`# Quandora Trading Skill Configuration

## API Key
\`${t}\`

## Skill Version
${a}

## Setup Instructions
Paste this entire prompt into your AI agent (ChatGPT / Claude / DeepSeek) to enable Quandora Trading capabilities.

Your agent will be able to:
- Mine and backtest alpha factors automatically
- Access real-time market data (CEX & DEX)
- Submit strategies to the Quandora Arena
- Monitor portfolio performance

## Connection Endpoint
https://api.quandora.trade/v1/agent

## Authentication
Include the API key in your agent's system prompt or environment configuration. The agent will automatically authenticate when making requests.`,ai=[{id:"ITEM-PROP-001",type:"prop",nameEn:"Lucky Bait",nameZh:"幸运鱼饵",tagEn:"Bitcoin",tagZh:"Bitcoin",metricOneLabelEn:"Limited across all waters; even passing schools stop to look",metricOneLabel:"全海域限量，鱼群路过都要先看一眼",metricOneValueEn:"Average",metricOneValue:"一般",metricTwoLabelEn:"",metricTwoLabel:"",metricTwoValueEn:"",metricTwoValue:"",imageSrc:"/assets/bitcoin.svg",statsLayout:"inline"},{id:"ITEM-MISC-001",type:"misc",nameEn:"Lake Shell",nameZh:"湖畔贝壳",tagEn:"Misc",tagZh:"特朗普的假发",metricOneLabelEn:"Average wind resistance",metricOneLabel:"防风性能一般",metricOneValueEn:"",metricOneValue:"",metricTwoLabelEn:"",metricTwoLabel:"",metricTwoValueEn:"",metricTwoValue:"",imageSrc:"/assets/trump-wig.svg",statsLayout:"inline"}];function Q(t){if(typeof t=="number")return t;const a=Number(t.replace(/[%\s,]/g,""));return Number.isFinite(a)?a:0}function op(t){return t==="maxDrawdown"?"asc":"desc"}function ni(t){return t.author.toLowerCase().includes("quandora")?"official":"graduated"}const lp={SSS:7,SS:6,S:5,A:4,B:3,C:2,D:1},cp={SS:1,S:1,A:.5,B:.3,C:.2,D:.1,F:0};function un(t){const a=t.grade;return{SS:"SSS",S:"SS",A:"S",B:"A",C:"B",D:"C",F:"D"}[a]}function dp(t){return t.status==="archived"?"failed":"passed"}function ia(t){return`${(Number(t)||0).toFixed(2)} USD`}function pp(t){return _n(t).toLocaleString(void 0,{maximumFractionDigits:2})}function sa(t){return`${Math.round(Number(t)||0).toLocaleString()}`}function ri(t){return Number.isFinite(t)?Math.min(yn,Math.max(oa,Math.round(t))):oa}function _n(t){return(Number(t)||0)/vt}function gp(t){return Math.round((Number(t)||0)*vt)}function ii(t){return`+${Math.round(Number(t)||0).toLocaleString()}`}function si(t){const a=Number(t);return Number.isFinite(a)&&a>=wn&&a<=Hd}function hn(t,a){const i=String(a||"").trim();return!i||i.length<8||i.length>128?!1:t==="Solana (SOL)"?/^[1-9A-HJ-NP-Za-km-z]{8,128}$/.test(i):/^0x[a-fA-F0-9]{6,126}$/.test(i)}function xp(t,a){return t==="Solana (SOL)"?a==="zh"?"请输入 8-128 字符的 Solana 钱包地址。":"Enter an 8-128 character Solana wallet address.":a==="zh"?"请输入以 0x 开头的 EVM 钱包地址，长度为 8-128 字符。":"Enter an EVM wallet address starting with 0x, 8-128 characters."}function oi({to:t,children:a,from:i=0,direction:s="up",delay:n=0,duration:o=.5,className:g="",startWhen:x=!0,separator:m=",",onStart:h,onEnd:f}){const k=l.useRef(null),j=l.useRef(null),b=l.useRef(null),E=Eo(),N=l.useCallback(M=>{if(typeof M=="number")return M;const z=String(M??"").replace(/,/g,"").match(/-?\d+(\.\d+)?/);return z?Number(z[0]):0},[]),y=l.useMemo(()=>typeof t=="number"?t:N(t??a),[a,N,t]),T=s==="down"?y:i,S=s==="down"?i:y,C=Io(k,{once:!0,margin:"0px"}),_=l.useCallback(M=>{const z=M.toString();if(!z.includes("."))return 0;const V=z.split(".")[1]??"";return parseInt(V,10)!==0?V.length:0},[]),$=Math.max(_(i),_(y)),O=l.useCallback(M=>{const z=$>0,V=Intl.NumberFormat("en-US",{useGrouping:!!m,minimumFractionDigits:z?$:0,maximumFractionDigits:z?$:0}).format(M);return m?V.replace(/,/g,m):V},[$,m]);return l.useEffect(()=>{k.current&&(k.current.textContent=O(T))},[O,T]),l.useEffect(()=>{if(j.current!==null&&(window.cancelAnimationFrame(j.current),j.current=null),b.current!==null&&(window.clearTimeout(b.current),b.current=null),!C||!x)return;if(h?.(),E){k.current&&(k.current.textContent=O(S)),f?.();return}const M=Math.max(o,.1)*1e3,z=()=>{const V=performance.now(),q=P=>{const A=Math.min((P-V)/M,1),D=T+(S-T)*A;if(k.current&&(k.current.textContent=O(D)),A<1){j.current=window.requestAnimationFrame(q);return}j.current=null,f?.()};j.current=window.requestAnimationFrame(q)};return b.current=window.setTimeout(z,n*1e3),()=>{j.current!==null&&(window.cancelAnimationFrame(j.current),j.current=null),b.current!==null&&(window.clearTimeout(b.current),b.current=null)}},[n,o,S,O,C,f,h,E,x,T]),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:687",className:g,ref:k,children:a})}function up(t){return"desc"}function bn(t){return t===1?Le.rank1:t===2?Le.rank2:t===3?Le.rank3:null}function mn(t,a=2){return`${t>=0?"+":"-"}${Math.abs(t).toLocaleString(void 0,{minimumFractionDigits:a,maximumFractionDigits:a})}`}function li(t){return`${Math.floor(t/60).toString().padStart(2,"0")}:${(t%60).toString().padStart(2,"0")}`}function fn(){return Jr+Math.floor(Math.random()*(Xd-Jr+1))}function ci(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function di(t,a,i,s){return Array.from({length:t},(n,o)=>{const g=Math.sin(o*.42)*s,x=Math.cos(o*.18)*s*.45;return Number((a+o*i+g+x).toFixed(2))})}function pi(t,a,i,s=16){const n=Math.min(...t),g=Math.max(...t)-n||1;return t.map((x,m)=>{const h=s+m*(a-s*2)/Math.max(1,t.length-1),f=i-s-(x-n)/g*(i-s*2);return`${m===0?"M":"L"} ${h.toFixed(2)} ${f.toFixed(2)}`}).join(" ")}function Wp(){const{uiLang:t,setUiLang:a}=xo(),{user:i,updateUser:s}=uo(),n=(r,c)=>t==="zh"?c:r,[o,g]=l.useState(1),[x,m]=l.useState(10),[h,f]=l.useState(10),[k,j]=l.useState(!1),[b,E]=l.useState(!1),[N,y]=l.useState(0),[T,S]=l.useState(null),[C,_]=l.useState(fn),[$,O]=l.useState(0),[M,z]=l.useState(null),[V,q]=l.useState(0),[P,A]=l.useState(!1),[D,H]=l.useState(!1),[F,U]=l.useState(!1),[ee,se]=l.useState(!1),[K,yt]=l.useState("general"),[Cn,On]=l.useState("web"),[la,Ni]=l.useState("claude-code"),[Be,wt]=l.useState(i?.displayName||"AlphaTrader"),[Ci,ca]=l.useState(i?.displayName||"AlphaTrader"),[jt,da]=l.useState(i?.avatar||null),Pn=l.useRef(null),[An,zn]=l.useState(i?.email||"alpha@example.com"),[ae,_t]=l.useState(!1),[Ce,Lt]=l.useState(!1),[$n,kt]=l.useState(!1),[Tn,St]=l.useState(""),[Oi,Nt]=l.useState(!1),[Ct,Ot]=l.useState(""),[En,Pt]=l.useState(""),[Pi,At]=l.useState(!1),[pa,zt]=l.useState(""),[Mn,$t]=l.useState(""),[Ai,oe]=l.useState(!1),[R,zi]=l.useState("codex"),[$i,We]=l.useState(()=>new Set(["codex"])),[Ti,ga]=l.useState({codex:"MacBook Pro"}),[Tt,Oe]=l.useState(null),[Dn,In]=l.useState(null),[le,Ve]=l.useState(1),[Pe,xa]=l.useState("web"),[Ae,ua]=l.useState("auth"),[ze,ha]=l.useState("auto"),[hp,Ei]=l.useState("code"),[Fn,Mi]=l.useState("SSH8-M4Y83"),[Rn,Di]=l.useState(""),[Ue,Ke]=l.useState("idle"),[Bn,Ye]=l.useState(""),[Et,Mt]=l.useState(rp),[Ii,Fi]=l.useState(()=>new Set),[Ri,ba]=l.useState(!1),[Bi,Dt]=l.useState(null),[ma,fa]=l.useState(""),[Ge,va]=l.useState(null),ya=l.useRef(null),[wa,qe]=l.useState(null),[Wi,It]=l.useState(!1),[be,Wn]=l.useState(1),[Ft,Vn]=l.useState(""),[Rt,Un]=l.useState(""),[ja,_a]=l.useState(!1),[ce,Vi]=l.useState("week"),[Ui,La]=l.useState(!1),me=l.useRef(null),[ne,Ki]=l.useState(wn),[de,Yi]=l.useState(Jd),[He,fe]=l.useState(!1),[Ze,Gi]=l.useState(""),[Kn,Bt]=l.useState(""),[$e,Wt]=l.useState(!1),[qi,Te]=l.useState(!1),[Ee,ka]=l.useState("idle"),[Sa,Yn]=l.useState(!1),[Qe,Hi]=l.useState(""),[Xe,Zi]=l.useState("all"),[pe,Qi]=l.useState("all"),[ve,Xi]=l.useState("grade"),[Vt,Gn]=l.useState("desc"),[Na,Ut]=l.useState(!1),[Ji,Me]=l.useState(!1),ye=l.useRef(0),Kt=l.useRef(null),[Yt,Ca]=l.useState(null),[Oa,qn]=l.useState(()=>new Set(["AF-004","AF-009"])),[Pa,Hn]=l.useState(()=>new Set),[Zn,es]=l.useState(()=>new Set),[Qn,ts]=l.useState(()=>new Set),[Gt,Je]=l.useState(null),[De,et]=l.useState(null),[re,Ie]=l.useState(null),Aa=l.useRef(null),[as,Xn]=l.useState(!1),[za,ns]=l.useState(""),[$a,rs]=l.useState("all"),[we,is]=l.useState("roi"),[qt,Jn]=l.useState("desc"),[Ta,Ht]=l.useState(!1),[je,ss]=l.useState(()=>new Set),[v,Zt]=l.useState(null),[Qt,er]=l.useState("365D");l.useEffect(()=>{const r=()=>{const c=Math.min(1,window.innerWidth/Zd,window.innerHeight/Qd);g(c)};return r(),window.addEventListener("resize",r,{passive:!0}),()=>window.removeEventListener("resize",r)},[]),l.useEffect(()=>{if(!De)return;const r=window.setTimeout(()=>et(null),2600);return()=>window.clearTimeout(r)},[De]),l.useEffect(()=>{i&&(ae||(wt(i.displayName||"AlphaTrader"),ca(i.displayName||"AlphaTrader"),da(i.avatar||null)),Ce||zn(i.email||"alpha@example.com"))},[Ce,ae,i]),l.useEffect(()=>{if(!Ge)return;const r=c=>{ya.current&&!ya.current.contains(c.target)&&va(null)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[Ge]),l.useEffect(()=>{if(!He)return;const r=d=>{Aa.current&&!Aa.current.contains(d.target)&&fe(!1)},c=d=>{d.key==="Escape"&&fe(!1)};return document.addEventListener("pointerdown",r),document.addEventListener("keydown",c),()=>{document.removeEventListener("pointerdown",r),document.removeEventListener("keydown",c)}},[He]);const os={all:n("All","全部"),starred:n("My Favorites","我的收藏")},ls=Kd.map(r=>({key:r,label:os[r]})),tr={roi:"ROI",winRate:n("Win Rate","胜率"),sharpe:n("Sharpe Ratio","夏普比率"),maxDrawdown:n("Max Drawdown","最大回撤")},cs=Object.keys(tr),ds={all:n("All","全部"),starred:n("My Favorites","我的收藏")},ps=Gd.map(r=>({key:r,label:ds[r]})),ge=gn.find(r=>r.id===la)??gn[0],gs=Et[0]?.apiKey??"YOUR_API_KEY",ar=ge.command(gs),xs={createdAt:n("Created At","创建时间"),grade:n("Grade","等级"),rewardAmount:n("Bonus (USD)","奖金(USD)"),sharpe:"Sharpe",osSharpe:n("OS Sharpe","OS 夏普"),returns:"ROI",drawdown:n("Drawdown","回撤"),turnover:n("Turnover","换手率"),fitness:n("Fitness","适应度")},us=["createdAt","grade","sharpe","returns"],_e=l.useMemo(()=>ho.map(r=>{const c=dp(r),d=c==="passed"?bo(r.osSharpe):"F";return{...r,submissionStatus:c,grade:d,rewardAmount:cp[d]}}),[]),nr=l.useMemo(()=>new Map([..._e].sort((r,c)=>new Date(r.createdAt).getTime()-new Date(c.createdAt).getTime()||r.id.localeCompare(c.id)).map((r,c)=>[r.id,c+1])),[_e]),hs=l.useMemo(()=>new Map(ai.map((r,c)=>[r.id,_e.length+c+1])),[_e.length]),rr=l.useMemo(()=>{const r=Qe.trim().toLowerCase(),c=p=>{switch(ve){case"createdAt":return new Date(p.createdAt).getTime();case"grade":return lp[un(p)];case"rewardAmount":return p.rewardAmount;case"sharpe":return p.sharpe;case"osSharpe":return p.osSharpe;case"returns":return Q(p.returns);case"drawdown":return Q(p.drawdown);case"turnover":return Q(p.turnover);case"fitness":return p.fitness;default:return 0}},d=_e.filter(p=>{if(Zn.has(p.id))return!1;const w=!r||p.name.toLowerCase().includes(r)||p.id.toLowerCase().includes(r)||p.expression.toLowerCase().includes(r)||p.market.toLowerCase().includes(r)||p.tag?.toLowerCase().includes(r)||p.description?.toLowerCase().includes(r),I=Xe==="all"?!0:Oa.has(p.id),J=pe==="all"?!0:un(p)===pe;return w&&I&&J});if(!ve||!Vt)return d;const u=Vt==="asc"?1:-1;return[...d].sort((p,w)=>(c(p)-c(w))*u)},[Zn,Xe,Qe,_e,Vt,ve,pe,Oa]),ir=l.useMemo(()=>{const r=Qe.trim().toLowerCase();return ai.filter(c=>{if(Qn.has(c.id))return!1;const d=!r||c.id.toLowerCase().includes(r)||c.nameEn.toLowerCase().includes(r)||c.nameZh.toLowerCase().includes(r)||c.tagEn.toLowerCase().includes(r)||c.tagZh.toLowerCase().includes(r),u=Xe==="all"?!0:Pa.has(c.id),p=pe==="all"||pe===c.type;return d&&u&&p})},[Qn,Xe,Qe,pe,Pa]),sr=l.useMemo(()=>{const r=ce==="week"?"weekBalance":"monthBalance",c=ce==="week"?"weekCasts":"monthCasts";return ap.map(d=>({...d,balance:d[r],casts:d[c]})).sort((d,u)=>u.balance-d.balance).map((d,u)=>({...d,rank:u+1}))},[ce]),or=sr.slice(0,50),X=sr.find(r=>r.id===jn),Xt=!!(X&&X.rank<=or.length),bs=n("New balance","新增余额"),ms=n("Casts","抛竿数"),fs=l.useCallback(()=>{La(!0),me.current!==null&&window.clearTimeout(me.current),me.current=window.setTimeout(()=>{La(!1),me.current=null},700)},[]);l.useEffect(()=>{ja||(La(!1),me.current!==null&&(window.clearTimeout(me.current),me.current=null))},[ja]);const Ea=M!==null,lr=b||Ea,vs=!lr,Ma=li(V),Da=li($),Ia=`${b?Math.min(N+1,x):N}/${x}`,ys=b?Ia:n("Waiting","等待中"),ws=b?Da:Ma,js=b?n(`Auto cast in progress ${Ia} ${Da}`,`自动抛竿进行中 ${Ia} ${Da}`):n(`Cast waiting ${Ma}`,`抛竿等待中 ${Ma}`),cr=n("Cast","抛竿"),_s=n("Cast","抛竿"),Fa=r=>{f(ri(r))},Ls=()=>{b||Ea||(f(x),j(!0))},dr=()=>{j(!1)},ks=()=>{const r=ri(h);z(null),q(0),m(r),y(0),E(!0),O(0),_(fn()),S(Date.now()),j(!1),et({id:Date.now(),title:n("Auto cast started","自动抛竿已开始"),message:n(`This run will cast ${r} times.`,`本次将自动抛竿 ${r} 次。`)})},Ss=()=>{b&&(E(!1),S(null),O(0),et({id:Date.now(),title:n("Auto cast stopped","自动抛竿已停止"),message:n(`Stopped at ${N} of ${x}.`,`已在 ${N}/${x} 次时终止。`)}))},Ns=()=>{b||Ea||(q(0),z(Date.now()))},Cs=()=>{z(null),q(0)},Os=r=>{qn(c=>{const d=new Set(c);return d.has(r)?d.delete(r):d.add(r),d})},Ps=r=>{Hn(c=>{const d=new Set(c);return d.has(r)?d.delete(r):d.add(r),d})},pr=r=>{Ca(null),Je(r)},As=()=>{if(!Gt)return;const r=Gt;r.kind==="factor"?(es(c=>new Set(c).add(r.id)),qn(c=>{const d=new Set(c);return d.delete(r.id),d}),re?.id===r.id&&Ie(null)):(ts(c=>new Set(c).add(r.id)),Hn(c=>{const d=new Set(c);return d.delete(r.id),d})),Je(null),et({id:Date.now(),title:n("Deleted","删除成功"),message:n(`${r.label} has been removed from your inventory.`,`已从图鉴中移除：${r.label}`)})},Ra=l.useCallback(r=>{if((r.target instanceof Element?r.target:null)?.closest(".inv-actions")){r.currentTarget.style.setProperty("--card-tilt-x","0deg"),r.currentTarget.style.setProperty("--card-tilt-y","0deg"),r.currentTarget.style.setProperty("--card-shine-angle","135deg");return}const d=r.currentTarget.getBoundingClientRect(),u=r.clientX-d.left,p=r.clientY-d.top,w=(u/d.width-.5)*18,I=(.5-p/d.height)*18;r.currentTarget.style.setProperty("--card-tilt-x",`${w.toFixed(2)}deg`),r.currentTarget.style.setProperty("--card-tilt-y",`${I.toFixed(2)}deg`),r.currentTarget.style.setProperty("--card-shine-x",`${u.toFixed(1)}px`),r.currentTarget.style.setProperty("--card-shine-y",`${p.toFixed(1)}px`),r.currentTarget.style.setProperty("--card-shine-angle",`${(w+135).toFixed(1)}deg`)},[]),Ba=l.useCallback(r=>{r.currentTarget.style.setProperty("--card-tilt-x","0deg"),r.currentTarget.style.setProperty("--card-tilt-y","0deg"),r.currentTarget.style.setProperty("--card-shine-angle","135deg")},[]),zs=l.useCallback(r=>{const c=r.currentTarget.scrollTop,d=ye.current,u=c-d;ye.current=c,Math.abs(u)>4&&Me(u>0)},[]);l.useEffect(()=>{P||(Me(!1),ye.current=0,Je(null))},[P]),l.useEffect(()=>{if(!P||re)return;const r=ye.current;if(r<=0)return;const c=window.requestAnimationFrame(()=>{Kt.current&&(Kt.current.scrollTop=r)});return()=>window.cancelAnimationFrame(c)},[P,re]),l.useEffect(()=>{if(!b||N>=x)return;const r=window.setTimeout(()=>{const c=Math.min(x,N+1);y(c),c<x&&(O(0),_(fn()),S(Date.now()))},C*1e3);return()=>window.clearTimeout(r)},[x,N,b,C]),l.useEffect(()=>{b&&N>=x&&(E(!1),S(null),O(0))},[x,N,b]),l.useEffect(()=>{if(T===null||!b)return;const r=()=>{O(Math.max(0,Math.floor((Date.now()-T)/1e3)))};r();const c=window.setInterval(r,1e3);return()=>window.clearInterval(c)},[b,T]),l.useEffect(()=>{if(M===null)return;const r=()=>{q(Math.max(0,Math.floor((Date.now()-M)/1e3)))};r();const c=window.setInterval(r,1e3);return()=>window.clearInterval(c)},[M]);const $s=r=>{const c=r;if(ve===c){Gn(d=>d==="asc"?"desc":"asc"),Ut(!1);return}Xi(c),Gn(up()),Ut(!1)},Ts=r=>{if(t!=="zh")return r.description;switch(r.id){case"STR-001":return"结合 RSI 交叉、成交量背离与资金费率信号的多因子动量策略，适用于 BTC 永续合约。";case"STR-002":return"从 TVL 资金流、LP 行为和 Gas 费模式中提取信号，覆盖主要 DeFi 协议。";case"STR-003":return"利用主流 CEX 平台间的价格偏差，结合价差分析与订单簿深度进行套利。";case"STR-004":return"基于动量、巨鲸跟踪与链上指标，在前 50 大山寨币之间进行系统化轮动。";case"STR-005":return"聚焦资金费率套利与基差交易的低风险策略，并通过受控敞口提升收益稳定性。";case"STR-006":return"通过识别并规避 MEV 攻击，同时捕捉具备抗 Sandwich 特征的机会来生成 Alpha。";default:return r.description}},gr=l.useMemo(()=>{const r=za.trim().toLowerCase(),c=p=>{switch(we){case"roi":return Q(p.annualReturn);case"winRate":return Q(p.winRate);case"sharpe":return p.sharpe;case"maxDrawdown":return Q(p.maxDrawdown);default:return 0}},d=mo.filter(p=>{const w=!r||p.name.toLowerCase().includes(r)||p.id.toLowerCase().includes(r)||p.description.toLowerCase().includes(r)||p.tags.some(J=>J.toLowerCase().includes(r))||p.author.toLowerCase().includes(r),I=$a==="all"?!0:je.has(p.id);return w&&I});if(!we||!qt)return d;const u=qt==="asc"?1:-1;return[...d].sort((p,w)=>(c(p)-c(w))*u)},[$a,za,qt,we,je]),xr=r=>{ss(c=>{const d=new Set(c);return d.has(r)?d.delete(r):d.add(r),d})},Es=r=>{if(we===r){Jn(c=>c==="asc"?"desc":"asc"),Ht(!1);return}is(r),Jn(op(r)),Ht(!1)},xe=()=>{ka("idle")},Ms=r=>{Yi(r),Wt(!1),Bt(""),xe(),fe(!1)},Jt=()=>{U(!1),fe(!1),H(!0),Te(!1),xe()},Ds=()=>{U(!0),fe(!1),Te(!1),xe()},ur=()=>{H(!1),U(!1),fe(!1),Te(!1),xe()},L=(r,c)=>{et({id:Date.now(),title:r,message:c})},te=r=>ti.find(c=>c.id===r)?.name||"Agent",Is=r=>{zi(r),Oe(null),Ei("code"),ha("auto");const c=r==="claude-code"||r==="openclaw";xa(c?"agent":"web"),ua("auth"),Ve(c?2:1),oe(!0)},Fs=r=>{oe(!1),Oe(r)},Rs=r=>{We(c=>{const d=new Set(c);return d.delete(r),d}),Oe(null),L(n("Disconnected","已断连"),n(`${te(r)} disconnected.`,`${te(r)} 已断开连接。`))},Bs=r=>{Dn||(In(r),window.setTimeout(()=>{In(null),L(n("Status available","状态正常"),n(`${te(r)} is connected.`,`${te(r)} 已连接。`))},900))},Ws=()=>{We(r=>new Set(r).add(R)),ga(r=>({...r,[R]:"MacBook Pro"})),ga(r=>({...r,[R]:"MacBook Pro"})),oe(!1),L(n("Connected","已连接"),n(`${te(R)} connected.`,`${te(R)} 已连接。`))},Vs=()=>{const r=Rn.trim();if(Ue==="valid"){Ws();return}if(!r){Ke("invalid"),Ye(n("Enter API Key","请输入API Key"));return}Ke("testing"),Ye(""),window.setTimeout(()=>{if(!/^sk-[A-Za-z0-9_-]{8,}$/.test(r)){Ke("invalid"),Ye(n("This API Key is unavailable. Check that it starts with sk- and is complete.","API 不可用：请确认 Key 以 sk- 开头且内容完整。"));return}Ke("valid"),Ye(n("API Key is available.","API Key 可用。"))},900)},Us=()=>{if(window.open(np,"_blank","noopener,noreferrer"),We(r=>new Set(r).add(R)),ga(r=>({...r,[R]:"MacBook Pro"})),!navigator.clipboard?.writeText){L(n("Copy manually","请手动复制"),n("The login page has opened. Copy the authorization code manually if needed.","登录页已打开，如有需要请手动复制授权码。"));return}navigator.clipboard.writeText(Fn).then(()=>{L(n("Authorization code copied","授权码已复制"),n("The login page has opened in a new tab.","登录页已在新标签页打开。"))}).catch(()=>{L(n("Copy failed","复制失败"),n("Copy the authorization code manually, then continue on the login page.","请手动复制授权码，然后在登录页继续操作。"))})},Ks=()=>{Mi(ip()),L(n("Authorization code refreshed","授权码已刷新"),n("Use the new authorization code or scan the refreshed QR code.","请使用新的授权码，或扫描刷新后的二维码。"))},ea=(r,c,d)=>{if(!navigator.clipboard?.writeText){L(n("Copy manually","请手动复制"),r);return}navigator.clipboard.writeText(r).then(()=>{L(c,d)}).catch(()=>{L(n("Copy failed","复制失败"),n("Please copy it manually.","请手动复制。"))})},hr=()=>{if(!Ft.trim()){L(n("Cannot create","无法创建"),n("Please enter an API name.","请输入 API 名称。"));return}Un(sp()),Wn(2)},Wa=()=>{if(!Rt||!Ft.trim()){It(!1);return}const r=new Date().toISOString().split("T")[0],c={id:Date.now().toString(),name:Ft.trim(),apiKey:Rt,skillVersion:W,createdAt:r,updatedAt:r};Mt(d=>[c,...d]),It(!1),Wn(1),Vn(""),Un(""),L(n("API key created","API 密钥已创建"),n("Paste the prompt into your AI agent to continue.","将提示词粘贴到你的 AI Agent 中继续。"))},Ys=r=>{Fi(c=>{const d=new Set(c);return d.has(r)?d.delete(r):d.add(r),d})},br=r=>{if(!ma.trim()){L(n("Cannot save","无法保存"),n("Name cannot be empty.","名称不能为空。"));return}const c=new Date().toISOString().split("T")[0];Mt(d=>d.map(u=>u.id===r?{...u,name:ma.trim(),updatedAt:c}:u)),Dt(null),fa(""),L(n("API name updated","API 名称已更新"),n("The agent label has been saved.","Agent 标签已保存。"))},Gs=r=>{const c=new Date().toISOString().split("T")[0];let d=!1;Mt(u=>u.map(p=>p.id!==r?p:p.skillVersion===W?(d=!0,p):{...p,skillVersion:W,updatedAt:c})),L(d?n("Already latest","当前已是最新"):n("Skill updated","Skill 已更新"),d?n("This API key is already using the latest Skill.","此 API 密钥已使用最新版 Skill。"):n(`Skill updated to ${W}.`,`Skill 已更新到 ${W}。`))},qs=r=>{Mt(c=>c.filter(d=>d.id!==r)),qe(null),L(n("API key deleted","API 密钥已删除"),n("Agents using this key will lose access.","使用此密钥的 Agent 将失去访问权限。"))},Hs=r=>{const c=r.skillVersion===W;ea(xn(r.apiKey,W),c?n("Prompt copied","提示词已复制"):n("Latest prompt copied","最新版提示词已复制"),c?n("Paste it into your AI agent.","请粘贴到你的 AI Agent 中。"):n(`Prompt uses Skill ${W}.`,`提示词已使用 Skill ${W}。`))},Zs=()=>{yt("general"),On("web"),oe(!1),se(!0)},mr=()=>{se(!1),yt("general"),On("web"),oe(!1),_t(!1),Lt(!1),kt(!1),St(""),Nt(!1),Ot(""),Pt(""),At(!1),zt(""),$t("")},Qs=()=>{wt(Ci),da(i?.avatar||null),_t(!1)},Xs=()=>{if(!Be.trim()){L(n("Cannot save","无法保存"),n("Nickname cannot be empty.","昵称不能为空。"));return}const r=Be.trim();s({displayName:r,...jt?{avatar:jt}:{}}),wt(r),ca(r),_t(!1),L(n("Profile updated","资料已更新"),n("Nickname and avatar saved.","昵称与头像信息已保存。"))},Js=r=>{const c=r.target.files?.[0];if(!c)return;if(c.size>2*1024*1024){L(n("Upload failed","上传失败"),n("Image size must be under 2 MB.","图片大小必须小于 2MB。")),r.target.value="";return}const d=new FileReader;d.onload=u=>{da(u.target?.result)},d.readAsDataURL(c)},eo=()=>{St(""),Nt(!1),Ot(""),Lt(!1)},to=()=>{const r=Ct.trim();if(!Tn.trim()){L(n("Cannot save","无法保存"),n("Enter the verification code.","请输入验证码。"));return}if(!r){L(n("Cannot save","无法保存"),n("Enter the new email address.","请输入新邮箱地址。"));return}if(!ci(r)){L(n("Cannot save","无法保存"),n("Enter a valid email address.","请输入有效的邮箱地址。"));return}zn(r),s({email:r}),St(""),Nt(!1),Ot(""),Lt(!1),L(n("Email updated","邮箱已更新"),n("New email address saved.","新邮箱地址已保存。"))},ao=()=>{Pt(""),At(!1),zt(""),$t(""),kt(!1)},no=()=>{if(!En.trim()){L(n("Cannot save","无法保存"),n("Enter the verification code.","请输入验证码。"));return}if(pa.length<8){L(n("Cannot save","无法保存"),n("New password must be at least 8 characters.","新密码至少需要 8 位。"));return}if(pa!==Mn){L(n("Cannot save","无法保存"),n("The two passwords do not match.","两次输入的密码不一致。"));return}Pt(""),At(!1),zt(""),$t(""),kt(!1),L(n("Password updated","密码已更新"),n("Use the new password on your next login.","下次登录请使用新密码。"))},ro=r=>{const c=new Date(r);return Number.isNaN(c.getTime())?r:t==="zh"?new Intl.DateTimeFormat("zh-CN",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(c):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(c)},io=()=>{if(!hn(de,Ze)){Bt(xp(de,t)),Wt(!1),Te(!0);return}Wt(!0),Te(!1),Bt(""),xe()},so=async()=>{const r=si(ne)&&ne<=Xr,c=$e&&hn(de,Ze);!r||!c||Sa||Ee==="success"||(Yn(!0),ka("processing"),await new Promise(d=>window.setTimeout(d,850)),ka(ne===3e3?"error":"success"),Yn(!1))},fr=si(ne)&&ne<=Xr,Va=Ze.trim(),Ua=!$e||qi,oo=hn(de,Ze),vr=Ee==="success"?!1:Ua?!Va:Sa||!fr||!$e||!oo,yr=Sa?n("Submitting...","提交中..."):Ee==="success"?n("Back","返回"):Ua?$e?n("Save wallet","保存钱包"):n("Bind wallet","绑定钱包"):$e?n("Confirm withdrawal","确认提现"):n("Bind wallet","绑定钱包"),lo=()=>{if(Ee==="success"){Jt();return}so()},wr=r=>{Zt(r),er("365D")},Z=l.useMemo(()=>{if(!v)return null;const r=Q(v.annualReturn),c=Q(v.maxDrawdown),d=Q(v.winRate),u=438e3,p=u*r/100,w=u+p,I=p*.995,J=p-I,ta=v.sharpe>0?v.sharpe*1.89:0,aa=d>0?d/Math.max(100-d,1)*2.1:0,jr=Math.abs(p)*.1268,_r={"7D":18,"30D":30,"90D":45,"365D":64},co=di(_r[Qt],99100,r*2.1,Math.max(46,Math.abs(r)*3.2)),po=di(_r[Qt],98980,Math.max(12,r*.45),52);return{roi:r,drawdown:c,winRate:d,currentEquity:w,totalReturn:p,realizedPnl:I,unrealizedPnl:J,calmar:ta,profitLossRatio:aa,totalFees:jr,equityPath:pi(co,640,210),benchmarkPath:pi(po,640,210),fundRows:[[n("Peak Equity","最高权益"),`${(w*1.11).toLocaleString(void 0,{maximumFractionDigits:2})} USDT`],[n("Min Equity","最低权益"),`${Math.max(u*(1-c/100),u*.5).toLocaleString(void 0,{maximumFractionDigits:2})} USDT`],[n("Realized PnL","已实现盈亏"),`${mn(I)} USDT`],[n("Unrealized PnL","未实现盈亏"),`${mn(J)} USDT`]],perfRows:[[n("Sharpe Ratio","夏普比率"),v.sharpe.toFixed(2)],[n("Calmar Ratio","Calmar比率"),ta.toFixed(2)],[n("Win Rate","胜率"),`${d.toFixed(2)}%`],[n("Profit/Loss Ratio","盈亏比"),aa.toFixed(2)]],tradeRows:[[n("Trading Days","交易天数"),"1097"],[n("Total Trades","总交易次数"),"286"],[n("Max Exposure","最大敞口"),"99.73%"],[n("Total Fees","总手续费"),`${jr.toLocaleString(void 0,{maximumFractionDigits:2})} USDT`]],configRows:[[n("Strategy ID","策略 ID"),v.id],[n("Created Date","创建时间"),`${v.updatedAt} 00:00`],[n("Strategy Type","策略类型"),v.market==="Mixed"?n("Cross Section","截面策略"):n("Time Series","时序策略")],[n("Symbol","交易对"),v.tags.includes("BTC")?"BTCUSDT":v.market==="DEX"?"ETHUSDT, DeFi Basket":"Top 50 Crypto"],[n("Signal","因子"),v.tags.join(", ")],[n("Factor Weights","因子权重"),n("Equal Weight","等权")],[n("Stop Loss","止损"),`${Math.max(3,Math.min(18,c*.65)).toFixed(1)}%`],[n("Cooldown","冷却时间"),n("6 hours","6 小时")],[n("Strategy Side","策略方向"),v.market==="DEX"?n("Long-Only","仅做多"):n("Market-Neutral","市场中性")],[n("Top/Tail Rule","头尾分层规则"),v.market==="Mixed"?n("Top/Tail 20%","头部/尾部 20%"):n("N/A","未设置")]]}},[Qt,v,n]);return e.jsxs("main",{"data-loc":"client/src/pages/Landing.tsx:1990",className:"game-landing","aria-label":"Pixel lakeside game landing",children:[e.jsx("style",{"data-loc":"client/src/pages/Landing.tsx:1991",children:`
        @font-face {
          font-family: "阿里妈妈方圆体 VF Regular";
          src:
            url("https://lzcdn.dianpusoft.cn/fonts/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin.woff2") format("woff2"),
            url("https://lzcdn.dianpusoft.cn/fonts/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin.woff") format("woff");
          font-display: swap;
          font-weight: 100 900;
          font-style: normal;
        }

        @font-face {
          font-family: "Alimama FangYuanTi VF";
          src:
            url("https://lzcdn.dianpusoft.cn/fonts/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin.woff2") format("woff2"),
            url("https://lzcdn.dianpusoft.cn/fonts/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin.woff") format("woff");
          font-display: swap;
          font-weight: 100 900;
          font-style: normal;
        }

        @font-face {
          font-family: "Alimama Fang YuanTi VF";
          src:
            url("https://lzcdn.dianpusoft.cn/fonts/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin.woff2") format("woff2"),
            url("https://lzcdn.dianpusoft.cn/fonts/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin.woff") format("woff");
          font-display: swap;
          font-weight: 100 900;
          font-style: normal;
        }

        .game-landing {
          --ink: #5a321d;
          --ink-dark: #2f1a12;
          --ac-primary: #19c8b9;
          --ac-primary-bg: #e6f9f6;
          --ac-text: #794f27;
          --ac-text-body: #725d42;
          --ac-border: #c4b89e;
          --ac-border-hover: #a89878;
          --ac-cream: rgb(247, 243, 223);
          --ac-cream-light: #f8f8f0;
          --ac-shadow: #bdaea0;
          --ac-shadow-input: #d4c9b4;
          --ac-focus-yellow: #ffcc00;
          --radius-xs: 4px;
          --radius-sm: 6px;
          --radius-md: 8px;
          --radius-lg: 10px;
          --BEVL: 1;
          --modal-title-font: "阿里妈妈方圆体 VF Regular", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: #55baf3;
          font-family: "阿里妈妈方圆体 VF Regular", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
          font-variation-settings: "BEVL" var(--BEVL);
          image-rendering: pixelated;
          isolation: isolate;
        }

        .game-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          image-rendering: pixelated;
          user-select: none;
          pointer-events: none;
        }

        .game-landing::after {
          content: none;
        }

        .game-stage {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 1920px;
          height: 1040px;
          transform: translate(-50%, -50%) scale(var(--stage-scale));
          transform-origin: center center;
        }

        .hud-top-stats {
          position: absolute;
          left: 40px;
          top: 40px;
          display: flex;
          align-items: center;
          gap: 30px;
          z-index: 2;
        }

        .hud-stat-card {
          appearance: none;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          height: 65px;
          padding: 12px;
          overflow: hidden;
          background: #fff3d3;
          border: 3px solid #c4b89e;
          border-radius: 16px;
          box-shadow: 0 4px 0 rgba(78, 67, 60, .22);
          font: inherit;
          transition: background-color .14s cubic-bezier(.22, 1, .36, 1);
        }

        .hud-stat-card--button {
          border-width: 0;
          padding: 15px;
          cursor: pointer;
        }

        .hud-stat-card--fish {
          border-width: 0;
          padding: 15px;
        }

        .hud-stat-icon {
          flex: 0 0 auto;
          object-fit: contain;
          image-rendering: pixelated;
        }

        .hud-stat-value {
          width: 150px;
          color: #4e433c;
          font-family: "Alimama FangYuanTi VF", "Alimama Fang YuanTi VF", "阿里妈妈方圆体 VF Regular", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          font-stretch: 100%;
          font-synthesis: none;
          font-optical-sizing: auto;
          font-variation-settings: "wght" 700, "BEVL" 1;
          line-height: 100%;
          text-align: right;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .hud-stat-card--fish .hud-stat-value {
          width: 120px;
          font-family: "Alimama FangYuanTi VF", "Alimama Fang YuanTi VF", "阿里妈妈方圆体 VF Regular", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          font-stretch: 100%;
          font-synthesis: none;
          font-optical-sizing: auto;
          font-variation-settings: "wght" 700, "BEVL" 1;
          line-height: 100%;
          text-align: right;
          letter-spacing: 0;
        }

        .top-actions {
          --menu-label-font-size: 20px;
          position: absolute;
          right: 40px;
          top: 36px;
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: flex-end;
          z-index: 2;
        }

        .top-actions--en .menu-label {
          max-width: 94px;
          --menu-label-font-size: 16px;
          letter-spacing: 0;
        }

        .top-actions--en .menu-label::before {
          -webkit-text-stroke-width: 3px;
        }

        .menu-item {
          position: relative;
          width: 90px;
          height: 90px;
          border: 0;
          border-radius: 16px;
          background: transparent;
          padding: 0;
          display: block;
          cursor: pointer;
          font: inherit;
        }

        .menu-icon {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          object-fit: contain;
          image-rendering: pixelated;
        }

        .menu-label {
          position: absolute;
          left: 50%;
          bottom: 4px;
          transform: translateX(-50%);
          color: #FFF;
          text-align: center;
          -webkit-text-stroke-width: 0;
          -webkit-text-stroke-color: transparent;
          font-size: var(--menu-label-font-size);
          font-weight: 900;
          letter-spacing: .08em;
          white-space: nowrap;
          text-shadow: 0 2px 0 rgba(0, 0, 0, .15);
        }

        .menu-label::before {
          content: attr(data-label);
          position: absolute;
          inset: 0;
          z-index: -1;
          color: #FFF;
          text-align: center;
          -webkit-text-stroke-width: 4px;
          -webkit-text-stroke-color: #4E433C;
          text-shadow: none;
        }

	        .hud-bottom-bar {
	          position: absolute;
	          left: 50%;
	          bottom: 40px;
	          transform: translateX(-50%);
          display: flex;
          align-items: flex-end;
          gap: 30px;
	          z-index: 2;
	        }

	        .hud-cast-stack {
	          display: flex;
	          flex-direction: column;
	          align-items: stretch;
	          gap: 0;
	        }

	        .cast-auto-inline {
	          display: flex;
	          align-items: flex-end;
	          gap: 8px;
	          justify-content: center;
	          margin-bottom: -6px;
	          position: relative;
	          z-index: 1;
	          transition: transform 80ms ease;
	        }

	        .hud-cast-stack:has(.hud-main-action:active) .cast-auto-inline {
	          transform: translateY(8px);
	        }

	        .cast-auto-button,
	        .cast-auto-stop {
	          appearance: none;
	          border: 0;
	          color: #4e433c;
	          cursor: pointer;
	          font: inherit;
	          line-height: 1;
	        }

	        .cast-auto-button {
	          display: inline-flex;
	          align-items: center;
		          justify-content: center;
	          gap: 12px;
	          width: 270px;
	          height: 34px;
	          margin-bottom: 2px;
	          padding: 0 14px;
	          background: rgb(255, 247, 227);
	          border: 0;
	          border-radius: 12px 12px 0 0;
	          box-shadow: inset 0 2px 0 rgba(255, 255, 255, .54);
	          transition: transform 80ms ease, box-shadow 80ms ease, background 120ms ease, color 120ms ease;
	        }

        .cast-auto-button:disabled {
          cursor: not-allowed;
        }

        button.cast-auto-button:not(:disabled):hover {
          transform: translateY(-2px);
        }

        .cast-auto-button.is-running {
          background: #ebf3e7;
          cursor: default;
          box-shadow: inset 0 2px 0 rgba(255, 255, 255, .54);
        }

	        .cast-auto-button:not(:disabled):active,
	        .cast-auto-stop:active {
	          transform: translateY(1px);
	          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .4);
	        }

	        .cast-auto-title {
	          color: rgba(78, 67, 60, .74);
	          font-size: 16px;
	          font-weight: 1000;
	          line-height: 1;
	          white-space: nowrap;
	        }

	        .cast-auto-button.is-running .cast-auto-title {
	          color: #4e433c;
	        }

	        .cast-auto-status {
	          margin-left: auto;
	          color: rgba(78, 67, 60, .58);
	          font-size: 12px;
	          font-weight: 950;
	          white-space: nowrap;
	        }

	        .cast-auto-status.is-running {
	          color: #0f8a65;
	        }

	        .cast-auto-stop {
	          height: 24px;
	          padding: 0 10px;
	          background: #fff8e6;
	          border-radius: 6px;
	          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .55);
	          color: #7f2f24;
	          font-size: 12px;
	          font-weight: 1000;
	          transition: transform 80ms ease, box-shadow 80ms ease, filter 80ms ease;
	        }

	        .cast-count-stepper {
	          appearance: none;
	          border: 0;
	          color: #4e433c;
	          background: transparent;
	          cursor: pointer;
	          font: inherit;
	          font-size: 18px;
	          font-weight: 900;
	          line-height: 1;
	        }

	        .cast-count-control {
	          display: inline-flex;
	          align-items: center;
	          gap: 8px;
	          color: #4e433c;
	          font-size: 17px;
	          font-weight: 900;
	          white-space: nowrap;
	        }

	        .cast-count-control--modal {
	          justify-content: center;
	        }

	        .cast-count-stepper {
	          width: 34px;
	          height: 34px;
	          display: grid;
	          place-items: center;
	          background: #fffdf4;
	          border: 2px solid rgba(78, 67, 60, .56);
	          border-radius: 8px;
	          box-shadow: 0 3px 0 rgba(78, 67, 60, .38);
	        }

	        .cast-count-stepper:disabled {
	          opacity: .45;
	          cursor: not-allowed;
	          box-shadow: none;
	        }

	        .cast-count-input {
	          width: 72px;
	          height: 36px;
	          color: #1f180f;
	          background: #fffdf4;
	          border: 2px solid rgba(78, 67, 60, .62);
	          border-radius: 8px;
	          font: inherit;
	          font-size: 18px;
	          font-weight: 1000;
	          line-height: 1;
	          text-align: center;
	          box-shadow: inset 0 2px 0 rgba(78, 67, 60, .12);
	        }

	        .cast-count-input::-webkit-outer-spin-button,
	        .cast-count-input::-webkit-inner-spin-button {
	          margin: 0;
	          appearance: none;
	        }

	        .auto-cast-modal {
	          width: min(420px, calc(100vw - 36px));
	          color: var(--ac-text);
	          background: linear-gradient(180deg, #fff9ea 0%, #f8edcf 100%);
	          border: 3px solid var(--ac-border);
	          border-radius: 12px;
	          box-shadow:
	            inset 0 2px 0 rgba(255,255,255,.62),
	            0 7px 0 rgba(78, 67, 60, .34),
	            0 24px 50px rgba(61, 52, 40, .26);
	          overflow: hidden;
	        }

	        .auto-cast-modal__body {
	          display: grid;
	          gap: 8px;
	          padding: 22px 24px 16px;
	        }

	        .auto-cast-field {
	          display: grid;
	          gap: 12px;
	          color: var(--ac-text);
	          font-size: 14px;
	          font-weight: 950;
	        }

	        .auto-cast-field > span {
	          text-align: center;
	        }

	        .auto-cast-modal__hint {
	          margin: 0;
	          color: #725d42;
	          font-size: 12px;
	          font-weight: 850;
	          text-align: center;
	        }

	        .auto-cast-modal__actions {
	          display: flex;
	          justify-content: center;
	          gap: 12px;
	          padding: 16px 24px 22px;
        }

	        .auto-cast-modal__button {
	          min-width: 92px;
	          height: 40px;
	          color: var(--ac-text);
	          border: 2px solid rgba(78, 67, 60, .64);
	          border-radius: 8px;
	          box-shadow: 0 3px 0 rgba(78, 67, 60, .36);
	          cursor: pointer;
	          font: inherit;
	          font-size: 14px;
	          font-weight: 1000;
        }

	        .auto-cast-modal__button--ghost {
	          background: #fffdf4;
        }

	        .auto-cast-modal__button--primary {
	          background: #9bdc5c;
        }

	        .hud-main-action {
	          position: relative;
	          z-index: 2;
	          display: flex;
          align-items: center;
          gap: 36px;
          height: 120px;
          padding: 20px 40px;
          color: inherit;
          background: #ffedb7;
          border: 0;
          border-radius: 16px;
          box-shadow: 0 8px 0 #4e433c;
          cursor: pointer;
          font: inherit;
          transition: transform 80ms ease, box-shadow 80ms ease, filter 80ms ease;
        }

        .hud-main-action--waiting {
          justify-content: space-between;
          gap: 18px;
          background: #d9e6d3;
          cursor: default;
        }

        .hud-main-action__tool {
          flex: 0 0 auto;
          width: 80px;
          height: 79px;
          object-fit: contain;
          image-rendering: pixelated;
        }

        .hud-main-action__label {
          position: relative;
          z-index: 0;
          display: inline-block;
          color: #FFF;
          text-align: center;
          -webkit-text-fill-color: #FFF;
          font-family: "Alimama Fang YuanTi VF", "Alimama FangYuanTi VF", "阿里妈妈方圆体 VF Regular", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
          font-size: 50px;
          font-style: normal;
          font-weight: 700;
          font-synthesis: none;
          font-variation-settings: "wght" 700, "BEVL" 1;
          line-height: 100%;
          letter-spacing: 5px;
          paint-order: stroke fill;
          stroke-linecap: round;
          stroke-linejoin: round;
          white-space: nowrap;
        }

        .hud-main-action__label::before {
          content: attr(data-label);
          position: absolute;
          inset: 0;
          z-index: -1;
          color: #FFF;
          text-align: center;
          -webkit-text-fill-color: #FFF;
          -webkit-text-stroke-width: 10px;
          -webkit-text-stroke-color: #4E433C;
          paint-order: stroke fill;
          stroke-linecap: round;
          stroke-linejoin: round;
          text-shadow:
            0 1px 0 #4E433C,
            1px 0 0 #4E433C,
            0 -1px 0 #4E433C,
            -1px 0 0 #4E433C,
            1px 1px 0 #4E433C,
            -1px 1px 0 #4E433C,
            1px -1px 0 #4E433C,
            -1px -1px 0 #4E433C;
        }

        .hud-main-action__label--progress {
          min-width: 152px;
          letter-spacing: 2px;
        }

        .hud-main-action__waiting {
          min-width: 138px;
          display: grid;
          gap: 7px;
          color: #4e433c;
          font-weight: 1000;
          line-height: 1;
        }

        .hud-main-action__waiting-title {
          font-size: 24px;
          letter-spacing: 0;
        }

        .hud-main-action__timer {
          font-size: 34px;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0;
        }

        .hud-main-action__stop {
          appearance: none;
          flex: 0 0 auto;
          height: 44px;
          min-width: 76px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #7f2f24;
          background: #fff8e6;
          border: 0;
          border-radius: 10px;
          box-shadow: inset 0 2px 0 rgba(255, 255, 255, .58), 0 3px 0 rgba(78, 67, 60, .28);
          cursor: pointer;
          font: inherit;
          font-size: 18px;
          font-weight: 1000;
          line-height: 1;
          transition: transform 80ms ease, box-shadow 80ms ease, filter 80ms ease;
        }

        .hud-main-action__stop:active {
          transform: translateY(2px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .46), 0 1px 0 rgba(78, 67, 60, .3);
        }

        .hud-basket {
          position: relative;
          width: 120px;
          height: 120px;
          padding: 0;
          background: transparent;
          border: 0;
          border-radius: 16px;
          box-shadow: none;
          cursor: pointer;
          font: inherit;
          overflow: visible;
          transition: transform 80ms ease, filter 80ms ease;
        }

        .hud-basket__shell {
          position: absolute;
          inset: 0 0 -8px;
          border-radius: 16px;
          overflow: hidden;
          clip-path: inset(0 0 0 0 round 16px);
          transform: translateZ(0);
          transition: clip-path 80ms ease;
        }

        .hud-basket__icon {
          position: absolute;
          inset: 0 0 -8px;
          width: 120px;
          height: 128px;
          object-fit: fill;
          transition: transform 80ms ease;
          pointer-events: none;
          user-select: none;
        }

        .hud-badge {
          position: absolute;
          right: -10px;
          top: -17px;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #fd5f5a;
        }

        .hud-badge span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -55%);
          color: #fff;
          font-size: 22px;
          font-weight: 900;
          line-height: 1;
          white-space: nowrap;
        }

        .menu-item:hover,
        .hud-main-action:hover,
        .hud-basket:hover {
          filter: brightness(1.02);
        }

        .hud-top-stats:hover .hud-stat-card,
        .hud-stat-card:hover {
          background: #fff7df;
        }

        .menu-item:active {
          transform: translateY(1px);
        }

        .hud-stat-card--button:active {
          transform: translateY(1px);
          box-shadow: 0 2px 0 rgba(78, 67, 60, .22);
        }

        .hud-main-action:active,
        .hud-basket:active {
          transform: translateY(6px);
        }

        .hud-main-action:active {
          box-shadow: 0 0 0 #4e433c;
        }

        .hud-basket:active .hud-basket__shell {
          clip-path: inset(0 0 8px 0 round 16px);
        }

	        .menu-item:focus-visible,
	        .cast-auto-button:focus-visible,
	        .cast-auto-stop:focus-visible,
	        .cast-count-stepper:focus-visible,
	        .cast-count-input:focus-visible,
	        .auto-cast-modal__button:focus-visible,
	        .hud-main-action:focus-visible,
	        .hud-main-action__stop:focus-visible,
	        .hud-basket:focus-visible {
	          outline: 3px solid #ffcc00;
          outline-offset: 4px;
        }

        .ui-left {
          position: absolute;
          left: clamp(18px, 2.55vw, 52px);
          bottom: clamp(24px, 3.2vh, 46px);
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: clamp(12px, 1.1vw, 18px);
          width: fit-content;
          z-index: 5;
        }

        .menu-tile {
          appearance: none;
          padding: 0;
          margin: 0;
          background: transparent;
          border: 0;
          color: inherit;
          font: inherit;
          text-decoration: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          width: clamp(82px, 5.6vw, 104px);
          min-height: 92px;
          transition: transform .22s cubic-bezier(.23,1,.32,1);
          position: relative; /* establish stacking context for label */
        }

        .menu-tile__icon {
          position: relative;
          z-index: 1;
        }

        .menu-tile:hover {
          transform: translateY(-3px);
        }

        .menu-tile:active {
          transform: translateY(1px);
        }

        .menu-tile:focus-visible {
          outline: 2px solid var(--ac-focus-yellow);
          outline-offset: 4px;
          border-radius: 8px;
        }

        .menu-tile__icon {
          width: 72%;
          max-width: 72px;
          aspect-ratio: 1;
          object-fit: contain;
          image-rendering: auto;
          filter: drop-shadow(0 4px 0 rgba(62, 48, 37, .28))
                  drop-shadow(0 8px 14px rgba(62, 48, 37, .18));
          pointer-events: none;
          user-select: none;
          transition: filter .22s ease;
        }

        .menu-tile:hover .menu-tile__icon {
          filter: drop-shadow(0 6px 0 rgba(62, 48, 37, .32))
                  drop-shadow(0 10px 18px rgba(62, 48, 37, .22));
        }

        .menu-tile__name {
          position: relative;
          z-index: 1;
          color: #fff;
          font-size: 13px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: .06em;
          white-space: nowrap;
          text-shadow: 0 2px 0 rgba(0, 0, 0, .15);
        }

        .pixel-button {
          appearance: none;
          width: clamp(82px, 5.75vw, 120px);
          aspect-ratio: 1;
          position: relative;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 28% 23%, rgba(255,255,255,.72) 0 10%, transparent 11%),
            linear-gradient(180deg, #fffdf4 0%, var(--ac-cream) 100%);
          border: 2.5px solid var(--ac-border);
          border-radius: var(--radius-md);
          padding: 0;
          box-shadow:
            0 5px 0 0 var(--ac-shadow),
            0 8px 18px rgba(61, 52, 40, .12);
          cursor: pointer;
          font: inherit;
          transition: all .25s cubic-bezier(.4, 0, .2, 1);
        }

        .pixel-button:hover {
          transform: translateY(-1px);
          border-color: var(--ac-border-hover);
          box-shadow:
            0 6px 0 0 var(--ac-shadow),
            0 10px 22px rgba(61, 52, 40, .15);
        }

        .pixel-button:active {
          transform: translateY(2px);
          box-shadow:
            0 1px 0 0 var(--ac-shadow),
            0 4px 12px rgba(61, 52, 40, .12);
        }

        .pixel-button:focus-visible,
        .shop:focus-visible {
          outline: 2px solid var(--ac-focus-yellow);
          outline-offset: 3px;
        }

        .pixel-button::after {
          content: "";
          position: absolute;
          inset: 9px;
          border: 2px solid rgba(196, 184, 158, .55);
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, .13);
        }

        .pixel-button--image::after {
          content: none;
        }

        .ui-left .pixel-button--image {
          box-shadow: none;
        }

        .ui-left .pixel-button--image:hover,
        .ui-left .pixel-button--image:active {
          box-shadow: none;
        }

        .icon-bag,
        .icon-trophy,
        .icon-case {
          position: relative;
          z-index: 1;
          width: 56%;
          height: 48%;
        }

        .menu-icon-img {
          position: relative;
          z-index: 2;
          width: 86%;
          height: 86%;
          display: block;
          object-fit: contain;
          image-rendering: auto;
          filter: drop-shadow(0 3px 0 rgba(62, 48, 37, .22));
          pointer-events: none;
          user-select: none;
        }

        .icon-bag {
          width: 61%;
          height: 58%;
          margin-top: 6%;
          background:
            radial-gradient(circle at 49% 43%, #f3c16f 0 4%, transparent 5%),
            linear-gradient(90deg, transparent 0 13%, #6e3f28 14% 23%, transparent 24% 76%, #6e3f28 77% 86%, transparent 87%),
            linear-gradient(180deg, #d99046 0 24%, #af6534 25% 100%);
          border: 5px solid var(--ink-dark);
          border-radius: var(--radius-md);
          box-shadow:
            inset 8px 0 0 rgba(255, 201, 105, .34),
            inset -8px 0 0 rgba(86, 41, 24, .22),
            0 5px 0 rgba(80, 44, 27, .22);
        }

        .icon-bag::before {
          content: "";
          position: absolute;
          left: 22%;
          top: -23%;
          width: 56%;
          height: 38%;
          border: 5px solid var(--ink-dark);
          border-bottom: 0;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          background: #bf763c;
          box-shadow:
            inset 0 6px 0 rgba(255, 211, 125, .32),
            0 19px 0 -6px #6d3a22;
        }

        .icon-bag::after {
          content: "";
          position: absolute;
          left: 18%;
          right: 18%;
          bottom: 11%;
          height: 36%;
          background:
            radial-gradient(circle at 50% 36%, #f0bb5e 0 6%, transparent 7%),
            linear-gradient(180deg, #c9793d 0 38%, #9d552f 39% 100%);
          border: 5px solid var(--ink-dark);
          border-radius: var(--radius-md) var(--radius-md) var(--radius-sm) var(--radius-sm);
          box-shadow:
            inset 6px 0 0 rgba(255, 198, 99, .24),
            inset -5px 0 0 rgba(82, 38, 23, .22);
        }

        .icon-trophy {
          width: 64%;
          height: 62%;
          margin-top: 4%;
        }

        .icon-trophy::before {
          content: "";
          position: absolute;
          left: 25%;
          top: 1%;
          width: 50%;
          height: 48%;
          background:
            linear-gradient(90deg, rgba(255, 244, 160, .6) 0 18%, transparent 19% 100%),
            linear-gradient(90deg, #d8891d 0%, #ffd962 44%, #f4a329 65%, #a95a18 100%);
          border: 5px solid var(--ink-dark);
          border-radius: var(--radius-xs) var(--radius-xs) var(--radius-sm) var(--radius-sm);
          box-shadow:
            inset 0 7px 0 rgba(255, 242, 139, .7),
            inset -7px 0 0 rgba(126, 60, 18, .25);
        }

        .icon-trophy::after {
          content: "";
          position: absolute;
          left: 20%;
          bottom: 0;
          width: 60%;
          height: 18%;
          background: linear-gradient(90deg, #a85b1d, #f0aa35 42%, #8c4619);
          border: 5px solid var(--ink-dark);
          border-radius: 4px;
          box-shadow:
            0 -13px 0 -2px #ce7920,
            0 -13px 0 2px var(--ink-dark),
            22px -36px 0 -12px #f7c348,
            24px -36px 0 -7px var(--ink-dark),
            -22px -36px 0 -12px #f7c348,
            -24px -36px 0 -7px var(--ink-dark);
        }

        .icon-trophy .cup-stem {
          position: absolute;
          left: 42%;
          bottom: 18%;
          width: 16%;
          height: 25%;
          background: linear-gradient(90deg, #a65a1c, #f0a735 55%, #8b4418);
          border-left: 5px solid var(--ink-dark);
          border-right: 5px solid var(--ink-dark);
          z-index: 1;
        }

        .icon-trophy .cup-handles {
          position: absolute;
          left: 4%;
          right: 4%;
          top: 14%;
          height: 32%;
          border-left: 5px solid var(--ink-dark);
          border-right: 5px solid var(--ink-dark);
          border-radius: var(--radius-sm);
        }

        .icon-case {
          width: 64%;
          height: 51%;
          margin-top: 12%;
          background:
            linear-gradient(180deg, #c77737 0 33%, #8e4628 34% 100%);
          border: 5px solid var(--ink-dark);
          border-radius: var(--radius-sm);
          box-shadow:
            inset 8px 0 0 rgba(255, 198, 99, .22),
            inset -8px 0 0 rgba(73, 33, 21, .24),
            0 5px 0 rgba(76, 42, 29, .22);
        }

        .icon-case::before {
          content: "";
          position: absolute;
          left: 28%;
          top: -27%;
          width: 44%;
          height: 34%;
          border: 5px solid var(--ink-dark);
          border-bottom: 0;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          background: #d89443;
          box-shadow:
            0 21px 0 -7px #f0be5a,
            0 21px 0 -2px var(--ink-dark);
        }

        .icon-case::after {
          content: "";
          position: absolute;
          right: -17%;
          bottom: -17%;
          width: 40%;
          aspect-ratio: 1;
          background:
            radial-gradient(circle at 36% 32%, rgba(255, 242, 159, .9) 0 16%, transparent 17%),
            radial-gradient(circle at 50% 50%, #ffd761 0 43%, #d58a22 44% 100%);
          border: 5px solid var(--ink-dark);
          border-radius: 50%;
          box-shadow:
            inset -4px -5px 0 rgba(130, 65, 18, .24),
            0 3px 0 rgba(76, 42, 29, .22);
        }

        .icon-case .case-flap {
          position: absolute;
          left: 14%;
          right: 14%;
          top: 9%;
          height: 34%;
          background: #9b532d;
          border: 4px solid var(--ink-dark);
          border-top: 0;
          border-radius: 0 0 var(--radius-sm) var(--radius-sm);
        }

        .icon-case .case-lock {
          position: absolute;
          left: 43%;
          top: 23%;
          width: 14%;
          aspect-ratio: 1;
          background: #ffd15a;
          border: 4px solid var(--ink-dark);
          border-radius: 50%;
          z-index: 2;
        }

        .shop {
          position: absolute;
          right: clamp(28px, 2.8vw, 58px);
          top: clamp(34px, 4vh, 58px);
          width: clamp(98px, 7.35vw, 152px);
          height: clamp(91px, 7.05vw, 145px);
          z-index: 5;
          filter: drop-shadow(0 5px 0 var(--ac-shadow)) drop-shadow(0 8px 18px rgba(61, 52, 40, .12));
          transition: all .25s cubic-bezier(.4, 0, .2, 1);
        }

        .shop:hover {
          transform: translateY(-1px);
          filter: drop-shadow(0 6px 0 var(--ac-shadow)) drop-shadow(0 10px 22px rgba(61, 52, 40, .15));
        }

        .shop:active {
          transform: translateY(2px);
          filter: drop-shadow(0 1px 0 var(--ac-shadow)) drop-shadow(0 4px 12px rgba(61, 52, 40, .12));
        }

        .shop .awning {
          position: absolute;
          left: 2%;
          right: 2%;
          top: 0;
          height: 34%;
          background:
            linear-gradient(180deg, rgba(255,255,255,.35), transparent 42%),
            repeating-linear-gradient(90deg, #2e7ec2 0 17%, #ecf7ff 17% 32%, #438fd0 32% 49%);
          border: 3px solid var(--ac-text);
          border-radius: var(--radius-md) var(--radius-md) var(--radius-xs) var(--radius-xs);
          box-shadow:
            inset 0 -7px 0 rgba(65, 39, 27, .2),
            0 4px 0 rgba(70, 38, 25, .22);
          z-index: 2;
        }

        .shop .base {
          position: absolute;
          left: 13%;
          right: 13%;
          bottom: 0;
          height: 73%;
          background:
            radial-gradient(circle at 18% 65%, rgba(151, 98, 54, .22) 0 4%, transparent 5%),
            radial-gradient(circle at 78% 56%, rgba(151, 98, 54, .18) 0 4%, transparent 5%),
            linear-gradient(90deg, #e8cf9b 0 23%, #f7dfae 24% 73%, #d5b986 74% 100%);
          border: 3px solid var(--ac-text);
          border-radius: var(--radius-xs) var(--radius-xs) var(--radius-sm) var(--radius-sm);
          box-shadow: inset 0 32px 0 #a84e20;
        }

        .shop .label {
          position: absolute;
          left: 18%;
          right: 18%;
          top: 35%;
          height: 31%;
          display: grid;
          place-items: center;
          color: #ffe184;
          font-weight: 950;
          font-size: clamp(23px, 2vw, 43px);
          line-height: 1;
          letter-spacing: .03em;
          text-shadow:
            3px 0 var(--ac-text),
            0 3px var(--ac-text),
            -3px 0 var(--ac-text),
            0 -3px var(--ac-text),
            4px 4px 0 rgba(44, 20, 13, .24);
          z-index: 3;
        }

        .shop .door {
          position: absolute;
          width: 23%;
          height: 27%;
          left: 38.5%;
          bottom: 2%;
          background:
            linear-gradient(90deg, rgba(255, 187, 78, .2), transparent 45%),
            #b55f24;
          border: 3px solid var(--ac-text);
          border-radius: 8px 8px 0 0;
          z-index: 3;
        }

        .shop .door::after {
          content: "";
          position: absolute;
          right: 18%;
          top: 44%;
          width: 5px;
          height: 5px;
          background: #ffd15a;
          border-radius: 50%;
          box-shadow: 0 0 0 2px #63301a;
        }

        .shop .stone {
          position: absolute;
          left: 18%;
          right: 18%;
          bottom: 10%;
          height: 27%;
          background:
            linear-gradient(90deg, transparent 0 20%, rgba(113, 74, 43, .2) 21% 25%, transparent 26% 52%, rgba(113, 74, 43, .18) 53% 58%, transparent 59%),
            linear-gradient(0deg, transparent 0 44%, rgba(113, 74, 43, .18) 45% 50%, transparent 51%);
          z-index: 2;
        }

        .shop-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 40;
          display: grid;
          place-items: center;
          padding: clamp(18px, 3vw, 44px);
          background: rgba(52, 119, 166, .34);
          backdrop-filter: blur(5px);
        }

        .shop-modal {
          width: min(1120px, 94vw);
          max-height: min(820px, 88svh);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: var(--ac-text);
          background:
            radial-gradient(circle at 10% 4%, rgba(255,255,255,.75) 0 8%, transparent 9%),
            linear-gradient(180deg, #fffdf4 0%, var(--ac-cream) 100%);
          border: 3px solid var(--ac-border);
          border-radius: var(--radius-lg);
          box-shadow:
            0 7px 0 var(--ac-shadow),
            0 22px 60px rgba(66, 48, 31, .22);
        }

        .shop-modal__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          padding: clamp(18px, 2.2vw, 28px) clamp(18px, 2.6vw, 34px) 16px;
          border-bottom: 2px dashed rgba(196, 184, 158, .65);
        }

        .shop-modal__title {
          margin: 0;
          font-family: var(--modal-title-font);
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: .02em;
          color: var(--ac-text);
        }

        .shop-modal__subtitle {
          margin: 8px 0 0;
          color: var(--ac-text-body);
          font-size: 13px;
          font-weight: 700;
        }

        .delete-confirm-modal {
          width: min(520px, 92vw);
          max-height: none;
        }

        .delete-confirm-modal__body {
          padding: 18px clamp(18px, 2.2vw, 28px) 20px;
          display: grid;
          gap: 14px;
        }

        .delete-confirm-modal__text {
          margin: 0;
          color: var(--ac-text);
          font-size: 14px;
          font-weight: 800;
          line-height: 1.6;
        }

        .delete-confirm-modal__target {
          padding: 12px 14px;
          color: #5d4a36;
          background: #fff7e3;
          border: 2px solid rgba(196, 184, 158, .72);
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 900;
          line-height: 1.5;
        }

        .delete-confirm-modal__actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .delete-confirm-modal__footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 2px;
        }

        .delete-confirm-modal__btn {
          min-width: 100px;
          height: 38px;
          padding: 0 14px;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 2px solid var(--ac-border);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
          font: inherit;
          font-size: 13px;
          font-weight: 900;
        }

        .delete-confirm-modal__btn:hover {
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .58);
        }

        .delete-confirm-modal__btn--danger {
          color: #fffdf4;
          background: linear-gradient(180deg, #e36d5c 0%, #b94a38 100%);
          border-color: #7f2f24;
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,.18),
            2px 2px 0 rgba(127, 47, 36, .45);
        }

        .delete-confirm-modal__btn--danger:hover {
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,.18),
            3px 3px 0 rgba(127, 47, 36, .45);
        }

        .inventory-toast {
          position: fixed;
          right: max(24px, env(safe-area-inset-right));
          bottom: max(24px, env(safe-area-inset-bottom));
          z-index: 95;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: 12px;
          width: min(460px, calc(100vw - 32px));
          padding: 12px 16px;
          color: var(--ac-text);
          background: linear-gradient(180deg, #fff8e6 0%, #f7e8bf 100%);
          border: 2px solid var(--ac-border);
          border-radius: var(--radius-sm);
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,.62),
            0 6px 0 rgba(78, 67, 60, .34),
            0 16px 34px rgba(77, 51, 28, .18);
          animation: inventory-toast-pop 220ms ease-out;
          pointer-events: none;
        }

        .inventory-toast__icon {
          width: 34px;
          height: 34px;
          display: inline-grid;
          place-items: center;
          color: #fffdf4;
          background: linear-gradient(180deg, #34d399 0%, #0f9f6e 100%);
          border: 2px solid #08724f;
          border-radius: 999px;
          box-shadow: 0 3px 0 rgba(8, 114, 79, .34);
          font-size: 21px;
          font-weight: 1000;
          line-height: 1;
        }

        .inventory-toast__title {
          margin: 0;
          color: var(--ac-text);
          font-size: 14px;
          font-weight: 1000;
          line-height: 1.25;
        }

        .inventory-toast__message {
          margin: 3px 0 0;
          color: #725d42;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.45;
        }

        @keyframes inventory-toast-pop {
          from {
            opacity: 0;
            transform: translate(12px, 10px) scale(.96);
          }
          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }

        .shop-modal__close {
          width: 44px;
          height: 44px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 2px solid var(--ac-border);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 0 var(--ac-shadow-input);
          transition: all .2s ease;
        }

        .shop-modal__close:hover {
          transform: translateY(-1px);
          border-color: var(--ac-border-hover);
        }

        .shop-modal__toolbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px clamp(18px, 2.6vw, 34px);
        }

        .shop-search {
          position: relative;
          width: min(320px, 100%);
        }

        .shop-search svg {
          position: absolute;
          left: 13px;
          top: 50%;
          width: 16px;
          height: 16px;
          transform: translateY(-50%);
          color: var(--ac-text-body);
        }

        .shop-input,
        .shop-select {
          height: 40px;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
          font: inherit;
          font-size: 13px;
          font-weight: 800;
          outline: none;
        }

        .shop-input {
          width: 100%;
          padding: 0 14px 0 38px;
        }

        .shop-select {
          padding: 0 12px;
        }

        .shop-input:focus,
        .shop-select:focus,
        .shop-chip:focus-visible,
        .shop-card__icon-btn:focus-visible,
        .shop-card__action:focus-visible {
          border-color: var(--ac-primary);
          outline: 2px solid rgba(25, 200, 185, .28);
          outline-offset: 2px;
        }

        .shop-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 10px;
        }

        .shop-select-aisland {
          width: 132px;
          height: 40px;
        }

        .shop-select-aisland--sort {
          width: 162px;
        }

        .shop-select-aisland [class*="animal-wrapper-"] {
          width: 100%;
          min-width: 0;
          height: 100%;
        }

        .shop-select-aisland [class*="animal-trigger-"] {
          height: 40px;
          padding: 0 14px 0 18px;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
        }

        .shop-select-aisland [class*="animal-trigger-"]:hover {
          transform: translate(-1px, -1px);
          border-color: rgba(196, 184, 158, .86);
          background: var(--ac-cream-light);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .58);
        }

        .shop-select-aisland [class*="animal-value-"],
        .shop-select-aisland [class*="animal-placeholder-"] {
          color: var(--ac-text);
          font: inherit;
          font-size: 13px;
          font-weight: 900;
        }

        .shop-select-aisland [class*="animal-dropdown-"] {
          /* animal-island-ui defaults its dropdown to a right-side popout (inline inset 50%/auto/auto/100%
             with transform translateY(-50%) and margin-left 6px), which positions the panel to the right
             of the trigger and vertically-centered. Override every dimension so the panel drops straight
             down beneath the trigger. */
          inset: 100% auto auto 0 !important;
          left: 0 !important;
          right: auto !important;
          top: calc(100% + 6px) !important;
          bottom: auto !important;
          margin: 0 !important;
          transform: none !important;
          min-width: 100% !important;
          background: #fff3d3;
          border: 2px solid var(--ac-border);
          border-radius: var(--radius-md);
          box-shadow: 0 6px 0 var(--ac-shadow-input), 0 12px 26px rgba(61, 52, 40, .14);
        }

        .shop-select-aisland [class*="animal-option-"] {
          color: var(--ac-text);
          font: inherit;
          font-size: 13px;
          font-weight: 900;
        }

        .sort-direction-select {
          position: relative;
          width: 100%;
          height: 40px;
        }

        .sort-direction-select__trigger {
          appearance: none;
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 14px 0 18px;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
          font: inherit;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
        }

        .sort-direction-select__trigger:hover {
          transform: translate(-1px, -1px);
          background: var(--ac-cream-light);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .58);
        }

        .sort-direction-select__trigger:focus-visible,
        .sort-direction-select__option:focus-visible {
          border-color: var(--ac-primary);
          outline: 2px solid rgba(25, 200, 185, .28);
          outline-offset: 2px;
        }

        .sort-direction-select__chevron {
          width: 12px;
          height: 12px;
          display: flex;
          align-items: center;
          color: #a09080;
          line-height: 0;
          transform: rotate(0deg);
          transition: transform .18s ease;
        }

        .sort-direction-select.is-open .sort-direction-select__chevron {
          transform: rotate(180deg);
        }

        .sort-direction-select__menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          z-index: 20;
          min-width: 100%;
          width: max-content;
          display: grid;
          gap: 4px;
          padding: 10px;
          background: #fff3d3;
          border: 2px solid var(--ac-border);
          border-radius: var(--radius-md);
          box-shadow: 0 6px 0 var(--ac-shadow-input), 0 12px 26px rgba(61, 52, 40, .14);
        }

        .sort-direction-select__option {
          appearance: none;
          min-width: 150px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 0 12px;
          color: var(--ac-text);
          background: transparent;
          border: 2px solid transparent;
          border-radius: var(--radius-sm);
          font: inherit;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          white-space: nowrap;
        }

        .sort-direction-select__option:hover,
        .sort-direction-select__option.is-active {
          background: #ffe8a9;
        }

        .sort-direction-select__direction {
          color: rgba(114, 93, 66, .78);
          font-size: 12px;
        }

        .game-landing .shop-modal .shop-select-aisland [class*="animal-option-"]::before,
        .game-landing .shop-modal .shop-select-aisland [class*="animal-hovered-"]::before {
          content: none !important;
          display: none !important;
          background: none !important;
          width: 0 !important;
          height: 0 !important;
          opacity: 0 !important;
          animation: none !important;
        }

        .shop-chip {
          height: 40px;
          padding: 0 14px;
          color: var(--ac-text);
          background: rgba(255, 249, 232, .72);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          box-shadow: none;
          font: inherit;
          font-size: 12px;
          font-weight: 900;
        }

        .shop-chip:hover {
          border-color: transparent;
          background: #fffdf4;
        }

        .shop-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          overflow: auto;
          padding: 0 clamp(18px, 2.6vw, 34px) clamp(18px, 2.6vw, 34px);
        }

        .shop-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 248, .86);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          box-shadow: none;
          cursor: pointer;
          overflow: hidden;
          transition: transform .18s ease, background .18s ease;
        }

        .shop-card:hover,
        .shop-card:focus-visible {
          background: rgba(255, 255, 248, .96);
          transform: translateY(-1px);
        }

        .shop-card:focus-visible {
          outline: 2px solid rgba(25, 200, 185, .35);
          outline-offset: 3px;
        }

        .shop-card__body {
          padding: 15px;
        }

        .shop-card__title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .shop-card__title {
          margin: 0;
          color: var(--ac-text);
          font-size: 17px;
          line-height: 1.25;
          font-weight: 900;
        }

        .shop-card__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 9px;
        }

        .shop-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          min-height: 25px;
          padding: 4px 9px;
          color: var(--ac-text-body);
          background: #fff3d3;
          border: 1.5px solid rgba(196, 184, 158, .72);
          border-radius: var(--radius-sm);
          font-size: 11px;
          font-weight: 900;
        }

        .shop-badge--primary {
          color: #08766e;
          background: var(--ac-primary-bg);
          border-color: rgba(25, 200, 185, .35);
        }

        .shop-card__desc {
          display: -webkit-box;
          min-height: 42px;
          margin: 12px 0 0;
          overflow: hidden;
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.75;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .shop-curve {
          height: 62px;
          margin-top: 12px;
          padding-top: 9px;
          border-top: 2px dashed rgba(196, 184, 158, .55);
        }

        .shop-curve__label {
          margin-bottom: 4px;
          color: rgba(114, 93, 66, .72);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .shop-curve svg {
          width: 100%;
          height: 40px;
          overflow: visible;
        }

        .shop-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 14px;
        }

        .shop-metric {
          min-width: 0;
        }

        .shop-metric__label {
          color: rgba(114, 93, 66, .72);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .shop-metric__value {
          margin-top: 3px;
          color: var(--ac-text);
          font-size: 14px;
          font-weight: 900;
          font-variant-numeric: tabular-nums;
        }

        .shop-metric__value--up {
          color: #0b9f73;
        }

        .shop-metric__value--down {
          color: #d85d48;
        }

        .shop-card__actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          margin-top: auto;
          padding: 13px 15px 15px;
          border-top: 2px dashed rgba(196, 184, 158, .55);
        }

        .shop-card__icon-btn,
        .shop-card__action {
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 2px solid var(--ac-border);
          border-radius: var(--radius-md);
          box-shadow: 0 3px 0 var(--ac-shadow-input);
          font: inherit;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
          transition: all .18s ease;
        }

        .shop-card__icon-btn {
          width: 36px;
          padding: 0;
          color: #c78320;
        }

        .shop-card__icon-btn.is-starred {
          color: #a86b12;
          background: #ffe6a9;
          border-color: #e5b243;
        }

        .shop-card__action {
          gap: 6px;
          padding: 0 13px;
        }

        .shop-card__action--primary {
          color: #075b55;
          background: var(--ac-primary-bg);
          border-color: rgba(25, 200, 185, .46);
        }

        .shop-card__icon-btn:hover,
        .shop-card__action:hover {
          transform: translateY(-1px);
          border-color: var(--ac-border-hover);
        }

        .shop-empty {
          grid-column: 1 / -1;
          padding: 44px 20px;
          color: var(--ac-text-body);
          background: rgba(255, 255, 248, .82);
          border: 2px dashed var(--ac-border);
          border-radius: var(--radius-md);
          text-align: center;
          font-weight: 900;
        }

        .inventory-modal {
          --inventory-pixel-edge: color-mix(in srgb, var(--ac-border) 82%, var(--ac-text));
          --inventory-pixel-shadow: color-mix(in srgb, var(--ac-shadow) 76%, var(--ac-text));
          --inventory-toolbar-height: 140px;
          --inventory-filter-height: 110px;
          width: min(1180px, 95vw);
          background: linear-gradient(180deg, #fffdf4 0%, var(--ac-cream) 100%);
          border: 2px solid var(--inventory-pixel-edge);
          border-radius: var(--radius-xs);
          box-shadow:
            0 0 0 2px rgba(255, 253, 244, .88),
            5px 5px 0 rgba(189, 174, 160, .72),
            0 20px 48px rgba(66, 48, 31, .18);
          image-rendering: pixelated;
        }

        .inventory-modal .shop-modal__header {
          align-items: center;
          padding-top: 16px;
          background: rgba(255, 249, 232, .88);
          border-bottom: 2px solid rgba(196, 184, 158, .62);
        }

        .inventory-modal .shop-modal__title {
          font-size: 30px;
          color: var(--ac-text);
        }

        .inventory-modal .shop-modal__close {
          width: 38px;
          height: 38px;
        }

        .inventory-modal .shop-modal__toolbar {
          align-content: flex-start;
          flex: 0 0 auto;
          min-height: 0;
          height: auto;
          padding-top: 16px;
          padding-bottom: 10px;
          background: rgba(255, 249, 232, .58);
          border-bottom: 0;
        }

        .inventory-modal .shop-modal__toolbar {
          max-height: var(--inventory-toolbar-height);
          position: relative;
          z-index: 20;
          overflow: visible;
          opacity: 1;
          transform: translateY(0);
          transition:
            max-height .48s cubic-bezier(.22, 1, .36, 1),
            opacity .34s cubic-bezier(.22, 1, .36, 1),
            transform .42s cubic-bezier(.22, 1, .36, 1);
          will-change: max-height, opacity, transform;
        }

        .inventory-modal .inventory-grade-filter {
          align-content: flex-start;
          flex: 0 0 auto;
          min-height: 0;
          height: auto;
          max-height: var(--inventory-filter-height);
          overflow: hidden;
          opacity: 1;
          transform: translateY(0);
          transition:
            max-height .48s cubic-bezier(.22, 1, .36, 1),
            opacity .34s cubic-bezier(.22, 1, .36, 1),
            transform .42s cubic-bezier(.22, 1, .36, 1),
            padding-top .42s cubic-bezier(.22, 1, .36, 1),
            padding-bottom .42s cubic-bezier(.22, 1, .36, 1);
          will-change: max-height, opacity, transform, padding-top, padding-bottom;
        }

        .inventory-modal.inventory-modal--controls-hidden .shop-modal__toolbar,
        .inventory-modal.inventory-modal--controls-hidden .inventory-grade-filter {
          min-height: 0;
          height: 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          padding-top: 0;
          padding-bottom: 0;
          transform: translateY(-6px);
          pointer-events: none;
        }

        .inventory-modal .shop-modal__close,
        .inventory-modal .shop-input,
        .inventory-modal .shop-chip,
        .inventory-modal .sort-direction-select__trigger,
        .inventory-modal .shop-select-aisland [class*="animal-trigger-"] {
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
        }

        .inventory-modal .shop-modal__close:hover,
        .inventory-modal .shop-chip:hover,
        .inventory-modal .sort-direction-select__trigger:hover,
        .inventory-modal .shop-select-aisland [class*="animal-trigger-"]:hover {
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .58);
        }

        .inventory-modal .shop-modal__title,
        .inventory-detail-modal .shop-modal__title {
          font-family: var(--modal-title-font);
        }

        .inventory-grade-filter {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          padding: 8px clamp(18px, 2.6vw, 34px) 10px;
          background: rgba(255, 249, 232, .46);
        }

        .inventory-grade-filter__chip {
          --grade-chip-bg: var(--ac-cream-light);
          --grade-chip-edge: rgba(196, 184, 158, .86);
          --grade-chip-shadow: rgba(189, 174, 160, .42);
          appearance: none;
          min-width: 48px;
          height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          color: #101010;
          background: var(--grade-chip-bg);
          border: 1.5px solid var(--grade-chip-edge);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 var(--grade-chip-shadow);
          font: inherit;
          font-size: 12px;
          font-weight: 950;
          line-height: 1;
          letter-spacing: .03em;
          transition: transform .14s ease, box-shadow .14s ease, filter .14s ease;
        }

        .inventory-grade-filter__chip:hover,
        .inventory-grade-filter__chip.is-active {
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0 var(--grade-chip-shadow);
          filter: saturate(1.06);
        }

        .inventory-grade-filter__chip.is-active {
          border-width: 2px;
          outline: 2px solid rgba(16, 16, 16, .08);
          outline-offset: 1px;
        }

        .inventory-grade-filter__chip--prop {
          --grade-chip-bg: #ececec;
          --grade-chip-edge: #c9c9c9;
          --grade-chip-shadow: rgba(74, 70, 63, .14);
        }

        .inventory-grade-filter__chip--misc {
          --grade-chip-bg: #ececec;
          --grade-chip-edge: #c9c9c9;
          --grade-chip-shadow: rgba(74, 70, 63, .14);
        }

        .inventory-grade-filter__chip--SSS {
          --grade-chip-bg: linear-gradient(180deg, oklch(0.98 0.37 36), oklch(0.95 0.24 77));
          --grade-chip-edge: #d39a2b;
          --grade-chip-shadow: rgba(156, 93, 15, .22);
        }

        .inventory-grade-filter__chip--SS {
          --grade-chip-bg: #fff7d9;
          --grade-chip-edge: #f4d36c;
          --grade-chip-shadow: rgba(176, 122, 16, .16);
        }

        .inventory-grade-filter__chip--S {
          --grade-chip-bg: #f7e2ff;
          --grade-chip-edge: #c17df2;
          --grade-chip-shadow: rgba(107, 78, 179, .16);
        }

        .inventory-grade-filter__chip--A {
          --grade-chip-bg: #cfefff;
          --grade-chip-edge: #4aa7e4;
          --grade-chip-shadow: rgba(43, 85, 143, .16);
        }

        .inventory-grade-filter__chip--B {
          --grade-chip-bg: #defec0;
          --grade-chip-edge: #9bdc5c;
          --grade-chip-shadow: rgba(72, 122, 38, .16);
        }

        .inventory-grade-filter__chip--C {
          --grade-chip-bg: #f3eee8;
          --grade-chip-edge: #c1ab8b;
          --grade-chip-shadow: rgba(111, 88, 67, .14);
        }

        .inventory-grade-filter__chip--D {
          --grade-chip-bg: #ececec;
          --grade-chip-edge: #c9c9c9;
          --grade-chip-shadow: rgba(74, 70, 63, .14);
        }

        .settings-modal {
          position: relative;
          width: min(1160px, 94vw);
          height: min(680px, 88vh);
          max-height: 88vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: linear-gradient(180deg, #fffdf4 0%, var(--ac-cream) 100%);
          border: 2px solid color-mix(in srgb, var(--ac-border) 82%, var(--ac-text));
          border-radius: var(--radius-xs);
          box-shadow:
            0 0 0 2px rgba(255, 253, 244, .88),
            5px 5px 0 rgba(189, 174, 160, .72),
            0 20px 48px rgba(66, 48, 31, .18);
          image-rendering: pixelated;
        }

        .settings-modal .shop-modal__header {
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding-top: 16px;
          background: rgba(255, 249, 232, .88);
          border-bottom: 2px solid rgba(196, 184, 158, .62);
        }

        .settings-modal .shop-modal__title {
          font-family: var(--modal-title-font);
          font-size: 30px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: .02em;
          color: var(--ac-text);
          text-shadow: none;
        }

        .settings-modal .shop-modal__close {
          width: 38px;
          height: 38px;
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
        }

        .settings-content {
          flex: 1;
          min-height: 0;
          overflow: auto;
          padding: 18px clamp(18px, 2.8vw, 30px) 24px;
        }

        .settings-content--agent {
          padding: 0;
          overflow: hidden;
          background: rgba(255, 253, 244, .86);
        }

        .settings-tabs {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: 0;
          padding: 0;
          background: transparent;
          border: 0;
          box-shadow: none;
        }

        .settings-tab {
          appearance: none;
          min-height: 38px;
          padding: 0 18px;
          color: rgba(121, 79, 39, .66);
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs);
          cursor: pointer;
          font: inherit;
          font-size: 14px;
          font-weight: 1000;
          transition: background 120ms ease, color 120ms ease;
        }

        .settings-tab:hover {
          color: var(--ac-text);
          background: rgba(255, 247, 227, .72);
        }

        .settings-tab.is-active {
          color: var(--ac-text);
          background: #ffd557;
          box-shadow: none;
        }

        .settings-agent-panel {
          --settings-agent-side-width: 176px;
          position: static;
          min-height: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: start;
          gap: 0;
        }

        .settings-agent-side-nav {
          position: relative;
          z-index: 1;
          display: grid;
          align-content: start;
          gap: 4px;
          min-height: 100%;
          overflow: visible;
          padding: 18px 0;
          background: rgba(255, 253, 244, .86);
          border-right: 1.5px solid rgba(121, 79, 39, .2);
        }

        .settings-agent-side-tab {
          appearance: none;
          width: 170px;
          min-height: 48px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          padding: 0 18px 0 22px;
          color: rgba(121, 79, 39, .72);
          text-align: left;
          background: transparent;
          border: 1.5px solid transparent;
          border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
          box-shadow: none;
          cursor: pointer;
          font: inherit;
          font-size: 12px;
          font-weight: 1000;
          line-height: 1.25;
          transition: background 120ms ease, color 120ms ease;
        }

        .settings-agent-side-tab:hover {
          color: var(--ac-text);
          background: rgba(255, 253, 244, .66);
        }

        .settings-agent-side-tab.is-active {
          color: var(--ac-text);
          background: #ffd557;
          border-color: rgba(121, 79, 39, .22);
          box-shadow: none;
        }

        .settings-agent-main {
          position: static;
          min-width: 0;
          height: 100%;
          overflow: auto;
          padding: 22px clamp(20px, 2.6vw, 28px) 28px;
          display: flex;
          flex-direction: column;
        }
        .settings-agent-main__topbar {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 12px; margin-bottom: 16px;
        }
        .settings-agent-main__topbar .settings-agent-intro-copy { margin-bottom: 0; }
        .sac-buddy-banner {
          display: flex; align-items: center; gap: 12px;
          margin-top: auto; padding: 14px 16px;
          background: rgba(255,213,87,.1);
          border: 1.5px solid rgba(245,200,66,.4);
          border-radius: var(--radius-xs);
        }
        .sac-buddy-banner__icon { font-size: 30px; flex-shrink: 0; }
        .sac-buddy-banner__body { flex: 1; min-width: 0; }
        .sac-buddy-banner__title { font-size: 13px; font-weight: 800; color: var(--ac-text); margin-bottom: 2px; }
        .sac-buddy-banner__desc  { font-size: 11px; color: rgba(121,79,39,.7); line-height: 1.5; }
        .sac-buddy-banner__btn {
          appearance: none; flex-shrink: 0;
          background: #ffd557; color: #5a3e00; border: none;
          border-radius: var(--radius-xs); padding: 8px 18px;
          font: inherit; font-size: 13px; font-weight: 800; cursor: pointer;
          text-decoration: none; display: inline-block;
        }
        .sac-buddy-banner__btn:hover { background: #f5c030; }

        .settings-agent-intro-copy {
          margin: 0 0 18px;
          color: rgba(121, 79, 39, .74);
          font-size: 15px;
          font-weight: 1000;
          line-height: 1.45;
        }

        .settings-agent-flow-copy {
          margin: 0 0 16px;
          color: rgba(121, 79, 39, .72);
          font-size: 13px;
          font-weight: 900;
          line-height: 1.45;
        }

        .settings-agent-setup-guide {
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr);
          gap: 12px;
          margin: -4px 0 16px;
          padding: 12px;
          background: rgba(255, 248, 232, .74);
          border: 1.5px solid rgba(196, 184, 158, .58);
          border-radius: var(--radius-xs);
        }

        .settings-agent-setup-rail {
          position: relative;
          display: grid;
          grid-template-rows: repeat(3, minmax(0, 1fr));
          align-items: start;
          justify-items: center;
          gap: 16px;
          padding: 4px 0;
        }

        .settings-agent-setup-rail::before {
          content: "";
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 50%;
          width: 1.5px;
          transform: translateX(-50%);
          background: rgba(196, 184, 158, .72);
        }

        .settings-agent-setup-step-dot {
          z-index: 1;
          width: 28px;
          height: 28px;
          display: inline-grid;
          place-items: center;
          color: #5f5a4e;
          background: #f9f4e4;
          border: 1.5px solid rgba(196, 184, 158, .72);
          border-radius: 999px;
          box-shadow: 0 1px 0 rgba(255, 255, 255, .75) inset;
        }

        .settings-agent-setup-steps {
          display: grid;
          gap: 10px;
        }

        .settings-agent-setup-step {
          display: grid;
          grid-template-columns: 32px minmax(0, 1fr);
          gap: 12px;
          align-items: center;
          min-height: 58px;
          padding: 10px 12px;
          color: var(--ac-text);
          background: #fffdf4;
          border: 1.5px solid rgba(196, 184, 158, .56);
          border-radius: var(--radius-xs);
          box-shadow: 0 1px 0 rgba(255, 255, 255, .72) inset;
        }

        .settings-agent-setup-step--with-action {
          grid-template-columns: 32px minmax(0, 1fr) auto;
        }

        .settings-agent-setup-step-icon {
          width: 32px;
          height: 32px;
          display: inline-grid;
          place-items: center;
          color: #7b5a26;
          background: #fff4d7;
          border: 1px solid rgba(196, 184, 158, .44);
          border-radius: 999px;
        }

        .settings-agent-setup-step strong {
          display: block;
          font-size: 14px;
          font-weight: 1000;
          line-height: 1.2;
        }

        .settings-agent-setup-step span {
          display: block;
          margin-top: 4px;
          color: rgba(121, 79, 39, .68);
          font-size: 12px;
          font-weight: 850;
          line-height: 1.35;
        }

        .settings-agent-install {
          display: grid;
          gap: 22px;
          color: var(--ac-text);
        }

        .settings-agent-install ~ .settings-agent-api-panel {
          display: none;
        }

        .settings-agent-install__intro {
          display: grid;
          gap: 8px;
        }

        .settings-agent-install__title {
          margin: 0;
          color: #1f160c;
          font-size: 25px;
          font-weight: 1000;
          line-height: 1.15;
        }

        .settings-agent-install__subtitle {
          margin: 0;
          color: rgba(121, 79, 39, .66);
          font-size: 14px;
          font-weight: 900;
          line-height: 1.45;
        }

        .settings-agent-install-tabs {
          display: flex;
          align-items: flex-end;
          gap: 16px;
          margin: 16px 0 -23px;
          padding-left: 16px;
          position: relative;
          z-index: 2;
        }

        .settings-agent-install-tab {
          appearance: none;
          min-height: 44px;
          padding: 0 14px;
          color: rgba(121, 79, 39, .62);
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs) var(--radius-xs) 0 0;
          cursor: pointer;
          font: inherit;
          font-size: 14px;
          font-weight: 1000;
          white-space: nowrap;
        }

        .settings-agent-install-tab.is-active {
          color: #1f160c;
          background: #fffdf4;
          box-shadow: inset 0 -2px 0 #1f160c;
        }

        .settings-agent-install-card {
          display: grid;
          gap: 34px;
          padding: 78px 34px 38px;
          background: #fffdf4;
          border: 1.5px solid rgba(196, 184, 158, .72);
          border-radius: var(--radius-xs);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .28);
        }

        .settings-agent-install-step {
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr);
          gap: 24px;
          align-items: start;
        }

        .settings-agent-install-step__num {
          width: 48px;
          height: 48px;
          display: inline-grid;
          place-items: center;
          color: #5b5148;
          background: #f1eee7;
          border-radius: var(--radius-xs);
          font-size: 20px;
          font-weight: 1000;
        }

        .settings-agent-install-step__body {
          display: grid;
          gap: 14px;
          min-width: 0;
        }

        .settings-agent-install-step__body h3 {
          margin: 0;
          color: #1f160c;
          font-size: 22px;
          font-weight: 1000;
          line-height: 1.22;
        }

        .settings-agent-install-step__body p {
          margin: 0;
          color: rgba(121, 79, 39, .68);
          font-size: 16px;
          font-weight: 850;
          line-height: 1.45;
        }

        .settings-agent-install-command {
          min-width: 0;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 34px;
          align-items: center;
          gap: 10px;
          padding: 13px 12px 13px 16px;
          background: #f0eee9;
          border: 1.5px solid rgba(196, 184, 158, .48);
          border-radius: var(--radius-xs);
        }

        .settings-agent-install-command code {
          min-width: 0;
          overflow: hidden;
          color: #6c655e;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 17px;
          font-weight: 800;
          line-height: 1.35;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .settings-agent-install-copy {
          width: 32px;
          height: 32px;
          display: inline-grid;
          place-items: center;
          color: #71685f;
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs);
          cursor: pointer;
        }

        .settings-agent-install-copy:hover,
        .settings-agent-install-copy:focus-visible {
          color: var(--ac-text);
          background: rgba(255, 213, 87, .28);
        }

        .settings-agent-install-checks {
          display: grid;
          gap: 14px;
          margin-top: -2px;
        }

        .settings-agent-install-check {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          color: rgba(121, 79, 39, .68);
          font-size: 16px;
          font-weight: 850;
          line-height: 1.35;
        }

        .settings-agent-install-check svg {
          color: #18b560;
        }

        .settings-agent-install-check code {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 1px 8px;
          color: #71685f;
          background: #f1eee9;
          border: 1px solid rgba(196, 184, 158, .44);
          border-radius: 4px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 15px;
          font-weight: 850;
        }
        .settings-agent-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px 24px;
        }

        .settings-agent-provider-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          overflow: visible;
          background: transparent;
          border: 0;
          border-radius: 0;
        }

        .settings-agent-provider-row {
          min-height: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          color: var(--ac-text);
          background: rgba(255, 253, 244, .92);
          border: 2px solid rgba(196, 184, 158, .46);
          border-radius: 14px;
        }

        .settings-agent-provider-row:first-child {
          border-radius: 14px;
        }

        .settings-agent-provider-row:last-child {
          border-radius: 14px;
        }

        .settings-agent-provider-row.is-connected {
          border-color: rgba(55, 163, 103, .34);
        }

        .settings-agent-provider-head {
          min-width: 0;
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          align-items: center;
          gap: 12px;
        }

        .settings-agent-provider-mark {
          width: 44px;
          height: 44px;
          box-sizing: border-box;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          overflow: hidden;
          color: #fffdf4;
          background: #1f1e1b;
          border-radius: 11px;
          font-size: 16px;
          font-weight: 1000;
          line-height: 1;
        }

        .settings-agent-provider-mark--codex,
        .settings-agent-provider-mark--claude-code {
          background: rgba(252, 205, 212, .72);
          border: 0;
        }

        .settings-agent-provider-mark--codex {
          background: rgba(201, 213, 255, .72);
          border: 0;
        }

        .settings-agent-provider-mark--openclaw {
          background: #252525;
          border: 0;
        }

        .settings-agent-provider-icon {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
        }

        .settings-agent-provider-icon svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .settings-agent-provider-name {
          min-width: 0;
          display: grid;
          gap: 5px;
          color: var(--ac-text);
          font-size: 16px;
          font-weight: 1000;
          line-height: 1.05;
        }

        .settings-agent-provider-name > span:first-child {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .settings-agent-provider-meta {
          color: rgba(121, 79, 39, .64);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.25;
        }

        .settings-agent-provider-badge {
          width: max-content;
          min-height: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0;
          background: transparent;
          border-radius: 0;
          color: rgba(121, 79, 39, .66);
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .settings-agent-provider-badge::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: none;
        }

        .settings-agent-provider-badge.is-connected {
          color: #3fae6b;
          background: transparent;
        }

        .settings-agent-provider-badge.is-disconnected {
          color: #c7bea5;
          background: transparent;
        }

        .settings-agent-provider-actions {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 6px;
          flex-wrap: wrap;
        }

        .settings-agent-provider-action-button {
          appearance: none;
          min-height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 0 12px;
          color: var(--ac-text);
          background: rgba(255, 253, 244, .92);
          border: 1.5px solid rgba(196, 184, 158, .46);
          border-radius: 8px;
          cursor: pointer;
          font: inherit;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
          box-shadow: 0 1px 0 rgba(121, 79, 39, .08);
        }

        .settings-agent-provider-action-button--compact {
          min-height: 28px;
          padding: 0 10px;
          font-size: 12px;
        }

        .settings-agent-provider-action-button svg {
          width: 14px;
          height: 14px;
        }

        .settings-agent-provider-action-button:hover,
        .settings-agent-provider-action-button:focus-visible {
          background: #fffdf4;
          border-color: rgba(121, 79, 39, .34);
          outline: none;
        }

        .settings-agent-provider-action-button:disabled {
          cursor: wait;
        }

        .settings-agent-provider-action-button.is-loading svg {
          animation: settings-agent-spin .8s linear infinite;
        }

        .settings-agent-provider-action-button--primary {
          background: #f8c840;
          border-color: rgba(121, 79, 39, .22);
          border-radius: 8px;
        }

        @media (max-width: 980px) {
          .settings-agent-provider-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .settings-agent-provider-list {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        .settings-agent-provider-add {
          appearance: none;
          min-height: 38px;
          padding: 0 14px;
          color: var(--ac-text);
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs);
          cursor: pointer;
          font: inherit;
          font-size: 14px;
          font-weight: 1000;
        }

        .settings-agent-provider-add:hover,
        .settings-agent-provider-add:focus-visible {
          background: rgba(255, 213, 87, .72);
          outline: none;
        }

        .settings-agent-provider-icon-action {
          appearance: none;
          width: 38px;
          height: 38px;
          position: relative;
          display: inline-grid;
          place-items: center;
          color: var(--ac-text);
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs);
          cursor: pointer;
          font: inherit;
        }

        .settings-agent-provider-icon-action:hover,
        .settings-agent-provider-icon-action:focus-visible {
          background: rgba(255, 213, 87, .72);
          outline: none;
        }

        .settings-agent-provider-icon-action:disabled {
          cursor: wait;
        }

        .settings-agent-provider-icon-action.is-loading svg {
          animation: settings-agent-spin .8s linear infinite;
        }

        @keyframes settings-agent-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .settings-agent-provider-icon-action::after {
          content: attr(data-label);
          position: absolute;
          left: 50%;
          bottom: calc(100% + 8px);
          z-index: 4;
          padding: 5px 8px;
          color: #fffdf4;
          background: rgba(62, 45, 31, .94);
          border-radius: 6px;
          box-shadow: 0 6px 14px rgba(61, 52, 40, .18);
          font-size: 12px;
          font-weight: 900;
          line-height: 1;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translate(-50%, 4px);
          transition: opacity .16s ease, transform .16s ease;
        }

        .settings-agent-provider-icon-action:hover::after,
        .settings-agent-provider-icon-action:focus-visible::after {
          opacity: 1;
          transform: translate(-50%, 0);
        }

        /* ── Multi-step Agent Connect Modal ── */
        .sac-modal {
          position: relative;
          width: min(600px, 100%);
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          color: var(--ac-text);
          background: #fffdf4;
          border: 1.5px solid rgba(121, 79, 39, .28);
          border-radius: var(--radius-xs);
          box-shadow: 0 0 0 3px rgba(255,253,244,.72), 0 18px 36px rgba(66,48,31,.16);
          animation: sacPopIn 0.18s ease;
        }
        @keyframes sacPopIn {
          from { opacity: 0; transform: scale(0.96) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .sac-header {
          display: flex; align-items: center;
          padding: 14px 18px;
          border-bottom: 1.5px solid rgba(196, 184, 158, .4);
          gap: 12px;
        }
        .sac-title { font-size: 15px; font-weight: 800; color: var(--ac-text); white-space: nowrap; }
        .sac-close {
          appearance: none; width: 28px; height: 28px; flex-shrink: 0;
          display: inline-grid; place-items: center;
          color: rgba(121,79,39,.7); background: transparent;
          border: 0; border-radius: var(--radius-xs); cursor: pointer;
        }
        .sac-close:hover { color: var(--ac-text); background: rgba(255,213,87,.3); }

        /* Steps bar — inline in header */
        .sac-steps {
          flex: 1;
          display: flex; align-items: center; justify-content: flex-end;
          gap: 0;
          padding: 0;
        }
        .sac-sitem {
          display: flex; align-items: center; gap: 5px;
          position: relative;
        }
        .sac-sitem:not(:last-child)::after {
          content: ''; display: inline-block;
          width: 18px; height: 1.5px;
          background: rgba(196,184,158,.5);
          margin: 0 4px; vertical-align: middle;
        }
        .sac-circle {
          width: 22px; height: 22px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800;
          background: rgba(196,184,158,.3); color: rgba(121,79,39,.5);
          transition: background 0.2s, color 0.2s; flex-shrink: 0;
        }
        .sac-circle--active { background: #5bbcd6; color: #fff; }
        .sac-circle--done   { background: #ffd557; color: #5a3e00; }
        .sac-slabel { font-size: 10px; color: rgba(121,79,39,.45); }
        .sac-slabel--active { color: #3a9bbf; font-weight: 700; }
        .sac-slabel--done   { color: #b8940a; font-weight: 700; }

        /* Body */
        .sac-body { padding: 16px 18px 20px; display: flex; flex-direction: column; gap: 12px; }
        .sac-sub  { font-size: 12px; color: rgba(121,79,39,.72); line-height: 1.6; margin: 0; }
        .sac-section-label { font-size: 13px; font-weight: 800; color: var(--ac-text); margin: 0; }

        /* Mode cards */
        .sac-mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .sac-mode-card {
          appearance: none; text-align: left;
          border: 2px solid rgba(196,184,158,.55); border-radius: var(--radius-xs);
          padding: 14px; cursor: pointer; background: #fffdf4;
          display: flex; align-items: flex-start; gap: 10px;
          transition: border-color 0.15s, background 0.15s;
          font: inherit; color: inherit;
        }
        .sac-mode-card:hover, .sac-mode-card--sel {
          border-color: #5bbcd6; background: rgba(91,188,214,.07);
        }
        .sac-mode-title { font-weight: 700; font-size: 13px; margin-bottom: 3px; }
        .sac-mode-desc  { font-size: 11px; color: rgba(121,79,39,.65); line-height: 1.5; }

        /* Radio dot */
        .sac-radio {
          width: 17px; height: 17px; border-radius: 50%; flex-shrink: 0;
          border: 2px solid rgba(196,184,158,.7);
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.15s, background 0.15s; margin-top: 1px;
        }
        .sac-radio--checked { border-color: #5bbcd6; background: #5bbcd6; }
        .sac-radio--checked::after { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #fff; }

        /* Option cards */
        .sac-opt-card {
          border: 1.5px solid rgba(196,184,158,.5); border-radius: var(--radius-xs);
          padding: 12px 14px; cursor: pointer; background: #fffdf4;
          transition: border-color 0.15s, background 0.15s;
        }
        .sac-opt-card:hover, .sac-opt-card--sel { border-color: #ffd557; background: #fffbee; }
        .sac-opt-head  { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
        .sac-opt-title { font-weight: 700; font-size: 13px; color: var(--ac-text); }
        .sac-opt-desc  { font-size: 11px; color: rgba(121,79,39,.65); margin-left: 25px; }
        .sac-opt-detail { margin-top: 12px; margin-left: 25px; }
        .sac-badge {
          background: rgba(91,214,155,.2); color: #2a7a4a;
          font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 10px;
        }

        /* Note bar inside opt-detail */
        .sac-note {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: rgba(121,79,39,.72);
          background: rgba(255,213,87,.12); border-radius: var(--radius-xs);
          padding: 8px 10px; margin-bottom: 10px;
        }
        .sac-note span { flex: 1; line-height: 1.5; }

        /* Code box */
        .sac-code-box {
          display: flex; align-items: center; gap: 10px;
          background: #2d2d2d; border-radius: var(--radius-xs);
          padding: 10px 12px;
        }
        .sac-code-box code { flex: 1; font-size: 12px; color: #7dd3b0; font-family: monospace; word-break: break-all; }

        .sac-link { color: #3a9bbf; font-size: 13px; font-weight: 600; text-decoration: none; }
        .sac-link:hover { text-decoration: underline; }

        .sac-manual-guide { max-height: 280px; overflow-y: auto; }
        .sac-guide-steps { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; counter-reset: guide-step; }
        .sac-guide-steps > li { counter-increment: guide-step; display: flex; flex-direction: column; gap: 6px; }
        .sac-guide-step-title { font-size: 12px; font-weight: 700; color: var(--ac-text); }
        .sac-guide-step-title::before { content: counter(guide-step) ". "; }
        .sac-guide-fields { list-style: disc; padding-left: 16px; margin: 0; display: flex; flex-direction: column; gap: 2px; font-size: 11px; color: rgba(121,79,39,.8); }
        .sac-guide-fields code { background: rgba(196,184,158,.2); border-radius: 3px; padding: 0 4px; font-family: monospace; font-size: 11px; }
        .sac-guide-hint { font-size: 11px; color: rgba(121,79,39,.65); line-height: 1.5; margin: 0; }
        .sac-guide-img { width: 100%; border-radius: 6px; border: 1px solid rgba(196,184,158,.4); display: block; }

        /* Nav */
        .sac-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; }
        .sac-btn-prev {
          appearance: none; background: transparent; color: rgba(121,79,39,.72);
          border: 1.5px solid rgba(196,184,158,.7); border-radius: var(--radius-xs);
          padding: 8px 18px; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer;
        }
        .sac-btn-next, .sac-btn-sm {
          appearance: none; background: #ffd557; color: #5a3e00; border: none;
          border-radius: var(--radius-xs); padding: 8px 22px;
          font: inherit; font-size: 13px; font-weight: 800; cursor: pointer;
        }
        .sac-btn-sm { padding: 7px 13px; white-space: nowrap; }
        .sac-btn-next:hover, .sac-btn-sm:hover { background: #f5c030; }

        /* Success */
        .sac-success { text-align: center; padding: 28px 18px 24px !important; }
        .sac-success-icon  { font-size: 48px; margin-bottom: 10px; }
        .sac-success-title { font-size: 17px; font-weight: 800; color: #2a7a4a; margin-bottom: 6px; }
        .sac-success-msg   { font-size: 13px; color: #4a9a6a; margin-bottom: 16px; }

        .sac-buddy-card {
          width: 100%; display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; margin-bottom: 20px;
          background: rgba(255,213,87,.12);
          border: 1.5px solid rgba(245,200,66,.5);
          border-radius: var(--radius-xs);
          text-align: left;
        }
        .sac-buddy-card__icon { font-size: 28px; flex-shrink: 0; }
        .sac-buddy-card__body { flex: 1; min-width: 0; }
        .sac-buddy-card__title { font-size: 13px; font-weight: 800; color: var(--ac-text); margin-bottom: 2px; }
        .sac-buddy-card__desc  { font-size: 11px; color: rgba(121,79,39,.7); line-height: 1.5; }
        .sac-buddy-card__btn {
          appearance: none; flex-shrink: 0;
          background: #ffd557; color: #5a3e00; border: none;
          border-radius: var(--radius-xs); padding: 7px 14px;
          font: inherit; font-size: 12px; font-weight: 800; cursor: pointer;
          text-decoration: none; display: inline-block;
        }
        .sac-buddy-card__btn:hover { background: #f5c030; }

        /* Auth preview trigger */
        .sac-auth-preview-trigger-row { padding: 16px 0 4px; display: flex; justify-content: center; }
        .sac-auth-preview-trigger {
          appearance: none; background: transparent;
          border: 1.5px dashed rgba(196,184,158,.7); border-radius: var(--radius-xs);
          padding: 7px 16px; font: inherit; font-size: 12px; font-weight: 700;
          color: rgba(121,79,39,.5); cursor: pointer;
        }
        .sac-auth-preview-trigger:hover { border-color: rgba(121,79,39,.4); color: rgba(121,79,39,.8); background: rgba(255,213,87,.1); }

        /* Auth preview modal */
        .sac-auth-preview {
          width: min(360px, 96vw);
          display: flex; flex-direction: column; align-items: center;
          gap: 0;
          padding: 32px 28px 24px;
          background: #fffdf4;
          border: 1.5px solid rgba(121,79,39,.22);
          border-radius: var(--radius-xs);
          box-shadow: 0 0 0 3px rgba(255,253,244,.72), 0 18px 48px rgba(66,48,31,.18);
          animation: sacPopIn 0.18s ease;
          text-align: center;
        }
        .sac-auth-preview__icon { margin-bottom: 20px; border-radius: 16px; overflow: hidden; }
        .sac-auth-preview__heading { font-size: 17px; font-weight: 700; color: var(--ac-text); line-height: 1.5; margin: 0 0 12px; }
        .sac-auth-preview__body { font-size: 13px; color: rgba(121,79,39,.75); line-height: 1.6; margin: 0 0 24px; }
        .sac-auth-preview__title { font-size: 17px; font-weight: 700; color: var(--ac-text); line-height: 1.5; margin: 0 0 20px; }
        .sac-auth-preview__perms {
          width: 100%; list-style: none; padding: 0; margin: 0 0 24px;
          border-top: 1.5px solid rgba(196,184,158,.4);
          border-bottom: 1.5px solid rgba(196,184,158,.4);
        }
        .sac-auth-preview__perms li {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 4px; font-size: 14px; color: var(--ac-text);
        }
        .sac-auth-preview__check { color: #3fae6b; font-weight: 800; font-size: 15px; flex-shrink: 0; }
        .sac-auth-preview__allow {
          appearance: none; width: 100%; padding: 12px;
          background: #f8c840; color: #5a3e00; border: none;
          border-radius: var(--radius-xs); font: inherit; font-size: 14px; font-weight: 800;
          cursor: pointer; margin-bottom: 10px;
        }
        .sac-auth-preview__allow:hover { background: #f5c030; }
        .sac-auth-preview__cancel {
          appearance: none; background: transparent; border: 0;
          font: inherit; font-size: 13px; color: rgba(121,79,39,.6);
          cursor: pointer; padding: 4px 8px;
        }
        .sac-auth-preview__cancel:hover { color: var(--ac-text); }

        .settings-agent-connect-overlay {
          position: absolute;
          inset: 0;
          z-index: 6;
          display: grid;
          place-items: center;
          padding: 28px;
          background: rgba(78, 67, 60, .14);
        }

        .settings-agent-connect-modal {
          position: relative;
          width: min(548px, 100%);
          height: auto;
          max-height: 100%;
          display: grid;
          grid-template-rows: auto auto;
          gap: 14px;
          overflow: hidden;
          padding: 18px 18px 20px;
          color: var(--ac-text);
          background: #fffdf4;
          border: 1.5px solid rgba(121, 79, 39, .28);
          border-radius: var(--radius-xs);
          box-shadow:
            0 0 0 3px rgba(255, 253, 244, .72),
            0 18px 36px rgba(66, 48, 31, .16);
        }

        .settings-agent-confirm-modal {
          width: min(360px, 100%);
          display: grid;
          gap: 18px;
          padding: 18px;
          color: var(--ac-text);
          background: rgba(255, 253, 244, .98);
          border: 2px solid rgba(196, 184, 158, .7);
          border-radius: var(--radius-xs);
          box-shadow:
            0 0 0 2px rgba(255, 253, 244, .78),
            4px 4px 0 rgba(189, 174, 160, .5),
            0 18px 36px rgba(66, 48, 31, .18);
        }

        .settings-agent-connect-modal__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .settings-agent-connect-modal--compact-header .settings-agent-connect-modal__header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 28px;
          align-items: center;
          gap: 10px;
        }

        .settings-agent-connect-modal--compact-header .settings-agent-method-tabs {
          margin-right: 0;
        }

        .settings-agent-connect-modal--compact-header .settings-agent-connect-modal__close {
          width: 28px;
          height: 28px;
          padding: 0;
          color: rgba(121, 79, 39, .78);
          background: transparent;
          border: 0;
          box-shadow: none;
        }

        .settings-agent-connect-modal--compact-header .settings-agent-connect-modal__close:hover,
        .settings-agent-connect-modal--compact-header .settings-agent-connect-modal__close:focus-visible {
          color: var(--ac-text);
          background: transparent;
          opacity: .85;
        }

        .settings-agent-connect-modal__close {
          appearance: none;
          width: 34px;
          height: 34px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          color: var(--ac-text);
          background: #fff7e3;
          border: 1.5px solid rgba(196, 184, 158, .72);
          border-radius: var(--radius-xs);
          cursor: pointer;
          box-shadow: none;
        }

        .settings-agent-method-tabs {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 3px;
          min-width: 0;
          padding: 3px;
          background: rgba(255, 247, 227, .72);
          border: 1.5px solid rgba(196, 184, 158, .52);
          border-radius: var(--radius-xs);
        }

        .settings-agent-method-tab {
          appearance: none;
          min-height: 30px;
          position: relative;
          padding: 0 12px;
          color: rgba(121, 79, 39, .68);
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs);
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          font-weight: 1000;
          transition: background 120ms ease, color 120ms ease;
        }

        .settings-agent-method-tab.is-active {
          color: var(--ac-text);
          background: #ffd557;
          box-shadow: 1px 1px 0 rgba(189, 174, 160, .28);
        }

        .settings-agent-method-tab.is-active::after {
          content: none;
        }

        .settings-agent-method-tab:hover,
        .settings-agent-method-tab:focus-visible {
          color: var(--ac-text);
          background: rgba(255, 213, 87, .52);
          outline: none;
        }

        .settings-agent-method-tab.is-active:hover,
        .settings-agent-method-tab.is-active:focus-visible {
          background: #ffd557;
        }

        .settings-agent-card {
          min-height: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow: auto;
          padding: 0;
          color: var(--ac-text);
          background: transparent;
          border: 0;
          border-radius: 0;
          box-shadow: none;
        }

        .settings-agent-connect-modal .settings-agent-card {
          gap: 12px;
          min-height: 232px;
          overflow: visible;
          padding-bottom: 0;
        }

        .settings-agent-card__head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .settings-agent-card__title {
          display: grid;
          gap: 5px;
        }

        .settings-agent-card__title strong {
          font-size: 17px;
          font-weight: 1000;
          line-height: 1.1;
        }

        .settings-agent-card__title span {
          color: rgba(121, 79, 39, .68);
          font-size: 12px;
          font-weight: 850;
          line-height: 1.35;
        }

        .settings-agent-status {
          flex: 0 0 auto;
          color: #9d6b1c;
          font-size: 12px;
          font-weight: 1000;
          white-space: nowrap;
        }

        .settings-agent-status.is-active {
          color: #18855c;
        }

        .settings-agent-status.is-danger {
          color: #b14b43;
        }

        .settings-agent-status.is-muted {
          color: rgba(121, 79, 39, .54);
        }

        .settings-agent-api-panel {
          gap: 14px;
        }

        .settings-agent-card__title-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .settings-agent-count {
          min-width: 24px;
          height: 20px;
          display: inline-grid;
          place-items: center;
          padding: 0 7px;
          color: rgba(121, 79, 39, .72);
          background: #fff7e3;
          border: 1px solid rgba(196, 184, 158, .5);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 1000;
        }

        .settings-agent-api-list {
          display: grid;
          gap: 10px;
        }

        .settings-agent-api-empty {
          display: grid;
          place-items: center;
          gap: 8px;
          min-height: 150px;
          color: rgba(121, 79, 39, .62);
          text-align: center;
          background: #fff8e8;
          border: 1.5px dashed rgba(196, 184, 158, .7);
          border-radius: var(--radius-xs);
          font-size: 12px;
          font-weight: 850;
        }

        .settings-agent-api-item {
          display: grid;
          gap: 10px;
          padding: 14px;
          background: #fff8e8;
          border: 1.5px solid rgba(196, 184, 158, .56);
          border-radius: var(--radius-xs);
        }

        .settings-agent-api-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-width: 0;
        }

        .settings-agent-api-name {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .settings-agent-api-name strong {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 1000;
        }

        .settings-agent-icon-button {
          appearance: none;
          width: 28px;
          height: 28px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          color: rgba(121, 79, 39, .72);
          background: transparent;
          border: 1.5px solid transparent;
          border-radius: var(--radius-xs);
          cursor: pointer;
        }

        .settings-agent-icon-button:hover,
        .settings-agent-icon-button:focus-visible {
          color: var(--ac-text);
          background: #fffdf4;
          border-color: rgba(196, 184, 158, .62);
        }

        .settings-agent-api-actions {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
          flex: 0 0 auto;
        }

        .settings-agent-api-menu-anchor {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
          flex: 0 0 auto;
        }

        .settings-agent-api-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 6px);
          z-index: 3;
          min-width: 138px;
          padding: 5px;
          background: #fffdf4;
          border: 1.5px solid rgba(196, 184, 158, .72);
          border-radius: var(--radius-xs);
          box-shadow: 0 12px 24px rgba(66, 48, 31, .16);
        }

        .settings-agent-api-menu button {
          appearance: none;
          width: 100%;
          min-height: 32px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 10px;
          color: #b14b43;
          text-align: left;
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs);
          cursor: pointer;
          font: inherit;
          font-size: 12px;
          font-weight: 900;
        }

        .settings-agent-api-menu button:hover {
          background: rgba(177, 75, 67, .1);
        }

        .settings-agent-api-keyline {
          display: grid;
          grid-template-columns: 72px minmax(0, 1fr);
          gap: 10px;
          align-items: center;
        }

        .settings-agent-api-label {
          color: rgba(121, 79, 39, .62);
          font-size: 10px;
          font-weight: 1000;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .settings-agent-api-secret {
          min-width: 0;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto;
          align-items: center;
          gap: 6px;
          padding: 7px 8px;
          background: rgba(255, 253, 244, .78);
          border-radius: var(--radius-xs);
        }

        .settings-agent-api-secret code {
          min-width: 0;
          overflow: hidden;
          color: #6c4622;
          font-size: 12px;
          font-weight: 1000;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .settings-agent-api-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px 16px;
          color: rgba(121, 79, 39, .68);
          font-size: 11px;
          font-weight: 850;
        }

        .settings-agent-api-meta strong {
          color: #9d6b1c;
          font-weight: 1000;
        }

        .settings-agent-api-update {
          color: #b27319;
        }

        .settings-agent-api-name-edit {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          flex: 1 1 auto;
        }

        .settings-agent-api-name-edit .settings-input {
          min-height: 34px;
          max-width: 280px;
          padding-block: 0;
        }

        .settings-agent-prompt-preview {
          max-height: 190px;
          overflow: auto;
          padding: 12px;
          color: #4e433c;
          background: #fff8e8;
          border: 1.5px solid rgba(196, 184, 158, .56);
          border-radius: var(--radius-xs);
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 11px;
          font-weight: 850;
          line-height: 1.45;
          white-space: pre-wrap;
        }

        .settings-agent-api-create-modal {
          width: min(520px, 100%);
        }

        .settings-agent-api-steps {
          display: grid;
          grid-template-columns: auto minmax(24px, 1fr) auto;
          align-items: center;
          gap: 10px;
        }

        .settings-agent-api-step {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: rgba(121, 79, 39, .62);
          font-size: 12px;
          font-weight: 1000;
        }

        .settings-agent-api-step span:first-child {
          width: 22px;
          height: 22px;
          display: inline-grid;
          place-items: center;
          background: #fff7e3;
          border: 1.5px solid rgba(196, 184, 158, .62);
          border-radius: 999px;
        }

        .settings-agent-api-step.is-active {
          color: var(--ac-text);
        }

        .settings-agent-api-step.is-active span:first-child {
          background: #ffd557;
          border-color: rgba(121, 79, 39, .26);
        }

        .settings-agent-api-step-line {
          height: 1.5px;
          background: rgba(196, 184, 158, .56);
        }

        .settings-agent-auth-options {
          display: grid;
          grid-template-columns: minmax(168px, .82fr) minmax(0, 1fr);
          gap: 0;
          overflow: hidden;
          background: #fff8e8;
          padding: 18px;
          border-radius: var(--radius-xs);
        }

        .settings-agent-auth-option {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          align-content: start;
          align-items: start;
          padding: 0;
          margin: 0;
          background: transparent;
          border: 0;
          border-radius: 0;
        }

        .settings-agent-auth-option--scan {
          padding-right: 20px;
        }

        .settings-agent-auth-option--code {
          gap: 18px;
          padding-left: 20px;
          border-left: 1px solid rgba(196, 184, 158, .44);
        }

        .settings-agent-auth-option > div:first-child,
        .settings-agent-code-copy {
          display: grid;
          gap: 6px;
          min-width: 0;
        }

        .settings-agent-auth-option__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .settings-agent-auth-option span {
          color: rgba(121, 79, 39, .72);
          font-size: 11px;
          font-weight: 850;
          line-height: 1.45;
        }

        .settings-agent-auth-option strong {
          color: var(--ac-text);
          font-weight: 1000;
        }

        .settings-agent-auth-option__head strong {
          font-size: 15px;
          line-height: 1.2;
        }

        .settings-agent-code-copy strong {
          font-size: 23px;
          letter-spacing: .08em;
          line-height: 1;
        }

        .settings-agent-auth-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }

        .settings-agent-auth-option--code .settings-action {
          width: 100%;
          min-height: 38px;
        }

        .settings-agent-qr {
          width: 134px;
          height: 134px;
          display: block;
          justify-self: start;
          overflow: hidden;
          background: #fff;
          border: 0;
          border-radius: 4px;
        }

        .settings-agent-qr img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          image-rendering: auto;
        }

        .settings-agent-meta {
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(196, 184, 158, .52);
          border-bottom: 1px solid rgba(196, 184, 158, .52);
        }

        .settings-agent-meta__row {
          display: grid;
          grid-template-columns: 118px minmax(0, 1fr);
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(196, 184, 158, .34);
          font-size: 12px;
          font-weight: 900;
        }

        .settings-agent-meta__row:last-child {
          border-bottom: 0;
        }

        .settings-agent-meta__row span:first-child {
          color: rgba(121, 79, 39, .62);
        }

        .settings-agent-meta__row span:last-child {
          min-width: 0;
          overflow: hidden;
          color: var(--ac-text);
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .settings-agent-form {
          display: grid;
          gap: 12px;
        }

        .settings-agent-form--byok {
          min-height: 202px;
          align-content: center;
          gap: 10px;
        }

        .settings-agent-form .settings-field {
          gap: 8px;
        }

        .settings-agent-form--byok .settings-field {
          gap: 8px;
        }

        .settings-agent-form--byok .settings-input {
          height: 40px;
        }

        .settings-agent-byok-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 2px;
        }

        .settings-agent-byok-actions .settings-action {
          min-width: 92px;
        }

        .settings-field__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-width: 0;
        }

        .settings-api-key-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #2563eb;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .settings-api-key-link:hover {
          text-decoration: underline;
        }

        .settings-api-key-link__muted {
          color: rgba(92, 99, 119, .86);
          font-weight: 800;
        }

        .settings-api-key-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px 14px;
          margin-top: 2px;
        }

        .settings-agent-test-message {
          margin: -2px 0 0;
          font-size: 11px;
          font-weight: 900;
          line-height: 1.45;
        }

        .settings-agent-test-message.is-error {
          color: #b42318;
        }

        .settings-agent-test-message.is-success {
          color: #16794c;
        }

        .settings-agent-confirm-copy {
          margin: 0;
          color: rgba(121, 79, 39, .72);
          font-size: 13px;
          font-weight: 850;
          line-height: 1.45;
        }

        .settings-agent-confirm-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .settings-agent-actions {
          display: flex;
          flex-wrap: wrap;
          flex: 0 0 auto;
          gap: 10px;
          margin-top: auto;
        }

        .settings-agent-snippet {
          min-height: 74px;
          padding: 12px;
          overflow: auto;
          color: #4e433c;
          background: #fff7e3;
          border: 1.5px solid rgba(196, 184, 158, .62);
          border-radius: var(--radius-xs);
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 11px;
          font-weight: 850;
          line-height: 1.45;
          white-space: pre-wrap;
        }

        .settings-agent-note {
          color: rgba(121, 79, 39, .66);
          font-size: 11px;
          font-weight: 800;
          line-height: 1.45;
        }

        .settings-agent-auth-note {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 30px;
          margin: 0;
        }

        .settings-agent-auth-note span {
          min-width: 0;
        }

        .settings-agent-refresh-icon {
          appearance: none;
          width: 28px;
          height: 28px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          color: rgba(121, 79, 39, .78);
          background: transparent;
          border: 1.5px solid rgba(196, 184, 158, .5);
          border-radius: var(--radius-xs);
          cursor: pointer;
          box-shadow: none;
        }

        .settings-agent-refresh-icon:hover,
        .settings-agent-refresh-icon:focus-visible {
          color: var(--ac-text);
          background: #ffd557;
        }

        @media (max-width: 760px) {
          .settings-agent-panel {
            --settings-agent-side-width: 0px;
            grid-template-columns: 1fr;
          }

          .settings-agent-side-nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .settings-agent-side-tab {
            width: 100%;
          }

          .settings-agent-grid {
            grid-template-columns: 1fr;
          }

          .settings-agent-provider-row {
            grid-template-columns: auto minmax(0, 1fr);
            gap: 10px 14px;
            padding-block: 12px;
          }

          .settings-agent-provider-actions {
            grid-column: 2;
            justify-content: flex-start;
          }

          .settings-agent-setup-guide {
            grid-template-columns: 1fr;
          }

          .settings-agent-setup-rail {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-template-rows: none;
            gap: 10px;
            padding: 0;
          }

          .settings-agent-setup-rail::before {
            top: 50%;
            right: 20px;
            left: 20px;
            bottom: auto;
            width: auto;
            height: 1.5px;
            transform: translateY(-50%);
          }

          .settings-agent-setup-step {
            grid-template-columns: 1fr;
            justify-items: start;
          }

          .settings-agent-setup-step--with-action {
            grid-template-columns: 1fr;
          }

          .settings-agent-setup-download {
            justify-self: start;
          }

          .settings-agent-auth-options {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .settings-agent-auth-option {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .settings-agent-auth-option--scan {
            padding-right: 0;
          }

          .settings-agent-auth-option--code {
            padding-top: 14px;
            padding-left: 0;
            border-top: 1px solid rgba(196, 184, 158, .44);
            border-left: 0;
          }

          .settings-agent-auth-actions,
          .settings-agent-qr {
            justify-self: start;
          }

          .settings-agent-api-row,
          .settings-agent-api-name-edit {
            align-items: flex-start;
            flex-direction: column;
          }

          .settings-agent-api-keyline {
            grid-template-columns: 1fr;
          }
        }

        .settings-section {
          padding: 18px;
          background: rgba(255, 253, 244, .86);
          border: 2px solid rgba(196, 184, 158, .7);
          border-radius: var(--radius-sm);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .35);
        }

        .settings-section + .settings-section {
          margin-top: 14px;
        }

        .settings-section__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 14px;
        }

        .settings-section__title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ac-text);
          font-size: 16px;
          font-weight: 1000;
        }

        .settings-section__icon {
          color: #794f27;
        }

        .settings-language-options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .settings-language-option {
          appearance: none;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0 14px;
          color: rgba(121, 79, 39, .72);
          background: #fffdf4;
          border: 2px solid rgba(196, 184, 158, .78);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .32);
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          font-weight: 1000;
        }

        .settings-language-option.is-active {
          color: var(--ac-text);
          background: #ffd557;
          border-color: rgba(121, 79, 39, .34);
        }

        .settings-language-option__code {
          color: rgba(121, 79, 39, .58);
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .settings-profile {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 18px;
          align-items: start;
        }

        .settings-avatar {
          width: 86px;
          height: 86px;
          display: grid;
          place-items: center;
          overflow: hidden;
          color: #794f27;
          background: #fff7e3;
          border: 2px dashed rgba(121, 79, 39, .48);
          border-radius: 18px;
          font-size: 34px;
          font-weight: 1000;
        }

        .settings-avatar.is-editing {
          cursor: pointer;
          border-color: #19c8b9;
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .45);
        }

        .settings-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .settings-avatar__hint {
          margin-top: 8px;
          color: rgba(121, 79, 39, .72);
          font-size: 11px;
          font-weight: 900;
          text-align: center;
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .settings-field {
          display: grid;
          gap: 7px;
          color: var(--ac-text);
          font-size: 12px;
          font-weight: 950;
        }

        .settings-field--full {
          grid-column: 1 / -1;
        }

        .settings-input {
          width: 100%;
          height: 42px;
          padding: 0 12px;
          color: var(--ac-text);
          background: #fffdf4;
          border: 2px solid rgba(196, 184, 158, .78);
          border-radius: var(--radius-xs);
          box-shadow: inset 0 2px 0 rgba(189, 174, 160, .22);
          font: inherit;
          font-size: 13px;
          font-weight: 850;
        }

        .settings-input:disabled {
          color: rgba(121, 79, 39, .62);
          background: rgba(245, 236, 212, .78);
          cursor: not-allowed;
        }

        .settings-helper {
          color: rgba(121, 79, 39, .7);
          font-size: 11px;
          font-weight: 800;
          line-height: 1.45;
        }

        .settings-inline {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .settings-code-field {
          position: relative;
          display: block;
        }

        .settings-code-field .settings-input {
          padding-right: 82px;
        }

        .settings-action.settings-code-send {
          position: absolute;
          top: 50%;
          right: 6px;
          min-width: 0;
          width: max-content;
          min-height: 30px;
          padding: 0 9px;
          transform: translateY(-50%);
          box-shadow: none;
        }

        .settings-action.settings-code-send:hover,
        .settings-action.settings-code-send:active,
        .settings-action.settings-code-send:focus-visible {
          box-shadow: none;
        }

        .settings-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 14px;
        }

        .settings-action {
          appearance: none;
          min-height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 0 12px;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 0;
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .42);
          cursor: pointer;
          font: inherit;
          font-size: 12px;
          font-weight: 1000;
        }

        .settings-action--primary {
          background: #ffd557;
        }

        .settings-action--quiet {
          color: rgba(121, 79, 39, .78);
          background: #fff7e3;
        }

        .settings-action--danger {
          color: #9f3934;
          background: #fff0ee;
        }

        .settings-action:disabled {
          opacity: .48;
          cursor: not-allowed;
          box-shadow: none;
        }

        .wallet-modal {
          width: min(1080px, 94vw);
          background: linear-gradient(180deg, #fffdf4 0%, var(--ac-cream) 100%);
          border: 2px solid color-mix(in srgb, var(--ac-border) 82%, var(--ac-text));
          border-radius: var(--radius-xs);
          box-shadow:
            0 0 0 2px rgba(255, 253, 244, .88),
            5px 5px 0 rgba(189, 174, 160, .72),
            0 20px 48px rgba(66, 48, 31, .18);
          image-rendering: pixelated;
        }

        .wallet-modal .shop-modal__header {
          align-items: center;
          padding-top: 16px;
          background: rgba(255, 249, 232, .88);
          border-bottom: 2px solid rgba(196, 184, 158, .62);
        }

        .wallet-modal__heading {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .wallet-modal .shop-modal__title {
          font-family: var(--modal-title-font);
          font-size: 30px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: .02em;
          color: var(--ac-text);
          text-shadow: none;
        }

        .wallet-modal__back {
          appearance: none;
          width: 38px;
          height: 38px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
          cursor: pointer;
          transition: transform .18s ease, box-shadow .18s ease;
        }

        .wallet-modal__back:hover {
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .58);
        }

        .wallet-modal .shop-modal__close {
          width: 38px;
          height: 38px;
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
        }

        .wallet-modal .shop-modal__close:hover {
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .58);
        }

        .wallet-content {
          min-height: 0;
          overflow: hidden;
        }

        .wallet-panel {
          min-height: 0;
          overflow: auto;
          padding: 18px clamp(18px, 2.6vw, 34px) 24px;
        }

        .wallet-summary-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .wallet-card {
          min-width: 0;
          padding: 18px;
          background: rgba(255, 253, 244, .86);
          border: 2px solid rgba(196, 184, 158, .7);
          border-radius: var(--radius-sm);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .35);
        }

        .wallet-card--balance {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 18px;
          align-items: center;
        }

        .wallet-card__label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--ac-text-body);
          font-size: 13px;
          font-weight: 900;
        }

        .wallet-card__value {
          margin-top: 10px;
          color: var(--ac-text);
          font-size: 32px;
          font-weight: 950;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .wallet-balance-value {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .wallet-balance-value__icon {
          width: 40px;
          height: 41px;
          flex: 0 0 auto;
          object-fit: contain;
          image-rendering: pixelated;
        }

        .wallet-card__hint {
          margin: 10px 0 0;
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
        }

        .wallet-action-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .wallet-card--balance .wallet-action-row {
          justify-content: flex-end;
          margin-top: 0;
        }

        .wallet-action,
        .wallet-submit {
          appearance: none;
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 14px;
          color: var(--ac-text);
          background: #9bdc5c;
          border-width: 0;
          border-style: solid;
          border-color: #101010;
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(80, 63, 40, .42);
          font: inherit;
          font-size: 13px;
          font-weight: 950;
        }

        .wallet-action {
          background: #9bdc5c;
          border-width: 0;
        }

        .wallet-action:hover,
        .wallet-submit:hover:not(:disabled) {
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0 rgba(80, 63, 40, .48);
        }

        .wallet-action--secondary {
          background: var(--ac-cream-light);
          border-color: rgba(196, 184, 158, .86);
        }

        .wallet-submit {
          width: 100%;
          border-width: 0;
          margin-top: 14px;
        }

        .wallet-submit--withdraw {
          border-width: 0;
        }

        .wallet-submit:disabled {
          opacity: .56;
          cursor: not-allowed;
          filter: grayscale(.3);
        }

        .wallet-section {
          margin-top: 16px;
          overflow: hidden;
          background: rgba(255, 253, 244, .86);
          border: 2px solid rgba(196, 184, 158, .7);
          border-radius: var(--radius-sm);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .35);
        }

        .wallet-table {
          min-width: 720px;
        }

        .wallet-table__row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr .75fr;
          gap: 12px;
          align-items: center;
          padding: 12px 16px;
          color: var(--ac-text);
          font-size: 13px;
          font-weight: 800;
          border-bottom: 1px solid rgba(196, 184, 158, .45);
        }

        .wallet-table__row:last-child {
          border-bottom: 0;
        }

        .wallet-table__row--head {
          color: var(--ac-text-body);
          background: rgba(255, 249, 232, .65);
          font-size: 12px;
          font-weight: 950;
        }

        .wallet-table__mono {
          font-variant-numeric: tabular-nums;
          font-size: 12px;
        }

        .wallet-table__amount {
          text-align: right;
          font-variant-numeric: tabular-nums;
          font-weight: 950;
        }

        .wallet-table__amount--plus { color: rgb(121, 79, 39); }
        .wallet-table__amount--minus { color: rgb(121, 79, 39); }

        .wallet-table__balance {
          display: inline-flex;
          align-items: center;
          justify-content: flex-end;
          gap: 5px;
        }

        .wallet-table__balance-icon {
          width: 18px;
          height: 18px;
          object-fit: contain;
          image-rendering: pixelated;
        }

        .wallet-withdraw {
          margin-top: 0;
          display: block;
        }

        .wallet-withdraw--modal {
          margin-top: 0;
        }

        .wallet-withdraw__steps {
          width: min(720px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 18px;
        }

        .wallet-step {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          padding: 0;
        }

        .wallet-step__body {
          min-width: 0;
          display: grid;
          gap: 12px;
        }

        .wallet-step__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-width: 0;
        }

        .wallet-step__title {
          margin: 1px 0 0;
          color: var(--ac-text);
          font-size: 17px;
          font-weight: 950;
          line-height: 1.15;
        }

        .wallet-step__note {
          margin: 0;
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 800;
          line-height: 1.45;
        }

        .wallet-form {
          display: grid;
          gap: 10px;
        }

	        .wallet-field {
	          display: grid;
	          gap: 6px;
	        }

	        .wallet-input-unit-wrap {
	          position: relative;
	          display: block;
	        }

	        .wallet-field span {
	          color: var(--ac-text-body);
	          font-size: 12px;
          font-weight: 900;
        }

        .wallet-input,
        .wallet-select__button {
          width: 100%;
          height: 40px;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .35);
          padding: 0 12px;
          font: inherit;
          font-size: 13px;
          font-weight: 850;
	          outline: none;
	        }

	        .wallet-select {
	          position: relative;
	          width: 100%;
	          cursor: none;
	        }

	        .wallet-select__button {
	          appearance: none;
	          position: relative;
	          display: flex;
	          align-items: center;
	          justify-content: space-between;
	          gap: 10px;
	          padding-right: 44px;
	          text-align: left;
	          cursor: none;
	        }

	        .wallet-select__value {
	          min-width: 0;
	          overflow: hidden;
	          color: var(--ac-text);
	          font-size: 13px;
	          font-weight: 850;
	          line-height: 1.2;
	          text-overflow: ellipsis;
	          white-space: nowrap;
	        }

	        .wallet-select__chevron {
	          position: absolute;
	          right: 16px;
	          top: 50%;
	          width: 14px;
	          height: 14px;
	          transform: translateY(-50%) rotate(0deg);
	          transform-origin: center;
	          transition: transform 140ms cubic-bezier(.22, 1, .36, 1);
	        }

	        .wallet-select__chevron::before {
	          content: "";
	          position: absolute;
	          left: 3px;
	          top: 4px;
	          width: 8px;
	          height: 8px;
	          border-right: 2px solid #794f27;
	          border-bottom: 2px solid #794f27;
	          border-radius: 1px;
	          transform: rotate(45deg);
	        }

	        .wallet-select.is-open .wallet-select__chevron {
	          transform: translateY(-50%) rotate(180deg);
	        }

	        .wallet-select__menu {
	          position: absolute;
	          left: 0;
	          right: 0;
	          top: calc(100% + 6px);
	          z-index: 12;
	          display: grid;
	          gap: 4px;
	          padding: 6px;
	          background: #fffdf4;
	          border: 1.5px solid rgba(196, 184, 158, .92);
	          border-radius: var(--radius-sm);
	          box-shadow: 0 10px 0 rgba(121, 79, 39, .12), 0 16px 28px rgba(78, 67, 60, .18);
	          cursor: none;
	        }

	        .wallet-select__option {
	          appearance: none;
	          display: flex;
	          align-items: center;
	          width: 100%;
	          min-height: 34px;
	          padding: 0 10px;
	          color: var(--ac-text);
	          background: transparent;
	          border: 0;
	          border-radius: var(--radius-xs);
	          font: inherit;
	          font-size: 12px;
	          font-weight: 850;
	          text-align: left;
	          cursor: none;
	        }

	        .wallet-select__option:hover,
	        .wallet-select__option:focus-visible {
	          background: #fff3d3;
	          outline: none;
	        }

	        .wallet-select__option.is-selected {
	          color: #5f3b1e;
	          background: linear-gradient(90deg, rgba(255, 236, 68, .42), rgba(255, 158, 61, .22));
	        }

	        .wallet-input--with-unit {
	          height: 52px;
	          padding: 0 68px 0 16px;
	          font-size: 16px;
	          font-weight: 950;
	        }

	        .wallet-field .wallet-input-unit {
	          position: absolute;
	          right: 16px;
	          top: 50%;
	          transform: translateY(-50%);
	          color: var(--ac-text-body);
	          font-size: 13px;
	          font-weight: 950;
	          line-height: 1;
	          pointer-events: none;
	        }

	        .wallet-input:focus,
	        .wallet-select__button:focus-visible {
          border-color: var(--ac-primary);
          outline: 2px solid rgba(25, 200, 185, .22);
          outline-offset: 2px;
        }

        .wallet-field__hint {
          color: var(--ac-text-body);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.45;
        }

        .wallet-field__hint.is-error {
          color: #c53434;
          font-weight: 900;
        }

        .wallet-conversion {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 8px 12px;
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 800;
          line-height: 1.45;
        }

        .wallet-conversion__value {
          color: var(--ac-text);
          font-size: 16px;
          font-weight: 950;
        }

        .wallet-conversion.is-error,
        .wallet-conversion.is-error .wallet-conversion__value {
          color: #c53434;
        }

        .wallet-bind-state {
          color: #18855c;
          font-size: 12px;
          font-weight: 900;
          line-height: 1.45;
        }

        .wallet-bound-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          min-height: 62px;
          padding: 12px 14px;
          color: var(--ac-text);
          background: rgba(255, 253, 244, .58);
          border: 1px solid rgba(196, 184, 158, .46);
          border-radius: var(--radius-xs);
          box-shadow: none;
        }

        .wallet-bound-summary__main {
          min-width: 0;
          display: grid;
          gap: 4px;
        }

        .wallet-bound-summary__label {
          color: #18855c;
          font-size: 12px;
          font-weight: 950;
          line-height: 1;
        }

        .wallet-bound-summary__target {
          min-width: 0;
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
          line-height: 1.15;
        }

        .wallet-bound-summary__network {
          flex: 0 0 auto;
          overflow: hidden;
          color: rgba(121, 79, 39, .62);
          font-size: 11px;
          font-weight: 850;
          line-height: 1.15;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .wallet-bound-summary__address {
          overflow: hidden;
          color: var(--ac-text);
          font-size: 13px;
          font-weight: 950;
          line-height: 1.15;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }

        .wallet-bound-summary__edit {
          appearance: none;
          flex: 0 0 auto;
          min-height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          color: rgba(121, 79, 39, .68);
          background: transparent;
          border: 0;
          border-radius: 0;
          box-shadow: none;
          font: inherit;
          font-size: 12px;
          font-weight: 900;
          cursor: pointer;
        }

        .wallet-bound-summary__edit:hover {
          color: var(--ac-text);
        }

        .wallet-withdraw__actions {
          display: grid;
          gap: 10px;
          padding-top: 16px;
        }

        .wallet-status {
          margin-top: 12px;
          padding: 10px 12px;
          color: var(--ac-text);
          background: rgba(155, 220, 92, .24);
          border: 1.5px solid rgba(79, 136, 50, .34);
          border-radius: var(--radius-xs);
          font-size: 12px;
          font-weight: 850;
          line-height: 1.5;
        }

        .wallet-status.is-error {
          background: rgba(226, 59, 59, .12);
          border-color: rgba(226, 59, 59, .28);
        }

	        .leaderboard-modal {
	          width: min(960px, 94vw);
	          height: min(760px, calc(100svh - clamp(56px, 8svh, 104px)));
	          max-height: calc(100svh - clamp(56px, 8svh, 104px));
	          background: linear-gradient(180deg, #fffdf4 0%, var(--ac-cream) 100%);
	          border: 2px solid color-mix(in srgb, var(--ac-border) 82%, var(--ac-text));
	          border-radius: var(--radius-xs);
          box-shadow:
            0 0 0 2px rgba(255, 253, 244, .88),
            5px 5px 0 rgba(189, 174, 160, .72),
            0 20px 48px rgba(66, 48, 31, .18);
          image-rendering: pixelated;
        }

	        .leaderboard-modal .shop-modal__header {
	          flex: 0 0 auto;
	          align-items: center;
	          justify-content: space-between;
	          gap: 14px;
	          padding-top: 16px;
          background: rgba(255, 249, 232, .88);
          border-bottom: 2px solid rgba(196, 184, 158, .62);
        }

        .leaderboard-modal__heading {
          min-width: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex: 1 1 auto;
        }

        .leaderboard-modal .shop-modal__title {
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          padding: 0 18px;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 1000;
          letter-spacing: 0;
          color: var(--ac-text);
          text-shadow: none;
        }

        .leaderboard-modal .shop-modal__close {
          width: 38px;
          height: 38px;
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
        }

        .leaderboard-panel {
          flex: 1 1 auto;
          min-height: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 18px clamp(18px, 2.6vw, 34px) 24px;
        }

        .leaderboard-tabs {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          padding: 0;
          background: transparent;
          border: 0;
          border-radius: 0;
          box-shadow: none;
        }

        .leaderboard-tab {
          appearance: none;
          min-height: 38px;
          padding: 0 18px;
          color: rgba(121, 79, 39, .66);
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs);
          cursor: pointer;
          font: inherit;
          font-size: 14px;
          font-weight: 1000;
          transition: background 120ms ease, color 120ms ease;
        }

        .leaderboard-tab:hover {
          color: var(--ac-text);
          background: rgba(255, 247, 227, .72);
        }

        .leaderboard-tab.is-active {
          color: var(--ac-text);
          background: #ffd557;
          box-shadow: none;
        }

        .leaderboard-podium {
          flex: 0 0 auto;
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: end;
          gap: 16px;
          margin-top: 0;
          padding: 24px 0 8px;
          isolation: isolate;
        }

        .leaderboard-podium::before {
          content: "";
          position: absolute;
          left: 4px;
          right: 4px;
          bottom: 1px;
          height: 28px;
          z-index: -1;
          background:
            linear-gradient(90deg, transparent 0 2%, rgba(121, 79, 39, .16) 2% 98%, transparent 98%),
            repeating-linear-gradient(90deg, rgba(121, 79, 39, .18) 0 2px, transparent 2px 26px),
            linear-gradient(180deg, #f4d58f 0%, #d5ad62 100%);
          border: 2px solid rgba(121, 79, 39, .34);
          border-radius: var(--radius-xs);
          box-shadow: 0 5px 0 rgba(121, 79, 39, .18);
        }

        .leaderboard-podium-card {
          --podium-bg: #fff7e3;
          --podium-edge: rgba(196, 184, 158, .74);
          --podium-shadow: rgba(121, 79, 39, .2);
          --podium-medal: #d7c39b;
          position: relative;
          min-width: 0;
          min-height: var(--podium-height, 150px);
          display: grid;
          align-content: space-between;
          gap: 12px;
          overflow: visible;
          padding: 18px;
          color: var(--ac-text);
          background:
            linear-gradient(135deg, rgba(255,255,255,.62) 0 16%, transparent 16% 100%),
            radial-gradient(circle at 85% 18%, rgba(255,255,255,.72) 0 9px, transparent 10px),
            linear-gradient(180deg, #fffdf4 0%, var(--podium-bg) 100%);
          border: 2px solid var(--podium-edge);
          border-radius: var(--radius-sm);
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,.56),
            4px 4px 0 var(--podium-shadow),
            0 12px 22px rgba(66, 48, 31, .12);
          transform: translateY(var(--podium-lift, 0));
        }

        .leaderboard-podium-card::before,
        .leaderboard-podium-card::after {
          content: "";
          position: absolute;
          pointer-events: none;
        }

        .leaderboard-podium-card::before {
          left: 14px;
          right: 14px;
          bottom: -11px;
          height: 12px;
          background: color-mix(in srgb, var(--podium-edge) 52%, #fffdf4);
          border: 2px solid color-mix(in srgb, var(--podium-edge) 82%, #2c2117);
          border-top: 0;
          border-radius: 0 0 var(--radius-xs) var(--radius-xs);
          box-shadow: 2px 3px 0 rgba(121, 79, 39, .18);
        }

        .leaderboard-podium-card::after {
          right: 14px;
          bottom: 12px;
          width: 52px;
          height: 6px;
          opacity: .58;
          background: repeating-linear-gradient(90deg, var(--podium-edge) 0 6px, transparent 6px 11px);
          border-radius: 999px;
        }

        .leaderboard-podium-card__shine {
          position: absolute;
          inset: 8px 8px auto auto;
          width: 48px;
          height: 48px;
          opacity: .52;
          background:
            linear-gradient(90deg, transparent 44%, rgba(255, 253, 244, .92) 44% 56%, transparent 56%),
            linear-gradient(0deg, transparent 44%, rgba(255, 253, 244, .92) 44% 56%, transparent 56%);
          transform: rotate(18deg) scale(var(--shine-scale, .7));
        }

        .leaderboard-podium-card__head {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .leaderboard-podium-card--rank-1 {
          --podium-height: 202px;
          --podium-lift: -10px;
          --podium-bg: #fff0a8;
          --podium-edge: #d69b21;
          --podium-shadow: rgba(169, 110, 28, .32);
          --podium-medal: #f3b72d;
          --shine-scale: .95;
          z-index: 3;
        }

        .leaderboard-podium-card--rank-2 {
          --podium-height: 166px;
          --podium-bg: #edf4f2;
          --podium-edge: #93a8a6;
          --podium-shadow: rgba(86, 106, 104, .22);
          --podium-medal: #9ca9a8;
        }

        .leaderboard-podium-card--rank-3 {
          --podium-height: 154px;
          --podium-bg: #f8ddc6;
          --podium-edge: #b9794c;
          --podium-shadow: rgba(146, 83, 45, .24);
          --podium-medal: #b9794c;
        }

        .leaderboard-rank-badge {
          position: relative;
          width: 42px;
          height: 42px;
          display: inline-grid;
          place-items: center;
          color: #fffdf4;
          background: var(--podium-medal);
          border: 2px solid color-mix(in srgb, var(--podium-medal) 60%, #2c2117);
          border-radius: 999px;
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,.42),
            0 3px 0 rgba(44, 33, 23, .28);
          font-size: 16px;
          font-weight: 1000;
          line-height: 1;
        }

        .leaderboard-rank-badge__ring {
          position: absolute;
          inset: 5px;
          border: 1.5px solid rgba(255, 253, 244, .58);
          border-radius: 999px;
        }

        .leaderboard-rank-tag {
          position: relative;
          padding: 4px 10px;
          color: color-mix(in srgb, var(--podium-edge) 68%, #2c2117);
          background: rgba(255, 253, 244, .82);
          border: 1.5px solid color-mix(in srgb, var(--podium-edge) 56%, #fffdf4);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 1000;
          box-shadow: 1px 2px 0 rgba(121, 79, 39, .12);
        }

        .leaderboard-crown {
          position: absolute;
          left: 50%;
          top: -25px;
          z-index: 4;
          width: 58px;
          height: 34px;
          transform: translateX(-50%);
          filter: drop-shadow(0 3px 0 rgba(121, 79, 39, .22));
        }

        .leaderboard-crown::before {
          content: "";
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: 0;
          height: 13px;
          background: #f3b72d;
          border: 2px solid #8f6420;
          border-radius: 0 0 8px 8px;
        }

        .leaderboard-crown span {
          position: absolute;
          bottom: 9px;
          width: 20px;
          height: 22px;
          background: #ffd557;
          border: 2px solid #8f6420;
          transform: rotate(45deg);
        }

        .leaderboard-crown span:nth-child(1) {
          left: 4px;
        }

        .leaderboard-crown span:nth-child(2) {
          left: 19px;
          bottom: 14px;
        }

        .leaderboard-crown span:nth-child(3) {
          right: 4px;
        }

        .leaderboard-champion-ribbon {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          min-height: 22px;
          margin-bottom: 6px;
          padding: 0 10px;
          color: #fffdf4;
          background: #8f6420;
          border: 1.5px solid rgba(44, 33, 23, .36);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(121, 79, 39, .18);
          font-size: 10px;
          font-weight: 1000;
          letter-spacing: .08em;
        }

        .leaderboard-name {
          position: relative;
          z-index: 1;
          overflow: hidden;
          color: var(--ac-text);
          font-size: 17px;
          font-weight: 1000;
          line-height: 1.2;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .leaderboard-balance {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgb(121, 79, 39);
          font-size: 22px;
          font-weight: 1000;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .leaderboard-balance__icon {
          width: 24px;
          height: 24px;
          flex: 0 0 auto;
          object-fit: contain;
          image-rendering: pixelated;
        }

        .leaderboard-casts {
          position: relative;
          z-index: 1;
          color: #725d42;
          font-size: 12px;
          font-weight: 900;
        }

        .leaderboard-list {
          flex: 1 1 auto;
          min-height: 0;
          display: flex;
          flex-direction: column;
          margin-top: 16px;
          overflow: hidden;
          background: #fffdf4;
          border: 2px solid rgba(196, 184, 158, .7);
          border-radius: var(--radius-sm);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .35);
        }

        .leaderboard-list__scroll {
          flex: 1 1 auto;
          min-height: 0;
          overflow-y: auto;
          background: #fffdf4;
          overscroll-behavior: contain;
          scrollbar-gutter: stable;
        }

        .leaderboard-list-row {
          display: grid;
          grid-template-columns: 58px minmax(0, 1.3fr) minmax(120px, .8fr) minmax(86px, .55fr);
          gap: 12px;
          align-items: center;
          padding: 12px 16px;
          color: var(--ac-text);
          font-size: 13px;
          font-weight: 850;
          border-bottom: 1px solid rgba(196, 184, 158, .45);
        }

        .leaderboard-list-row:last-child {
          border-bottom: 0;
        }

        .leaderboard-list-row--head {
          flex: 0 0 auto;
          position: relative;
          z-index: 2;
          color: var(--ac-text-body);
          background: #fff7e3;
          font-size: 12px;
          font-weight: 950;
          box-shadow: 0 2px 0 rgba(196, 184, 158, .32);
        }

        .leaderboard-list__rank {
          color: #725d42;
          font-weight: 1000;
        }

        .leaderboard-list__name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .leaderboard-list__balance {
          color: rgb(121, 79, 39);
          text-align: left;
          font-variant-numeric: tabular-nums;
          font-weight: 1000;
        }

        .leaderboard-list__casts {
          text-align: left;
          font-variant-numeric: tabular-nums;
        }

        .leaderboard-list__metric {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5px;
          color: rgb(121, 79, 39);
          text-align: left;
          font-variant-numeric: tabular-nums;
          font-weight: 1000;
        }

        .leaderboard-list__metric .leaderboard-balance__icon {
          width: 18px;
          height: 18px;
        }

        .leaderboard-list-row--head .leaderboard-list__balance,
        .leaderboard-list-row--head .leaderboard-list__casts {
          color: var(--ac-text-body);
          font-weight: 950;
        }

        .leaderboard-list-row.is-current {
          position: relative;
          overflow: hidden;
          background: var(--leaderboard-row-bg, #fffdf4);
        }

        .leaderboard-list-row.is-current::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          padding: 2px;
          border-radius: inherit;
          background: conic-gradient(
            from var(--leaderboard-gradient-angle),
            #cc98ff 0%,
            #ff944a 34%,
            #ff7cbd 67%,
            #cc98ff 100%
          );
          pointer-events: none;
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: leaderboard-border-rotate 5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .leaderboard-list-row.is-current::after {
            animation: none;
          }
        }

        .leaderboard-list-row.leaderboard-current-row--sticky {
          flex: 0 0 auto;
          position: relative;
          z-index: 3;
          margin: 0;
          border-top: 2px solid rgba(224, 184, 78, .72);
          border-bottom: 0;
          box-shadow: 0 -2px 0 rgba(196, 184, 158, .3), 0 -10px 18px rgba(66, 48, 31, .08);
        }

        .leaderboard-modal {
          width: min(960px, calc(100vw - 48px));
          height: auto;
          max-height: calc(100svh - 48px);
          overflow: visible;
          background: transparent;
          border: 0;
          border-radius: 8px;
          box-shadow: none;
          color: #794f27;
        }

        .leaderboard-modal .shop-modal__header {
          position: relative;
          z-index: 0;
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: -10px;
          padding: 12px 34px 18px;
          background: #fff7e8;
          border-bottom: 2px solid rgba(255, 255, 255, .62);
          border-radius: 8px 8px 0 0;
        }

        .leaderboard-modal .shop-modal__close {
          width: 38px;
          height: 38px;
          color: #725d42;
          background: #f8f8f0;
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: 4px;
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
        }

        .leaderboard-tabs {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0;
        }

        .leaderboard-tab {
          width: auto;
          min-height: 38px;
          padding: 0 12px;
          color: rgba(121, 79, 39, .6);
          background: transparent;
          border: 0;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 950;
          line-height: 21px;
          white-space: nowrap;
        }

        .leaderboard-tab.is-active,
        .leaderboard-tab:hover {
          color: #794f27;
          background: #ffd557;
        }

        .leaderboard-panel {
          position: relative;
          z-index: 1;
          height: auto;
          min-height: 0;
          display: block;
          overflow: hidden;
          padding: 0;
          background: linear-gradient(180deg, #FDD355 0%, #FFF9B4 100%);
          border-radius: 8px;
          box-shadow:
            0 0 0 2px rgba(255, 253, 244, .88),
            5px 5px 0 rgba(189, 174, 160, .72),
            0 20px 48px rgba(66, 48, 31, .18);
        }

        .leaderboard-panel--week {
          background: linear-gradient(180deg, #FDD355 0%, #FFF9B4 100%);
        }

        .leaderboard-panel--month {
          background: linear-gradient(180deg, #FDB163 0%, #FBE79A 100%);
        }

        .leaderboard-panel::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 1000px;
          height: 638px;
          transform: translate(-50%, -50%);
          background: url("/assets/ranking-modal/watermark-full.png") center / cover no-repeat;
          pointer-events: none;
        }

        .leaderboard-figma-content {
          position: relative;
          z-index: 1;
          height: auto;
          padding: 12px 34px 24px;
        }

        .leaderboard-list {
          --leaderboard-scrollbar-outset: 16px;
          --leaderboard-row-width: 500px;
          position: relative;
          z-index: 2;
          width: var(--leaderboard-row-width);
          height: auto;
          margin: 0;
          overflow: visible;
          background: transparent;
          border: 0;
          border-radius: 6px;
          box-shadow: none;
        }

        .leaderboard-list-row {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 50px 180px 100px 80px;
          gap: 20px;
          align-items: center;
          min-height: 54px;
          padding: 9px 16px;
          color: #794f27;
          border: 0;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 950;
          line-height: 19.5px;
        }

        .leaderboard-list-row--head {
          min-height: 50px;
          padding: 16px 16px 10px;
          color: #ffffff;
          background: transparent;
          border-radius: 0;
          box-shadow: none;
          font-size: 12px;
          line-height: 18px;
        }

        .leaderboard-list-row--head .leaderboard-list__balance,
        .leaderboard-list-row--head .leaderboard-list__casts {
          color: #ffffff;
        }

        .leaderboard-list__scroll {
          width: calc(100% + var(--leaderboard-scrollbar-outset));
          box-sizing: border-box;
          height: 390px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
          overflow-x: hidden;
          overscroll-behavior: contain;
          margin-right: calc(-1 * var(--leaderboard-scrollbar-outset));
          padding-right: var(--leaderboard-scrollbar-outset);
          background: transparent;
          scrollbar-gutter: auto;
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        .leaderboard-list__scroll > .leaderboard-list-row {
          flex: 0 0 auto;
          width: var(--leaderboard-row-width);
          height: 54px;
          min-height: 54px;
        }

        .leaderboard-list__scroll::-webkit-scrollbar {
          width: 6px;
        }

        .leaderboard-list__scroll.is-scrolling {
          scrollbar-color: rgba(121, 79, 39, .28) rgba(255, 253, 244, .28);
        }

        .leaderboard-list__scroll::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 999px;
        }

        .leaderboard-list__scroll::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 999px;
        }

        .leaderboard-list__scroll.is-scrolling::-webkit-scrollbar-track {
          background: rgba(255, 253, 244, .28);
        }

        .leaderboard-list__scroll.is-scrolling::-webkit-scrollbar-thumb {
          background: rgba(121, 79, 39, .28);
        }

        @property --leaderboard-gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes leaderboard-border-rotate {
          to {
            --leaderboard-gradient-angle: 360deg;
          }
        }

        .leaderboard-list-row--rank-1 {
          --leaderboard-row-bg: linear-gradient(90deg, #fff19a 0%, #fffae9 44.17%, #fffbf4 100%);
          background: var(--leaderboard-row-bg);
        }

        .leaderboard-list-row--rank-2 {
          --leaderboard-row-bg: linear-gradient(90deg, #eff5f2 0%, #f9f9f3 49.52%, #fffbf4 100%);
          background: var(--leaderboard-row-bg);
        }

        .leaderboard-list-row--rank-3 {
          --leaderboard-row-bg: linear-gradient(90deg, #fae2ce 0%, #fffae9 44.17%, #fffbf4 100%);
          background: var(--leaderboard-row-bg);
        }

        .leaderboard-list__scroll > .leaderboard-list-row--rank-1,
        .leaderboard-list__scroll > .leaderboard-list-row--rank-2,
        .leaderboard-list__scroll > .leaderboard-list-row--rank-3 {
          height: 68px;
          min-height: 68px;
        }

        .leaderboard-list-row--rank-4 {
          --leaderboard-row-bg: linear-gradient(90deg, #fffdf4 0%, #fffdf4 100%);
          background: var(--leaderboard-row-bg);
        }

        .leaderboard-list-row.is-current {
          overflow: hidden;
          background: var(--leaderboard-row-bg, #fffdf4);
        }

        .leaderboard-list-row.is-current::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          padding: 2px;
          border-radius: inherit;
          background: conic-gradient(
            from var(--leaderboard-gradient-angle),
            #cc98ff 0%,
            #ff944a 34%,
            #ff7cbd 67%,
            #cc98ff 100%
          );
          pointer-events: none;
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: leaderboard-border-rotate 5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .leaderboard-list-row.is-current::after {
            animation: none;
          }
        }

        .leaderboard-list-row.leaderboard-current-row--sticky {
          height: 54px;
          min-height: 54px;
          margin-top: 4px;
          padding: 9px 16px;
          border: 0;
          border-radius: 12px;
          box-shadow: 0 -10px 18px rgba(66, 48, 31, .08);
        }

        .leaderboard-list-row.leaderboard-current-row--sticky.is-unranked {
          --leaderboard-row-bg: linear-gradient(90deg, #fffdf4 0%, #fffdf4 100%);
          background: var(--leaderboard-row-bg);
        }

        .leaderboard-rank-icon {
          width: 50px;
          height: 36px;
          display: block;
          object-fit: contain;
          image-rendering: pixelated;
        }

        .leaderboard-list__rank,
        .leaderboard-list__name,
        .leaderboard-list__metric,
        .leaderboard-list__casts {
          min-width: 0;
          color: #794f27;
          text-align: left;
        }

        .leaderboard-list__name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .leaderboard-list__metric {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-variant-numeric: tabular-nums;
        }

        .leaderboard-balance__icon,
        .leaderboard-list__metric .leaderboard-balance__icon {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .leaderboard-hero-art {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 536px;
          width: 424px;
          height: auto;
          display: grid;
          place-items: center;
          pointer-events: none;
        }

        .leaderboard-hero-art img {
          width: 450px;
          height: 454px;
          object-fit: contain;
          image-rendering: pixelated;
        }

        .leaderboard-refresh-note {
          position: absolute;
          right: 34px;
          bottom: 18px;
          z-index: 3;
          margin: 0;
          padding: 6px 10px;
          color: rgba(121, 79, 39, .76);
          opacity: .5;
          background: rgba(255, 253, 244, .56);
          border: 0;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 950;
          line-height: 18px;
          white-space: nowrap;
        }

        @media (max-width: 760px) {
          .leaderboard-modal {
            width: calc(100vw - 24px);
          }

          .leaderboard-modal .shop-modal__header {
            padding-inline: 18px;
          }

          .leaderboard-panel {
            height: auto;
            min-height: 0;
          }

          .leaderboard-figma-content {
            padding-inline: 18px;
            overflow-x: auto;
          }

          .leaderboard-refresh-note {
            right: 18px;
          }

          .leaderboard-hero-art {
            opacity: .24;
          }
        }

        .inventory-summary {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          padding: 14px clamp(18px, 2.6vw, 34px) 0;
        }

        .inventory-stat {
          min-width: 0;
          padding: 13px 14px;
          background: rgba(255,255,248,.72);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
        }

        .inventory-stat__label {
          color: rgba(114, 93, 66, .72);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .inventory-stat__value {
          margin-top: 5px;
          color: var(--ac-text);
          font-size: 22px;
          font-weight: 950;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .inventory-grid {
          flex: 1 1 auto;
          min-height: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
          grid-auto-rows: minmax(357px, auto);
          align-items: start;
          gap: 16px;
          overflow: auto;
          padding: 10px clamp(18px, 2.6vw, 34px) clamp(18px, 2.6vw, 34px);
          background: transparent;
          perspective: 1500px;
        }

        /* Inventory cards: rebuilt to match the Figma card screenshot proportions. */
        .inventory-card {
          --tier-bg: #fff7d9;
          --tier-edge: #f3c93d;
          --tier-accent: #a8e86b;
          --tier-accent-deep: #5b9a2d;
          --tier-ray: rgba(139, 204, 92, .2);
          --tier-star: #74b54f;
          --tier-cta-text: #1a1a1a;
          --card-tilt-x: 0deg;
          --card-tilt-y: 0deg;
          --card-shine-x: 50%;
          --card-shine-y: 50%;
          --card-shine-angle: 135deg;

          position: relative;
          min-width: 0;
          align-self: start;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 400px;
          padding: 18px 18px 18px;
          background: var(--tier-bg);
          border: 0 solid var(--tier-edge);
          border-radius: 24px;
          box-shadow: none;
          color: #1a1a1a;
          overflow: visible;
          isolation: isolate;
          transform:
            perspective(1200px)
            rotateX(var(--card-tilt-y))
            rotateY(var(--card-tilt-x))
            translateY(0)
            scale(1);
          transform-style: preserve-3d;
          will-change: transform;
          transition:
            transform .36s cubic-bezier(.22,1,.36,1),
            box-shadow .24s ease,
            filter .24s ease;
        }
        .inventory-card::before {
          content: "";
          position: absolute;
          inset: -10px;
          z-index: -1;
          border-radius: inherit;
          background: radial-gradient(circle at var(--card-shine-x) var(--card-shine-y), color-mix(in srgb, var(--tier-accent) 36%, white) 0%, rgba(255,255,255,0) 58%);
          filter: blur(16px);
          opacity: 0;
          transform: translateZ(-12px);
          transition: opacity .24s ease;
          pointer-events: none;
        }
        .inventory-card::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 4;
          border-radius: inherit;
          background:
            linear-gradient(
              var(--card-shine-angle),
              transparent 34%,
              rgba(255, 255, 255, .26) 48%,
              rgba(255, 255, 255, .1) 53%,
              transparent 66%
            ),
            radial-gradient(circle at var(--card-shine-x) var(--card-shine-y), rgba(255,255,255,.16), transparent 34%);
          opacity: 0;
          mix-blend-mode: overlay;
          pointer-events: none;
          transition: opacity .2s ease;
        }
        .inventory-card:hover {
          transform:
            perspective(1200px)
            rotateX(var(--card-tilt-y))
            rotateY(var(--card-tilt-x))
            translateY(-5px)
            scale(1.008);
          box-shadow: 0 14px 24px rgba(20, 20, 20, .14);
          filter: saturate(1.02);
          z-index: 10;
        }
        .inventory-card:has(.inv-more-menu) {
          z-index: 200;
        }
        .inventory-card:hover::before { opacity: .42; }
        .inventory-card:hover::after { opacity: .9; }
        .inventory-card:hover .inv-head,
        .inventory-card:hover .inv-art,
        .inventory-card:hover .inv-stats,
        .inventory-card:hover .inv-actions {
          transform: translateZ(14px);
        }

        @property --s-glow-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .inventory-card--SSS,
        .inventory-card--SS {
          background: var(--tier-bg);
          border-color: var(--tier-edge);
          border-radius: 8px;
          box-shadow: none;
          animation: none;
          min-height: 0;
        }

        .inventory-card--SSS::before,
        .inventory-card--SS::before {
          display: none;
        }

        .inventory-card--SSS::after,
        .inventory-card--SS::after {
          inset: -3px;
          border-radius: inherit;
          box-shadow: none;
        }

        .border-glow-card--holographic.inventory-card::before,
        .border-glow-card--holographic.inventory-card::after {
          display: none;
        }

        .inventory-card--SSS .inv-art,
        .inventory-card--SS .inv-art {
          border-width: 2px 2px 0;
          border-radius: 4px 4px 0 0;
        }

        .inventory-card--SSS .inv-art__tag,
        .inventory-card--SS .inv-art__tag {
          padding: 4px 10px;
          border-width: 2px;
          border-radius: 4px 0 0 0;
        }

        .inventory-card--SSS .inv-art__tag {
          background: linear-gradient(180deg, oklch(0.98 0.37 36), oklch(0.95 0.24 77));
        }

        .inventory-card--SSS .inv-stats,
        .inventory-card--SS .inv-stats {
          border-width: 2px;
          border-radius: 0 0 4px 4px;
        }

        .inventory-card--SSS .inv-btn,
        .inventory-card--SS .inv-btn {
          border-radius: 4px;
        }

        .inventory-card--SSS .inv-btn--ghost {
          border-width: 2px;
        }

        .inventory-card--SS .inv-btn--ghost {
          border-width: 2px;
        }

        .inventory-card--SS .inv-btn--star.is-on {
          background: #ffffff;
        }

        .inventory-card--SSS .inv-btn--cta {
          background: #ffffff;
        }

        .inventory-card--SS .inv-btn--cta {
          background: #ffffff;
          border: 2px solid #101010;
        }

        .inventory-card--SSS .inv-head,
        .inventory-card--SS .inv-head {
          margin-bottom: 0;
        }

        .inventory-card--SSS:hover,
        .inventory-card--SS:hover {
          box-shadow: 0 14px 24px rgba(20, 20, 20, .14);
        }

        .inventory-card--SSS:hover::before,
        .inventory-card--SS:hover::before {
          opacity: 0;
        }

        .inventory-card--SSS {
          --tier-bg: linear-gradient(180deg, oklch(0.98 0.37 36), oklch(0.95 0.24 77));
          --tier-edge: #d39a2b;
          --tier-accent: #ffa742;
          --tier-accent-deep: #9c5d0f;
          --tier-ray: rgba(255, 208, 110, .32);
          --tier-star: #ffa742;
          --tier-cta-text: #101010;
        }

        .inv-head {
          position: relative;
          z-index: 12;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          height: auto;
          min-height: 0;
          padding: 0 0 8px;
          transform: translateZ(0);
          transition: transform .28s cubic-bezier(.22,1,.36,1);
        }
        .inv-no {
          font-family: inherit;
          font-weight: 950;
          font-size: 20px;
          color: #1a1a1a;
          letter-spacing: .015em;
          line-height: 1;
        }

	        .inv-medal {
	          position: relative;
	          top: auto;
	          right: auto;
	          flex: 0 0 auto;
	          min-width: 34px;
	          height: 26px;
	          z-index: 30;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          color: #101010;
          background: var(--tier-accent);
          border-width: 2px;
          border-style: solid;
          border-color: #101010;
          border-radius: 999px;
          box-shadow: none;
          font-family: inherit;
          font-size: 13px;
          font-weight: 950;
          line-height: 1;
          letter-spacing: .04em;
	          pointer-events: auto;
          transform: translateZ(24px);
          transition: transform .28s cubic-bezier(.22,1,.36,1);
        }
        .inv-medal--SSS {
          min-width: 54px;
          height: 28px;
          padding: 0 9px;
          font-size: 12px;
          letter-spacing: .03em;
        }
        .inv-medal--SSS {
          background: linear-gradient(180deg, oklch(0.98 0.37 36), oklch(0.95 0.24 77));
          box-shadow: 0 10px 16px rgba(171, 118, 25, .14);
        }
        .inventory-card:hover .inv-medal {
          transform: translateZ(34px) translateY(-1px);
        }

        .inv-art {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          height: 175px;
          margin: 0;
          background: #ffffff;
          border: 3px solid #101010;
          border-bottom: 0;
          border-radius: 22px 22px 0 0;
          overflow: hidden;
          transform: translateZ(0);
          transition: transform .28s cubic-bezier(.22,1,.36,1);
        }
        .inv-art::before,
        .inv-art::after { content: none; }
        .inv-art__rays {
          position: absolute;
          inset: 0;
          background:
            repeating-conic-gradient(
              from 0deg at 50% 62%,
              var(--tier-ray) 0deg 5deg,
              transparent 5deg 20deg
            );
          opacity: .85;
          pointer-events: none;
          transition: transform .62s ease, opacity .24s ease;
        }
        .inventory-card:hover .inv-art__rays {
          transform: scale(1.06) rotate(5deg);
          opacity: 1;
        }
        .inv-art__star {
          position: absolute;
          background: var(--tier-star);
          clip-path: polygon(
            50% 0%, 60% 35%, 98% 35%, 68% 57%,
            80% 95%, 50% 73%, 20% 95%, 32% 57%,
            2% 35%, 40% 35%
          );
          opacity: .9;
          pointer-events: none;
          transition: transform .24s ease, opacity .24s ease;
        }
        .inventory-card:hover .inv-art__star {
          opacity: 1;
          transform: translateZ(12px) scale(1.14);
        }
        .inv-art__star--1 { top: 14%; left: 12%; width: 13px; height: 13px; }
        .inv-art__star--2 { top: 8%;  left: 50%; width: 10px; height: 10px; }
        .inv-art__star--3 { top: 36%; right: 8%; width: 12px; height: 12px; }
        .inv-art__star--4 { bottom: 30%; left: 6%; width: 10px; height: 10px; }
        .inv-art__star--5 { bottom: 14%; left: 36%; width: 8px;  height: 8px; }
        .inv-art__star--6 { bottom: 22%; right: 16%; width: 14px; height: 14px; }
        .inv-art__img {
          position: relative;
          z-index: 1;
          width: min(88%, 174px);
          height: 92%;
          object-fit: contain;
          image-rendering: pixelated;
          transition: transform .22s cubic-bezier(.22,1,.36,1);
        }
        .inventory-card:hover .inv-art__img {
          transform: translateY(-5px) translateZ(24px) scale(1.055);
        }
        .inv-art__tag {
          position: absolute;
          right: -3px;
          bottom: -3px;
          z-index: 2;
          min-width: 64px;
          padding: 7px 9px 6px;
          background: var(--tier-accent);
          border: 3px solid #101010;
          border-radius: 11px 0 0 0;
          color: #101010;
          font-family: inherit;
          font-weight: 900;
          font-size: 12px;
          letter-spacing: .03em;
          text-align: center;
          box-shadow: none;
        }

        .inv-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px 26px;
          min-height: auto;
          margin: 0;
          padding: 10px 16px;
          background: #ffffff;
          border: 3px solid #101010;
          border-radius: 0 0 22px 22px;
          box-shadow: none;
          transform: translateZ(0);
          transition: transform .28s cubic-bezier(.22,1,.36,1);
        }
        .inv-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          min-width: 0;
          width: 80px;
          height: 38px;
          line-height: 1;
        }
        .inv-stat__label {
          font-family: inherit;
          font-weight: 700;
          font-size: 12px;
          color: #8a8a8a;
          letter-spacing: .02em;
          line-height: 1.2;
        }
        .inv-stat__value {
          font-family: inherit;
          font-weight: 950;
          font-size: 16px;
          color: #1a1a1a;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .inv-stat__value--pos { color: #10B981; }
        .inv-stat__value--neg { color: #F43F5E; }

        .inv-stats--inline {
          grid-template-columns: 1fr;
          align-items: center;
          min-height: 62px;
        }

        .inv-stat--inline {
          width: auto;
          height: 38px;
          flex-direction: row;
          align-items: baseline;
          gap: 0;
        }

        .inv-actions {
          display: grid;
          grid-template-columns: 50px 50px 1fr;
          gap: 11px;
          padding: 0;
          margin-top: 10px;
          transform: translateZ(0);
          transition: transform .28s cubic-bezier(.22,1,.36,1);
        }
        .inv-more-wrap {
          position: relative;
          min-width: 0;
          z-index: 220;
        }
        .inv-more-wrap > .inv-btn {
          width: 100%;
        }
        .inv-more-menu {
          position: absolute;
          left: 0;
          top: calc(100% + 6px);
          z-index: 240;
          min-width: 96px;
          padding: 5px;
          background: #fffdf4;
          border: 2px solid #101010;
          border-radius: 4px;
          box-shadow: 3px 3px 0 rgba(16, 16, 16, .18);
        }
        .inv-more-menu__item {
          appearance: none;
          width: 100%;
          min-height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          color: #c92e2e;
          background: #fff7f2;
          border: 0;
          border-radius: 3px;
          font: inherit;
          font-size: 13px;
          font-weight: 950;
          cursor: pointer;
          white-space: nowrap;
        }
        .inv-more-menu__item:hover {
          background: #ffe6df;
        }
        .inv-btn {
          appearance: none;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          font: inherit;
          font-weight: 950;
          line-height: 1;
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
          border-radius: 9px;
          transition: transform .14s cubic-bezier(.23,1,.32,1), box-shadow .14s ease, background-color .14s ease;
        }
        .inv-btn:active { transform: translateY(1px) scale(.98); }
        .inv-btn--ghost {
          background: #ffffff;
          color: #1a1a1a;
          border: 2px solid #101010;
          box-shadow: none;
        }
        .inv-btn--ghost:hover { transform: translateY(-1px); }
        .inv-btn--star.is-on { background: #fff7df; color: #b8862e; }
        .inv-btn--cta {
          background: #ffffff;
          color: #1a1a1a;
          border: 2px solid #101010;
          font-family: inherit;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: .06em;
          box-shadow: none;
        }
        .inv-btn--cta:hover { transform: translateY(-2px); }
        .inv-btn--cta:active {
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .35), 0 1px 0 var(--tier-accent-deep);
        }

        .inventory-card--SS {
          --tier-bg: #fff7d9;
          --tier-edge: #f4d36c;
          --tier-accent: #ffd66f;
          --tier-accent-deep: #b07a10;
          --tier-ray: rgba(244, 196, 75, .28);
          --tier-star: #fbcf3a;
          --tier-cta-text: #1a1a1a;
        }
        .inventory-card--S {
          --tier-bg: #f7e2ff;
          --tier-edge: #c17df2;
          --tier-accent: #c17df2;
          --tier-accent-deep: #6b4eb3;
          --tier-ray: rgba(149, 116, 220, .28);
          --tier-star: #8d6dd6;
          --tier-cta-text: #101010;
          border-radius: 8px;
          min-height: 0;
        }

        .inventory-card--S .inv-art {
          border-width: 2px 2px 0;
          border-radius: 4px 4px 0 0;
        }

        .inventory-card--S .inv-art__tag {
          padding: 4px 10px;
          border-width: 2px;
          border-radius: 4px 0 0 0;
        }

        .inventory-card--S .inv-stats {
          border-width: 2px;
          border-radius: 0 0 4px 4px;
        }

        .inventory-card--S .inv-btn {
          border-radius: 4px;
        }

        .inventory-card--S .inv-btn--ghost {
          border-width: 2px;
        }

        .inventory-card--S .inv-btn--cta {
          background: #ffffff;
          border: 2px solid #101010;
        }

        .inventory-card--S .inv-head {
          margin-bottom: 0;
        }
        .inventory-card--A {
          --tier-bg: #cfefff;
          --tier-edge: #4aa7e4;
          --tier-accent: #4aa7e4;
          --tier-accent-deep: #2b558f;
          --tier-ray: rgba(91, 142, 216, .25);
          --tier-star: #4d8acc;
          --tier-cta-text: #101010;
          border-radius: 8px;
          min-height: 0;
        }

        .inventory-card--A .inv-art {
          border-width: 2px 2px 0;
          border-radius: 4px 4px 0 0;
        }

        .inventory-card--A .inv-art__tag {
          padding: 4px 10px;
          border-width: 2px;
          border-radius: 4px 0 0 0;
        }

        .inventory-card--A .inv-stats {
          border-width: 2px;
          border-radius: 0 0 4px 4px;
        }

        .inventory-card--A .inv-btn {
          border-radius: 4px;
        }

        .inventory-card--A .inv-btn--ghost {
          border-width: 2px;
        }

        .inventory-card--A .inv-head {
          margin-bottom: 0;
        }
        .inventory-card--B {
          --tier-bg: #defec0;
          --tier-edge: #9bdc5c;
          --tier-accent: #9bdc5c;
          --tier-accent-deep: #487a26;
          --tier-ray: rgba(130, 194, 90, .25);
          --tier-star: #6db142;
          --tier-cta-text: #101010;
          border-radius: 8px;
          min-height: 0;
        }

        .inventory-card--B .inv-art {
          border-width: 2px 2px 0;
          border-radius: 4px 4px 0 0;
        }

        .inventory-card--B .inv-art__tag {
          padding: 4px 10px;
          border-width: 2px;
          border-radius: 4px 0 0 0;
        }

        .inventory-card--B .inv-stats {
          border-width: 2px;
          border-radius: 0 0 4px 4px;
        }

        .inventory-card--B .inv-btn {
          border-radius: 4px;
        }

        .inventory-card--B .inv-btn--ghost {
          border-width: 2px;
        }

        .inventory-card--B .inv-head {
          margin-bottom: 0;
        }
        .inventory-card--C {
          --tier-bg: #f3eee8;
          --tier-edge: #c1ab8b;
          --tier-accent: #d1b89c;
          --tier-accent-deep: #6f5843;
          --tier-ray: rgba(173, 156, 140, .2);
          --tier-star: #a18d77;
          --tier-cta-text: #101010;
          border-radius: 8px;
          min-height: 0;
        }

        .inventory-card--C .inv-art {
          border-width: 2px 2px 0;
          border-radius: 4px 4px 0 0;
        }

        .inventory-card--C .inv-art__tag {
          padding: 4px 10px;
          border-width: 2px;
          border-radius: 4px 0 0 0;
        }

        .inventory-card--C .inv-stats {
          border-width: 2px;
          border-radius: 0 0 4px 4px;
        }

        .inventory-card--C .inv-btn {
          border-radius: 4px;
        }

        .inventory-card--C .inv-btn--ghost {
          border-width: 2px;
        }

        .inventory-card--C .inv-head {
          margin-bottom: 0;
        }
        .inventory-card--D {
          --tier-bg: #ececec;
          --tier-edge: #c9c9c9;
          --tier-accent: #c9c9c9;
          --tier-accent-deep: #4a463f;
          --tier-ray: rgba(138, 133, 125, .22);
          --tier-star: #7d7770;
          --tier-cta-text: #101010;
          border-radius: 8px;
          min-height: 0;
        }

        .inventory-card--D .inv-art {
          border-width: 2px 2px 0;
          border-radius: 4px 4px 0 0;
        }

        .inventory-card--D .inv-art__tag {
          padding: 4px 10px;
          border-width: 2px;
          border-radius: 4px 0 0 0;
        }

        .inventory-card--D .inv-stats {
          border-width: 2px;
          border-radius: 0 0 4px 4px;
        }

        .inventory-card--D .inv-btn {
          border-radius: 4px;
        }

        .inventory-card--D .inv-btn--ghost {
          border-width: 2px;
        }

        .inventory-card--D .inv-head {
          margin-bottom: 0;
        }
        .inventory-card--D .inv-art__img { filter: grayscale(.5); }

        .inventory-card--prop,
        .inventory-card--misc {
          border-radius: 8px;
          min-height: 0;
        }

        .inventory-card--prop {
          --tier-bg: #ececec;
          --tier-edge: #f4d36c;
          --tier-accent: #c9c9c9;
          --tier-accent-deep: #4a463f;
          --tier-ray: rgba(138, 133, 125, .22);
          --tier-star: #7d7770;
          --tier-cta-text: #101010;
        }

        .inventory-card--misc {
          --tier-bg: #ececec;
          --tier-edge: #f4d36c;
          --tier-accent: #c9c9c9;
          --tier-accent-deep: #4a463f;
          --tier-ray: rgba(138, 133, 125, .22);
          --tier-star: #7d7770;
          --tier-cta-text: #101010;
        }

        .inventory-card--prop .inv-art,
        .inventory-card--misc .inv-art {
          border-width: 2px 2px 0;
          border-radius: 4px 4px 0 0;
        }

        .inventory-card--prop .inv-art__tag,
        .inventory-card--misc .inv-art__tag {
          padding: 4px 10px;
          border-width: 2px;
          border-radius: 4px 0 0 0;
        }

        .inventory-card--prop .inv-stats,
        .inventory-card--misc .inv-stats {
          border-width: 2px;
          border-radius: 0 0 4px 4px;
        }

        .inventory-card--prop .inv-btn,
        .inventory-card--misc .inv-btn {
          border-radius: 4px;
        }

        .inventory-card--prop .inv-actions,
        .inventory-card--misc .inv-actions {
          display: flex;
          width: 100%;
        }

        .inventory-card--prop .inv-actions .inv-more-wrap,
        .inventory-card--misc .inv-actions .inv-more-wrap,
        .inventory-card--prop .inv-actions .inv-btn,
        .inventory-card--misc .inv-actions .inv-btn {
          flex: 1 1 0;
          min-width: 0;
        }

        .inventory-card--prop .inv-btn--ghost,
        .inventory-card--misc .inv-btn--ghost {
          border-width: 2px;
        }

        .inventory-card--prop .inv-head,
        .inventory-card--misc .inv-head {
          margin-bottom: 0;
        }

        .inventory-card--prop .inv-item-art,
        .inventory-card--misc .inv-item-art {
          width: auto;
          height: 175px;
          transform: translateZ(0);
        }

        .inventory-card--prop .inv-item-art::before,
        .inventory-card--misc .inv-item-art::before {
          display: none;
        }

        .inv-item-art {
          position: relative;
          z-index: 1;
          width: 112px;
          height: 112px;
          display: grid;
          place-items: center;
          transform: translateZ(18px);
        }

        .inv-item-art::before {
          content: "";
          position: absolute;
          inset: 14px;
          background: rgba(255, 255, 255, .58);
          border: 2px solid rgba(16, 16, 16, .18);
          border-radius: 50%;
          box-shadow: inset 0 -8px 0 rgba(16, 16, 16, .06);
        }

        .inv-item-art__glyph {
          position: relative;
          width: 58px;
          height: 58px;
          background: var(--tier-accent);
          border: 3px solid #101010;
          box-shadow: 4px 4px 0 rgba(16, 16, 16, .14);
        }
        .inv-item-art__image {
          position: relative;
          z-index: 1;
          width: min(78%, 142px);
          height: 82%;
          object-fit: contain;
          image-rendering: auto;
        }

        .inv-item-art--prop .inv-item-art__glyph {
          border-radius: 50% 50% 46% 46%;
          transform: rotate(-10deg);
        }

        .inv-item-art--prop .inv-item-art__glyph::before {
          content: "";
          position: absolute;
          left: 16px;
          right: 16px;
          top: -18px;
          height: 20px;
          background: #f6d36a;
          border: 3px solid #101010;
          border-bottom: 0;
          border-radius: 14px 14px 0 0;
        }

        .inv-item-art--misc .inv-item-art__glyph {
          border-radius: 10px 10px 18px 18px;
          transform: rotate(8deg);
        }

        .inv-item-art--misc .inv-item-art__glyph::before {
          content: "";
          position: absolute;
          inset: 10px 12px auto;
          height: 13px;
          background: rgba(255, 255, 255, .72);
          border: 2px solid #101010;
          border-radius: 999px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hud-stat-card {
            transition: none;
          }

          .inventory-grid { perspective: none; }
          .inventory-card,
          .inventory-card:hover,
          .inventory-card:hover .inv-head,
          .inventory-card:hover .inv-art,
          .inventory-card:hover .inv-stats,
          .inventory-card:hover .inv-actions,
          .inventory-card:hover .inv-medal,
          .inventory-card:hover .inv-art__img,
          .inventory-card:hover .inv-art__rays,
          .inventory-card:hover .inv-art__star,
          .inventory-card--SSS,
          .inventory-card--SS,
          .inventory-card--SSS::before,
          .inventory-card--SS::before,
          .inventory-card--SSS .inv-btn--cta {
            animation: none;
          }
          .inventory-card,
          .inventory-card:hover,
          .inventory-card:hover .inv-head,
          .inventory-card:hover .inv-art,
          .inventory-card:hover .inv-stats,
          .inventory-card:hover .inv-actions,
          .inventory-card:hover .inv-medal,
          .inventory-card:hover .inv-art__img,
          .inventory-card:hover .inv-art__rays,
          .inventory-card:hover .inv-art__star {
            transform: none;
            transition: none;
          }
          .inventory-card::before,
          .inventory-card::after { display: none; }
        }

        @keyframes sCardBorderSpin {
          to { --s-glow-angle: 360deg; }
        }

        @keyframes sCardNeonPulse {
          0%, 100% {
            box-shadow:
              0 0 0 1px rgba(255, 246, 255, .72),
              0 0 14px rgba(255, 137, 251, .38),
              0 0 30px rgba(151, 93, 255, .2);
          }
          50% {
            box-shadow:
              0 0 0 1px rgba(255, 252, 255, .9),
              0 0 22px rgba(255, 151, 253, .6),
              0 0 48px rgba(151, 93, 255, .34);
          }
        }

        @keyframes sCardHaloPulse {
          0%, 100% {
            opacity: .48;
            transform: translateZ(-12px) scale(.985);
          }
          50% {
            opacity: .76;
            transform: translateZ(-12px) scale(1.015);
          }
        }

        @keyframes cardLegendaryGlow {
          0%, 100% {
            box-shadow:
              inset 0 0 0 2px #fff5cf,
              inset 0 0 0 4px #b56a0a,
              inset 0 26px 0 -18px rgba(255, 255, 255, .7),
              0 8px 0 rgba(150, 86, 14, .55),
              0 14px 28px rgba(241, 165, 28, .45),
              0 0 0 1px rgba(255, 220, 120, .55),
              0 0 22px rgba(255, 195, 80, .45);
          }
          50% {
            box-shadow:
              inset 0 0 0 2px #fff5cf,
              inset 0 0 0 4px #b56a0a,
              inset 0 26px 0 -18px rgba(255, 255, 255, .85),
              0 8px 0 rgba(150, 86, 14, .55),
              0 16px 32px rgba(241, 165, 28, .55),
              0 0 0 1px rgba(255, 235, 160, .8),
              0 0 36px rgba(255, 195, 80, .8);
          }
        }

        @keyframes cardSunburst {
          to { transform: rotate(360deg); }
        }

        .inventory-card__main {
          min-width: 0;
          display: contents;
        }

        .inventory-card__top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 6px 8px 8px;
          margin: -2px -2px 0;
          border-bottom: 2px solid rgba(199, 154, 61, .35);
        }

        .inventory-card__title {
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 4px 10px;
          color: #fffdf4;
          background: linear-gradient(180deg, #6a4a30 0%, #4a311e 100%);
          border: 2px solid #2f1d0f;
          border-radius: 6px;
          box-shadow: inset 0 2px 0 rgba(255,255,255,.22), 0 2px 0 rgba(0,0,0,.18);
          font-size: 13px;
          letter-spacing: .08em;
          line-height: 1.1;
          font-weight: 950;
          text-shadow: 0 1px 0 rgba(0,0,0,.35);
        }

        .inventory-card__expression {
          display: -webkit-box;
          min-height: 37px;
          margin: 10px 0 0;
          overflow: hidden;
          color: rgba(114, 93, 66, .86);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11px;
          font-weight: 800;
          line-height: 1.7;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .inventory-card__metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: auto;
        }

        .inventory-card__side {
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 2px;
          border-left: 0;
        }

        .inventory-grade {
          position: relative;
          min-width: 40px;
          height: 40px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          color: #fffdf4;
          background: radial-gradient(circle at 30% 30%, #6dd4c8 0%, #2f8c83 75%);
          border: 2.5px solid #1d5b55;
          border-radius: 50%;
          box-shadow:
            inset 0 3px 0 rgba(255,255,255,.45),
            inset 0 -3px 0 rgba(0,0,0,.18),
            0 3px 0 rgba(0, 0, 0, .25),
            0 0 0 3px rgba(255, 247, 223, .85),
            0 0 0 5px #1d5b55;
          font-size: 17px;
          font-weight: 950;
          text-shadow: 0 1px 0 rgba(0,0,0,.35);
          transform: translateY(-2px);
        }

        .inventory-grade--SSS {
          background: radial-gradient(circle at 30% 30%, #fff2a3 0%, #e1932a 80%);
          border-color: #8a5912;
          box-shadow:
            inset 0 3px 0 rgba(255,255,255,.55),
            inset 0 -3px 0 rgba(0,0,0,.22),
            0 3px 0 rgba(0, 0, 0, .3),
            0 0 0 3px rgba(255, 247, 223, .85),
            0 0 0 5px #8a5912,
            0 0 14px rgba(241, 191, 76, .9);
        }

        .inventory-grade--SS {
          background: radial-gradient(circle at 30% 30%, #fff7d9 0%, #f4d36c 80%);
          border-color: #b07a10;
        }

        .inventory-grade--S {
          background: radial-gradient(circle at 30% 30%, #e0c7ff 0%, #8d5edb 80%);
          border-color: #6b4eb3;
        }

        .inventory-grade--A {
          background: radial-gradient(circle at 30% 30%, #9ec3ff 0%, #3a6dc6 80%);
          border-color: #20407c;
          box-shadow:
            inset 0 3px 0 rgba(255,255,255,.45),
            inset 0 -3px 0 rgba(0,0,0,.18),
            0 3px 0 rgba(0, 0, 0, .25),
            0 0 0 3px rgba(255, 247, 223, .85),
            0 0 0 5px #20407c;
        }

        .inventory-grade--B {
          background: radial-gradient(circle at 30% 30%, #c9f59b 0%, #6db142 80%);
          border-color: #487a26;
          box-shadow:
            inset 0 3px 0 rgba(255,255,255,.4),
            inset 0 -3px 0 rgba(0,0,0,.18),
            0 3px 0 rgba(0, 0, 0, .25),
            0 0 0 3px rgba(255, 247, 223, .85),
            0 0 0 5px #487a26;
        }

        .inventory-grade--C {
          background: radial-gradient(circle at 30% 30%, #f0a98c 0%, #b85b3a 80%);
          border-color: #6f3522;
          box-shadow:
            inset 0 3px 0 rgba(255,255,255,.4),
            inset 0 -3px 0 rgba(0,0,0,.18),
            0 3px 0 rgba(0, 0, 0, .25),
            0 0 0 3px rgba(255, 247, 223, .85),
            0 0 0 5px #6f3522;
        }

        .inventory-grade--D {
          background: radial-gradient(circle at 30% 30%, #d8d2c4 0%, #7a6e60 85%);
          border-color: #4a3f33;
          box-shadow:
            inset 0 3px 0 rgba(255,255,255,.4),
            inset 0 -3px 0 rgba(0,0,0,.18),
            0 3px 0 rgba(0, 0, 0, .25),
            0 0 0 3px rgba(255, 247, 223, .85),
            0 0 0 5px #4a3f33;
        }

        .inventory-art {
          position: relative;
          min-height: 150px;
          display: grid;
          place-items: center;
          margin: 6px 0 2px;
          padding: 10px 0;
          background:
            radial-gradient(70% 90% at 50% 55%, rgba(255, 244, 200, .9) 0%, rgba(245, 215, 140, .35) 60%, rgba(245, 215, 140, 0) 100%),
            linear-gradient(180deg, #fff2cb 0%, #f3d997 100%);
          border: 2px solid #b8862e;
          border-radius: 10px;
          box-shadow:
            inset 0 0 0 2px #fff8e2,
            inset 0 -6px 12px rgba(184, 134, 46, .25);
          overflow: hidden;
        }

        .inventory-art::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(45deg, rgba(255, 255, 255, .12) 0 6px, transparent 6px 14px);
          pointer-events: none;
          mix-blend-mode: overlay;
          opacity: .55;
        }

        .inventory-avatar {
          position: relative;
          z-index: 1;
          width: min(78%, 200px);
          height: 150px;
          object-fit: contain;
          image-rendering: pixelated;
          filter: drop-shadow(0 6px 0 rgba(120, 86, 28, .35));
          transition: transform .25s cubic-bezier(.23,1,.32,1);
        }

        .inventory-card:hover .inventory-avatar {
          transform: translateY(-3px) scale(1.04);
        }

        .inventory-card__metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
          margin-top: auto;
        }

        .inventory-metric-card {
          min-width: 0;
          min-height: 54px;
          display: block;
          padding: 8px 6px;
          text-align: center;
          color: #4a311e;
          background: linear-gradient(180deg, #fffaec 0%, #f3d997 100%);
          border: 2px solid #b8862e;
          border-radius: 8px;
          box-shadow:
            inset 0 2px 0 rgba(255, 255, 255, .65),
            inset 0 -2px 0 rgba(184, 134, 46, .25),
            0 2px 0 rgba(120, 86, 28, .25);
        }

        .inventory-metric-card__label {
          color: rgba(74, 49, 30, .8);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .inventory-metric-card__value {
          margin-top: 4px;
          color: #1d5b55;
          font-size: 17px;
          line-height: 1;
          font-weight: 950;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 1px 0 rgba(255, 255, 255, .55);
        }

        .inventory-action {
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #6f5a50;
          background: transparent;
          border: 0;
          border-radius: var(--radius-xs);
          box-shadow: none;
          font: inherit;
          font-size: 13px;
          font-weight: 950;
          text-decoration: none;
          transition: transform .16s ease, border-color .16s ease;
        }

        .inventory-action:hover {
          transform: translate(-1px, -1px);
          color: var(--ac-text);
        }

        .inventory-action--square {
          width: 32px;
          padding: 0;
        }

        .inventory-action--favorite {
          color: #e06354;
        }

        .inventory-action--primary {
          min-width: 132px;
          flex: 1 1 auto;
          gap: 6px;
          padding: 0 10px;
          color: #fffdf4;
          background: linear-gradient(180deg, #58c2b8 0%, #2f8c83 100%);
          border: 2.5px solid #1d5b55;
          border-radius: 8px;
          box-shadow:
            inset 0 2px 0 rgba(255, 255, 255, .45),
            inset 0 -2px 0 rgba(0, 0, 0, .18),
            0 3px 0 rgba(29, 91, 85, .8),
            0 0 0 1.5px rgba(255, 247, 223, .55);
          font-size: 14px;
          letter-spacing: .06em;
          text-shadow: 0 1px 0 rgba(0, 0, 0, .35);
        }

        .inventory-action--primary:hover {
          color: #fffdf4;
          transform: translateY(-2px);
          box-shadow:
            inset 0 2px 0 rgba(255, 255, 255, .55),
            inset 0 -2px 0 rgba(0, 0, 0, .18),
            0 5px 0 rgba(29, 91, 85, .8),
            0 0 0 1.5px rgba(255, 247, 223, .65);
        }

        .inventory-status {
          display: inline-flex;
          align-items: center;
          width: max-content;
          min-height: 25px;
          padding: 4px 9px;
          color: #0b725c;
          background: #e6f9f0;
          border: 1.5px solid rgba(31, 163, 116, .28);
          border-radius: var(--radius-sm);
          font-size: 11px;
          font-weight: 950;
        }

        .inventory-status--failed {
          color: #a54635;
          background: #ffe4d9;
          border-color: rgba(216, 93, 72, .28);
        }

        .inventory-side-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 900;
        }

        .inventory-side-row strong {
          color: var(--ac-text);
          font-variant-numeric: tabular-nums;
        }

        .inventory-curve {
          height: 58px;
          margin-top: auto;
        }

        .inventory-curve svg {
          width: 100%;
          height: 58px;
          overflow: visible;
        }

        .inventory-actions {
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 2px;
        }

        .inventory-empty {
          grid-column: 1 / -1;
        }

        .inventory-detail-modal {
          width: min(1180px, 95vw);
        }

        .inventory-detail-modal .shop-modal__header {
          align-items: center;
          padding: 16px 32px;
          background: rgba(255, 249, 232, .88);
          border-bottom: 2px solid rgba(196, 184, 158, .62);
        }

        .inventory-detail-modal .shop-modal__close {
          width: 38px;
          height: 38px;
        }

        .inventory-detail-heading {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .inventory-detail-back {
          appearance: none;
          width: 38px;
          height: 38px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 1.5px solid rgba(196, 184, 158, .86);
          border-radius: var(--radius-xs);
          box-shadow: 2px 2px 0 rgba(189, 174, 160, .48);
          cursor: pointer;
          transition: transform .18s ease, box-shadow .18s ease;
        }

        .inventory-detail-back:hover {
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0 rgba(189, 174, 160, .58);
        }

        .inventory-detail-title-wrap {
          min-width: 0;
        }

        .inventory-detail-title-wrap .shop-modal__title {
          margin: 0;
          font-size: 26px;
        }

        .inventory-detail-subtitle {
          margin-top: 0;
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .inventory-detail-content {
          overflow: auto;
          padding: 18px 32px 32px;
          background:
            linear-gradient(180deg, rgba(255,249,232,.52), rgba(255,249,232,0) 180px),
            transparent;
        }

        .inventory-factor-detail {
          color: #2c2117;
          font-family: inherit;
        }

        .inventory-factor-detail * {
          font-family: inherit !important;
        }

        .inventory-factor-detail h1 {
          color: #2c2117;
          font-size: clamp(24px, 2.1vw, 34px);
          line-height: 1.1;
          font-weight: 950;
          letter-spacing: .01em;
        }

        .inventory-factor-detail .surface-card {
          background: rgba(255, 255, 248, .82);
          border: 2px solid rgba(196, 184, 158, .78);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 0 rgba(189, 174, 160, .52);
        }

        .inventory-factor-detail .bg-accent {
          background-color: rgba(255, 243, 211, .78);
        }

        .inventory-factor-detail .text-foreground {
          color: #2c2117;
        }

        .inventory-factor-detail .text-muted-foreground {
          color: rgba(114, 93, 66, .82);
        }

        .inventory-factor-detail .text-primary {
          color: #08766e;
        }

        .inventory-factor-detail .border-border,
        .inventory-factor-detail .border-border\\/60,
        .inventory-factor-detail .border-border\\/80 {
          border-color: rgba(196, 184, 158, .68);
        }

        .inventory-factor-detail button {
          font-family: inherit;
        }

        .strategy-detail-backdrop {
          position: fixed;
          inset: 0;
          z-index: 55;
          display: grid;
          place-items: center;
          padding: clamp(14px, 2vw, 34px);
          background: rgba(39, 93, 131, .28);
          backdrop-filter: blur(7px);
        }

        .strategy-detail-modal {
          width: min(1240px, 96vw);
          max-height: min(900px, 91svh);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: var(--ac-text);
          background:
            radial-gradient(circle at 8% 5%, rgba(255,255,255,.72) 0 8%, transparent 9%),
            linear-gradient(180deg, #fffdf4 0%, var(--ac-cream) 100%);
          border: 3px solid var(--ac-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 7px 0 var(--ac-shadow), 0 24px 70px rgba(66, 48, 31, .25);
        }

        .strategy-detail__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          padding: clamp(18px, 2vw, 28px) clamp(18px, 2.5vw, 34px) 14px;
          border-bottom: 2px dashed rgba(196, 184, 158, .65);
        }

        .strategy-detail__back,
        .strategy-detail__close,
        .strategy-detail__button,
        .strategy-detail__range {
          color: var(--ac-text);
          background: var(--ac-cream-light);
          border: 2px solid var(--ac-border);
          box-shadow: 0 3px 0 var(--ac-shadow-input);
          font: inherit;
          font-weight: 900;
          transition: all .18s ease;
        }

        .strategy-detail__back,
        .strategy-detail__close {
          width: 42px;
          height: 42px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: var(--radius-md);
        }

        .strategy-detail__back:hover,
        .strategy-detail__close:hover,
        .strategy-detail__button:hover,
        .strategy-detail__range:hover {
          transform: translateY(-1px);
          border-color: var(--ac-border-hover);
        }

        .strategy-detail__title {
          margin: 0;
          color: var(--ac-text);
          font-size: clamp(25px, 2.6vw, 38px);
          line-height: 1.05;
          font-weight: 900;
        }

        .strategy-detail__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .strategy-detail__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 9px;
        }

        .strategy-detail__button {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 0 14px;
          border-radius: var(--radius-md);
          text-decoration: none;
          font-size: 12px;
        }

        .strategy-detail__button--primary {
          color: #075b55;
          background: var(--ac-primary-bg);
          border-color: rgba(25, 200, 185, .46);
        }

        .strategy-detail__content {
          overflow: auto;
          padding: 18px clamp(18px, 2.5vw, 34px) clamp(18px, 2.5vw, 34px);
        }

        .detail-metric-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 10px;
        }

        .detail-metric-card,
        .detail-panel {
          background: rgba(255,255,248,.86);
          border: 2px solid rgba(196, 184, 158, .78);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 0 rgba(189, 174, 160, .68);
        }

        .detail-metric-card {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-width: 0;
          background: rgba(255,255,248,.86);
          border: 2px solid rgba(196, 184, 158, .78);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 0 rgba(189, 174, 160, .68);
        }

        .detail-metric-card__border {
          pointer-events: none;
          position: absolute;
          inset: 0;
          border: inherit;
          border-radius: inherit;
          background: transparent;
        }

        .detail-metric-card__content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 12px;
        }

        .detail-label {
          position: relative;
          z-index: 10;
          color: rgba(114, 93, 66, .72);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .detail-value {
          position: relative;
          z-index: 20;
          margin-top: 7px;
          color: var(--ac-text);
          font-size: 18px;
          font-weight: 900;
          font-variant-numeric: tabular-nums;
        }

        .detail-value--up {
          color: #0b9f73;
        }

        .detail-value--down {
          color: #d85d48;
        }

        .detail-panel-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }

        .detail-panel {
          min-width: 0;
          padding: 15px;
        }

        .detail-panel--wide {
          grid-column: span 2;
        }

        .detail-panel__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
          color: var(--ac-text);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .detail-panel__title {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .detail-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 7px 0;
          border-top: 1px dashed rgba(196, 184, 158, .55);
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 800;
        }

        .detail-row strong {
          color: var(--ac-text);
          text-align: right;
          font-weight: 900;
        }

        .detail-chart {
          width: 100%;
          height: 230px;
          margin-top: 8px;
          overflow: visible;
        }

        .strategy-detail__ranges {
          display: flex;
          gap: 6px;
        }

        .strategy-detail__range {
          min-width: 46px;
          height: 30px;
          border-radius: var(--radius-sm);
          font-size: 10px;
        }

        .strategy-detail__range.is-active {
          color: #075b55;
          background: var(--ac-primary-bg);
          border-color: rgba(25, 200, 185, .46);
        }

        .detail-config {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 7px 14px;
        }

        .detail-preferences {
          display: grid;
          gap: 7px;
        }

        .detail-pref-row {
          display: grid;
          grid-template-columns: 72px 1fr 48px;
          align-items: center;
          gap: 8px;
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 900;
        }

        .detail-pref-bar {
          height: 10px;
          overflow: hidden;
          background: #efe4c8;
          border: 1px solid rgba(196, 184, 158, .78);
          border-radius: var(--radius-xs);
        }

        .detail-pref-bar span {
          display: block;
          height: 100%;
          background: var(--ac-primary);
          border-radius: inherit;
        }

        .detail-position-table {
          width: 100%;
          border-collapse: collapse;
          color: var(--ac-text-body);
          font-size: 12px;
          font-weight: 800;
        }

        .detail-position-table th,
        .detail-position-table td {
          padding: 8px 6px;
          border-top: 1px dashed rgba(196, 184, 158, .55);
          text-align: left;
          white-space: nowrap;
        }

        .detail-position-table th {
          color: rgba(114, 93, 66, .72);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .detail-metric-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .detail-panel-grid {
            grid-template-columns: 1fr;
          }

          .detail-panel--wide {
            grid-column: auto;
          }
        }

        @media (max-width: 900px) {
          .game-landing {
            min-width: 0;
          }

          .leaderboard-layout {
            grid-template-columns: 1fr;
          }

          .leaderboard-art {
            display: none;
          }

          .shop-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .inventory-grid {
            grid-template-columns: 1fr;
          }

          .wallet-withdraw {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .shop-modal {
            width: 96vw;
          }

          .shop-grid {
            grid-template-columns: 1fr;
          }

          .inventory-summary {
            grid-template-columns: 1fr;
          }

          .wallet-summary-grid {
            grid-template-columns: 1fr;
          }

          .wallet-card--balance {
            grid-template-columns: 1fr;
          }

          .wallet-card--balance .wallet-action-row {
            justify-content: flex-start;
          }

          .leaderboard-layout .leaderboard-list-row {
            grid-template-columns: 52px minmax(0, 1fr) minmax(92px, auto) minmax(58px, auto);
          }

          .inventory-card {
            grid-template-columns: 1fr;
          }

          .inventory-card__side {
            padding-left: 0;
            border-left: 0;
            border-top: 2px dashed rgba(196, 184, 158, .55);
            padding-top: 12px;
          }
        }
      `}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9668",className:"game-stage",style:{transform:`translate(-50%, -50%) scale(${o})`},children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9672",className:"game-bg",src:"/assets/bg.png",alt:"","aria-hidden":"true"}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9679",className:"hud-top-stats","aria-label":n("Stats","数值统计"),children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9680",className:"hud-stat-card hud-stat-card--button",type:"button","aria-label":n("Open wallet","打开钱包"),onClick:Jt,children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9686",className:"hud-stat-icon",src:G.coin,alt:"",width:"40",height:"41"}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:9693",className:"hud-stat-value",children:e.jsx(oi,{"data-loc":"client/src/pages/Landing.tsx:9694",to:pn,duration:.5,children:sa(pn)})})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9700",className:"hud-stat-card hud-stat-card--fish","aria-label":n("Fish balance","鱼额"),children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9701",className:"hud-stat-icon",src:G.fish,alt:"",width:"46",height:"26"}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:9708",className:"hud-stat-value",children:e.jsx(oi,{"data-loc":"client/src/pages/Landing.tsx:9709",to:Qr,duration:.5,children:sa(Qr)})})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9716",className:`top-actions${t==="en"?" top-actions--en":""}`,"aria-label":n("Navigation","功能入口"),children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9717",className:"menu-item",type:"button","aria-label":n("Pond","鱼塘"),children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9718",className:"menu-icon",src:G.pond,alt:"",width:"62",height:"52",style:{top:12,width:62,height:52}}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9726",className:"menu-label","data-label":n("Pond","鱼塘"),children:n("Pond","鱼塘")})]}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9729",className:"menu-item",type:"button","aria-label":n("Fish Market","鱼市场"),children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9734",className:"menu-icon",src:G.market,alt:"",width:"56",height:"52",style:{top:16,width:56,height:52}}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9742",className:"menu-label","data-label":n("Fish Market","鱼市场"),children:n("Fish Market","鱼市场")})]}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9745",className:"menu-item",type:"button","aria-label":n("Inventory","图鉴"),onClick:()=>{Me(!1),ye.current=0,A(!0)},children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9755",className:"menu-icon",src:G.guide,alt:"",width:"48",height:"57",style:{top:16,width:48,height:57}}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9763",className:"menu-label","data-label":n("Inventory","图鉴"),children:n("Inventory","图鉴")})]}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9766",className:"menu-item",type:"button","aria-label":n("Wallet","钱包"),onClick:Jt,children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9772",className:"menu-icon",src:G.wallet,alt:"",width:"60",height:"55",style:{top:12,width:60,height:55}}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9780",className:"menu-label","data-label":n("Wallet","钱包"),children:n("Wallet","钱包")})]}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9783",className:"menu-item",type:"button","aria-label":n("Leaderboard","排行榜"),onClick:()=>_a(!0),children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9789",className:"menu-icon",src:G.leaderboard,alt:"",width:"66",height:"62",style:{top:6,width:66,height:62}}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9797",className:"menu-label","data-label":n("Leaderboard","排行榜"),children:n("Leaderboard","排行榜")})]}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9800",className:"menu-item",type:"button","aria-label":n("Settings","设置"),onClick:Zs,children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9806",className:"menu-icon",src:G.settings,alt:"",width:"52",height:"52",style:{top:12,width:52,height:52}}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9814",className:"menu-label","data-label":n("Settings","设置"),children:n("Settings","设置")})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9818",className:"hud-bottom-bar","aria-label":n("Primary action","主按钮"),children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9819",className:"hud-cast-stack",children:[vs&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:9821",className:"cast-auto-inline","aria-label":n("Auto cast settings","自动抛竿设置"),children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:9822",className:"cast-auto-button",type:"button","aria-label":n("Enable auto cast","开启自动抛竿"),onClick:Ls,children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9828",className:"cast-auto-title",children:n("Enable auto cast","开启自动抛竿")})})}),lr?e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9834",className:"hud-main-action hud-main-action--waiting",role:"group","aria-label":js,children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9835",className:"hud-main-action__tool",src:G.rod,alt:""}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:9840",className:"hud-main-action__waiting",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9841",className:"hud-main-action__waiting-title",children:ys}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9842",className:"hud-main-action__timer",children:ws})]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:9844",className:"hud-main-action__stop",type:"button","aria-label":b?n("Stop auto cast","停止自动抛竿"):n("Stop casting","停止抛竿"),onClick:b?Ss:Cs,children:n("Stop","停止")})]}):e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9854",className:"hud-main-action",type:"button","aria-label":_s,onClick:Ns,children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9855",className:"hud-main-action__tool",src:G.rod,alt:""}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9860",className:"hud-main-action__label","data-label":cr,children:cr})]})]}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9870",className:"hud-basket",type:"button","aria-label":n("Basket","鱼篓"),children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9871",className:"hud-basket__shell","aria-hidden":"true",children:e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9872",className:"hud-basket__icon",src:G.basket,alt:""})}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9878",className:"hud-badge",children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9878",children:"10"})})]})]})]}),ee&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:9884",className:"shop-modal-backdrop",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&mr()},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:9887",className:"shop-modal settings-modal",role:"dialog","aria-modal":"true","aria-label":n("Settings","设置"),children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:9888",className:"shop-modal__header",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9889",className:"settings-tabs",role:"tablist","aria-label":n("Settings categories","设置分类"),children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:9890",className:`settings-tab${K==="general"?" is-active":""}`,type:"button",role:"tab","aria-selected":K==="general",onClick:()=>yt("general"),children:n("General","通用设置")}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:9899",className:`settings-tab${K==="agent"?" is-active":""}`,type:"button",role:"tab","aria-selected":K==="agent",onClick:()=>yt("agent"),children:n("Agent settings","agent设置")})]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:9909",className:"shop-modal__close",type:"button","aria-label":n("Close settings","关闭设置"),onClick:mr,children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:9915",size:22,strokeWidth:3})})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:9919",className:`settings-content${K==="agent"?" settings-content--agent":""}`,children:K==="general"?e.jsxs(e.Fragment,{children:[e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:9922",className:"settings-section",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:9923",className:"settings-section__head",children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9924",className:"settings-section__title",children:[e.jsx(To,{"data-loc":"client/src/pages/Landing.tsx:9925",className:"settings-section__icon",size:18,strokeWidth:3}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9926",children:n("Language","语言设置")})]})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9930",className:"settings-language-options",role:"radiogroup","aria-label":n("Language","语言设置"),children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9931",className:`settings-language-option${t==="zh"?" is-active":""}`,type:"button",role:"radio","aria-checked":t==="zh",onClick:()=>a("zh"),children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9938",children:n("Chinese","中文")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9939",className:"settings-language-option__code",children:"ZH"})]}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9941",className:`settings-language-option${t==="en"?" is-active":""}`,type:"button",role:"radio","aria-checked":t==="en",onClick:()=>a("en"),children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9948",children:"English"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9949",className:"settings-language-option__code",children:"EN"})]})]})]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:9954",className:"settings-section",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9955",className:"settings-section__head",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9956",className:"settings-section__title",children:[e.jsx(jo,{"data-loc":"client/src/pages/Landing.tsx:9957",className:"settings-section__icon",size:18,strokeWidth:3}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9958",children:n("Profile","个人资料")})]}),ae?e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9973",className:"settings-action settings-action--quiet",type:"button",onClick:Qs,children:[e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:9974",size:14,strokeWidth:3}),n("Cancel","取消")]}):e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:9961",className:"settings-action settings-action--quiet",type:"button",onClick:()=>{ca(Be),_t(!0)},children:[e.jsx(na,{"data-loc":"client/src/pages/Landing.tsx:9969",size:14,strokeWidth:3}),n("Edit","编辑")]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9980",className:"settings-profile",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:9981",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:9982",className:`settings-avatar${ae?" is-editing":""}`,type:"button",disabled:!ae,onClick:()=>ae&&Pn.current?.click(),"aria-label":n("Upload avatar","上传头像"),children:jt?e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:9990",src:jt,alt:""}):e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:9992",children:Be.trim().charAt(0).toUpperCase()||"A"})}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:9995",ref:Pn,type:"file",accept:"image/*",hidden:!0,onChange:Js}),ae&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10002",className:"settings-avatar__hint",children:n("Click to upload · under 2 MB","点击上传 · 小于 2MB")})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10005",children:[e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10006",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10007",children:n("Nickname","昵称")}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10008",className:"settings-input",value:Be,disabled:!ae,placeholder:n("Enter nickname","请输入昵称"),onChange:r=>wt(r.target.value)})]}),ae&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10017",className:"settings-actions",children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10018",className:"settings-action settings-action--primary",type:"button",onClick:Xs,children:n("Save profile","保存资料")})})]})]})]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10027",className:"settings-section",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10028",className:"settings-section__head",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10029",className:"settings-section__title",children:[e.jsx(_o,{"data-loc":"client/src/pages/Landing.tsx:10030",className:"settings-section__icon",size:18,strokeWidth:3}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10031",children:n("Change email","修改邮箱")})]}),Ce?e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10039",className:"settings-action settings-action--quiet",type:"button",onClick:eo,children:[e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:10040",size:14,strokeWidth:3}),n("Cancel","取消")]}):e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10034",className:"settings-action settings-action--quiet",type:"button",onClick:()=>Lt(!0),children:[e.jsx(na,{"data-loc":"client/src/pages/Landing.tsx:10035",size:14,strokeWidth:3}),n("Edit","编辑")]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10046",className:"settings-grid",children:[e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10047",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10048",children:n("Current email","当前邮箱")}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10049",className:"settings-input",value:An,disabled:!0,readOnly:!0})]}),Ce&&e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10053",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10054",children:n("Verification code","验证码")}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10055",className:"settings-code-field",children:[e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10056",className:"settings-input",value:Tn,placeholder:n("Enter verification code","请输入验证码"),onChange:r=>St(r.target.value)}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10062",className:"settings-action settings-action--quiet settings-code-send",type:"button",onClick:()=>{Nt(!0),L(n("Code sent","验证码已发送"),n("Verification code sent to your current email.","验证码已发送至当前邮箱。"))},children:Oi?n("Resend","重新发送"):n("Send","发送")})]})]}),Ce&&e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10077",className:"settings-field settings-field--full",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10078",children:n("New email","新邮箱")}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10079",className:"settings-input",type:"email",value:Ct,placeholder:n("Enter new email address","请输入新邮箱地址"),onChange:r=>Ot(r.target.value)}),Ct&&!ci(Ct)&&e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10087",className:"settings-helper",children:n("Enter a valid email address","请输入有效的邮箱地址")})]})]}),Ce&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10094",className:"settings-actions",children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10095",className:"settings-action settings-action--primary",type:"button",onClick:to,children:n("Save email","保存邮箱")})})]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10102",className:"settings-section",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10103",className:"settings-section__head",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10104",className:"settings-section__title",children:[e.jsx(Lr,{"data-loc":"client/src/pages/Landing.tsx:10105",className:"settings-section__icon",size:18,strokeWidth:3}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10106",children:n("Change password","修改密码")})]}),$n?e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10114",className:"settings-action settings-action--quiet",type:"button",onClick:ao,children:[e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:10115",size:14,strokeWidth:3}),n("Cancel","取消")]}):e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10109",className:"settings-action settings-action--quiet",type:"button",onClick:()=>kt(!0),children:[e.jsx(na,{"data-loc":"client/src/pages/Landing.tsx:10110",size:14,strokeWidth:3}),n("Edit","编辑")]})]}),$n?e.jsxs(e.Fragment,{children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10123",className:"settings-grid",children:[e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10124",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10125",children:n("Email","邮箱")}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10126",className:"settings-input",value:An,disabled:!0,readOnly:!0})]}),e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10128",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10129",children:n("Verification code","验证码")}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10130",className:"settings-code-field",children:[e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10131",className:"settings-input",value:En,placeholder:n("Enter verification code","请输入验证码"),onChange:r=>Pt(r.target.value)}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10137",className:"settings-action settings-action--quiet settings-code-send",type:"button",onClick:()=>{At(!0),L(n("Code sent","验证码已发送"),n("Verification code sent to your email.","验证码已发送至邮箱。"))},children:Pi?n("Resend","重新发送"):n("Send","发送")})]})]}),e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10149",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10150",children:n("New password","新密码")}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10151",className:"settings-input",type:"password",value:pa,placeholder:n("At least 8 characters","至少 8 位"),onChange:r=>zt(r.target.value)})]}),e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10159",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10160",children:n("Confirm password","确认密码")}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10161",className:"settings-input",type:"password",value:Mn,placeholder:n("Re-enter new password","再次输入新密码"),onChange:r=>$t(r.target.value)})]})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10170",className:"settings-actions",children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10171",className:"settings-action settings-action--primary",type:"button",onClick:no,children:n("Save password","保存密码")})})]}):e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10177",className:"settings-helper",children:n("Verify your identity with an email code before setting a new login password.","通过邮箱验证码验证身份后，可设置新的登录密码。")})]})]}):e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10182",className:"settings-agent-panel",role:"tabpanel","aria-label":n("Agent settings","agent设置"),children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10183",className:"settings-agent-main",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10184",className:"settings-agent-main__topbar",children:[e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10185",className:"settings-agent-intro-copy",children:n("Choose the AI you want to connect. After configuration, you can start using it.","选择您想要接入的 AI，完成配置后即可开始使用。")}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10191",className:"sac-auth-preview-trigger",type:"button",onClick:()=>ba(!0),children:["🔍 ",n("Authorization popup preview","授权弹窗示意")]})]}),Cn==="web"?null:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10198",className:"settings-agent-install","aria-label":n("Install client plugin","安装客户端插件"),children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10199",className:"settings-agent-install__intro",children:[e.jsx("h3",{"data-loc":"client/src/pages/Landing.tsx:10200",className:"settings-agent-install__title",children:n("Install","安装")}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10201",className:"settings-agent-install__subtitle",children:n("Select your IDE and follow the instructions below.","选择您的 IDE，并按下方说明完成安装。")})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10206",className:"settings-agent-install-tabs",role:"tablist","aria-label":n("Select IDE","选择 IDE"),children:gn.map(r=>e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10208",className:`settings-agent-install-tab${la===r.id?" is-active":""}`,type:"button",role:"tab","aria-selected":la===r.id,onClick:()=>Ni(r.id),children:r.label},r.id))}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10221",className:"settings-agent-install-card",children:[e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10222",className:"settings-agent-install-step",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10223",className:"settings-agent-install-step__num",children:"1"}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10224",className:"settings-agent-install-step__body",children:[e.jsx("h3",{"data-loc":"client/src/pages/Landing.tsx:10225",children:n("Run Installation Command","运行安装命令")}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10226",children:n(`Run this command in your terminal to add Quandora MCP to ${ge.label}:`,`在终端中运行以下命令，将 Quandora MCP 添加到 ${ge.label}：`)}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10232",className:"settings-agent-install-command",children:[e.jsx("code",{"data-loc":"client/src/pages/Landing.tsx:10233",children:ar}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10234",className:"settings-agent-install-copy",type:"button","aria-label":n("Copy installation command","复制安装命令"),onClick:()=>ea(ar,n("Command copied","命令已复制"),n("Run it in your terminal.","请在终端中运行。")),children:e.jsx(Ya,{"data-loc":"client/src/pages/Landing.tsx:10240",size:20,strokeWidth:2.4})})]})]})]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10246",className:"settings-agent-install-step",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10247",className:"settings-agent-install-step__num",children:"2"}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10248",className:"settings-agent-install-step__body",children:[e.jsx("h3",{"data-loc":"client/src/pages/Landing.tsx:10249",children:n("Verify Installation","验证安装")}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10250",children:n(`After running the command, Quandora MCP will be available in ${ge.label}.`,`运行命令后，Quandora MCP 将可在 ${ge.label} 中使用。`)}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10256",className:"settings-agent-install-checks",children:[e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10257",className:"settings-agent-install-check",children:[e.jsx(Ga,{"data-loc":"client/src/pages/Landing.tsx:10258",size:20,strokeWidth:2.6}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10259",children:n("The MCP server will be automatically configured","MCP 服务将自动完成配置")})]}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10261",className:"settings-agent-install-check",children:[e.jsx(Ga,{"data-loc":"client/src/pages/Landing.tsx:10262",size:20,strokeWidth:2.6}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10263",children:n(`You can start using Quandora commands in ${ge.label} immediately`,`您可以立即在 ${ge.label} 中使用 Quandora 命令`)})]}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10265",className:"settings-agent-install-check",children:[e.jsx(qa,{"data-loc":"client/src/pages/Landing.tsx:10266",size:20,strokeWidth:2.4}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10267",children:[n("To verify, check your MCP servers by running:","如需验证，可运行命令检查 MCP 服务：")," ",e.jsx("code",{"data-loc":"client/src/pages/Landing.tsx:10269",children:ge.verifyCommand})]})]})]})]})]})]})]}),Cn==="web"?e.jsxs(e.Fragment,{children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10280",className:"settings-agent-provider-list","aria-label":n("Connectable providers","可连接服务"),children:ti.map(r=>{const c=$i.has(r.id),d=Dn===r.id;return e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10286",className:`settings-agent-provider-row${c?" is-connected":" is-disconnected"}`,children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10287",className:"settings-agent-provider-head",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10288",className:`settings-agent-provider-mark settings-agent-provider-mark--${r.id}`,"aria-hidden":"true",children:"icon"in r&&r.icon==="codex"?e.jsx(Se.Avatar,{"data-loc":"client/src/pages/Landing.tsx:10290",className:"settings-agent-provider-icon",size:48}):"icon"in r&&r.icon==="claude"?e.jsx(he.Avatar,{"data-loc":"client/src/pages/Landing.tsx:10292",className:"settings-agent-provider-icon",size:48}):"icon"in r&&r.icon==="openclaw"?e.jsx(Ne.Avatar,{"data-loc":"client/src/pages/Landing.tsx:10294",className:"settings-agent-provider-icon",size:48}):r.mark}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10299",className:"settings-agent-provider-name",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10300",children:r.name}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10301",className:`settings-agent-provider-badge${c?" is-connected":" is-disconnected"}`,children:c?`${n("Connected","已连接")} · ${Ti[r.id]??n("Authorization successful","授权成功")}`:n("Not authorized · Waiting for connection","尚未授权 · 等待连接")})]})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10308",className:"settings-agent-provider-actions",children:c?e.jsxs(e.Fragment,{children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10311",className:`settings-agent-provider-action-button settings-agent-provider-action-button--compact${d?" is-loading":""}`,type:"button","aria-label":d?n("Testing status","状态测试中"):n("Status test","状态测试"),disabled:d,onClick:()=>Bs(r.id),children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10318",children:d?n("Testing","检查中"):n("Check","检查")})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10320",className:"settings-agent-provider-action-button settings-agent-provider-action-button--compact",type:"button","aria-label":n("Disconnect","断连"),onClick:()=>Fs(r.id),children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10326",children:n("Disconnect","断开")})})]}):e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10330",className:"settings-agent-provider-action-button settings-agent-provider-action-button--primary",type:"button",onClick:()=>Is(r.id),children:[e.jsx(Lo,{"data-loc":"client/src/pages/Landing.tsx:10335",size:18,strokeWidth:2.6,"aria-hidden":"true"}),n("Connect","连接")]})})]},r.id)})}),Ai&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10346",className:"settings-agent-connect-overlay",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&oe(!1)},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10353",className:"sac-modal",role:"dialog","aria-modal":"true","aria-label":n("Connect agent","连接 Agent"),children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:10354",className:"sac-header",children:[e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10355",className:"sac-title",children:[n("Connect","连接")," ",te(R)]}),(()=>{const r=R==="claude-code"||R==="openclaw",c=r?[[2,n("Configure","连接配置")],[3,n("Done","完成")]]:[[1,n("Usage","使用方式")],[2,n("Configure","连接配置")],[3,n("Done","完成")]];return e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10362",className:"sac-steps","aria-label":n("Steps","步骤"),children:c.map(([d,u])=>e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10364",className:"sac-sitem",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10365",className:`sac-circle${le===d?" sac-circle--active":le>d?" sac-circle--done":""}`,children:le>d?"✓":r?d-1:d}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10368",className:`sac-slabel${le===d?" sac-slabel--active":le>d?" sac-slabel--done":""}`,children:u})]},d))})})(),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10374",className:"sac-close",type:"button","aria-label":n("Close","关闭"),onClick:()=>oe(!1),children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:10375",size:16,strokeWidth:3})})]}),le===1&&e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10381",className:"sac-body",children:[e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10382",className:"sac-sub",children:n("Choose where you want to use this Agent.","请选择您希望在哪个环境中使用该 Agent。")}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10383",className:"sac-mode-grid",children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10384",type:"button",className:`sac-mode-card${Pe==="web"?" sac-mode-card--sel":""}`,onClick:()=>xa("web"),children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10389",className:`sac-radio${Pe==="web"?" sac-radio--checked":""}`}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10390",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10391",className:"sac-mode-title",children:["🌐 ",n("Use on web","在网页上使用")]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10392",className:"sac-mode-desc",children:n("Get an auth code or API Key to connect quickly.","获取授权码或 API Key 即可快速接入。")})]})]}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10395",type:"button",className:`sac-mode-card${Pe==="agent"?" sac-mode-card--sel":""}`,onClick:()=>xa("agent"),children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10400",className:`sac-radio${Pe==="agent"?" sac-radio--checked":""}`}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10401",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10402",className:"sac-mode-title",children:["🖥️ ",n("Use on local Agent","在自己的 Agent 上用")]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10403",className:"sac-mode-desc",children:n("Install the plugin on your local Agent client.","在本地 Agent 客户端安装插件完成配置。")})]})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10407",className:"sac-nav",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10408"}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10409",className:"sac-btn-next",type:"button",onClick:()=>Ve(2),children:[n("Next","下一步")," →"]})]})]}),le===2&&e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10416",className:"sac-body",children:[Pe==="web"?e.jsxs(e.Fragment,{children:[e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10419",className:"sac-section-label",children:n("Web connection config","连接配置（网页端）")}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10421",className:`sac-opt-card${Ae==="auth"?" sac-opt-card--sel":""}`,onClick:()=>ua("auth"),children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10422",className:"sac-opt-head",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10423",className:`sac-radio${Ae==="auth"?" sac-radio--checked":""}`}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10424",className:"sac-opt-title",children:["🔑 ",n("Authorization code","授权码接入")]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10425",className:"sac-badge",children:n("Recommended","推荐")})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10427",className:"sac-opt-desc",children:n("Quick verification with official auth code, no API config needed.","使用官方授权码快速验证，无需配置 API。")}),Ae==="auth"&&e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10429",className:"sac-opt-detail",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10430",className:"sac-note",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10431",children:n("Choose QR authorization, or copy the code and continue on the login page.","请选择扫码授权，或复制授权码后在登录页继续。")}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10432",className:"settings-agent-refresh-icon",type:"button",onClick:Ks,"aria-label":n("Refresh","刷新"),children:e.jsx(qa,{"data-loc":"client/src/pages/Landing.tsx:10433",size:14,strokeWidth:3})})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10436",className:"settings-agent-auth-options",children:[e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10437",className:"settings-agent-auth-option settings-agent-auth-option--scan",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10438",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10439",className:"settings-agent-auth-option__head",children:e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10439",children:n("Scan QR code","扫码授权")})}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10440",children:n("Use your phone to scan and complete authorization.","请使用手机扫码完成授权。")})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10442",className:"settings-agent-qr","aria-label":n("Authorization QR code","授权二维码"),children:e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:10443",src:"/assets/codex-auth-qr.svg",alt:""})})]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10446",className:"settings-agent-auth-option settings-agent-auth-option--code",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10447",className:"settings-agent-code-copy",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10448",children:n("Authorization code (valid for 10 minutes)","授权码（10分钟内有效期）")}),e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10449",children:Fn})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10451",className:"settings-agent-auth-actions",children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10452",className:"settings-action settings-action--primary",type:"button",onClick:Us,children:n("Copy and go","复制并前往")})})]})]})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10462",className:`sac-opt-card${Ae==="api"?" sac-opt-card--sel":""}`,onClick:()=>ua("api"),children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10463",className:"sac-opt-head",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10464",className:`sac-radio${Ae==="api"?" sac-radio--checked":""}`}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10465",className:"sac-opt-title",children:"🔌 API Key"})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10467",className:"sac-opt-desc",children:n("Call directly with API Key, ideal for developers.","使用 API Key 直接调用，适合开发者。")}),Ae==="api"&&e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10469",className:"sac-opt-detail",onClick:r=>r.stopPropagation(),children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10470",className:"settings-agent-form settings-agent-form--byok",children:e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10471",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10472",className:"settings-field__head",children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10472",children:"OpenAI API Key"})}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10473",className:"settings-input",type:"password",value:Rn,placeholder:"sk-...",disabled:Ue==="testing",onChange:r=>{Di(r.target.value),Ke("idle"),Ye("")}}),Bn&&e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10486",className:`settings-agent-test-message${Ue==="valid"?" is-success":" is-error"}`,children:Bn}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10490",className:"settings-api-key-links",children:[e.jsxs("a",{"data-loc":"client/src/pages/Landing.tsx:10491",className:"settings-api-key-link",href:"https://platform.openai.com/api-keys",target:"_blank",rel:"noreferrer",children:["Get API Key from OpenAI ",e.jsx(Za,{"data-loc":"client/src/pages/Landing.tsx:10492",size:13,strokeWidth:3})]}),e.jsxs("a",{"data-loc":"client/src/pages/Landing.tsx:10494",className:"settings-api-key-link",href:"https://openrouter.ai/settings/keys",target:"_blank",rel:"noreferrer",children:["Get API Key from OpenRouter ",e.jsx(Za,{"data-loc":"client/src/pages/Landing.tsx:10495",size:13,strokeWidth:3})]})]})]})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10500",className:"sac-nav",style:{marginTop:"12px"},children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10501"}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10502",className:"sac-btn-next",type:"button",onClick:()=>{Ue!=="valid"?Vs():(We(r=>new Set(r).add(R)),Ve(3))},children:[Ue!=="valid"?n("Verify & Connect","验证并连接"):n("Complete connection","完成连接")," ✓"]})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10525",className:"sac-section-label",children:n("Plugin installation config","连接配置（插件安装）")}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10526",className:`sac-opt-card${ze==="auto"?" sac-opt-card--sel":""}`,onClick:()=>ha("auto"),children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10527",className:"sac-opt-head",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10528",className:`sac-radio${ze==="auto"?" sac-radio--checked":""}`}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10529",className:"sac-opt-title",children:["⚡ ",n("Auto install","自动安装")]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10530",className:"sac-badge",children:n("One-click","一键完成")})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10532",className:"sac-opt-desc",children:n("Enter the following command in the Codex chat to install the plugin.","在 Codex 的聊天界面中输入以下命令安装插件")}),ze==="auto"&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10534",className:"sac-opt-detail",onClick:r=>r.stopPropagation(),children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10535",className:"sac-code-box",children:[e.jsx("code",{"data-loc":"client/src/pages/Landing.tsx:10536",children:"npx @codex/buddy install --token=YOUR_TOKEN"}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10537",className:"sac-btn-sm",type:"button",onClick:()=>navigator.clipboard.writeText("npx @codex/buddy install --token=YOUR_TOKEN").catch(()=>{}),children:n("Copy","复制")})]})})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10542",className:`sac-opt-card${ze==="manual"?" sac-opt-card--sel":""}`,onClick:()=>ha("manual"),children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10543",className:"sac-opt-head",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10544",className:`sac-radio${ze==="manual"?" sac-radio--checked":""}`}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10545",className:"sac-opt-title",children:["📂 ",n("Manual install","手动安装")]})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10547",className:"sac-opt-desc",children:n("Follow the official guide to configure manually.","按官方文档引导，手动配置插件路径和参数。")}),ze==="manual"&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10549",className:"sac-opt-detail sac-manual-guide",onClick:r=>r.stopPropagation(),children:e.jsxs("ol",{"data-loc":"client/src/pages/Landing.tsx:10550",className:"sac-guide-steps",children:[e.jsxs("li",{"data-loc":"client/src/pages/Landing.tsx:10551",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10552",className:"sac-guide-step-title",children:n('In Codex, click "Plugins → OpenAI Bundled → Add more"','在Codex应用程序中点击"插件–OpenAI Bundled–添加更多"')}),e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:10553",className:"sac-guide-img",src:"/assets/manual-step1.png",alt:"step 1"})]}),e.jsxs("li",{"data-loc":"client/src/pages/Landing.tsx:10555",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10556",className:"sac-guide-step-title",children:n("Fill in the following info","填入以下信息")}),e.jsxs("ul",{"data-loc":"client/src/pages/Landing.tsx:10557",className:"sac-guide-fields",children:[e.jsxs("li",{"data-loc":"client/src/pages/Landing.tsx:10558",children:[n("Source","来源"),"：",e.jsx("code",{"data-loc":"client/src/pages/Landing.tsx:10558",children:"varsity-tech-product/factor-mining-demo"})]}),e.jsxs("li",{"data-loc":"client/src/pages/Landing.tsx:10559",children:[n("Git ref","Git 引用"),"：",e.jsx("code",{"data-loc":"client/src/pages/Landing.tsx:10559",children:"main"})]})]}),e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:10561",className:"sac-guide-img",src:"/assets/manual-step2.png",alt:"step 2"})]}),e.jsxs("li",{"data-loc":"client/src/pages/Landing.tsx:10563",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10564",className:"sac-guide-step-title",children:n("Start a new chat session","开始一个新的聊天会话")}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10565",className:"sac-guide-hint",children:"Use the Factor Mining Demo plugin. Verify Factor Mining status, then show me the Factor Mining public task list…"}),e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:10566",className:"sac-guide-img",src:"/assets/manual-step3.png",alt:"step 3"})]}),e.jsx("li",{"data-loc":"client/src/pages/Landing.tsx:10568",children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10569",className:"sac-guide-step-title",children:n("Log in to Quandora and authorize","登录Quandora，并同意授权")})})]})})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10577",className:"sac-nav",children:[!(R==="claude-code"||R==="openclaw")&&e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10579",className:"sac-btn-prev",type:"button",onClick:()=>Ve(1),children:["← ",n("Back","上一步")]}),Pe==="agent"&&e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10582",className:"sac-btn-next",type:"button",onClick:()=>{We(r=>new Set(r).add(R)),Ve(3)},children:n("Verify","验证")})]})]}),le===3&&e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10599",className:"sac-body sac-success",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10600",className:"sac-success-icon",children:"🎉"}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10601",className:"sac-success-title",children:n("Connected!","连接成功！")}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10602",className:"sac-success-msg",children:[te(R)," ",n("has been connected. You can start using it now.","已成功接入，可以开始使用了。")]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10603",className:"sac-buddy-card",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10604",className:"sac-buddy-card__icon",children:"🐾"}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10605",className:"sac-buddy-card__body",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10606",className:"sac-buddy-card__title",children:n("Download Buddy","下载 Buddy")}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10607",className:"sac-buddy-card__desc",children:n("Desktop companion that syncs your fishing status in real time.","桌面伴侣，实时同步主界面的钓鱼状态。")})]}),e.jsx("a",{"data-loc":"client/src/pages/Landing.tsx:10609",href:"#",className:"sac-buddy-card__btn",onClick:r=>r.preventDefault(),children:n("Download","下载")})]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10613",className:"sac-btn-next",type:"button",onClick:()=>oe(!1),children:n("Done","完成")})]})]})}),Tt&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10621",className:"settings-agent-connect-overlay",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&Oe(null)},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10628",className:"settings-agent-confirm-modal",role:"dialog","aria-modal":"true","aria-label":n("Confirm disconnection","确认断连"),children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:10629",className:"settings-agent-connect-modal__header",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10630",className:"settings-agent-card__title",children:e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10631",children:n("Disconnect agent","确认断连")})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10633",className:"settings-agent-connect-modal__close",type:"button","aria-label":n("Close confirmation dialog","关闭确认弹窗"),onClick:()=>Oe(null),children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:10639",size:18,strokeWidth:3})})]}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10642",className:"settings-agent-confirm-copy",children:n(`Disconnect ${te(Tt)}? You can reconnect it later.`,`确认断开 ${te(Tt)}？稍后可重新连接。`)}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10648",className:"settings-agent-confirm-actions",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10649",className:"settings-action settings-action--quiet",type:"button",onClick:()=>Oe(null),children:n("Cancel","取消")}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10656",className:"settings-action settings-action--danger",type:"button",onClick:()=>Rs(Tt),children:n("Confirm disconnect","确认断连")})]})]})}),Ri&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10668",className:"settings-agent-connect-overlay",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&ba(!1)},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10669",className:"sac-auth-preview",role:"dialog","aria-modal":"true",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10670",className:"sac-auth-preview__icon",children:e.jsx(he.Avatar,{"data-loc":"client/src/pages/Landing.tsx:10671",size:64})}),e.jsxs("p",{"data-loc":"client/src/pages/Landing.tsx:10673",className:"sac-auth-preview__heading",children:[e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10674",children:"Claude Code"})," ",n("would like to access your account and be able to:","希望访问您的账号并能够：")]}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10676",className:"sac-auth-preview__body",children:n('Click "Allow access" to let Claude Code handle writing, uploading, and backtesting plugin.py, then fetch factor info and summarize the results.',"点击「允许访问」，同意让 Claude Code 来处理 plugin.py 的编写、上传、回测操作，然后获取因子信息，并总结结果")}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10682",className:"sac-auth-preview__allow",type:"button",onClick:()=>ba(!1),children:n("Allow access","允许访问")})]})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10688",className:"sac-buddy-banner",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10689",className:"sac-buddy-banner__icon",children:"🐾"}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10690",className:"sac-buddy-banner__body",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10691",className:"sac-buddy-banner__title",children:n("Download Buddy","下载 Buddy")}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10692",className:"sac-buddy-banner__desc",children:n("Desktop companion that syncs your fishing status in real time.","桌面伴侣，实时同步主界面的钓鱼状态。")})]}),e.jsx("a",{"data-loc":"client/src/pages/Landing.tsx:10694",href:"#",className:"sac-buddy-banner__btn",onClick:r=>r.preventDefault(),children:n("Download","下载")})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("article",{"data-loc":"client/src/pages/Landing.tsx:10699",className:"settings-agent-card settings-agent-api-panel",children:Et.length===0?e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10701",className:"settings-agent-api-empty",children:[e.jsx(Lr,{"data-loc":"client/src/pages/Landing.tsx:10702",size:30,strokeWidth:2.5}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10703",children:n("No API keys yet","暂无 API 密钥")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10704",children:n("Create your first API key to connect your AI agent.","创建首个 API 密钥以连接你的 AI Agent。")})]}):e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10707",className:"settings-agent-api-list",children:Et.map(r=>{const c=Ii.has(r.id),d=r.skillVersion!==W,u=c?r.apiKey:`${r.apiKey.slice(0,6)}${"*".repeat(16)}...`;return e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10714",className:"settings-agent-api-item",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10715",className:"settings-agent-api-row",children:[Bi===r.id?e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10717",className:"settings-agent-api-name-edit",children:[e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10718",className:"settings-input",value:ma,autoFocus:!0,onChange:p=>fa(p.target.value),onKeyDown:p=>{p.key==="Enter"&&br(r.id),p.key==="Escape"&&Dt(null)}}),e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10728",className:"settings-action settings-action--primary",type:"button",onClick:()=>br(r.id),children:[e.jsx(Ga,{"data-loc":"client/src/pages/Landing.tsx:10729",size:13,strokeWidth:3}),n("Save","保存")]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10732",className:"settings-action settings-action--quiet",type:"button",onClick:()=>Dt(null),children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:10733",size:13,strokeWidth:3})})]}):e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10737",className:"settings-agent-api-name",children:[e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10738",children:r.name}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10739",className:"settings-agent-icon-button",type:"button","aria-label":n(`Edit ${r.name}`,`编辑 ${r.name}`),onClick:()=>{Dt(r.id),fa(r.name)},children:e.jsx(na,{"data-loc":"client/src/pages/Landing.tsx:10748",size:13,strokeWidth:3})})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10753",className:"settings-agent-api-actions",children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10754",className:`settings-action ${d?"settings-action--quiet":"settings-action--primary"}`,type:"button",onClick:()=>Hs(r),children:[e.jsx(fo,{"data-loc":"client/src/pages/Landing.tsx:10755",size:14,strokeWidth:3}),d?n("Copy latest prompt","复制最新版提示词"):n("Copy prompt","复制提示词")]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10758",className:"settings-agent-api-menu-anchor",ref:Ge===r.id?ya:void 0,children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10759",className:"settings-agent-icon-button",type:"button","aria-label":n("More options","更多操作"),onClick:()=>va(Ge===r.id?null:r.id),children:e.jsx(Ha,{"data-loc":"client/src/pages/Landing.tsx:10765",size:16,strokeWidth:3})}),Ge===r.id&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10768",className:"settings-agent-api-menu",children:e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10769",type:"button",onClick:()=>{va(null),qe(r.id)},children:[e.jsx(ko,{"data-loc":"client/src/pages/Landing.tsx:10776",size:13,strokeWidth:3}),n("Delete API Key","删除 API 密钥")]})})]})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10785",className:"settings-agent-api-keyline",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10786",className:"settings-agent-api-label",children:n("API Key","API 密钥")}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10787",className:"settings-agent-api-secret",children:[e.jsx("code",{"data-loc":"client/src/pages/Landing.tsx:10788",children:u}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10789",className:"settings-agent-icon-button",type:"button","aria-label":c?n("Hide API Key","隐藏 API 密钥"):n("Show API Key","显示 API 密钥"),onClick:()=>Ys(r.id),children:c?e.jsx(So,{"data-loc":"client/src/pages/Landing.tsx:10790",size:13,strokeWidth:3}):e.jsx(No,{"data-loc":"client/src/pages/Landing.tsx:10790",size:13,strokeWidth:3})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10792",className:"settings-agent-icon-button",type:"button","aria-label":n("Copy API Key","复制 API 密钥"),onClick:()=>ea(r.apiKey,n("API key copied","API 密钥已复制"),n("Store it securely in your agent environment.","请在 Agent 环境中安全保存。")),children:e.jsx(Ya,{"data-loc":"client/src/pages/Landing.tsx:10793",size:13,strokeWidth:3})})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10798",className:"settings-agent-api-meta",children:[e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10799",children:[n("Skill","Skill")," ",e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10799",children:r.skillVersion})]}),d&&e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10800",className:"settings-agent-api-update",children:n(`Update available: ${W}`,`可更新至：${W}`)}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10801",children:[n("Updated","更新于")," ",r.updatedAt]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10802",className:"settings-agent-icon-button",type:"button","aria-label":n("Check for skill updates","检查 Skill 更新"),onClick:()=>Gs(r.id),children:e.jsx(qa,{"data-loc":"client/src/pages/Landing.tsx:10803",size:13,strokeWidth:3})})]})]},r.id)})})}),wa&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10815",className:"settings-agent-connect-overlay",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&qe(null)},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10822",className:"settings-agent-confirm-modal",role:"dialog","aria-modal":"true","aria-label":n("Delete API Key","删除 API 密钥"),children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:10823",className:"settings-agent-connect-modal__header",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10824",className:"settings-agent-card__title",children:e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10825",children:n("Delete API Key","删除 API 密钥")})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10827",className:"settings-agent-connect-modal__close",type:"button","aria-label":n("Close confirmation dialog","关闭确认弹窗"),onClick:()=>qe(null),children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:10828",size:18,strokeWidth:3})})]}),e.jsxs("p",{"data-loc":"client/src/pages/Landing.tsx:10831",className:"settings-agent-confirm-copy",children:[n("Are you sure you want to delete","确认删除")," ",e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10833",children:Et.find(r=>r.id===wa)?.name}),"?"," ",n("This action cannot be undone and any agents using this key will lose access.","该操作不可撤销，使用该密钥的 Agent 将失去访问权限。")]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10837",className:"settings-agent-confirm-actions",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10838",className:"settings-action settings-action--quiet",type:"button",onClick:()=>qe(null),children:n("Cancel","取消")}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10841",className:"settings-action settings-action--danger",type:"button",onClick:()=>qs(wa),children:n("Delete","删除")})]})]})}),Wi&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10850",className:"settings-agent-connect-overlay",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&(be===2?Wa():It(!1))},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10860",className:"settings-agent-confirm-modal settings-agent-api-create-modal",role:"dialog","aria-modal":"true","aria-label":be===1?n("Create New API Key","创建新的 API 密钥"):n("Your API Key is Ready","API 密钥已准备就绪"),children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:10861",className:"settings-agent-connect-modal__header",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10862",className:"settings-agent-card__title",children:e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:10863",children:be===1?n("Create New API Key","创建新的 API 密钥"):n("Your API Key is Ready","API 密钥已准备就绪")})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10865",className:"settings-agent-connect-modal__close",type:"button","aria-label":n("Close API key dialog","关闭 API 密钥弹窗"),onClick:()=>{be===2?Wa():It(!1)},children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:10874",size:18,strokeWidth:3})})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10878",className:"settings-agent-api-steps","aria-hidden":"true",children:[e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10879",className:`settings-agent-api-step${be>=1?" is-active":""}`,children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10879",children:"1"}),n("Generate API","生成 API")]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10880",className:"settings-agent-api-step-line"}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:10881",className:`settings-agent-api-step${be>=2?" is-active":""}`,children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10881",children:"2"}),n("Paste to Agent","粘贴到 Agent")]})]}),be===1?e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10885",className:"settings-agent-form",children:[e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10886",className:"settings-agent-note",children:n("Give your API key a name to identify it later.","为 API 密钥命名，便于后续识别。")}),e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10887",className:"settings-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10888",children:n("API Name","API 名称")}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10889",className:"settings-input",value:Ft,autoFocus:!0,placeholder:n("e.g., My Trading Bot, Research Agent...","例如：我的交易机器人、研究 Agent..."),onChange:r=>Vn(r.target.value),onKeyDown:r=>{r.key==="Enter"&&hr()}})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10900",className:"settings-agent-actions",children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10901",className:"settings-action settings-action--primary",type:"button",onClick:hr,children:n("Create API Key","创建 API 密钥")})})]}):e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10907",className:"settings-agent-form",children:[e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10908",className:"settings-agent-note",children:n("Copy the prompt below and paste it into your AI agent (ChatGPT / Claude / DeepSeek) to start using Quandora Trading.","复制下方提示词并粘贴到你的 AI Agent（ChatGPT / Claude / DeepSeek）即可开始使用 Quandora Trading。")}),e.jsx("pre",{"data-loc":"client/src/pages/Landing.tsx:10909",className:"settings-agent-prompt-preview",children:xn(Rt,W)}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10910",className:"settings-agent-actions",children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:10911",className:"settings-action settings-action--primary",type:"button",onClick:()=>ea(xn(Rt,W),n("Prompt copied","提示词已复制"),n("Paste it into your AI agent.","请粘贴到你的 AI Agent 中。")),children:[e.jsx(Ya,{"data-loc":"client/src/pages/Landing.tsx:10916",size:14,strokeWidth:3}),n("Copy Prompt","复制提示词")]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10919",className:"settings-action settings-action--quiet",type:"button",onClick:Wa,children:n("Done","完成")})]})]})]})})]})]})})})]})}),k&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10939",className:"shop-modal-backdrop",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&dr()},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10942",className:"auto-cast-modal",role:"dialog","aria-modal":"true","aria-label":n("Auto cast settings","自动抛竿设置"),children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10943",className:"auto-cast-modal__body",children:[e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:10944",className:"auto-cast-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:10945",children:n("Total casts this run","本次抛竿总次数")}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10946",className:"cast-count-control cast-count-control--modal",role:"group","aria-label":n("Set total auto casts for this run","设置本次自动抛竿总次数"),children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10947",className:"cast-count-stepper",type:"button","aria-label":n("Decrease auto cast count","减少自动抛竿次数"),disabled:h<=oa,onClick:()=>Fa(h-1),children:"-"}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:10956",className:"cast-count-input",type:"number",min:oa,max:yn,inputMode:"numeric",value:h,"aria-label":n("Total auto casts this run","本次自动抛竿总次数"),onChange:r=>Fa(Number(r.target.value))}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10966",className:"cast-count-stepper",type:"button","aria-label":n("Increase auto cast count","增加自动抛竿次数"),disabled:h>=yn,onClick:()=>Fa(h+1),children:"+"})]})]}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:10977",className:"auto-cast-modal__hint",children:n("Maximum 100 casts","最多 100 次")})]}),e.jsxs("footer",{"data-loc":"client/src/pages/Landing.tsx:10980",className:"auto-cast-modal__actions",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10981",className:"auto-cast-modal__button auto-cast-modal__button--ghost",type:"button",onClick:dr,children:n("Cancel","取消")}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:10984",className:"auto-cast-modal__button auto-cast-modal__button--primary",type:"button",onClick:ks,children:n("Start","开始")})]})]})}),D&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:10993",className:"shop-modal-backdrop",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&ur()},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:10996",className:"shop-modal wallet-modal",role:"dialog","aria-modal":"true","aria-labelledby":"wallet-modal-title",children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:10997",className:"shop-modal__header",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:10998",className:"wallet-modal__heading",children:[F&&e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11000",className:"wallet-modal__back",type:"button","aria-label":n("Back to wallet","返回钱包"),onClick:Jt,children:e.jsx(Qa,{"data-loc":"client/src/pages/Landing.tsx:11006",size:20,strokeWidth:3})}),e.jsx("h2",{"data-loc":"client/src/pages/Landing.tsx:11009",className:"shop-modal__title",id:"wallet-modal-title",children:F?n("Withdraw","提现"):n("Wallet","钱包")})]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11011",className:"shop-modal__close",type:"button","aria-label":F?n("Close withdraw","关闭提现"):n("Close wallet","关闭钱包"),onClick:ur,children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:11017",size:22,strokeWidth:3})})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11021",className:"wallet-content",children:e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11022",className:"wallet-panel",children:F?e.jsx("section",{"data-loc":"client/src/pages/Landing.tsx:11024",className:"wallet-withdraw wallet-withdraw--modal",children:Ua?e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11026",className:"wallet-withdraw__steps",children:[e.jsx("section",{"data-loc":"client/src/pages/Landing.tsx:11027",className:"wallet-step",children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11028",className:"wallet-step__body",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11029",className:"wallet-step__head",children:e.jsx("h3",{"data-loc":"client/src/pages/Landing.tsx:11030",className:"wallet-step__title",children:$e?n("Change bound wallet","更改绑定钱包"):n("Bind wallet","绑定钱包")})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11032",className:"wallet-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11033",children:n("Network","选择网络")}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11034",className:`wallet-select${He?" is-open":""}`,ref:Aa,children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:11038",className:"wallet-select__button",type:"button","aria-haspopup":"listbox","aria-expanded":He,onClick:()=>fe(r=>!r),children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11045",className:"wallet-select__value",children:de}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11046",className:"wallet-select__chevron","aria-hidden":"true"})]}),He?e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11049",className:"wallet-select__menu",role:"listbox","aria-label":n("Network","选择网络"),children:Si.map(r=>e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11055",className:`wallet-select__option${r===de?" is-selected":""}`,type:"button",role:"option","aria-selected":r===de,onClick:()=>Ms(r),children:r},r))}):null]})]}),e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:11070",className:"wallet-field",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11071",children:n("Wallet address","钱包地址")}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:11072",className:"wallet-input",value:Ze,onChange:r=>{Gi(r.target.value),Wt(!1),Bt(""),xe()},placeholder:n("Enter wallet address","输入钱包地址")}),Kn&&e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11084",className:"wallet-field__hint is-error",children:Kn})]})]})}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11092",className:"wallet-withdraw__actions",children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11093",className:"wallet-submit",type:"button",disabled:vr,onClick:io,children:yr})})]}):e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11104",className:"wallet-withdraw__steps",children:[e.jsx("section",{"data-loc":"client/src/pages/Landing.tsx:11105",className:"wallet-step",children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11106",className:"wallet-step__body",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11107",className:"wallet-step__head",children:e.jsx("h3",{"data-loc":"client/src/pages/Landing.tsx:11108",className:"wallet-step__title",children:n("Enter withdrawal amount","输入提现金额")})}),e.jsx("label",{"data-loc":"client/src/pages/Landing.tsx:11110",className:"wallet-field",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11111",className:"wallet-input-unit-wrap",children:[e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:11112",className:"wallet-input wallet-input--with-unit",inputMode:"decimal","aria-label":n("Withdrawal amount","提现金额"),value:ne?pp(ne):"",onChange:r=>{const c=r.target.value.replace(/[^\d.]/g,"").replace(/(\..*)\./g,"$1");Ki(c===""?0:gp(Number(c))),xe()},placeholder:n("Enter USD amount","输入 USD 金额")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11124",className:"wallet-input-unit","aria-hidden":"true",children:"USD"})]})}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11127",className:`wallet-conversion${fr?"":" is-error"}`,children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11128",children:[n("Minimum","最低")," ",ia(wn/vt)," · ",n("Available","可提现")," ",ia(ki)]})})]})}),e.jsx("section",{"data-loc":"client/src/pages/Landing.tsx:11135",className:"wallet-step",children:e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11136",className:"wallet-step__body",children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11137",className:"wallet-bound-summary",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11138",className:"wallet-bound-summary__main",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11139",className:"wallet-bound-summary__label",children:n("Withdraw to","提现至")}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11140",className:"wallet-bound-summary__target",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11141",className:"wallet-bound-summary__address",title:Va,children:Va}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11144",className:"wallet-bound-summary__network",children:de})]})]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11147",className:"wallet-bound-summary__edit",type:"button",onClick:()=>{Te(!0),xe()},children:n("Change","更改")})]})})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11161",className:"wallet-withdraw__actions",children:[Ee==="error"&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11163",className:"wallet-status is-error",children:n("Withdrawal preview failed. Try 10.00 USD, 20.00 USD, or 50.00 USD to view the success state.","提现预览失败。请尝试 10.00 USD、20.00 USD 或 50.00 USD 查看成功状态。")}),Ee==="success"&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11171",className:"wallet-status",children:n(`${ia(_n(ne))} withdrawal request submitted.`,`${ia(_n(ne))} 提现申请已提交。`)}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11178",className:"wallet-submit wallet-submit--withdraw",type:"button",disabled:vr,onClick:lo,children:yr})]})]})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11192",className:"wallet-summary-grid",children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:11193",className:"wallet-card wallet-card--balance",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11194",children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11195",className:"wallet-card__value wallet-balance-value",children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11196",className:"wallet-balance-value__icon",src:G.coin,alt:""}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11197",children:sa(pn)})]})}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11200",className:"wallet-action-row",children:e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:11201",className:"wallet-action",type:"button",onClick:Ds,children:[e.jsx(vo,{"data-loc":"client/src/pages/Landing.tsx:11206",size:16,strokeWidth:3}),n("Withdraw","提现")]})})]})}),e.jsx("section",{"data-loc":"client/src/pages/Landing.tsx:11213",className:"wallet-section",children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11214",className:"wallet-table",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11215",className:"wallet-table__row wallet-table__row--head",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11216",children:n("Activity","变更记录")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11217",children:n("Order No.","单号")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11218",children:n("Time","变更时间")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11219",className:"wallet-table__amount",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11220",className:"wallet-table__balance",children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11221",className:"wallet-table__balance-icon",src:G.coin,alt:""}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11222",children:n("Balance","余额")})]})})]}),ep.map(r=>{const c=r.direction==="increase",d=Math.round(r.amount*vt);return e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11230",className:"wallet-table__row",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11231",children:n(r.reasonEn,r.reasonZh)}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11232",className:"wallet-table__mono",children:r.orderNo}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11233",children:ro(r.occurredAt)}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11234",className:`wallet-table__amount ${c?"wallet-table__amount--plus":"wallet-table__amount--minus"}`,children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11235",className:"wallet-table__balance",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11236",children:[c?"+":"-",sa(d)]})})})]},r.id)})]})})]})})})]})}),ja&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11253",className:"shop-modal-backdrop",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&_a(!1)},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:11256",className:"shop-modal leaderboard-modal",role:"dialog","aria-modal":"true","aria-label":n("Leaderboard","排行榜"),children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:11257",className:"shop-modal__header",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11258",className:"leaderboard-modal__heading",children:e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11259",className:"leaderboard-tabs",role:"tablist","aria-label":n("Leaderboard period","排行榜周期"),children:["week","month"].map(r=>e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11261",className:`leaderboard-tab${ce===r?" is-active":""}`,type:"button",role:"tab","aria-selected":ce===r,onClick:()=>Vi(r),children:r==="week"?n("Weekly","周榜"):n("Monthly","月榜")},r))})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11274",className:"shop-modal__close",type:"button","aria-label":n("Close leaderboard","关闭排行榜"),onClick:()=>_a(!1),children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:11280",size:22,strokeWidth:3})})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11284",className:`leaderboard-panel leaderboard-panel--${ce}`,children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11285",className:"leaderboard-figma-content",children:[e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:11286",className:"leaderboard-list","aria-label":n("Leaderboard list","排行榜列表"),children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11287",className:"leaderboard-list-row leaderboard-list-row--head",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11288",children:n("Rank","排名")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11289",children:n("Nickname","用户")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11290",className:"leaderboard-list__balance",children:bs}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11291",className:"leaderboard-list__casts",children:ms})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11293",className:`leaderboard-list__scroll${Ui?" is-scrolling":""}`,onScroll:fs,children:or.map(r=>{const c=bn(r.rank);return e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11300",className:`leaderboard-list-row leaderboard-list-row--rank-${Math.min(r.rank,4)}${r.id===jn?" is-current":""}`,children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11304",className:"leaderboard-list__rank",children:c?e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11306",className:"leaderboard-rank-icon",src:c,alt:`NO.${r.rank}`}):`NO.${r.rank}`}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11311",className:"leaderboard-list__name",children:r.nickname}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11312",className:"leaderboard-list__metric",children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11313",className:"leaderboard-balance__icon",src:Le.coin,alt:""}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11314",children:ii(r.balance)})]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11316",className:"leaderboard-list__casts",children:r.casts})]},r.id)})}),X&&e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11322",className:`leaderboard-list-row leaderboard-current-row--sticky leaderboard-list-row--rank-${Xt?Math.min(X.rank,4):4}${Xt?"":" is-unranked"}`,children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11323",className:"leaderboard-list__rank",children:Xt&&bn(X.rank)?e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11325",className:"leaderboard-rank-icon",src:bn(X.rank)??"",alt:`NO.${X.rank}`}):Xt?`NO.${X.rank}`:n("Unranked","未上榜")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11332",className:"leaderboard-list__name",children:X.nickname}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11333",className:"leaderboard-list__metric",children:[e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11334",className:"leaderboard-balance__icon",src:Le.coin,alt:""}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11335",children:ii(X.balance)})]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11337",className:"leaderboard-list__casts",children:X.casts})]})]}),e.jsx("aside",{"data-loc":"client/src/pages/Landing.tsx:11342",className:"leaderboard-hero-art","aria-hidden":"true",children:e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11343",src:ce==="week"?Le.mascotWeek:Le.mascotMonth,alt:""})}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:11348",className:"leaderboard-refresh-note",children:ce==="week"?n("Updates Mon 00:00","每周一 0点 刷新"):n("Updates 1st 00:00","每月1日 0点 刷新")})]})})]})}),P&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11360",className:"shop-modal-backdrop",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&(A(!1),Ie(null))},children:re?e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:11367",className:"shop-modal inventory-modal inventory-detail-modal",role:"dialog","aria-modal":"true","aria-labelledby":"inventory-detail-title",children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:11368",className:"shop-modal__header",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11369",className:"inventory-detail-heading",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11370",className:"inventory-detail-back",type:"button","aria-label":n("Back to inventory","返回图鉴"),onClick:()=>{Me(!1),Ie(null)},children:e.jsx(Qa,{"data-loc":"client/src/pages/Landing.tsx:11379",size:20,strokeWidth:3})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11381",className:"inventory-detail-title-wrap",children:[e.jsx("h2",{"data-loc":"client/src/pages/Landing.tsx:11382",className:"shop-modal__title",id:"inventory-detail-title",children:re.name}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11383",className:"inventory-detail-subtitle",children:["NO.",nr.get(re.id)??1," ｜ ",n("Created","创建于"),re.createdAt]})]})]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11388",className:"shop-modal__close",type:"button","aria-label":n("Close factor detail","关闭图鉴详情"),onClick:()=>{Me(!1),A(!1),Ie(null)},children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:11398",size:22,strokeWidth:3})})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11402",className:"inventory-detail-content",children:e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11403",className:"inventory-factor-detail",children:e.jsx(yo,{"data-loc":"client/src/pages/Landing.tsx:11404",children:e.jsx(wo,{"data-loc":"client/src/pages/Landing.tsx:11405",embedded:!0,hideHeader:!0,factorIdOverride:re.id,factorOverride:re})})})})]}):e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:11416",className:`shop-modal inventory-modal${Ji?" inventory-modal--controls-hidden":""}`,role:"dialog","aria-modal":"true","aria-labelledby":"inventory-modal-title",children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:11422",className:"shop-modal__header",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11423",children:e.jsx("h2",{"data-loc":"client/src/pages/Landing.tsx:11424",className:"shop-modal__title",id:"inventory-modal-title",children:n("Inventory","图鉴")})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11426",className:"shop-modal__close",type:"button","aria-label":n("Close inventory","关闭图鉴"),onClick:()=>{Me(!1),A(!1),Ie(null)},children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:11436",size:22,strokeWidth:3})})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11440",className:"shop-modal__toolbar",children:[e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:11441",className:"shop-search",children:[e.jsx(kr,{"data-loc":"client/src/pages/Landing.tsx:11442","aria-hidden":"true"}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:11443",className:"shop-input",value:Qe,onChange:r=>Hi(r.target.value),placeholder:n("Search by name, ID, expression...","按名称、ID、表达式搜索...")})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11451",className:"shop-controls",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11452",className:"shop-select-aisland","aria-label":n("Factor filter","因子筛选"),children:e.jsx(vn,{"data-loc":"client/src/pages/Landing.tsx:11453",value:Xe,onChange:r=>Zi(r),options:ps,placeholder:n("Choose filter","选择筛选")})}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11460",className:"shop-select-aisland shop-select-aisland--sort","aria-label":n("Factor sort","因子排序"),children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11461",className:`sort-direction-select${Na?" is-open":""}`,onBlur:r=>{r.currentTarget.contains(r.relatedTarget)||Ut(!1)},children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:11467",className:"sort-direction-select__trigger",type:"button","aria-haspopup":"listbox","aria-expanded":Na,onClick:()=>Ut(r=>!r),children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11474",children:n("Sort","排序")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11475",className:"sort-direction-select__chevron","aria-hidden":"true",children:e.jsx("svg",{"data-loc":"client/src/pages/Landing.tsx:11476",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:11477",d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),Na&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11482",className:"sort-direction-select__menu",role:"listbox","aria-label":n("Factor sort","因子排序"),children:us.map(r=>{const c=ve===r&&Vt==="asc"?"asc":"desc";return e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:11486",className:`sort-direction-select__option${ve===r?" is-active":""}`,type:"button",role:"option","aria-selected":ve===r,onMouseDown:d=>d.preventDefault(),onClick:()=>$s(r),children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11495",children:xs[r]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11496",className:"sort-direction-select__direction",children:c==="asc"?n("Ascending","升序"):n("Descending","降序")})]},r)})})]})})]})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11509",className:"inventory-grade-filter","aria-label":n("Grade filter","等级筛选"),children:qd.map(r=>e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11511",className:`inventory-grade-filter__chip inventory-grade-filter__chip--${r}${pe===r?" is-active":""}`,type:"button","aria-pressed":pe===r,onClick:()=>Qi(r),children:r==="all"?n("All","全部"):r==="prop"?n("Props","道具"):r==="misc"?n("Misc","杂物"):r},r))}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11529",className:"inventory-grid",ref:Kt,onScroll:zs,children:[rr.map(r=>{const c=Oa.has(r.id),d=Q(r.returns),u=un(r),p=`inventory-card inventory-card--${u}`,w=`factor-${r.id}`,I=nr.get(r.id)??1,J=e.jsxs(e.Fragment,{children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:11539",className:"inv-head",children:[e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11540",className:"inv-no",children:["NO.",I]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11541",className:`inv-medal inv-medal--${u}`,children:u})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11546",className:"inv-art","aria-hidden":"true",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11547",className:"inv-art__rays"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11548",className:"inv-art__star inv-art__star--1"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11549",className:"inv-art__star inv-art__star--2"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11550",className:"inv-art__star inv-art__star--3"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11551",className:"inv-art__star inv-art__star--4"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11552",className:"inv-art__star inv-art__star--5"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11553",className:"inv-art__star inv-art__star--6"}),e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11554",className:"inv-art__img",src:"/assets/pixel-whale-avatar.png",alt:""}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11555",className:"inv-art__tag",children:n("Sunfish","翻车鱼")})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11558",className:"inv-stats",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11559",className:"inv-stat",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11560",className:"inv-stat__label",children:n("Sharpe","Sharpe")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11561",className:"inv-stat__value",children:r.sharpe.toFixed(2)})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11563",className:"inv-stat",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11564",className:"inv-stat__label",children:n("ROI","ROI")}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11565",className:`inv-stat__value inv-stat__value--${d>=0?"pos":"neg"}`,children:[d>=0?"+":"",r.returns]})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11569",className:"inv-actions",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11570",className:"inv-more-wrap",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11571",className:"inv-btn inv-btn--ghost",type:"button","aria-label":n("More actions","更多操作"),"aria-haspopup":"menu","aria-expanded":Yt===w,onClick:ta=>{ta.stopPropagation(),Ca(aa=>aa===w?null:w)},children:e.jsx(Ha,{"data-loc":"client/src/pages/Landing.tsx:11582",size:20,strokeWidth:3})}),Yt===w&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11585",className:"inv-more-menu",role:"menu",children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11586",className:"inv-more-menu__item",type:"button",role:"menuitem",onClick:()=>pr({kind:"factor",id:r.id,label:`${n("Factor","因子")} NO.${I} ${r.name}`}),children:n("Delete","删除")})})]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11601",className:`inv-btn inv-btn--ghost inv-btn--star${c?" is-on":""}`,type:"button","aria-pressed":c,"aria-label":c?n("Unfavorite factor","取消收藏因子"):n("Favorite factor","收藏因子"),onClick:()=>Os(r.id),children:e.jsx("svg",{"data-loc":"client/src/pages/Landing.tsx:11608",viewBox:"0 0 24 24",width:"22",height:"22","aria-hidden":"true",children:e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:11609",d:"M12 3 14.5 9 21 9.5 16 14 17.5 20.5 12 17 6.5 20.5 8 14 3 9.5 9.5 9z",fill:c?"#f6c63a":"none",stroke:"#1d0f06",strokeWidth:"1.6",strokeLinejoin:"round"})})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11613",className:"inv-btn inv-btn--cta",type:"button",onClick:()=>{ye.current=Kt.current?.scrollTop??ye.current,Ie(r)},children:n("View","查看")})]})]});return u==="SSS"||u==="SS"?e.jsx(Ud,{"data-loc":"client/src/pages/Landing.tsx:11628",as:"article",className:`${p} inventory-card--laser`,edgeSensitivity:u==="SSS"?14:18,glowColor:u==="SSS"?"44 100 72":"49 95 78",backgroundColor:"var(--tier-bg)",borderRadius:8,glowRadius:u==="SSS"?32:24,glowIntensity:u==="SSS"?.88:.58,coneSpread:u==="SSS"?11:15,animated:!0,animationDurationMs:3500,colors:u==="SSS"?["#ffd66f","#ffffff","#ffd66f"]:["#ffe794","#ffffff","#f4d36c"],fillOpacity:u==="SSS"?.4:.28,holographic:!0,onMouseMove:Ra,onMouseLeave:Ba,children:J},r.id):e.jsx("article",{"data-loc":"client/src/pages/Landing.tsx:11650",className:p,onMouseMove:Ra,onMouseLeave:Ba,children:J},r.id)}),ir.map(r=>{const c=`inventory-card inventory-card--${r.type}`,d=`item-${r.id}`,u=hs.get(r.id)??_e.length+1,p=Pa.has(r.id),w=r.type==="prop"?{favorite:n("Favorite item","收藏道具"),unfavorite:n("Unfavorite item","取消收藏道具")}:{favorite:n("Favorite misc item","收藏杂物"),unfavorite:n("Unfavorite misc item","取消收藏杂物")};return e.jsxs("article",{"data-loc":"client/src/pages/Landing.tsx:11676",className:c,onMouseMove:Ra,onMouseLeave:Ba,children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:11682",className:"inv-head",children:[e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11683",className:"inv-no",children:["NO.",u]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11684",className:"inv-medal","aria-hidden":"true",children:r.type==="prop"?n("Prop","道具"):n("Misc","杂物")})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11689",className:`inv-art inv-item-art inv-item-art--${r.type}`,"aria-hidden":"true",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11690",className:"inv-art__rays"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11691",className:"inv-art__star inv-art__star--1"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11692",className:"inv-art__star inv-art__star--2"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11693",className:"inv-art__star inv-art__star--3"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11694",className:"inv-art__star inv-art__star--4"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11695",className:"inv-art__star inv-art__star--5"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11696",className:"inv-art__star inv-art__star--6"}),r.imageSrc?e.jsx("img",{"data-loc":"client/src/pages/Landing.tsx:11698",className:"inv-item-art__image",src:r.imageSrc,alt:""}):e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11700",className:"inv-item-art__glyph"}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11702",className:"inv-art__tag",children:n(r.tagEn,r.tagZh)})]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11705",className:`inv-stats${r.statsLayout==="inline"?" inv-stats--inline":""}`,children:r.statsLayout==="inline"?e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11707",className:"inv-stat inv-stat--inline",children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11708",className:"inv-stat__label",children:n(r.metricOneLabelEn,r.metricOneLabel)})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11712",className:"inv-stat",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11713",className:"inv-stat__label",children:n(r.metricOneLabelEn,r.metricOneLabel)}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11714",className:"inv-stat__value",children:n(r.metricOneValueEn??r.metricOneValue,r.metricOneValue)})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11716",className:"inv-stat",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11717",className:"inv-stat__label",children:n(r.metricTwoLabelEn??r.metricTwoLabel,r.metricTwoLabel)}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11718",className:"inv-stat__value",children:n(r.metricTwoValueEn??r.metricTwoValue,r.metricTwoValue)})]})]})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11724",className:"inv-actions",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11725",className:"inv-more-wrap",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11726",className:"inv-btn inv-btn--ghost",type:"button","aria-label":n("More actions","更多操作"),"aria-haspopup":"menu","aria-expanded":Yt===d,onClick:I=>{I.stopPropagation(),Ca(J=>J===d?null:d)},children:e.jsx(Ha,{"data-loc":"client/src/pages/Landing.tsx:11737",size:20,strokeWidth:3})}),Yt===d&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11740",className:"inv-more-menu",role:"menu",children:e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11741",className:"inv-more-menu__item",type:"button",role:"menuitem",onClick:()=>pr({kind:"item",id:r.id,label:`${n(r.type==="prop"?"Item":"Misc item",r.type==="prop"?"道具":"杂物")} NO.${u} ${n(r.tagEn,r.tagZh)}`}),children:n("Delete","删除")})})]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11756",className:`inv-btn inv-btn--ghost inv-btn--star${p?" is-on":""}`,type:"button","aria-pressed":p,"aria-label":p?w.unfavorite:w.favorite,onClick:I=>{I.stopPropagation(),Ps(r.id)},children:e.jsx(Xa,{"data-loc":"client/src/pages/Landing.tsx:11766",size:18,strokeWidth:2.5,fill:p?"#f6c63a":"none"})})]})]},r.id)}),rr.length===0&&ir.length===0&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11774",className:"shop-empty inventory-empty",children:n("No factors match your filters.","没有符合当前筛选条件的因子。")})]})]})}),Gt&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11783",className:"shop-modal-backdrop",role:"presentation",style:{zIndex:70},onMouseDown:r=>{r.target===r.currentTarget&&Je(null)},children:e.jsx("section",{"data-loc":"client/src/pages/Landing.tsx:11791",className:"shop-modal delete-confirm-modal",role:"dialog","aria-modal":"true","aria-label":n("Delete confirmation","删除确认"),children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11792",className:"delete-confirm-modal__body",children:[e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:11793",className:"delete-confirm-modal__text",children:n("This item will be deleted permanently. Please confirm if you want to continue.","删除后不可恢复，请确认是否继续。")}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11799",className:"delete-confirm-modal__target",children:Gt.label}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11802",className:"delete-confirm-modal__actions",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11803",className:"delete-confirm-modal__btn",type:"button",onClick:()=>Je(null),children:n("Cancel","取消")}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11810",className:"delete-confirm-modal__btn delete-confirm-modal__btn--danger",type:"button",onClick:As,children:n("Delete","删除")})]})]})})}),as&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11824",className:"shop-modal-backdrop",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&Xn(!1)},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:11827",className:"shop-modal",role:"dialog","aria-modal":"true","aria-labelledby":"shop-modal-title",children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:11828",className:"shop-modal__header",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11829",children:e.jsx("h2",{"data-loc":"client/src/pages/Landing.tsx:11830",className:"shop-modal__title",id:"shop-modal-title",children:n("Shop","商店")})}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11832",className:"shop-modal__close",type:"button","aria-label":n("Close shop","关闭商店"),onClick:()=>Xn(!1),children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:11833",size:22,strokeWidth:3})})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11837",className:"shop-modal__toolbar",children:[e.jsxs("label",{"data-loc":"client/src/pages/Landing.tsx:11838",className:"shop-search",children:[e.jsx(kr,{"data-loc":"client/src/pages/Landing.tsx:11839","aria-hidden":"true"}),e.jsx("input",{"data-loc":"client/src/pages/Landing.tsx:11840",className:"shop-input",value:za,onChange:r=>ns(r.target.value),placeholder:n("Search by name or ID...","按名称或 ID 搜索...")})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11848",className:"shop-controls",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11849",className:"shop-select-aisland","aria-label":n("Category filter","分类筛选"),children:e.jsx(vn,{"data-loc":"client/src/pages/Landing.tsx:11850",value:$a,onChange:r=>rs(r),options:ls,placeholder:n("Choose category","选择分类")})}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11857",className:"shop-select-aisland shop-select-aisland--sort","aria-label":n("Sort","排序"),children:e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11858",className:`sort-direction-select${Ta?" is-open":""}`,onBlur:r=>{r.currentTarget.contains(r.relatedTarget)||Ht(!1)},children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:11864",className:"sort-direction-select__trigger",type:"button","aria-haspopup":"listbox","aria-expanded":Ta,onClick:()=>Ht(r=>!r),children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11871",children:n("Sort","排序")}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11872",className:"sort-direction-select__chevron","aria-hidden":"true",children:e.jsx("svg",{"data-loc":"client/src/pages/Landing.tsx:11873",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:11874",d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),Ta&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11879",className:"sort-direction-select__menu",role:"listbox","aria-label":n("Sort","排序"),children:cs.map(r=>{const c=we===r&&qt==="asc"?"asc":"desc";return e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:11883",className:`sort-direction-select__option${we===r?" is-active":""}`,type:"button",role:"option","aria-selected":we===r,onMouseDown:d=>d.preventDefault(),onClick:()=>Es(r),children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11892",children:tr[r]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11893",className:"sort-direction-select__direction",children:c==="asc"?n("Ascending","升序"):n("Descending","降序")})]},r)})})]})})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11906",className:"shop-grid",children:[gr.map(r=>{const c=ni(r),d=je.has(r.id),u=Q(r.annualReturn),p=Q(r.maxDrawdown);return e.jsxs("article",{"data-loc":"client/src/pages/Landing.tsx:11914",className:"shop-card",role:"button",tabIndex:0,"aria-label":n(`Open strategy detail for ${r.name}`,`查看策略详情：${r.name}`),onClick:()=>wr(r),onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),wr(r))},children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11928",className:"shop-card__body",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11929",className:"shop-card__title-row",children:e.jsx("h3",{"data-loc":"client/src/pages/Landing.tsx:11930",className:"shop-card__title",children:r.name})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11932",className:"shop-card__meta",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:11933",className:"shop-badge",children:r.updatedAt}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11934",className:"shop-badge",children:["ID ",r.id]}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:11935",className:"shop-badge",children:[e.jsx(Sr,{"data-loc":"client/src/pages/Landing.tsx:11935",size:14}),t==="zh"?`已使用${r.subscribers??0}次`:`Used ${r.subscribers??0} times`]})]}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:11937",className:"shop-card__desc",children:Ts(r)}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11939",className:"shop-curve",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11940",className:"shop-curve__label",children:n("Asset Curve","资产曲线")}),e.jsxs("svg",{"data-loc":"client/src/pages/Landing.tsx:11941",viewBox:"0 0 240 48","aria-hidden":"true",children:[e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:11942",d:"M4 38 C 34 30, 42 42, 66 28 S 104 20, 130 24 S 166 36, 196 17 S 221 15, 236 10",fill:"none",stroke:u>=0?"#0b9f73":"#d85d48",strokeWidth:"5",strokeLinecap:"round"}),e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:11943",d:"M4 38 C 34 30, 42 42, 66 28 S 104 20, 130 24 S 166 36, 196 17 S 221 15, 236 10 L236 48 L4 48 Z",fill:u>=0?"rgba(25,200,185,.18)":"rgba(216,93,72,.16)"})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11947",className:"shop-metrics",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11948",className:"shop-metric",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11949",className:"shop-metric__label",children:"ROI"}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11950",className:`shop-metric__value ${u<0?"shop-metric__value--down":"shop-metric__value--up"}`,children:r.annualReturn})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11952",className:"shop-metric",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11953",className:"shop-metric__label",children:n("Win Rate","胜率")}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11954",className:"shop-metric__value",children:r.winRate})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11956",className:"shop-metric",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11957",className:"shop-metric__label",children:n("Sharpe","夏普")}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11958",className:"shop-metric__value",children:r.sharpe.toFixed(2)})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11960",className:"shop-metric",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11961",className:"shop-metric__label",children:n("Max DD","最大回撤")}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:11962",className:`shop-metric__value ${p===0?"":"shop-metric__value--down"}`,children:r.maxDrawdown})]})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:11967",className:"shop-card__actions",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:11968",className:`shop-card__icon-btn${d?" is-starred":""}`,type:"button","aria-pressed":d,"aria-label":d?n("Unfavorite strategy","取消收藏策略"):n("Favorite strategy","收藏策略"),onClick:w=>{w.stopPropagation(),xr(r.id)},children:e.jsx(Xa,{"data-loc":"client/src/pages/Landing.tsx:11978",size:15,fill:d?"currentColor":"none"})}),e.jsx(Ka,{"data-loc":"client/src/pages/Landing.tsx:11980",className:"shop-card__action",href:`/strategies/new?template=${r.id}&creationMode=platform&scale=single&inputMethod=form`,onClick:w=>w.stopPropagation(),children:n("Copy","复制")}),e.jsxs(Ka,{"data-loc":"client/src/pages/Landing.tsx:11987",className:"shop-card__action shop-card__action--primary",href:`/strategies/${r.id}?source=official&tier=${c}`,onClick:w=>w.stopPropagation(),children:[n("View","查看")," ",e.jsx(Za,{"data-loc":"client/src/pages/Landing.tsx:11992",size:15})]})]})]},r.id)}),gr.length===0&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12000",className:"shop-empty",children:n("No strategies match your filters.","没有符合当前筛选条件的策略。")})]})]})}),v&&Z&&e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12008",className:"strategy-detail-backdrop",role:"presentation",onMouseDown:r=>{r.target===r.currentTarget&&Zt(null)},children:e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:12011",className:"strategy-detail-modal",role:"dialog","aria-modal":"true","aria-labelledby":"strategy-detail-title",children:[e.jsxs("header",{"data-loc":"client/src/pages/Landing.tsx:12012",className:"strategy-detail__header",children:[e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:12013",className:"strategy-detail__back",type:"button","aria-label":n("Back to shop","返回商店"),onClick:()=>Zt(null),children:e.jsx(Qa,{"data-loc":"client/src/pages/Landing.tsx:12014",size:20,strokeWidth:3})}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12017",style:{minWidth:0,flex:"1 1 auto"},children:[e.jsx("h2",{"data-loc":"client/src/pages/Landing.tsx:12018",className:"strategy-detail__title",id:"strategy-detail-title",children:v.name}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12019",className:"strategy-detail__meta",children:[e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12020",className:"shop-badge",children:["ID ",v.id]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12021",className:"shop-badge",children:v.updatedAt}),e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12022",className:"shop-badge",children:[e.jsx(Sr,{"data-loc":"client/src/pages/Landing.tsx:12022",size:14}),t==="zh"?`已使用${v.subscribers??0}次`:`Used ${v.subscribers??0} times`]}),e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12023",className:"shop-badge shop-badge--primary",children:ni(v)==="official"?n("Official","官方"):n("Graduated","三方")})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12029",className:"strategy-detail__actions",children:[e.jsxs("button",{"data-loc":"client/src/pages/Landing.tsx:12030",className:`strategy-detail__button${je.has(v.id)?" strategy-detail__button--primary":""}`,type:"button","aria-pressed":je.has(v.id),onClick:()=>xr(v.id),children:[e.jsx(Xa,{"data-loc":"client/src/pages/Landing.tsx:12036",size:15,fill:je.has(v.id)?"currentColor":"none"}),je.has(v.id)?n("Favorited","已收藏"):n("Favorite","收藏")]}),e.jsxs(Ka,{"data-loc":"client/src/pages/Landing.tsx:12039",className:"strategy-detail__button strategy-detail__button--primary",href:`/strategies/new?template=${v.id}&creationMode=platform&scale=single&inputMethod=form`,children:[e.jsx(Nr,{"data-loc":"client/src/pages/Landing.tsx:12040",size:15}),n("Copy","复制")]}),e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:12043",className:"strategy-detail__close",type:"button","aria-label":n("Close detail","关闭详情"),onClick:()=>Zt(null),children:e.jsx(B,{"data-loc":"client/src/pages/Landing.tsx:12044",size:21,strokeWidth:3})})]})]}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12049",className:"strategy-detail__content",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12050",className:"detail-metric-grid",children:[[n("Total Equity","总权益"),`${Z.currentEquity.toLocaleString(void 0,{maximumFractionDigits:2})} USDT`,""],[n("PnL","盈亏"),`${mn(Z.totalReturn)} USDT`,Z.totalReturn>=0?"detail-value--up":"detail-value--down"],["ROI",v.annualReturn,Z.roi>=0?"detail-value--up":"detail-value--down"],[n("Win Rate","胜率"),v.winRate,""],[n("Sharpe","夏普"),v.sharpe.toFixed(2),""],[n("Max Drawdown","最大回撤"),v.maxDrawdown,"detail-value--down"]].map(([r,c,d])=>e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12059",className:"detail-metric-card",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12060",className:"detail-metric-card__border","aria-hidden":"true"}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12061",className:"detail-metric-card__content",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12062",className:"detail-label",children:r}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12063",className:`detail-value ${d}`,children:c})]})]},r))}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12069",className:"detail-panel-grid",children:[e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:12070",className:"detail-panel",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12071",className:"detail-panel__head",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12072",className:"detail-panel__title",children:[e.jsx(Or,{"data-loc":"client/src/pages/Landing.tsx:12072",size:16}),n("Fund Statistics","资金统计")]})}),Z.fundRows.map(([r,c])=>e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12075",className:"detail-row",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12075",children:r}),e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:12075",children:c})]},r))]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:12079",className:"detail-panel",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12080",className:"detail-panel__head",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12081",className:"detail-panel__title",children:[e.jsx(Cr,{"data-loc":"client/src/pages/Landing.tsx:12081",size:16}),n("Performance","表现指标")]})}),Z.perfRows.map(([r,c])=>e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12084",className:"detail-row",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12084",children:r}),e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:12084",children:c})]},r))]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:12088",className:"detail-panel",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12089",className:"detail-panel__head",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12090",className:"detail-panel__title",children:[e.jsx(Oo,{"data-loc":"client/src/pages/Landing.tsx:12090",size:16}),n("Trading Stats","交易统计")]})}),Z.tradeRows.map(([r,c])=>e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12093",className:"detail-row",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12093",children:r}),e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:12093",children:c})]},r))]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:12097",className:"detail-panel detail-panel--wide",children:[e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12098",className:"detail-panel__head",children:[e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12099",className:"detail-panel__title",children:[e.jsx(Cr,{"data-loc":"client/src/pages/Landing.tsx:12099",size:16}),n("Asset Curve","资产曲线")]}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12100",className:"strategy-detail__ranges","aria-label":n("Curve range","曲线区间"),children:Yd.map(r=>e.jsx("button",{"data-loc":"client/src/pages/Landing.tsx:12102",className:`strategy-detail__range${Qt===r?" is-active":""}`,type:"button",onClick:()=>er(r),children:r},r))})]}),e.jsxs("svg",{"data-loc":"client/src/pages/Landing.tsx:12113",className:"detail-chart",viewBox:"0 0 640 230","aria-label":n("Strategy asset curve","策略资产曲线"),children:[e.jsx("defs",{"data-loc":"client/src/pages/Landing.tsx:12114",children:e.jsxs("linearGradient",{"data-loc":"client/src/pages/Landing.tsx:12115",id:"strategyCurveFill",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{"data-loc":"client/src/pages/Landing.tsx:12116",offset:"0%",stopColor:"#19c8b9",stopOpacity:".26"}),e.jsx("stop",{"data-loc":"client/src/pages/Landing.tsx:12117",offset:"100%",stopColor:"#19c8b9",stopOpacity:"0"})]})}),e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:12120",d:"M16 30 H624 M16 80 H624 M16 130 H624 M16 180 H624",stroke:"rgba(196,184,158,.42)",strokeWidth:"1.5",strokeDasharray:"7 7"}),e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:12121",d:`${Z.equityPath} L624 214 L16 214 Z`,fill:"url(#strategyCurveFill)"}),e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:12122",d:Z.benchmarkPath,fill:"none",stroke:"#d69b48",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"8 9"}),e.jsx("path",{"data-loc":"client/src/pages/Landing.tsx:12123",d:Z.equityPath,fill:"none",stroke:"#19c8b9",strokeWidth:"6",strokeLinecap:"round"})]})]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:12127",className:"detail-panel",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12128",className:"detail-panel__head",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12129",className:"detail-panel__title",children:[e.jsx(Co,{"data-loc":"client/src/pages/Landing.tsx:12129",size:16}),n("Position Preference","持仓偏好")]})}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12131",className:"detail-preferences",children:[["BTC","42%"],["ETH","28%"],[v.market==="DEX"?"DeFi":"ALT","18%"],[n("Other","其他"),"12%"]].map(([r,c])=>e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12138",className:"detail-pref-row",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12139",children:r}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12140",className:"detail-pref-bar",children:e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12140",style:{width:c}})}),e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:12141",children:c})]},r))})]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:12147",className:"detail-panel detail-panel--wide",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12148",className:"detail-panel__head",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12149",className:"detail-panel__title",children:[e.jsx(Nr,{"data-loc":"client/src/pages/Landing.tsx:12149",size:16}),n("Strategy Configuration","策略配置")]})}),e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12151",className:"detail-config",children:Z.configRows.map(([r,c])=>e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12153",className:"detail-row",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12153",children:r}),e.jsx("strong",{"data-loc":"client/src/pages/Landing.tsx:12153",children:c})]},r))})]}),e.jsxs("section",{"data-loc":"client/src/pages/Landing.tsx:12158",className:"detail-panel",children:[e.jsx("div",{"data-loc":"client/src/pages/Landing.tsx:12159",className:"detail-panel__head",children:e.jsxs("span",{"data-loc":"client/src/pages/Landing.tsx:12160",className:"detail-panel__title",children:[e.jsx(Or,{"data-loc":"client/src/pages/Landing.tsx:12160",size:16}),n("Position History","持仓历史")]})}),e.jsxs("table",{"data-loc":"client/src/pages/Landing.tsx:12162",className:"detail-position-table",children:[e.jsx("thead",{"data-loc":"client/src/pages/Landing.tsx:12163",children:e.jsxs("tr",{"data-loc":"client/src/pages/Landing.tsx:12164",children:[e.jsx("th",{"data-loc":"client/src/pages/Landing.tsx:12165",children:n("Asset","资产")}),e.jsx("th",{"data-loc":"client/src/pages/Landing.tsx:12166",children:n("Side","方向")}),e.jsx("th",{"data-loc":"client/src/pages/Landing.tsx:12167",children:n("Weight","权重")}),e.jsx("th",{"data-loc":"client/src/pages/Landing.tsx:12168",children:n("PnL","盈亏")})]})}),e.jsx("tbody",{"data-loc":"client/src/pages/Landing.tsx:12171",children:[["BTCUSDT",n("Long","做多"),"42%","+12.46%"],["ETHUSDT",n("Long","做多"),"28%","+8.13%"],[v.market==="DEX"?"UNIUSDT":"SOLUSDT",n("Long","做多"),"18%","+5.92%"],["USDT",n("Cash","现金"),"12%","0.00%"]].map(r=>e.jsx("tr",{"data-loc":"client/src/pages/Landing.tsx:12178",children:r.map(c=>e.jsx("td",{"data-loc":"client/src/pages/Landing.tsx:12179",children:c},c))},r[0]))})]})]})]})]})]})}),De&&e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12192",className:"inventory-toast",role:"status","aria-live":"polite",children:[e.jsx("span",{"data-loc":"client/src/pages/Landing.tsx:12198",className:"inventory-toast__icon","aria-hidden":"true",children:"✓"}),e.jsxs("div",{"data-loc":"client/src/pages/Landing.tsx:12199",children:[e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:12200",className:"inventory-toast__title",children:De.title}),e.jsx("p",{"data-loc":"client/src/pages/Landing.tsx:12201",className:"inventory-toast__message",children:De.message})]})]},De.id)]})}export{Wp as default};
