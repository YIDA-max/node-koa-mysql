import{au as c,H as i,B as g,u as o}from"./index-4a8cc517.js";import{u as H}from"./useWindowSizeFn-5faf2053.js";const h=Symbol();function f(e){return c(e,h,{native:!0})}const a=i(0),u=i(0);function m(){function e(t){a.value=t}function n(t){u.value=t}return{headerHeightRef:a,footerHeightRef:u,setHeaderHeight:e,setFooterHeight:n}}function l(){const e=i(window.innerHeight),n=i(window.innerHeight),t=g(()=>o(e)-o(a)-o(u)||0);H(()=>{e.value=window.innerHeight},100,{immediate:!0});async function r(s){n.value=s}f({contentHeight:t,setPageHeight:r,pageHeight:n})}export{m as a,l as u};