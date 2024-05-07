"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[836],{836:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(861),a=r(439),o=r(687),s=r.n(o),c=r(791),i=r(696),l=r(689),u=r(87),d=r(933),v=r(755),h="MovieCard_movieCardContainer__octe8",p="MovieCard_img__YZsvZ",m="MovieCard_movieInfo__g-3eM",f="MovieCard_movieName__+QWKV",_="MovieCard_movieInfoText__Aw6eW",x="MovieCard_movieInfoTextBold__Fcvz6",j="MovieCard_moreInfoWrapper__AChBz",w="MovieCard_moreInfoHeader__jbajp",N="MovieCard_list__Sduoj",y="MovieCard_listItem__Ghkf8",Z="MovieCard_styledLink__53clE",g=r(184),k=function(e){var t,r,n,a,o=e.movie,s=o.title,c=o.release_date,i=o.poster_path,d=o.vote_average,k=o.overview,M=o.genres,b=(0,l.TH)(),I=new Date(c),C=isNaN(I)?"Unknown":I.getFullYear(),T=i?"https://image.tmdb.org/t/p/w400/".concat(i):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",D=d?"".concat((10*d).toFixed(0),"%"):"Not rated yet";return s?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("img",{className:p,src:T,alt:"".concat(s," poster")}),(0,g.jsxs)("div",{className:m,children:[(0,g.jsxs)("h2",{className:f,children:[null!==s&&void 0!==s?s:"Unknown"," (",C,")"]}),(0,g.jsxs)("p",{className:_,children:["User Score: ",D]}),(0,g.jsxs)("p",{className:_,children:[(0,g.jsx)("span",{className:x,children:"Overview:"})," ",k]}),M&&M.length>0&&(0,g.jsxs)("p",{className:_,children:[(0,g.jsx)("span",{className:x,children:"Genres:"})," ",M.map((function(e){return e.name})).join(", ")]})]})]}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("h3",{className:w,children:"Additional information"}),(0,g.jsxs)("ul",{className:N,children:[(0,g.jsx)("li",{className:y,children:(0,g.jsx)(u.rU,{className:Z,to:"cast",state:{from:null!==(t=null===b||void 0===b||null===(r=b.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,g.jsx)("li",{className:y,children:(0,g.jsx)(u.rU,{className:Z,to:"reviews",state:{from:null!==(n=null===b||void 0===b||null===(a=b.state)||void 0===a?void 0:a.from)&&void 0!==n?n:"/"},children:"Reviews"})})]})]})]}):(0,g.jsx)(v.T,{})},M=r(568),b="MovieDetails_container__o8VqJ",I="MovieDetails_button__PGjyO",C=function(){var e,t,r=(0,l.UO)().movieId,o=(0,l.TH)(),v=(0,c.useState)({}),h=(0,a.Z)(v,2),p=h[0],m=h[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Mc)(t);case 3:r=e.sent,m(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();e(r)}),[r]),(0,g.jsx)("main",{children:(0,g.jsxs)("div",{className:b,children:[(0,g.jsx)(u.rU,{to:null!==(e=null===o||void 0===o||null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,g.jsxs)("button",{className:I,children:[(0,g.jsx)(i.i1r,{style:{width:"25px",height:"25px",display:"inline-block"}}),"Powr\xf3t"]})}),(0,g.jsx)(k,{movie:p}),(0,g.jsx)(c.Suspense,{fallback:(0,g.jsx)("div",{className:M.Z.loadingDots}),children:(0,g.jsx)(l.j3,{})})]})})}},755:function(e,t,r){r.d(t,{T:function(){return o}});var n=r(568),a=r(184),o=function(){return(0,a.jsxs)("div",{className:n.Z.loadingDots,children:[" ",(0,a.jsx)("div",{className:n.Z.dot,style:{animationDelay:"0s"}})," ",(0,a.jsx)("div",{className:n.Z.dot,style:{animationDelay:".2s"}})," ",(0,a.jsx)("div",{className:n.Z.dot,style:{animationDelay:".4s"}})," "]})}},933:function(e,t,r){r.d(t,{E3:function(){return u},Hx:function(){return h},Mc:function(){return d},_k:function(){return l},uV:function(){return v}});var n=r(861),a=r(687),o=r.n(a),s=r(294),c="https://api.themoviedb.org",i={method:"GET",params:{api_key:"c94d8e5ef8b4fe69956b21ebd01a6f37",language:"en-US",include_adult:!1},headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRkOGU1ZWY4YjRmZTY5OTU2YjIxZWJkMDFhNmYzNyIsInN1YiI6IjY1ZTg1MDMxM2ZlMTYwMDE2MjVjZTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut43gbHMar0hOfK1FZIIz0nwPLqmUTw0HqWj4r3u8m4"}},l=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/trending/movie/day"),e.prev=1,e.next=4,s.Z.request(i);case 4:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/search/movie"),i.params.query=t,e.prev=2,e.next=5,s.Z.request(i);case 5:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 10:throw e.prev=10,e.t0=e.catch(2),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/movie/").concat(t),e.prev=1,e.next=4,s.Z.request(i);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/movie/").concat(t,"/credits"),e.prev=1,e.next=4,s.Z.request(i);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/movie/").concat(t,"/reviews"),e.prev=1,e.next=4,s.Z.request(i);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},568:function(e,t){t.Z={header:"SharedLayout_header__HMjkG",navLink:"SharedLayout_navLink__Iv8Un",active:"SharedLayout_active__ZuQWE",loadingDots:"SharedLayout_loadingDots__Omiev",dot:"SharedLayout_dot__yaOvb",bounce:"SharedLayout_bounce__8MIde"}}}]);
//# sourceMappingURL=836.a7ee6e9d.chunk.js.map