(window.webpackJsonp=window.webpackJsonp||[]).push([[94,5,22,25,29,34,55,56,57,58,59,60,61],{282:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(34);function r(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var n=t.replace(/\./g,"\\."),r=document.querySelector("#".concat(n)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var n=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),n}(e);window.scrollTo(0,r)}))}},283:function(t,e,n){"use strict";var r=n(282);n.d(e,"a",(function(){return r.a}))},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(9);var r=n(3);function l(){var t=Object(r.j)(),e=Object(r.j)([]),n=Object(r.j)([]),l=function(t){return t.forEach((function(t){var n=t.target.id;t.isIntersecting?e.value.push(n):e.value=e.value.filter((function(t){return t!==n}))}))};return Object(r.o)(e,(function(t,e){0===t.length?n.value=e:n.value=t})),Object(r.f)((function(){return t.value=new IntersectionObserver(l)})),Object(r.g)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:n,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}},285:function(t,e,n){"use strict";n.r(e);var r=n(38),l=(n(37),n(30),n(3)),o=n(284),c=n(283),d=Object(l.b)({props:{toc:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(o.a)(),e=t.activeHeadings,n=t.visibleHeadings,d=t.updateHeadings;Object(l.h)((function(){return setTimeout((function(){d([].concat(Object(r.a)(document.querySelectorAll(".docus-content h1")),Object(r.a)(document.querySelectorAll(".docus-content h2")),Object(r.a)(document.querySelectorAll(".docus-content h3"))))}),200)}));return{visibleHeadings:n,activeHeadings:e,scrollToHeading:c.a,isActiveParent:function(link){return link.children&&link.children.some((function(t){return e.value.includes(t.id)}))}}}}),f=n(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"font-medium ml-4"},t._l(t.toc,(function(link){return n("li",{key:link.id,on:{click:function(e){return t.$emit("click")}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(link.id)||t.isActiveParent(link),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(link.id)&&!t.isActiveParent(link)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--docs-scroll-margin-block")}}},[t._v("\n      "+t._s(link.text)+"\n    ")]),t._v(" "),link.children?n("ul",{staticClass:"overflow-x-hidden font-medium"},t._l(link.children,(function(e){return n("li",{key:e.id},[n("a",{staticClass:"block py-1 pl-3 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(e.id),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(e.id)},attrs:{href:"#"+e.id},on:{click:function(n){return n.preventDefault(),t.scrollToHeading(e.id,"--docs-scroll-margin-block")}}},[t._v("\n          "+t._s(e.text)+"\n        ")])])})),0):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M9 5l7 7-7 7"}})])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SlotBase",[t._v("PageTocTop.vue")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotBase:n(82).default})},293:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full pt-0 xl:flex-row xl:pt-10"},[n("article",{staticClass:"flex-auto order-last min-w-0 mt-0 xl:order-first xl:mt-0"},[t._t("default"),t._v(" "),t.$scopedSlots["prev-next"]?n("div",{staticClass:"px-4 sm:px-6"},[n("hr",{staticClass:"mt-10 mb-8 border-t d-border"}),t._v(" "),t._t("prev-next")],2):t._e()],2),t._v(" "),t._t("toc")],2)}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SlotBase",[t._v("PageTocBottom.vue")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotBase:n(82).default})},305:function(t,e,n){"use strict";n.r(e);var r=n(3),l=Object(r.b)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}},setup:function(){return{showMobileToc:Object(r.j)(!1)}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("div",{staticClass:"\n    sticky\n    z-10\n    left-0\n    flex-none\n    w-full\n    text-sm\n    xl:hidden\n    d-blur-header d-page-mobile-toc-bg\n    lg:left-60\n    px-4\n    sm:px-6\n    top-header\n  "},[n("button",{staticClass:"\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      xl:hidden\n      dark:text-gray-100\n    ",on:{click:function(e){t.showMobileToc=!t.showMobileToc}}},[n("span",{staticClass:"mr-2"},[t._v(t._s(t.title||t.$t("toc.title")))]),t._v(" "),n("IconChevronRight",{staticClass:"w-4 h-4 d-secondary-text transition-transform duration-100 transform",class:[t.showMobileToc?"rotate-90":"rotate-0"]})],1),t._v(" "),n("div",{staticClass:"flex flex-col justify-between overflow-y-auto sticky max-h-(screen-header) -mt-10 pt-10 pb-4 top-header",class:[t.showMobileToc?"flex":"hidden xl:flex"]},[n("PageTocTop"),t._v(" "),n("h5",{staticClass:"items-center hidden mb-2 xl:flex"},[n("span",{staticClass:"text-base font-semibold text-gray-900 dark:text-gray-100"},[t._v(t._s(t.title||t.$t("toc.title")))])]),t._v(" "),n("div",{staticClass:"overflow-y-auto overflow-hidden max-h-[50vh]"},[n("PageTocList",{attrs:{toc:t.toc},nativeOn:{click:function(e){t.showMobileToc=!1}}})],1)],1),t._v(" "),n("hr",{staticClass:"border-dashed d-border"})]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevronRight:n(286).default,PageTocTop:n(287).default,PageTocList:n(285).default})},306:function(t,e,n){"use strict";n.r(e);var r=n(3),l=Object(r.b)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    hidden\n    z-10\n    left-0\n    flex-none\n    w-full\n    pl-4\n    mr-8\n    text-sm\n    bg-white\n    border-b border-gray-200 border-opacity-50\n    xl:relative xl:border-0\n    dark:border-gray-800\n    d-blur-header\n    bg-opacity-80\n    dark:bg-gray-900 dark:bg-opacity-80\n    xl:bg-transparent\n    dark:xl:bg-transparent\n    lg:left-60\n    xl:left-0\n    pl-4\n    sm:pl-6\n    xl:w-60\n    top-header\n    xl:block xl:top-0\n  "},[n("div",{staticClass:"\n      hidden\n      xl:flex\n      flex-col\n      justify-between\n      overflow-y-auto\n      d-scrollbar\n      sticky\n      max-h-(screen-header)\n      -mt-10\n      pt-10\n      pb-4\n      top-header\n    "},[n("PageTocTop"),t._v(" "),t.toc.length?n("div",{staticClass:"mb-8"},[n("h5",{staticClass:"items-center hidden mb-2 xl:flex"},[n("span",{staticClass:"text-base font-semibold text-gray-900 dark:text-gray-100"},[t._v(t._s(t.title||t.$t("toc.title")))])]),t._v(" "),n("PageTocList",{attrs:{toc:t.toc}})],1):t._e(),t._v(" "),n("PageTocBottom")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTocTop:n(287).default,PageTocList:n(285).default,PageTocBottom:n(294).default})},308:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);n(9),n(34);var r=n(3),l=Object(r.b)({props:{page:{type:Object,required:!0}},setup:function(t){var e=Object(r.m)().$docus,n=Object(r.a)((function(){return e.settings})).value;return{link:Object(r.a)((function(){if(n.value.github)return[e.repoUrl.value,"edit",n.value.github.branch,n.value.github.dir||"",n.value.contentDir,"".concat(t.page.source).replace(/^\//g,"")].filter(Boolean).join("/")}))}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.link?n("div",{staticClass:"flex flex-col justify-between d-secondary-text mt-8 mb-4 px-4 sm:px-6 sm:flex-row"},[n("a",{staticClass:"flex items-center mb-2 text-sm sm:mb-0 hover:underline",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[n("IconEdit",{staticClass:"w-3 h-3 mr-1"}),t._v(" "),n("span",[t._v("\n      "+t._s(t.$t("article.github"))+"\n    ")])],1),t._v(" "),n("span",{staticClass:"flex items-center text-sm"},[t._v("\n    "+t._s(t.$t("article.updatedAt"))+" "+t._s(t.$d(Date.parse(t.page.updatedAt),"long"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconEdit:n(309).default})},350:function(t,e,n){"use strict";n.r(e);n(35),n(15);var r=n(3),l=n(100),o=Object(r.b)({props:{prev:{type:Object,default:null},next:{type:Object,default:null}},methods:{directory:function(link){var t=link.split("/"),e=t.length>1?t[t.length-2]:"";return e.split("-").map(l.b).join(" ")}}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"flex mb-8 flex-col justify-between font-medium leading-7 xs:space-x-2 xs:flex-row"},[n("div",{staticClass:"flex justify-start items-center w-full xs:w-1/2"},[t.prev?n("NuxtLink",{staticClass:"\n        inline-flex\n        items-center\n        justify-start\n        w-full\n        px-4\n        py-2.5\n        truncate\n        border\n        d-border\n        hover:d-border-hover\n        rounded-xl\n        group\n        xs:w-auto\n        hover:d-text-primary\n      ",attrs:{to:t.$contentLocalePath(t.prev.to)}},[n("span",{staticClass:"relative flex flex-col items-end truncate"},[n("span",{staticClass:"mb-1 text-xs leading-tight d-secondary-text"},[t._v("\n          "+t._s(t.directory(t.prev.to))+"\n        ")]),t._v(" "),n("span",{staticClass:"flex items-center w-full leading-tight"},[n("IconArrowLeft",{staticClass:"flex-shrink-0 w-4 h-4 mr-2"}),t._v(" "),n("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))])],1)])]):t._e()],1),t._v(" "),n("div",{staticClass:"flex justify-end order-first w-full xs:order-last xs:w-1/2"},[t.next?n("NuxtLink",{staticClass:"\n        inline-flex\n        items-center\n        justify-end\n        w-full\n        px-4\n        py-2.5\n        mb-2\n        truncate\n        border\n        d-border\n        hover:d-border-hover\n        rounded-xl\n        group\n        xs:mb-0 xs:w-auto\n        hover:d-text-primary\n      ",attrs:{to:t.$contentLocalePath(t.next.to)}},[n("span",{staticClass:"relative flex flex-col items-start truncate"},[n("span",{staticClass:"mb-1 text-xs leading-tight d-secondary-text"},[t._v(" "+t._s(t.directory(t.next.to))+" ")]),t._v(" "),n("span",{staticClass:"flex items-center w-full leading-tight"},[n("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]),t._v(" "),n("IconArrowRight",{staticClass:"flex-shrink-0 w-4 h-4 ml-2"})],1)])]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:n(186).default,IconArrowRight:n(308).default})},352:function(t,e,n){"use strict";n.r(e);var r=n(3),l=Object(r.b)({props:{page:{type:Object,required:!0}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("mobile-toc"),t._v(" "),n("div",{staticClass:"px-4 sm:px-6 mt-4 xl:mt-0"},[n("DocusContent",{staticClass:"docus-content",attrs:{document:t.page}})],1)],2)}),[],!1,null,null,null);e.default=component.exports},444:function(t,e,n){"use strict";n.r(e);var r=n(7),l=n(4),o=n(38),c=(n(16),n(34),n(35),n(68),n(3)),d=n(283),f=Object(c.b)({props:{page:{type:Object,required:!0}},setup:function(t){var e=Object(c.m)().$docus,n=Object(c.j)(null),f=Object(c.j)(null);return Object(c.h)((function(){if(window.location.hash){var t=window.location.hash.replace("#","");setTimeout((function(){Object(d.a)(t,"--docs-scroll-margin-block")}),300)}setTimeout((function(){[].concat(Object(o.a)(document.querySelectorAll(".docus-content h1")),Object(o.a)(document.querySelectorAll(".docus-content h2")),Object(o.a)(document.querySelectorAll(".docus-content h3"))).forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.href.split("#").pop();Object(d.a)(e,"--docs-scroll-margin-block")}))}))}),500)})),Object(c.n)(function(){var o=Object(l.a)(regeneratorRuntime.mark((function l(o){var c,d,v,x,h,m,_;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return d=o.$i18n.locale,v=!(null===(c=e.ui)||void 0===c||!c.draft)&&void 0,l.next=4,e.search({deep:!0}).where({language:d,draft:v,parent:t.page.parent,$or:[{slug:{$ne:""}},{empty:{$ne:!0}}],navigation:{$and:[{$ne:!1},{$containsNone:["redirect"]}]}}).only(["title","slug","to"]).sortBy("position","asc").surround(t.page.path,{before:1,after:1}).fetch();case 4:x=l.sent,h=Object(r.a)(x,2),m=h[0],_=h[1],n.value=m,f.value=_;case 10:case"end":return l.stop()}}),l)})));return function(t){return o.apply(this,arguments)}}()),{prev:n,next:f}},templateOptions:{aside:!0,fluid:!1}}),v=n(2),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppPage",{scopedSlots:t._u([{key:"prev-next",fn:function(){return[n("PagePrevNext",{attrs:{prev:t.prev,next:t.next}})]},proxy:!0},{key:"toc",fn:function(){return[t.page.hideToc?t._e():n("PageToc",{attrs:{title:t.page.toc.title,toc:t.page.toc.links}})]},proxy:!0}])},[n("PageContent",{attrs:{page:t.page},scopedSlots:t._u([{key:"mobile-toc",fn:function(){return[n("PageMobileToc",{attrs:{title:t.page.toc.title,toc:t.page.toc.links}})]},proxy:!0}])}),t._v(" "),n("EditOnGithub",{attrs:{page:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageMobileToc:n(305).default,PageContent:n(352).default,EditOnGithub:n(349).default,PagePrevNext:n(350).default,PageToc:n(306).default,AppPage:n(293).default})}}]);