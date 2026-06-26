import { useState, useMemo } from 'react';
import { lootItems, lootCategories } from '../data/loot';
import { bazaarItems } from '../data/bazaarItems';
import { useProgress } from '../context/ProgressContext';
import { Search, Package, CheckCircle, Circle, ShoppingCart, ChevronDown, ChevronRight } from 'lucide-react';

export default function LootTracker() {
  const { toggleItem, progress } = useProgress();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('loot');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const categories = useMemo(() => {
    if (tab === 'loot') return ['All', ...lootCategories].sort();
    return ['All'];
  }, [tab]);

  const filtered = useMemo(() => {
    const source = tab === 'loot' ? lootItems : bazaarItems;
    return source.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [tab, search, categoryFilter]);

  const category = tab === 'loot' ? 'loot' : 'bazaar';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Package size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Loot & Bazaar</h1>
        <span className="text-sm text-ff-text-dim ml-auto">{filtered.length} items</span>
      </div>

      <div className="flex gap-2 border-b border-ff-border">
        <button
          onClick={() => { setTab('loot'); setCategoryFilter('All'); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${tab === 'loot' ? 'text-ff-gold border-b-2 border-ff-gold' : 'text-ff-text-dim hover:text-ff-text'}`}
        >
          <Package size={14} className="inline mr-1" /> Loot Items ({lootItems.length})
        </button>
        <button
          onClick={() => { setTab('bazaar'); setCategoryFilter('All'); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${tab === 'bazaar' ? 'text-ff-gold border-b-2 border-ff-gold' : 'text-ff-text-dim hover:text-ff-text'}`}
        >
          <ShoppingCart size={14} className="inline mr-1" /> Bazaar ({bazaarItems.length})
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
        {tab === 'loot' && (
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        )}
      </div>

      <div className="space-y-1">
        {filtered.map((item) => {
          const isCompleted = progress[category]?.[item.id] === 'completed';
          const isExpanded = expandedId === item.id;

          if (tab === 'bazaar') {
            return (
              <div key={item.id} className="bg-ff-card border border-ff-border rounded-lg overflow-hidden">
                <div className="flex items-center gap-3 px-3 py-2">
                  <button onClick={() => toggleItem(category, item.id)} className="flex-shrink-0">
                    {isCompleted ? <CheckCircle size={16} className="text-green-400" /> : <Circle size={16} className="text-ff-text-dim" />}
                  </button>
                  <button onClick={() => setExpandedId(isExpanded ? null : item.id)} className="flex items-center gap-2 flex-1 text-left">
                    {isExpanded ? <ChevronDown size={14} className="text-ff-text-dim" /> : <ChevronRight size={14} className="text-ff-text-dim" />}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{item.name}</div>
                      <div className="text-xs text-ff-text-dim">{item.price?.toLocaleString()} gil</div>
                    </div>
                  </button>
                </div>
                {isExpanded && (
                  <div className="px-3 pb-3 border-t border-ff-border pt-2 space-y-2 text-xs">
                    <div>
                      <span className="text-ff-gold font-medium">Ingredients: </span>
                      <span className="text-ff-text-dim">{item.ingredients?.join(' + ')}</span>
                    </div>
                    <div>
                      <span className="text-ff-gold font-medium">Rewards: </span>
                      <span className="text-ff-text-dim">{item.rewards?.join(', ')}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => toggleItem(category, item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border text-left transition-colors ${
                isCompleted ? 'bg-green-900/20 border-green-800/50' : 'bg-ff-card border-ff-border hover:bg-ff-card-hover'
              }`}
            >
              {isCompleted ? <CheckCircle size={16} className="text-green-400 flex-shrink-0" /> : <Circle size={16} className="text-ff-text-dim flex-shrink-0" />}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{item.name}</div>
                <div className="text-xs text-ff-text-dim truncate">
                  {item.category} &middot; {item.bazaarQty}x for bazaar &middot; {item.price?.toLocaleString()} gil
                </div>
              </div>
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
