import { mainQuests, sideQuests, hunts, eliteHunts } from '../data/quests';
import ChecklistSection from './ChecklistSection';
import { Swords } from 'lucide-react';

export default function QuestTracker() {

  const questGroups = [
    {
      title: 'Main Quests',
      items: mainQuests,
      category: 'mainQuests',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.chapter} &middot; {item.zone}
          </span>
        </div>
      ),
    },
    {
      title: 'Side Quests',
      items: sideQuests,
      category: 'sideQuests',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.type} &middot; {item.zone}
          </span>
        </div>
      ),
    },
    {
      title: 'Hunts',
      items: hunts,
      category: 'hunts',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            Rank {item.rank} &middot; {item.target} &middot; {item.reward.toLocaleString()} gil
          </span>
        </div>
      ),
    },
    {
      title: 'Elite Hunts',
      items: eliteHunts,
      category: 'eliteHunts',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.target} &middot; {item.zone} &middot; {item.reward.toLocaleString()} gil
          </span>
        </div>
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
