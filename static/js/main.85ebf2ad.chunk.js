(this["webpackJsonpbpm-request-manager"]=this["webpackJsonpbpm-request-manager"]||[]).push([[0],{249:function(e){e.exports=JSON.parse('{"authPage":{"username":"\u0406\u043c\'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430","password":"\u041f\u0430\u0440\u043e\u043b\u044c","email":"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430","login":"\u0423\u0432\u0456\u0439\u0442\u0438","remind":"\u041d\u0430\u0433\u0430\u0434\u0430\u0442\u0438","forgot":"\u0417\u0430\u0431\u0443\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?","return":"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f","loginError":"\u043d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u043b\u043e\u0433\u0456\u043d \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c","serverError":"\u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443"},"header":{"user":"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447","logout":"\u0412\u0438\u0445\u0456\u0434"},"requestPage":{"newRequest":"\u041d\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442","tableColNumber":"\u041d\u043e\u043c\u0435\u0440","tableColStatus":"\u0421\u0442\u0430\u0442\u0443\u0441","tableColCreated":"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e","tableColRequest":"\u0417\u0430\u043f\u0438\u0442","send":"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"}}')},250:function(e){e.exports=JSON.parse('{"authPage":{"username":"User name","password":"Password","email":"E-mail","login":"Log in","remind":"Remind","forgot":"Forgot password?","return":"Return","loginError":"wrong login or password","serverError":"server error"},"header":{"user":"User","logout":"Log out"},"requestPage":{"newRequest":"New request","tableColNumber":"Number","tableColStatus":"Status","tableColCreated":"Created","tableColRequest":"Request","send":"Send"}}')},258:function(e,t,n){e.exports=n(454)},266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},286:function(e,t,n){},292:function(e,t,n){},307:function(e,t){},309:function(e,t){},437:function(e,t,n){},438:function(e,t,n){},453:function(e,t,n){},454:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n(25),s=n(125),i=n(456),u=n(180);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,465)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},m=n(35),f=n(463),d=n(42),p=n(81),h=Object(p.b)({name:"auth",initialState:{isAuthorized:!1,isFetching:!1,reminderActive:!1,username:null,errorStatus:null},reducers:{loginRequest:function(e){return Object(d.a)({},e,{isFetching:!0,errorStatus:null})},fetchLoginSuccess:function(e,t){return Object(d.a)({},e,{isAuthorized:!0,isFetching:!1,username:t.payload})},fetchLoginFailed:function(e,t){return Object(d.a)({},e,{isAuthorized:!1,isFetching:!1,errorStatus:t.payload})},logout:function(e){return Object(d.a)({},e,{isAuthorized:!1,userName:null,errorStatus:null})},toggleAuthPageForm:function(e){return Object(d.a)({},e,{reminderActive:!e.reminderActive,errorStatus:null})}}}),b=h.actions,v=b.loginRequest,g=b.fetchLoginSuccess,O=b.fetchLoginFailed,y=b.logout,j=b.toggleAuthPageForm,k=n(64),w=n(462),E={loginForm:{fields:[{type:"text",name:"username",id:Object(w.a)()},{type:"password",name:"password",id:Object(w.a)()}]},reminderForm:{fields:[{type:"text",name:"username",id:Object(w.a)()},{type:"email",name:"email",id:Object(w.a)()}]}},x={basic:"button-basic",transparent:"button-transparent"},S=(n(266),function(e){var t=e.text,n=e.type,a=e.classType,c=e.additionalClass,o=e.handleClick,s=e.disabled,i=s?"button-disabled":"",u="button ".concat(x[a]," ").concat(c," ").concat(i);return r.a.createElement("button",{type:n,className:u,onClick:o,disabled:s},t)}),I=S;S.defaultProps={additionalClass:"",type:"button",disabled:!1};n(267);var C=function(e){var t=e.text,n=Object(k.d)(),a=n.errors,c=n.touched,o=Boolean(Object.keys(a).length),s=Boolean(!Object.keys(c).length);return r.a.createElement("div",{className:"form-submit-container"},r.a.createElement(I,{text:t,classType:"basic",type:"submit",disabled:o||s}))},_=(n(268),function(e){var t=e.text;return r.a.createElement("div",{className:"error-message"},r.a.createElement("span",null,t))}),T=n(10),P=n.n(T),A=n(34),F=n(96),D=n(97),N=n(142),q=n(145),L=n(83),R=n.n(L),B=function(){function e(){var t=this;Object(F.a)(this,e),this.BASE_URL="".concat("https://bpm.codot.pro:443/engine-rest/engine/default"),this._accessToken=null,this._tenantId=null,this._username=null,this._handle401=function(){t._accessToken=null,t._tenantId=null,t._username=null,t.removeTenantData(),Object(m.f)().push("/")},this._getCommonOptions=function(){var e=t.loadAccessToken().accessToken;return{headers:{Authorization:"Basic ".concat(e)}}},this.saveTenantData=function(e,n,a){return t._username=e,t._accessToken=a,t._tenantId=n,sessionStorage.setItem("username",e),sessionStorage.setItem("tenantId",n),sessionStorage.setItem("accessToken",a),{username:e,tenantId:n,accessToken:a}},this.removeTenantData=function(){sessionStorage.removeItem("username"),sessionStorage.removeItem("tenantId"),sessionStorage.removeItem("accessToken")}}return Object(D.a)(e,[{key:"get",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,n,a=this,r=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},Object.assign(n,this._getCommonOptions()),e.abrupt("return",R.a.get("".concat(this.BASE_URL,"/").concat(t),n).then((function(e){return e.data})).catch((function(e){return a._handleHttpError(e)})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,n,a,r=this,c=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},a=c.length>2&&void 0!==c[2]?c[2]:{},Object.assign(a,this._getCommonOptions()),e.abrupt("return",R.a.post("".concat(this.BASE_URL,"/").concat(t),n,a).then((function(e){return{data:e.data,status:e.status}})).catch((function(e){return r._handleHttpError(e)})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,n,a,r=this,c=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},a=c.length>2&&void 0!==c[2]?c[2]:{},Object.assign(a,this._getCommonOptions()),e.abrupt("return",R.a.put("".concat(this.BASE_URL,"/").concat(t),n,a).catch((function(e){return r._handleHttpError(e)})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,n,a=this,r=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},Object.assign(n,this._getCommonOptions()),e.abrupt("return",R.a.delete("".concat(this.BASE_URL,"/").concat(t),n).then((function(e){return e.data})).catch((function(e){return a._handleHttpError(e)})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"patch",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,n,a,r=this,c=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},a=c.length>2&&void 0!==c[2]?c[2]:{},Object.assign(a,this._getCommonOptions()),e.abrupt("return",R.a.patch("".concat(this.BASE_URL,"/").concat(t),n,a).catch((function(e){return r._handleHttpError(e)})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_handleHttpError",value:function(e){if(401!==e.response.status)throw e;return this._handle401()}},{key:"loadAccessToken",value:function(){var e=sessionStorage.getItem("accessToken");return this._accessToken=e,{accessToken:e}}},{key:"loadUsername",value:function(){var e=sessionStorage.getItem("username");return this._username=e,{username:e}}},{key:"loadTenantId",value:function(){var e=sessionStorage.getItem("tenantId");return this._tenantId=e,{tenantId:e}}},{key:"accessToken",get:function(){return this._accessToken?this._accessToken:this.loadAccessToken()}},{key:"username",get:function(){return this._username?this._username:this.loadUsername()}},{key:"tenantId",get:function(){return this._tenantId?this._tenantId:this.loadTenantId()}}]),e}(),U=new(function(e){Object(q.a)(n,e);var t=Object(N.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"login",value:function(){var e=Object(A.a)(P.a.mark((function e(t){var n,a,r,c,o,s,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r="".concat(btoa("".concat(n.toString(),":").concat(a.toString()))),c={headers:{Authorization:"Basic ".concat(r)}},e.next=5,R.a.get("".concat(this.BASE_URL,"/tenant?userMember=").concat(n),c);case 5:return o=e.sent,s=o.data,i=s[0].id,this.saveTenantData(n,i,r),e.abrupt("return",s[0]);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){this.removeTenantData()}}]),n}(B)),z=n(90),V=n(144),H=(n(286),function(e){var t=e.label,n=e.options,a=Object(V.a)(e,["label","options"]),c=a.type,o=a.name,s=Object(k.c)(a),i=Object(z.a)(s,3),u=i[0],l=i[2],m=Object(f.a)("common").i18n.language,d="checkbox"===c?"form-label-secondary":"form-label-primary",p="checkbox"===c?"form-field-secondary":"file"===c?"form-field-file--".concat(m):"form-field-primary",h=r.a.createElement("label",{className:d,htmlFor:o},t),b=n?r.a.createElement("select",Object.assign({className:p},u,a),r.a.createElement("option",{value:""}),n.map((function(e){var t=e.id,n=e.name;return r.a.createElement("option",{value:t,key:t},n)}))):"file"===c?r.a.createElement("input",Object.assign({className:p,id:o},a,{onChange:function(e){var t=e.currentTarget.files[0],n=t.name;(function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))})(t).then((function(e){var t=e.split(",")[1];return{filename:n,base64file:t}})).then((function(e){return l.setValue(e)}))}})):r.a.createElement("input",Object.assign({className:p,id:o},u,a));return r.a.createElement("div",null,"checkbox"!==c?h:null,b,"checkbox"===c?h:null)}),J=function(e){var t=e.reminderActive,n=Object(c.c)(),a=Object(c.d)((function(e){return e.auth.errorStatus}),c.b),o=Object(f.a)("common").t,s=t?E.reminderForm:E.loginForm,i=o(t?"authPage.remind":"authPage.login"),u=a?401===a?o("authPage.loginError"):"".concat(o("authPage.serverError"),": ").concat(a):"",l=Object.fromEntries(s.fields.map((function(e){return[e.name,""]}))),m=s.fields.map((function(e){return r.a.createElement(H,{key:e.id,type:e.type,name:e.name,required:!0,label:o("authPage.".concat(e.name))})})),d={initialValues:l,onSubmit:function(e){t?(console.log(e),console.log("login: testUser, password: testPassword")):n(function(e){var t=e.username,n=e.password;return function(){var e=Object(A.a)(P.a.mark((function e(a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(v()),e.prev=1,e.next=4,U.login({username:t,password:n});case 4:a(g(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),"InvalidCharacterError"===e.t0.name?a(O(401)):a(O(e.t0.response.status));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(e))}};return r.a.createElement(k.b,Object.assign({},d,{enableReinitialize:!0}),r.a.createElement(k.a,null,r.a.createElement("div",null,m,r.a.createElement(_,{text:u}),r.a.createElement(C,{text:i}))))},M=(n(292),function(){var e=Object(c.d)((function(e){return e.auth.reminderActive}),c.b),t=Object(c.c)(),n=Object(f.a)("common").t;return r.a.createElement("div",{className:"auth-page"},r.a.createElement("div",{className:"auth-page__form"},r.a.createElement(J,{reminderActive:e}),r.a.createElement(I,{text:n(e?"authPage.return":"authPage.remind"),classType:"transparent",additionalClass:"auth-page__reminder",handleClick:function(){return t(j())}})))}),$=n(112),W=n(178),K=Object(p.b)({name:"processes",initialState:{tableLoading:!1,drawerActive:!1,modalActive:!1,tableData:[],drawerOptions:[],formOptions:{formFields:[],name:null,key:null}},reducers:{requestTableData:function(e){return Object(d.a)({},e,{tableLoading:!0})},setTableData:function(e,t){return Object(d.a)({},e,{tableData:t.payload,tableLoading:!1})},setDrawerOptions:function(e,t){return Object(d.a)({},e,{drawerOptions:t.payload})},toggleDrawerStatus:function(e){return Object(d.a)({},e,{drawerActive:!e.drawerActive})},setFormOptions:function(e,t){return Object(d.a)({},e,{formOptions:t.payload})},toggleModalStatus:function(e){return Object(d.a)({},e,{modalActive:!e.modalActive})},clearData:function(e){return Object(d.a)({},e,{tableData:[],drawerOptions:[],formOptions:{formFields:[],name:null,key:null}})}}}),X=K.actions,Z=X.requestTableData,G=X.setTableData,Q=X.setDrawerOptions,Y=X.toggleDrawerStatus,ee=X.setFormOptions,te=X.toggleModalStatus,ne=X.clearData,ae=new(function(e){Object(q.a)(n,e);var t=Object(N.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"getProcessesId",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,n,a,r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"process-instance",t=this.loadUsername(),n=t.username,a={variables:[{name:"Initiator",operator:"eq",value:"".concat(n)}],sorting:[{sortBy:"definitionKey",sortOrder:"asc"},{sortBy:"instanceId",sortOrder:"desc"}]},e.next=5,this.post("process-instance",a);case 5:return r=e.sent,c=r.data,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProcessStatus",value:function(){var e=Object(A.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="task?processInstanceId=".concat(t),e.next=3,this.get(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getProcessName",value:function(){var e=Object(A.a)(P.a.mark((function e(t){var n,a,r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.loadTenantId(),a=n.tenantId,r="process-definition/key/".concat(t,"/tenant-id/").concat(a,"/xml"),e.next=4,this.get(r);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getProcessesDefinitions",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,n,a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.loadTenantId(),n=t.tenantId,a="process-definition?tenantIdIn=".concat(n),e.next=4,this.get(a);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startNewProcess",value:function(){var e=Object(A.a)(P.a.mark((function e(t,n){var a,r,c,o,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.loadTenantId(),r=a.tenantId,c={variables:n,withVariablesInReturn:!0},o="process-definition/key/".concat(t,"/tenant-id/").concat(r,"/start"),s=this.post(o,c),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(B)),re=function(){return function(){var e=Object(A.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Z()),e.prev=1,e.next=4,ae.getProcessesId().then((function(e){return e.map((function(e){return{id:e.id,number:e.id.slice(0,13),key:e.definitionId.split(":")[0]}}))})).then((function(e){return t(ce(e))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},ce=function(e){return function(){var t=Object(A.a)(P.a.mark((function t(n){var a,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a=Object($.a)(e),r=e.map((function(e){return ae.getProcessStatus(e.id)})),Promise.all(r).then((function(e){return e.map((function(e){var t=Object(z.a)(e,1)[0],n=a.find((function(e){return e.id===t.executionId}));return Object(d.a)({},n,{created:t.created,status:t.name})}))})).then((function(e){n(oe(e))}))}catch(c){console.log(c)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},oe=function(e){return function(){var t=Object(A.a)(P.a.mark((function t(n){var a,r,c,o,s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a=Object($.a)(e),r=[],c=a.map((function(e){return e.key})),o=Array.from(new Set(c)),s=o.map((function(e){return ae.getProcessName(e)})),Promise.all(s).then((function(e){return e.map((function(e){var t,n=e.bpmn20Xml;Object(W.parseString)(n,(function(e,n){t=n}));var a=t["bpmn:definitions"]["bpmn:process"][0].$;return r.push(a),r}))})).then((function(e){r.forEach((function(e){a=a.map((function(t){return t.key===e.id?Object(d.a)({},t,{name:e.name}):t}))})),a=a.map((function(e){e.key,e.id;return Object(V.a)(e,["key","id"])}));var t={year:"numeric",month:"numeric",day:"numeric"};a.forEach((function(e,n){e.key=n+1;var a=new Date(Date.parse(e.created));e.created=a.toLocaleString("ru",t)})),n(G(a))}))}catch(i){console.log(i)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},se=n(459),ie=n(464),ue=n(46),le=n(457),me=(n(319),n(227)),fe=n.n(me),de=n(460),pe=function(){var e,t=Object(c.d)((function(e){return e.processes.tableData}),c.b),n=Object(c.d)((function(e){return e.processes.tableLoading}),c.b),o=Object(f.a)("common").t,s=Object(a.useState)(""),i=Object(z.a)(s,2),u=i[0],l=i[1],m=Object(a.useState)(""),d=Object(z.a)(m,2),p=d[0],h=d[1],b=null,v=function(e,t,n){t(),l(e[0]),h(n)},g=function(e){e(),l("")},O=function(e,t){var n=e.map((function(e){return e[t]}));return Array.from(new Set(n)).map((function(e){return{text:e,value:e}}))},y=O(t,"status"),j=O(t,"name"),k=(e="number",{filterDropdown:function(t){var n=t.setSelectedKeys,a=t.selectedKeys,c=t.confirm,o=t.clearFilters;return r.a.createElement("div",{style:{padding:8}},r.a.createElement(se.a,{ref:function(e){b=e},placeholder:"Search ".concat(e),value:a[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return v(a,c,e)},style:{width:188,marginBottom:8,display:"block"}}),r.a.createElement(ie.b,null,r.a.createElement(ue.a,{type:"primary",onClick:function(){return v(a,c,e)},icon:r.a.createElement(de.a,null),size:"small",style:{width:90}},"Search"),r.a.createElement(ue.a,{onClick:function(){return g(o)},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return r.a.createElement(de.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return b.select()}),100)},render:function(t){return p===e?r.a.createElement(fe.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[u],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}),w=k.filterDropdown,E=k.filterIcon,x=k.onFilter,S=k.onFilterDropdownVisibleChange,I=k.render,C=[{title:o("requestPage.tableColNumber"),dataIndex:"number",key:"number",className:"table_text",filterDropdown:w,filterIcon:E,onFilter:x,onFilterDropdownVisibleChange:S,render:I},{title:o("requestPage.tableColStatus"),dataIndex:"status",key:"status",filters:y,className:"table_text",onFilter:function(e,t){return 0===t.status.indexOf(e)}},{title:o("requestPage.tableColCreated"),dataIndex:"created",key:"created",className:"table_text",defaultSortOrder:"descend",sorter:function(e,t){var n=function(e){var t=e.split(".");return new Date(t[2],t[1]-1,t[0])};return n(e.created)-n(t.created)}},{title:o("requestPage.tableColRequest"),dataIndex:"name",key:"name",filters:j,className:"table_text",onFilter:function(e,t){return 0===t.name.indexOf(e)}}];return r.a.createElement(le.a,{dataSource:t,columns:C,pagination:{position:["bottomCenter"]},size:"middle",loading:n})},he=(n(437),function(){var e=Object(c.d)((function(e){return e.processes.drawerActive}),c.b),t=Object(f.a)("common").t,n=Object(c.c)(),o=e?"hidden":"";return Object(a.useEffect)((function(){n(re()),n(function(){var e=Object(A.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.getProcessesDefinitions().then((function(e){return e.map((function(e){return{key:e.key,name:e.name}}))})).then((function(e){var n=Array.from(new Set(e.map(JSON.stringify))).map(JSON.parse);t(Q(n))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement("div",{className:"processes-page"},r.a.createElement(pe,null),r.a.createElement("div",{className:"processes-page__new-request ".concat(o),onClick:function(){n(Y())}},r.a.createElement("span",null,t("requestPage.newRequest"))))}),be=function(){var e=Object(c.d)((function(e){return e.auth.isAuthorized}),c.b);return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return e?r.a.createElement(he,null):r.a.createElement(M,null)}}))},ve=function(){var e=Object(f.a)("common").i18n;return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("span",{style:{float:"left",fontWeight:"bold"}},"DEMO "),r.a.createElement("span",{style:{float:"left",marginLeft:"5px"}},"[testUser, testPassword]"),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(I,{text:"UA",classType:"transparent",handleClick:function(){return e.changeLanguage("uk")}}),r.a.createElement("span",null,"|"),r.a.createElement(I,{text:"EN",classType:"transparent",handleClick:function(){return e.changeLanguage("en")}})))},ge=function(){var e=Object(c.d)((function(e){return e.auth.username}),c.b),t=Object(f.a)("common").t,n=Object(c.c)(),a="".concat(t("header.user"),": ").concat(e);return r.a.createElement("div",null,r.a.createElement("span",{style:{paddingRight:"20px"}},a),r.a.createElement(I,{text:t("header.logout"),classType:"transparent",handleClick:function(){n(function(){var e=Object(A.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.logout();case 2:t(y());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n(ne())}}))},Oe=(n(438),function(){var e=Object(c.d)((function(e){return e.auth.isAuthorized}),c.b)?r.a.createElement(ge,null):r.a.createElement(ve,null);return r.a.createElement("header",{className:"header"},e)}),ye=n(461),je=function(){var e=Object(c.d)((function(e){return e.processes.drawerActive})),t=Object(c.d)((function(e){return e.processes.drawerOptions})),n=Object(c.c)(),a=Object(f.a)("common").t,o=t.map((function(e){return r.a.createElement("p",{key:e.key,onClick:function(){var t,a;n(Y()),n((t=e.key,a=e.name,function(){var e=Object(A.a)(P.a.mark((function e(n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.getProcessName(t).then((function(e){var r,c=e.bpmn20Xml;Object(W.parseString)(c,(function(e,t){r=t}));var o=r["bpmn:definitions"]["bpmn:process"][0]["bpmn:startEvent"][0]["bpmn:extensionElements"][0]["camunda:formData"][0]["camunda:formField"].map((function(e){return e["camunda:value"]?Object(d.a)({},e.$,{options:e["camunda:value"].map((function(e){return e.$}))}):e.$}));n(ee({formFields:o,name:a,key:t})),n(te())}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()))},style:{cursor:"pointer"}},e.name)}));return r.a.createElement(ye.a,{title:a("requestPage.newRequest"),placement:"right",closable:!1,onClose:function(){n(Y())},visible:e},o)},ke=n(458),we=function(e){switch(e){case"string":return"text";case"long":return"number";case"file":return"file";case"boolean":return"checkbox";case"enum":return"select";default:return""}},Ee=function(){var e=Object(c.c)(),t=Object(c.d)((function(e){return e.processes.formOptions})),n=t.formFields,a=t.key,o=Object(f.a)("common").t,s=Object.fromEntries(n.map((function(e){var t=e.type,n=e.id,a=e.defaultValue;return"boolean"===t?[n,a]:[n,""]}))),i=Object.fromEntries(n.map((function(e){var t,n=e.id,a=e.type;return[n,(t=a,"long"===t?"double":"enum"===t?"string":t)]}))),u=n.map((function(e){return r.a.createElement(H,{key:Object(w.a)(),type:we(e.type),name:e.id,label:e.label,placeholder:e.defaultValue,options:e.options})})),l={initialValues:s,validate:function(e){var t={};for(var n in e)e[n]||"boolean"===i[n]||(t[n]="required");return t},onSubmit:function(t,n){var r,c,o={};for(var s in t)o[s]={value:t[s],type:i[s]};for(var u in o){if("date"===o[u].type){var l=new Date(o[u].value),m=l.getTimezoneOffset()/-60,f=m>=10?"+".concat(m,"00"):"+0".concat(m,"00");o[u].value=l.toISOString().replace("Z",f)}"file"===o[u].type&&(o[u]={value:o[u].value.base64file,type:"file",valueInfo:{filename:o[u].value.filename,encoding:"Base64"}})}e((r=a,c=o,function(){var e=Object(A.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.startNewProcess(r,c).then((function(e){200===e.status&&t(re())}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}())),e(te()),n.resetForm({values:{}})}};return r.a.createElement(k.b,Object.assign({},l,{enableReinitialize:!0}),r.a.createElement(k.a,null,r.a.createElement("div",null,u,r.a.createElement(C,{text:o("requestPage.send")}))))},xe=function(){var e=Object(c.d)((function(e){return e.processes.modalActive})),t=Object(c.d)((function(e){return e.processes.formOptions})).name,n=Object(c.c)();return r.a.createElement(ke.a,{title:t,visible:e,onOk:function(){n(te())},centered:!0,onCancel:function(){n(te())},footer:null,width:350},r.a.createElement(Ee,null))},Se=(n(453),function(){return r.a.createElement("div",{className:"container app-wrapper"},r.a.createElement("div",{className:"app-header"},r.a.createElement(Oe,null)),r.a.createElement("div",{className:"app-content"},r.a.createElement(be,null)),r.a.createElement(je,null),r.a.createElement(xe,null))}),Ie=n(61),Ce=Object(Ie.c)({auth:h.reducer,processes:K.reducer}),_e=Object($.a)(Object(p.c)({serializableCheck:!1})),Te=Object(p.a)({reducer:Ce,middleware:_e,devTools:!1}),Pe=n(249),Ae=n(250);u.a.init({interpolation:{escapeValue:!1},lng:"uk",resources:{uk:{common:Pe},en:{common:Ae}}}),Object(o.render)(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:Te},r.a.createElement(s.a,null,r.a.createElement(i.a,{i18n:u.a},r.a.createElement(Se,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),l()}},[[258,1,2]]]);
//# sourceMappingURL=main.85ebf2ad.chunk.js.map