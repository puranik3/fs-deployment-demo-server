(function(e){function t(t){for(var r,a,s=t[0],i=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("WorkshopsList")],1)},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("List of Workshops")]),n("hr"),n("ol",e._l(e.workshops,(function(t){return n("li",{key:t._id},[n("h2",[e._v(e._s(t.name))]),n("div",[e._v("Speaker: "+e._s(t.speaker))])])})),0)])},s=[],i=n("bc3a"),c=n.n(i),p={name:"WorkshopsList",data:function(){return{workshops:[]}},created:function(){var e=this;c.a.get("".concat("/api","/workshops")).then((function(t){e.workshops=t.data,console.log(e.workshops)})).catch((function(e){alert(e.message)}))}},l=p,f=n("2877"),d=Object(f["a"])(l,a,s,!1,null,"ef984e5e",null),h=d.exports,v={name:"App",components:{WorkshopsList:h}},b=v,y=Object(f["a"])(b,o,u,!1,null,null,null),_=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.528f0316.js.map