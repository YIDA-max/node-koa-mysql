import{eH as Pe,eI as je,eJ as Ue,eK as He,eL as Re,eM as Ve,eN as Ye,eO as re,eP as Xe,eQ as We,aG as Je,eR as ze,a as le,H as X,aA as Ge,i as qe,B as I,aM as Qe,X as O,o as N,f as j,u as c,ay as Ze,h as F,c as Q,w as U,k as ie,af as oe,ea as et,ad as de,e as S,eS as tt,ai as Y,F as W,r as nt,ah as lt,aI as st,aJ as at,eT as ct,ae as J,aC as rt,dB as it,bT as ot,be as dt,bS as te,eU as ue,K as Ke,W as ut,Y as ve,dS as Ce,eV as ht,eW as ft,aw as yt,J as he,al as V,dL as pt,cl as gt,as as Z,eX as kt,er as St,ax as H,eY as xt,e7 as bt,br as Kt,L as fe,M as ye,S as vt,ag as Ct,en as pe,e3 as Lt,aF as ge,dT as At}from"./index-4a8cc517.js";import{f as _t}from"./fromPairs-e099444b.js";import{b as mt}from"./tree-56b28626.js";import{D as Et}from"./index-529a9bc6.js";import{g as Tt}from"./get-626e6e61.js";var wt=200;function Bt(e,n,d,f){var A=-1,k=He,l=!0,h=e.length,x=[],K=n.length;if(!h)return x;d&&(n=Pe(n,je(d))),f?(k=Re,l=!1):n.length>=wt&&(k=Ve,l=!1,n=new Ue(n));e:for(;++A<h;){var g=e[A],r=d==null?g:d(g);if(g=f||g!==0?g:0,l&&r===r){for(var t=K;t--;)if(n[t]===r)continue e;x.push(g)}else k(n,r,f)||x.push(g)}return x}var Nt=Ye(function(e,n){return re(e)?Bt(e,Xe(n,1,re,!0)):[]});const It=Nt;function ne(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((d,f)=>d+ne(e,f),""):Object.keys(n).reduce((d,f)=>d+(n[f]?ne(e,f):""),""):""}function Mt(e){return(n,d)=>(n&&typeof n!="string"&&(d=n,n=""),n=n?`${e}__${n}`:e,`${n}${ne(n,d)}`)}function Le(e){return[Mt(`${We}-${e}`)]}const ke=Symbol(),Se=Symbol();function Dt(e,n){if(!Je(e)||e[Se])return e;const{values:d,required:f,default:A,type:k,validator:l}=e,h=d||l?x=>{let K=!1,g=[];if(d&&(g=[...d,A],K||=g.includes(x)),l&&(K||=l(x)),!K&&g.length>0){const r=[...new Set(g)].map(t=>JSON.stringify(t)).join(", ");ze(`Invalid prop: validation failed${n?` for prop "${n}"`:""}. Expected one of [${r}], got value ${JSON.stringify(x)}.`)}return K}:void 0;return{type:typeof k=="object"&&k&&Object.getOwnPropertySymbols(k).includes(ke)?k[ke]:k,required:!!f,default:A,validator:h,[Se]:!0}}const Ft=e=>_t(Object.entries(e).map(([n,d])=>[n,Dt(d,n)]));var E=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(E||{});const Ot=["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],$t=Ft({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:[Array,Object],default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1},treeWrapperClassName:String}),Pt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},jt=le({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search"],setup(e,{emit:n}){const d=e,f=X(""),[A]=Le("tree-header"),k=Ge(),{t:l}=qe(),h=I(()=>{const t=k.headerTitle||d.title;return["mr-1","w-full",{["ml-5"]:t}]}),x=I(()=>{const{checkable:t}=d,a=[{label:l("component.tree.expandAll"),value:E.EXPAND_ALL},{label:l("component.tree.unExpandAll"),value:E.UN_EXPAND_ALL,divider:t}];return t?[{label:l("component.tree.selectAll"),value:E.SELECT_ALL},{label:l("component.tree.unSelectAll"),value:E.UN_SELECT_ALL,divider:t},...a,{label:l("component.tree.checkStrictly"),value:E.CHECK_STRICTLY},{label:l("component.tree.checkUnStrictly"),value:E.CHECK_UN_STRICTLY}]:a});function K(t){const{key:a}=t;switch(a){case E.SELECT_ALL:d.checkAll?.(!0);break;case E.UN_SELECT_ALL:d.checkAll?.(!1);break;case E.EXPAND_ALL:d.expandAll?.(!0);break;case E.UN_EXPAND_ALL:d.expandAll?.(!1);break;case E.CHECK_STRICTLY:n("strictly-change",!1);break;case E.CHECK_UN_STRICTLY:n("strictly-change",!0);break}}function g(t){n("search",t)}const r=Qe(g,200);return O(()=>f.value,t=>{r(t)}),O(()=>d.searchText,t=>{t!==f.value&&(f.value=t)}),(t,a)=>(N(),j("div",{class:de([c(A)(),"flex px-2 py-1.5 items-center"])},[c(k).headerTitle?Ze(t.$slots,"headerTitle",{key:0}):F("",!0),!c(k).headerTitle&&t.title?(N(),Q(c(et),{key:1,helpMessage:t.helpMessage},{default:U(()=>[ie(oe(t.title),1)]),_:1},8,["helpMessage"])):F("",!0),t.search||t.toolbar?(N(),j("div",Pt,[t.search?(N(),j("div",{key:0,class:de(c(h))},[S(c(tt),{placeholder:c(l)("common.searchText"),allowClear:"",value:f.value,"onUpdate:value":a[0]||(a[0]=i=>f.value=i)},null,8,["placeholder","value"])],2)):F("",!0),t.toolbar?(N(),Q(c(it),{key:1,onClick:a[1]||(a[1]=rt(()=>{},["prevent"]))},{overlay:U(()=>[S(c(Y),{onClick:K},{default:U(()=>[(N(!0),j(W,null,nt(c(x),i=>(N(),j(W,{key:i.value},[S(c(lt),st(at({key:i.value})),{default:U(()=>[ie(oe(i.label),1)]),_:2},1040),i.divider?(N(),Q(c(ct),{key:0})):F("",!0)],64))),128))]),_:1})]),default:U(()=>[S(c(J),{icon:"ion:ellipsis-vertical"})]),_:1})):F("",!0)])):F("",!0)],2))}}),Ut=({icon:e})=>e?ot(e)?dt(J,{icon:e,class:"mr-1"}):J:null;function Ht(e,n){function d(r){const t=[],a=r||c(e),{key:i,children:y}=c(n);if(!y||!i)return t;for(let u=0;u<a.length;u++){const o=a[u];t.push(o[i]);const b=o[y];b&&b.length&&t.push(...d(b))}return t}function f(r){const t=[],a=r||c(e),{key:i,children:y}=c(n);if(!y||!i)return t;for(let u=0;u<a.length;u++){const o=a[u];o.disabled!==!0&&o.selectable!==!1&&t.push(o[i]);const b=o[y];b&&b.length&&t.push(...f(b))}return t}function A(r,t){const a=[],i=t||c(e),{key:y,children:u}=c(n);if(!u||!y)return a;for(let o=0;o<i.length;o++){const b=i[o],m=b[u];r===b[y]?(a.push(b[y]),m&&m.length&&a.push(...d(m))):m&&m.length&&a.push(...A(r,m))}return a}function k(r,t,a){if(!r)return;const i=a||c(e),{key:y,children:u}=c(n);if(!(!u||!y))for(let o=0;o<i.length;o++){const b=i[o],m=b[u];if(b[y]===r){i[o]={...i[o],...t};break}else m&&m.length&&k(r,t,b[u])}}function l(r=1,t,a=1){if(!r)return[];const i=[],y=t||c(e)||[];for(let u=0;u<y.length;u++){const o=y[u],{key:b,children:m}=c(n),z=b?o[b]:"",$=m?o[m]:[];i.push(z),$&&$.length&&a<r&&(a+=1,i.push(...l(r,$,a)))}return i}function h({parentKey:r=null,node:t,push:a="push"}){const i=te(c(e));if(!r){i[a](t),e.value=i;return}const{key:y,children:u}=c(n);!u||!y||(ue(i,o=>{if(o[y]===r)return o[u]=o[u]||[],o[u][a](t),!0}),e.value=i)}function x({parentKey:r=null,list:t,push:a="push"}){const i=te(c(e));if(!(!t||t.length<1))if(r){const{key:y,children:u}=c(n);if(!u||!y)return;ue(i,o=>{if(o[y]===r){o[u]=o[u]||[];for(let b=0;b<t.length;b++)o[u][a](t[b]);return e.value=i,!0}})}else for(let y=0;y<t.length;y++)i[a](t[y])}function K(r,t){if(!r)return;const a=t||c(e),{key:i,children:y}=c(n);if(!(!y||!i))for(let u=0;u<a.length;u++){const o=a[u],b=o[y];if(o[i]===r){a.splice(u,1);break}else b&&b.length&&K(r,o[y])}}function g(r,t,a){if(!r&&r!==0)return null;const i=t||c(e),{key:y,children:u}=c(n);if(y)return i.forEach(o=>{if(a?.key||a?.key===0)return a;if(o[y]===r){a=o;return}o[u]&&o[u].length&&(a=g(r,o[u],a))}),a||null}return{deleteNodeByKey:K,insertNodeByKey:h,insertNodesByKey:x,filterByLevel:l,updateNodeByKey:k,getAllKeys:d,getChildrenKeys:A,getEnabledKeys:f,getSelectedNode:g}}function Rt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ce(e)}const ee="context-menu",Vt={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},xe=e=>{const{item:n}=e;return S("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,n)},[e.showIcon&&n.icon&&S(J,{class:"mr-2",icon:n.icon},null),S("span",null,[n.label])])},Yt=le({name:"ContextMenu",props:Vt,setup(e){const n=X(null),d=X(!1),f=I(()=>{const{axis:l,items:h,styles:x,width:K}=e,{x:g,y:r}=l||{x:0,y:0},t=(h||[]).length*40,a=K,i=document.body,y=i.clientWidth<g+a?g-a:g,u=i.clientHeight<r+t?r-t:r;return{...x,position:"absolute",width:`${K}px`,left:`${y+1}px`,top:`${u+1}px`,zIndex:9999}});Ke(()=>{ut(()=>d.value=!0)}),ve(()=>{const l=c(n);l&&document.body.removeChild(l)});function A(l,h){const{handler:x,disabled:K}=l;K||(d.value=!1,h?.stopPropagation(),h?.preventDefault(),x?.())}function k(l){return l.filter(x=>!x.hidden).map(x=>{const{disabled:K,label:g,children:r,divider:t=!1}=x,a={item:x,handler:A,showIcon:e.showIcon};return!r||r.length===0?S(W,null,[S(Y.Item,{disabled:K,class:`${ee}__item`,key:g},{default:()=>[S(xe,a,null)]}),t?S(Et,{key:`d-${g}`},null):null]):c(d)?S(Y.SubMenu,{key:g,disabled:K,popupClassName:`${ee}__popup`},{title:()=>S(xe,a,null),default:()=>k(r)}):null})}return()=>{let l;if(!c(d))return null;const{items:h}=e;return S("div",{class:ee},[S(Y,{inlineIndent:12,mode:"vertical",ref:n,style:c(f)},Rt(l=k(h))?l:{default:()=>[l]})])}}});const M={domList:[],resolve:()=>{}},Xt=function(e){const{event:n}=e||{};if(n&&n?.preventDefault(),!!ht)return new Promise(d=>{const f=document.body,A=document.createElement("div"),k={};e.styles&&(k.styles=e.styles),e.items&&(k.items=e.items),e.event&&(k.customEvent=n,k.axis={x:n.clientX,y:n.clientY});const l=S(Yt,k);ft(l,A);const h=function(){M.resolve("")};M.domList.push(A);const x=function(){M.domList.forEach(K=>{try{K&&f.removeChild(K)}catch{}}),f.removeEventListener("click",h),f.removeEventListener("scroll",h)};M.resolve=function(K){x(),d(K)},x(),f.appendChild(A),f.addEventListener("click",h),f.addEventListener("scroll",h)})},be=function(){M&&(M.resolve(""),M.domList=[])};function Wt(e=!0){return yt()&&e&&ve(()=>{be()}),[Xt,be]}function Jt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ce(e)}const en=le({name:"BasicTree",inheritAttrs:!1,props:$t,emits:Ot,setup(e,{attrs:n,slots:d,emit:f,expose:A}){const[k]=Le("tree"),l=he({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),h=he({startSearch:!1,searchText:"",searchData:[]}),x=X([]),[K]=Wt(),g=I(()=>{const{fieldNames:s}=e;return{children:"children",title:"title",key:"key",...s}}),r=I(()=>{let s={blockNode:!0,...n,...e,expandedKeys:l.expandedKeys,selectedKeys:l.selectedKeys,checkedKeys:l.checkedKeys,checkStrictly:l.checkStrictly,fieldNames:c(g),"onUpdate:expandedKeys":p=>{l.expandedKeys=p,f("update:expandedKeys",p)},"onUpdate:selectedKeys":p=>{l.selectedKeys=p,f("update:selectedKeys",p)},onCheck:(p,L)=>{let v=V(l.checkedKeys);if(pt(v)&&h.startSearch){const _=L.node.eventKey;v=It(v,z(_)),L.checked&&v.push(_),l.checkedKeys=v}else l.checkedKeys=p;const C=V(l.checkedKeys);f("update:value",C),f("check",C,L)},onRightClick:me};return gt(s,"treeData","class")}),t=I(()=>h.startSearch?h.searchData:c(x)),a=I(()=>!t.value||t.value.length===0),{deleteNodeByKey:i,insertNodeByKey:y,insertNodesByKey:u,filterByLevel:o,updateNodeByKey:b,getAllKeys:m,getChildrenKeys:z,getEnabledKeys:$,getSelectedNode:Ae}=Ht(x,g);function _e(s,p){return!p&&e.renderIcon&&Z(e.renderIcon)?e.renderIcon(s):p}async function me({event:s,node:p}){const{rightMenuList:L=[],beforeRightClick:v}=e;let C={event:s,items:[]};if(v&&Z(v)){let _=await v(p,s);Array.isArray(_)?C.items=_:Object.assign(C,_)}else C.items=L;C.items?.length&&(C.items=C.items.filter(_=>!_.hidden),K(C))}function R(s){l.expandedKeys=s}function Ee(){return l.expandedKeys}function se(s){l.selectedKeys=s}function Te(){return l.selectedKeys}function ae(s){l.checkedKeys=s}function we(){return l.checkedKeys}function ce(s){l.checkedKeys=s?$():[]}function G(s){l.expandedKeys=s?m():[]}function Be(s){l.checkStrictly=s}O(()=>e.searchValue,s=>{s!==h.searchText&&(h.searchText=s)},{immediate:!0}),O(()=>e.treeData,s=>{s&&q(h.searchText)});function q(s){if(s!==h.searchText&&(h.searchText=s),f("update:searchValue",s),!s){h.startSearch=!1;return}const{filterFn:p,checkable:L,expandOnSearch:v,checkOnSearch:C,selectedOnSearch:_}=c(e);h.startSearch=!0;const{title:P,key:D}=c(g),w=[];if(h.searchData=kt(c(x),T=>{const B=p?p(s,T,c(g)):T[P]?.includes(s)??!1;return B&&w.push(T[D]),B},c(g)),v){const T=St(h.searchData).map(B=>B[D]);T&&T.length&&R(T)}C&&L&&w.length&&ae(w),_&&w.length&&se(w)}function Ne(s,p){if(!(!e.clickRowToExpand||!p||p.length===0))if(!l.expandedKeys.includes(s))R([...l.expandedKeys,s]);else{const L=[...l.expandedKeys],v=L.findIndex(C=>C===s);v!==-1&&L.splice(v,1),R(L)}}H(()=>{x.value=e.treeData}),Ke(()=>{const s=parseInt(e.defaultExpandLevel);s>0?l.expandedKeys=o(s):e.defaultExpandAll&&G(!0)}),H(()=>{l.expandedKeys=e.expandedKeys}),H(()=>{l.selectedKeys=e.selectedKeys}),H(()=>{l.checkedKeys=e.checkedKeys}),O(()=>e.value,()=>{l.checkedKeys=V(e.value||[])},{immediate:!0}),O(()=>l.checkedKeys,()=>{const s=V(l.checkedKeys);f("update:value",s),f("change",s)}),H(()=>{l.checkStrictly=e.checkStrictly});const Ie={setExpandedKeys:R,getExpandedKeys:Ee,setSelectedKeys:se,getSelectedKeys:Te,setCheckedKeys:ae,getCheckedKeys:we,insertNodeByKey:y,insertNodesByKey:u,deleteNodeByKey:i,updateNodeByKey:b,getSelectedNode:Ae,checkAll:ce,expandAll:G,filterByLevel:s=>{l.expandedKeys=o(s)},setSearchValue:s=>{q(s)},getSearchValue:()=>h.searchText};function Me(s){const{actionList:p}=e;if(!(!p||p.length===0))return p.map((L,v)=>{let C=!0;return Z(L.show)?C=L.show?.(s):ge(L.show)&&(C=L.show),C?S("span",{key:v,class:k("action")},[L.render(s)]):null})}const De=I(()=>{const s=te(t.value);return xt(s,(p,L)=>{const v=h.searchText,{highlight:C}=c(e),{title:_,key:P,children:D}=c(g),w=_e(p,p.icon),T=Tt(p,_),B=v?T.indexOf(v):-1,Fe=h.startSearch&&!Lt(v)&&C&&B!==-1,Oe=`color: ${ge(C)?"#f50":C}`,$e=Fe?S("span",{class:c(r)?.blockNode?`${k("content")}`:""},[S("span",null,[T.slice(0,B)]),S("span",{style:Oe},[v]),S("span",null,[T.slice(B+v.length)])]):T;return p[_]=S("span",{class:`${k("title")} pl-2`,onClick:Ne.bind(null,p[P],p[D])},[d?.title?At(d,"title",p):S(W,null,[w&&S(Ut,{icon:w},null),$e,S("span",{class:k("actions")},[Me(p)])])]),p}),s});return A(Ie),()=>{let s;const{title:p,helpMessage:L,toolbar:v,search:C,checkable:_}=e,P=p||v||C||d.headerTitle,D={height:"calc(100% - 38px)"};return S("div",{class:[k(),"h-full",n.class]},[P&&S(jt,{checkable:_,checkAll:ce,expandAll:G,title:p,search:C,toolbar:v,helpMessage:L,onStrictlyChange:Be,onSearch:q,searchText:h.searchText},Jt(s=bt(d))?s:{default:()=>[s]}),S(Kt,{wrapperClassName:c(e.treeWrapperClassName),spinning:c(e.loading),tip:"加载中..."},{default:()=>[fe(S(vt,{style:D},{default:()=>[S(mt,Ct(c(r),{showIcon:!1,treeData:De.value}),null)]}),[[ye,!c(a)]]),fe(S(pe,{image:pe.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ye,c(a)]])]})])}}});export{en as _};
