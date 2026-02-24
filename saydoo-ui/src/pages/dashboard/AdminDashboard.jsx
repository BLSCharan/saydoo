import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutGrid,
  Users,
  MessageCircle,
  Settings,
  BarChart3,
  FileText,
  CreditCard,
  Zap,
  ChevronDown,
  Eye,
  EyeOff,
  CheckCircle,
  MessageSquare,
  Menu,
  X,
  Package,
  Send,
} from 'lucide-react';

const AdminDashboard = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  // Stat Cards Data
  const stats = [
    {
      title: 'Total Users',
      value: '3,450',
      icon: Users,
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Active Assistants',
      value: '2,120',
      icon: MessageCircle,
      color: 'cyan',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-500',
    },
    {
      title: 'Total Conversations',
      value: '56,780',
      icon: MessageCircle,
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Monthly Revenue',
      value: '$28,400',
      icon: BarChart3,
      color: 'amber',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500',
    },
  ];

  // Recent Users Data
  const recentUsers = [
    { name: 'Lisa Bennett', role: 'Founder', avatar: 'LB' },
    { name: 'Mark Chen', role: 'Investor', avatar: 'MC' },
    { name: 'Emily Carter', role: 'Creator', avatar: 'EC' },
    { name: 'David Moore', role: 'Executive', avatar: 'DM' },
  ];

  // Assistant Overview Data
  const assistantOverview = [
    { label: 'Founders:', value: '860', icon: Users, color: 'blue' },
    { label: 'Investors:', value: '540', icon: Users, color: 'red' },
    { label: 'Creators:', value: '720', icon: Users, color: 'blue' },
    { label: 'Executives:', value: '500', icon: Users, color: 'amber' },
  ];

  // Live Conversations Data
  const liveConversations = [
    { title: 'Qualifying Startup A', icon: CheckCircle, color: 'text-cyan-500' },
    { title: 'Screening Tech Pitch', icon: CheckCircle, color: 'text-cyan-500' },
    { title: 'Brand Collab Inquiry', icon: CheckCircle, color: 'text-cyan-500' },
    { title: 'Client Meeting Follow-up', icon: CheckCircle, color: 'text-cyan-500' },
  ];

  // Subscription Plans Data
  const subscriptionPlans = [
    { name: 'Free Plan', icon: Package, users: '' },
    { name: 'Pro Plan', icon: Package, users: '1,520 Users' },
    { name: 'Premium Plan', icon: Package, users: '680 Users' },
  ];

  // Integration Status Data
  const integrations = [
    { name: 'WhatsApp', status: 'Connected', icon: Send },
    { name: 'Email', status: 'Active', icon: MessageSquare },
    { name: 'CRM', status: 'Synced', icon: BarChart3 },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-48' : 'w-0'} hidden md:block fixed md:relative h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 overflow-y-auto transition-all duration-300 z-40`}>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 pb-6 border-b border-blue-600">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-blue-700 font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold">Saydoo</span>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          <NavItem icon={LayoutGrid} label="Dashboard" active={true} onClick={() => navigate('/admin')} />
          <NavItem icon={Users} label="Users" onClick={() => navigate('/admin/users')} />
          <NavItem icon={MessageCircle} label="Assistants" onClick={() => {}} />
          <NavItem icon={MessageSquare} label="Conversations" onClick={() => {}} />
          <NavItem icon={FileText} label="Templates" onClick={() => {}} />
          <NavItem icon={CreditCard} label="Subscriptions" onClick={() => {}} />
          <NavItem icon={Zap} label="Integrations" onClick={() => {}} />
          <NavItem icon={Settings} label="Settings" onClick={() => {}} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-lg md:text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <div className="relative">
            <button
              onClick={() => setUserDropdown(!userDropdown)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <span className="hidden sm:inline text-gray-700 font-medium">Admin</span>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <ChevronDown size={18} className="text-gray-600 hidden sm:block" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-8 space-y-4 md:space-y-6">
            {/* Welcome Message */}
            <div className="text-gray-700">
              <p className="text-base md:text-lg font-medium">Welcome back, Admin!</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-gray-600 text-sm font-medium">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`${stat.bgColor} p-3 rounded-lg`}>
                        <IconComponent className={`${stat.iconColor} w-6 h-6`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* User Growth Chart */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    User Growth
                  </h3>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-xs md:text-sm">
                    Last 30 Days
                    <ChevronDown size={14} />
                  </button>
                </div>
                <div className="h-48 md:h-64">
                  <SimpleLineChart />
                </div>
              </div>

              {/* Revenue Trend Chart */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Revenue Trend
                  </h3>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-xs md:text-sm">
                    Last 30 Days
                    <ChevronDown size={14} />
                  </button>
                </div>
                <div className="h-48 md:h-64">
                  <SimpleBarChart />
                </div>
              </div>
            </div>

            {/* Bottom Grid - 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Recent Users */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4 md:mb-6 gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Recent Users
                  </h3>
                  <button className="text-blue-600 hover:text-blue-700 text-xs md:text-sm font-medium flex items-center gap-1">
                    View All <ChevronDown size={14} />
                  </button>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {recentUsers.map((user, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">
                        {user.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 text-xs md:text-sm truncate">
                          {user.name}
                        </p>
                        <p className="text-gray-500 text-xs">{user.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assistant Overview */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
                  Assistant Overview
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {assistantOverview.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <div className="flex items-center gap-2 min-w-0">
                        <Users size={16} className="text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 text-xs md:text-sm truncate">
                          {item.label}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 text-xs md:text-sm flex-shrink-0">
                        {item.value}
                      </span>
                    </div>
                  ))}
                  <button className="w-full mt-3 md:mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-xs md:text-sm transition">
                    Manage
                  </button>
                </div>
              </div>

              {/* Live Conversations */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4 md:mb-6 gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Live Conversations
                  </h3>
                  <button className="text-blue-600 hover:text-blue-700 text-xs md:text-sm font-medium flex items-center gap-1">
                    View All <ChevronDown size={14} />
                  </button>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {liveConversations.map((conv, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-cyan-500 flex-shrink-0" />
                      <span className="text-gray-700 text-xs md:text-sm truncate">{conv.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscription Plans */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
                  Subscription Plans
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {subscriptionPlans.map((plan, idx) => {
                    const PlanIcon = plan.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <PlanIcon size={16} className="text-gray-600 flex-shrink-0" />
                          <span className="text-gray-700 text-xs md:text-sm font-medium truncate">
                            {plan.name}
                          </span>
                        </div>
                        {plan.users && (
                          <span className="text-gray-500 text-xs flex-shrink-0">{plan.users}</span>
                        )}
                      </div>
                    );
                  })}
                  <button className="w-full mt-3 md:mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-xs md:text-sm transition">
                    Manage
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-6">
              {/* Integration Status */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
                  Integration Status
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {integrations.map((integration, idx) => {
                    const IntegrationIcon = integration.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 min-w-0">
                          <IntegrationIcon size={16} className="text-gray-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-xs md:text-sm truncate">
                            {integration.name}
                          </span>
                        </div>
                        <span className="text-green-600 text-xs font-semibold flex-shrink-0">
                          {integration.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Revenue Summary */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 col-span-1 md:col-span-2 lg:col-span-2">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
                  Revenue Summary
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  <div className="border-l-4 border-blue-600 pl-3 md:pl-4">
                    <p className="text-gray-600 text-xs md:text-sm">Monthly Revenue</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">$28,400</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-3 md:pl-4">
                    <p className="text-gray-600 text-xs md:text-sm">New Subscribers</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">125</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-3 md:pl-4">
                    <p className="text-gray-600 text-xs md:text-sm">Churn Rate</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon: Icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition text-sm md:text-base ${
      active
        ? 'bg-blue-600 text-white'
        : 'text-blue-100 hover:bg-blue-600 hover:text-white'
    }`}
  >
    <Icon size={18} className="flex-shrink-0" />
    <span className="font-medium">{label}</span>
  </button>
);

// Simple Line Chart Component
const SimpleLineChart = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full">
    {/* Grid lines */}
    {[1, 2, 3, 4, 5].map((i) => (
      <line
        key={`h-${i}`}
        x1="40"
        y1={40 + i * 40}
        x2="390"
        y2={40 + i * 40}
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    ))}

    {/* Chart line */}
    <polyline
      points="50,180 80,160 110,150 140,120 170,100 200,85 230,70 260,55 290,45 320,40 350,50"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="3"
    />

    {/* Fill area */}
    <polygon
      points="50,180 80,160 110,150 140,120 170,100 200,85 230,70 260,55 290,45 320,40 350,50 350,220 50,220"
      fill="#3b82f6"
      opacity="0.1"
    />

    {/* Dots on line */}
    {[50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350].map((x, i) => {
      const yValues = [180, 160, 150, 120, 100, 85, 70, 55, 45, 40, 50];
      return (
        <circle key={i} cx={x} cy={yValues[i]} r="4" fill="#3b82f6" />
      );
    })}

    {/* X-axis labels */}
    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'].map(
      (month, i) => (
        <text
          key={month}
          x={50 + i * 30}
          y="235"
          textAnchor="middle"
          fontSize="12"
          fill="#9ca3af"
        >
          {month}
        </text>
      )
    )}
  </svg>
);

// Simple Bar Chart Component
const SimpleBarChart = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full">
    {/* Grid lines */}
    {[1, 2, 3, 4, 5].map((i) => (
      <line
        key={`h-${i}`}
        x1="40"
        y1={40 + i * 40}
        x2="390"
        y2={40 + i * 40}
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    ))}

    {/* Bars */}
    {[
      { x: 40, height: 100 },
      { x: 58, height: 90 },
      { x: 76, height: 110 },
      { x: 94, height: 95 },
      { x: 112, height: 120 },
      { x: 130, height: 105 },
      { x: 148, height: 130 },
      { x: 166, height: 115 },
      { x: 184, height: 140 },
      { x: 202, height: 125 },
      { x: 220, height: 135 },
      { x: 238, height: 110 },
      { x: 256, height: 145 },
      { x: 274, height: 120 },
      { x: 292, height: 150 },
      { x: 310, height: 130 },
      { x: 328, height: 165 },
      { x: 346, height: 170 },
    ].map((bar, i) => (
      <rect
        key={i}
        x={bar.x}
        y={180 - bar.height}
        width="14"
        height={bar.height}
        fill="#3b82f6"
        rx="2"
      />
    ))}

    {/* X-axis labels */}
    {['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'].map(
      (day, i) => (
        i % 2 === 0 && (
          <text
            key={day}
            x={40 + i * 9}
            y="235"
            textAnchor="middle"
            fontSize="11"
            fill="#9ca3af"
          >
            {day}
          </text>
        )
      )
    )}
  </svg>
);

export default AdminDashboard;
