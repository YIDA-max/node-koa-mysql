import{u as w,B as I}from"./useForm.98d7b8ca.js";import{a as k,b as A,u as F,a5 as N,r as B,q as C,o as S,c as P,e as p,t as m,i as d,A as u,j as t,X as R,D as E,ab as V,p as j,k as D}from"./index.10ef4608.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";const M=s=>(j("data-v-a77a9858"),s=s(),D(),s),U={style:{display:"flex",width:"100%"}},q=M(()=>p("div",{style:{width:"10%",textAlign:"center",margin:"10px 0px 0px 0px"}},null,-1)),G={style:{width:"10%",textAlign:"center",display:"flex",justifyContent:"center",margin:"10px 0px 0px 0px"}},H={style:{width:"55px",height:"30px",borderRadius:"5px",lineHeight:"30px",textAlign:"center",position:"relative",right:"16px"}},O={style:{width:"70%",margin:"10px 0px 0px 0px"}},T={style:{width:"10%",textAlign:"center",margin:"10px 0px 0px 0px",position:"relative",right:"10px"}},W=A({__name:"FilePackets",props:{arr:Array,serial:Number},emits:["delete"],setup(s,{expose:x,emit:_}){const e=s,{t:h}=F(),r=N(),f=[{field:"groupName",component:"Input",label:"",colProps:{span:6,offset:3},componentProps:{style:{borderRadius:"5px",border:"1px solid #999999",height:"30px"},placeholder:" "}},{field:"fileName",component:"Input",label:"",slot:"fileName",colProps:{span:11,offset:3}}],c=B([]),[v,{validate:g,setFieldsValue:b}]=w({disabled:r.params.text==="view",labelWidth:120,schemas:f,showActionButtonGroup:!1}),y=i=>{_("delete",i)};return C(()=>{var i;(i=e.arr)==null||i.forEach((a,l)=>{if(a){const o={value:"",label:""};o.value=a,o.label=a,c.value.push(o)}})}),x({validate:g,setFieldsValue:b}),(i,a)=>(S(),P("div",U,[q,p("div",G,[p("div",H,m((e==null?void 0:e.serial)+1),1)]),p("div",O,[d(t(I),{onRegister:t(v),style:{width:"100%"}},{fileName:u(({model:l,field:o})=>[d(t(R),{ref:"select",value:l[o],"onUpdate:value":n=>l[o]=n,allowClear:"",mode:"multiple",options:c.value,getPopupContainer:n=>n.parentElement,disabled:t(r).params.text==="view"},null,8,["value","onUpdate:value","options","getPopupContainer","disabled"])]),_:1},8,["onRegister"])]),p("div",T,[d(t(V),{disabled:t(r).params.text==="view",onClick:a[0]||(a[0]=()=>{y(e==null?void 0:e.serial)}),type:"link"},{default:u(()=>[E(m(t(h)("AllMessage.delete")),1)]),_:1},8,["disabled"])])]))}});var me=k(W,[["__scopeId","data-v-a77a9858"]]);export{me as default};
