(()=>{var e={};e.id=560,e.ids=[560],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14644:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(11239);function a(){return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"max-w-2xl",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Login Template"}),(0,t.jsx)("p",{className:"text-muted-foreground text-sm leading-relaxed",children:"A complete authentication form template with animated inputs, validation states, and customizable styling. Perfect for user onboarding and secure access patterns."}),(0,t.jsx)("div",{className:"mt-4 flex gap-2",children:(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm",children:[(0,t.jsx)("div",{className:"font-medium",children:"Features"}),(0,t.jsxs)("ul",{className:"mt-1.5 list-inside list-disc text-muted-foreground",children:[(0,t.jsx)("li",{children:"Form validation"}),(0,t.jsx)("li",{children:"Animated inputs"}),(0,t.jsx)("li",{children:"Error handling"}),(0,t.jsx)("li",{children:"Responsive design"}),(0,t.jsx)("li",{children:"Accessibility"})]})]})})]}),(0,t.jsxs)("div",{className:"grid gap-6 lg:grid-cols-3",children:[(0,t.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,t.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Basic Login Form",description:"Clean and simple authentication form",componentName:"LoginForm",code:`import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}`,children:(0,t.jsx)("div",{className:"p-8 bg-white rounded-lg border shadow-sm",children:(0,t.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,t.jsxs)("div",{className:"text-center mb-6",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-900",children:"Welcome back"}),(0,t.jsx)("p",{className:"text-gray-600 mt-2",children:"Sign in to your account"})]}),(0,t.jsxs)("form",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Email"}),(0,t.jsx)("input",{id:"email",type:"email",className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter your email",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium mb-2",children:"Password"}),(0,t.jsx)("input",{id:"password",type:"password",className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter your password",required:!0})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("label",{className:"flex items-center",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded border-gray-300"}),(0,t.jsx)("span",{className:"ml-2 text-sm",children:"Remember me"})]}),(0,t.jsx)("a",{href:"#",className:"text-sm text-blue-600 hover:text-blue-500",children:"Forgot password?"})]}),(0,t.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors",children:"Sign In"})]}),(0,t.jsx)("div",{className:"mt-6 text-center",children:(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Don't have an account?"," ",(0,t.jsx)("a",{href:"#",className:"text-blue-600 hover:text-blue-500",children:"Sign up"})]})})]})})}),(0,t.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Advanced Login with Validation",description:"Enhanced form with real-time validation and error states",componentName:"AdvancedLoginForm",code:`import { useState } from 'react';

interface FormErrors {
  email?: string;
  password?: string;
}

export function AdvancedLoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Handle login logic here
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login successful');
    } catch (error) {
      setErrors({ email: 'Invalid credentials' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            className={"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent " + (
              errors.email ? 'border-red-500' : ''
            )}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange('password')}
              className={"w-full px-3 py-2 pr-10 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent " + (
                errors.password ? 'border-red-500' : ''
              )}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}`,children:(0,t.jsx)("div",{className:"p-8 bg-white rounded-lg border shadow-sm",children:(0,t.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,t.jsxs)("div",{className:"text-center mb-6",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-900",children:"Secure Login"}),(0,t.jsx)("p",{className:"text-gray-600 mt-2",children:"Enter your credentials to continue"})]}),(0,t.jsxs)("form",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Email"}),(0,t.jsx)("input",{id:"email",type:"email",className:"w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter your email"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium mb-2",children:"Password"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{id:"password",type:"password",className:"w-full px-3 py-2 pr-10 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter your password"}),(0,t.jsx)("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600",children:"\uD83D\uDC41️"})]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("label",{className:"flex items-center",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded border-gray-300"}),(0,t.jsx)("span",{className:"ml-2 text-sm",children:"Remember me"})]}),(0,t.jsx)("a",{href:"#",className:"text-sm text-blue-600 hover:text-blue-500",children:"Forgot password?"})]}),(0,t.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors",children:"Sign In"})]}),(0,t.jsx)("div",{className:"mt-6 text-center",children:(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Don't have an account?"," ",(0,t.jsx)("a",{href:"#",className:"text-blue-600 hover:text-blue-500",children:"Sign up"})]})})]})})})]}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-customization-panel'");throw e.code="MODULE_NOT_FOUND",e}()),{}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)("h3",{className:"font-medium mb-3",children:"Usage Tips"}),(0,t.jsxs)("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[(0,t.jsx)("li",{children:"• Use client-side validation for better UX"}),(0,t.jsx)("li",{children:"• Implement proper error handling"}),(0,t.jsx)("li",{children:"• Add loading states for async operations"}),(0,t.jsx)("li",{children:"• Consider password strength indicators"}),(0,t.jsx)("li",{children:"• Support social login options"})]})]})]})]})]})}!function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/packages/components/templates/template-customization-panel'");throw e.code="MODULE_NOT_FOUND",e}()},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},44140:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>c,pages:()=>m,routeModule:()=>p,tree:()=>d});var t=r(65231),a=r(57824),o=r(7986),n=r.n(o),l=r(66005),i={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(s,i);let d={children:["",{children:["templates",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,82330)),"/home/adam/Dev/magic-template/apps/web/src/app/templates/login/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41531)),"/home/adam/Dev/magic-template/apps/web/src/app/templates/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,32781))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,47774)),"/home/adam/Dev/magic-template/apps/web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,26229)),"/home/adam/Dev/magic-template/apps/web/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,54887,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,96844,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,32781))).default(e)],twitter:[],manifest:void 0}}]}.children,m=["/home/adam/Dev/magic-template/apps/web/src/app/templates/login/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/templates/login/page",pathname:"/templates/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},47163:(e,s,r)=>{Promise.resolve().then(r.bind(r,14644))},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79551:e=>{"use strict";e.exports=require("url")},81507:(e,s,r)=>{Promise.resolve().then(r.bind(r,82330))},82330:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});let t=(0,r(79555).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/adam/Dev/magic-template/apps/web/src/app/templates/login/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/adam/Dev/magic-template/apps/web/src/app/templates/login/page.tsx","default")}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[5063,7867,2743],()=>r(44140));module.exports=t})();