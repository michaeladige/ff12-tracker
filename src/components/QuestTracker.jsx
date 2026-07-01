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

  // Returns a renderItem function for a quest group. Uses a div + stopPropagation so
  // clicking the name area navigates to QuestDetail while the ChecklistSection's own
  // outer button (the status icon on the left) still toggles completion state.
  const renderQuestItem = (category, subtitleField) => (item) => (
    <div
      onClick={(e) => { e.stopPropagation(); setSelectedQuest({ ...item, category }); }}
      className="flex flex-col items-start w-full text-left"
    >
      <div className="flex items-center gap-2 w-full">
        <ChevronRight size={14} className="text-ff-text-dim" />
        <span className="text-sm font-medium">{item.name}</span>
      </div>
      <span className="text-xs text-ff-text-dim ml-6">
        {item[subtitleField]} &middot; {item.zone}
      </span>
    </div>
  );

  const questGroups = [
    {
      title: 'Main Quests',
      items: mainQuests,
      category: 'mainQuests',
      renderItem: renderQuestItem('mainQuests', 'chapter'),
    },
    {
      title: 'Side Quests',
      items: sideQuests,
      category: 'sideQuests',
      renderItem: renderQuestItem('sideQuests', 'type'),
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
