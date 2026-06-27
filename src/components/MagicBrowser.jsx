import { useState, useMemo } from 'react';
import { magicSpells, technicks } from '../data/recipes';
import { useProgress } from '../context/ProgressContext';
import { Search, ChevronDown, ChevronRight, Wand2, Zap, CheckCircle2, Circle, Sparkles } from 'lucide-react';

const typeColors = {
  'White Magick': 'bg-white/10 text-white',
  'Black Magick': 'bg-red-500/10 text-red-400',
  'Time Magick': 'bg-blue-500/10 text-blue-400',
  'Green Magick': 'bg-green-500/10 text-green-400',
  'Arcane Magick': 'bg-purple-500/10 text-purple-400',
  'Technick': 'bg-amber-500/10 text-amber-400',
};

const typeBadgeColors = {
  'White Magick': 'bg-white/15 text-white',
  'Black Magick': 'bg-red-500/15 text-red-400',
  'Time Magick': 'bg-blue-500/15 text-blue-400',
  'Green Magick': 'bg-green-500/15 text-green-400',
  'Arcane Magick': 'bg-purple-500/15 text-purple-400',
};

export default function MagicBrowser() {
  const { toggleItem, progress } = useProgress();
  const [tab, setTab] = useState('magicks');
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const magicTypes = useMemo(() => ['All', ...new Set(magicSpells.map((s) => s.type))], []);

  const filteredMagicks = useMemo(() => {
    return magicSpells.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.effect.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === 'All' || s.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  const filteredTechnicks = useMemo(() => {
    if (typeFilter !== 'All') return [];
    return technicks.filter((t) => {
      return t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.effect.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, typeFilter]);

  const items = tab === 'magicks' ? filteredMagicks : filteredTechnicks;

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusIcon = (id, category) => {
    const status = progress[category]?.[id];
    if (status === 'completed') return <CheckCircle2 size={16} className="text-green-400" />;
    if (status === 'in_progress') return <Sparkles size={16} className="text-yellow-400" />;
    return <Circle size={16} className="text-ff-text-dim" />;
  };

  const toggleProgress = (id, category) => {
    toggleItem(category, id);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Wand2 size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Magicks & Technicks</h1>
        <span className="text-sm text-ff-text-dim ml-auto">
          {items.length} {tab === 'magicks' ? 'spells' : 'technicks'}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-ff-card border border-ff-border rounded-lg p-1">
        <button
          onClick={() => { setTab('magicks'); setTypeFilter('All'); setSearch(''); setExpandedId(null); }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
            tab === 'magicks'
              ? 'bg-ff-gold/20 text-ff-gold'
              : 'text-ff-text-dim hover:text-ff-text'
          }`}
        >
          <Wand2 size={16} />
          Magicks ({magicSpells.length})
        </button>
        <button
          onClick={() => { setTab('technicks'); setTypeFilter('All'); setSearch(''); setExpandedId(null); }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
            tab === 'technicks'
              ? 'bg-ff-gold/20 text-ff-gold'
              : 'text-ff-text-dim hover:text-ff-text'
          }`}
        >
          <Zap size={16} />
          Technicks ({technicks.length})
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ff-text-dim" />
          <input
            type="text"
            placeholder={`Search ${tab === 'magicks' ? 'spells' : 'technicks'}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
          />
        </div>
        {tab === 'magicks' && (
          <select
            value={typeFilter}
            onChange={(e) => { setTypeFilter(e.target.value); setExpandedId(null); }}
            className="px-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
          >
            {magicTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        )}
      </div>

      {/* Spell List */}
      <div className="space-y-1">
        {items.map((spell) => {
          const category = tab === 'magicks' ? 'magic' : 'technicks';
          const isExpanded = expandedId === spell.id;

          return (
            <div key={spell.id} className="bg-ff-card border border-ff-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpand(spell.id)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-ff-card-hover transition-colors"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); toggleProgress(spell.id, category); }}
                  className="flex-shrink-0"
                >
                  {getStatusIcon(spell.id, category)}
                </button>
                {isExpanded ? <ChevronDown size={16} className="text-ff-text-dim" /> : <ChevronRight size={16} className="text-ff-text-dim" />}
                <div className="flex-1 text-left min-w-0">
                  <span className="text-sm font-medium">{spell.name}</span>
                  {tab === 'magicks' && (
                    <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${typeBadgeColors[spell.type] || 'bg-ff-card-hover text-ff-text-dim'}`}>
                      {spell.type.replace(' Magick', '')}
                    </span>
                  )}
                </div>
                {spell.price != null && (
                  <span className="text-xs text-ff-text-dim">{spell.price} gil</span>
                )}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 border-t border-ff-border pt-3 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-ff-text-dim">Effect: </span>
                      <span className="text-ff-text">{spell.effect}</span>
                    </div>
                    <div>
                      <span className="text-ff-text-dim">License: </span>
                      <span className="text-ff-text">{spell.license}</span>
                    </div>
                    {spell.price != null && (
                      <div>
                        <span className="text-ff-text-dim">Price: </span>
                        <span className="text-ff-text">{spell.price} gil</span>
                      </div>
                    )}
                    {tab === 'magicks' && (
                      <div>
                        <span className="text-ff-text-dim">Type: </span>
                        <span className={`px-1.5 py-0.5 rounded text-xs ${typeColors[spell.type] || ''}`}>{spell.type}</span>
                      </div>
                    )}
                    {spell.jobs && (
                      <div className="sm:col-span-2">
                        <span className="text-ff-text-dim">Available for: </span>
                        <span className="text-ff-text">{spell.jobs}</span>
                      </div>
                    )}
                  </div>

                  {spell.acquired && (
                    <div>
                      <h4 className="text-xs font-medium text-ff-gold mb-1">How to Acquire</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {spell.acquired.split('; ').map((source, i) => (
                          <span key={i} className="text-xs bg-ff-card-hover px-2 py-1 rounded">{source}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {items.length === 0 && (
          <div className="text-center text-ff-text-dim py-8 text-sm">
            No {tab === 'magicks' ? 'spells' : 'technicks'} found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}
