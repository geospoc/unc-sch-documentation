(window.webpackJsonp=window.webpackJsonp||[]).push([[87,5,29,56,58,59,60,61,71],{282:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(34);function o(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var n=t.replace(/\./g,"\\."),o=document.querySelector("#".concat(n)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var n=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),n}(e);window.scrollTo(0,o)}))}},283:function(t,e,n){"use strict";var o=n(282);n.d(e,"a",(function(){return o.a}))},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(9);var o=n(3);function r(){var t=Object(o.j)(),e=Object(o.j)([]),n=Object(o.j)([]),r=function(t){return t.forEach((function(t){var n=t.target.id;t.isIntersecting?e.value.push(n):e.value=e.value.filter((function(t){return t!==n}))}))};return Object(o.o)(e,(function(t,e){0===t.length?n.value=e:n.value=t})),Object(o.f)((function(){return t.value=new IntersectionObserver(r)})),Object(o.g)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:n,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}},285:function(t,e,n){"use strict";n.r(e);var o=n(38),r=(n(37),n(30),n(3)),l=n(284),c=n(283),d=Object(r.b)({props:{toc:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(l.a)(),e=t.activeHeadings,n=t.visibleHeadings,d=t.updateHeadings;Object(r.h)((function(){return setTimeout((function(){d([].concat(Object(o.a)(document.querySelectorAll(".docus-content h1")),Object(o.a)(document.querySelectorAll(".docus-content h2")),Object(o.a)(document.querySelectorAll(".docus-content h3"))))}),200)}));return{visibleHeadings:n,activeHeadings:e,scrollToHeading:c.a,isActiveParent:function(link){return link.children&&link.children.some((function(t){return e.value.includes(t.id)}))}}}}),f=n(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"font-medium ml-4"},t._l(t.toc,(function(link){return n("li",{key:link.id,on:{click:function(e){return t.$emit("click")}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(link.id)||t.isActiveParent(link),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(link.id)&&!t.isActiveParent(link)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--docs-scroll-margin-block")}}},[t._v("\n      "+t._s(link.text)+"\n    ")]),t._v(" "),link.children?n("ul",{staticClass:"overflow-x-hidden font-medium"},t._l(link.children,(function(e){return n("li",{key:e.id},[n("a",{staticClass:"block py-1 pl-3 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(e.id),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(e.id)},attrs:{href:"#"+e.id},on:{click:function(n){return n.preventDefault(),t.scrollToHeading(e.id,"--docs-scroll-margin-block")}}},[t._v("\n          "+t._s(e.text)+"\n        ")])])})),0):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M9 5l7 7-7 7"}})])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SlotBase",[t._v("PageTocTop.vue")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotBase:n(82).default})},293:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full pt-0 xl:flex-row xl:pt-10"},[n("article",{staticClass:"flex-auto order-last min-w-0 mt-0 xl:order-first xl:mt-0"},[t._t("default"),t._v(" "),t.$scopedSlots["prev-next"]?n("div",{staticClass:"px-4 sm:px-6"},[n("hr",{staticClass:"mt-10 mb-8 border-t d-border"}),t._v(" "),t._t("prev-next")],2):t._e()],2),t._v(" "),t._t("toc")],2)}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SlotBase",[t._v("PageTocBottom.vue")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotBase:n(82).default})},295:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("8c09dec6",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";n.r(e);var o=n(3),r=Object(o.b)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}},setup:function(){return{showMobileToc:Object(o.j)(!1)}}}),l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("div",{staticClass:"\n    sticky\n    z-10\n    left-0\n    flex-none\n    w-full\n    text-sm\n    xl:hidden\n    d-blur-header d-page-mobile-toc-bg\n    lg:left-60\n    px-4\n    sm:px-6\n    top-header\n  "},[n("button",{staticClass:"\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      xl:hidden\n      dark:text-gray-100\n    ",on:{click:function(e){t.showMobileToc=!t.showMobileToc}}},[n("span",{staticClass:"mr-2"},[t._v(t._s(t.title||t.$t("toc.title")))]),t._v(" "),n("IconChevronRight",{staticClass:"w-4 h-4 d-secondary-text transition-transform duration-100 transform",class:[t.showMobileToc?"rotate-90":"rotate-0"]})],1),t._v(" "),n("div",{staticClass:"flex flex-col justify-between overflow-y-auto sticky max-h-(screen-header) -mt-10 pt-10 pb-4 top-header",class:[t.showMobileToc?"flex":"hidden xl:flex"]},[n("PageTocTop"),t._v(" "),n("h5",{staticClass:"items-center hidden mb-2 xl:flex"},[n("span",{staticClass:"text-base font-semibold text-gray-900 dark:text-gray-100"},[t._v(t._s(t.title||t.$t("toc.title")))])]),t._v(" "),n("div",{staticClass:"overflow-y-auto overflow-hidden max-h-[50vh]"},[n("PageTocList",{attrs:{toc:t.toc},nativeOn:{click:function(e){t.showMobileToc=!1}}})],1)],1),t._v(" "),n("hr",{staticClass:"border-dashed d-border"})]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevronRight:n(286).default,PageTocTop:n(287).default,PageTocList:n(285).default})},306:function(t,e,n){"use strict";n.r(e);var o=n(3),r=Object(o.b)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}}}),l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    hidden\n    z-10\n    left-0\n    flex-none\n    w-full\n    pl-4\n    mr-8\n    text-sm\n    bg-white\n    border-b border-gray-200 border-opacity-50\n    xl:relative xl:border-0\n    dark:border-gray-800\n    d-blur-header\n    bg-opacity-80\n    dark:bg-gray-900 dark:bg-opacity-80\n    xl:bg-transparent\n    dark:xl:bg-transparent\n    lg:left-60\n    xl:left-0\n    pl-4\n    sm:pl-6\n    xl:w-60\n    top-header\n    xl:block xl:top-0\n  "},[n("div",{staticClass:"\n      hidden\n      xl:flex\n      flex-col\n      justify-between\n      overflow-y-auto\n      d-scrollbar\n      sticky\n      max-h-(screen-header)\n      -mt-10\n      pt-10\n      pb-4\n      top-header\n    "},[n("PageTocTop"),t._v(" "),t.toc.length?n("div",{staticClass:"mb-8"},[n("h5",{staticClass:"items-center hidden mb-2 xl:flex"},[n("span",{staticClass:"text-base font-semibold text-gray-900 dark:text-gray-100"},[t._v(t._s(t.title||t.$t("toc.title")))])]),t._v(" "),n("PageTocList",{attrs:{toc:t.toc}})],1):t._e(),t._v(" "),n("PageTocBottom")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTocTop:n(287).default,PageTocList:n(285).default,PageTocBottom:n(294).default})},311:function(t,e,n){"use strict";n(295)},312:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,"h2[data-v-295b941e]{font-size:1.5rem;font-weight:600;line-height:1.375;margin-top:1.25em;margin-bottom:.5em;letter-spacing:-.025em}h2+*[data-v-295b941e]{margin-top:0}",""]),o.locals={},t.exports=o},356:function(t,e,n){"use strict";n.r(e);n(311);var o=n(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",[t._t("default")],2)}),[],!1,null,"295b941e",null);e.default=component.exports},448:function(t,e,n){"use strict";n.r(e);var o=n(38),r=n(4),l=(n(16),n(15),n(17),n(34),n(35),n(3)),c=n(283),d=Object(l.b)({props:{page:{type:Object,required:!0}},setup:function(){var t=Object(l.m)().$docus,e=Object(l.j)(),n=Object(l.j)();Object(l.n)(Object(r.a)(regeneratorRuntime.mark((function o(){var r,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.data("github-releases");case 2:l=o.sent,e.value=l.releases,n.value=null===(r=l.releases)||void 0===r?void 0:r.map((function(t){return{id:t.name,depth:2,text:t.name}}));case 5:case"end":return o.stop()}}),o)})))),Object(l.h)((function(){if(window.location.hash){var t=window.location.hash.replace("#","");setTimeout((function(){Object(c.a)(t,"--docs-scroll-margin-block")}),300)}setTimeout((function(){[].concat(Object(o.a)(document.querySelectorAll(".docus-content h1")),Object(o.a)(document.querySelectorAll(".docus-content h2")),Object(o.a)(document.querySelectorAll(".docus-content h3"))).forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.href.split("#").pop();Object(c.a)(e,"--docs-scroll-margin-block")}))}))}),500)}));return{releases:e,toc:n,formatDate:function(t,e){var n=t||"en";return new Date(e.date).toLocaleDateString(n)}}},templateOptions:{aside:!0}}),f=n(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppPage",{scopedSlots:t._u([{key:"toc",fn:function(){return[n("PageToc",{attrs:{toc:t.toc,title:"Versions"}})]},proxy:!0}])},[n("section",{staticClass:"mt-4 xl:mt-0 px-4 sm:px-6"},[n("h1",{staticClass:"flex-1 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"},[t._v("\n      "+t._s(t.page.title)+"\n    ")]),t._v(" "),t.page.description?n("p",{staticClass:"mt-4 text-lg font-medium text-gray-500 dark:text-gray-400"},[t._v("\n      "+t._s(t.page.description)+"\n    ")]):t._e(),t._v(" "),n("hr",{staticClass:"mt-4 border-gray-100 dark:border-gray-800 dark:border-opacity-50"})]),t._v(" "),n("PageMobileToc",{attrs:{title:"Versions",toc:t.toc}}),t._v(" "),n("div",{staticClass:"px-4 sm:px-6 docus-content"},t._l(t.releases,(function(e){return n("div",{key:e.name},[n("div",{staticClass:"flex items-baseline justify-between"},[n("ProseH2",{attrs:{id:e.name}},[n("a",{attrs:{href:"#"+e.name}},[t._v("\n            "+t._s(e.name)+"\n          ")])]),t._v(" "),n("span",{staticClass:"text-sm font-normal text-gray-500"},[t._v(t._s(t.formatDate(t.$i18n.local,e)))])],1),t._v(" "),n("DocusContent",{staticClass:"docus-content overflow-x-hidden",attrs:{document:e}})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageMobileToc:n(305).default,ProseH2:n(356).default,PageToc:n(306).default,AppPage:n(293).default})}}]);