# Gen Z Mentorship

> **Building Futures Through Construction Trades**

A mobile and web application designed to inspire Gen Z youth to pursue fulfilling careers in construction and blue-collar work through mentorship, reflection, and real opportunities.

🌐 **Website**: genzmentorship.com  
📱 **Platforms**: iOS, Android, Web

---

## 🎯 Mission

Gen Z Mentorship bridges the gap between young people seeking meaningful careers and the construction industry's need for skilled workers. We combat the stigma around blue-collar work by showcasing real opportunities, providing mentorship, and helping youth reflect on their potential.

---

## ✨ Features

### 📰 **Blue Collar News**
- Industry trends and construction market updates
- Job opportunities and apprenticeship announcements  
- Success stories from Gen Z workers
- Tips and advice for starting in construction
- Filterable categories to find relevant content

### 🏠 **Home Dashboard**
- Quick access to all features
- Inspirational quotes from industry leaders
- Partner sponsor information

### ✍️ **Reflection & Journaling**
- **Self Reflection**: Guided prompts for personal growth and goal-setting
- **Society Reflection**: Think about community impact and opportunities
- **Personal Journal**: Save and review reflections over time (AsyncStorage)

### 👷 **Apprenticeship Program**
- Cameron Construction program details
- What you'll learn and career benefits
- Direct contact buttons (call, email, apply)
- 27 years of experience showcased

### 📈 **Career Path Visualization**
Interactive progression showing:
1. **Paid Internship** (3-6 months) - Earn while you learn
2. **Apprentice** (1-2 years) - Structured skill development
3. **Journeyman** (2-4 years) - Lead projects and teams
4. **Master Craftsperson** (5+ years) - Expert level leadership

### 👤 **Meet Your Mentor**
- Personal profile of Vince Dang, CEO of Nesting Home Solutions
- Mission, journey, and teaching philosophy
- Direct contact information
- Link to Nesting Home Solutions experience

### 🤝 **Sponsor Footer**
- Nesting Home Solutions
- Cameron Construction
- Partnership statement and branding

---

## 🛠 Tech Stack

- **Framework**: Expo ~51.0.0 (React Native 0.74.0)
- **Language**: TypeScript ~5.3.0
- **Navigation**: Expo Router ~3.5.0
- **UI Components**: React Native Safe Area Context
- **Icons**: @expo/vector-icons (Material Icons)
- **Storage**: @react-native-async-storage/async-storage
- **Date Handling**: date-fns
- **Validation**: Zod

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Expo CLI (optional)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/gen-z-mentorship.git
cd gen-z-mentorship
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Run on your platform**
- **Web**: Press `w` or run `npm run web`
- **iOS**: Press `i` or run `npm run ios` (requires Mac + Xcode)
- **Android**: Press `a` or run `npm run android` (requires Android Studio)
- **Mobile**: Scan QR code with Expo Go app

---

## 📁 Project Structure

```
/
├── app/                          # Main application code
│   ├── _layout.tsx              # Root layout with SafeAreaProvider
│   ├── index.tsx                # Welcome/landing screen
│   └── (tabs)/                  # Tab-based navigation
│       ├── _layout.tsx          # Tab navigation layout
│       ├── index.tsx            # Home screen
│       ├── news.tsx             # Blue collar news feed
│       ├── apprenticeship.tsx   # Cameron Construction program
│       ├── career-path.tsx      # Career progression guide
│       ├── mentor.tsx           # Mentor profile (Vince Dang)
│       └── reflect/             # Reflection features
│           ├── index.tsx        # Reflection hub
│           ├── self-reflection.tsx
│           ├── society-reflection.tsx
│           └── journal.tsx      # Saved reflections
│
├── components/                   # Reusable components
│   └── SponsorsFooter.tsx       # Partner sponsors section
│
├── assets/                       # Images and static files
│   ├── mentor-photo.png         # Mentor profile photo
│   └── README.md
│
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
└── babel.config.js              # Babel configuration
```

---

## 🎨 Design System

### Colors
- **Primary Green**: `#1a4d3a` (headers, buttons, branding)
- **Accent Orange**: `#ff6b35` (CTAs, highlights)
- **Light Green**: `#2d6a4f`, `#52b788` (secondary elements)
- **Gray Scale**: `#333`, `#666`, `#999`, `#f5f5f5` (text, backgrounds)

### Typography
- **Headings**: Bold, 20-32px
- **Body**: Regular, 14-16px
- **Captions**: 12-13px

### Components
- Rounded corners (12px radius)
- Soft shadows for elevation
- Material Icons throughout
- Safe area handling for mobile

---

## 📱 App Information

- **Name**: Gen Z Mentorship
- **Slug**: gen-z-mentorship
- **Bundle ID**: com.genzmentorship.app
- **Scheme**: genzmentorship://

---

## 🤝 Partners & Sponsors

### Nesting Home Solutions
**CEO**: Vince Dang  
**Phone**: (916) 408-2256  
**Website**: [nestinghomesolutions.com](https://www.nestinghomesolutions.com)  
*Building Dreams, Creating Homes*

### Cameron Construction
**Owner**: Stephen Cameron  
**Phone**: (916) 717-4172  
**Email**: Cameronconstruction@live.com  
**Website**: [cameronconstruction.info](https://www.cameronconstruction.info/careers-with-cameron-construction)  
**License**: #865591  
*27 Years of Elite Craftsmanship*

---

## 📝 Updating News Articles

To keep the site fresh, regularly update the news articles in `/app/(tabs)/news.tsx`:

```typescript
const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Your Article Title',
    excerpt: 'Brief description...',
    date: 'Month Year',
    category: 'industry' | 'opportunity' | 'success' | 'tips',
    url: 'https://optional-external-link.com', // Optional
  },
  // Add more articles...
];
```

---

## 🚢 Deployment

### Web (Netlify/Vercel)
```bash
npm run web
# Deploy the web-build/ folder
```

### iOS App Store
```bash
eas build --platform ios
eas submit --platform ios
```

### Google Play Store
```bash
eas build --platform android
eas submit --platform android
```

---

## 📄 License

© 2024 Gen Z Mentorship. All rights reserved.

---

## 🙏 Acknowledgments

Built with ❤️ to inspire Gen Z youth and break the stigma around blue-collar work.

*"The best way to predict your future is to build it—literally."*

