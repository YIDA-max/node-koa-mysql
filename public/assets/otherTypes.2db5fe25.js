var r=(A,c,s)=>new Promise((m,n)=>{var g=t=>{try{i(s.next(t))}catch(e){n(e)}},f=t=>{try{i(s.throw(t))}catch(e){n(e)}},i=t=>t.done?m(t.value):Promise.resolve(t.value).then(g,f);i((s=s.apply(A,c)).next())});import{b as S,av as D,x as F,o as h,c as y,i as u,A as l,e as p,aL as E,f as x,t as _,j as d,ab as B,y as N,z as R,D as b}from"./index.10ef4608.js";import{u as U,B as V}from"./useTable.a143d40c.js";import"./TableAction.edf9a202.js";import{b as C}from"./homePage.249d27b4.js";import{d as k}from"./download.66a6d137.js";import G from"./upData.6bb6370e.js";import"./useForm.98d7b8ca.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";/* empty css                */import"./index.504b494d.js";import"./index.8d0858e7.js";/* empty css               */import"./onMountedOrActivated.0d13b2a6.js";import"./useContentViewHeight.9302814f.js";import"./icon-remark.1929ee0a.js";import"./useSortable.79752a2a.js";/* empty css                */import"./CustomConfirmModal.9e27a533.js";import"./modal-error.7cada6d5.js";import"./upDataBasic.fe1af927.js";import"./spark-md5.2cc5764b.js";import"./updata.d7bd895d.js";import"./useSetFrom.689ec4a2.js";const v={class:""},T={style:{display:"flex"}},I={class:"block w-18 text-left"},M=b(" \u4E0B\u8F7D"),O={style:{display:"flex",justifyContent:"center",alignContent:"center"}},z={style:{display:"flex"}},K=b("\u4E0B\u8F7D"),Ft=S({__name:"otherTypes",props:{getdata:{type:Object,default:()=>{}}},setup(A){const c=A,{getdata:s}=D(c),[m,{clearSelectedRowKeys:n,getSelectRows:g}]=U({columns:[{title:"\u6587\u4EF6\u540D\u79F0",dataIndex:"fileRealName",width:100},{title:"\u6587\u4EF6\u8DEF\u5F84",dataIndex:"publicUrl",width:100},{title:"\u6587\u4EF6\u72B6\u6001",dataIndex:"status",width:100,slots:{customRender:"status"}}],afterFetch:t=>(console.log(t),t),dataSource:JSON.parse(JSON.stringify(s.value.other)),bordered:!1,striped:!0,clickToRowSelect:!1,isTreeTable:!1,showTableSetting:!1,showIndexColumn:!1,canResize:!1,ellipsis:!0,actionColumn:{width:100,title:"\u64CD\u4F5C",slots:{customRender:"action"},fixed:"right"},rowSelection:{type:"checkbox"}}),f=t=>r(this,null,function*(){const e=yield C({id:t.id});k({url:e.downloadUrl,target:"_self",fileName:e.fileRealName})}),i=()=>r(this,null,function*(){(yield g()).forEach((e,w)=>r(this,null,function*(){setTimeout(()=>r(this,null,function*(){const o=yield C({id:e.id}),a=document.createElement("iframe");a.style.display="none",a.style.height="0",a.src=o.downloadUrl,document.body.appendChild(a),setTimeout(()=>{a.remove()},1e3)}),(w+1)*300)})),n()});return(t,e)=>{const w=F("a-button");return h(),y("div",v,[u(d(V),{onRegister:d(m)},{status:l(({record:o})=>[p("div",T,[o.status=="uploading"?(h(),y("div",{key:0,style:E({margin:"6px 6px 0px 10px",width:"200px",height:"12px",background:"url(data:application/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAMCAYAAADf7cuOAAAAAXNSR0IArs4c6QAAAPVJREFUSA1jZACC17tyTJg/XV7N+uWOLOOvt8wgMXqAf2yiDD8ETBg+KhYw/GUXp4eV+Ox4zsjIeICJialMVVX1CSMoUDierjrJ+PsTEz5dtJT7x8rP8NJo1WAIHJA33zEzM+szgVLKQAYKyCVMvz8y8N+fAGIOBiD079+/LiZQ9hkMruH4cGYwOAPshv///zsw0bNMwedzpl+v8UnTW05ywMoVevuUVPtGAwZHiI0GDK6A+c8m/BeHHF2FQW2aQQSeM/3mUXk8GBwEaugNFgBu6P3l0w39z8r3byAdBWrggVq/gwS8A7V+GUGOGe0SgKMEpUsAAAiVU8NCHt26AAAAAElFTkSuQmCC)100% no-repeat",backgroundSize:"100% 100%"})},null,4)):x("v-if",!0),o.status=="done"?(h(),y("div",{key:1,style:E({margin:"6px 6px 0px 10px",width:"200px",height:"12px",background:"url(data:application/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAMCAYAAADf7cuOAAAAAXNSR0IArs4c6QAAAK9JREFUSA1jZACClstHTG79+rj6yZ9vsh/+/WYGiY00IMDE+leGheuxGht/aI2uzRlGUKDs/Pbs5Nd/f5hGWmBg8y83E8s/dy4pcyZQShkNFEQQgcICFCZMoOyDEB5lgUIAFCZMI7VMwZcEQGEyWq7gCKHRgBkNGBwhgEOYCVR/45AbscKgMGECNWpGbAjg8DgoTJhALT1QowaHmhEnDAoLUJgwgnw+2iVgYEDvEgAAis9KZYa51gwAAAAASUVORK5CYII=)100% no-repeat",backgroundSize:"100% 100%"})},null,4)):x("v-if",!0),p("span",I,_(o.status=="done"?"\u5DF2\u5B8C\u6210":o.status=="uploading"?"\u4E0A\u4F20\u4E2D":o.status=="suspend"?"\u4E0A\u4F20\u5931\u8D25":"\u672A\u4E0A\u4F20\u6587\u4EF6"),1)])]),toolbar:l(()=>[u(d(B),{size:"middle",style:{background:"#3152ed",color:"#ffffff",border:"1px solid #666666",margin:"0px 0px",borderRadius:"4px"},onClick:e[0]||(e[0]=()=>{i()})},{default:l(()=>[M]),_:1})]),action:l(({record:o})=>[p("div",O,[p("div",z,[N(u(d(G),{record:o},null,8,["record"]),[[R,o.status!="done"]]),u(w,{type:"link",onClick:()=>{f(o)}},{default:l(()=>[K]),_:2},1032,["onClick"])])])]),_:1},8,["onRegister"])])}}});export{Ft as default};
