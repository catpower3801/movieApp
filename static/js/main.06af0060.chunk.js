(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),i=n.n(a),s=(n(17),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),p=n(9),v=n(7),f=n(10),d=(n(19),n(20),n(8)),h=n.n(d);function g(e){var t=e.poster;return r.a.createElement("img",{src:t,alt:"Movie Poster"})}var w=function(e){var t=e.title,n=e.poster,o=e.genres,a=e.synopsis;return r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,t),r.a.createElement(g,{poster:n}),r.a.createElement("p",null,console.log(function(e){return r.a.createElement("span",null,e)}(o))),r.a.createElement("p",null,r.a.createElement(h.a,{text:a,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})))},y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(a)))).state={},n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,console.log(t),n.setState({movies:t});case 5:case"end":return e.stop()}},e)})),n._renderMovies=function(){return n.state.movies.map(function(e,t){return r.a.createElement(w,{title:e.title,poster:e.medium_cover_image,key:t,genres:e.genres,synopsis:e.synopsis})})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading")}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.06af0060.chunk.js.map