(window.webpackJsonpphoto_gallery=window.webpackJsonpphoto_gallery||[]).push([[0],{118:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(69),n(19)),i=n.n(l),u=n(22),s=n(23),m=n(29),h=n(24),p=n(30),d=n(25),f=n.n(d),v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={IMAGES:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(g).then((function(e){return e.json()})).then((function(t){return e.setState({IMAGES:t.landscape})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{images:this.state.IMAGES}))}}]),t}(r.a.Component),E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={IMAGES:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(j).then((function(e){return e.json()})).then((function(t){return e.setState({IMAGES:t.art})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{images:this.state.IMAGES}))}}]),t}(r.a.Component);n(118);var y=function(){return r.a.createElement("div",{className:"fade-in"},r.a.createElement("h1",{className:"welcomeStyle"},k))},w="@rlcdev",b="\xa9rlcdev",k="Welcome",g="https://raw.githubusercontent.com/rlcDev/PhotoGalleryMetadata/master/photosLandscapeMetadata.json",j="https://raw.githubusercontent.com/rlcDev/PhotoGalleryMetadata/master/photosArtMetadata.json",M=[{name:"",path:"/",component:y},{name:"Landscape",path:"/landscape",component:v},{name:"Art",path:"/art",component:E}],A=n(26),O=n(28),S=n.n(O);var G=function(e){return r.a.createElement(A.LinkContainer,{to:e.path,key:e.index},r.a.createElement(S.a.Link,null,e.name))};var I=function(){return r.a.createElement(i.a,{bg:"dark",variant:"dark"},r.a.createElement(A.LinkContainer,{to:"/"},r.a.createElement(i.a.Brand,null,w)),r.a.createElement(S.a,{className:"mr-auto"},M.map((function(e,t){var n;return""!==e.name&&(n=G(e,t)),n}))))};var L=function(){return r.a.createElement(i.a,{bg:"dark",fixed:"bottom",style:W},r.a.createElement("div",{style:x},b))},W={height:"4%"},x={color:"white",fontSize:"80%"},C=n(18),B=n(12);var N=function(){return M.map((function(e,t){return r.a.createElement(B.d,{exact:!0,path:e.path,component:e.component,key:t})}))};var D=function(){return r.a.createElement(C.HashRouter,null,r.a.createElement(I,null),N(),r.a.createElement(L,null))};var J=function(){return r.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(147);c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,t,n){e.exports=n(148)},69:function(e,t,n){}},[[64,1,2]]]);
//# sourceMappingURL=main.e9df595a.chunk.js.map