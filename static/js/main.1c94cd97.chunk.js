(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(9),i=s(3),n=s(1),c=s(0),r=Object(n.createContext)(),l=function(e){var t=e.children,s=localStorage.getItem("themeName"),a=Object(n.useState)(s||"dark"),l=Object(i.a)(a,2),o=l[0],d=l[1];Object(n.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=e.matches?"dark":"light";d(s||t),e.addEventListener("change",(function(e){d(e.matches?"light":"dark")}))}),[]);return Object(c.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),d(e)}}],children:t})},o="https://A1eeex.github.io/Portfolio",d="JS.",h="Oleksandr Petrovskyi",j="Frontend developer",u="Extremely passionate about software architecture and design combined\n    with sensitivity to serve the needs of the business balanced with the\n    delivery of high-quality solutions.\n    Having a positive outlook and am always willing to learn new traits and\n    expand my skills. Able to stretch the personal and work boundaries to\n    help your company stand out.",b="https://drive.google.com/file/d/1GUZKH2F84Z1sTmtD3lodDr4THVKCpIax/view",m={linkedin:"https://www.linkedin.com/in/oleksandr-petrovskyi-6b1010196/",github:"https://github.com/A1eeex"},p=[{name:"Apple Gadgets",class_name:"apple_gadgets",description:"Apple Gadgets for a company that sells mobile phones",stack:["React-js","Typescript","Node.js","SCSS","CSS modules","react-slick","REST API","Fetch"],sourceCode:"https://github.com/orgs/fe-aug23-team-disband/repositories",livePreview:"https://fe-aug23-team-disband.github.io/phone_catalog/"},{name:"Medical Rehabilitation",class_name:"rehabilitacja_praktika",description:"Physical therapy, Manual therapy, Kinesitherapy, Therapeutic massage, Rehabilitation at the patient's home",stack:["Next.js","Tailwind"],sourceCode:"https://github.com/A1eeex/praktika_rehabilitacja",livePreview:"https://praktika-rehabilitacja.vercel.app/"},{name:"User-list",class_name:"vue-user-list",description:"A web application for managing a user list, providing functionality for user deletion, detailed viewing, and pagination of results.",stack:["VUE","SCSS"],sourceCode:"https://github.com/A1eeex/vue-user-list",livePreview:"https://a1eeex.github.io/vue-user-list/"},{name:"MyBike",class_name:"myBike",description:"Your cycling paradise where you will find a huge selection of the best bike models",stack:["HTML","CSS"],sourceCode:"https://github.com/A1eeex/layout_landing-page/tree/develop",livePreview:"https://a1eeex.github.io/layout_landing-page/"},{name:"Mogo",class_name:"mogo_layout",description:"Mogo Services and history, samples of the best work",stack:["HTML","CSS","JS"],sourceCode:"https://github.com/A1eeex/Layouts/tree/master/Mogo",livePreview:"https://a1eeex.github.io/Layouts/Mogo/"},{name:"Car service",class_name:"car_service",description:'To book car repairs and maintenance services"',stack:["HTML","CSS","Slik"],sourceCode:"https://github.com/A1eeex/Layouts/tree/master/Car_Service",livePreview:"https://a1eeex.github.io/Layouts/Car_Service"},{name:"Yoga",class_name:"yoga",description:"Fitness, yoga, relax",stack:["HTML","CSS","JS"],sourceCode:"https://github.com/A1eeex/Layouts/tree/master/Yoga",livePreview:"https://a1eeex.github.io/Layouts/Yoga/"},{name:"React-redux todo",class_name:"redux_todo",description:"Todo",stack:["React.js","Redux","Tailwind"],sourceCode:"https://github.com/A1eeex/todo-redux",livePreview:"https://a1eeex.github.io/todo-redux/"},{name:"Fullscreen slider",class_name:"fullscreen_slider",description:"slider",stack:["HTML","CSS","JS"],sourceCode:"https://github.com/A1eeex/atoms/tree/master/03-slider",livePreview:"https://a1eeex.github.io/atoms/03-slider/"}],x=["HTML","CSS","JavaScript","TypeScript","Redux","React.js","Next.js","Less","SCSS","Material UI","Tailwindcss","Git"],g="opetrovskyi423@gmail.com",O=s(16),v=s.n(O),k=s(14),f=s.n(k),_=s(18),N=s.n(_),y=s(17),S=s.n(y),w=(s(28),function(){var e=Object(n.useContext)(r),t=Object(i.a)(e,1)[0],s=t.themeName,a=t.toggleTheme,l=Object(n.useState)(!1),o=Object(i.a)(l,2),d=o[0],h=o[1],j=function(){return h(!d)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[p.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:j,className:"link link--nav",children:"Projects"})}):null,x.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:j,className:"link link--nav",children:"Skills"})}):null,g?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:j,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===s?Object(c.jsx)(f.a,{}):Object(c.jsx)(v.a,{})}),Object(c.jsx)("button",{type:"button",onClick:j,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(c.jsx)(S.a,{}):Object(c.jsx)(N.a,{})})]})}),C=(s(32),function(){var e=o,t=d;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(w,{})]})}),T=s(11),P=s.n(T),A=s(19),L=s.n(A),M=(s(33),function(){var e=h,t=j,s=u,a=b,i=m;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsxs)("h1",{children:["Hi, I am ",Object(c.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(c.jsxs)("h2",{className:"about__role",children:[" ",t,"."]}),Object(c.jsx)("p",{className:"about__desc",children:s&&s}),Object(c.jsxs)("div",{className:"about__contact center",children:[a&&Object(c.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:"link--resume",children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(c.jsxs)(c.Fragment,{children:[i.github&&Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:i.github,"aria-label":"github",className:"link link--icon",children:Object(c.jsx)(P.a,{})}),i.linkedin&&Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(c.jsx)(L.a,{})})]})]})]})}),E=s(7),H=s.n(E),R=s(20),I=s.n(R),J=(s(35),function(e){var t=e.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("div",{className:"project_img ".concat(t.class_name)}),Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},H()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(P.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(I.a,{})})]})}),F=(s(36),function(){return p.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(c.jsx)(J,{project:e},H()())}))})]}):null}),G=(s(37),function(){return x.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),Y=s(21),U=s.n(Y),B=(s(38),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),s?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(U.a,{fontSize:"large"})})}):null}),K=(s(39),function(){return g?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:"mailto:".concat(g),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(s(40),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://github.com/A1eeex",className:"link footer__link",children:"GIT Oleksandr Petrovskyi"})})}),V=(s(41),function(){var e=Object(n.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(C,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(M,{}),Object(c.jsx)(F,{}),Object(c.jsx)(G,{}),Object(c.jsx)(K,{})]}),Object(c.jsx)(B,{}),Object(c.jsx)(D,{})]})});s(42);Object(a.render)(Object(c.jsx)(l,{children:Object(c.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1c94cd97.chunk.js.map