import{u as I,B as h}from"./index-b6b4562f.js";import{u as g,a as w}from"./useForm-f3f06b26.js";import"./index-1ec106fd.js";import{u as q}from"./useRender-3355e2aa.js";import{g as x,u as _,c as b}from"./index-525ecc99.js";import{a as r,H as M,u as t,o as R,c as A,w as k,e as S,ag as y}from"./index-4a8cc517.js";const O=[{title:"岗位编号",dataIndex:"id",width:100},{title:"名称",dataIndex:"name",width:180},{title:"微信号",dataIndex:"account",width:100},{title:"appId",dataIndex:"appId",width:120},{title:"服务器地址(URL)",dataIndex:"appIdURL",width:120,customRender:({record:a})=>"http://服务端地址/mp/open/"+a.appId},{title:"二维码",dataIndex:"qrCodeUrl",width:180,customRender:({text:a})=>q.renderImg(a)},{title:"备注",dataIndex:"remark",width:180}],V=[{label:"名称",field:"name",component:"Input",colProps:{span:8}}],B=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"名称",field:"name",required:!0,component:"Input"},{label:"微信号",field:"account",helpMessage:"在微信公众平台（mp.weixin.qq.com）的菜单 [设置与开发 - 公众号设置 - 账号详情] 中能找到「微信号」",required:!0,component:"Input"},{label:"公众号 appId",field:"appId",helpMessage:"在微信公众平台（mp.weixin.qq.com）的菜单 [设置与开发 - 公众号设置 - 基本设置] 中能找到「开发者ID(AppID)」",required:!0,component:"Input"},{label:"公众号 appSecret",field:"appSecret",helpMessage:"在微信公众平台（mp.weixin.qq.com）的菜单 [设置与开发 - 公众号设置 - 基本设置] 中能找到「开发者密码(AppSecret)」",required:!0,component:"Input"},{label:"公众号token",field:"token",required:!0,component:"Input"},{label:"消息加解密密钥",field:"aesKey",required:!0,component:"Input"},{label:"备注",field:"remark",component:"InputTextArea"}],C=r({name:"MpAccountModal"}),$=r({...C,emits:["success","register"],setup(a,{emit:i}){const o=M(!0),[l,{setFieldsValue:c,resetFields:p,validate:d}]=g({labelWidth:120,baseColProps:{span:24},schemas:B,showActionButtonGroup:!1,actionColOptions:{span:23}}),[u,{setModalProps:n,closeModal:m}]=I(async e=>{if(p(),n({confirmLoading:!1}),o.value=!!e?.isUpdate,t(o)){const s=await x(e.record.id);c({...s})}});async function f(){try{const e=await d();n({confirmLoading:!0}),t(o)?await _(e):await b(e),m(),i("success")}finally{n({confirmLoading:!1})}}return(e,s)=>(R(),A(t(h),y(e.$attrs,{onRegister:t(u),title:o.value?"编辑":"新增",onOk:f}),{default:k(()=>[S(t(w),{onRegister:t(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{$ as _,O as c,V as s};