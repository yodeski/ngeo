!function(e){function t(t){for(var r,i,l=t[0],c=t[1],s=t[2],d=0,p=[];d<l.length;d++)i=l[d],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={42:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;a.push([531,0]),n()}({531:function(e,t,n){n(53),n(54),e.exports=n(532)},532:function(e,t,n){"use strict";n.r(t);n(533);var r=n(21),o=n(116),a=n(93),i=n(76),l=n(129),c=n(32),s=n(18),u=n(24),d=n(45),p=n(71),f=n(17),w=n(28),h=n(74),v=n(34),g=n(35),y=n(14),m={};m.module=angular.module("app",["gettext",r.a.name,o.a.name,l.a.module.name]),m.MainController=function(e,t){var n=this;this.map=new s.a({layers:[new f.a({source:new w.b})],view:new u.a({center:[1444682,5979706],zoom:4})});var r=this.map;e.init(r);var o=new c.a,l=e.getFeatureOverlay();l.setFeatures(o),l.setStyle(new y.c({fill:new v.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.a({color:"#ffcc33",width:2}),image:new h.a({radius:7,fill:new v.a({color:"#ffcc33"})})})),this.mapClickIsEnabled=!0;var m=document.getElementById("popup-content");this.map.on("singleclick",function(e){if(n.mapClickIsEnabled){var t=d.i(e.coordinate);m.innerHTML="<p>You clicked here: <code>"+t+"</code></p>"}});var b=new i.a(this,"mapClickIsEnabled");t.registerTool("mapTools",b,!0),this.drawPoint=new p.a({type:"Point",features:o}),this.drawPoint.setActive(!1),a.a.interaction(this.drawPoint),r.addInteraction(this.drawPoint);var P=new i.a(this.drawPoint,"active");t.registerTool("mapTools",P),this.drawLine=new p.a({type:"LineString",features:o}),this.drawLine.setActive(!1),a.a.interaction(this.drawLine),r.addInteraction(this.drawLine);var T=new i.a(this.drawLine,"active");t.registerTool("mapTools",T),this.drawPolygon=new p.a({type:"Polygon",features:o}),this.drawPolygon.setActive(!1),a.a.interaction(this.drawPolygon),r.addInteraction(this.drawPolygon);var M=new i.a(this.drawPolygon,"active");t.registerTool("mapTools",M)},m.MainController.$inject=["ngeoFeatureOverlayMgr","ngeoToolActivateMgr"],m.module.controller("MainController",m.MainController),t.default=m},533:function(e,t){}});
//# sourceMappingURL=toolActivate.899af8.js.map