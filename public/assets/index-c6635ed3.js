import{a as y,i as A,J as B,j as N,bc as O,o as c,f as L,e as i,w as l,L as w,c as p,u as e,I as r,k as x,af as b,h as j,l as J}from"./index-4a8cc517.js";import{a as u}from"./index-b6b4562f.js";import{_ as W}from"./UserModal.vue_vue_type_script_setup_true_name_SystemUserModal_lang-41ea158a.js";import{_ as X}from"./UserRoleModal.vue_vue_type_script_setup_true_name_SystemUserRoleModal_lang-c273197a.js";import{_ as q}from"./ResetPwdModal.vue_vue_type_script_setup_true_name_SystemResetPwdModal_lang-e7eca925.js";import{_ as z}from"./DeptTree.vue_vue_type_script_setup_true_name_SystemDeptTree_lang-d64cf3aa.js";import{_ as G}from"./index-1ec106fd.js";import{_ as H}from"./useForm-f3f06b26.js";import{u as K}from"./useTable-aaa095e4.js";import"./index-878008b6.js";import{c as Q,s as Y}from"./user.data-08338f1b.js";import{d as Z,e as ee,f as te}from"./index-be152e70.js";import"./useWindowSizeFn-5faf2053.js";import"./FullscreenOutlined-b0e65115.js";import"./index-50aba5b9.js";import"./index-0737cab3.js";import"./fromPairs-e099444b.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-529a9bc6.js";import"./get-626e6e61.js";import"./index-99ee5a1a.js";import"./index-6202a637.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./dict-9afd743e.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";import"./index-f718dc52.js";import"./useRender-3355e2aa.js";import"./index-7210d183.js";const oe={class:"flex"},se=y({name:"SystemUser"}),ot=y({...se,setup(re){const{t}=A(),{createConfirm:C,createMessage:d}=J(),[I,{openModal:f}]=u(),[M,{openModal:R}]=u(),[S,{openModal:T}]=u(),_=B({}),[k,{getForm:D,reload:n}]=K({title:"账号列表",api:Z,columns:Q,formConfig:{labelWidth:120,schemas:Y,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:t("common.action"),dataIndex:"action",fixed:"right"}});function E(){f(!0,{isUpdate:!1})}async function v(){C({title:t("common.exportTitle"),iconType:"warning",content:t("common.exportMessage"),async onOk(){await ee(D().getFieldsValue()),d.success(t("common.exportSuccessText"))}})}function $(o){f(!0,{record:o,isUpdate:!0})}function U(o){R(!0,{record:o})}function P(o){T(!0,{record:o})}async function F(o){await te(o.id),d.success(t("common.delSuccessText")),n()}function V(o=""){_.deptId=o,n()}return(o,s)=>{const g=N("a-button"),h=O("auth");return c(),L("div",oe,[i(z,{class:"w-1/4 xl:w-1/5",onSelect:V}),i(e(G),{onRegister:e(k),class:"w-3/4 xl:w-4/5",searchInfo:_},{toolbar:l(()=>[w((c(),p(g,{type:"primary",preIcon:e(r).ADD,onClick:E},{default:l(()=>[x(b(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[h,["system:user:create"]]]),w((c(),p(g,{type:"warning",preIcon:e(r).EXPORT,onClick:v},{default:l(()=>[x(b(e(t)("action.export")),1)]),_:1},8,["preIcon"])),[[h,["system:user:export"]]])]),bodyCell:l(({column:a,record:m})=>[a.key==="action"?(c(),p(e(H),{key:0,actions:[{icon:e(r).EDIT,label:e(t)("action.edit"),auth:"system:user:update",onClick:$.bind(null,m)}],dropDownActions:[{icon:e(r).EDIT,label:"分配角色",auth:"system:permission:assign-user-role",onClick:U.bind(null,m)},{icon:e(r).EDIT,label:"重置密码",auth:"system:user:update-password",onClick:P.bind(null,m)},{icon:e(r).DELETE,color:"error",label:e(t)("action.delete"),auth:"system:user:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:F.bind(null,m)}}]},null,8,["actions","dropDownActions"])):j("",!0)]),_:1},8,["onRegister","searchInfo"]),i(W,{onRegister:e(I),onSuccess:s[0]||(s[0]=a=>e(n)())},null,8,["onRegister"]),i(X,{onRegister:e(M),onSuccess:s[1]||(s[1]=a=>e(n)())},null,8,["onRegister"]),i(q,{onRegister:e(S),onSuccess:s[2]||(s[2]=a=>e(n)())},null,8,["onRegister"])])}}});export{ot as default};