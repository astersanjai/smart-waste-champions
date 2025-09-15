import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock, 
  Star,
  Award,
  Video,
  FileText,
  Users,
  Target
} from 'lucide-react';
import { trainingModules } from '@/data/mockData';

const Training = () => {
  const { t, language } = useLanguage();

  const completedModules = trainingModules.filter(module => module.completed).length;
  const totalPoints = trainingModules.reduce((acc, module) => module.completed ? acc + module.points : acc, 0);
  const progressPercent = (completedModules / trainingModules.length) * 100;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'intermediate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'advanced':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const achievements = [
    {
      title: 'First Steps',
      titleTamil: 'முதல் படிகள்',
      description: 'Complete your first training module',
      descriptionTamil: 'உங்கள் முதல் பயிற்சி தொகுதியை முடிக்கவும்',
      icon: Star,
      completed: true,
      points: 50
    },
    {
      title: 'Knowledge Seeker',
      titleTamil: 'அறிவு தேடுபவர்',
      description: 'Complete 5 training modules',
      descriptionTamil: '5 பயிற்சி தொகுதிகளை முடிக்கவும்',
      icon: BookOpen,
      completed: false,
      points: 200
    },
    {
      title: 'Expert Level',
      titleTamil: 'நிபுணர் நிலை',
      description: 'Complete all advanced modules',
      descriptionTamil: 'அனைத்து மேம்பட்ட தொகுதிகளையும் முடிக்கவும்',
      icon: Award,
      completed: false,
      points: 500
    }
  ];

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            {t('trainingModules')}
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Learn waste management best practices and earn points
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-card border-0 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Progress</span>
              <Target className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">{Math.round(progressPercent)}%</div>
            <Progress value={progressPercent} className="h-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-success/10 to-success/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Completed</span>
              <CheckCircle className="w-4 h-4 text-success" />
            </div>
            <div className="text-2xl font-bold text-success">{completedModules}</div>
            <div className="text-sm text-muted-foreground">of {trainingModules.length} modules</div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-warning/10 to-warning/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Points Earned</span>
              <Star className="w-4 h-4 text-warning" />
            </div>
            <div className="text-2xl font-bold text-warning">{totalPoints}</div>
            <div className="text-sm text-muted-foreground">from training</div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-accent to-accent/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Certificates</span>
              <Award className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">{completedModules}</div>
            <div className="text-sm text-muted-foreground">earned</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Training Modules */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Available Modules</h2>
          
          {trainingModules.map((module) => (
            <Card key={module.id} className="shadow-card border-0 hover:shadow-elevated transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      {module.completed ? (
                        <CheckCircle className="w-6 h-6 text-success" />
                      ) : (
                        <Video className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">
                        {language === 'en' ? module.title : module.titleTamil}
                      </CardTitle>
                      <p className="text-muted-foreground mb-3">
                        {language === 'en' ? module.description : module.descriptionTamil}
                      </p>
                      <div className="flex items-center space-x-4">
                        <Badge className={getLevelColor(module.level)}>
                          {module.level}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{module.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-warning">
                          <Star className="w-4 h-4" />
                          <span>{module.points} points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  {module.completed ? (
                    <Badge className="bg-success text-white">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Completed
                    </Badge>
                  ) : (
                    <Button className="gradient-primary text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Start Module
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements & Leaderboard */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Training Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border ${
                      achievement.completed 
                        ? 'bg-success/10 border-success/20' 
                        : 'bg-muted/50 border-border'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        achievement.completed 
                          ? 'bg-success/20 text-success' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {language === 'en' ? achievement.title : achievement.titleTamil}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' ? achievement.description : achievement.descriptionTamil}
                        </p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="w-3 h-3 text-warning" />
                          <span className="text-sm text-warning">{achievement.points} points</span>
                        </div>
                      </div>
                      {achievement.completed && (
                        <CheckCircle className="w-5 h-5 text-success" />
                      )}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Learning Leaderboard */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Learning Leaderboard</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: 'Rajesh Kumar', modules: 8, points: 1200 },
                { name: 'Priya Sharma', modules: 6, points: 850 },
                { name: 'Meera Patel', modules: 5, points: 750 },
                { name: 'Arjun Reddy', modules: 4, points: 600 }
              ].map((learner, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{learner.name}</div>
                      <div className="text-sm text-muted-foreground">{learner.modules} modules</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-warning">{learner.points} pts</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Training;