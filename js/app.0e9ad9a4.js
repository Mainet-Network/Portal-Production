(function(e){function t(t){for(var o,a,i=t[0],s=t[1],l=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={app:0},c=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"3d39":function(e,t,r){},"9f70":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");for(var o=r("7a23"),n=r("c3a1"),c=(r("7437"),r("ac1f"),r("5319"),r("1ed2")),a=["Right","ArrowLeftBold","ArrowRightBold"],i={},s=0,l=a;s<l.length;s++){var u=l[s];i[d(u)]=c[u]}function d(e){return"ico"+e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))}var m=r("7926");r("3d39");function f(e,t){var r=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(r)}var p=r("d959"),b=r.n(p);const g={},h=b()(g,[["render",f]]);var v=h,O=(r("b0c0"),r("6c02")),j={class:"page-coming-soon"},w={class:"contain sct1 text-center"},y={href:"https://mainet.network",class:"logo"},k=Object(o["createElementVNode"])("div",{class:"t-small t1"}," Mainet is committed to creating a #Shopfi transaction and shopping platform combining cryptocurrency and traditional global e-commerce. Our ultimate goal is to provide infrastructure for blockchain, create value for blockchain ecology, better solve the problem of transaction settlement, and create a new model and new world of mutual trust, security, openness, and sharing. ",-1),N={class:"acct"},V={class:"item",target:"_blank",href:"https://github.com/mainet-network"},E={class:"item",target:"_blank",href:"https://t.me/mainetofficial"},_={class:"item",target:"_blank",href:"https://twitter.com/mainet_network"},x={class:"item",target:"_blank",href:"https://discord.gg/TUVqu5q68D"},B={class:"item",target:"_blank",href:"https://mainet.medium.com"},M=Object(o["createElementVNode"])("div",{class:"copyright"},"Copyright 2021 @ Mainet Network. All rights reserved.",-1);function P(e,t,r,n,c,a){var i=Object(o["resolveComponent"])("el-image");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",j,[Object(o["createElementVNode"])("section",w,[Object(o["createElementVNode"])("a",y,[Object(o["createVNode"])(i,{src:"img/logo.svg"})]),Object(o["createVNode"])(i,{class:"img",fit:"contain",src:"img/coming-soon-sct1.svg"}),k,Object(o["createElementVNode"])("div",N,[Object(o["createElementVNode"])("a",V,[Object(o["createVNode"])(i,{src:"img/icon/github.svg"})]),Object(o["createElementVNode"])("a",E,[Object(o["createVNode"])(i,{src:"img/icon/telegram.svg"})]),Object(o["createElementVNode"])("a",_,[Object(o["createVNode"])(i,{src:"img/icon/twitter.svg"})]),Object(o["createElementVNode"])("a",x,[Object(o["createVNode"])(i,{src:"img/icon/discord.svg"})]),Object(o["createElementVNode"])("a",B,[Object(o["createVNode"])(i,{src:"img/icon/medium-m.svg"})])]),M])])}var S={};r("dc96");const A=b()(S,[["render",P]]);var C=A,T=[{path:"/",meta:{title:"We are coming soon!"},component:C}],q=Object(O["a"])({history:Object(O["b"])("/"),routes:T,scrollBehavior:function(e,t,r){return r||(e.hash?{el:e.hash,behavior:"smooth"}:{top:0})}});q.beforeEach((function(e,t,r){document.title=(e.meta.title||e.name)+"  -  Mainet Network",r()}));var J=q,L=Object(o["createApp"])(v);for(var R in i)L.component(R,i[R]);L.component("lottie",m["a"]),L.use(n["a"]),L.use(J),L.mount("#app")},dc96:function(e,t,r){"use strict";r("9f70")}});