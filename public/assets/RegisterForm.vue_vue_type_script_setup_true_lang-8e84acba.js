import{u as F,a as h,b as S,L as z,_ as I}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-4aeef771.js";import{a as R,bv as i,i as P,H as c,J as B,B as U,u as e,o as L,f as V,e as s,w as t,k as u,af as m,V as p,F as E,h as N}from"./index-4a8cc517.js";import{F as f}from"./index-1e0bc94a.js";import"./index-4af91251.js";import{C as T}from"./index-6202a637.js";import{S as D}from"./index-87ae8662.js";import{C as G}from"./index-1d60304b.js";const O=R({__name:"RegisterForm",setup(H){const r=f.Item,g=i.Password,{t:n}=P(),{handleBackLogin:v,getLoginState:y}=F(),d=c(),x=c(!1),a=B({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:w}=h(a),{validForm:k}=S(d),b=U(()=>e(y)===z.REGISTER);async function C(){await k()}return(_,o)=>e(b)?(L(),V(E,{key:0},[s(I,{class:"enter-x"}),s(e(f),{class:"p-4 enter-x",model:a,rules:e(w),ref_key:"formRef",ref:d},{default:t(()=>[s(e(r),{name:"account",class:"enter-x"},{default:t(()=>[s(e(i),{class:"fix-auto-fill",size:"large",value:a.account,"onUpdate:value":o[0]||(o[0]=l=>a.account=l),placeholder:e(n)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"mobile",class:"enter-x"},{default:t(()=>[s(e(i),{size:"large",value:a.mobile,"onUpdate:value":o[1]||(o[1]=l=>a.mobile=l),placeholder:e(n)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"sms",class:"enter-x"},{default:t(()=>[s(e(G),{size:"large",class:"fix-auto-fill",value:a.sms,"onUpdate:value":o[2]||(o[2]=l=>a.sms=l),placeholder:e(n)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"password",class:"enter-x"},{default:t(()=>[s(e(D),{size:"large",value:a.password,"onUpdate:value":o[3]||(o[3]=l=>a.password=l),placeholder:e(n)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"confirmPassword",class:"enter-x"},{default:t(()=>[s(e(g),{size:"large",visibilityToggle:"",value:a.confirmPassword,"onUpdate:value":o[4]||(o[4]=l=>a.confirmPassword=l),placeholder:e(n)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),s(e(r),{class:"enter-x",name:"policy"},{default:t(()=>[s(e(T),{checked:a.policy,"onUpdate:checked":o[5]||(o[5]=l=>a.policy=l),size:"small"},{default:t(()=>[u(m(e(n)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),s(e(p),{type:"primary",class:"enter-x",size:"large",block:"",onClick:C,loading:x.value},{default:t(()=>[u(m(e(n)("sys.login.registerButton")),1)]),_:1},8,["loading"]),s(e(p),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(v)},{default:t(()=>[u(m(e(n)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])],64)):N("",!0)}});export{O as _};