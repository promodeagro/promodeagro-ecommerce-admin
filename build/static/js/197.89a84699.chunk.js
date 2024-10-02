"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[197],{2197:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ce});var i=a(5043),n=a(3003),s=a(6255),r=a(5165),l=a(6421),o=a(3372),d=a(4712),c=a(8003),u=a(5336),b=a(4154),h=a(2521),p=a(2671),g=a(6326),m=a(4323),f=a(529),x=a(8906),v=a(2103),_=a(3714),j=a(9974),y=a(8172),w=a(1054),k=a(8133),A=a(1e3),E=a(9892),S=a(5595),C=a(1333),D=a(8805),L=a(7161),I=a(4842),P=a(9084),T=a(8171),N=a(2011),z=a(118),R=a(1251),M=a(9016);const F=e=>Math.round(Math.abs(e)/(e=>.0015*Math.abs(e)+.558)(e)),O=()=>window.performance?window.performance.now():Date.now(),H=e=>{const t=O(),a=Math.min((t-e.startTime)/e.scrollTime,1),i=(n=a,.5*(1-Math.cos(Math.PI*n)));var n;const s=e.startX+(e.endX-e.startX)*i;e.scrollable.scrollLeft=s,s!==e.endX&&requestAnimationFrame((()=>H(e)))},W=(e,t)=>{(0,M.Bh)(e)?e.scrollLeft=t:"scrollBehavior"in document.documentElement.style&&e.scrollTo?e.scrollTo({left:t,behavior:"smooth"}):((e,t)=>{const a=e.scrollLeft;H({scrollable:e,startX:a,endX:t,startTime:O(),scrollTime:F(t-a)})})(e,t)},q=(e,t)=>{if(!(null===e||void 0===e?void 0:e.current))return;const a=e.current,{scrollLeft:i,scrollWidth:n,offsetWidth:s}=a,r=Math.ceil(.75*a.clientWidth),l="forward"===t?Math.min(Math.abs(i)+r,n-s):Math.max(Math.abs(i)-r,0),o=(0,M.Zb)(a)?-1*l:l;W(a,o)},B=(e,t)=>{const{offsetWidth:a,scrollWidth:i}=e,n=t.current&&2*t.current.offsetWidth;return n?i>a+n:i>a},V=e=>(0,M.NQ)(e)>0,Q=e=>Math.ceil((0,M.NQ)(e))<e.scrollWidth-e.offsetWidth,G=function(e,t){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!e||!t)return;let i=t.scrollLeft;i=Math.min(i,e.offsetLeft-2),i=Math.max(i,e.offsetLeft+e.offsetWidth-t.offsetWidth+2),a?W(t,i):t.scrollLeft=i},K={"tabs-header":"awsui_tabs-header_14rmt_1kz54_194","tabs-header-list":"awsui_tabs-header-list_14rmt_1kz54_202","pagination-button":"awsui_pagination-button_14rmt_1kz54_219","pagination-button-left":"awsui_pagination-button-left_14rmt_1kz54_226","pagination-button-left-scrollable":"awsui_pagination-button-left-scrollable_14rmt_1kz54_229","pagination-button-right":"awsui_pagination-button-right_14rmt_1kz54_233","pagination-button-right-scrollable":"awsui_pagination-button-right-scrollable_14rmt_1kz54_236","tabs-tab":"awsui_tabs-tab_14rmt_1kz54_241","tabs-tab-label":"awsui_tabs-tab-label_14rmt_1kz54_250","tabs-tab-dismiss":"awsui_tabs-tab-dismiss_14rmt_1kz54_261","tabs-tab-action":"awsui_tabs-tab-action_14rmt_1kz54_262","tabs-tab-header-container":"awsui_tabs-tab-header-container_14rmt_1kz54_266",refresh:"awsui_refresh_14rmt_1kz54_281","tabs-tab-disabled":"awsui_tabs-tab-disabled_14rmt_1kz54_285","tabs-tab-link":"awsui_tabs-tab-link_14rmt_1kz54_327","tabs-tab-active":"awsui_tabs-tab-active_14rmt_1kz54_403","tabs-header-with-divider":"awsui_tabs-header-with-divider_14rmt_1kz54_410","tabs-tab-focusable":"awsui_tabs-tab-focusable_14rmt_1kz54_414",root:"awsui_root_14rmt_1kz54_418",tabs:"awsui_tabs_14rmt_1kz54_194","tabs-content":"awsui_tabs-content_14rmt_1kz54_459","fit-height":"awsui_fit-height_14rmt_1kz54_463","tabs-content-active":"awsui_tabs-content-active_14rmt_1kz54_469","tabs-content-wrapper":"awsui_tabs-content-wrapper_14rmt_1kz54_483","with-paddings":"awsui_with-paddings_14rmt_1kz54_483","tabs-container-content-wrapper":"awsui_tabs-container-content-wrapper_14rmt_1kz54_494","disabled-reason-tooltip":"awsui_disabled-reason-tooltip_14rmt_1kz54_505","tabs-tab-focused":"awsui_tabs-tab-focused_14rmt_1kz54_509"},U=".".concat(K["tabs-tab-link"]),X='[role="tab"].'.concat(K["tabs-tab-focused"]),$=".".concat(K["tabs-tab-focusable"]);function J(e){let{onChange:t,activeTabId:a,tabs:n,variant:s,idNamespace:r,ariaLabel:l,ariaLabelledby:o,i18nStrings:d}=e;const c=(0,i.useRef)(null),u=(0,i.useRef)(null),b=(0,i.useRef)(null),h=(0,S.pI)("tabs"),p=(0,T.P)(),g=(0,i.useRef)(null),[f,x]=(0,A.x)((e=>e.contentBoxWidth)),_=(0,P.S)(g,x),j=(0,i.useRef)(new Map),[y,w]=(0,i.useState)(!1),[k,D]=(0,i.useState)(!1),[I,M]=(0,i.useState)(!1),[F,O]=(0,i.useState)(a),[H,W]=(0,i.useState)(a),J=n.some((e=>e.action||e.dismissible)),ee=J?{role:"application","aria-roledescription":h("i18nStrings.tabsWithActionsAriaRoleDescription",null===d||void 0===d?void 0:d.tabsWithActionsAriaRoleDescription)}:{role:"tablist"};(0,i.useEffect)((()=>{c.current&&(w(B(c.current,b)),D(V(c.current)),M(Q(c.current)))}),[f,n]);const te=e=>{if(!a)return;const t=j.current.get(a);t&&c.current&&G(t,c.current,e)};(0,i.useEffect)((()=>{requestAnimationFrame((()=>{te(!1)}))}),[y,f,n.length]),(0,i.useEffect)((()=>{te(!0)}),[a]),(0,i.useEffect)((()=>{var e,t;(null===(e=c.current)||void 0===e?void 0:e.contains(document.activeElement))&&document.activeElement!==u.current&&(null===(t=u.current)||void 0===t||t.focus({preventScroll:!0}))}),[a]);const ae=(0,m.A)({[K["tabs-header"]]:!0,[K["tabs-header-with-divider"]]:"default"===s||p}),ie=(0,m.A)({[K["pagination-button"]]:!0,[K["pagination-button-left"]]:!0,[K["pagination-button-left-scrollable"]]:k}),ne=(0,m.A)({[K["pagination-button"]]:!0,[K["pagination-button-right"]]:!0,[K["pagination-button-right-scrollable"]]:I}),se=(0,i.useRef)(null);function re(e){var i,s;e.focus();const r=n.reduce(((e,t)=>e.set(t.id,t)),new Map);for(const[n,l]of j.current.entries()){const o=null===l||void 0===l?void 0:l.querySelector(".".concat(K["tabs-tab-link"]));if(n!==a&&o===e){W(n),O(n),(null===(i=r.get(n))||void 0===i?void 0:i.disabled)||t({activeTabId:n,activeTabHref:null===(s=r.get(n))||void 0===s?void 0:s.href});break}}}function le(e){return(0,C.ze)(e).filter((e=>{return function(e){var t,a;return null!==(a=null===(t=se.current)||void 0===t?void 0:t.isRegistered(e))&&void 0!==a&&a}(e)&&((t=e)instanceof HTMLButtonElement?!t.disabled||t.closest($):t.matches($));var t}))}(0,i.useEffect)((()=>{var e;null===(e=se.current)||void 0===e||e.updateFocusTarget()}));const oe=J?"div":"ul";return i.createElement("div",{className:ae,ref:_},y&&i.createElement("span",{ref:b,className:ie},i.createElement(E.Q,{formAction:"none",variant:"icon",iconName:"angle-left",disabled:!k,__focusable:!0,onClick:()=>q(c,"backward"),ariaLabel:h("i18nStrings.scrollLeftAriaLabel",null===d||void 0===d?void 0:d.scrollLeftAriaLabel)})),i.createElement(L.n0,{ref:se,navigationActive:!0,getNextFocusTarget:function(){var e,t;if(!g.current)return null;const a=Array.from(g.current.querySelectorAll(U));return null!==(t=null!==(e=a.find((e=>e.matches(X))))&&void 0!==e?e:a.find((e=>!e.disabled)))&&void 0!==t?t:null},onUnregisterActive:function(e){var t;if(!!e.classList.contains(K["tabs-tab-link"])){const e=null===(t=se.current)||void 0===t?void 0:t.getFocusTarget(),a=null===e||void 0===e?void 0:e.querySelector(".".concat(K["tabs-tab-link"]));null===a||void 0===a||a.focus()}}},i.createElement(oe,Object.assign({},ee,{className:K["tabs-header-list"],"aria-label":l,"aria-labelledby":o,ref:c,onScroll:()=>{c.current&&(D(V(c.current)),M(Q(c.current)))},onKeyDown:function(e){const t=document.activeElement,i=[N.D.right,N.D.left,N.D.end,N.D.home,N.D.pageUp,N.D.pageDown],n=document.querySelector(".".concat(K["tabs-tab-action"],' [aria-expanded="true"]')),s=!(null===t||void 0===t?void 0:t.classList.contains(K["tabs-tab-link"]));if(n)return;if("Tab"===e.key&&!e.shiftKey&&s){e.preventDefault();const t="".concat(r,"-").concat(a,"-panel"),i=document.getElementById(t);null===i||void 0===i||i.focus()}if((0,v.QO)(e)||-1===i.indexOf(e.keyCode))return;if(!g.current||!t)return;e.preventDefault();const l=le(g.current),o=document.activeElement instanceof HTMLElement?l.indexOf(document.activeElement):-1;(0,R.A)(e,{onHome:()=>re(l[0]),onEnd:()=>re(l[l.length-1]),onInlineStart:()=>re(l[(0,z.J)(o-1,[0,l.length-1])]),onInlineEnd:()=>re(l[(0,z.J)(o+1,[0,l.length-1])]),onPageDown:()=>I&&q(c,"forward"),onPageUp:()=>k&&q(c,"backward")})},onFocus:function(){var e;null===(e=se.current)||void 0===e||e.updateFocusTarget()},onBlur:function(){var e;null===(e=se.current)||void 0===e||e.updateFocusTarget()}}),n.map((function(e){const{dismissible:n,dismissLabel:s,dismissDisabled:l,action:o,onDismiss:d}=e,c=a===e.id&&!e.disabled,b=(0,m.A)({[K["tabs-tab-link"]]:!0,[K.refresh]:p,[K["tabs-tab-active"]]:a===e.id&&!e.disabled,[K["tabs-tab-focused"]]:F===e.id,[K["tabs-tab-active"]]:c,[K["tabs-tab-disabled"]]:e.disabled,[K["tabs-tab-focusable"]]:!e.disabled||e.disabled&&!!e.disabledReason}),h=(0,m.A)({[K["tabs-tab-header-container"]]:!0,[K.refresh]:p,[K["tabs-tab-active"]]:c,[K["tabs-tab-disabled"]]:e.disabled,[K["tabs-tab-focusable"]]:!e.disabled||e.disabled&&!!e.disabledReason}),f=(0,m.A)({[K["tabs-tab-action"]]:!0,[K["tabs-tab-active"]]:c}),x={className:b,"aria-controls":"".concat(r,"-").concat(e.id,"-panel"),"data-testid":e.id,id:Z({namespace:r,tabId:e.id}),onClick:i=>{if(e.disabled)return void i.preventDefault();if((0,v.ah)(i)||!e.href){if(i.preventDefault(),!e.href){const t=j.current.get(e.id);t&&t&&t!==document.activeElement&&t.focus({preventScroll:!0})}e.id!==a&&(O(e.id),W(e.id),t({activeTabId:e.id,activeTabHref:e.href}))}}},_=J?{role:"group","aria-labelledby":x.id}:{};J?x["aria-expanded"]=a===e.id:(x["aria-selected"]=a===e.id,x.role="tab");e.disabled&&(x["aria-disabled"]="true");const y=J?"div":"li";return i.createElement(y,{ref:t=>j.current.set(e.id,t),className:K["tabs-tab"],role:"presentation",key:e.id},i.createElement("div",Object.assign({className:h},_),i.createElement(Y,{ref:t=>{e.id===a&&(u.current=t),j.current.set(e.id,t)},tab:e,elementProps:x}),o&&i.createElement("span",{className:f},o),n&&i.createElement("span",{className:K["tabs-tab-dismiss"]},function(e,t,a){return i.createElement(E.Q,{onClick:a,variant:"icon",iconName:"close",formAction:"none",ariaLabel:e,disabled:t})}(s,l,(a=>{if(!g.current||!d)return;const i=le(g.current).filter((e=>e.classList.contains(K["tabs-tab-link"]))),n=i.findIndex((t=>t.dataset.testid===e.id));let s;i.splice(n,1),s=H&&H!==e.id?i.find((e=>e.dataset.testid===H)):i[Math.min(i.length-1,n)],s&&s.dataset.testid&&(t({activeTabId:s.dataset.testid}),s.focus()),d(a)})))))})))),y&&i.createElement("span",{className:ne},i.createElement(E.Q,{formAction:"none",variant:"icon",iconName:"angle-right",disabled:!I,__focusable:!0,onClick:()=>q(c,"forward"),ariaLabel:h("i18nStrings.scrollRightAriaLabel",null===d||void 0===d?void 0:d.scrollRightAriaLabel)})))}const Y=(0,i.forwardRef)(((e,t)=>{let{tab:a,elementProps:n}=e;const s=(0,i.useRef)(null),r=(0,i.useRef)(null),l=(0,P.S)(s,t),{tabIndex:o}=(0,L.Xp)(s),d=a.disabled&&!!a.disabledReason,[c,u]=(0,i.useState)(!1),{targetProps:b,descriptionEl:h}=(0,I.A)(a.disabledReason),p=i.createElement(i.Fragment,null,i.createElement("span",{className:K["tabs-tab-label"],ref:r},a.label),d&&i.createElement(i.Fragment,null,h,c&&i.createElement(D.A,{className:K["disabled-reason-tooltip"],trackRef:r,value:a.disabledReason}))),g={onFocus:()=>u(!0),onBlur:()=>u(!1),onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)},m=Object.assign(Object.assign(Object.assign(Object.assign({},n),d?b:{}),d?g:{}),{ref:l,tabIndex:o});return a.href?i.createElement("a",Object.assign({},m,{href:a.href}),p):i.createElement("button",Object.assign({},m,{type:"button",disabled:a.disabled&&!d}),p)}));function Z(e){let{namespace:t,tabId:a}=e;return t+"-"+a}function ee(e){var t,a,{tabs:n,variant:s="default",onChange:r,activeTabId:l,ariaLabel:o,ariaLabelledby:d,disableContentPaddings:c=!1,i18nStrings:u,fitHeight:b}=e,h=(0,g.Tt)(e,["tabs","variant","onChange","activeTabId","ariaLabel","ariaLabelledby","disableContentPaddings","i18nStrings","fitHeight"]);for(const i of n)(0,k.j)("Tabs",i.href);const{__internalRootRef:p}=(0,_.A)("Tabs",{props:{disableContentPaddings:c,variant:s}}),w=(0,y.Y)("awsui-tabs-"),[A,E]=(0,j.P)(l,r,null!==(a=null===(t=function(e){const t=e.filter((e=>!e.disabled));return t.length>0?t[0]:null}(n))||void 0===t?void 0:t.id)&&void 0!==a?a:"",{componentName:"Tabs",controlledProp:"activeTabId",changeHandler:"onChange"}),S=(0,x.C)(h),C=()=>{const e=n.filter((e=>e.id===A))[0];return i.createElement("div",{className:(0,m.A)("container"===s||"stacked"===s?K["tabs-container-content-wrapper"]:K["tabs-content-wrapper"],{[K["with-paddings"]]:!c})},n.map((t=>{const a=t===e,n={className:(0,m.A)({[K["tabs-content"]]:!0,[K["tabs-content-active"]]:a}),role:"tabpanel",id:"".concat(w,"-").concat(t.id,"-panel"),key:"".concat(w,"-").concat(t.id,"-panel"),tabIndex:0,"aria-labelledby":Z({namespace:w,tabId:t.id})},s=a&&!e.disabled;return i.createElement("div",Object.assign({},n),s&&e.content)})))},D=i.createElement(J,{activeTabId:A,variant:s,idNamespace:w,ariaLabel:o,ariaLabelledby:d,tabs:n,onChange:e=>{E(e.activeTabId),(0,v.KV)(r,e)},i18nStrings:u});return"container"===s||"stacked"===s?i.createElement(f.A,Object.assign({header:D,disableHeaderPaddings:!0},S,{className:(0,m.A)(S.className,K.root),__internalRootRef:p,disableContentPaddings:!0,variant:"stacked"===s?"stacked":"default",fitHeight:b}),C()):i.createElement("div",Object.assign({},S,{className:(0,m.A)(S.className,K.root,K.tabs,{[K["fit-height"]]:b}),ref:p}),D,C())}(0,w.o)(ee,"Tabs");var te=a(6600),ae=a(2030),ie=a(579);const ne=e=>{let{selectedProduct:t}=e;return t?(0,ie.jsx)(ie.Fragment,{children:(0,ie.jsxs)("div",{style:{padding:"0 20px"},children:[(0,ie.jsxs)(te.A,{minColumnWidth:300,columns:3,children:[(0,ie.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"5px",fontSize:"12px"},children:[(0,ie.jsx)("h3",{children:(0,ie.jsx)("b",{children:"Item Information"})}),(0,ie.jsxs)("p",{children:["Category \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0",t.category]}),(0,ie.jsxs)("p",{children:["Item Code\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0",t.itemCode]}),(0,ie.jsx)("p",{children:"Units\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0kg"}),(0,ie.jsx)("p",{children:"Created Source\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0Admin"}),(0,ie.jsxs)("span",{style:{},children:[(0,ie.jsx)("h3",{children:(0,ie.jsx)("b",{children:"Quantity On Hand"})}),(0,ie.jsxs)("h1",{style:{backgroundColor:"#E9EBED",padding:"15px",fontSize:"20px",fontWeight:"700",borderRadius:"10px",display:"inline-block",color:"#354150"},children:[t.stockQuantity,"KG"]})]}),(0,ie.jsxs)("p",{children:["Suncity Warehouse \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0",t.quantityOnHand,"kg"]}),(0,ie.jsxs)("p",{children:["Girdhari Store\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0",t.quantityOnHand,"kg"]}),(0,ie.jsx)("p",{children:"Atmakur Warehouse\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0kg"}),(0,ie.jsx)("p",{children:"Valigunda Warehouse \xa0\xa0\xa0\xa0\xa0:\xa0\xa0103 kg"})]}),(0,ie.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"5px",fontSize:"12px"},children:[(0,ie.jsx)("h3",{children:(0,ie.jsx)("b",{children:"Purchase and Sales Information"})}),(0,ie.jsxs)("p",{children:["Purchasing Price: ",t.purchasingPrice]}),(0,ie.jsxs)("p",{children:["Minimum Selling Price: ",t.msp]})]}),(0,ie.jsxs)("div",{style:{borderRadius:"10px",width:"400px",height:"250px",display:"flex",gap:"20px"},children:[(0,ie.jsx)("div",{children:(0,ie.jsx)("img",{style:{borderRadius:"10px",border:"1px solid #D9D9D9",width:"230px",height:"240px"},src:t.image,alt:"product",height:"full",width:"full"})}),(0,ie.jsxs)("div",{style:{display:"flex",gap:"15px",paddingTop:"7px"},children:[(0,ie.jsx)("div",{style:{border:"1px solid #D9D9D9",borderRadius:"10px",height:"47.5px",width:"45px"},children:(0,ie.jsx)("img",{style:{borderRadius:"10px",height:"46px",width:"45px"},src:t.images[1],alt:"product",height:"full",width:"full"})}),(0,ie.jsx)("div",{style:{border:"1px solid #D9D9D9",borderRadius:"10px",height:"47.5px",width:"45px"},children:(0,ie.jsx)("img",{style:{borderRadius:"10px",height:"46px",width:"45px"},src:t.images[2],alt:"product",height:"full",width:"full"})})]})]})]}),(0,ie.jsxs)("div",{style:{border:"1px solid #D9D9D9",padding:"20px",borderRadius:"10px",marginTop:"30px"},children:[(0,ie.jsx)(h.A,{variant:"h3",description:"",children:"Sales Order Summary"}),(0,ie.jsx)(ae.A,{series:[{title:"Site 1",type:"bar",data:[{x:new Date(2023,0),y:34503},{x:new Date(2023,1),y:25832},{x:new Date(2023,2),y:4012},{x:new Date(2023,3),y:-5602},{x:new Date(2023,4),y:17839},{x:new Date(2023,5),y:22e3},{x:new Date(2023,6),y:3e4},{x:new Date(2023,7),y:15e3},{x:new Date(2023,8),y:27e3},{x:new Date(2023,9),y:23e3},{x:new Date(2023,10),y:18e3},{x:new Date(2023,11),y:29e3}],valueFormatter:e=>"$"+e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})},{title:"Average revenue",y:19104,valueFormatter:e=>"$"+e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}],xDomain:[new Date(2023,0),new Date(2023,1),new Date(2023,2),new Date(2023,3),new Date(2023,4),new Date(2023,5),new Date(2023,6),new Date(2023,7),new Date(2023,8),new Date(2023,9),new Date(2023,10),new Date(2023,11)],yDomain:[-1e4,4e4],i18nStrings:{xTickFormatter:e=>e.toLocaleDateString("en-US",{month:"short",year:"numeric"}),yTickFormatter:function(e){return Math.abs(e)>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":Math.abs(e)>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":Math.abs(e)>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e.toFixed(2)}},ariaLabel:"Single data series line chart",height:150,hideLegend:!0,xTitle:"Month",yTitle:"Revenue (USD)",empty:(0,ie.jsxs)(l.A,{textAlign:"center",color:"inherit",children:[(0,ie.jsx)("b",{children:"No data available"}),(0,ie.jsx)(l.A,{variant:"p",color:"inherit",children:"There is no data available"})]}),noMatch:(0,ie.jsxs)(l.A,{textAlign:"center",color:"inherit",children:[(0,ie.jsx)("b",{children:"No matching data"}),(0,ie.jsx)(l.A,{variant:"p",color:"inherit",children:"There is no matching data to display"}),(0,ie.jsx)(u.A,{children:"Clear filter"})]})})]})]})}):(0,ie.jsx)("div",{children:"No product selected"})};var se=a(2009);function re(e){var{type:t="success",wrapText:a=!0}=e,n=(0,g.Tt)(e,["type","wrapText"]);const s=(0,_.A)("StatusIndicator",{props:{colorOverride:n.colorOverride,type:t,wrapText:a}});return i.createElement(se.A,Object.assign({type:t,wrapText:a},n,s))}(0,w.o)(re,"StatusIndicator");var le=a(9971),oe=a(8828),de=a(7468);const ce=()=>{const[e,t]=i.useState(""),[a,g]=i.useState(!1),[m,f]=i.useState(null),[x,v]=i.useState("first"),[_,j]=i.useState(1),[y,w]=i.useState(1),[k,A]=i.useState(null),E=(0,n.d4)((e=>e.items.products)),S=(0,n.wA)(),{data:C=[],status:D}=E;console.log("data",C),(0,i.useEffect)((()=>{S((0,oe.j)({category:(null===k||void 0===k?void 0:k.value)||"",search:e}))}),[S,k,e]);const L=Array.isArray(null===C||void 0===C?void 0:C.items)?C.items.filter((t=>t.name.toLowerCase().includes(e.toLowerCase()))):[],I=50*(_-1),P=I+50,T=L.slice(I,P);Math.ceil(L.length/50);return(0,ie.jsxs)("div",{className:"flex-col gap-3",children:[(0,ie.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,ie.jsx)(d.A,{headerVariant:"high-contrast",breadcrumbs:(0,ie.jsx)(s.A,{items:[{text:"Dashboard",href:"/app/dashboard"},{text:"Inventory",href:"#components"}],ariaLabel:"Breadcrumbs"}),header:(0,ie.jsx)(h.A,{variant:"h1",children:"Inventory"}),children:(0,ie.jsx)(p.A,{children:(0,ie.jsxs)(te.A,{columns:5,variant:"default",minColumnWidth:150,children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)(l.A,{variant:"awsui-key-label",children:(0,ie.jsx)("p",{style:{fontSize:12},children:"All Products"})}),(0,ie.jsx)("span",{style:{fontSize:40,fontWeight:"1000",lineHeight:1.3,color:"#037F0C"},children:C.count})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsx)(l.A,{variant:"awsui-key-label",children:(0,ie.jsx)("p",{style:{fontSize:12},children:"Published Stock"})}),(0,ie.jsx)("span",{style:{fontSize:40,fontWeight:"1000",lineHeight:1.3,color:"#602400"},children:"423"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsx)(l.A,{variant:"awsui-key-label",children:(0,ie.jsx)("p",{style:{fontSize:12},children:"Low Stock Alert"})}),(0,ie.jsx)("span",{style:{fontSize:40,fontWeight:"1000",lineHeight:1.3,color:"#2EA597"},children:"123"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsx)(l.A,{variant:"awsui-key-label",children:(0,ie.jsx)("p",{style:{fontSize:12},children:"Expired"})}),(0,ie.jsx)("span",{style:{fontSize:40,fontWeight:"1000",lineHeight:1.3,color:"#56CCF2"},children:"128"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsx)(l.A,{variant:"awsui-key-label",children:(0,ie.jsx)("p",{style:{fontSize:12},children:"Categories"})}),(0,ie.jsx)("span",{style:{fontSize:40,fontWeight:"1000",lineHeight:1.3,color:"#EB5757"},children:"4"})]})]})})}),(0,ie.jsx)("div",{style:{marginTop:"1rem"},children:(0,ie.jsxs)(de.A,{disableGutters:!0,gridDefinition:[{colspan:{default:12,xxs:6}},{colspan:{default:12,xxs:6}}],children:[(0,ie.jsxs)("div",{style:{display:"flex",gap:"0.4rem"},children:[(0,ie.jsx)(b.A,{size:"3xs",filteringPlaceholder:"Search",filteringText:e,onChange:e=>{let{detail:a}=e;t(a.filteringText)}}),(0,ie.jsx)(le.A,{required:!0,selectedOption:k,onChange:e=>{let{detail:t}=e;A(t.selectedOption)},options:[{label:"All",value:""},{label:"FRUITS AND VEGETABLES",value:"Fruits And Vegetables"},{label:"DAIRIES AND GROCERIES",value:"Dairies And Groceries"},{label:"BENGALI SPECIAL",value:"Bengali Special"},{label:"MEAT/FISH/EGGS",value:"Meat/Fish/Eggs"}],placeholder:"Select Category"})]}),(0,ie.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,ie.jsx)(o.A,{currentPageIndex:_,onChange:e=>{let{detail:t}=e;return j(t.currentPageIndex)},pagesCount:5})}),(0,ie.jsx)("div",{})]})})]}),(0,ie.jsx)("div",{style:{marginTop:"15px"},children:(0,ie.jsx)(r.A,{variant:"borderless",columnDefinitions:[{id:"itemCode",header:"Item Code",cell:e=>e.itemCode,isRowHeader:!0},{id:"name",header:"Name",cell:e=>(0,ie.jsxs)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:()=>(f(e),void g(!0)),children:[(0,ie.jsx)("img",{src:e.image,style:{width:"30px",height:"30px",marginRight:"10px"}}),e.name]})},{id:"category",sortingField:"category",header:"Category",cell:e=>e.category},{sortingField:"quantityOnHand",id:"quantityOnHand",header:"Quantity on Hand",cell:e=>e.stockQuantity},{sortingField:"stockAlert",id:"stockAlert",header:"Stock Alert",cell:e=>{return(0,ie.jsx)("span",{style:{color:(t="Available",t.toLowerCase().includes("low")?"red":"#0492C2")},children:'"Available"'});var t}},{sortingField:"purchasingPrice",id:"purchasingPrice",header:"Purchasing Price",cell:e=>e.purchasingPrice},{sortingField:"msp",id:"msp",header:"MSP",cell:e=>e.msp}],columnDisplay:[{id:"itemCode",visible:!0},{id:"name",visible:!0},{id:"category",visible:!0},{id:"quantityOnHand",visible:!0},{id:"stockAlert",visible:!0},{id:"purchasingPrice",visible:!0},{id:"msp",visible:!0},{id:"status",visible:!0}],enableKeyboardNavigation:!0,items:T,loadingText:"Loading resources",trackBy:"itemCode",empty:(0,ie.jsx)(l.A,{margin:{vertical:"xs"},textAlign:"center",color:"inherit",children:(0,ie.jsxs)(c.A,{size:"m",children:[(0,ie.jsx)("b",{children:"No resources"}),(0,ie.jsx)(u.A,{children:"Create resource"})]})})})}),a&&m&&(0,ie.jsxs)("div",{style:{position:"fixed",top:0,right:0,height:"100%",width:"65%",backgroundColor:"white",boxShadow:"-2px 0 5px rgba(0, 0, 0, 0.5)",zIndex:1e3,overflowY:"auto"},children:[(0,ie.jsxs)(l.A,{padding:{left:"m",right:"m",top:"s"},display:"flex",justifyContent:"space-between",backgroundColor:"lightgrey",children:[(0,ie.jsx)("div",{style:{display:"flex",justifyContent:"end"},children:(0,ie.jsx)(u.A,{iconName:"close",variant:"icon",onClick:()=>{g(!1),f(null)}})}),(0,ie.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,ie.jsxs)("h1",{style:{color:"#0972D3"},children:[m.name,(0,ie.jsx)("br",{}),(0,ie.jsxs)("p",{style:{color:"black",fontSize:"large",paddingTop:"15px"},children:["Stock: ",m.stockQuantity,"Kg\xa0\xa0",(0,ie.jsx)("span",{style:{fontSize:"10px"},children:"Low Stock"===m.stockAlert?(0,ie.jsx)(re,{type:"warning",size:"small",children:m.stockAlert}):(0,ie.jsx)("span",{style:{fontSize:"medium",color:"#0972D3"},children:m.stockAlert})})]})]})})]}),(0,ie.jsx)("div",{children:(0,ie.jsx)(ee,{variant:"borderless",onChange:e=>{let{detail:t}=e;return v(t.activeTabId)},activeTabId:x,tabs:[{size:"xs",label:"Overview",id:"first",content:(0,ie.jsx)(ne,{selectedProduct:m})}]})})]})]})}},3372:(e,t,a)=>{a.d(t,{A:()=>x});var i=a(5043),n=a(6734),s=a(3714),r=a(1054),l=a(6326),o=a(4323),d=a(5595),c=a(2795),u=a(8906),b=a(2103);const h={root:"awsui_root_fvjdu_ki6j9_97",button:"awsui_button_fvjdu_ki6j9_140",dots:"awsui_dots_fvjdu_ki6j9_141","button-disabled":"awsui_button-disabled_fvjdu_ki6j9_169",arrow:"awsui_arrow_fvjdu_ki6j9_174","page-number":"awsui_page-number_fvjdu_ki6j9_184","button-current":"awsui_button-current_fvjdu_ki6j9_190","page-item":"awsui_page-item_fvjdu_ki6j9_207","root-disabled":"awsui_root-disabled_fvjdu_ki6j9_225"},p={nextPageLabel:"",paginationLabel:"",previousPageLabel:"",pageLabel:e=>"".concat(e)};function g(e){var{className:t,ariaLabel:a,disabled:s,pageIndex:r,isCurrent:d=!1,children:c,onClick:u}=e,b=(0,l.Tt)(e,["className","ariaLabel","disabled","pageIndex","isCurrent","children","onClick"]);return i.createElement("li",Object.assign({className:h["page-item"]},(0,n.j4)(b)),i.createElement("button",Object.assign({className:(0,o.A)(t,h.button,s&&h["button-disabled"],d&&h["button-current"]),type:"button","aria-label":a,disabled:s,onClick:function(e){e.preventDefault(),u(r)},"aria-current":d},s?{}:(0,n.MV)({action:"click",detail:{label:{root:"self"}}})),c))}function m(e){var{pageIndex:t}=e,a=(0,l.Tt)(e,["pageIndex"]);return i.createElement(g,Object.assign({className:h["page-number"],pageIndex:t},a,a.disabled?{}:(0,n.MV)({detail:{position:"".concat(t)}})),t)}function f(e){var t,a,s,{openEnd:r,currentPageIndex:f,ariaLabels:x,pagesCount:v,disabled:_,onChange:j,onNextPageClick:y,onPreviousPageClick:w,__internalRootRef:k=null}=e,A=(0,l.Tt)(e,["openEnd","currentPageIndex","ariaLabels","pagesCount","disabled","onChange","onNextPageClick","onPreviousPageClick","__internalRootRef"]);const E=(0,u.C)(A),{leftDots:S,leftIndex:C,rightIndex:D,rightDots:L}=function(e,t,a){const i=Math.floor(3.5);let n=i,s=t-1;a&&(n++,s=t+1);let r=e-i,l=e+n;r<2&&(l+=2-r,r=2),l>s&&(r-=l-s,l=s),r=Math.max(r,2),l=Math.min(l,s);const o=r>2,d=a||l<s;return o&&r++,d&&l--,{leftDots:o,rightDots:d,leftIndex:r,rightIndex:l}}(f,v,r),I=(0,d.pI)("pagination"),P=null===x||void 0===x?void 0:x.paginationLabel,T=null!==(t=I("ariaLabels.nextPageLabel",null===x||void 0===x?void 0:x.nextPageLabel))&&void 0!==t?t:p.nextPageLabel,N=null!==(a=I("ariaLabels.previousPageLabel",null===x||void 0===x?void 0:x.previousPageLabel))&&void 0!==a?a:p.previousPageLabel,z=null!==(s=I("ariaLabels.pageLabel",null===x||void 0===x?void 0:x.pageLabel,(e=>t=>e({pageNumber:t}))))&&void 0!==s?s:p.pageLabel;function R(e){(0,b.KV)(j,{currentPageIndex:e})}const M=_||1===f,F=_||!r&&(0===v||f===v);return i.createElement("ul",Object.assign({"aria-label":P},E,{className:(0,o.A)(E.className,h.root,_&&h["root-disabled"]),ref:k}),i.createElement(g,Object.assign({className:h.arrow,pageIndex:f-1,ariaLabel:null!==N&&void 0!==N?N:p.nextPageLabel,disabled:M,onClick:function(e){R(e),(0,b.KV)(w,{requestedPageAvailable:!0,requestedPageIndex:e})}},M?{}:(0,n.MV)({detail:{position:"prev"}})),i.createElement(c.A,{name:"angle-left",variant:_?"disabled":"normal"})),i.createElement(m,{pageIndex:1,isCurrent:1===f,disabled:_,ariaLabel:z(1),onClick:R}),S&&i.createElement("li",{className:h.dots},"..."),function(e,t){const a=[];for(let i=e;i<=t;i++)a.push(i);return a}(C,D).map((e=>i.createElement(m,{key:e,isCurrent:f===e,pageIndex:e,disabled:_,ariaLabel:z(e),onClick:R}))),L&&i.createElement("li",{className:h.dots},"..."),!r&&v>1&&i.createElement(m,{isCurrent:f===v,pageIndex:v,disabled:_,ariaLabel:z(v),onClick:R}),i.createElement(g,Object.assign({className:h.arrow,pageIndex:f+1,ariaLabel:null!==T&&void 0!==T?T:p.nextPageLabel,disabled:F,onClick:function(e){R(e),(0,b.KV)(y,{requestedPageAvailable:f<v,requestedPageIndex:e})}},F?{}:(0,n.MV)({detail:{position:"next"}})),i.createElement(c.A,{name:"angle-right",variant:_?"disabled":"normal"})))}function x(e){const t=(0,s.A)("Pagination",{props:{openEnd:e.openEnd}});return i.createElement(f,Object.assign({},e,t,(0,n.MV)({component:{name:"awsui.Pagination",label:{root:"self"},properties:{openEnd:"".concat(!!e.openEnd),pagesCount:"".concat(e.pagesCount||""),currentPageIndex:"".concat(e.currentPageIndex)}}})))}(0,r.o)(x,"Pagination")}}]);
//# sourceMappingURL=197.89a84699.chunk.js.map