(this["webpackJsonphotel-app"]=this["webpackJsonphotel-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=(a(9),a(1));a(10),a(11);var s=function(e){return r.a.createElement("div",{className:"Row"},e.rowval.map((function(e){return r.a.createElement("div",{className:"cellClass class"+e})})))};var i=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[3,3,3,3,0,0,3,0,0,3,3,0,3,3,0,3,3,3,3,0],[3,0,0,0,0,3,0,3,0,3,0,3,0,3,0,3,3,0,0,0],[3,0,3,3,0,3,3,3,0,3,0,3,0,3,0,3,3,3,3,0],[3,0,0,3,0,3,0,3,0,3,0,0,0,3,0,3,3,0,0,0],[3,3,3,3,0,3,0,3,0,3,0,0,0,3,0,3,3,3,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[3,3,3,3,0,3,0,0,0,3,0,3,3,3,3,0,3,3,3,3],[3,0,0,3,0,3,0,0,0,3,0,3,3,0,0,0,3,0,0,3],[3,0,0,3,0,3,0,0,0,3,0,3,3,3,3,0,3,3,3,3],[3,0,0,3,0,0,3,0,3,0,0,3,3,0,0,0,3,0,3,0],[3,3,3,3,0,0,0,3,0,0,0,3,3,3,3,0,3,0,3,3],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];function u(e,t,a){return a>t?t:a<e?e:a}var m=0;var f=function(e){for(var t=new Array,a=0;a<e.size;a++){for(var o=new Array,c=0;c<e.size;c++)o.push(0);t.push(o)}t[Math.floor(e.size/2)][Math.floor(e.size/2)]=2;var f=Math.floor(e.size/2)+1;t[f][f]=1;var v=Object(n.useState)(0),d=Object(l.a)(v,2),h=d[0],b=d[1],E=Object(n.useState)(t),z=Object(l.a)(E,2),p=z[0],w=z[1],S=Object(n.useState)([Math.floor(e.size/2),Math.floor(e.size/2)]),g=Object(l.a)(S,2),k=g[0],y=g[1],j=Object(n.useState)([[Math.floor(e.size/2)+1,Math.floor(e.size/2)+1]]),M=Object(l.a)(j,2),O=M[0],B=M[1],N=Object(n.useState)(1),I=Object(l.a)(N,2),x=I[0],A=I[1],C=Object(n.useState)(2),G=Object(l.a)(C,2),J=G[0],L=G[1];return document.addEventListener("keydown",(function(e){switch(e.keyCode){case 37:A(1);break;case 38:A(4);break;case 39:A(3);break;case 40:A(2)}})),Object(n.useEffect)((function(){var t=setInterval((function(){if(1==m)return function(){return clearInterval(t)};O.push(function(e,t,a){var n=t[0],r=t[1];switch(e){case 1:r-=1;break;case 2:n+=1;break;case 3:r+=1;break;case 4:n-=1}return n<0&&(n=a-1),n>a-1&&(n=0),r<0&&(r=a-1),r>a-1&&(r=0),[n,r]}(x,O[O.length-1],e.size));var a=O[O.length-1];if(a[0]==k[0]&&a[1]==k[1]){b(h+1);var n=Math.floor(Math.random()*e.size),r=Math.floor(Math.random()*e.size);y([n,r])}else O.shift();var o=0;if(O.forEach((function(e){e[0]==O[O.length-1][0]&&e[1]==O[O.length-1][1]&&(o+=1)})),o>1){m=1,document.removeEventListener("keydown",(function(){}));for(var c=new Array,l=0;l<e.size;l++){for(var s=new Array,u=0;u<e.size;u++)s.push(0);c.push(s)}for(var f=0;f<e.size;f++)for(var v=0;v<e.size;v++)c[f][v]=3;w(i)}else B(O),w(function(e,t,a){for(var n=new Array,r=0;r<a;r++){for(var o=new Array,c=0;c<a;c++)o.push(0);n.push(o)}return e.map((function(e){n[e[0]][e[1]]=1})),n[t[0]][t[1]]=2,n}(O,k,e.size))}),100);return function(){return clearInterval(t)}})),r.a.createElement("div",null,r.a.createElement("div",{className:"gameBox"},r.a.createElement("label",{className:"scoreBoard"},"Score:",r.a.createElement("br",null),r.a.createElement("label",{className:"score"},h)),r.a.createElement("div",{className:"controlPanel"},r.a.createElement("button",{className:"panelButton gridSizeDec",onClick:function(){L(u(1,3,J-1))}},"-"),r.a.createElement("button",{className:"panelButton gridSizeInc",onClick:function(){L(u(1,3,J+1))}},"+")),r.a.createElement("div",{className:"Board size"+J},p.map((function(e){return r.a.createElement(s,{rowval:e})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(12);function v(){document.getElementById("sizebox").value<3?alert("Size should be greater than 2"):c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,{id:"boardgame",size:document.getElementById("sizebox").value})),document.getElementById("root"))}var d=function(e){return r.a.createElement("div",{class:"inputbox"},r.a.createElement("label",{class:"labelSize"},"Snake Game"),r.a.createElement("br",null),r.a.createElement("input",{class:"inputSize",id:"sizebox",placeholder:"Size..."}),r.a.createElement("button",{class:"inputSubmit",onClick:v},"Start Game"))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d993e001.chunk.js.map