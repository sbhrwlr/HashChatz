(this.webpackJsonpcomarch=this.webpackJsonpcomarch||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/ui.97647e53.png"},49:function(e,a,t){e.exports=t.p+"static/media/google.1b943d72.png"},51:function(e,a,t){e.exports=t(80)},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(40),l=t.n(r),o=(t(56),t(9)),s=(t(57),t(58),t(96)),i=Object(n.createContext)(),m=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(i.Provider,{value:Object(n.useReducer)(a,t)},r)},u=function(){return Object(n.useContext)(i)},d=t(26),h=t.n(d);var E=function(){var e=u(),a=Object(o.a)(e,1)[0].user;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement("img",{className:"cmlogo",src:h.a,alt:"Logo"}),c.a.createElement("h1",null,"CoMarch")),c.a.createElement("div",{className:"header__right"},c.a.createElement(s.a,{className:"header__avatar",alt:null===a||void 0===a?void 0:a.displayName,src:null===a||void 0===a?void 0:a.photoURL})))},p=(t(62),t(44)),v=t.n(p),f=t(45),g=t.n(f),b=(t(63),t(3)),_=t(18),N=t.n(_),O=N.a.initializeApp({apiKey:"AIzaSyBQrUfOkVAcW9bICMFiB1oN7zBTHAYOQSE",authDomain:"hashchatz.firebaseapp.com",databaseURL:"https://hashchatz.firebaseio.com",projectId:"hashchatz",storageBucket:"hashchatz.appspot.com",messagingSenderId:"1005715147554",appId:"1:1005715147554:web:c923bedfe0e4d704cf737b",measurementId:"G-R3W9DLFYTK"}).firestore(),j=N.a.auth(),C=new N.a.auth.GoogleAuthProvider,I=O;var S=function(e){var a=e.Icon,t=e.title,n=e.id,r=e.addChannelOption,l=Object(b.f)();return c.a.createElement("div",{className:"sidebarOption",onClick:r?function(){var e=prompt("Enter Channel Name");e&&I.collection("rooms").add({name:e})}:function(){n?l.push("/room/".concat(n)):l.push(t)}},a&&c.a.createElement(a,{className:"sidebarOption__icon"}),a?c.a.createElement("h3",null,t):c.a.createElement("h3",{className:"sidebarOption__channel"},c.a.createElement("span",{className:"sidebarOption__hash"},"#"),t))},y=t(46),w=t.n(y);var k=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=u(),s=Object(o.a)(l,1)[0].user;return Object(n.useEffect)((function(){I.collection("rooms").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement("div",{className:"sidebar__info"},c.a.createElement("h3",{style:{marginRight:5}},c.a.createElement(v.a,null),null===s||void 0===s?void 0:s.displayName)),c.a.createElement(g.a,null)),c.a.createElement("hr",null),c.a.createElement(S,{className:"add",Icon:w.a,addChannelOption:!0,title:"Add Topic  "}),c.a.createElement("hr",null),t.map((function(e){return c.a.createElement(S,{title:e.name,id:e.id})})))},R=(t(76),t(47)),T=t.n(R),z=t(48),A=t.n(z);t(77);var B=function(e){var a=e.message,t=e.timestamp,n=e.user,r=e.userImg;return c.a.createElement("div",{className:"message"},c.a.createElement("img",{src:r,alt:"img"}),c.a.createElement("div",null,c.a.createElement("h4",null,n," ",c.a.createElement("span",{className:"message__timestamp"},new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString())),c.a.createElement("p",null,a)))};t(78);var L=function(e){var a=e.channelName,t=e.channelId,r=Object(n.useState)(""),l=Object(o.a)(r,2),s=l[0],i=l[1],m=u(),d=Object(o.a)(m,1)[0].user;return c.a.createElement("div",{className:"ChatInput"},c.a.createElement("form",null,c.a.createElement("div",{className:"chat__message"},c.a.createElement("input",{className:"input__field",placeholder:"Type your message here",value:s,onChange:function(e){return i(e.target.value)}}),c.a.createElement("div",{className:"btn"},c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),t&&(i(""),I.collection("rooms").doc(t).collection("messages").add({message:s,time:N.a.firestore.FieldValue.serverTimestamp(),user:d.displayName,userimg:d.photoURL}))}},"Message ",a)))))};var D=function(){var e=Object(b.g)().roomId,a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],l=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){e&&I.collection("rooms").doc(e).onSnapshot((function(e){l(e.data())})),I.collection("rooms").doc(e).collection("messages").orderBy("time","asc").onSnapshot((function(e){u(e.docs.map((function(e){return e.data()})))}))}),[e]),console.log(m),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement("div",{className:"chat__headerLeft"},c.a.createElement("h4",{className:"chat__channelName"},c.a.createElement("strong",null,"#",null===r||void 0===r?void 0:r.name),c.a.createElement(T.a,null))),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement("p",{className:"detail"},c.a.createElement(A.a,null),"Details"))),c.a.createElement("div",{className:"chat__messages"},m.map((function(e){var a=e.message,t=e.time,n=e.user,r=e.userimg;return c.a.createElement(B,{message:a,timestamp:t,user:n,userImg:r})}))),c.a.createElement(L,{channelName:null===r||void 0===r?void 0:r.name,channelId:e}))},U=(t(79),t(34)),x="SET_USER",M=function(e,a){switch(console.log(a),a.type){case x:return Object(U.a)(Object(U.a)({},e),{},{user:a.user});default:return e}},W=t(49),F=t.n(W);var G=function(){var e=u(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:h.a,alt:"logo"}),c.a.createElement("h1",null," CoMarch "),c.a.createElement("div",{className:"google__signin",onClick:function(e){j.signInWithPopup(C).then((function(e){t({type:x,user:e.user})})).catch((function(e){alert(e.message)}))}},c.a.createElement("h1",null,"Sign in with"),c.a.createElement("img",{src:F.a,alt:"GOOGLE"}))))},P=t(25);var J=function(){return c.a.createElement("div",{className:"start__chat"},"Choose Topic to Chat OR Create Topic")};var K=function(){var e=u(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"App"},c.a.createElement(P.a,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(k,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/room/:roomId"},c.a.createElement(D,null)),c.a.createElement(b.a,{path:"/"},c.a.createElement(J,null))))):c.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,{initialState:{user:null},reducer:M},c.a.createElement(K,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.192b3224.chunk.js.map