"use strict";(self.webpackChunktest_tweet_card=self.webpackChunktest_tweet_card||[]).push([[616],{5338:function(e,t,r){r.r(t),r.d(t,{default:function(){return B}});var n=r(3433),a=r(5861),s=r(9439),c=r(4687),i=r.n(c),u=r(1413),o=r(4942),l=r(4925),d=r(8182),f="Button_button__wiIYs",p="Button_isSelected__-6JYv",v=r(184),x=["selected","children"],m=function(e){var t=e.selected,r=void 0!==t&&t,n=e.children,a=(0,l.Z)(e,x);return(0,v.jsx)("button",(0,u.Z)((0,u.Z)({className:(0,d.Z)(f,(0,o.Z)({},p,r)),type:"button"},a),{},{children:n}))},h={card:"CardItem_card__9jGsV",logo:"CardItem_logo__NuKzF",containerWrapper:"CardItem_containerWrapper__3rBI7",rectangle:"CardItem_rectangle__K7XPT",outerCircle:"CardItem_outerCircle__FOnX8",innerCircle:"CardItem_innerCircle__Oq1iy",avatar:"CardItem_avatar__72xX9",text:"CardItem_text__PQWJQ"},_=r.p+"static/media/image.b3d9942b3f9d5dad1ff0.png",j=r(2791);var g=r.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg",w=function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},C=r(1243);C.Z.defaults.baseURL="https://642a976db11efeb7599cfede.mockapi.io";var Z=function(){var e=(0,a.Z)(i().mark((function e(){var t,r,n,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,C.Z.get("/users?page=".concat(t,"&limit=3"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,a.Z)(i().mark((function e(t,r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.Z.put("/users/".concat(t),{followers:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),N=function(e){var t=e.user,r=t.id,n=t.user,c=t.avatar,u=t.tweets,o=t.followers,l=(0,j.useState)(o),d=(0,s.Z)(l,2),f=d[0],p=d[1],x=function(e,t){var r=(0,j.useState)((function(){var r;return null!==(r=JSON.parse(window.localStorage.getItem(e)))&&void 0!==r?r:t})),n=(0,s.Z)(r,2),a=n[0],c=n[1];return(0,j.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,c]}("selected-".concat(r),!1),C=(0,s.Z)(x,2),Z=C[0],N=C[1];(0,j.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(r,f);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,f]);return(0,v.jsxs)("div",{className:h.card,children:[(0,v.jsx)("img",{className:h.logo,src:g,alt:"logo"}),(0,v.jsx)("img",{src:_,alt:"decoration"}),(0,v.jsxs)("div",{className:h.containerWrapper,children:[(0,v.jsx)("div",{className:h.rectangle}),(0,v.jsx)("div",{className:h.outerCircle,children:(0,v.jsx)("div",{className:h.innerCircle,children:(0,v.jsx)("img",{className:h.avatar,src:c,alt:n})})})]}),(0,v.jsxs)("p",{className:h.text,children:[(0,v.jsx)("span",{className:h.number,children:w(u)}),(0,v.jsx)("span",{children:" tweets"})]}),(0,v.jsxs)("p",{className:h.text,children:[(0,v.jsx)("span",{className:h.number,children:w(f)}),(0,v.jsx)("span",{children:" followers"})]}),(0,v.jsx)(m,{selected:Z,onClick:function(){Z?(N(!1),p((function(e){return e-1}))):(N(!0),p((function(e){return e+1})))},children:Z?"following":"follow"})]})},k=function(e){var t=e.users;return(0,v.jsx)("ul",{children:t.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(N,{user:e})},e.id)}))})},I="Container_section__Lfj+R",S="Container_container__VVOCq",y=function(e){var t=e.children;return(0,v.jsx)("div",{className:I,children:(0,v.jsx)("div",{className:S,children:t})})},O=r(9645);var B=function(){var e=(0,j.useState)([]),t=(0,s.Z)(e,2),r=t[0],c=t[1],u=(0,j.useState)(!1),o=(0,s.Z)(u,2),l=o[0],d=o[1],f=(0,j.useState)(null),p=(0,s.Z)(f,2),x=p[0],h=p[1],_=(0,j.useState)(1),g=(0,s.Z)(_,2),w=g[0],C=g[1];return(0,j.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,Z(w);case 4:t=e.sent,c((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t))})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0),console.log(e.t0);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y,{children:x?(0,v.jsx)("p",{children:x.message}):(0,v.jsx)(k,{users:r})}),(0,v.jsx)(y,{children:(0,v.jsx)(m,{onClick:function(){C((function(e){return e+1}))},children:l?(0,v.jsx)(O.a,{}):"Load more"})})]})}}}]);
//# sourceMappingURL=616.421ae2c8.chunk.js.map