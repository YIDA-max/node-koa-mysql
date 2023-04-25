import{u,B as f}from"./index-b6b4562f.js";import{_ as b}from"./index-1ec106fd.js";import"./useForm-f3f06b26.js";import{u as g}from"./useTable-aaa095e4.js";import{a as s,o as I,c as h,w,e as S,u as a,ag as _}from"./index-4a8cc517.js";import"./index-878008b6.js";import{g as l}from"./index-0f1be806.js";import{u as n}from"./useRender-3355e2aa.js";import{g as C,D as T}from"./dict-9afd743e.js";import{a as x,c as P}from"./index-e4a1ad8d.js";const R=await l(),v=[{title:"数据源",dataIndex:"dataSourceConfigId",width:100,customRender:({text:e})=>{for(const t of R)if(e===t.id)return t.name;return"未知【"+e+"】"}},{title:"表名称",dataIndex:"tableName",width:200},{title:"表描述",dataIndex:"tableComment",width:120},{title:"实体",dataIndex:"className",width:200},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>n.renderDate(e)},{title:"更新时间",dataIndex:"updateTime",width:180,customRender:({text:e})=>n.renderDate(e)}],E=[{label:"表名称",field:"tableName",component:"Input",colProps:{span:8}},{label:"表描述",field:"tableComment",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}];C(T.COMMON_STATUS);const M=[{title:"表名称",dataIndex:"name",width:200},{title:"表描述",dataIndex:"comment",width:120}],N=[{label:"数据源",field:"dataSourceConfigId",component:"ApiSelect",defaultValue:0,componentProps:{api:()=>l(),labelField:"name",valueField:"id"},colProps:{span:8}},{label:"表名称",field:"name",component:"Input",colProps:{span:8}},{label:"表描述",field:"comment",component:"Input",colProps:{span:8}}],k=s({name:"InfraImportTableModal"}),U=s({...k,emits:["success","register"],setup(e,{emit:t}){const[r,{getSelectRowKeys:i}]=g({api:x,columns:M,formConfig:{labelWidth:80,schemas:N},rowSelection:{type:"checkbox"},rowKey:"name",useSearchForm:!0,pagination:!1,showTableSetting:!1,showIndexColumn:!1}),[c,{setModalProps:m,closeModal:d}]=u(async()=>{m({confirmLoading:!1})});async function p(){const o=await i();await P({dataSourceConfigId:0,tableNames:o}),d(),t("success")}return(o,D)=>(I(),h(a(f),_(o.$attrs,{width:800,onRegister:a(c),title:"导入",onOk:p}),{default:w(()=>[S(a(b),{onRegister:a(r)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{U as _,v as c,E as s};