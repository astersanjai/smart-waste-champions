import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BarChart3, 
  Trophy, 
  GraduationCap, 
  AlertTriangle, 
  Truck, 
  Settings,
  Menu,
  X,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/', icon: Home, label: t('home') },
    { path: '/dashboard', icon: BarChart3, label: t('dashboard') },
    { path: '/leaderboard', icon: Trophy, label: t('leaderboard') },
    { path: '/training', icon: GraduationCap, label: t('training') },
    { path: '/report', icon: AlertTriangle, label: t('reportWaste') },
    { path: '/collector', icon: Truck, label: t('collector') },
    { path: '/admin', icon: Settings, label: t('admin') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between p-6 bg-card shadow-card rounded-2xl m-6">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">
              {language === 'en' ? 'Smart Waste' : 'ஸ்மார்ட் கழிவு'}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="lg"
                    className={cn(
                      "flex items-center space-x-2 transition-smooth",
                      isActive && "gradient-primary text-white shadow-elevated"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="lg"
            onClick={toggleLanguage}
            className="flex items-center space-x-2"
          >
            <Globe className="w-5 h-5" />
            <span className="font-medium">{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-card shadow-card">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              {language === 'en' ? 'Smart Waste' : 'ஸ்மார்ட் கழிவு'}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
            >
              <Globe className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-card animate-slide-up">
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="lg"
                      className={cn(
                        "w-full justify-start space-x-3 transition-smooth",
                        isActive && "gradient-primary text-white"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;