(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),u=a(6),l=a.n(u),o=(a(13),a(1)),s=a(7),i=a(4);a(14);!function(e){e[e.NEUTRALS=0]="NEUTRALS",e[e.PLAYERS=1]="PLAYERS"}(n||(n={}));var v=function(e){var t=e.x,a=e.y,c=e.status,u=e.value,l=e.onClick,o=e.selected,s=u/2;return s<25&&(s=25),s>100&&(s=100),r.a.createElement("g",{onClick:l},r.a.createElement("circle",{cx:t,cy:a,r:s,stroke:o?"green":"black",strokeWidth:"3",fill:c===n.NEUTRALS?"grey":"limegreen"}),r.a.createElement("text",{dy:".3em",x:t,y:a,textAnchor:"middle",stroke:"black",strokeWidth:"1px"},u))},m=[{x:200,y:180,value:170,status:n.PLAYERS},{x:420,y:350,value:100,status:n.NEUTRALS},{x:630,y:120,value:80,status:n.NEUTRALS}];var b=function(){var e=Object(c.useState)(m),t=Object(i.a)(e,2),a=t[0],u=t[1],l=Object(c.useState)(null),b=Object(i.a)(l,2),f=b[0],E=b[1],d=Object(c.useState)(!1),j=Object(i.a)(d,2),O=j[0],h=j[1],k=Object(c.useCallback)((function(e){return function(){null===f?a[e].status===n.PLAYERS&&E(e):(e===f||a[f].value-a[e].value<0||u((function(t){var a=Object(s.a)(t);return t[e].status===n.PLAYERS?a[e]=Object(o.a)(Object(o.a)({},a[e]),{},{value:t[f].value+t[e].value}):a[e]=Object(o.a)(Object(o.a)({},a[e]),{},{status:n.PLAYERS,value:t[f].value-t[e].value}),a[f]=Object(o.a)(Object(o.a)({},a[f]),{},{value:0}),a})),E(null))}}),[a,f]);return Object(c.useEffect)((function(){!O&&a.every((function(e){return e.status===n.PLAYERS}))&&h(!0)}),[a,O]),Object(c.useEffect)((function(){var e=setInterval((function(){u((function(e){return e.map((function(e){return e.status===n.NEUTRALS?e:Object(o.a)(Object(o.a)({},e),{},{value:e.value+1})}))}))}),500);return O&&clearInterval(e),function(){return clearInterval(e)}}),[O]),r.a.createElement("div",{className:"App"},r.a.createElement("svg",{height:"800",width:"800"},O&&r.a.createElement("text",{dy:".3em",x:"50%",y:10,textAnchor:"middle",stroke:"black",strokeWidth:"1px"},"You win"),a.map((function(e,t){return r.a.createElement(v,Object.assign({onClick:k(t),selected:f===t},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.eaad778c.chunk.js.map