import{bD as t}from"./index-4a8cc517.js";function n(e){return t.get({url:"/system/user/page",params:e})}function a(e){return t.get({url:"/system/user/get?id="+e})}function o(e){return t.post({url:"/system/user/create",data:e})}function l(e){return t.put({url:"/system/user/update",data:e})}function d(e){return t.delete({url:"/system/user/delete?id="+e})}function p(e){return t.download({url:"/system/user/export",params:e},"用户.xls")}function i(e,s){const r={id:e,password:s};return t.put({url:"/system/user/update-password",data:r})}function c(e,s){const r={id:e,status:s};return t.put({url:"/system/user/update-status",data:r})}function m(){return t.get({url:"/system/user/list-all-simple"})}export{a,l as b,o as c,n as d,p as e,d as f,m as g,i as r,c as u};
