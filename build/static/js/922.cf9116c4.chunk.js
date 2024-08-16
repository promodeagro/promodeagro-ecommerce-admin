"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[922],{1922:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(5043),s=a(2657),r=a(6600),o=a(6421),i=a(7468),l=a(2671),d=a(2521),c=a(8003),D=a(5336),g=a(4712),u=a(1364),h=a(3003),x=a(2332),m=a(5165),y=a(5475),w=a(9971),f=a(579);const v=e=>{let{selectedFilter:t,onFilterChange:a,filterOptions:n}=e;return(0,f.jsx)(w.A,{selectedOption:{label:t,value:t},onChange:a,options:n,ariaLabel:"Filter by date"})},p=()=>{var e;const t=(0,h.wA)(),a=(0,h.d4)((e=>e.orders.ordersData)),{data:s=[]}=a;(0,n.useEffect)((()=>{t((0,x.G)())}),[t]);const[r,D]=(0,n.useState)("7 days ago");console.log(s.items,"data");const g=null===(e=(()=>{var e,t,a,n;const o=new Date;switch(r){case"Today":return null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.filter((e=>new Date(e.orderDate).toDateString()===o.toDateString()));case"7 days ago":return null===s||void 0===s||null===(t=s.items)||void 0===t?void 0:t.filter((e=>new Date(e.orderDate)>=new Date(o.setDate(o.getDate()-7))));case"30 days ago":return null===s||void 0===s||null===(a=s.items)||void 0===a?void 0:a.filter((e=>new Date(e.orderDate)>=new Date(o.setDate(o.getDate()-30))));case"6 months ago":return null===s||void 0===s||null===(n=s.items)||void 0===n?void 0:n.filter((e=>new Date(e.orderDate)>=new Date(o.setMonth(o.getMonth()-6))));default:return null===s||void 0===s?void 0:s.items}})())||void 0===e?void 0:e.slice(0,7);return(0,f.jsx)(l.A,{fitHeight:300,children:(0,f.jsx)(m.A,{header:(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:8,xxs:8}},{colspan:{default:4,xxs:4}}],children:[(0,f.jsx)(d.A,{variant:"h4",children:"Recent Orders"}),(0,f.jsx)(o.A,{padding:{bottom:"m"},children:(0,f.jsx)(v,{selectedFilter:r,onFilterChange:e=>{let{detail:t}=e;D(t.selectedOption.value)},filterOptions:[{label:"Today",value:"Today"},{label:"7 days ago",value:"7 days ago"},{label:"30 days ago",value:"30 days ago"},{label:"6 months ago",value:"6 months ago"}]})})]}),items:g,columnDefinitions:[{id:"id",header:"Order ID",cell:e=>e.id?(0,f.jsxs)(y.N_,{to:"/app/order/orderdetail",children:["#",e.id]}):"N/A"},{id:"customerName",header:"Customer Name",cell:e=>e.customerName&&e.customerName&&e.customerName?e.customerName:"N/A"},{id:"orderStatus",header:"Order Status",cell:e=>e.orderStatus||"N/A"},{id:"totalAmount",header:"Total Amount",cell:e=>e.totalAmount?"Rs. ".concat(e.totalAmount):"N/A"},{id:"area",header:"Delivery Area",cell:e=>e.area||"N/A"}],loadingText:"Loading resources",trackBy:"id",variant:"borderless",empty:(0,f.jsx)(o.A,{margin:{vertical:"xs"},textAlign:"center",color:"inherit",children:(0,f.jsx)(c.A,{size:"m",children:(0,f.jsx)("b",{children:"No Orders"})})})})})};var j=a(2030);const A=()=>{const e=[{category:"Procurement",amount:1500,date:new Date},{category:"Payroll",amount:500,date:new Date},{category:"Sales",amount:1e3,date:new Date},{category:"Payroll",amount:3e3,date:new Date((new Date).setDate((new Date).getDate()-5))},{category:"Sales",amount:2e3,date:new Date((new Date).setDate((new Date).getDate()-15))},{category:"Procurement",amount:1200,date:new Date((new Date).setDate((new Date).getDate()-25))},{category:"Payroll",amount:3200,date:new Date((new Date).setDate((new Date).getDate()-45))}],[t,a]=(0,n.useState)("Today"),s=(()=>{const a=new Date;switch(t){case"Today":return e.filter((e=>e.date.toDateString()===a.toDateString()));case"7 days ago":return e.filter((e=>e.date>=new Date(a.setDate(a.getDate()-7))));case"30 days ago":return e.filter((e=>e.date>=new Date(a.setDate(a.getDate()-30))));case"6 months ago":return e.filter((e=>e.date>=new Date(a.setMonth(a.getMonth()-6))));default:return e}})().reduce(((e,t)=>{const a=e.find((e=>e.category===t.category));return a?a.amount+=t.amount:e.push({category:t.category,amount:t.amount}),e}),[]);return(0,f.jsx)(l.A,{header:(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:8,xxs:8}},{colspan:{default:4,xxs:4}}],children:[(0,f.jsx)(d.A,{variant:"h4",children:"Expenses"}),(0,f.jsx)(o.A,{padding:{bottom:"m"},children:(0,f.jsx)(v,{selectedFilter:t,onFilterChange:e=>{let{detail:t}=e;a(t.selectedOption.value)},filterOptions:[{label:"Today",value:"Today"},{label:"7 days ago",value:"7 days ago"},{label:"30 days ago",value:"30 days ago"},{label:"6 months ago",value:"6 months ago"}]})})]}),children:(0,f.jsx)(j.A,{series:[{title:"Expenses",type:"bar",data:s.map((e=>({x:e.category,y:e.amount})))}],xDomain:s.map((e=>e.category)),yDomain:[0,Math.max(...s.map((e=>e.amount)))+500],i18nStrings:{yTickFormat:e=>"$".concat(e),xTickFormat:e=>"".concat(e)},ariaLabel:"Expenses Bar Chart",height:300,hideFilter:!0,hideLegend:!0})})};var b=a(1843);const S=()=>{const e={Today:[{x:(new Date).setHours(8,0,0,0),y:5e3},{x:(new Date).setHours(9,0,0,0),y:4e3},{x:(new Date).setHours(10,0,0,0),y:9e3},{x:(new Date).setHours(11,0,0,0),y:6e3},{x:(new Date).setHours(12,0,0,0),y:7e3}],"7 days ago":[{x:(new Date).setDate((new Date).getDate()-6),y:2e4},{x:(new Date).setDate((new Date).getDate()-5),y:22e3},{x:(new Date).setDate((new Date).getDate()-4),y:21e3},{x:(new Date).setDate((new Date).getDate()-3),y:25e3},{x:(new Date).setDate((new Date).getDate()-2),y:27e3}],"30 days ago":[{x:(new Date).setDate((new Date).getDate()-29),y:5e4},{x:(new Date).setDate((new Date).getDate()-28),y:55e3},{x:(new Date).setDate((new Date).getDate()-27),y:52e3},{x:(new Date).setDate((new Date).getDate()-26),y:58e3},{x:(new Date).setDate((new Date).getDate()-25),y:6e4}],"6 months ago":[{x:(new Date).setMonth((new Date).getMonth()-5),y:15e4},{x:(new Date).setMonth((new Date).getMonth()-4),y:17e4},{x:(new Date).setMonth((new Date).getMonth()-3),y:16e4},{x:(new Date).setMonth((new Date).getMonth()-2),y:18e4},{x:(new Date).setMonth((new Date).getMonth()-1),y:19e4}]},[t,a]=(0,n.useState)("Today"),s=e[t]||e.Today;return(0,f.jsx)(l.A,{header:(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:8,xxs:8}},{colspan:{default:4,xxs:4}}],children:[(0,f.jsx)(d.A,{variant:"h4",children:"Sales Report"}),(0,f.jsx)(o.A,{padding:{bottom:"m"},children:(0,f.jsx)(v,{selectedFilter:t,onFilterChange:e=>{let{detail:t}=e;a(t.selectedOption.value)},filterOptions:[{label:"Today",value:"Today"},{label:"7 days ago",value:"7 days ago"},{label:"30 days ago",value:"30 days ago"},{label:"6 months ago",value:"6 months ago"}]})})]}),children:(0,f.jsx)(b.A,{series:[{title:"Sales Data",type:"line",data:s,valueFormatter:e=>"\u20b9".concat(e.toLocaleString())}],xDomain:[Math.min(...s.map((e=>e.x))),Math.max(...s.map((e=>e.x)))],yDomain:[0,Math.max(...s.map((e=>e.y)))+5e3],i18nStrings:{xTickFormatter:e=>{const a=new Date(e);return"Today"===t?a.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}):a.toLocaleDateString("en-US")},yTickFormatter:e=>"\u20b9".concat(e.toLocaleString())},ariaLabel:"Sales Line Chart",height:300,hideFilter:!0,hideLegend:!0})})};var T=a(7229);const F=[{platform:"Instagram",visitors:100,date:new Date},{platform:"Facebook",visitors:200,date:new Date},{platform:"Twitter",visitors:150,date:new Date},{platform:"Instagram",visitors:200,date:new Date("2024-08-8")},{platform:"Facebook",visitors:300,date:new Date("2024-07-31")},{platform:"Twitter",visitors:180,date:new Date("2024-07-25")},{platform:"Website",visitors:500,date:new Date("2024-07-10")},{platform:"WhatsApp",visitors:350,date:new Date("2024-06-15")}],M=()=>{const[e,t]=(0,n.useState)("Today"),a=(()=>{const t=new Date;switch(e){case"Today":return F.filter((e=>e.date.toDateString()===t.toDateString()));case"7 days ago":return F.filter((e=>e.date>=new Date(t.setDate(t.getDate()-7))));case"30 days ago":return F.filter((e=>e.date>=new Date(t.setDate(t.getDate()-30))));case"6 months ago":return F.filter((e=>e.date>=new Date(t.setMonth(t.getMonth()-6))));default:return F}})(),s=a.reduce(((e,t)=>e+t.visitors),0);return(0,f.jsx)(l.A,{header:(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:8,xxs:8}},{colspan:{default:4,xxs:4}}],children:[(0,f.jsx)(d.A,{variant:"h4",children:"Customer Traffic"}),(0,f.jsx)(o.A,{padding:{bottom:"m"},children:(0,f.jsx)(v,{selectedFilter:e,onFilterChange:e=>{let{detail:a}=e;t(a.selectedOption.value)},filterOptions:[{label:"Today",value:"Today"},{label:"7 days ago",value:"7 days ago"},{label:"30 days ago",value:"30 days ago"},{label:"6 months ago",value:"6 months ago"}]})})]}),children:(0,f.jsx)(T.A,{data:a.map((e=>({title:e.platform,value:e.visitors}))),detailPopoverContent:e=>[{key:"Platform",value:e.title},{key:"Percentage",value:"".concat((e.value/s*100).toFixed(0),"%")}],segmentDescription:e=>"".concat((e.value/s*100).toFixed(0),"%"),hideLegend:!0,hideFilter:!0,ariaDescription:"Pie chart showing the percentage of customer traffic from various platforms.",ariaLabel:"Pie chart",height:300,empty:(0,f.jsxs)(o.A,{textAlign:"center",color:"inherit",children:[(0,f.jsx)("b",{children:"No data available"}),(0,f.jsx)(o.A,{variant:"p",color:"inherit",children:"There is no data available"})]}),noMatch:(0,f.jsxs)(o.A,{textAlign:"center",color:"inherit",children:[(0,f.jsx)("b",{children:"No matching data"}),(0,f.jsx)(o.A,{variant:"p",color:"inherit",children:"There is no matching data to display"}),(0,f.jsx)(D.A,{children:"Clear filter"})]})})})};var O=a(6236);const C=()=>{const e=[{code:"P001",name:"Tomatoes",category:"Vegetables",stock:100,status:"Published",date:new Date},{code:"P002",name:"Potatoes",category:"Vegetables",stock:50,status:"Draft",date:new Date((new Date).setDate((new Date).getDate()-5))},{code:"P003",name:"Carrots",category:"Vegetables",stock:200,status:"Published",date:new Date((new Date).setDate((new Date).getDate()-15))},{code:"P004",name:"Onions",category:"Vegetables",stock:150,status:"Stopped",date:new Date((new Date).setDate((new Date).getDate()-25))},{code:"P005",name:"Cucumbers",category:"Vegetables",stock:300,status:"Published",date:new Date((new Date).setDate((new Date).getDate()-45))}],[t,a]=(0,n.useState)("Today");return(0,f.jsx)(l.A,{fitHeight:300,children:(0,f.jsx)(m.A,{variant:"borderless",header:(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:8,xxs:8}},{colspan:{default:4,xxs:4}}],children:[(0,f.jsx)(d.A,{variant:"h4",children:"Best Selling Products"}),(0,f.jsx)(o.A,{padding:{bottom:"m"},children:(0,f.jsx)(v,{selectedFilter:t,onFilterChange:e=>{let{detail:t}=e;a(t.selectedOption.value)},filterOptions:[{label:"Today",value:"Today"},{label:"7 days ago",value:"7 days ago"},{label:"30 days ago",value:"30 days ago"},{label:"6 months ago",value:"6 months ago"}]})})]}),renderAriaLive:e=>{let{firstIndex:t,lastIndex:a,totalItemsCount:n}=e;return"Displaying items ".concat(t," to ").concat(a," of ").concat(n)},columnDefinitions:[{id:"code",header:"Product Code",cell:e=>(0,f.jsx)(O.A,{variant:"secondary",children:e.code}),sortingField:"code",isRowHeader:!0},{id:"name",header:"Product Name",cell:e=>e.name,sortingField:"name"},{id:"category",header:"Category",cell:e=>e.category,sortingField:"category"},{id:"stock",header:"Stock",cell:e=>e.stock,sortingField:"stock"},{id:"status",header:"Status",cell:e=>e.status,sortingField:"status"}],enableKeyboardNavigation:!0,items:(()=>{const a=new Date;switch(t){case"Today":return e.filter((e=>e.date.toDateString()===a.toDateString()));case"7 days ago":return e.filter((e=>e.date>=new Date(a.setDate(a.getDate()-7))));case"30 days ago":return e.filter((e=>e.date>=new Date(a.setDate(a.getDate()-30))));case"6 months ago":return e.filter((e=>e.date>=new Date(a.setMonth(a.getMonth()-6))));default:return e}})(),loadingText:"Loading products",selectedItems:[],empty:(0,f.jsx)(o.A,{margin:{vertical:"xs"},textAlign:"center",color:"inherit",children:(0,f.jsxs)(c.A,{size:"m",children:[(0,f.jsx)("b",{children:"No products found"}),(0,f.jsx)(D.A,{children:"Add product"})]})})})})},k=()=>{const e=[{id:"O001",name:"John Doe",reason:"Damaged Product",status:"Refunded",area:"Downtown",date:new Date},{id:"O002",name:"Jane Smith",reason:"Late Delivery",status:"In Process",area:"Uptown",date:new Date((new Date).setDate((new Date).getDate()-3))},{id:"O003",name:"Michael Johnson",reason:"Wrong Item",status:"Refunded",area:"Suburbs",date:new Date((new Date).setDate((new Date).getDate()-8))},{id:"O004",name:"Emily Davis",reason:"No Reason Given",status:"Rejected",area:"Downtown",date:new Date((new Date).setDate((new Date).getDate()-35))},{id:"O005",name:"Daniel Brown",reason:"Changed Mind",status:"Refunded",area:"Midtown",date:new Date((new Date).setDate((new Date).getDate()-100))},{id:"O006",name:"Jessica Miller",reason:"Not Satisfied",status:"In Process",area:"Uptown",date:new Date((new Date).setDate((new Date).getDate()-150))},{id:"O007",name:"David Wilson",reason:"Item Defective",status:"Refunded",area:"Suburbs",date:new Date((new Date).setDate((new Date).getDate()-200))}],[t,a]=(0,n.useState)("Today");return(0,f.jsx)(l.A,{fitHeight:300,children:(0,f.jsx)(m.A,{variant:"borderless",header:(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:8,xxs:8}},{colspan:{default:4,xxs:4}}],children:[(0,f.jsx)(d.A,{variant:"h4",children:"Refund Orders"}),(0,f.jsx)(o.A,{padding:{bottom:"m"},children:(0,f.jsx)(v,{selectedFilter:t,onFilterChange:e=>{let{detail:t}=e;a(t.selectedOption.value)},filterOptions:[{label:"Today",value:"Today"},{label:"7 days ago",value:"7 days ago"},{label:"30 days ago",value:"30 days ago"},{label:"6 months ago",value:"6 months ago"}]})})]}),renderAriaLive:e=>{let{firstIndex:t,lastIndex:a,totalItemsCount:n}=e;return"Displaying items ".concat(t," to ").concat(a," of ").concat(n)},columnDefinitions:[{id:"id",header:"Order ID",cell:e=>(0,f.jsx)(O.A,{variant:"secondary",children:e.id}),sortingField:"id",isRowHeader:!0},{id:"name",header:"Customer Name",cell:e=>e.name,sortingField:"name"},{id:"reason",header:"Reason",cell:e=>e.reason,sortingField:"reason"},{id:"status",header:"Status",cell:e=>e.status,sortingField:"status"},{id:"area",header:"Delivery Area",cell:e=>e.area,sortingField:"area"}],enableKeyboardNavigation:!0,items:(()=>{const a=new Date;switch(t){case"Today":return e.filter((e=>e.date.toDateString()===a.toDateString()));case"7 days ago":return e.filter((e=>e.date>=new Date(a.setDate(a.getDate()-7))));case"30 days ago":return e.filter((e=>e.date>=new Date(a.setDate(a.getDate()-30))));case"6 months ago":return e.filter((e=>e.date>=new Date(a.setMonth(a.getMonth()-6))));default:return e}})(),loadingText:"Loading resources",selectedItems:[],empty:(0,f.jsx)(o.A,{margin:{vertical:"xs"},textAlign:"center",color:"inherit",children:(0,f.jsxs)(c.A,{size:"m",children:[(0,f.jsx)("b",{children:"No resources"}),(0,f.jsx)(D.A,{children:"Create resource"})]})})})})},N=()=>{const[e,t]=n.useState(!1),[a,h]=n.useState(m()),x=(new Date).toLocaleString("default",{month:"long"});function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getFullYear();return"".concat(t," ").concat(a)}return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(g.A,{headerVariant:"high-contrast",header:(0,f.jsx)(d.A,{actions:(0,f.jsx)(c.A,{alignItems:"center",direction:"horizontal",size:"xs",children:(0,f.jsx)("div",{children:(0,f.jsx)(s.A,{triggerType:"custom",content:(0,f.jsx)(u.A,{onChange:e=>{let{detail:a}=e;const n=new Date(a.value);h(m(n)),t(!1)},value:null,granularity:"month"}),children:(0,f.jsx)(D.A,{onClick:()=>{t(!e)},variant:"primary",iconName:"calendar",children:a.startsWith(x)?"Calendar":a})})})}),variant:"h1",children:"Dashboard"}),children:(0,f.jsxs)(c.A,{direction:"vertical",size:"l",children:[(0,f.jsx)(l.A,{className:"top-container",style:{marginBottom:"1rem"},children:(0,f.jsxs)(r.A,{columns:5,variant:"default",minColumnWidth:170,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(o.A,{variant:"awsui-key-label",children:(0,f.jsx)("p",{style:{fontSize:12},children:"Today's Sales"})}),(0,f.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"55"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(o.A,{variant:"awsui-key-label",children:(0,f.jsx)("p",{style:{fontSize:12},children:"Today's Procurement"})}),(0,f.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"32.4K"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(o.A,{variant:"awsui-key-label",children:(0,f.jsx)("p",{style:{fontSize:12},children:"Today's Orders"})}),(0,f.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"123"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(o.A,{variant:"awsui-key-label",children:(0,f.jsx)("p",{style:{fontSize:12},children:"Orders Cancelled"})}),(0,f.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"3"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(o.A,{variant:"awsui-key-label",children:(0,f.jsx)("p",{style:{fontSize:12},children:"Orders Refunded"})}),(0,f.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"4"})]})]})}),(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:12,xxs:6}},{colspan:{default:12,xxs:6}}],children:[(0,f.jsx)(S,{}),(0,f.jsx)(p,{})]}),(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:12,xxs:6}},{colspan:{default:12,xxs:6}}],children:[(0,f.jsx)(C,{}),(0,f.jsx)(M,{})]}),(0,f.jsxs)(i.A,{gridDefinition:[{colspan:{default:12,xxs:6}},{colspan:{default:12,xxs:6}}],children:[(0,f.jsx)(A,{}),(0,f.jsx)(k,{})]})]})})})}}}]);
//# sourceMappingURL=922.cf9116c4.chunk.js.map