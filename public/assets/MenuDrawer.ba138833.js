var h=(t,f,o)=>new Promise((c,y)=>{var r=a=>{try{m(o.next(a))}catch(i){y(i)}},u=a=>{try{m(o.throw(a))}catch(i){y(i)}},m=a=>a.done?c(a.value):Promise.resolve(a.value).then(r,u);m((o=o.apply(t,f)).next())});import{u as S,B as v}from"./useForm.98d7b8ca.js";import{u as D,bm as R,aR as E,b as _,v as x,r as A,l as k,j as s,o as G,U as V,A as q,i as U,B as N,dF as T,dC as j,dG as O,G as L}from"./index.10ef4608.js";import{a as z,B as H}from"./index.8dc2742f.js";const{t:e}=D(),Y=[{title:e("system.menu.menuName"),dataIndex:"meta.title",align:"left",format(t){return e(t)}},{title:e("system.menu.icon"),dataIndex:"meta.icon",customRender:({record:t})=>R(E,{name:t.meta.icon})},{title:e("system.menu.permission"),dataIndex:"code",ifShow:!1},{title:e("system.menu.component"),dataIndex:"component",ifShow:!1},{title:e("system.menu.path"),dataIndex:"path",ifShow:!1},{title:e("system.menu.order"),dataIndex:"meta.sort"},{title:e("system.menu.status"),slots:{customRender:"status"},dataIndex:"enable"}],b=t=>t==="1",p=t=>t==="2",W=[{label:e("system.menu.type"),field:"type",component:"RadioButtonGroup",required:!0,defaultValue:"1",componentProps:{options:[{label:e("system.menu.menu"),value:"1"},{label:e("system.menu.button"),value:"2"}]},colProps:{span:12}},{label:e("system.menu.parentMenu"),field:"parent",component:"TreeSelect",componentProps:{treeDefaultExpandAll:!1,replaceFields:{key:"id",value:"id"},getPopupContainer:()=>document.body}},{label:e("system.menu.name"),field:"title",required:!0,component:"Input"},{label:e("system.menu.permission"),field:"code",component:"Input",required:({values:t})=>p(t.type)},{label:e("system.menu.component"),field:"component",component:"Input",required:!0,ifShow:({values:t})=>b(t.type)},{label:e("system.menu.path"),field:"path",component:"Input",ifShow:({values:t})=>b(t.type),required:!0},{label:e("system.menu.icon"),field:"icon",component:"IconPicker",componentProps:{mode:"svg"},ifShow:({values:t})=>b(t.type)},{label:e("system.menu.currentActiveMenu"),helpMessage:"\u5F53\u524D\u6FC0\u6D3B\u7684\u83DC\u5355\u3002\u7528\u4E8E\u914D\u7F6E\u8BE6\u60C5\u9875\u65F6\u5DE6\u4FA7\u6FC0\u6D3B\u7684\u83DC\u5355\u8DEF\u5F84",field:"currentActiveMenu",component:"Input",ifShow:({values:t})=>!p(t.type)},{label:e("system.menu.status"),field:"enable",component:"Switch",defaultValue:!0,componentProps:{checkedChildren:e("system.menu.enable"),unCheckedChildren:e("system.menu.disable")},colProps:{span:12}},{label:e("system.menu.order"),field:"sort",component:"InputNumber",colProps:{span:12}},{label:e("system.menu.isDisplay"),field:"hidden",component:"RadioButtonGroup",defaultValue:!1,componentProps:{options:[{label:e("system.menu.yes"),value:!1},{label:e("system.menu.no"),value:!0}]},ifShow:({values:t})=>!p(t.type),colProps:{span:12}},{label:e("system.menu.hideBreadcrumb"),helpMessage:"\u9690\u85CF\u5F53\u524D\u83DC\u5355\u5728\u9762\u5305\u5C51\u4E0A\u663E\u793A",field:"hideBreadcrumb",component:"RadioButtonGroup",defaultValue:!1,componentProps:{options:[{label:e("system.menu.yes"),value:!0},{label:e("system.menu.no"),value:!1}]},ifShow:({values:t})=>!p(t.type),colProps:{span:12}},{label:e("system.menu.isHideChildrenInMenu"),field:"hideChildrenInMenu",helpMessage:"\u9690\u85CF\u6240\u6709\u5B50\u83DC\u5355",component:"RadioButtonGroup",defaultValue:!1,componentProps:{options:[{label:e("system.menu.yes"),value:!0},{label:e("system.menu.no"),value:!1}]},ifShow:({values:t})=>!p(t.type),colProps:{span:12}},{label:e("system.menu.remark"),field:"remark",component:"InputTextArea"},{label:"id",field:"id",component:"Input",show:!1},{label:"name",field:"name",component:"Input",show:!1}],$=_({__name:"MenuDrawer",emits:["success","register"],setup(t,{emit:f}){const{t:o}=D();function c(n){return n.forEach(l=>{var d;l.title=o(l.title),(d=l.children)!=null&&d.length&&c(l.children)}),n}const r=x().getUserInfo.username,u=A(null),{createMessage:m}=L(),[a,{resetFields:i,setFieldsValue:F,updateSchema:w,validate:I}]=S({labelWidth:120,schemas:W,showActionButtonGroup:!1,baseColProps:{span:24}}),P=k(()=>s(u)?o("system.menu.editMenu"):o("system.menu.addMenu")),[B,{setDrawerProps:g,closeDrawer:C}]=z(n=>h(this,null,function*(){i(),u.value=!!(n!=null&&n.isUpdate),yield w([{field:"type",componentProps:{disabled:s(u)&&r!=="admin"}},{field:"component",componentProps:{disabled:s(u)&&r!=="admin"}},{field:"path",componentProps:{disabled:s(u)&&r!=="admin"}}]),s(u)&&F(n.record);const l=yield T(),d=c(l);w([{field:"parent",componentProps:{treeData:d}}])}));function M(){return h(this,null,function*(){try{const n=yield I();g({confirmLoading:!0}),Reflect.set(n,"name",Reflect.get(n,"title")),Reflect.get(n,"parent")||(Reflect.set(n,"type","0"),Reflect.set(n,"parent","0")),s(u)?yield j(n):(yield O(n),m.success(o("\u9700\u8981\u914D\u5408\u540E\u7AEF\u5F00\u53D1\u624D\u4F1A\u6709\u5BF9\u5E94\u83DC\u5355\u9875\u9762\u5185\u5BB9"))),f("success"),C()}finally{g({confirmLoading:!1})}})}return(n,l)=>(G(),V(s(H),N(n.$attrs,{onRegister:s(B),showFooter:"",title:s(P),width:"40%",onOk:M}),{default:q(()=>[U(s(v),{onRegister:s(a)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{Z as M,$ as _,Y as c};
