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
    downloadUrl: "https://example.com/musicmaker-studio",
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
  "Utilities"
];