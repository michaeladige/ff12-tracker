import { characters, trophies, zones } from '../data/world';
import ChecklistSection from './ChecklistSection';
import { Trophy } from 'lucide-react';

export default function TrophiesAndCharacters() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Trophy size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Trophies & Characters</h1>
      </div>
      <ChecklistSection
        title="Trophies"
        items={trophies}
        category="trophies"
        searchPlaceholder="Search trophies..."
        renderItem={(item) => (
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-xs text-ff-text-dim">{item.description}</span>
          </div>
        )}
      />
      <ChecklistSection
        title="Characters"
        items={characters}
        category="characters"
        searchPlaceholder="Search characters..."
        renderItem={(item) => (
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-xs text-ff-text-dim">
              {item.job1} / {item.job2}
            </span>
          </div>
        )}
      />
      <ChecklistSection
        title="Zones"
        items={zones}
        category="zones"
        searchPlaceholder="Search zones..."
        renderItem={(item) => (
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-xs text-ff-text-dim">
              {item.region} &middot; {item.type}
            </span>
          </div>
        )}
      />
    </div>
  );
}
