import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutGrid,
  Users,
  MessageCircle,
  MessageSquare,
  Settings,
  BarChart3,
  FileText,
  CreditCard,
  Zap,
  ChevronDown,
  Search,
  MoreVertical,
  Plus,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

const ManageUsers = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState(new Set());

  // Sample users data
  const allUsers = [
    { id: 1, name: 'Lisa Bennett', avatar: 'LB', role: 'Founder', plan: 'Free', conversations: 305, status: 'Active' },
    { id: 2, name: 'Mark Chen', avatar: 'MC', role: 'Investor', plan: 'Pro', conversations: 540, status: 'Active' },
    { id: 3, name: 'Emily Carter', avatar: 'EC', role: 'Creator', plan: 'Premium', conversations: 1280, status: 'Active' },
    { id: 4, name: 'David Moore', avatar: 'DM', role: 'Executive', plan: 'Standard', conversations: 40, status: 'Active' },
    { id: 5, name: 'Sarah Patel', avatar: 'SP', role: 'Investor', plan: 'Pro', conversations: 480, status: 'Active' },
    { id: 6, name: 'James Cooper', avatar: 'JC', role: 'Founder', plan: 'Standard', conversations: 125, status: 'Suspended' },
    { id: 7, name: 'Nicole Adams', avatar: 'NA', role: 'Executive', plan: 'Free', conversations: 88, status: 'Active' },
    { id: 8, name: 'Alex Turner', avatar: 'AT', role: 'Creator', plan: 'Pro', conversations: 620, status: 'Active' },
    { id: 9, name: 'Olivia Ross', avatar: 'OR', role: 'Creator', plan: 'Premium', conversations: 1080, status: 'Active' },
    { id: 10, name: 'Daniel Scott', avatar: 'DS', role: 'Investor', plan: 'Free', conversations: 320, status: 'Active' },
    { id: 11, name: 'Jessica Murphy', avatar: 'JM', role: 'Creator', plan: 'Pro', conversations: 510, status: 'Active' },
    { id: 12, name: 'Civis Evans', avatar: 'CE', role: 'Creator', plan: 'Premium', conversations: 1015, status: 'Active' },
  ];

  // Filter users
  const filteredUsers = allUsers.filter(user => {
    const matchesRole = selectedRole === 'all' || user.role.toLowerCase() === selectedRole.toLowerCase();
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const usersPerPage = 10;
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const displayedUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  const roleIcons = {
    Founder: { color: 'bg-blue-100', icon: '👤', textColor: 'text-blue-600' },
    Investor: { color: 'bg-cyan-100', icon: '👤', textColor: 'text-cyan-600' },
    Creator: { color: 'bg-orange-100', icon: '👤', textColor: 'text-orange-600' },
    Executive: { color: 'bg-amber-100', icon: '👤', textColor: 'text-amber-600' },
  };

  const planColors = {
    Free: 'bg-blue-100 text-blue-700',
    Pro: 'bg-blue-100 text-blue-700',
    Premium: 'bg-purple-100 text-purple-700',
    Standard: 'bg-gray-100 text-gray-700',
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Founder':
        return 'text-blue-600';
      case 'Investor':
        return 'text-cyan-600';
      case 'Creator':
        return 'text-orange-600';
      case 'Executive':
        return 'text-amber-600';
      default:
        return 'text-gray-600';
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Founder':
        return '👤';
      case 'Investor':
        return '👤';
      case 'Creator':
        return '👤';
      case 'Executive':
        return '👤';
      default:
        return '👤';
    }
  };

  const toggleUserSelection = (userId) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(userId)) {
      newSelected.delete(userId);
    } else {
      newSelected.add(userId);
    }
    setSelectedUsers(newSelected);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-48' : 'w-0'} hidden md:block fixed md:relative h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 overflow-y-auto transition-all duration-300 z-40`}>
        <div className="flex items-center gap-2 mb-8 pb-6 border-b border-blue-600">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-blue-700 font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold">Saydoo</span>
        </div>

        <nav className="space-y-2">
          <NavItem icon={LayoutGrid} label="Dashboard" onClick={() => navigate('/admin')} />
          <NavItem icon={Users} label="Users" active={true} onClick={() => navigate('/admin/users')} />
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
            <h1 className="text-lg md:text-2xl font-bold text-gray-800">Manage Users</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-gray-700 font-medium">Admin</span>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <ChevronDown size={18} className="text-gray-600 hidden sm:block" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 items-stretch md:items-center">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm w-full sm:w-auto">
                    All Roles
                    <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg hidden group-hover:block z-10">
                    <button
                      onClick={() => setSelectedRole('all')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${selectedRole === 'all' ? 'bg-blue-50 text-blue-600' : ''}`}
                    >
                      All Roles
                    </button>
                    <button
                      onClick={() => setSelectedRole('founder')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${selectedRole === 'founder' ? 'bg-blue-50 text-blue-600' : ''}`}
                    >
                      Founder
                    </button>
                    <button
                      onClick={() => setSelectedRole('investor')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${selectedRole === 'investor' ? 'bg-blue-50 text-blue-600' : ''}`}
                    >
                      Investor
                    </button>
                    <button
                      onClick={() => setSelectedRole('creator')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${selectedRole === 'creator' ? 'bg-blue-50 text-blue-600' : ''}`}
                    >
                      Creator
                    </button>
                    <button
                      onClick={() => setSelectedRole('executive')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${selectedRole === 'executive' ? 'bg-blue-50 text-blue-600' : ''}`}
                    >
                      Executive
                    </button>
                  </div>
                </div>

                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm px-3">
                  Filter
                </button>

                <button className="flex items-center gap-2 px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm w-full sm:w-auto justify-center sm:justify-start">
                  <Plus size={16} />
                  <span className="whitespace-nowrap">New User</span>
                </button>
              </div>
            </div>

            {/* Role Pills */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setSelectedRole('all')}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg ${ selectedRole === 'all' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Founder
              </button>
              <button
                onClick={() => setSelectedRole('investor')}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg ${selectedRole === 'investor' ? 'bg-cyan-100 text-cyan-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                Investor
              </button>
              <button
                onClick={() => setSelectedRole('creator')}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg ${selectedRole === 'creator' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Creator
              </button>
              <button
                onClick={() => setSelectedRole('executive')}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg ${selectedRole === 'executive' ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                Executive
              </button>
            </div>

            {/* Users Count */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-700 font-medium">Users {filteredUsers.length}</span>
              <ChevronDown size={18} className="text-gray-400" />
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-3 md:px-6 py-3 text-left min-w-[40px]">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded cursor-pointer"
                        checked={selectedUsers.size === displayedUsers.length && displayedUsers.length > 0}
                        onChange={() => {
                          if (selectedUsers.size === displayedUsers.length) {
                            setSelectedUsers(new Set());
                          } else {
                            const newSelected = new Set(displayedUsers.map(u => u.id));
                            setSelectedUsers(newSelected);
                          }
                        }}
                      />
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">
                      Name <ChevronDown size={12} className="inline ml-1" />
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap hidden sm:table-cell">
                      Role <ChevronDown size={12} className="inline ml-1" />
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap hidden md:table-cell">
                      Plan <ChevronDown size={12} className="inline ml-1" />
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap hidden lg:table-cell">
                      Conversations <ChevronDown size={12} className="inline ml-1" />
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">
                      Status <ChevronDown size={12} className="inline ml-1" />
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">
                      Actions <ChevronDown size={12} className="inline ml-1" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedUsers.map((user, idx) => (
                    <tr key={user.id} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-3 md:px-6 py-3 md:py-4 min-w-[40px]">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded cursor-pointer"
                          checked={selectedUsers.has(user.id)}
                          onChange={() => toggleUserSelection(user.id)}
                        />
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4">
                        <div className="flex items-center gap-2 md:gap-3 min-w-0">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                            {user.avatar}
                          </div>
                          <span className="font-medium text-gray-900 text-xs md:text-sm truncate">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 hidden sm:table-cell">
                        <div className={`flex items-center gap-1 md:gap-2 ${getRoleColor(user.role)}`}>
                          <div className={`w-2 h-2 rounded-full ${
                            user.role === 'Founder' ? 'bg-blue-500' :
                            user.role === 'Investor' ? 'bg-cyan-500' :
                            user.role === 'Creator' ? 'bg-orange-500' :
                            'bg-amber-500'
                          }`}></div>
                          <span className="font-medium text-xs md:text-sm">{user.role}</span>
                        </div>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 hidden md:table-cell">
                        <span className={`px-2 md:px-3 py-1 rounded text-xs font-medium ${planColors[user.plan]}`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-gray-700 font-medium text-xs md:text-sm hidden lg:table-cell">{user.conversations}</td>
                      <td className="px-3 md:px-6 py-3 md:py-4">
                        <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          user.status === 'Active'
                            ? 'bg-cyan-100 text-cyan-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4">
                        <button className="text-gray-500 hover:text-gray-700">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 md:mt-6 gap-4">
              <div className="text-gray-600 text-xs md:text-sm">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default ManageUsers;
