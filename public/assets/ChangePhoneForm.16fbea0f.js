var E=(u,h,l)=>new Promise((c,m)=>{var f=t=>{try{n(l.next(t))}catch(o){m(o)}},d=t=>{try{n(l.throw(t))}catch(o){m(o)}},n=t=>t.done?c(t.value):Promise.resolve(t.value).then(f,d);n((l=l.apply(u,h)).next())});import{a as S,u as B,c as p,f as O,b as R}from"./useChangInfo.b588e1ad.js";import{b as k,F as I,u as G,r as T,s as V,l as x,j as e,q as M,ay as U,x as L,o as b,U as w,A as r,i,I as _,f as y,D as $,t as j,$ as q,G as z}from"./index.10ef4608.js";/* empty css              *//* empty css               */import{u as J}from"./useCountDown.23082dea.js";import"./index.3b12af83.js";const oe=k({__name:"ChangePhoneForm",props:{info:{type:String,default:""}},setup(u,{expose:h}){const l=u,{countDownFn:c,countDown:m,BtnDisabled:f}=J("CHANGE_BIND_PHONE"),d=I.Item,{t:n}=G(),t=T(),o=V({oldPhone:"",newPhone:"",code:""}),{getFormRules:v}=S(o),{validForm:P}=R(t),{createMessage:D}=z(),{getChangeState:N}=B(),F=x(()=>[p.CHANGE_BIND_PHONE,p.CHANGE_PHONE].includes(e(N))),A=()=>E(this,null,function*(){if(!(yield P(["newPhone"])))return!1;c();const a={id:"",phone:"",phoneRegion:"86"};e(N)===p.CHANGE_BIND_PHONE?(a.id="UNTIE_EMAIL_VERIFICATION",a.phone=o.newPhone):e(N)===p.CHANGE_PHONE&&(a.id="RESET_BIND_EMAIL_VERIFICATION",a.phone=o.newPhone);const g=yield q(a);D.success(n(g.msg))});M(()=>{localStorage.getItem("CHANGE_BIND_PHONE")&&c()}),U(()=>l.info,(s,a)=>{o.oldPhone=s});function H(){var s;(s=e(t))==null||s.resetFields()}return h({validForm:P,formData:o,claerForm:H}),(s,a)=>{const g=L("CustomButton");return e(F)?(b(),w(e(I),{key:0,model:o,rules:e(v),ref_key:"formRef",ref:t,"label-col":{span:4},"wrapper-col":{span:20}},{default:r(()=>[u.info?(b(),w(e(d),{key:0,name:"oldPhone",label:e(n)("sys.login.oldPhone")},{default:r(()=>[i(e(_),{value:e(O)(u.info,"tel"),disabled:"",autocomplete:""},null,8,["value"])]),_:1},8,["label"])):y("v-if",!0),i(e(d),{name:"newPhone",label:e(n)("sys.login.newPhone")},{default:r(()=>[i(e(_),{value:o.newPhone,"onUpdate:value":a[0]||(a[0]=C=>o.newPhone=C),placeholder:e(n)("sys.login.placeNewPhone"),autocomplete:""},null,8,["value","placeholder"])]),_:1},8,["label"]),i(e(d),{name:"code",label:e(n)("sys.login.notePhoneCode"),autocomplete:""},{default:r(()=>[i(e(_),{value:o.code,"onUpdate:value":a[1]||(a[1]=C=>o.code=C),placeholder:e(n)("sys.login.placeNotePhoneCode")},{suffix:r(()=>[i(g,{onClick:A,btnStyle:{height:"auto",padding:0,color:"#2f54eb",background:"#fff !important",border:"none"},disabled:e(f)},{default:r(()=>[$(j(e(f)?`${e(m)}s`:e(n)("sys.login.getCode")),1)]),_:1},8,["disabled"])]),_:1},8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])):y("v-if",!0)}}});export{oe as default};
