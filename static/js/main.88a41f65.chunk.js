(this["webpackJsonpmary-syp"]=this["webpackJsonpmary-syp"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(0),r=n.n(c),a=n(19),o=n.n(a),s=(n(32),n(33),n(7)),d=n(6),l=n(5),j=n(25),m=n(14),u=n(26),b=n(17),p=Object(c.createContext)(),x=Object(c.createContext)(),h={"hub and spoke":{description:"to come",names:[]},faciliated:{description:"to come",names:[]},egalitarian:{description:"to come",names:[]},"mission control":{description:"to come",names:[]},"team of teams":{description:"to come",names:[]},proxied:{description:"to come",names:[]},directed:{description:"to come",names:[]},"servant-led":{description:"to come",names:[]}};function O(e,t){switch(t.type){case"ADD":return Object(b.a)(Object(b.a)({},e),{},Object(m.a)({},t.title,{description:e[t.title].description,names:[].concat(Object(u.a)(e[t.title].names),[t.name])}));default:throw new Error("Bad Action Type")}}var v=function(e){var t=e.children,n=Object(c.useReducer)(O,h),r=Object(j.a)(n,2),a=r[0],o=r[1];return Object(i.jsx)(p.Provider,{value:a,children:Object(i.jsx)(x.Provider,{value:o,children:t})})};function f(){var e=Object(s.a)(["\n  border: 1px solid white;\n"]);return f=function(){return e},e}var g=l.a.div(f()),y={title:"hub and spoke",name:""},S=function(){var e=Object(c.useContext)(x);return Object(i.jsxs)(g,{children:[Object(i.jsx)("h1",{children:"FORM"}),Object(i.jsx)(d.d,{initialValues:y,onSubmit:function(t,n){var i=n.setSubmitting;e({type:"ADD",title:t.title,name:t.name}),i(!1)},children:function(e){var t=e.isSubmitting;return Object(i.jsxs)(d.c,{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"2rem"},children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name"}),Object(i.jsx)(d.b,{type:"text",name:"name"}),Object(i.jsx)(d.a,{name:"name",component:"StyledContainer"}),Object(i.jsx)("label",{htmlFor:"title",children:"Title"}),Object(i.jsxs)(d.b,{type:"text",as:"select",name:"title",children:[Object(i.jsx)("option",{name:"hub and spoke",value:"hub and spoke",children:"Hub and Spoke"}),Object(i.jsx)("option",{name:"faciliated",value:"faciliated",children:"faciliated"}),Object(i.jsx)("option",{name:"egalitarian",value:"egalitarian",children:"egalitarian"}),Object(i.jsx)("option",{name:"mission control",value:"mission control",children:"mission control"}),Object(i.jsx)("option",{name:"team of teams",value:"team of teams",children:"team of teams"}),Object(i.jsx)("option",{name:"proxied",value:"proxied",children:"proxied"}),Object(i.jsx)("option",{name:"directed",value:"directed",children:"directed"}),Object(i.jsx)("option",{name:"servant-led",value:"servant-led",children:"servant-led"})]}),Object(i.jsx)(d.a,{name:"title",component:"div"}),Object(i.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})]})};function w(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n  height: 60vh;\n  /* align-items: end; */\n  /* justify-items: end; */\n  /* grid-template-rows: auto; */\n  gap: 10px;\n  /* grid-gap: 10px; */\n  p {\n    flex: 1;\n  }\n"]);return w=function(){return e},e}function C(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n"]);return C=function(){return e},e}function k(){var e=Object(s.a)(["\n  border: 1px solid white;\n"]);return k=function(){return e},e}var F=l.a.div(k()),D=l.a.div(C()),A=l.a.div(w()),T=function(){var e=Object(c.useContext)(p),t=Object.entries(e).map((function(e){return Object(i.jsxs)(A,{children:[Object(i.jsx)("h5",{children:e[0]}),e[1].names.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:e})})}))]})}));return Object(i.jsxs)(F,{children:[Object(i.jsx)("h1",{children:"RESULTS"}),Object(i.jsx)(D,{children:t})]})};var P=function(){return Object(i.jsx)(v,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)(S,{}),Object(i.jsx)(T,{})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(P,{})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.88a41f65.chunk.js.map