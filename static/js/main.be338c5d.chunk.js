(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(74),r=n.n(a),o=n(86),i=n(104),s=n(55),l=n(9),j=n(80),u={colors:{primaryText:"#232323",mainBackground:"#F2F2F2"},fonts:{primary:{family:"Source Sans Pro, sans-serif",weight:400}}},b=n(77),d=n(87),h=n(88),p=n(76),f=n(16),m=new h.a({uri:"https://ants-on-a-picnic-backend.herokuapp.com/",credentials:"include"}),O=new f.a((function(e,t){var n=localStorage.getItem("token");return n&&e.setContext({headers:{authorization:n}}),t(e)})),x=Object(p.a)((function(){})),v=new b.a({cache:new d.a,link:f.a.from([x,O,m])}),k=n(14),w=function(e){var t=e.level;return Object(c.useEffect)((function(){document.title="Level ".concat(t)}),[]),Object(k.jsx)("div",{children:"Hello world... ".concat(t)})},g=function(){return Object(k.jsx)(w,{level:"1"})},y=function(){var e=Object(l.f)().level;return Object(k.jsx)(w,{level:e})},A=function(){return Object(k.jsx)(s.a,{basename:"/ants",children:Object(k.jsx)(j.a,{theme:u,children:Object(k.jsx)(i.ApolloProvider,{client:v,children:Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{exact:!0,path:"/:level(".concat(Object(o.a)(Array(11).keys()).join("|").substring(2),")"),component:y}),Object(k.jsx)(l.a,{path:"/",component:g})]})})})})})};r.a.render(Object(k.jsx)(A,{}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.be338c5d.chunk.js.map