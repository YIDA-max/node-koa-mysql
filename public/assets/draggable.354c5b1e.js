let f=!1;function g(a,u,c){a&&u&&c&&(a==null||a.addEventListener(u,c,!1))}function r(a,u,c){a&&u&&c&&(a==null||a.removeEventListener(u,c,!1))}function o(a,u){const c=function(s){var l;(l=u.drag)==null||l.call(u,s)},d=function(s){var l;r(globalThis.document,"mousemove",c),r(globalThis.document,"mouseup",d),globalThis.document.onselectstart=null,globalThis.document.ondragstart=null,f=!1,(l=u.end)==null||l.call(u,s)};g(a,"mousedown",function(s){var l;f||(globalThis.document.onselectstart=()=>!1,globalThis.document.ondragstart=()=>!1,g(globalThis.document,"mousemove",c),g(globalThis.document,"mouseup",d),f=!0,(l=u.start)==null||l.call(u,s))})}export{o as d};
