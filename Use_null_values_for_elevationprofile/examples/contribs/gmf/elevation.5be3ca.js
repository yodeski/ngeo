!function(e){function t(t){for(var n,l,u=t[0],i=t[1],c=t[2],f=0,p=[];f<u.length;f++)l=u[f],o[l]&&p.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={10:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;a.push([552,0]),r()}({552:function(e,t,r){r(71),r(72),e.exports=r(553)},553:function(e,t,r){"use strict";r.r(t);r(554);var n=r(54),o=r(367),a=r(55),l=r(33),u=r(42),i=r(28),c=r(49),s={};s.module=angular.module("gmfapp",["gettext",n.a.name,o.a.name]),s.module.value("gmfRasterUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/raster"),s.module.constant("defaultTheme","Demo"),s.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),s.MainController=function(){this.elevationLayers=["aster","srtm"],this.selectedElevationLayer=this.elevationLayers[0],this.map=new l.a({layers:[new i.a({source:new c.a})],view:new u.a({projection:a.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:3})})},s.module.controller("MainController",s.MainController),t.default=s},554:function(e,t){}});
//# sourceMappingURL=elevation.5be3ca.js.map