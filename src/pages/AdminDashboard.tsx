import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Recycle,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Truck,
  Target,
  Calendar,
  Activity
} from 'lucide-react';
import { adminStats } from '@/data/mockData';

const AdminDashboard = () => {
  const { t } = useLanguage();

  const kpiCards = [
    {
      title: 'Total Collections',
      value: adminStats.totalCollections.toLocaleString(),
      change: `+${adminStats.monthlyGrowth}%`,
      icon: Recycle,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Active Citizens',
      value: adminStats.totalUsers.toLocaleString(),
      change: '+8.2%',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Active Collectors',
      value: adminStats.activeCollectors.toString(),
      change: '+2.1%',
      icon: Truck,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      title: 'Compliance Rate',
      value: `${adminStats.complianceRate}%`,
      change: '+3.5%',
      icon: Target,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'collection', message: 'New collection verified in Anna Nagar', time: '2 mins ago', status: 'success' },
    { id: 2, type: 'report', message: 'Waste report submitted for T. Nagar', time: '5 mins ago', status: 'warning' },
    { id: 3, type: 'user', message: 'New citizen registered in Ward 12', time: '8 mins ago', status: 'info' },
    { id: 4, type: 'collector', message: 'Collector C045 completed route', time: '12 mins ago', status: 'success' },
    { id: 5, type: 'training', message: '15 citizens completed waste segregation training', time: '18 mins ago', status: 'info' },
  ];

  const topWards = [
    { ward: 'Ward 12', collections: 1250, compliance: 94, trend: 'up' },
    { ward: 'Ward 8', collections: 1180, compliance: 91, trend: 'up' },
    { ward: 'Ward 15', collections: 1120, compliance: 89, trend: 'down' },
    { ward: 'Ward 3', collections: 1050, compliance: 87, trend: 'up' },
    { ward: 'Ward 21', collections: 980, compliance: 85, trend: 'up' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'collection':
        return <Recycle className="w-4 h-4" />;
      case 'report':
        return <AlertTriangle className="w-4 h-4" />;
      case 'user':
        return <Users className="w-4 h-4" />;
      case 'collector':
        return <Truck className="w-4 h-4" />;
      case 'training':
        return <Target className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-success bg-success/10';
      case 'warning':
        return 'text-warning bg-warning/10';
      case 'info':
        return 'text-primary bg-primary/10';
      default:
        return 'text-muted-foreground bg-muted/50';
    }
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Admin Dashboard
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Comprehensive overview of waste management operations
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiCards.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index} className={`shadow-card border-0 ${kpi.bgColor}/50`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {kpi.title}
                  </span>
                  <Icon className={`w-5 h-5 ${kpi.color}`} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {kpi.value}
                </div>
                <div className={`text-sm font-medium ${kpi.color}`}>
                  {kpi.change} this month
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Monthly Trends Chart */}
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Monthly Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adminStats.monthlyTrends.map((trend, index) => (
                <div key={trend.month} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{trend.month} 2024</div>
                      <div className="text-sm text-muted-foreground">
                        {trend.users} users • {trend.compliance}% compliance
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{trend.collections}</div>
                    <div className="text-sm text-muted-foreground">collections</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-primary" />
              <span>System Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">API Health</span>
                <Badge className="bg-success text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Healthy
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Database</span>
                <Badge className="bg-success text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Online
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Backup Status</span>
                <Badge className="bg-success text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Updated
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Collector App</span>
                <Badge className="bg-warning text-white">
                  <Clock className="w-3 h-3 mr-1" />
                  Maintenance
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Storage Used</span>
                  <span className="text-foreground">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Avg Response Time</span>
                  <span className="text-foreground">{adminStats.avgResponseTime}h</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Waste Composition & Ward Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Waste Composition */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Recycle className="w-5 h-5 text-primary" />
              <span>Waste Composition</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(adminStats.wasteByType).map(([type, percentage]) => (
                <div key={type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize text-foreground">{type}</span>
                    <span className="text-muted-foreground">{percentage}%</span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Wards */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Ward Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topWards.map((ward, index) => (
              <div key={ward.ward} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">#{index + 1}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{ward.ward}</div>
                    <div className="text-sm text-muted-foreground">
                      {ward.collections} collections
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-primary">{ward.compliance}%</div>
                  <div className="text-sm text-muted-foreground">compliance</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="mt-8 shadow-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>Recent Activities</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 bg-accent/30 rounded-lg">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getActivityColor(activity.status)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-foreground">{activity.message}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;