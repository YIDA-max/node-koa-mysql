var p=(n,A,s)=>new Promise((l,x)=>{var B=a=>{try{o(s.next(a))}catch(d){x(d)}},T=a=>{try{o(s.throw(a))}catch(d){x(d)}},o=a=>a.done?l(a.value):Promise.resolve(a.value).then(B,T);o((s=s.apply(n,A)).next())});import{a as le,b as ae,dd as Ie,u as De,a5 as ce,r as j,l as ne,ay as Ne,x as H,o as G,c as Z,e as r,i as D,A as y,aL as X,t as C,j as t,ab as re,D as S,de as je,f as ye,ao as Ae,ap as de,cl as F,y as b,z as v,cW as ze,d8 as we,bQ as Ce,cv as Te,c7 as Ee,c9 as Le,aG as K,p as me,k as pe,bN as xe}from"./index.10ef4608.js";/* empty css               *//* empty css                *//* empty css                */import{S as Oe}from"./spark-md5.2cc5764b.js";import{d as fe,b as Se,u as Be,a as Fe,c as ke}from"./updata.d7bd895d.js";import{t as be}from"./platfrom.439ed019.js";import{d as ve}from"./download.66a6d137.js";import{u as he}from"./useSetFrom.689ec4a2.js";function Ue(n,A,s={}){const l=new FileReader,x=new Date().getTime(),B=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,T=Math.ceil(n.size/A);let o=0;const a=new Oe.ArrayBuffer,d=()=>{let E=o*A,z=E+A>=n.size?n.size:E+A;l.readAsArrayBuffer(B.call(n,E,z))};d(),l.onload=E=>{if(a.append(E.target.result),o<T)o++,d(),s.onProgress&&typeof s.onProgress=="function"&&s.onProgress(o,T);else{let z=a.end();s.onSuccess&&typeof s.onSuccess=="function"&&s.onSuccess(z),console.log(`MD5\u8BA1\u7B97\u5B8C\u6BD5\uFF1A${n.name} 
MD5\uFF1A${z} 
\u5206\u7247\uFF1A${T} \u5927\u5C0F:${n.size} \u7528\u65F6\uFF1A${new Date().getTime()-x} ms`)}},l.onerror=function(){console.log("MD5\u8BA1\u7B97\u5931\u8D25"),s.onError&&typeof s.onError=="function"&&s.onError()}}const Qe=n=>(me("data-v-70fcec7f"),n=n(),pe(),n),_e={style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}},Pe={style:{width:"100%",height:"180px",padding:"12px",display:"flex",justifyContent:"center",alignItems:"center"}},Ye={style:{width:"100%",height:"100%"}},Ge={style:{display:"flex",alignItems:"center",justifyContent:"center"}},Ze={class:"ant-upload-hint",style:{margin:"20px 0px"}},We={style:{textAlign:"left",padding:"10px",fontWeight:400,fontSize:"14px"}},Re={style:{height:"300px",overflow:"auto"}},Je={style:{width:"20%",height:"60px",display:"flex",justifyContent:"center",alignItems:"center"}},Ve={style:{width:"80%",height:"60px"}},He=Qe(()=>r("div",null,null,-1)),Xe=ae({__name:"upData",emits:["cover"],setup(n,{emit:A}){const s=Ie(),{t:l}=De(),x=ce(),{Dragger:B}=Le,T=M=>{const{status:u}=M.file;u!=="uploading"&&console.log(M.file,M.fileList)},o=j([]),a=5*1024*1024,d=j(!1),E=j(!0),z=j(!1),k=j({current:j(0),total:j(0)}),$=ne(()=>o.value.map(u=>u.name)),h=j(),U=j(0),Q=j([{size:0,md5:"",name:""}]),q=j([]),_=he(),ee=j();Ne(()=>o.value,M=>{_.useFileList[1]=M},{deep:!0});const ue=()=>p(this,null,function*(){const{msg:M}=yield be({type:"\u6570\u636E\u8BF4\u660E\u8868"});ve({url:M,target:"_self"})}),Me=M=>p(this,null,function*(){const u=M.file.name,I=(e,i)=>xe.confirm({okText:i,content:e,onOk(){i=="\u786E\u5B9A"?A("cover",u):o.value.forEach((w,L)=>w.name==u&&o.value.splice(L,1)),W(M)}});(yield fe({fileNameList:[u],id:x.params.id,type:0}))?$.value.some(e=>e==u)?I(`\u53D1\u73B0\u4E0A\u4F20${u}\u540C\u540D\u6587\u4EF6\u662F\u5426\u8986\u76D6`,"\u8986\u76D6"):W(M):I(`\u53D1\u73B0\u5217\u8868\u5B58\u5728${u}\u540C\u540D\u6587\u4EF6\u662F\u5426\u8986\u76D6`,"\u786E\u5B9A")}),W=M=>p(this,null,function*(){z.value=!0;const u=M.file,I=u.size,N=Math.ceil(I/a);console.log("\u6587\u4EF6\u5927\u5C0F\uFF1A",u.size/1024/1024+"Mb","\u5206\u7247\u6570\uFF1A",N),k.value.total=N,console.log(u.name),console.log(u);let e,i=!0;Q.value.forEach(g=>p(this,null,function*(){g.size==I&&g.name==u.name&&g.md5!=""&&(e=g.md5,i=!1)})),i&&(e=yield se(u,a)),console.log("\u6587\u4EF6md5\uFF1A",e),console.log("\u5411\u540E\u7AEF\u8BF7\u6C42\u672C\u6B21\u5206\u7247\u4E0A\u4F20\u521D\u59CB\u5316");const w=JSON.stringify({chunkCount:N,fileName:u.name,fileMd5:e,fileSize:I});Q.value.push({size:I,md5:e,name:u.name}),z.value=!1;const L=yield Se(w);yield(g=>p(this,null,function*(){const m=g.logId;ee.value=m,_.SetUseUpBigData(m),q.value.push(m);const O=[...new Set([...s.get("bigFileId")])];if(O.push(m),s.set("bigFileId",O),console.log("\u5BF9\u8BDD\u5B58\u50A8\u91CC\u9762\u7684\u6570\u636E",s.get("bigFileId")),typeof g=="string"&&(g=JSON.parse(g)),g.code===1){console.log("\u5F53\u524D\u6587\u4EF6\u4E0A\u4F20\u60C5\u51B5\uFF1A\u6240\u6709\u5206\u7247\u5DF2\u5728\u4E4B\u524D\u4E0A\u4F20\u5B8C\u6210\uFF0C\u4EC5\u9700\u5408\u5E76"),console.log(g.uploadId),R(m,N,e);const c=[...new Set([...s.get("bigFileId")])];c.forEach((f,Y)=>{f==g.logId&&c.splice(Y,1)}),s.set("bigFileId",c),console.log(" \u6211\u662F\u53EA\u9700\u8981\u5408\u5E76",c,g);return}if(g.code===0){console.log("\u5F53\u524D\u6587\u4EF6\u4E0A\u4F20\u60C5\u51B5\uFF1A\u79D2\u4F20"),console.log(g.url),O.forEach((c,f)=>{c==g.logId&&O.splice(f,1)}),s.set("bigFileId",O),console.log(" \u6211\u662F\u79D2\u4F20",O,g.logId),J();return}console.log("\u5F53\u524D\u6587\u4EF6\u4E0A\u4F20\u60C5\u51B5\uFF1A\u521D\u6B21\u4E0A\u4F20 \u6216 \u65AD\u70B9\u7EED\u4F20");const te=g.chunks;for(const c of te){const f=(c.partNumber-1)*a,Y=Math.min(I,f+a),oe=u.slice(f,Y);console.log("\u5F00\u59CB\u4E0A\u4F20\u7B2C"+c.partNumber+"\u4E2A\u5206\u7247"),yield Be(c.uploadUrl,oe),console.log("\u7B2C"+c.partNumber+"\u4E2A\u5206\u7247\u4E0A\u4F20\u5B8C\u6210");const ie=JSON.stringify({logId:m,fileMd5:e,partNumber:c.partNumber,chunkCount:N}),{success:ge}=yield Fe(ie);if(ge)k.value.current=c.partNumber,console.log("\u7B2C"+c.partNumber+"\u4E2A\u5206\u7247\u4E0A\u4F20\u5E76\u8BB0\u5F55\u5B8C\u6210");else break}R(m,N,e)}))(L)}),R=(M,u,I)=>p(this,null,function*(){console.log("\u5F00\u59CB\u8BF7\u6C42\u540E\u7AEF\u5408\u5E76\u6587\u4EF6");const N=JSON.stringify({logId:M,ifBackend:!1,chunkCount:u,fileMd5:I});let e=yield ke(N);if(typeof e=="string"&&(e=JSON.parse(e)),e.success){console.log("\u5408\u5E76\u6587\u4EF6\u5B8C\u6210",e);const i=[...new Set([...s.get("bigFileId")])];i.forEach((w,L)=>{w==e.logId&&i.splice(L,1)}),s.set("bigFileId",i),console.log("\u6211\u662F\u6700\u7EC8\u7684\u5408\u5E76\u6587\u4EF6 ",i,e),J()}else console.log("\u5408\u5E76\u6587\u4EF6\u5931\u8D25\uFF01")}),J=()=>{z.value=!1,d.value=!1,E.value=!0,setTimeout(()=>{k.value.total=0,k.value.current=0},1e3),h.value="",U.value=0,Q.value=[]};function se(M,u){const I={name:M.name,type:M.type,uid:M.uid,md5ProgressText:0,md5Progress:0};return o.value.unshift(I),K(()=>{}),new Promise((N,e)=>{Ue(M,u,{onProgress(i,w){K(()=>{h.value=l("AllMessage.momBigFileTextEight")+(i/w*100).toFixed(0)+"%",U.value=Number((i/w*100).toFixed(0)),o.value.forEach((L,P)=>{L.name==I.name&&(o.value[P].md5ProgressText=h.value,o.value[P].md5Progress=U.value)})})},onSuccess(i){N(i)},onError(){console.log(`${l("AllMessage.momBigFileTextNine")}${M.name}${l("AllMessage.momBigFileTextTen")}`),e()}})})}const V=M=>{o.value.splice(M,1),_.DelUseUpBigData(M)};return(M,u)=>{const I=H("a-button"),N=H("a-typography-text");return G(),Z("div",_e,[r("div",Pe,[r("div",Ye,[D(t(B),{name:"file",multiple:!0,onChange:u[0]||(u[0]=e=>{T(e)}),customRequest:e=>{Me(e)},showUploadList:!1,style:{width:"100%",height:"170px"},fileList:o.value},{default:y(()=>[r("div",Ge,[r("div",{style:X({background:"url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgMzIgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5ICg4NjEyNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi3kuIrkvKA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5aSa57uE5a2mVUkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlj6/op4bljJbliIbmnpAt5YGa5Zu+5q2l6aqk5LiA77yI5LiK5Lyg5by55qGG77yJIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQ0LjAwMDAwMCwgLTQ4Ni4wMDAwMDApIiBmaWxsPSIjQzZDN0NEIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjMuMDAwMDAwLCA0MDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjI1LDg3LjE4NjgxMzIgTDIyNy44NDA5MDksODQuMTg2ODEzMiBMMjQ3LjE1OTA5MSw4NC4xODY4MTMyIEwyNTAsODcuMTg2ODEzMiBMMjI1LDg3LjE4NjgxMzIgWiBNMjQyLjEsMTAyLjYxNjMyMyBMMjQyLjEsMTA3LjE4NjgxMyBMMjMyLjksMTA3LjE4NjgxMyBMMjMyLjksMTAyLjYxNjMyMyBMMjI2LDEwMi42MTYzMjMgTDIzNi43MDk5NSw5MS41MjYwMjk0IEMyMzcuMTQ1OCw5MS4wNzM1NTA5IDIzNy44NTY1LDkxLjA3NDY5MzUgMjM4LjI5MDA1LDkxLjUyMzc0NDEgTDI0OSwxMDIuNjE2MzIzIEwyNDIuMSwxMDIuNjE2MzIzIFogTTI1Mi4zNjQ1NzEsODcuMDkwODEzMiBMMjQ5LjA2NCw4Mi4xMzk5NTYgQzI0OC43MTQyODYsODEuNjE1Mzg0NiAyNDcuOTIxMTQzLDgxLjE4NjgxMzIgMjQ3LjI5NDg1Nyw4MS4xODY4MTMyIEwyMjYuNzA1MTQzLDgxLjE4NjgxMzIgQzIyNi4wOTE0MjksODEuMTg2ODEzMiAyMjUuMjg2ODU3LDgxLjYxNDI0MTggMjI0LjkzNiw4Mi4xMzk5NTYgTDIyMS42MzU0MjksODcuMDkwODEzMiBDMjIxLjI4NTcxNCw4Ny42MTUzODQ2IDIyMSw4OC41NTcwOTg5IDIyMSw4OS4xODkwOTg5IEwyMjEsMTEwLjkxMTM4NSBDMjIxLDExMi4xNjk2NyAyMjIuMDE5NDI5LDExMy4xODY4MTMgMjIzLjI3NTQyOSwxMTMuMTg2ODEzIEwyNTAuNzI0NTcxLDExMy4xODY4MTMgQzI1MS45NzE0MjksMTEzLjE4NjgxMyAyNTMsMTEyLjE2ODUyNyAyNTMsMTEwLjkxMTM4NSBMMjUzLDg5LjE4OTA5ODkgQzI1Myw4OC41NDU2NzAzIDI1Mi43MTU0MjksODcuNjE2NTI3NSAyNTIuMzY0NTcxLDg3LjA5MDgxMzIiIGlkPSJpY29uLeS4iuS8oCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)",height:"32px",width:"32px"})},null,4)]),r("p",Ze,C(t(l)("mom.increasedData.dragFileHere")),1),D(t(re),{style:{background:"#3152ed",color:"#ffffff",border:"1px solid #666666",margin:"0px 0px",borderRadius:"4px"}},{default:y(()=>[S(C(t(l)("mom.increasedData.selectFile")),1)]),_:1})]),_:1},8,["customRequest","fileList"])])]),r("div",We,[r("div",null,[S(C(t(l)("AllMessage.momBigFileTextOne"))+" ",1),D(I,{type:"link",style:{margin:"0",padding:"0"},onClick:u[1]||(u[1]=()=>{ue()})},{icon:y(()=>[D(t(je))]),default:y(()=>[S(" "+C(t(l)("AllMessage.momBigFileTextTwo")),1)]),_:1}),S(" "+C(t(l)("AllMessage.momBigFileTextThree")),1)]),r("div",null,C(t(l)("AllMessage.momBigFileTextFour")),1)]),ye(" \u8FDB\u5EA6\u6761 "),r("div",Re,[(G(!0),Z(Ae,null,de(o.value,(e,i)=>(G(),Z("div",{key:e.name,style:{display:"flex",justifyContent:"center",width:"100%",height:"60px",fontSize:"12px",textAlign:"left"}},[r("div",Je,[r("div",{style:X({width:"20px",height:"20px",background:"url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjlweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjkgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbi3mlofku7Y8L3RpdGxlPgogICAgPGcgaWQ9IuWfuuehgOaVsOaNruW6kyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWfuuWboOewh+W6k++8muaVsOaNruWIl+ihqCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0Ni4wMDAwMDAsIC01NDMuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Imljb24t5paH5Lu2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NDYuMDAwMDAwLCA1NDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuOTg0OTA4MSwyNi42NjQ5NzMzIEMyNS45ODQ5MDgxLDI3LjAzMzI3NDEgMjUuODMzOTg5NSwyNy4zODY4NDI4IDI1LjU2MjMzNiwyNy42NTIwMTkzIEMyNS4yOTA2ODI0LDI3LjkxNzE5NTggMjQuOTI4NDc3NywyOC4wNjQ1MTYxIDI0LjU1MTE4MTEsMjguMDY0NTE2MSBMNC40MzM3MjcwMywyOC4wNjQ1MTYxIEM0LjA1NjQzMDQ1LDI4LjA2NDUxNjEgMy42NzkxMzM4NiwyNy45MTcxOTU4IDMuNDIyNTcyMTgsMjcuNjUyMDE5MyBDMy4xNTA5MTg2NCwyNy4zODY4NDI4IDMsMjcuMDMzMjc0MSAzLDI2LjY2NDk3MzMgTDMsMS4zOTk1NDI4IEMzLDEuMDMxMjQyMDYgMy4xNTA5MTg2NCwwLjY2Mjk0MTMyNiAzLjQyMjU3MjE4LDAuNDEyNDk2ODI1IEMzLjY3OTEzMzg2LDAuMTQ3MzIwMjk1IDQuMDU2NDMwNDUsMCA0LjQzMzcyNzAzLDAgTDE2Ljc3ODg3MTQsMCBDMTcuMTU2MTY4LDAgMTcuNTMzNDY0NiwwLjE0NzMyMDI5NSAxNy44MDUxMTgxLDAuNDEyNDk2ODI1IEwyNS41Nzc0Mjc4LDcuOTk5NDkyIEMyNS44NDkwODE0LDguMjY0NjY4NTMgMjYsOC42MTgyMzcyNCAyNiw5LjAwMTI3IEwyNiwyNi42NjQ5NzMzIEwyNS45ODQ5MDgxLDI2LjY2NDk3MzMgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0VCRUNGMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LDI3LjA5Njc3NDIgTDI2LDI4LjU0ODM4NzEgQzI2LDI4LjkzMDM5MDUgMjUuODQ4OTgyMywyOS4zMTIzOTM5IDI1LjU3NzE1MDQsMjkuNTcyMTU2MiBDMjUuMzA1MzE4NSwyOS44NDcxOTg2IDI0Ljk0Mjg3NTksMzAgMjQuNTY1MzMxNiwzMCBMNC40MzQ2Njg0MiwzMCBDMy42MzQyNzQ0NiwzMCAzLDI5LjM0Mjk1NDIgMywyOC41NDgzODcxIEwzLDI3LjA5Njc3NDIgQzMsMjcuNDc4Nzc3NiAzLjE1MTAxNzczLDI3Ljg0NTUwMDggMy40MjI4NDk2NCwyOC4xMjA1NDMzIEMzLjY5NDY4MTU1LDI4LjM5NTU4NTcgNC4wNTcxMjQxLDI4LjU0ODM4NzEgNC40MzQ2Njg0MiwyOC41NDgzODcxIEwyNC41NjUzMzE2LDI4LjU0ODM4NzEgQzI1LjM2NTcyNTUsMjguNTQ4Mzg3MSAyNiwyNy44OTEzNDEzIDI2LDI3LjA5Njc3NDIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0MxQzdEMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMTUuNDgzODcxIEwyOSwxNS40ODM4NzEgTDI5LDIyLjc0NDQ3NzcgQzI5LDIzLjU1MjkwNjYgMjguMzQ1NDA2OCwyNC4xOTM1NDg0IDI3LjU1MzgwNTgsMjQuMTkzNTQ4NCBMMS40NjE0MTczMiwyNC4xOTM1NDg0IEMxLjA4MDgzOTksMjQuMTkzNTQ4NCAwLjcwMDI2MjQ2NywyNC4wNDEwMTQ2IDAuNDQxNDY5ODE2LDIzLjc2NjQ1MzkgQzAuMTY3NDU0MDY4LDIzLjQ5MTg5MzEgMC4wMTUyMjMwOTcxLDIzLjEyNTgxMjEgMC4wMTUyMjMwOTcxLDIyLjcyOTIyNDMgTDAuMDE1MjIzMDk3MSwxNS40ODM4NzEgTDAsMTUuNDgzODcxIFoiIGlkPSLot6/lvoQiIGZpbGw9IiM0N0IzNDciPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjkwNjA4NjA0LDE1LjQ4Mzg3MSBMMi45MDYwODYwNCwxMi41ODA2NDUyIEwwLDE1LjQ4Mzg3MSBMMi45MDYwODYwNCwxNS40ODM4NzEgWiBNMjYuMDc4Njk4OCwxNS40ODM4NzEgTDI2LjEwOTEyOTEsMTIuNTgwNjQ1MiBMMjksMTUuNDgzODcxIEwyNi4wNzg2OTg4LDE1LjQ4Mzg3MSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjMkE5MzJBIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuOTk4ODc2Miw5LjQ3NTgwNjQ1IEwyNS45OTg4NzYyLDkuNjc3NDE5MzUgTDE3LjU1NzIwMiw5LjY3NzQxOTM1IEMxNi42ODg0NDcyLDkuNjc3NDE5MzUgMTYsOS4wMTA1NDU5MSAxNiw4LjIwNDA5NDI5IEwxNiwwIEMxNi40MDk3OSwwIDE2LjgxOTU4LDAuMTU1MDg2ODQ5IDE3LjExNDYyODgsMC40MzQyNDMxNzYgTDI1LjU3MjY5NDUsOC40MjEyMTU4OCBDMjUuODUxMzUxOCw4LjcwMDM3MjIxIDI2LjAxNTI2NzgsOS4wNzI1ODA2NSAyNS45OTg4NzYyLDkuNDc1ODA2NDUgTDI1Ljk5ODg3NjIsOS40NzU4MDY0NSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjQzFDN0QwIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)"})},null,4)]),r("div",Ve,[D(t(Te),null,{default:y(()=>[D(t(F),{span:11,style:{textOverflow:"ellipsis",width:"100%"}},{default:y(()=>[D(N,{style:{width:"100%"},ellipsis:!0,content:e.name},null,8,["content"])]),_:2},1024),b(D(t(F),{span:10,offset:1},{default:y(()=>[S(C(t(l)("mom.increasedData.verifyThatFileSecure"))+" ",1),D(t(ze))]),_:2},1536),[[v,e.md5Progress==100]]),b(D(t(F),{span:10,offset:1},{default:y(()=>[S(C(t(l)("mom.increasedData.verifyFileSecurity")),1)]),_:2},1536),[[v,e.md5Progress!=100]]),b(D(t(F),{span:2},{default:y(()=>[D(t(we),{onClick:()=>{V(i)}},null,8,["onClick"])]),_:2},1536),[[v,e.md5Progress==100]]),b(D(t(F),{span:2},{default:y(()=>[D(t(Ce),{onClick:()=>{V(i)}},null,8,["onClick"])]),_:2},1536),[[v,e.md5Progress!=100]])]),_:2},1024),D(t(Ee),{percent:e.md5Progress,strokeColor:e.md5Progress==100?"#93d3bb":"#e19f32"},null,8,["percent","strokeColor"])])]))),128))]),He])}}});var gu=le(Xe,[["__scopeId","data-v-70fcec7f"]]);export{gu as default};
