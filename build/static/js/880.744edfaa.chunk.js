"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[880],{8809:(e,n,t)=>{t.d(n,{P:()=>o});var a=t(5043),i=t(4323),s=t(9892);const r={root:"awsui_root_37gf8_14wux_9"};function o(e){let{className:n,testUtilClasses:t,action:o,discoveredActions:l,buttonText:c,onButtonClick:u}=e;const d=function(e,n,t,i){return!n&&t&&(n=a.createElement(s.A,{className:e.actionButton,onClick:i,formAction:"none"},t)),n?a.createElement("div",{className:e.actionSlot},n):null}(t,o,c,u);return d||0!==l.length?a.createElement("div",{className:(0,i.A)(r.root,n)},d,l):null}},7880:(e,n,t)=>{t.d(n,{A:()=>ne});var a=t(5043),i=t(1054),s=t(6326),r=t(3523),o=t(4323),l=t(5595),c=t(2795);var u=t(9360),d=t(7629),m=t(8649),f=t(8119),p=t(8172),h=t(1823),_=t(8195);function b(e,n){let{trailing:t=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=null,i=null,s=null;function r(){if(null===a||null===i)return;const r=Date.now();r-i>=n?(e.apply(a.this,a.args),i=r,a=null,s=null):t&&o()}function o(){s&&cancelAnimationFrame(s),s=requestAnimationFrame(r)}function l(){for(var n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];null===i?(i=Date.now(),e.apply(this,t)):(a={this:this,args:t},o())}return l.cancel=()=>{s&&cancelAnimationFrame(s),a=null,i=null,s=null},l}var v=t(9016),g=t(8906),w=t(951),y=t(3714),A=t(9084),E=t(8171),x=t(7349),I=t(8809),L=t(9892),S=t(8328),q=t(3455),N=t(3560),R=t(4301),k=t(9909),C=t(9090);const j={error:"red",info:"blue","in-progress":"blue",success:"green",warning:"yellow"};function O(e){return e.loading?"in-progress":e.type||"info"}function P(e){return function(e){const n="blue";return e&&j[e]||n}(O(e))}function M(e){const n={error:0,info:0,"in-progress":0,success:0,warning:0};for(const t of e){n[O(t)]+=1}return n}const T=[{type:"error",labelName:"errorIconAriaLabel",iconName:"status-negative"},{type:"warning",labelName:"warningIconAriaLabel",iconName:"status-warning"},{type:"success",labelName:"successIconAriaLabel",iconName:"status-positive"},{type:"info",labelName:"infoIconAriaLabel",iconName:"status-info"},{type:"in-progress",labelName:"inProgressIconAriaLabel",iconName:"status-in-progress"}],F=new v.K1(N.xo,N.i8),B="csa_flashbar",V=e=>{const n=M(e);F.sendPanoramaMetric({eventContext:B,eventType:"render",eventValue:e.length.toString(),eventDetail:n})},D=(e,n)=>{F.sendPanoramaMetric({eventContext:B,eventType:n?"expand":"collapse",eventValue:e.toString()})},z={"flash-with-motion":"awsui_flash-with-motion_1q84n_1mepa_97",enter:"awsui_enter_1q84n_1mepa_97","flash-body":"awsui_flash-body_1q84n_1mepa_111","flash-message":"awsui_flash-message_1q84n_1mepa_111","flash-header":"awsui_flash-header_1q84n_1mepa_111","flash-content":"awsui_flash-content_1q84n_1mepa_112","action-button-wrapper":"awsui_action-button-wrapper_1q84n_1mepa_113","dismiss-button-wrapper":"awsui_dismiss-button-wrapper_1q84n_1mepa_114","flash-icon":"awsui_flash-icon_1q84n_1mepa_137",entering:"awsui_entering_1q84n_1mepa_150",entered:"awsui_entered_1q84n_1mepa_171",exiting:"awsui_exiting_1q84n_1mepa_276",stack:"awsui_stack_1q84n_1mepa_298","animation-running":"awsui_animation-running_1q84n_1mepa_298",item:"awsui_item_1q84n_1mepa_298","flash-list-item":"awsui_flash-list-item_1q84n_1mepa_299","notification-bar":"awsui_notification-bar_1q84n_1mepa_300",collapsed:"awsui_collapsed_1q84n_1mepa_320","animation-ready":"awsui_animation-ready_1q84n_1mepa_320","expanded-only":"awsui_expanded-only_1q84n_1mepa_320",expanded:"awsui_expanded_1q84n_1mepa_320",flash:"awsui_flash_1q84n_1mepa_97",collapsible:"awsui_collapsible_1q84n_1mepa_384","short-list":"awsui_short-list_1q84n_1mepa_390","visual-refresh":"awsui_visual-refresh_1q84n_1mepa_390",status:"awsui_status_1q84n_1mepa_597",header:"awsui_header_1q84n_1mepa_597","item-count":"awsui_item-count_1q84n_1mepa_598",button:"awsui_button_1q84n_1mepa_599","type-count":"awsui_type-count_1q84n_1mepa_632","count-number":"awsui_count-number_1q84n_1mepa_632",icon:"awsui_icon_1q84n_1mepa_666",floating:"awsui_floating_1q84n_1mepa_707",flashbar:"awsui_flashbar_1q84n_1mepa_715","flash-refresh":"awsui_flash-refresh_1q84n_1mepa_790","flash-list":"awsui_flash-list_1q84n_1mepa_299","flash-focus-container":"awsui_flash-focus-container_1q84n_1mepa_811","flash-text":"awsui_flash-text_1q84n_1mepa_841","dismiss-button":"awsui_dismiss-button_1q84n_1mepa_114","breakpoint-default":"awsui_breakpoint-default_1q84n_1mepa_883","action-button":"awsui_action-button_1q84n_1mepa_113","action-slot":"awsui_action-slot_1q84n_1mepa_893","flash-type-success":"awsui_flash-type-success_1q84n_1mepa_897","flash-type-error":"awsui_flash-type-error_1q84n_1mepa_901","flash-type-info":"awsui_flash-type-info_1q84n_1mepa_905","flash-type-in-progress":"awsui_flash-type-in-progress_1q84n_1mepa_906","flash-type-warning":"awsui_flash-type-warning_1q84n_1mepa_910"},Y={success:"status-positive",warning:"status-warning",info:"status-info",error:"status-negative","in-progress":"status-in-progress"},H=(0,k.W)(R.pM.flashbar.onActionRegistered);const U=b(((e,n)=>{var t;const a='[data-itemid="'.concat(CSS.escape(n),'"] .').concat(z["flash-focus-container"]);null===(t=null===e||void 0===e?void 0:e.querySelector(a))||void 0===t||t.focus()}),2e3,{trailing:!1}),W=a.forwardRef(((e,n)=>{var{id:t,header:i,content:r,dismissible:l,dismissLabel:u,loading:m,action:f,buttonText:p,onButtonClick:h,onDismiss:_,className:b,transitionState:w,ariaRole:y,i18nStrings:E,type:R="info"}=e,k=(0,s.Tt)(e,["id","header","content","dismissible","dismissLabel","loading","action","buttonText","onButtonClick","onDismiss","className","transitionState","ariaRole","i18nStrings","type"]);x.y&&(p&&!h&&(0,v.mc)("Flashbar","You provided a `buttonText` prop without an `onButtonClick` handler. This will render a non-interactive action button."),l&&!_&&(0,v.mc)("Flashbar","You have set the `dismissible` prop without an `onDismiss` handler. This will render a non-interactive dismiss button."));const j=(0,g.G)(k),O=(0,v.Ol)("Flash",N.i8,Object.assign({},j)),P=(0,A.S)(n,O),{discoveredActions:M,headerRef:T,contentRef:V}=H(R),D=Y[R],U=m?a.createElement(C.A,null):a.createElement(c.A,{name:D}),W=m?"info":R,G={[S.qY]:W},K=k.statusIconAriaLabel||(null===E||void 0===E?void 0:E["".concat(m||"in-progress"===R?"inProgress":R,"IconAriaLabel")]);return a.createElement("div",Object.assign({ref:P,role:y,"aria-live":y?"off":void 0,"data-itemid":t,className:(0,o.A)(z.flash,z["flash-type-".concat(W)],b,w&&{[z.enter]:"enter"===w,[z.entering]:"entering"===w,[z.entered]:"entered"===w,[z.exit]:"exit"===w,[z.exiting]:"exiting"===w,[z.exited]:"exited"===w},(0,d.t0)("warning"!==R||m?"flashbar":"flashbar-warning"))},G),a.createElement("div",{className:z["flash-body"]},a.createElement("div",{className:z["flash-focus-container"],tabIndex:-1},a.createElement("div",{className:(0,o.A)(z["flash-icon"],z["flash-text"]),role:"img","aria-label":K},U),a.createElement("div",{className:(0,o.A)(z["flash-message"],z["flash-text"])},a.createElement("div",{className:z["flash-header"],ref:T},i),a.createElement("div",{className:z["flash-content"],ref:V},r))),a.createElement(I.P,{className:z["action-button-wrapper"],testUtilClasses:{actionSlot:z["action-slot"],actionButton:z["action-button"]},action:f,discoveredActions:M,buttonText:p,onButtonClick:h})),l&&function(e,n){return a.createElement("div",{className:z["dismiss-button-wrapper"]},a.createElement(L.Q,{onClick:n,className:z["dismiss-button"],variant:"flashbar-icon",iconName:"close",formAction:"none",ariaLabel:e}))}(u,(e=>{var n;n=W,F.sendPanoramaMetric({eventContext:B,eventType:"dismiss",eventValue:n}),_&&_(e)})),"status"===y&&a.createElement(q.A,{source:[K,T,V]}))}));function G(e){var{items:n,onItemsAdded:t,onItemsChanged:i,onItemsRemoved:r}=e,o=(0,s.Tt)(e,["items","onItemsAdded","onItemsChanged","onItemsRemoved"]);const{__internalRootRef:l}=(0,y.A)("Flashbar",{props:{stackItems:o.stackItems}}),c=(0,a.useMemo)((()=>n.every((e=>"id"in e))),[n]),u=(0,g.C)(o),d=(0,a.useRef)(null),[m,f]=(0,w.j)(["xs"]),p=(0,A.S)(d,f,l),h=(0,v.Ib)(d),_=(0,E.P)(),[b,I]=(0,a.useState)(n),[L,S]=(0,a.useState)(null);if(x.y&&(null===n||void 0===n?void 0:n.some((e=>"alert"===e.ariaRole&&!e.id)))&&(0,v.mc)("Flashbar",'You provided `ariaRole="alert"` for a flashbar item without providing an `id`. Focus will not be moved to the newly added flash message.'),n){const e=n.filter((e=>{let{id:n}=e;return n&&!b.some((e=>e.id===n))})),a=b.filter((e=>{let{id:t}=e;return t&&!n.some((e=>e.id===t))}));if(e.length>0||a.length>0){I(n),null===t||void 0===t||t(e),null===r||void 0===r||r(a),null===i||void 0===i||i({allItemsHaveId:c,isReducedMotion:h});const s=e.filter((e=>{let{ariaRole:n}=e;return"alert"===n}));s.length>0&&S(s[0].id)}}return(0,a.useEffect)((()=>{L&&U(d.current,L)}),[L,d]),{allItemsHaveId:c,baseProps:u,breakpoint:m,isReducedMotion:h,isVisualRefresh:_,mergedRef:p,ref:d}}const K=1,Q=100;function J(e){var{items:n}=e,t=(0,s.Tt)(e,["items"]);const[i,r]=(0,a.useState)([]),[v,g]=(0,a.useState)([]),[w,y]=(0,a.useState)(!1),A=(0,a.useCallback)((()=>{const e=w?k.current:R.current;return Object.assign(Object.assign({},e),{notificationBar:B.current})}),[w]),E=(0,a.useCallback)((()=>{const e=function(e){const n={};for(const t in e){const a=e[t];a&&(n[t]=a.getBoundingClientRect())}return n}(A());O(e)}),[A]),{baseProps:x,breakpoint:I,isReducedMotion:L,isVisualRefresh:S,mergedRef:q,ref:N}=G(Object.assign(Object.assign({items:n},t),{onItemsAdded:e=>{r([...i,...e])},onItemsChanged:e=>{(null===e||void 0===e?void 0:e.allItemsHaveId)&&!(null===e||void 0===e?void 0:e.isReducedMotion)&&E()},onItemsRemoved:e=>{g([...v,...e])}})),R=(0,a.useRef)({}),k=(0,a.useRef)({}),[C,O]=(0,a.useState)(null),F=(0,a.useRef)(null),B=(0,a.useRef)(null),[V,Y]=(0,a.useState)(!1),H=(0,p.Y)("flashbar"),J=(0,p.Y)("item-count");n.length<=K&&w&&y(!1);const $=!L;(0,a.useLayoutEffect)((()=>{if(w&&(null===n||void 0===n?void 0:n.length)){const e=n[0];void 0!==e.id&&U(N.current,e.id)}}),[w]),(0,f.R)((()=>{!w&&B.current&&(0,_.hT)(B.current)}),[w]);const ee=(0,a.useMemo)((()=>b((()=>{const e=null===F||void 0===F?void 0:F.current,n=null===e||void 0===e?void 0:e.parentElement;if(e&&n){n.classList.remove(z.floating);const e=window.innerHeight,t=(0,h.DP)(n,(e=>"region"===e.getAttribute("role")))||n;w&&Math.ceil(t.getBoundingClientRect().bottom)>=e||n.classList.add(z.floating)}}),Q)),[w]);(0,a.useLayoutEffect)((()=>(window.addEventListener("resize",ee),()=>{window.removeEventListener("resize",ee),ee.cancel()})),[ee]);const{i18nStrings:ne}=t,te=(0,l.pI)("flashbar"),ae=te("i18nStrings.ariaLabel",null===ne||void 0===ne?void 0:ne.ariaLabel),ie=te("i18nStrings.notificationBarText",null===ne||void 0===ne?void 0:ne.notificationBarText),se=te("i18nStrings.notificationBarAriaLabel",null===ne||void 0===ne?void 0:ne.notificationBarAriaLabel),re={errorIconAriaLabel:te("i18nStrings.errorIconAriaLabel",null===ne||void 0===ne?void 0:ne.errorIconAriaLabel),inProgressIconAriaLabel:te("i18nStrings.inProgressIconAriaLabel",null===ne||void 0===ne?void 0:ne.inProgressIconAriaLabel),infoIconAriaLabel:te("i18nStrings.infoIconAriaLabel",null===ne||void 0===ne?void 0:ne.infoIconAriaLabel),successIconAriaLabel:te("i18nStrings.successIconAriaLabel",null===ne||void 0===ne?void 0:ne.successIconAriaLabel),warningIconAriaLabel:te("i18nStrings.warningIconAriaLabel",null===ne||void 0===ne?void 0:ne.warningIconAriaLabel)};(0,a.useLayoutEffect)((()=>{C&&(ee(),function(e){let{oldState:n,elements:t,onTransitionsEnd:a,newElementInitialState:i}=e;for(const s in t){const e=t[s],a=n[s];if(e){const n=e.getBoundingClientRect(),t={scale:1,x:0,y:0},s=a?{scale:a.width/n.width,x:(a.left+a.right)/2-(n.left+n.right)/2,y:(a.top+a.bottom)/2-(n.top+n.bottom)/2}:i?i(n):{},r=Object.assign(Object.assign({},t),s);e.style.transitionProperty="none",e.style.transform="scale(".concat(r.scale,") translate(").concat(r.x,"px, ").concat(r.y,"px)"),a||(e.style.opacity="0")}}requestAnimationFrame((()=>{const e=new Set;for(const i in t){const s=t[i];if(s){n[i]?(s.style.transitionProperty="transform",s.style.transform=""):(s.style.transitionProperty="transform, opacity",s.style.transform="",s.style.opacity="");const t=n=>{n.target===s&&(e.add(i),s.removeEventListener("transitionstart",t))},r=n=>{n.target===s&&(s.style.transitionProperty="",s.removeEventListener("transitionstart",r),a&&(e.delete(i),0===e.size&&a()))};s.addEventListener("transitionstart",t),s.addEventListener("transitionend",r)}}}))}({elements:A(),oldState:C,newElementInitialState:e=>{let{top:n}=e;return{scale:.9,y:-.2*n}},onTransitionsEnd:()=>Y(!1)}),Y(!0),O(null))}),[ee,A,C,w]);const oe=n.length>K,le=M(n),ce=new Set(n.map(P)).size,ue=Math.max(ce,3),de=Math.min(ue,n.length),me=w?n.map(((e,n)=>Object.assign(Object.assign({},e),{expandedIndex:n}))):function(e,n){const t=[],a=[],i=new Set,s=Object.keys(j).length,r=Math.min(e.length,n);for(let u=0;u<e.length;u++){const n=e[u],o=P(n),l=i.has(o);if(u<r)t.push({item:Object.assign(Object.assign({},n),{expandedIndex:u}),isColorRepeated:l});else{if(i.size===s)break;l||a.push(Object.assign(Object.assign({},n),{expandedIndex:u}))}i.add(o)}const o=[];let l=0;for(let u=t.length-1;u>=0;u--){const e=t[u];e.isColorRepeated&&l<a.length?l+=1:o.push(e.item)}const c=o.reverse();for(let u=0;c.length<n;u++)c.push(a[u]);return c}(n,de).map(((e,n)=>Object.assign(Object.assign({},e),{collapsedIndex:n}))),fe=e=>{var n,t;return null!==(t=null!==(n=e.id)&&void 0!==n?n:e.expandedIndex)&&void 0!==t?t:0},pe=e=>!("expandedIndex"in e),he=e=>(e=>i.some((n=>n.id&&n.id===e.id)))(e)||pe(e),_e=e=>w||pe(e)||"expandedIndex"in e&&0===e.expandedIndex,be=(e,n)=>0===n&&he(e),ve=e=>"flash-".concat(fe(e)),ge=()=>a.createElement("ul",{ref:F,className:(0,o.A)(z["flash-list"],w?z.expanded:z.collapsed,V&&z["animation-running"],C&&z["animation-ready"],S&&z["visual-refresh"]),id:H,"aria-label":ae,"aria-describedby":oe?J:void 0,style:!w||V?{[m.A.flashbarStackDepth]:de}:void 0},a.createElement(Z,{withMotion:!L},me.map(((e,n)=>a.createElement(u.e,{key:fe(e),in:!pe(e),onStatusChange:e=>{"entered"===e?r([]):"exited"===e&&g([])}},((t,i)=>{var s,r,l;return a.createElement("li",{"aria-hidden":!_e(e),className:_e(e)?(0,o.A)(z["flash-list-item"],!w&&z.item,!R.current[ve(e)]&&z["expanded-only"]):(0,o.A)(z.flash,z["flash-type-".concat(null!==(s=e.type)&&void 0!==s?s:"info")],z.item),ref:n=>{w?k.current[ve(e)]=n:R.current[ve(e)]=n},style:!w||V?{[m.A.flashbarStackIndex]:null!==(l=null!==(r=e.collapsedIndex)&&void 0!==r?r:e.expandedIndex)&&void 0!==l?l:n}:void 0,key:fe(e)},_e(e)&&a.createElement(W,Object.assign({className:(0,o.A)($&&z["flash-with-motion"],S&&z["flash-refresh"]),key:fe(e),ref:be(e,n)?i:void 0,transitionState:be(e,n)?t:void 0,i18nStrings:re},e)))}))))));return a.createElement("div",Object.assign({},x,{className:(0,o.A)(x.className,z.flashbar,z["breakpoint-".concat(I)],z.stack,oe&&z.collapsible,2===n.length&&z["short-list"],w&&z.expanded,S&&z["visual-refresh"]),ref:q}),w&&ge(),oe&&a.createElement("div",{className:(0,o.A)(z["notification-bar"],S&&z["visual-refresh"],w?z.expanded:z.collapsed,V&&z["animation-running"],2===n.length&&z["short-list"],(0,d.t0)("flashbar")),onClick:function(){D(n.length,!w),L||E(),y((e=>!e))},ref:B},a.createElement("span",{"aria-live":"polite",className:z.status,role:"status",id:J},ie&&a.createElement("h2",{className:z.header},ie),a.createElement("span",{className:z["item-count"]},T.map((e=>{let{type:n,labelName:t,iconName:i}=e;return a.createElement(X,{key:n,iconName:i,label:re[t],count:le[n]})})))),a.createElement("button",{"aria-controls":H,"aria-describedby":J,"aria-expanded":w,"aria-label":se,className:(0,o.A)(z.button,w&&z.expanded)},a.createElement(c.A,{className:z.icon,size:"normal",name:"angle-down"}))),!w&&ge())}const X=e=>{let{iconName:n,label:t,count:i}=e;return a.createElement("span",{className:z["type-count"]},a.createElement("span",{"aria-label":t,role:"img"},a.createElement("span",{title:t,"aria-hidden":"true"},a.createElement(c.A,{name:n}))),a.createElement("span",{className:z["count-number"]},i))},Z=e=>{let{children:n,withMotion:t}=e;return t?a.createElement(r.A,{component:null},n):a.createElement(a.Fragment,null,n)},$=115;function ee(e){var{items:n,i18nStrings:t}=e,i=(0,s.Tt)(e,["items","i18nStrings"]);const{allItemsHaveId:c,baseProps:d,breakpoint:m,isReducedMotion:f,isVisualRefresh:p,mergedRef:h}=G(Object.assign({items:n},i)),_=(0,l.pI)("flashbar"),b=_("i18nStrings.ariaLabel",null===t||void 0===t?void 0:t.ariaLabel),v={errorIconAriaLabel:_("i18nStrings.errorIconAriaLabel",null===t||void 0===t?void 0:t.errorIconAriaLabel),inProgressIconAriaLabel:_("i18nStrings.inProgressIconAriaLabel",null===t||void 0===t?void 0:t.inProgressIconAriaLabel),infoIconAriaLabel:_("i18nStrings.infoIconAriaLabel",null===t||void 0===t?void 0:t.infoIconAriaLabel),successIconAriaLabel:_("i18nStrings.successIconAriaLabel",null===t||void 0===t?void 0:t.successIconAriaLabel),warningIconAriaLabel:_("i18nStrings.warningIconAriaLabel",null===t||void 0===t?void 0:t.warningIconAriaLabel)},g=f||!p||!c,w=!f&&p;function y(e,n,t,i){return a.createElement(W,Object.assign({className:(0,o.A)(w&&z["flash-with-motion"],p&&z["flash-refresh"]),key:n,ref:t,transitionState:i,i18nStrings:v},e))}return a.createElement("div",Object.assign({},d,{className:(0,o.A)(d.className,z.flashbar,z["breakpoint-".concat(m)]),ref:h}),function(){if(!g&&n)return a.createElement(r.A,{component:"ul",className:z["flash-list"],"aria-label":b},n.map(((e,n)=>{var t;return a.createElement(u.e,{transitionChangeDelay:{entering:$},key:null!==(t=e.id)&&void 0!==t?t:n,in:!0},((t,i)=>{var s;return a.createElement("li",{className:z["flash-list-item"]},y(e,null!==(s=e.id)&&void 0!==s?s:n,i,t))}))})))}(),function(){if(g&&n)return a.createElement("ul",{className:z["flash-list"],"aria-label":b},n.map(((e,n)=>{var t,i;return a.createElement("li",{key:null!==(t=e.id)&&void 0!==t?t:n,className:z["flash-list-item"]},y(e,null!==(i=e.id)&&void 0!==i?i:n))})))}())}function ne(e){return(0,a.useEffect)((()=>{e.items.length>0&&V(e.items)}),[e.items]),e.stackItems?a.createElement(J,Object.assign({},e)):a.createElement(ee,Object.assign({},e))}(0,i.o)(ne,"Flashbar")},9909:(e,n,t)=>{t.d(n,{W:()=>s});var a=t(5043),i=t(7906);function s(e){return function(n){const[t,s]=(0,a.useState)([]),r=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useEffect)((()=>e((e=>{s(e.map((e=>function(e,n){return e?a.createElement(i.v,{key:e.id+"-"+n.type,mountContent:t=>e.mountContent(t,n),unmountContent:n=>e.unmountContent(n)}):null}(e,{type:n,headerRef:r,contentRef:o}))))}))),[n]),{discoveredActions:t,headerRef:r,contentRef:o}}}},3523:(e,n,t)=>{t.d(n,{A:()=>f});var a=t(8587),i=t(8168);var s=t(5540),r=t(5043),o=t(8726);function l(e,n){var t=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,r.isValidElement)(e)?n(e):e}(e)})),t}function c(e,n,t){return null!=t[n]?t[n]:e.props[n]}function u(e,n,t){var a=l(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var a,i=Object.create(null),s=[];for(var r in e)r in n?s.length&&(i[r]=s,s=[]):s.push(r);var o={};for(var l in n){if(i[l])for(a=0;a<i[l].length;a++){var c=i[l][a];o[i[l][a]]=t(c)}o[l]=t(l)}for(a=0;a<s.length;a++)o[s[a]]=t(s[a]);return o}(n,a);return Object.keys(i).forEach((function(s){var o=i[s];if((0,r.isValidElement)(o)){var l=s in n,u=s in a,d=n[s],m=(0,r.isValidElement)(d)&&!d.props.in;!u||l&&!m?u||!l||m?u&&l&&(0,r.isValidElement)(d)&&(i[s]=(0,r.cloneElement)(o,{onExited:t.bind(null,o),in:d.props.in,exit:c(o,"exit",e),enter:c(o,"enter",e)})):i[s]=(0,r.cloneElement)(o,{in:!1}):i[s]=(0,r.cloneElement)(o,{onExited:t.bind(null,o),in:!0,exit:c(o,"exit",e),enter:c(o,"enter",e)})}})),i}var d=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},m=function(e){function n(n,t){var a,i=(a=e.call(this,n,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a));return a.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},a}(0,s.A)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,a,i=n.children,s=n.handleExited;return{children:n.firstRender?(t=e,a=s,l(t.children,(function(e){return(0,r.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:c(e,"appear",t),enter:c(e,"enter",t),exit:c(e,"exit",t)})}))):u(e,i,s),firstRender:!1}},t.handleExited=function(e,n){var t=l(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.A)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,a.A)(e,["component","childFactory"]),s=this.state.contextValue,l=d(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?r.createElement(o.A.Provider,{value:s},l):r.createElement(o.A.Provider,{value:s},r.createElement(n,i,l))},n}(r.Component);m.propTypes={},m.defaultProps={component:"div",childFactory:function(e){return e}};const f=m}}]);
//# sourceMappingURL=880.744edfaa.chunk.js.map