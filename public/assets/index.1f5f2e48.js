var S=(y,e,n)=>new Promise((w,f)=>{var D=i=>{try{h(n.next(i))}catch(_){f(_)}},B=i=>{try{h(n.throw(i))}catch(_){f(_)}},h=i=>i.done?w(i.value):Promise.resolve(i.value).then(D,B);h((n=n.apply(y,e)).next())});import{P as z}from"./index.8d0858e7.js";import{a as G,b as H,u as J,cJ as K,aw as Q,r as P,ch as X,aG as Z,q as ee,x as U,o as p,c as te,i as m,A as d,j as t,I as ae,d5 as oe,d6 as se,U as v,D as c,t as u,f as x,e as C,am as re,G as de}from"./index.10ef4608.js";/* empty css              *//* empty css               */import{u as ne,B as le}from"./useTable.a143d40c.js";import"./TableAction.edf9a202.js";import{u as ie,B as ue}from"./index.c8f8ec06.js";import{u as pe}from"./useBatchDelete.9dc1ae07.js";import{h as me,a as ce}from"./homePage.0537fe58.js";import{q as fe,S as he,r as N,h as ge}from"./homePage.5560d038.js";import{u as ke}from"./useSetFrom.689ec4a2.js";import{C as ve}from"./index.866ec2c8.js";/* empty css               */import"./onMountedOrActivated.0d13b2a6.js";import"./useWindowSizeFn.3e5b045d.js";import"./useContentViewHeight.9302814f.js";import"./useForm.98d7b8ca.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./index.b6ac86eb.js";import"./useAttrs.1d381a3e.js";/* empty css                *//* empty css                */import"./uuid.2429c801.js";/* empty css                */import"./useModalContext.52c86736.js";import"./download.66a6d137.js";import"./index.504b494d.js";import"./icon-remark.1929ee0a.js";import"./useSortable.79752a2a.js";/* empty css                */import"./modal-error.7cada6d5.js";function xe(){return(()=>{const y=[];for(let e=0;e<40;e++)y.push({id:`${e}`,mainProject:"John Brown",subProject:`1${e}`,type:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",creator:new Date().toLocaleString(),createTime:"new Date().toLocaleString()",dataType:"new Date().toLocaleString()"});return y})()}const ye={style:{textAlign:"left"}},we={style:{textAlign:"left"}},_e={class:"flex justify-center"},be=["onClick"],Se=H({__name:"index",setup(y){const{t:e}=J(),{hasPermission:n}=K(),w=Q(),f=ke(),D=new Date,B=new Date;D.setMonth(D.getMonth()-1),B.setMonth(B.getMonth()+1);const h=P(),i=P(),_=X.RangePicker,R=P(),[A]=ie(),{createMessage:T}=de(),[E,{setProps:I,reload:g,clearSelectedRowKeys:W,getSelectRows:j}]=ne({columns:[{title:e("rdm.id"),dataIndex:"id",width:150},{title:e("rdm.species"),dataIndex:"species",width:220,slots:{customRender:"species"}},{title:e("rdm.speciesId"),dataIndex:"speciesId",width:150},{title:e("rdm.genomeVersion"),dataIndex:"genomeVersion",width:220,slots:{customRender:"genomeVersion"}},{title:e("rdm.addTemporaryWarehouse"),width:200,dataIndex:"addTemporaryWarehouse",format:(r,s,l)=>r=="0"?e("rdm.addTemporaryWarehousevalueyes"):e("rdm.addTemporaryWarehousevalueno"),filterMultiple:!0,filters:[{text:e("rdm.addTemporaryWarehousevalueyes"),value:"0"},{text:e("rdm.addTemporaryWarehousevalueno"),value:"1"}]},{title:e("rdm.uploadStatus"),width:150,dataIndex:"uploadStatus",slots:{customRender:"uploadStatus"},filterMultiple:!0,filters:[{text:e("rdm.uploadStatusDone"),value:"done"},{text:e("rdm.uploadStatusUploading"),value:"uploading"},{text:e("rdm.uploadStatusUploadSuspended"),value:"upload_suspended"},{text:"\u672A\u4E0A\u4F20",value:"no"}]},{title:e("rdm.nickname"),width:150,dataIndex:"nickname"},{title:e("rdm.updateTime"),width:200,dataIndex:"updateTime",sorter:!0}],api:fe,afterFetch:r=>r,useSearchForm:!0,formConfig:{labelWidth:0,showActionButtonGroup:!1,schemas:[{field:"keyword",component:"Input",label:"",colProps:{style:{width:"400px"}},slot:"input"},{field:"times",component:"RangePicker",label:" ",labelWidth:60,colProps:{style:{width:"300px"}},slot:"createTime",componentProps:{format:"YYYY-MM-DD ",placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],showTime:{format:"HH:mm:ss"}}}],actionColOptions:{offset:14,span:10}},dataSource:xe(),bordered:!1,striped:!0,isTreeTable:!1,showIndexColumn:!1,canResize:!0,ellipsis:!0,actionColumn:{width:200,title:e("rdm.action"),slots:{customRender:"action"},fixed:"right"}}),{hasBatchDelete:F,handleDeleteOrBatchDelete:O,selectionOptions:V,selectedRowIds:L}=pe(N,g,I);Z(()=>{I(V)});const Y=r=>S(this,null,function*(){f.SetUseRdmFromData("lookto",r),w.push({path:`rdm/check/${r.id}`})}),$=r=>{N({removeRequertList:[{id:r.id,show:!0,subproject:r.subproject}]}),g()},M=r=>S(this,null,function*(){w.push({path:`rdm/dataChange/${r.id}`})}),q=()=>S(this,null,function*(){const r=j(),s=[];r.forEach(l=>{l.uploadStatus&&l.uploadStatus=="done"&&s.push(l.id)}),s.length>0?(yield ge({ids:s}))&&(T.success(e("AllMessage.successAdd")),W(),g()):T.error("\u4E0D\u5B58\u5728\u5927\u6587\u4EF6,\u6DFB\u52A0\u5931\u8D25")});return ee(()=>S(this,null,function*(){const r=yield me({meaning:"multiomics_Management_type"});h.value=r,h.value.forEach((o,a)=>{o.label=o.name,o.text=o.name,o.value=o.code,o.key=a});const s=yield ce();i.value=s,i.value.forEach((o,a)=>{o.label=o.projectName,o.text=o.projectName,o.value=o.id,o.key=a});const l=yield he();R.value=l,R.value.forEach((o,a)=>{o.label=o.nickname,o.text=o.nickname,o.value=o.id,o.key=a}),f.ResetUseRdmUpData(),f.useRdmFileList=[]})),(r,s)=>{const l=U("CustomButton"),o=U("a-button");return p(),te("div",null,[m(t(z),{contentFullHeight:!0},{default:d(()=>[m(t(le),{onRegister:t(E)},{"form-input":d(({model:a,field:b})=>[m(t(ae),{allowClear:"",value:a[b],"onUpdate:value":k=>a[b]=k,onPressEnter:s[0]||(s[0]=()=>{t(g)()}),onChange:s[1]||(s[1]=({type:k})=>{k=="click"&&t(g)()}),style:{width:"400px"},placeholder:t(e)("rdm.input")},{prefix:d(()=>[m(t(oe))]),_:2},1032,["value","onUpdate:value","placeholder"])]),"form-createTime":d(({model:a,field:b})=>[m(t(_),{value:a[b],"onUpdate:value":k=>a[b]=k,onChange:s[2]||(s[2]=k=>t(g)()),separator:"-"},{suffixIcon:d(()=>[m(t(se))]),_:2},1032,["value","onUpdate:value"])]),tableTitle:d(()=>[t(n)("rdm:add")?(p(),v(l,{key:0,btnStyle:{backgroundColor:"#2F54EB"},onClick:s[3]||(s[3]=()=>{t(w).push({path:"rdm/increasedData"})})},{default:d(()=>[c(u(t(e)("rdm.add")),1)]),_:1})):x("v-if",!0),t(n)("rdm:del")?(p(),v(l,{key:1,size:"middle",shape:"round",disabled:t(F),style:{background:"#fff",color:"#202020",border:"1px solid #666666",borderRadius:"4px",margin:"0px 10px"},onClick:s[4]||(s[4]=()=>{t(O)(null,!0,["id","show","species"])})},{default:d(()=>[c(u(t(e)("mom.deletes")),1)]),_:1},8,["disabled"])):x("v-if",!0),t(n)("rdm:addStore")?(p(),v(l,{key:2,size:"middle",shape:"round",disabled:t(F),style:{background:"#fff",color:"#202020",border:"1px solid #666666",margin:"0px 10px 0px 0px",borderRadius:"4px"},onClick:s[5]||(s[5]=()=>{q(),L.value=[]})},{default:d(()=>[c(u(t(e)("rdm.addtomoa")),1)]),_:1},8,["disabled"])):x("v-if",!0)]),species:d(({record:a})=>[C("div",ye,u(a.species),1)]),genomeVersion:d(({record:a})=>[C("div",we,u(a.genomeVersion),1)]),uploadStatus:d(({record:a})=>[C("div",_e,[C("div",{class:"progress-bar",onClick:()=>{a.uploadStatus=="upload_suspended"&&M(a)}},[C("div",{class:re([a.uploadStatus?a.uploadStatus:"default"])},null,2),c(" "+u(a.uploadStatus=="done"?t(e)("rdm.uploadStatusDone"):a.uploadStatus=="uploading"?t(e)("rdm.uploadStatusUploading"):a.uploadStatus=="upload_suspended"?t(e)("rdm.uploadStatusUploadSuspended"):t(e)("rdm.uploadStatusUploadNo")),1)],8,be)])]),action:d(({record:a})=>[t(n)("rdm:view")?(p(),v(o,{key:0,type:"link",onClick:()=>{Y(a)}},{default:d(()=>[c(u(t(e)("rdm.lookto")),1)]),_:2},1032,["onClick"])):x("v-if",!0),t(n)("rdm:edit")?(p(),v(o,{key:1,type:"link",disabled:!a.show,onClick:()=>{M(a)}},{default:d(()=>[c(u(t(e)("rdm.changeto")),1)]),_:2},1032,["disabled","onClick"])):x("v-if",!0),t(n)("rdm:del")?(p(),v(o,{key:2,type:"link",disabled:!a.show,onClick:()=>{t(ve)({onOk:()=>{$(a)}})}},{default:d(()=>[c(u(t(e)("rdm.delete")),1)]),_:2},1032,["disabled","onClick"])):x("v-if",!0)]),_:1},8,["onRegister"]),m(t(ue),{onRegister:t(A)},null,8,["onRegister"])]),_:1})])}}});var nt=G(Se,[["__scopeId","data-v-77d01da4"]]);export{nt as default};
