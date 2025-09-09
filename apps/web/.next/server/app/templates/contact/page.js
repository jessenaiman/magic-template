"use strict";(()=>{var e={};e.id=2361,e.ids=[2361],e.modules={3295:e=>{e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{e.exports=require("path")},35838:(e,t,a)=>{a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>m,routeModule:()=>u,tree:()=>d});var s=a(65231),r=a(57824),l=a(7986),o=a.n(l),n=a(66005),i={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);a.d(t,i);let d={children:["",{children:["templates",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,75139)),"/home/adam/Dev/magic-template/apps/web/src/app/templates/contact/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,41531)),"/home/adam/Dev/magic-template/apps/web/src/app/templates/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(a.bind(a,32781))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,47774)),"/home/adam/Dev/magic-template/apps/web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,26229)),"/home/adam/Dev/magic-template/apps/web/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(a.t.bind(a,54887,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(a.t.bind(a,96844,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,61280))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(a.bind(a,32781))).default(e)],twitter:[],manifest:void 0}}]}.children,m=["/home/adam/Dev/magic-template/apps/web/src/app/templates/contact/page.tsx"],c={require:a,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/templates/contact/page",pathname:"/templates/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},63033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},75139:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(86205);function r(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsxs)("div",{className:"max-w-2xl",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Contact Form Template"}),(0,s.jsx)("p",{className:"text-muted-foreground text-sm leading-relaxed",children:"Professional contact forms with validation, feedback, and accessibility features. Includes multiple layouts and form patterns for different use cases."}),(0,s.jsx)("div",{className:"mt-4 flex gap-2",children:(0,s.jsxs)("div",{className:"rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm",children:[(0,s.jsx)("div",{className:"font-medium",children:"Features"}),(0,s.jsxs)("ul",{className:"mt-1.5 list-inside list-disc text-muted-foreground",children:[(0,s.jsx)("li",{children:"Form validation"}),(0,s.jsx)("li",{children:"Error handling"}),(0,s.jsx)("li",{children:"Success feedback"}),(0,s.jsx)("li",{children:"Accessibility"}),(0,s.jsx)("li",{children:"Multiple layouts"})]})]})})]}),(0,s.jsxs)("div",{className:"grid gap-6 lg:grid-cols-3",children:[(0,s.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,s.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Basic Contact Form",description:"Simple contact form with essential fields",componentName:"BasicContactForm",code:`import { useState } from 'react';

export function BasicContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for your message. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`,children:(0,s.jsx)("div",{className:"p-8 bg-white rounded-lg border shadow-sm",children:(0,s.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,s.jsxs)("div",{className:"text-center mb-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-gray-900",children:"Contact Us"}),(0,s.jsx)("p",{className:"text-gray-600 mt-2",children:"Get in touch with our team"})]}),(0,s.jsxs)("form",{className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),(0,s.jsx)("input",{type:"text",id:"name",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Your full name"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),(0,s.jsx)("input",{type:"email",id:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"your.email@example.com"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message"}),(0,s.jsx)("textarea",{id:"message",rows:4,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Your message here..."})]}),(0,s.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors",children:"Send Message"})]})]})})}),(0,s.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Advanced Contact Form",description:"Multi-step form with validation and progress tracking",componentName:"AdvancedContactForm",code:`import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
}

interface FormErrors {
  [key: string]: string;
}

