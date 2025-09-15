import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Trophy, 
  Recycle, 
  Calendar,
  MapPin,
  Star,
  CheckCircle,
  Clock
} from 'lucide-react';
import { currentUser, userCollections } from '@/data/mockData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { t } = useLanguage();

  // Calculate progress to next level (assuming 500 points per level)
  const currentLevelPoints = Math.floor(currentUser.points / 500) * 500;
  const nextLevelPoints = currentLevelPoints + 500;
  const progressPercent = ((currentUser.points - currentLevelPoints) / 500) * 100;

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Welcome back, {currentUser.name}!
        </h1>
        <p className="text-xl text-muted-foreground">
          {t('myPoints')}: <span className="font-semibold text-primary">{currentUser.points}</span>
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-card border-0 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {t('myPoints')}
              </CardTitle>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{currentUser.points}</div>
            <div className="flex items-center mt-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {currentUser.level}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-success/10 to-success/5">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {t('totalCollections')}
              </CardTitle>
              <Recycle className="w-5 h-5 text-success" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">{currentUser.collections}</div>
            <p className="text-sm text-muted-foreground mt-1">This month: 6</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-warning/10 to-warning/5">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Community Rank
              </CardTitle>
              <Trophy className="w-5 h-5 text-warning" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">#2</div>
            <p className="text-sm text-muted-foreground mt-1">In {currentUser.ward}</p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-accent to-accent/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Level Progress
              </CardTitle>
              <Star className="w-5 h-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{Math.round(progressPercent)}%</div>
            <div className="mt-2">
              <Progress value={progressPercent} className="h-2" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {500 - (currentUser.points - currentLevelPoints)} points to next level
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Monthly Progress Chart */}
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>{t('monthlyProgress')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentUser.monthlyStats.map((stat, index) => (
                <div key={stat.month} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{stat.month} 2024</div>
                      <div className="text-sm text-muted-foreground">
                        {stat.collections} collections
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{stat.points} pts</div>
                    <div className="text-sm text-muted-foreground">
                      +{index > 0 ? stat.points - currentUser.monthlyStats[index - 1].points : stat.points}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/report">
              <Button className="w-full gradient-primary text-white shadow-card hover:shadow-elevated transition-smooth">
                Report Waste Issue
              </Button>
            </Link>
            <Link to="/training">
              <Button variant="outline" className="w-full">
                Continue Training
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button variant="outline" className="w-full">
                View Leaderboard
              </Button>
            </Link>
            
            <div className="pt-4 border-t border-border">
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Your Location</span>
              </div>
              <p className="text-sm text-foreground">{currentUser.streetAddress}</p>
              <p className="text-sm text-muted-foreground">{currentUser.ward}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Collection History */}
      <Card className="mt-8 shadow-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>{t('collectionHistory')}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userCollections.map((collection) => (
              <div key={collection.id} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg hover:bg-accent/50 transition-smooth">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                    <Recycle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{collection.type} Waste</div>
                    <div className="text-sm text-muted-foreground">{collection.location}</div>
                    <div className="text-sm text-muted-foreground">{collection.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-bold text-primary">+{collection.points} pts</span>
                    {collection.status === 'verified' && (
                      <CheckCircle className="w-4 h-4 text-success" />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{collection.weight} kg</div>
                  <Badge 
                    variant={collection.status === 'verified' ? 'default' : 'secondary'}
                    className={collection.status === 'verified' ? 'bg-success text-white' : ''}
                  >
                    {collection.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;