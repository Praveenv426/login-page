
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, ClipboardList, TrendingUp, User, Bell } from 'lucide-react';

const FacultyDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Faculty Dashboard</h1>
                <p className="text-sm text-slate-300">Neon Faculty Portal</p>
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
          <h2 className="text-3xl font-bold text-white mb-2">Good morning, Dr. Smith!</h2>
          <p className="text-slate-300">Manage your courses and track student progress.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Quick Stats */}
          <Card className="bg-gradient-to-r from-green-600 to-teal-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4</div>
              <p className="text-green-100">Active courses</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">127</div>
              <p className="text-blue-100">Total enrolled</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="w-5 h-5" />
                Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-purple-100">Pending review</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-0 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Avg. Grade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">85%</div>
              <p className="text-orange-100">This semester</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Management */}
        <Card className="mt-8 bg-slate-800/50 backdrop-blur-xl border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Course Overview</CardTitle>
            <CardDescription className="text-slate-300">
              Manage your teaching schedule and student progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { course: 'Advanced Mathematics', students: 32, assignments: 3, avgGrade: '88%' },
              { course: 'Calculus I', students: 45, assignments: 5, avgGrade: '82%' },
              { course: 'Statistics', students: 28, assignments: 2, avgGrade: '91%' },
              { course: 'Linear Algebra', students: 22, assignments: 2, avgGrade: '79%' },
            ].map((course, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 bg-slate-700/30 rounded-lg">
                <div>
                  <p className="text-white font-medium">{course.course}</p>
                  <p className="text-slate-300 text-sm">{course.students} students</p>
                </div>
                <div>
                  <p className="text-white">{course.assignments}</p>
                  <p className="text-slate-300 text-sm">Assignments</p>
                </div>
                <div>
                  <p className="text-white">{course.avgGrade}</p>
                  <p className="text-slate-300 text-sm">Avg. Grade</p>
                </div>
                <div className="flex justify-end">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FacultyDashboard;
