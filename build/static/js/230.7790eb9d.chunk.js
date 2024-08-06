"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[230],{1230:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(5043),i=a(4712),r=a(2521),o=a(8003),c=a(5336),s=a(6600),d=a(6421),n=a(568),p=a(2346),h=a(2671),g=a(5475),u=a(579);const m=()=>{const[e,t]=(0,l.useState)("All"),a=[{id:2,code:"V002",name:"Potato",imageUrl:"https://via.placeholder.com/50",status:"Published",category:"Vegetable",allocatedStock:50,stockAlert:"Low",purchasingPrice:"$0.5",msp:"$0.7"},{id:3,code:"V003",name:"Carrot",imageUrl:"https://via.placeholder.com/50",status:"Stopped",category:"Vegetable",allocatedStock:75,stockAlert:"Available",purchasingPrice:"$0.8",msp:"$1.0"},{id:4,code:"V004",name:"Onion",imageUrl:"https://via.placeholder.com/50",status:"Draft",category:"Vegetable",allocatedStock:200,stockAlert:"Low",purchasingPrice:"$0.3",msp:"$0.5"},{id:5,code:"V005",name:"Pepper",imageUrl:"https://via.placeholder.com/50",status:"Published",category:"Vegetable",allocatedStock:150,stockAlert:"Available",purchasingPrice:"$1.2",msp:"$1.5"},{id:6,code:"V006",name:"Cabbage",imageUrl:"https://via.placeholder.com/50",status:"Stopped",category:"Vegetable",allocatedStock:120,stockAlert:"Low",purchasingPrice:"$0.6",msp:"$0.9"},{id:7,code:"V007",name:"Broccoli",imageUrl:"https://via.placeholder.com/50",status:"Draft",category:"Vegetable",allocatedStock:80,stockAlert:"Available",purchasingPrice:"$1.3",msp:"$1.6"},{id:8,code:"V008",name:"Spinach",imageUrl:"https://via.placeholder.com/50",status:"Published",category:"Vegetable",allocatedStock:90,stockAlert:"Low",purchasingPrice:"$0.9",msp:"$1.1"},{id:9,code:"V009",name:"Lettuce",imageUrl:"https://via.placeholder.com/50",status:"Stopped",category:"Vegetable",allocatedStock:110,stockAlert:"Available",purchasingPrice:"$0.7",msp:"$1.0"},{id:10,code:"V010",name:"Zucchini",imageUrl:"https://via.placeholder.com/50",status:"Draft",category:"Vegetable",allocatedStock:140,stockAlert:"Low",purchasingPrice:"$1.1",msp:"$1.4"},{id:11,code:"V011",name:"Eggplant",imageUrl:"https://via.placeholder.com/50",status:"Published",category:"Vegetable",allocatedStock:60,stockAlert:"Available",purchasingPrice:"$1.4",msp:"$1.7"},{id:12,code:"V012",name:"Cucumber",imageUrl:"https://via.placeholder.com/50",status:"Stopped",category:"Vegetable",allocatedStock:100,stockAlert:"Low",purchasingPrice:"$0.8",msp:"$1.1"},{id:13,code:"V013",name:"Garlic",imageUrl:"https://via.placeholder.com/50",status:"Draft",category:"Vegetable",allocatedStock:70,stockAlert:"Available",purchasingPrice:"$1.5",msp:"$1.8"},{id:14,code:"V014",name:"Ginger",imageUrl:"https://via.placeholder.com/50",status:"Published",category:"Vegetable",allocatedStock:130,stockAlert:"Low",purchasingPrice:"$2.0",msp:"$2.3"},{id:15,code:"V015",name:"Beetroot",imageUrl:"https://via.placeholder.com/50",status:"Stopped",category:"Vegetable",allocatedStock:40,stockAlert:"Available",purchasingPrice:"$0.4",msp:"$0.6"}],m=e=>{switch(e){case"Draft":return{backgroundColor:"gray",color:"white",padding:"2px 5px",borderRadius:"4px"};case"Published":return{backgroundColor:"green",color:"white",padding:"2px 5px",borderRadius:"4px"};case"Stopped":return{backgroundColor:"red",color:"white",padding:"2px 5px",borderRadius:"4px"};default:return{}}},b=e=>{switch(e){case"Low":return{color:"red"};case"Available":return{color:"blue"};default:return{}}},x="All"===e?a:a.filter((t=>t.status===e));return(0,u.jsx)(i.A,{headerVariant:"high-contrast",header:(0,u.jsx)(r.A,{actions:(0,u.jsx)(o.A,{alignItems:"center",direction:"horizontal",size:"xs",children:(0,u.jsx)(c.A,{variant:"normal",children:"Export"})}),variant:"h1",children:"Products"}),children:(0,u.jsxs)(o.A,{direction:"vertical",size:"s",children:[(0,u.jsx)(h.A,{className:"top-container",style:{marginBottom:"1rem"},children:(0,u.jsxs)(s.A,{columns:5,variant:"default",minColumnWidth:170,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(d.A,{variant:"awsui-key-label",children:(0,u.jsx)("p",{style:{fontSize:12},children:"Total Published Products"})}),(0,u.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"\u20b9436K"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(d.A,{variant:"awsui-key-label",children:(0,u.jsx)("p",{style:{fontSize:12},children:"Total Stock"})}),(0,u.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"430"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(d.A,{variant:"awsui-key-label",children:(0,u.jsx)("p",{style:{fontSize:12},children:"Total Orders"})}),(0,u.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"123"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(d.A,{variant:"awsui-key-label",children:(0,u.jsx)("p",{style:{fontSize:12},children:"Net Profit"})}),(0,u.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"128"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(d.A,{variant:"awsui-key-label",children:(0,u.jsx)("p",{style:{fontSize:12},children:"Stopped Products"})}),(0,u.jsx)("span",{style:{fontSize:36,fontWeight:"900",lineHeight:1.3,color:"#0972D3"},children:"128"})]})]})}),(0,u.jsx)("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:["All","Draft","Stopped","Published"].map((a=>(0,u.jsx)("button",{onClick:()=>(e=>{t(e)})(a),style:{border:e===a?"2px solid black":"none",color:e===a?"black":"gray",backgroundColor:e===a?"white":"transparent",fontWeight:e===a?"bolder":"normal",padding:"8px 16px",cursor:"pointer",borderRadius:"32px"},children:a},a)))}),(0,u.jsx)(n.A,{variant:"borderless",columnDefinitions:[{id:"code",header:"Item Code",cell:e=>(0,u.jsx)(g.N_,{to:"/products/".concat(e.code),children:e.code})},{id:"name",header:"Product Name",cell:e=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,u.jsx)("img",{src:e.imageUrl,alt:e.name,height:35,width:35,style:{borderRadius:"8px",marginRight:"10px"}}),e.name]})},{id:"status",header:"Status",cell:e=>(0,u.jsx)("span",{style:m(e.status),children:e.status}),sortingField:"status"},{id:"category",header:"Category",cell:e=>e.category,sortingField:"category"},{id:"allocatedStock",header:"Allocated Stock",cell:e=>e.allocatedStock,sortingField:"allocatedStock"},{id:"stockAlert",header:"Stock Alert",cell:e=>(0,u.jsx)("span",{style:b(e.stockAlert),children:e.stockAlert}),sortingField:"stockAlert"},{id:"purchasingPrice",header:"Purchasing Price",cell:e=>e.purchasingPrice,sortingField:"purchasingPrice"},{id:"msp",header:"MSP",cell:e=>e.msp,sortingField:"msp"},{id:"actions",header:"Actions",cell:e=>(0,u.jsx)(p.A,{expandToViewport:!0,items:[{id:"start",text:"Start"},{id:"stop",text:"Stop",disabled:!0},{id:"hibernate",text:"Hibernate",disabled:!0},{id:"reboot",text:"Reboot",disabled:!0},{id:"terminate",text:"Terminate"}],ariaLabel:"Control instance",variant:"icon"})}],items:x,selectionType:"multi"})]})})}}}]);
//# sourceMappingURL=230.7790eb9d.chunk.js.map