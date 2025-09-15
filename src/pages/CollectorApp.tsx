import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  QrCode, 
  Truck, 
  Navigation, 
  CheckCircle,
  MapPin,
  Clock,
  Package,
  Route,
  Camera,
  Weight,
  User,
  Star
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CollectorApp = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [scanMode, setScanMode] = useState(false);
  const [scannedCode, setScannedCode] = useState('');

  const todayRoute = [
    { id: 'stop-1', address: 'Anna Nagar Main Road', households: 15, status: 'completed', points: 150 },
    { id: 'stop-2', address: 'T. Nagar Market Area', households: 22, status: 'in-progress', points: 220 },
    { id: 'stop-3', address: 'Adyar Residential Complex', households: 18, status: 'pending', points: 180 },
    { id: 'stop-4', address: 'Velachery IT Park', households: 12, status: 'pending', points: 120 },
  ];

  const recentCollections = [
    { id: 'col-1', household: 'Priya Sharma', type: 'Organic', weight: 2.5, points: 125, verified: true },
    { id: 'col-2', household: 'Rajesh Kumar', type: 'Recyclable', weight: 1.8, points: 90, verified: true },
    { id: 'col-3', household: 'Meera Patel', type: 'Mixed', weight: 3.2, points: 160, verified: false },
  ];

  const simulateQRScan = () => {
    setScanMode(true);
    // Simulate QR scan after 2 seconds
    setTimeout(() => {
      const mockQRData = `HOUSEHOLD_${Math.floor(Math.random() * 1000)}`;
      setScannedCode(mockQRData);
      setScanMode(false);
      toast({
        title: "QR Code Scanned Successfully!",
        description: `Household code: ${mockQRData}`,
      });
    }, 2000);
  };

  const verifyCollection = (collectionId: string) => {
    toast({
      title: "Collection Verified!",
      description: "Points have been awarded to the citizen.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-white';
      case 'in-progress':
        return 'bg-warning text-white';
      case 'pending':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Collector Dashboard
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Manage your collection routes and verify waste pickups
        </p>
      </div>

      {/* Daily Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-card border-0 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Today's Route</span>
              <Route className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">4 stops</div>
            <div className="text-sm text-muted-foreground">67 households</div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-success/10 to-success/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Collections</span>
              <Package className="w-4 h-4 text-success" />
            </div>
            <div className="text-2xl font-bold text-success">28</div>
            <div className="text-sm text-muted-foreground">completed today</div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-warning/10 to-warning/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Total Weight</span>
              <Weight className="w-4 h-4 text-warning" />
            </div>
            <div className="text-2xl font-bold text-warning">124 kg</div>
            <div className="text-sm text-muted-foreground">collected today</div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-accent to-accent/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Efficiency</span>
              <Star className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">94%</div>
            <div className="text-sm text-muted-foreground">route completion</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* QR Scanner & Route */}
        <div className="lg:col-span-2 space-y-6">
          {/* QR Scanner */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <QrCode className="w-5 h-5 text-primary" />
                <span>QR Code Scanner</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 border-2 border-dashed border-border rounded-lg">
                {scanMode ? (
                  <div className="space-y-4">
                    <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-muted-foreground">Scanning QR code...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <QrCode className="w-16 h-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Scan household QR code to verify collection</p>
                    {scannedCode && (
                      <div className="p-3 bg-success/10 text-success rounded-lg">
                        Last scanned: {scannedCode}
                      </div>
                    )}
                    <Button 
                      onClick={simulateQRScan}
                      className="gradient-primary text-white"
                      disabled={scanMode}
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Start Scanning
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Manual Entry */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Or enter household code manually:</p>
                <div className="flex space-x-2">
                  <Input placeholder="Enter household code" className="flex-1" />
                  <Button variant="outline">
                    Verify
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today's Route */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Navigation className="w-5 h-5 text-primary" />
                <span>Today's Route</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayRoute.map((stop, index) => (
                  <div key={stop.id} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{stop.address}</h4>
                        <p className="text-sm text-muted-foreground">{stop.households} households</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(stop.status)}>
                        {stop.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">
                        {stop.points} points available
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6 gradient-primary text-white">
                <Navigation className="w-4 h-4 mr-2" />
                Start Navigation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Collections & Profile */}
        <div className="space-y-6">
          {/* Collector Profile */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <span>Collector Profile</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Collector #C001</h3>
                <p className="text-muted-foreground mb-4">Zone: Anna Nagar</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">156</div>
                    <div className="text-sm text-muted-foreground">Collections Today</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">4.8</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Collections */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Recent Collections</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCollections.map((collection) => (
                <div key={collection.id} className="p-4 bg-accent/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{collection.household}</h4>
                    {collection.verified ? (
                      <Badge className="bg-success text-white">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => verifyCollection(collection.id)}
                      >
                        Verify
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{collection.type} - {collection.weight} kg</span>
                    <span className="font-medium text-warning">+{collection.points} pts</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Report Issue
              </Button>
              <Button className="w-full" variant="outline">
                <Package className="w-4 h-4 mr-2" />
                Update Inventory
              </Button>
              <Button className="w-full" variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Break Time
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CollectorApp;