(this["webpackJsonpmovie-app-2021"]=this["webpackJsonpmovie-app-2021"]||[]).push([[0],{57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),r=n.n(s),c=n(29),i=n.n(c),o=n(8),l=n(2),j=n(17),u=n.n(j),m=n(30),d=n(11),h=n(12),p=n(14),b=n(13),v=n(31),O=n.n(v);n(57);var x=function(e){var t=e.id,n=e.title,s=e.summary,r=e.poster,c=e.genres,i=e.year,l=e.rating;return Object(a.jsx)(o.b,{to:{pathname:"/movie/"+t,state:{id:t,title:n,summary:s,poster:r,genres:c,year:i,rating:l}},children:Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{className:"poster",src:r,alt:n,title:n}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h3",{className:"title",children:n}),Object(a.jsxs)("h5",{className:"year",children:["Year: ",i]}),Object(a.jsxs)("div",{className:"genres",children:["Genres:",c.map((function(e,t){return Object(a.jsx)("span",{className:"genre",children:e},t)}))]}),Object(a.jsx)("p",{className:"summary",children:s})]})]})})},g=(n(63),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:n=t.sent,a=n.data.data.movies,console.log(a),e.setState({isLoading:!1,movies:a});case 6:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader-text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:n.map((function(e){return Object(a.jsx)(x,{id:e.id,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,year:e.year,rating:e.rating},e.id)}))})})}}]),n}(r.a.Component));var f=function(){return Object(a.jsx)("h1",{children:"About page"})};n(64);var y=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",className:"nav-link",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",className:"nav-link",children:"About"})]})},N=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){if(this.props.location.state){var e=this.props.location.state,t=(e.id,e.title);e.summary,e.poster,e.genres,e.year,e.rating;return Object(a.jsx)("h1",{children:t})}return null}}]),n}(r.a.Component);var k=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(l.a,{path:"/",component:g,exact:!0}),Object(a.jsx)(l.a,{path:"/about",component:f}),Object(a.jsx)(l.a,{path:"/movie/:id",component:N})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.eae4da23.chunk.js.map