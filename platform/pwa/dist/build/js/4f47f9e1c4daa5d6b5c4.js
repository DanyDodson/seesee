(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{648:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(184);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,a,c=i(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={open:!1},t}return t=u,(n=[{key:"toggleMenuBar",value:function(e){var t=this.state.open;e&&e.preventDefault&&e.preventDefault(),this.setState({open:!t})}},{key:"closeMenuBar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.b,{to:"/",className:" navbar-item"},r.a.createElement("strong",null,"ReactPWA")),r.a.createElement("button",{type:"button",onClick:function(t){return e.toggleMenuBar(t)},className:"navbar-burger ".concat(t?"is-active":""),"aria-label":"menu","aria-expanded":"false",style:{background:"none",border:"none",outline:"none"}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},r.a.createElement(o.b,{className:"navbar-item",to:"/home",onClick:function(){return e.closeMenuBar()}},"Home"),r.a.createElement(o.b,{className:"navbar-item",to:"/global-local-css",onClick:function(){return e.closeMenuBar()}},"Global & Local CSS"),r.a.createElement(o.b,{className:"navbar-item",to:"/typescript-counter",onClick:function(){return e.closeMenuBar()}},"TypeScript Counter"),r.a.createElement(o.b,{className:"navbar-item",to:"/skeleton-loading",onClick:function(){return e.closeMenuBar()}},"Skeleton Loading"),r.a.createElement(o.b,{className:"navbar-item",to:"/image-optimization",onClick:function(){return e.closeMenuBar()}},"Image Optimization"),r.a.createElement(o.b,{className:"navbar-item",to:"/login",onClick:function(){return e.closeMenuBar()}},"Auth"),r.a.createElement(o.b,{className:"navbar-item",to:"/contribute",onClick:function(){return e.closeMenuBar()}},"Contribute"),r.a.createElement("a",{className:"navbar-item has-text-danger",href:"https://www.reactpwa.com",onClick:function(){return e.closeMenuBar()}},"Visit ReactPWA.com")))))}}])&&l(t.prototype,n),a&&l(t,a),u}(a.PureComponent),f=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Demo for ReactPWA")," ","by"," ",r.a.createElement("a",{href:"https://www.atyantik.com"},"Atyantik Technologies"),". The source code is licensed"," ",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),".",r.a.createElement("br",null),'Visit the site"s Github Repo'," ",r.a.createElement("a",{href:"https://github.com/Atyantik/react-pwa"},"https://github.com/Atyantik/react-pwa"),"."),r.a.createElement("div",{className:"has-text-centered m-t-xl m-b-md"},r.a.createElement("a",{href:"https://opencollective.com/react-pwa/donate",target:"_blank",rel:"nofollow noopener noreferrer"},r.a.createElement("img",{alt:"open-collective",src:"https://opencollective.com/react-pwa/contribute/button@2x.png?color=blue",width:"300"})))))};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(p,null),t,r.a.createElement("br",null),r.a.createElement(f,null))}},651:function(e,t,n){e.exports={gray:"_1CHr-"}},655:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(648),c=n(651),l=n.n(c);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container p-b-md p-r-md p-l-md"},r.a.createElement("hr",null),r.a.createElement("h1",{className:"title"},"Global CSS"),r.a.createElement("div",{className:"green-background p-t-xl p-b-xl p-l-md p-r-xl"},"This is the section that uses the global css class `green-background` written in   ",r.a.createElement("code",null,"`src/resource/css/global.css`"),"   Any CSS served or included from `resources` folder does not change the className to hash!"," ","This one may include any library css such as `date-picker` or"," ","any general purpose css from `resources` folder."),r.a.createElement("hr",null),r.a.createElement("h2",{className:"title"},"Local CSS"),r.a.createElement("div",{className:"".concat(l.a.gray," p-t-xl p-b-xl p-l-md p-r-xl")},"This is the section that uses the local css class `gray` written in   ",r.a.createElement("code",null,"`src/resource/components/local-styles.css`"),"   Any CSS not served from `resources` folder does change the className to hash like"," ",r.a.createElement("code",null,l.a.gray),"."," ","This one may include any library css such as `date-picker` or"," ","any general purpose css from `resources` folder.")))}}}]);