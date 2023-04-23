import{b as r,o as t,c as a,f as e}from"./index.10ef4608.js";const s=r({__name:"ShareOne",setup(l){return(n,o)=>(t(),a("div",null,[e(` <BasicForm @register="register">\r
      <template #ShareOne="{ model, field }">\r
        <Row>\r
          <Col :span="10"\r
            ><Select\r
              ref="select"\r
              v-model:value="model[field]"\r
              :style="{ width: '220px' }"\r
              allowClear\r
              mode="multiple"\r
              :options="ShareOneOptions"\r
              placeholder="Please select"\r
          /></Col>\r
          <Col :span="3"><Button @click="addShareOne">add</Button></Col>\r
          <Col :span="3"><Button @click="DeleteShareOne">del</Button></Col>\r
        </Row>\r
      </template>\r
    </BasicForm> `),e(` <template v-for="(item, index) in DeleteDataValue" :key="item.key">\r
      <IncreaseShareOne\r
        :indexName="index"\r
        :keyName="item"\r
        :dataVale="DeleteDataValue"\r
        @deleteComponents="DeleteShareOne"\r
      ></IncreaseShareOne>\r
    </template> `)]))}});export{s as default};
