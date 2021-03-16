(window["webpackJsonpproduct-package-form-widget"]=window["webpackJsonpproduct-package-form-widget"]||[]).push([[0],{192:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"ProductPackage successfully saved","dataDeleted":"ProductPackage successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"productPackage":{"deleteDialog":{"title":"Delete productPackage","description":"Are you sure?"},"notFound":"ProductPackage not found","deleted":"ProductPackage deleted","id":"ID","placedDate":"entities.productPackage.placedDate","status":"entities.productPackage.status","code":"entities.productPackage.code","facilityId":"entities.productPackage.facilityId"}}}')},225:function(e,t,a){e.exports=a(373)},373:function(e,t,a){"use strict";a.r(t);var n=a(28),r=a(29),i=a(34),o=a(24),c=a(30),s=a(205),l=a(52),u=a(0),d=a.n(u),p=a(9),f=a.n(p),h=a(185),b=a.n(h),m=a(419),v=a(427),g=a(417),k=a(204),y=a(17),O=d.a.createContext(null),E=a(54),j=a(134),w=a(51),P={en:a(192)};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D=Object.keys(P).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",P[t])))}),{}),S=j.a.t,x=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var a=t.path;return e("validation.required",{field:e("entities.productPackage.".concat(a))})}}};E.setLocale(t)}(S)},N=function(e){return function(t){return function(e,t){var a=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(a)}(e,t)}},F={tableAdd:"productPackage.table.add",tableSelect:"productPackage.table.select"},T={create:"productPackage.form.create",update:"productPackage.form.update",errorCreate:"productPackage.form.errorCreate",errorUpdate:"productPackage.form.errorUpdate"},U=a(13),A=a.n(U),R=a(27),I=a(22),L=a(3),M=a.n(L),z=(M.a.shape({initialized:M.a.bool,authenticated:M.a.bool}),a(206));M.a.oneOfType([M.a.func,M.a.shape({current:M.a.elementType}),M.a.shape(null)]);function q(e){var t=function(t){function a(){var t,r;Object(n.a)(this,a);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(a)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var a=r.props,n=a.forwardedRef,i=Object(z.a)(a,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:n,keycloak:t}))},r}return Object(c.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return d.a.createElement(O.Consumer,null,this.renderWrappedComponent)}}]),a}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,a){return d.a.createElement(t,Object.assign({},e,{forwardedRef:a}))}))}var H=function(e){var t=e.children,a=e.keycloak;return a.initialized&&a.authenticated?t:null},W=function(e){var t=e.children,a=e.keycloak;return a.initialized&&a.authenticated?null:t},J=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},K=function(){var e=Object(R.a)(A.a.mark((function e(t,a){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,a);case 2:if(204!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",n.status>=200&&n.status<300?n.json():Promise.reject(new Error(n.statusText||n.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V="api/product-packages",Y=function(){var e=Object(R.a)(A.a.mark((function e(t,a){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/").concat(V,"/").concat(a),r=G({},J(),{method:"GET"}),e.abrupt("return",K(n,r));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(A.a.mark((function e(t,a){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/").concat(V),r=G({},J(),{method:"POST",body:a?JSON.stringify(a):null}),e.abrupt("return",K(n,r));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(A.a.mark((function e(t,a){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/").concat(V),r=G({},J(),{method:"PUT",body:a?JSON.stringify(a):null}),e.abrupt("return",K(n,r));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Z=function(){var e=Object(R.a)(A.a.mark((function e(t,a){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/").concat(V,"/").concat(a),r=G({},J(),{method:"DELETE"}),e.abrupt("return",K(n,r));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),$=a(4),_=a(424),ee=a(406),te=a(403),ae=a(5),ne=a(407),re=a(194),ie=a.n(re),oe=a(195),ce=a.n(oe),se=a(193),le=a.n(se),ue=a(196),de=a.n(ue),pe={success:le.a,error:ie.a,info:ce.a},fe={success:3e3,error:null,info:5e3},he=function e(t){var a=t.className,n=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=pe[s],u=fe[s],p=d.a.createElement("span",{className:n.message},d.a.createElement(l,{className:Object($.a)(n.icon,n.iconStatus)}),i);return d.a.createElement(_.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(ee.a,{className:Object($.a)(n[s],a),message:p,action:[d.a.createElement(ne.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(de.a,{className:n.icon}))]}))};he.SUCCESS="success",he.ERROR="error",he.defaultProps={message:null,className:"",status:he.INFO="info",onClose:function(){}};var be=Object(ae.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(he),me=(M.a.shape({id:M.a.number,placedDate:M.a.string.isRequired,status:M.a.string.isRequired,code:M.a.string.isRequired,facilityId:M.a.number}),M.a.shape({placedDate:M.a.oneOfType([M.a.string,M.a.instanceOf(Date)]),status:M.a.string,code:M.a.string,facilityId:M.a.oneOfType([M.a.string,M.a.number])}),M.a.shape({placedDate:M.a.oneOfType([M.a.bool,M.a.shape()]),status:M.a.oneOfType([M.a.bool,M.a.shape()]),code:M.a.oneOfType([M.a.bool,M.a.shape()]),facilityId:M.a.oneOfType([M.a.bool,M.a.shape()])}),M.a.shape({placedDate:M.a.oneOfType([M.a.string,M.a.shape()]),status:M.a.oneOfType([M.a.string,M.a.shape()]),code:M.a.oneOfType([M.a.string,M.a.shape()]),facilityId:M.a.oneOfType([M.a.string,M.a.shape()])}),a(202)),ve=a(207),ge=a(412),ke=a(413),ye=a(16),Oe=a(418),Ee=a(203),je={en:a(77).a},we=a(426),Pe=a(420),Ce=a(422),De=a(423),Se=a(411),xe=a(409),Ne=a(410),Fe=a(408),Te=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},a.handleOpen=a.handleOpen.bind(Object(I.a)(a)),a.discard=a.discard.bind(Object(I.a)(a)),a.confirm=a.confirm.bind(Object(I.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,a=t.dialog,n=a.title,r=a.description,i=a.confirmLabel,o=a.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(De.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(Fe.a,{id:"confirmation-dialog-title"},n),d.a.createElement(xe.a,null,d.a.createElement(Ne.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(Se.a,null,d.a.createElement(ge.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ge.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Te.CONFIRM="CONFIRM",Te.DISCARD="DISCARD";var Ue=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=a.handleConfirmationDialogAction.bind(Object(I.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,a=t.onDelete,n=t.values;switch(e){case Te.CONFIRM:a(n)}}},{key:"render",value:function(){var e,t=this.props,a=t.classes,n=t.values,r=t.touched,i=t.errors,o=t.handleChange,c=t.handleBlur,s=t.handleSubmit,l=t.onDelete,u=t.onCancelEditing,p=t.isSubmitting,f=t.setFieldValue,h=t.t,b=t.i18n,m=function(e){return i[e]&&r[e]?i[e]:""};return d.a.createElement(ye.a,{utils:Ee.a,locale:je[b.language]},d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),s(e)},className:a.root,"data-testid":"productPackage-form"},d.a.createElement(ke.a,{container:!0,spacing:2},d.a.createElement(ke.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"productPackage-placedDate",error:i.placedDate&&r.placedDate,helperText:m("placedDate"),className:a.textField,onChange:(e="placedDate",function(t){f(e,t)}),value:n.placedDate,labelFunc:function(e){return e?new Date(e).toLocaleString(b.language):""},name:"placedDate",label:h("entities.productPackage.placedDate")})),d.a.createElement(ke.a,{item:!0,xs:12,sm:6},d.a.createElement(we.a,{htmlFor:"productPackage-status"},h("entities.productPackage.status")),d.a.createElement(Pe.a,{native:!0,id:"productPackage-status",error:i.status&&r.status,className:a.textField,value:n.status,name:"status",onChange:o},d.a.createElement("option",{value:""}),d.a.createElement("option",{value:"DRAFT"},"DRAFT"),d.a.createElement("option",{value:"COMPLETED"},"COMPLETED"),d.a.createElement("option",{value:"PENDING"},"PENDING"),d.a.createElement("option",{value:"CANCELLED"},"CANCELLED"))),d.a.createElement(ke.a,{item:!0,xs:12,sm:6},d.a.createElement(Ce.a,{id:"productPackage-code",error:i.code&&r.code,helperText:m("code"),className:a.textField,onChange:o,onBlur:c,value:n.code,name:"code",label:h("entities.productPackage.code")})),d.a.createElement(ke.a,{item:!0,xs:12,sm:6},d.a.createElement(Ce.a,{id:"productPackage-facilityId",error:i.facilityId&&r.facilityId,helperText:m("facilityId"),className:a.textField,type:"number",onChange:o,onBlur:c,value:n.facilityId,name:"facilityId",label:h("entities.productPackage.facilityId")})),l&&d.a.createElement(Te,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:h("entities.productPackage.deleteDialog.title"),description:h("entities.productPackage.deleteDialog.description"),confirmLabel:h("common.yes"),discardLabel:h("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ge.a,{onClick:t,disabled:p},h("common.delete"))}}),d.a.createElement(ge.a,{onClick:u,disabled:p,"data-testid":"cancel-btn"},h("common.cancel")),d.a.createElement(ge.a,{type:"submit",color:"primary",disabled:p,"data-testid":"submit-btn"},h("common.save")))))}}]),t}(u.PureComponent);Ue.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var Ae={placedDate:null,status:"",code:"",facilityId:""},Re={mapPropsToValues:function(e){return e.productPackage||Ae},enableReinitialize:!0,validationSchema:E.object().shape({placedDate:E.date().nullable().required(),status:E.string().required(),code:E.string().required(),facilityId:E.number()}),handleSubmit:function(e,t){var a=t.setSubmitting;(0,t.props.onSubmit)(e),a(!1)},displayName:"ProductPackageForm"},Ie=Object(ve.a)(Object(ae.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(me.a)(Re))(Ue),Le=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},a.closeNotification=a.closeNotification.bind(Object(I.a)(a)),a.handleDelete=a.handleDelete.bind(Object(I.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(I.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.keycloak,n=t.id,r=a.initialized&&a.authenticated,i=e.keycloak.authenticated!==r,o=n&&n!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(R.a)(A.a.mark((function e(){var t,a,n,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.keycloak,n=t.id,r=t.serviceUrl,!(a.initialized&&a.authenticated)||!n){e.next=13;break}return e.prev=3,e.next=6,Y(r,n);case 6:i=e.sent,this.setState((function(){return{productPackage:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,n=a.t,r=a.onUpdate,i=a.keycloak,o=a.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,X(o,t);case 6:c=e.sent,r(c),this.setState({productPackage:c,notificationMessage:n("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n,r,i,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,n=a.t,r=a.onDelete,i=a.keycloak,o=a.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,Z(o,t.id);case 6:r(t),this.setState({productPackage:null,notificationMessage:n("common.dataDeleted"),notificationStatus:be.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,a=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:a("error.dataLoading"),notificationStatus:be.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,a=t.keycloak,n=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.productPackage;return e="undefined"===typeof s?r("entities.productPackage.notFound"):null===s?r("entities.productPackage.deleted"):d.a.createElement(Ie,{productPackage:s,onSubmit:this.handleSubmit,onCancelEditing:n,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:a},r("common.notAuthenticated")),d.a.createElement(H,{keycloak:a},e),d.a.createElement(be,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Le.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Me=q(Object(w.b)()(Le)),ze=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},a.closeNotification=a.closeNotification.bind(Object(I.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(I.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,n=a.t,r=a.onCreate,i=a.keycloak,o=a.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:n("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,a=t.onError,n=t.t;a(e),this.setState({notificationMessage:n("error.dataLoading"),notificationStatus:be.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,a=e.onCancelEditing,n=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:t},n("common.notAuthenticated")),d.a.createElement(H,{keycloak:t},d.a.createElement(Ie,{onSubmit:this.handleSubmit,onCancelEditing:a})),d.a.createElement(be,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);ze.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var qe=q(Object(w.b)()(ze));function He(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?He(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):He(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Je=function(){return window&&window.entando&&window.entando.keycloak&&We({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Ke={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Be=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=Je(),a.onCreate=N(T.create),a.onCancelEditing=N(T.cancelEditing),a.onDelete=N(T.delete),a.onUpdate=N(T.update),a.onErrorCreate=N(T.errorCreate),a.onErrorUpdate=N(T.errorUpdate),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,a){if(this.container&&t!==a){if(!Object.values(Ke).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Ke.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,a,n=this.attachShadow({mode:"open"});n.appendChild(this.container),this.jss=Object(y.b)(We({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(k.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=We({},Je(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",a=function(){e.keycloak=We({},Je(),{initialized:!0}),e.render()},window.addEventListener(t,a),function(){window.removeEventListener(t,a)}),this.onToggleDisableDefaultEvent(),this.render(),b()(n)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var a=F.tableAdd,n=F.cancelEditing,r=F.create,i=F.edit,o=F.delete,c=F.tableSelect,s=F.update,l=Ke.id;switch(t.type){case a:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case n:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,a="true"===this.getAttribute(Ke.disableDefaultEventHandler);if(a!==this.defaultEventHandlerDisabled){if(a)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var n=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(F),t=n,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=a}}},{key:"render",value:function(){var e=this.getAttribute(Ke.serviceUrl)||"";if("true"===this.getAttribute(Ke.hidden))f.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(Ke.locale);x(t);var a=this.getAttribute(Ke.id),n=a?d.a.createElement(Me,{id:a,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(qe,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);f.a.render(d.a.createElement(O.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(g.a,{theme:this.muiTheme},n))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Ke)}}]),t}(Object(s.a)(HTMLElement));customElements.define("product-package-form",Be)}},[[225,1,2]]]);
//# sourceMappingURL=main.5101140c.chunk.js.map