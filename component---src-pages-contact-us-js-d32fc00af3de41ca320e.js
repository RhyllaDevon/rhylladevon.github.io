(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6xyR":function(e,a,t){"use strict";var l=t("wx14"),n=t("zLVn"),s=t("TSYQ"),r=t.n(s),i=t("q1tI"),c=t.n(i),o=t("vUet"),m=t("YdCC"),d=t("U1MP"),u=t("Wzyw"),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(t,"card-img");return c.a.createElement(d,Object(l.a)({ref:a,className:r()(i?b+"-"+i:b,s)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=Object(d.a)("h5"),p=Object(d.a)("h6"),E=Object(m.a)("card-body"),h=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,m=e.bg,d=e.text,b=e.border,f=e.body,v=e.children,p=e.as,h=void 0===p?"div":p,y=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(o.a)(t,"card"),g=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return c.a.createElement(u.a.Provider,{value:g},c.a.createElement(h,Object(l.a)({ref:a},y,{className:r()(s,O,m&&"bg-"+m,d&&"text-"+d,b&&"border-"+b)}),f?c.a.createElement(E,null,v):v))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=f,h.Title=Object(m.a)("card-title",{Component:v}),h.Subtitle=Object(m.a)("card-subtitle",{Component:p}),h.Body=E,h.Link=Object(m.a)("card-link",{Component:"a"}),h.Text=Object(m.a)("card-text",{Component:"p"}),h.Header=Object(m.a)("card-header"),h.Footer=Object(m.a)("card-footer"),h.ImgOverlay=Object(m.a)("card-img-overlay");a.a=h},"7xGa":function(e,a,t){"use strict";var l,n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),i=t.n(r),c=t("CR+v"),o=t("q1tI"),m=t.n(o),d=t("dRu9"),u=t("z+q/"),b=((l={})[d.b]="show",l[d.a]="show",l),f=m.a.forwardRef((function(e,a){var t=e.className,l=e.children,r=Object(s.a)(e,["className","children"]),f=Object(o.useCallback)((function(e){Object(u.a)(e),r.onEnter&&r.onEnter(e)}),[r]);return m.a.createElement(d.e,Object(n.a)({ref:a,addEndListener:c.a},r,{onEnter:f}),(function(e,a){return m.a.cloneElement(l,Object(n.a)({},a,{className:i()("fade",t,l.props.className,b[e])}))}))}));f.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},f.displayName="Fade",a.a=f},U1MP:function(e,a,t){"use strict";var l=t("wx14"),n=t("q1tI"),s=t.n(n),r=t("TSYQ"),i=t.n(r);a.a=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(l.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},ZKNp:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return Ee}));t("91GP");var l=t("q1tI"),n=t.n(l),s=t("Wbzz"),r=t("Bl7J"),i=t("vrFN"),c=(t("Z2Ku"),t("L9s1"),t("f3/d"),t("wx14")),o=t("zLVn"),m=t("TSYQ"),d=t.n(m),u=t("JCAc"),b=t("ZCiN"),f=t("YdCC"),v=t("U1MP"),p=t("vUet"),E=t("7xGa"),h=n.a.forwardRef((function(e,a){var t=e.label,l=e.onClick,s=e.className,r=Object(o.a)(e,["label","onClick","className"]);return n.a.createElement("button",Object(c.a)({ref:a,type:"button",className:d()("close",s),onClick:l},r),n.a.createElement("span",{"aria-hidden":"true"},"×"),n.a.createElement("span",{className:"sr-only"},t))}));h.displayName="CloseButton",h.defaultProps={label:"Close"};var y=h,O=t("dbZe"),g={show:!0,transition:E.a,closeLabel:"Close alert"},N={show:"onClose"},j=n.a.forwardRef((function(e,a){var t=Object(u.a)(e,N),l=t.bsPrefix,s=t.show,r=t.closeLabel,i=t.className,m=t.children,f=t.variant,v=t.onClose,E=t.dismissible,h=t.transition,O=Object(o.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),g=Object(p.a)(l,"alert"),j=Object(b.a)((function(e){v(!1,e)})),x=n.a.createElement("div",Object(c.a)({role:"alert"},h?O:void 0,{ref:a,className:d()(i,g,f&&g+"-"+f,E&&g+"-dismissible")}),E&&n.a.createElement(y,{onClick:j,label:r}),m);return h?n.a.createElement(h,Object(c.a)({unmountOnExit:!0},O,{in:s}),x):s?x:null})),x=Object(v.a)("h4");x.displayName="DivStyledAsH4",j.displayName="Alert",j.defaultProps=g,j.Link=Object(f.a)("alert-link",{Component:O.a}),j.Heading=Object(f.a)("alert-heading",{Component:x});var C=j,T=(t("K9S6"),n.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,s=e.className,r=e.type,i=Object(o.a)(e,["as","className","type"]);return n.a.createElement(l,Object(c.a)({},i,{ref:a,className:d()(s,r&&r+"-feedback")}))})));T.displayName="Feedback",T.defaultProps={type:"valid"};var w=T,P=n.a.createContext({controlId:void 0}),k=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,r=e.bsCustomPrefix,i=e.className,m=e.isValid,u=e.isInvalid,b=e.isStatic,f=e.as,v=void 0===f?"input":f,E=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),h=Object(l.useContext)(P),y=h.controlId,O=h.custom?[r,"custom-control-input"]:[s,"form-check-input"],g=O[0],N=O[1];return s=Object(p.a)(g,N),n.a.createElement(v,Object(c.a)({},E,{ref:a,id:t||y,className:d()(i,s,m&&"is-valid",u&&"is-invalid",b&&"position-static")}))}));k.displayName="FormCheckInput",k.defaultProps={type:"checkbox"};var I=k,F=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,r=e.className,i=e.htmlFor,m=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(l.useContext)(P),b=u.controlId,f=u.custom?[s,"custom-control-label"]:[t,"form-check-label"],v=f[0],E=f[1];return t=Object(p.a)(v,E),n.a.createElement("label",Object(c.a)({},m,{ref:a,htmlFor:i||b,className:d()(r,t)}))}));F.displayName="FormCheckLabel";var S=F,R=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,r=e.bsCustomPrefix,i=e.inline,m=e.disabled,u=e.isValid,b=e.isInvalid,f=e.feedback,v=e.className,E=e.style,h=e.title,y=e.type,O=e.label,g=e.children,N=e.custom,j=e.as,x=void 0===j?"input":j,C=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),T="switch"===y||N,k=T?[r,"custom-control"]:[s,"form-check"],F=k[0],R=k[1];s=Object(p.a)(F,R);var V=Object(l.useContext)(P).controlId,L=Object(l.useMemo)((function(){return{controlId:t||V,custom:T}}),[V,T,t]),q=null!=O&&!1!==O&&!g,M=n.a.createElement(I,Object(c.a)({},C,{type:"switch"===y?"checkbox":y,ref:a,isValid:u,isInvalid:b,isStatic:!q,disabled:m,as:x}));return n.a.createElement(P.Provider,{value:L},n.a.createElement("div",{style:E,className:d()(v,s,T&&"custom-"+y,i&&s+"-inline")},g||n.a.createElement(n.a.Fragment,null,M,q&&n.a.createElement(S,{title:h},O),(u||b)&&n.a.createElement(w,{type:u?"valid":"invalid"},f))))}));R.displayName="FormCheck",R.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},R.Input=I,R.Label=S;var V=R,L=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,r=e.bsCustomPrefix,i=e.className,m=e.isValid,u=e.isInvalid,b=e.lang,f=e.as,v=void 0===f?"input":f,E=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),h=Object(l.useContext)(P),y=h.controlId,O=h.custom?[r,"custom-file-input"]:[s,"form-control-file"],g=O[0],N=O[1];return s=Object(p.a)(g,N),n.a.createElement(v,Object(c.a)({},E,{ref:a,id:t||y,type:"file",lang:b,className:d()(i,s,m&&"is-valid",u&&"is-invalid")}))}));L.displayName="FormFileInput";var q=L,M=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,r=e.className,i=e.htmlFor,m=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(l.useContext)(P),b=u.controlId,f=u.custom?[s,"custom-file-label"]:[t,"form-file-label"],v=f[0],E=f[1];return t=Object(p.a)(v,E),n.a.createElement("label",Object(c.a)({},m,{ref:a,htmlFor:i||b,className:d()(r,t),"data-browse":m["data-browse"]}))}));M.displayName="FormFileLabel";var A=M,K=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,r=e.bsCustomPrefix,i=e.disabled,m=e.isValid,u=e.isInvalid,b=e.feedback,f=e.className,v=e.style,E=e.label,h=e.children,y=e.custom,O=e.lang,g=e["data-browse"],N=e.as,j=void 0===N?"div":N,x=e.inputAs,C=void 0===x?"input":x,T=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),k=y?[r,"custom"]:[s,"form-file"],I=k[0],F=k[1];s=Object(p.a)(I,F);var S=Object(l.useContext)(P).controlId,R=Object(l.useMemo)((function(){return{controlId:t||S,custom:y}}),[S,y,t]),V=null!=E&&!1!==E&&!h,L=n.a.createElement(q,Object(c.a)({},T,{ref:a,isValid:m,isInvalid:u,disabled:i,as:C,lang:O}));return n.a.createElement(P.Provider,{value:R},n.a.createElement(j,{style:v,className:d()(f,s,y&&"custom-file")},h||n.a.createElement(n.a.Fragment,null,y?n.a.createElement(n.a.Fragment,null,L,V&&n.a.createElement(A,{"data-browse":g},E)):n.a.createElement(n.a.Fragment,null,V&&n.a.createElement(A,null,E),L),(m||u)&&n.a.createElement(w,{type:m?"valid":"invalid"},b))))}));K.displayName="FormFile",K.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},K.Input=q,K.Label=A;var H=K,B=(t("2W6z"),n.a.forwardRef((function(e,a){var t,s,r=e.bsPrefix,i=e.bsCustomPrefix,m=e.type,u=e.size,b=e.id,f=e.className,v=e.isValid,E=e.isInvalid,h=e.plaintext,y=e.readOnly,O=e.custom,g=e.as,N=void 0===g?"input":g,j=Object(o.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),x=Object(l.useContext)(P).controlId,C=O?[i,"custom"]:[r,"form-control"],T=C[0],w=C[1];if(r=Object(p.a)(T,w),h)(s={})[r+"-plaintext"]=!0,t=s;else if("file"===m){var k;(k={})[r+"-file"]=!0,t=k}else if("range"===m){var I;(I={})[r+"-range"]=!0,t=I}else if("select"===N&&O){var F;(F={})[r+"-select"]=!0,F[r+"-select-"+u]=u,t=F}else{var S;(S={})[r]=!0,S[r+"-"+u]=u,t=S}return n.a.createElement(N,Object(c.a)({},j,{type:m,ref:a,readOnly:y,id:b||x,className:d()(f,t,v&&"is-valid",E&&"is-invalid")}))})));B.displayName="FormControl",B.Feedback=w;var z=B,G=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.children,i=e.controlId,m=e.as,u=void 0===m?"div":m,b=Object(o.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.a)(t,"form-group");var f=Object(l.useMemo)((function(){return{controlId:i}}),[i]);return n.a.createElement(P.Provider,{value:f},n.a.createElement(u,Object(c.a)({},b,{ref:a,className:d()(s,t)}),r))}));G.displayName="FormGroup";var _=G,U=t("JI6e"),W=n.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,r=e.bsPrefix,i=e.column,m=e.srOnly,u=e.className,b=e.htmlFor,f=Object(o.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),v=Object(l.useContext)(P).controlId;r=Object(p.a)(r,"form-label");var E="col-form-label";"string"==typeof i&&(E=E+"-"+i);var h=d()(u,r,m&&"sr-only",i&&E);return b=b||v,i?n.a.createElement(U.a,Object(c.a)({as:"label",className:h,htmlFor:b},f)):n.a.createElement(s,Object(c.a)({ref:a,className:h,htmlFor:b},f))}));W.displayName="FormLabel",W.defaultProps={column:!1,srOnly:!1};var J=W,Q=n.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,r=void 0===s?"small":s,i=e.muted,m=Object(o.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.a)(t,"form-text"),n.a.createElement(r,Object(c.a)({},m,{ref:a,className:d()(l,t,i&&"text-muted")}))}));Q.displayName="FormText";var Y=Q,Z=n.a.forwardRef((function(e,a){return n.a.createElement(V,Object(c.a)({},e,{ref:a,type:"switch"}))}));Z.displayName="Switch",Z.Input=V.Input,Z.Label=V.Label;var D=Z,X=n.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,s=e.className,r=e.validated,i=e.as,m=void 0===i?"form":i,u=Object(o.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.a)(t,"form"),n.a.createElement(m,Object(c.a)({},u,{ref:a,className:d()(s,r&&"was-validated",l&&t+"-inline")}))}));X.displayName="Form",X.defaultProps={inline:!1},X.Row=Object(f.a)("form-row"),X.Group=_,X.Control=z,X.Check=V,X.File=H,X.Switch=D,X.Label=J,X.Text=Y;var $=X,ee=t("cWnB");function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var te=function(e){var a,t;function l(a){var t;return(t=e.call(this,a)||this).submitForm=t.submitForm.bind(ae(t)),t.state={status:"",clickedSubmit:!1,name:"",email:"",message:"",nameValid:!1,emailValid:!1,messageValid:!1},t.validateName=t.validateName.bind(ae(t)),t.validateEmail=t.validateEmail.bind(ae(t)),t.validateMessage=t.validateMessage.bind(ae(t)),t.updateName=t.updateName.bind(ae(t)),t.updateEmail=t.updateEmail.bind(ae(t)),t.updateMessage=t.updateMessage.bind(ae(t)),t.resetState=t.resetState.bind(ae(t)),t}t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var s=l.prototype;return s.resetState=function(){this.setState({status:""})},s.render=function(){return"SUCCESS"===this.state.status?n.a.createElement(C,{variant:"success"},n.a.createElement(C.Heading,null,"Thanks!"),n.a.createElement("p",null,"We'll get back to you soon.")):"ERROR"===this.state.status?n.a.createElement(C,{variant:"danger"},n.a.createElement(C.Heading,null,"Ooops!"),n.a.createElement("p",null,"Something went wrong whilst sending the form!"),n.a.createElement("a",{onClick:this.resetState},"Try again")):n.a.createElement($,{onSubmit:this.submitForm,action:"https://formspree.io/xnqgngww",method:"POST"},n.a.createElement($.Group,{controlId:"formName"},n.a.createElement($.Label,null,"Name"),n.a.createElement($.Control,{value:this.state.name,onChange:this.updateName,isInvalid:!this.state.nameValid&&this.state.clickedSubmit,name:"name",type:"text",placeholder:"Enter your name"}),n.a.createElement($.Control.Feedback,{type:"invalid"},"Please include your name.")),n.a.createElement($.Group,{controlId:"formEmail"},n.a.createElement($.Label,null,"Email address"),n.a.createElement($.Control,{value:this.state.email,onChange:this.updateEmail,isInvalid:!this.state.emailValid&&this.state.clickedSubmit,name:"email",type:"email",placeholder:"Enter your email address"}),n.a.createElement($.Control.Feedback,{type:"invalid"},"Please enter a valid email address."),n.a.createElement($.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),n.a.createElement($.Group,{controlId:"formMessage"},n.a.createElement($.Label,null,"Message"),n.a.createElement($.Control,{value:this.state.message,onChange:this.updateMessage,isInvalid:!this.state.messageValid&&this.state.clickedSubmit,name:"message",as:"textarea",rows:"3",placeholder:"Enter your message"}),n.a.createElement($.Control.Feedback,{type:"invalid"},"Please include a message.")),n.a.createElement($.Control,{type:"text",name:"_gotcha",style:{display:"none"}}),n.a.createElement("div",{className:"g-recaptcha","data-sitekey":"6Lff8QAVAAAAAPxtIqLM7ZPl21miDrN0QVJ8x6VQ"}),n.a.createElement(ee.a,{variant:"primary",type:"submit"},"Submit"))},s.validateName=function(e){return!!e&&e.length>0},s.validateEmail=function(e){return!!e&&!!(e.length>0&&e.includes("@"))},s.validateMessage=function(e){return!!e&&e.length>0},s.updateName=function(e){var a=e.target.value,t=this.validateName(a);this.setState({name:a,nameValid:t})},s.updateEmail=function(e){var a=e.target.value,t=this.validateEmail(a);this.setState({email:a,emailValid:t})},s.updateMessage=function(e){var a=e.target.value,t=this.validateMessage(a);this.setState({message:a,messageValid:t})},s.submitForm=function(e){var a=this,t=e.currentTarget;if(console.log("form",t,this.state),e.preventDefault(),this.state.nameValid&&this.state.emailValid&&this.state.messageValid){var l=new FormData(t),n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},n.send(l)}else e.stopPropagation(),this.setState({clickedSubmit:!0})},l}(n.a.Component),le=t("7vrA"),ne=t("3Z9Z"),se=t("6xyR"),re=t("ILyh"),ie=n.a.createContext(null);var ce=n.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"button":t,r=e.children,i=e.eventKey,m=e.onClick,d=Object(o.a)(e,["as","children","eventKey","onClick"]),u=function(e,a){var t=Object(l.useContext)(ie),n=Object(l.useContext)(re.a);return function(l){n(e===t?null:e,l),a&&a(l)}}(i,m);return"button"===s&&(d.type="button"),n.a.createElement(s,Object(c.a)({ref:a,onClick:u},d),r)})),oe=t("vYJ8"),me=n.a.forwardRef((function(e,a){var t=e.children,s=e.eventKey,r=Object(o.a)(e,["children","eventKey"]),i=Object(l.useContext)(ie);return n.a.createElement(oe.a,Object(c.a)({ref:a,in:i===s},r),n.a.createElement("div",null,n.a.Children.only(t)))}));me.displayName="AccordionCollapse";var de=me,ue=n.a.forwardRef((function(e,a){var t=Object(u.a)(e,{activeKey:"onSelect"}),l=t.as,s=void 0===l?"div":l,r=t.activeKey,i=t.bsPrefix,m=t.children,b=t.className,f=t.onSelect,v=Object(o.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return i=Object(p.a)(i,"accordion"),n.a.createElement(ie.Provider,{value:r},n.a.createElement(re.a.Provider,{value:f},n.a.createElement(s,Object(c.a)({ref:a},v,{className:d()(b,i)}),m)))}));ue.Toggle=ce,ue.Collapse=de;var be=ue,fe=t("ma3e");var ve={a:!1,b:!1,c:!1},pe=Object.assign({},ve),Ee=function(e){var a,t;function l(a){var t;return(t=e.call(this,a)||this).state={questions:pe},t.toggle=t.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var c=l.prototype;return c.toggle=function(e){var a=!this.state.questions[e],t=Object.assign({},ve);t[e]=a,this.setState({questions:t})},c.render=function(){var e=this;return n.a.createElement(r.a,null,n.a.createElement(i.a,{title:"Contact Us"}),n.a.createElement("div",{className:"jumbotron"},n.a.createElement(le.a,null,n.a.createElement(ne.a,{md:2,sm:1,xs:1},n.a.createElement(U.a,{md:{span:8,order:1},sm:{order:2},xs:{order:2}},n.a.createElement(ne.a,null,n.a.createElement(U.a,null,n.a.createElement(se.a,null,n.a.createElement(se.a.Body,null,n.a.createElement("h2",null,"Ready to book?"),n.a.createElement("p",null,"Fill out the form and we'll respond to any enquiries or booking requests as soon as possible!"),n.a.createElement(te,null))))),n.a.createElement(ne.a,null,n.a.createElement(U.a,{style:{paddingTop:32}},n.a.createElement(se.a,null,n.a.createElement(se.a.Body,null,n.a.createElement("h2",null,"Frequently asked questions"),n.a.createElement("span",{className:"font-weight-light"},"Click on a panel to expand it"),n.a.createElement(be,{style:{marginTop:8}},n.a.createElement(se.a,null,n.a.createElement(be.Toggle,{as:se.a.Header,eventKey:"0",className:"question-box",onClick:function(){return e.toggle("a")}},n.a.createElement("span",{className:"question-header"}," ",this.state.questions.a?n.a.createElement(fe.a,null):n.a.createElement(fe.c,null)," Can I bring a lovely doggo to stay?")),n.a.createElement(be.Collapse,{eventKey:"0"},n.a.createElement(se.a.Body,null,"Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test!"))),n.a.createElement(se.a,null,n.a.createElement(be.Toggle,{as:se.a.Header,eventKey:"1",onClick:function(){return e.toggle("b")}},n.a.createElement("span",{className:"question-header"},this.state.questions.b?n.a.createElement(fe.a,null):n.a.createElement(fe.c,null)," What about a cats, are they allowed?")),n.a.createElement(be.Collapse,{eventKey:"1"},n.a.createElement(se.a.Body,null,"Absolutely not!"))),n.a.createElement(se.a,null,n.a.createElement(be.Toggle,{as:se.a.Header,eventKey:"2",onClick:function(){return e.toggle("c")}},n.a.createElement("span",{className:"question-header"},this.state.questions.c?n.a.createElement(fe.a,null):n.a.createElement(fe.c,null)," How do long questions appear in this card/accordion dropdown thing?")),n.a.createElement(be.Collapse,{eventKey:"2"},n.a.createElement(se.a.Body,null,"Absolutely not!"))))))))),n.a.createElement(U.a,{md:{span:4,order:2},sm:{order:1},xs:{order:1},style:{marginBottom:32}},n.a.createElement(se.a,null,n.a.createElement(se.a.Body,null,n.a.createElement("h2",null,"Get in touch!"),n.a.createElement("p",null,"We'd love to hear from you!"),n.a.createElement("p",null,"Call us on: ",n.a.createElement(s.Link,{to:"tel:01234567890"},"01234 567 890")),n.a.createElement("p",null,"Send an email to: ",n.a.createElement(s.Link,{to:"mailto:rhylladevon@gmail.com"},"rhylladevon@gmail.com")),n.a.createElement("p",null,n.a.createElement(s.Link,{to:"",style:{marginRight:16}},n.a.createElement(fe.d,{style:{fill:"#177af2",height:48,width:48}})),n.a.createElement(s.Link,{to:""},n.a.createElement("span",{className:"instagram"},n.a.createElement(fe.e,{style:{fill:"white",height:36,width:36}})))))))))))},l}(n.a.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-d32fc00af3de41ca320e.js.map