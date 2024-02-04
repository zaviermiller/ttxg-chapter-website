(self.webpackChunkcw_gatsby=self.webpackChunkcw_gatsby||[]).push([[691],{400:function(e,n,t){"use strict";t.r(n),t.d(n,{Head:function(){return g},default:function(){return p}});var r=t(959);const a=e=>"undefined"!=typeof window&&window.matchMedia(e).matches;function i(e){const[n,t]=(0,r.useState)(a(e));return(0,r.useEffect)((()=>{function n(){t(a(e))}const r=window.matchMedia(e);return n(),r.addListener?r.addListener(n):r.addEventListener("change",n),()=>{r.removeListener?r.removeListener(n):r.removeEventListener("change",n)}}),[e]),n}var o=t(472);const{theme:l}=o.default,s=l.screens;function d(){const e=i("(min-width: "+s["2xl"]+")"),n=i("(min-width: "+s.xl+")"),t=i("(min-width: "+s.lg+")"),r=i("(min-width: "+s.md+")"),a=i("(min-width: "+s.sm+")"),o=e?"2xl":n?"xl":t?"lg":r?"md":a?"sm":"xs",l="xs"===o,d="sm"===o,c="md"===o,m="lg"===o,u="xl"===o,f=l||d,h=f||c,p=h||m;return{xs:l,sm:d,md:c,lg:m,xl:u,xxl:"2xl"===o,smAndDown:f,mdAndDown:h,lgAndDown:p,xlAndDown:p||u,smAndUp:a,mdAndUp:r,lgAndUp:t,xlAndUp:n,currentSize:o,isMobile:f,isDesktop:r}}var c=t(3552),m=t(6652),u=t(4003),f=t(959);function h(e){let{imageSrcs:n,direction:t,delay:r}=e;const{isMobile:a}=d();return f.createElement(u.Z,{direction:t,autoFill:!0,speed:20,gradient:!0,delay:r,gradientWidth:a?"50px":"200px"},n.map(((e,n)=>f.createElement("img",{key:n,src:e,className:"w-80 aspect-video object-cover mx-3"}))))}function p(){const{smAndDown:e}=d();return r.createElement("div",{className:"flex flex-col space-y-6 mt-4 md:space-y-0 md:mt-0 md:flex-row w-full px-8 lg:px-20 min-h-[calc(100vh-112px)]"},r.createElement("div",{className:"flex flex-col w-full md:w-1/3 justify-center"},r.createElement("h1",{id:"title",className:"text-5xl font-bold mb-4"},"Welcome to ",r.createElement("span",{className:"gradient-text"},"Theta Tau")," at UTK"),r.createElement("h4",{id:"description",className:"text-xl tracking-tight"},"Theta Tau is UTK's only co-ed professional engineering fraternity. The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship."),r.createElement("div",{className:"flex flex-row mt-4 space-x-4"},r.createElement(m.rU,{to:"/about"},r.createElement(c.Z,{id:"learn-more-btn",variant:"filled",color:"dark-red",textColor:"white"},"Learn More")),r.createElement(m.rU,{to:"/rush"},r.createElement(c.Z,{id:"rush-btn",variant:"outlined",color:"dark-red",textColor:"dark-red"},"Rush")))),r.createElement("div",{className:"flex flex-col w-full md:w-2/3 flex-shrink justify-center space-y-4 md:pl-12 pb-6 md:pb-0"},r.createElement(h,{direction:"left",imageSrcs:["/img/brotherhood/camping.webp","/img/brotherhood/movie.webp","/img/brotherhood/group-letters.jpg"]}),r.createElement(h,{direction:"right",delay:1,imageSrcs:["/img/brotherhood/tailgate.jpg","/img/brotherhood/bowling.jpg","/img/brotherhood/kickball.jpg"]}),r.createElement(h,{direction:"left",imageSrcs:["/img/pd/initiation.jpg","/img/pd/professional.jpg","/img/pd/execs.jpg"]})))}const g=(0,t(6342).Z)()},4003:function(e,n,t){var r=t(959);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(r);!function(e){if(!e||"undefined"==typeof window)return;const n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0.1));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');const o=r.forwardRef((function({style:e={},className:n="",autoFill:t=!1,play:a=!0,pauseOnHover:o=!1,pauseOnClick:l=!1,direction:s="left",speed:d=50,delay:c=0,loop:m=0,gradient:u=!1,gradientColor:f="white",gradientWidth:h=200,onFinish:p,onCycleComplete:g,onMount:v,children:w},x){const[y,b]=r.useState(0),[E,k]=r.useState(0),[N,C]=r.useState(1),[j,A]=r.useState(!1),M=r.useRef(null),S=x||M,T=r.useRef(null),L=r.useCallback((()=>{if(T.current&&S.current){const e=S.current.getBoundingClientRect(),n=T.current.getBoundingClientRect();let r=e.width,a=n.width;"up"!==s&&"down"!==s||(r=e.height,a=n.height),C(t&&r&&a&&a<r?Math.ceil(r/a):1),b(r),k(a)}}),[t,S,s]);r.useEffect((()=>{if(j&&(L(),T.current&&S.current)){const e=new ResizeObserver((()=>L()));return e.observe(S.current),e.observe(T.current),()=>{e&&e.disconnect()}}}),[L,S,j]),r.useEffect((()=>{L()}),[L,w]),r.useEffect((()=>{A(!0)}),[]),r.useEffect((()=>{"function"==typeof v&&v()}),[]);const U=r.useMemo((()=>t?E*N/d:E<y?y/d:E/d),[t,y,E,N,d]),q=r.useMemo((()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!a||o?"paused":"running","--pause-on-click":!a||o&&!l||l?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"})),[e,a,o,l,s]),R=r.useMemo((()=>({"--gradient-color":f,"--gradient-width":"number"==typeof h?`${h}px`:h})),[f,h]),D=r.useMemo((()=>({"--play":a?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":`${U}s`,"--delay":`${c}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":t?"auto":"100%"})),[a,s,U,c,m,t]),Z=r.useMemo((()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"})),[s]),F=r.useCallback((e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map(((e,n)=>i.default.createElement(r.Fragment,{key:n},r.Children.map(w,(e=>i.default.createElement("div",{style:Z,className:"rfm-child"},e))))))),[Z,w]);return j?i.default.createElement("div",{ref:S,style:q,className:"rfm-marquee-container "+n},u&&i.default.createElement("div",{style:R,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:g,onAnimationEnd:p},i.default.createElement("div",{className:"rfm-initial-child-container",ref:T},r.Children.map(w,(e=>i.default.createElement("div",{style:Z,className:"rfm-child"},e)))),F(N-1)),i.default.createElement("div",{className:"rfm-marquee",style:D},F(N))):null}));n.Z=o}}]);
//# sourceMappingURL=component---src-pages-index-tsx-778a6fd48967e18304d9.js.map