(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(7),i=c(3),l=c(5),r=c.n(l),o=c(1),d=(c(13),c(14),c(2)),j=c.n(d),h=c(0),b=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onClick;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,i=c===t;return Object(h.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":i}),children:[Object(h.jsx)("td",{className:"is-vcentered",children:t}),Object(h.jsx)("td",{className:"is-vcentered",children:n&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:j()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:j()("far",{"fa-eye":!i},{"fa-eye-slash":i})})})})})]},t)}))})]})},u=function(){return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},x=(c(16),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),l=Object(i.a)(a,2),d=l[0],j=l[1],m=Object(o.useState)(),p=Object(i.a)(m,2),f=p[0],v=p[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/todos");case 3:t=e.sent,s(t),j(!0),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("We have a problem when we have loaded data - ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(u,{})}),Object(h.jsxs)("div",{className:"block",children:[!d&&Object(h.jsx)(x,{}),d&&Object(h.jsx)(b,{todos:c,selectedTodoId:null===f||void 0===f?void 0:f.id,onClick:function(e){v(e)}})]})]})})}),!1]})};a.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3710ab5d.chunk.js.map