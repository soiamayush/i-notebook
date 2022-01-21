(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(18),r=a.n(c),l=(a(25),a(6)),o=(a(26),a(2)),i=a(8),d=a(0),b=function(){var e=Object(o.f)();return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:"i-notebook"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link about","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link about",to:"/about",children:"About"})})]}),localStorage.getItem("token")&&Object(d.jsx)("button",{onClick:function(){localStorage.removeItem("token"),window.location.reload(),e.push("/login")},className:"btn btn-primary",children:"log out "})," ",!localStorage.getItem("token")&&Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)(i.b,{className:"btn btn-primary mx-3",to:"/login",role:"button",children:"Log In"}),Object(d.jsx)(i.b,{className:"btn btn-primary mx-3",to:"/signup",role:"button",children:"Sign up"})]})]})]})})},j=a(9),m=a(7),u=Object(n.createContext)(),h=function(e){var t=Object(n.useContext)(u).deleteNote,a=e.note,s=e.updateNote;return Object(d.jsx)("div",{className:"col-md-3",style:{color:"black"},children:Object(d.jsx)("div",{className:"card my-3 ",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsx)("h5",{className:"card-title",children:a.title}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{className:"fas fa-trash-alt mx-1",onClick:function(){t(a._id),e.showAlert("deleted successfully","success")}}),Object(d.jsx)("i",{className:"far fa-edit mx-2",onClick:function(){s(a)}})]})]}),Object(d.jsx)("p",{className:"card-text",children:a.description})]})})})},p=function(e){var t=Object(o.f)(),a=Object(n.useContext)(u),s=a.notes,c=a.getNote,r=a.editNote;Object(n.useEffect)((function(){window.localStorage.getItem("token")?c():t.push("/login")}),[]);var i=Object(n.useRef)(null),b=Object(n.useRef)(null),p=Object(n.useState)({etitle:"",edescription:"",etag:"",id:""}),x=Object(l.a)(p,2),O=x[0],f=x[1],g=function(e){i.current.click(),f({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},v=function(e){f(Object(m.a)(Object(m.a)({},O),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("button",{type:"button",ref:i,className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",children:"Launch static backdrop modal"}),Object(d.jsx)("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",style:{color:"black"},children:"Edit your note"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:Object(d.jsxs)("form",{className:"my-3",children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",value:O.etitle,id:"etitle",name:"etitle",required:!0,onChange:v})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",value:O.edescription,className:"form-control",id:"edescription",name:"edescription",onChange:v,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",value:O.etag,className:"form-control",id:"etag",name:"etag",onChange:v})]})]})}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{ref:b,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(d.jsx)("button",{disabled:O.edescription.length<5,type:"button",onClick:function(t){r(O.id,O.etitle,O.edescription,O.etag),b.current.click(),e.showAlert("Updated succesfully","success")},className:"btn btn-primary",children:"Edit done"})]})]})})}),Object(d.jsxs)("div",{className:"row ",children:[Object(d.jsx)("h2",{className:"d-flex justify-content-center",children:s.length>1?"Your Notes":"Your note"}),Object(d.jsx)("div",{className:"container d-flex justify-content-center my-3 ",children:0===s.length&&"Your notes will display here!!"}),s.map((function(t){return Object(d.jsx)(h,{updateNote:g,showAlert:e.showAlert,note:t},t._id)}))]})]})})},x=function(e){var t=Object(n.useContext)(u).addNote,a=Object(n.useState)({title:"",description:"",tag:""}),s=Object(l.a)(a,2),c=s[0],r=s[1],o=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container ",children:[Object(d.jsx)("h1",{children:"Add a note"}),Object(d.jsxs)("form",{className:"my-3",children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title","aria-describedby":"emailHelp",onChange:o,required:!0,value:c.title,placeholder:"Enter your title"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",onChange:o,minLength:5,required:!0,value:c.description,placeholder:"Enter your description"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"tag",name:"tag",onChange:o,value:c.tag,style:{width:"20vw"},placeholder:"Your tag"})]}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("button",{disabled:c.description.length<5,style:{width:"250px",borderRadius:"5px"},type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),t(c.title,c.description,c.tag),r({title:"",description:"",tag:""}),e.showAlert("Added successfully","success")},children:"Add note"})})]})]})})},O=(a(14),function(e){var t=e.showAlert;return Object(d.jsxs)("div",{className:"homecontainer ",children:[Object(d.jsx)(x,{showAlert:t}),Object(d.jsx)(p,{showAlert:t})]})}),f=function(){return Object(d.jsx)("div",{children:"This is About page"})},g=a(3),v=a.n(g),N=a(10),y=function(e){var t="http://localhost:5000",a=Object(n.useState)([]),s=Object(l.a)(a,2),c=s[0],r=s[1],o=function(){var e=Object(N.a)(v.a.mark((function e(){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(N.a)(v.a.mark((function e(a,n,s){var l,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:n,tag:s})});case 2:return l=e.sent,e.next=5,l.json();case 5:o=e.sent,r(c.concat(o));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(N.a)(v.a.mark((function e(a){var n,s,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,console.log(s),l=c.filter((function(e){return e._id!==a})),r(l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(N.a)(v.a.mark((function e(a,n,s,l){var o,i,d,b;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:n,description:s,tag:l})});case 2:return o=e.sent,e.next=5,o.json();case 5:i=e.sent,console.log(i),d=JSON.parse(JSON.stringify(c)),b=0;case 9:if(!(b<d.length)){e.next=19;break}if(d[b]._id!==a){e.next=16;break}return d[b].title=n,d[b].description=s,d[b].tag=l,e.abrupt("break",19);case 16:b++,e.next=9;break;case 19:r(d);case 20:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}();return Object(d.jsx)(u.Provider,{value:{notes:c,addNote:i,deleteNote:b,editNote:j,getNote:o},children:e.children})};a(17);function w(e){var t,a=Object(o.g)();return Object(d.jsx)("div",{style:{height:"60px"},className:"".concat("/"===a.pathname?"homecontainer":"logincontainer"),children:e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible "),role:"alert",id:"liveAlert",children:[Object(d.jsxs)("strong",{children:[(t=e.alert.type,"danger"===t&&(t="Error"),t)," !! "]}),e.alert.message]})})}var k=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),s=a[0],c=a[1],r=Object(o.f)(),i=function(){var t=Object(N.a)(v.a.mark((function t(a){var n,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("".concat("http://localhost:5000","/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.email,password:s.password})});case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,console.log(c),c.success?(window.localStorage.setItem("token",c.authtoken),console.log(c.authtoken),e.showAlert("Account loggedin succesfully","success"),r.push("/")):e.showAlert("Invalid credentials","danger");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){c(Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{className:" d-flex justify-content-center logincontainer ",style:{height:"100%"},children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"my-3",style:{color:"#bbe1ef"},children:"Log in to i-notebook"}),Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsxs)("div",{className:"mb-3 ",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label ",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:s.email,"aria-describedby":"emailHelp",onChange:b}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",name:"password",value:s.password,onChange:b,id:"password"})]}),Object(d.jsx)("div",{className:"d-flex justify-content-center ",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary mt-3 mb-5 ",style:{width:"150px"},children:"Log in"})})]})]})})},S=function(e){var t=Object(n.useState)({name:"",email:"",password:"",epassword:""}),a=Object(l.a)(t,2),s=a[0],c=a[1],r=s.name,i=s.email,b=s.password,u=Object(o.f)(),h=function(){var t=Object(N.a)(v.a.mark((function t(a){var n,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("".concat("http://localhost:5000","/api/auth/createuser"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:i,password:b})});case 3:return n=t.sent,t.next=6,n.json();case 6:s=t.sent,console.log(s),s.success?(window.localStorage.setItem("token",s.authtoken),u.push("/"),e.showAlert("Account created succesfully","success")):e.showAlert("Invalid details","danger");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(e){c(Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{className:" d-flex justify-content-center logincontainer",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Welcome to i-notebook"}),Object(d.jsxs)("form",{onSubmit:h,children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"name",className:"form-label",children:"Full Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",placeholder:"Enter your name","aria-describedby":"emailHelp",onChange:p})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your Email",id:"email",name:"email","aria-describedby":"emailHelp",onChange:p}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter your password",name:"password",id:"password",onChange:p,required:!0,minLength:6})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"cpassword",className:"form-label",children:"Confirm Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",name:"cpassword",placeholder:"confirm password",id:"cpassword",onChange:p,required:!0,minLength:6})]}),Object(d.jsx)("div",{className:"d-flex justify-content-center ",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary mt-3 mb-5 ",style:{width:"150px"},children:"Sign up"})})]})]})})};var C=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],c=function(e,t){s({message:e,type:t}),setTimeout((function(){s(null)}),1500)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(y,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(w,{alert:a}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{showAlert:c})}),Object(d.jsx)(o.a,{exact:!0,path:"/about",children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/login",children:Object(d.jsx)(k,{showAlert:c})}),Object(d.jsx)(o.a,{exact:!0,path:"/signup",children:Object(d.jsx)(S,{showAlert:c})})]})]})})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.bdbe01da.chunk.js.map