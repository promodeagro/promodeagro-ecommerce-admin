"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[227],{6175:(e,a,s)=>{s.d(a,{aH:()=>i,mg:()=>r});var t=s(6446),l=s(1637),n=(s(1036),s(579));const r={EMAIL_REGEX:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,PASSWORD_REGEX:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,MOBILE_NUMBER_REGEX:/^\d{10}$/,NUMBER_ONLY_REGEX:/^[0-9]+$/,DECIMAL_ALLOW_REGEX:/^\d*\.?\d*$/,ONLY_TWO_DECIMAL_ALLOW_REGEX:/^(?:\d*\.\d{1,2}|\d+)$/,type:{MANDATORY:0,REGEX:1,CHARACTERCOUNT:2},validate:(e,a)=>{function s(e,a){return a&&""!==a?{isValid:!0,error:{isValid:!0,message:""}}:{isValid:!1,error:{isValid:!1,message:e.message}}}function t(e,a){return a&&a.length!==e.CharacterCout?{isValid:!1,error:{isValid:!1,message:e.message}}:{isValid:!0,error:{isValid:!0,message:""}}}function l(e,a){return e.regex&&!e.regex.test(a)?{isValid:!1,error:{isValid:!1,message:e.message}}:{isValid:!0,error:{isValid:!0,message:""}}}const n=Object.keys(a),i={};let d,o=!0;return n.forEach((n=>{const c=e[n],m=a[n];for(const e of c)if(e.type===r.type.MANDATORY?d=s(e,m):e.type===r.type.CHARACTERCOUNT?d=t(e,m):e.type===r.type.REGEX&&(d=l(e,m)),i[n]=d.error,o=o&&d.isValid,!d.isValid)break})),i.isValid=o,i}},i={commonLoader:()=>(0,n.jsx)(t.A,{className:"d-flex align-items-center justify-content-center common-loader",children:(0,n.jsx)(l.A,{})})}},3227:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(5043),l=s(8903),n=s(6446),r=s(2083),i=s(8988),d=s(1906),o=s(6175),c=s(579);const m={customerName:[{message:"Please enter customer name",type:o.mg.type.MANDATORY}],companyName:[{message:"Please enter company name",type:o.mg.type.MANDATORY}],companyAbbreviation:[{message:"Please enter company cbbreviation",type:o.mg.type.MANDATORY}],phone:[{message:"Please enter phone number",type:o.mg.type.MANDATORY},{message:"Please enter valid phone number",type:o.mg.type.REGEX,regex:o.mg.MOBILE_NUMBER_REGEX}],email:[{message:"Please enter email",type:o.mg.type.MANDATORY},{message:"Please enter valid email",type:o.mg.type.REGEX,regex:o.mg.EMAIL_REGEX}],address:[{message:"Please enter contact person",type:o.mg.type.MANDATORY}],city:[{message:"Please enter contact person",type:o.mg.type.MANDATORY}],postalCode:[{message:"Please enter contact person",type:o.mg.type.MANDATORY}],country:[{message:"Please enter contact person",type:o.mg.type.MANDATORY}]};class h extends t.Component{constructor(e){super(e),this.handleChange=e=>{const{name:a,value:s,type:t,checked:l}=e.target,n="checkbox"===t?l:s;this.setState({[a]:n})},this.validateForm=()=>{const{customerName:e,companyName:a,companyAbbreviation:s,phone:t,email:l,address:n,city:r,postalCode:i,country:d}=this.state;return o.mg.validate(m,{customerName:e,companyName:a,companyAbbreviation:s,phone:t,email:l,address:n,city:r,postalCode:i,country:d})},this.handleSubmit=()=>{const e=this.validateForm();this.setState({isSubmitted:!0}),e.isValid},this.state={customerName:"",companyName:"",companyAbbreviation:"",phone:"",email:"",address:"",city:"",postalCode:"",country:"",isSubmitted:!1}}render(){const e=this.validateForm(),{customerName:a,companyName:s,companyAbbreviation:t,phone:o,email:m,address:h,city:x,postalCode:p,country:y,isSubmitted:u}=this.state;return(0,c.jsx)("div",{className:"main-container",children:(0,c.jsxs)("div",{className:"add-new-container",children:[(0,c.jsx)("div",{className:"heading",children:(0,c.jsx)("h2",{children:"Add New Customer"})}),(0,c.jsxs)("div",{className:"add-new-form-container",children:[(0,c.jsxs)(l.Ay,{container:!0,spacing:2,children:[(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Enter Customer Name"}),(0,c.jsx)(r.A,{name:"customerName",value:a,onChange:this.handleChange,className:"text-field",error:!e.customerName.isValid&&u,helperText:u?e.customerName.message:"",defaultValue:a,placeholder:"Brain MD"})]})}),(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Enter Company Name"}),(0,c.jsx)(r.A,{name:"companyName",value:s,onChange:this.handleChange,className:"text-field",error:!e.companyName.isValid&&u,helperText:u?e.companyName.message:"",defaultValue:s,placeholder:"Brain MD"})]})}),(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Company Abbreviation"}),(0,c.jsx)(r.A,{name:"companyAbbreviation",value:t,onChange:this.handleChange,className:"text-field",error:!e.companyAbbreviation.isValid&&u,helperText:u?e.companyAbbreviation.message:"",defaultValue:t,placeholder:"ABC-123456-12"})]})}),(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Enter Phone"}),(0,c.jsx)(r.A,{type:"number",name:"phone",value:o,onChange:this.handleChange,className:"text-field",error:!e.phone.isValid&&u,helperText:u?e.phone.message:"",defaultValue:o,placeholder:"+1 (123)-456-789"})]})}),(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Enter Email"}),(0,c.jsx)(r.A,{name:"email",value:m,onChange:this.handleChange,className:"text-field",error:!e.email.isValid&&u,helperText:u?e.email.message:"",defaultValue:m,placeholder:"info@brainmd.com"})]})}),(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Enter Address"}),(0,c.jsx)(r.A,{name:"address",value:h,onChange:this.handleChange,className:"text-field",error:!e.address.isValid&&u,helperText:u?e.address.message:"",defaultValue:h,placeholder:"1234 Stm El"})]})}),(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Enter City"}),(0,c.jsxs)(r.A,{select:!0,name:"city",value:x,onChange:this.handleChange,className:"text-field",error:!e.city.isValid&&u,helperText:u?e.city.message:"",defaultValue:x,placeholder:"Select City",children:[(0,c.jsx)(i.A,{value:"City1",children:"City1"}),(0,c.jsx)(i.A,{value:"City2",children:"City2"}),(0,c.jsx)(i.A,{value:"City3",children:"City3"})]})]})}),(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Enter Postal Code"}),(0,c.jsxs)(r.A,{select:!0,name:"postalCode",value:p,onChange:this.handleChange,className:"text-field",error:!e.postalCode.isValid&&u,helperText:u?e.postalCode.message:"",defaultValue:p,placeholder:"Select State",children:[(0,c.jsx)(i.A,{value:"Postal1",children:"Postal1"}),(0,c.jsx)(i.A,{value:"Postal2",children:"Postal2"}),(0,c.jsx)(i.A,{value:"Postal3",children:"Postal3"})]})]})}),(0,c.jsx)(l.Ay,{item:!0,xs:6,children:(0,c.jsxs)(n.A,{className:"form-text-field",children:[(0,c.jsx)("label",{children:"Enter Country"}),(0,c.jsxs)(r.A,{select:!0,name:"country",value:y,onChange:this.handleChange,className:"text-field",error:!e.country.isValid&&u,helperText:u?e.country.message:"",defaultValue:y,placeholder:"Select Country",children:[(0,c.jsx)(i.A,{value:"Country1",children:"Country1"}),(0,c.jsx)(i.A,{value:"Country2",children:"Country2"}),(0,c.jsx)(i.A,{value:"Country3",children:"Country3"})]})]})})]}),(0,c.jsx)(l.Ay,{container:!0,spacing:2,children:(0,c.jsx)(l.Ay,{item:!0,xs:12,children:(0,c.jsxs)("div",{className:"add-new-form-btn",children:[(0,c.jsx)(d.A,{className:"btn-outline-secondary",variant:"outlined",children:"Cancel"}),(0,c.jsx)(d.A,{className:"primary-btn",variant:"contained",onClick:this.handleSubmit,children:"Save"})]})})})]})]})})}}const x=h}}]);
//# sourceMappingURL=227.45529bc0.chunk.js.map