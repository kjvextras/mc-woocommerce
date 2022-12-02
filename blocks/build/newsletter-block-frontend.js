!function(){"use strict";var e=window.wc.blocksCheckout,t=window.wc.wcBlocksSharedHocs,n=window.wp.element,i=window.wp.i18n,r=window.wc.wcSettings;const{optinDefaultText:o,gdprHeadline:a,gdprFields:s,gdprStatus:l}=(0,r.getSetting)("mailchimp-newsletter_data","");var c={text:{type:"string",default:o},gdprHeadline:{type:"string",default:a},gdpr:{type:"array",default:s},gdprStatus:{type:"string",default:l}},m=JSON.parse('{"apiVersion":2,"name":"woocommerce/mailchimp-newsletter-subscription","version":"1.0.0","title":"Mailchimp Newsletter!","category":"woocommerce","description":"Adds a newsletter subscription checkbox to the checkout.","supports":{"html":true,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-contact-information-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"textdomain":"mailchimp-woocommerce","editorStyle":"file:../../../build/style-newsletter-block.css"}');(0,e.registerCheckoutBlock)({metadata:m,component:(0,t.withFilteredAttributes)(c)((t=>{let{cart:r,extensions:o,text:a,gdprHeadline:s,gdprStatus:l,gdpr:c,checkoutExtensionData:m}=t,d={};c&&c.length&&c.forEach((e=>{d[e.marketing_permission_id]=!1}));const p="check"===l,[g,h]=(0,n.useState)(p),[u]=(0,n.useState)({}),{setExtensionData:w}=m;return(0,n.useEffect)((()=>{w("mailchimp-newsletter","optin",g)}),[g,w]),"hide"===l?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{style:{display:"none"}},(0,n.createElement)(e.CheckboxControl,{id:"subscribe-to-newsletter",checked:g,onChange:h},(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:a}})),c&&c.length?(0,i.__)(s,"mailchimp-for-woocommerce"):"",c&&c.length?c.map((t=>(0,n.createElement)(e.CheckboxControl,{id:"gdpr_"+t.marketing_permission_id,checked:u[t.marketing_permission_id],onChange:e=>{u[t.marketing_permission_id]=!u[t.marketing_permission_id],w("mailchimp-newsletter","gdprFields",u)}},(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:t.text}})))):"")):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e.CheckboxControl,{id:"subscribe-to-newsletter",checked:g,onChange:h},(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:a}})),c&&c.length?(0,i.__)(s,"mailchimp-for-woocommerce"):"",c&&c.length?c.map((t=>(0,n.createElement)(e.CheckboxControl,{id:"gdpr_"+t.marketing_permission_id,checked:u[t.marketing_permission_id],onChange:e=>{u[t.marketing_permission_id]=!u[t.marketing_permission_id],w("mailchimp-newsletter","gdprFields",u)}},(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:t.text}})))):"")}))})}();