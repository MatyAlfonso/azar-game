(this["webpackJsonpazar-game"]=this["webpackJsonpazar-game"]||[]).push([[0],{11:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var s=t(1),r=t.n(s),a=t(5),n=t.n(a),o=(t(11),t(4)),i=t.n(o),j=t(6),u=t(2),b=t(0),l=function(e){var c=e.number,t=e.value,s=e.counter,r=e.img;return Object(b.jsxs)("div",{className:"Player",children:[Object(b.jsxs)("h3",{children:["Pts: ",s]}),Object(b.jsxs)("h1",{children:["Player #",c]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"Img",src:r}),Object(b.jsx)("h2",{children:t})]})]})};var O=function(){var e=Object(s.useState)(""),c=Object(u.a)(e,2),t=c[0],r=c[1],a=Object(s.useState)(""),n=Object(u.a)(a,2),o=n[0],O=n[1],d=Object(s.useState)(0),h=Object(u.a)(d,2),m=h[0],p=h[1],v=Object(s.useState)(0),x=Object(u.a)(v,2),g=x[0],f=x[1],S=["Rock","Paper","Scissors"],k=function(e){return e[Math.floor(3*Math.random())]},P=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(k(S)),O(k(S)),"Rock"===t&&"Scissors"===o||"Scissors"===t&&"Paper"===o||"Paper"===t&&"Rock"===o?(p(m+1),r(""),O("")):"Rock"===o&&"Scissors"===t||"Scissors"===o&&"Paper"===t||"Paper"===o&&"Rock"===t?(f(g+1),r(""),O("")):(p(m),f(g));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(l,{number:"1",value:t,counter:m,img:""===t?"./Ready.svg":"./".concat(t,".svg")}),Object(b.jsx)("button",{className:"Btn",onClick:P,children:"Play"}),Object(b.jsx)(l,{number:"2",value:o,counter:g,img:""===o?"./Ready.svg":"./".concat(o,".svg")})]})};n.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d7db029c.chunk.js.map