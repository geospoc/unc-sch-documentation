(window.webpackJsonp=window.webpackJsonp||[]).push([[11,14,29],{282:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(34);function r(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var n=t.replace(/\./g,"\\."),r=document.querySelector("#".concat(n)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var n=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),n}(e);window.scrollTo(0,r)}))}},283:function(t,e,n){"use strict";var r=n(282);n.d(e,"a",(function(){return r.a}))},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(9);var r=n(3);function o(){var t=Object(r.j)(),e=Object(r.j)([]),n=Object(r.j)([]),o=function(t){return t.forEach((function(t){var n=t.target.id;t.isIntersecting?e.value.push(n):e.value=e.value.filter((function(t){return t!==n}))}))};return Object(r.o)(e,(function(t,e){0===t.length?n.value=e:n.value=t})),Object(r.f)((function(){return t.value=new IntersectionObserver(o)})),Object(r.g)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:n,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}},286:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M9 5l7 7-7 7"}})])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,n){"use strict";n.r(e);n(13),n(10),n(9),n(19),n(20);var r=n(6),o=n(38),c=n(3),l=n(284),d=n(282);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(c.b)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}},setup:function(t){var e=Object(c.i)({activeLink:"",exactActiveLink:"",showMobileToc:!1}),n=Object(l.a)(),r=n.activeHeadings,m=n.updateHeadings;Object(c.h)((function(){return m([].concat(Object(o.a)(document.querySelectorAll(".docus-content h1")),Object(o.a)(document.querySelectorAll(".docus-content h2")),Object(o.a)(document.querySelectorAll(".docus-content h3"))))}));var v=Object(c.a)((function(){var e=Object(o.a)(t.toc);return e.shift(),e}));return f(f({},Object(c.l)(e)),{},{activeHeadings:r,scrollToHeading:d.a,filteredToc:v})}}),h=n(2),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("div",{staticClass:"\n    sticky\n    z-10\n    px-4\n    text-sm\n    border-b border-gray-100 border-dashed\n    top-header\n    dark:border-gray-800\n    d-blur-header d-page-mobile-toc-bg\n  "},[n("button",{staticClass:"\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      dark:text-gray-100\n    ",on:{click:function(e){t.showMobileToc=!t.showMobileToc}}},[n("span",{staticClass:"mr-2"},[t._v(t._s(t.title||t.$t("toc.title")))]),t._v(" "),n("IconChevronRight",{staticClass:"w-4 h-4 text-gray-400 transition-transform duration-100 transform",class:[t.showMobileToc?"rotate-90":"rotate-0"]})],1),t._v(" "),n("ul",{staticClass:"pb-4 overflow-x-hidden font-medium",class:[t.showMobileToc?"flex flex-col":"hidden"]},t._l(t.filteredToc,(function(link){return n("li",{key:link.id,on:{click:function(e){t.showMobileToc=!1}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform scrollactive-item",class:{"text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400":t.activeHeadings.includes(link.id),"text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400":!t.activeHeadings.includes(link.id)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--blogpost-scroll-margin-block")}}},[t._v(t._s(link.text))])])})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevronRight:n(286).default})},443:function(t,e,n){"use strict";n.r(e);var r=n(38),o=(n(34),n(35),n(3)),c=n(283),l=Object(o.b)({props:{page:{type:Object,required:!0}},setup:function(){Object(o.h)((function(){if(window.location.hash){var t=window.location.hash.replace("#","");setTimeout((function(){Object(c.a)(t,"--blogpost-scroll-margin-block")}),300)}setTimeout((function(){[].concat(Object(r.a)(document.querySelectorAll(".docus-content h1")),Object(r.a)(document.querySelectorAll(".docus-content h2")),Object(r.a)(document.querySelectorAll(".docus-content h3"))).forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.href.split("#").pop();Object(c.a)(e,"--blogpost-scroll-margin-block")}))}))}),300)}));return{today:(new Date).toISOString().split("T")[0],formatDateByLocale:function(t,e){var n=t||"en";return new Date(e).toLocaleDateString(n,{year:"numeric",month:"long",day:"numeric"})}}},computed:{imgUrl:function(){return this.page.imgUrl||"https://source.unsplash.com/random"}},templateOptions:{aside:!1,fluid:!0}}),d=n(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"py-16 sm:py-24 relative"},[n("div",{staticClass:"relative max-w-2xl mx-auto"},[n("NuxtLink",{staticClass:"absolute top-0 left-0 px-4 -mt-12 sm:-mt-16",attrs:{to:t.$contentLocalePath("/blog")}},[n("span",{staticClass:"\n            text-sm\n            sm:text-base\n            leading-none\n            text-gray-900\n            dark:text-gray-100\n            hover:text-gray-500 hover:dark:text-gray-400\n            font-medium\n          "},[t._v("← Back")])]),t._v(" "),n("div",{staticClass:"mb-6 px-4"},[n("h1",{staticClass:"flex-1 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"},[t._v("\n          "+t._s(t.page.title)+"\n        ")]),t._v(" "),n("p",{staticClass:"my-4 text-base font-medium d-secondary-text"},[t._v("\n          "+t._s(t.page.description)+"\n        ")]),t._v(" "),n("div",{staticClass:"flex sm:flex-row items-center"},[t.page.date?n("time",{staticClass:"font-medium mr-2 text-sm d-tertiary-text",attrs:{datetime:t.page.date}},[t._v("\n            "+t._s(t.formatDateByLocale(t.$i18n.locale,t.page.date))+"\n          ")]):n("div",{staticClass:"font-medium mr-2 text-sm text-yellow-600 dark:text-yellow-500"},[t._v("\n            ⚠️ Please add\n            "),n("ProseCodeInline",[t._v("date: "+t._s(t.today))]),t._v("\n            in the page front-matter`\n          ")],1),t._v(" "),t.page.authors&&t.page.authors.length?n("div",{staticClass:"text-sm text-gray-400 dark:text-gray-700"},[t._v("|")]):t._e(),t._v(" "),n("div",{staticClass:"flex ml-4 sm:ml-2"},t._l(t.page.authors,(function(e,r){return n("a",{key:r,staticClass:"flex items-center justify-end -ml-2 sm:ml-0 sm:mr-2",attrs:{href:e.link,target:"_blank",rel:"noopener noindex nofollow"}},[n("NuxtImg",{staticClass:"rounded-full border border-gray-300 dark:border-gray-700 inline-block h-8 w-8 sm:mr-1",attrs:{height:"32",width:"32",src:e.avatarUrl,alt:e.name,title:e.name}}),t._v(" "),n("span",{staticClass:"hidden sm:inline-block font-medium text-sm text-gray-800 dark:text-gray-300"},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)})),0)])])],1),t._v(" "),n("div",{staticClass:"max-w-4xl mx-auto"},[n("div",{staticClass:"aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 mb-8"},[n("NuxtImg",{attrs:{src:t.imgUrl,alt:t.page.title}})],1)]),t._v(" "),n("div",{staticClass:"max-w-2xl mx-auto"},[n("BlogpostToc",{staticClass:"mb-8",attrs:{toc:t.page.toc.links,title:t.page.toc.title}}),t._v(" "),n("DocusContent",{staticClass:"px-4 docus-content",attrs:{document:t.page}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProseCodeInline:n(185).default,BlogpostToc:n(348).default})}}]);