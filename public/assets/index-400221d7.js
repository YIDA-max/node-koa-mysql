import{bD as d,a as u,i as g,j as w,o as s,f as b,e as l,w as a,u as e,I as c,k as B,c as C,h as T,l as k}from"./index-4a8cc517.js";import{_ as y}from"./index-1ec106fd.js";import{_ as M}from"./useForm-f3f06b26.js";import{u as R}from"./useTable-aaa095e4.js";import"./index-878008b6.js";import{u as p}from"./useRender-3355e2aa.js";import"./index-6202a637.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useWindowSizeFn-5faf2053.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./get-626e6e61.js";import"./index-b6b4562f.js";import"./FullscreenOutlined-b0e65115.js";import"./index-529a9bc6.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./fromPairs-e099444b.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./dict-9afd743e.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";function F(t){return d.get({url:"/infra/file/page",params:t})}function E(t){return d.delete({url:"/infra/file/delete?id="+t})}const P=[{title:"日志编号",dataIndex:"id",width:100},{title:"文件名",dataIndex:"module",width:200},{title:"文件路径",dataIndex:"path",width:250},{title:"文件 URL",dataIndex:"url",width:300},{title:"文件路径",dataIndex:"path",width:180},{title:"文件大小",dataIndex:"size",width:180,customRender:({text:t})=>{const o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=parseFloat(t),r=Math.floor(Math.log(i)/Math.log(1024));return(i/Math.pow(1024,r)).toFixed(2)+" "+o[r]}},{title:"文件类型",dataIndex:"type",width:180},{title:"文件内容",dataIndex:"content",width:180,customRender:({text:t})=>p.renderImg(t)},{title:"上传时间",dataIndex:"createTime",width:180,customRender:({text:t})=>p.renderDate(t)}],D=[{label:"文件路径",field:"path",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],S=u({name:"InfraFile"}),bt=u({...S,setup(t){const{t:o}=g(),{createMessage:i}=k(),[r,{reload:n}]=R({title:"文件列表",api:F,columns:P,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:o("common.action"),dataIndex:"action",fixed:"right"}});function f(){}async function h(m){await E(m.id),i.success(o("common.delSuccessText")),n()}return(m,z)=>{const _=w("a-button");return s(),b("div",null,[l(e(y),{onRegister:e(r)},{toolbar:a(()=>[l(_,{type:"primary",preIcon:e(c).UPLOAD,onClick:f},{default:a(()=>[B(" 上传文件 ")]),_:1},8,["preIcon"])]),bodyCell:a(({column:x,record:I})=>[x.key==="action"?(s(),C(e(M),{key:0,actions:[{icon:e(c).DELETE,color:"error",label:e(o)("action.delete"),auth:"infra:file:delete",popConfirm:{title:e(o)("common.delMessage"),placement:"left",confirm:h.bind(null,I)}}]},null,8,["actions"])):T("",!0)]),_:1},8,["onRegister"])])}}});export{bt as default};