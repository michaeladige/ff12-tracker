import { useState } from 'react';
import { mainQuests, sideQuests } from '../data/quests';
import ChecklistSection from './ChecklistSection';
import QuestDetail from './QuestDetail';
import { Swords, ChevronRight } from 'lucide-react';

export default function QuestTracker() {
  const [selectedQuest, setSelectedQuest] = useState(null);

  if (selectedQuest) {
    return <QuestDetail quest={selectedQuest} onBack={() => setSelectedQuest(null)} />;
  }

  const questGroups = [
    {
      title: 'Main Quests',
      items: mainQuests,
      category: 'mainQuests',
      renderItem: (item) => (
        <button
          onClick={() => setSelectedQuest({ ...item, category: 'mainQuests' })}
          className="flex flex-col items-start w-full text-left hover:bg-ff-card-hover rounded-lg p-2 -m-2 transition-colors"
        >
          <div className="flex items-center gap-2 w-full">
            <ChevronRight size={14} className="text-ff-text-dim" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
          <span className="text-xs text-ff-text-dim ml-6">
            {item.chapter} &middot; {item.zone}
          </span>
        </button>
      ),
    },
    {
      title: 'Side Quests',
      items: sideQuests,
      category: 'sideQuests',
      renderItem: (item) => (
        <button
          onClick={() => setSelectedQuest({ ...item, category: 'sideQuests' })}
          className="flex flex-col items-start w-full text-left hover:bg-ff-card-hover rounded-lg p-2 -m-2 transition-colors"
        >
          <div className="flex items-center gap-2 w-full">
            <ChevronRight size={14} className="text-ff-text-dim" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
          <span className="text-xs text-ff-text-dim ml-6">
            {item.type} &middot; {item.zone}
          </span>
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Swords size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Quest Tracker</h1>
      </div>
      {questGroups.map((group) => (
        <ChecklistSection key={group.title} {...group} />
      ))}
    </div>
  );
}
