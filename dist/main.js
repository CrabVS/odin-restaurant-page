(()=>{"use strict";var n={74:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"#home {\n    position: relative;\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #00000098;\n}\n\n/* IMG CREDIT https://unsplash.com/@nestandlove */\n#home::before {    \n    content: \"\";\n    background-image: url('https://images.unsplash.com/photo-1677785010004-9a82a42a7283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.75;\n    z-index: -50;\n}\n\n#home-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #ddd;\n}\n\n#home-header hr {\n    width: 100%;\n}\n\n#home-header .btn {\n    margin-top: 38px;\n}",""]);const s=a},254:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"header {\n    position: fixed;\n    background-color: #f5ede9;\n    z-index: 100;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    height: 50px;\n    border-bottom: 1px solid red;\n}\n\nnav ul {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    gap: 50px;\n}\n\nnav ul li {\n    height: 100%;\n    width: 100px;\n}\n\nnav ul a {\n    cursor: pointer;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nnav ul a:hover {\n    background-color: #dac8bf;\n}",""]);const s=a},917:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=a},426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"* {\n    box-sizing: border-box;\n}\n\nhtml, button {\n    font-family: 'Times New Roman', Times, serif;\n}\n\nbody {\n    width: 100%;\n}\n\nh1 {\n    font-size: 3rem;\n    font-weight: bold;\n}\n\nh2 {\n    font-size: 2.2rem;\n    font-weight: bold;\n}\n\nh4 {\n    font-size: 1.6rem;\n}\n\n.btn {\n    padding: 10px 20px;\n    border-radius: 6px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    font-size: 0.95rem;\n}\n\n.btn:hover {\n    background-color: #ddd;\n}\n\n.btn:active {\n    transform: scale(0.98);\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n    padding-top: 50px;\n}\n\n#menu-container {\n    max-width: 600px;\n    width: 100%;\n    margin: 0 auto;\n    margin-top: 60px;\n    padding: 40px 26px;\n    background-color: #e2cbbc;\n    height: 100%;\n    margin-bottom: 50px;\n    border-radius: 10px;\n}\n\n#menu-container h2 {\n    text-align: center;\n}\n\n#menu-container hr {\n    width: 20%;\n    border-color: #c9af9e;\n}\n\n#item-boxes {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#item-boxes hr {\n    width: 80%;\n}\n\n#item-boxes .item-box {\n    display: flex;\n    justify-content: space-between;\n}\n\n.item-box .item-description {\n    max-width: 300px;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(917),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(426),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),e()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;var v=t(254),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;var x=t(74),y={};y.styleTagTransform=p(),y.setAttributes=c(),y.insert=a().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=d(),e()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals})()})();