import{b as f,r as v,w as m,o as n,c as r,i as p,A as i,aJ as s,B as g,j as a,e as y,U as C,dY as w,y as h,z as $,am as d,aM as B,f as _,ar as k,bv as b}from"./index.10ef4608.js";import z from"./CollapseHeader.d816b7f1.js";const E={class:"p-2"},R=f({__name:"CollapseContainer",props:{title:{type:String,default:""},loading:{type:Boolean},canExpan:{type:Boolean,default:!0},helpMessage:{type:[Array,String],default:""},triggerWindowResize:{type:Boolean},lazyTime:{type:Number,default:0}},setup(o){const c=o,t=v(!0),{prefixCls:l}=m("collapse-container");function u(){t.value=!t.value,c.triggerWindowResize&&k(b,200)}return(e,S)=>(n(),r("div",{class:d(a(l))},[p(z,g(e.$props,{prefixCls:a(l),show:t.value,onExpand:u}),{title:i(()=>[s(e.$slots,"title")]),action:i(()=>[s(e.$slots,"action")]),actiontwo:i(()=>[s(e.$slots,"actiontwo")]),_:3},16,["prefixCls","show"]),y("div",E,[p(a(B),{enable:o.canExpan},{default:i(()=>[o.loading?(n(),C(a(w),{key:0,active:o.loading},null,8,["active"])):h((n(),r("div",{key:1,class:d(`${a(l)}__body`)},[s(e.$slots,"default")],2)),[[$,t.value]])]),_:3},8,["enable"])]),e.$slots.footer?(n(),r("div",{key:0,class:d(`${a(l)}__footer`)},[s(e.$slots,"footer")],2)):_("v-if",!0)],2))}});export{R as default};
