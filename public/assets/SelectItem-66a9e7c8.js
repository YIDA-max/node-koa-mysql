import{a as n,T as l,B as p,o as c,f as m,b as d,af as u,e as f,ag as _,u as a,cQ as g,ad as b,N as y}from"./index-4a8cc517.js";import{b as v}from"./index-597f6afb.js";import"./index-e4cbcc9e.js";import"./createAsyncComponent-73fa97ec.js";import"./FullscreenOutlined-b0e65115.js";import"./index-7e55fa59.js";import"./useWindowSizeFn-5faf2053.js";import"./useContentViewHeight-08ed5cff.js";import"./uniqBy-4c5e11fd.js";import"./_baseIteratee-9c9af064.js";import"./get-626e6e61.js";import"./index-dd54262d.js";import"./useRefs-116b486d.js";import"./RedoOutlined-1b6793d7.js";import"./lock-b913e887.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-529a9bc6.js";const S=n({name:"SelectItem"}),B=n({...S,props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(t){const e=t,{prefixCls:o}=l("setting-select-item"),i=p(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function r(s){e.event&&v(e.event,s)}return(s,C)=>(c(),m("div",{class:b(a(o))},[d("span",null,u(t.title),1),f(a(g),_(a(i),{class:`${a(o)}-select`,onChange:r,disabled:t.disabled,options:t.options}),null,16,["class","onChange","disabled","options"])],2))}});const w=y(B,[["__scopeId","data-v-ecdb438a"]]);export{w as default};
