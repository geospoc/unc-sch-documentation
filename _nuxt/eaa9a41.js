(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{426:function(t,e,n){"use strict";n.r(e);n(14),n(12),n(11),n(20),n(21);var r=n(38),o=n(7),c=n(6),l=n(4),d=(n(16),n(68),n(17),n(184),n(1)),h=n(8),f=n(3);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(f.b)({name:"PageSlug",middleware:function(t){var e=t.app,n=t.params,r=t.redirect;"index"===n.pathMatch&&r(e.localePath("/"))},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,f,m,v,y,w,j,P,x,k,component;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$docus,r=t.app,c=r.i18n,l=r.localePath,f=t.params,m=t.error,v=t.redirect,y=c.locale,w=O({},n.settings.value.layout),j=Object(h.n)("/".concat(f.pathMatch||""))||"/",!1,e.next=7,n.search({deep:!0}).where({language:y,to:j,draft:false,page:{$ne:!1}}).fetch();case 7:if(P=e.sent,x=Object(o.a)(P,1),k=x[0]){e.next=12;break}return e.abrupt("return",m({statusCode:404,message:"404 - Page not found"}));case 12:if(k.template=n.getPageTemplate(k),"function"!=typeof(component=d.default.component(k.template))||component.options){e.next=19;break}return e.next=17,component();case 17:(component=e.sent).options||(component=d.default.extend(component));case 19:return component.options.templateOptions&&(w=O(O({},w),component.options.templateOptions)),k.layout&&(w=O(O({},w),k.layout)),k.navigation&&k.navigation.redirect&&v(l(k.navigation.redirect)),e.abrupt("return",{page:k,templateOptions:w});case 24:case"end":return e.stop()}}),e)})))()},head:function(){var head=O({title:this.page.title,meta:[]},this.page.head||{});return this.mergeMeta(head.meta,this.pageMeta),head},computed:{pageMeta:function(){return[{hid:"og:title",property:"og:title",content:this.page.title},{hid:"twitter:title",name:"twitter:title",content:this.page.title}].concat(Object(r.a)(this.page.description?[{hid:"description",name:"description",content:this.page.description},{hid:"og:description",property:"og:description",content:this.page.description},{hid:"twitter:description",name:"twitter:description",content:this.page.description}]:[]))}},created:function(){this.$docus.layout.value=this.templateOptions,this.$docus.currentPage.value=this.page,this.$docus.currentPath.value="/".concat(this.$route.params.pathMatch)},mounted:function(){var t;null!==(t=this.page)&&void 0!==t&&t.version&&localStorage.setItem("page-".concat(this.page.slug,"-version"),this.page.version)},methods:{mergeMeta:function(t,e){e.forEach((function(e){var n=e.hid||e.name||e.property;t.findIndex((function(meta){return meta.hid===n||meta.name===n||meta.property===n}))<0&&t.push(e)}))}}}),y=n(2),w=Object(y.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.page.template,{key:t.page.template,tag:"Component",attrs:{page:t.page}})}),[],!1,null,null,null);e.default=w.exports}}]);