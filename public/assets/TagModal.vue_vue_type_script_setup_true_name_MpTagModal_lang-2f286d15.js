import{u as g,B as h}from"./index-b6b4562f.js";import{u as _,a as w}from"./useForm-f3f06b26.js";import{f as I}from"./index-525ecc99.js";import"./index-1ec106fd.js";import{u as b}from"./useRender-3355e2aa.js";import{a as F,u as M,c as x}from"./index-9da8f773.js";import{a as i,H as P,u as a,o as R,c as v,w as B,e as S,ag as T}from"./index-4a8cc517.js";const q=[{title:"编号",dataIndex:"id",width:100},{title:"标签名称",dataIndex:"name",width:180},{title:"粉丝数",dataIndex:"count",width:100},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:o})=>b.renderDate(o)}],D=[{label:"公众号",field:"accountId",component:"ApiSelect",componentProps:{api:()=>I(),labelField:"name",valueField:"id"},colProps:{span:8}},{label:"标签名称",field:"name",component:"Input",colProps:{span:8}}],y=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"标签名称",field:"name",required:!0,component:"Input"}],C=i({name:"MpTagModal"}),G=i({...C,emits:["success","register"],setup(o,{emit:r}){const t=P(!0),[l,{setFieldsValue:c,resetFields:d,validate:m}]=_({labelWidth:120,baseColProps:{span:24},schemas:y,showActionButtonGroup:!1,actionColOptions:{span:23}}),[p,{setModalProps:s,closeModal:u}]=g(async e=>{if(d(),s({confirmLoading:!1}),t.value=!!e?.isUpdate,a(t)){const n=await F(e.record.id);c({...n})}});async function f(){try{const e=await m();s({confirmLoading:!0}),a(t)?await M(e):await x(e),u(),r("success")}finally{s({confirmLoading:!1})}}return(e,n)=>(R(),v(a(h),T(e.$attrs,{onRegister:a(p),title:t.value?"编辑":"新增",onOk:f}),{default:B(()=>[S(a(w),{onRegister:a(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{G as _,q as c,D as s};
