var y=(L,k,l)=>new Promise((f,d)=>{var x=i=>{try{a(l.next(i))}catch(c){d(c)}},w=i=>{try{a(l.throw(i))}catch(c){d(c)}},a=i=>i.done?f(i.value):Promise.resolve(i.value).then(x,w);a((l=l.apply(L,k)).next())});import{b as U,u as R,r as h,d7 as V,bm as S,ay as G,q as J,x as T,o as A,c as _,i as n,A as p,e as g,D as m,t as v,j as u,y as E,z as O,ao as D,ap as z,cl as $,ab as q,cv as W}from"./index.10ef4608.js";import{u as K,B as Q}from"./useForm.98d7b8ca.js";/* empty css               */import{u as X}from"./casual.c3003c80.js";import j from"./V3ColorPicker.3aeb3ea0.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";import"./ColorPicker.3725ed80.js";import"./ColorPanel.209bf7d4.js";import"./draggable.354c5b1e.js";import"./ColorPreview.6aea0981.js";import"./ColorHue.94d928ef.js";import"./ColorAlpha.071f638e.js";import"./ColorValue.246a701d.js";import"./ColorList.125944a3.js";const Y={style:{minHeight:"400px"}},Z={style:{position:"relative",top:"0px",margin:"0px 0px 0px 0px"}},ee={style:{width:"900px",maxHeight:"130px",height:"130px",overflow:"auto",border:"1px solid #d3d5db"}},oe={style:{}},le={style:{position:"relative",display:"inline-block",top:"8px"}},te={style:{position:"relative",top:"0px",margin:"0px 0px 0px 0px"}},se={style:{width:"900px",maxHeight:"130px",height:"130px",overflow:"auto",border:"1px solid #d3d5db"}},re={style:{}},ae={style:{position:"relative",display:"inline-block",top:"8px"}},Be=U({__name:"RegulatoryNetworkDiagram",props:{toNextFn:Function},setup(L,{expose:k}){const{t:l}=R(),f=X(),d=h(),x=h([]),w=h([]),a=h([]),i=h([]),c=h([]),C=[{field:"height",component:"Input",label:l("AllMessage.visual.two.PreferencesList.height"),rules:[{validator:(o,e)=>y(this,null,function*(){return isNaN(e)&&e?Promise.reject(l("AllMessage.visual.two.PreferencesList.number")):!0}),validateTrigger:"blur"}],colProps:{span:7,offset:0}},{field:"width",component:"Input",label:l("AllMessage.visual.two.PreferencesList.width"),rules:[{validator:(o,e)=>y(this,null,function*(){return isNaN(e)&&e?Promise.reject(l("AllMessage.visual.two.PreferencesList.number")):!0}),validateTrigger:"blur"}]},{field:"Source",component:"Select",label:l("AllMessage.visual.two.PreferencesList.Source"),componentProps:{options:a},rules:[{required:!0,message:l("AllMessage.visual.two.PreferencesList.data")}]},{field:"Target",component:"Select",label:l("AllMessage.visual.two.PreferencesList.Target"),componentProps:{options:a},rules:[{required:!0,message:l("AllMessage.visual.two.PreferencesList.data")}],colProps:{span:7,offset:0}},{field:"Value",component:"Select",label:l("AllMessage.visual.two.PreferencesList.Value"),componentProps:{options:a}},{field:"Colour",component:"Select",label:l("AllMessage.visual.two.PreferencesList.Colour"),componentProps:{options:a,onChange:o=>y(this,null,function*(){if(o){i.value=[];const e=[...new Set([...M(o)])].filter(r=>r&&r.trim());console.log(" ",e),e.forEach((r,t)=>{i.value.push({key:t,text:r,value:N()})});const s=yield I();console.log(" ",s.linkColour())}else i.value=[]})}},{field:"NodeID",component:"Select",label:l("AllMessage.visual.two.PreferencesList.NodeID"),componentProps:{options:a},colProps:{span:7,offset:0}},{field:"Group",component:"Select",label:l("AllMessage.visual.two.PreferencesList.Group"),componentProps:({formModel:o})=>({options:a.value,onChange:e=>{if(o.NodeID)if(e){c.value=[];const s=[...new Set([...M(e)])].filter(r=>r);console.log(" ",s),s.forEach((r,t)=>{c.value.push({key:t,text:r,value:N()})})}else c.value=[];else setTimeout(()=>{o.Group=""},100),V.error(l("AllMessage.visual.two.PreferencesList.groupSelectPlaceholder"))},placeholder:l("AllMessage.visual.two.PreferencesList.groupSelectPlaceholder")})},{field:"Nodesize",component:"Select",label:l("AllMessage.visual.two.PreferencesList.Nodesize"),componentProps:({formModel:o})=>({options:a.value,onChange:()=>{o.NodeID||(setTimeout(()=>{o.Nodesize=""},100),V.error(l("AllMessage.visual.two.PreferencesList.groupSelectPlaceholder")))},placeholder:l("AllMessage.visual.two.PreferencesList.groupSelectPlaceholder")})},{field:"opacity",component:"Input",label:l("AllMessage.visual.two.PreferencesList.opacity"),defaultValue:1,rules:[{validator:(o,e)=>y(this,null,function*(){return Number(e)<=1&&Number(e)>=.01?!0:Promise.reject("0.01~1")}),validateTrigger:"blur"}],colProps:{span:7,offset:0}},{field:"colorlinkColourArr",component:"Select",label:S("div",{style:"position: relative;top: 15px;"},[S("div",{},l("AllMessage.visual.two.PreferencesList.colorlinkColourArr"))]),slot:"colorlinkColourArr",colProps:{span:24,offset:0}},{field:"colorcolourScale",component:"Select",label:S("div",{style:"position: relative;top: 15px;"},[S("div",{},l("AllMessage.visual.two.PreferencesList.colorcolourScale"))]),slot:"colorcolourScale",colProps:{span:24,offset:0}}];C.forEach(o=>{o.component=="Select"&&(o.componentProps||(o.componentProps={}),o.componentProps.size="large")});const P=h([1,1]),[B,{validate:F,resetFields:H}]=K({labelWidth:150,schemas:C,baseColProps:{span:7,offset:1},actionColOptions:{span:18,offset:4},showActionButtonGroup:!1}),M=o=>{const e=JSON.parse(JSON.stringify(f.useVisualConstructionTwohander)),s=JSON.parse(JSON.stringify(f.useVisualConstructionTwobody)),r={};return e.forEach(t=>{r[t.title]=[],s.forEach(b=>{t.type!=="number"?r[t.title].push(b[t.dataIndex]):(t.dataIndex,r[t.title].push(Number(b[t.dataIndex])))})}),r[o]},N=()=>{for(var o="#",e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],s=0;s<6;s++){var r=parseInt(Math.random()*16);o+=e[r]}return o},I=()=>y(this,null,function*(){return{validate:yield F(),linkColour:()=>{let e="";return i.value.forEach(s=>e=e+`${s.text}%3D%23${s.value.slice(1)},`),e.slice(0,e.length-1)},colourScale:()=>{let e="";return c.value.forEach(s=>e=e+`${s.text}%3D%23${s.value.slice(1)},`),e.slice(0,e.length-1)}}});return G(()=>f.useVisualConstructionTwohander,()=>{H(),i.value=[],c.value=[],d.value=f.useVisualConstructionTwohander,d.value.forEach(o=>{o.label=o.title,o.value=o.title}),x.value=[],w.value=[],a.value=[],d.value.forEach(o=>{o.title.indexOf("Links")!=-1&&x.value.push(o),o.title.indexOf("Nodes")!=-1&&w.value.push(o),a.value.push(o)})}),J(()=>{const o=setInterval(()=>{f.useVisualConstructionTwohander&&(d.value=f.useVisualConstructionTwohander,d.value.forEach(e=>{e.label=e.title,e.value=e.title}),x.value=[],w.value=[],a.value=[],d.value.forEach(e=>{e.title.indexOf("Links")!=-1&&x.value.push(e),e.title.indexOf("Nodes")!=-1&&w.value.push(e),a.value.push(e)}),clearInterval(o))},1e3)}),k({returnedValue:I}),(o,e)=>{const s=T("a-radio"),r=T("a-radio-group");return A(),_("div",Y,[n(u(Q),{onRegister:u(B)},{colorlinkColourArr:p(()=>[g("div",Z,[n(r,{value:P.value[0],"onUpdate:value":e[0]||(e[0]=t=>P.value[0]=t)},{default:p(()=>[n(s,{style:{display:"block",height:"30px",lineHeight:"30px"},value:1},{default:p(()=>[m(v(u(l)("AllMessage.visual.two.PreferencesList.default"))+":",1)]),_:1}),n(s,{style:{display:"block",height:"30px",lineHeight:"30px"},value:2},{default:p(()=>[m(v(u(l)("AllMessage.visual.two.PreferencesList.custom"))+": ",1)]),_:1}),E(g("div",ee,[(A(!0),_(D,null,z(i.value,t=>(A(),_("div",{key:t,style:{margin:"0px 0px 0px 15px",width:"30%",height:"40px",display:"inline-block"}},[g("div",oe,[m(v(t.text)+v(u(l)("AllMessage.visual.two.PreferencesList.colorItem"))+" ",1),g("div",le,[n(j,{value:t.value,"onUpdate:value":b=>t.value=b,size:"mini",theme:"light",width:400},null,8,["value","onUpdate:value"])])])]))),128))],512),[[O,P.value[0]==2]])]),_:1},8,["value"])])]),colorcolourScale:p(()=>[g("div",te,[n(r,{value:P.value[1],"onUpdate:value":e[1]||(e[1]=t=>P.value[1]=t)},{default:p(()=>[n(s,{style:{display:"block",height:"30px",lineHeight:"30px"},value:1},{default:p(()=>[m(v(u(l)("AllMessage.visual.two.PreferencesList.default"))+":",1)]),_:1}),n(s,{style:{display:"block",height:"30px",lineHeight:"30px"},value:2},{default:p(()=>[m(v(u(l)("AllMessage.visual.two.PreferencesList.custom"))+": ",1)]),_:1}),E(g("div",se,[(A(!0),_(D,null,z(c.value,t=>(A(),_("div",{key:t,style:{margin:"0px 0px 0px 15px",width:"30%",height:"40px",display:"inline-block"}},[g("div",re,[m(v(t.text)+" "+v(u(l)("AllMessage.visual.two.PreferencesList.colorItem"))+" ",1),g("div",ae,[n(j,{value:t.value,"onUpdate:value":b=>t.value=b,size:"mini",theme:"light",width:400},null,8,["value","onUpdate:value"])])])]))),128))],512),[[O,P.value[1]==2]])]),_:1},8,["value"])])]),_:1},8,["onRegister"]),n(u(W),null,{default:p(()=>[n(u($),{span:4,offset:11},{default:p(()=>[n(u(q),{size:"middle",style:{background:"#3152ed",color:"#ffffff",margin:"0px 0px",borderRadius:"4px"},onClick:e[2]||(e[2]=()=>{L.toNextFn()})},{default:p(()=>[m(v(u(l)("AllMessage.visual.two.PreferencesList.confirm")),1)]),_:1})]),_:1})]),_:1})])}}});export{Be as default};
