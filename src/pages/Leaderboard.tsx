import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, TrendingUp, Medal, Crown, Star } from 'lucide-react';
import { leaderboardData, currentUser } from '@/data/mockData';

const Leaderboard = () => {
  const { t } = useLanguage();

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-orange-500" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case 3:
        return "bg-gradient-to-r from-orange-400 to-orange-600 text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          {t('communityLeaders')}
        </h1>
        <p className="text-xl text-muted-foreground">
          See how you stack up against your community
        </p>
      </div>

      {/* Your Rank Card */}
      <Card className="mb-8 shadow-elevated border-0 bg-gradient-to-r from-primary/10 to-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12 border-2 border-primary">
                <AvatarFallback className="bg-primary text-white font-semibold">
                  {currentUser.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{currentUser.name}</h3>
                <p className="text-muted-foreground">{currentUser.streetAddress}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-primary text-white">
                  Rank #2
                </Badge>
              </div>
              <div className="text-2xl font-bold text-primary">{currentUser.points} pts</div>
              <div className="text-sm text-muted-foreground">{currentUser.collections} collections</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Leaderboard */}
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>{t('topPerformers')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboardData.map((entry, index) => (
                <div 
                  key={entry.rank} 
                  className={`flex items-center justify-between p-4 rounded-lg transition-smooth hover:shadow-card ${
                    entry.name === currentUser.name ? 'bg-primary/10 border border-primary/20' : 'bg-accent/30 hover:bg-accent/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(entry.rank)}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className={`font-semibold ${entry.rank <= 3 ? 'bg-primary text-white' : 'bg-muted'}`}>
                        {entry.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{entry.name}</div>
                      <div className="text-sm text-muted-foreground">{entry.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary text-lg">{entry.points}</div>
                    <div className="text-sm text-muted-foreground">{entry.collections} collections</div>
                    <Badge className={`mt-1 ${getRankBadgeColor(entry.rank)}`}>
                      #{entry.rank}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ward Rankings */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-warning" />
              <span>Ward Rankings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { ward: 'Ward 12', points: 12450, rank: 1 },
              { ward: 'Ward 8', points: 11280, rank: 2 },
              { ward: 'Ward 15', points: 10950, rank: 3 },
              { ward: 'Ward 3', points: 9870, rank: 4 },
              { ward: 'Ward 21', points: 9120, rank: 5 },
            ].map((ward) => (
              <div 
                key={ward.ward} 
                className={`p-3 rounded-lg ${ward.ward === currentUser.ward ? 'bg-primary/10 border border-primary/20' : 'bg-accent/30'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">#{ward.rank}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{ward.ward}</div>
                      <div className="text-sm text-muted-foreground">{ward.points} total points</div>
                    </div>
                  </div>
                  {ward.ward === currentUser.ward && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Your Ward
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Achievement Section */}
      <Card className="mt-8 shadow-card border-0 bg-gradient-to-br from-success/10 to-success/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-success" />
            <span>Recent Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-card rounded-lg">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Medal className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Eco Champion</h4>
              <p className="text-sm text-muted-foreground">Reached 2000+ points</p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg">
              <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-warning" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Consistency Star</h4>
              <p className="text-sm text-muted-foreground">20+ collections this month</p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Ward Leader</h4>
              <p className="text-sm text-muted-foreground">Top 3 in your ward</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;