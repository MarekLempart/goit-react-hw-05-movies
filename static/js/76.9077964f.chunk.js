"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=r(861),a=r(439),c=r(687),s=r.n(c),u=r(791),o=r(689),i=r(933),p="Cast_wrapper__XmIBi",l="Cast_castHeader__81u8W",f="Cast_castList__ARoWn",h="Cast_castListItem__CF66s",v="Cast_castImage__d8bQP",m="Cast_castInfo__fGvyp",d="Cast_castName__-i08u",_="Cast_noCastText__PaSXg",x=r(184),w=function(){var t=(0,o.UO)().movieId,e=(0,u.useState)([]),r=(0,a.Z)(e,2),c=r[0],w=r[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.uV)(t);case 3:r=e.sent,n=r.cast,w(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("h3",{className:l,children:"Cast"}),c.length?(0,x.jsx)("ul",{className:f,children:c.map((function(t){return(0,x.jsxs)("li",{className:h,children:[t.profile_path?(0,x.jsx)("img",{className:v,src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:"".concat(t.name," profile")}):(0,x.jsx)("img",{className:v,src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(t.name," profile")}),(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("h3",{className:d,children:t.name}),(0,x.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))}):(0,x.jsx)("p",{className:_,children:"We don't have any information about the cast yet."})]})}},933:function(t,e,r){r.d(e,{E3:function(){return p},Hx:function(){return h},Mc:function(){return l},_k:function(){return i},np:function(){return v},uV:function(){return f}});var n=r(861),a=r(687),c=r.n(a),s=r(294),u="https://api.themoviedb.org",o={method:"GET",params:{api_key:"c94d8e5ef8b4fe69956b21ebd01a6f37",language:"en-US",include_adult:!1},headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRkOGU1ZWY4YjRmZTY5OTU2YjIxZWJkMDFhNmYzNyIsInN1YiI6IjY1ZTg1MDMxM2ZlMTYwMDE2MjVjZTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut43gbHMar0hOfK1FZIIz0nwPLqmUTw0HqWj4r3u8m4"}},i=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.url="".concat(u,"/3/trending/movie/day"),t.prev=1,t.next=4,s.Z.request(o);case 4:return e=t.sent,t.abrupt("return",e.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.url="".concat(u,"/3/search/movie"),o.params.query=e,t.prev=2,t.next=5,s.Z.request(o);case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.url="".concat(u,"/3/movie/").concat(e),t.prev=1,t.next=4,s.Z.request(o);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.url="".concat(u,"/3/movie/").concat(e,"/credits"),t.prev=1,t.next=4,s.Z.request(o);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.url="".concat(u,"/3/movie/").concat(e,"/reviews"),t.prev=1,t.next=4,s.Z.request(o);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.url="".concat(u,"/3/movie/").concat(e,"/videos"),t.prev=1,t.next=4,s.Z.request(o);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(1),console.error(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.9077964f.chunk.js.map