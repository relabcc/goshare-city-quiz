(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[678],{918:function(e,t,n){"use strict";var a=n(7294),r=n(9947);t.Z=function(e,t,n){if(!r.jU)return[t,function(){}];var i=(0,a.useState)((function(){try{var a=sessionStorage.getItem(e);return"string"!=typeof a?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?a:JSON.parse(a||"null")}catch(i){return t}})),c=i[0],o=i[1];return(0,a.useEffect)((function(){try{var t=n?String(c):JSON.stringify(c);sessionStorage.setItem(e,t)}catch(i){}})),[c,o]}},8123:function(e,t,n){"use strict";var a=n(1469),r=n.n(a),i=n(8400),c=n.n(i),o=n(8020),s=function(e){return new Promise((function(t){var n=new Image;n.onload=function(){return setTimeout(t)},function(){var e=document.getElementById("re-image-preloader");return e||((e=document.createElement("div")).setAttribute("id","re-image-preloader"),e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",e.style.zIndex="-999",e.style.width="1px",document.body.appendChild(e)),e}().appendChild(n),n.src=r()(e)?(0,o.g)(e):(null==e?void 0:e.default)||e}))};t.Z=function(e){if(r()(e)){var t=c()(e.filter(Boolean),6);return t.length>1?t.reduce((function(e,t){return e.then((function(){return Promise.all(t.map(s))}))}),Promise.resolve()):Promise.all(e.map(s))}return s(e)}},9571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});n(5444);var a,r=n(1401),i=n(7294),c=n(2359),o=n(5230),s=n(5708),u=n(494),l=n(918),f=n(3941),m=(n(3347),n(9370)),d=n(8126),p=n(6810),g=n(7364),b=n(8123),h=n(8142),Z=n(1779),v=n(4774),x=(0,u.Z)(Z.Z)(a||(a=(0,r.Z)(["\n  @media (min-width: 784px) {\n    background-color: transparent;\n  }\n  @media (min-height: 640px) and (min-width: 784px) {\n    .footer {\n      padding-top: 0px;\n      padding-bottom: 0px;\n      position: absolute;\n      transform: translateX(-50%);\n      background: transparent;\n    }\n  }\n  @media (max-height: 639px) {\n    .footer {\n      padding-top: 2em;\n      padding-bottom: 2em;\n    }\n  }\n  @media (min-height: 811px) and (min-width: 784px) {\n    height: 812px;\n  }\n  @media (min-height: 640px) and (max-width: 784px) {\n    .main-wrapper {\n      height: calc(100% - 56px);\n    }\n  }\n  @media (max-height: 639px) and (min-width: 784px) {\n    .main-wrapper {\n      height: auto;\n    }\n  }\n"]))),w=function(){var e=(0,s.u6)().resetForm,t=(0,l.Z)("view-home")[1],a=(0,o.useToken)("colors",["custom.teal"])[0];return(0,i.useEffect)((function(){t(!0),setTimeout(e)}),[]),i.createElement(x,{footerProps:{bg:"custom.lightBlueBg",maxWidth:(0,v.jW)("auto","375px"),mx:"auto",position:"static",left:"50%",bottom:"2em",pb:"2em"},noPt:!0,headerColor:"white",height:"100%",bg:"custom.lightBlueBg"},i.createElement(f.Z,{className:"main-wrapper",bg:"custom.lightBlueBg",height:(0,v.jW)("auto","100%"),maxWidth:(0,v.jW)("auto","375px"),m:"auto"},i.createElement(c.S,{src:"../../image/banner.png",alt:"主視覺",layout:"fullWidth",placeholder:"none",formats:["auto"],onLoad:function(){return(0,b.Z)([h.W[0]])},__imageData:n(3440)}),i.createElement(f.Z,{mt:(0,v.jW)("0","5vh"),zIndex:5},i.createElement(p.Z,{textAlign:"center"},i.createElement(m.Z,{fontSize:"1em",fontWeight:"bold",color:"custom.darkBlue",textAlign:"center",lineHeight:"1.75"},"悶了好久，超想出國玩一波！",i.createElement("br",null),"憑直覺決定 6 件生活小事，",i.createElement("br",null),"開門抵達和你最配的旅行地！"),i.createElement(d.Z.Yellow,{as:function(e){return i.createElement(g.Z,Object.assign({hex:a},e))},my:(0,v.jW)("1.375rem","1.5em"),to:"q/1",maxWidth:"180px",height:"50px",fontSize:"1em"},"進入 OMG 任意門"),i.createElement(m.Z,{fontSize:"0.875em",color:"custom.textGray",textAlign:"center"},"完成測驗領取驚喜彩蛋，",i.createElement("br",null),"9.10 前騎乘 GoShare，",i.createElement("br",null),"憑發票就抽歐美十大度假勝地雙人來回機票！")))))}},8142:function(e,t,n){"use strict";n.d(t,{Z:function(){return J},W:function(){return _}});var a=n(6162),r=n.n(a),i=n(7294),c=n(5444),o=n(5708),s=n(3750),u=n(2543),l=n(4667),f=n(7242);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=(0,u.G)((function(e,t){var n=e.icon,a=e.children,r=e.isRound,c=e["aria-label"],o=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["icon","children","isRound","aria-label"]),s=n||a,u=i.isValidElement(s)?i.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(f.z,m({padding:"0",borderRadius:r?"full":void 0,ref:t,"aria-label":c},o),u)}));l.Ts&&(d.displayName="IconButton");var p=n(5230),g=n(132),b=n(2437),h=n(466),Z=n(1531),v=n(1469),x=n.n(v),w=n(928),E=n.n(w),y=n(6767),j=["src","alt"],k={gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpeg",png:"image/png",tiff:"image/tiff",tif:"image/tiff",webp:"image/webp"},S=/data:(\w+\/\w+);base64/,O=(0,i.forwardRef)((function(e,t){var n=e.src,a=e.alt,r=(0,Z.Z)(e,j),c=(0,i.useMemo)((function(){return x()(n)?{sources:n.map((function(e){var t=S.exec(e),n=t?t[1]:k[E()(e.split("."))];return{srcSet:e,type:n}})),fallback:E()(n)}:null}),[n]);return x()(n)?i.createElement(y.E,Object.assign({as:"picture"},r,{ref:t}),c.sources.map((function(e,t){return i.createElement("source",Object.assign({key:t},e))})),i.createElement("img",{src:c.fallback,alt:a})):i.createElement(y.E,Object.assign({src:n,alt:a},r,{ref:t}))}));O.defaultProps={width:"100%"},O.displayName="Image";var W=O,q=n(3941),B=n(9370),I=n(3347),C=n(8126),z=n(7364),A=n(4774),N=n(545),P=JSON.parse('{"istanbul":[[12,20,0],[12,0,8],[20,12,0],[16,0,8],[20,0,4],[20,8,0]],"hawaii":[[16,0,8],[16,0,12],[20,4,0],[4,0,16],[8,4,20],[20,12,0]],"ibiza":[[12,0,16],[12,0,4],[20,8,0],[12,0,20],[16,4,8],[16,12,0]],"amsterdam":[[0,16,8],[0,4,12],[0,20,8],[8,20,4],[0,16,8],[12,20,0]],"nice":[[8,0,16],[0,8,16],[8,16,0],[0,16,12],[0,12,20],[16,8,0]],"iceland":[[8,16,4],[0,16,4],[0,8,20],[16,8,0],[20,8,0],[0,8,20]],"moscow":[[20,12,0],[20,8,0],[12,8,4],[20,0,4],[20,0,8],[4,0,20]],"stockholm":[[4,12,8],[4,16,8],[8,16,4],[20,0,4],[0,4,20],[4,20,8]],"munich":[[8,20,0],[0,20,4],[0,16,8],[12,20,4],[8,12,0],[0,16,12]],"nyc":[[20,4,0],[16,12,0],[4,8,20],[12,0,4],[20,0,8],[12,0,20]]}'),_=[[n(8487).Z,n(8895).Z],[n(3286).Z,n(4478).Z],[n(7598).Z,n(6078).Z],[n(7879).Z,n(7383).Z],[n(1865).Z,n(896).Z],[n(4205).Z,n(7381).Z]],T=Object.values(P),G=Object.keys(P),J=function(e){var t=e.data,n=e.pageContext,a=n.id,u=n.isLast,l=n.length,f=e.onNext,m=e.onPrev,Z=(0,i.useState)(),v=Z[0],x=Z[1],w=(0,i.useState)(),E=w[0],y=w[1],j=(0,p.useToken)("colors",["custom.teal"])[0],k=(0,o.u6)(),S=k.values,O=k.setFieldValue,P=(0,i.useRef)(),J=(0,i.useCallback)((function(e){var t=S.answers.slice(0,5).concat(e);x(!0);var n=T.reduce((function(e,n){var a=n.reduce((function(e,n,a){return e+=n[t[a]]||0}),0);return e.push(a),e}),[]),a=n.reduce((function(e,t,a){return t===r()(n)&&e.push(a),e}),[]),i=G[a[Math.floor(Math.random()*a.length)]];O("points",r()(n)),y(i)}),[S,O]);return(0,i.useEffect)((function(){E&&setTimeout((function(){P.current&&P.current.querySelector("a").click()}))}),[E]),i.createElement(i.Fragment,null,i.createElement(I.Z,{alignItems:"flex-end",justifyContent:"space-around"},i.createElement(q.Z,{width:(0,A.jW)("100%","442px")},i.createElement(I.Z,{pb:"0.25em",alignItems:"center",justify:"space-between",borderBottom:"1px solid",borderColor:"custom.borderGray"},i.createElement(d,{as:"1"===a&&function(e){return i.createElement(c.Link,Object.assign({to:"/"},e))},w:"1.5em",h:"1.5em",mr:"0.25em",minWidth:"auto",bg:"transparent",color:"custom.darkBlue",icon:i.createElement(g.J,{as:s.Ao2,w:6,h:6}),isDisabled:v,_hover:{bg:"transparent"},onClick:function(){"1"!==a&&m()}}),i.createElement(B.Z,{fontSize:"1.5rem",letterSpacing:"0.125em",fontFamily:"Flama",color:"lightGray"},i.createElement(B.Z.Inline,{color:"gray"},a),"/",l)),i.createElement(B.Z,{mt:"0.5em",fontWeight:"500",color:"custom.darkBlue",fontSize:"1.125em"},t.question),i.createElement(q.Z,{pt:(0,A.jW)("1em","3em"),px:"9%"},i.createElement(b.o,{ratio:768/605},i.createElement(W,{alt:"Q"+a,src:_[a-1]}))),i.createElement(q.Z,null,t.options.map((function(e,t){return i.createElement(q.Z,{as:h.E.div,whileTap:{scale:1.1},mt:t&&"1em",key:t},i.createElement(C.Z,{onClick:function(e){u||f(),(0,N.t6)(a,t),O("answers."+(a-1),t),u&&J(t)},width:"100%",isDisabled:v,isActive:S.answers[+a-1]===t,_hover:{bg:(0,A.jW)("custom.gray","custom.teal")},_active:{bg:"custom.teal"}},e))}))))),u&&i.createElement(q.Z.Absolute,{opacity:"0",width:"0",height:"0",overflow:"hidden",ref:P},i.createElement(z.Z,{tabIndex:"-1",hex:j,to:"/result/"+E})))}},4259:function(e){e.exports=function(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(r);++a<r;)i[a]=e[a+t];return i}},8400:function(e,t,n){var a=n(4259),r=n(6612),i=n(554),c=Math.ceil,o=Math.max;e.exports=function(e,t,n){t=(n?r(e,t,n):void 0===t)?1:o(i(t),0);var s=null==e?0:e.length;if(!s||t<1)return[];for(var u=0,l=0,f=Array(c(s/t));u<s;)f[l++]=a(e,u,u+=t);return f}},928:function(e){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},554:function(e,t,n){var a=n(8601);e.exports=function(e){var t=a(e),n=t%1;return t==t?n?t-n:t:0}},8895:function(e,t,n){"use strict";t.Z=n.p+"static/q1-7a49e49b237f8e032b2ddccd6e2336c0.png"},8487:function(e,t,n){"use strict";t.Z=n.p+"static/q1-f530067af586aef58872e02cb2f3fa10.webp"},4478:function(e,t,n){"use strict";t.Z=n.p+"static/q2-9e4a70df4fb8521fd55de4472dd4f9e2.png"},3286:function(e,t,n){"use strict";t.Z=n.p+"static/q2-b1f010be93b22bdbaf7eb0b78636eb0e.webp"},6078:function(e,t,n){"use strict";t.Z=n.p+"static/q3-9f7dd3f95f56311033d9df3b3137f031.png"},7598:function(e,t,n){"use strict";t.Z=n.p+"static/q3-dbab83a7db34c9eeb40239a85946e27f.webp"},7383:function(e,t,n){"use strict";t.Z=n.p+"static/q4-82f54154d7b5814e39e94d2fd1639fda.png"},7879:function(e,t,n){"use strict";t.Z=n.p+"static/q4-1e8492f09d964ce7fa6fb7d730682fc4.webp"},896:function(e,t,n){"use strict";t.Z=n.p+"static/q5-b10e4f8b617da320517c82314132251f.png"},1865:function(e,t,n){"use strict";t.Z=n.p+"static/q5-5b398bfcda23287ef7739f334f1a1691.webp"},7381:function(e,t,n){"use strict";t.Z=n.p+"static/q6-c136f39d28d603ac911aa53083a0acb5.png"},4205:function(e,t,n){"use strict";t.Z=n.p+"static/q6-a466b7699907abd2693febf300f9aca4.webp"},3440:function(e){"use strict";e.exports=JSON.parse('{"layout":"fullWidth","images":{"fallback":{"src":"/static/f9f4305839ee61a7b457a367bb436a66/c6fd8/banner.png","srcSet":"/static/f9f4305839ee61a7b457a367bb436a66/bee6d/banner.png 750w,\\n/static/f9f4305839ee61a7b457a367bb436a66/c6fd8/banner.png 834w","sizes":"100vw"},"sources":[]},"width":1,"height":0.8597122302158273}')}}]);
//# sourceMappingURL=component---src-pages-index-js-fd719b2d5b06b9c8c2d1.js.map