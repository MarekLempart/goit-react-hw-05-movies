"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{720:function(t,e,n){n.d(e,{T:function(){return s}});var r="LoadingDots_loadingDots__bLFSt",a="LoadingDots_dot__ZK+Eh",c=n(184),s=function(){return(0,c.jsxs)("div",{className:r,children:[" ",(0,c.jsx)("div",{className:a,style:{animationDelay:"0s"}})," ",(0,c.jsx)("div",{className:a,style:{animationDelay:".2s"}})," ",(0,c.jsx)("div",{className:a,style:{animationDelay:".4s"}})," "]})}},891:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(861),a=n(439),c=n(687),s=n.n(c),o=n(720),i=n(87),u=n(796),l=n(184),p=function(t){var e=t.trendingMovies;return(0,l.jsxs)("section",{className:u.Z.styledSection,children:[(0,l.jsx)("h2",{className:u.Z.sectionTitle,children:"Trending today"}),(0,l.jsx)("ul",{className:u.Z.list,children:e.map((function(t){return(0,l.jsx)("li",{className:u.Z.listItem,children:(0,l.jsx)(i.rU,{to:"/movies/".concat(t.id),className:u.Z.styledLink,children:t.title})},t.id)}))})]})},d=n(791),v=n(933),f=function(){var t=(0,d.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],i=(0,d.useState)(!0),u=(0,a.Z)(i,2),f=u[0],h=u[1],m=(0,d.useState)(!1),Z=(0,a.Z)(m,2),x=Z[0],y=Z[1];return(0,d.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!1),h(!0),t.next=5,(0,v._k)();case 5:e=t.sent,n=e.results,c(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),y(!0);case 13:return t.prev=13,h(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsx)(l.Fragment,{children:f?(0,l.jsx)("div",{className:o.T.LoadingIndicator,children:"Loading..."}):x?(0,l.jsx)("p",{className:o.T.errorMsg,children:"Sorry, failed to fetch trending movies. Please try again later."}):(0,l.jsx)(p,{trendingMovies:n})})}},933:function(t,e,n){n.d(e,{E3:function(){return l},Hx:function(){return v},Mc:function(){return p},_k:function(){return u},np:function(){return f},uV:function(){return d}});var r=n(861),a=n(687),c=n.n(a),s=n(294),o="https://api.themoviedb.org",i={method:"GET",params:{api_key:"c94d8e5ef8b4fe69956b21ebd01a6f37",language:"en-US",include_adult:!1},headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRkOGU1ZWY4YjRmZTY5OTU2YjIxZWJkMDFhNmYzNyIsInN1YiI6IjY1ZTg1MDMxM2ZlMTYwMDE2MjVjZTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut43gbHMar0hOfK1FZIIz0nwPLqmUTw0HqWj4r3u8m4"}},u=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.url="".concat(o,"/3/trending/movie/day"),t.prev=1,t.next=4,s.Z.request(i);case 4:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(1),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.url="".concat(o,"/3/search/movie"),i.params.query=e,t.prev=2,t.next=5,s.Z.request(i);case 5:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 10:throw t.prev=10,t.t0=t.catch(2),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.url="".concat(o,"/3/movie/").concat(e),t.prev=1,t.next=4,s.Z.request(i);case 4:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 9:throw t.prev=9,t.t0=t.catch(1),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.url="".concat(o,"/3/movie/").concat(e,"/credits"),t.prev=1,t.next=4,s.Z.request(i);case 4:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 9:throw t.prev=9,t.t0=t.catch(1),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.url="".concat(o,"/3/movie/").concat(e,"/reviews"),t.prev=1,t.next=4,s.Z.request(i);case 4:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 9:throw t.prev=9,t.t0=t.catch(1),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.url="".concat(o,"/3/movie/").concat(e,"/videos"),t.prev=1,t.next=4,s.Z.request(i);case 4:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 9:throw t.prev=9,t.t0=t.catch(1),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},796:function(t,e){e.Z={styledSection:"MovieList_styledSection__c8Unm",sectionTitle:"MovieList_sectionTitle__hc4ku",list:"MovieList_list__yjDCC",listItem:"MovieList_listItem__vOVoz",styledLink:"MovieList_styledLink__UovMs"}}}]);
//# sourceMappingURL=891.bdef1b3c.chunk.js.map