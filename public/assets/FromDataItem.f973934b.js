var m=(n,c,e)=>new Promise((a,p)=>{var l=t=>{try{r(e.next(t))}catch(o){p(o)}},i=t=>{try{r(e.throw(t))}catch(o){p(o)}},r=t=>t.done?a(t.value):Promise.resolve(t.value).then(l,i);r((e=e.apply(n,c)).next())});import{a as h,b as y,q as A,o as F,c as b,i as f,A as v,e as C,t as V,j as d,cM as g}from"./index.10ef4608.js";/* empty css                *//* empty css               *//* empty css               */import{u as B,B as P}from"./useForm.98d7b8ca.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";const x=y({__name:"FromDataItem",props:{itemArr:{type:Object,required:!0},itemCopy:{type:Object,required:!0}},setup(n,{expose:c}){var i;const e=n,a=(i=e==null?void 0:e.itemArr)==null?void 0:i.map((r,t)=>{const o=[];return Object.keys(r.Parameters).forEach(s=>{o.push({field:`${s}`,component:Array.isArray(e.itemCopy[t].Parameters[s])?"Select":"Input",label:`${s}`,defaultValue:`${r.Parameters[s]}`,colProps:{span:9,offset:2},componentProps:()=>Array.isArray(e.itemCopy[t].Parameters[s])?{options:e.itemCopy[t].Parameters[s].map(u=>({value:u,lable:u,key:u})),size:"large",placeholder:" "}:{placeholder:" "}})}),B({schemas:o,labelWidth:200})}),p=()=>m(this,null,function*(){const r=[];return a==null||a.forEach((t,o)=>m(this,null,function*(){const _=yield t[1].validate();r.push(_)})),r}),l=r=>{a==null||a.forEach((t,o)=>m(this,null,function*(){t[1].setFieldsValue(r)}))};return A(()=>{}),c({getValue:p,setValue:l}),(r,t)=>(F(),b("div",null,[f(d(g),{title:e.itemArr[0].Version},{default:v(()=>[C("h2",null,"\u8F6F\u4EF6:"+V(e.itemArr[0].Software),1),f(d(P),{onRegister:d(a)[0],showActionButtonGroup:!1},null,8,["onRegister"])]),_:1},8,["title"])]))}});var Z=h(x,[["__scopeId","data-v-10b8d507"]]);export{Z as default};
