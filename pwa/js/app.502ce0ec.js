(()=>{"use strict";var e={3616:(e,t,r)=>{r(71),r(7280),r(5363);var o=r(8880),n=r(1659),a=r(3673);function i(e,t,r,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});s.render=i;const c=s;var d=r(7083),l=r(9582),u=r(2323);const p=(0,a.HX)("data-v-23fd231a");(0,a.dD)("data-v-23fd231a");const m={class:"q-pa-md"},f={class:"row justify-center q-my-md"};(0,a.Cn)();const v=p(((e,t,r,o,n,i)=>{const s=(0,a.up)("q-item"),c=(0,a.up)("q-spinner-dots"),d=(0,a.up)("q-infinite-scroll");return(0,a.wg)(),(0,a.j4)("div",m,[(0,a.Wm)(d,{onLoad:o.onLoad,offset:250},{loading:p((()=>[(0,a.Wm)("div",f,[(0,a.Wm)(c,{color:"primary",size:"40px"})])])),default:p((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(o.posts,((e,t)=>((0,a.wg)(),(0,a.j4)("div",{key:t,class:"caption"},[(0,a.Wm)(s,{class:"item"},{default:p((()=>[(0,a.Uk)((0,u.zw)(e.title),1)])),_:2},1024)])))),128))])),_:1},8,["onLoad"])])}));var h=r(1959),g=r(52),b=r.n(g);const y={setup(){const e=(0,h.iH)([]),t=(0,h.iH)(1),r=async()=>{try{const r=await b().get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:10,_page:t.value}});e.value=r.data}catch(r){alert("Ошибка")}};return r(),{posts:e,onLoad(t,r){setTimeout((()=>{e.value.push({},{},{},{},{},{},{}),r()}),2e3)}}}};var w=r(2729),_=r(3414),j=r(4765),q=r(7518),O=r.n(q);y.render=v,y.__scopeId="data-v-23fd231a";const P=y;O()(y,"components",{QInfiniteScroll:w.Z,QItem:_.Z,QSpinnerDots:j.Z});const C=(0,a.HX)("data-v-b5cbe40c"),k=C(((e,t,r,o,n,i)=>{const s=(0,a.up)("q-card-section"),c=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(c,{class:"my-card"},{default:C((()=>[(0,a.Wm)(s,null,{default:C((()=>[(0,a.Uk)((0,u.zw)(o.lorem),1)])),_:1})])),_:1})})),x={setup(){return{lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}};var S=r(151),L=r(5589);x.render=k,x.__scopeId="data-v-b5cbe40c";const A=x;O()(x,"components",{QCard:S.Z,QCardSection:L.Z});const E=(0,a.HX)("data-v-1a7cd1cd"),Z=E(((e,t,r,o,n,i)=>{const s=(0,a.up)("q-card-section"),c=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(c,{class:"my-card"},{default:E((()=>[(0,a.Wm)(s,null,{default:E((()=>[(0,a.Uk)((0,u.zw)(o.lorem),1)])),_:1})])),_:1})})),Q={setup(){return{lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}};Q.render=Z,Q.__scopeId="data-v-1a7cd1cd";const T=Q;O()(Q,"components",{QCard:S.Z,QCardSection:L.Z});const U=(0,a.HX)("data-v-3e9f1faa"),H=U(((e,t,r,o,n,i)=>{const s=(0,a.up)("q-card-section"),c=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(c,{class:"my-card"},{default:U((()=>[(0,a.Wm)(s,null,{default:U((()=>[(0,a.Uk)((0,u.zw)(o.lorem),1)])),_:1})])),_:1})})),I={setup(){return{lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}};I.render=H,I.__scopeId="data-v-3e9f1faa";const N=I;O()(I,"components",{QCard:S.Z,QCardSection:L.Z});const W=[{path:"/",component:()=>Promise.all([r.e(736),r.e(925)]).then(r.bind(r,2925)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(618)]).then(r.bind(r,2618))}]},{path:"/cards",component:N},{path:"/locator",component:A},{path:"/transactions",component:P},{path:"/bill",component:T},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],z=W,B=(0,d.BC)((function(){const e=l.r5,t=(0,l.p7)({scrollBehavior:()=>({left:0,top:0}),routes:z,history:e("")});return t}));async function M(e,t){const r="function"===typeof B?await B({}):B,o=e(c);return o.use(n.Z,t),{app:o,router:r}}var D=r(5094);const F={config:{},directives:{Intersection:D.Z}};var X=r(1413);(0,X.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,9501,23));const K="";async function $({app:e,router:t},r){let o=!1;const n=e=>{o=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:n,urlPath:a,publicPath:K})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&(e.use(t),e.mount("#q-app"))}M(o.ri,F).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));$(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,api:()=>i});var o=r(7083),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){for(var[o,n,a]=e[l],s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{193:"a5f477c6",618:"f167ff6f",925:"d8fa3d7a"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{618:"a20b85d3",736:"699be555"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="cards:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={618:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,c=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,c]=o,d=0;for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var l=c(r);for(t&&t(o);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return r.O(l)},o=self["webpackChunkcards"]=self["webpackChunkcards"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(3616)));o=r.O(o)})();