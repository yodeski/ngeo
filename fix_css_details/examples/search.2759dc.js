!function(e){function t(t){for(var n,l,i=t[0],c=t[1],u=t[2],p=0,h=[];p<i.length;p++)l=i[p],o[l]&&h.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(s&&s(t);h.length;)h.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={39:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;a.push([513,0]),r()}({513:function(e,t,r){r(53),r(54),e.exports=r(514)},514:function(e,t,r){"use strict";r.r(t);r(515);var n=r(1),o=r(22),a=r(87),l=r(223),i=r(18),c=r(25),u=r(17),s=r(42),p=r(6),h=r(31),d=r(38),f={};f.module=angular.module("app",["gettext",o.a.name,l.a.name]),f.searchComponent={bindings:{map:"=appSearchMap"},controller:"AppSearchController",template:'<input type="text" placeholder="search…" ngeo-search="$ctrl.options" ngeo-search-datasets="$ctrl.datasets" ngeo-search-listeners="$ctrl.listeners">'},f.module.component("appSearch",f.searchComponent),f.SearchController=function(e,t,r,n){this.$element=e,this.map,this.vectorLayer_=this.createVectorLayer_();var o=this.createAndInitBloodhound_(n);this.options={highlight:!0,hint:void 0,minLength:void 0},this.datasets=[{source:o.ttAdapter(),display:function(e){return e.get("label")},templates:{header:function(){return'<div class="ngeo-header">Addresses</div>'},suggestion:function(e){var n=e,o=t.$new(!0);o.feature=n,o.click=function(e){window.alert(n.get("label")),e.stopPropagation()};var a="<p>"+n.get("label")+'<button ng-click="click($event)">i</button></p>';return r(a)(o)}}}],this.listeners={select:f.SearchController.select_.bind(this)}},f.SearchController.$inject=["$element","$rootScope","$compile","ngeoSearchCreateGeoJSONBloodhound"],f.SearchController.prototype.$onInit=function(){var e=this.$element.find("input");e.on("focus blur",function(){e.val("")})},f.SearchController.prototype.createVectorLayer_=function(){var e=new s.a({source:new d.a});return e.setMap(this.map),e},f.SearchController.prototype.createAndInitBloodhound_=function(e){var t=e("https://geomapfish-demo.camptocamp.com/2.3/wsgi/fulltextsearch?query=%QUERY",void 0,p.g("EPSG:3857"),a.a);return t.initialize(),t},f.SearchController.select_=function(e,t,r){var o=t,a=o.getGeometry(),l=this.map.getSize();n.a.assert(void 0!==l);var i=this.vectorLayer_.getSource();i.clear(!0),i.addFeature(o),this.map.getView().fit(a,{size:l,maxZoom:16})},f.module.controller("AppSearchController",f.SearchController),f.MainController=function(){this.map=new i.a({layers:[new u.a({source:new h.b})],view:new c.a({center:[0,0],zoom:4})})},f.module.controller("MainController",f.MainController),t.default=f},515:function(e,t){}});
//# sourceMappingURL=search.2759dc.js.map