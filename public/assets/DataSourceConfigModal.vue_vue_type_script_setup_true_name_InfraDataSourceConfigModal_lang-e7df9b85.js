import{u as g,B as w}from"./index-b6b4562f.js";import{u as h,a as _}from"./useForm-f3f06b26.js";import"./index-1ec106fd.js";import{u as I}from"./useRender-3355e2aa.js";import{a as b,u as C,c as x}from"./index-0f1be806.js";import{a as n,H as M,u as t,o as R,c as S,w as B,e as D,ag as q}from"./index-4a8cc517.js";const V=[{title:"主键编号",dataIndex:"id",width:100},{title:"数据源名称",dataIndex:"name",width:180},{title:"数据源连接",dataIndex:"url",width:100},{title:"用户名",dataIndex:"username",width:120},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:s})=>I.renderDate(s)}],v=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"数据源名称",field:"name",required:!0,component:"Input"},{label:"数据源连接",field:"url",required:!0,component:"Input"},{label:"用户名",field:"username",required:!0,component:"Input"},{label:"密码",field:"password",required:!0,component:"Input"}],y=n({name:"InfraDataSourceConfigModal"}),$=n({...y,emits:["success","register"],setup(s,{emit:i}){const a=M(!0),[l,{setFieldsValue:d,resetFields:u,validate:c}]=h({labelWidth:120,baseColProps:{span:24},schemas:v,showActionButtonGroup:!1,actionColOptions:{span:23}}),[m,{setModalProps:o,closeModal:f}]=g(async e=>{if(u(),o({confirmLoading:!1}),a.value=!!e?.isUpdate,t(a)){const r=await b(e.record.id);d({...r})}});async function p(){try{const e=await c();o({confirmLoading:!0}),t(a)?await C(e):await x(e),f(),i("success")}finally{o({confirmLoading:!1})}}return(e,r)=>(R(),S(t(w),q(e.$attrs,{onRegister:t(m),title:a.value?"编辑":"新增",onOk:p}),{default:B(()=>[D(t(_),{onRegister:t(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{$ as _,V as c};
