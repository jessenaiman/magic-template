(()=>{var e={};e.id=3225,e.ids=[3225],e.modules={775:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var s=a(11239),r=a(68882),i=a(72900);let l=(0,i.A)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),o=(0,i.A)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),n=(0,i.A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function d(){let[e,t]=(0,r.useState)(""),[a,i]=(0,r.useState)("name"),[d,c]=(0,r.useState)("asc"),m=[...[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",lastLogin:"2024-01-14"},{id:3,name:"Mike Johnson",email:"mike@example.com",role:"User",status:"inactive",lastLogin:"2024-01-10"}].filter(t=>t.name.toLowerCase().includes(e.toLowerCase())||t.email.toLowerCase().includes(e.toLowerCase()))].sort((e,t)=>{let s=e[a],r=t[a];return s<r?"asc"===d?-1:1:s>r?"asc"===d?1:-1:0}),p=e=>{a===e?c("asc"===d?"desc":"asc"):(i(e),c("asc"))};return(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-sm border",children:[(0,s.jsx)("div",{className:"p-4 border-b",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:"Users"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(l,{className:"w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),(0,s.jsx)("input",{type:"text",placeholder:"Search users...",value:e,onChange:e=>t(e.target.value),className:"pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]})}),(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full",children:[(0,s.jsx)("thead",{className:"bg-gray-50",children:(0,s.jsx)("tr",{children:["name","email","role","status","lastLogin"].map(e=>(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100",onClick:()=>p(e),children:(0,s.jsxs)("div",{className:"flex items-center",children:[e.charAt(0).toUpperCase()+e.slice(1),a===e&&("asc"===d?(0,s.jsx)(o,{className:"w-4 h-4 ml-1"}):(0,s.jsx)(n,{className:"w-4 h-4 ml-1"}))]})},e))})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:m.map(e=>(0,s.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:e.name}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.email}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.role}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsx)("span",{className:"inline-flex px-2 py-1 text-xs font-semibold rounded-full "+("active"===e.status?"bg-green-100 text-green-800":"bg-red-100 text-red-800"),children:e.status})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.lastLogin})]},e.id))})]})})]})}function c(){let e=[{month:"Jan",value:65},{month:"Feb",value:78},{month:"Mar",value:90},{month:"Apr",value:81},{month:"May",value:95},{month:"Jun",value:88}],t=Math.max(...e.map(e=>e.value));return(0,s.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[(0,s.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Monthly Performance"}),(0,s.jsx)("div",{className:"space-y-3",children:e.map((e,a)=>(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-12 text-sm text-gray-600",children:e.month}),(0,s.jsx)("div",{className:"flex-1 mx-4",children:(0,s.jsx)("div",{className:"w-full bg-gray-200 rounded-full h-4",children:(0,s.jsx)("div",{className:"bg-blue-600 h-4 rounded-full transition-all duration-300",style:{width:`${e.value/t*100}%`}})})}),(0,s.jsx)("div",{className:"w-12 text-sm text-gray-900 text-right",children:e.value})]},a))})]})}function m(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsxs)("div",{className:"max-w-2xl",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Dashboard Template"}),(0,s.jsx)("p",{className:"text-muted-foreground text-sm leading-relaxed",children:"Comprehensive dashboard layouts with data visualization, metrics cards, and responsive grid systems. Perfect for admin panels and analytics interfaces."})]}),(0,s.jsxs)("div",{className:"grid gap-6 lg:grid-cols-3 mt-6",children:[(0,s.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,s.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Data Table",description:"Sortable and filterable data table with pagination",componentName:"DataTable",code:`import { ChevronUp, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

export function DataTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof User>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', lastLogin: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', lastLogin: '2024-01-14' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'inactive', lastLogin: '2024-01-10' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (field: keyof User) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Users</h3>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['name', 'email', 'role', 'status', 'lastLogin'].map((field) => (
                <th
                  key={field}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort(field as keyof User)}
                >
                  <div className="flex items-center">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    {sortField === field && (
                      sortDirection === 'asc' ?
                        <ChevronUp className="w-4 h-4 ml-1" /> :
                        <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={"inline-flex px-2 py-1 text-xs font-semibold rounded-full " + (
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  )}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.lastLogin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}`,children:(0,s.jsx)(d,{})}),(0,s.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Chart Widget",description:"Simple bar chart for data visualization",componentName:"ChartWidget",code:`export function ChartWidget() {
  const data = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 90 },
    { month: 'Apr', value: 81 },
    { month: 'May', value: 95 },
    { month: 'Jun', value: 88 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-12 text-sm text-gray-600">{item.month}</div>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                  style={{ width: \`\${(item.value / maxValue) * 100}%\` }}
                />
              </div>
            </div>
            <div className="w-12 text-sm text-gray-900 text-right">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}`,children:(0,s.jsx)(c,{})})]}),(0,s.jsx)("div",{className:"space-y-6",children:(0,s.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-customization-panel'");throw e.code="MODULE_NOT_FOUND",e}()),{})})]})]})}!function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/packages/components/templates/template-customization-panel'");throw e.code="MODULE_NOT_FOUND",e}()},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},22022:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=a(65231),r=a(57824),i=a(7986),l=a.n(i),o=a(66005),n={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);a.d(t,n);let d={children:["",{children:["templates",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,48427)),"/home/adam/Dev/magic-template/apps/web/src/app/templates/dashboard/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,41531)),"/home/adam/Dev/magic-template/apps/web/src/app/templates/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(a.bind(a,32781))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,47774)),"/home/adam/Dev/magic-template/apps/web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,26229)),"/home/adam/Dev/magic-template/apps/web/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(a.t.bind(a,54887,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(a.t.bind(a,96844,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(a.bind(a,32781))).default(e)],twitter:[],manifest:void 0}}]}.children,c=["/home/adam/Dev/magic-template/apps/web/src/app/templates/dashboard/page.tsx"],m={require:a,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/templates/dashboard/page",pathname:"/templates/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31710:(e,t,a)=>{Promise.resolve().then(a.bind(a,775))},33873:e=>{"use strict";e.exports=require("path")},36438:(e,t,a)=>{Promise.resolve().then(a.bind(a,48427))},48427:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s=(0,a(79555).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/adam/Dev/magic-template/apps/web/src/app/templates/dashboard/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/adam/Dev/magic-template/apps/web/src/app/templates/dashboard/page.tsx","default")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},72900:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var s=a(68882);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase()),l=e=>{let t=i(e);return t.charAt(0).toUpperCase()+t.slice(1)},o=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim(),n=e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:i="",children:l,iconNode:c,...m},p)=>(0,s.createElement)("svg",{ref:p,...d,width:t,height:t,stroke:e,strokeWidth:r?24*Number(a)/Number(t):a,className:o("lucide",i),...!l&&!n(m)&&{"aria-hidden":"true"},...m},[...c.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(l)?l:[l]])),m=(e,t)=>{let a=(0,s.forwardRef)(({className:a,...i},n)=>(0,s.createElement)(c,{ref:n,iconNode:t,className:o(`lucide-${r(l(e))}`,`lucide-${e}`,a),...i}));return a.displayName=l(e),a}},79551:e=>{"use strict";e.exports=require("url")}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[5063,7867,2743],()=>a(22022));module.exports=s})();