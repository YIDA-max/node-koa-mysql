import{_ as E}from"./index-1ec106fd.js";import{_ as D}from"./useForm-f3f06b26.js";import{u as M}from"./useTable-aaa095e4.js";import{a as y,i as R,j as W,bc as F,o as i,f as V,e as _,w as r,L as g,c as n,u as e,I as s,k as h,af as x,h as $,l as B}from"./index-4a8cc517.js";import"./index-878008b6.js";import{g as N,c as L,s as O,_ as P,e as U,d as j}from"./SensitiveWordModal.vue_vue_type_script_setup_true_name_SystemSensitiveWordModal_lang-5c33f5bd.js";import{a as A}from"./index-b6b4562f.js";import"./index-6202a637.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useWindowSizeFn-5faf2053.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./get-626e6e61.js";import"./index-529a9bc6.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./FullscreenOutlined-b0e65115.js";import"./fromPairs-e099444b.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./dict-9afd743e.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";import"./useRender-3355e2aa.js";const X=y({name:"SystemSensitiveWord"}),Fe=y({...X,setup(q){const{t}=R(),{createConfirm:v,createMessage:a}=B(),[w,{openModal:m}]=A(),[C,{getForm:b,reload:c}]=M({title:"敏感词列表",api:N,columns:L,formConfig:{labelWidth:120,schemas:O},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:t("common.action"),dataIndex:"action",fixed:"right"}});function S(){m(!0,{isUpdate:!1})}function T(o){m(!0,{record:o,isUpdate:!0})}async function k(){v({title:t("common.exportTitle"),iconType:"warning",content:t("common.exportMessage"),async onOk(){await U(b().getFieldsValue()),a.success(t("common.exportSuccessText"))}})}async function I(o){await j(o.id),a.success(t("common.delSuccessText")),c()}return(o,p)=>{const l=W("a-button"),d=F("auth");return i(),V("div",null,[_(e(E),{onRegister:e(C)},{toolbar:r(()=>[g((i(),n(l,{type:"primary",preIcon:e(s).ADD,onClick:S},{default:r(()=>[h(x(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[d,["system:sensitive-word:create"]]]),g((i(),n(l,{type:"warning",preIcon:e(s).EXPORT,onClick:k},{default:r(()=>[h(x(e(t)("action.export")),1)]),_:1},8,["preIcon"])),[[d,["system:sensitive-word:export"]]])]),bodyCell:r(({column:u,record:f})=>[u.key==="action"?(i(),n(e(D),{key:0,actions:[{icon:e(s).EDIT,label:e(t)("action.edit"),auth:"system:sensitive-word:delete",onClick:T.bind(null,f)},{icon:e(s).DELETE,color:"error",label:e(t)("action.delete"),auth:"system:sensitive-word:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:I.bind(null,f)}}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"]),_(P,{onRegister:e(w),onSuccess:p[0]||(p[0]=u=>e(c)())},null,8,["onRegister"])])}}});export{Fe as default};