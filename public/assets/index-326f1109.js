import{F as d}from"./index-1e0bc94a.js";import{bV as j,cs as w,ct as B,a as H,z as R,H as I,X as A,B as k,a6 as T,e as M,p as z,b$ as D}from"./index-4a8cc517.js";import{c as K,a as N,C as y}from"./index-6202a637.js";d.useInjectFormItemContext=j;d.ItemRest=w;d.install=function(e){return e.component(d.name,d),e.component(d.Item.name,d.Item),e.component(w.name,w),e};function U(e,a){var u=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!u){if(Array.isArray(e)||(u=B(e))||a&&e&&typeof e.length=="number"){u&&(e=u);var f=0,m=function(){};return{s:m,n:function(){return f>=e.length?{done:!0}:{done:!1,value:e[f++]}},e:function(c){throw c},f:m}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C=!0,b=!1,g;return{s:function(){u=u.call(e)},n:function(){var c=u.next();return C=c.done,c},e:function(c){b=!0,g=c},f:function(){try{!C&&u.return!=null&&u.return()}finally{if(b)throw g}}}}const F=H({compatConfig:{MODE:3},name:"ACheckboxGroup",props:K(),setup:function(a,u){var f=u.slots,m=u.emit,C=u.expose,b=j(),g=R("checkbox",a),l=g.prefixCls,c=g.direction,s=I((a.value===void 0?a.defaultValue:a.value)||[]);A(function(){return a.value},function(){s.value=a.value||[]});var h=k(function(){return a.options.map(function(n){return typeof n=="string"||typeof n=="number"?{label:n,value:n}:n})}),p=I(Symbol()),V=I(new Map),G=function(t){V.value.delete(t),p.value=Symbol()},$=function(t,i){V.value.set(t,i),p.value=Symbol()},O=I(new Map);A(p,function(){var n=new Map,t=U(V.value.values()),i;try{for(t.s();!(i=t.n()).done;){var o=i.value;n.set(o,!0)}}catch(v){t.e(v)}finally{t.f()}O.value=n});var E=function(t){var i=s.value.indexOf(t.value),o=D(s.value);i===-1?o.push(t.value):o.splice(i,1),a.value===void 0&&(s.value=o);var v=o.filter(function(r){return O.value.has(r)}).sort(function(r,x){var S=h.value.findIndex(function(_){return _.value===r}),P=h.value.findIndex(function(_){return _.value===x});return S-P});m("update:value",v),m("change",v),b.onFieldChange()};return T(N,{cancelValue:G,registerValue:$,toggleOption:E,mergedValue:s,name:k(function(){return a.name}),disabled:k(function(){return a.disabled})}),C({mergedValue:s}),function(){var n,t=a.id,i=t===void 0?b.id.value:t,o=null,v="".concat(l.value,"-group");return h.value&&h.value.length>0&&(o=h.value.map(function(r){var x;return M(y,{prefixCls:l.value,key:r.value.toString(),disabled:"disabled"in r?r.disabled:a.disabled,indeterminate:r.indeterminate,value:r.value,checked:s.value.indexOf(r.value)!==-1,onChange:r.onChange,class:"".concat(v,"-item")},{default:function(){return[r.label===void 0?(x=f.label)===null||x===void 0?void 0:x.call(f,r):r.label]}})})),M("div",{class:[v,z({},"".concat(v,"-rtl"),c.value==="rtl")],id:i},[o||((n=f.default)===null||n===void 0?void 0:n.call(f))])}}});y.Group=F;y.install=function(e){return e.component(y.name,y),e.component(F.name,F),e};
