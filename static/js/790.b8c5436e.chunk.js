"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[790],{985:function(A,e,t){t.d(e,{Z:function(){return h}});var n=t(413),c=t(87),a=t(696),r="HomeItem_homeItem__-CeBM",s="HomeItem_homeItem_image__wJ9BE",o=t(184),i=function(A){var e=A.id,t=A.title,n=A.poster_path,i=A.link,u=A.location;return(0,o.jsx)("li",{className:r,children:(0,o.jsxs)(c.Link,{to:i,state:{from:u},children:[(0,o.jsx)("img",{className:s,src:n?"https://image.tmdb.org/t/p/w500".concat(n):a,alt:t}),(0,o.jsx)("p",{children:t})]})},e)},u="HomeList_homeList__+GGD4",m=t(791),h=function(A){var e=A.movies,t=A.link,c=A.location;return(0,o.jsx)("ul",{className:u,children:e.map((function(A){return(0,m.createElement)(i,(0,n.Z)((0,n.Z)({},A),{},{key:A.id,link:"".concat(t).concat(A.id),location:c}))}))})}},790:function(A,e,t){t.r(e),t.d(e,{default:function(){return f}});var n=t(439),c=t(791),a=t(933),r=t(686),s=t.n(r),o=t(985),i=t(87),u="Movies_SearchForm__EKSZc",m="Movies_SearchForm_button__gq07l",h="Movies_SearchForm_label__DjY7Q",l="Movies_SearchForm_input__ye37+",N=t(184),f=function(){var A,e=(0,c.useState)(""),t=(0,n.Z)(e,2),r=t[0],f=t[1],z=(0,c.useState)([]),d=(0,n.Z)(z,2),p=d[0],E=d[1],Z=(0,i.useSearchParams)(),b=(0,n.Z)(Z,2),M=b[0],v=b[1],y=(null!==(A=M.get("query"))&&void 0!==A?A:"").trim();(0,c.useEffect)((function(){y&&a.Z.getSearchedMovies(y).then((function(A){A.length?E(A):s().Notify.warning("We have not movies by this title.")})).catch((function(A){console.log(A)}))}),[y,M]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("form",{className:u,onSubmit:function(A){A.preventDefault();var e=A.target.elements.search.value;f(e),v({query:e}),y&&""===y.trim()?s().Notify.warning("Type title of movie."):f("")},children:[(0,N.jsx)("button",{type:"submit",className:m,children:(0,N.jsx)("span",{className:h,children:"Search"})}),(0,N.jsx)("input",{className:l,type:"text",autoComplete:"off",name:"search",autoFocus:!0,placeholder:"Search movie by name...",value:r,onChange:function(A){var e=A.target;f(e.value)}})]}),p&&(0,N.jsx)(o.Z,{movies:p,link:" "})]})}},933:function(A,e,t){var n=t(243),c="4123e3b2001d1c6636516ddf9773c242",a="https://api.themoviedb.org/3/",r={getTrendingMovies:function(){return n.Z.get("".concat(a,"trending/movie/day?api_key=").concat(c)).then((function(A){return A.data.results.map((function(A){var e=A.id,t=A.title,n=A.original_title;return{id:e,title:t||n,poster_path:A.poster_path}}))}))},getSearchedMovies:function(A){return n.Z.get("".concat(a,"search/movie?query=").concat(A,"&api_key=").concat(c)).then((function(A){return A.data.results.map((function(A){var e=A.id,t=A.title,n=A.original_title;return{id:e,title:t||n,poster_path:A.poster_path}}))}))},getMovieDetails:function(A){return n.Z.get("".concat(a,"movie/").concat(A,"?api_key=").concat(c)).then((function(A){return A.data}))},getMovieCast:function(A){return n.Z.get("".concat(a,"movie/").concat(A,"/credits?api_key=").concat(c)).then((function(A){return A.data.cast}))},getMovieReviews:function(A){return n.Z.get("".concat(a,"movie/").concat(A,"/reviews?api_key=").concat(c)).then((function(A){return A.data.results.map((function(A){return{id:A.id,author:A.author,content:A.content}}))}))}};e.Z=r},696:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=790.b8c5436e.chunk.js.map