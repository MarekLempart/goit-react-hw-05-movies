"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{720:function(t,e,r){r.d(e,{T:function(){return s}});var n="LoadingDots_loadingDots__bLFSt",a="LoadingDots_dot__ZK+Eh",c=r(184),s=function(){return(0,c.jsxs)("div",{className:n,children:[" ",(0,c.jsx)("div",{className:a,style:{animationDelay:"0s"}})," ",(0,c.jsx)("div",{className:a,style:{animationDelay:".2s"}})," ",(0,c.jsx)("div",{className:a,style:{animationDelay:".4s"}})," "]})}},891:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),c=r(687),s=r.n(c),i=r(720),u=r(87),o=r(796),l=r(184),p=function(t){var e=t.trendingMovies;return(0,l.jsxs)("section",{className:o.Z.styledSection,children:[(0,l.jsx)("h2",{className:o.Z.sectionTitle,children:"Trending today"}),(0,l.jsx)("ul",{className:o.Z.list,children:e.map((function(t){return(0,l.jsx)("li",{className:o.Z.listItem,children:(0,l.jsx)(u.rU,{to:"/movies/".concat(t.id),className:o.Z.linkItem,children:t.title})},t.id)}))})]})},f=r(791),v=r(933),d=function(){var t=(0,f.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],u=(0,f.useState)(!0),o=(0,a.Z)(u,2),d=o[0],h=o[1],m=(0,f.useState)(!1),Z=(0,a.Z)(m,2),x=Z[0],_=Z[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!1),h(!0),t.next=5,(0,v._k)();case 5:e=t.sent,r=e.results,c(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),_(!0);case 13:return t.prev=13,h(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsx)(l.Fragment,{children:d?(0,l.jsx)("div",{className:i.T.LoadingIndicator,children:"Loading..."}):x?(0,l.jsx)("p",{className:i.T.errorMsg,children:"Sorry, failed to fetch trending movies. Please try again later."}):(0,l.jsx)(p,{trendingMovies:r})})}},933:function(t,e,r){r.d(e,{E3:function(){return l},Hx:function(){return v},Mc:function(){return p},_k:function(){return o},np:function(){return d},uV:function(){return f}});var n=r(861),a=r(687),c=r.n(a),s=r(294),i="https://api.themoviedb.org",u={method:"GET",params:{api_key:"c94d8e5ef8b4fe69956b21ebd01a6f37",language:"en-US",include_adult:!1},headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRkOGU1ZWY4YjRmZTY5OTU2YjIxZWJkMDFhNmYzNyIsInN1YiI6IjY1ZTg1MDMxM2ZlMTYwMDE2MjVjZTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut43gbHMar0hOfK1FZIIz0nwPLqmUTw0HqWj4r3u8m4"}},o=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.url="".concat(i,"/3/trending/movie/day"),t.prev=1,t.next=4,s.Z.request(u);case 4:return e=t.sent,t.abrupt("return",e.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.url="".concat(i,"/3/search/movie"),u.params.query=e,t.prev=2,t.next=5,s.Z.request(u);case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.url="".concat(i,"/3/movie/").concat(e),t.prev=1,t.next=4,s.Z.request(u);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.url="".concat(i,"/3/movie/").concat(e,"/credits"),t.prev=1,t.next=4,s.Z.request(u);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.url="".concat(i,"/3/movie/").concat(e,"/reviews"),t.prev=1,t.next=4,s.Z.request(u);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.url="".concat(i,"/3/movie/").concat(e,"/videos"),t.prev=1,t.next=4,s.Z.request(u);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},796:function(t,e){e.Z={styledSection:"MovieList_styledSection__c8Unm",sectionTitle:"MovieList_sectionTitle__hc4ku",list:"MovieList_list__yjDCC",listItem:"MovieList_listItem__vOVoz",linkItem:"MovieList_linkItem__UQa-L"}}}]);
//# sourceMappingURL=891.b384924c.chunk.js.map