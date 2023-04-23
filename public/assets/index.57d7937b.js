var D=(w,s,u)=>new Promise((h,b)=>{var _=i=>{try{c(u.next(i))}catch(p){b(p)}},C=i=>{try{c(u.throw(i))}catch(p){b(p)}},c=i=>i.done?h(i.value):Promise.resolve(i.value).then(_,C);c((u=u.apply(w,s)).next())});import{u as P,B as E}from"./useTable.a143d40c.js";import"./TableAction.edf9a202.js";import{a as F,b as N,u as U,s as K,aG as G,l as V,x as j,o as z,c as L,i as o,A as n,j as e,dB as W,d3 as v,D as l,t as d,cP as q,ce as H,G as J}from"./index.10ef4608.js";import{u as x}from"./index.c8f8ec06.js";import{g as Q,c as X,b as Y,e as Z,d as ee}from"./users.30d9a1d7.js";import te from"./AccountModal.e0286ade.js";import se from"./ResetPwdModal.20a9cbfd.js";/* empty css               */import"./useForm.98d7b8ca.js";/* empty css                */import{u as oe}from"./useBatchDelete.9dc1ae07.js";import ne from"./DispatchModal.06f58137.js";/* empty css               */import"./index.8d0858e7.js";import"./onMountedOrActivated.0d13b2a6.js";import"./useWindowSizeFn.3e5b045d.js";import"./useContentViewHeight.9302814f.js";import"./icon-remark.1929ee0a.js";/* empty css               *//* empty css              *//* empty css               */import"./uuid.2429c801.js";import"./useModalContext.52c86736.js";/* empty css               */import"./useSortable.79752a2a.js";/* empty css                *//* empty css                */import"./useAttrs.1d381a3e.js";import"./index.3b12af83.js";import"./ChangeInfoModal.060c0534.js";import"./ChangeEmailForm.2c6a381e.js";import"./useChangInfo.b588e1ad.js";/* empty css              *//* empty css               */import"./useCountDown.23082dea.js";import"./ChangePhoneForm.16fbea0f.js";import"./ChangePwdForm.c836675b.js";import"./index.b6ac86eb.js";/* empty css                *//* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";import"./index.866ec2c8.js";import"./modal-error.7cada6d5.js";import"./roles.32b28635.js";const ae=N({__name:"index",setup(w){const{t:s}=U(),[u,{openModal:h}]=x(),[b,{openModal:_}]=x(),[C,{openModal:c}]=x(),i=K({}),[p,{reload:g,setProps:y,setSelectedRowKeys:$,getSelectRowKeys:A}]=P({rowKey:"id",api:Q,columns:X,formConfig:{labelWidth:120,schemas:Y,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!1,bordered:!0,showIndexColumn:!1,handleSearchInfoFn(a){return a},actionColumn:{width:350,title:s("system.user.operation"),dataIndex:"action",slots:{customRender:"action"}}}),{hasBatchDelete:R,handleDeleteOrBatchDelete:M,selectionOptions:B}=oe(ee,g,y);B.rowSelection.getCheckboxProps=a=>a.roleNmae.indexOf("\u8D85\u7EA7\u7BA1\u7406\u5458")!==-1?{disabled:!0}:{disabled:!1},G(()=>{y(B)});const k=(a,r)=>{h(!0,{record:r,status:a})},I=a=>{_(!0,{record:a})},{createMessage:T}=J(),O=(f,et)=>D(this,[f,et],function*(a,{id:r,email:m,phone:t}){y({loading:!0}),$([]);try{yield Z({id:r,email:m,phone:t,enable:a}),T.success(`${s(a?"system.user.enable":"system.user.disable")}${s("system.user.success")}`)}finally{y({loading:!1}),g()}}),S=V(()=>({background:"#fff",color:"#202020",border:"1px solid #666666"}));return(a,r)=>{const m=j("a-button");return z(),L("div",null,[o(e(E),{onRegister:e(p),searchInfo:i},{tableTitle:n(()=>[o(e(W),{size:"middle"},{default:n(()=>[o(v,{onClick:r[0]||(r[0]=t=>k("create")),btnStyle:e(S)},{default:n(()=>[l(d(e(s)("system.user.newUser")),1)]),_:1},8,["btnStyle"]),o(v,{onClick:r[1]||(r[1]=t=>e(M)(null)),disabled:e(R),btnStyle:e(S)},{default:n(()=>[l(d(e(s)("system.user.deleteAll")),1)]),_:1},8,["disabled","btnStyle"]),o(v,{onClick:r[2]||(r[2]=t=>e(c)(!0,{selectedRowIds:e(A)()})),disabled:e(R),btnStyle:e(S)},{default:n(()=>[l(d(e(s)("sys.login.forgetFormTitle")),1)]),_:1},8,["disabled","btnStyle"])]),_:1})]),avatar:n(({record:t})=>[o(e(q),{src:t.avatar},null,8,["src"])]),status:n(({record:t})=>[o(e(H),{checked:t.enable===!0,loading:t.pendingStatus,checkedChildren:e(s)("system.user.enable"),unCheckedChildren:e(s)("system.user.disable"),onChange:f=>O(f,t)},null,8,["checked","loading","checkedChildren","unCheckedChildren","onChange"])]),action:n(({record:t})=>[o(m,{onClick:f=>k("view",t),type:"link"},{default:n(()=>[l(d(e(s)("system.user.lookto")),1)]),_:2},1032,["onClick"]),o(m,{onClick:f=>k("edit",t),type:"link"},{default:n(()=>[l(d(e(s)("system.user.edit")),1)]),_:2},1032,["onClick"]),o(m,{onClick:f=>I(t),type:"link"},{default:n(()=>[l(d(e(s)("system.user.allot")),1)]),_:2},1032,["onClick"]),o(m,{onClick:f=>e(M)(t),type:"link",disabled:t.roleNmae.indexOf("\u8D85\u7EA7\u7BA1\u7406\u5458")!==-1},{default:n(()=>[l(d(e(s)("system.user.delete")),1)]),_:2},1032,["onClick","disabled"])]),_:1},8,["onRegister","searchInfo"]),o(te,{onRegister:e(u),onSuccess:e(g)},null,8,["onRegister","onSuccess"]),o(ne,{onRegister:e(b),onSuccess:e(g)},null,8,["onRegister","onSuccess"]),o(se,{onRegister:e(C)},null,8,["onRegister"])])}}});var Ye=F(ae,[["__scopeId","data-v-02a6bf8e"]]);export{Ye as default};
