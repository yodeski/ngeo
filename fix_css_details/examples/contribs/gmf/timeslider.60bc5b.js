!function(e){function n(n){for(var r,a,i=n[0],u=n[1],s=n[2],c=0,d=[];c<i.length;c++)a=i[c],o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(f&&f(n);d.length;)d.shift()();return l.push.apply(l,s||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(r=!1)}r&&(l.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={28:0},l=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var f=u;l.push([600,0]),t()}({600:function(e,n,t){t(70),t(71),e.exports=t(601)},601:function(e,n,t){"use strict";t.r(n);t(602);var r=t(337),o=t(119),l={};l.module=angular.module("gmfapp",["gettext",r.a.name,o.a.module.name]),l.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),l.MainController=function(e,n){this.ngeoWMSTime_=n,this.wmsTimeRangeMode={widget:"slider",maxValue:"2013-12-31T00:00:00Z",minValue:"2006-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"day",mode:"range",interval:[0,1,0,0]},this.wmsTimeValueMode={widget:"slider",maxValue:"2015-12-31T00:00:00Z",minValue:"2014-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"year",mode:"value",interval:[0,0,1,0]},this.sliderValue,this.sliderRangeValue,this.onDateSelected=function(n){this.sliderValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeValueMode,n),e.$digest()},this.onDateRangeSelected=function(n){this.sliderRangeValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeRangeMode,n),e.$digest()}},l.MainController.$inject=["$scope","ngeoWMSTime"],l.module.controller("MainController",l.MainController),n.default=l},602:function(e,n){}});
//# sourceMappingURL=timeslider.60bc5b.js.map