!function(e){function t(t){for(var r,l,i=t[0],u=t[1],c=t[2],m=0,p=[];m<i.length;m++)l=i[m],a[l]&&p.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var u=o[i];0!==a[u]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},a={12:0},n=[];function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;n.push([558,0]),o()}({558:function(e,t,o){o(71),o(72),e.exports=o(559)},559:function(e,t,o){"use strict";o.r(t),function(e){o(560),o(280);var r=o(187),a=o(180),n=o(365),l=o(106),i=o(73),u=o(54),c=o(24),s=o(132),m=o(185),p=o(184),f=o(60),d=o(91),g=o(55),h=o(33),v=o(42),b=o(28),y=o(49),T={};T.module=angular.module("gmfapp",["gettext",r.a.name,a.a.module.name,l.a.name,i.a.module.name,n.a.name,u.a.name,c.a.module.name,s.a.module.name,d.a.module.name,m.a.name,p.a.name]),T.module.value("gmfTreeUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/themes?version=2&background=background"),T.module.value("authenticationBaseUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/wsgi"),T.module.value("gmfTreeUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/themes?version=2&background=background"),T.module.value("gmfLayersUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/layers/"),T.module.constant("defaultTheme","Filters"),T.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),T.MainController=function(){function t(t,o,r,a,n,l){var i=this;this.scope_=t,r.loadThemes(),this.gmfTreeManager=a,this.map=new h.a({layers:[new b.a({source:new y.a})],view:new v.a({projection:g.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),o.setDatasourceMap(this.map),r.getThemesObject().then(function(e){if(e)for(var t=0,o=e.length;t<o;t++)if(175===e[t].id){i.gmfTreeManager.setFirstLevelGroups(e[t].children);break}}),this.toolGroup="mapTools",this.filterSelectorActive=!0;var u=new f.a(this,"filterSelectorActive");l.registerTool("dummyTools",u,!0),this.dummyActive=!1;var c=new f.a(this,"dummyActive");l.registerTool("dummyTools",c,!1),this.queryActive=!0;var s=new f.a(this,"queryActive");l.registerTool(this.toolGroup,s,!0),e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return t.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources","ngeoToolActivateMgr"],t}(),T.module.controller("MainController",T.MainController),t.default=T}.call(this,o(29))},560:function(e,t){}});
//# sourceMappingURL=filterselector.2303e6.js.map