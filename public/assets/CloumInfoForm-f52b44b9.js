import{_ as f}from"./index-1ec106fd.js";import"./useForm-f3f06b26.js";import{u as h}from"./useTable-aaa095e4.js";import{a as b,j as v,o as C,f as x,b as t,e as r,u as i,w as n,k as a,bB as I,bC as S,N as g}from"./index-4a8cc517.js";import"./index-878008b6.js";import{c as y}from"./data-ed8684e3.js";import{D as k}from"./index-529a9bc6.js";import"./index-6202a637.js";import"./tree-56b28626.js";import"./eagerComputed-80ba1157.js";import"./index-e995ff17.js";import"./index-0114aff3.js";import"./index-310f637e.js";import"./useSize-e99e0e82.js";import"./useWindowSizeFn-5faf2053.js";import"./useContentViewHeight-08ed5cff.js";import"./ArrowLeftOutlined-91a2b19b.js";import"./index-1c6e8fcc.js";import"./transButton-0a2e0cd4.js";import"./index-68db3d9c.js";import"./index-328db71b.js";import"./get-626e6e61.js";import"./index-b6b4562f.js";import"./FullscreenOutlined-b0e65115.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-1b6793d7.js";import"./fromPairs-e099444b.js";import"./index-326f1109.js";import"./index-1e0bc94a.js";import"./index-4af91251.js";import"./_baseIteratee-9c9af064.js";import"./scrollTo-8b7e49e7.js";import"./index-2a26e47c.js";import"./index-d5ec7d39.js";import"./dict-9afd743e.js";import"./index-1d60304b.js";import"./useRefs-116b486d.js";import"./index-87ae8662.js";import"./index-5a68e7a3.js";import"./uniqBy-4c5e11fd.js";import"./type-5b6209d3.js";import"./index-ea3b128d.js";const s=o=>(I("data-v-7d7c1135"),o=o(),S(),o),w={class:"step2"},F={class:"step2-table"},B={class:"step2-button"},N=s(()=>t("h3",null,"说明",-1)),R=s(()=>t("h4",null,"配置字段",-1)),T=s(()=>t("p",null," 配置表的字段类型，增删改查，字典等 ",-1)),V=b({__name:"CloumInfoForm",props:{columnsInfo:{type:Array,default:()=>null}},emits:["next","prev"],setup(o,{emit:m}){const[c,{getDataSource:l}]=h({columns:y,maxHeight:700,pagination:!1,useSearchForm:!1,showTableSetting:!1,showIndexColumn:!1});async function u(){m("prev")}async function _(){const e=l();m("next",e)}function d(e){e.onEdit?.(!0)}return(e,D)=>{const p=v("a-button");return C(),x("div",w,[t("div",F,[r(i(f),{dataSource:o.columnsInfo,onRegister:i(c),onRowClick:d},null,8,["dataSource","onRegister"])]),r(i(k)),t("div",B,[r(p,{onClick:u},{default:n(()=>[a("上一步")]),_:1}),r(p,{type:"primary",onClick:_},{default:n(()=>[a("下一步")]),_:1})]),N,R,T])}}});const go=g(V,[["__scopeId","data-v-7d7c1135"]]);export{go as default};