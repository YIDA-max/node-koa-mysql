import{b as i,q as o,o as l,U as r,A as s,e as t,f as m,i as p,t as a,j as u,cM as c,af as d}from"./index.10ef4608.js";/* empty css                *//* empty css               *//* empty css               */const C={style:{marginBottom:"10px"}},N=i({__name:"ListCard",props:{items:Object,index:Number},setup(n){const e=n;return o(()=>{}),(f,h)=>(l(),r(u(d),{spinning:!1},{default:s(()=>[t("div",C,[m(` <CollapseContainer>\r
        <template #title>\r
          &nbsp; <h2>\u6587\u4EF6\u540D\u79F0:{{ props?.item?.fileRealName }} </h2></template\r
        >\r
        <template #action> </template>\r
      </CollapseContainer> `),p(u(c),{hoverable:!0,style:{}},{default:s(()=>[t("div",null,"\u6587\u4EF6\u540D\u79F0:"+a(e.items.fileRealName),1),t("div",null,"\u6587\u4EF6\u5927\u5C0F: "+a(Math.trunc(e.items.fileSize/1024/1024))+" MB",1),t("div",null,"\u6587\u4EF6\u72B6\u6001: "+a(e.items.status=="suspend"?"\u5931\u8D25":e.items.status=="done"||Math.ceil(e.items.completeChunks/e.items.totalChunks*100)==100?"\u4E0A\u4F20\u5B8C\u6210":e.items.status=="uploading"?"\u4E0A\u4F20\u4E2D":"\u672A\u77E5\u60C5\u51B5"),1)]),_:1})])]),_:1}))}});export{N as default};
