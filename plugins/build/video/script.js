!function(){"use strict";function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var t="(prefers-reduced-motion: reduce)";function e(n){n.length=0}function i(n,t,e){return Array.prototype.slice.call(n,t,e)}function r(n){return n.bind.apply(n,[null].concat(i(arguments,1)))}var o=setTimeout,u=function(){};function a(n){return requestAnimationFrame(n)}function s(n,t){return typeof t===n}function c(n){return!v(n)&&s("object",n)}var l=Array.isArray,f=r(s,"function"),d=r(s,"string"),p=r(s,"undefined");function v(n){return null===n}function h(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function g(n){return l(n)?n:[n]}function m(n,t){g(n).forEach(t)}function y(n,t){return n.indexOf(t)>-1}function b(n,t){return n.push.apply(n,g(t)),n}function w(n,t,e){n&&m(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function E(n,t){w(n,d(t)?t.split(" "):t,!0)}function S(n,t){m(t,n.appendChild.bind(n))}function _(n,t){m(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function x(n,t){return h(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function C(n,t){var e=n?i(n.children):[];return t?e.filter((function(n){return x(n,t)})):e}function P(n,t){return t?C(n,t)[0]:n.firstElementChild}var k=Object.keys;function L(n,t,e){return n&&(e?k(n).reverse():k(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function A(n){return i(arguments,1).forEach((function(t){L(t,(function(e,i){n[i]=t[i]}))})),n}function D(n){return i(arguments,1).forEach((function(t){L(t,(function(t,e){l(t)?n[e]=t.slice():c(t)?n[e]=D({},c(n[e])?n[e]:{},t):n[e]=t}))})),n}function M(n,t){m(t||k(n),(function(t){delete n[t]}))}function z(n,t){m(n,(function(n){m(t,(function(t){n&&n.removeAttribute(t)}))}))}function O(n,t,e){c(t)?L(t,(function(t,e){O(n,e,t)})):m(n,(function(n){v(e)||""===e?z(n,t):n.setAttribute(t,String(e))}))}function N(n,t,e){var i=document.createElement(n);return t&&(d(t)?E(i,t):O(i,t)),e&&S(e,i),i}function I(n,t,e){if(p(e))return getComputedStyle(n)[t];v(e)||(n.style[t]=""+e)}function T(n,t){I(n,"display",t)}function F(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function j(n,t){return n.getAttribute(t)}function R(n,t){return n&&n.classList.contains(t)}function W(n){return n.getBoundingClientRect()}function X(n){m(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function G(n){return P((new DOMParser).parseFromString(n,"text/html").body)}function B(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function H(n,t){return n&&n.querySelector(t)}function q(n,t){return t?i(n.querySelectorAll(t)):[]}function Y(n,t){w(n,t,!1)}function U(n){return n.timeStamp}function K(n){return d(n)?n:n?n+"px":""}var J="splide";function V(n,t){if(!n)throw new Error("[splide] "+(t||""))}var Q=Math.min,Z=Math.max,$=Math.floor,nn=Math.ceil,tn=Math.abs;function en(n,t,e){return tn(n-t)<e}function rn(n,t,e,i){var r=Q(t,e),o=Z(t,e);return i?r<n&&n<o:r<=n&&n<=o}function on(n,t,e){var i=Q(t,e),r=Z(t,e);return Q(Z(i,n),r)}function un(n){return+(n>0)-+(n<0)}function an(n,t){return m(t,(function(t){n=n.replace("%s",""+t)})),n}function sn(n){return n<10?"0"+n:""+n}var cn={};function ln(){var n=[];function t(n,t,e){m(n,(function(n){n&&m(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){t(e,i,(function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,r,o):t.removeListener.bind(t,r);u?t.addEventListener(e,r,o):t.addListener(r),n.push([t,e,i,r,a])}))},unbind:function(e,i,r){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||r&&n[3]!==r)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),e(n)}}}var fn="mounted",dn="ready",pn="move",vn="moved",hn="click",gn="refresh",mn="updated",yn="resize",bn="resized",wn="scroll",En="scrolled",Sn="destroy",xn="navigation:mounted",Cn="autoplay:play",Pn="autoplay:pause",kn="lazyload:loaded",Ln="ei";function An(n){var t=n?n.event.bus:document.createDocumentFragment(),e=ln();return n&&n.event.on(Sn,e.destroy),A(e,{bus:t,on:function(n,i){e.bind(t,g(n).join(" "),(function(n){i.apply(i,l(n.detail)?n.detail:[])}))},off:r(e.unbind,t),emit:function(n){e.dispatch(t,n,i(arguments,1))}})}function Dn(n,t,e,i){var r,o,u=Date.now,s=0,c=!0,l=0;function f(){if(!c){if(s=n?Q((u()-r)/n,1):1,e&&e(s),s>=1&&(t(),r=u(),i&&++l>=i))return d();o=a(f)}}function d(){c=!0}function p(){o&&cancelAnimationFrame(o),s=0,o=0,c=!0}return{start:function(t){t||p(),r=u()-(t?s*n:0),c=!1,o=a(f)},rewind:function(){r=u(),s=0,e&&e(s)},pause:d,cancel:p,set:function(t){n=t},isPaused:function(){return c}}}var Mn="ArrowLeft",zn="ArrowRight",On="ArrowUp",Nn="ArrowDown",In="ttb",Tn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[On,zn],ArrowRight:[Nn,Mn]};var Fn="role",jn="tabindex",Rn="aria-controls",Wn="aria-current",Xn="aria-selected",Gn="aria-label",Bn="aria-labelledby",Hn="aria-hidden",qn="aria-orientation",Yn="aria-roledescription",Un="aria-live",Kn="aria-busy",Jn="aria-atomic",Vn=[Fn,jn,"disabled",Rn,Wn,Gn,Bn,Hn,qn,Yn],Qn=J,Zn="splide__track",$n="splide__slide",nt=$n+"--clone",tt="splide__arrows",et="splide__arrow",it=et+"--prev",rt=et+"--next",ot="splide__pagination",ut="is-active",at="is-prev",st="is-next",ct="is-visible",lt="is-loading",ft="is-focus-in",dt="is-overflow",pt=[ut,ct,at,st,lt,ft,dt],vt={slide:$n,clone:nt,arrows:tt,arrow:et,prev:it,next:rt,pagination:ot,page:"splide__pagination__page",spinner:"splide__spinner"},ht="touchmove mousemove",gt="touchend touchcancel mouseup click",mt="slide",yt="loop",bt="fade";var wt={passive:!1,capture:!0},Et={Spacebar:" ",Right:zn,Left:Mn,Up:On,Down:Nn};function St(n){return n=d(n)?n:n.key,Et[n]||n}var _t="keydown",xt="data-splide-lazy",Ct="data-splide-lazy-srcset",Pt=[" ","Enter"],kt=Object.freeze({__proto__:null,Media:function(n,e,i){var r=n.state,o=i.breakpoints||{},u=i.reducedMotion||{},a=ln(),s=[];function c(n){n&&a.destroy()}function l(n,t){var e=matchMedia(t);a.bind(e,"change",f),s.push([n,e])}function f(){var t=r.is(7),e=i.direction,o=s.reduce((function(n,t){return D(n,t[1].matches?t[0]:{})}),{});M(i),d(o),i.destroy?n.destroy("completely"===i.destroy):t?(c(!0),n.mount()):e!==i.direction&&n.refresh()}function d(t,e,o){D(i,t),e&&D(Object.getPrototypeOf(i),t),!o&&r.is(1)||n.emit(mn,i)}return{setup:function(){var n="min"===i.mediaQuery;k(o).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(u,t),f()},destroy:c,reduce:function(n){matchMedia(t).matches&&(n?D(i,u):M(i,k(u)))},set:d}},Direction:function(n,t,e){return{resolve:function(n,t,i){var r="rtl"!==(i=i||e.direction)||t?i===In?0:-1:1;return Tn[n]&&Tn[n][r]||n.replace(/width|left|right/i,(function(n,t){var e=Tn[n.toLowerCase()][r]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,i){var r,o,u,a=An(n),s=a.on,c=a.bind,l=n.root,d=i.i18n,p={},v=[],h=[],g=[];function m(){var n,t,e;r=_("."+Zn),o=P(r,".splide__list"),V(r&&o,"A track/list element is missing."),b(v,C(o,".splide__slide:not(."+nt+")")),L({arrows:tt,pagination:ot,prev:it,next:rt,bar:"splide__progress__bar",toggle:"splide__toggle"},(function(n,t){p[t]=_("."+n)})),A(p,{root:l,track:r,list:o,slides:v}),t=l.id||""+(n=J)+sn(cn[n]=(cn[n]||0)+1),e=i.role,l.id=t,r.id=r.id||t+"-track",o.id=o.id||t+"-list",!j(l,Fn)&&"SECTION"!==l.tagName&&e&&O(l,Fn,e),O(l,Yn,d.carousel),O(o,Fn,"presentation"),S()}function y(n){var t=Vn.concat("style");e(v),Y(l,h),Y(r,g),z([r,o],t),z(l,n?t:["style",Yn])}function S(){Y(l,h),Y(r,g),h=k(Qn),g=k(Zn),E(l,h),E(r,g),O(l,Gn,i.label),O(l,Bn,i.labelledby)}function _(n){var t=H(l,n);return t&&function(n,t){if(f(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!x(e,t);)e=e.parentElement;return e}(t,".splide")===l?t:void 0}function k(n){return[n+"--"+i.type,n+"--"+i.direction,i.drag&&n+"--draggable",i.isNavigation&&n+"--nav",n===Qn&&ut]}return A(p,{setup:m,mount:function(){s(gn,y),s(gn,m),s(mn,S),c(document,"touchstart mousedown keydown",(function(n){u="keydown"===n.type}),{capture:!0}),c(l,"focusin",(function(){w(l,ft,!!u)}))},destroy:y})},Slides:function(n,t,i){var o=An(n),u=o.on,a=o.emit,s=o.bind,c=t.Elements,l=c.slides,p=c.list,v=[];function b(){l.forEach((function(n,t){k(n,t,-1)}))}function C(){A((function(n){n.destroy()})),e(v)}function k(t,e,i){var o=function(n,t,e,i){var o,u=An(n),a=u.on,s=u.emit,c=u.bind,l=n.Components,f=n.root,d=n.options,p=d.isNavigation,v=d.updateOnMove,h=d.i18n,g=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=j(i,"style"),E=j(i,Gn),S=e>-1,_=P(i,".splide__slide__container");function x(){var r=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");O(i,Gn,an(h.slideX,(S?e:t)+1)),O(i,Rn,r),O(i,Fn,m?"button":""),m&&z(i,Yn)}function C(){o||k()}function k(){if(!o){var e=n.index;(r=L())!==R(i,ut)&&(w(i,ut,r),O(i,Wn,p&&r||""),s(r?"active":"inactive",A)),function(){var t=function(){if(n.is(bt))return L();var t=W(l.Elements.track),e=W(i),r=y("left",!0),o=y("right",!0);return $(t[r])<=nn(e[r])&&$(e[o])<=nn(t[o])}(),e=!t&&(!L()||S);if(n.state.is([4,5])||O(i,Hn,e||""),O(q(i,d.focusableNodes||""),jn,e?-1:""),m&&O(i,jn,e?-1:0),t!==R(i,ct)&&(w(i,ct,t),s(t?"visible":"hidden",A)),!t&&document.activeElement===i){var r=l.Slides.getAt(n.index);r&&F(r.slide)}}(),w(i,at,t===e-1),w(i,st,t===e+1)}var r}function L(){var i=n.index;return i===t||d.cloneStatus&&i===e}var A={index:t,slideIndex:e,slide:i,container:_,isClone:S,mount:function(){S||(i.id=f.id+"-slide"+sn(t+1),O(i,Fn,g?"tabpanel":"group"),O(i,Yn,h.slide),O(i,Gn,E||an(h.slideLabel,[t+1,n.length]))),c(i,"click",r(s,hn,A)),c(i,"keydown",r(s,"sk",A)),a([vn,"sh",En],k),a(xn,x),v&&a(pn,C)},destroy:function(){o=!0,u.destroy(),Y(i,pt),z(i,Vn),O(i,"style",b),O(i,Gn,E||"")},update:k,style:function(n,t,e){I(e&&_||i,n,t)},isWithin:function(e,i){var r=tn(e-t);return S||!d.rewind&&!n.is(yt)||(r=Q(r,n.length-r)),r<=i}};return A}(n,e,i,t);o.mount(),v.push(o),v.sort((function(n,t){return n.index-t.index}))}function L(n){return n?D((function(n){return!n.isClone})):v}function A(n,t){L(t).forEach(n)}function D(n){return v.filter(f(n)?n:function(t){return d(n)?x(t.slide,n):y(g(n),t.index)})}return{mount:function(){b(),u(gn,C),u(gn,b)},destroy:C,update:function(){A((function(n){n.update()}))},register:k,get:L,getIn:function(n){var e=t.Controller,r=e.toIndex(n),o=e.hasFocus()?1:i.perPage;return D((function(n){return rn(n.index,r,r+o-1)}))},getAt:function(n){return D(n)[0]},add:function(n,t){m(n,(function(n){if(d(n)&&(n=G(n)),h(n)){var e=l[t];e?_(n,e):S(p,n),E(n,i.classes.slide),o=n,u=r(a,yn),c=q(o,"img"),(f=c.length)?c.forEach((function(n){s(n,"load error",(function(){--f||u()}))})):u()}var o,u,c,f})),a(gn)},remove:function(n){X(D(n).map((function(n){return n.slide}))),a(gn)},forEach:A,filter:D,style:function(n,t,e){A((function(i){i.style(n,t,e)}))},getLength:function(n){return n?l.length:v.length},isEnough:function(){return v.length>i.perPage}}},Layout:function(n,t,e){var i,o,u,a=An(n),s=a.on,l=a.bind,f=a.emit,d=t.Slides,p=t.Direction.resolve,v=t.Elements,h=v.root,g=v.track,m=v.list,y=d.getAt,b=d.style;function E(){i=e.direction===In,I(h,"maxWidth",K(e.width)),I(g,p("paddingLeft"),_(!1)),I(g,p("paddingRight"),_(!0)),S(!0)}function S(n){var t,r=W(h);(n||o.width!==r.width||o.height!==r.height)&&(I(g,"height",(t="",i&&(V(t=x(),"height or heightRatio is missing."),t="calc("+t+" - "+_(!1)+" - "+_(!0)+")"),t)),b(p("marginRight"),K(e.gap)),b("width",e.autoWidth?null:K(e.fixedWidth)||(i?"":C())),b("height",K(e.fixedHeight)||(i?e.autoHeight?null:C():x()),!0),o=r,f(bn),u!==(u=M())&&(w(h,dt,u),f("overflow",u)))}function _(n){var t=e.padding,i=p(n?"right":"left");return t&&K(t[i]||(c(t)?0:t))||"0px"}function x(){return K(e.height||W(m).width*e.heightRatio)}function C(){var n=K(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function P(){return W(m)[p("width")]}function k(n,t){var e=y(n||0);return e?W(e.slide)[p("width")]+(t?0:D()):0}function L(n,t){var e=y(n);if(e){var i=W(e.slide)[p("right")],r=W(m)[p("left")];return tn(i-r)+(t?0:D())}return 0}function A(t){return L(n.length-1)-L(0)+k(0,t)}function D(){var n=y(0);return n&&parseFloat(I(n.slide,p("marginRight")))||0}function M(){return n.is(bt)||A(!0)>P()}return{mount:function(){var n,t;E(),l(window,"resize load",(n=r(f,yn),t=Dn(0,n,null,1),function(){t.isPaused()&&t.start()})),s([mn,gn],E),s(yn,S)},resize:S,listSize:P,slideSize:k,sliderSize:A,totalSize:L,getPadding:function(n){return parseFloat(I(g,p("padding"+(n?"Right":"Left"))))||0},isOverflow:M}},Clones:function(n,t,i){var r,o=An(n),u=o.on,a=t.Elements,s=t.Slides,c=t.Direction.resolve,l=[];function f(){u(gn,d),u([mn,yn],h),(r=g())&&(function(t){var e=s.get().slice(),r=e.length;if(r){for(;e.length<t;)b(e,e);b(e.slice(-t),e.slice(0,t)).forEach((function(o,u){var c=u<t,f=function(t,e){var r=t.cloneNode(!0);return E(r,i.classes.clone),r.id=n.root.id+"-clone"+sn(e+1),r}(o.slide,u);c?_(f,e[0].slide):S(a.list,f),b(l,f),s.register(f,u-t+(c?0:r),o.index)}))}}(r),t.Layout.resize(!0))}function d(){v(),f()}function v(){X(l),e(l),o.destroy()}function h(){var n=g();r!==n&&(r<n||!n)&&o.emit(gn)}function g(){var e=i.clones;if(n.is(yt)){if(p(e)){var r=i[c("fixedWidth")]&&t.Layout.slideSize(0);e=r&&nn(W(a.track)[c("width")]/r)||i[c("autoWidth")]&&n.length||2*i.perPage}}else e=0;return e}return{mount:f,destroy:v}},Move:function(n,t,e){var i,r=An(n),o=r.on,u=r.emit,a=n.state.set,s=t.Layout,c=s.slideSize,l=s.getPadding,f=s.totalSize,d=s.listSize,v=s.sliderSize,h=t.Direction,g=h.resolve,m=h.orient,y=t.Elements,b=y.list,w=y.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),S(n.index),t.Slides.update())}function S(n){_(k(n,!0))}function _(e,i){if(!n.is(bt)){var r=i?e:function(e){if(n.is(yt)){var i=P(e),r=i>t.Controller.getEnd();(i<0||r)&&(e=x(e,r))}return e}(e);I(b,"transform","translate"+g("X")+"("+r+"px)"),e!==r&&u("sh")}}function x(n,t){var e=n-A(t),i=v();return n-m(i*(nn(tn(e)/i)||1))*(t?1:-1)}function C(){_(L(),!0),i.cancel()}function P(n){for(var e=t.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,a=tn(k(u,!0)-n);if(!(a<=r))break;r=a,i=u}return i}function k(t,i){var r=m(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-c(n,!0))/2:+t*c(n)||0}(t));return i?function(t){return e.trimSpace&&n.is(mt)&&(t=on(t,0,m(v(!0)-d()))),t}(r):r}function L(){var n=g("left");return W(b)[n]-W(w)[n]+m(l(!1))}function A(n){return k(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,o([fn,bn,mn,gn],E)},move:function(n,t,e,r){var o,s;n!==t&&(o=n>e,s=m(x(L(),o)),o?s>=0:s<=b[g("scrollWidth")]-W(w)[g("width")])&&(C(),_(x(L(),n>e),!0)),a(4),u(pn,t,e,n),i.start(t,(function(){a(3),u(vn,t,e,n),r&&r()}))},jump:S,translate:_,shift:x,cancel:C,toIndex:P,toPosition:k,getPosition:L,getLimit:A,exceededLimit:function(n,t){t=p(t)?L():t;var e=!0!==n&&m(t)<m(A(!1)),i=!1!==n&&m(t)>m(A(!0));return e||i},reposition:E}},Controller:function(n,t,e){var i,o,u,a,s=An(n),c=s.on,l=s.emit,f=t.Move,v=f.getPosition,h=f.getLimit,g=f.toPosition,m=t.Slides,y=m.isEnough,b=m.getLength,w=e.omitEnd,E=n.is(yt),S=n.is(mt),_=r(A,!1),x=r(A,!0),C=e.start||0,P=C;function k(){o=b(!0),u=e.perMove,a=e.perPage,i=z();var n=on(C,0,w?i:o-1);n!==C&&(C=n,f.reposition())}function L(){i!==z()&&l(Ln)}function A(n,t){var e=u||(T()?1:a),r=D(C+e*(n?-1:1),C,!(u||T()));return-1===r&&S&&!en(v(),h(!n),1)?n?0:i:t?r:M(r)}function D(t,r,s){if(y()||T()){var c=function(t){if(S&&"move"===e.trimSpace&&t!==C)for(var i=v();i===g(t,!0)&&rn(t,0,n.length-1,!e.rewind);)t<C?--t:++t;return t}(t);c!==t&&(r=t,t=c,s=!1),t<0||t>i?t=u||!rn(0,t,r,!0)&&!rn(i,r,t,!0)?E?s?t<0?-(o%a||a):o:t:e.rewind?t<0?i:0:-1:O(N(t)):s&&t!==r&&(t=O(N(r)+(t<r?-1:1)))}else t=-1;return t}function M(n){return E?(n+o)%o||0:n}function z(){for(var n=o-(T()||E&&u?1:a);w&&n-- >0;)if(g(o-1,!0)!==g(n,!0)){n++;break}return on(n,0,o-1)}function O(n){return on(T()?n:a*n,0,i)}function N(n){return T()?Q(n,i):$((n>=i?o-1:n)/a)}function I(n){n!==C&&(P=C,C=n)}function T(){return!p(e.focus)||e.isNavigation}function F(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){k(),c([mn,gn,Ln],k),c(bn,L)},go:function(n,t,e){if(!F()){var r=function(n){var t=C;if(d(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],r=e[1],o=e[2];"+"===r||"-"===r?t=D(C+ +(""+r+(+o||1)),C):">"===r?t=o?O(+o):_(!0):"<"===r&&(t=x(!0))}else t=E?n:on(n,0,i);return t}(n),o=M(r);o>-1&&(t||o!==C)&&(I(o),f.move(r,o,P,e))}},scroll:function(n,e,r,o){t.Scroll.scroll(n,e,r,(function(){var n=M(f.toIndex(v()));I(w?Q(n,i):n),o&&o()}))},getNext:_,getPrev:x,getAdjacent:A,getEnd:z,setIndex:I,getIndex:function(n){return n?P:C},toIndex:O,toPage:N,toDest:function(n){var t=f.toIndex(n);return S?on(t,0,i):t},hasFocus:T,isBusy:F}},Arrows:function(n,t,e){var i,o,u=An(n),a=u.on,s=u.bind,c=u.emit,l=e.classes,f=e.i18n,d=t.Elements,p=t.Controller,v=d.arrows,h=d.track,g=v,m=d.prev,y=d.next,b={};function w(){var n;!(n=e.arrows)||m&&y||(g=v||N("div",l.arrows),m=k(!0),y=k(!1),i=!0,S(g,[m,y]),!v&&_(g,h)),m&&y&&(A(b,{prev:m,next:y}),T(g,n?"":"none"),E(g,o=tt+"--"+e.direction),n&&(a([fn,vn,gn,En,Ln],L),s(y,"click",r(P,">")),s(m,"click",r(P,"<")),L(),O([m,y],Rn,h.id),c("arrows:mounted",m,y))),a(mn,x)}function x(){C(),w()}function C(){u.destroy(),Y(g,o),i?(X(v?[m,y]:g),m=y=null):z([m,y],Vn)}function P(n){p.go(n,!0)}function k(n){return G('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function L(){if(m&&y){var t=n.index,e=p.getPrev(),i=p.getNext(),r=e>-1&&t<e?f.last:f.prev,o=i>-1&&t>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,O(m,Gn,r),O(y,Gn,o),c("arrows:updated",m,y,e,i)}}return{arrows:b,mount:w,destroy:C,update:L}},Autoplay:function(n,t,e){var i,r,o=An(n),u=o.on,a=o.bind,s=o.emit,c=Dn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&I(t,"width",100*n+"%"),s("autoplay:playing",n)})),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,v=d.toggle,h=e.autoplay,g="pause"===h;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=g=!1,E(),s(Cn))}function y(n){void 0===n&&(n=!0),g=!!n,E(),l()||(c.pause(),s(Pn))}function b(){g||(i||r?y(!1):m())}function E(){v&&(w(v,ut,!g),O(v,Gn,e.i18n[g?"play":"pause"]))}function S(n){var i=t.Slides.getAt(n);c.set(i&&+j(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){h&&(e.pauseOnHover&&a(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()})),e.pauseOnFocus&&a(p,"focusin focusout",(function(n){r="focusin"===n.type,b()})),v&&a(v,"click",(function(){g?m():y(!0)})),u([pn,wn,gn],c.rewind),u(pn,S),v&&O(v,Rn,f.track.id),g||m(),E())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=An(n).on;function o(n){t.Slides.forEach((function(t){var e=P(t.container||t.slide,"img");e&&e.src&&u(n,e,t)}))}function u(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),T(t,n?"none":"")}return{mount:function(){e.cover&&(i(kn,r(u,!0)),i([fn,mn,gn],r(o,!0)))},destroy:r(o,!1)}},Scroll:function(n,t,e){var i,o,u=An(n),a=u.on,s=u.emit,c=n.state.set,l=t.Move,f=l.getPosition,d=l.getLimit,p=l.exceededLimit,v=l.translate,h=n.is(mt),g=1;function m(n,e,u,a,d){var v=f();if(w(),u&&(!h||!p())){var m=t.Layout.sliderSize(),E=un(n)*m*$(tn(n)/m)||0;n=l.toPosition(t.Controller.toDest(n%m))+E}var S=en(v,n,1);g=1,e=S?0:e||Z(tn(n-v)/1.5,800),o=a,i=Dn(e,y,r(b,v,n,d),1),c(5),s(wn),i.start()}function y(){c(3),o&&o(),s(En)}function b(n,t,i,r){var u,a,s=f(),c=(n+(t-n)*(u=r,(a=e.easingFunc)?a(u):1-Math.pow(1-u,4))-s)*g;v(s+c),h&&!i&&p()&&(g*=.6,tn(c)<10&&m(d(p(!0)),600,!1,o,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){a(pn,w),a([mn,gn],E)},destroy:w,scroll:m,cancel:E}},Drag:function(n,t,e){var i,r,o,a,s,l,f,d,p=An(n),v=p.on,h=p.emit,g=p.bind,m=p.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,S=t.Elements.track,_=t.Media.reduce,C=t.Direction,P=C.resolve,k=C.orient,L=b.getPosition,A=b.exceededLimit,D=!1;function M(){var n=e.drag;G(!n),a="free"===n}function z(n){if(l=!1,!f){var t=X(n);i=n.target,r=e.noDrag,x(i,".splide__pagination__page, ."+et)||r&&x(i,r)||!t&&n.button||(E.isBusy()?B(n,!0):(d=t?S:window,s=y.is([4,5]),o=null,g(d,ht,O,wt),g(d,gt,N,wt),b.cancel(),w.cancel(),T(n)))}var i,r}function O(t){if(y.is(6)||(y.set(6),h("drag")),t.cancelable)if(s){b.translate(i+F(t)/(D&&n.is(mt)?5:1));var r=j(t)>200,o=D!==(D=A());(r||o)&&T(t),l=!0,h("dragging"),B(t)}else(function(n){return tn(F(n))>tn(F(n,!0))})(t)&&(s=function(n){var t=e.dragMinThreshold,i=c(t),r=i&&t.mouse||0,o=(i?t.touch:+t)||10;return tn(F(n))>(X(n)?o:r)}(t),B(t))}function N(i){y.is(6)&&(y.set(3),h("dragged")),s&&(function(i){var r=function(t){if(n.is(yt)||!D){var e=j(t);if(e&&e<200)return F(t)/e}return 0}(i),o=function(n){return L()+un(n)*Q(tn(n)*(e.flickPower||600),a?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(r),u=e.rewind&&e.rewindByDrag;_(!1),a?E.scroll(o,0,e.snap):n.is(bt)?E.go(k(un(r))<0?u?"<":"-":u?">":"+"):n.is(mt)&&D&&u?E.go(A(!0)?">":"<"):E.go(E.toDest(o),!0),_(!0)}(i),B(i)),m(d,ht,O),m(d,gt,N),s=!1}function I(n){!f&&l&&B(n,!0)}function T(n){o=r,r=n,i=L()}function F(n,t){return W(n,t)-W(R(n),t)}function j(n){return U(n)-U(R(n))}function R(n){return r===n&&o||r}function W(n,t){return(X(n)?n.changedTouches[0]:n)["page"+P(t?"Y":"X")]}function X(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function G(n){f=n}return{mount:function(){g(S,ht,u,wt),g(S,gt,u,wt),g(S,"touchstart mousedown",z,wt),g(S,"click",I,{capture:!0}),g(S,"dragstart",B),v([fn,mn],M)},disable:G,isDragging:function(){return s}}},Keyboard:function(n,t,e){var i,r,u=An(n),a=u.on,s=u.bind,c=u.unbind,l=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:l,s(i,_t,h))}function p(){c(i,_t)}function v(){var n=r;r=!0,o((function(){r=n}))}function h(t){if(!r){var e=St(t);e===f(Mn)?n.go("<"):e===f(zn)&&n.go(">")}}return{mount:function(){d(),a(mn,p),a(mn,d),a(pn,v)},destroy:p,disable:function(n){r=n}}},LazyLoad:function(n,t,i){var o=An(n),u=o.on,a=o.off,s=o.bind,c=o.emit,l="sequential"===i.lazyLoad,f=[vn,En],d=[];function p(){e(d),t.Slides.forEach((function(n){q(n.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(t){var e=j(t,xt),r=j(t,Ct);if(e!==t.src||r!==t.srcset){var o=i.classes.spinner,u=t.parentElement,a=P(u,"."+o)||N("span",o,u);d.push([t,n,a]),t.src||T(t,"none")}}))})),l?m():(a(f),u(f,v),v())}function v(){(d=d.filter((function(t){var e=i.perPage*((i.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,e)||h(t)}))).length||a(f)}function h(n){var t=n[0];E(n[1].slide,lt),s(t,"load error",r(g,n)),O(t,"src",j(t,xt)),O(t,"srcset",j(t,Ct)),z(t,xt),z(t,Ct)}function g(n,t){var e=n[0],i=n[1];Y(i.slide,lt),"error"!==t.type&&(X(n[2]),T(e,""),c(kn,e,i),c(yn)),l&&m()}function m(){d.length&&h(d.shift())}return{mount:function(){i.lazyLoad&&(p(),u(gn,p))},destroy:r(e,d),check:v}},Pagination:function(n,t,o){var u,a,s=An(n),c=s.on,l=s.emit,f=s.bind,d=t.Slides,p=t.Elements,v=t.Controller,h=v.hasFocus,g=v.getIndex,m=v.go,y=t.Direction.resolve,b=p.pagination,w=[];function S(){u&&(X(b?i(u.children):u),Y(u,a),e(w),u=null),s.destroy()}function _(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=St(t),r=C(),o=-1;i===y(zn,!1,r)?o=++n%e:i===y(Mn,!1,r)?o=(--n+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=w[o];u&&(F(u.button),m(">"+o),B(t,!0))}function C(){return o.paginationDirection||o.direction}function P(n){return w[v.toPage(n)]}function k(){var n=P(g(!0)),t=P(g());if(n){var e=n.button;Y(e,ut),z(e,Xn),O(e,jn,-1)}if(t){var i=t.button;E(i,ut),O(i,Xn,!0),O(i,jn,"")}l("pagination:updated",{list:u,items:w},n,t)}return{items:w,mount:function t(){S(),c([mn,gn,Ln],t);var e=o.pagination;b&&T(b,e?"":"none"),e&&(c([pn,wn,En],k),function(){var t=n.length,e=o.classes,i=o.i18n,s=o.perPage,c=h()?v.getEnd()+1:nn(t/s);E(u=b||N("ul",e.pagination,p.track.parentElement),a=ot+"--"+C()),O(u,Fn,"tablist"),O(u,Gn,i.select),O(u,qn,C()===In?"vertical":"");for(var l=0;l<c;l++){var g=N("li",null,u),m=N("button",{class:e.page,type:"button"},g),y=d.getIn(l).map((function(n){return n.slide.id})),S=!h()&&s>1?i.pageX:i.slideX;f(m,"click",r(_,l)),o.paginationKeyboard&&f(m,"keydown",r(x,l)),O(g,Fn,"presentation"),O(m,Fn,"tab"),O(m,Rn,y.join(" ")),O(m,Gn,an(S,l+1)),O(m,jn,-1),w.push({li:g,button:m,page:l})}}(),k(),l("pagination:mounted",{list:u,items:w},P(n.index)))},destroy:S,getAt:P,update:k}},Sync:function(n,t,i){var o=i.isNavigation,u=i.slideFocus,a=[];function s(){var t,e;n.splides.forEach((function(t){t.isParent||(l(n,t.splide),l(t.splide,n))})),o&&((e=(t=An(n)).on)(hn,d),e("sk",v),e([fn,mn],f),a.push(t),t.emit(xn,n.splides))}function c(){a.forEach((function(n){n.destroy()})),e(a)}function l(n,t){var e=An(n);e.on(pn,(function(n,e,i){t.go(t.is(yt)?i:n)})),a.push(e)}function f(){O(t.Elements.list,qn,i.direction===In?"vertical":"")}function d(t){n.go(t.index)}function v(n,t){y(Pt,St(t))&&(d(n),B(t))}return{setup:r(t.Media.set,{slideFocus:p(u)?o:u},!0),mount:s,destroy:c,remount:function(){c(),s()}}},Wheel:function(n,t,e){var i=An(n).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,u=o<0,a=U(i),s=e.wheelMinThreshold||0,c=e.wheelSleep||0;tn(o)>s&&a-r>c&&(n.go(u?"<":">"),r=a),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(u)&&B(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",o,wt)}}},Live:function(n,t,e){var i=An(n).on,o=t.Elements.track,u=e.live&&!e.isNavigation,a=N("span","splide__sr"),s=Dn(90,r(c,!1));function c(n){O(o,Kn,n),n?(S(o,a),s.start()):(X(a),s.cancel())}function l(n){u&&O(o,Un,n?"off":"polite")}return{mount:function(){u&&(l(!t.Autoplay.isPaused()),O(o,Jn,!0),a.textContent="…",i(Cn,r(l,!0)),i(Pn,r(l,!1)),i([vn,En],r(c,!0)))},disable:l,destroy:function(){z(o,[Un,Jn,Kn]),X(a)}}}}),Lt={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:vt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function At(n,t,e){var i=t.Slides;function r(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){An(n).on([fn,gn],r)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),o(t)},cancel:u}}function Dt(n,t,e){var i,o=t.Move,u=t.Controller,a=t.Scroll,s=t.Elements.list,c=r(I,s,"transition");function l(){c(""),a.cancel()}return{mount:function(){An(n).bind(s,"transitionend",(function(n){n.target===s&&i&&(l(),i())}))},start:function(t,r){var s=o.toPosition(t,!0),l=o.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(mt)&&i){var r=u.getIndex(!0),o=u.getEnd();if(0===r&&t>=o||r>=o&&0===t)return i}return e.speed}(t);tn(s-l)>=1&&f>=1?e.useScroll?a.scroll(s,f,!1,r):(c("transform "+f+"ms "+e.easing),o.translate(s,!0),i=r):(o.jump(t),r())},cancel:l}}var Mt=function(){function t(n,e){var i;this.event=An(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return y(g(n),i)}}),this.splides=[],this._o={},this._E={};var r=d(n)?H(document,n):n;V(r,r+" is invalid."),this.root=r,e=D({label:j(r,Gn)||"",labelledby:j(r,Bn)||""},Lt,t.defaults,e||{});try{D(e,JSON.parse(j(r,"data-splide")))}catch(n){V(!1,"Invalid JSON")}this._o=Object.create(D({},e))}var r,o,u=t.prototype;return u.mount=function(n,t){var e=this,i=this.state,r=this.Components;return V(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=t||this._T||(this.is(bt)?At:Dt),this._E=n||this._E,L(A({},kt,this._E,{Transition:this._T}),(function(n,t){var i=n(e,r,e._o);r[t]=i,i.setup&&i.setup()})),L(r,(function(n){n.mount&&n.mount()})),this.emit(fn),E(this.root,"is-initialized"),i.set(3),this.emit(dn),this},u.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},u.go=function(n){return this._C.Controller.go(n),this},u.on=function(n,t){return this.event.on(n,t),this},u.off=function(n){return this.event.off(n),this},u.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(i(arguments,1))),this},u.add=function(n,t){return this._C.Slides.add(n,t),this},u.remove=function(n){return this._C.Slides.remove(n),this},u.is=function(n){return this._o.type===n},u.refresh=function(){return this.emit(gn),this},u.destroy=function(n){void 0===n&&(n=!0);var t=this.event,i=this.state;return i.is(1)?An(this).on(dn,this.destroy.bind(this,n)):(L(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(Sn),t.destroy(),n&&e(this.splides),i.set(7)),this},r=t,(o=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&n(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}(),zt=Mt;zt.defaults={},zt.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7},document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("#slider-10").forEach((n=>{new zt(n,{}).mount()}))}))}();