!function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],d=0,g=[];d<a.length;d++)i=a[d],o[i]&&g.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);g.length;)g.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={5:0},l=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var c=s;l.push([528,0]),n()}({528:function(e,t,n){n(71),n(72),e.exports=n(617)},529:function(e,t){},530:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="gmf-displayquerygrid panel" ng-show="ctrl.active">\n  <div\n    class="close"\n    ng-click="ctrl.clear()">\n    &times;\n  </div>\n\n  <ul\n    class="nav nav-pills"\n    role="tablist">\n\n    <li\n      ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label"\n      role="presentation"\n      ng-class="{\'active\' : ctrl.isSelected(gridSource)}"\n      ng-click="ctrl.selectTab(gridSource)">\n\n      <a\n        href="#{{ctrl.escapeValue(gridSource.source.label)}}"\n        data-target="#{{ctrl.escapeValue(gridSource.source.label)}}"\n        aria-controls="{{ctrl.escapeValue(gridSource.source.label)}}"\n        role="tab"\n        data-toggle="tab">\n\n        <span ng-if="gridSource.source.tooManyResults !== true">\n          {{gridSource.source.label | translate}} ({{gridSource.source.features.length}})\n        </span>\n        <span ng-if="gridSource.source.tooManyResults === true">\n          {{gridSource.source.label | translate}} ({{gridSource.source.totalFeatureCount}}*)\n        </span>\n      </a>\n    </li>\n  </ul>\n\n  <div class="tab-content">\n    <div\n      ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label"\n      role="tabpanel"\n      class="tab-pane"\n      ng-class="{\'active\' : ctrl.isSelected(gridSource)}"\n      id="{{ctrl.escapeValue(gridSource.source.label)}}">\n\n      <ngeo-grid\n        ngeo-grid-configuration="gridSource.configuration"\n        ng-if="gridSource.source.tooManyResults !== true">\n      </ngeo-grid>\n\n      <div ng-if="gridSource.source.tooManyResults === true">\n        <div class="gmf-displayquerygrid-message alert alert-warning">\n          <p><span translate>The results can not be displayed because the maximum number has been reached</span> ({{gridSource.source.limit}}).</p>\n          <p translate>Please refine your query.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div ng-show="!ctrl.pending && ctrl.getActiveGridSource() && ctrl.getActiveGridSource().configuration !== null">\n\n    <ul class="nav justify-content-end">\n\n      <li\n        class="ng-hide"\n        ng-show="ctrl.isOneSelected()">\n        <p class="navbar-text ng-binding">\n          {{ctrl.getSelectedRowCount()}} <span translate>selected element(s)</span>\n        </p>\n      </li>\n\n      <li\n        ng-show="ctrl.isOneSelected()"\n        class="ng-hide">\n        <button\n          class="btn btn-link btn-sm"\n          title="{{\'Zoom to selection\' | translate}}"\n          ng-click="ctrl.zoomToSelection()">\n          <i class="fa fa-search-plus"></i> <span translate>Zoom to</span>\n        </button>\n      </li>\n\n      <li\n        ng-show="ctrl.isOneSelected()"\n        class="ng-hide">\n        <button\n          class="btn btn-link btn-sm"\n          title="{{\'Export selection as CSV\' | translate}}"\n          ng-click="ctrl.downloadCsv()">\n          <i class="fa fa-download"></i> <span translate>Export as CSV</span>\n        </button>\n      </li>\n\n      <li class="navbar-link">\n        <button\n          type="button"\n          class="dropup btn btn-default btn-sm dropdown-toggle"\n          data-toggle="dropdown"\n          aria-haspopup="true"\n          aria-expanded="false">\n          <span translate>Select</span>\n        </button>\n        <ul\n          class="dropdown-menu"\n          aria-labelledby="dLabel">\n          <li>\n            <a\n              href=""\n              ng-click="ctrl.selectAll()" translate>All</a>\n          </li>\n          <li>\n            <a\n              href=""\n              ng-click="ctrl.unselectAll()" translate>None</a>\n          </li>\n          <li>\n            <a\n              href=""\n              ng-click="ctrl.invertSelection()" translate>Reverse selection</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <div\n    ng-show="ctrl.pending"\n    class="gmf-displayquerygrid-pending">\n    <span class="fa fa-spinner fa-spin"></span>\n  </div>\n</div>\n';return __p}},617:function(e,t,n){"use strict";n.r(t);n(529);var r=n(180),o=n(106),l=n(54),i=n(1),a=n(214),s=n(208),u=n(356),c=n(228),d=n(105),g=n(145),p=n(18),h=n(3),f=n(33),m=n(65),v=n(31),y=n(30),_=n(10),b=(n(177),angular.module("gmfQueryGridComponent",[a.a.module.name,s.a.name,u.a.name,c.a.module.name,d.a.module.name,g.a.module.name]));function S(e,t,n){return n(e,t)}b.value("gmfDisplayquerygridTemplateUrl",function(e,t){var n=t.gmfDisplayquerygridTemplateurl;return void 0!==n?n:"gmf/query/gridComponent"}),b.run(["$templateCache",function(e){e.put("gmf/query/gridComponent",n(530))}]),S.$inject=["$element","$attrs","gmfDisplayquerygridTemplateUrl"],b.component_={controller:"GmfDisplayquerygridController as ctrl",bindings:{active:"=?gmfDisplayquerygridActive",featuresStyleFn:"&gmfDisplayquerygridFeaturesstyle",selectedFeatureStyleFn:"&gmfDisplayquerygridSelectedfeaturestyle",getMapFn:"&gmfDisplayquerygridMap",removeEmptyColumnsFn:"&?gmfDisplayquerygridRemoveemptycolumns",maxResultsFn:"&?gmfDisplayquerygridMaxresults",maxRecenterZoomFn:"&?gmfDisplayquerygridMaxrecenterzoom",mergeTabs:"<?gmfDisplayquerygridMergetabs"},templateUrl:S},b.component("gmfDisplayquerygrid",b.component_),b.Controller_=function(e,t,n,r,o,l,i,a){var s=this,u=e.has("ngeoQueryOptions")?e.get("ngeoQueryOptions"):{};this.$scope_=t,this.$timeout_=l,this.ngeoQueryResult=n,this.ngeoMapQuerent_=r,this.ngeoCsvDownload_=i,this.$element_=a,this.maxResults=void 0!==u.limit?u.limit:50,this.active=!1,this.pending=!1,this.gridSources={},this.loadedGridSources=[],this.selectedTab=null,this.removeEmptyColumns_=!1,this.maxRecenterZoom,this.mergeTabs={},this.featuresForSources_={},this.features_=new p.b,this.ngeoFeatureOverlayMgr_=o,this.highlightFeatures_=new p.b,this.filename_=e.has("gmfCsvFilename")?e.get("gmfCsvFilename"):"query-results.csv",this.map_=null,this.$scope_.$watchCollection(function(){return n},function(e,t){e!==t&&s.updateData_()}),this.unregisterSelectWatcher_=null},b.Controller_.$inject=["$injector","$scope","ngeoQueryResult","ngeoMapQuerent","ngeoFeatureOverlayMgr","$timeout","ngeoCsvDownload","$element"],b.Controller_.prototype.$onInit=function(){this.removeEmptyColumns_=!!this.removeEmptyColumnsFn&&!0===this.removeEmptyColumnsFn(),this.maxRecenterZoom=this.maxRecenterZoomFn?this.maxRecenterZoomFn():void 0;var e=this.ngeoFeatureOverlayMgr_.getFeatureOverlay();e.setFeatures(this.features_);var t=this.featuresStyleFn();void 0!==t&&(i.a.assertInstanceof(t,_.c),e.setStyle(t));var n=this.ngeoFeatureOverlayMgr_.getFeatureOverlay();n.setFeatures(this.highlightFeatures_);var r=this.selectedFeatureStyleFn();if(void 0!==r)i.a.assertInstanceof(r,_.c);else{var o=new v.a({color:[255,0,0,.6]}),l=new y.a({color:[255,0,0,1],width:2});r=new _.c({fill:o,image:new m.a({fill:o,radius:5,stroke:l}),stroke:l,zIndex:10})}n.setStyle(r);var a=this.getMapFn;if(a){var s=a();i.a.assertInstanceof(s,f.a),this.map_=s}},b.Controller_.prototype.getGridSources=function(){var e=this;return this.loadedGridSources.map(function(t){return e.gridSources[t]})},b.Controller_.prototype.updateData_=function(){var e=this;if(0===this.ngeoQueryResult.total&&!this.hasOneWithTooManyResults_()){var t=this.active;return this.clear(),void(t&&(this.active=this.ngeoQueryResult.pending,this.pending=this.ngeoQueryResult.pending))}this.active=!0,this.pending=!1;var n=this.ngeoQueryResult.sources;Object.keys(this.mergeTabs).length>0&&(n=this.getMergedSources_(n)),n.forEach(function(t){t.tooManyResults?e.makeGrid_(null,t):(t.id=e.escapeValue(t.id),t.features.length>0&&e.collectData_(t))}),0!==this.loadedGridSources.length?null!==this.selectedTab&&""+this.selectedTab in this.gridSources||this.$timeout_(function(){var t=e.loadedGridSources[0];e.selectTab(e.gridSources[t])},0):this.active=!1},b.Controller_.prototype.hasOneWithTooManyResults_=function(){return this.ngeoQueryResult.sources.some(function(e){return e.tooManyResults})},b.Controller_.prototype.escapeValue=function(e){if(Number.isInteger(e))return e;var t=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\ |]/g;return null!==e.match(t)?e.replace(t,"_"):e},b.Controller_.prototype.isSelected=function(e){return this.selectedTab===e.source.label},b.Controller_.prototype.getMergedSources_=function(e){var t=this,n=[],r={};for(var o in e.forEach(function(e){null===t.getMergedSource_(e,r)&&n.push(e)}),r)n.push(r[o]);return n},b.Controller_.prototype.getMergedSource_=function(e,t){var n,r=null;for(var o in this.mergeTabs){if(this.mergeTabs[o].some(function(t){return t==e.label})){r=o;break}}return null===r?null:(r in t?n=t[r]:(n={features:[],id:r,label:r,limit:this.maxResults,pending:!1,queried:!0,tooManyResults:!1,totalFeatureCount:void 0},t[r]=n),e.features.forEach(function(e){n.features.push(e)}),n.tooManyResults=n.tooManyResults||e.tooManyResults,n.tooManyResults&&(n.totalFeatureCount=void 0!==n.totalFeatureCount?n.totalFeatureCount+n.features.length:n.features.length,n.features=[]),void 0!==e.totalFeatureCount&&(n.totalFeatureCount=void 0!==n.totalFeatureCount?n.totalFeatureCount+e.totalFeatureCount:e.totalFeatureCount),n)},b.Controller_.prototype.collectData_=function(e){var t,n,r=[],o=[],l={};(e.features.forEach(function(e){void 0!==(t=e.getProperties())&&(n=e.getGeometryName(),-1===o.indexOf(n)&&o.push(n),r.push(t),l[c.a.getRowUid(t)]=e)}),this.cleanProperties_(r,o),r.length>0)&&(this.makeGrid_(r,e)&&(this.featuresForSources_[""+e.label]=l))},b.Controller_.prototype.cleanProperties_=function(e,t){e.forEach(function(e){t.forEach(function(t){delete e[t]}),delete e.boundedBy,delete e.ngeo_feature_type_}),!0===this.removeEmptyColumns_&&this.removeEmptyColumnsFn_(e)},b.Controller_.prototype.removeEmptyColumnsFn_=function(e){var t,n,r,o=[];for(n in e[0])for(t=0;t<e.length;t++)if(void 0!==e[t][n]){o.push(n);break}e.forEach(function(e){for(n in r=[],e)-1===o.indexOf(n)&&r.push(n);r.forEach(function(t){delete e[t]})})},b.Controller_.prototype.makeGrid_=function(e,t){var n=""+t.label,r=null;return(null===e||null!==(r=this.getGridConfiguration_(e)))&&(-1==this.loadedGridSources.indexOf(n)&&this.loadedGridSources.push(n),this.gridSources[n]={configuration:r,source:t},!0)},b.Controller_.prototype.getGridConfiguration_=function(e){i.a.assert(e.length>0);var t={};Object.assign(t,e[0]),delete t.ol_uid;var n=[];return Object.keys(t).forEach(function(e){n.push({name:e})}),n.length>0?new c.a(e,n):null},b.Controller_.prototype.clear=function(){this.active=!1,this.pending=!1,this.gridSources={},this.loadedGridSources=[],this.selectedTab=null,this.tooManyResults=!1,this.features_.clear(),this.highlightFeatures_.clear(),this.ngeoMapQuerent_.clear(),this.featuresForSources_={},this.unregisterSelectWatcher_&&this.unregisterSelectWatcher_()},b.Controller_.prototype.selectTab=function(e){var t=this,n=e.source;this.selectedTab=n.label,this.unregisterSelectWatcher_&&(this.unregisterSelectWatcher_(),this.unregisterSelectWatcher_=null),null!==e.configuration&&(this.unregisterSelectWatcher_=this.$scope_.$watchCollection(function(){return e.configuration.selectedRows},function(e,n){Object.keys(e)!==Object.keys(n)&&t.onSelectionChanged_()})),this.updateFeatures_(e),this.reflowGrid_()},b.Controller_.prototype.reflowGrid_=function(){var e=this.escapeValue(this.selectedTab||""),t=this.$element_.find("div.tab-pane#"+e);t.removeClass("active").addClass("active"),this.$timeout_(function(){t.find("div.ngeo-grid-table-container table").trigger("reflow")})},b.Controller_.prototype.onSelectionChanged_=function(){if(null!==this.selectedTab){var e=this.gridSources[""+this.selectedTab];this.updateFeatures_(e)}},b.Controller_.prototype.updateFeatures_=function(e){if(this.features_.clear(),this.highlightFeatures_.clear(),null!==e.configuration){var t=""+e.source.label,n=this.featuresForSources_[t],r=e.configuration.selectedRows;for(var o in n){var l=n[o];o in r?this.highlightFeatures_.push(l):this.features_.push(l)}}},b.Controller_.prototype.getActiveGridSource=function(){return null===this.selectedTab?null:this.gridSources[""+this.selectedTab]},b.Controller_.prototype.isOneSelected=function(){var e=this.getActiveGridSource();return null!==e&&null!==e.configuration&&e.configuration.getSelectedCount()>0},b.Controller_.prototype.getSelectedRowCount=function(){var e=this.getActiveGridSource();return null===e||null===e.configuration?0:e.configuration.getSelectedCount()},b.Controller_.prototype.selectAll=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.selectAll()},b.Controller_.prototype.unselectAll=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.unselectAll()},b.Controller_.prototype.invertSelection=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.invertSelection()},b.Controller_.prototype.zoomToSelection=function(){if(null!==this.getActiveGridSource()){var e=h.j();this.highlightFeatures_.forEach(function(t){h.q(e,t.getGeometry().getExtent())});var t=this.map_.getSize();i.a.assert(void 0!==t);var n=this.maxRecenterZoom;this.map_.getView().fit(e,{size:t,maxZoom:n})}},b.Controller_.prototype.downloadCsv=function(){var e=this.getActiveGridSource();if(null!==e){var t=e.configuration.columnDefs;i.a.assert(void 0!==t);var n=e.configuration.getSelectedRows();this.ngeoCsvDownload_.startDownload(n,t,this.filename_)}},b.controller("GmfDisplayquerygridController",b.Controller_);var C=b,w=n(24),F=n(355),M=n(121),R=n(120),O=n(55),T=n(185),G=n(184),x=n(42),k=n(28),q=n(49),j={};j.module=angular.module("gmfapp",["gettext",r.a.module.name,o.a.name,l.a.name,C.name,w.a.module.name,F.a.name,M.a.name,R.a.name,T.a.name,G.a.name]),j.module.constant("ngeoQueryOptions",{limit:20,queryCountFirst:!0}),j.module.constant("gmfTreeUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/themes?version=2&background=background"),j.module.constant("defaultTheme","Demo"),j.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),j.queryresultComponent={controller:"gmfappQueryresultController",template:n(395)},j.module.component("gmfappQueryresult",j.queryresultComponent),j.QueryresultController=function(e){this.result=e},j.QueryresultController.$inject=["ngeoQueryResult"],j.module.controller("gmfappQueryresultController",j.QueryresultController),j.MainController=function(e,t,n){var r=this;e.loadThemes();var o=new v.a({color:[255,170,0,.6]}),l=new y.a({color:[255,170,0,1],width:2});this.featureStyle=new _.c({fill:o,image:new m.a({fill:o,radius:5,stroke:l}),stroke:l}),this.map=new f.a({layers:[new k.a({source:new q.a})],view:new x.a({projection:O.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),t.setDatasourceMap(this.map),this.themes=void 0,this.treeSource=void 0,this.queryActive=!0,this.queryGridActive=!0,e.getThemesObject().then(function(e){e&&(r.themes=e,r.treeSource=e[3])}),n.init(this.map)},j.MainController.$inject=["gmfThemes","gmfDataSourcesManager","ngeoFeatureOverlayMgr"],j.module.controller("MainController",j.MainController);t.default=j}});
//# sourceMappingURL=displayquerygrid.54580f.js.map