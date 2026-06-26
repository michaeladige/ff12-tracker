import { useState, useMemo } from 'react';
import { lootItems } from '../data/loot';
import { bazaarItems } from '../data/bazaarItems';
import { useProgress } from '../context/ProgressContext';
import { Search, Package, CheckCircle, Circle, ShoppingCart } from 'lucide-react';

export default function LootTracker() {
  const { toggleItem, progress } = useProgress();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('loot');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = useMemo(() => {
    if (tab === 'loot') return ['All', ...new Set(lootItems.map((l) => l.category))].sort();
    return ['All', ...new Set(bazaarItems.map((b) => b.category))].sort();
  }, [tab]);

  const filtered = useMemo(() => {
    const source = tab === 'loot' ? lootItems : bazaarItems;
    return source.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || (tab === 'loot' ? item.category : item.category) === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [tab, search, categoryFilter]);

  const category = tab === 'loot' ? 'loot' : 'bazaar';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Package size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Loot & Bazaar</h1>
      </div>

      <div className="flex gap-2 border-b border-ff-border">
        <button
          onClick={() => { setTab('loot'); setCategoryFilter('All'); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${tab === 'loot' ? 'text-ff-gold border-b-2 border-ff-gold' : 'text-ff-text-dim hover:text-ff-text'}`}
        >
          <Package size={14} className="inline mr-1" /> Loot Items
        </button>
        <button
          onClick={() => { setTab('bazaar'); setCategoryFilter('All'); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${tab === 'bazaar' ? 'text-ff-gold border-b-2 border-ff-gold' : 'text-ff-text-dim hover:text-ff-text'}`}
        >
          <ShoppingCart size={14} className="inline mr-1" /> Bazaar
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ff-text-dim" />
          <input
            type="text"
            placeholder={`Search ${tab === 'loot' ? 'loot items' : 'bazaar recipes'}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {filtered.map((item) => {
          const isCompleted = progress[category]?.[item.id] === 'completed';
          return (
            <button
              key={item.id}
              onClick={() => toggleItem(category, item.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg border text-left transition-colors ${
                isCompleted ? 'bg-green-900/20 border-green-800/50' : 'bg-ff-card border-ff-border hover:bg-ff-card-hover'
              }`}
            >
              {isCompleted ? <CheckCircle size={16} className="text-green-400 flex-shrink-0" /> : <Circle size={16} className="text-ff-text-dim flex-shrink-0" />}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{item.name}</div>
                <div className="text-xs text-ff-text-dim truncate">
                  {tab === 'bazaar' ? (
                    <>{item.effect} &middot; {item.cost?.toLocaleString()} gil</>
                  ) : (
                    <>{item.category} &middot; {item.sources?.[0] || ''}</>
                  )}
                </div>
              </div>
              {tab === 'bazaar' && item.ingredients && (
                <div className="text-xs text-ff-text-dim hidden lg:block">
                  {item.ingredients.join(' + ')}
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-xs text-ff-text-dim text-center pt-2">
        {filtered.length} items &middot; Click to mark as collected
      </div>
    </div>
  );
}
