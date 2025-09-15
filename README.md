# Smart Waste Management & Training System

A comprehensive web application built with React, TypeScript, and Tailwind CSS for managing waste collection, citizen engagement, and training programs.

## 🌟 Features

### 🏠 **Home Page**
- Welcome hero section with system overview
- Key statistics and community metrics
- Feature highlights and quick actions
- Responsive design with environmental theme

### 👤 **Citizen Dashboard**
- Personal waste collection points and levels
- Monthly progress tracking with interactive charts
- Collection history with verification status
- Community ranking and achievements
- Quick actions for reporting and training

### 🏆 **Community Leaderboard**
- Top-performing citizens by points and collections
- Ward-wise rankings and competitions
- Personal rank display and progress tracking
- Achievement badges and recognition system

### 📚 **Training & Videos**
- Interactive training modules with progress tracking
- Multi-language support (English/Tamil)
- Completion certificates and points rewards
- Learning achievements and leaderboards
- Resource materials and documentation

### 📍 **Report Waste Issues**
- Photo upload with location mapping
- Priority level selection and categorization
- Real-time status tracking
- Reporting history and tips
- Location-based issue reporting

### 🚛 **Collector App**
- QR code scanning for household verification
- Route optimization and navigation
- Collection verification and points awarding
- Daily stats and performance metrics
- Real-time collection tracking

### ⚙️ **Admin Dashboard**
- Comprehensive system analytics
- Waste composition analysis
- Ward performance monitoring
- Real-time activity feeds
- System health monitoring
- Compliance rate tracking

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Context API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language Support**: English & Tamil

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-waste-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 Demo Data

The application includes comprehensive mock data for demonstration:

### User Data
- **Current User**: Priya Sharma (2,450 points, Eco Champion level)
- **Monthly Stats**: 6 months of collection history
- **Location**: Anna Nagar, Ward 12

### Leaderboard Data
- 8 top-performing citizens with points and collections
- Ward-wise rankings and statistics
- Achievement system with badges

### Training Modules
- **Waste Segregation Basics** (Beginner, 100 points)
- **Organic Waste Composting** (Intermediate, 150 points)
- **Hazardous Waste Management** (Advanced, 200 points)

### Admin Statistics
- 15,420+ total collections
- 3,280+ active citizens
- 145+ active collectors
- 87.3% compliance rate

### Waste Reports
- Sample reports with photos and locations
- Different priority levels and status tracking
- Location mapping for Chennai areas

## 🌍 Multi-Language Support

The application supports both English and Tamil languages:

- **Language Toggle**: Available in navigation
- **Comprehensive Translations**: All UI elements translated
- **Cultural Adaptation**: Tamil-specific content and formatting

## ♿ Accessibility Features

- **Large Touch Targets**: Minimum 44px for all interactive elements
- **High Contrast**: Proper color contrast ratios
- **Large Typography**: Base font size of 18px+
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML

## 🎨 Design System

### Color Palette
- **Primary**: Environmental Green (#22c55e)
- **Secondary**: Clean Blues and Grays
- **Success**: Green variants for positive actions
- **Warning**: Orange for alerts and medium priority
- **Destructive**: Red for errors and high priority

### Typography
- **Font Family**: Inter (Google Fonts)
- **Base Size**: 18px for accessibility
- **Responsive Scaling**: Larger sizes on desktop

### Components
- Custom Shadcn/ui components with environmental theme
- Consistent spacing and border radius (0.75rem)
- Hover effects and smooth transitions
- Card-based layouts with subtle shadows

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layouts for tablets
- **Desktop Enhanced**: Rich desktop experience
- **Touch-Friendly**: Large buttons and intuitive gestures

## 🔧 Development Features

### Code Organization
- **Modular Components**: Reusable and maintainable
- **Custom Hooks**: Shared logic extraction
- **Context API**: Global state management
- **TypeScript**: Full type safety

### Mock Data Structure
- **Comprehensive Types**: Full TypeScript interfaces
- **Realistic Data**: Chennai-based locations and Tamil names
- **Relationship Mapping**: Connected data across modules

### Performance Optimizations
- **Lazy Loading**: Route-based code splitting
- **Optimized Images**: Proper sizing and formats
- **Smooth Animations**: CSS-based transitions
- **Efficient Re-renders**: Optimized React patterns

## 📋 API Simulation

The application includes mock REST endpoints simulation:

### Endpoints Structure
```
GET /api/users/current - Current user data
GET /api/leaderboard - Community rankings
GET /api/training/modules - Available training modules
POST /api/reports/waste - Submit waste report
GET /api/collections/history - User collection history
GET /api/admin/stats - Administrative statistics
```

### Mock Data Flow
- **Local Storage**: Persistent user preferences
- **State Management**: React Context for global state
- **Simulated Delays**: Realistic API response times
- **Error Handling**: Proper error states and messaging

## 🌟 Key Features Breakdown

### Citizen Engagement
- Points-based reward system
- Community competitions and rankings
- Achievement badges and levels
- Social recognition features

### Waste Management
- Comprehensive waste categorization
- Real-time collection tracking
- Route optimization for collectors
- Compliance monitoring and reporting

### Training System
- Interactive learning modules
- Progress tracking and certificates
- Multi-level difficulty system
- Community learning leaderboards

### Administrative Tools
- Real-time analytics dashboard
- Performance monitoring
- Compliance rate tracking
- System health monitoring

## 🚀 Future Enhancements

- **Real Database Integration**: Replace mock data with actual API
- **GPS Integration**: Real location tracking and mapping
- **Push Notifications**: Real-time alerts and reminders
- **Advanced Analytics**: Machine learning insights
- **Mobile App**: React Native companion app
- **Offline Support**: PWA capabilities for offline usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the demo data structure

---

**Built with ❤️ for sustainable waste management and community engagement**