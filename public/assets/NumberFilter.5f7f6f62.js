import{a as g,b as h,u as F,r as m,x as w,o as I,c as D,e as f,i as o,j as t,X as _,cc as b,U as E,f as M,A as v,D as p,t as x,p as A,k as S}from"./index.10ef4608.js";/* empty css               */import{u as T}from"./casual.c3003c80.js";const C=s=>(A("data-v-7c16d38a"),s=s(),S(),s),k={style:{padding:"20px",width:"306px",minHeight:"163px"}},V=C(()=>f("br",null,null,-1)),q={style:{display:"flex",justifyContent:"space-between"}},O=h({__name:"NumberFilter",props:{getDataSource:{type:Function,required:!0},setTableData:{type:Function,required:!0},clearFilters:{type:Function,required:!0},refresh:{type:Function,required:!0},column:{type:Object,required:!0},loadOneSecondFn:{type:Function,required:!0},eraseTheRecordChange:{type:Function,required:!0}},setup(s){const e=s,{t:r}=F(),N=T(),u=m(""),i=m(""),a=m("1"),y=()=>{e.loadOneSecondFn(2e3,()=>{e.setTableData(e.getDataSource().filter(l=>{if(a.value=="1"){if(Number(u.value)<=l[e.column.dataIndex]&&l[e.column.dataIndex]<=Number(i.value))return l[e.column.dataIndex]}else if(a.value=="2"){if(Number(u.value)==l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="3"){if(Number(u.value)<l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="4"){if(Number(u.value)>l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="5"){if(Number(u.value)<=l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="6"){if(Number(u.value)>=l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="7"){if(Math.abs(Number(u.value))<=l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="8"&&Math.abs(Number(u.value))<l[e.column.dataIndex])return l[e.column.dataIndex]})),N.setuseVisualConstructionTwobody(e.getDataSource().filter(l=>{if(a.value=="1"){if(Number(u.value)<l[e.column.dataIndex]&&l[e.column.dataIndex]<Number(i.value))return l[e.column.dataIndex]}else if(a.value=="2"){if(Number(u.value)==l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="3"){if(Number(u.value)<l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="4"){if(Number(u.value)>l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="5"){if(Number(u.value)<=l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="6"){if(Number(u.value)>=l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="7"){if(Math.abs(Number(u.value))<=l[e.column.dataIndex])return l[e.column.dataIndex]}else if(a.value=="8"&&Math.abs(Number(u.value))<l[e.column.dataIndex])return l[e.column.dataIndex]})),e.eraseTheRecordChange()})};return(l,n)=>{const c=w("CustomButton");return I(),D("div",k,[f("div",null,[o(t(_),{options:[{label:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.scope"),value:"1"},{label:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.equal"),value:"2"},{label:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.greater"),value:"3"},{label:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.less"),value:"4"},{label:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.beEqualOrGreaterThan"),value:"5"},{label:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.lessThanOrEqualTo"),value:"6"},{label:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.AbsoluteValueGreaterThanOrEqualTo"),value:"7"},{label:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.AbsoluteValueGreaterThan"),value:"8"}],value:a.value,"onUpdate:value":n[0]||(n[0]=d=>a.value=d),style:{width:"100%"}},null,8,["options","value"])]),V,o(t(b),{ref:"searchInput",value:u.value,"onUpdate:value":n[1]||(n[1]=d=>u.value=d),style:{width:"50%","margin-bottom":"20px",display:"block"},placeholder:a.value=="1"?t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.leastValue"):t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.value")},null,8,["value","placeholder"]),a.value=="1"?(I(),E(t(b),{key:0,ref:"searchInput",value:i.value,"onUpdate:value":n[2]||(n[2]=d=>i.value=d),style:{width:"50%","margin-bottom":"20px",display:"block"},placeholder:t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.maxValue")},null,8,["value","placeholder"])):M("v-if",!0),f("div",q,[o(c,{onClick:n[3]||(n[3]=()=>{e.clearFilters()}),btnStyle:{background:"#fff",color:"#202020",border:"1px solid #666666",borderRadius:"4px",width:"75px",height:"32px"}},{default:v(()=>[p(x(t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.close")),1)]),_:1}),o(c,{onClick:n[4]||(n[4]=()=>{e.refresh(),u.value="",i.value="",e.clearFilters()}),btnStyle:{background:"#fff",color:"#202020",border:"1px solid #666666",borderRadius:"4px",width:"75px",height:"32px"}},{default:v(()=>[p(x(t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.empty")),1)]),_:1}),o(c,{onClick:n[5]||(n[5]=()=>{y(),e.clearFilters()}),btnStyle:{borderRadius:"4px",width:"75px",height:"32px"}},{default:v(()=>[p(x(t(r)("AllMessage.visual.two.ExcelDisplay.NumberFilter.confirm")),1)]),_:1})])])}}});var G=g(O,[["__scopeId","data-v-7c16d38a"]]);export{G as default};
