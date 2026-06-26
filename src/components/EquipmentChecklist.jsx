import { weapons, armor, accessories, shields } from '../data/equipment';
import ChecklistSection from './ChecklistSection';
import { Sword } from 'lucide-react';

export default function EquipmentChecklist() {
  const equipGroups = [
    {
      title: 'Weapons',
      items: weapons,
      category: 'weapons',
      searchPlaceholder: 'Search weapons...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.type} &middot; ATK {item.attack} &middot; {item.cost.toLocaleString()} gil
          </span>
        </div>
      ),
    },
    {
      title: 'Armor',
      items: armor,
      category: 'armor',
      searchPlaceholder: 'Search armor...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.type} &middot; DEF {item.defense} &middot; {item.cost.toLocaleString()} gil
          </span>
        </div>
      ),
    },
    {
      title: 'Accessories',
      items: accessories,
      category: 'accessories',
      searchPlaceholder: 'Search accessories...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.effect} &middot; {item.cost.toLocaleString()} gil
          </span>
        </div>
      ),
    },
    {
      title: 'Shields',
      items: shields,
      category: 'shields',
      searchPlaceholder: 'Search shields...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            Evasion {item.evasion} &middot; {item.cost.toLocaleString()} gil
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Sword size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Equipment Checklist</h1>
      </div>
      {equipGroups.map((group) => (
        <ChecklistSection key={group.title} {...group} />
      ))}
    </div>
  );
}
