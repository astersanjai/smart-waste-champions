import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Recycle, 
  Users, 
  Trophy, 
  BookOpen, 
  MapPin, 
  Smartphone,
  Leaf,
  BarChart3
} from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BarChart3,
      title: 'Citizen Dashboard',
      titleTamil: 'குடிமக்கள் டாஷ்போர்டு',
      description: 'Track your waste collection points and view your environmental impact',
      descriptionTamil: 'உங்கள் கழிவு சேகரிப்பு புள்ளிகளைக் கண்காணித்து சுற்றுச்சூழல் தாக்கத்தைப் பார்க்கவும்'
    },
    {
      icon: Trophy,
      title: 'Community Leaderboard',
      titleTamil: 'சமூக தலைமை பலகை',
      description: 'Compete with neighbors and see top performing streets and wards',
      descriptionTamil: 'அண்டைவீட்டாருடன் போட்டியிட்டு சிறந்த தெருக்கள் மற்றும் வார்டுகளைப் பார்க்கவும்'
    },
    {
      icon: BookOpen,
      title: 'Training & Videos',
      titleTamil: 'பயிற்சி மற்றும் வீடியோக்கள்',
      description: 'Learn proper waste segregation and earn certificates',
      descriptionTamil: 'சரியான கழிவு பிரிப்பைக் கற்றுக்கொண்டு சான்றிதழ்களைப் பெறுங்கள்'
    },
    {
      icon: MapPin,
      title: 'Report Waste Issues',
      titleTamil: 'கழிவு பிரச்சினைகளை புகாரளிக்கவும்',
      description: 'Report waste issues with photos and location pins',
      descriptionTamil: 'புகைப்படங்கள் மற்றும் இடம் பின்களுடன் கழிவு பிரச்சினைகளை புகாரளிக்கவும்'
    },
    {
      icon: Smartphone,
      title: 'Collector App',
      titleTamil: 'சேகரிப்பாளர் ஆப்',
      description: 'QR code scanning and route optimization for waste collectors',
      descriptionTamil: 'கழிவு சேகரிப்பாளர்களுக்கான QR கோட் ஸ்கேனிங் மற்றும் வழி மேம்படுத்தல்'
    },
    {
      icon: Users,
      title: 'Admin Dashboard',
      titleTamil: 'நிர்வாக டாஷ்போர்டு',
      description: 'Comprehensive analytics and compliance monitoring for administrators',
      descriptionTamil: 'நிர்வாகிகளுக்கான விரிவான பகுப்பாய்வு மற்றும் இணக்க கண்காணிப்பு'
    }
  ];

  const stats = [
    { number: '3,280+', label: 'Active Citizens', labelTamil: 'செயலில் உள்ள குடிமக்கள்' },
    { number: '15,420+', label: 'Collections', labelTamil: 'சேகரிப்புகள்' },
    { number: '87%', label: 'Compliance Rate', labelTamil: 'இணக்க விகிதம்' },
    { number: '145+', label: 'Active Collectors', labelTamil: 'செயலில் உள்ள சேகரிப்பாளர்கள்' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-2xl mb-6 animate-bounce-gentle">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              {t('heroTitle')}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-slide-up">
              {t('heroSubtitle')}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto animate-slide-up">
              {t('heroDescription')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Link to="/dashboard">
              <Button size="lg" className="gradient-primary text-white shadow-elevated hover:shadow-card transition-smooth text-xl px-8 py-4">
                {t('getStarted')}
              </Button>
            </Link>
            <Link to="/training">
              <Button variant="outline" size="lg" className="text-xl px-8 py-4">
                {t('startLearning')}
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-card border-0 bg-gradient-to-br from-card to-accent/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-secondary/50 to-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Complete Waste Management Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering citizens, collectors, and administrators with modern tools for sustainable waste management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="gradient-hero shadow-elevated border-0 text-white">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join our community of environmentally conscious citizens and start earning points for responsible waste management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" className="text-xl px-8 py-4">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/report">
                  <Button size="lg" variant="outline" className="text-xl px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                    Report an Issue
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;