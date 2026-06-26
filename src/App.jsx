import { useState } from 'react';
import { ProgressProvider } from './context/ProgressContext';
import Dashboard from './components/Dashboard';
import QuestTracker from './components/QuestTracker';
import EquipmentChecklist from './components/EquipmentChecklist';
import RecipeBook from './components/RecipeBook';
import TrophiesAndCharacters from './components/TrophiesAndCharacters';
import GuideViewer from './components/GuideViewer';
import BestiaryBrowser from './components/BestiaryBrowser';
import LootTracker from './components/LootTracker';
import HuntGuide from './components/HuntGuide';
import BossGuide from './components/BossGuide';
import RareGameTracker from './components/RareGameTracker';
import SettingsPage from './components/Settings';
import {
  Home,
  Swords,
  Shield,
  FlaskConical,
  Trophy,
  BookOpen,
  Bug,
  Package,
  Target,
  Crown,
  Star,
  Settings as SettingsIcon,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'quests', label: 'Quests', icon: Swords },
  { id: 'bestiary', label: 'Bestiary', icon: Bug },
  { id: 'loot', label: 'Loot', icon: Package },
  { id: 'hunts', label: 'Hunts', icon: Target },
  { id: 'bosses', label: 'Bosses', icon: Crown },
  { id: 'rare', label: 'Rare Games', icon: Star },
  { id: 'equipment', label: 'Equipment', icon: Shield },
  { id: 'recipes', label: 'Recipes', icon: FlaskConical },
  { id: 'trophies', label: 'Trophies', icon: Trophy },
  { id: 'guide', label: 'Guide', icon: BookOpen },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
];

function AppContent() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'quests':
        return <QuestTracker />;
      case 'bestiary':
        return <BestiaryBrowser />;
      case 'loot':
        return <LootTracker />;
      case 'hunts':
        return <HuntGuide />;
      case 'bosses':
        return <BossGuide />;
      case 'rare':
        return <RareGameTracker />;
      case 'equipment':
        return <EquipmentChecklist />;
      case 'recipes':
        return <RecipeBook />;
      case 'trophies':
        return <TrophiesAndCharacters />;
      case 'guide':
        return <GuideViewer />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-ff-bg">
      <nav className="fixed top-0 left-0 right-0 bg-ff-card/95 backdrop-blur-sm border-b border-ff-border z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <span className="text-ff-gold font-bold text-lg">FF12</span>
              <span className="text-ff-text-dim text-sm hidden sm:inline">Tracker</span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    currentPage === item.id
                      ? 'bg-ff-gold/20 text-ff-gold'
                      : 'text-ff-text-dim hover:text-ff-text hover:bg-ff-card-hover'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ff-text-dim hover:text-ff-text"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-ff-border bg-ff-card">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  currentPage === item.id
                    ? 'bg-ff-gold/20 text-ff-gold'
                    : 'text-ff-text-dim hover:text-ff-text hover:bg-ff-card-hover'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-20 pb-8">{renderPage()}</main>
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
