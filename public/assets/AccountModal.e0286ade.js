var D=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var x=(c,m)=>{var a={};for(var u in c)Q.call(c,u)&&m.indexOf(u)<0&&(a[u]=c[u]);if(c!=null&&D)for(var u of D(c))m.indexOf(u)<0&&X.call(c,u)&&(a[u]=c[u]);return a};var A=(c,m,a)=>new Promise((u,s)=>{var b=i=>{try{y(a.next(i))}catch(v){s(v)}},C=i=>{try{y(a.throw(i))}catch(v){s(v)}},y=i=>i.done?u(i.value):Promise.resolve(i.value).then(b,C);y((a=a.apply(c,m)).next())});import{a as Y,b as Z,u as ee,v as se,r as R,l as P,j as e,o as p,c as k,i as h,A as d,I as g,E as I,t as M,f as G,U as w,bK as ae,bL as te,e as H,B as oe,ao as re,G as ue}from"./index.10ef4608.js";import{u as le,b as ie,B as ne}from"./index.c8f8ec06.js";import{u as ce,B as pe}from"./useForm.98d7b8ca.js";import{a as de,s as me,e as ve}from"./users.30d9a1d7.js";import fe from"./ChangeInfoModal.060c0534.js";import{u as ge,c as _,f as O}from"./useChangInfo.b588e1ad.js";import{b as we,E as ye,c as he}from"./index.3b12af83.js";import"./useAttrs.1d381a3e.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";import"./ChangeEmailForm.2c6a381e.js";import"./useCountDown.23082dea.js";import"./ChangePhoneForm.16fbea0f.js";import"./ChangePwdForm.c836675b.js";const _e=["onClick"],be=["onClick"],Ce=["onClick"],Ee=Z({__name:"AccountModal",emits:["success","register"],setup(c,{emit:m}){const{t:a}=ee(),u=se(),s=R("view"),[b,{openModal:C}]=le(),{setChangeState:y}=ge(),i=R("password");let v=null;const L=P(()=>e(s)==="view"?a("system.user.viewAccount"):e(s)==="edit"?a("system.user.editAccount"):e(s)==="create"?a("system.user.newUser"):a("system.user.profile")),$=P(()=>s.value==="view"),[T,{setFieldsValue:E,updateSchema:F,resetFields:V,appendSchemaByField:j,clearValidate:Be,validate:W,removeSchemaByFiled:U}]=ce({labelWidth:80,baseColProps:{span:24},schemas:de,showActionButtonGroup:!1,disabled:$}),[q,{setModalProps:B,closeModal:N}]=ie(r=>A(this,null,function*(){V(),s.value=r.status,r.delSwitch&&U("enable"),s.value==="create"||s.value==="user"?(yield j({field:"password",label:a("system.user.password"),component:"InputPassword",slot:"passwordSlot",required:!0},"username"),s.value==="user"?yield F([{field:"password",rules:[]},{field:"rolesName",ifShow:!0}]):yield F({field:"password",rules:we})):U("password"),B({showCancelBtn:r.status!=="view",showOkBtn:r.status!=="view",confirmLoading:!1});const{record:l}=r;e(s)!=="create"&&(E(l),v=r.record.id),(e(s)==="edit"||e(s)==="user"||e(s)==="view")&&E({password:r.record.password}),e(s)==="create"&&E({approvedNoticeTime:"no_email",reviewedNoticeTime:"no_email"})})),{createMessage:f}=ue();function K(){return A(this,null,function*(){try{const l=yield W();if(!l.phone&&!l.email){f.error("\u90AE\u7BB1/\u7535\u8BDD\u4E0D\u80FD\u90FD\u4E3A\u7A7A");return}if(l.email&&!ye.test(l.email)){f.error("\u7535\u5B50\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E");return}if(l.phone&&!he.test(l.phone)){f.error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E");return}if(B({confirmLoading:!0}),e(s)==="create")yield me(l);else{const r=l,{username:o,password:n}=r,J=x(r,["username","password"]);yield ve(J)}N();const t=u.getUserInfo;v===(t==null?void 0:t.id)&&(u.setUserInfo(t),u.getUserInfoAction()),s.value==="edit"?f.success(a("system.user.accountEditSuccess")):s.value==="create"?f.success(a("system.user.accountCreateSuccess")):s.value==="user"&&f.success(a("system.user.userEditSuccess")),m("success")}finally{B({confirmLoading:!1})}})}const S=(r,l)=>{N(),y(l),C(!0,{payload:r})},z=r=>{r==="password"?i.value="text":i.value="password"};return(r,l)=>(p(),k(re,null,[h(e(ne),oe(r.$attrs,{onRegister:e(q),title:e(L),onOk:K}),{default:d(()=>[h(e(pe),{onRegister:e(T),class:"custom-form"},{usernameSlot:d(({model:t,field:o})=>[h(e(g),{value:t[o],"onUpdate:value":n=>t[o]=n,disabled:s.value!=="create",placeholder:e(a)("sys.login.placeInput")},null,8,["value","onUpdate:value","disabled","placeholder"])]),passwordSlot:d(({model:t,field:o})=>[h(e(g),{value:t[o],"onUpdate:value":n=>t[o]=n,disabled:s.value==="user",type:i.value,autocomplete:"new-password",placeholder:e(a)("sys.login.placeInput")},{suffix:d(()=>[s.value==="user"?(p(),k("a",{key:0,onClick:I(n=>S(t[o],e(_).CHANGE_PASSWORD),["prevent"])},M(e(a)("sys.login.change")),9,_e)):G("v-if",!0),s.value==="create"?(p(),k("a",{key:1,onClick:l[0]||(l[0]=n=>z(i.value))},[i.value==="password"?(p(),w(e(ae),{key:0,style:{color:"rgba(0, 0, 0, 0.45)"}})):(p(),w(e(te),{key:1,style:{color:"rgba(0, 0, 0, 0.45)"}}))])):G("v-if",!0)]),_:2},1032,["value","onUpdate:value","disabled","type","placeholder"])]),emailSlot:d(({model:t,field:o})=>[s.value!=="user"?(p(),w(e(g),{key:0,value:t[o],"onUpdate:value":n=>t[o]=n,placeholder:e(a)("sys.login.placeInput"),disabled:s.value==="view"},null,8,["value","onUpdate:value","placeholder","disabled"])):(p(),w(e(g),{key:1,value:e(O)(t[o],"email"),disabled:""},{suffix:d(()=>[H("a",{onClick:I(n=>S(t[o],t[o]?e(_).CHANGE_BIND_EMAIL:e(_).CHANGE_EMAIL),["prevent"])},M(t[o]?e(a)("sys.login.change"):e(a)("sys.login.bind")),9,be)]),_:2},1032,["value"]))]),phoneSlot:d(({model:t,field:o})=>[s.value!=="user"?(p(),w(e(g),{key:0,value:t[o],"onUpdate:value":n=>t[o]=n,placeholder:e(a)("sys.login.placeInput"),disabled:s.value==="view"},null,8,["value","onUpdate:value","placeholder","disabled"])):(p(),w(e(g),{key:1,value:e(O)(t[o],"tel"),disabled:""},{suffix:d(()=>[H("a",{href:"javascript:void(0);",onClick:I(n=>S(t[o],t[o]?e(_).CHANGE_BIND_PHONE:e(_).CHANGE_PHONE),["prevent"])},M(t[o]?e(a)("sys.login.change"):e(a)("sys.login.bind")),9,Ce)]),_:2},1032,["value"]))]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"]),h(fe,{onRegister:e(b)},null,8,["onRegister"])],64))}});var ss=Y(Ee,[["__scopeId","data-v-28a14b58"]]);export{ss as default};
