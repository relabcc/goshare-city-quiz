"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[24],{1046:function(e,a,t){t.d(a,{w_:function(){return i}});var c=t(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=c.createContext&&c.createContext(o),n=function(){return(n=Object.assign||function(e){for(var a,t=1,c=arguments.length;t<c;t++)for(var o in a=arguments[t])Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);return e}).apply(this,arguments)},f=function(e,a){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&a.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(e);o<c.length;o++)a.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(e,c[o])&&(t[c[o]]=e[c[o]])}return t};function s(e){return e&&e.map((function(e,a){return c.createElement(e.tag,n({key:a},e.attr),s(e.child))}))}function i(e){return function(a){return c.createElement(d,n({attr:n({},e.attr)},a),s(e.child))}}function d(e){var a=function(a){var t,o=e.attr,r=e.size,s=e.title,i=f(e,["attr","size","title"]),d=r||a.size||"1em";return a.className&&(t=a.className),e.className&&(t=(t?t+" ":"")+e.className),c.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,o,i,{className:t,style:n(n({color:e.color||a.color},a.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&c.createElement("title",null,s),e.children)};return void 0!==r?c.createElement(r.Consumer,null,(function(e){return a(e)})):a(o)}},5781:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});var c=t(6968),o=t.n(c),r=t(7294),n=t(5444),f=t(5708),s=t(3750),i=t(2543),d=t(4667),l=t(7242);function A(){return(A=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e}).apply(this,arguments)}var g=(0,i.G)((function(e,a){var t=e.icon,c=e.children,o=e.isRound,n=e["aria-label"],f=function(e,a){if(null==e)return{};var t,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["icon","children","isRound","aria-label"]),s=t||c,i=r.isValidElement(s)?r.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(l.z,A({padding:"0",borderRadius:o?"full":void 0,ref:a,"aria-label":n},f),i)}));d.Ts&&(g.displayName="IconButton");var w=t(2407),b=t(8917),m=t(3941),h=t(9370),p=t(3347),u=t(8126),y=t(6810),q=t(4774),E=t(4321),S="fullWidth",z={1:r.createElement(w.S,{alt:"Q1",src:"../image/q1.png",layout:S,__imageData:t(289)}),2:r.createElement(w.S,{alt:"Q2",src:"../image/q2.png",layout:S,__imageData:t(3120)}),3:r.createElement(w.S,{alt:"Q3",src:"../image/q3.png",layout:S,__imageData:t(4056)}),4:r.createElement(w.S,{alt:"Q4",src:"../image/q4.png",layout:S,__imageData:t(5202)}),5:r.createElement(w.S,{alt:"Q5",src:"../image/q5.png",layout:S,__imageData:t(9286)}),6:r.createElement(w.S,{alt:"Q6",src:"../image/q6.png",layout:S,__imageData:t(2613)})},C=function(e){var a=e.data,c=e.pageContext,i=c.id,d=c.isLast,l=c.length,A=(0,f.u6)(),S=A.values,C=A.submitForm,Z=A.isSubmitting,v=(0,r.useMemo)((function(){return S.answers.length<i-1}),[i,S.answers.length]);return(0,r.useEffect)((function(){v&&(0,n.navigate)("/q/"+(S.answers.length+1))}),[v]),v?null:r.createElement(E.Z,{noHeader:!0,bg:"white",footerProps:{pt:(0,q.jW)("1.25em","3.5em"),pb:"1.25em"},title:"第"+i+"題"},r.createElement(y.Z,{pt:(0,q.jW)("1em","3.5em")},r.createElement(m.Z,{mx:(0,q.jW)("auto",0),width:(0,q.jW)("6.375em","8.625em")},r.createElement(w.S,{src:"../containers/teal_logo.png",layout:"fullWidth",__imageData:t(6365)})),r.createElement(p.Z,{alignItems:"flex-end",justifyContent:"space-around"},r.createElement(m.Z,{width:"424px",as:q.pU,greaterThanOrEqual:"tablet"},z[i]),r.createElement(m.Z,null,r.createElement(p.Z,{pb:"0.25em",alignItems:"center",justify:"space-between",borderColor:"custom.borderGray",borderBottom:"1px solid"},r.createElement(g,{as:b.Z,fade:!0,w:"1.5em",h:"1.5em",mr:"0.25em",minWidth:"auto",bg:"transparent",color:"custom.darkBlue",icon:r.createElement(s.Ao2,{size:"2em"}),to:+i>1?"/q/"+(i-1):"/",isDisabled:Z}),r.createElement(h.Z,{fontSize:(0,q.jW)("1.5em","1.25em"),letterSpacing:"0.125em",fontFamily:"Flama",color:"lightGray"},r.createElement(h.Z.Inline,{color:"gray"},i),"/",l)),r.createElement(h.Z,{mt:(0,q.jW)("0.5em","2.375em"),fontWeight:"500",color:"custom.darkBlue",fontSize:(0,q.jW)("1.125em","1.25em")},null==a?void 0:a.questionsJson.question),r.createElement(m.Z,{as:q.pU,lessThan:"tablet",pt:"1em"},z[i]),r.createElement(m.Z,null,null==a?void 0:a.questionsJson.options.map((function(e,a){return r.createElement(m.Z,{mt:(0,q.jW)(a&&"1em",a?"1.25em":"3.25rem"),key:a},r.createElement(u.Z,{as:!d&&function(e){return r.createElement(b.Z,Object.assign({},e,{fade:!0,to:"/q/"+(+i+1)}))},onClick:function(){var e,t;o()(S,["answers",+i-1],a),e=i,t=a,window.gtag&&window.gtag("event","select_content\t",{content_type:"Answer",item_id:"Q"+e+"-"+(t+1)}),d&&C()},width:"100%",isDisabled:Z},e))})))))))}},3120:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQUlEQVQ4y4WUS2sUQRCA5yri1ZuCB8GDqOhJ4w/wLyiIeJfgSRAvQg5rIkgugqDiKaCCaNZolCDZDSgmqHFDXpslZkHJg2RNdmbn3d2fTM/MZvaRWIfu6u7qr6uKqjbIiNKD0nOHntoo1VVPxWg9VMQ20SBJ7aOzFpCUzXX7mZF9SSbz8qZgaMqN9+SusUj0x589ZlfDlvOUseshCiljffK35M4Hqb2MxLQDtkw/sZTcHQ2ZXAn1rYjX3UOlEDrSgHLF4tGYCY6tL40uSAaLQl/wpctgocFktQEETWCLh9FCRnmTMB7U6F1b52qpxoC3ionDm1JI3ycBYQNrfIaRoSXKr2fwZn8hkpR3AMMEeFn8wVCLHBAVDsoKm8Ffvv40eTZhgVXDelqg/mAUs3+ExvMvcVK6eaiBCq6LVQwWMSjTE1R54dpcqzhc+eFwX/lUi/M49/LUc3kar6bikpL7AHvFmvYwAp4Iq5w0fYy6x6EdF8MTjBXmUP1v2Y6A+e//B94WG03gMbHCadPjkhNw3PI0sPixpIE7uTz2++l9gMnGQLiJoeYxWOCoWOac5XLTE/S5IUd8wcS7aURumO3cMHZhLil01aUOk42aCHgZbvMkrDERmFywPC7aAbe8kDO2z7etOiyv46xsIFy/o1taOqVZoGkDS8XZKFTL57wTcNj0WEqqX+7Rzx0epuH7OqeSh7ZHj+lyynS5YTnYQsRlkgmzw8N2YNo56Y9DBNEgSbaz9vwc2kVlYDLzfcmWh+kq/wAFNq+bVYNpEAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/32e93/q2.png","srcSet":"/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/fb6cf/q2.png 750w,\\n/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/75c1a/q2.png 1080w,\\n/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/a7fc0/q2.png 1366w,\\n/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/32e93/q2.png 1524w","sizes":"100vw"},"sources":[{"srcSet":"/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/3f360/q2.webp 750w,\\n/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/9b882/q2.webp 1080w,\\n/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/d8f1e/q2.webp 1366w,\\n/omg-anywhere-door/static/8f8fc60c2a2d49374b2d31299101e795/ab0ea/q2.webp 1524w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7874015748031495}')},2613:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVQ4y22Ty08TQRzH+1+YePLo0ZuJZzUeTDTxTaIhMZL4igcPSrhqNBiIBhENBE0ECSoqhAJaX0BLeVbT8FYoS4vaVuW53XZ3Zj5mu2zTSieZzOM385nvfOc3HqUUdpFKIYVASokzA27MbvP7ufVSOuvzYh67I4TAMtIYlknaMFCmWQD9H5ZtlUAKEyUtG49bPCjFz1SKoUwK8XWWldU1ZgwdYVmOEimzB2bVbAL1lMFcNE7b+zG8/WEiSwlM03SAyrLQ9A3CpMl0jrI+HWMJC9NWqhTFyvdonN1lD9hZUs2Oo5UcqWgilTIcoK1kNW1grq6TuNuNVtnBRnKZzOaJsahGKBQiHA6zsrKSnYvE4mzbe51dJ26wfX85e0rvkMlkHA/tq1iWSVz7RWPVS+ruv2F+LprdODY6yuXLlzh68hSHjp2g7PxFNG0BPZWmrsVH9WMvVY+9vOgO5izyuD7phsF62patEMIJ9vv9nD5+mIoLZ7h69hQHD+zjYX1DURtcezz5PinbeGErdoCTE+OMv62HqQ5U8BkDjTd50ljvPIyewrREtgopC9PGTQ2XnTtkPsDfsRbWA09J9jwi8voeid5WpGU5a4vkqef/5HXHtgJ/WwOJoSY2hltI+hpYbK+h/cEtEsnfRffkFOb7IDflT48NUVt+DqIfEMPN/O2qxQy2UHWllK62VidHhSgA5h6lALoJTMQWeXjtHJmvz1FDTax11rD8voHKCyV89PmKKiwE5gWVcv7zzEgArb2WuLeWqebbjDy5zbtXrUzPadlU2/Idc0AXlBewPUz+/sP8t1kGfV76ujsI9PsZ+TLOxGykwKYtHqo8lbmR1LGMVaKLC3z89Jk+f4Devj6WFr/zMzJJ8oeGruvuxrxXLriu3TWRsSBmuJ10sJlk6B0DA4MMDo8y2dsGoVaSPXUkuuuYnQgTX14rUPoPeQmXcOkIFzoAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/32e93/q6.png","srcSet":"/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/fb6cf/q6.png 750w,\\n/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/75c1a/q6.png 1080w,\\n/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/a7fc0/q6.png 1366w,\\n/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/32e93/q6.png 1524w","sizes":"100vw"},"sources":[{"srcSet":"/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/3f360/q6.webp 750w,\\n/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/9b882/q6.webp 1080w,\\n/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/d8f1e/q6.webp 1366w,\\n/omg-anywhere-door/static/450f8169351a77ef912f9a25a4253d99/ab0ea/q6.webp 1524w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7874015748031495}')},289:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVQ4y4VUz0sbQRTevyse1IOKd4XW6Cn1Lj0UlIrppQSxGD311HqwJJGmJ1E8KCSEgm2wYuqPrAfZWKvBJODJ3Z0fX5lxZ53MbtIHw7yZ/ea9b773Zi3OORhjEDOhVPqUUrlW32jwXfiMc7lWZ8xh8QAgLA5EgyR64l44GVAGMsBxBwR7amBMrPAlQ2FyIxg6QB0AuABFApi+ZTLpyvqUCYQx/CQcD0KaQCJdU8a0K5uBiKaZYk98F9nqIY6aLbn+b1H6DWGProuDcxvVZhum5n0DhlrqV2YUj76P7Zs2ynedZ4Y9CFhcK0TYj4TI2fM81G0b35sdFK9usdu4g+f7oV4mS2GW2QJSM0Lk3Pl7g63iFxRtB5uXf7DZuMcTAmFhlIUMlSaqsVVhhJ1Shq8nNbxfXseH0g+8/vgZbzPLOG9cRx6CegBW2NBBUBoEu/h9hrl8EVXnGhOTM0gkBjG1mMab/RJWjmuA50mNIxqazSns0raRnJ7Bi8mXSC+9Q2JgCMPD43i1s49c7Qzz8wvwfb/rql1X1mkLy+cLSE4lsZpdw9GvY1TKFXzb2UPm0wZGR8Ywm0rFBou0jWLYbndQKGzBcRy5dl0XlBA8tFrI5XKo1+2IhiqBFfcmdRMVZzT4pWn7cY0t2uYfaRXCPpKm+mAAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/32e93/q1.png","srcSet":"/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/fb6cf/q1.png 750w,\\n/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/75c1a/q1.png 1080w,\\n/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/a7fc0/q1.png 1366w,\\n/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/32e93/q1.png 1524w","sizes":"100vw"},"sources":[{"srcSet":"/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/3f360/q1.webp 750w,\\n/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/9b882/q1.webp 1080w,\\n/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/d8f1e/q1.webp 1366w,\\n/omg-anywhere-door/static/5dfc4dfc6f49f1ce85dfc73c8fc83b2a/ab0ea/q1.webp 1524w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7874015748031495}')},9286:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQ4y41Uz2sTQRTeq6Ae9Fa9iwpSjOQvsIKCB6u01FAQhRZB8CIIYrGCehA9BC9JqR7aQEpbqD8a2ypC0xCT1qZtbEO1ZJu0qU12N5q4JO6m2c1XZpIJ23UjDgzz9ps33/vevDfLoTYqlQqdzDYOI/4vPzI4M2B0LpfL/x2E2ZxVZE3ToCgKZFmmK8NLOzvYFiRouv6XYubDGSMzm5EVCgW6qqpK8VxWxJN7tzE3G6bfeo3YeJ6zSo84EpUEqztT6Qr4qX6sfAlVMymXafBSqbSXkADFYpEqMd+VJEngeZ7ayUQCC6EwBDFLg5JzhJBMppYz3gEDyV35ZwL4HAyCj8fxQ5Cgptcx9tYLf2obG3wC+bwMq4JaVpnMUHgWF1svY3hkhOK/0yn4wzMIpQUsL0YhilnLVuIa9VZBVfFiKYoiqXJNeS4vI766hsWFJUhSA0KzMp1s6DrG15NwKSWMer3o6u7Ch8A0xF85fE9sYi4ShSCIlv25J2VWVe/QEPYdOoxX4z7cvd+DpiNH8fTTR+RjMaw+fIyg+znWvi1XCU2tU28bVhApK8Fut+Pg/gNoOduCS+0OnGy24UpvLyIuF+JtHRA9z6Drf6wVslSZOqfTiTO207hw/hwGPR6MvX6Da9dvoLXTgczEJDa6b0IeHq2SaVrjt6zVNgcHBnDi+DF0Oq7WnbZSm/i6EkPQ9w7Td26hODVhma5llTOZDNxuN+bnI7RxVaX67HzvJ9HW3gFb8yk8etBTF9EwZfOfw9ybP3M5JFNb6Ot7iUAgWH+iZsJdJD+ew76XEJYAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/32e93/q5.png","srcSet":"/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/fb6cf/q5.png 750w,\\n/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/75c1a/q5.png 1080w,\\n/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/a7fc0/q5.png 1366w,\\n/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/32e93/q5.png 1524w","sizes":"100vw"},"sources":[{"srcSet":"/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/3f360/q5.webp 750w,\\n/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/9b882/q5.webp 1080w,\\n/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/d8f1e/q5.webp 1366w,\\n/omg-anywhere-door/static/6104ee651932b17eada26d716d7f3ab0/ab0ea/q5.webp 1524w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7874015748031495}')},4056:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjklEQVQ4y42U208aURDG+T/btOlD/4XG5z73wTTVNo2tPDSmmjY11RotimIUAQVkBUFYLstNuazICiqwe37NXhBptXGSyc6ezHzn+87MOS4eaUKIUWwYCEM4bozluP5XbH4Nw8DQ7SLjokt3zk9nZpOOe9v2zz66s9voJdXKcT2G0dD6iTLtiXm0t6u0P6zTnvbQNuOJr9x4Ew8DDsH0wQBZzpLJyPZ6b8C1N2Exu1qK2P4zwvWaZLG/F3Ao07S9YJBnT5/w8sVzAqF9W7aZM9AfVHU/Qwewkk1y/G2Syq9p5OCGDajrTo6wACw3m+Socg2Rx90BlPy0tt2I8AKh+XeoqjoCs+oMxF/H5LICMVoc7mja73k3laVJ8M+y/ukN9VrdZmnodl4pisgHEb3uuGRrN73HbewwrCoKh0tfiC66ycQlOp3ukA9GYR+RWkUklhEddQRo7VQ/QaR9CO0M0b+67bDW1giFo3h9O9TrTS7Uc1qqSl8XUI3AySJUD2yBjjqXMOnLO4jMCiLnQWg1K6HVaHBaKpGKHpKMSTTrDYoFBTmVQs5kyfjXuNya4bIgOeyMO0250UDZQCR+gHaGpnVISRLl6ilz9QaBYgndMCjk8oSCQaLhKN/dH5l6PcGxFHPO1RhKtpH1apK+Z4rz0ArpTJZNj4eG2uI98Kp7hVl2Uavh3dxCih2RTiaJS0fozrW0m+ucoWmDfg/Zs0BkfZmYFLeSlUKRXcALhIByLo90FEdRFA4OwihKaWw67LG5M0PlyhmBvX2kmES5XGY/ECSuXeLrD0ift4gfStZV1DSNaCRKs6n+C8idH3P+cnKWeq1Go9Fgd8dPMZOlqRQpZnPE48cU8gVH0WDsVRraH6gAso/PDiBRAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/32e93/q3.png","srcSet":"/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/fb6cf/q3.png 750w,\\n/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/75c1a/q3.png 1080w,\\n/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/a7fc0/q3.png 1366w,\\n/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/32e93/q3.png 1524w","sizes":"100vw"},"sources":[{"srcSet":"/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/3f360/q3.webp 750w,\\n/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/9b882/q3.webp 1080w,\\n/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/d8f1e/q3.webp 1366w,\\n/omg-anywhere-door/static/bca9a77196d0c10f550f3698f0e9373f/ab0ea/q3.webp 1524w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7874015748031495}')},5202:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVQ4y42US0hUYRSA76JdBKaBqxaKFriICNpEFIQEbqJNBGHRplalhI9ZOIVRkFYTmUZJIARlvrCXG58omRqZaOCDjJgExaHRO3e8c7v/fcwXd6YZr85YHvg5597zn+8//+GcX4pGozji6ISdEPe/zb6tRNq82TRNhDBi2g3eLlRyb9I0DUVRWFPkmFbVCJZl/3fZ9vqBSaAQAlmWCSsh5pfWCCkKhh5hu5LgJIGqqiLLIdbCYd5PaQSCMj3Dk3QNTjDwaYb+sRn6R6bp7vtCX+84/b3jDPSO0z00hX8xmJqhcz01HMK/rDC5oDP/Y4GckxVkHLnCnuOlZB29SmZhGfnVz8m608yu2y/ZfbeVHYVl1Da+i9ffstaBhmEQkmVWZRmhqcx+/0l+kYeMg5fIPnSZzIKLHDjt5bNuMg1MAN+AE6X13Kzv3AhMQHVdj9VOizjABXKLPOR5m8hpeMNOXzuHvU1EwxvreqaknhsNLmBq21gx7V/8RcGpKj4EZFRABmpfD1Nc2Ui5r42SmmYqHrSRV+Sh5llX6pUTmSZawL8UJPtYKY+fd/NxdJqxsRmKy58g7T2LtO88Un4x0v4LSLnnuPX0bTIZaXPj2n/tVUWluqGTsnuvqPS1UHG/BY+vFW9dB1V17VQ9bOf6ow6u1bygZ/hrLMay7TgwZdziBlFLEDVFTGMbWOI3pq4lv+N+HcsU622zVYM6WhcGuhDoumA5EGBkZJTBwSFm5+ZQI1rSZ1nW1sB0M+vM9crKCsFgMLmcQUg7Kf/KMN0LlO41csdI25lPd2A6iPvQP/TsigDDm3ZZAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/32e93/q4.png","srcSet":"/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/fb6cf/q4.png 750w,\\n/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/75c1a/q4.png 1080w,\\n/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/a7fc0/q4.png 1366w,\\n/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/32e93/q4.png 1524w","sizes":"100vw"},"sources":[{"srcSet":"/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/3f360/q4.webp 750w,\\n/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/9b882/q4.webp 1080w,\\n/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/d8f1e/q4.webp 1366w,\\n/omg-anywhere-door/static/dec23f6b7dd086bf38f1cb399cc601a0/ab0ea/q4.webp 1524w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7874015748031495}')},6365:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAACE3AAAhNwEzWJ96AAABiUlEQVQoz42SMWtVQRCF7zPOKawSiyhYCCmiiIgERAsVSWERbMRGEESDIKJiJf4Af4DYqIWVtaCNWFoIgohgbRFIbTEHcT5BBGXf28fzWWVh9tzZnT17ds4dZG7K/JH5omSfzKBkt8wuZQ1yDWPMGqLnE2Quoq+3JGUuyzyTudoJh46jMeHs4DQf9ZitJ50w2Y6sU+G6JXM4spaUPFTW+lRRUxv9kqm6OcyJwlbXpi0lZ8NlmUfhehVZ72W2ZdZkzsvclTkjcz2y1uTaUHJJ5rTM8zDnZB6H62QjpB96M97M2pI5ItdH5ZjouLKeytyXeS2zGVlPIuuFzG2ZdzLXwrxV1olGeEemZD7J7JV5IPOzFUQimYMyF2QOKWs5so621ihZnbygWptWZC7KrA5hDsgsdme7YyzKLEeyNOfmXN+68//0s0WbvilZn7g0t/k1sm50M5rSUczc/S+q4UL7bsX3ZH7JXJHZH+ZYuD6E+RxmIaY373R0BZsy32V+hPmt5KXMntm/t3PCv9zShWqXg7nbAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/omg-anywhere-door/static/43547cdbbedaa72c6bc34eef0bf56686/776e7/teal_logo.png","srcSet":"/omg-anywhere-door/static/43547cdbbedaa72c6bc34eef0bf56686/776e7/teal_logo.png 271w","sizes":"100vw"},"sources":[{"srcSet":"/omg-anywhere-door/static/43547cdbbedaa72c6bc34eef0bf56686/8f2b0/teal_logo.webp 271w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.4944649446494465}')}}]);
//# sourceMappingURL=component---src-templates-question-js-e0245301121316d88f15.js.map