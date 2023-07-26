(()=>{"use strict";var n={74:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,"#home {\n    position: relative;\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #00000098;\n}\n\n/* IMG CREDIT https://unsplash.com/@nestandlove */\n#home::before {    \n    content: \"\";\n    background-image: url('https://images.unsplash.com/photo-1677785010004-9a82a42a7283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.75;\n    z-index: -50;\n}\n\n#home-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #ddd;\n}\n\n#home-header hr {\n    width: 100%;\n}\n\n#home-header .btn {\n    margin-top: 38px;\n}",""]);const s=a},477:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,"",""]);const s=a},254:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,"header {\n    position: fixed;\n    background-color: #f5ede9;\n    z-index: 100;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    height: 50px;\n    border-bottom: 1px solid red;\n}\n\nnav ul {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    gap: 50px;\n}\n\nnav ul li {\n    height: 100%;\n    width: 100px;\n}\n\nnav ul a {\n    cursor: pointer;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nnav ul a:hover {\n    background-color: #dac8bf;\n}",""]);const s=a},917:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=a},426:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,"* {\n    box-sizing: border-box;\n}\n\nhtml, button {\n    font-family: 'Times New Roman', Times, serif;\n}\n\nbody {\n    width: 100%;\n}\n\nh1 {\n    font-size: 3rem;\n    font-weight: bold;\n}\n\nh2 {\n    font-size: 2.2rem;\n    font-weight: bold;\n}\n\nh4 {\n    font-size: 1.6rem;\n}\n\n.btn {\n    padding: 10px 20px;\n    border-radius: 6px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    font-size: 0.95rem;\n}\n\n.btn:hover {\n    background-color: #ddd;\n}\n\n.btn:active {\n    transform: scale(0.98);\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n    padding-top: 50px;\n}\n\n#menu-container {\n    max-width: 600px;\n    width: 100%;\n    margin: 0 auto;\n    margin-top: 60px;\n    padding: 40px 26px;\n    background-color: #e2cbbc;\n    height: 100%;\n    margin-bottom: 50px;\n    border-radius: 10px;\n}\n\n#menu-container h2 {\n    text-align: center;\n}\n\n#menu-container hr {\n    width: 20%;\n    border-color: #c9af9e;\n}\n\n#item-boxes {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#item-boxes hr {\n    width: 80%;\n}\n\n#item-boxes .item-box {\n    display: flex;\n    justify-content: space-between;\n}\n\n.item-box .item-description {\n    max-width: 300px;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var d=n[s],c=i.base?d[0]+i.base:d[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var d=i(n,o),c=0;c<r.length;c++){var l=t(r[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),o=t.n(i),r=t(569),a=t.n(r),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),m=t(917),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(426),v={};v.styleTagTransform=u(),v.setAttributes=d(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var b=t(254),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var x=t(74),y={};y.styleTagTransform=u(),y.setAttributes=d(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),e()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;var w=t(477),z={};z.styleTagTransform=u(),z.setAttributes=d(),z.insert=a().bind(null,"head"),z.domAPI=o(),z.insertStyleElement=l(),e()(w.Z,z),w.Z&&w.Z.locals&&w.Z.locals;const T=function(){document.getElementById("content").innerHTML='<div id="menu-container">\n        <div id="menu">\n            <h2>Menu</h2>\n            <hr>\n            <div id="item-boxes">\n                <div class="item-box">\n                    <div class="item-description">\n                        <h4>Pepperoni Pizza</h4>\n                        <p>The classic pizza. The one above all.</p>\n                    </div>\n                    <div class="item-price">R76.99</div>\n                </div>\n                <hr>\n                <div class="item-box">\n                    <div class="item-description">\n                        <h4>Pineapple Pizza</h4>\n                        <p>The most debated pizza. Does pineapple and dough go together?!</p>\n                    </div>\n                    <div class="item-price">R46.99</div>\n                </div>\n                <hr>\n                <div class="item-box">\n                    <div class="item-description">\n                        <h4>Vegetarian Pizza</h4>\n                        <p>A pizza as the name states. Has no meat.</p>\n                    </div>\n                    <div class="item-price">R46.99</div>\n                </div>\n                <hr>\n                <div class="item-box">\n                    <div class="item-description">\n                        <h4>Vegetarian Pizza</h4>\n                        <p>A pizza as the name states. Has no meat.</p>\n                    </div>\n                    <div class="item-price">R46.99</div>\n                </div>\n                <hr>\n                <div class="item-box">\n                    <div class="item-description">\n                        <h4>Vegetarian Pizza</h4>\n                        <p>A pizza as the name states. Has no meat.</p>\n                    </div>\n                    <div class="item-price">R46.99</div>\n                </div>\n            </div>\n        </div>\n    </div>'},Z=function(){document.getElementById("content").innerHTML='<div id="home">\n        <div id="home-header">\n            <h1>Affordable and Delicious</h1>\n            <hr>\n            <h4>Sweet doughy deals and custom orders!</h4>\n            <button class="btn">The Menu</button>\n        </div>\n    </div>',document.querySelector("#home-header .btn").addEventListener("click",T)};!function(){const n=document.getElementById("nav-home"),e=document.getElementById("nav-menu");n.addEventListener("click",Z),e.addEventListener("click",T)}(),Z()})()})();