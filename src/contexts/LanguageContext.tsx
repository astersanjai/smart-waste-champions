import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    leaderboard: 'Leaderboard',
    training: 'Training',
    reportWaste: 'Report Waste',
    collector: 'Collector',
    admin: 'Admin',
    
    // Home page
    heroTitle: 'Smart Waste Management',
    heroSubtitle: 'Building cleaner communities through technology and citizen engagement',
    heroDescription: 'Join thousands of citizens making a difference in waste management. Earn points, learn best practices, and contribute to a sustainable future.',
    
    // Dashboard
    myPoints: 'My Points',
    currentLevel: 'Current Level',
    totalCollections: 'Total Collections',
    monthlyProgress: 'Monthly Progress',
    recentActivity: 'Recent Activity',
    collectionHistory: 'Collection History',
    
    // Leaderboard
    communityLeaders: 'Community Leaders',
    topPerformers: 'Top Performers',
    yourRank: 'Your Rank',
    
    // Training
    trainingModules: 'Training Modules',
    completedModules: 'Completed Modules',
    earnPoints: 'Earn Points',
    
    // Common
    points: 'Points',
    collections: 'Collections',
    location: 'Location',
    status: 'Status',
    date: 'Date',
    type: 'Type',
    weight: 'Weight',
    startLearning: 'Start Learning',
    viewDetails: 'View Details',
    getStarted: 'Get Started',
    profile: 'Profile',
    notifications: 'Notifications',
    settings: 'Settings',
    logout: 'Logout',
  },
  ta: {
    // Navigation
    home: 'முகப்பு',
    dashboard: 'டாஷ்போர்டு',
    leaderboard: 'தலைமை பலகை',
    training: 'பயிற்சி',
    reportWaste: 'கழிவு புகார்',
    collector: 'சேகரிப்பாளர்',
    admin: 'நிர்வாகம்',
    
    // Home page
    heroTitle: 'ஸ்மார்ட் கழிவு மேலாண்மை',
    heroSubtitle: 'தொழில்நுட்பம் மற்றும் குடிமக்கள் ஈடுபாட்டின் மூலம் சுத்தமான சமூகங்களை உருவாக்குதல்',
    heroDescription: 'கழிவு மேலாண்மையில் மாற்றத்தை ஏற்படுத்தும் ஆயிரக்கணக்கான குடிமக்களுடன் சேருங்கள். புள்ளிகளைப் பெறுங்கள், சிறந்த நடைமுறைகளைக் கற்றுக்கொள்ளுங்கள், மற்றும் நிலையான எதிர்காலத்திற்கு பங்களிப்பு செய்யுங்கள்.',
    
    // Dashboard
    myPoints: 'என் புள்ளிகள்',
    currentLevel: 'தற்போதைய நிலை',
    totalCollections: 'மொத்த சேகரிப்புகள்',
    monthlyProgress: 'மாதாந்திர முன்னேற்றம்',
    recentActivity: 'சமீபத்திய செயல்பாடு',
    collectionHistory: 'சேகரிப்பு வரலாறு',
    
    // Leaderboard
    communityLeaders: 'சமூக தலைவர்கள்',
    topPerformers: 'சிறந்த செயல்பாட்டாளர்கள்',
    yourRank: 'உங்கள் தரவரிசை',
    
    // Training
    trainingModules: 'பயிற்சி தொகுதிகள்',
    completedModules: 'நிறைவு செய்யப்பட்ட தொகுதிகள்',
    earnPoints: 'புள்ளிகளைப் பெறுங்கள்',
    
    // Common
    points: 'புள்ளிகள்',
    collections: 'சேகரிப்புகள்',
    location: 'இடம்',
    status: 'நிலை',
    date: 'தேதி',
    type: 'வகை',
    weight: 'எடை',
    startLearning: 'கற்றல் தொடங்கு',
    viewDetails: 'விவரங்களைப் பார்க்கவும்',
    getStarted: 'தொடங்கு',
    profile: 'சுயவிவரம்',
    notifications: 'அறிவிப்புகள்',
    settings: 'அமைப்புகள்',
    logout: 'வெளியேறு',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};