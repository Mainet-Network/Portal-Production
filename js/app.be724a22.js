(function(e){function t(t){for(var n,r,i=t[0],s=t[1],l=t[2],d=0,u=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t);while(u.length)u.shift()();return a.push.apply(a,l||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,r=1;r<c.length;r++){var i=c[r];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},r={app:0},o={app:0},a=[];function i(e){return s.p+"js/"+({develop:"develop",general:"general",mainet:"mainet",support:"support"}[e]||e)+"."+{develop:"ec298a55",general:"c4c59c71",mainet:"e79ba48c",support:"1a2f8528"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.e=function(e){var t=[],c={develop:1,general:1,mainet:1,support:1};r[e]?t.push(r[e]):0!==r[e]&&c[e]&&t.push(r[e]=new Promise((function(t,c){for(var n="css/"+({develop:"develop",general:"general",mainet:"mainet",support:"support"}[e]||e)+"."+{develop:"4813248e",general:"b7009eec",mainet:"dc73dc4f",support:"2befdd44"}[e]+".css",o=s.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===n||d===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],b.parentNode.removeChild(b),c(a)},b.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,c){n=o[e]=[t,c]}));t.push(n[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var c=o[e];if(0!==c){if(c){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,c[1](u)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=d;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"3d39":function(e,t,c){},"4cf1":function(e,t,c){"use strict";var n=c("7a23"),r={class:"cpn-enter-email"},o={class:"contain"},a=Object(n["createElementVNode"])("div",{class:"t-big t1"},[Object(n["createTextVNode"])("Sign up for the "),Object(n["createElementVNode"])("span",{class:"tune"},"newsletter")],-1),i=Object(n["createElementVNode"])("div",{class:"t-small t2"},"Interested in us? subscribe to get informed once we make moves through our newsletter.",-1),s=Object(n["createTextVNode"])("Subscribe");function l(e,t,c,l,d,u){var b=Object(n["resolveComponent"])("el-col"),m=Object(n["resolveComponent"])("el-button"),j=Object(n["resolveComponent"])("el-input"),O=Object(n["resolveComponent"])("el-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",r,[Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(O,{gutter:40},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{sm:12},{default:Object(n["withCtx"])((function(){return[a,i]})),_:1}),Object(n["createVNode"])(b,{sm:12},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t}),placeholder:"Enter Email",class:"input"},{append:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{type:"primary",class:"btn",onClick:e.submit},{default:Object(n["withCtx"])((function(){return[s]})),_:1},8,["onClick"])]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})])])}var d=c("3ef4"),u=c("f00f"),b=Object(n["defineComponent"])({data:function(){return{email:""}},methods:{submit:function(){var e=this.email;return e?u["a"](e)?(this.email="",void Object(d["a"])("Unsupported")):Object(d["a"])({message:"Invalid email",type:"warning"}):Object(d["a"])({message:"Please enter email",type:"warning"})}}}),m=(c("9122"),c("6b0d")),j=c.n(m);const O=j()(b,[["render",l]]);t["a"]=O},"5d7c":function(e,t,c){},"680b":function(e,t,c){},"76e8":function(e,t,c){"use strict";c("cdbf")},8405:function(e,t,c){},"85c6":function(e,t,c){"use strict";c("680b")},9122:function(e,t,c){"use strict";c("5d7c")},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");for(var n=c("7a23"),r=c("c3a1"),o=(c("7437"),c("ac1f"),c("5319"),c("1ed2")),a=["Right","ArrowLeftBold","ArrowRightBold"],i={},s=0,l=a;s<l.length;s++){var d=l[s];i[u(d)]=o[d]}function u(e){return"ico"+e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))}var b=c("7926");c("3d39");function m(e,t){var c=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createBlock"])(c)}var j=c("6b0d"),O=c.n(j);const f={},p=O()(f,[["render",m]]);var g=p,h=(c("d3b7"),c("3ca3"),c("ddb0"),c("b0c0"),c("6c02")),v={class:"page-home"},N={class:"sct1"},V={class:"contain"},x={class:"t-big t1"},w={class:"tune"},y=Object(n["createElementVNode"])("div",{class:"t-small t2"},"A gate connecting traditional electronic business to decentralized blockchain world.",-1),k=Object(n["createTextVNode"])("Whitepaper"),E=Object(n["createTextVNode"])("contact us"),C={class:"sct2"},_={class:"contain"},T={class:"sct3 bg1 text-center"},B={class:"contain"},S=Object(n["createElementVNode"])("div",{class:"t-big"},[Object(n["createTextVNode"])("Unlock "),Object(n["createElementVNode"])("span",{class:"tune"},"unlimited"),Object(n["createTextVNode"])(" potential")],-1),M=Object(n["createElementVNode"])("div",{class:"t-small"},"The complementarity of digital and physical markets is key to future development",-1),A=Object(n["createElementVNode"])("div",{class:"num"},[Object(n["createTextVNode"])("3.40B"),Object(n["createElementVNode"])("span",{class:"tune"},"+")],-1),D=Object(n["createElementVNode"])("div",{class:"desc"},"user vol",-1),F=Object(n["createElementVNode"])("div",{class:"num"},[Object(n["createTextVNode"])("$2,430B"),Object(n["createElementVNode"])("span",{class:"tune"},"+")],-1),P=Object(n["createElementVNode"])("div",{class:"desc"},"e-commerce Trading Vol",-1),L=Object(n["createElementVNode"])("div",{class:"num"},[Object(n["createTextVNode"])("$2,940B"),Object(n["createElementVNode"])("span",{class:"tune"},"+")],-1),I=Object(n["createElementVNode"])("div",{class:"desc"},"Market Cap",-1),z=Object(n["createElementVNode"])("div",{class:"num"},[Object(n["createTextVNode"])("$127B"),Object(n["createElementVNode"])("span",{class:"tune"},"+")],-1),R=Object(n["createElementVNode"])("div",{class:"desc"},"24h Vol",-1),G=Object(n["createElementVNode"])("div",{class:"t-muted t3"},"The size of e-commerce has reached $4.28 billion in 2020, and it is predicted that the total size is going to reach $6.38 billion in the next few years.",-1),W={class:"sct4"},H={class:"contain"},U=Object(n["createElementVNode"])("div",{class:"t1"},"Welcome to Mainet",-1),$=Object(n["createElementVNode"])("div",{class:"t-big t2"},[Object(n["createElementVNode"])("span",{class:"tune"},"Get your favorite products"),Object(n["createTextVNode"])(" with your crypto digital assets seamlessly.")],-1),K=Object(n["createElementVNode"])("div",{class:"t-small t3"}," Mainet is a decentralized e-commerce platform that provides users a bridge between crypto world and major traditional e-commerce platforms. It allows users to buy products online with their cryptocurrencies without hassels. ",-1),q=Object(n["createTextVNode"])("Discover more >"),J={class:"sct5 bg1 text-center",style:{"background-image":"url(img/home-sct5-bg.svg)"}},Z={class:"contain"},Y=Object(n["createElementVNode"])("div",{class:"t-big"},[Object(n["createTextVNode"])("How Mainet "),Object(n["createElementVNode"])("span",{class:"tune"},"Works")],-1),Q={class:"sct6"},X={class:"contain"},ee=Object(n["createElementVNode"])("div",{class:"t-big text-center"},[Object(n["createTextVNode"])("Mainet "),Object(n["createElementVNode"])("span",{class:"tune"},"Features")],-1),te=Object(n["createElementVNode"])("div",{class:"t-small text-center t2"}," Users are able to buy products and services safely and efficiently with their cryptocurrencies anywhere, anytime, regardless of regional location or currency ",-1),ce={class:"item card-box-shadow"},ne={class:"t-big t3"},re={class:"t-small t4"},oe={class:"sct8"},ae={class:"contain"},ie={class:"l1"},se=Object(n["createElementVNode"])("div",{class:"t-big"},[Object(n["createTextVNode"])("Mainet "),Object(n["createElementVNode"])("span",{class:"tune"},"Events")],-1),le={class:"bread"},de=Object(n["createTextVNode"])("development"),ue=Object(n["createTextVNode"])("research"),be=Object(n["createTextVNode"])("events"),me=Object(n["createTextVNode"])("media"),je={class:"item"},Oe={class:"l2"},fe={class:"t-small time"},pe={class:"t-big title"},ge={class:"sct9"},he={class:"contain"},ve=Object(n["createElementVNode"])("div",{class:"t-big t1"},[Object(n["createTextVNode"])("Media "),Object(n["createElementVNode"])("span",{class:"tune"},"Exposure")],-1),Ne={class:"sct9"},Ve={class:"contain"},xe=Object(n["createElementVNode"])("div",{class:"t-big t1"},[Object(n["createTextVNode"])("Investors & Strategic "),Object(n["createElementVNode"])("span",{class:"tune"},"Partners")],-1),we={class:"sct9"},ye={class:"contain"},ke=Object(n["createElementVNode"])("div",{class:"t-big t1"},[Object(n["createTextVNode"])("Ecosystem "),Object(n["createElementVNode"])("span",{class:"tune"},"partners")],-1),Ee={class:"sct9"},Ce={class:"contain"},_e=Object(n["createElementVNode"])("div",{class:"t-big t1"},[Object(n["createTextVNode"])("Supported "),Object(n["createElementVNode"])("span",{class:"tune"},"Platforms")],-1);function Te(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("Menu"),s=Object(n["resolveComponent"])("el-button"),l=Object(n["resolveComponent"])("el-col"),d=Object(n["resolveComponent"])("el-image"),u=Object(n["resolveComponent"])("el-row"),b=Object(n["resolveComponent"])("router-link"),m=Object(n["resolveComponent"])("EnterEmail"),j=Object(n["resolveComponent"])("Footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(i),Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("section",N,[Object(n["createElementVNode"])("div",V,[Object(n["createVNode"])(u,{gutter:40},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{lg:12,class:"flex-align-center"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",x,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title1)+" ",1),Object(n["createElementVNode"])("div",w,Object(n["toDisplayString"])(e.title2),1)]),y,Object(n["createVNode"])(s,{type:"primary",class:"btn"},{default:Object(n["withCtx"])((function(){return[k]})),_:1}),Object(n["createVNode"])(s,{type:"primary",plain:"",class:"btn btn2"},{default:Object(n["withCtx"])((function(){return[E]})),_:1})])]})),_:1}),Object(n["createVNode"])(l,{lg:12},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{class:"img",src:"img/home-sct1.svg"})]})),_:1})]})),_:1})])]),Object(n["createElementVNode"])("section",C,[Object(n["createElementVNode"])("div",_,[Object(n["createVNode"])(u,{gutter:20},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.sct2,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{xs:12,sm:6,lg:3,key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{class:"img",src:e.img},null,8,["src"])]})),_:2},1024)})),128))]})),_:1})])]),Object(n["createElementVNode"])("section",T,[Object(n["createElementVNode"])("div",B,[S,M,Object(n["createVNode"])(u,{class:"nums",gutter:20},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{xs:12,sm:12,lg:6},{default:Object(n["withCtx"])((function(){return[A,D]})),_:1}),Object(n["createVNode"])(l,{xs:12,sm:12,lg:6},{default:Object(n["withCtx"])((function(){return[F,P]})),_:1}),Object(n["createVNode"])(l,{xs:12,sm:12,lg:6},{default:Object(n["withCtx"])((function(){return[L,I]})),_:1}),Object(n["createVNode"])(l,{xs:12,sm:12,lg:6},{default:Object(n["withCtx"])((function(){return[z,R]})),_:1})]})),_:1}),G])]),Object(n["createElementVNode"])("section",W,[Object(n["createElementVNode"])("div",H,[Object(n["createVNode"])(u,{gutter:40},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{lg:12,class:"flex-align-center"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[U,$,K,Object(n["createVNode"])(s,{class:"btn"},{default:Object(n["withCtx"])((function(){return[q]})),_:1})])]})),_:1}),Object(n["createVNode"])(l,{lg:12},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{class:"img",src:"img/home-sct4.svg"})]})),_:1})]})),_:1})])]),Object(n["createElementVNode"])("section",J,[Object(n["createElementVNode"])("div",Z,[Y,Object(n["createVNode"])(d,{class:"img",src:"img/home-sct5.svg"})])]),Object(n["createElementVNode"])("section",Q,[Object(n["createElementVNode"])("div",X,[ee,te,Object(n["createVNode"])(u,{class:"list",gutter:40},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.sct6,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{sm:12,lg:6,key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",ce,[Object(n["createVNode"])(d,{class:"img",src:e.img},null,8,["src"]),Object(n["createElementVNode"])("div",ne,Object(n["toDisplayString"])(e.title),1),Object(n["createElementVNode"])("div",re,Object(n["toDisplayString"])(e.desc),1)])]})),_:2},1024)})),128))]})),_:1})])]),Object(n["createElementVNode"])("section",oe,[Object(n["createElementVNode"])("div",ae,[Object(n["createElementVNode"])("div",ie,[se,Object(n["createElementVNode"])("div",le,[Object(n["createVNode"])(b,{class:"link active",to:"/development"},{default:Object(n["withCtx"])((function(){return[de]})),_:1}),Object(n["createVNode"])(b,{class:"link",to:"/research"},{default:Object(n["withCtx"])((function(){return[ue]})),_:1}),Object(n["createVNode"])(b,{class:"link",to:"/events"},{default:Object(n["withCtx"])((function(){return[be]})),_:1}),Object(n["createVNode"])(b,{class:"link",to:"/media"},{default:Object(n["withCtx"])((function(){return[me]})),_:1})])]),Object(n["createVNode"])(u,{class:"list",gutter:40},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.sct8,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{sm:12,lg:8,key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",je,[Object(n["createElementVNode"])("div",{class:"img",style:Object(n["normalizeStyle"])({backgroundImage:"url("+e.img+")"})},null,4),Object(n["createElementVNode"])("div",Oe,[Object(n["createElementVNode"])("div",fe,Object(n["toDisplayString"])(e.time),1),Object(n["createElementVNode"])("div",pe,Object(n["toDisplayString"])(e.title),1)])])]})),_:2},1024)})),128))]})),_:1})])]),Object(n["createElementVNode"])("section",ge,[Object(n["createElementVNode"])("div",he,[ve,Object(n["createVNode"])(u,{gutter:10},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.sct9,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{xs:8,sm:6,md:4,lg:3,key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{class:"img",fit:"cover",src:e.img},null,8,["src"])]})),_:2},1024)})),128))]})),_:1})])]),Object(n["createElementVNode"])("section",Ne,[Object(n["createElementVNode"])("div",Ve,[xe,Object(n["createVNode"])(u,{gutter:10},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.sct9,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{xs:8,sm:6,md:4,lg:3,key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{class:"img",fit:"cover",src:e.img},null,8,["src"])]})),_:2},1024)})),128))]})),_:1})])]),Object(n["createElementVNode"])("section",we,[Object(n["createElementVNode"])("div",ye,[ke,Object(n["createVNode"])(u,{gutter:10},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.sct9,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{xs:8,sm:6,md:4,lg:3,key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{class:"img",fit:"cover",src:e.img},null,8,["src"])]})),_:2},1024)})),128))]})),_:1})])]),Object(n["createElementVNode"])("section",Ee,[Object(n["createElementVNode"])("div",Ce,[_e,Object(n["createVNode"])(u,{gutter:10},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.sct9,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{xs:8,sm:6,md:4,lg:3,key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{class:"img",fit:"cover",src:e.img},null,8,["src"])]})),_:2},1024)})),128))]})),_:1})])])]),Object(n["createVNode"])(m),Object(n["createVNode"])(j)],64)}var Be=c("1da1"),Se=(c("96cf"),c("fb62")),Me=c("4cf1"),Ae=c("fd2d"),De=(c("8405"),Object(n["defineComponent"])({components:{Menu:Se["a"],EnterEmail:Me["a"],Footer:Ae["a"]},data:function(){return{title1:"",title2:"",sct2:[],sct6:[],sct8:[],sct9:[]}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(Be["a"])(regeneratorRuntime.mark((function t(){var c,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e.doSct1(),c=[],n=0;n<8;n++)c.push({img:"img/placeholder.svg"});for(e.sct2=c,e.sct6=[{img:"img/home-sct6-1.svg",title:"Cross-border shopping",desc:"No limits, shopping anywhere anytime, no matter where you are or where the products are produced."},{img:"img/home-sct6-2.svg",title:"No currency restrictions",desc:"You don’t need a valid bank account to be able to buy stuff from a region-specific market, just use your crypto assets."},{img:"img/home-sct6-3.svg",title:"Low rates",desc:"Using Mainet to purchase global goods, you can enjoy the extremely low payment rate and efficient confirmation time of blockchain."},{img:"img/home-sct6-4.svg",title:"Open scalability",desc:"Support developers to customize access, access Mainet's ecosystem using Mainet's protocol, SDK and documentation, and obtain corresponding rewards "},{img:"img/home-sct6-5.svg",title:"privacy Reserving",desc:"No private info will be saved publicly ever. All is secured and only available to the broker who handles your transaction for a short period of time."},{img:"img/home-sct6-6.svg",title:"security",desc:"Mainet takes different measures to ensure your funds are always safe, thanks to the nature of blockchain, all txs are known by  nodes and no one can deny it."},{img:"img/home-sct6-7.svg",title:"Developer Experience",desc:"Mainet is creating a developer-friendly community to help grow the ecosystem. There will be protocol, SDK, API docs, grants, hackthons, etc.."},{img:"img/home-sct6-8.svg",title:"Modularity",desc:"High customizability, extensibility and upgradeability, short time-to-market, community collaboration"}],e.sct8=[{title:"Efficiently purchase goods and services across the globe",time:"24 May 2021.12.min read",img:"img/placeholder.svg"},{title:"Efficiently purchase goods and services across the globe",time:"24 May 2021.12.min read",img:"img/placeholder.svg"},{title:"Efficiently purchase goods and services across the globe",time:"24 May 2021.12.min read",img:"img/placeholder.svg"},{title:"Efficiently purchase goods and services across the globe",time:"24 May 2021.12.min read",img:"img/placeholder.svg"},{title:"Efficiently purchase goods and services across the globe",time:"24 May 2021.12.min read",img:"img/placeholder.svg"},{title:"Efficiently purchase goods and services across the globe",time:"24 May 2021.12.min read",img:"img/placeholder.svg"}],r=[],o=0;o<16;o++)r.push({img:"img/placeholder.svg"});e.sct9=r;case 9:case"end":return t.stop()}}),t)})))()},doSct1:function(){var e=this;return Object(Be["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.typeWord("title1","ShopFi: Entrance to");case 2:return t.next=4,e.typeWord("title2","E-commerce 3.0");case 4:case"end":return t.stop()}}),t)})))()},typeWord:function(e,t){var c=this;return Object(Be["a"])(regeneratorRuntime.mark((function n(){var r,o,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=c,r[e]="",o=0,a=t.length,i=null,n.abrupt("return",new Promise((function(c){i=setInterval((function(){r[e]+=t.charAt(o),o++===a&&(clearInterval(i),o=0,c())}),100)})));case 6:case"end":return n.stop()}}),n)})))()}}}));const Fe=O()(De,[["render",Te]]);var Pe=Fe,Le={class:"page-404"},Ie={class:"sct1 contain"};function ze(e,t,c,r,o,a){var i=Object(n["resolveComponent"])("Menu"),s=Object(n["resolveComponent"])("lottie"),l=Object(n["resolveComponent"])("EnterEmail"),d=Object(n["resolveComponent"])("Footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(i,{activeIndex:"404"}),Object(n["createElementVNode"])("div",Le,[Object(n["createElementVNode"])("section",Ie,[Object(n["createVNode"])(s,{path:"img/json/404.json"})])]),Object(n["createVNode"])(l),Object(n["createVNode"])(d)],64)}var Re=Object(n["defineComponent"])({components:{Menu:Se["a"],EnterEmail:Me["a"],Footer:Ae["a"]}});c("76e8");const Ge=O()(Re,[["render",ze]]);var We=Ge,He=[{path:"/",name:"home",meta:{title:"Home"},component:Pe},{path:"/about",meta:{title:"About"},component:function(){return c.e("general").then(c.bind(null,"f820"))}},{path:"/join-team",meta:{title:"Join Team"},component:function(){return c.e("general").then(c.bind(null,"fec9"))}},{path:"/brand-assets",meta:{title:"Brand Assets"},component:function(){return c.e("general").then(c.bind(null,"015e"))}},{path:"/contact",meta:{title:"Contact"},component:function(){return c.e("support").then(c.bind(null,"b8fa"))}},{path:"/solutions",meta:{title:"Solutions"},component:function(){return c.e("mainet").then(c.bind(null,"70e4"))}},{path:"/broker",meta:{title:"Broker"},component:function(){return c.e("mainet").then(c.bind(null,"e472"))}},{path:"/node-maintainers",meta:{title:"Node Maintainers"},component:function(){return c.e("mainet").then(c.bind(null,"3358"))}},{path:"/dev-res",meta:{title:"Developer Resources"},component:function(){return c.e("develop").then(c.bind(null,"4105"))}},{path:"/tokenomics",meta:{title:"Tokenomics"},component:function(){return c.e("mainet").then(c.bind(null,"d043"))}},{path:"/transparency",meta:{title:"Transparency"},component:function(){return c.e("mainet").then(c.bind(null,"1a36"))}},{path:"/stats",meta:{title:"Stats"},component:function(){return c.e("mainet").then(c.bind(null,"ed93"))}},{path:"/dao",meta:{title:"DAO"},component:function(){return c.e("general").then(c.bind(null,"9e73"))}},{path:"/404",meta:{title:"Not Found"},component:We},{path:"/:pathMatch(.*)*",meta:{title:"Not Found"},component:We}],Ue=Object(h["a"])({history:Object(h["b"])("/"),routes:He});Ue.beforeEach((function(e,t,c){document.title=(e.meta.title||e.name)+"  -  Mainet Network",c()}));var $e=Ue,Ke=Object(n["createApp"])(g);for(var qe in i)Ke.component(qe,i[qe]);Ke.component("lottie",b["a"]),Ke.use(r["a"]),Ke.use($e),Ke.mount("#app")},cdbf:function(e,t,c){},d532:function(e,t,c){"use strict";c("f7fc")},f00f:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));c("ac1f"),c("00b4");function n(e){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e)}},f7fc:function(e,t,c){},fb62:function(e,t,c){"use strict";c("99af");var n=c("7a23"),r={class:"cpn-menu cpn-menu-box"},o={class:"text"},a={class:"desc"},i=Object(n["createTextVNode"])("Get started");function s(e,t,c,s,l,d){var u=Object(n["resolveComponent"])("el-image"),b=Object(n["resolveComponent"])("router-link"),m=Object(n["resolveComponent"])("el-menu-item"),j=Object(n["resolveComponent"])("ico-right"),O=Object(n["resolveComponent"])("el-icon"),f=Object(n["resolveComponent"])("el-sub-menu"),p=Object(n["resolveComponent"])("el-button"),g=Object(n["resolveComponent"])("el-menu");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createVNode"])(b,{to:"/",class:"logo"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{src:"img/logo.svg"})]})),_:1}),Object(n["createVNode"])(g,{class:"menu","default-active":e.activeIndex,mode:"horizontal",onSelect:e.handleSelect,router:""},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.menus,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:t},[e.children?e.children.length?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:1,index:e.id,"show-timeout":0,"popper-class":"cpn-menu popper"},{title:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.text),1)]})),default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.children,(function(e,c){return Object(n["openBlock"])(),Object(n["createBlock"])(m,{index:e.id,class:"item",key:"".concat(t,"-").concat(c)},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[e.img?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,class:"img",src:e.img},null,8,["src"])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",o,Object(n["toDisplayString"])(e.text),1),Object(n["createElementVNode"])("div",a,Object(n["toDisplayString"])(e.desc),1),Object(n["createVNode"])(O,{class:"arrow"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j)]})),_:1})])]})),_:2},1032,["index"])})),128))]})),_:2},1032,["index"])):Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:0,index:e.id},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.text),1)]})),_:2},1032,["index"]))],64)})),128)),Object(n["createVNode"])(m,{index:"get-started"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{type:"primary"},{default:Object(n["withCtx"])((function(){return[i]})),_:1})]})),_:1})]})),_:1},8,["default-active","onSelect"])])}var l=Object(n["defineComponent"])({data:function(){return{menus:[{id:"solutions",text:"Solutions",children:[{id:"solutions",text:"Mainet",desc:"Mainet opens Shopfi new ecology",img:"img/icon/menu-mainet.svg"},{id:"broker",text:"Broker",desc:"Get rewarded by contributing to E-commerce 3.0",img:"img/icon/menu-broker.svg"},{id:"node-maintainers",text:"Node Maintainers",desc:"Contribue by maintaining a Maine Node",img:"img/icon/menu-node-maintainers.svg"}]},{id:"news",text:"News"},{id:"developer",text:"Developer",children:[{id:"dev-res",text:"Developer Resources",desc:"tutorials and technical support",img:"img/icon/menu-dev-res.svg"},{id:"tools-sdks",text:"Tools & SDKs",desc:"Mainet offers you an abundance of tools and SDKs to help you build.",img:"img/icon/menu-tools-sdks.svg"},{id:"api-references",text:"API references",desc:"There are multiple references to help you build at any level.",img:"img/icon/menu-api-references.svg"}]},{id:"DAO",text:"DAO"},{id:"tokenomics",text:"Tokenomics"},{id:"stats",text:"Stats"},{id:"about",text:"About",children:[{id:"about",text:"Team",desc:"Mainet is built by a decentralized team spread acrossing the globe.",img:"img/icon/menu-team.svg"},{id:"join-team",text:"Careers",desc:"Join a Growing Team of Industry Experts",img:"img/icon/menu-careers.svg"},{id:"brand-assets",text:"Brand",desc:"Get all types of logos and token symbol",img:"img/icon/menu-brand-assets.svg"}]},{id:"contact",text:"Contact"}]}},setup:function(){var e=Object(n["ref"])("home"),t=function(e,t){console.log(e,t)};return{activeIndex:e,handleSelect:t}}}),d=(c("d532"),c("6b0d")),u=c.n(d);const b=u()(l,[["render",s]]);t["a"]=b},fd2d:function(e,t,c){"use strict";var n=c("7a23"),r={class:"cpn-footer"},o={class:"contain"},a=Object(n["createElementVNode"])("div",{class:"info"},[Object(n["createTextVNode"])(" Partnership, Collaboration, Business or "),Object(n["createElementVNode"])("br"),Object(n["createTextVNode"])(" General inquiries: "),Object(n["createElementVNode"])("a",{class:"mail",href:"mailto:business@mainet.network"},"business@mainet.network"),Object(n["createElementVNode"])("br"),Object(n["createTextVNode"])(" Press inquiries: "),Object(n["createElementVNode"])("a",{class:"mail",href:"mailto:support@mainet.network"},"support@mainet.network"),Object(n["createElementVNode"])("br"),Object(n["createTextVNode"])(" We will contact you shortly! ")],-1),i={class:"acct"},s=Object(n["createElementVNode"])("div",{class:"t1"},"General",-1),l=Object(n["createTextVNode"])("About us"),d=Object(n["createTextVNode"])("Careers"),u=Object(n["createTextVNode"])("Brand Assets"),b=Object(n["createTextVNode"])("Community"),m=Object(n["createTextVNode"])("DAO"),j=Object(n["createTextVNode"])("Whitepaper"),O=Object(n["createElementVNode"])("div",{class:"t1"},"Mainet",-1),f=Object(n["createTextVNode"])("Solutions"),p=Object(n["createTextVNode"])("Broker"),g=Object(n["createTextVNode"])("Node Maintainers"),h=Object(n["createTextVNode"])("Tokenomics"),v=Object(n["createTextVNode"])("Stats"),N=Object(n["createTextVNode"])("Transparency"),V=Object(n["createElementVNode"])("div",{class:"t1"},"Develop",-1),x=Object(n["createTextVNode"])("Tech Support"),w=Object(n["createTextVNode"])("Dev Docs"),y=Object(n["createTextVNode"])("GitHub"),k=Object(n["createTextVNode"])("Bug Bounty"),E=Object(n["createElementVNode"])("div",{class:"t1"},"Support",-1),C=Object(n["createTextVNode"])("Contact"),_=Object(n["createTextVNode"])("Help Center"),T=Object(n["createTextVNode"])("Agreement & Conditionos"),B=Object(n["createTextVNode"])("Purchase terms"),S=Object(n["createTextVNode"])("Terms of Service"),M=Object(n["createTextVNode"])("Privacy Policy"),A=Object(n["createElementVNode"])("div",{class:"copyright"},"Copyright 2021 @ Mainet Network. All rights reserved.",-1);function D(e,t,c,D,F,P){var L=Object(n["resolveComponent"])("el-image"),I=Object(n["resolveComponent"])("router-link"),z=Object(n["resolveComponent"])("el-col"),R=Object(n["resolveComponent"])("el-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])("footer",r,[Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(I,{to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(L,{src:"img/logo-white.svg"})]})),_:1}),Object(n["createVNode"])(R,{gutter:20},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(z,{md:10},{default:Object(n["withCtx"])((function(){return[a,Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(I,{class:"item",target:"_blank",to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(L,{src:"img/icon/github.svg"})]})),_:1}),Object(n["createVNode"])(I,{class:"item",target:"_blank",to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(L,{src:"img/icon/telegram.svg"})]})),_:1}),Object(n["createVNode"])(I,{class:"item",target:"_blank",to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(L,{src:"img/icon/twitter.svg"})]})),_:1}),Object(n["createVNode"])(I,{class:"item",target:"_blank",to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(L,{src:"img/icon/discord.svg"})]})),_:1}),Object(n["createVNode"])(I,{class:"item",target:"_blank",to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(L,{src:"img/icon/medium-m.svg"})]})),_:1})])]})),_:1}),Object(n["createVNode"])(z,{sm:14},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R,{gutter:20},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(z,{sm:12,md:6},{default:Object(n["withCtx"])((function(){return[s,Object(n["createVNode"])(I,{class:"link",to:"/about"},{default:Object(n["withCtx"])((function(){return[l]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/join-team"},{default:Object(n["withCtx"])((function(){return[d]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/brand-assets"},{default:Object(n["withCtx"])((function(){return[u]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/community"},{default:Object(n["withCtx"])((function(){return[b]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/dao"},{default:Object(n["withCtx"])((function(){return[m]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/whitepaper"},{default:Object(n["withCtx"])((function(){return[j]})),_:1})]})),_:1}),Object(n["createVNode"])(z,{sm:12,md:6},{default:Object(n["withCtx"])((function(){return[O,Object(n["createVNode"])(I,{class:"link",to:"/solutions"},{default:Object(n["withCtx"])((function(){return[f]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/broker"},{default:Object(n["withCtx"])((function(){return[p]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/node-maintainers"},{default:Object(n["withCtx"])((function(){return[g]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/tokenomics"},{default:Object(n["withCtx"])((function(){return[h]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/stats"},{default:Object(n["withCtx"])((function(){return[v]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/transparency"},{default:Object(n["withCtx"])((function(){return[N]})),_:1})]})),_:1}),Object(n["createVNode"])(z,{sm:12,md:6},{default:Object(n["withCtx"])((function(){return[V,Object(n["createVNode"])(I,{class:"link",to:"/tech-support"},{default:Object(n["withCtx"])((function(){return[x]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/dev-docs"},{default:Object(n["withCtx"])((function(){return[w]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/gitHub"},{default:Object(n["withCtx"])((function(){return[y]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/bug-bounty"},{default:Object(n["withCtx"])((function(){return[k]})),_:1})]})),_:1}),Object(n["createVNode"])(z,{sm:12,md:6},{default:Object(n["withCtx"])((function(){return[E,Object(n["createVNode"])(I,{class:"link",to:"/contact"},{default:Object(n["withCtx"])((function(){return[C]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/help"},{default:Object(n["withCtx"])((function(){return[_]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/agreement"},{default:Object(n["withCtx"])((function(){return[T]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/purchase-terms"},{default:Object(n["withCtx"])((function(){return[B]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/terms-service"},{default:Object(n["withCtx"])((function(){return[S]})),_:1}),Object(n["createVNode"])(I,{class:"link",to:"/privacy-policy"},{default:Object(n["withCtx"])((function(){return[M]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]),A])}var F={},P=(c("85c6"),c("6b0d")),L=c.n(P);const I=L()(F,[["render",D]]);t["a"]=I}});