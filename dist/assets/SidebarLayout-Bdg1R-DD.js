const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/logo-icon-CgJhHML2.js","assets/Header.vue_vue_type_style_index_0_scoped_616c7d13_lang-CxthORn2.js","assets/Header-DrOSf0bi.css","assets/index-DYMdwLNo.js","assets/index-Cj7CoIfA.css","assets/media-inst-DgYUDi15.js","assets/media-tg-BEZWpfMj.js","assets/media-vk-DnxU4Ge6.js","assets/my-warehouse-icon-YCNaPeur.js","assets/settings-DfBxMhzM.js"])))=>i.map(i=>d[i]);
import{d as r,c as y,o,a as l,r as I,b as S,_ as m,e as c,f as E,u as t,g as k,h as i,t as v,i as n,w as h,R as g,j as f,F as N,k as $,l as L,m as w,n as x}from"./index-DYMdwLNo.js";import{_ as p}from"./Header.vue_vue_type_style_index_0_scoped_616c7d13_lang-CxthORn2.js";const B=(s,e,a)=>{const d=s[e];return d?typeof d=="function"?d():Promise.resolve(d):new Promise((u,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})},b=r({__name:"StatSvgLoader",props:{name:{}},setup(s){const e=s,a=y(()=>S(()=>B(Object.assign({"../../../assets/svg/logo-icon.vue":()=>m(()=>import("./logo-icon-CgJhHML2.js"),__vite__mapDeps([0,1,2,3,4])),"../../../assets/svg/media-inst.vue":()=>m(()=>import("./media-inst-DgYUDi15.js"),__vite__mapDeps([5,1,2,3,4])),"../../../assets/svg/media-tg.vue":()=>m(()=>import("./media-tg-BEZWpfMj.js"),__vite__mapDeps([6,1,2,3,4])),"../../../assets/svg/media-vk.vue":()=>m(()=>import("./media-vk-DnxU4Ge6.js"),__vite__mapDeps([7,1,2,3,4])),"../../../assets/svg/my-warehouse-icon.vue":()=>m(()=>import("./my-warehouse-icon-YCNaPeur.js"),__vite__mapDeps([8,1,2,3,4])),"../../../assets/svg/settings.vue":()=>m(()=>import("./settings-DfBxMhzM.js"),__vite__mapDeps([9,1,2,3,4]))}),`../../../assets/svg/${e.name}.vue`,6)));return(d,u)=>(o(),l(I(a.value)))}}),R={},V={class:"stat-container"};function D(s,e){return o(),c("div",V,[E(s.$slots,"default",{},void 0)])}const P=p(R,[["render",D],["__scopeId","data-v-f031c11d"]]),C={class:"stat-button"},T={class:"stat-button__text"},A=r({__name:"StatButton",props:{iconName:{},text:{}},setup(s){return(e,a)=>(o(),c("button",C,[e.iconName?(o(),l(t(b),{key:0,name:e.iconName},null,8,["name"])):k("",!0),i("span",T,v(e.text),1)]))}}),M=p(A,[["__scopeId","data-v-899a7a9f"]]),O={class:"logo"},j=r({__name:"Logo",setup(s){return(e,a)=>(o(),c("div",O,[n(t(b),{name:"logo-icon"})]))}}),q=p(j,[["__scopeId","data-v-11eb14eb"]]),F=r({__name:"MediaBtn",props:{path:{},iconName:{}},setup(s){return(e,a)=>(o(),l(t(g),{class:"stat-sidebar-media-btn",to:e.path},{default:h(()=>[n(t(b),{name:e.iconName},null,8,["name"])]),_:1},8,["to"]))}}),H=p(F,[["__scopeId","data-v-e23e982c"]]),U={class:"media"},z={class:"media__btns-wrapper"},G=r({__name:"Media",setup(s){const{t:e}=f(),a=[{path:"/",iconName:"media-tg"},{path:"/",iconName:"media-inst"},{path:"/",iconName:"media-vk"}];return(d,u)=>(o(),c("div",U,[i("div",z,[(o(),c(N,null,$(a,_=>n(H,{key:`sidebar-media__${_.iconName}`,path:_.path,iconName:_.iconName},null,8,["path","iconName"])),64))]),n(t(g),{class:"media__partner-program",to:"/"},{default:h(()=>[L(v(t(e)("sidebar.partner_program")),1)]),_:1})]))}}),J=p(G,[["__scopeId","data-v-2aa27cd0"]]),K={class:"navigation-btn__img"},Q={class:"navigation-btn__text"},W=r({__name:"NavigationBtn",props:{path:{},iconName:{},label:{}},setup(s){return(e,a)=>(o(),l(t(g),{class:"navigation-btn",to:e.path},{default:h(()=>[i("div",K,[n(t(b),{name:e.iconName},null,8,["name"])]),i("div",Q,[i("span",null,v(e.label),1)])]),_:1},8,["to"]))}}),X=p(W,[["__scopeId","data-v-4397ac7f"]]),Y={class:"navigation"},Z=r({__name:"Navigation",setup(s){const{t:e}=f(),a=[{path:"/",label:e("pages.my-warehouse"),iconName:"my-warehouse-icon"}];return(d,u)=>(o(),c("div",Y,[(o(),c(N,null,$(a,_=>n(X,{key:`navigation__${_.label}`,path:_.path,iconName:_.iconName,label:_.label},null,8,["path","iconName","label"])),64))]))}}),ee={class:"stat-sidebar"},te=r({__name:"StatSidebar",setup(s){return(e,a)=>(o(),c("div",ee,[n(t(q)),n(t(Z)),n(t(J),{class:"stat-sidebar__last-item"})]))}}),ae=p(te,[["__scopeId","data-v-8b1b9777"]]),se={class:"app-wrapper"},ne={class:"app-content"},oe={class:"page"},_e={class:"page__header"},ie=r({__name:"SidebarLayout",setup(s){const{t:e}=f(),a=w().name;return(d,u)=>{const _=x("router-view");return o(),c("div",se,[n(t(ae)),i("main",ne,[i("div",oe,[i("div",_e,[i("h1",null,v(t(e)(`pages.${t(a)}`)),1),n(t(M),{"icon-name":"settings",text:t(e)("btns.report_settings")},null,8,["text"])]),n(t(P),null,{default:h(()=>[n(_)]),_:1})])])])}}}),de=p(ie,[["__scopeId","data-v-f667e80f"]]);export{de as default};
