"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[322],{8322:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var t=a(5043),l=a(8903),n=a(6446),r=a(5795),i=a(2143),d=a(1906),c=a(5067),o=a(579);const h={vendorName:[{message:"Please enter vendor name",type:c.mg.type.MANDATORY}],contactPerson:[{message:"Please enter contact person",type:c.mg.type.MANDATORY}],phone:[{message:"Please enter phone number",type:c.mg.type.MANDATORY},{message:"Please enter valid phone number",type:c.mg.type.REGEX,regex:c.mg.MOBILE_NUMBER_REGEX}],email:[{message:"Please enter email",type:c.mg.type.MANDATORY},{message:"Please enter valid email",type:c.mg.type.REGEX,regex:c.mg.EMAIL_REGEX}],address:[{message:"Please enter contact person",type:c.mg.type.MANDATORY}],city:[{message:"Please enter contact person",type:c.mg.type.MANDATORY}],postalCode:[{message:"Please enter contact person",type:c.mg.type.MANDATORY}],country:[{message:"Please enter contact person",type:c.mg.type.MANDATORY}]};class m extends t.Component{constructor(e){super(e),this.handleChange=e=>{const{name:s,value:a,type:t,checked:l}=e.target,n="checkbox"===t?l:a;this.setState({[s]:n})},this.validateForm=()=>{const{vendorName:e,contactPerson:s,phone:a,email:t,address:l,city:n,postalCode:r,country:i}=this.state;return c.mg.validate(h,{vendorName:e,contactPerson:s,phone:a,email:t,address:l,city:n,postalCode:r,country:i})},this.handleSubmit=()=>{const e=this.validateForm();this.setState({isSubmitted:!0}),e.isValid},this.state={vendorName:"",contactPerson:"",phone:"",email:"",address:"",city:"",postalCode:"",country:"",isSubmitted:!1}}render(){const e=this.validateForm(),{vendorName:s,contactPerson:a,phone:t,email:c,address:h,city:m,postalCode:x,country:p,isSubmitted:u}=this.state;return(0,o.jsx)("div",{className:"main-container",children:(0,o.jsxs)("div",{className:"add-new-container",children:[(0,o.jsx)("div",{className:"heading",children:(0,o.jsx)("h2",{children:"Add New Vendor"})}),(0,o.jsxs)("div",{className:"add-new-form-container",children:[(0,o.jsxs)(l.Ay,{container:!0,spacing:2,children:[(0,o.jsx)(l.Ay,{item:!0,xs:6,children:(0,o.jsxs)(n.A,{className:"form-text-field",children:[(0,o.jsx)("label",{children:"Enter Vendor Name"}),(0,o.jsx)(r.A,{name:"vendorName",value:s,onChange:this.handleChange,className:"text-field",error:!e.vendorName.isValid&&u,helperText:u?e.vendorName.message:"",defaultValue:s,placeholder:"HealthSupplies Inc"})]})}),(0,o.jsx)(l.Ay,{item:!0,xs:6,children:(0,o.jsxs)(n.A,{className:"form-text-field",children:[(0,o.jsx)("label",{children:"Enter Contact Person"}),(0,o.jsx)(r.A,{name:"contactPerson",value:a,onChange:this.handleChange,className:"text-field",error:!e.contactPerson.isValid&&u,helperText:u?e.contactPerson.message:"",defaultValue:a,placeholder:"John Doe"})]})}),(0,o.jsx)(l.Ay,{item:!0,xs:6,children:(0,o.jsxs)(n.A,{className:"form-text-field",children:[(0,o.jsx)("label",{children:"Enter Phone"}),(0,o.jsx)(r.A,{type:"number",name:"phone",value:t,onChange:this.handleChange,className:"text-field",error:!e.phone.isValid&&u,helperText:u?e.phone.message:"",defaultValue:t,placeholder:"+1 (123)-456-789"})]})}),(0,o.jsx)(l.Ay,{item:!0,xs:6,children:(0,o.jsxs)(n.A,{className:"form-text-field",children:[(0,o.jsx)("label",{children:"Enter Email"}),(0,o.jsx)(r.A,{name:"email",value:c,onChange:this.handleChange,className:"text-field",error:!e.email.isValid&&u,helperText:u?e.email.message:"",defaultValue:c,placeholder:"info@brainmd.com"})]})}),(0,o.jsx)(l.Ay,{item:!0,xs:6,children:(0,o.jsxs)(n.A,{className:"form-text-field",children:[(0,o.jsx)("label",{children:"Enter Address"}),(0,o.jsx)(r.A,{name:"address",value:h,onChange:this.handleChange,className:"text-field",error:!e.address.isValid&&u,helperText:u?e.address.message:"",defaultValue:h,placeholder:"1234 Stm El"})]})}),(0,o.jsx)(l.Ay,{item:!0,xs:6,children:(0,o.jsxs)(n.A,{className:"form-text-field",children:[(0,o.jsx)("label",{children:"Enter City"}),(0,o.jsxs)(r.A,{select:!0,name:"city",value:m,onChange:this.handleChange,className:"text-field",error:!e.city.isValid&&u,helperText:u?e.city.message:"",defaultValue:m,placeholder:"Select City",children:[(0,o.jsx)(i.A,{value:"City1",children:"City1"}),(0,o.jsx)(i.A,{value:"City2",children:"City2"}),(0,o.jsx)(i.A,{value:"City3",children:"City3"})]})]})}),(0,o.jsx)(l.Ay,{item:!0,xs:6,children:(0,o.jsxs)(n.A,{className:"form-text-field",children:[(0,o.jsx)("label",{children:"Enter Postal Code"}),(0,o.jsxs)(r.A,{select:!0,name:"postalCode",value:x,onChange:this.handleChange,className:"text-field",error:!e.postalCode.isValid&&u,helperText:u?e.postalCode.message:"",defaultValue:x,placeholder:"Select State",children:[(0,o.jsx)(i.A,{value:"Postal1",children:"Postal1"}),(0,o.jsx)(i.A,{value:"Postal2",children:"Postal2"}),(0,o.jsx)(i.A,{value:"Postal3",children:"Postal3"})]})]})}),(0,o.jsx)(l.Ay,{item:!0,xs:6,children:(0,o.jsxs)(n.A,{className:"form-text-field",children:[(0,o.jsx)("label",{children:"Enter Country"}),(0,o.jsxs)(r.A,{select:!0,name:"country",value:p,onChange:this.handleChange,className:"text-field",error:!e.country.isValid&&u,helperText:u?e.country.message:"",defaultValue:p,placeholder:"Select Country",children:[(0,o.jsx)(i.A,{value:"Country1",children:"Country1"}),(0,o.jsx)(i.A,{value:"Country2",children:"Country2"}),(0,o.jsx)(i.A,{value:"Country3",children:"Country3"})]})]})})]}),(0,o.jsx)(l.Ay,{container:!0,spacing:2,children:(0,o.jsx)(l.Ay,{item:!0,xs:12,children:(0,o.jsxs)("div",{className:"add-new-form-btn",children:[(0,o.jsx)(d.A,{className:"btn-outline-secondary",variant:"outlined",children:"Cancel"}),(0,o.jsx)(d.A,{className:"primary-btn",variant:"contained",onClick:this.handleSubmit,children:"Save"})]})})})]})]})})}}const x=m}}]);
//# sourceMappingURL=322.6eb96488.chunk.js.map