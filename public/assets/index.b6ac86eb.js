var m=(t,e,n)=>new Promise((o,u)=>{var l=a=>{try{r(n.next(a))}catch(c){u(c)}},s=a=>{try{r(n.throw(a))}catch(c){u(c)}},r=a=>a.done?o(a.value):Promise.resolve(a.value).then(l,s);r((n=n.apply(t,e)).next())});import{s as I,cE as h,aE as C,l as S,bT as z,aG as A,as as F,j as d,aI as T,r as p,bW as k,b as g,ab as N,a as b,u as D,aA as E,x as f,o as w,U as y,A as v,D as j,t as O,B as _,w as P,bn as R,ap as V,aJ as G,V as U,W,i as q,bG as $}from"./index.10ef4608.js";function J(t,e="value",n="change",o){const u=T(),l=u==null?void 0:u.emit,s=I({value:t[e]}),r=h(s),a=i=>{s.value=i};return C(()=>{s.value=t[e]}),[S({get(){return s.value},set(i){z(i,r.value)||(s.value=i,A(()=>{l==null||l(n,i,...F(d(o))||[])}))}}),a,r]}function L(t){const e=p(t),n=p(!1);let o;function u(){o&&window.clearInterval(o)}function l(){n.value=!1,u(),o=null}function s(){d(n)||!!o||(n.value=!0,o=setInterval(()=>{d(e)===1?(l(),e.value=t):e.value-=1},1e3))}function r(){e.value=t,l()}function a(){r(),s()}return k(()=>{r()}),{start:s,reset:r,restart:a,clear:u,stop:l,currentCount:e,isStart:n}}const x={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},H=g({name:"CountButton",components:{Button:N},props:x,setup(t){const e=p(!1),{currentCount:n,isStart:o,start:u,reset:l}=L(t.count),{t:s}=D(),r=S(()=>d(o)?s("component.countdown.sendText",[d(n)]):s("component.countdown.normalText"));C(()=>{t.value===void 0&&l()});function a(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&E(c)){e.value=!0;try{(yield c())&&u()}finally{e.value=!1}}else u()})}return{handleStart:a,currentCount:n,loading:e,getButtonText:r,isStart:o}}});function K(t,e,n,o,u,l){const s=f("Button");return w(),y(s,_(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[j(O(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var B=b(H,[["render",K]]);const M={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},Q=g({name:"CountDownInput",components:{CountButton:B},inheritAttrs:!1,props:M,setup(t){const{prefixCls:e}=P("countdown-input"),[n]=J(t);return{prefixCls:e,state:n}}});function X(t,e,n,o,u,l){const s=f("CountButton"),r=f("a-input");return w(),y(r,_(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),R({addonAfter:v(()=>[q(s,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[V(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(c=>[G(t.$slots,a,U(W(c||{})))])}))]),1040,["class","size","value"])}var Y=b(Q,[["render",X]]);const et=$(Y);$(B);export{et as C,J as u};
