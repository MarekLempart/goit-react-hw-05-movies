"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[836],{720:function(e,t,r){r.d(t,{T:function(){return o}});var n="LoadingDots_loadingDots__bLFSt",a="LoadingDots_dot__ZK+Eh",s=r(184),o=function(){return(0,s.jsxs)("div",{className:n,children:[" ",(0,s.jsx)("div",{className:a,style:{animationDelay:"0s"}})," ",(0,s.jsx)("div",{className:a,style:{animationDelay:".2s"}})," ",(0,s.jsx)("div",{className:a,style:{animationDelay:".4s"}})," "]})}},836:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(861),a=r(439),s=r(687),o=r.n(s),c=r(791),i=r(696),l=r(689),u=r(87),d=r(933),v=r(720),p="MovieCard_movieCardContainer__octe8",h="MovieCard_img__YZsvZ",m="MovieCard_movieInfo__g-3eM",f="MovieCard_movieName__+QWKV",_="MovieCard_movieInfoText__Aw6eW",x="MovieCard_movieInfoTextBold__Fcvz6",j="MovieCard_moreInfoWrapper__AChBz",w="MovieCard_moreInfoHeader__jbajp",N="MovieCard_list__Sduoj",g="MovieCard_listItem__Ghkf8",Z="MovieCard_styledLink__53clE",y=r(184),k=function(e){var t,r,n,a,s,o,c=e.movie,i=c.title,d=c.release_date,k=c.poster_path,M=c.vote_average,b=c.overview,I=c.genres,C=(0,l.TH)(),T=new Date(d),U=isNaN(T)?"Unknown":T.getFullYear(),D=k?"https://image.tmdb.org/t/p/w400/".concat(k):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",J=M?"".concat((10*M).toFixed(0),"%"):"Not rated yet";return i?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:p,children:[(0,y.jsx)("img",{className:h,src:D,alt:"".concat(i," poster")}),(0,y.jsxs)("div",{className:m,children:[(0,y.jsxs)("h2",{className:f,children:[null!==i&&void 0!==i?i:"Unknown"," (",U,")"]}),(0,y.jsxs)("p",{className:_,children:["User Score: ",J]}),(0,y.jsxs)("p",{className:_,children:[(0,y.jsx)("span",{className:x,children:"Overview:"})," ",b]}),I&&I.length>0&&(0,y.jsxs)("p",{className:_,children:[(0,y.jsx)("span",{className:x,children:"Genres:"})," ",I.map((function(e){return e.name})).join(", ")]})]})]}),(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("h3",{className:w,children:"Additional information"}),(0,y.jsxs)("ul",{className:N,children:[(0,y.jsx)("li",{className:g,children:(0,y.jsx)(u.rU,{className:Z,to:"cast",state:{from:null!==(t=null===C||void 0===C||null===(r=C.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,y.jsx)("li",{className:g,children:(0,y.jsx)(u.rU,{className:Z,to:"reviews",state:{from:null!==(n=null===C||void 0===C||null===(a=C.state)||void 0===a?void 0:a.from)&&void 0!==n?n:"/"},children:"Reviews"})}),(0,y.jsx)("li",{className:g,children:(0,y.jsx)(u.rU,{className:Z,to:"trailers",state:{from:null!==(s=null===C||void 0===C||null===(o=C.state)||void 0===o?void 0:o.from)&&void 0!==s?s:"/"},children:"Trailers"})})]})]})]}):(0,y.jsx)(v.T,{})},M=r(568),b="MovieDetails_container__o8VqJ",I="MovieDetails_button__PGjyO",C=function(){var e,t,r=(0,l.UO)().movieId,s=(0,l.TH)(),v=(0,c.useState)({}),p=(0,a.Z)(v,2),h=p[0],m=p[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Mc)(t);case 3:r=e.sent,m(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();e(r)}),[r]),(0,y.jsx)("main",{children:(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)(u.rU,{to:null!==(e=null===s||void 0===s||null===(t=s.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,y.jsxs)("button",{className:I,children:[(0,y.jsx)(i.i1r,{style:{width:"25px",height:"25px",display:"inline-block"}}),"Powr\xf3t"]})}),(0,y.jsx)(k,{movie:h}),(0,y.jsx)(c.Suspense,{fallback:(0,y.jsx)("div",{className:M.Z.loadingDots}),children:(0,y.jsx)(l.j3,{})})]})})}},933:function(e,t,r){r.d(t,{E3:function(){return u},Hx:function(){return p},Mc:function(){return d},_k:function(){return l},np:function(){return h},uV:function(){return v}});var n=r(861),a=r(687),s=r.n(a),o=r(294),c="https://api.themoviedb.org",i={method:"GET",params:{api_key:"c94d8e5ef8b4fe69956b21ebd01a6f37",language:"en-US",include_adult:!1},headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRkOGU1ZWY4YjRmZTY5OTU2YjIxZWJkMDFhNmYzNyIsInN1YiI6IjY1ZTg1MDMxM2ZlMTYwMDE2MjVjZTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut43gbHMar0hOfK1FZIIz0nwPLqmUTw0HqWj4r3u8m4"}},l=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/trending/movie/day"),e.prev=1,e.next=4,o.Z.request(i);case 4:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/search/movie"),i.params.query=t,e.prev=2,e.next=5,o.Z.request(i);case 5:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 10:throw e.prev=10,e.t0=e.catch(2),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/movie/").concat(t),e.prev=1,e.next=4,o.Z.request(i);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/movie/").concat(t,"/credits"),e.prev=1,e.next=4,o.Z.request(i);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/movie/").concat(t,"/reviews"),e.prev=1,e.next=4,o.Z.request(i);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(c,"/3/movie/").concat(t,"/videos"),e.prev=1,e.next=4,o.Z.request(i);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},568:function(e,t){t.Z={header:"SharedLayout_header__HMjkG",navLink:"SharedLayout_navLink__Iv8Un",active:"SharedLayout_active__ZuQWE"}}}]);
//# sourceMappingURL=836.dcb9b3d4.chunk.js.map