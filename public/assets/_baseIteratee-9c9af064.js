import{cx as p,cy as R,cz as y,c6 as C,cA as O,cB as P,cC as M,cD as _,cE as l,cF as D}from"./index-4a8cc517.js";import{g as I}from"./get-626e6e61.js";function L(n){return function(r){return r?.[n]}}var d=1,F=2;function G(n,r,e,t){var i=e.length,o=i,A=!t;if(n==null)return!o;for(n=Object(n);i--;){var f=e[i];if(A&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<o;){f=e[i];var u=f[0],s=n[u],c=f[1];if(A&&f[2]){if(s===void 0&&!(u in n))return!1}else{var a=new p;if(t)var E=t(s,c,u,n,r,a);if(!(E===void 0?R(c,s,d|F,t,a):E))return!1}}return!0}function g(n){return n===n&&!y(n)}function m(n){for(var r=C(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,g(i)]}return r}function h(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function w(n){var r=m(n);return r.length==1&&r[0][2]?h(r[0][0],r[0][1]):function(e){return e===n||G(e,n,r)}}var x=1,S=2;function K(n,r){return O(n)&&g(r)?h(P(n),r):function(e){var t=I(e,n);return t===void 0&&t===r?M(e,n):R(r,t,x|S)}}function N(n){return function(r){return _(r,n)}}function T(n){return O(n)?L(P(n)):N(n)}function b(n){return typeof n=="function"?n:n==null?l:typeof n=="object"?D(n)?K(n[0],n[1]):w(n):T(n)}export{b};