var y=(w,b,r)=>new Promise((g,l)=>{var i=s=>{try{c(r.next(s))}catch(d){l(d)}},m=s=>{try{c(r.throw(s))}catch(d){l(d)}},c=s=>s.done?g(s.value):Promise.resolve(s.value).then(i,m);c((r=r.apply(w,b)).next())});import{b as L,u as A,T as E,r as t,j as o,dH as V,o as x,U as H,A as N,f as p,i as O,B as S,G as U}from"./index.10ef4608.js";/* empty css               */import{b as $,B as j}from"./index.c8f8ec06.js";import{_ as F}from"./Tree.vue_vue_type_style_index_0_lang.ee074416.js";import{a as G,b as q}from"./roles.32b28635.js";import"./useAttrs.1d381a3e.js";import"./useWindowSizeFn.3e5b045d.js";import"./useModalContext.52c86736.js";/* empty css               */const oe=L({__name:"DistributionModal",emits:["success","register"],setup(w,{emit:b}){const{t:r}=A();E.TabPane;const{createMessage:g}=U();t("1");const l=t([]),i=t();let m=null;const c=t("ALL"),s=t([]),d=t([]),v=t(!1),k=t(!0);function _(a){return a.forEach(e=>{var u;e.title=r(e.title),(u=e.children)!=null&&u.length&&_(e.children)}),a}const[T,{setModalProps:n,closeModal:B}]=$(a=>y(this,null,function*(){k.value=!0;const{record:e,isUpdate:u}=a;v.value=u,n({showCancelBtn:u,showOkBtn:u}),o(l).length||(n({loading:!0}),l.value=_(yield V()),n({loading:!1})),c.value=e.scope,i.value&&i.value.checkAll(!1);const{id:C}=e;m=C,n({loading:!0});const M=(yield G(C)).map(f=>f.id);s.value=M;const I=f=>{f.forEach(h=>{h.children&&h.children.length&&(d.value.push(h.id),I(h.children))})};I(l.value);const R=t([]);for(let f of M)d.value.includes(f)||R.value.push(f);i.value.setCheckedKeys(R.value),n({loading:!1})})),P=t([]),D=(a,{halfCheckedKeys:e})=>{k.value=!1,P.value=[...a,...e]},K=()=>y(this,null,function*(){let a={deptIds:[],powerIds:o(k)?o(s):o(P),roleId:m,scope:o(c)};try{n({confirmLoading:!0}),yield q(a),B(),b("success"),g.success(r("system.role.distributionPermissionsSuccess"))}catch(e){throw new Error(e.message)}finally{n({confirmLoading:!1})}});return(a,e)=>(x(),H(o(j),S(a.$attrs,{onRegister:o(T),title:o(r)("system.role.distributionPermissions"),minHeight:520,centered:"",onOk:K}),{default:N(()=>[p(' <Tabs v-model:activeKey="activeKey"> '),p(` <TabPane key="1" :tab="t('system.role.menuPermissions')"> `),O(o(F),{title:o(r)("system.role.menuDistribution"),ref_key:"treeRef",ref:i,treeData:l.value,replaceFields:{key:"id"},checkable:"",toolbar:v.value,onCheck:D,disabled:!v.value},null,8,["title","treeData","toolbar","disabled"]),p(" </TabPane> "),p(" </Tabs> ")]),_:1},16,["onRegister","title"]))}});export{oe as default};
