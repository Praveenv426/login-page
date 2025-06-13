
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Database, Settings, Activity, User, Bell } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Control Panel</h1>
                <p className="text-sm text-slate-300">Nebula School Control</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">System Overview</h2>
          <p className="text-slate-300">Monitor and manage the entire school management system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* System Stats */}
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">99.9%</div>
              <p className="text-purple-100">System uptime</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Database
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2.4TB</div>
              <p className="text-blue-100">Total storage</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-600 to-teal-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,247</div>
              <p className="text-green-100">Currently online</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <p className="text-orange-100">Pending maintenance</p>
            </CardContent>
          </Card>
        </div>

        {/* System Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">System Health</CardTitle>
              <CardDescription className="text-slate-300">
                Real-time system monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { service: 'Authentication Service', status: 'Online', uptime: '99.9%' },
                { service: 'Database Server', status: 'Online', uptime: '99.8%' },
                { service: 'File Storage', status: 'Online', uptime: '100%' },
                { service: 'Email Service', status: 'Warning', uptime: '98.5%' },
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{service.service}</p>
                    <p className="text-slate-300 text-sm">{service.uptime} uptime</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.status === 'Online' ? 'bg-green-600 text-green-100' : 'bg-yellow-600 text-yellow-100'
                  }`}>
                    {service.status}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activities</CardTitle>
              <CardDescription className="text-slate-300">
                System-wide administrative actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { action: 'User account created', user: 'john.doe@school.edu', time: '5 min ago' },
                { action: 'System backup completed', user: 'System', time: '1 hour ago' },
                { action: 'Database maintenance', user: 'admin@school.edu', time: '3 hours ago' },
                { action: 'Security scan completed', user: 'System', time: '6 hours ago' },
              ].map((activity, index) => (
                <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                  <p className="text-white font-medium">{activity.action}</p>
                  <div className="flex justify-between text-sm text-slate-300 mt-1">
                    <span>{activity.user}</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
