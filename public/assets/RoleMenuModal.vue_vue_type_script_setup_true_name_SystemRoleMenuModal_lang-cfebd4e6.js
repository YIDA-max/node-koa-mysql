import{u as M,B as y}from"./index-b6b4562f.js";import{u as b,a as k}from"./useForm-f3f06b26.js";import{m as B}from"./role.data-ef05ba06.js";import{g as F,u as S,c as C}from"./index-7210d183.js";import{_ as U}from"./index-0737cab3.js";import{l as D}from"./index-ea3b128d.js";import{h as I}from"./tree-56b28626.js";import{l as L}from"./index-50aba5b9.js";import{a as u,H as l,u as a,o as P,c as $,w as c,e as m,ag as x}from"./index-4a8cc517.js";const N=u({name:"SystemRoleMenuModal"}),E=u({...N,emits:["success","register"],setup(O,{emit:d}){const t=l(!0),r=l([]),[p,{setFieldsValue:f,resetFields:_,validate:g}]=b({labelWidth:120,baseColProps:{span:24},schemas:B,showActionButtonGroup:!1,actionColOptions:{span:23}}),[h,{setModalProps:i,closeModal:v}]=M(async e=>{if(_(),i({confirmLoading:!1}),a(r).length===0){const s=await D();r.value=I(s,"id")}if(t.value=!!e?.isUpdate,a(t)){const s=await F(e.record.id),o=await L(e.record.id);s.menuIds=o,f({...s})}});async function R(){try{const e=await g();i({confirmLoading:!0}),a(t)?await S(e):await C(e),v(),d("success")}finally{i({confirmLoading:!1})}}return(e,s)=>(P(),$(a(y),x(e.$attrs,{onRegister:a(h),title:t.value?"编辑":"新增",onOk:R}),{default:c(()=>[m(a(k),{onRegister:a(p)},{menuIds:c(({model:o,field:n})=>[m(a(U),{value:o[n],"onUpdate:value":w=>o[n]=w,treeData:r.value,fieldNames:{title:"name",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{E as _};
