(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(9),r=c.n(s),l=(c(2),c(8)),i=c(6),o=c(7),d=c(0);var j=function(e){return Object(d.jsxs)("li",{className:"taskList__li",children:[Object(d.jsx)("input",{type:"checkbox",onChange:function(t){console.log("Este checkbox se ha pulsado",t.target),e.handleStatus(t.target.id)},checked:e.completed,id:e.id,className:"checkbox"}),Object(d.jsx)("label",{htmlFor:e.id,children:e.name}),Object(d.jsx)("i",{className:"fa task__fa fa-trash",onClick:function(t){e.handleDeleteIcon(t.target.id)},id:e.id})]})};var u=function(e){var t=e.tasks.map((function(t,c){return Object(d.jsx)(j,{name:t.props.name,completed:t.props.completed,id:t.props.id,handleStatus:e.handleStatus,handleDeleteIcon:e.handleDeleteIcon},c)}));return Object(d.jsx)("ul",{className:"taskList",children:t})};var b=function(e){return Object(d.jsx)("span",{className:"box__delete__btn",children:Object(d.jsxs)("button",{className:"delete__btn",type:"submit",onClick:e.resetAll,value:"delete all",children:["delete all",Object(d.jsx)("i",{className:"fa delete__task fa-trash",children:"                  "})]})})};var m=function(e){return Object(d.jsx)("div",{className:"inputBox",children:Object(d.jsxs)("form",{className:"inputBox__form",children:[Object(d.jsx)("label",{className:"inputBox__form__title",children:Object(d.jsx)("input",{className:"inputBox__form__box js-input",type:"text",name:"Add other task"})}),Object(d.jsx)("button",{className:"inputBox__form__btn",type:"submit",onClick:function(t){t.preventDefault();var c=document.querySelector(".js-input").value;e.addNewTask(c)},children:"Add"})]})})};var h=function(e){var t=e.isPressed;return Object(d.jsx)("button",{type:"button",className:"js-filter btn ".concat(t?"underlined":""),"aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},children:Object(d.jsx)("span",{children:e.name})})},p={All:function(){return!0},Active:function(e){return!e.checked},Completed:function(e){return e.checked}},x=Object.keys(p);var f=function(){var e=Object(a.useState)([{id:1,name:"Lavar el coche",checked:!0},{id:2,name:"Hacer la compra",checked:!1},{id:3,name:"Tercera Tarea",checked:!0},{id:4,name:"Y otra m\xe1s",checked:!1}]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("All"),r=Object(o.a)(s,2),j=r[0],f=r[1],O=c.filter(p[j]).map((function(e){return Object(d.jsx)(u,{id:e.id,name:e.name,completed:e.checked},e.id)})),_=x.map((function(e){return Object(d.jsx)(h,{name:e,isPressed:e===j,setFilter:f},e)})),k=function(e){n((function(t){return[].concat(Object(i.a)(t),[e])}))};return console.log(c),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("header",{className:"app__header",children:Object(d.jsx)("h1",{className:"app__header__name",children:"#todo"})}),Object(d.jsx)("body",{children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("nav",{className:"filters__list",children:_}),Object(d.jsx)(m,{addNewTask:function(e){console.log("Estoy intentando a\xf1adir otra",e);var t={id:c.length+1,name:e,checked:!1};k(t)}}),Object(d.jsxs)("main",{children:[Object(d.jsx)(u,{handleStatus:function(e){console.log("voy a cambiar el estado a esta task",e);var t=c.map((function(t){return t.id==e?(console.log("He pasado por el if"),Object(l.a)(Object(l.a)({},t),{},{checked:!t.checked})):t}));n(t)},handleDeleteIcon:function(e){var t=Object(i.a)(c);t.splice(e-1,1),n(t)},tasks:O}),Object(d.jsx)(b,{resetAll:function(){console.log("He clickado el bot\xf3n"),n([])}})]})]})})]})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))},2:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.8585bc47.chunk.js.map