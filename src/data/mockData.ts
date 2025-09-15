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

// Government monitoring interfaces
export interface Truck {
  id: string;
  driverName: string;
  vehicleNumber: string;
  currentLocation: {
    lat: number;
    lng: number;
    address: string;
  };
  status: 'active' | 'idle' | 'maintenance' | 'offline';
  route: string;
  capacity: number;
  currentLoad: number;
  batteryLevel?: number;
  lastUpdated: string;
  todayCollections: number;
  estimatedCompletion: string;
}

export interface WasteFlow {
  id: string;
  stage: 'collection' | 'transport' | 'processing' | 'disposal';
  location: string;
  timestamp: string;
  weight: number;
  truckId: string;
  processingPlant?: string;
  status: 'in-progress' | 'completed' | 'delayed';
}

export interface RouteOptimization {
  routeId: string;
  name: string;
  totalStops: number;
  completedStops: number;
  estimatedTime: string;
  actualTime: string;
  efficiency: number;
  fuelSaved: number;
  coordinates: { lat: number; lng: number }[];
}

// Mock government monitoring data
export const governmentTrucks: Truck[] = [
  {
    id: 'truck-001',
    driverName: 'Raman Kumar',
    vehicleNumber: 'TN-01-BH-2045',
    currentLocation: {
      lat: 13.0827,
      lng: 80.2707,
      address: 'Anna Nagar, Chennai'
    },
    status: 'active',
    route: 'Route A - Anna Nagar Circle',
    capacity: 5000,
    currentLoad: 3200,
    batteryLevel: 85,
    lastUpdated: '2 mins ago',
    todayCollections: 15,
    estimatedCompletion: '14:30'
  },
  {
    id: 'truck-002',
    driverName: 'Suresh Babu',
    vehicleNumber: 'TN-01-BH-2046',
    currentLocation: {
      lat: 13.0878,
      lng: 80.2785,
      address: 'T. Nagar, Chennai'
    },
    status: 'active',
    route: 'Route B - T. Nagar Circle',
    capacity: 5000,
    currentLoad: 4100,
    batteryLevel: 72,
    lastUpdated: '1 min ago',
    todayCollections: 18,
    estimatedCompletion: '15:15'
  },
  {
    id: 'truck-003',
    driverName: 'Muthu Raj',
    vehicleNumber: 'TN-01-BH-2047',
    currentLocation: {
      lat: 13.0067,
      lng: 80.2206,
      address: 'Adyar, Chennai'
    },
    status: 'idle',
    route: 'Route C - Adyar Circle',
    capacity: 5000,
    currentLoad: 4800,
    batteryLevel: 45,
    lastUpdated: '8 mins ago',
    todayCollections: 22,
    estimatedCompletion: '16:00'
  },
  {
    id: 'truck-004',
    driverName: 'Ganesh Iyer',
    vehicleNumber: 'TN-01-BH-2048',
    currentLocation: {
      lat: 12.9716,
      lng: 80.2341,
      address: 'Velachery, Chennai'
    },
    status: 'maintenance',
    route: 'Route D - Velachery Circle',
    capacity: 5000,
    currentLoad: 0,
    lastUpdated: '45 mins ago',
    todayCollections: 0,
    estimatedCompletion: 'N/A'
  }
];

export const wasteFlowData: WasteFlow[] = [
  {
    id: 'flow-001',
    stage: 'collection',
    location: 'Anna Nagar Ward 12',
    timestamp: '09:15 AM',
    weight: 250,
    truckId: 'truck-001',
    status: 'completed'
  },
  {
    id: 'flow-002',
    stage: 'transport',
    location: 'En route to Kodungaiyur Plant',
    timestamp: '11:30 AM',
    weight: 3200,
    truckId: 'truck-001',
    processingPlant: 'Kodungaiyur Processing Plant',
    status: 'in-progress'
  },
  {
    id: 'flow-003',
    stage: 'processing',
    location: 'Kodungaiyur Processing Plant',
    timestamp: '12:45 PM',
    weight: 2850,
    truckId: 'truck-002',
    processingPlant: 'Kodungaiyur Processing Plant',
    status: 'in-progress'
  },
  {
    id: 'flow-004',
    stage: 'disposal',
    location: 'Perungudi Landfill',
    timestamp: '02:20 PM',
    weight: 450,
    truckId: 'truck-002',
    status: 'completed'
  }
];

export const routeOptimizations: RouteOptimization[] = [
  {
    routeId: 'route-a',
    name: 'Anna Nagar Circuit',
    totalStops: 25,
    completedStops: 18,
    estimatedTime: '6h 30m',
    actualTime: '5h 45m',
    efficiency: 88,
    fuelSaved: 12,
    coordinates: [
      { lat: 13.0827, lng: 80.2707 },
      { lat: 13.0850, lng: 80.2720 },
      { lat: 13.0865, lng: 80.2735 }
    ]
  },
  {
    routeId: 'route-b',
    name: 'T. Nagar Circuit',
    totalStops: 30,
    completedStops: 22,
    estimatedTime: '7h 15m',
    actualTime: '7h 30m',
    efficiency: 92,
    fuelSaved: 8,
    coordinates: [
      { lat: 13.0878, lng: 80.2785 },
      { lat: 13.0895, lng: 80.2800 },
      { lat: 13.0912, lng: 80.2815 }
    ]
  }
];

export const governmentStats = {
  totalTrucks: 24,
  activeTrucks: 18,
  maintenanceTrucks: 3,
  offlineTrucks: 3,
  dailyCollections: 156,
  totalWeight: 45800,
  routeEfficiency: 89,
  fuelSavings: 245,
  citizenReports: 23,
  resolvedReports: 18,
  avgResponseTime: '2.3 hours',
  processingPlants: {
    kodungaiyur: { capacity: 8000, current: 6200, efficiency: 94 },
    perungudi: { capacity: 6000, current: 4100, efficiency: 91 },
    madhavaram: { capacity: 5000, current: 3800, efficiency: 88 }
  }
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