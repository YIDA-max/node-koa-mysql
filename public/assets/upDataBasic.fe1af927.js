var w=(i,c,D)=>new Promise((y,L)=>{var C=o=>{try{g(D.next(o))}catch(a){L(a)}},n=o=>{try{g(D.throw(o))}catch(a){L(a)}},g=o=>o.done?y(o.value):Promise.resolve(o.value).then(C,n);g((D=D.apply(i,c)).next())});import{b as X,av as _,r as l,ay as K,q,i as e,B as $,D as p,ab as MM,cv as eM,cl as d,x as gM,cW as IM,d8 as sM,bQ as DM,c7 as NM,c9 as lM,aG as P,G as oM}from"./index.10ef4608.js";/* empty css               *//* empty css                *//* empty css                */import{S as aM}from"./spark-md5.2cc5764b.js";import{b as uM,u as iM,a as tM,c as cM}from"./updata.d7bd895d.js";import{u as nM}from"./useSetFrom.689ec4a2.js";function jM(i,c,D={}){const y=new FileReader,L=new Date().getTime(),C=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,n=Math.ceil(i.size/c);let g=0;const o=new aM.ArrayBuffer,a=()=>{let j=g*c,z=j+c>=i.size?i.size:j+c;y.readAsArrayBuffer(C.call(i,j,z))};a(),y.onload=j=>{if(o.append(j.target.result),g<n)g++,a(),D.onProgress&&typeof D.onProgress=="function"&&D.onProgress(g,n);else{let z=o.end();D.onSuccess&&typeof D.onSuccess=="function"&&D.onSuccess(z),console.log(`MD5\u8BA1\u7B97\u5B8C\u6BD5\uFF1A${i.name} 
MD5\uFF1A${z} 
\u5206\u7247\uFF1A${n} \u5927\u5C0F:${i.size} \u7528\u65F6\uFF1A${new Date().getTime()-L} ms`)}},y.onerror=function(){console.log("MD5\u8BA1\u7B97\u5931\u8D25"),D.onError&&typeof D.onError=="function"&&D.onError()}}var xM=X({name:"",props:{record:{type:Object,default:()=>{}}},setup(i,{slots:c}){const{Dragger:D}=lM,{currents:y,indexs:L,record:C}=_(i),n={name:"file",multiple:!0,onChange(M){const{status:I}=M.file;I!=="uploading"&&console.log(M.file,M.fileList)},customRequest:M=>w(this,null,function*(){h(M)}),onDrop(M){console.log("Dropped files",M.dataTransfer.files)},showUploadList:!1},g=l([]),{createMessage:o}=oM();l();const a=5*1024*1024,j=l(!1),z=l(!0),m=l(!1),x=l({current:l(0),total:l(0)}),S=l(),f=l(0),k=l([{size:0,md5:"",name:""}]),Y=l([]),b=nM(),G=l();K(()=>g.value,(M,I)=>{b.useFileList[1]=M},{deep:!0});const h=M=>w(this,null,function*(){m.value=!0;const I=M.file,u=I.size,t=Math.ceil(u/a);console.log("\u6587\u4EF6\u5927\u5C0F\uFF1A",I.size/1024/1024+"Mb","\u5206\u7247\u6570\uFF1A",t),x.value.total=t,console.log(I.name);let s,E=!0;k.value.forEach(N=>w(this,null,function*(){N.size==u&&N.name==I.name&&N.md5!=""&&(s=N.md5,E=!1)}));const A=g.value.length;if(E&&(s=yield Z(I,a,A)),console.log("\u6587\u4EF6md5\uFF1A",s),console.log("\u5411\u540E\u7AEF\u8BF7\u6C42\u672C\u6B21\u5206\u7247\u4E0A\u4F20\u521D\u59CB\u5316"),s!==C.value.fileMd5){console.log(" \u6587\u4EF6\u4E0D\u540C"),o.error("\u6587\u4EF6\u4E0D\u540C"),g.value=[];return}const O=JSON.stringify({chunkCount:t,fileName:I.name,fileMd5:s,fileSize:u});k.value.push({size:u,md5:s,name:I.name}),m.value=!1;const W=yield uM(O);yield(N=>w(this,null,function*(){const T=N.logId;if(G.value=T,b.SetUseUpBigData(T),Y.value.push(T),typeof N=="string"&&(N=JSON.parse(N)),N.code===1){console.log("\u5F53\u524D\u6587\u4EF6\u4E0A\u4F20\u60C5\u51B5\uFF1A\u6240\u6709\u5206\u7247\u5DF2\u5728\u4E4B\u524D\u4E0A\u4F20\u5B8C\u6210\uFF0C\u4EC5\u9700\u5408\u5E76"),console.log(N.uploadId),U(T,t,s);return}if(N.code===0){console.log("\u5F53\u524D\u6587\u4EF6\u4E0A\u4F20\u60C5\u51B5\uFF1A\u79D2\u4F20"),console.log(N.url),Q();return}console.log("\u5F53\u524D\u6587\u4EF6\u4E0A\u4F20\u60C5\u51B5\uFF1A\u521D\u6B21\u4E0A\u4F20 \u6216 \u65AD\u70B9\u7EED\u4F20");const F=N.chunks;for(const r of F){const B=(r.partNumber-1)*a,R=Math.min(u,B+a),J=I.slice(B,R);console.log("\u5F00\u59CB\u4E0A\u4F20\u7B2C"+r.partNumber+"\u4E2A\u5206\u7247"),yield iM(r.uploadUrl,J),console.log("\u7B2C"+r.partNumber+"\u4E2A\u5206\u7247\u4E0A\u4F20\u5B8C\u6210");const V=JSON.stringify({logId:T,fileMd5:s,partNumber:r.partNumber,chunkCount:t}),{success:H}=yield tM(V);if(H)x.value.current=r.partNumber,console.log("\u7B2C"+r.partNumber+"\u4E2A\u5206\u7247\u4E0A\u4F20\u5E76\u8BB0\u5F55\u5B8C\u6210");else break}U(T,t,s)}))(W)}),U=(M,I,u)=>w(this,null,function*(){console.log("\u5F00\u59CB\u8BF7\u6C42\u540E\u7AEF\u5408\u5E76\u6587\u4EF6");const t=JSON.stringify({logId:M,ifBackend:!1,chunkCount:I,fileMd5:u});let s=yield cM(t);typeof s=="string"&&(s=JSON.parse(s)),s.success?(console.log("\u5408\u5E76\u6587\u4EF6\u5B8C\u6210",s),Q()):console.log("\u5408\u5E76\u6587\u4EF6\u5931\u8D25\uFF01")}),Q=()=>{m.value=!1,j.value=!1,z.value=!0,setTimeout(()=>{x.value.total=0,x.value.current=0},1e3),S.value="",f.value=0,k.value=[]};function Z(M,I,u){const t={name:M.name,type:M.type,uid:M.uid,md5ProgressText:0,md5Progress:0};return g.value[u]=t,P(()=>{}),new Promise((s,E)=>{jM(M,I,{onProgress(A,O){P(()=>{S.value="\u6821\u9A8C\u6587\u4EF6\u5B89\u5168"+(A/O*100).toFixed(0)+"%",f.value=Number((A/O*100).toFixed(0)),g.value[u].md5ProgressText=S.value,g.value[u].md5Progress=f.value})},onSuccess(A){s(A)},onError(){console.log(`\u6587\u4EF6${M.name}\u8BFB\u53D6\u51FA\u9519\uFF0C\u8BF7\u68C0\u67E5\u8BE5\u6587\u4EF6`),E()}})})}const v=M=>{g.value.splice(M,1),b.DelUseUpBigData(M)};return q(()=>{}),()=>e("div",null,[" ",e("div",null,[e(D,$(n,{style:{width:"100%",minWidth:"450px"},fileList:g.value}),{default:()=>[e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},[e("div",{style:{background:"url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgMzIgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5ICg4NjEyNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi3kuIrkvKA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5aSa57uE5a2mVUkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlj6/op4bljJbliIbmnpAt5YGa5Zu+5q2l6aqk5LiA77yI5LiK5Lyg5by55qGG77yJIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQ0LjAwMDAwMCwgLTQ4Ni4wMDAwMDApIiBmaWxsPSIjQzZDN0NEIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjMuMDAwMDAwLCA0MDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjI1LDg3LjE4NjgxMzIgTDIyNy44NDA5MDksODQuMTg2ODEzMiBMMjQ3LjE1OTA5MSw4NC4xODY4MTMyIEwyNTAsODcuMTg2ODEzMiBMMjI1LDg3LjE4NjgxMzIgWiBNMjQyLjEsMTAyLjYxNjMyMyBMMjQyLjEsMTA3LjE4NjgxMyBMMjMyLjksMTA3LjE4NjgxMyBMMjMyLjksMTAyLjYxNjMyMyBMMjI2LDEwMi42MTYzMjMgTDIzNi43MDk5NSw5MS41MjYwMjk0IEMyMzcuMTQ1OCw5MS4wNzM1NTA5IDIzNy44NTY1LDkxLjA3NDY5MzUgMjM4LjI5MDA1LDkxLjUyMzc0NDEgTDI0OSwxMDIuNjE2MzIzIEwyNDIuMSwxMDIuNjE2MzIzIFogTTI1Mi4zNjQ1NzEsODcuMDkwODEzMiBMMjQ5LjA2NCw4Mi4xMzk5NTYgQzI0OC43MTQyODYsODEuNjE1Mzg0NiAyNDcuOTIxMTQzLDgxLjE4NjgxMzIgMjQ3LjI5NDg1Nyw4MS4xODY4MTMyIEwyMjYuNzA1MTQzLDgxLjE4NjgxMzIgQzIyNi4wOTE0MjksODEuMTg2ODEzMiAyMjUuMjg2ODU3LDgxLjYxNDI0MTggMjI0LjkzNiw4Mi4xMzk5NTYgTDIyMS42MzU0MjksODcuMDkwODEzMiBDMjIxLjI4NTcxNCw4Ny42MTUzODQ2IDIyMSw4OC41NTcwOTg5IDIyMSw4OS4xODkwOTg5IEwyMjEsMTEwLjkxMTM4NSBDMjIxLDExMi4xNjk2NyAyMjIuMDE5NDI5LDExMy4xODY4MTMgMjIzLjI3NTQyOSwxMTMuMTg2ODEzIEwyNTAuNzI0NTcxLDExMy4xODY4MTMgQzI1MS45NzE0MjksMTEzLjE4NjgxMyAyNTMsMTEyLjE2ODUyNyAyNTMsMTEwLjkxMTM4NSBMMjUzLDg5LjE4OTA5ODkgQzI1Myw4OC41NDU2NzAzIDI1Mi43MTU0MjksODcuNjE2NTI3NSAyNTIuMzY0NTcxLDg3LjA5MDgxMzIiIGlkPSJpY29uLeS4iuS8oCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)",height:"32px",width:"32px"}},null)]),e("p",{class:"ant-upload-hint",style:{margin:"20px 0px"}},[p("\u5C06\u6587\u4EF6\u62D6\u81F3\u6B64\u5904")]),e(MM,{style:{background:"#3152ed",color:"#ffffff",border:"1px solid #666666",margin:"0px 0px",borderRadius:"4px"}},{default:()=>[p("\u9009\u62E9\u6587\u4EF6")]})]}),e("div",{style:{height:"300px",overflow:"auto"}},[g.value.map((M,I)=>e("div",{key:M.name,style:{display:"flex",justifyContent:"center",width:"100%",height:"60px",fontSize:"12px",textAlign:"left"}},[e("div",{style:{width:"20%",height:"60px",display:"flex",justifyContent:"center",alignItems:"center"}},[e("div",{style:{width:"20px",height:"20px",background:"url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjlweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjkgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbi3mlofku7Y8L3RpdGxlPgogICAgPGcgaWQ9IuWfuuehgOaVsOaNruW6kyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWfuuWboOewh+W6k++8muaVsOaNruWIl+ihqCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0Ni4wMDAwMDAsIC01NDMuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Imljb24t5paH5Lu2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NDYuMDAwMDAwLCA1NDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuOTg0OTA4MSwyNi42NjQ5NzMzIEMyNS45ODQ5MDgxLDI3LjAzMzI3NDEgMjUuODMzOTg5NSwyNy4zODY4NDI4IDI1LjU2MjMzNiwyNy42NTIwMTkzIEMyNS4yOTA2ODI0LDI3LjkxNzE5NTggMjQuOTI4NDc3NywyOC4wNjQ1MTYxIDI0LjU1MTE4MTEsMjguMDY0NTE2MSBMNC40MzM3MjcwMywyOC4wNjQ1MTYxIEM0LjA1NjQzMDQ1LDI4LjA2NDUxNjEgMy42NzkxMzM4NiwyNy45MTcxOTU4IDMuNDIyNTcyMTgsMjcuNjUyMDE5MyBDMy4xNTA5MTg2NCwyNy4zODY4NDI4IDMsMjcuMDMzMjc0MSAzLDI2LjY2NDk3MzMgTDMsMS4zOTk1NDI4IEMzLDEuMDMxMjQyMDYgMy4xNTA5MTg2NCwwLjY2Mjk0MTMyNiAzLjQyMjU3MjE4LDAuNDEyNDk2ODI1IEMzLjY3OTEzMzg2LDAuMTQ3MzIwMjk1IDQuMDU2NDMwNDUsMCA0LjQzMzcyNzAzLDAgTDE2Ljc3ODg3MTQsMCBDMTcuMTU2MTY4LDAgMTcuNTMzNDY0NiwwLjE0NzMyMDI5NSAxNy44MDUxMTgxLDAuNDEyNDk2ODI1IEwyNS41Nzc0Mjc4LDcuOTk5NDkyIEMyNS44NDkwODE0LDguMjY0NjY4NTMgMjYsOC42MTgyMzcyNCAyNiw5LjAwMTI3IEwyNiwyNi42NjQ5NzMzIEwyNS45ODQ5MDgxLDI2LjY2NDk3MzMgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0VCRUNGMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LDI3LjA5Njc3NDIgTDI2LDI4LjU0ODM4NzEgQzI2LDI4LjkzMDM5MDUgMjUuODQ4OTgyMywyOS4zMTIzOTM5IDI1LjU3NzE1MDQsMjkuNTcyMTU2MiBDMjUuMzA1MzE4NSwyOS44NDcxOTg2IDI0Ljk0Mjg3NTksMzAgMjQuNTY1MzMxNiwzMCBMNC40MzQ2Njg0MiwzMCBDMy42MzQyNzQ0NiwzMCAzLDI5LjM0Mjk1NDIgMywyOC41NDgzODcxIEwzLDI3LjA5Njc3NDIgQzMsMjcuNDc4Nzc3NiAzLjE1MTAxNzczLDI3Ljg0NTUwMDggMy40MjI4NDk2NCwyOC4xMjA1NDMzIEMzLjY5NDY4MTU1LDI4LjM5NTU4NTcgNC4wNTcxMjQxLDI4LjU0ODM4NzEgNC40MzQ2Njg0MiwyOC41NDgzODcxIEwyNC41NjUzMzE2LDI4LjU0ODM4NzEgQzI1LjM2NTcyNTUsMjguNTQ4Mzg3MSAyNiwyNy44OTEzNDEzIDI2LDI3LjA5Njc3NDIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0MxQzdEMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMTUuNDgzODcxIEwyOSwxNS40ODM4NzEgTDI5LDIyLjc0NDQ3NzcgQzI5LDIzLjU1MjkwNjYgMjguMzQ1NDA2OCwyNC4xOTM1NDg0IDI3LjU1MzgwNTgsMjQuMTkzNTQ4NCBMMS40NjE0MTczMiwyNC4xOTM1NDg0IEMxLjA4MDgzOTksMjQuMTkzNTQ4NCAwLjcwMDI2MjQ2NywyNC4wNDEwMTQ2IDAuNDQxNDY5ODE2LDIzLjc2NjQ1MzkgQzAuMTY3NDU0MDY4LDIzLjQ5MTg5MzEgMC4wMTUyMjMwOTcxLDIzLjEyNTgxMjEgMC4wMTUyMjMwOTcxLDIyLjcyOTIyNDMgTDAuMDE1MjIzMDk3MSwxNS40ODM4NzEgTDAsMTUuNDgzODcxIFoiIGlkPSLot6/lvoQiIGZpbGw9IiM0N0IzNDciPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjkwNjA4NjA0LDE1LjQ4Mzg3MSBMMi45MDYwODYwNCwxMi41ODA2NDUyIEwwLDE1LjQ4Mzg3MSBMMi45MDYwODYwNCwxNS40ODM4NzEgWiBNMjYuMDc4Njk4OCwxNS40ODM4NzEgTDI2LjEwOTEyOTEsMTIuNTgwNjQ1MiBMMjksMTUuNDgzODcxIEwyNi4wNzg2OTg4LDE1LjQ4Mzg3MSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjMkE5MzJBIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuOTk4ODc2Miw5LjQ3NTgwNjQ1IEwyNS45OTg4NzYyLDkuNjc3NDE5MzUgTDE3LjU1NzIwMiw5LjY3NzQxOTM1IEMxNi42ODg0NDcyLDkuNjc3NDE5MzUgMTYsOS4wMTA1NDU5MSAxNiw4LjIwNDA5NDI5IEwxNiwwIEMxNi40MDk3OSwwIDE2LjgxOTU4LDAuMTU1MDg2ODQ5IDE3LjExNDYyODgsMC40MzQyNDMxNzYgTDI1LjU3MjY5NDUsOC40MjEyMTU4OCBDMjUuODUxMzUxOCw4LjcwMDM3MjIxIDI2LjAxNTI2NzgsOS4wNzI1ODA2NSAyNS45OTg4NzYyLDkuNDc1ODA2NDUgTDI1Ljk5ODg3NjIsOS40NzU4MDY0NSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjQzFDN0QwIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)"}},null)]),e("div",{style:{width:"80%",height:"60px"}},[e(eM,null,{default:()=>[e(d,{span:11,style:{textOverflow:"ellipsis",width:"100%"}},{default:()=>[e(gM("a-typography-text"),{style:{width:"100%"},ellipsis:!0,content:M.name},null)]}),M.md5Progress==100?e(d,{span:10,offset:1},{default:()=>[" ",p("\u6821\u9A8C\u6587\u4EF6\u5B89\u5168100%"),e(IM,null,null)]}):e(d,{span:10,offset:1},{default:()=>[" ",p("\u6821\u9A8C\u6587\u4EF6\u5B89\u5168\u4E2D")]}),M.md5Progress==100?e(d,{span:2},{default:()=>[e(sM,{onClick:()=>{v(I)}},null)]}):e(d,{span:2},{default:()=>[e(DM,{onClick:()=>{v(I)}},null)]})]}),e(NM,{percent:M.md5Progress,strokeColor:M.md5Progress==100?"#93d3bb":"#e19f32"},null)])]))]),e("div",null,null)])])}});export{xM as default};