export function AdvancedContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (step === 2) {
      if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
      if (!formData.message.trim()) newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Form submitted successfully!');
      // Reset form
      setFormData({
        firstName: '', lastName: '', email: '', company: '',
        subject: '', message: '', priority: 'medium'
      });
      setCurrentStep(1);
    } catch (error) {
      alert('Error submitting form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={\`w-full px-3 py-2 border rounded-md \${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }\`}
            placeholder="John"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={\`w-full px-3 py-2 border rounded-md \${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }\`}
            placeholder="Doe"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={\`w-full px-3 py-2 border rounded-md \${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }\`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Company (Optional)</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Your company"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={\`w-full px-3 py-2 border rounded-md \${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          }\`}
          placeholder="What's this about?"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={\`w-full px-3 py-2 border rounded-md \${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }\`}
          placeholder="Tell us more..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Step {currentStep} of 2</span>
          <span className="text-sm text-gray-500">{Math.round((currentStep / 2) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: \`\${(currentStep / 2) * 100}%\` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}

        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Previous
            </button>
          )}

          {currentStep < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 ml-auto"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}`,children:(0,s.jsx)("div",{className:"p-8 bg-white rounded-lg border shadow-sm",children:(0,s.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,s.jsx)("span",{className:"text-sm font-medium",children:"Step 1 of 2"}),(0,s.jsx)("span",{className:"text-sm text-gray-500",children:"50% Complete"})]}),(0,s.jsx)("div",{className:"w-full bg-gray-200 rounded-full h-2",children:(0,s.jsx)("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:"50%"}})})]}),(0,s.jsxs)("form",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-2",children:"First Name"}),(0,s.jsx)("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"John"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Last Name"}),(0,s.jsx)("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"Doe"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Email"}),(0,s.jsx)("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"john@example.com"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Company (Optional)"}),(0,s.jsx)("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"Your company"})]})]}),(0,s.jsx)("div",{className:"flex justify-end mt-6",children:(0,s.jsx)("button",{type:"button",className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"Next"})})]})]})})}),(0,s.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Contact Card Layout",description:"Contact form in a card layout with icons and better visual hierarchy",componentName:"ContactCard",code:`import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactCard() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Have a question or want to work together? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">hello@example.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-gray-600">123 Business St, City, State 12345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}`,children:(0,s.jsx)("div",{className:"p-8 bg-gray-50 rounded-lg",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Get in Touch"}),(0,s.jsx)("p",{className:"text-gray-600",children:"Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4",children:(0,s.jsx)("span",{className:"text-blue-600",children:"✉️"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-medium text-gray-900",children:"Email"}),(0,s.jsx)("p",{className:"text-gray-600",children:"hello@example.com"})]})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4",children:(0,s.jsx)("span",{className:"text-green-600",children:"\uD83D\uDCDE"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-medium text-gray-900",children:"Phone"}),(0,s.jsx)("p",{className:"text-gray-600",children:"+1 (555) 123-4567"})]})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4",children:(0,s.jsx)("span",{className:"text-purple-600",children:"\uD83D\uDCCD"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-medium text-gray-900",children:"Address"}),(0,s.jsx)("p",{className:"text-gray-600",children:"123 Business St, City, State 12345"})]})]})]})]}),(0,s.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:(0,s.jsxs)("form",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"First Name"}),(0,s.jsx)("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"John"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Last Name"}),(0,s.jsx)("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Doe"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),(0,s.jsx)("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"john@example.com"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Subject"}),(0,s.jsx)("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"How can we help?"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Message"}),(0,s.jsx)("textarea",{rows:4,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Tell us more about your inquiry..."})]}),(0,s.jsxs)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center",children:[(0,s.jsx)("span",{className:"mr-2",children:"\uD83D\uDCE4"}),"Send Message"]})]})})]})})}),(0,s.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}()),{title:"Newsletter Signup",description:"Simple newsletter subscription form with success states",componentName:"NewsletterSignup",code:`import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="text-center py-8 px-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-green-600">✓</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          You're all set!
        </h3>
        <p className="text-gray-600 mb-4">
          Thanks for subscribing. Check your email for a confirmation link.
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-blue-600 hover:text-blue-500 text-sm"
        >
          ← Back to form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-blue-100">
          Get the latest news and updates delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        <p className="text-xs text-blue-100 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}`,children:(0,s.jsxs)("div",{className:"p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white",children:[(0,s.jsxs)("div",{className:"text-center mb-6",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold mb-2",children:"Stay Updated"}),(0,s.jsx)("p",{className:"text-blue-100",children:"Get the latest news and updates delivered to your inbox."})]}),(0,s.jsxs)("form",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"}),(0,s.jsx)("button",{type:"submit",className:"px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 font-medium transition-colors",children:"Subscribe"})]}),(0,s.jsx)("p",{className:"text-xs text-blue-100 text-center",children:"We respect your privacy. Unsubscribe at any time."})]})]})})]}),(0,s.jsx)("div",{className:"space-y-6",children:(0,s.jsx)(Object(function(){var e=Error("Cannot find module '@/packages/components/templates/template-customization-panel'");throw e.code="MODULE_NOT_FOUND",e}()),{})})]})]})}!function(){var e=Error("Cannot find module '@/packages/components/templates/template-preview'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/packages/components/templates/template-customization-panel'");throw e.code="MODULE_NOT_FOUND",e}()},79551:e=>{e.exports=require("url")}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[5063,7867,2743],()=>a(35838));module.exports=s})();