var C=(f,c,s)=>new Promise((x,d)=>{var h=m=>{try{y(s.next(m))}catch(P){d(P)}},v=m=>{try{y(s.throw(m))}catch(P){d(P)}},y=m=>m.done?x(m.value):Promise.resolve(m.value).then(h,v);y((s=s.apply(f,c)).next())});import{u as j,B as E}from"./useForm.98d7b8ca.js";import{u as T,bm as w,a as q,b as G,r as S,s as D,l as H,ay as Q,q as X,x as M,o as Y,c as J,i as o,A as a,j as i,X as I,e as u,t as g,I as F,D as _,aL as K,cl as Z,ab as ee,cv as te,p as le,k as oe}from"./index.10ef4608.js";/* empty css               */import{u as se}from"./casual.c3003c80.js";import U from"./V3ColorPicker.3aeb3ea0.js";import{Q as ae}from"./QuestionCircleOutlined.d4b3f92b.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";import"./ColorPicker.3725ed80.js";import"./ColorPanel.209bf7d4.js";import"./draggable.354c5b1e.js";import"./ColorPreview.6aea0981.js";import"./ColorHue.94d928ef.js";import"./ColorAlpha.071f638e.js";import"./ColorValue.246a701d.js";import"./ColorList.125944a3.js";const{t:n}=T(),ie=()=>{const f=[{field:"title",component:"Input",label:n("AllMessage.visual.two.PreferencesList.title"),labelWidth:110,componentProps:{style:{width:"100%"}},colProps:{span:7,offset:0}},{field:"height",component:"Input",label:n("AllMessage.visual.two.PreferencesList.height"),rules:[{validator:(c,s)=>C(void 0,null,function*(){return isNaN(s)&&s?Promise.reject(n("AllMessage.visual.two.PreferencesList.number")):!0}),validateTrigger:"blur"}],componentProps:{style:{width:"100%"}}},{field:"width",component:"Input",label:n("AllMessage.visual.two.PreferencesList.width"),rules:[{validator:(c,s)=>C(void 0,null,function*(){return isNaN(s)&&s?Promise.reject(n("AllMessage.visual.two.PreferencesList.number")):!0}),validateTrigger:"blur"}],componentProps:{style:{width:"100%"}}},{field:"x_axis",component:"Select",label:n("AllMessage.visual.two.PreferencesList.x_axis"),slot:"x_axisSelect",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u884C"}],componentProps:{style:{width:"100%"}},labelWidth:110,colProps:{span:7,offset:0}},{field:"y_axis",component:"Input",label:n("AllMessage.visual.two.PreferencesList.y_axis"),slot:"y_axisSelect",rules:[{required:!0,message:n("AllMessage.visual.two.PreferencesList.selectValue")}],componentProps:{style:{width:"100%"}}},{field:"x_vpt",component:"InputNumber",label:n("AllMessage.visual.two.PreferencesList.x_vpt"),defaultValue:1,componentProps:{min:1,max:100,style:{width:"100%"},placeholder:n("AllMessage.visual.two.PreferencesList.x_vptplaceholder")}},{field:"x_title",component:"Input",label:n("AllMessage.visual.two.PreferencesList.x_title"),slot:"x_title",labelWidth:110,colProps:{span:7,offset:0}},{field:"y_title",component:"Input",slot:"y_title",label:n("AllMessage.visual.two.PreferencesList.y_title")},{field:"y_vpt",component:"InputNumber",label:n("AllMessage.visual.two.PreferencesList.y_vpt"),defaultValue:.05,componentProps:{min:.01,max:100,step:.01,style:{width:"100%"},placeholder:n("AllMessage.visual.two.PreferencesList.y_vptplaceholder")}},{field:"name_column",component:"Input",labelWidth:110,label:w("div",{style:"position: relative;top: 15px;"},[w("div",{},n("AllMessage.visual.two.PreferencesList.name_columnOne")),w("div",{},n("AllMessage.visual.two.PreferencesList.name_columnTwo"))]),slot:"name_column",colProps:{span:7,offset:0}},{field:"labels_string",component:"Slider",label:" ",labelWidth:0,slot:"labels_string",colProps:{span:0,offset:0}},{field:"color",component:"Select",label:w("div",{style:"position: relative;top: 15px;"},[w("div",{},n("AllMessage.visual.two.PreferencesList.colorOne")),w("div",null,"(up/down/nodiff)")]),slot:"color",colProps:{span:10,offset:1}}];return f.forEach(c=>{c.component=="Select"&&(c.componentProps||(c.componentProps={}),c.componentProps.size="large")}),f};const b=f=>(le("data-v-5aa1e063"),f=f(),oe(),f),ne={style:{minHeight:"400px"}},re={style:{position:"relative"}},pe=b(()=>u("br",null,null,-1)),ue=_(" gene1 "),ce=b(()=>u("br",null,null,-1)),de=_(" gene2 "),ve=b(()=>u("br",null,null,-1)),fe=_(" gene3"),me={style:{position:"relative",top:"0px",margin:"0px 0px 0px 0px"}},_e=b(()=>u("span",{style:{width:"10px",height:"10px",backgroundColor:"#d42322",display:"inline-block",margin:"0px 5px 0px 0px",position:"relative",top:"0px"}},null,-1)),he=b(()=>u("span",{style:{width:"10px",height:"10px",backgroundColor:"#66bf9d",display:"inline-block",margin:"0px 5px 0px 0px",position:"relative",top:"0px"}},null,-1)),ge=b(()=>u("span",{style:{width:"10px",height:"10px",backgroundColor:"#c4c3c2",display:"inline-block",margin:"0px 5px 0px 0px",position:"relative",top:"0px"}},null,-1)),xe={style:{position:"relative",top:"0px",margin:"0px 0px 0px 0px"}},we={style:{position:"relative",top:"5px"}},be=_(" \xA0 "),ye=_(" \xA0 "),Pe=G({__name:"TheVolcanoFigure",props:{toNextFn:Function},setup(f,{expose:c}){const{t:s}=T(),x=se(),d=S(),h=S("1"),v=S(["#d42322","#66bf9d","#c4c3c3"]),y=D({display:"block",height:"40px",lineHeight:"40px"}),m=H(()=>{const p=`%23${v.value[0].slice(1)}`,t=`%23${v.value[1].slice(1)}`,L=`%23${v.value[2].slice(1)}`;return`up_color=${p}&down_color=${t}&none_color=${L}`}),[P,{setFieldsValue:V,validate:N,resetFields:O}]=j({labelWidth:115,schemas:ie(),baseColProps:{span:7,offset:1},actionColOptions:{span:18,offset:4},showActionButtonGroup:!1}),B=()=>C(this,null,function*(){return{validate:yield N(),colorArr:h.value=="1"?"up_color=%23d42322&down_color=%2366bf9d&none_color=%23c4c3c2":m.value}}),R=p=>{V({x_title:p})},W=p=>{V({y_title:p})};return Q(()=>x.useVisualConstructionTwohander,()=>{O(),d.value=[],d.value=x.useVisualConstructionTwohander,d.value.forEach(p=>{p.label=p.title,p.value=p.title})}),X(()=>{const p=setInterval(()=>{x.useVisualConstructionTwohander.length>0&&(d.value=x.useVisualConstructionTwohander,d.value.forEach(t=>{t.label=t.title,t.value=t.title}),clearInterval(p))},1e3)}),c({returnedValue:B}),(p,t)=>{const L=M("a-tooltip"),$=M("a-textarea"),k=M("a-radio"),z=M("a-radio-group");return Y(),J("div",ne,[o(i(E),{onRegister:i(P)},{x_axisSelect:a(({model:e,field:r})=>[o(i(I),{options:d.value,value:e[r],"onUpdate:value":l=>e[r]=l,allowClear:"",showSearch:"",placeholder:i(s)("AllMessage.visual.two.PreferencesList.placeholderLog"),size:"large",onChange:t[0]||(t[0]=l=>{R(l)}),"filter-option":(l,A)=>A.label.toLowerCase().indexOf(l.toLowerCase())>=0},null,8,["options","value","onUpdate:value","placeholder","filter-option"])]),y_axisSelect:a(({model:e,field:r})=>[o(i(I),{options:d.value,value:e[r],"onUpdate:value":l=>e[r]=l,allowClear:"",showSearch:"",size:"large",placeholder:i(s)("AllMessage.visual.two.PreferencesList.placeholderPvalue"),onChange:t[1]||(t[1]=l=>{W(l)}),"filter-option":(l,A)=>A.label.toLowerCase().indexOf(l.toLowerCase())>=0},null,8,["options","value","onUpdate:value","placeholder","filter-option"])]),y_title:a(({model:e,field:r})=>[o(L,{placement:"topLeft"},{title:a(()=>[u("span",null,g(i(s)("AllMessage.visual.two.PreferencesList.log10"))+", "+g(e[r]),1)]),default:a(()=>[o(i(F),{value:e[r],"onUpdate:value":l=>e[r]=l,placeholder:"",style:{width:"100%",height:"40px",border:"1px solid #d3d5db"}},null,8,["value","onUpdate:value"])]),_:2},1024)]),x_title:a(({model:e,field:r})=>[o(L,{placement:"topLeft"},{title:a(()=>[u("span",null,g(e[r]),1)]),default:a(()=>[o(i(F),{value:e[r],"onUpdate:value":l=>e[r]=l,style:{width:"100%",height:"40px",border:"1px solid #d3d5db"}},null,8,["value","onUpdate:value"])]),_:2},1024)]),name_column:a(({model:e,field:r})=>[o(i(I),{options:d.value,value:e[r],"onUpdate:value":l=>e[r]=l,allowClear:"",showSearch:"",size:"large",style:{width:"100%"},placeholder:i(s)("AllMessage.visual.two.PreferencesList.placeholderor"),"filter-option":(l,A)=>A.label.toLowerCase().indexOf(l.toLowerCase())>=0},null,8,["options","value","onUpdate:value","placeholder","filter-option"]),u("div",re,[o($,{value:e.labels_string,"onUpdate:value":l=>e.labels_string=l,style:{resize:"none",width:"100%",border:"1px solid #d3d5db"},size:"large","auto-size":{minRows:2,maxRows:5}},null,8,["value","onUpdate:value"]),o(L,null,{title:a(()=>[u("span",null,[_(g(i(s)("AllMessage.visual.two.PreferencesList.tooplateTitle"))+" ",1),pe,ue,ce,de,ve,fe])]),default:a(()=>[o(i(ae),{style:{position:"absolute",top:"10px",right:"10px"}})]),_:1})])]),color:a(()=>[u("div",me,[o(z,{value:h.value,"onUpdate:value":t[2]||(t[2]=e=>h.value=e),name:"radioGroup",style:{display:"flex"}},{default:a(()=>[o(k,{style:K(y),value:"1"},{default:a(()=>[_(g(i(s)("AllMessage.visual.two.PreferencesList.default"))+" : \xA0 ",1),_e,he,ge]),_:1},8,["style"])]),_:1},8,["value"])]),u("div",xe,[o(z,{value:h.value,"onUpdate:value":t[3]||(t[3]=e=>h.value=e),name:"radioGroup"},{default:a(()=>[o(k,{value:"2"},{default:a(()=>[_(g(i(s)("AllMessage.visual.two.PreferencesList.custom"))+":",1)]),_:1})]),_:1},8,["value"]),u("span",we,[o(U,{value:v.value[0],"onUpdate:value":t[4]||(t[4]=e=>v.value[0]=e),size:"mini",theme:"light",width:400},null,8,["value"]),be,o(U,{value:v.value[1],"onUpdate:value":t[5]||(t[5]=e=>v.value[1]=e),size:"mini",theme:"light",width:400},null,8,["value"]),ye,o(U,{value:v.value[2],"onUpdate:value":t[6]||(t[6]=e=>v.value[2]=e),size:"mini",theme:"light",width:400},null,8,["value"])])])]),_:1},8,["onRegister"]),o(i(te),null,{default:a(()=>[o(i(Z),{span:4,offset:11},{default:a(()=>[o(i(ee),{size:"middle",style:{background:"#3152ed",color:"#ffffff",margin:"0px 0px",borderRadius:"4px"},onClick:t[7]||(t[7]=()=>{f.toNextFn()})},{default:a(()=>[_(g(i(s)("AllMessage.visual.two.PreferencesList.confirm")),1)]),_:1})]),_:1})]),_:1})])}}});var ot=q(Pe,[["__scopeId","data-v-5aa1e063"]]);export{ot as default};
