(this["webpackJsonphotel-app"]=this["webpackJsonphotel-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),u=(n(9),n(1));n(10),n(11);var s=function(e){return r.a.createElement("div",{className:"Row"},e.rowval.map((function(e){return r.a.createElement("div",{className:"cellClass class"+e})})))};var i=0;var l=function(){for(var e=new Array,t=0;t<10;t++){for(var n=new Array,o=0;o<10;o++)n.push(0);e.push(n)}e[4][4]=2,e[5][5]=1;var c=Object(a.useState)(0),l=Object(u.a)(c,2),f=l[0],v=l[1],h=Object(a.useState)(e),m=Object(u.a)(h,2),d=m[0],b=m[1],p=Object(a.useState)([4,4]),w=Object(u.a)(p,2),k=w[0],E=w[1],j=Object(a.useState)([[5,5]]),y=Object(u.a)(j,2),O=y[0],g=y[1],S=Object(a.useState)(1),A=Object(u.a)(S,2),M=A[0],I=A[1];return document.addEventListener("keydown",(function(e){switch(e.keyCode){case 37:I(1);break;case 38:I(4);break;case 39:I(3);break;case 40:I(2)}})),Object(a.useEffect)((function(){var e=setInterval((function(){if(1==i)return function(){return clearInterval(e)};O.push(function(e,t){var n=t[0],a=t[1];switch(e){case 1:a-=1;break;case 2:n+=1;break;case 3:a+=1;break;case 4:n-=1}return n<0&&(n=9),n>9&&(n=0),a<0&&(a=9),a>9&&(a=0),[n,a]}(M,O[O.length-1]));var t=O[O.length-1];if(t[0]==k[0]&&t[1]==k[1]){v(f+1);var n=Math.floor(10*Math.random()),a=Math.floor(10*Math.random());E([n,a])}else O.shift();var r=0;if(O.forEach((function(e){e[0]==O[O.length-1][0]&&e[1]==O[O.length-1][1]&&(r+=1)})),r>1){var o=function(){i=1,document.removeEventListener("keydown",(function(){}));for(var e=new Array,t=0;t<10;t++){for(var n=new Array,a=0;a<10;a++)n.push(0);e.push(n)}for(var r=0;r<10;r++)for(var o=0;o<10;o++)e[r][o]=2,setTimeout((function(){b(e)}),100);return{v:void 0}}();if("object"===typeof o)return o.v}console.log(i),g(O),b(function(e,t){for(var n=new Array,a=0;a<10;a++){for(var r=new Array,o=0;o<10;o++)r.push(0);n.push(r)}return e.map((function(e){n[e[0]][e[1]]=1})),n[t[0]][t[1]]=2,n}(O,k))}),100);return function(){return clearInterval(e)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Score:",f),r.a.createElement("div",{className:"Board"},d.map((function(e){return r.a.createElement(s,{rowval:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.baa6a75a.chunk.js.map