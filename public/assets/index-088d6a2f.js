import{bD as e}from"./index-4a8cc517.js";function u(t){return e.get({url:"/pay/merchant/page",params:t})}function c(t){return e.get({url:"/pay/merchant/get?id="+t})}function p(t){return e.get({url:"/pay/merchant/list-by-name?id=",params:{name:t}})}function s(t){return e.post({url:"/pay/merchant/create",data:t})}function h(t){return e.put({url:"/pay/merchant/update",data:t})}function o(t){return e.delete({url:"/pay/merchant/delete?id="+t})}function l(t){return e.download({url:"/pay/merchant/export-excel",params:t},"支付商户.xls")}function d(t,a){const r={id:t,status:a};return e.put({url:"/pay/merchant/update-status",data:r})}export{c as a,s as b,d as c,u as d,l as e,o as f,p as g,h as u};
