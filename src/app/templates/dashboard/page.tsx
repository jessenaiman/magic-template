'use client';

import { TemplatePreview } from '@/components/templates/template-preview';
import { TemplateCustomizationPanel } from '@/components/templates/template-customization-panel';
import { useState } from 'react';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

function DataTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof User>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
      lastLogin: '2024-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'active',
      lastLogin: '2024-01-14',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'User',
      status: 'inactive',
      lastLogin: '2024-01-10',
    },
  ];

  const filteredUsers = users.filter(
    user =>
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
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['name', 'email', 'role', 'status', 'lastLogin'].map(field => (
                <th
                  key={field}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort(field as keyof User)}
                >
                  <div className="flex items-center">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    {sortField === field &&
                      (sortDirection === 'asc' ? (
                        <ChevronUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedUsers.map(user => (
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
                  <span
                    className={
                      'inline-flex px-2 py-1 text-xs font-semibold rounded-full ' +
                      (user.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800')
                    }
                  >
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
}

function ChartWidget() {
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
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Monthly Performance
      </h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-12 text-sm text-gray-600">{item.month}</div>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
            </div>
            <div className="w-12 text-sm text-gray-900 text-right">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

export default function DashboardTemplatePage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Dashboard Template</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Comprehensive dashboard layouts with data visualization, metrics
          cards, and responsive grid systems. Perfect for admin panels and
          analytics interfaces.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mt-6">
        <div className="lg:col-span-2 space-y-6">
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
}`}
          >
            <DataTable />
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
            <ChartWidget />
          </TemplatePreview>
        </div>

        <div className="space-y-6">
          <TemplateCustomizationPanel />
        </div>
      </div>
    </div>
  );
}
