import{a as x,i as S,j as v,bc as M,o as r,f as P,e as _,w as i,L as g,c as s,u as t,I as a,k as h,af as y,h as R,l as F}from"./index-4a8cc517.js";import{a as V}from"./index-b6b4562f.js";import{c as $,s as B,_ as N}from"./PostModal.vue_vue_type_script_setup_true_name_SystemPostModal_lang-de9c72ad.js";import{_ as L}from"./index-1ec106fd.js";import{_ as O}from"./useForm-f3f06b26.js";import{u as U}from"./useTable-aaa095e4.js";import"./index-878008b6.js";import{a as j,e as A,d as W}from"./index-f718dc52.js";import"./useWindowSizeFn-5faf2053.js";import"./FullscreenOutlined-b0e65115.js";import"./useRender-3355e2aa.js";import"./dict-9afd743e.js";import"./index-6202a637.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./get-626e6e61.js";import"./index-529a9bc6.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./fromPairs-e099444b.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";const X=x({name:"SystemPost"}),Vt=x({...X,setup(q){const{t:e}=S(),{createConfirm:b,createMessage:n}=F(),[C,{openModal:m}]=V(),[T,{getForm:k,reload:c}]=U({title:"岗位列表",api:j,columns:$,formConfig:{labelWidth:120,schemas:B},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function w(){m(!0,{isUpdate:!1})}function E(o){m(!0,{record:o,isUpdate:!0})}async function I(){b({title:e("common.exportTitle"),iconType:"warning",content:e("common.exportMessage"),async onOk(){await A(k().getFieldsValue()),n.success(e("common.exportSuccessText"))}})}async function D(o){await W(o.id),n.success(e("common.delSuccessText")),c()}return(o,p)=>{const l=v("a-button"),u=M("auth");return r(),P("div",null,[_(t(L),{onRegister:t(T)},{toolbar:i(()=>[g((r(),s(l,{type:"primary",preIcon:t(a).ADD,onClick:w},{default:i(()=>[h(y(t(e)("action.create")),1)]),_:1},8,["preIcon"])),[[u,["system:post:create"]]]),g((r(),s(l,{type:"warning",preIcon:t(a).EXPORT,onClick:I},{default:i(()=>[h(y(t(e)("action.export")),1)]),_:1},8,["preIcon"])),[[u,["system:post:export"]]])]),bodyCell:i(({column:d,record:f})=>[d.key==="action"?(r(),s(t(O),{key:0,actions:[{icon:t(a).EDIT,label:t(e)("action.edit"),auth:"system:post:update",onClick:E.bind(null,f)},{icon:t(a).DELETE,color:"error",label:t(e)("action.delete"),auth:"system:post:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:D.bind(null,f)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),_(N,{onRegister:t(C),onSuccess:p[0]||(p[0]=d=>t(c)())},null,8,["onRegister"])])}}});export{Vt as default};