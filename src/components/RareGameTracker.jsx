import { useState, useMemo } from 'react';
import { rareGames } from '../data/rareGames';
import { useProgress } from '../context/ProgressContext';
import { Search, Star, CheckCircle, Circle } from 'lucide-react';

export default function RareGameTracker() {
  const { toggleItem, progress } = useProgress();
  const [search, setSearch] = useState('');
  const [zoneFilter, setZoneFilter] = useState('All');
  const [spawnFilter, setSpawnFilter] = useState('All');

  const zones = useMemo(() => ['All', ...new Set(rareGames.map((r) => r.zone))].sort(), []);
  const spawns = useMemo(() => ['All', ...new Set(rareGames.map((r) => r.spawnCondition))].sort(), []);

  const filtered = useMemo(() => {
    return rareGames.filter((r) => {
      const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
      const matchesZone = zoneFilter === 'All' || r.zone === zoneFilter;
      const matchesSpawn = spawnFilter === 'All' || r.spawnCondition === spawnFilter;
      return matchesSearch && matchesZone && matchesSpawn;
    });
  }, [search, zoneFilter, spawnFilter]);

  const completedCount = filtered.filter((r) => progress.rareGames?.[r.id] === 'completed').length;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Star size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Rare Games</h1>
        <span className="text-sm text-ff-text-dim ml-auto">{completedCount}/{filtered.length} defeated</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ff-text-dim" />
          <input
            type="text"
            placeholder="Search rare games..."
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
        <select
          value={spawnFilter}
          onChange={(e) => setSpawnFilter(e.target.value)}
          className="px-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
        >
          {spawns.map((s) => (
            <option key={s} value={s}>{s === 'All' ? 'All Spawns' : s}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {filtered.map((rg) => {
          const isCompleted = progress.rareGames?.[rg.id] === 'completed';
          return (
            <button
              key={rg.id}
              onClick={() => toggleItem('rareGames', rg.id)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg border text-left transition-colors ${
                isCompleted ? 'bg-green-900/20 border-green-800/50' : 'bg-ff-card border-ff-border hover:bg-ff-card-hover'
              }`}
            >
              {isCompleted ? <CheckCircle size={16} className="text-green-400 flex-shrink-0" /> : <Circle size={16} className="text-ff-text-dim flex-shrink-0" />}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{rg.name}</div>
                <div className="text-xs text-ff-text-dim">
                  {rg.zone} &middot; Lv.{rg.level} &middot; HP: {rg.hp?.toLocaleString()}
                </div>
                <div className="text-xs text-ff-text-dim">
                  <span className={`font-medium ${rg.spawnCondition === 'Daytime' ? 'text-yellow-400' : rg.spawnCondition === 'Night' ? 'text-blue-400' : 'text-ff-text-dim'}`}>
                    {rg.spawnCondition}
                  </span>
                  {rg.elemental?.weaknesses?.length > 0 && (
                    <span> &middot; Weak: {rg.elemental.weaknesses.join(', ')}</span>
                  )}
                </div>
              </div>
              <div className="text-right hidden sm:block">
                {rg.drops?.length > 0 && (
                  <div className="text-xs text-ff-text-dim">{rg.drops[0].item}</div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-xs text-ff-text-dim text-center pt-2">
        {filtered.length} rare games &middot; Click to mark as defeated
      </div>
    </div>
  );
}
