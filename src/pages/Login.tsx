
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Lock, GraduationCap, Users, UserCheck, Shield } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const roleConfig = {
    student: {
      icon: GraduationCap,
      title: 'Student Portal',
      description: 'Access your courses, grades, and assignments',
      gradient: 'from-blue-600 to-purple-600',
      route: '/student-dashboard'
    },
    faculty: {
      icon: Users,
      title: 'Faculty Dashboard',
      description: 'Manage courses, students, and academic content',
      gradient: 'from-green-600 to-teal-600',
      route: '/faculty-dashboard'
    },
    hod: {
      icon: UserCheck,
      title: 'HOD Command Center',
      description: 'Department oversight and management',
      gradient: 'from-orange-600 to-red-600',
      route: '/hod-dashboard'
    },
    admin: {
      icon: Shield,
      title: 'Admin Control Panel',
      description: 'System administration and school management',
      gradient: 'from-purple-600 to-pink-600',
      route: '/admin-dashboard'
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Login Successful",
          description: `Welcome to ${roleConfig[role as keyof typeof roleConfig].title}`,
        });
        navigate(roleConfig[role as keyof typeof roleConfig].route);
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid credentials",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const selectedRole = roleConfig[role as keyof typeof roleConfig];
  const IconComponent = selectedRole.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] pointer-events-none" />
      
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Role Preview */}
        <div className="hidden lg:block space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">
              School Management
              <span className="block text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Unified Portal
              </span>
            </h1>
            <p className="text-slate-300 text-lg">
              Access your personalized dashboard based on your role
            </p>
          </div>

          {/* Role Preview Card */}
          <Card className={`bg-gradient-to-r ${selectedRole.gradient} border-0 text-white transform transition-all duration-300`}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <IconComponent className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl">{selectedRole.title}</CardTitle>
              <CardDescription className="text-white/80">
                {selectedRole.description}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Features List */}
          <div className="space-y-3 text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>Secure role-based authentication</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Modern, responsive interface</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Real-time data synchronization</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-slate-300">
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleLogin}>
            <CardContent className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-white text-sm font-medium">Select Your Role</Label>
                <RadioGroup value={role} onValueChange={setRole} className="grid grid-cols-2 gap-4">
                  {Object.entries(roleConfig).map(([key, config]) => {
                    const Icon = config.icon;
                    return (
                      <div key={key} className="relative">
                        <RadioGroupItem
                          value={key}
                          id={key}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={key}
                          className={`flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            role === key
                              ? 'border-blue-500 bg-blue-500/10 text-white'
                              : 'border-slate-600 bg-slate-700/30 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          <Icon className="w-6 h-6 mb-2" />
                          <span className="text-sm font-medium capitalize">{key}</span>
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">
                  Email or Username
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="rounded border-slate-600 bg-slate-700"
                  />
                  <Label htmlFor="remember" className="text-sm text-slate-300">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
                  Forgot password?
                </Button>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                type="submit"
                className={`w-full bg-gradient-to-r ${selectedRole.gradient} hover:opacity-90 text-white font-medium py-2.5 transition-all duration-200`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4" />
                    Sign in to {selectedRole.title}
                  </div>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
