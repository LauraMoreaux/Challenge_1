(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(8),l=c.n(s),r=(c(2),c(7)),o=c(9),i=c(6),d=c(0);var u=function(e){var t=e.isPressed;return Object(d.jsx)("button",{type:"button",className:"js-filter btn ".concat(t?"underlined":""),"aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},children:Object(d.jsx)("span",{children:e.name})})};var j=function(e){return Object(d.jsxs)("li",{className:"taskList__li",children:[Object(d.jsx)("input",{type:"checkbox",onChange:function(t){console.log("Este checkbox se ha pulsado",t.target),e.handleStatus(t.target.id)},checked:e.completed,id:e.id,className:"checkbox"}),Object(d.jsx)("label",{htmlFor:e.id,children:e.name}),Object(d.jsx)("i",{className:"fa task__fa fa-trash",onClick:function(t){e.handleDeleteIcon(t.target.id),console.log("He clickado este id",t.target.id)},id:e.id})]})};var b=function(e){var t=e.tasks.map((function(t,c){return Object(d.jsx)(j,{name:t.props.name,completed:t.props.completed,id:t.props.id,handleStatus:e.handleStatus,handleDeleteIcon:e.handleDeleteIcon},c)}));return Object(d.jsx)("ul",{className:"taskList",children:t})};var m=function(e){return Object(d.jsx)("span",{className:"box__delete__btn",children:Object(d.jsxs)("button",{className:"delete__btn",type:"submit",onClick:e.resetAll,value:"delete all",children:["delete all",Object(d.jsx)("i",{className:"fa delete__task fa-trash",children:"                  "})]})})};var p=function(e){return Object(d.jsx)("div",{className:"inputBox",children:Object(d.jsxs)("form",{className:"inputBox__form",children:[Object(d.jsx)("label",{className:"inputBox__form__title",children:Object(d.jsx)("input",{className:"inputBox__form__box js-input",type:"text",name:"Add other task"})}),Object(d.jsx)("button",{className:"inputBox__form__btn",type:"submit",onClick:function(t){t.preventDefault();var c=document.querySelector(".js-input").value;e.addNewTask(c),c=""},children:"Add"})]})})},h={All:function(){return!0},Active:function(e){return!e.checked},Completed:function(e){return e.checked}},f=Object.keys(h);var x=function(){var e=JSON.parse(localStorage.getItem("myValueInLocalStorage")),t=Object(n.useState)(e),c=Object(i.a)(t,2),a=c[0],s=c[1],l=Object(n.useState)("All"),j=Object(i.a)(l,2),x=j[0],O=j[1];Object(n.useEffect)((function(){localStorage.setItem("myValueInLocalStorage",JSON.stringify(a))}),[a]);var _=a.filter(h[x]).map((function(e){return Object(d.jsx)(b,{id:e.id,name:e.name,completed:e.checked},e.id)})),k=f.map((function(e){return Object(d.jsx)(u,{name:e,isPressed:e===x,setFilter:O},e)})),v=function(e){s((function(t){return[].concat(Object(o.a)(t),[e])}))};return console.log(a),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("header",{className:"app__header",children:Object(d.jsx)("h1",{className:"app__header__name",children:"#todo"})}),Object(d.jsx)("body",{children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("nav",{className:"filters__list",children:k}),Object(d.jsx)(p,{addNewTask:function(e){console.log("Estoy intentando a\xf1adir otra",e);var t={id:a.length+1,name:e,checked:!1};v(t)}}),Object(d.jsxs)("main",{children:[Object(d.jsx)(b,{handleStatus:function(e){console.log("voy a cambiar el estado a esta task",e);var t=a.map((function(t){return t.id==e?(console.log("He pasado por el if"),Object(r.a)(Object(r.a)({},t),{},{checked:!t.checked})):t}));s(t)},handleDeleteIcon:function(e){console.log("Recibo este id",e);var t=a.filter((function(t){return t.id!==parseInt(e)}));s(t)},tasks:_}),Object(d.jsx)(m,{resetAll:function(){console.log("He clickado el bot\xf3n"),s([])}})]})]})})]})};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},2:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.835637b8.chunk.js.map