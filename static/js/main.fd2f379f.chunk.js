(this.webpackJsonpskiptheagent=this.webpackJsonpskiptheagent||[]).push([[2],{14:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"m",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"i",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return o})),n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return p})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"p",(function(){return O})),n.d(t,"o",(function(){return x})),n.d(t,"n",(function(){return S}));var r=function(){return{type:"CHECKING_USER"}},a=function(e){return{type:"SIGN_UP_START",payload:e}},c=function(e){return{type:"SIGN_IN_START",payload:e}},s=function(){return{type:"SIGN_IN_WITH_GOOGLE_START"}},u=function(e){return{type:"SIGN_IN_SUCCESS",payload:e}},o=function(e){return{type:"SIGN_IN_FAILED",payload:e}},i=function(){return{type:"SIGN_OUT_START"}},p=function(){return{type:"SIGN_OUT_SUCCESS"}},d=function(){return{type:"SIGN_OUT_FAILED"}},l=function(e){return{type:"PASSWORD_RESET_START",payload:e}},f=function(){return{type:"PASSWORD_RESET_SUCCESS"}},b=function(e){return{type:"PASSWORD_RESET_FAILED",payload:e}},j=function(e){return{type:"PASSWORD_CHANGE_START",payload:e}},O=function(e){return{type:"UPDATE_USER_START",payload:e}},x=function(){return{type:"UPDATE_USER_SUCCESS"}},S=function(e){return{type:"UPDATE_USER_FAILED",payload:e}}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(41),n(42),n(2),n(60);var r=n(10),a=function(){return Object(r.jsx)("div",{className:"SpinnerOverlay",children:Object(r.jsx)("div",{className:"SpinnerContainer"})})}},52:function(e,t,n){},60:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(27),s=n.n(c),u=(n(52),function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,115)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),o=n(21),i=n(45),p=n.n(i),d=n(47),l={loading:!1,error:null,success:0},f=Object(o.b)({setUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_UP_START":case"SIGN_IN_START":case"SIGN_OUT_START":case"SIGN_IN_WITH_GOOGLE_START":case"PASSWORD_RESET_START":case"UPDATE_USER_START":return Object.assign({},e,{loading:!0,success:0});case"SIGN_IN_SUCCESS":return Object.assign({},e,{loading:!1,user:t.payload,error:null,success:1});case"SIGN_OUT_SUCCESS":return Object.assign({},e,{loading:!1,user:null,error:null,success:1});case"UPDATE_USER_SUCCESS":case"PASSWORD_RESET_SUCCESS":return Object.assign({},e,{loading:!1,error:null,success:1});case"SIGN_IN_FAILED":case"SIGN_OUT_FAILED":case"PASSWORD_RESET_FAILED":case"UPDATE_USER_FAILED":return Object.assign({},e,{loading:!1,error:t.payload,success:0});default:return e}}}),b=n(6),j=n.n(b),O=n(9),x=n(14),S=n(32),h=n(23);n(64),n(54),n(65);h.a.initializeApp({apiKey:"AIzaSyBu1x4tu6iZPxhkANVuOxzJtjcLBzKW5lc",authDomain:"skiptheagent-react.firebaseapp.com",projectId:"skiptheagent-react",storageBucket:"skiptheagent-react.appspot.com",messagingSenderId:"470859456457",appId:"1:470859456457:web:db0de858f2e69e70b1d218",measurementId:"G-N1ZG0Z7E9P"}),h.a.analytics();var _=new h.a.auth.GoogleAuthProvider,m=h.a.auth(),T=h.a.firestore(),v=function(){var e=Object(S.a)(j.a.mark((function e(t,n){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.log("No user found"),e.abrupt("return");case 3:return r=T.doc("users/".concat(t.uid)),e.next=6,r.get();case 6:return e.sent.exists?console.log("not overwrited"):(t.displayName?a=t.displayName:(a=n,t.updateProfile({displayName:a}).then((function(e){return console.log("displayname set")})).catch((function(e){return console.log(e)}))),r.set({displayName:a,email:t.email,createdAt:new Date,username:t.email,mobile:"",zip:"",gender:"",country:"",city:""}).catch((function(e){alert(e.message)}))),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(S.a)(j.a.mark((function e(t,n){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.payload,t){e.next=4;break}return console.log("No user found"),e.abrupt("return");case 4:return a=T.doc("users/".concat(t.uid)),e.next=7,a.get();case 7:e.sent.exists&&a.update(r).then((function(){return alert("update success")})).catch((function(e){return console.log(e)}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=j.a.mark(F),E=j.a.mark(H),A=j.a.mark(B),w=j.a.mark(K),I=j.a.mark(J),k=j.a.mark(Z),R=j.a.mark(M),N=j.a.mark(q),U=j.a.mark(V),P=j.a.mark(Q),G=j.a.mark(X),C=j.a.mark(Y),D=j.a.mark($),W=j.a.mark(ee),L=j.a.mark(te),z=j.a.mark(ne);function F(){var e,t,n,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,new Promise((function(e,t){var n=m.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 2:return e=a.sent,a.next=5,v(e);case 5:if(!(t=a.sent)){a.next=13;break}return a.next=9,t.get();case 9:return n=a.sent,r=n.data(),a.next=13,Object(O.c)(Object(x.h)(r));case 13:case"end":return a.stop()}}),y)}function H(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("CHECKING_USER",F);case 2:case"end":return e.stop()}}),E)}function B(e){var t,n,r,a,c,s;return j.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,u.prev=1,u.next=4,m.createUserWithEmailAndPassword(t.email,t.password);case 4:return n=u.sent,r=n.user,u.next=8,v(r,t.name);case 8:if(!(a=u.sent)){u.next=16;break}return u.next=12,a.get();case 12:return c=u.sent,s=c.data(),u.next=16,Object(O.c)(Object(x.h)(s));case 16:u.next=23;break;case 18:return u.prev=18,u.t0=u.catch(1),alert(u.t0),u.next=23,Object(O.c)(Object(x.f)({error:u.t0}));case 23:case"end":return u.stop()}}),A,null,[[1,18]])}function K(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("SIGN_UP_START",B);case 2:case"end":return e.stop()}}),w)}function J(e){var t,n,r,a,c,s;return j.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,u.prev=1,u.next=4,m.signInWithEmailAndPassword(t.email,t.password);case 4:return n=u.sent,r=n.user,u.next=8,v(r);case 8:if(!(a=u.sent)){u.next=16;break}return u.next=12,a.get();case 12:return c=u.sent,s=c.data(),u.next=16,Object(O.c)(Object(x.h)(s));case 16:u.next=23;break;case 18:return u.prev=18,u.t0=u.catch(1),u.next=22,Object(O.c)(Object(x.f)({error:u.t0}));case 22:alert(u.t0);case 23:case"end":return u.stop()}}),I,null,[[1,18]])}function Z(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("SIGN_IN_START",J);case 2:case"end":return e.stop()}}),k)}function M(){var e,t,n,r,a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,m.signInWithPopup(_);case 3:return e=c.sent,t=e.user,c.next=7,v(t);case 7:if(!(n=c.sent)){c.next=15;break}return c.next=11,n.get();case 11:return r=c.sent,a=r.data(),c.next=15,Object(O.c)(Object(x.h)(a));case 15:c.next=23;break;case 17:return c.prev=17,c.t0=c.catch(0),c.next=21,Object(O.c)(Object(x.f)(c.t0.message));case 21:return c.next=23,alert(c.t0.message);case 23:case"end":return c.stop()}}),R,null,[[0,17]])}function q(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("SIGN_IN_WITH_GOOGLE_START",M);case 2:case"end":return e.stop()}}),N)}function V(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.signOut();case 3:return e.next=5,Object(O.c)(Object(x.l)());case 5:e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,alert(e.t0);case 11:return e.next=13,Object(O.c)(Object(x.j)({err:e.t0}));case 13:case"end":return e.stop()}}),U,null,[[0,7]])}function Q(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("SIGN_OUT_START",V);case 2:case"end":return e.stop()}}),P)}function X(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,m.sendPasswordResetEmail(t.email);case 4:return n.next=6,Object(O.c)(Object(x.e)());case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(1),n.next=12,Object(O.c)(Object(x.d)(n.t0));case 12:alert(n.t0.message);case 13:case"end":return n.stop()}}),G,null,[[1,8]])}function Y(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("PASSWORD_RESET_START",X);case 2:case"end":return e.stop()}}),C)}function $(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.currentUser;case 3:return t=n.sent,n.next=6,g(t,e);case 6:return n.next=8,Object(O.c)(Object(x.o)());case 8:return n.next=10,F();case 10:n.next=17;break;case 12:return n.prev=12,n.t0=n.catch(0),alert(n.t0.message),n.next=17,Object(O.c)(Object(x.n)(n.t0));case 17:case"end":return n.stop()}}),D,null,[[0,12]])}function ee(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("UPDATE_USER_START",$);case 2:case"end":return e.stop()}}),W)}function te(e){var t,n;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,m.currentUser;case 3:(n=r.sent)&&n.updatePassword(t).then((function(){alert("Password Update")})).catch((function(e){console.log(e),alert(e),"auth/requires-recent-login"===e.code&&(alert("Login Again"),V())}));case 5:case"end":return r.stop()}}),L)}function ne(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("PASSWORD_CHANGE_START",te);case 2:case"end":return e.stop()}}),z)}var re=j.a.mark(ae);function ae(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([Object(O.b)(K),Object(O.b)(Z),Object(O.b)(H),Object(O.b)(Q),Object(O.b)(q),Object(O.b)(Y),Object(O.b)(ee),Object(O.b)(ne)]);case 2:case"end":return e.stop()}}),re)}var ce=Object(d.a)(),se=[ce,p.a],ue=Object(o.d)(f,o.a.apply(void 0,se));ce.run(ae);var oe=n(26),ie=n(37),pe=n(38),de=n(40),le=n(39),fe=n(36),be=n(11),je=n(43),Oe=n(10),xe=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,118))})),Se=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,121))})),he=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,122))})),_e=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,123))})),me=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,116))})),Te=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,119))})),ve=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,120))})),ge=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(5)]).then(n.bind(null,117))})),ye=function(e){Object(de.a)(n,e);var t=Object(le.a)(n);function n(){return Object(ie.a)(this,n),t.apply(this,arguments)}return Object(pe.a)(n,[{key:"componentDidMount",value:function(){fetch("https://skiptheagent.herokuapp.com/").then((function(e){return 200===e.status?window.location.href="https://skiptheagent.herokuapp.com/":null})),this.props.isUserAuthenticated()}},{key:"render",value:function(){var e=this.props.user;return Object(Oe.jsx)(fe.a,{basename:"/skiptheagent",children:Object(Oe.jsx)(r.Suspense,{fallback:Object(Oe.jsx)(je.a,{}),children:Object(Oe.jsxs)(be.d,{children:[Object(Oe.jsx)(be.b,{exact:!0,path:"/",component:xe}),Object(Oe.jsx)(be.b,{exact:!0,path:"/listing",component:Se}),Object(Oe.jsx)(be.b,{exact:!0,path:"/login",render:function(){return e?Object(Oe.jsx)(be.a,{to:"/dashboard"}):Object(Oe.jsx)(he,{})}}),Object(Oe.jsx)(be.b,{exact:!0,path:"/register",render:function(){return e?Object(Oe.jsx)(be.a,{to:"/dashboard"}):Object(Oe.jsx)(_e,{})}}),Object(Oe.jsx)(be.b,{exact:!0,path:"/forget",component:me}),Object(Oe.jsx)(be.b,{exact:!0,path:"/ownership",component:Te}),Object(Oe.jsx)(be.b,{exact:!0,path:"/details",component:ve}),Object(Oe.jsx)(be.b,{path:"/dashboard",render:function(){return e?Object(Oe.jsx)(ge,{}):Object(Oe.jsx)(be.a,{to:"/login"})}})]})})})}}]),n}(a.a.Component),Ee=Object(oe.b)((function(e){return{user:e.setUser.user}}),(function(e){return{isUserAuthenticated:function(){return e(Object(x.a)())}}}))(ye);s.a.render(Object(Oe.jsx)(oe.a,{store:ue,children:Object(Oe.jsx)(a.a.StrictMode,{children:Object(Oe.jsx)(Ee,{})})}),document.getElementById("root")),u()}},[[63,3,4]]]);
//# sourceMappingURL=main.fd2f379f.chunk.js.map