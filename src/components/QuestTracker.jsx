import { useState } from 'react';
import { mainQuests, sideQuests, hunts, eliteHunts } from '../data/quests';
import ChecklistSection from './ChecklistSection';
import { Swords, ChevronDown, ChevronRight } from 'lucide-react';

export default function QuestTracker() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const questGroups = [
    {
      title: 'Main Quests',
      items: mainQuests,
      category: 'mainQuests',
      renderItem: (item) => (
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center gap-2 w-full">
            <button
              onClick={() => toggleExpand(item.id)}
              className="flex items-center gap-2 flex-1 text-left"
            >
              {item.details && (
                expandedId === item.id ? 
                  <ChevronDown size={14} className="text-ff-text-dim" /> : 
                  <ChevronRight size={14} className="text-ff-text-dim" />
              )}
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          </div>
          <span className="text-xs text-ff-text-dim ml-6">
            {item.chapter} &middot; {item.zone}
          </span>
          {expandedId === item.id && item.details && (
            <div className="mt-2 ml-6 text-xs text-ff-text-dim bg-ff-card-hover p-3 rounded-lg whitespace-pre-wrap">
              {item.details}
            </div>
          )}
        </div>
      ),
    },
    {
      title: 'Side Quests',
      items: sideQuests,
      category: 'sideQuests',
      renderItem: (item) => (
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center gap-2 w-full">
            <button
              onClick={() => toggleExpand(item.id)}
              className="flex items-center gap-2 flex-1 text-left"
            >
              {item.details && (
                expandedId === item.id ? 
                  <ChevronDown size={14} className="text-ff-text-dim" /> : 
                  <ChevronRight size={14} className="text-ff-text-dim" />
              )}
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          </div>
          <span className="text-xs text-ff-text-dim ml-6">
            {item.type} &middot; {item.zone}
          </span>
          {expandedId === item.id && item.details && (
            <div className="mt-2 ml-6 text-xs text-ff-text-dim bg-ff-card-hover p-3 rounded-lg whitespace-pre-wrap">
              {item.details}
            </div>
          )}
        </div>
      ),
    },
    {
      title: 'Hunts',
      items: hunts,
      category: 'hunts',
      renderItem: (item) => (
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center gap-2 w-full">
            <button
              onClick={() => toggleExpand(item.id)}
              className="flex items-center gap-2 flex-1 text-left"
            >
              {item.details && (
                expandedId === item.id ? 
                  <ChevronDown size={14} className="text-ff-text-dim" /> : 
                  <ChevronRight size={14} className="text-ff-text-dim" />
              )}
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          </div>
          <span className="text-xs text-ff-text-dim ml-6">
            Rank {item.rank} &middot; {item.target} &middot; {item.reward.toLocaleString()} gil
          </span>
          {expandedId === item.id && item.details && (
            <div className="mt-2 ml-6 text-xs text-ff-text-dim bg-ff-card-hover p-3 rounded-lg whitespace-pre-wrap">
              {item.details}
            </div>
          )}
        </div>
      ),
    },
    {
      title: 'Elite Hunts',
      items: eliteHunts,
      category: 'eliteHunts',
      renderItem: (item) => (
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center gap-2 w-full">
            <button
              onClick={() => toggleExpand(item.id)}
              className="flex items-center gap-2 flex-1 text-left"
            >
              {item.details && (
                expandedId === item.id ? 
                  <ChevronDown size={14} className="text-ff-text-dim" /> : 
                  <ChevronRight size={14} className="text-ff-text-dim" />
              )}
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          </div>
          <span className="text-xs text-ff-text-dim ml-6">
            {item.target} &middot; {item.zone} &middot; {item.reward.toLocaleString()} gil
          </span>
          {expandedId === item.id && item.details && (
            <div className="mt-2 ml-6 text-xs text-ff-text-dim bg-ff-card-hover p-3 rounded-lg whitespace-pre-wrap">
              {item.details}
            </div>
          )}
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
