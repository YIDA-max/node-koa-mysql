import{a as i,a9 as o,H as s,X as n,o as d,c as l,w as m,b as c,aD as f,u as h}from"./index-4a8cc517.js";import{C as p}from"./index-584da07d.js";import"./index-dd54262d.js";import"./index-4af91251.js";import{u}from"./useECharts-d61cf832.js";const x=i({__name:"VisitRadar",props:{loading:Boolean,width:o.string.def("100%"),height:o.string.def("300px")},setup(a){const e=a,t=s(null),{setOptions:r}=u(t);return n(()=>e.loading,()=>{e.loading||r({legend:{bottom:0,data:["访问","购买"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"电脑"},{name:"充电器"},{name:"耳机"},{name:"手机"},{name:"Ipad"},{name:"耳机"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"访问",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"购买",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(g,w)=>(d(),l(h(p),{title:"转化率",loading:a.loading},{default:m(()=>[c("div",{ref_key:"chartRef",ref:t,style:f({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{x as _};
