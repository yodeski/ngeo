!function(e){function t(t){for(var n,l,u=t[0],i=t[1],c=t[2],p=0,f=[];p<u.length;p++)l=u[p],o[l]&&f.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={1:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;a.push([408,0]),r()}({408:function(e,t,r){r(70),r(71),e.exports=r(510)},510:function(e,t,r){"use strict";r.r(t);r(511);var n=r(186),o={};o.module=angular.module("gmfapp",["gettext",n.a.name]),o.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi"),o.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),o.MainController=function(e){this.passwordValidator={isPasswordValid:function(e){return e.length>8&&/\d/.test(e)&&/[a-z]/.test(e)&&/[A-Z]/.test(e)&&/\W/.test(e)},notValidMessage:e.getString("The new password must have at least 8 characters,including capital letter, small letter, digit and special character.")}},o.MainController.$inject=["gettextCatalog"],o.module.controller("MainController",o.MainController),t.default=o},511:function(e,t){}});
//# sourceMappingURL=authentication.bd7ed3.js.map