(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,s){},110:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(12),r=s.n(n),i=(s(80),s(4)),o=s(11),l=s(7),u=(s(81),s(16)),j=s(10),d=(s(82),s(13)),p=s.p+"static/media/SoftArcLogo.77cc15d8.jpg",b=s(9),h=s.n(b),m=s(21),O=s(22),x=s.n(O),f="LOGIN_SUCCESS",v="LOGIN_FAIL",g="SIGNUP_SUCCESS",N="SIGNUP_FAIL",w="ACTIVATION_SUCCESS",S="ACTIVATION_FAIL",y="USER_LOADED_SUCCESS",_="USER_LOADED_FAIL",A="AUTHENTICATED_SUCCESS",C="AUTHENTICATED_FAIL",E="PASSWORD_RESET_FAIL",k="PASSWORD_RESET_SUCCESS",I="PASSWORD_RESET_CONFIRM_FAIL",L="PASSWORD_RESET_CONFIRM_SUCCESS",T="GOOGLE_AUTH_SUCCESS",R="GOOGLE_AUTH_FAIL",U="FACEBOOK_AUTH_SUCCESS",F="FACEBOOK_AUTH_FAIL",P="LOGOUT",D="GET_ERRORS",q=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var s,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return s={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,x.a.get("".concat("http://localhost:8000","/auth/users/me/"),s);case 5:a=e.sent,t({type:y,payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:_});case 12:e.next=15;break;case 14:t({type:_});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},W=s(1);var G=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var s=Object(m.a)(h.a.mark((function s(a){var c,n,r;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c={headers:{"Content-Type":"application/json"}},n=JSON.stringify({email:e,password:t}),s.prev=2,s.next=5,x.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),n,c);case 5:r=s.sent,a({type:f,payload:r.data}),a(q()),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(2),a({type:v});case 13:case"end":return s.stop()}}),s,null,[[2,10]])})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.login,s=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),n=Object(j.a)(c,2),r=n[0],d=n[1],b=r.email,h=r.password,m=function(e){return d(Object(i.a)(Object(i.a)({},r),{},Object(u.a)({},e.target.name,e.target.value)))},O=Object(a.useState)(window.innerWidth<=800),x=Object(j.a)(O,2),f=x[0],v=x[1],g=function(){v(window.innerWidth<=800)};return Object(a.useEffect)((function(){return window.addEventListener("resize",g),function(){return window.removeEventListener("resize",g)}})),s?Object(W.jsx)(l.a,{to:"/dash"}):Object(W.jsxs)("div",{className:"si-components",children:[Object(W.jsxs)("div",{className:"si-left-component",children:[Object(W.jsx)("div",{className:"si-head",children:Object(W.jsx)("img",{src:p})}),Object(W.jsxs)("div",{className:"si-body",children:[Object(W.jsx)("h1",{className:"si-head-text-3",children:"Login to your Account"}),Object(W.jsx)("p",{className:"si-head-text-4",children:"Login using social networks"}),Object(W.jsxs)("div",{className:"si-social-media-buttons",children:[Object(W.jsx)("a",{href:"#",class:"fa fa-facebook"}),Object(W.jsx)("a",{href:"#",class:"fa fa-google"})]}),Object(W.jsx)("div",{className:"si-wrapper",children:Object(W.jsx)("div",{className:"si-border",children:"OR"})}),Object(W.jsxs)("div",{className:"si-form-elements",children:[Object(W.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(b,h)}(e)},children:[Object(W.jsx)("input",{className:"si-input",type:"email",name:"email",placeholder:"Email",value:b,onChange:function(e){return m(e)},required:!0}),Object(W.jsx)("input",{className:"si-input",type:"password",name:"password",placeholder:"Password",value:h,onChange:function(e){return m(e)},minLength:"8",required:!0}),Object(W.jsx)("input",{className:"si-btn-1",type:"submit",value:"Sign In",name:"submit-btn"})]}),Object(W.jsxs)("p",{className:"si-forgot-pass",children:["Forgot Password? ",Object(W.jsx)(o.b,{to:"/reset-password",children:" Reset Password"})]})]})]})]}),Object(W.jsx)("div",{className:"si-right-component",children:f?Object(W.jsx)("div",{className:"si-left-content",children:Object(W.jsxs)("p",{className:"si-head-text-2",children:[Object(W.jsx)(o.b,{className:"si-link",to:"/signup",children:"Sign up "}),"and start using our SoftArc."]})}):Object(W.jsxs)("div",{className:"si-left-content",children:[Object(W.jsx)("h1",{className:"si-head-text",children:"New Here?"}),Object(W.jsx)("p",{className:"si-head-text-2",children:"Sign up and start using our SoftArc."}),Object(W.jsx)(o.b,{to:"/signup",children:Object(W.jsx)("button",{className:"si-btn-2",children:"Sign Up"})})]})})]})})),H=s(59),J=s.n(H),z=s(63),B=s.n(z),M=s(65),V=s.n(M),K=s(64),Q=s.n(K),X=s(43),Y=s.n(X),Z=s(66),$=s.n(Z),ee=s(42),te=s.n(ee),se=s.p+"static/media/dp.151308a6.jpg";s(108);var ae=function(e){return Object(W.jsxs)("div",{className:e.sidebar?"side-bar":"show-side-bar",children:[Object(W.jsxs)("center",{children:[Object(W.jsx)("img",{className:"dp",src:se}),Object(W.jsx)("h4",{children:"Rabi Siddique"})]}),Object(W.jsxs)("div",{className:"sidebar-content",children:[Object(W.jsxs)("div",{className:"item",children:[Object(W.jsx)(J.a,{className:"icon"}),Object(W.jsx)("span",{className:"item-text",children:"Home"})]}),Object(W.jsxs)("div",{className:"item",children:[Object(W.jsx)(B.a,{className:"icon"}),Object(W.jsx)("span",{className:"item-text",children:"Dashboard"})]}),Object(W.jsxs)("div",{className:"item",children:[Object(W.jsx)(Q.a,{className:"icon"}),Object(W.jsx)("span",{className:"item-text",children:"Saved"})]}),Object(W.jsxs)("div",{className:"item",children:[Object(W.jsx)(te.a,{className:"icon"}),Object(W.jsx)("span",{className:"item-text",children:"Upload"})]}),Object(W.jsxs)("div",{className:"item",children:[Object(W.jsx)(V.a,{className:"icon"}),Object(W.jsx)("span",{className:"item-text",children:"Settings"})]}),Object(W.jsxs)("div",{className:"item",children:[Object(W.jsx)($.a,{className:"icon"}),Object(W.jsx)("span",{className:"item-text",children:"Apply Dark Theme"})]}),Object(W.jsxs)("div",{className:"item",onClick:e.logout_user,children:[Object(W.jsx)(Y.a,{className:"icon"}),Object(W.jsx)("span",{className:"item-text",children:"LogOut"})]})]})]})},ce=(s(110),s.p+"static/media/SoftArcLogo.77cc15d8.jpg");var ne=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,s,a,c){return function(){var n=Object(m.a)(h.a.mark((function n(r){var i,o,l;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={headers:{"Content-Type":"application/json"}},o=JSON.stringify({first_name:e,last_name:t,email:s,password:a,re_password:c}),n.prev=2,n.next=5,x.a.post("".concat("http://localhost:8000","/auth/users/"),o,i);case 5:l=n.sent,r({type:g,payload:l.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),r({type:N});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.signup,s=e.isAuthenticated,c=Object(a.useState)(window.innerWidth<=800),n=Object(j.a)(c,2),r=n[0],d=n[1],p=function(){d(window.innerWidth<=800)};Object(a.useEffect)((function(){return window.addEventListener("resize",p),function(){return window.removeEventListener("resize",p)}}));var b=Object(a.useState)(!1),h=Object(j.a)(b,2),m=h[0],O=h[1],x=Object(a.useState)({first_name:"",last_name:"",email:"",password:"",re_password:""}),f=Object(j.a)(x,2),v=f[0],g=f[1],N=v.first_name,w=v.last_name,S=v.email,y=v.password,_=v.re_password,A=function(e){return g(Object(i.a)(Object(i.a)({},v),{},Object(u.a)({},e.target.name,e.target.value)))};return s?Object(W.jsx)(l.a,{to:"/"}):m?Object(W.jsx)(l.a,{to:"/login"}):Object(W.jsxs)("div",{className:"su-components",children:[Object(W.jsx)("div",{className:"su-left-component",children:r?Object(W.jsx)("div",{className:"su-left-content",children:Object(W.jsxs)("p",{className:"su-head-text-2",children:["If you already have an account, just ",Object(W.jsx)(o.b,{className:"su-link",to:"/login",children:"Sign in "})," .We've missed you."]})}):Object(W.jsxs)("div",{className:"su-left-content",children:[Object(W.jsx)("h1",{className:"su-head-text",children:"Hello Friend,"}),Object(W.jsx)("p",{className:"su-head-text-2",children:"If you already have an account, just sign in. We've missed you."}),Object(W.jsx)(o.b,{to:"/login",children:Object(W.jsx)("button",{className:"su-btn-2",children:"Sign In"})})]})}),Object(W.jsxs)("div",{className:"su-right-component",children:[Object(W.jsx)("div",{className:"su-head",children:Object(W.jsx)("img",{src:ce})}),Object(W.jsxs)("div",{className:"su-body",children:[Object(W.jsx)("h1",{className:"su-head-text-3",children:"Create Free Account"}),Object(W.jsx)("p",{className:"su-head-text-4",children:"Sign up using social networks"}),Object(W.jsxs)("div",{className:"su-social-media-buttons",children:[Object(W.jsx)("a",{href:"#",class:"fa fa-facebook"}),Object(W.jsx)("a",{href:"#",class:"fa fa-google"})]}),Object(W.jsx)("div",{className:"su-wrapper",children:Object(W.jsx)("div",{className:"su-border",children:"OR"})}),Object(W.jsx)("div",{className:"su-form-elements",children:Object(W.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),y===_&&(t(N,w,S,y,_),O(!0))}(e)},children:[Object(W.jsx)("input",{className:"su-input",type:"text",placeholder:"First Name*",name:"first_name",value:N,onChange:function(e){return A(e)},required:!0}),Object(W.jsx)("input",{className:"su-input",type:"text",placeholder:"Last Name*",name:"last_name",value:w,onChange:function(e){return A(e)},required:!0}),Object(W.jsx)("input",{className:"su-input",type:"email",placeholder:"Email*",name:"email",value:S,onChange:function(e){return A(e)},required:!0}),Object(W.jsx)("input",{className:"su-input",type:"password",placeholder:"Password*",name:"password",value:y,onChange:function(e){return A(e)},minLength:"8",required:!0}),Object(W.jsx)("input",{className:"su-input",type:"password",placeholder:"Confirm Password*",name:"re_password",value:_,onChange:function(e){return A(e)},minLength:"8",required:!0}),Object(W.jsx)("input",{className:"su-btn-1",type:"submit",value:"Sign Up",name:"submit-btn"})]})})]})]})]})})),re=s(67),ie=s.n(re),oe=s(68),le=s.n(oe),ue=s(131),je=s(133);s(111);var de=function(e){return Object(W.jsxs)("div",{className:"header",children:[Object(W.jsxs)("div",{className:"left-area",children:[Object(W.jsx)(ue.a,{onClick:e.showSidebar,children:Object(W.jsx)(ie.a,{className:"bar-btn"})}),Object(W.jsx)("h1",{children:"SOFTARC"})]}),Object(W.jsxs)("div",{className:"mid-area",children:[Object(W.jsx)("center",{children:Object(W.jsx)(je.a,{})}),Object(W.jsx)("h1",{children:"Welcome Rabi Siddique"})]}),Object(W.jsxs)("div",{className:"right-area",children:[Object(W.jsx)(ue.a,{children:Object(W.jsx)(le.a,{})}),Object(W.jsxs)(ue.a,{children:[Object(W.jsx)(te.a,{}),Object(W.jsx)("h1",{className:"upload-label",children:"Upload"})]}),Object(W.jsxs)(ue.a,{onClick:e.logout_user,children:[Object(W.jsx)(Y.a,{}),Object(W.jsx)("h1",{className:"logout-label",children:"LogOut"})]})]})]})};var pe=Object(d.b)(null,{logout:function(){return function(e){e({type:P})}},checkAuthenticated:function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var s,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return s={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,x.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),a,s);case 6:"token_not_valid"!==e.sent.data.code?t({type:A}):t({type:C}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:C});case 13:e.next=16;break;case 15:t({type:C});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:q})((function(e){var t=e.logout,s=e.checkAuthenticated,c=e.load_user,n=Object(a.useState)(!1),r=Object(j.a)(n,2),i=r[0],o=r[1],u=function(){if(t(),o(!0),i)return Object(W.jsx)(l.a,{to:"/"})},d=Object(a.useState)(!0),p=Object(j.a)(d,2),b=p[0],h=p[1];return Object(a.useEffect)((function(){s(),c()}),[]),Object(W.jsxs)("div",{children:[Object(W.jsx)(de,{showSidebar:function(){h(!b)},logout_user:u}),Object(W.jsx)(ae,{sidebar:b,logout_user:u})]})})),be=(s(112),s.p+"static/media/SoftArcLogo.77cc15d8.jpg");var he=Object(d.b)(null,{reset_password:function(e){return function(){var t=Object(m.a)(h.a.mark((function t(s){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,x.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),c,a);case 5:s({type:k}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),s({type:E});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,s=Object(a.useState)(!1),c=Object(j.a)(s,2),n=c[0],r=c[1],o=Object(a.useState)({email:""}),d=Object(j.a)(o,2),p=d[0],b=d[1],h=p.email;return n?Object(W.jsx)(l.a,{to:"/login"}):Object(W.jsxs)("div",{className:"rp-components",children:[Object(W.jsx)("div",{className:"rp-right-component",children:Object(W.jsx)("h1",{className:"rp-head-text",children:"Reset Password"})}),Object(W.jsxs)("div",{className:"rp-left-component",children:[Object(W.jsx)("div",{className:"rp-head",children:Object(W.jsx)("img",{src:be})}),Object(W.jsx)("h1",{className:"rp-head-text-2",children:"Request Password Reset:"}),Object(W.jsx)("div",{className:"rp-form-elements",children:Object(W.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(h),r(!0)}(e)},children:[Object(W.jsx)("input",{className:"rp-input",type:"email",placeholder:"Email",name:"email",value:h,onChange:function(e){return function(e){return b(Object(i.a)(Object(i.a)({},p),{},Object(u.a)({},e.target.name,e.target.value)))}(e)},required:!0}),Object(W.jsx)("button",{className:"rp-btn-1",type:"submit",children:"Reset Password"})]})})]})]})})),me=s.p+"static/media/SoftArcLogo.77cc15d8.jpg",Oe=(s(113),Object(d.b)(null,{verify:function(e,t){return function(){var s=Object(m.a)(h.a.mark((function s(a){var c,n;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c={headers:{"Content-Type":"application/json"}},n=JSON.stringify({uid:e,token:t}),s.prev=2,s.next=5,x.a.post("".concat("http://localhost:8000","/auth/users/activation/"),n,c);case 5:a({type:w}),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(2),a({type:S});case 11:case"end":return s.stop()}}),s,null,[[2,8]])})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t,s=e.verify,c=e.match,n=Object(a.useState)(!1),r=Object(j.a)(n,2),i=r[0],o=r[1];return i?Object(W.jsx)(l.a,{to:"/dash"}):Object(W.jsxs)("div",{className:"a-components",children:[Object(W.jsx)("div",{className:"a-right-component",children:Object(W.jsx)("h1",{className:"a-head-text",children:"Activate Account"})}),Object(W.jsxs)("div",{className:"a-left-component",children:[Object(W.jsx)("div",{className:"a-head",children:Object(W.jsx)("img",{src:me})}),Object(W.jsx)("h1",{className:"a-head-text-2",children:"Verify your Account:"}),Object(W.jsx)("button",(t={className:"a-btn-1",onClick:function(e){var t=c.params.uid,a=c.params.token;s(t,a),o(!0)},style:{marginTop:"50px"},type:"button"},Object(u.a)(t,"className","btn btn-primary"),Object(u.a)(t,"children","Verify"),t))]})]})}))),xe=s.p+"static/media/SoftArcLogo.77cc15d8.jpg",fe=(s(114),Object(d.b)(null,{reset_password_confirm:function(e,t,s,a){return function(){var c=Object(m.a)(h.a.mark((function c(n){var r,i;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r={headers:{"Content-Type":"application/json"}},i=JSON.stringify({uid:e,token:t,new_password:s,re_new_password:a}),c.prev=2,c.next=5,x.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),i,r);case 5:n({type:L}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),n({type:I});case 11:case"end":return c.stop()}}),c,null,[[2,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,s=e.reset_password_confirm,c=Object(a.useState)(!1),n=Object(j.a)(c,2),r=n[0],o=n[1],d=Object(a.useState)({new_password:"",re_new_password:""}),p=Object(j.a)(d,2),b=p[0],h=p[1],m=b.new_password,O=b.re_new_password,x=function(e){return h(Object(i.a)(Object(i.a)({},b),{},Object(u.a)({},e.target.name,e.target.value)))};return r?Object(W.jsx)(l.a,{to:"/dash"}):Object(W.jsxs)("div",{className:"rps-components",children:[Object(W.jsx)("div",{className:"rps-right-component",children:Object(W.jsx)("h1",{className:"rps-head-text",children:"Reset Password"})}),Object(W.jsxs)("div",{className:"rps-left-component",children:[Object(W.jsx)("div",{className:"rps-head",children:Object(W.jsx)("img",{src:xe})}),Object(W.jsx)("h1",{className:"rps-head-text-2",children:"Request Password Reset:"}),Object(W.jsx)("div",{className:"rps-form-elements",children:Object(W.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var a=t.params.uid,c=t.params.token;s(a,c,m,O),o(!0)}(e)},children:[Object(W.jsx)("input",{className:"rps-input",type:"password",placeholder:"New Password",name:"new_password",value:m,onChange:function(e){return x(e)},minLength:"6",required:!0}),Object(W.jsx)("input",{className:"rps-input",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:O,onChange:function(e){return x(e)},minLength:"6",required:!0}),Object(W.jsx)("button",{className:"rps-btn-1",type:"submit",children:"Reset Password"})]})})]})]})}))),ve=s(28),ge=s(69),Ne=s(70),we={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},Se={msg:{},status:null},ye=Object(ve.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,s=t.type,a=t.payload;switch(s){case A:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0});case f:case T:case U:return localStorage.setItem("access",a.access),localStorage.setItem("refresh",a.refresh),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case g:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1});case y:return Object(i.a)(Object(i.a)({},e),{},{user:a});case C:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1});case _:return Object(i.a)(Object(i.a)({},e),{},{user:null});case R:case F:case v:case N:case P:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(i.a)(Object(i.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case k:case E:case L:case I:case w:case S:return Object(i.a)({},e);default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{msg:t.payload.msg,status:t.payload.status};default:return e}}}),_e=[Ne.a],Ae=Object(ve.createStore)(ye,{},Object(ge.composeWithDevTools)(ve.applyMiddleware.apply(void 0,_e))),Ce=s(72),Ee=s(71),ke={timeout:3e3,position:"top cen"};var Ie=function(){return Object(W.jsx)(d.a,{store:Ae,children:Object(W.jsx)(Ce.a,Object(i.a)(Object(i.a)({template:Ee.a},ke),{},{children:Object(W.jsx)(o.a,{children:Object(W.jsx)("div",{className:"App",children:Object(W.jsxs)(l.d,{children:[Object(W.jsx)(l.b,{exact:!0,path:"/signup",component:ne}),Object(W.jsx)(l.b,{exact:!0,path:"/login",component:G}),Object(W.jsx)(l.b,{exact:!0,path:"/dash",component:pe}),Object(W.jsx)(l.b,{exact:!0,path:"/reset-password",component:he}),Object(W.jsx)(l.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:fe}),Object(W.jsx)(l.b,{exact:!0,path:"/activate/:uid/:token",component:Oe})]})})})}))})},Le=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,134)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(Ie,{})}),document.getElementById("root")),Le()},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){}},[[115,1,2]]]);
//# sourceMappingURL=main.c464ae51.chunk.js.map