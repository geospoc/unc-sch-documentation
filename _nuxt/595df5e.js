(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{282:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(34);function c(e,t){history.replaceState({},"","#"+e),setTimeout((function(){var n=e.replace(/\./g,"\\."),c=document.querySelector("#".concat(n)).offsetTop-function(e){var t=document.createElement("div");t.style.position="absolute",t.style.opacity="0",t.style.height=getComputedStyle(document.documentElement).getPropertyValue(e),document.body.appendChild(t);var n=parseInt(getComputedStyle(t).height);return document.body.removeChild(t),n}(t);window.scrollTo(0,c)}))}},283:function(e,t,n){"use strict";var c=n(282);n.d(t,"a",(function(){return c.a}))},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(9);var c=n(3);function r(){var e=Object(c.j)(),t=Object(c.j)([]),n=Object(c.j)([]),r=function(e){return e.forEach((function(e){var n=e.target.id;e.isIntersecting?t.value.push(n):t.value=t.value.filter((function(e){return e!==n}))}))};return Object(c.o)(t,(function(e,t){0===e.length?n.value=t:n.value=e})),Object(c.f)((function(){return e.value=new IntersectionObserver(r)})),Object(c.g)((function(){var t;return null===(t=e.value)||void 0===t?void 0:t.disconnect()})),{visibleHeadings:t,activeHeadings:n,updateHeadings:function(t){return t.forEach((function(t){e.value.observe(t)}))}}}},285:function(e,t,n){"use strict";n.r(t);var c=n(38),r=(n(37),n(30),n(3)),o=n(284),l=n(283),d=Object(r.b)({props:{toc:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(o.a)(),t=e.activeHeadings,n=e.visibleHeadings,d=e.updateHeadings;Object(r.h)((function(){return setTimeout((function(){d([].concat(Object(c.a)(document.querySelectorAll(".docus-content h1")),Object(c.a)(document.querySelectorAll(".docus-content h2")),Object(c.a)(document.querySelectorAll(".docus-content h3"))))}),200)}));return{visibleHeadings:n,activeHeadings:t,scrollToHeading:l.a,isActiveParent:function(link){return link.children&&link.children.some((function(e){return t.value.includes(e.id)}))}}}}),v=n(2),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"font-medium ml-4"},e._l(e.toc,(function(link){return n("li",{key:link.id,on:{click:function(t){return e.$emit("click")}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":e.activeHeadings.includes(link.id)||e.isActiveParent(link),"d-secondary-text hover:d-secondary-text-hover":!e.activeHeadings.includes(link.id)&&!e.isActiveParent(link)},attrs:{href:"#"+link.id},on:{click:function(t){return t.preventDefault(),e.scrollToHeading(link.id,"--docs-scroll-margin-block")}}},[e._v("\n      "+e._s(link.text)+"\n    ")]),e._v(" "),link.children?n("ul",{staticClass:"overflow-x-hidden font-medium"},e._l(link.children,(function(t){return n("li",{key:t.id},[n("a",{staticClass:"block py-1 pl-3 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":e.activeHeadings.includes(t.id),"d-secondary-text hover:d-secondary-text-hover":!e.activeHeadings.includes(t.id)},attrs:{href:"#"+t.id},on:{click:function(n){return n.preventDefault(),e.scrollToHeading(t.id,"--docs-scroll-margin-block")}}},[e._v("\n          "+e._s(t.text)+"\n        ")])])})),0):e._e()])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);