import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  MapPin, 
  Activity, 
  Gauge,
  Clock,
  Fuel,
  Route,
  Zap,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Navigation,
  BarChart3,
  Monitor,
  RefreshCw,
  Recycle,
  Factory,
  Timer
} from 'lucide-react';
import { 
  governmentTrucks, 
  wasteFlowData, 
  routeOptimizations, 
  governmentStats,
  type Truck as TruckType,
  type WasteFlow,
  type RouteOptimization
} from '@/data/mockData';

const GovernmentMonitoring = () => {
  const { t } = useLanguage();
  const [selectedTruck, setSelectedTruck] = useState<TruckType | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLastRefresh(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastRefresh(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const getTruckStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success text-white';
      case 'idle':
        return 'bg-warning text-white';
      case 'maintenance':
        return 'bg-destructive text-white';
      case 'offline':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getFlowStageColor = (stage: string) => {
    switch (stage) {
      case 'collection':
        return 'text-primary bg-primary/10';
      case 'transport':
        return 'text-warning bg-warning/10';
      case 'processing':
        return 'text-success bg-success/10';
      case 'disposal':
        return 'text-muted-foreground bg-muted/50';
      default:
        return 'text-muted-foreground bg-muted/50';
    }
  };

  const getFlowStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'in-progress':
        return 'text-primary';
      case 'delayed':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                Government Monitoring Center
              </h1>
              <p className="text-xl text-muted-foreground mt-1">
                Real-time waste management operations oversight
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="font-medium text-foreground">
                {lastRefresh.toLocaleTimeString()}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center space-x-2"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-card border-0 bg-success/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Active Trucks</span>
              <Truck className="w-5 h-5 text-success" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {governmentStats.activeTrucks}/{governmentStats.totalTrucks}
            </div>
            <div className="text-sm font-medium text-success">
              {Math.round((governmentStats.activeTrucks / governmentStats.totalTrucks) * 100)}% operational
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-primary/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Daily Collections</span>
              <Recycle className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {governmentStats.dailyCollections}
            </div>
            <div className="text-sm font-medium text-primary">
              {(governmentStats.totalWeight / 1000).toFixed(1)}T total weight
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-warning/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Route Efficiency</span>
              <Route className="w-5 h-5 text-warning" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {governmentStats.routeEfficiency}%
            </div>
            <div className="text-sm font-medium text-warning">
              {governmentStats.fuelSavings}L fuel saved
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-accent/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Response Time</span>
              <Timer className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {governmentStats.avgResponseTime}
            </div>
            <div className="text-sm font-medium text-primary">
              {governmentStats.resolvedReports}/{governmentStats.citizenReports} reports resolved
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Live Truck Tracking */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Navigation className="w-5 h-5 text-primary" />
              <span>Live Truck Tracking</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {governmentTrucks.map((truck) => (
              <div 
                key={truck.id} 
                className={`p-4 rounded-lg border cursor-pointer transition-smooth ${
                  selectedTruck?.id === truck.id ? 'border-primary bg-primary/5' : 'border-border bg-accent/30'
                }`}
                onClick={() => setSelectedTruck(truck)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{truck.vehicleNumber}</div>
                      <div className="text-sm text-muted-foreground">{truck.driverName}</div>
                    </div>
                  </div>
                  <Badge className={getTruckStatusColor(truck.status)}>
                    <Activity className="w-3 h-3 mr-1" />
                    {truck.status.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Load Capacity</span>
                    <span className="text-foreground">
                      {truck.currentLoad}kg / {truck.capacity}kg
                    </span>
                  </div>
                  <Progress value={(truck.currentLoad / truck.capacity) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm mt-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">Location</span>
                    </div>
                    <span className="text-foreground text-right">{truck.currentLocation.address}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">ETA</span>
                    </div>
                    <span className="text-foreground">{truck.estimatedCompletion}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Waste Flow Monitoring */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Waste Flow Pipeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {wasteFlowData.map((flow) => (
              <div key={flow.id} className="p-4 bg-accent/30 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getFlowStageColor(flow.stage)}`}>
                      {flow.stage === 'collection' && <Recycle className="w-4 h-4" />}
                      {flow.stage === 'transport' && <Truck className="w-4 h-4" />}
                      {flow.stage === 'processing' && <Factory className="w-4 h-4" />}
                      {flow.stage === 'disposal' && <CheckCircle className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground capitalize">{flow.stage}</div>
                      <div className="text-sm text-muted-foreground">{flow.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-foreground">{flow.weight}kg</div>
                    <div className={`text-sm font-medium ${getFlowStatusColor(flow.status)}`}>
                      {flow.status}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Truck: {flow.truckId}</span>
                  <span className="text-muted-foreground">{flow.timestamp}</span>
                </div>
                
                {flow.processingPlant && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    <Factory className="w-3 h-3 inline-block mr-1" />
                    {flow.processingPlant}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Route Optimization & Processing Plants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Route Optimization */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Route className="w-5 h-5 text-primary" />
              <span>Route Optimization</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {routeOptimizations.map((route) => (
              <div key={route.routeId} className="p-4 bg-accent/30 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-foreground">{route.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {route.completedStops}/{route.totalStops} stops completed
                    </div>
                  </div>
                  <Badge className="bg-primary text-white">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {route.efficiency}%
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">
                      {Math.round((route.completedStops / route.totalStops) * 100)}%
                    </span>
                  </div>
                  <Progress value={(route.completedStops / route.totalStops) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm mt-2">
                    <div className="flex items-center space-x-4">
                      <div>
                        <span className="text-muted-foreground">Est: </span>
                        <span className="text-foreground">{route.estimatedTime}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Actual: </span>
                        <span className="text-foreground">{route.actualTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-success">
                      <Fuel className="w-3 h-3" />
                      <span className="font-medium">{route.fuelSaved}L saved</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Processing Plants Status */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Factory className="w-5 h-5 text-primary" />
              <span>Processing Plants</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(governmentStats.processingPlants).map(([plant, data]) => (
              <div key={plant} className="p-4 bg-accent/30 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-foreground capitalize">
                      {plant.replace(/([A-Z])/g, ' $1').trim()} Plant
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {data.current}kg / {data.capacity}kg capacity
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`${data.efficiency > 90 ? 'bg-success' : 'bg-warning'} text-white`}>
                      <Gauge className="w-3 h-3 mr-1" />
                      {data.efficiency}%
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Utilization</span>
                    <span className="text-foreground">
                      {Math.round((data.current / data.capacity) * 100)}%
                    </span>
                  </div>
                  <Progress value={(data.current / data.capacity) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-muted-foreground">Processing Rate</span>
                    <span className="text-foreground">{(data.current / 8).toFixed(0)}kg/hour</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Selected Truck Details Modal/Panel could be added here */}
      {selectedTruck && (
        <Card className="mt-8 shadow-card border-0 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Truck className="w-5 h-5 text-primary" />
              <span>Truck Details - {selectedTruck.vehicleNumber}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Driver</label>
                  <p className="text-foreground">{selectedTruck.driverName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Route</label>
                  <p className="text-foreground">{selectedTruck.route}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Status</label>
                  <Badge className={getTruckStatusColor(selectedTruck.status)}>
                    {selectedTruck.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Today's Collections</label>
                  <p className="text-foreground">{selectedTruck.todayCollections} stops</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Load Status</label>
                  <p className="text-foreground">{selectedTruck.currentLoad}kg / {selectedTruck.capacity}kg</p>
                </div>
                {selectedTruck.batteryLevel && (
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Battery Level</label>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{selectedTruck.batteryLevel}%</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Current Location</label>
                  <p className="text-foreground">{selectedTruck.currentLocation.address}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Estimated Completion</label>
                  <p className="text-foreground">{selectedTruck.estimatedCompletion}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                  <p className="text-foreground">{selectedTruck.lastUpdated}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GovernmentMonitoring;