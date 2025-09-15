import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  MapPin, 
  AlertTriangle, 
  Send,
  CheckCircle,
  Clock,
  User,
  Calendar
} from 'lucide-react';
import { wasteReports } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const ReportWaste = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Report Submitted Successfully!",
        description: "Your waste report has been received and will be processed shortly.",
      });
      
      // Reset form
      setFormData({
        type: '',
        location: '',
        description: '',
        priority: 'medium'
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'low':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'collected':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'assigned':
        return <Clock className="w-4 h-4 text-warning" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            {t('reportWaste')}
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Help keep our community clean by reporting waste issues
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Report Form */}
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="w-5 h-5 text-primary" />
              <span>Submit New Report</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Waste Type */}
              <div className="space-y-2">
                <Label htmlFor="type" className="text-base font-medium">
                  Waste Type *
                </Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select waste type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organic">Organic Waste</SelectItem>
                    <SelectItem value="recyclable">Recyclable Materials</SelectItem>
                    <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                    <SelectItem value="electronic">Electronic Waste</SelectItem>
                    <SelectItem value="mixed">Mixed Waste</SelectItem>
                    <SelectItem value="construction">Construction Debris</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-base font-medium">
                  Location *
                </Label>
                <div className="relative">
                  <Input
                    id="location"
                    placeholder="Enter address or landmark"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="h-12 pl-10"
                    required
                  />
                  <MapPin className="w-5 h-5 text-muted-foreground absolute left-3 top-3.5" />
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Use Current Location
                </Button>
              </div>

              {/* Priority */}
              <div className="space-y-2">
                <Label htmlFor="priority" className="text-base font-medium">
                  Priority Level
                </Label>
                <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Can wait</SelectItem>
                    <SelectItem value="medium">Medium - Normal attention</SelectItem>
                    <SelectItem value="high">High - Urgent attention needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-medium">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the waste issue in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label className="text-base font-medium">
                  Photo Evidence
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                  <Button type="button" variant="outline" className="mt-4">
                    <Camera className="w-4 h-4 mr-2" />
                    Take Photo
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full gradient-primary text-white text-lg py-6"
                disabled={isSubmitting || !formData.type || !formData.location || !formData.description}
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-5 h-5 mr-2 animate-spin" />
                    Submitting Report...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Report
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Reports & Tips */}
        <div className="space-y-6">
          {/* Quick Tips */}
          <Card className="shadow-card border-0 bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Reporting Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <p className="text-sm text-muted-foreground">Take clear photos from multiple angles</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <p className="text-sm text-muted-foreground">Provide specific landmark details</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <p className="text-sm text-muted-foreground">Select appropriate priority level</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <p className="text-sm text-muted-foreground">Describe any safety hazards</p>
              </div>
            </CardContent>
          </Card>

          {/* Your Recent Reports */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <span>Your Recent Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {wasteReports.map((report) => (
                <div key={report.id} className="p-4 bg-accent/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getPriorityColor(report.priority)}>
                      {report.priority} priority
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(report.status)}
                      <span className="text-sm text-muted-foreground capitalize">{report.status}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {report.type.charAt(0).toUpperCase() + report.type.slice(1)} Waste
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">{report.location.address}</p>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(report.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportWaste;