(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),p=(a(27),a(8)),h=a.n(p),d=a(11),f=a(21),b=a(15),E=r.a.createContext(),v=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(b.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(b.a)({},e,{contacts:[t.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(b.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return v(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({contacts:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),C=E.Consumer,j=a(37),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(){a.setState({showContactInfo:!a.state.showContactInfo})},a.deleteClickHandler=function(){var e=Object(d.a)(h.a.mark(function e(t,a){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE"},r=new Request("https://jsonplaceholder.typicode.com/users/".concat(t)),e.prev=2,e.next=5,fetch(r,n);case 5:a({type:"DELETE_CONTACT",payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),a({type:"DELETE_CONTACT",payload:t});case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fa fa-sort-down"}),r.a.createElement("i",{className:"fa fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.deleteClickHandler.bind(e,a,l)}),r.a.createElement(j.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fa fa-edit",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),e.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},c),r.a.createElement("li",{className:"list-group-item"},o)):null)})}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var t=e.contacts;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact "),"List"),t.map(function(e){return r.a.createElement(N,{key:e.id,contact:e})})))})}}]),t}(n.Component);function g(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t)),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fa fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fa fa-question"}),"About")))))}g.defaultProps={branding:"My App"};var k=a(12),w=a(19),x=a.n(w),A=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:x()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"is-invalid"},s))};A.defaultProps={type:"text"};var S=A,T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.addContact=function(){var e=Object(d.a)(h.a.mark(function e(t,n){var r,c,o,l,s,i,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:s});case 14:return i=e.sent,e.next=17,i.json();case 17:m=e.sent,s.id=m.id,t({type:"ADD_CONTACT",payload:s}),a.setState({name:"",email:"",phone:"",errors:""}),a.props.history.push("/");case 22:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"}," Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.addContact.bind(e,l)},r.a.createElement(S,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(S,{label:"Email",name:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(S,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("button",{className:"btn btn-secondary btn-block"},"Add Contact"))))})}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.editContact=function(){var e=Object(d.a)(h.a.mark(function e(t,n){var r,c,o,l,s,i,m,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,fetch("https://jsonplaceholder.typicode.com/users/".concat(i),{method:"PUT",body:JSON.stringify(s),headers:{"Content-type":"application/json; charset=UTF-8"}});case 15:return m=e.sent,e.next=18,m.json();case 18:u=e.sent,t({type:"UPDATE_CONTACT",payload:u}),a.setState({name:"",email:"",phone:"",errors:""}),a.props.history.push("/");case 22:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t,a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,this.setState({name:n.name,email:n.email,phone:n.phone});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"}," Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.editContact.bind(e,l)},r.a.createElement(S,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(S,{label:"Email",name:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(S,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("button",{className:"btn btn-secondary btn-block"},"Update Contact"))))})}}]),t}(n.Component),P=a(38),q=a(40),_=a(39),M=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"display-4"},"Contact Manager App"),r.a.createElement("p",{className:"lead"},"Simple app to manager contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))};function I(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 ")," Not Found"),r.a.createElement("p",{className:"lead"},"Sorry this page does not exist"))}var L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),U=(a(33),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement(P.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(q.a,null,r.a.createElement(_.a,{exact:!0,path:"/",component:O}),r.a.createElement(_.a,{exact:!0,path:"/about/",component:M}),r.a.createElement(_.a,{exact:!0,path:"/contact/add",component:T}),r.a.createElement(_.a,{exact:!0,path:"/contact/edit/:id",component:D}),r.a.createElement(_.a,{exact:!0,path:"/test",component:L}),r.a.createElement(_.a,{component:I}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.9f92e0ec.chunk.js.map