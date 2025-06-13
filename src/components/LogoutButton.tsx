
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of your account.",
    });
    navigate('/login');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleLogout}
      className="text-white hover:bg-slate-700"
    >
      <LogOut className="w-5 h-5" />
    </Button>
  );
};

export default LogoutButton;
