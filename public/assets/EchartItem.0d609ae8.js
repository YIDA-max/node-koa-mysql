import{a as w,b as D,u as I,cJ as M,r as A,a6 as N,x as P,o as n,c as g,e as a,t as o,j as t,f as u,U as _,A as v,D as x,i as m,dc as R}from"./index.10ef4608.js";import{u as h}from"./index.c8f8ec06.js";import{_ as j}from"./DetailModal.f5e2a05d.js";import O from"./ExmpaleModal.6df6d888.js";import{u as V}from"./casual.c3003c80.js";import{g as $}from"./index.f32f4dcd.js";import"./useAttrs.1d381a3e.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./index.968d275e.js";import"./onMountedOrActivated.0d13b2a6.js";/* empty css               */const L={class:"item mb-4"},S={class:"header"},U={class:"text-base"},G={class:"context mt-4 text-sm"},H={class:"flex flex-col text-right"},J={class:"flex justify-center"},Q={class:"box"},T=D({__name:"EchartItem",props:{item:{type:Object,default:()=>({})}},setup(i){const d=i,{t:l}=I(),{hasPermission:r}=M(),y=V(),s=A({absolute:!1,loading:!1,tip:l("AllMessage.moaApiLodaing")}),b=N(),[B,{openModal:E}]=h(),[k,{openModal:C}]=h();function c(p){s.value.loading=!0,$(d.item.id).then(e=>{p==="detail"?C(!0,{payload:e}):E(!0,{payload:e.example})}).catch(e=>{console.log(e)}).finally(()=>{s.value.loading=!1})}return(p,e)=>{const f=P("CustomButton");return n(),g("div",L,[a("div",S,[a("h3",U,o(i.item.technologicalProcessName),1)]),a("div",G,o(i.item.introduce),1),a("div",H,[t(r)(["moa:flow:view"])?(n(),g("a",{key:0,class:"my-2.5",href:"javascript:void(0);",onClick:e[0]||(e[0]=F=>c("detail"))},o(t(l)("moa.api.Details"))+">>",1)):u("v-if",!0),a("div",J,[t(r)(["moa:flow:exam"])?(n(),_(f,{key:0,btnStyle:{width:"120px",padding:0,marginRight:"20px"},onClick:e[1]||(e[1]=F=>c("example"))},{default:v(()=>[x(o(t(l)("moa.api.example")),1)]),_:1})):u("v-if",!0),t(r)(["moa:flow:use"])?(n(),_(f,{key:1,btnStyle:{width:"120px",padding:0},onClick:e[2]||(e[2]=()=>{t(y).usemoaapicode=d.item.code,t(b)("/moa/ats")})},{default:v(()=>[x(o(t(l)("moa.api.bringIntoUse")),1)]),_:1})):u("v-if",!0)])]),a("div",Q,o(i.item.oneLevel),1),m(j,{onRegister:t(k)},null,8,["onRegister"]),m(O,{onRegister:t(B)},null,8,["onRegister"]),u(" \u67E5\u770B\u6216\u7F16\u8F91\u7684\u65F6\u5019\u9700\u8981loading \u56E0\u4E3A\u6570\u636E\u53EF\u80FD\u4F1A\u5F88\u5927 \u9020\u6210\u591A\u6B21\u70B9\u51FB "),m(t(R),{loading:s.value.loading,absolute:s.value.absolute,tip:s.value.tip},null,8,["loading","absolute","tip"])])}}});var ie=w(T,[["__scopeId","data-v-7867761e"]]);export{ie as default};
