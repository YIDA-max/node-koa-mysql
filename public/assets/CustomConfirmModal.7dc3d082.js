import{_ as p,a as h}from"./modal-error.7cada6d5.js";import{a as g,b as C,r as E,q as F,o as k,c as B,i as l,A as n,y as m,z as _,e as t,f as o,aJ as d,t as f,D as i,d3 as b,bh as D,ao as y,p as S,k as A}from"./index.10ef4608.js";const x=e=>(S("data-v-119242b0"),e=e(),A(),e),w={class:"d-modal-container"},$={class:"b-modal-header"},N={class:"b-modal-header-title"},I=["src"],M={class:"b-modal-content"},V=["src"],T=x(()=>t("br",null,null,-1)),L={class:"b-modal-footer"},q={class:"b-modal-btn"},z=i("\u53D6\u6D88"),J=i("\u786E\u5B9A"),R={class:"mask"},U=C({__name:"CustomConfirmModal",props:{fileName:{type:String,default:"modal-error.svg"},title:{type:String,default:"\u63D0\u793A"},content:{type:String,default:"\u786E\u8BA4\u5220\u9664\u6B64\u6570\u636E"},cancelCallback:{type:Function,default:()=>({})},submitCallback:{type:Function,default:()=>({})}},setup(e,{expose:v}){const u=E(!1);F(()=>{setTimeout(()=>{u.value=!1},10)}),v({isShow:u});const c=a=>new URL({"../../../../../assets/custom-modal/modal-close.svg":p,"../../../../../assets/custom-modal/modal-error.svg":h}[`../../../../../assets/custom-modal/${a}`],self.location).href;return(a,s)=>(k(),B(y,null,[l(D,{name:"modal-fade",persisted:""},{default:n(()=>[m(t("div",w,[o(" \u5934\u90E8\u6807\u9898 "),t("div",$,[t("div",N,[o("\u5177\u540D\u63D2\u69FD\u5185\u5BB9\u4F18\u5148\u7EA7\u4F1A\u9AD8\u4E8E props"),d(a.$slots,"title",{},()=>[t("span",null,f(e.title),1)],!0)]),t("img",{class:"b-modal-header-close",src:c("modal-close.svg"),alt:"close",onClick:s[0]||(s[0]=r=>e.cancelCallback())},null,8,I)]),o(" \u5185\u5BB9\u533A\u57DF "),t("div",M,[d(a.$slots,"context",{},()=>[o(" \u9700\u8981\u663E\u793A\u7684\u56FE\u7247\u653E\u5230../../assets/custom-modal/\u8DEF\u5F84\u4E0B \u7136\u540E\u4F20\u9012\u6587\u4EF6\u540D\u5B57\u5373\u53EF "),t("img",{style:{width:"30px",height:"30px","margin-right":"20px"},class:"b-modal-header-close",src:c(e.fileName),alt:"error"},null,8,V),i(" "+f(e.content)+" ",1),T],!0)]),o(" \u5E95\u90E8\u6309\u94AE "),t("div",L,[t("div",q,[d(a.$slots,"footer",{},()=>[l(b,{btnStyle:{backgroundColor:"#fff",border:"1px solid #666666",color:"#202020"},onClick:s[1]||(s[1]=r=>e.cancelCallback())},{default:n(()=>[z]),_:1}),l(b,{onClick:s[2]||(s[2]=r=>e.submitCallback()),btnStyle:{marginLeft:"20px"}},{default:n(()=>[J]),_:1})],!0)])])],512),[[_,u.value]])]),_:3}),o(" \u906E\u7F69\u5C42 "),m(t("div",R,null,512),[[_,u.value]])],64))}});var H=g(U,[["__scopeId","data-v-119242b0"]]);export{H as default};
