"use strict";(()=>{var e={};e.id=3814,e.ids=[3814],e.modules={3295:e=>{e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{e.exports=require("path")},43284:(e,s,a)=>{a.r(s),a.d(s,{GlobalError:()=>d.a,__next_app__:()=>c,pages:()=>m,routeModule:()=>p,tree:()=>n});var l=a(65231),t=a(57824),r=a(7986),d=a.n(r),o=a(66005),i={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);a.d(s,i);let n={children:["",{children:["templates",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,85824)),"/home/adam/Dev/magic-template/apps/web/src/app/templates/page.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,41531)),"/home/adam/Dev/magic-template/apps/web/src/app/templates/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(a.bind(a,32781))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,47774)),"/home/adam/Dev/magic-template/apps/web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,26229)),"/home/adam/Dev/magic-template/apps/web/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(a.t.bind(a,54887,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(a.t.bind(a,96844,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(a.bind(a,32781))).default(e)],twitter:[],manifest:void 0}}]}.children,m=["/home/adam/Dev/magic-template/apps/web/src/app/templates/page.tsx"],c={require:a,loadChunk:()=>Promise.resolve()},p=new l.AppPageRouteModule({definition:{kind:t.RouteKind.APP_PAGE,page:"/templates/page",pathname:"/templates",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},63033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79551:e=>{e.exports=require("url")},85824:(e,s,a)=>{a.r(s),a.d(s,{default:()=>t});var l=a(86205);function t(){return(0,l.jsxs)("div",{className:"space-y-8",children:[(0,l.jsxs)("div",{className:"max-w-2xl",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Templates"}),(0,l.jsx)("p",{className:"text-muted-foreground text-sm leading-relaxed",children:"Ready-to-use templates that demonstrate best practices for common web development patterns. Each template includes customizable components, preview functionality, and copy-paste code."}),(0,l.jsx)("div",{className:"mt-4 flex gap-2",children:(0,l.jsxs)("div",{className:"rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm",children:[(0,l.jsx)("div",{className:"font-medium",children:"Template Features"}),(0,l.jsxs)("ul",{className:"mt-1.5 list-inside list-disc text-muted-foreground",children:[(0,l.jsx)("li",{children:"Interactive previews"}),(0,l.jsx)("li",{children:"Customizable components"}),(0,l.jsx)("li",{children:"Copy-paste code"}),(0,l.jsx)("li",{children:"Responsive design"}),(0,l.jsx)("li",{children:"Accessibility focused"})]})]})})]}),(0,l.jsxs)("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:[(0,l.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Login Form",description:"Clean authentication form with animated inputs and validation",componentName:"LoginTemplate",code:`<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium mb-2">Email</label>
    <input
      type="email"
      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your email"
    />
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Password</label>
    <input
      type="password"
      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your password"
    />
  </div>
  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
    Sign In
  </button>
</form>`,children:(0,l.jsx)("div",{className:"p-6 bg-white rounded-lg border",children:(0,l.jsxs)("form",{className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Email"}),(0,l.jsx)("input",{type:"email",className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500",placeholder:"Enter your email"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Password"}),(0,l.jsx)("input",{type:"password",className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500",placeholder:"Enter your password"})]}),(0,l.jsx)("button",{className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700",children:"Sign In"})]})})}),(0,l.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Dashboard Cards",description:"Responsive dashboard with summary cards and quick actions",componentName:"DashboardTemplate",code:`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">Total Users</h3>
    <p className="text-3xl font-bold text-blue-600">1,234</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">Revenue</h3>
    <p className="text-3xl font-bold text-green-600">$12,345</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">Orders</h3>
    <p className="text-3xl font-bold text-purple-600">567</p>
  </div>
</div>`,children:(0,l.jsx)("div",{className:"p-6 bg-gray-50 rounded-lg",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Total Users"}),(0,l.jsx)("p",{className:"text-3xl font-bold text-blue-600",children:"1,234"})]}),(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Revenue"}),(0,l.jsx)("p",{className:"text-3xl font-bold text-green-600",children:"$12,345"})]}),(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Orders"}),(0,l.jsx)("p",{className:"text-3xl font-bold text-purple-600",children:"567"})]})]})})}),(0,l.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Contact Form",description:"Professional contact form with validation and feedback",componentName:"ContactTemplate",code:`<form className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-2">First Name</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="John"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Last Name</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="Doe"
      />
    </div>
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Email</label>
    <input
      type="email"
      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder="john@example.com"
    />
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Message</label>
    <textarea
      rows={4}
      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder="Your message here..."
    />
  </div>
  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
    Send Message
  </button>
</form>`,children:(0,l.jsx)("div",{className:"p-6 bg-white rounded-lg border",children:(0,l.jsxs)("form",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium mb-2",children:"First Name"}),(0,l.jsx)("input",{type:"text",className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500",placeholder:"John"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Last Name"}),(0,l.jsx)("input",{type:"text",className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500",placeholder:"Doe"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Email"}),(0,l.jsx)("input",{type:"email",className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500",placeholder:"john@example.com"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Message"}),(0,l.jsx)("textarea",{rows:4,className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500",placeholder:"Your message here..."})]}),(0,l.jsx)("button",{className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700",children:"Send Message"})]})})})]})]})}!function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()}};var s=require("../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),l=s.X(0,[5063,7867,2743],()=>a(43284));module.exports=l})();