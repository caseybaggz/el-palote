(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(e,t,n){"use strict";n(75),n(55),n(37),n(172);var a={xlDesktop:2e3,awkward:1480,desktop:1280,tablet:769,phone:0},o=Object.keys(a).reduce(function(e,t){return e[t]="@media (min-width: "+a[t]/16+"em)",e},{});t.a=o},155:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(160),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},156:function(e,t,n){"use strict";var a=n(149),o=n(152),i=a.d.p.withConfig({displayName:"Body1",componentId:"sc-1bxqhzh-0"})(["font-family:",";font-size:16px;letter-spacing:0.2px;line-height:1.6;","{line-height:1.75;}"],function(e){return e.theme.bodyFont},o.a.tablet);t.a=i},157:function(e,t,n){"use strict";var a=n(184),o=n(0),i=n.n(o),r=n(185),l=n.n(r);function c(e){var t=e.description,n=e.lang,o=e.meta,r=e.keywords,c=e.title,d=a.data.site,s=t||d.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:image",content:d.siteMetadata.avatar},{property:"og:image:type",content:"image/jpeg"},{property:"og:image:width",content:"600"},{property:"og:image:height",content:"400"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}c.defaultProps={lang:"en",keywords:["El Palote","vegan","food","vegan food","dallas","dallas vegan","mexican","mexican food","vegan mexican food","dallas mexican food","family owned","vegan meats","meats","texas vegan","texas","good food"],meta:[],title:"El Palote Foods"},t.a=i.a.memo(c)},158:function(e,t,n){"use strict";var a=n(169),o=n(0),i=n.n(o),r=n(149),l=n(170),c=n(155),d=n(152);function s(e){switch(e.kind){case"text":case"text-danger":case"disabled":case"success":return"initial";default:return"scale(1.05)"}}var u=r.d.button.withConfig({displayName:"button__Button",componentId:"vet7v9-0"})(["appearance:none;background:",";border:",";box-shadow:",";color:",";cursor:",";display:block;font-family:",";font-size:24px;font-weight:900;letter-spacing:",";padding:16px 36px;text-align:center;text-decoration:none;text-transform:",";transition:",";width:100%;&:hover{background:",";box-shadow:",";color:",";transform:",";}&:active{border:none;outline:none;}&:focus{transform:",";outline:none;}&:focus[disabled]{transform:initial;outline:none;}","{width:initial;}"],function(e){return function(e){var t=e.theme;switch(e.kind){case"secondary":case"text":case"text-danger":return"transparent";case"secondary-light":return t.pureWhite;case"secondary-dark":return t.primaryLight;case"success":return t.success;case"danger":return t.danger;case"accent-rounded":return t.accent1;case"disabled":return t.disabledButton;default:return t.primary}}(e)},function(e){return function(e){var t=e.theme;return"secondary"===e.kind?"1px solid "+t.primary:"initial"}(e)},function(e){return function(e){return e.kind,"initial"}(e)},function(e){return function(e){var t=e.theme;switch(e.kind){case"secondary":case"secondary-light":case"secondary-dark":case"text":return t.primary;case"text-danger":return t.danger;case"disabled":return t.lightGrey;default:return t.lightText}}(e)},function(e){return"disabled"===e.kind?"default":"pointer"},function(e){return e.theme.headlineFont},function(e){return function(e){return"text"===e.kind?"0.4px":"1.4px"}(e)},function(e){return function(e){return"text"===e.kind||"text-danger"===e.kind?"initial":"uppercase"}(e)},function(e){return function(e){var t="transform 150ms ease-out";switch(e.kind){case"secondary":return"color 150ms ease-out, background 250ms ease-out, "+t;case"secondary-light":return t+", box-shadow 250ms ease-out";case"text":case"text-danger":return"color 250ms ease-out";case"success":case"danger":case"accent-rounded":return t;default:return"background 200ms ease-out, "+t}}(e)},function(e){return function(e){var t=e.theme;switch(e.kind){case"secondary":return t.primary;case"text":case"text-danger":return"transparent";case"secondary-light":return t.pureWhite;case"disabled":return t.disabledButton;case"success":return t.success;case"danger":return t.danger;case"accent-rounded":return t.accent1;default:return t.primaryDark}}(e)},function(e){return function(e){return"secondary-light"===e.kind?"0 6px 19px rgba(52, 52, 53, 0.21)":"initial"}(e)},function(e){return function(e){var t=e.theme;switch(e.kind){case"secondary-light":case"secondary-dark":return t.primary;case"text":return t.accent3;case"text-danger":return t.darkText;case"disabled":return t.lightGrey;default:return t.lightText}}(e)},function(e){return s(e)},function(e){return s(e)},d.a.tablet);u.defaultProps={kind:"default",withform:"false"};var p=u,m=r.d.div.withConfig({displayName:"navicon__Wrapper",componentId:"sc-6e0d2g-0"})(["align-items:center;bottom:0;display:flex;flex-direction:row;justify-content:center;left:0;min-height:76px;position:absolute;top:0;","{display:none;}"],d.a.desktop),f=r.d.button.withConfig({displayName:"navicon__Button",componentId:"sc-6e0d2g-1"})(["background-color:transparent;border:0;color:inherit;cursor:pointer;display:inline-block;font:inherit;margin:0;overflow:visible;padding:15px 15px;text-transform:none;&:active,&:focus{outline:none;}"]),h=r.d.span.withConfig({displayName:"navicon__Icon",componentId:"sc-6e0d2g-2"})(["display:inline-block;height:20px;position:relative;width:25px;"]),g=r.d.div.withConfig({displayName:"navicon__Bars",componentId:"sc-6e0d2g-3"})(["background-color:",";height:4px;width:25px;&::before,&::after{background-color:",';content:"";display:block;height:4px;position:absolute;width:25px;}&::before{top:8px;}&::after{top:16px;}'],function(e){return e.theme.black},function(e){return e.theme.black});function b(e){return i.a.createElement(m,null,i.a.createElement(f,{onClick:function(){e.onOpenNav(!0)}},i.a.createElement(h,null,i.a.createElement(g,null))))}b.defaultProps={onOpenNav:function(){}};var x=i.a.memo(b),v=r.d.div.withConfig({displayName:"Logo__Wrapper",componentId:"sc-1ljuu8d-0"})(["display:inline-block;width:",";"],function(e){return(e.size||200)+"px"});var y=i.a.memo(function(e){return i.a.createElement(v,{size:e.size},i.a.createElement(r.a,null,function(t){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 488 144"},i.a.createElement("path",{fill:t[e.color]||t.darkText,d:"M26.112 49.928v8.448h21.12v16.032h-21.12v9.6h24V101H4.8V33.032h45.312v16.896h-24zm53.344 34.944H100V101H58.144V33.032h21.312v51.84zM186.384 56.36c0 4.288-.992 8.192-2.976 11.712-1.984 3.456-4.928 6.208-8.832 8.256-3.84 2.048-8.512 3.072-14.016 3.072h-8.448V101H130.8V33.032h29.76c8.32 0 14.688 2.112 19.104 6.336 4.48 4.224 6.72 9.888 6.72 16.992zM158.16 62.6c4.416 0 6.624-2.08 6.624-6.24s-2.208-6.24-6.624-6.24h-6.048V62.6h6.048zm67.048 28.128h-22.656L199.192 101h-22.368l24.864-67.968h24.576L251.032 101h-22.464l-3.36-10.272zm-5.184-16.032l-6.144-18.912-6.144 18.912h12.288zm57.162 10.176h20.544V101h-41.856V33.032h21.312v51.84zm60.37 16.8c-6.4 0-12.288-1.504-17.664-4.512-5.312-3.008-9.536-7.168-12.672-12.48-3.136-5.312-4.704-11.296-4.704-17.952 0-6.656 1.568-12.64 4.704-17.952 3.136-5.312 7.36-9.44 12.672-12.384 5.376-3.008 11.264-4.512 17.664-4.512 6.4 0 12.256 1.504 17.568 4.512 5.312 2.944 9.504 7.072 12.576 12.384 3.136 5.312 4.704 11.296 4.704 17.952 0 6.656-1.568 12.64-4.704 17.952-3.072 5.312-7.296 9.472-12.672 12.48-5.312 3.008-11.136 4.512-17.472 4.512zm0-19.872c4.224 0 7.488-1.344 9.792-4.032 2.304-2.752 3.456-6.432 3.456-11.04 0-4.672-1.152-8.352-3.456-11.04-2.304-2.752-5.568-4.128-9.792-4.128-4.288 0-7.584 1.376-9.888 4.128-2.304 2.688-3.456 6.368-3.456 11.04 0 4.608 1.152 8.288 3.456 11.04 2.304 2.688 5.6 4.032 9.888 4.032zm95.912-48.768v16.896H415.42V101h-21.312V49.928h-17.856V33.032h57.216zm27.093 16.896v8.448h21.12v16.032h-21.12v9.6h24V101h-45.312V33.032h45.312v16.896h-24z"}))}))}),w=r.d.header.withConfig({displayName:"header__HeaderEl",componentId:"cen5jm-0"})(["align-items:center;background-color:",";box-shadow:0 0.2rem 0.5rem 0 rgba(0,0,0,0.06);display:flex;justify-content:center;padding-bottom:6px;padding-top:6px;position:fixed;width:100%;z-index:10;","{justify-content:initial;overflow:hidden;padding-left:36px;}"],function(e){return e.theme.white},d.a.desktop),E=r.d.ul.withConfig({displayName:"header__NavList",componentId:"cen5jm-1"})(["display:none;","{align-items:center;display:flex;justify-content:space-between;list-style:none;margin-left:48px;max-width:400px;li{margin-right:36px;}}"],d.a.desktop),k=Object(r.d)(c.a).withConfig({displayName:"header__NavLink",componentId:"cen5jm-2"})(["border-left:4px solid transparent;color:",";display:block;letter-spacing:1px;padding-bottom:24px;padding-top:24px;text-transform:uppercase;&.active{color:",";position:relative;}"],function(e){return e.theme.accent3},function(e){return e.theme.accent2}),_=r.d.div.withConfig({displayName:"header__ButtonWrapper",componentId:"cen5jm-3"})(["bottom:-1px;left:0;position:fixed;right:0;z-index:1;","{bottom:initial;left:initial;position:absolute;z-index:initial;a{padding-bottom:25px;padding-top:25px;}}"],d.a.desktop);function N(e){var t=l.data,n=i.a.useState(function(){return[]}),a=n[0],o=n[1];return i.a.useEffect(function(){a.length||o(t.allNavItemsJson.edges.map(function(e){return i.a.createElement("li",{key:e.node.id},i.a.createElement(k,{activeClassName:"active",to:e.node.route},e.node.label))}))},[t]),i.a.createElement(w,null,i.a.createElement(x,{onOpenNav:e.showMobileNav}),i.a.createElement(c.a,{to:"/"},i.a.createElement(y,null)),i.a.createElement(E,null,a),i.a.createElement(_,null,i.a.createElement(p,{as:"a",href:"https://ordering.app/elpalote/"},"order online")))}N.defaultProps={showMobileNav:function(){},siteTitle:""};var C=i.a.memo(N),F=n(181),I=n(161),z=n(162),j=r.d.p.withConfig({displayName:"Body2",componentId:"sc-1t79a17-0"})(["color:",";font-family:",";font-size:14px;letter-spacing:0.2px;line-height:1.3;"],function(e){return e.color||e.theme.darkText},function(e){return e.theme.bodyFont}),M=n(163),T=i.a.createElement(r.a,null,function(e){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 504 504"},i.a.createElement("g",{id:"Page-1",fill:"none",fillRule:"evenodd"},i.a.createElement("g",{id:"glyph-logo_May2016",fill:e.accent3},i.a.createElement("g",{id:"Group-3"},i.a.createElement("path",{id:"Fill-1",d:"M251.921.159c-68.418 0-76.997.29-103.867 1.516-26.814 1.223-45.127 5.482-61.151 11.71-16.566 6.437-30.615 15.051-44.621 29.056-14.005 14.006-22.619 28.055-29.056 44.621-6.228 16.024-10.487 34.337-11.71 61.151C.29 175.083 0 183.662 0 252.08c0 68.417.29 76.996 1.516 103.866 1.223 26.814 5.482 45.127 11.71 61.151 6.437 16.566 15.051 30.615 29.056 44.621 14.006 14.005 28.055 22.619 44.621 29.057 16.024 6.227 34.337 10.486 61.151 11.709 26.87 1.226 35.449 1.516 103.867 1.516 68.417 0 76.996-.29 103.866-1.516 26.814-1.223 45.127-5.482 61.151-11.709 16.566-6.438 30.615-15.052 44.621-29.057 14.005-14.006 22.619-28.055 29.057-44.621 6.227-16.024 10.486-34.337 11.709-61.151 1.226-26.87 1.516-35.449 1.516-103.866 0-68.418-.29-76.997-1.516-103.867-1.223-26.814-5.482-45.127-11.709-61.151-6.438-16.566-15.052-30.615-29.057-44.621-14.006-14.005-28.055-22.619-44.621-29.056-16.024-6.228-34.337-10.487-61.151-11.71C328.917.449 320.338.159 251.921.159zm0 45.391c67.265 0 75.233.257 101.797 1.469 24.562 1.12 37.901 5.224 46.778 8.674 11.759 4.57 20.151 10.029 28.966 18.845 8.816 8.815 14.275 17.207 18.845 28.966 3.45 8.877 7.554 22.216 8.674 46.778 1.212 26.564 1.469 34.532 1.469 101.798 0 67.265-.257 75.233-1.469 101.797-1.12 24.562-5.224 37.901-8.674 46.778-4.57 11.759-10.029 20.151-18.845 28.966-8.815 8.816-17.207 14.275-28.966 18.845-8.877 3.45-22.216 7.554-46.778 8.674-26.56 1.212-34.527 1.469-101.797 1.469-67.271 0-75.237-.257-101.798-1.469-24.562-1.12-37.901-5.224-46.778-8.674-11.759-4.57-20.151-10.029-28.966-18.845-8.815-8.815-14.275-17.207-18.845-28.966-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.797 0-67.266.257-75.234 1.469-101.798 1.12-24.562 5.224-37.901 8.674-46.778 4.57-11.759 10.029-20.151 18.845-28.966 8.815-8.816 17.207-14.275 28.966-18.845 8.877-3.45 22.216-7.554 46.778-8.674 26.564-1.212 34.532-1.469 101.798-1.469z"})),i.a.createElement("path",{id:"Fill-4",d:"M251.921 336.053c-46.378 0-83.974-37.596-83.974-83.973 0-46.378 37.596-83.974 83.974-83.974 46.377 0 83.973 37.596 83.973 83.974 0 46.377-37.596 83.973-83.973 83.973zm0-213.338c-71.447 0-129.365 57.918-129.365 129.365 0 71.446 57.918 129.364 129.365 129.364 71.446 0 129.364-57.918 129.364-129.364 0-71.447-57.918-129.365-129.364-129.365z"}),i.a.createElement("path",{id:"Fill-5",d:"M416.627 117.604c0 16.696-13.535 30.23-30.231 30.23-16.695 0-30.23-13.534-30.23-30.23 0-16.696 13.535-30.231 30.23-30.231 16.696 0 30.231 13.535 30.231 30.231"}))))});var B=i.a.memo(function(e){return T}),L=i.a.createElement(r.a,null,function(e){return i.a.createElement("svg",{viewBox:"0 0 35 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M11.007 28.44c13.207 0 20.431-10.943 20.431-20.432 0-.311 0-.62-.02-.928A14.61 14.61 0 0 0 35 3.363c-1.31.58-2.7.961-4.124 1.13A7.206 7.206 0 0 0 34.033.52a14.39 14.39 0 0 1-4.56 1.743 7.188 7.188 0 0 0-12.238 6.549A20.387 20.387 0 0 1 2.436 1.31a7.186 7.186 0 0 0 2.223 9.586A7.126 7.126 0 0 1 1.4 9.997v.091a7.183 7.183 0 0 0 5.761 7.04 7.17 7.17 0 0 1-3.242.122 7.189 7.189 0 0 0 6.708 4.987A14.409 14.409 0 0 1 0 25.214a20.33 20.33 0 0 0 11.007 3.22",fill:e.accent3}))});var O=i.a.memo(function(e){return L}),V=r.d.footer.withConfig({displayName:"footer__Wrapper",componentId:"sc-6de8pv-0"})(["background-color:rgba(28,23,20,0.95);padding-bottom:52px;","{padding-bottom:initial;}"],d.a.tablet),P=Object(r.d)(I.a).withConfig({displayName:"footer__FooterRow",componentId:"sc-6de8pv-1"})(["align-items:center;display:flex;flex-direction:column;padding-bottom:44px;padding-top:44px;","{align-items:flex-start;flex-direction:row;padding-bottom:50px;padding-left:102px;padding-right:181px;padding-top:50px;}"],d.a.tablet),A=Object(r.d)(M.a).withConfig({displayName:"footer__FooterSectionHeadline",componentId:"sc-6de8pv-2"})(["color:",";text-align:center;text-transform:uppercase;","{text-align:initial;}"],function(e){return e.theme.secondaryText},d.a.tablet),R=r.d.div.withConfig({displayName:"footer__FooterSectionRow",componentId:"sc-6de8pv-3"})(["","{align-items:flex-start;display:flex;padding-top:initial;}"],d.a.tablet),W=r.d.ul.withConfig({displayName:"footer__SectionList",componentId:"sc-6de8pv-4"})(["list-style:none;margin-bottom:48px;","{margin-bottom:0;margin-right:100px;&:last-of-type{margin-right:0;}}"],d.a.tablet),S=r.d.li.withConfig({displayName:"footer__ListItem",componentId:"sc-6de8pv-5"})(["margin-top:24px;text-align:center;","{text-align:initial;}"],d.a.tablet),D=Object(r.d)(I.a).withConfig({displayName:"footer__SocialList",componentId:"sc-6de8pv-6"})(["justify-content:center;list-style:none;margin-top:22px;li{margin-right:22px;width:35px;&:last-of-type{margin-right:initial;}a{display:inline-block;width:100%;}}","{justify-content:initial;margin-right:24px;padding-bottom:58px;padding-left:102px;padding-top:28px;}"],d.a.tablet),H=r.d.div.withConfig({displayName:"footer__Legal",componentId:"sc-6de8pv-7"})(["align-items:center;background-color:",";display:flex;justify-content:center;padding:22px;","{padding-left:102px;padding-right:102px;}"],function(e){return e.theme.black},d.a.tablet),J=Object(r.d)(j).withConfig({displayName:"footer__Copyright",componentId:"sc-6de8pv-8"})(["color:",";"],function(e){return e.theme.lightText}),q=r.d.div.withConfig({displayName:"footer__LogoWrapper",componentId:"sc-6de8pv-9"})(["padding-top:30px;text-align:center;width:100%;","{padding-left:102px;padding-top:109px;text-align:initial;}"],d.a.tablet),G=[{id:0,url:"https://twitter.com/@elpalote",icon:O},{id:1,url:"https://www.instagram.com/elpalote.vegan/?hl=en",icon:B}];var K=i.a.memo(function(e){var t=F.data,n=i.a.useMemo(function(){return t.allVisitAndEatJson.edges.map(function(e){return i.a.createElement(S,{key:e.node.id},i.a.createElement(z.b,{to:e.node.url},e.node.label))})},[t]),a=i.a.useMemo(function(){return G.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:e.url},i.a.createElement(e.icon,null)))})},[G]);return i.a.createElement(V,null,i.a.createElement(q,null,i.a.createElement(y,{color:"lightText"})),i.a.createElement(P,null,i.a.createElement(R,null,i.a.createElement(W,null,i.a.createElement("li",null,i.a.createElement(A,null,"visit and eat")),n),i.a.createElement(W,null,i.a.createElement("li",null,i.a.createElement(A,null,"our company"))),i.a.createElement(W,null,i.a.createElement("li",null,i.a.createElement(A,null,"questions"))),i.a.createElement(W,null,i.a.createElement("li",null,i.a.createElement(A,null,"serve el palote"))))),i.a.createElement(D,{as:"ul"},a),i.a.createElement(H,null,i.a.createElement(J,null,"© Copyright 2019 El Palote")))}),Q=n(182),U=Object(r.e)(["from{opacity:0;}to{opacity:1;}"]),X=Object(r.e)(["from{transform:translate3d(-100%,0,0);}to{transform:translate3d(0,0,0);}"]),Y=r.d.div.withConfig({displayName:"mobileNav__Wrapper",componentId:"pblvlb-0"})(["bottom:0;height:100vh;left:0;overflow:hidden;position:fixed;right:0;top:0;width:100%;z-index:10;"]),Z=r.d.div.withConfig({displayName:"mobileNav__Overlay",componentId:"pblvlb-1"})(["animation:"," 250ms ease-out;animation-fill-mode:forwards;background-color:rgba(28,23,20,0.8);bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;z-index:0;"],U),$=r.d.div.withConfig({displayName:"mobileNav__SideBar",componentId:"pblvlb-2"})(["animation:"," 250ms ease-out;animation-fill-mode:forwards;animation-delay:300ms;background-color:",";bottom:0;height:100vh;left:0;position:absolute;top:0;transform:translate3d(-100%,0,0);width:85%;"],X,function(e){return e.theme.white}),ee=r.d.ul.withConfig({displayName:"mobileNav__NavList",componentId:"pblvlb-3"})(["list-style:none;padding:12px 24px;width:100%;"]),te=Object(r.d)(c.a).withConfig({displayName:"mobileNav__NavLink",componentId:"pblvlb-4"})(["border-left:4px solid transparent;color:",";display:block;letter-spacing:1px;padding-bottom:24px;padding-top:24px;text-transform:uppercase;&.active{color:",";position:relative;}"],function(e){return e.theme.accent3},function(e){return e.theme.accent2});function ne(e){var t=e.onClose,n=Q.data,a=i.a.useState(function(){return[]}),o=a[0],r=a[1];i.a.useEffect(function(){o.length||r(n.allNavItemsJson.edges.map(function(e){return i.a.createElement("li",{key:e.node.id},i.a.createElement(te,{activeClassName:"active",to:e.node.route},e.node.label))}))},[n]);var l=i.a.useCallback(function(){t(!1)},[t]);return i.a.createElement(Y,null,i.a.createElement(Z,{onClick:l}),i.a.createElement($,null,i.a.createElement(ee,null,i.a.createElement("li",null,i.a.createElement(y,{size:"180"})),o)))}ne.defaultProps={onClose:function(){}};var ae=i.a.memo(ne),oe=n(183),ie=n.n(oe);function re(){var e=ie()(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    color: ",";\n    font-family: ",";\n    font-size: 100%;\n    margin: 0;\n    padding: 0;\n    vertical-align: baseline;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  html,\n  body,\n  #__gatsby {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    background-color: ",";\n    line-height: 1.3;\n    min-width: 360px;\n  }\n\n  ::-moz-selection,\n  ::selection {\n    color: ",";\n    background: ","\n  }\n"]);return re=function(){return e},e}var le=Object(r.c)(re(),function(e){return e.theme.darkText},function(e){return e.theme.bodyFont},function(e){return e.theme.white},function(e){return e.theme.lightText},function(e){return e.theme.primary}),ce={headlineFont:"'Poppins', sans-serif",bodyFont:"'Raleway', sans-serif",black:"#1C1714",white:"#FFFFFE",pureWhite:"#ffffff",lightGrey:"#f7f7f7",primary:"#F44336",primaryLight:"#FFCDD2",primaryDark:"#D32F2F",accent1:"#FFEB3B",accent2:"#3F51B5",accent3:"#8BC34A",lightText:"#FFFFFE",darkText:"#1C1714",secondaryText:"#757575",success:"#4CAF50",warning:"#FBC02D",danger:"#FF5252",border:"#e3dcdc",blackAt60:"rgba(28, 23, 20, 0.6)"},de=r.d.div.withConfig({displayName:"layout__Wrapper",componentId:"u44pb-0"})(["overflow-x:hidden;width:100%;"]),se=r.d.div.withConfig({displayName:"layout__Content",componentId:"u44pb-1"})(["padding-top:76.02px;"]);t.a=i.a.memo(function(e){var t=i.a.useState(!1),n=t[0],o=t[1],l=a.data;return i.a.createElement(r.b,{theme:ce},i.a.createElement(de,null,i.a.createElement(le,null),i.a.createElement(C,{siteTitle:l.site.siteMetadata.title,showMobileNav:o}),i.a.createElement(se,null,e.children),i.a.createElement(K,null),n&&i.a.createElement(ae,{onClose:o})))})},160:function(e,t,n){var a;e.exports=(a=n(171))&&a.default||a},161:function(e,t,n){"use strict";var a=n(149).d.div.withConfig({displayName:"Row",componentId:"sc-17ys3fv-0"})(["align-items:",";display:flex;flex-direction:",";flex-wrap:",";justify-content:",";position:relative;"],function(e){return e.align||"center"},function(e){return e.direction||"row"},function(e){return e.wrap?"wrap":"initial"},function(e){return e.justify||"space-between"});t.a=a},162:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),i=n(155),r=n(149),l=n(156),c=Object(r.d)(l.a).withConfig({displayName:"TextLink__LinkItem",componentId:"sc-13namnt-0"})(["color:",";display:inline-block;text-decoration:none;transition:color 150ms ease-out;&.active{color:",";}&:hover{color:",";}"],function(e){return e.theme.accent3},function(e){return e.theme.accent2},function(e){return e.theme.accent1});t.b=o.a.memo(function(e){return o.a.createElement(c,{as:i.a,activeClassName:"active",to:e.to},e.children)})},163:function(e,t,n){"use strict";var a=n(149).d.h5.withConfig({displayName:"H5",componentId:"sc-7o5xmb-0"})(["font-family:",";font-size:24px;font-weight:600;"],function(e){return e.theme.headlineFont});t.a=a},169:function(e){e.exports={data:{site:{siteMetadata:{title:"El Palote Foods"}}}}},170:function(e){e.exports={data:{allNavItemsJson:{edges:[{node:{id:"0",label:"home",route:"/"}},{node:{id:"1",label:"menu",route:"/menu"}},{node:{id:"2",label:"locations",route:"/locations"}}]}}}},171:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(70),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},181:function(e){e.exports={data:{allVisitAndEatJson:{edges:[{node:{id:"0",label:"Menu",url:"/menu"}},{node:{id:"1",label:"Locations",url:"/locations"}}]}}}},182:function(e){e.exports={data:{allNavItemsJson:{edges:[{node:{id:"0",label:"home",route:"/"}},{node:{id:"1",label:"menu",route:"/menu"}},{node:{id:"2",label:"locations",route:"/locations"}}]}}}},184:function(e){e.exports={data:{site:{siteMetadata:{title:"El Palote Foods",description:"The official site for the first authentic vegan mexican food family-owned restaurant in the world, based out of Dallas, Texas.",author:"@elpalote",avatar:""}}}}}}]);
//# sourceMappingURL=1-92bef1eb4d2568f2a49d.js.map