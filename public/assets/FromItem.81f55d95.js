var p=(c,u,r)=>new Promise((e,o)=>{var f=a=>{try{m(r.next(a))}catch(s){o(s)}},h=a=>{try{m(r.throw(a))}catch(s){o(s)}},m=a=>a.done?e(a.value):Promise.resolve(a.value).then(f,h);m((r=r.apply(c,u)).next())});import{u as R,B as v}from"./useForm.98d7b8ca.js";import{u as D}from"./useSetFrom.689ec4a2.js";import{c as A}from"./add.f693dce6.js";import{a as P,b,u as F,aT as M,q as B,o as E,c as O,e as I,i as V,j as w}from"./index.10ef4608.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";import"./index.c8f8ec06.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";import"./TableAction.edf9a202.js";/* empty css                */import"./download.66a6d137.js";import"./index.504b494d.js";const j={style:{display:"flex",width:"100%",margin:"10px 0px","font-size":"14px"}},q=b({__name:"FromItem",props:{index:{type:Number,required:!0}},setup(c,{expose:u}){const r=c,{t:e}=F(),o=D(),[f,{validate:h,setFieldsValue:m}]=R({labelWidth:60,schemas:[{field:"name",component:"Input",rules:[{required:!0,message:e("AllMessage.nameRulesMessage")}],label:e("mom.increasedData.name"),colProps:{span:6,offset:0},componentProps:{style:{borderRadius:"5px",border:"1px solid #D6D8E0 !important",height:"36px"},placeholder:" "}},{field:"phone",component:"Input",componentProps:({formActionType:a,formModel:s})=>({onBlur:M(()=>p(this,null,function*(){try{if(s.phone){const{updateSchema:i,validate:g}=a,x={phone:s.phone},d=yield A(x);yield i({field:"phone",rules:[{pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message:e("AllMessage.phoneRulesMessageOne")},{max:50,message:e("AllMessage.phoneRulesMessageTwo")},{validator:()=>p(this,null,function*(){return d?Promise.resolve():Promise.reject(e("AllMessage.phoneRulesMessageValidatorOne"))})},{validator:(y,t)=>p(this,null,function*(){if(t&&d){o.addAddDataOwnerinfo[r.index].phone=t;let l=!0;return o.addAddDataOwnerinfo.forEach((n,_)=>{_!=r.index&&n.phone==t&&(l=!1)}),o.addShareinfo.forEach(n=>{n.phone==t&&(l=!1)}),l?Promise.resolve():Promise.reject(e("AllMessage.phoneRulesMessageValidatorTwo"))}})}]}),yield g(["phone"])}}catch(i){console.error(i)}}),100),style:{borderRadius:"5px",border:"1px solid #D6D8E0 !important",height:"36px"},placeholder:" "}),label:e("mom.increasedData.phone"),colProps:{span:9,offset:0}},{field:"mail",component:"Input",label:e("mom.increasedData.email"),colProps:{span:9,offset:0},required:!0,componentProps:({formActionType:a,formModel:s})=>({onBlur:M(()=>p(this,null,function*(){try{if(s.mail){const{updateSchema:i,validate:g}=a,x={mail:s.mail},d=yield A(x);yield i({field:"mail",rules:[{required:!0,message:e("AllMessage.mailRulesMessage")},{pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,message:e("AllMessage.mailRulesMessageOne")},{max:50,message:e("AllMessage.mailRulesMessageTwo")},{validator:()=>p(this,null,function*(){return d?Promise.resolve():Promise.reject(e("AllMessage.mailRulesMessageValidatorOne"))})},{validator:(y,t)=>p(this,null,function*(){if(t&&d){o.addAddDataOwnerinfo[r.index].mail=t;let l=!0;return o.addAddDataOwnerinfo.forEach((n,_)=>{_!=r.index&&n.mail==t&&(l=!1)}),o.addShareinfo.forEach(n=>{n.mail==t&&(l=!1)}),l?Promise.resolve():Promise.reject(e("AllMessage.mailRulesMessageValidatorTwo"))}})}]}),yield g(["mail"])}}catch(i){console.error(i)}}),100),style:{borderRadius:"5px",border:"1px solid #D6D8E0 !important",height:"36px"},placeholder:" "})}],showActionButtonGroup:!1});return B(()=>{}),u({validate:h,setFieldsValue:m}),(a,s)=>(E(),O("div",null,[I("div",j,[V(w(v),{onRegister:w(f),style:{width:"100%"}},null,8,["onRegister"])])]))}});var ie=P(q,[["__scopeId","data-v-18f507d8"]]);export{ie as default};
