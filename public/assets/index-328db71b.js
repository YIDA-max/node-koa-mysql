import{a2 as $,a3 as z,a as E,bV as P,aE as j,bX as g,H as w,B as S,X as U,z as A,K as D,W as H,p as o,e as s,_ as C,E as W,cg as L,a7 as x,eb as X,m as c,$ as B}from"./index-4a8cc517.js";var G=z("small","default"),R=function(){return{id:String,prefixCls:String,size:c.oneOf(G),disabled:{type:Boolean,default:void 0},checkedChildren:c.any,unCheckedChildren:c.any,tabindex:c.oneOfType([c.string,c.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:c.oneOfType([c.string,c.number,c.looseBool]),checkedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!0),unCheckedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}},q=E({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:R(),slots:["checkedChildren","unCheckedChildren"],setup:function(n,r){var d=r.attrs,y=r.slots,V=r.expose,l=r.emit,m=P();j(function(){g(!("defaultChecked"in d),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),g(!("value"in d),"Switch","`value` is not validate prop, do you mean `checked`?")});var h=w(n.checked!==void 0?n.checked:d.defaultChecked),f=S(function(){return h.value===n.checkedValue});U(function(){return n.checked},function(){h.value=n.checked});var v=A("switch",n),t=v.prefixCls,p=v.direction,T=v.size,i=w(),b=function(){var e;(e=i.value)===null||e===void 0||e.focus()},_=function(){var e;(e=i.value)===null||e===void 0||e.blur()};V({focus:b,blur:_}),D(function(){H(function(){n.autofocus&&!n.disabled&&i.value.focus()})});var k=function(e,u){n.disabled||(l("update:checked",e),l("change",e,u),m.onFieldChange())},I=function(e){l("blur",e)},N=function(e){b();var u=f.value?n.unCheckedValue:n.checkedValue;k(u,e),l("click",u,e)},M=function(e){e.keyCode===B.LEFT?k(n.unCheckedValue,e):e.keyCode===B.RIGHT&&k(n.checkedValue,e),l("keydown",e)},O=function(e){var u;(u=i.value)===null||u===void 0||u.blur(),l("mouseup",e)},K=S(function(){var a;return a={},o(a,"".concat(t.value,"-small"),T.value==="small"),o(a,"".concat(t.value,"-loading"),n.loading),o(a,"".concat(t.value,"-checked"),f.value),o(a,"".concat(t.value,"-disabled"),n.disabled),o(a,t.value,!0),o(a,"".concat(t.value,"-rtl"),p.value==="rtl"),a});return function(){var a;return s(X,{insertExtraNode:!0},{default:function(){return[s("button",C(C(C({},W(n,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),d),{},{id:(a=n.id)!==null&&a!==void 0?a:m.id.value,onKeydown:M,onClick:N,onBlur:I,onMouseup:O,type:"button",role:"switch","aria-checked":h.value,disabled:n.disabled||n.loading,class:[d.class,K.value],ref:i}),[s("div",{class:"".concat(t.value,"-handle")},[n.loading?s(L,{class:"".concat(t.value,"-loading-icon")},null):null]),s("span",{class:"".concat(t.value,"-inner")},[f.value?x(y,n,"checkedChildren"):x(y,n,"unCheckedChildren")])])]}})}}});const Q=$(q);export{Q as S};