import{a as r,i as a,o as n,f as p,e as s,u as o}from"./index-4a8cc517.js";import{_ as c}from"./index-1ec106fd.js";import"./useForm-f3f06b26.js";import{u as d}from"./useTable-aaa095e4.js";import"./index-878008b6.js";import{a as l}from"./index-f2fcf44a.js";import{u as e}from"./useRender-3355e2aa.js";import"./index-6202a637.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useWindowSizeFn-5faf2053.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./get-626e6e61.js";import"./index-b6b4562f.js";import"./FullscreenOutlined-b0e65115.js";import"./index-529a9bc6.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./fromPairs-e099444b.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./dict-9afd743e.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";const u=[{title:"任务编号",dataIndex:"id",width:100},{title:"任务名称",dataIndex:"name",width:180},{title:"所属流程",dataIndex:"processInstance.name",width:180},{title:"流程发起人",dataIndex:"processInstance.startUserNickname",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:t})=>e.renderDate(t)},{title:"状态",dataIndex:"suspensionState",width:180,customRender:({text:t})=>{if(t===1)return e.renderTag("激活","success");if(t===2)return e.renderTag("挂起","warning")}}],f=[{label:"流程名",field:"name",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],h=r({name:"BpmTodo"}),mt=r({...h,setup(t){const{t:i}=a(),[m]=d({title:"审批列表",api:l,columns:u,formConfig:{labelWidth:120,schemas:f},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:i("common.action"),dataIndex:"action",fixed:"right"}});return(_,g)=>(n(),p("div",null,[s(o(c),{onRegister:o(m)},null,8,["onRegister"])]))}});export{mt as default};
