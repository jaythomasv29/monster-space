(this["webpackJsonpmonster-space"]=this["webpackJsonpmonster-space"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n.n(c),a=n(3),o=n.n(a),i=(n(13),n(4)),h=n(5),l=n(7),u=n(6);n(14),n(15);function d(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}),Object(s.jsx)("h1",{children:e.monster.name}),Object(s.jsx)("h2",{children:e.monster.email})]})}n(16);function j(e){return Object(s.jsx)("div",{className:"card-list",children:e.monsters.map((function(e,t){return Object(s.jsx)(d,{monster:e},t)}))})}n(17);function m(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})," "]})}var p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{className:"app-title",children:"Monster Space"}),Object(s.jsx)(m,{placeholder:"search monsters",handleChange:this.handleChange}),Object(s.jsx)(j,{monsters:c,searchInput:this.state.searchField})]})}}]),n}(c.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.985d7658.chunk.js.map