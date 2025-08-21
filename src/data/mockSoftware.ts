export interface Software {
  id: string;
  name: string;
  developer: string;
  description: string;
  fullDescription: string;
  features: string[];
  category: string;
  platform: string[];
  price: string;
  version: string;
  size: string;
  releaseDate: string;
  downloads: number;
  logo: string;
  screenshots: string[];
  downloadUrl: string;
  isFeatured: boolean;
  verified: boolean;
}

export const mockSoftware: Software[] = [
  {
    id: "1",
    name: "PhotoMaster Pro",
    developer: "Creative Solutions Inc.",
    description: "Professional photo editing with AI-powered tools and advanced filters.",
    fullDescription: "PhotoMaster Pro is the ultimate photo editing software that combines professional-grade tools with AI-powered features. Perfect for photographers, designers, and creative professionals who demand the best.",
    features: [
      "AI-powered background removal",
      "Advanced color correction tools",
      "Professional filters and effects",
      "Batch processing capabilities",
      "RAW file support",
      "Non-destructive editing"
    ],
    category: "Graphics & Design",
    platform: ["Windows", "macOS"],
    price: "Free",
    version: "2.1.0",
    size: "245 MB",
    releaseDate: "2024-01-15",
    downloads: 125000,
    logo: "🎨",
    screenshots: [],
    downloadUrl: "https://example.com/photomaster-pro",
    isFeatured: true,
    verified: true
  },
  {
    id: "2",
    name: "CodeStudio",
    developer: "DevTools Corp.",
    description: "Modern code editor with intelligent autocomplete and debugging tools.",
    fullDescription: "CodeStudio is a next-generation code editor designed for modern development workflows. With intelligent autocomplete, advanced debugging, and seamless Git integration.",
    features: [
      "Intelligent autocomplete",
      "Built-in debugger",
      "Git integration",
      "Multiple language support",
      "Plugin ecosystem",
      "Dark and light themes"
    ],
    category: "Developer Tools",
    platform: ["Windows", "macOS", "Linux"],
    price: "Free",
    version: "1.8.2",
    size: "180 MB",
    releaseDate: "2024-01-20",
    downloads: 89000,
    logo: "💻",
    screenshots: [],
    downloadUrl: "https://example.com/codestudio",
    isFeatured: true,
    verified: true
  },
  {
    id: "3",
    name: "MediaPlayer X",
    developer: "Multimedia Systems",
    description: "Universal media player supporting all video and audio formats.",
    fullDescription: "MediaPlayer X is the ultimate media player that supports virtually every video and audio format. Enjoy crystal-clear playback with advanced audio enhancement.",
    features: [
      "Supports all formats",
      "Hardware acceleration",
      "Audio enhancement",
      "Subtitle support",
      "Playlist management",
      "Streaming capabilities"
    ],
    category: "Multimedia",
    platform: ["Windows", "macOS", "Linux"],
    price: "Free",
    version: "3.4.1",
    size: "95 MB",
    releaseDate: "2024-01-10",
    downloads: 210000,
    logo: "🎵",
    screenshots: [],
    downloadUrl: "https://example.com/mediaplayer-x",
    isFeatured: true,
    verified: true
  },
  {
    id: "4",
    name: "SecureVault",
    developer: "CyberSafe Technologies",
    description: "Advanced password manager with military-grade encryption.",
    fullDescription: "SecureVault keeps your passwords and sensitive data safe with military-grade encryption. Auto-fill forms, generate strong passwords, and sync across all devices.",
    features: [
      "Military-grade encryption",
      "Auto-fill capabilities",
      "Password generator",
      "Cross-device sync",
      "Secure sharing",
      "Dark web monitoring"
    ],
    category: "Security",
    platform: ["Windows", "macOS", "iOS", "Android"],
    price: "$4.99/month",
    version: "4.2.0",
    size: "120 MB",
    releaseDate: "2024-01-25",
    downloads: 67000,
    logo: "🔒",
    screenshots: [],
    downloadUrl: "https://example.com/securevault",
    isFeatured: true,
    verified: true
  },
  {
    id: "5",
    name: "TaskFlow",
    developer: "Productivity Plus",
    description: "Project management tool with team collaboration features.",
    fullDescription: "TaskFlow streamlines project management with intuitive Kanban boards, team collaboration tools, and powerful reporting features. Perfect for teams of any size.",
    features: [
      "Kanban boards",
      "Team collaboration",
      "Time tracking",
      "Reporting dashboard",
      "File sharing",
      "Mobile apps"
    ],
    category: "Productivity",
    platform: ["Windows", "macOS", "iOS", "Android"],
    price: "Free",
    version: "2.0.3",
    size: "156 MB",
    releaseDate: "2024-01-18",
    downloads: 43000,
    logo: "📋",
    screenshots: [],
    downloadUrl: "https://example.com/taskflow",
    isFeatured: true,
    verified: true
  },
  {
    id: "6",
    name: "WebBrowser Plus",
    developer: "BrowseTech Inc.",
    description: "Fast, secure browser with built-in privacy protection.",
    fullDescription: "WebBrowser Plus offers lightning-fast browsing with built-in ad blocking, privacy protection, and advanced security features. Browse the web safely and efficiently.",
    features: [
      "Ad blocking",
      "Privacy protection",
      "Fast performance",
      "Tab management",
      "Extension support",
      "Sync across devices"
    ],
    category: "Internet",
    platform: ["Windows", "macOS", "Linux"],
    price: "Free",
    version: "5.1.2",
    size: "198 MB",
    releaseDate: "2024-01-12",
    downloads: 156000,
    logo: "🌐",
    screenshots: [],
    downloadUrl: "https://example.com/webbrowser-plus",
    isFeatured: false,
    verified: true
  },
  {
    id: "7",
    name: "DataSync Pro",
    developer: "Cloud Solutions Ltd.",
    description: "Automatic file synchronization and backup solution.",
    fullDescription: "DataSync Pro automatically synchronizes and backs up your files across multiple devices and cloud services. Never lose important data again.",
    features: [
      "Real-time sync",
      "Multiple cloud support",
      "Automatic backup",
      "Version history",
      "Conflict resolution",
      "Encryption"
    ],
    category: "Utilities",
    platform: ["Windows", "macOS"],
    price: "$9.99/month",
    version: "1.5.4",
    size: "87 MB",
    releaseDate: "2024-01-22",
    downloads: 28000,
    logo: "☁️",
    screenshots: [],
    downloadUrl: "https://example.com/datasync-pro",
    isFeatured: false,
    verified: true
  },
  {
    id: "8",
    name: "MusicMaker Studio",
    developer: "Audio Creative",
    description: "Professional music production software with virtual instruments.",
    fullDescription: "MusicMaker Studio is a complete music production suite featuring virtual instruments, effects, and recording capabilities. Create professional-quality music from your computer.",
    features: [
      "Virtual instruments",
      "Multi-track recording",
      "Professional effects",
      "MIDI support",
      "Audio editing",
      "Export to multiple formats"
    ],
    category: "Multimedia",
    platform: ["Windows", "macOS"],
    price: "$99.99",
    version: "3.0.1",
    size: "2.1 GB",
    releaseDate: "2024-01-08",
    downloads: 34000,
    logo: "🎼",
    screenshots: [],
    downloadUrl: "https://download.musicmaker.com/studio-setup.exe",
    isFeatured: false,
    verified: true
  },
  {
    id: "9",
    name: "CloudMail Pro",
    developer: "MessageTech Inc.",
    description: "Professional email client with advanced encryption and team features.",
    fullDescription: "CloudMail Pro is a powerful email client designed for professionals and teams. Features end-to-end encryption, calendar integration, and advanced productivity tools.",
    features: [
      "End-to-end encryption",
      "Calendar integration",
      "Team collaboration",
      "Advanced filters",
      "Mobile sync",
      "Offline support"
    ],
    category: "Productivity",
    platform: ["Windows", "macOS", "Linux", "iOS", "Android"],
    price: "$12.99/month",
    version: "4.8.1",
    size: "156 MB",
    releaseDate: "2024-01-28",
    downloads: 78000,
    logo: "📧",
    screenshots: [],
    downloadUrl: "https://download.cloudmail.com/pro-installer.msi",
    isFeatured: true,
    verified: true
  },
  {
    id: "10",
    name: "GameLauncher Ultimate",
    developer: "Gaming Hub Corp.",
    description: "Universal game launcher and library manager with performance optimization.",
    fullDescription: "GameLauncher Ultimate brings all your games together in one place. Features game performance optimization, cloud saves, achievement tracking, and social features.",
    features: [
      "Universal game library",
      "Performance optimization",
      "Cloud save sync",
      "Achievement tracking",
      "Social features",
      "Controller support"
    ],
    category: "Gaming",
    platform: ["Windows", "macOS", "Linux"],
    price: "Free",
    version: "2.4.7",
    size: "234 MB",
    releaseDate: "2024-02-01",
    downloads: 167000,
    logo: "🎮",
    screenshots: [],
    downloadUrl: "https://download.gamelauncher.com/ultimate-setup.exe",
    isFeatured: true,
    verified: true
  },
  {
    id: "11",
    name: "DesignStudio AI",
    developer: "Creative AI Labs",
    description: "AI-powered design tool for creating logos, graphics, and marketing materials.",
    fullDescription: "DesignStudio AI leverages artificial intelligence to help you create stunning designs in minutes. Perfect for entrepreneurs, marketers, and small businesses.",
    features: [
      "AI-powered design generation",
      "Logo creator",
      "Brand kit generator",
      "Template library",
      "Real-time collaboration",
      "Export to multiple formats"
    ],
    category: "Graphics & Design",
    platform: ["Windows", "macOS", "Web"],
    price: "$19.99/month",
    version: "1.2.3",
    size: "298 MB",
    releaseDate: "2024-01-30",
    downloads: 45000,
    logo: "🤖",
    screenshots: [],
    downloadUrl: "https://download.designstudio.ai/studio-installer.dmg",
    isFeatured: true,
    verified: true
  },
  {
    id: "12",
    name: "SystemOptimizer Pro",
    developer: "TechMax Solutions",
    description: "Complete system optimization and cleanup tool for maximum performance.",
    fullDescription: "SystemOptimizer Pro keeps your computer running at peak performance. Features registry cleaning, disk optimization, startup management, and privacy protection.",
    features: [
      "Registry cleaning",
      "Disk optimization",
      "Startup management",
      "Privacy cleaner",
      "System monitoring",
      "Automatic maintenance"
    ],
    category: "Utilities",
    platform: ["Windows"],
    price: "$29.99",
    version: "8.1.4",
    size: "67 MB",
    releaseDate: "2024-01-26",
    downloads: 92000,
    logo: "⚡",
    screenshots: [],
    downloadUrl: "https://download.systemoptimizer.com/pro-setup.exe",
    isFeatured: false,
    verified: true
  },
  {
    id: "13",
    name: "NetworkGuard",
    developer: "SecureNet Technologies",
    description: "Advanced network security and monitoring tool for businesses.",
    fullDescription: "NetworkGuard provides comprehensive network security monitoring and threat detection. Essential for businesses looking to protect their digital infrastructure.",
    features: [
      "Real-time monitoring",
      "Threat detection",
      "Firewall management",
      "VPN integration",
      "Traffic analysis",
      "Security reports"
    ],
    category: "Security",
    platform: ["Windows", "Linux"],
    price: "$49.99/month",
    version: "3.7.2",
    size: "145 MB",
    releaseDate: "2024-01-24",
    downloads: 23000,
    logo: "🛡️",
    screenshots: [],
    downloadUrl: "https://download.networkguard.com/enterprise-installer.exe",
    isFeatured: false,
    verified: true
  },
  {
    id: "14",
    name: "VideoEdit Master",
    developer: "MediaCraft Studios",
    description: "Professional video editing software with 4K support and AI features.",
    fullDescription: "VideoEdit Master is a professional-grade video editing suite with 4K support, AI-powered editing assistance, and a comprehensive effects library.",
    features: [
      "4K video support",
      "AI-powered editing",
      "Professional effects",
      "Color grading tools",
      "Multi-track timeline",
      "Export to all formats"
    ],
    category: "Multimedia",
    platform: ["Windows", "macOS"],
    price: "$79.99",
    version: "5.2.1",
    size: "1.8 GB",
    releaseDate: "2024-01-29",
    downloads: 58000,
    logo: "🎬",
    screenshots: [],
    downloadUrl: "https://download.videoedit.com/master-installer.dmg",
    isFeatured: true,
    verified: true
  },
  {
    id: "15",
    name: "DevConsole Elite",
    developer: "CodeFlow Systems",
    description: "Advanced terminal and console application with modern features.",
    fullDescription: "DevConsole Elite is a modern terminal application designed for developers. Features tabs, themes, SSH integration, and powerful customization options.",
    features: [
      "Tabbed interface",
      "Custom themes",
      "SSH integration",
      "Command history",
      "Split panes",
      "Plugin support"
    ],
    category: "Developer Tools",
    platform: ["Windows", "macOS", "Linux"],
    price: "Free",
    version: "2.6.0",
    size: "89 MB",
    releaseDate: "2024-02-02",
    downloads: 112000,
    logo: "⚙️",
    screenshots: [],
    downloadUrl: "https://download.devconsole.com/elite-setup.appimage",
    isFeatured: false,
    verified: true
  },
  {
    id: "16",
    name: "CloudStorage Manager",
    developer: "DataFlow Inc.",
    description: "Unified cloud storage manager supporting all major providers.",
    fullDescription: "CloudStorage Manager lets you manage all your cloud storage accounts from one interface. Transfer files between services, sync folders, and optimize storage usage.",
    features: [
      "Multi-provider support",
      "File transfer tools",
      "Sync management",
      "Storage analytics",
      "Bandwidth optimization",
      "Encryption support"
    ],
    category: "Utilities",
    platform: ["Windows", "macOS", "Linux"],
    price: "$14.99/month",
    version: "1.9.3",
    size: "112 MB",
    releaseDate: "2024-01-31",
    downloads: 34000,
    logo: "☁️",
    screenshots: [],
    downloadUrl: "https://download.cloudstorage.com/manager-installer.pkg",
    isFeatured: false,
    verified: true
  }
];

export const getFeaturedSoftware = () => mockSoftware.filter(software => software.isFeatured);

export const searchSoftware = (query: string) => {
  if (!query) return mockSoftware;
  return mockSoftware.filter(software => 
    software.name.toLowerCase().includes(query.toLowerCase()) ||
    software.developer.toLowerCase().includes(query.toLowerCase()) ||
    software.description.toLowerCase().includes(query.toLowerCase()) ||
    software.category.toLowerCase().includes(query.toLowerCase())
  );
};

export const getSoftwareByCategory = (category: string) => {
  if (category === "All") return mockSoftware;
  return mockSoftware.filter(software => software.category === category);
};

export const getSoftwareById = (id: string) => {
  return mockSoftware.find(software => software.id === id);
};

export const categories = [
  "All",
  "Graphics & Design",
  "Developer Tools", 
  "Multimedia",
  "Security",
  "Productivity",
  "Internet",
  "Utilities",
  "Gaming"
];