import{a as i,a9 as l,H as e,K as m,bc as f,L as u,o as d,f as p,b as h,aD as _,bA as g}from"./index-4a8cc517.js";const v=["src"],y=i({__name:"IFrame",props:{src:l.string.def("")},setup(a){const o=a,t=e(!0),s=e(""),n=e(null),r=()=>{s.value=document.documentElement.clientHeight-94.5+"px",t.value=!1};return m(()=>{setTimeout(()=>{r()},300)}),(b,I)=>{const c=f("loading");return u((d(),p("div",{style:_("height:"+s.value)},[h("iframe",{src:o.src,style:{width:"100%",height:"100%"},frameborder:"no",scrolling:"auto",ref_key:"frameRef",ref:n},null,8,v)],4)),[[c,t.value]])}}}),w=g(y);export{w as I};