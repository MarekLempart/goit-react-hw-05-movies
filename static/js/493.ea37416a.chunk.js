"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{493:function(r,e,t){t.r(e),t.d(e,{default:function(){return y}});var n=t(861),a=t(439),c=t(687),u=t.n(c),s=t(791),o=t(689),i=t(933),l="Modal_modalOverlay__ZrB5u",p="Modal_modal__DJDMv",f="Modal_modalPlayer__FFSmx",v="Modal_closeButton__Ya+Ev",h=t(184),d=function(r){var e=r.trailerKey,t=r.onClose;return(0,h.jsx)("div",{className:l,onClick:t,children:(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("iframe",{className:f,src:"https://www.youtube.com/embed/".concat(e,"?autoplay=1"),title:"Trailer",allowFullScreen:!0,autoPlay:!0}),(0,h.jsx)("button",{className:v,onClick:t,children:"Close"})]})})},m="Trailers_wrapper__CjjCa",_="Trailers_trailerHeader__DYDYJ",w="Trailers_trailerContainer__HV6Hp",x="Trailers_trailerItem__F6VrH",Z="Trailers_trailerButton__2sykm",k="Trailers_noTrailersText__DV9kc",y=function(){var r=(0,o.UO)().movieId,e=(0,s.useState)([]),t=(0,a.Z)(e,2),c=t[0],l=t[1],p=(0,s.useState)(null),f=(0,a.Z)(p,2),v=f[0],y=f[1];(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.np)(r);case 3:t=e.sent,n=t.results,l(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);return(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("h3",{className:_,children:"Trailers"}),(0,h.jsx)("div",{className:w,children:c.length?c.map((function(r){return(0,h.jsx)("div",{className:x,children:(0,h.jsx)("button",{className:Z,onClick:function(){return e=r.key,void y(e);var e},children:r.name})},r.id)})):(0,h.jsx)("p",{className:k,children:"No trailers available"})}),v&&(0,h.jsx)(d,{trailerKey:v,onClose:function(){y(null)}})]})}},933:function(r,e,t){t.d(e,{E3:function(){return l},Hx:function(){return v},Mc:function(){return p},_k:function(){return i},np:function(){return h},uV:function(){return f}});var n=t(861),a=t(687),c=t.n(a),u=t(294),s="https://api.themoviedb.org",o={method:"GET",params:{api_key:"c94d8e5ef8b4fe69956b21ebd01a6f37",language:"en-US",include_adult:!1},headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRkOGU1ZWY4YjRmZTY5OTU2YjIxZWJkMDFhNmYzNyIsInN1YiI6IjY1ZTg1MDMxM2ZlMTYwMDE2MjVjZTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut43gbHMar0hOfK1FZIIz0nwPLqmUTw0HqWj4r3u8m4"}},i=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.url="".concat(s,"/3/trending/movie/day"),r.prev=1,r.next=4,u.Z.request(o);case 4:return e=r.sent,r.abrupt("return",e.data);case 8:throw r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.url="".concat(s,"/3/search/movie"),o.params.query=e,r.prev=2,r.next=5,u.Z.request(o);case 5:return t=r.sent,r.abrupt("return",t.data);case 9:throw r.prev=9,r.t0=r.catch(2),console.error(r.t0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.url="".concat(s,"/3/movie/").concat(e),r.prev=1,r.next=4,u.Z.request(o);case 4:return t=r.sent,r.abrupt("return",t.data);case 8:throw r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.url="".concat(s,"/3/movie/").concat(e,"/credits"),r.prev=1,r.next=4,u.Z.request(o);case 4:return t=r.sent,r.abrupt("return",t.data);case 8:throw r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.url="".concat(s,"/3/movie/").concat(e,"/reviews"),r.prev=1,r.next=4,u.Z.request(o);case 4:return t=r.sent,r.abrupt("return",t.data);case 8:throw r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.url="".concat(s,"/3/movie/").concat(e,"/videos"),r.prev=1,r.next=4,u.Z.request(o);case 4:return t=r.sent,r.abrupt("return",t.data);case 8:throw r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.ea37416a.chunk.js.map