(this.webpackJsonpmaratonadev=this.webpackJsonpmaratonadev||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(1),l=a.n(r),c=(a(13),a(2)),d=a(3),i=a(5),s=a(4),u=a(6);var m=function(){return o.a.createElement("footer",{className:"footerbar"},o.a.createElement("h3",null,"This is a footer."))};var h=function(){var e=new Date,t=e.getHours();return o.a.createElement("header",{className:"Headerbar"},o.a.createElement("h3",null,"Hello! ",t,":",e.getMinutes(),"! "))};var E=function(e){return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),o.a.createElement("p",null,e.item.text))},b=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Take out the trs",completed:!1},{id:3,text:"Take out the tra",completed:!1},{id:4,text:"Take out the tram",completed:!0}],p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={todos:b},e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(E,{key:t.id,item:t,handleChange:e.handleChange})}));return o.a.createElement("div",null,o.a.createElement(h,null),t,o.a.createElement(m,null))}}]),t}(o.a.Component);var v=function(e){return o.a.createElement("div",{className:"donor"},o.a.createElement("div",{className:"blood"},e.donor.blood),o.a.createElement("p",null,e.donor.name))},f=[{id:1,name:"Jonas dos Santos",blood:"O+"},{id:2,name:"Maick Souza",blood:"AB+"},{id:3,name:"Mario dos Santos",blood:"O-"},{id:4,name:"Jos\xe9 Alves",blood:"O+"}],k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={donors:f},e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.donors.map((function(e){return o.a.createElement(v,{key:e.id,donor:e})}));return o.a.createElement("div",null,o.a.createElement("h2",null,"\xdaltimos ",o.a.createElement("span",null,"doadores")),o.a.createElement("section",{className:"donors"},e))}}]),t}(o.a.Component);l.a.render(o.a.createElement(k,null),document.getElementById("donors-react")),l.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.33e78044.chunk.js.map