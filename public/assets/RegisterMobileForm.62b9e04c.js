var x=(M,_,a)=>new Promise((r,b)=>{var w=o=>{try{u(a.next(o))}catch(c){b(c)}},h=o=>{try{u(a.throw(o))}catch(c){b(c)}},u=o=>o.done?r(o.value):Promise.resolve(o.value).then(w,h);u((a=a.apply(M,_)).next())});import{a as A,b as N,u as O,F,s as T,r as S,q as $,x as G,o as z,U as j,A as l,i,j as e,I as R,V as v,W as g,e as f,X as q,D as y,t as I,Y as C,f as K,Z as W,$ as X,G as Y}from"./index.10ef4608.js";/* empty css              *//* empty css               */import{v as E,u as Z,e as H}from"./myMitt.c3f6feaa.js";import{u as J}from"./useCountDown.23082dea.js";import{u as Q,L as ee}from"./useCustomLogin.887e5231.js";import"./index.3b12af83.js";import"./mitt.550594b0.js";const oe={class:"content flex"},te={class:"code"},ae={class:"mobile"},se={class:"verification flex"},ie={class:"code"},le={class:"btn"},ne=N({__name:"RegisterMobileForm",props:{handleBackLogin:{type:Function,default:()=>({})}},setup(M,{expose:_}){const{t:a}=O(),r=F.Item,b=F.useForm,{countDownFn:w,countDown:h,BtnDisabled:u}=J(E.REGISTERMOBILEFORM),o=T({username:void 0,code:"86",mobile:void 0,verification:void 0,password:void 0,confirmPwd:void 0}),{createMessage:c}=Y(),{setLoginState:L}=Q(),B=S(!1),P=S([{value:"86",label:"+86"}]),k=Z(o),{resetFields:V,validate:p,validateInfos:m}=b(o,k),D=()=>x(this,null,function*(){try{if(!(yield p()))return;B.value=!0;const t={username:o.username,verification:o.verification,password:o.password,phone:o.mobile},n=yield W(t);if(n.code!==200)return!1;c.success({content:a(n.msg),duration:2}),L(ee.LOGIN),H.emit("clearLoginForm")}catch(d){console.error(d)}finally{B.value=!1}}),U=()=>x(this,null,function*(){try{if(!(yield p("mobile")))return;w();const t={id:"EMAIL_VERIFICATION",phone:o.mobile,phoneRegion:o.code},n=yield X(t);if(n.code!==200)return;c.success({content:a(n.msg),duration:2})}catch(d){console.error(d)}finally{}});return $(()=>{localStorage.getItem(E.REGISTERMOBILEFORM)&&w()}),_({resetFields:V}),(d,t)=>{const n=G("CustomButton");return z(),j(e(F),null,{default:l(()=>[i(e(r),v(g(e(m).username)),{default:l(()=>[i(e(R),{value:o.username,"onUpdate:value":t[0]||(t[0]=s=>o.username=s),valueModifiers:{trim:!0},placeholder:e(a)("login.placeAccount"),autocomplete:"off",onBlur:t[1]||(t[1]=s=>e(p)("username",{trigger:"blur"}).catch(()=>{}))},null,8,["value","placeholder"])]),_:1},16),i(e(r),v(g(e(m).mobile)),{default:l(()=>[f("div",oe,[f("div",te,[i(e(q),{value:o.code,"onUpdate:value":t[2]||(t[2]=s=>o.code=s),options:P.value},null,8,["value","options"])]),f("div",ae,[i(e(R),{type:"number",value:o.mobile,"onUpdate:value":t[3]||(t[3]=s=>o.mobile=s),valueModifiers:{trim:!0},placeholder:e(a)("login.placePhone"),autocomplete:"off",onBlur:t[4]||(t[4]=s=>e(p)("mobile",{trigger:"blur"}).catch(()=>{}))},null,8,["value","placeholder"])])])]),_:1},16),i(e(r),v(g(e(m).verification)),{default:l(()=>[f("div",se,[f("div",ie,[i(e(R),{value:o.verification,"onUpdate:value":t[5]||(t[5]=s=>o.verification=s),valueModifiers:{trim:!0},placeholder:e(a)("login.placeCode"),autocomplete:"off"},null,8,["value","placeholder"])]),f("div",le,[i(n,{btnStyle:{width:"130px",height:"60px",background:"#EDEEF5",borderRadius:"4px",color:"#3287F7",fontSize:"20px"},onClick:U,disabled:e(u)},{default:l(()=>[y(I(e(u)?`${e(h)}s`:e(a)("login.getCode")),1)]),_:1},8,["disabled"])])])]),_:1},16),i(e(r),v(g(e(m).password)),{default:l(()=>[i(e(C),{value:o.password,"onUpdate:value":t[6]||(t[6]=s=>o.password=s),valueModifiers:{trim:!0},placeholder:e(a)("login.placePwd"),type:"password",autocomplete:"new-password",onBlur:t[7]||(t[7]=s=>e(p)("password",{trigger:"blur"}).catch(()=>{}))},null,8,["value","placeholder"]),K(' <StrengthMeter :show-input="false" :value="MobileForm.password" v-if="isPwdReg" /> ')]),_:1},16),i(e(r),v(g(e(m).confirmPwd)),{default:l(()=>[i(e(C),{value:o.confirmPwd,"onUpdate:value":t[8]||(t[8]=s=>o.confirmPwd=s),valueModifiers:{trim:!0},placeholder:e(a)("login.placeEnterPwd"),type:"password",autocomplete:"new-password",onBlur:t[9]||(t[9]=s=>e(p)("confirmPwd",{trigger:"blur"}).catch(()=>{}))},null,8,["value","placeholder"])]),_:1},16),i(e(r),null,{default:l(()=>[i(n,{btnStyle:{width:"100%",height:"60px",background:"#2F54EB",borderRadius:"4px",color:"#ffffff",fontSize:"20px",marginBottom:"20px"},onClick:D},{default:l(()=>[y(I(e(a)("login.register_1")),1)]),_:1}),i(n,{btnStyle:{width:"100%",height:"60px",background:"#ffffff",border:"1px solid #999999",borderRadius:"4px",color:"#666666",fontSize:"20px"},onClick:M.handleBackLogin},{default:l(()=>[y(I(e(a)("login.cacel")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})}}});var be=A(ne,[["__scopeId","data-v-cbda03b6"]]);export{be as default};
