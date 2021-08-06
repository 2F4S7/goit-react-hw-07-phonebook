(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__2eUY7",label:"ContactForm_label__1Bxel",input:"ContactForm_input__3pHvl",button:"ContactForm_button__m2NMq"}},22:function(t,e,n){t.exports={title:"Top_title__jKUR-",top:"Top_top__xWPhf"}},23:function(t,e,n){t.exports={title:"Bot_title__3N86g",bottom:"Bot_bottom__2gv7F"}},24:function(t,e,n){t.exports={Loader:"Loader_Loader__1loI2"}},25:function(t,e,n){t.exports={input:"Filter_input__3tEOo",label:"Filter_label__3qKPl"}},38:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);n(38),n(39);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),u=n(34),i=n(2),s=n(14),l=n(15),b=n(18),j=n(17),f=n(7),d=n(11),O=n.n(d),m=n(3),h=Object(m.b)("contacts/fetchContactsRequest"),p=Object(m.b)("contacts/fetchContactsSuccess"),_=Object(m.b)("contacts/fetchContactsError"),x=Object(m.b)("contacts/addContactRequest"),C=Object(m.b)("contacts/addContactSuccess"),v=Object(m.b)("contacts/addContactError"),g=Object(m.b)("contacts/deleteContactRequest"),N=Object(m.b)("contacts/deleteContactSuccess"),y=Object(m.b)("contacts/deleteContactError"),L=Object(m.b)("contacts/filter");O.a.defaults.baseURL="http://localhost:7777";var k=n(10),F=n.n(k),w=n(13),S=function(t){return t.contacts.items},q=function(t){return t.contacts.loading},A=function(t){return t.contacts.error},P=function(t){return t.contacts.filter},z=Object(w.a)([S,P],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),B=n(1),E=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(i.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.contacts.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts")):t.props.onSubmit(Object(u.a)({},t.state)),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=this.handleSubmit,a=this.handleChange;return Object(B.jsxs)("form",{onSubmit:c,children:[Object(B.jsxs)("label",{className:F.a.label,children:["Name",Object(B.jsx)("input",{className:F.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:a})]}),Object(B.jsxs)("label",{className:F.a.label,children:["Number",Object(B.jsx)("input",{className:F.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:a})]}),Object(B.jsx)("button",{className:F.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),R=Object(f.b)((function(t){return{contacts:S(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){return function(e){e(x()),O.a.post("/contacts",t).then((function(t){var n=t.data;return e(C(n))})).catch((function(t){return e(v(t))}))}}(e))}}}))(E),M=n(22),T=n.n(M),D=function(t){var e=t.title,n=t.children;return Object(B.jsxs)("section",{className:T.a.top,children:[Object(B.jsx)("h2",{className:T.a.title,children:e}),n]})};D.defaultProps={title:"New section"};var J=D,U=n(23),Z=n.n(U),I=function(t){var e=t.title,n=t.children;return Object(B.jsxs)("section",{className:Z.a.bottom,children:[Object(B.jsx)("h2",{className:Z.a.title,children:e}),n]})};I.defaultProps={title:"New section"};var K,H,Q,W=I,X=n(9),Y=n.n(X),$=Object(f.b)(null,(function(t){return{onClick:function(e){return t(function(t){return function(e){e(g()),O.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(y(t))}))}}(e))}}}))((function(t){var e=t.id,n=t.name,c=t.number,a=t.onClick;return Object(B.jsxs)("li",{className:Y.a.item,children:[Object(B.jsx)("p",{className:Y.a.name,children:n}),Object(B.jsx)("p",{className:Y.a.number,children:c}),Object(B.jsx)("button",{className:Y.a.button,type:"button",onClick:function(){return a(e)},children:"Delete"})]})})),G=n(35),V=n.n(G),tt=n(24),et=n.n(tt),nt=(n(84),function(){return Object(B.jsx)("div",{className:et.a.Loader,children:Object(B.jsx)(V.a,{style:et.a,type:"Puff",color:"#fc4c00",height:400,width:400})})}),ct=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.isLoadingContacts,c=t.error;return Object(B.jsxs)(B.Fragment,{children:[n&&Object(B.jsx)(nt,{}),c&&Object(B.jsx)("h2",{children:"404 Not Found"}),Object(B.jsx)("ul",{className:Y.a.list,children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(B.jsx)($,{name:n,number:c,id:e},e)}))})]})}}]),n}(c.Component),at=Object(f.b)((function(t){return{contacts:z(t),isLoadingContacts:q(t),error:A(t)}}),(function(t){return{fetchContacts:function(){return t((function(t){t(h()),O.a.get("/contacts").then((function(e){var n=e.data;return t(p(n))})).catch((function(e){return t(_(e))}))}))}}}))(ct),rt=n(25),ot=n.n(rt),ut=Object(f.b)((function(t){return{value:P(t)}}),(function(t){return{onChange:function(e){var n=e.target.value;return t(L(n))}}}))((function(t){var e=t.value,n=t.onChange;return Object(B.jsxs)("label",{className:ot.a.label,children:["Find contacts by name",Object(B.jsx)("input",{className:ot.a.input,type:"text",value:e,onChange:n})]})})),it=function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(J,{title:"Phonebook",children:Object(B.jsx)(R,{})}),Object(B.jsxs)(W,{title:"Contacts",children:[Object(B.jsx)(ut,{}),Object(B.jsx)(at,{})]})]})},st=n(16),lt=n(8),bt=n(36),jt=n.n(bt),ft=n(5),dt=Object(m.c)([],(K={},Object(i.a)(K,p,(function(t,e){return e.payload})),Object(i.a)(K,C,(function(t,e){return[e.payload].concat(Object(st.a)(t))})),Object(i.a)(K,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),K)),Ot=Object(m.c)("",Object(i.a)({},L,(function(t,e){return e.payload}))),mt=Object(m.c)(!1,(H={},Object(i.a)(H,h,(function(){return!0})),Object(i.a)(H,p,(function(){return!1})),Object(i.a)(H,_,(function(){return!1})),Object(i.a)(H,x,(function(){return!0})),Object(i.a)(H,C,(function(){return!1})),Object(i.a)(H,v,(function(){return!1})),Object(i.a)(H,g,(function(){return!0})),Object(i.a)(H,N,(function(){return!1})),Object(i.a)(H,y,(function(){return!1})),H)),ht=Object(m.c)(null,(Q={},Object(i.a)(Q,h,(function(){return null})),Object(i.a)(Q,_,(function(){return!0})),Object(i.a)(Q,x,(function(){return null})),Object(i.a)(Q,v,(function(){return!0})),Object(i.a)(Q,g,(function(){return null})),Object(i.a)(Q,y,(function(){return!0})),Q)),pt=Object(ft.b)({items:dt,filter:Ot,loading:mt,error:ht}),_t={key:"contacts",storage:jt.a,blacklist:["filter"]},xt=Object(st.a)(Object(m.d)({serializableCheck:{ignoredActions:[lt.a,lt.f,lt.b,lt.c,lt.d,lt.e]}})),Ct=Object(m.a)({reducer:{contacts:Object(lt.g)(_t,pt)},middleware:xt,devTools:!1}),vt=Object(lt.h)(Ct),gt=n(37);o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(f.a,{store:Ct,children:Object(B.jsx)(gt.a,{loading:null,persistor:vt,children:Object(B.jsx)(it,{})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={number:"ContactList_number__2NjpT",name:"ContactList_name__195hh",item:"ContactList_item__26X3k",list:"ContactList_list__1QoeL",button:"ContactList_button__28ug-",form:"ContactList_form__qubnN"}}},[[87,1,2]]]);
//# sourceMappingURL=main.98cab885.chunk.js.map