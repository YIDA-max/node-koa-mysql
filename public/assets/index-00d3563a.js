import{a as f,i as I,J as T,j as x,bc as v,o as i,f as S,e as a,w as r,L as E,c as d,u as t,I as s,k as M,af as R,h as $,l as B}from"./index-4a8cc517.js";import{a as N}from"./index-b6b4562f.js";import{_ as V}from"./DictData.vue_vue_type_script_setup_true_name_SystemDictData_lang-2a33156f.js";import{t as F,a as L,_ as U}from"./DictTypeModal.vue_vue_type_script_setup_true_name_SystemDictTypeModal_lang-bd7f2258.js";import{_ as j}from"./index-1ec106fd.js";import{_ as A}from"./useForm-f3f06b26.js";import{u as J}from"./useTable-aaa095e4.js";import"./index-878008b6.js";import{a as P,d as W}from"./type-5b6209d3.js";import"./useWindowSizeFn-5faf2053.js";import"./FullscreenOutlined-b0e65115.js";import"./DictDataModal.vue_vue_type_script_setup_true_name_SystemDictDataModal_lang-ca5f4242.js";import"./useRender-3355e2aa.js";import"./dict-9afd743e.js";import"./index-6202a637.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./get-626e6e61.js";import"./index-529a9bc6.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./fromPairs-e099444b.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";const q={class:"flex"},z=f({name:"SystemDict"}),Lt=f({...z,setup(G){const{t:e}=I(),{createMessage:_}=B(),[h,{openModal:n}]=N(),m=T({}),[y,{reload:c}]=J({title:"字典分类列表",api:P,columns:F,formConfig:{labelWidth:120,schemas:L},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function g(o){m.dictType=o.type}function C(){n(!0,{isUpdate:!1})}function b(o){n(!0,{record:o,isUpdate:!0})}async function w(o){await W(o.id),_.success(e("common.delSuccessText")),c()}return(o,p)=>{const D=x("a-button"),k=v("auth");return i(),S("div",q,[a(t(j),{onRegister:t(y),class:"w-1/2",onRowClick:g},{toolbar:r(()=>[E((i(),d(D,{type:"primary",preIcon:t(s).ADD,onClick:C},{default:r(()=>[M(R(t(e)("action.create")),1)]),_:1},8,["preIcon"])),[[k,["system:dict:create"]]])]),bodyCell:r(({column:l,record:u})=>[l.key==="action"?(i(),d(t(A),{key:0,actions:[{icon:t(s).EDIT,label:t(e)("action.edit"),auth:"system:dict:update",onClick:b.bind(null,u)},{icon:t(s).DELETE,color:"error",label:t(e)("action.delete"),auth:"system:dict:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:w.bind(null,u)}}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"]),a(V,{class:"w-1/2",searchInfo:m},null,8,["searchInfo"]),a(U,{onRegister:t(h),onSuccess:p[0]||(p[0]=l=>t(c)())},null,8,["onRegister"])])}}});export{Lt as default};