import{b as c,u as d,r as a,av as m,i as t,dl as f,ab as b,bO as v}from"./index.10ef4608.js";import C from"./CustomConfirmModal.a792e716.js";import l from"./upDataBasic.dc9c88a0.js";import"./modal-error.7cada6d5.js";/* empty css               *//* empty css                *//* empty css                */import"./spark-md5.2cc5764b.js";import"./updata.d7bd895d.js";import"./useSetFrom.689ec4a2.js";function y(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!v(e)}var _=c({name:"",components:{upDataBasic:l},props:{record:{type:Object,default:()=>{}}},emits:["upovered"],setup(e,{slots:j,emit:n}){const{t:s}=d(),o=a(!0);a(null);const u=()=>{o.value=!1},{currents:k,indexs:O,record:i}=m(e);return()=>{let r;return t("div",{class:""},[t(f,{to:"body"},{default:()=>[t(C,{ref:"CustomConfirmModalRef",visible:o.value,submitCallback:()=>{o.value=!0},cancelCallback:()=>{o.value=!0}},{context:()=>t(l,{onUpovered:p=>{n("upovered",p)},record:i.value},null)})]}),t(b,{onclick:()=>{u()},type:"link"},y(r=s("rdm.dataChange.reUpload"))?r:{default:()=>[r]})])}}});export{_ as default};
