import { useState, useMemo } from 'react';
import { enemies as bestiary } from '../data/bestiary';
import { lootItems } from '../data/loot';
import { useProgress } from '../context/ProgressContext';
import { Search, ChevronDown, ChevronRight, Bug, Eye, Skull, ExternalLink } from 'lucide-react';

const elementalColors = {
  Fire: 'text-red-400', Ice: 'text-blue-400', Thunder: 'text-yellow-400',
  Water: 'text-cyan-400', Wind: 'text-green-400', Earth: 'text-amber-400',
  Holy: 'text-white', Dark: 'text-purple-400',
};

export default function BestiaryBrowser() {
  const { toggleItem, progress } = useProgress();
  const [search, setSearch] = useState('');
  const [zoneFilter, setZoneFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const zones = useMemo(() => ['All', ...new Set(bestiary.map((e) => e.zone))].sort(), []);

  const filtered = useMemo(() => {
    return bestiary.filter((e) => {
      const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase());
      const matchesZone = zoneFilter === 'All' || e.zone === zoneFilter;
      return matchesSearch && matchesZone;
    });
  }, [search, zoneFilter]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusIcon = (id) => {
    const status = progress.bestiary?.[id];
    if (status === 'completed') return <Skull size={16} className="text-green-400" />;
    if (status === 'in_progress') return <Eye size={16} className="text-yellow-400" />;
    return <Bug size={16} className="text-ff-text-dim" />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Bug size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Bestiary</h1>
        <span className="text-sm text-ff-text-dim ml-auto">
          {filtered.length} enemies
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ff-text-dim" />
          <input
            type="text"
            placeholder="Search enemies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
          />
        </div>
        <select
          value={zoneFilter}
          onChange={(e) => setZoneFilter(e.target.value)}
          className="px-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
        >
          {zones.map((z) => (
            <option key={z} value={z}>{z}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        {filtered.map((enemy) => (
          <div key={enemy.id} className="bg-ff-card border border-ff-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleExpand(enemy.id)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-ff-card-hover transition-colors"
            >
              <button
                onClick={(e) => { e.stopPropagation(); toggleItem('bestiary', enemy.id); }}
                className="flex-shrink-0"
              >
                {getStatusIcon(enemy.id)}
              </button>
              {expandedId === enemy.id ? <ChevronDown size={16} className="text-ff-text-dim" /> : <ChevronRight size={16} className="text-ff-text-dim" />}
              <div className="flex-1 text-left">
                <span className="text-sm font-medium">{enemy.name}</span>
                <span className="text-xs text-ff-text-dim ml-2">Lv.{enemy.level?.min}-{enemy.level?.max}</span>
              </div>
              <span className="text-xs text-ff-text-dim">{enemy.zone}</span>
            </button>

            {expandedId === enemy.id && (
              <div className="px-4 pb-4 border-t border-ff-border pt-3 space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div><span className="text-ff-text-dim">HP:</span> <span className="text-ff-text">{enemy.hp?.min?.toLocaleString()}-{enemy.hp?.max?.toLocaleString()}</span></div>
                  <div><span className="text-ff-text-dim">MP:</span> <span className="text-ff-text">{enemy.mp?.min?.toLocaleString()}-{enemy.mp?.max?.toLocaleString()}</span></div>
                  <div><span className="text-ff-text-dim">Weakness:</span> {enemy.elemental?.weaknesses?.length > 0 ? enemy.elemental.weaknesses.map((w) => <span key={w} className={`ml-1 ${elementalColors[w] || ''}`}>{w}</span>) : <span className="text-ff-text-dim">None</span>}</div>
                  <div><span className="text-ff-text-dim">Absorbs:</span> {enemy.elemental?.absorbs?.length > 0 ? enemy.elemental.absorbs.map((a) => <span key={a} className={`ml-1 ${elementalColors[a] || ''}`}>{a}</span>) : <span className="text-ff-text-dim">None</span>}</div>
                </div>

                {enemy.steals?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-ff-gold mb-1">Steal</h4>
                    <div className="flex flex-wrap gap-2">
                      {enemy.steals.map((s, i) => {
                        const lootItem = lootItems.find(l => l.name.toLowerCase() === s.item.toLowerCase());
                        return (
                          <span key={i} className="text-xs bg-ff-card-hover px-2 py-1 rounded flex items-center gap-1">
                            {s.item} ({s.rate})
                            {lootItem && (
                              <span className="text-ff-gold text-[10px]" title={`Loot ID: ${lootItem.id}`}>
                                <ExternalLink size={10} />
                              </span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {enemy.drops?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-ff-gold mb-1">Drop</h4>
                    <div className="flex flex-wrap gap-2">
                      {enemy.drops.map((d, i) => {
                        const lootItem = lootItems.find(l => l.name.toLowerCase() === d.item.toLowerCase());
                        return (
                          <span key={i} className="text-xs bg-ff-card-hover px-2 py-1 rounded flex items-center gap-1">
                            {d.item} ({d.rate})
                            {lootItem && (
                              <span className="text-ff-gold text-[10px]" title={`Loot ID: ${lootItem.id}`}>
                                <ExternalLink size={10} />
                              </span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {enemy.poach?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-ff-gold mb-1">Poach</h4>
                    <div className="flex flex-wrap gap-2">
                      {enemy.poach.map((p, i) => (
                        <span key={i} className="text-xs bg-ff-card-hover px-2 py-1 rounded">{p.item} ({p.rate})</span>
                      ))}
                    </div>
                  </div>
                )}

                {enemy.notes && (
                  <div className="text-xs text-ff-text-dim italic">{enemy.notes}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
