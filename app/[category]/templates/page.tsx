import { TemplatePreview } from '@/components/preview/template-preview';

export default function TemplatesPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Templates</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ready-to-use templates that demonstrate best practices for common web development patterns.
          Each template includes customizable components, preview functionality, and copy-paste code.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Template Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Interactive previews</li>
              <li>Customizable components</li>
              <li>Copy-paste code</li>
              <li>Responsive design</li>
              <li>Accessibility focused</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TemplatePreview
          title="Login Form"
          description="Clean authentication form with animated inputs and validation"
          componentName="LoginTemplate"
          code={`<form className="space-y-4">
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
</form>`}
        >
          <div className="p-6 bg-white rounded-lg border">
            <form className="space-y-4">
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
            </form>
          </div>
        </TemplatePreview>

        <TemplatePreview
          title="Dashboard Cards"
          description="Responsive dashboard with summary cards and quick actions"
          componentName="DashboardTemplate"
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
</div>`}
        >
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
          </div>
        </TemplatePreview>

        <TemplatePreview
          title="Contact Form"
          description="Professional contact form with validation and feedback"
          componentName="ContactTemplate"
          code={`<form className="space-y-4">
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
</form>`}
        >
          <div className="p-6 bg-white rounded-lg border">
            <form className="space-y-4">
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
            </form>
          </div>
        </TemplatePreview>
      </div>
    </div>
  );
}
