!function(){"use strict";var e,t,n,r,o,c={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=c,e=[],a.O=function(t,n,r,o){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||c>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<c&&(c=o));if(i){e.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},a.d(o,c),o},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return({24:"component---src-templates-question-js",100:"component---src-pages-banner-mobile-js",140:"component---src-templates-result-js",152:"5e2a4920",574:"component---src-pages-banner-desktop-js",678:"component---src-pages-index-js",697:"00553218f8f0a5410192759926c244007e6516c9",760:"a4d5d1cfa9aedda4801fe30180c81810e7ff2702",883:"component---src-pages-404-js"}[e]||e)+"-"+{24:"a750ea1c950bb3fc13c0",100:"b5e27e29989fa0f5ac21",140:"69fb54aaf0b57f4d0bf9",152:"5d6705d96080c98ac5c6",175:"9f83d57959ab22db1f2b",231:"522ef81ef1a96a087d5c",334:"0b44cf0dd3fbf74eecfe",574:"0f500716239e7919effd",678:"2da6729eb8c9340186a4",697:"18a7236915e1ae23594e",760:"dddd2399c316d3d0608b",883:"4e7c76855de2d117192b",987:"4cbc68fea13eefb81c94"}[e]+".js"},a.miniCssF=function(e){return"styles.105146036a9dcd95944d.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="styled-gatsby-starter:",a.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var i,u;if(void 0!==n)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",o+n),i.src=e),r[e]=[t];var l=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),u&&document.head.appendChild(i)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.p="/",function(){var e={658:0,532:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=a.p+a.u(t),i=new Error;a.l(c,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",i.name="ChunkLoadError",i.type=o,i.request=c,r[1](i)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],i=n[1],u=n[2],f=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(u)var s=u(a)}for(t&&t(n);f<c.length;f++)o=c[f],a.o(e,o)&&e[o]&&e[o][0](),e[c[f]]=0;return a.O(s)},n=self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-911d30da10e3542f05fa.js.map