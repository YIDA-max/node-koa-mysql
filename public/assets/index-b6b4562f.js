import{i as oe,ax as L,u as e,ak as ue,a as M,ao as de,dJ as fe,e as H,e7 as pe,e8 as ge,dS as me,av as he,au as ye,H as m,e9 as be,B as S,X as ne,K as ve,Y as ae,W as _,bc as Ce,o as C,c as O,w as g,L as Me,f as I,ay as T,aD as He,S as Se,T as le,F as ke,aB as V,h as q,D as Be,ad as Fe,j as we,k as z,af as Y,ag as W,ea as _e,aN as Te,aw as J,aY as Oe,cl as j,bf as G,r as Q,as as se,e2 as $e,aI as Z,aJ as ee,J as re,al as E,cm as Pe,bq as De,e1 as ie,bt as Ne,bA as Re}from"./index-4a8cc517.js";import{u as We}from"./useWindowSizeFn-5faf2053.js";import{a as xe,F as je}from"./FullscreenOutlined-b0e65115.js";const{t:te}=oe(),Ee={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:te("common.cancelText")},okText:{type:String,default:te("common.okText")},closeFunc:Function},U=Object.assign({},Ee,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:{type:[String,Number],default:"40%"},wrapClassName:{type:String},zIndex:{type:Number}});function Ie(a){const l=(o,i)=>getComputedStyle(o)[i],r=o=>{if(!o)return;o.setAttribute("data-drag",e(a.draggable));const i=o.querySelector(".ant-modal-header"),t=o.querySelector(".ant-modal");!i||!t||!e(a.draggable)||(i.style.cursor="move",i.onmousedown=c=>{if(!c)return;const u=c.clientX,f=c.clientY,F=document.body.clientWidth,y=document.documentElement.clientHeight,d=t.offsetWidth,b=t.offsetHeight,p=t.offsetLeft,h=F-t.offsetLeft-d,k=t.offsetTop,B=y-t.offsetTop-b,v=l(t,"left"),P=l(t,"top");let D=+v,N=+P;v.includes("%")?(D=+document.body.clientWidth*(+v.replace(/%/g,"")/100),N=+document.body.clientHeight*(+P.replace(/%/g,"")/100)):(D=+v.replace(/px/g,""),N=+P.replace(/px/g,"")),document.onmousemove=function(x){let w=x.clientX-u,n=x.clientY-f;-w>p?w=-p:w>h&&(w=h),-n>k?n=-k:n>B&&(n=B),t.style.cssText+=`;left:${w+D}px;top:${n+N}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},s=()=>{const o=document.querySelectorAll(".ant-modal-wrap");for(const i of Array.from(o)){if(!i)continue;const t=l(i,"display"),c=i.getAttribute("data-drag");t!=="none"&&(c===null||e(a.destroyOnClose))&&r(i)}};L(()=>{!e(a.visible)||!e(a.draggable)||ue(()=>{s()},30)})}function Le(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!me(a)}const Ae=M({name:"Modal",inheritAttrs:!1,props:U,emits:["cancel"],setup(a,{slots:l,emit:r}){const{visible:s,draggable:o,destroyOnClose:i}=de(a),t=fe();Ie({visible:s,destroyOnClose:i,draggable:o});const c=u=>{r("cancel",u)};return()=>{let u;const f={...e(t),...a,onCancel:c};return H(ge,f,Le(u=pe(l))?u:{default:()=>[u]})}}}),ce=Symbol();function Ve(a){return ye(a,ce)}function lt(){return he(ce)}const qe=["loading-tip"],ze=M({name:"ModalWrapper",inheritAttrs:!1}),Ye=M({...ze,props:{loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},emits:["height-change","ext-height"],setup(a,{expose:l,emit:r}){const s=a,o=m(null),i=m(null),t=m(0),c=m(0);let u=0;We(y.bind(null,!1)),be(i,()=>{y()},{attributes:!0,subtree:!0}),Ve({redoModalHeight:y});const f=S(()=>({minHeight:`${s.minHeight}px`,[s.fullScreen?"height":"maxHeight"]:`${e(t)}px`}));L(()=>{s.useWrapper&&y()}),ne(()=>s.fullScreen,d=>{y(),d?c.value=t.value:t.value=c.value}),ve(()=>{const{modalHeaderHeight:d,modalFooterHeight:b}=s;r("ext-height",d+b)}),ae(()=>{});async function F(){_(()=>{const d=e(o);d&&d?.scrollTo?.(0)})}async function y(){if(!s.visible)return;const d=e(o);if(!d)return;const b=d.$el.parentElement;if(b){b.style.padding="0",await _();try{const p=b.parentElement&&b.parentElement.parentElement;if(!p)return;const h=getComputedStyle(p).top,k=Number.parseInt(h);let B=window.innerHeight-k*2+(s.footerOffset||0)-s.modalFooterHeight-s.modalHeaderHeight;k<40&&(B-=26),await _();const v=e(i);if(!v)return;await _(),u=v.scrollHeight,s.fullScreen?t.value=window.innerHeight-s.modalFooterHeight-s.modalHeaderHeight-28:t.value=s.height?s.height:u>B?B:u,r("height-change",e(t))}catch{}}}return l({scrollTop:F}),(d,b)=>{const p=Ce("loading");return C(),O(e(Se),{ref_key:"wrapperRef",ref:o},{default:g(()=>[Me((C(),I("div",{ref_key:"spinRef",ref:i,style:He(e(f)),"loading-tip":a.loadingTip},[T(d.$slots,"default")],12,qe)),[[p,a.loading]])]),_:3},512)}}}),Xe=M({name:"ModalClose"}),Je=M({...Xe,props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(a,{emit:l}){const r=a,{t:s}=oe(),{prefixCls:o}=le("basic-modal-close"),i=S(()=>[o,`${o}--custom`,{[`${o}--can-full`]:r.canFullscreen}]);function t(u){l("cancel",u)}function c(u){u?.stopPropagation(),u?.preventDefault(),l("fullscreen")}return(u,f)=>(C(),I("div",{class:Fe(e(i))},[a.canFullscreen?(C(),I(ke,{key:0},[a.fullScreen?(C(),O(e(V),{key:0,title:e(s)("component.modal.restore"),placement:"bottom"},{default:g(()=>[H(e(xe),{role:"full",onClick:c})]),_:1},8,["title"])):(C(),O(e(V),{key:1,title:e(s)("component.modal.maximize"),placement:"bottom"},{default:g(()=>[H(e(je),{role:"close",onClick:c})]),_:1},8,["title"]))],64)):q("",!0),H(e(V),{title:e(s)("component.modal.close"),placement:"bottom"},{default:g(()=>[H(e(Be),{onClick:t})]),_:1},8,["title"])],2))}});const Ue=M({name:"BasicModalFooter"}),Ke=M({...Ue,props:U,emits:["ok","cancel"],setup(a,{emit:l}){function r(o){l("ok",o)}function s(o){l("cancel",o)}return(o,i)=>{const t=we("a-button");return C(),I("div",null,[T(o.$slots,"insertFooter"),o.showCancelBtn?(C(),O(t,W({key:0},o.cancelButtonProps,{onClick:s}),{default:g(()=>[z(Y(o.cancelText),1)]),_:1},16)):q("",!0),T(o.$slots,"centerFooter"),o.showOkBtn?(C(),O(t,W({key:1,type:o.okType,onClick:r,loading:o.confirmLoading},o.okButtonProps),{default:g(()=>[z(Y(o.okText),1)]),_:1},16,["type","loading"])):q("",!0),T(o.$slots,"appendFooter")])}}}),Ge=M({name:"BasicModalHeader"}),Qe=M({...Ge,props:{helpMessage:{type:[String,Array]},title:{type:String}},setup(a){return(l,r)=>(C(),O(e(_e),{helpMessage:a.helpMessage},{default:g(()=>[z(Y(a.title),1)]),_:1},8,["helpMessage"]))}});function Ze(a){const l=m(!1),r=S(()=>{const o=e(a.wrapClassName)||"";return e(l)?`fullscreen-modal ${o} `:e(o)});function s(o){o&&o.stopPropagation(),l.value=!e(l)}return{getWrapClassName:r,handleFullScreen:s,fullScreenRef:l}}const et=M({name:"BasicModal",inheritAttrs:!1}),tt=M({...et,props:U,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(a,{emit:l}){const r=a,s=Te(),o=m(!1),i=m(null),t=m(null),{prefixCls:c}=le("basic-modal"),u=m(0),f={setModalProps:P,emitVisible:void 0,redoModalHeight:()=>{_(()=>{e(t)&&e(t).setModalHeight()})}},F=J();F&&l("register",f,F.uid);const y=S(()=>({...r,...e(i)})),{handleFullScreen:d,getWrapClassName:b,fullScreenRef:p}=Ze({modalWrapperRef:t,extHeightRef:u,wrapClassName:Oe(y.value,"wrapClassName")}),h=S(()=>({...{...e(y),visible:e(o),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0},wrapClassName:e(b)})),k=S(()=>{const n={...s,...e(y),visible:e(o)};return n.wrapClassName=`${n?.wrapClassName||""} ${e(b)}`,e(p)?j(n,["height","title"]):j(n,"title")}),B=S(()=>{if(!e(p))return e(h).height});L(()=>{o.value=!!r.visible,p.value=!!r.defaultFullscreen}),ne(()=>e(o),n=>{l("visible-change",n),l("update:visible",n),_(()=>{r.scrollTop&&n&&e(t)&&e(t).scrollTop()})},{immediate:!1});async function v(n){if(n?.stopPropagation(),!n.target?.classList?.contains(c+"-close--custom")){if(r.closeFunc&&se(r.closeFunc)){const K=await r.closeFunc();o.value=!K;return}o.value=!1,l("cancel",n)}}function P(n){i.value=$e(e(i)||{},n),Reflect.has(n,"visible")&&(o.value=!!n.visible),Reflect.has(n,"defaultFullscreen")&&(p.value=!!n.defaultFullscreen)}function D(n){l("ok",n)}function N(n){l("height-change",n)}function x(n){u.value=n}function w(n){r.canFullscreen&&(n.stopPropagation(),d(n))}return(n,K)=>(C(),O(e(Ae),W(e(k),{onCancel:v}),G({default:g(()=>[H(Ye,W({useWrapper:e(h).useWrapper,footerOffset:n.wrapperFooterOffset,fullScreen:e(p),ref_key:"modalWrapperRef",ref:t,loading:e(h).loading,"loading-tip":e(h).loadingTip,minHeight:e(h).minHeight,height:e(B),visible:o.value,modalFooterHeight:n.footer!==void 0&&!n.footer?0:void 0},e(j)(e(h).wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:x,onHeightChange:N}),{default:g(()=>[T(n.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight"])]),_:2},[n.$slots.closeIcon?void 0:{name:"closeIcon",fn:g(()=>[H(Je,{canFullscreen:e(h).canFullscreen,fullScreen:e(p),onCancel:v,onFullscreen:e(d)},null,8,["canFullscreen","fullScreen","onFullscreen"])]),key:"0"},n.$slots.title?void 0:{name:"title",fn:g(()=>[H(Qe,{helpMessage:e(h).helpMessage,title:e(y).title,onDblclick:w},null,8,["helpMessage","title"])]),key:"1"},n.$slots.footer?void 0:{name:"footer",fn:g(()=>[H(Ke,W(e(k),{onOk:D,onCancel:v}),G({_:2},[Q(Object.keys(n.$slots),R=>({name:R,fn:g(A=>[T(n.$slots,R,Z(ee(A||{})))])}))]),1040)]),key:"2"},Q(Object.keys(e(j)(n.$slots,"default")),R=>({name:R,fn:g(A=>[T(n.$slots,R,Z(ee(A||{})))])}))]),1040))}}),$=re({}),X=re({});function st(){const a=m(null),l=m(!1),r=m("");function s(t,c){if(!J())throw new Error("useModal() can only be used inside setup() or functional components!");r.value=c,ae(()=>{a.value=null,l.value=!1,$[e(r)]=null}),!(e(l)&&De()&&t===e(a))&&(a.value=t,l.value=!0,t.emitVisible=(u,f)=>{X[f]=u})}const o=()=>{const t=e(a);return t||ie("useModal instance is undefined!"),t},i={setModalProps:t=>{o()?.setModalProps(t)},getVisible:S(()=>X[~~e(r)]),redoModalHeight:()=>{o()?.redoModalHeight?.()},openModal:(t=!0,c,u=!0)=>{if(o()?.setModalProps({visible:t}),!c)return;const f=e(r);if(u){$[f]=null,$[f]=E(c);return}Pe(E($[f]),E(c))||($[f]=E(c))},closeModal:()=>{o()?.setModalProps({visible:!1})}};return[s,i]}const rt=a=>{const l=m(null),r=J(),s=m(""),o=()=>{const t=e(l);return t||ie("useModalInner instance is undefined!"),t},i=(t,c)=>{Ne(()=>{l.value=null}),s.value=c,l.value=t,r?.emit("register",t,c)};return L(()=>{const t=$[e(s)];t&&(!a||!se(a)||_(()=>{a(t)}))}),[i,{changeLoading:(t=!0)=>{o()?.setModalProps({loading:t})},getVisible:S(()=>X[~~e(s)]),changeOkLoading:(t=!0)=>{o()?.setModalProps({confirmLoading:t})},closeModal:()=>{o()?.setModalProps({visible:!1})},setModalProps:t=>{o()?.setModalProps(t)},redoModalHeight:()=>{const t=o()?.redoModalHeight;t&&t()}}]},it=Re(tt);export{it as B,st as a,lt as b,rt as u};
