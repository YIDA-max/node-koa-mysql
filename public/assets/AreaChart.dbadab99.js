var P=(i,l,t)=>new Promise((n,v)=>{var b=e=>{try{h(t.next(e))}catch(p){v(p)}},x=e=>{try{h(t.throw(e))}catch(p){v(p)}},h=e=>e.done?n(e.value):Promise.resolve(e.value).then(b,x);h((t=t.apply(i,l)).next())});import{u as F,bm as k,b as D,r as y,ay as S,q as G,x as O,o as M,c as N,i as g,A as w,j as f,X as z,e as C,D as A,t as _,y as q,z as W,ao as X,ap as $,cl as J,ab as K,cv as Q}from"./index.10ef4608.js";import{u as Y,B as Z}from"./useForm.98d7b8ca.js";/* empty css               */import{u as ee}from"./casual.c3003c80.js";import te from"./V3ColorPicker.3aeb3ea0.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";import"./ColorPicker.3725ed80.js";import"./ColorPanel.209bf7d4.js";import"./draggable.354c5b1e.js";import"./ColorPreview.6aea0981.js";import"./ColorHue.94d928ef.js";import"./ColorAlpha.071f638e.js";import"./ColorValue.246a701d.js";import"./ColorList.125944a3.js";const{t:r}=F(),oe=()=>{let i="#";const l=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];for(let t=0;t<6;t++){const n=parseInt(Math.random()*16);i+=l[n]}return i},le=()=>{const i=[{field:"title",component:"Input",label:r("AllMessage.visual.two.PreferencesList.title"),colProps:{span:7,offset:0}},{field:"x_title",component:"Input",label:r("AllMessage.visual.two.PreferencesList.x_title")},{field:"y_title",component:"Input",label:r("AllMessage.visual.two.PreferencesList.y_title")},{field:"height",component:"Input",label:r("AllMessage.visual.two.PreferencesList.height"),rules:[{validator:(l,t)=>P(void 0,null,function*(){return isNaN(t)&&t?Promise.reject(r("AllMessage.visual.two.PreferencesList.number")):!0}),validateTrigger:"blur"}],colProps:{span:7,offset:0}},{field:"width",component:"Input",label:r("AllMessage.visual.two.PreferencesList.width"),rules:[{validator:(l,t)=>P(void 0,null,function*(){return isNaN(t)&&t?Promise.reject(r("AllMessage.visual.two.PreferencesList.number")):!0}),validateTrigger:"blur"}]},{field:"alpha",component:"Input",label:r("AllMessage.visual.two.PreferencesList.alpha"),defaultValue:1,rules:[{validator:(l,t)=>P(void 0,null,function*(){return Number(t)<=1&&Number(t)>=.01?!0:Promise.reject("0.01~1")}),validateTrigger:"blur"}]},{field:"col_chose",component:"Select",slot:"selectRowSelect",label:r("AllMessage.visual.two.PreferencesList.col_choseTwo"),colProps:{span:7,offset:0}},{field:"type",component:"Select",label:r("AllMessage.visual.two.PreferencesList.type"),componentProps:{options:[{label:r("AllMessage.visual.two.PreferencesList.typeOne"),value:"1",key:"1"},{label:r("AllMessage.visual.two.PreferencesList.typeTwo"),value:"2",key:"2"},{label:r("AllMessage.visual.two.PreferencesList.typeThree"),value:"3",key:"3"}]}},{field:"fontsize",component:"InputNumber",label:r("AllMessage.visual.two.PreferencesList.fontsize"),componentProps:{min:10,max:100,style:{width:"100%"}}},{field:"color",component:"Select",label:k("div",{style:"position: relative;top: 15px;"},[k("div",{},r("AllMessage.visual.two.PreferencesList.colorOne"))]),slot:"color",colProps:{span:24,offset:0}}];return i.forEach(l=>{l.component=="Select"&&(l.componentProps||(l.componentProps={}),l.componentProps.size="large")}),i},j=(i,l,t,n,v)=>{const b=setInterval(()=>{if(i.useVisualConstructionTwohander){l.value=i.useVisualConstructionTwohander,l.value.forEach(e=>{e.label=e.title,e.value=e.title}),t.value=[],n.value=[],v.value=[];const x=[...i.useVisualConstructionTwohander],h=[...i.useVisualConstructionTwobody];x.map(e=>{isNaN(h[0][e.dataIndex])||(e.label=e.title,e.value=e.title,t.value.push(e),n.value.push({color:oe()}),v.value.push({title:e.title}))}),clearInterval(b)}},1e3)},se={style:{minHeight:"400px"}},ae={style:{position:"relative",top:"0px",margin:"0px 0px 0px 0px"}},re={style:{width:"900px",maxHeight:"130px",height:"130px",overflow:"auto",border:"1px solid #d3d5db"}},ie={style:{}},ne={style:{position:"relative",display:"inline-block",top:"8px"}},He=D({__name:"AreaChart",props:{toNextFn:Function},setup(i,{expose:l}){const{t}=F(),n=ee(),v=y([]),b=y([]),x=y(1),h=y(""),e=y([]),p=y([]),B=y([]);S(()=>e.value,()=>{let s="";e.value.map(a=>{s=s+`%23${a.color.slice(1)},`}),s=s.substr(0,s.length-1),h.value=s},{deep:!0}),S(()=>n.useVisualConstructionTwohander,()=>{H(),j(n,b,v,e,p)});const R=s=>{if(s.length>0){p.value=[];const a=[...n.useVisualConstructionTwohander],m=[...n.useVisualConstructionTwobody];s.forEach(o=>{U(o,a,m)&&p.value.push({title:o})}),p.value.forEach((o,u)=>{e.value[u]={color:T()}})}else{v.value=[],p.value=[],e.value=[];const a=[...n.useVisualConstructionTwohander],m=[...n.useVisualConstructionTwobody];a.map(o=>{isNaN(m[0][o.dataIndex])||(o.label=o.title,o.value=o.title,v.value.push(o),e.value.push({color:T()}),p.value.push({title:o.title}))})}};function U(s,a,m){const o=a.find(d=>d.title===s);if(!o)return!1;const u=o.dataIndex;for(const d of m){const c=d[u];if(isNaN(c))return!1}return!0}const T=()=>{for(var s="#",a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],m=0;m<6;m++){var o=parseInt(Math.random()*16);s+=a[o]}return s},[E,{validate:V,resetFields:H}]=Y({labelWidth:110,schemas:le(),baseColProps:{span:7,offset:1},actionColOptions:{span:18,offset:4},showActionButtonGroup:!1}),I=()=>P(this,null,function*(){return h.value?{validate:yield V(),colorArr:h.value}:{validate:yield V()}});return G(()=>{j(n,b,v,e,p)}),l({returnedValue:I,controlGroup:B}),(s,a)=>{const m=O("a-radio"),o=O("a-radio-group");return M(),N("div",se,[g(f(Z),{onRegister:f(E)},{comparisons:w(({model:u,field:d})=>[g(f(z),{size:"large",options:v.value,value:u[d],"onUpdate:value":c=>u[d]=c,allowClear:"",showSearch:"","filter-option":(c,L)=>L.label.toLowerCase().indexOf(c.toLowerCase())>=0},null,8,["options","value","onUpdate:value","filter-option"])]),selectRowSelect:w(({model:u,field:d})=>[g(f(z),{size:"large",options:b.value,mode:"multiple",placeholder:f(t)("AllMessage.visual.two.PreferencesList.selectRowSelectPlaceholder"),value:u[d],"onUpdate:value":c=>u[d]=c,onChange:a[0]||(a[0]=c=>{R(c)}),allowClear:"",showSearch:"","filter-option":(c,L)=>L.label.toLowerCase().indexOf(c.toLowerCase())>=0},null,8,["options","placeholder","value","onUpdate:value","filter-option"])]),color:w(()=>[C("div",ae,[g(o,{value:x.value,"onUpdate:value":a[1]||(a[1]=u=>x.value=u)},{default:w(()=>[g(m,{style:{display:"block",height:"30px",lineHeight:"30px"},value:1},{default:w(()=>[A(_(f(t)("AllMessage.visual.two.PreferencesList.default"))+":",1)]),_:1}),g(m,{style:{display:"block",height:"30px",lineHeight:"30px"},value:2},{default:w(()=>[A(_(f(t)("AllMessage.visual.two.PreferencesList.custom"))+": ",1)]),_:1}),q(C("div",re,[(M(!0),N(X,null,$(p.value,(u,d)=>(M(),N("div",{key:u.title,style:{margin:"0px 0px 0px 15px",width:"30%",height:"40px",display:"inline-block"}},[C("div",ie,[A(_(u.title)+_(f(t)("AllMessage.visual.two.PreferencesList.colorItem"))+" ",1),C("div",ne,[g(te,{value:e.value[d].color,"onUpdate:value":c=>e.value[d].color=c,size:"mini",theme:"light",width:400},null,8,["value","onUpdate:value"])])])]))),128))],512),[[W,x.value==2]])]),_:1},8,["value"])])]),_:1},8,["onRegister"]),g(f(Q),null,{default:w(()=>[g(f(J),{span:4,offset:11},{default:w(()=>[g(f(K),{size:"middle",style:{background:"#3152ed",color:"#ffffff",border:"1px solid #666666",margin:"0px 0px",borderRadius:"4px"},onClick:a[2]||(a[2]=()=>{i.toNextFn()})},{default:w(()=>[A(_(f(t)("AllMessage.visual.two.PreferencesList.confirm")),1)]),_:1})]),_:1})]),_:1})])}}});export{He as default};
