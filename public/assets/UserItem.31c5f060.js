import{_ as l,a as r,b as g,c as v,d as m,e as d,f as u,g as b,h as p,i as f,j as h,k as x,l as y,m as w,n as k,o as C,p as j,q as I}from"./visit-count.c22d678d.js";import{_ as N}from"./icon-remark.1929ee0a.js";import{a as U,b as B,l as E,x as A,o as L,c as S,e as s,t as a,i as V,A as _,j as q}from"./index.10ef4608.js";const D={class:"item flex p-4"},F={class:"icon flex-1 flex flex-col justify-between items-center"},M={class:"title whitespace-nowrap"},R=["src"],$={class:"data flex-1 flex justify-center"},z={class:"number block max-w-24 overflow-hidden overflow-ellipsis whitespace-nowrap"},G=B({__name:"UserItem",props:{title:{type:String,default:"\u6CE8\u518C\u7528\u6237"},number:{type:Number,default:0}},setup(e){const t=e,n=o=>new URL({"../../../../assets/icons/download-count.svg":l,"../../../../assets/icons/dynamic-avatar-1.svg":r,"../../../../assets/icons/dynamic-avatar-2.svg":g,"../../../../assets/icons/dynamic-avatar-3.svg":v,"../../../../assets/icons/dynamic-avatar-4.svg":m,"../../../../assets/icons/dynamic-avatar-5.svg":d,"../../../../assets/icons/dynamic-avatar-6.svg":u,"../../../../assets/icons/icon-remark.svg":N,"../../../../assets/icons/left-active.svg":b,"../../../../assets/icons/left.svg":p,"../../../../assets/icons/moon.svg":f,"../../../../assets/icons/right-active.svg":h,"../../../../assets/icons/right.svg":x,"../../../../assets/icons/sun.svg":y,"../../../../assets/icons/test.svg":w,"../../../../assets/icons/total-sales.svg":k,"../../../../assets/icons/transaction.svg":C,"../../../../assets/icons/user-icon.svg":j,"../../../../assets/icons/visit-count.svg":I}[`../../../../assets/icons/${o}`],self.location).href,c=E(()=>t.number>9999?Math.floor(t.number/1e3)/10+"\u4E07":t.number);return(o,H)=>{const i=A("a-tooltip");return L(),S("div",D,[s("div",F,[s("span",M,a(e.title),1),s("img",{src:n("user-icon.svg")},null,8,R)]),s("div",$,[V(i,{placement:"topLeft"},{title:_(()=>[s("span",null,a(e.number),1)]),default:_(()=>[s("span",z,a(q(c)),1)]),_:1})])])}}});var P=U(G,[["__scopeId","data-v-f60dd9b8"]]);export{P as default};
