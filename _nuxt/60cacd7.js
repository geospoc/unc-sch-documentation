(window.webpackJsonp=window.webpackJsonp||[]).push([[56,29,60,61],{281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(12);var o=n(3);function r(){var t=Object(o.j)(),e=Object(o.j)([]),n=Object(o.j)([]),r=function(t){return t.forEach((function(t){var n=t.target.id;t.isIntersecting?e.value.push(n):e.value=e.value.filter((function(t){return t!==n}))}))};return Object(o.o)(e,(function(t,e){0===t.length?n.value=e:n.value=t})),Object(o.f)((function(){return t.value=new IntersectionObserver(r)})),Object(o.g)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:n,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(36);function o(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var n=t.replace(/\./g,"\\."),o=document.querySelector("#".concat(n)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var n=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),n}(e);window.scrollTo(0,o)}))}},283:function(t,e,n){"use strict";n.r(e);var o=n(38),r=(n(37),n(30),n(3)),c=n(281),l=n(282),d=Object(r.b)({props:{toc:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(c.a)(),e=t.activeHeadings,n=t.visibleHeadings,d=t.updateHeadings;Object(r.h)((function(){return setTimeout((function(){d([].concat(Object(o.a)(document.querySelectorAll(".docus-content h1")),Object(o.a)(document.querySelectorAll(".docus-content h2")),Object(o.a)(document.querySelectorAll(".docus-content h3"))))}),200)}));return{visibleHeadings:n,activeHeadings:e,scrollToHeading:l.a,isActiveParent:function(link){return link.children&&link.children.some((function(t){return e.value.includes(t.id)}))}}}}),f=n(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"font-medium ml-4"},t._l(t.toc,(function(link){return n("li",{key:link.id,on:{click:function(e){return t.$emit("click")}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(link.id)||t.isActiveParent(link),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(link.id)&&!t.isActiveParent(link)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--docs-scroll-margin-block")}}},[t._v("\n      "+t._s(link.text)+"\n    ")]),t._v(" "),link.children?n("ul",{staticClass:"overflow-x-hidden font-medium"},t._l(link.children,(function(e){return n("li",{key:e.id},[n("a",{staticClass:"block py-1 pl-3 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(e.id),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(e.id)},attrs:{href:"#"+e.id},on:{click:function(n){return n.preventDefault(),t.scrollToHeading(e.id,"--docs-scroll-margin-block")}}},[t._v("\n          "+t._s(e.text)+"\n        ")])])})),0):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M9 5l7 7-7 7"}})])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SlotBase",[t._v("PageTocTop.vue")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotBase:n(82).default})},303:function(t,e,n){"use strict";n.r(e);var o=n(3),r=Object(o.b)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}},setup:function(){return{showMobileToc:Object(o.j)(!1)}}}),c=n(2),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("div",{staticClass:"\n    sticky\n    z-10\n    left-0\n    flex-none\n    w-full\n    text-sm\n    xl:hidden\n    d-blur-header d-page-mobile-toc-bg\n    lg:left-60\n    px-4\n    sm:px-6\n    top-header\n  "},[n("button",{staticClass:"\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      xl:hidden\n      dark:text-gray-100\n    ",on:{click:function(e){t.showMobileToc=!t.showMobileToc}}},[n("span",{staticClass:"mr-2"},[t._v(t._s(t.title||t.$t("toc.title")))]),t._v(" "),n("IconChevronRight",{staticClass:"w-4 h-4 d-secondary-text transition-transform duration-100 transform",class:[t.showMobileToc?"rotate-90":"rotate-0"]})],1),t._v(" "),n("div",{staticClass:"flex flex-col justify-between overflow-y-auto sticky max-h-(screen-header) -mt-10 pt-10 pb-4 top-header",class:[t.showMobileToc?"flex":"hidden xl:flex"]},[n("PageTocTop"),t._v(" "),n("h5",{staticClass:"items-center hidden mb-2 xl:flex"},[n("span",{staticClass:"text-base font-semibold text-gray-900 dark:text-gray-100"},[t._v(t._s(t.title||t.$t("toc.title")))])]),t._v(" "),n("div",{staticClass:"overflow-y-auto overflow-hidden max-h-[50vh]"},[n("PageTocList",{attrs:{toc:t.toc},nativeOn:{click:function(e){t.showMobileToc=!1}}})],1)],1),t._v(" "),n("hr",{staticClass:"border-dashed d-border"})]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevronRight:n(284).default,PageTocTop:n(285).default,PageTocList:n(283).default})}}]);