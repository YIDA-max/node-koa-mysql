import{b as n,bp as m,w as p,u as x,ds as c,l as d,o as u,c as f,e,f as s,i as t,j as r,b4 as _,am as i,ao as g}from"./index.10ef4608.js";import h from"./LoginForm.3b24a5e2.js";import w from"./ForgetPasswordForm.fa640636.js";import v from"./RegisterForm.a4eb5ded.js";import y from"./MobileForm.bdb7fab8.js";import b from"./QrCodeForm.4c82ea66.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./LoginFormTitle.ac66c028.js";import"./GithubFilled.b25dcf47.js";import"./index.b6ac86eb.js";import"./index.504b494d.js";import"./download.66a6d137.js";const k={class:"-enter-x xl:hidden"},L={class:"container relative h-full py-2 mx-auto sm:px-10"},C={class:"flex h-full"},F=e("div",{class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},[s(' <AppLogo class="-enter-x" /> '),e("div",{class:"my-auto"},[s(` <img\r
              :alt="title"\r
              src="../../../assets/svg/login-box-bg.svg"\r
              class="w-1/2 -mt-16 -enter-x"\r
            /> `),e("div",{class:"mt-10 font-medium text-white -enter-x"},[s(` <span class="inline-block mt-4 text-3xl"> {{ t('sys.login.signInTitle') }}</span> `)]),s(` <div class="mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x">\r
              {{ t('sys.login.signInDesc') }}\r
            </div> `)])],-1),T={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},J=n({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup($){const o=m(),{prefixCls:a}=p("login");return x(),c().getShowPicker,d(()=>{var l;return(l=o==null?void 0:o.title)!=null?l:""}),(l,A)=>(u(),f(g,null,[e("div",{class:i([r(a),"relative w-full h-full px-4"]),style:{margin:"50px 0px 0px 0px"}},[s(` <AppLocalePicker\r
      class="absolute text-white top-4 right-4 enter-x xl:text-gray-600"\r
      :showText="false"\r
      v-if="!sessionTimeout && showLocale"\r
    /> `),s(' <AppDarkModeToggle class="absolute top-3 right-7 enter-x" v-if="!sessionTimeout" /> '),e("span",k,[t(r(_),{alwaysShowTitle:!0})]),e("div",L,[e("div",C,[F,e("div",T,[e("div",{class:i([`${r(a)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[t(h),t(w),t(v),t(y),t(b)],2)])])])],2),s(` <div :style="{ width: '100%', height: '500px', backgroundColor: 'red' }">\r
    <div\r
      :class="\`\${prefixCls}-form\`"\r
      class="relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"\r
    >\r
      <LoginForm />\r
      <ForgetPasswordForm />\r
      <RegisterForm />\r
      <MobileForm />\r
      <QrCodeForm />\r
    </div>\r
  </div> `)],2112))}});export{J as default};
