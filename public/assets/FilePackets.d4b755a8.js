import{u as b,B as w}from"./useForm.98d7b8ca.js";import{a as I,b as k,u as A,r as F,q as N,o as S,c as B,e as p,t as c,i as n,A as m,j as a,X as C,D as P,ab as E,p as R,k as V}from"./index.10ef4608.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";const j=i=>(R("data-v-ee8e33c0"),i=i(),V(),i),q={style:{display:"flex",width:"100%"}},D=j(()=>p("div",{style:{width:"10%",textAlign:"center",margin:"10px 0px 0px 0px"}},null,-1)),M={style:{width:"10%",textAlign:"center",display:"flex",justifyContent:"center",margin:"10px 0px 0px 0px"}},T={style:{width:"55px",height:"30px",borderRadius:"5px",lineHeight:"30px",textAlign:"center",position:"relative",right:"16px"}},U={style:{width:"70%",margin:"10px 0px 0px 0px"}},G={style:{width:"10%",textAlign:"center",margin:"10px 0px 0px 0px",position:"relative",right:"10px"}},H=k({__name:"FilePackets",props:{arr:Array,serial:Number,SequencingType:String},emits:["delete"],setup(i,{expose:u,emit:x}){const e=i,{t:_}=A(),h=[{field:"groupName",component:"Input",label:"",colProps:{span:6,offset:3},componentProps:{style:{borderRadius:"5px",border:"1px solid #999999",height:"30px"},placeholder:" "}},{field:"fileName",component:"Input",label:"",slot:"fileName",colProps:{span:11,offset:3}}],d=F([]),[f,{validate:g,setFieldsValue:v}]=b({labelWidth:120,schemas:h,showActionButtonGroup:!1}),y=s=>{x("delete",s)};return N(()=>{var s;(s=e.arr)==null||s.forEach((t,r)=>{if(t){const o={value:"",label:""};o.value=t,o.label=t,d.value.push(o)}})}),u({validate:g,setFieldsValue:v}),(s,t)=>(S(),B("div",q,[D,p("div",M,[p("div",T,c((e==null?void 0:e.serial)+1),1)]),p("div",U,[n(a(w),{onRegister:a(f),style:{width:"100%"}},{fileName:m(({model:r,field:o})=>[n(a(C),{ref:"select",value:r[o],"onUpdate:value":l=>r[o]=l,allowClear:"",mode:"multiple",options:d.value,getPopupContainer:l=>l.parentElement},null,8,["value","onUpdate:value","options","getPopupContainer"])]),_:1},8,["onRegister"])]),p("div",G,[n(a(E),{onClick:t[0]||(t[0]=()=>{y(e==null?void 0:e.serial)}),type:"link"},{default:m(()=>[P(c(a(_)("AllMessage.delete")),1)]),_:1})])]))}});var de=I(H,[["__scopeId","data-v-ee8e33c0"]]);export{de as default};
