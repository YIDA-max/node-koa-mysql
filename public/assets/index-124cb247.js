import{a as _,i as I,j as x,bc as A,o as r,f as S,e as d,w as c,L as D,c as f,u as t,I as n,k as v,af as M,h as R,l as P}from"./index-4a8cc517.js";import{a as Q}from"./index-b6b4562f.js";import{c as $,s as B,_ as N}from"./AccountModal.vue_vue_type_script_setup_true_name_MpAccountModal_lang-6930cd85.js";import{_ as V}from"./index-1ec106fd.js";import{_ as q}from"./useForm-f3f06b26.js";import{u as F}from"./useTable-aaa095e4.js";import"./index-878008b6.js";import{a as L,b as O,d as U,e as j}from"./index-525ecc99.js";import"./useWindowSizeFn-5faf2053.js";import"./FullscreenOutlined-b0e65115.js";import"./useRender-3355e2aa.js";import"./index-6202a637.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./get-626e6e61.js";import"./index-529a9bc6.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./fromPairs-e099444b.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./dict-9afd743e.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";const G=_({name:"MpAccount"}),$t=_({...G,setup(W){const{t:o}=I(),{createConfirm:s,createMessage:i}=P(),[h,{openModal:m}]=Q(),[b,{reload:l}]=F({title:"公众号账号列表",api:L,columns:$,formConfig:{labelWidth:120,schemas:B},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:o("common.action"),dataIndex:"action",fixed:"right"}});function g(){m(!0,{isUpdate:!1})}function C(e){m(!0,{record:e,isUpdate:!0})}function T(e){s({title:"生成二维码",iconType:"warning",content:"是否确认生成公众号账号"+e.name+"的二维码?",async onOk(){await O(e.id),i.success(o("common.exportSuccessText"))}})}function k(e){s({title:"删除二维码",iconType:"warning",content:"是否确认清空生成公众号账号"+e.name+"的 API 配额?",async onOk(){await U(e.id),i.success("清空 API 配额成功")}})}async function w(e){await j(e.id),i.success(o("common.delSuccessText")),l()}return(e,p)=>{const y=x("a-button"),E=A("auth");return r(),S("div",null,[d(t(V),{onRegister:t(b)},{toolbar:c(()=>[D((r(),f(y,{type:"primary",preIcon:t(n).ADD,onClick:g},{default:c(()=>[v(M(t(o)("action.create")),1)]),_:1},8,["preIcon"])),[[E,["mp:account:create"]]])]),bodyCell:c(({column:u,record:a})=>[u.key==="action"?(r(),f(t(q),{key:0,actions:[{icon:t(n).EDIT,label:t(o)("action.edit"),auth:"mp:account:update",onClick:C.bind(null,a)}],"drop-down-actions":[{icon:t(n).RESET,label:"生成二维码",auth:"mp:account:qr-code",onClick:T.bind(null,a)},{icon:t(n).TEST,label:"清空 API 配额",auth:"mp:account:clear-quota",onClick:k.bind(null,a)},{icon:t(n).DELETE,color:"error",label:t(o)("action.delete"),auth:"mp:account:delete",popConfirm:{title:t(o)("common.delMessage"),placement:"left",confirm:w.bind(null,a)}}]},null,8,["actions","drop-down-actions"])):R("",!0)]),_:1},8,["onRegister"]),d(N,{onRegister:t(h),onSuccess:p[0]||(p[0]=u=>t(l)())},null,8,["onRegister"])])}}});export{$t as default};
