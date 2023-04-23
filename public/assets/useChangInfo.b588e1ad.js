var E=(e,s,n)=>new Promise((r,o)=>{var i=l=>{try{a(n.next(l))}catch(d){o(d)}},c=l=>{try{a(n.throw(l))}catch(d){o(d)}},a=l=>l.done?r(l.value):Promise.resolve(l.value).then(i,c);a((n=n.apply(e,s)).next())});import{r as g,u as p,l as m,j as f}from"./index.10ef4608.js";import{c as w,p as R}from"./index.3b12af83.js";var u=(e=>(e.CODE_RULE_KEY="code_rule_key",e.PASSWORD_RULE_KEY="password_rule_key",e.EMAIL_RULE_KEY="email_rule_key",e.PHONE_RULE_KEY="phone_rule_key",e))(u||{});const{t}=p();var h=(e=>(e.CHANGE_PASSWORD="change_password",e.CHANGE_EMAIL="change_email",e.CHANGE_BIND_EMAIL="change_bind_email",e.CHANGE_PHONE="change_phone",e.CHANGE_BIND_PHONE="change_bind_phone",e))(h||{});const P=g("change_password");function O(){function e(n){P.value=n}const s=m(()=>P.value);return{setChangeState:e,getChangeState:s}}function v(e){function s(n=void 0){return E(this,null,function*(){const r=f(e);return r?yield r.validate(n):!1})}return{validForm:s}}function y(e){const s=r=>(o,i)=>E(this,null,function*(){return i?i!==r?Promise.reject(t("sys.login.diffPwd")):Promise.resolve():Promise.reject(t("sys.login.placeConfirmPwd"))});return{getFormRules:m(()=>{const r=_(u.EMAIL_RULE_KEY),o=_(u.PHONE_RULE_KEY),i=_(u.CODE_RULE_KEY),c=_(u.PASSWORD_RULE_KEY);switch(f(P)){case"change_password":return{oldPwd:[{required:!0,message:t("sys.login.placeOldPwd")}],newPwd:c,confrimPwd:[{required:!0,validator:s(e==null?void 0:e.newPwd)}]};case"change_email":return{newEmail:r,code:i};case"change_bind_email":return{newEmail:r,code:i};case"change_phone":return{newPhone:o,code:i};case"change_bind_phone":return{oldPhone:[{required:!0}],newPhone:o,code:i};default:return{}}})}}function _(e){return{[u.EMAIL_RULE_KEY]:[{required:!0,validator:(n,r)=>{const o=/^[a-zA-Z0-9_-]+[\.]*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return r?o.test(r)?Promise.resolve():Promise.reject(t("sys.login.emailError")):Promise.reject(t("sys.login.placeNewEmail"))}}],[u.PHONE_RULE_KEY]:[{required:!0,validator:(n,r)=>r?w.test(r)?Promise.resolve():Promise.reject(t("sys.login.phoneError")):Promise.reject(t("sys.login.placeNewPhone"))}],[u.CODE_RULE_KEY]:[{required:!0,validator:(n,r)=>r?Promise.resolve():Promise.reject(t("sys.login.smsPlaceholder"))}],[u.PASSWORD_RULE_KEY]:[{required:!0,validator:(n,r)=>{if(r){if(!R.test(r))return Promise.reject(t("sys.login.diffRulePwd"))}else return Promise.reject(t("sys.login.placeNewPwd"));return Promise.resolve()}}]}[e]}function C(e,s){if(!e)return"";if(e=String(e),s==="email"){const n=e.split("@");return n.length<=1?e:e.substring(0,3)+"****@"+n[1]}else if(s==="tel")return e.substr(0,3)+"****"+e.substr(7)}export{y as a,v as b,h as c,C as f,O as u};
