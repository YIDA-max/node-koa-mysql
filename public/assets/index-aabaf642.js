import{bD as p,a as l,i as T,j as x,bc as w,o as i,f as y,e as S,w as a,L as k,c as s,u as t,I as n,k as E,af as M,h as v,l as F}from"./index-4a8cc517.js";import{_ as N}from"./index-1ec106fd.js";import{_ as O}from"./useForm-f3f06b26.js";import{u as P}from"./useTable-aaa095e4.js";import"./index-878008b6.js";import{u as c}from"./useRender-3355e2aa.js";import{D as d,g as R}from"./dict-9afd743e.js";import"./index-6202a637.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useWindowSizeFn-5faf2053.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./get-626e6e61.js";import"./index-b6b4562f.js";import"./FullscreenOutlined-b0e65115.js";import"./index-529a9bc6.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./fromPairs-e099444b.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";function B(e){return p.delete({url:"/bpm/form/delete?id="+e})}function A(e){return p.get({url:"/bpm/form/page",params:e})}const V=[{title:"编号",dataIndex:"id",width:100},{title:"表单名",dataIndex:"name",width:180},{title:"状态",dataIndex:"status",width:180,customRender:({text:e})=>c.renderDict(e,d.COMMON_STATUS)},{title:"备注",dataIndex:"remark",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>c.renderDate(e)}],L=[{label:"表单名",field:"name",component:"Input",colProps:{span:8}},{label:"状态",field:"status",component:"Select",componentProps:{options:R(d.COMMON_STATUS)},colProps:{span:8}}],U=l({name:"BpmForm"}),Et=l({...U,setup(e){const{t:o}=T(),{createMessage:u}=F(),[f,{reload:_}]=P({title:"流程表单列表",api:A,columns:V,formConfig:{labelWidth:120,schemas:L},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:o("common.action"),dataIndex:"action",fixed:"right"}});function h(){}function b(r){}async function g(r){await B(r.id),u.success(o("common.delSuccessText")),_()}return(r,$)=>{const I=x("a-button"),C=w("auth");return i(),y("div",null,[S(t(N),{onRegister:t(f)},{toolbar:a(()=>[k((i(),s(I,{type:"primary",preIcon:t(n).ADD,onClick:h},{default:a(()=>[E(M(t(o)("action.create")),1)]),_:1},8,["preIcon"])),[[C,["system:post:create"]]])]),bodyCell:a(({column:D,record:m})=>[D.key==="action"?(i(),s(t(O),{key:0,actions:[{icon:t(n).EDIT,label:t(o)("action.edit"),auth:"system:post:update",onClick:b.bind(null,m)},{icon:t(n).DELETE,color:"error",label:t(o)("action.delete"),auth:"system:post:delete",popConfirm:{title:t(o)("common.delMessage"),placement:"left",confirm:g.bind(null,m)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"])])}}});export{Et as default};