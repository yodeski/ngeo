!function(e){function n(n){for(var t,l,u=n[0],i=n[1],c=n[2],p=0,s=[];p<u.length;p++)l=u[p],o[l]&&s.push(o[l][0]),o[l]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(f&&f(n);s.length;)s.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(t=!1)}t&&(a.splice(n--,1),e=l(l.s=r[0]))}return e}var t={},o={2:0},a=[];function l(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=t,l.d=function(e,n,r){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)l.d(r,t,function(n){return e[n]}.bind(null,t));return r},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var f=i;a.push([519,0]),r()}({519:function(e,n,r){r(71),r(72),e.exports=r(520)},520:function(e,n,r){"use strict";r.r(n);r(521);var t=r(371),o=r(54),a=r(24),l=r(55),u=r(33),i=r(42),c={};c.module=angular.module("gmfapp",["gettext",t.a.name,o.a.name,a.a.module.name]),c.module.value("gmfTreeUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/themes?version=2&background=background"),c.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),c.MainController=function(e){e.loadThemes(),this.map=new u.a({layers:[],view:new i.a({center:[632464,185457],projection:l.a,minZoom:3,zoom:3})})},c.MainController.$inject=["gmfThemes"],c.module.controller("MainController",c.MainController),n.default=c},521:function(e,n){}});
//# sourceMappingURL=backgroundlayerselector.02c4b7.js.map