import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Navigation, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Truck, 
  Route,
  Play,
  Pause,
  RotateCcw,
  Phone
} from 'lucide-react';

const TruckNavigation = () => {
  const { t, language } = useLanguage();
  const [currentLocation, setCurrentLocation] = useState({ lat: 13.0827, lng: 80.2707 });
  const [isNavigating, setIsNavigating] = useState(false);
  const [routeProgress, setRouteProgress] = useState(45);

  // Mock route data
  const currentRoute = {
    id: "R001",
    name: language === 'en' ? "T. Nagar Collection Route" : "டி. நகர் சேகரிப்பு வழி",
    totalStops: 8,
    completedStops: 3,
    estimatedTime: "2h 30m",
    distance: "15.2 km"
  };

  const collectionPoints = [
    {
      id: "CP001",
      name: language === 'en' ? "Pondy Bazaar" : "பாண்டி பஜார்",
      address: language === 'en' ? "Pondy Bazaar, T. Nagar" : "பாண்டி பஜார், டி. நகர்",
      status: "completed",
      estimatedWaste: "45 kg",
      timeSlot: "09:00 AM",
      priority: "high"
    },
    {
      id: "CP002", 
      name: language === 'en' ? "Ranganathan Street" : "ரங்கநாதன் தெரு",
      address: language === 'en' ? "Ranganathan St, T. Nagar" : "ரங்கநாதன் தெரு, டி. நகர்",
      status: "completed",
      estimatedWaste: "38 kg",
      timeSlot: "09:30 AM",
      priority: "medium"
    },
    {
      id: "CP003",
      name: language === 'en' ? "Usman Road" : "உஸ்மான் சாலை",
      address: language === 'en' ? "Usman Road, T. Nagar" : "உஸ்மான் சாலை, டி. நகர்",
      status: "current",
      estimatedWaste: "52 kg",
      timeSlot: "10:00 AM",
      priority: "high"
    },
    {
      id: "CP004",
      name: language === 'en' ? "Mambalam Railway Station" : "மாம்பலம் ரயில் நிலையம்",
      address: language === 'en' ? "CIT Nagar, Mambalam" : "சிஐடி நகர், மாம்பலம்",
      status: "pending",
      estimatedWaste: "28 kg", 
      timeSlot: "10:30 AM",
      priority: "low"
    },
    {
      id: "CP005",
      name: language === 'en' ? "GN Chetty Road" : "ஜி.என். செட்டி சாலை",
      address: language === 'en' ? "GN Chetty Rd, T. Nagar" : "ஜி.என். செட்டி சாலை, டி. நகர்",
      status: "pending",
      estimatedWaste: "41 kg",
      timeSlot: "11:00 AM",
      priority: "medium"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'current': return 'bg-primary text-primary-foreground';
      case 'pending': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {language === 'en' ? 'Truck Navigation' : 'டிரக் வழிசெலுத்தல்'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'en' ? 'Real-time navigation and route management' : 'நேரலை வழிசெலுத்தல் மற்றும் பாதை மேலாண்மை'}
          </p>
        </div>
        <Button
          size="lg"
          onClick={() => setIsNavigating(!isNavigating)}
          className={isNavigating ? "bg-warning hover:bg-warning/90" : "gradient-primary"}
        >
          {isNavigating ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
          {isNavigating 
            ? (language === 'en' ? 'Pause Route' : 'பாதையை நிறுத்து')
            : (language === 'en' ? 'Start Navigation' : 'வழிசெலுத்தலை தொடங்கு')
          }
        </Button>
      </div>

      {/* Current Route Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Route className="w-5 h-5" />
              <span>{language === 'en' ? 'Current Route' : 'தற்போதைய பாதை'}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{currentRoute.name}</h3>
                <p className="text-muted-foreground">
                  {language === 'en' ? 'Route ID:' : 'பாதை அடையாள எண்:'} {currentRoute.id}
                </p>
              </div>
              <Badge variant="outline" className="text-sm">
                {currentRoute.completedStops}/{currentRoute.totalStops} {language === 'en' ? 'Stops' : 'நிறுத்தங்கள்'}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{language === 'en' ? 'Progress' : 'முன்னேற்றம்'}</span>
                <span>{routeProgress}%</span>
              </div>
              <Progress value={routeProgress} className="h-3" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{language === 'en' ? 'ETA:' : 'எதிர்பார்க்கப்படும் நேரம்:'} {currentRoute.estimatedTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{language === 'en' ? 'Distance:' : 'தூரம்:'} {currentRoute.distance}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'en' ? 'Quick Actions' : 'விரைவு செயல்கள்'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Phone className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Call Supervisor' : 'மேற்பார்வையாளரை அழைக்கவும்'}
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <AlertTriangle className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Report Issue' : 'பிரச்சனையை தெரிவிக்கவும்'}
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <RotateCcw className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Recalculate Route' : 'பாதையை மீண்டும் கணக்கிடுங்கள்'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Collection Points */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="w-5 h-5" />
            <span>{language === 'en' ? 'Collection Points' : 'சேகரிப்பு புள்ளிகள்'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {collectionPoints.map((point, index) => (
              <div key={point.id} className={`p-4 rounded-lg border transition-smooth ${
                point.status === 'current' 
                  ? 'border-primary bg-primary/5 shadow-elevated' 
                  : 'border-border bg-card hover:bg-accent'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        point.status === 'completed' 
                          ? 'bg-success text-success-foreground'
                          : point.status === 'current'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {point.status === 'completed' ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold">{point.name}</h4>
                        <Badge className={`text-xs ${getStatusColor(point.status)}`}>
                          {point.status === 'completed' 
                            ? (language === 'en' ? 'Completed' : 'முடிந்தது')
                            : point.status === 'current'
                            ? (language === 'en' ? 'Current' : 'தற்போதைய')
                            : (language === 'en' ? 'Pending' : 'நிலுவையில்')
                          }
                        </Badge>
                        <Badge className={`text-xs ${getPriorityColor(point.priority)}`}>
                          {point.priority === 'high' 
                            ? (language === 'en' ? 'High' : 'உயர்')
                            : point.priority === 'medium'
                            ? (language === 'en' ? 'Medium' : 'நடுத்தர')
                            : (language === 'en' ? 'Low' : 'குறைந்த')
                          }
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{point.address}</p>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{point.timeSlot}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>{language === 'en' ? 'Est. Waste:' : 'எதிர்பார்க்கப்படும் கழிவு:'}</span>
                          <span className="font-medium">{point.estimatedWaste}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {point.status === 'current' && (
                    <Button size="sm" className="gradient-primary">
                      <Navigation className="w-4 h-4 mr-1" />
                      {language === 'en' ? 'Navigate' : 'செல்க'}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TruckNavigation;