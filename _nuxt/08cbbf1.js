(window.webpackJsonp=window.webpackJsonp||[]).push([[22,34],{309:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);n(9),n(34);var r=n(3),l=Object(r.b)({props:{page:{type:Object,required:!0}},setup:function(t){var e=Object(r.m)().$docus,n=Object(r.a)((function(){return e.settings})).value;return{link:Object(r.a)((function(){if(n.value.github)return[e.repoUrl.value,"edit",n.value.github.branch,n.value.github.dir||"",n.value.contentDir,"".concat(t.page.source).replace(/^\//g,"")].filter(Boolean).join("/")}))}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.link?n("div",{staticClass:"flex flex-col justify-between d-secondary-text mt-8 mb-4 px-4 sm:px-6 sm:flex-row"},[n("a",{staticClass:"flex items-center mb-2 text-sm sm:mb-0 hover:underline",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[n("IconEdit",{staticClass:"w-3 h-3 mr-1"}),t._v(" "),n("span",[t._v("\n      "+t._s(t.$t("article.github"))+"\n    ")])],1),t._v(" "),n("span",{staticClass:"flex items-center text-sm"},[t._v("\n    "+t._s(t.$t("article.updatedAt"))+" "+t._s(t.$d(Date.parse(t.page.updatedAt),"long"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconEdit:n(309).default})}}]);