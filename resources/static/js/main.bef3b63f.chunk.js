(window["webpackJsonpcustomer-details-widget"]=window["webpackJsonpcustomer-details-widget"]||[]).push([[0],{62:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."},"entities":{"customer":{"id":"ID","firstName":"entities.customer.firstName","lastName":"entities.customer.lastName","gender":"entities.customer.gender","email":"entities.customer.email","phone":"entities.customer.phone","addressLine1":"entities.customer.addressLine1","addressLine2":"entities.customer.addressLine2","city":"entities.customer.city","country":"entities.customer.country"}}}')},71:function(e,t,n){e.exports=n(91)},72:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);n(72);var a=n(27),r=n(28),c=n(35),i=n(20),o=n(29),l=n(64),s=n(24),u=n(0),m=n.n(u),d=n(12),p=n.n(d),f=m.a.createContext(null),h=n(16),b=n.n(h),E=n(31),y=n(37),O=n(23),v=n(123),k=n(63),g=n(3),w=n.n(g),j=(w.a.shape({initialized:w.a.bool,authenticated:w.a.bool}),n(65));w.a.oneOfType([w.a.func,w.a.shape({current:w.a.elementType}),w.a.shape(null)]);var P=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},N=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},D=n(125),C=(w.a.shape({id:w.a.number,firstName:w.a.string,lastName:w.a.string,gender:w.a.string,email:w.a.string,phone:w.a.string,addressLine1:w.a.string,addressLine2:w.a.string,city:w.a.string,country:w.a.string}),n(117)),S=n(121),L=n(120),x=n(118),z=n(119),R=function(e){var t=e.t,n=e.customer;return m.a.createElement(C.a,null,m.a.createElement(x.a,null,m.a.createElement(z.a,null,m.a.createElement(L.a,null,t("common.name")),m.a.createElement(L.a,null,t("common.value")))),m.a.createElement(S.a,null,m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.id"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.id))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.firstName"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.firstName))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.lastName"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.lastName))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.gender"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.gender))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.email"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.email))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.phone"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.phone))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.addressLine1"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.addressLine1))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.addressLine2"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.addressLine2))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.city"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.city))),m.a.createElement(z.a,null,m.a.createElement(L.a,null,m.a.createElement("span",null,t("entities.customer.country"))),m.a.createElement(L.a,null,m.a.createElement("span",null,n.country)))))};R.defaultProps={customer:[]};var A=Object(O.b)()(R),F=function(e){var t=e.t,n=e.customer;return m.a.createElement(D.a,null,m.a.createElement("h3",null,t("common.widgetName",{widgetNamePlaceholder:"Customer"})),m.a.createElement(A,{customer:n}))};F.defaultProps={customer:{}};var T=Object(O.b)()(F),U=n(4),M=n(126),I=n(128),K=n(122),H=n(5),J=n(127),V=n(59),W=n.n(V),B=n(60),G=n.n(B),q=n(58),Q=n.n(q),X=n(61),Y=n.n(X),Z={success:Q.a,error:W.a,info:G.a},$={success:3e3,error:null,info:5e3},_=function e(t){var n=t.className,a=t.classes,r=t.status,c=t.message,i=t.onClose,o=!!c,l=r||e.INFO,s=Z[l],u=$[l],d=m.a.createElement("span",{className:a.message},m.a.createElement(s,{className:Object(U.a)(a.icon,a.iconStatus)}),c);return m.a.createElement(M.a,{open:o,onClose:i,autoHideDuration:u},m.a.createElement(I.a,{className:Object(U.a)(a[l],n),message:d,action:[m.a.createElement(J.a,{key:"close","aria-label":"close",color:"inherit",onClick:i},m.a.createElement(Y.a,{className:a.icon}))]}))};_.SUCCESS="success",_.ERROR="error",_.defaultProps={message:null,className:"",status:_.INFO="info",onClose:function(){}};var ee=Object(H.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:K.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(_),te=function(){var e=Object(E.a)(b.a.mark((function e(t,n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(){var e=Object(E.a)(b.a.mark((function e(t,n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/customers","/").concat(n),r=ae({},{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})},{method:"GET"}),e.abrupt("return",te(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={loading:!0,customer:{},notificationStatus:null,notificationMessage:null},n.theme=Object(k.a)(),n.closeNotification=n.closeNotification.bind(Object(y.a)(n)),n.fetchData=n.fetchData.bind(Object(y.a)(n)),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,n=t.initialized&&t.authenticated,a=e.keycloak.authenticated!==n;n&&a&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(E.a)(b.a.mark((function e(){var t,n,a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,re(r,a);case 6:c=e.sent,this.setState((function(){return{customer:c,loading:!1}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("common.couldNotFetchData"),notificationStatus:ee.ERROR,loading:!1}}))}},{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.customer,n=e.notificationStatus,a=e.notificationMessage,r=e.loading,c=this.props,i=c.t,o=c.keycloak;return m.a.createElement(v.a,{theme:this.theme},m.a.createElement(N,{keycloak:o},i("common.notAuthenticated")),m.a.createElement(P,{keycloak:o},r&&i("common.loading"),!r&&m.a.createElement(T,{customer:t})),m.a.createElement(ee,{status:n,message:a,onClose:this.closeNotification}))}}]),t}(m.a.Component);ce.defaultProps={onError:function(){},serviceUrl:""};var ie=function(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(r=Object(c.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(l)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,c=Object(j.a)(n,["forwardedRef"]);return m.a.createElement(e,Object.assign({},c,{ref:a,keycloak:t}))},r}return Object(o.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return m.a.createElement(f.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return m.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}(Object(O.b)()(ce)),oe=n(49),le={en:n(62)};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ue=Object.keys(le).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(s.a)({},t,Object(s.a)({},"translation",le[t])))}),{}),me=(oe.a.t,function(e){!function(e,t){oe.a.use(O.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:ue,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")});function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(){return window&&window.entando&&window.entando.keycloak&&pe({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},he="service-url",be="locale",Ee=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).mountPoint=null,n.unsubscribeFromKeycloakEvent=null,n.keycloak=fe(),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"connectedCallback",value:function(){var e,t,n=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.keycloak=pe({},fe(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(e="keycloak",t=function(){n.keycloak=pe({},fe(),{initialized:!0}),n.render()},window.addEventListener(e,t),function(){window.removeEventListener(e,t)}),this.render()}},{key:"render",value:function(){var e=this,t=this.getAttribute(he)||"",n=this.getAttribute(be);me(n);var a=this.getAttribute("id"),r=m.a.createElement(ie,{id:a,onError:function(t){var n=new CustomEvent("".concat("customer.details.","error"),{details:{error:t}});e.dispatchEvent(n)},serviceUrl:t});p.a.render(m.a.createElement(f.Provider,{value:this.keycloak},r),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}]),t}(Object(l.a)(HTMLElement));customElements.define("customer-details",Ee)}},[[71,1,2]]]);
//# sourceMappingURL=main.bef3b63f.chunk.js.map