import { TemplatePreview } from '@/components/preview/template-preview';

export default function DashboardTemplatePage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Dashboard Template</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Comprehensive dashboard layouts with data visualization, metrics cards,
          and responsive grid systems. Perfect for admin panels and analytics interfaces.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Responsive grid layouts</li>
              <li>Data visualization</li>
              <li>Interactive charts</li>
              <li>Real-time metrics</li>
              <li>Customizable widgets</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <TemplatePreview
          title="Metrics Overview"
          description="Key performance indicators with trend indicators"
          componentName="MetricsOverview"
          code={`import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from 'lucide-react';

export function MetricsOverview() {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '-2.4%',
      trend: 'down',
      icon: ShoppingCart,
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+5.7%',
      trend: 'up',
      icon: Activity,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;

        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <Icon className="h-8 w-8 text-gray-400" />
            </div>
            <div className="flex items-center mt-4">
              <TrendIcon
                className={\`h-4 w-4 \${
                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }\`}
              />
              <span
                className={\`ml-1 text-sm font-medium \${
                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }\`}
              >
                {metric.change}
              </span>
              <span className="ml-1 text-sm text-gray-500">from last month</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}`}
        >
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">$45,231.89</p>
                  </div>
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg">$</span>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 text-sm">↗ +20.1%</span>
                  <span className="ml-2 text-sm text-gray-500">from last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-2xl font-bold text-gray-900">2,350</p>
                  </div>
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">👥</span>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 text-sm">↗ +15.3%</span>
                  <span className="ml-2 text-sm text-gray-500">from last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Orders</p>
                    <p className="text-2xl font-bold text-gray-900">1,234</p>
                  </div>
                  <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-lg">🛒</span>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-red-500 text-sm">↘ -2.4%</span>
                  <span className="ml-2 text-sm text-gray-500">from last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Conversion</p>
                    <p className="text-2xl font-bold text-gray-900">3.2%</p>
                  </div>
                  <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">📈</span>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 text-sm">↗ +5.7%</span>
                  <span className="ml-2 text-sm text-gray-500">from last month</span>
                </div>
              </div>
            </div>
          </div>
        </TemplatePreview>

        <TemplatePreview
          title="Activity Feed"
          description="Real-time activity stream with user actions and timestamps"
          componentName="ActivityFeed"
          code={`import { Clock, User, Settings, FileText, MessageSquare } from 'lucide-react';

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'updated profile settings',
      time: '2 minutes ago',
      icon: Settings,
      color: 'blue',
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'created new report',
      time: '5 minutes ago',
      icon: FileText,
      color: 'green',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'sent message to team',
      time: '10 minutes ago',
      icon: MessageSquare,
      color: 'purple',
    },
    {
      id: 4,
      user: 'Sarah Wilson',
      action: 'logged into dashboard',
      time: '15 minutes ago',
      icon: User,
      color: 'gray',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start space-x-3">
                <div className={\`flex-shrink-0 w-8 h-8 rounded-full bg-\${activity.color}-100 flex items-center justify-center\`}>
                  <Icon className={\`w-4 h-4 text-\${activity.color}-600\`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-3 h-3 text-gray-400 mr-1" />
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}`}
        >
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-4 hover:bg-gray-50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600">⚙️</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">John Doe</span> updated profile settings
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                  </div>
                </div>
              </div>

              <div className="p-4 hover:bg-gray-50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">📄</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">Jane Smith</span> created new report
                    </p>
                    <p className="text-xs text-gray-500 mt-1">5 minutes ago</p>
                  </div>
                </div>
              </div>

              <div className="p-4 hover:bg-gray-50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600">💬</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">Mike Johnson</span> sent message to team
                    </p>
                    <p className="text-xs text-gray-500 mt-1">10 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TemplatePreview>

        <TemplatePreview
          title="Data Table"
          description="Sortable and filterable data table with pagination"
          componentName="DataTable"
          code={`import { ChevronUp, ChevronDown, Search } from 'lucide-react';
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
                  <span className={\`inline-flex px-2 py-1 text-xs font-semibold rounded-full \${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }\`}>
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
}`}
        >
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Users</h3>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">User</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-14</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mike Johnson</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">mike@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">User</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Inactive
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TemplatePreview>

        <TemplatePreview
          title="Chart Widget"
          description="Simple bar chart for data visualization"
          componentName="ChartWidget"
          code={`export function ChartWidget() {
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
}`}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-12 text-sm text-gray-600">Jan</div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div className="w-12 text-sm text-gray-900 text-right">65</div>
              </div>
              <div className="flex items-center">
                <div className="w-12 text-sm text-gray-600">Feb</div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
                <div className="w-12 text-sm text-gray-900 text-right">78</div>
              </div>
              <div className="flex items-center">
                <div className="w-12 text-sm text-gray-600">Mar</div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div className="w-12 text-sm text-gray-900 text-right">90</div>
              </div>
              <div className="flex items-center">
                <div className="w-12 text-sm text-gray-600">Apr</div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '81%' }} />
                  </div>
                </div>
                <div className="w-12 text-sm text-gray-900 text-right">81</div>
              </div>
            </div>
          </div>
        </TemplatePreview>
      </div>
    </div>
  );
}
