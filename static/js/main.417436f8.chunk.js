(this["webpackJsonpmovie-app-2021"]=this["webpackJsonpmovie-app-2021"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),i=n.n(a),r=n(13),c=n.n(r),o=n(4),l=n.n(o),m=n(14),d=n(15),j=n(16),u=n(19),v=n(18),h=n(17),p=n.n(h);n(44);var g=function(e){e.id;var t=e.title,n=e.summary,a=e.poster,i=e.genres,r=e.year;return e.rating,Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{className:"poster",src:a,alt:t,title:t}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsx)("h3",{className:"title",children:t}),Object(s.jsxs)("h5",{className:"year",children:["Year: ",r]}),Object(s.jsxs)("div",{className:"genres",children:["Genres:",i.map((function(e,t){return Object(s.jsx)("span",{className:"genre",children:e},t)}))]}),Object(s.jsx)("p",{className:"summary",children:n})]})]})},b=(n(45),function(e){Object(u.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:n=t.sent,s=n.data.data.movies,console.log(s),e.setState({isLoading:!1,movies:s});case 6:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader-text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(g,{id:e.id,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,year:e.year,rating:e.rating},e.id)}))})})}}]),n}(i.a.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.417436f8.chunk.js.map