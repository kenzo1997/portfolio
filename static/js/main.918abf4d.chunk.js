(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(A,e,t){},35:function(A,e,t){},45:function(A,e,t){},64:function(A,e,t){},65:function(A,e,t){},66:function(A,e,t){},67:function(A,e,t){},68:function(A,e,t){},69:function(A,e,t){},70:function(A,e,t){},71:function(A,e,t){"use strict";t.r(e);var n=t(0),c=t(1),r=t.n(c),i=t(11),s=t.n(i),a=t(2),o=t(3),l=t(5),j=t(4),h=(t(34),t(35),t(12)),v=(t(45),function(A){Object(l.a)(t,A);var e=Object(j.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("header",{children:[window.innerWidth>812?Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#about",children:Object(n.jsx)(h.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,duration:1e3,children:"about"})})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#projects",children:Object(n.jsx)(h.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,duration:1e3,children:"projects"})})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#contact",children:Object(n.jsx)(h.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,duration:1e3,children:"contact"})})})]})}):null,Object(n.jsx)("div",{id:"coverImageContainer",children:Object(n.jsx)("h1",{className:"neonText",id:"title",children:"Web Developer Portfolio"})})]})}}]),t}(r.a.Component)),d=t(27),b=t.n(d),u=(t(64),function(A){Object(l.a)(t,A);var e=Object(j.a)(t);function t(A){var n;return Object(a.a)(this,t),(n=e.call(this,A)).listenScrollEvent=function(A){var e=window,t=e.innerHeight;e.scrollY>t-200&&n.setState({textAnime:"text textAnim",picAnim:"picReveal"})},n.state={textAnime:"text",picAnim:""},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){var A=window,e=A.innerHeight,t=A.scrollY;return Object(n.jsxs)("div",{id:"about",children:[Object(n.jsx)("div",{className:"pic",children:Object(n.jsx)("div",{className:"picReveal"})}),Object(n.jsxs)("div",{className:this.state.textAnime,children:[Object(n.jsx)("h2",{children:"ABOUT"}),Object(n.jsx)("p",{children:t>e-200?Object(n.jsx)(b.a,{speed:.2,children:"Hey! My name is Kenzo and I\u2019m a web developer that loves to code. Exploring new stuff and technology is one of my favorite hobbies. I provides services for both the front end and back-end."}):null})]})]})}}]),t}(r.a.Component)),m=(t(65),t(28)),p=t.n(m),f=(t(66),function(A){Object(l.a)(t,A);var e=Object(j.a)(t);function t(A){var n;return Object(a.a)(this,t),(n=e.call(this,A)).state={project:null},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getProjectInfo()}},{key:"getProjectInfo",value:function(){var A=this;fetch("https://api.github.com/repositories/".concat(this.props.id,"/readme")).then((function(A){return A.json()})).then((function(e){var t=atob(e.content);A.setState({project:p()(t.substr(1,1e3)+"...")})})).catch((function(A){return console.error(A)}))}},{key:"render",value:function(){var A=this,e=this.props.args,t=e.name,c=e.url,r=e.startDate;return Object(n.jsx)("div",{id:"myModal",className:"modal",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("span",{onClick:function(){return A.props.func()},className:"close",children:"\xd7"}),Object(n.jsx)("h2",{style:{color:"#fff"},children:t})]}),Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsxs)("p",{children:["Github: ",Object(n.jsx)("a",{href:c,children:c})]}),Object(n.jsx)("div",{className:"readme",dangerouslySetInnerHTML:{__html:this.state.project}})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsxs)("h3",{children:["created at: ",r]})})]})})}}]),t}(r.a.Component)),O=t(7),g=(t(67),function(A){var e=A.project,t=e.id,c=e.created_at,r=e.html_url,i=e.name;return Object(n.jsx)("div",{onClick:function(){return A.openModal(t,{startDate:c,url:r,name:i})},children:Object(n.jsx)("div",{className:"project",children:Object(n.jsx)("p",{children:i})})},t)}),C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA5nAAAOZwGPiYJxAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAfhQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe7yhUAAAAKd0Uk5TAAECAwQGBwgJCgsMDg8QERIUFRYXGRobHh8gISQlJygpKissLS8wMjQ2Nzg7PD4/QEFFRkdISUxOUVVWV1hZW1xdYGFlZmdoa2xtbm9yd3t/gIKDhoeIjI6Pk5WWmJqbnZ+gpaiqq6ytr7Cys7W2t7i5uru8vb6/wMPGysvMzdDR0tPU1tfY2dvf4eLj5OXm5+jp6uvs7e7v8PLz9PX29/j5+vv8/f6Ucmt/AAAG8ElEQVR42u3c+ZfNBRzG8RlEYdCeZRqhReuEFKVEm0pRTLvKUkYbI1pQKaWNLGmSlJmGz7/Zr3XOMHNOJ2fm+7yeP+Hzfp1zz733e29Ly8jahHufe/3dfYf7jn2+/c11y9paLGlXrOw+Xf9c/84npztLyuZsO1uD7JM7nSZh0zcOmr+q6r0bnafpm/TSmTr/zm26xokavZlf1oX303xHavDu+rmG2p8POVNj91h/DWNdY1yqmVtXw9uWcW7VxK2v4e4tAqL7E5Den4D0/gSk9ycgvT8B6f0JSO9PQHp/AtL7E5Den4D0/gSk9ycgvT8B6f0JSO9PwGjd01UEBG/BQBEQvPbeKgJy1/Z1FQHB21xFQPBuqSIgeT1FQPI6qwhI3qdFQPJuryIgeV1FQPS+KgKSN6OKgOQ9UQREb2sREL09RUD0vi8CotdXBCRvahUByesoAqJ3XREQvfFFQPZ6CcjegSIgeruLgOi9XARE754iIPttwO8EZG9bERC9R4qA6F15moDsdRUB0Zv6KwHZe7YIiN7EowRkb2kRkL3nCcheazcB2Zu0n4DszTxCQPY6CCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIaOhmE0AAAQQQQAABBBBAAAGZAo4SQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAaN1NxBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAHNFXCMAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIICAZm4OAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEDB6BRwngAACCCCAAAIIIIAAAhI3lwACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAC/ts2uHm4gKfcPFvAwAI3zxbQ2+7m2QL2j3XzbAErnTxbwA/jnTxbwGoXzxZwYrKLZwtY5eDZAra7d7aAM5PcO1vAEufOFvCGa2cL+M6xR+TmXSwB/a2OnS3gcrfOFjDXqbMFeCpg5Ar45WIAeNihR+ru67sYAB506Oj+1enS0f2rw6mj+1ebW0f3/8Oto/vXAceO7l8vunZ0/7rbuaP7n/Qb0ej+tdm9o/vXMgeP7n/QK0B0/7rfxaP7f+ZxoOj+tcjJo/u/7+TR/b+d6ubJ/U/6Iji6/9nFbp7c318DhPdf6+b6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6a+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++ru5/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/rrr7/++uuvv/76669/zhbqH73rT+qfvCkH9U/e2B79o/eC/tGbPaB/9Lr1j96t+mfvI/2j16l/9l7VP3s/6h+9m/XP3lr9s7dP/+yd0j96E/XP3iz9s3eH/tlbqn/2VuifvcX6Z+8m/bN3lf7ZGzOgf/YO6Z+9Tfpn7wH9sze5X//s9eifvVX6Z29Kr/7Ze0b/7F16WP/sPap/9sZ9o3/25p3SP3tLzumfvTX6Z6/1bf2zd9ku/cM/Ddilf7iAD/UnQH8C9A8WsFN/AvQnQP9gAT36Z29Cj/4E6B8tYIf+BOhPgP7BArbrT4D+0QI+GGb/NW7VzI17ZTj5z6xwqcbu8aF/N3zkNmdq8DpPDNF/77WO1OjN2Hqh/KfXT3Cipm/+7vPl/+u1q50nYQv3DJZ/YHO706Rs1uqP//1fcr9tWT7NWaI2bXnXxh1fHO87tPedDWsXXeIg//f+BmieZkzoaEKrAAAAAElFTkSuQmCC";t(68);function x(A){var e=A.info.projectListStyle,t=Object(c.useState)([]),r=Object(O.a)(t,2),i=r[0],s=r[1],a=Object(c.useState)(0),o=Object(O.a)(a,2),l=o[0],j=o[1],h=Object(c.useState)(),v=Object(O.a)(h,2),d=v[0],b=v[1],u=Object(c.useState)(!0),m=Object(O.a)(u,2),p=m[0],f=m[1],x=Object(c.useState)(!1),B=Object(O.a)(x,2),E=B[0],w=B[1];Object(c.useEffect)((function(){fetch("https://api.github.com/users/kenzo1997/repos").then((function(A){return A.json()})).then((function(A){s(A),b(A.length<=5?A.length:5),w(A.length<=5)})).catch((function(A){return console.error(A)}))}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:C,id:"leftArrow",style:p?{display:"none"}:{display:"inline"},onClick:function(){f(l-5<5),w(!(d+5>i.length)),j(l>=5?l-5:l-l),b(d-5>=5?d-5:d-(i.length-d)-1)},width:"50px",height:"50px"}),Object(n.jsx)("h2",{children:"Projects"}),Object(n.jsx)("img",{src:C,style:E?{display:"none"}:{display:"inline"},onClick:function(){w(d+5>i.length),f(!(l-5<5)),b(d+5<i.list?d+5:d+(i.length-d)),j(l+5)},width:"50px",height:"50px"}),Object(n.jsx)("div",{className:e,children:i.slice(l,d).map((function(e){return Object(n.jsx)(g,{project:e,openModal:A.openModal})}))})]})}var B=function(A){Object(l.a)(t,A);var e=Object(j.a)(t);function t(A){var c;return Object(a.a)(this,t),(c=e.call(this,A)).listenScrollEvent=function(A){var e=window.innerHeight;window.scrollY>2*e-250&&c.setState({projectListStyle:"projectList-reveal",waveAnim:"wave-anim"})},c.closeModal=function(){c.setState({modal:Object(n.jsx)("div",{})})},c.state={modal:Object(n.jsx)("div",{}),projectListStyle:"projectList",waveAnim:"wave"},c}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"openModal",value:function(A,e){this.setState({modal:Object(n.jsx)(f,{id:A,args:e,func:this.closeModal})})}},{key:"render",value:function(){var A=this.state,e=A.modal,t=A.waveAnim;return Object(n.jsxs)("div",{id:"projects",children:[Object(n.jsxs)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:[" ",Object(n.jsx)("path",{fill:"#f08080",fillOpacity:"1",d:"M0,32L14.1,32C28.2,32,56,32,85,74.7C112.9,117,141,203,169,240C197.6,277,226,267,254,229.3C282.4,192,311,128,339,122.7C367.1,117,395,171,424,197.3C451.8,224,480,224,508,213.3C536.5,203,565,181,593,149.3C621.2,117,649,75,678,90.7C705.9,107,734,181,762,192C790.6,203,819,149,847,122.7C875.3,96,904,96,932,122.7C960,149,988,203,1016,208C1044.7,213,1073,171,1101,181.3C1129.4,192,1158,256,1186,261.3C1214.1,267,1242,213,1271,181.3C1298.8,149,1327,139,1355,160C1383.5,181,1412,235,1426,261.3L1440,288L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"})]}),Object(n.jsx)(x,{info:this.state,openModal:this.openModal.bind(this)}),e]})}}]),t}(r.a.Component),E=(t(69),function(A){Object(l.a)(t,A);var e=Object(j.a)(t);function t(A){var n;return Object(a.a)(this,t),(n=e.call(this,A)).listenScrollEvent=function(A){var e=window.innerHeight;window.scrollY>3*e-450&&n.setState({formAnim:"formAnim"})},n.state={formAnim:"formNonAnime"},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"checkEmail",value:function(A){console.log(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(A).toLowerCase()))}},{key:"render",value:function(){var A=this;return Object(n.jsx)("div",{id:"contact",children:Object(n.jsx)("div",{id:"formContainer",children:Object(n.jsxs)("form",{action:"http://localhost:8000/index.php",method:"POST",encType:"multipart/form-data",name:"EmailForm",children:[Object(n.jsx)("h2",{children:"CONTACT"}),Object(n.jsx)("label",{children:Object(n.jsx)("input",{placeholder:"e-mail",name:"email",onBlur:function(e){return A.checkEmail(e.target.value)},className:this.state.formAnim})}),Object(n.jsx)("label",{children:Object(n.jsx)("textarea",{placeholder:"Message",name:"comment",className:this.state.formAnim})}),Object(n.jsx)("input",{value:"Send",type:"submit",className:this.state.formAnim})]})})})}}]),t}(c.Component)),w=(t(70),function(A){Object(l.a)(t,A);var e=Object(j.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"icon-container",children:[Object(n.jsx)("a",{href:"https://github.com/kenzo1997",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("svg",{className:"icon",enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"})})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("svg",{className:"icon",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"})})}),Object(n.jsx)("a",{href:"https://www.fiverr.com/kenzocoenaerts",target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("svg",{className:"icon",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("title",{children:"Fiverr icon"}),Object(n.jsx)("path",{d:"M13.639,11.928h-0.954c0.06-0.258,0.216-0.492,0.534-0.492C13.465,11.436,13.639,11.664,13.639,11.928z M24.001,12 c0,6.627-5.373,12-12,12s-12-5.373-12-12s5.373-12,12-12S24.001,5.373,24.001,12z M6.217,9.78c0,0.298,0.242,0.54,0.54,0.54 c0.298,0,0.54-0.242,0.54-0.54s-0.242-0.54-0.54-0.54C6.459,9.24,6.217,9.482,6.217,9.78z M7.735,13.2h-0.42v-2.526H4.849v-0.162 c0-0.318,0.318-0.324,0.48-0.324c0.186,0,0.27,0.018,0.27,0.018V9.33c0,0-0.168-0.024-0.396-0.024c-0.516,0-1.47,0.144-1.47,1.236 v0.138h-0.45v0.81h0.45v1.71h-0.42v0.81h2.028V13.2H4.849v-1.71h1.35v1.71h-0.42v0.81h1.956V13.2z M11.149,11.484h0.372v-0.81 h-1.77v0.81h0.3l-0.384,1.2c-0.072,0.198-0.09,0.438-0.09,0.438H9.553c0,0-0.018-0.24-0.09-0.438l-0.384-1.2h0.3v-0.81h-1.77v0.81 h0.372l0.924,2.52h1.32L11.149,11.484z M14.797,12.204c0-0.924-0.558-1.608-1.548-1.608c-1.074,0-1.734,0.762-1.734,1.74 c0,0.888,0.642,1.746,1.83,1.746c0.9,0,1.434-0.468,1.434-0.468l-0.408-0.774c0,0-0.444,0.318-0.936,0.318 c-0.354,0-0.69-0.186-0.774-0.612h2.112C14.767,12.54,14.797,12.312,14.797,12.204L14.797,12.204z M17.773,10.632 c0,0-0.066-0.012-0.132-0.012c-0.51-0.006-0.93,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1 c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486 c0-0.606,0.3-1.002,0.918-1.002c0.138,0,0.228,0.018,0.228,0.018V10.632z M20.731,11.73v-1.098c0,0-0.066-0.012-0.132-0.012 c-0.504-0.006-0.924,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81 h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486c0-0.606,0.3-1.002,0.918-1.002 C20.641,11.712,20.731,11.73,20.731,11.73z"})]})}),Object(n.jsx)("a",{href:"https://www.upwork.com/freelancers/~01220c98cb10bb683a",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 225.000000 225.000000",children:Object(n.jsx)("g",{transform:"translate(0.000000,225.000000) scale(0.100000,-0.100000)",stroke:"none",children:Object(n.jsx)("path",{d:"M442 1288 c3 -244 5 -266 24 -309 31 -67 87 -124 152 -156 49 -24 69 -28 142 -28 72 1 93 5 135 27 107 56 167 148 175 272 l5 78 58 -92 57 -93 -50 -228 c-27 -126 -50 -233 -50 -239 0 -6 34 -10 84 -10 84 0 84 0 90 28 3 15 19 91 36 169 16 78 30 144 30 147 0 3 25 -6 55 -20 149 -69 311 -42 410 68 60 67 87 129 92 213 9 132 -59 245 -182 306 -54 26 -76 31 -139 32 -135 1 -241 -72 -299 -203 l-24 -53 -35 64 c-34 61 -77 156 -110 244 l-16 40 -80 3 -81 3 -3 -245 c-3 -230 -4 -246 -24 -273 -70 -95 -201 -98 -261 -6 -16 24 -19 58 -23 273 l-5 245 -83 3 -83 3 3 -263z m1198 -20 c55 -38 75 -73 75 -132 0 -133 -129 -205 -262 -146 -79 35 -82 39 -66 116 16 78 31 110 70 145 35 33 47 37 104 38 32 1 56 -6 79 -21z"})})})})]})})}}]),t}(r.a.Component)),Q=function(A){Object(l.a)(t,A);var e=Object(j.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(v,{}),Object(n.jsx)(u,{}),Object(n.jsx)(B,{}),Object(n.jsx)(E,{}),Object(n.jsx)(w,{})]})}}]),t}(r.a.Component),I=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,72)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;t(A),n(A),c(A),r(A),i(A)}))};s.a.render(Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),I()}},[[71,1,2]]]);
//# sourceMappingURL=main.918abf4d.chunk.js.map