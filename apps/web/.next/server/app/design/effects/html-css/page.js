(()=>{var e={};e.id=7490,e.ids=[7490],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},8944:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});let o=(0,r(79555).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/adam/Dev/magic-template/apps/web/src/app/design/effects/html-css/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/adam/Dev/magic-template/apps/web/src/app/design/effects/html-css/page.tsx","default")},9488:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var o=r(65231),i=r(57824),n=r(7986),a=r.n(n),s=r(66005),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let d={children:["",{children:["design",{children:["effects",{children:["html-css",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8944)),"/home/adam/Dev/magic-template/apps/web/src/app/design/effects/html-css/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,44895)),"/home/adam/Dev/magic-template/apps/web/src/app/design/effects/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,55758)),"/home/adam/Dev/magic-template/apps/web/src/app/design/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,32781))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,47774)),"/home/adam/Dev/magic-template/apps/web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,26229)),"/home/adam/Dev/magic-template/apps/web/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,54887,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,96844,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,32781))).default(e)],twitter:[],manifest:void 0}}]}.children,c=["/home/adam/Dev/magic-template/apps/web/src/app/design/effects/html-css/page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/design/effects/html-css/page",pathname:"/design/effects/html-css",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31810:(e,t,r)=>{Promise.resolve().then(r.bind(r,33169))},33169:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(11239);function i({children:e}){return(0,o.jsx)("div",{className:"flex flex-col min-h-screen",children:(0,o.jsx)("main",{className:"flex-1 p-4 sm:p-6 pb-24",children:(0,o.jsxs)("div",{className:"container mx-auto max-w-7xl space-y-8",children:[(0,o.jsx)(function(){let{setTitle:e,setDescription:t,setFields:r}=Object(function(){var e=Error("Cannot find module '@/src/components/design-page-context'");throw e.code="MODULE_NOT_FOUND",e}())();return null},{}),e]})})})}r(68882),!function(){var e=Error("Cannot find module '@/src/components/design-page-context'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/src/components/base-category-options'");throw e.code="MODULE_NOT_FOUND",e}()},33873:e=>{"use strict";e.exports=require("path")},36334:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var o=r(11239);function i({children:e,customization:t}){let{backgroundColor:r,borderRadius:i=12,padding:n=16}=t;return(0,o.jsx)("div",{className:"relative w-full h-full flex items-center justify-center overflow-hidden",style:{backgroundColor:r,borderRadius:"number"==typeof i?i:12,padding:"number"==typeof n?n:16},children:e})}function n(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"col-span-full mb-4",children:[(0,o.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"HTML & CSS Effects"}),(0,o.jsx)("p",{className:"text-muted-foreground",children:"A collection of modern web design effects created with only HTML and CSS."})]}),(0,o.jsx)(a,{}),(0,o.jsx)(s,{}),(0,o.jsx)(l,{}),(0,o.jsx)(d,{}),(0,o.jsx)(c,{}),(0,o.jsx)(p,{})]})}function a(){return(0,o.jsx)(Object(function(){var e=Error("Cannot find module '@/src/components/preview/preview-tile'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Pulsing Button",componentName:"PulsingButton",description:"A button with a pulsing effect",code:'<button className="pulsing-button">Click Me</button>',customFields:[{id:"buttonText",label:"Button Text",type:"text"},{id:"buttonColor",label:"Button Color",type:"color"},{id:"pulseColor",label:"Pulse Color",type:"color"},{id:"pulseSpeed",label:"Pulse Speed",type:"slider",min:.5,max:3,step:.1}],initialCustomization:{buttonText:"Click Me",buttonColor:"#3b82f6",pulseColor:"rgba(0, 123, 255, 0.7)",pulseSpeed:2},children:e=>(0,o.jsxs)(i,{customization:e,children:[(0,o.jsx)("style",{children:`
            .pulsing-button {
              animation: pulse ${e.pulseSpeed||2}s infinite;
            }
            @keyframes pulse {
              0% { box-shadow: 0 0 0 0 ${e.pulseColor||"rgba(0, 123, 255, 0.7)"}; }
              70% { box-shadow: 0 0 0 10px rgba(0, 123, 255, 0); }
              100% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
            }
          `}),(0,o.jsx)("button",{className:"pulsing-button px-4 py-2 text-white rounded-md",style:{backgroundColor:e.buttonColor||"#3b82f6"},children:e.buttonText||"Click Me"})]})})}function s(){return(0,o.jsx)(Object(function(){var e=Error("Cannot find module '@/src/components/preview/preview-tile'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Gradient Border Card",componentName:"GradientBorderCard",description:"A card with a gradient border",code:'<div className="gradient-border-card">Card Content</div>',customFields:[{id:"cardTitle",label:"Card Title",type:"text"},{id:"cardContent",label:"Card Content",type:"text"},{id:"cardBgColor",label:"Card Background",type:"color"},{id:"gradientStart",label:"Gradient Start",type:"color"},{id:"gradientEnd",label:"Gradient End",type:"color"}],initialCustomization:{cardTitle:"Card Title",cardContent:"This card has a beautiful gradient border.",cardBgColor:"#1a202c",gradientStart:"#f09433",gradientEnd:"#bc1888"},children:e=>(0,o.jsxs)(i,{customization:e,children:[(0,o.jsx)("style",{children:`
            .gradient-border-card {
              position: relative;
              background: ${e.cardBgColor||"#1a202c"};
              border-radius: 0.5rem;
              padding: 1.5rem;
              color: white;
            }
            .gradient-border-card::before {
              content: '';
              position: absolute;
              top: -2px; left: -2px;
              right: -2px; bottom: -2px;
              background: linear-gradient(45deg, ${e.gradientStart||"#f09433"}, ${e.gradientEnd||"#bc1888"});
              border-radius: inherit;
              z-index: -1;
            }
          `}),(0,o.jsxs)("div",{className:"gradient-border-card",children:[(0,o.jsx)("h3",{className:"text-lg font-bold",children:e.cardTitle||"Card Title"}),(0,o.jsx)("p",{children:e.cardContent||"This card has a beautiful gradient border."})]})]})})}function l(){return(0,o.jsx)(Object(function(){var e=Error("Cannot find module '@/src/components/preview/preview-tile'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Flipping Card",componentName:"FlippingCard",description:"A card that flips on hover",code:'<div className="flipping-card-container"><div className="flipping-card">...</div></div>',customFields:[{id:"frontColor",label:"Front Color",type:"color"},{id:"backColor",label:"Back Color",type:"color"},{id:"transitionSpeed",label:"Transition Speed",type:"slider",min:.2,max:2,step:.1}],initialCustomization:{frontColor:"#3182ce",backColor:"#2c5282",transitionSpeed:.6},children:e=>(0,o.jsxs)(i,{customization:e,children:[(0,o.jsx)("style",{children:`
            .flipping-card-container {
              perspective: 1000px;
              width: 100%;
              max-width: 300px;
            }
            .flipping-card {
              width: 100%;
              height: 150px;
              position: relative;
              transform-style: preserve-3d;
              transition: transform ${e.transitionSpeed||.6}s;
            }
            .flipping-card-container:hover .flipping-card {
              transform: rotateY(180deg);
            }
            .flipping-card-front, .flipping-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              border-radius: 0.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            }
            .flipping-card-front {
              background-color: ${e.frontColor||"#3182ce"};
            }
            .flipping-card-back {
              background-color: ${e.backColor||"#2c5282"};
              transform: rotateY(180deg);
            }
          `}),(0,o.jsx)("div",{className:"flipping-card-container",children:(0,o.jsxs)("div",{className:"flipping-card",children:[(0,o.jsx)("div",{className:"flipping-card-front",children:(0,o.jsx)("p",{children:"Hover over me!"})}),(0,o.jsx)("div",{className:"flipping-card-back",children:(0,o.jsx)("p",{children:"See? I flipped!"})})]})})]})})}function d(){return(0,o.jsx)(Object(function(){var e=Error("Cannot find module '@/src/components/preview/preview-tile'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Glowing Button",componentName:"GlowingButton",description:"A button with a glowing effect on hover",code:'<button className="glowing-button">Hover Me</button>',customFields:[{id:"buttonText",label:"Button Text",type:"text"},{id:"glowColor",label:"Glow Color",type:"color"},{id:"buttonColor",label:"Button Color",type:"color"}],initialCustomization:{buttonText:"Hover Me",glowColor:"#ff00ff",buttonColor:"#6d28d9"},children:e=>(0,o.jsxs)(i,{customization:e,children:[(0,o.jsx)("style",{children:`
            .glowing-button {
              position: relative;
              padding: 0.75rem 1.5rem;
              background-color: ${e.buttonColor||"#6d28d9"};
              color: white;
              border: none;
              border-radius: 0.5rem;
              font-weight: bold;
              cursor: pointer;
              overflow: hidden;
              z-index: 1;
              transition: all 0.3s;
            }
            .glowing-button::before {
              content: '';
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: ${e.glowColor||"#ff00ff"};
              z-index: -1;
              border-radius: 0.6rem;
              opacity: 0;
              transition: opacity 0.3s;
            }
            .glowing-button:hover::before {
              opacity: 1;
            }
            .glowing-button:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
          `}),(0,o.jsx)("button",{className:"glowing-button",children:e.buttonText||"Hover Me"})]})})}function c(){return(0,o.jsx)(Object(function(){var e=Error("Cannot find module '@/src/components/preview/preview-tile'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Neumorphic Card",componentName:"NeumorphicCard",description:"A card with a modern neumorphic design",code:'<div className="neumorphic-card">Neumorphic Design</div>',customFields:[{id:"baseColor",label:"Base Color",type:"color"},{id:"shadowIntensity",label:"Shadow Intensity",type:"slider",min:.1,max:.5,step:.05},{id:"borderRadius",label:"Border Radius",type:"slider",min:4,max:24,step:2}],initialCustomization:{baseColor:"#e0e0e0",shadowIntensity:.2,borderRadius:16},children:e=>{let t=e.baseColor||"#e0e0e0",r=e.shadowIntensity||.2,n=e.borderRadius||16;return(0,o.jsxs)(i,{customization:e,children:[(0,o.jsx)("style",{children:`
              .neumorphic-card {
                background: ${t};
                color: #333;
                padding: 2rem;
                border-radius: ${n}px;
                box-shadow: 
                  ${8*r}px ${8*r}px ${16*r}px rgba(0, 0, 0, ${r}),
                  -${8*r}px -${8*r}px ${16*r}px rgba(255, 255, 255, ${.8*r});
                width: 200px;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                transition: all 0.3s ease;
              }
              .neumorphic-card:hover {
                box-shadow: 
                  ${4*r}px ${4*r}px ${8*r}px rgba(0, 0, 0, ${r}),
                  -${4*r}px -${4*r}px ${8*r}px rgba(255, 255, 255, ${.8*r});
                transform: translateY(-2px);
              }
            `}),(0,o.jsx)("div",{className:"neumorphic-card",children:"Neumorphic Design"})]})}})}function p(){return(0,o.jsx)(Object(function(){var e=Error("Cannot find module '@/src/components/preview/preview-tile'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Text Reveal",componentName:"TextReveal",description:"Text that reveals itself with a gradient effect",code:'<div className="text-reveal">Reveal Text</div>',customFields:[{id:"text",label:"Text",type:"text"},{id:"startColor",label:"Start Color",type:"color"},{id:"endColor",label:"End Color",type:"color"},{id:"animationDuration",label:"Animation Duration",type:"slider",min:1,max:5,step:.5}],initialCustomization:{text:"Reveal Text",startColor:"#ff0080",endColor:"#7928ca",animationDuration:3},children:e=>(0,o.jsxs)(i,{customization:e,children:[(0,o.jsx)("style",{children:`
            .text-reveal {
              position: relative;
              font-size: 2.5rem;
              font-weight: bold;
              background: linear-gradient(
                to right, 
                ${e.startColor||"#ff0080"}, 
                ${e.endColor||"#7928ca"}
              );
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              position: relative;
            }
            .text-reveal::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background: white;
              animation: reveal ${e.animationDuration||3}s ease infinite;
            }
            @keyframes reveal {
              0% { width: 100%; }
              50% { width: 0%; }
              100% { width: 0%; }
            }
          `}),(0,o.jsx)("div",{className:"text-reveal",children:e.text||"Reveal Text"})]})})}r(68882),!function(){var e=Error("Cannot find module '@/src/components/preview/preview-tile'");throw e.code="MODULE_NOT_FOUND",e}()},40739:(e,t,r)=>{Promise.resolve().then(r.bind(r,8944))},44895:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});let o=(0,r(79555).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/adam/Dev/magic-template/apps/web/src/app/design/effects/layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/adam/Dev/magic-template/apps/web/src/app/design/effects/layout.tsx","default")},54811:(e,t,r)=>{Promise.resolve().then(r.bind(r,36334))},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79551:e=>{"use strict";e.exports=require("url")},97530:(e,t,r)=>{Promise.resolve().then(r.bind(r,44895))}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[5063,7867,812],()=>r(9488));module.exports=o})();