var _=(b,c,s)=>new Promise((n,d)=>{var x=a=>{try{g(s.next(a))}catch(r){d(r)}},y=a=>{try{g(s.throw(a))}catch(r){d(r)}},g=a=>a.done?n(a.value):Promise.resolve(a.value).then(x,y);g((s=s.apply(b,c)).next())});import{u as O,bm as S,b as D,r as w,ay as k,q as G,x as j,o as V,c as M,i as f,A as h,j as v,X as F,e as C,D as N,t as P,y as q,z as W,ao as X,ap as $,cl as J,ab as K,cv as Q}from"./index.10ef4608.js";import{u as Y,B as Z}from"./useForm.98d7b8ca.js";/* empty css               */import{u as I}from"./casual.c3003c80.js";import ee from"./V3ColorPicker.3aeb3ea0.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";import"./ColorPicker.3725ed80.js";import"./ColorPanel.209bf7d4.js";import"./draggable.354c5b1e.js";import"./ColorPreview.6aea0981.js";import"./ColorHue.94d928ef.js";import"./ColorAlpha.071f638e.js";import"./ColorValue.246a701d.js";import"./ColorList.125944a3.js";const{t:m}=O(),te=()=>{const b=[{field:"title",component:"Input",label:m("AllMessage.visual.two.PreferencesList.title"),colProps:{span:7,offset:0}},{field:"height",component:"Input",label:m("AllMessage.visual.two.PreferencesList.height"),rules:[{validator:(c,s)=>_(void 0,null,function*(){return isNaN(s)&&s?Promise.reject(m("AllMessage.visual.two.PreferencesList.number")):!0}),validateTrigger:"blur"}]},{field:"width",component:"Input",label:m("AllMessage.visual.two.PreferencesList.width"),rules:[{validator:(c,s)=>_(void 0,null,function*(){return isNaN(s)&&s?Promise.reject(m("AllMessage.visual.two.PreferencesList.number")):!0}),validateTrigger:"blur"}]},{field:"alpha",component:"Input",label:m("AllMessage.visual.two.PreferencesList.alpha"),defaultValue:1,rules:[{validator:(c,s)=>_(void 0,null,function*(){return Number(s)<=1&&Number(s)>=.01?!0:Promise.reject("0.01~1")}),validateTrigger:"blur"}],colProps:{span:7,offset:0}},{field:"col_chose",component:"Select",slot:"selectRowSelect",label:m("AllMessage.visual.two.PreferencesList.col_choseTwo")},{field:"x_title",component:"Input",label:m("AllMessage.visual.two.PreferencesList.x_title")},{field:"y_title",component:"Input",label:m("AllMessage.visual.two.PreferencesList.y_title"),colProps:{span:7,offset:0}},{field:"color",component:"Select",label:S("div",{style:"position: relative;top: 15px;"},[S("div",{},m("AllMessage.visual.two.PreferencesList.colorOne"))]),slot:"color",colProps:{span:24,offset:0}}];return b.forEach(c=>{c.component=="Select"&&(c.componentProps||(c.componentProps={}),c.componentProps.size="large")}),b},oe={style:{minHeight:"400px"}},le={style:{position:"relative",top:"0px",margin:"0px 0px 0px 0px"}},se={style:{width:"900px",maxHeight:"130px",height:"130px",overflow:"auto",border:"1px solid #d3d5db"}},ae={style:{}},re={style:{position:"relative",display:"inline-block",top:"8px"}},ie=C("br",null,null,-1),Ee=D({__name:"graph",props:{toNextFn:Function},setup(b,{expose:c}){const{t:s}=O(),n=I(),d=w([]),x=w([]),y=w(1),g=w(""),a=w([]),r=w([]),z=w([]);k(()=>a.value,()=>{let t="";a.value.map(o=>{t=t+`%23${o.color.slice(1)},`}),t=t.substr(0,t.length-1),g.value=t},{deep:!0}),k(()=>n.useVisualConstructionTwohander,()=>{E(),d.value=[],a.value=[],r.value=[];const t=[...n.useVisualConstructionTwohander],o=[...n.useVisualConstructionTwobody];t.map(l=>{o.length>0&&(isNaN(o[0][l.dataIndex])||(l.label=l.title,l.value=l.title,d.value.push(l),a.value.push({color:L()}),r.value.push({title:l.title})))})});const L=()=>{for(var t="#",o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],l=0;l<6;l++){var e=parseInt(Math.random()*16);t+=o[e]}return t},B=t=>{if(t.length>0){r.value=[];const o=[...n.useVisualConstructionTwohander],l=[...n.useVisualConstructionTwobody];t.forEach(e=>{R(e,o,l)&&r.value.push({title:e})}),r.value.forEach((e,i)=>{a.value[i]={color:L()}})}else{d.value=[],r.value=[],a.value=[];const o=[...n.useVisualConstructionTwohander],l=[...n.useVisualConstructionTwobody];o.map(e=>{isNaN(l[0][e.dataIndex])||(e.label=e.title,e.value=e.title,d.value.push(e),a.value.push({color:L()}),r.value.push({title:e.title}))})}};function R(t,o,l){const e=o.find(p=>p.title===t);if(!e)return!1;const i=e.dataIndex;for(const p of l){const u=p[i];if(isNaN(u))return!1}return!0}const[U,{validate:T,resetFields:E}]=Y({labelWidth:110,schemas:te(),baseColProps:{span:7,offset:1},actionColOptions:{span:18,offset:4},showActionButtonGroup:!1}),H=()=>_(this,null,function*(){return g.value?{validate:yield T(),colorArr:g.value}:{validate:yield T()}});return G(()=>{const t=setInterval(()=>{if(n.useVisualConstructionTwohander){x.value=n.useVisualConstructionTwohander,x.value.forEach(e=>{e.label=e.title,e.value=e.title}),d.value=[],a.value=[],r.value=[];const o=[...n.useVisualConstructionTwohander],l=[...n.useVisualConstructionTwobody];o.map(e=>{isNaN(l[0][e.dataIndex])||(e.label=e.title,e.value=e.title,d.value.push(e),a.value.push({color:L()}),r.value.push({title:e.title}))}),clearInterval(t)}},1e3)}),c({returnedValue:H,controlGroup:z}),(t,o)=>{const l=j("a-radio"),e=j("a-radio-group");return V(),M("div",oe,[f(v(Z),{onRegister:v(U)},{comparisons:h(({model:i,field:p})=>[f(v(F),{size:"large",options:d.value,value:i[p],"onUpdate:value":u=>i[p]=u,allowClear:"",showSearch:"","filter-option":(u,A)=>A.label.toLowerCase().indexOf(u.toLowerCase())>=0},null,8,["options","value","onUpdate:value","filter-option"])]),selectRowSelect:h(({model:i,field:p})=>[f(v(F),{size:"large",options:x.value,mode:"multiple",placeholder:v(s)("AllMessage.visual.two.PreferencesList.selectRowSelectPlaceholder"),value:i[p],"onUpdate:value":u=>i[p]=u,allowClear:"",showSearch:"",onChange:o[0]||(o[0]=u=>{B(u)}),"filter-option":(u,A)=>A.label.toLowerCase().indexOf(u.toLowerCase())>=0},null,8,["options","placeholder","value","onUpdate:value","filter-option"])]),color:h(()=>[C("div",le,[f(e,{value:y.value,"onUpdate:value":o[1]||(o[1]=i=>y.value=i)},{default:h(()=>[f(l,{style:{display:"block",height:"30px",lineHeight:"30px"},value:1},{default:h(()=>[N(P(v(s)("AllMessage.visual.two.PreferencesList.default"))+":",1)]),_:1}),f(l,{style:{display:"block",height:"30px",lineHeight:"30px"},value:2},{default:h(()=>[N(P(v(s)("AllMessage.visual.two.PreferencesList.custom"))+": ",1)]),_:1}),q(C("div",se,[(V(!0),M(X,null,$(r.value,(i,p)=>(V(),M("div",{key:i.title,style:{margin:"0px 0px 0px 15px",width:"30%",height:"40px",display:"inline-block"}},[C("div",ae,[N(P(i.title)+P(v(s)("AllMessage.visual.two.PreferencesList.colorItem"))+" ",1),C("div",re,[f(ee,{value:a.value[p].color,"onUpdate:value":u=>a.value[p].color=u,size:"mini",theme:"light",width:400},null,8,["value","onUpdate:value"])])])]))),128))],512),[[W,y.value==2]])]),_:1},8,["value"])])]),_:1},8,["onRegister"]),ie,f(v(Q),null,{default:h(()=>[f(v(J),{span:4,offset:11},{default:h(()=>[f(v(K),{size:"middle",style:{background:"#3152ed",color:"#ffffff",margin:"0px 0px",borderRadius:"4px"},onClick:o[2]||(o[2]=()=>{b.toNextFn()})},{default:h(()=>[N(P(v(s)("AllMessage.visual.two.PreferencesList.confirm")),1)]),_:1})]),_:1})]),_:1})])}}});export{Ee as default};
