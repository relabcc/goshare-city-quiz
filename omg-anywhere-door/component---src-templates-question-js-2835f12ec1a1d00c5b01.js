(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[24],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,o({attr:o({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,a=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},9370:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(1401),a=n(7294),i=n(2543),o=n(3888),l=n(7487),c=n(6299),s=n(4526),u=n(5587),f=n(4667);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=(0,i.G)((function(e,t){var n=(0,o.m)("Text",e),r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}((0,l.Lr)(e),["className","align","decoration","casing"]),i=(0,s.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return a.createElement(c.m$.p,m({ref:t,className:(0,u.cx)("chakra-text",e.className)},i,r,{__css:n}))}));f.Ts&&(p.displayName="Text");var d,v=n(6026),g=n.n(v),h=(0,n(494).Z)(p)(d||(d=(0,r.Z)([""])));h.Inline=(0,a.forwardRef)((function(e,t){return a.createElement(h,Object.assign({as:"span"},e,{ref:t}))})),h.Bold=(0,a.forwardRef)((function(e,t){return a.createElement(h,Object.assign({fontWeight:"700"},e,{ref:t}))})),h.Thin=(0,a.forwardRef)((function(e,t){return a.createElement(h,Object.assign({fontWeight:"200"},e,{ref:t}))})),g()(1,7).forEach((function(e){h["H"+e]=(0,a.forwardRef)((function(t,n){return a.createElement(h,Object.assign({as:"h"+e,fontSize:5-e+"xl"},t,{ref:n}))}))}));var b=h},3895:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(6968),a=n.n(r),i=n(7294),o=n(5444),l=n(5708),c=n(3750),s=n(2543),u=n(4667);function f(e,t){if(null!=e)if((0,u.mf)(e))e(t);else try{e.current=t}catch(n){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){return f(t,e)}))}}var p=n(3888),d=n(7487),v=n(6299),g=n(3971),h=n.n(g),b=n(5587),y=n(4003);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var x=(0,n(8308).k)({strict:!1,name:"ButtonGroupContext"}),E=(0,y.Z)(x,2),w=E[0],j=E[1],N=(0,s.G)((function(e,t){var n=e.size,r=e.colorScheme,a=e.variant,o=e.className,l=e.spacing,c=void 0===l?"0.5rem":l,s=e.isAttached,u=e.isDisabled,f=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),m=(0,b.cx)("chakra-button__group",o),p=i.useMemo((function(){return{size:n,colorScheme:r,variant:a,isDisabled:u}}),[n,r,a,u]),d={display:"inline-flex"};return d=O({},d,s?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:c}}),i.createElement(w,{value:p},i.createElement(v.m$.div,O({ref:t,role:"group",__css:d,className:m},f)))}));u.Ts&&(N.displayName="ButtonGroup");var _=n(5774),S=n(3431),k={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},C=(0,v.m$)("span",{baseStyle:k});u.Ts&&(C.displayName="VisuallyHidden");var Z=(0,v.m$)("input",{baseStyle:k});u.Ts&&(Z.displayName="VisuallyHiddenInput");function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=(0,S.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),P=(0,s.G)((function(e,t){var n=(0,p.m)("Spinner",e),r=(0,d.Lr)(e),a=r.label,o=void 0===a?"Loading...":a,l=r.thickness,c=void 0===l?"2px":l,s=r.speed,u=void 0===s?"0.45s":s,f=r.emptyColor,m=void 0===f?"transparent":f,g=r.className,h=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,["label","thickness","speed","emptyColor","className"]),y=(0,b.cx)("chakra-spinner",g),O=I({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:c,borderBottomColor:m,borderLeftColor:m,animation:T+" "+u+" linear infinite"},n);return i.createElement(v.m$.div,I({ref:t,__css:O,className:y},h),o&&i.createElement(C,null,o))}));function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}u.Ts&&(P.displayName="Spinner");var z=function(e){var t=e.label,n=e.placement,r=e.children,a=void 0===r?i.createElement(P,{color:"currentColor",width:"1em",height:"1em"}):r,o=e.className,l=e.__css,c=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["label","placement","spacing","children","className","__css"]),s=(0,b.cx)("chakra-button__spinner",o),u="start"===n?"marginEnd":"marginStart",f=i.useMemo((function(){var e;return B((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"},(0,_.Z)(e,u,t?"0.5rem":0),(0,_.Z)(e,"fontSize","1em"),(0,_.Z)(e,"lineHeight","normal"),e),l)}),[l,t,u]);return i.createElement(v.m$.div,B({className:s},c,{__css:f}),a)};function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}u.Ts&&(z.displayName="ButtonSpinner");var $=function(e){var t=e.children,n=e.className,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","className"]),a=i.isValidElement(t)?i.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,o=(0,b.cx)("chakra-button__icon",n);return i.createElement(v.m$.span,R({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:o}),a)};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}u.Ts&&($.displayName="ButtonIcon");var W=(0,s.G)((function(e,t){var n,r,a,o,l,c=j(),s=(0,p.m)("Button",A({},c,e)),u=(0,d.Lr)(e),f=u.isDisabled,g=void 0===f?null==c?void 0:c.isDisabled:f,O=u.isLoading,x=u.isActive,E=u.isFullWidth,w=u.children,N=u.leftIcon,_=u.rightIcon,S=u.loadingText,k=u.iconSpacing,C=void 0===k?"0.5rem":k,Z=u.type,I=u.spinner,T=u.spinnerPlacement,P=void 0===T?"start":T,B=u.className,R=u.as,$=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(u,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),W=i.useMemo((function(){var e,t=h()({},null!=(e=null==s?void 0:s._focus)?e:{},{zIndex:1});return A({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:E?"100%":"auto"},s,!!c&&{_focus:t})}),[s,c,E]),L=(n=R,r=i.useState(!n),a=(0,y.Z)(r,2),o=a[0],l=a[1],{ref:i.useCallback((function(e){e&&l("BUTTON"===e.tagName)}),[]),type:o?"button":void 0}),F=L.ref,G=L.type,q={rightIcon:_,leftIcon:N,iconSpacing:C,children:w};return i.createElement(v.m$.button,A({disabled:g||O,ref:m(t,F),as:R,type:null!=Z?Z:G,"data-active":(0,b.PB)(x),"data-loading":(0,b.PB)(O),__css:W,className:(0,b.cx)("chakra-button",B)},$),O&&"start"===P&&i.createElement(z,{className:"chakra-button__spinner--start",label:S,placement:"start"},I),O?S||i.createElement(v.m$.span,{opacity:0},i.createElement(D,q)):i.createElement(D,q),O&&"end"===P&&i.createElement(z,{className:"chakra-button__spinner--end",label:S,placement:"end"},I))}));function D(e){var t=e.leftIcon,n=e.rightIcon,r=e.children,a=e.iconSpacing;return i.createElement(i.Fragment,null,t&&i.createElement($,{marginEnd:a},t),r,n&&i.createElement($,{marginStart:a},n))}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}u.Ts&&(W.displayName="Button");var F=(0,s.G)((function(e,t){var n=e.icon,r=e.children,a=e.isRound,o=e["aria-label"],l=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["icon","children","isRound","aria-label"]),c=n||r,s=i.isValidElement(c)?i.cloneElement(c,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(W,L({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":o},l),s)}));u.Ts&&(F.displayName="IconButton");var G=n(8917),q=n(3941),M=n(9370),H=n(3347),V=n(1531),J=n(6425),U=n(4774),Q=["href"],Y=(0,i.forwardRef)((function(e,t){var n=e.href,r=(0,V.Z)(e,Q);return n?i.createElement(W,Object.assign({as:function(e){return i.createElement(J.Z,Object.assign({},e,{href:n}))},ref:t},r)):i.createElement(W,Object.assign({ref:t},r))}));Y.defaultProps={color:"white",py:"1rem",bg:"custom.blue",borderRadius:"full",height:"auto",_hover:{bg:"custom.blue"},fontSize:(0,U.jW)("0.875em","1.5em")},Y.Secondary=function(e){return i.createElement(Y,Object.assign({colorScheme:"green"},e))},Y.Danger=function(e){return i.createElement(Y,Object.assign({colorScheme:"red"},e))},Y.Orange=function(e){return i.createElement(Y,Object.assign({color:"white",bg:"custom.orange",border:"1px solid",borderColor:"custom.orange",_hover:{bg:"custom.orange"}},e))},Y.Transparent=function(e){return i.createElement(Y,Object.assign({bg:"transparent",_focus:{bg:"transparent"},_hover:{bg:"transparent"},_active:{bg:"transparent"}},e))};var K=Y,X=n(6810),ee=n(4770),te=function(e){var t=e.data,n=e.pageContext,r=n.id,s=n.isLast,u=n.length,f=(0,l.u6)(),m=f.values,p=f.submitForm,d=(0,i.useMemo)((function(){return m.answers.length<r-1}),[r,m.answers.length]);return(0,i.useEffect)((function(){d&&(0,o.navigate)("/q/"+(m.answers.length+1))}),[d]),d?null:i.createElement(ee.Z,{title:"第"+r+"題",bg:"white"},i.createElement(X.Z,null,i.createElement(H.Z,{alignItems:"center",justify:"space-between",pb:"0.25em",borderColor:"darkBlue",borderBottom:"1px solid"},i.createElement(F,{as:G.Z,swipe:!0,direction:"right",w:"1.5em",h:"1.5em",mr:"0.25em",minWidth:"auto",bg:"transparent",color:"custom.darkBlue",icon:i.createElement(c.Ao2,{size:"2em"}),to:+r>1?"/q/"+(r-1):"/"}),i.createElement(M.Z,{fontSize:(0,U.jW)("1.5em","1.25em"),letterSpacing:"0.125em",fontFamily:"Flama"},r,"/",u)),i.createElement(M.Z,{fontSize:(0,U.jW)("1.125em","1.25em"),mt:"0.5em"},null==t?void 0:t.questionsJson.question),i.createElement(q.Z,null,null==t?void 0:t.questionsJson.options.map((function(e,t){return i.createElement(q.Z,{mt:"1em",key:t},i.createElement(K,{as:!s&&function(e){return i.createElement(G.Z,Object.assign({top:"entry"},e))},onClick:function(){var e,n;a()(m,["answers",+r-1],t),e=r,n=t,"undefined"!=typeof window&&window.gtag&&window.gtag("event","select_content\t",{content_type:"Answer",item_id:"Q"+e+"-"+(n+1)}),s&&p()},to:!s&&"/q/"+(+r+1),swipe:!0,direction:"left",width:"100%"},e))})))))}},98:function(e){var t=Math.ceil,n=Math.max;e.exports=function(e,r,a,i){for(var o=-1,l=n(t((r-e)/(a||1)),0),c=Array(l);l--;)c[i?l:++o]=e,e+=a;return c}},7561:function(e,t,n){var r=n(7990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},7445:function(e,t,n){var r=n(98),a=n(6612),i=n(8601);e.exports=function(e){return function(t,n,o){return o&&"number"!=typeof o&&a(t,n,o)&&(n=o=void 0),t=i(t),void 0===n?(n=t,t=0):n=i(n),o=void 0===o?t<n?1:-1:i(o),r(t,n,o,e)}}},6612:function(e,t,n){var r=n(7813),a=n(8612),i=n(5776),o=n(3218);e.exports=function(e,t,n){if(!o(n))return!1;var l=typeof t;return!!("number"==l?a(n)&&i(t,n.length):"string"==l&&t in n)&&r(n[t],e)}},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},8612:function(e,t,n){var r=n(3560),a=n(1780);e.exports=function(e){return null!=e&&a(e.length)&&!r(e)}},1780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},6026:function(e,t,n){var r=n(7445)();e.exports=r},8601:function(e,t,n){var r=n(4841),a=1/0;e.exports=function(e){return e?(e=r(e))===a||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},4841:function(e,t,n){var r=n(7561),a=n(3218),i=n(3448),o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):o.test(e)?NaN:+e}}}]);
//# sourceMappingURL=component---src-templates-question-js-2835f12ec1a1d00c5b01.js.map