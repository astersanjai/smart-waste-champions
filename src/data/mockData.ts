// Mock data for Smart Waste Management System

export interface User {
  id: string;
  name: string;
  points: number;
  level: string;
  streetAddress: string;
  ward: string;
  collections: number;
  monthlyStats: {
    month: string;
    collections: number;
    points: number;
  }[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  collections: number;
  location: string;
}

export interface WasteCollection {
  id: string;
  date: string;
  location: string;
  type: string;
  weight: number;
  points: number;
  collectorId: string;
  status: 'collected' | 'pending' | 'verified';
}

export interface TrainingModule {
  id: string;
  title: string;
  titleTamil: string;
  description: string;
  descriptionTamil: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  videoUrl: string;
  completed: boolean;
  points: number;
}

export interface WasteReport {
  id: string;
  reporterId: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  type: string;
  description: string;
  imageUrl: string;
  status: 'reported' | 'assigned' | 'collected';
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
}

export interface AdminStats {
  totalCollections: number;
  totalUsers: number;
  activeCollectors: number;
  monthlyGrowth: number;
  complianceRate: number;
  avgResponseTime: number;
  wasteByType: {
    organic: number;
    recyclable: number;
    hazardous: number;
    other: number;
  };
  monthlyTrends: {
    month: string;
    collections: number;
    users: number;
    compliance: number;
  }[];
}

// Mock current user data
export const currentUser: User = {
  id: "user-1",
  name: "Priya Sharma",
  points: 2450,
  level: "Eco Champion",
  streetAddress: "Anna Nagar Main Road",
  ward: "Ward 12",
  collections: 24,
  monthlyStats: [
    { month: "Jan", collections: 8, points: 320 },
    { month: "Feb", collections: 12, points: 480 },
    { month: "Mar", collections: 15, points: 600 },
    { month: "Apr", collections: 18, points: 720 },
    { month: "May", collections: 20, points: 800 },
    { month: "Jun", collections: 24, points: 960 },
  ]
};

// Mock leaderboard data
export const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Rajesh Kumar", points: 3250, collections: 42, location: "T. Nagar" },
  { rank: 2, name: "Priya Sharma", points: 2450, collections: 24, location: "Anna Nagar" },
  { rank: 3, name: "Meera Patel", points: 2180, collections: 31, location: "Adyar" },
  { rank: 4, name: "Arjun Reddy", points: 1950, collections: 28, location: "Velachery" },
  { rank: 5, name: "Lakshmi Iyer", points: 1820, collections: 26, location: "Mylapore" },
  { rank: 6, name: "Karthik Mohan", points: 1650, collections: 22, location: "Besant Nagar" },
  { rank: 7, name: "Divya Krishna", points: 1480, collections: 19, location: "Thiruvanmiyur" },
  { rank: 8, name: "Suresh Babu", points: 1320, collections: 18, location: "Porur" },
];

// Mock training modules
export const trainingModules: TrainingModule[] = [
  {
    id: "module-1",
    title: "Waste Segregation Basics",
    titleTamil: "கழிவு பிரிப்பு அடிப்படைகள்",
    description: "Learn the fundamentals of proper waste segregation",
    descriptionTamil: "சரியான கழிவு பிரிப்பின் அடிப்படைகளை அறியுங்கள்",
    duration: "15 mins",
    level: "beginner",
    videoUrl: "/videos/segregation-basics.mp4",
    completed: true,
    points: 100
  },
  {
    id: "module-2", 
    title: "Organic Waste Composting",
    titleTamil: "இயற்கை கழிவு உரமாக்கல்",
    description: "Master home composting techniques",
    descriptionTamil: "வீட்டில் உரமாக்கும் நுட்பங்களை கற்றுக்கொள்ளுங்கள்",
    duration: "20 mins",
    level: "intermediate",
    videoUrl: "/videos/composting.mp4",
    completed: false,
    points: 150
  },
  {
    id: "module-3",
    title: "Hazardous Waste Management",
    titleTamil: "அபாயகரமான கழிவு மேலாண்மை",
    description: "Safe handling of electronic and chemical waste",
    descriptionTamil: "மின்னணு மற்றும் இரசாயன கழிவுகளின் பாதுகாப்பான கையாளுதல்",
    duration: "25 mins",
    level: "advanced",
    videoUrl: "/videos/hazardous-waste.mp4",
    completed: false,
    points: 200
  }
];

// Mock waste reports
export const wasteReports: WasteReport[] = [
  {
    id: "report-1",
    reporterId: "user-1",
    location: {
      lat: 13.0827,
      lng: 80.2707,
      address: "Anna Nagar, Chennai"
    },
    type: "mixed",
    description: "Large pile of mixed waste near bus stop",
    imageUrl: "/images/waste-report-1.jpg",
    status: "collected",
    timestamp: "2024-01-15T10:30:00Z",
    priority: "high"
  },
  {
    id: "report-2",
    reporterId: "user-1",
    location: {
      lat: 13.0878,
      lng: 80.2785,
      address: "T. Nagar, Chennai"
    },
    type: "organic",
    description: "Food waste scattered on roadside",
    imageUrl: "/images/waste-report-2.jpg",
    status: "assigned",
    timestamp: "2024-01-16T14:20:00Z",
    priority: "medium"
  }
];

// Mock admin statistics
export const adminStats: AdminStats = {
  totalCollections: 15420,
  totalUsers: 3280,
  activeCollectors: 145,
  monthlyGrowth: 12.5,
  complianceRate: 87.3,
  avgResponseTime: 2.4,
  wasteByType: {
    organic: 45,
    recyclable: 30,
    hazardous: 8,
    other: 17
  },
  monthlyTrends: [
    { month: "Jan", collections: 1200, users: 280, compliance: 82 },
    { month: "Feb", collections: 1350, users: 320, compliance: 84 },
    { month: "Mar", collections: 1480, users: 380, compliance: 86 },
    { month: "Apr", collections: 1620, users: 420, compliance: 85 },
    { month: "May", collections: 1750, users: 480, compliance: 87 },
    { month: "Jun", collections: 1890, users: 520, compliance: 89 },
  ]
};

// Collection history for current user
export const userCollections: WasteCollection[] = [
  {
    id: "col-1",
    date: "2024-01-20",
    location: "Anna Nagar Main Road",
    type: "Organic",
    weight: 2.5,
    points: 125,
    collectorId: "collector-1",
    status: "verified"
  },
  {
    id: "col-2", 
    date: "2024-01-18",
    location: "Anna Nagar Main Road",
    type: "Recyclable",
    weight: 1.8,
    points: 90,
    collectorId: "collector-1",
    status: "verified"
  },
  {
    id: "col-3",
    date: "2024-01-15",
    location: "Anna Nagar Main Road", 
    type: "Mixed",
    weight: 3.2,
    points: 80,
    collectorId: "collector-2",
    status: "collected"
  }
];