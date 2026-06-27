import { useState, useMemo } from 'react';
import { weapons, shields, armor, accessories } from '../data/equipment';
import { useProgress } from '../context/ProgressContext';
import { Search, ChevronDown, ChevronRight, Sword, ShieldCheck, Shirt, Gem, CheckCircle2, Circle, Sparkles } from 'lucide-react';

const weaponTypeColors = {
  Swords: 'bg-blue-500/15 text-blue-400',
  Daggers: 'bg-purple-500/15 text-purple-400',
  Axes: 'bg-red-500/15 text-red-400',
  Hammers: 'bg-orange-500/15 text-orange-400',
  Maces: 'bg-yellow-500/15 text-yellow-400',
  Katanas: 'bg-pink-500/15 text-pink-400',
  Spears: 'bg-green-500/15 text-green-400',
  Poles: 'bg-teal-500/15 text-teal-400',
  Staves: 'bg-cyan-500/15 text-cyan-400',
  Rods: 'bg-indigo-500/15 text-indigo-400',
  'Greatswords': 'bg-amber-500/15 text-amber-400',
  Bows: 'bg-lime-500/15 text-lime-400',
  Crossbows: 'bg-emerald-500/15 text-emerald-400',
  Guns: 'bg-slate-400/15 text-slate-300',
  'Hand-bombs': 'bg-rose-500/15 text-rose-400',
  Measures: 'bg-violet-500/15 text-violet-400',
};

const armorTypeColors = {
  'Light Armour': 'bg-green-500/15 text-green-400',
  'Heavy Armour': 'bg-blue-500/15 text-blue-400',
  'Mystic Armour': 'bg-purple-500/15 text-purple-400',
};

export default function EquipmentBrowser() {
  const { toggleItem, progress } = useProgress();
  const [tab, setTab] = useState('weapons');
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const weaponTypes = useMemo(() => ['All', ...new Set(weapons.map((w) => w.type))].sort(), []);
  const armorTypes = useMemo(() => ['All', ...new Set(armor.map((a) => a.type))].sort(), []);

  const filteredAccessories = useMemo(() => {
    return accessories.filter((a) => {
      return a.name.toLowerCase().includes(search.toLowerCase()) ||
        (a.effect && a.effect.toLowerCase().includes(search.toLowerCase()));
    });
  }, [search]);

  const filteredWeapons = useMemo(() => {
    return weapons.filter((w) => {
      const matchesSearch = w.name.toLowerCase().includes(search.toLowerCase()) ||
        (w.effect && w.effect.toLowerCase().includes(search.toLowerCase()));
      const matchesType = typeFilter === 'All' || w.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  const filteredShields = useMemo(() => {
    if (typeFilter !== 'All') return [];
    return shields.filter((s) => {
      return s.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, typeFilter]);

  const filteredArmor = useMemo(() => {
    return armor.filter((a) => {
      const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === 'All' || a.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  const items = tab === 'weapons' ? filteredWeapons : tab === 'shields' ? filteredShields : tab === 'armor' ? filteredArmor : filteredAccessories;

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
        <Sword size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Equipment</h1>
        <span className="text-sm text-ff-text-dim ml-auto">
          {items.length} {tab === 'weapons' ? 'weapons' : tab === 'shields' ? 'shields' : tab === 'armor' ? 'armor pieces' : 'accessories'}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-ff-card border border-ff-border rounded-lg p-1">
        <button
          onClick={() => { setTab('weapons'); setTypeFilter('All'); setSearch(''); setExpandedId(null); }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
            tab === 'weapons' ? 'bg-ff-gold/20 text-ff-gold' : 'text-ff-text-dim hover:text-ff-text'
          }`}
        >
          <Sword size={16} />
          Weapons ({weapons.length})
        </button>
        <button
          onClick={() => { setTab('shields'); setTypeFilter('All'); setSearch(''); setExpandedId(null); }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
            tab === 'shields' ? 'bg-ff-gold/20 text-ff-gold' : 'text-ff-text-dim hover:text-ff-text'
          }`}
        >
          <ShieldCheck size={16} />
          Shields ({shields.length})
        </button>
        <button
          onClick={() => { setTab('armor'); setTypeFilter('All'); setSearch(''); setExpandedId(null); }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
            tab === 'armor' ? 'bg-ff-gold/20 text-ff-gold' : 'text-ff-text-dim hover:text-ff-text'
          }`}
        >
          <Shirt size={16} />
          Armor ({armor.length})
        </button>
        <button
          onClick={() => { setTab('accessories'); setTypeFilter('All'); setSearch(''); setExpandedId(null); }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
            tab === 'accessories' ? 'bg-ff-gold/20 text-ff-gold' : 'text-ff-text-dim hover:text-ff-text'
          }`}
        >
          <Gem size={16} />
          Accessories ({accessories.length})
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ff-text-dim" />
          <input
            type="text"
            placeholder={`Search ${tab === 'weapons' ? 'weapons' : tab === 'shields' ? 'shields' : tab === 'armor' ? 'armor' : 'accessories'}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => { setTypeFilter(e.target.value); setExpandedId(null); }}
          className="px-3 py-2 bg-ff-card border border-ff-border rounded-lg text-sm focus:outline-none focus:border-ff-gold"
        >
          {(tab === 'weapons' ? weaponTypes : tab === 'shields' ? ['All'] : tab === 'armor' ? armorTypes : ['All']).map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Item List */}
      <div className="space-y-1">
        {items.map((item) => {
          const category = tab === 'weapons' ? 'weapons' : tab === 'shields' ? 'shields' : tab === 'armor' ? 'armor' : 'accessories';
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="bg-ff-card border border-ff-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-ff-card-hover transition-colors"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); toggleProgress(item.id, category); }}
                  className="flex-shrink-0"
                >
                  {getStatusIcon(item.id, category)}
                </button>
                {isExpanded ? <ChevronDown size={16} className="text-ff-text-dim" /> : <ChevronRight size={16} className="text-ff-text-dim" />}
                <div className="flex-1 text-left min-w-0">
                  <span className="text-sm font-medium">{item.name}</span>
                  {tab === 'weapons' && item.type && (
                    <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${weaponTypeColors[item.type] || 'bg-ff-card-hover text-ff-text-dim'}`}>
                      {item.type}
                    </span>
                  )}
                  {tab === 'shields' && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-ff-card-hover text-ff-text-dim">Shield</span>
                  )}
                  {tab === 'armor' && item.type && (
                    <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${armorTypeColors[item.type] || 'bg-ff-card-hover text-ff-text-dim'}`}>
                      {item.type} ({item.slot})
                    </span>
                  )}
                  {tab === 'accessories' && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-pink-500/15 text-pink-400">Accessory</span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-ff-text-dim">
                  {tab === 'weapons' && item.atk != null && <span>ATK {item.atk}</span>}
                  {(tab === 'shields' || tab === 'armor') && item.eva != null && <span>EVA {item.eva}</span>}
                  {tab === 'armor' && item.def != null && <span>DEF {item.def}</span>}
                  {tab === 'accessories' && item.def != null && <span>DEF {item.def}</span>}
                  {item.price != null && <span>{Number(item.price).toLocaleString()} gil</span>}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 border-t border-ff-border pt-3 space-y-3">
                  {tab === 'weapons' && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div><span className="text-ff-text-dim">Attack: </span><span className="text-ff-text">{item.atk ?? '—'}</span></div>
                      <div><span className="text-ff-text-dim">Evade: </span><span className="text-ff-text">{item.eva ?? '—'}</span></div>
                      {item.effect && <div><span className="text-ff-text-dim">Effect: </span><span className="text-ff-text">{item.effect}</span></div>}
                      {item.license && <div><span className="text-ff-text-dim">License: </span><span className="text-ff-text">{item.license}</span></div>}
                    </div>
                  )}

                  {tab === 'shields' && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div><span className="text-ff-text-dim">Evade: </span><span className="text-ff-text">{item.eva ?? '—'}</span></div>
                      <div><span className="text-ff-text-dim">Magic Evade: </span><span className="text-ff-text">{item.magicEva ?? '—'}</span></div>
                      {item.element && <div><span className="text-ff-text-dim">Element: </span><span className="text-ff-text">{item.element}</span></div>}
                      {item.license && <div><span className="text-ff-text-dim">License: </span><span className="text-ff-text">{item.license}</span></div>}
                    </div>
                  )}

                  {tab === 'armor' && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div><span className="text-ff-text-dim">Defense: </span><span className="text-ff-text">{item.def ?? '—'}</span></div>
                      <div><span className="text-ff-text-dim">Mag Resist: </span><span className="text-ff-text">{item.magRes ?? '—'}</span></div>
                      {item.hp && <div><span className="text-ff-text-dim">HP: </span><span className="text-ff-text">+{item.hp}</span></div>}
                      {item.mp && <div><span className="text-ff-text-dim">MP: </span><span className="text-ff-text">+{item.mp}</span></div>}
                      {item.strength && <div><span className="text-ff-text-dim">Strength: </span><span className="text-ff-text">+{item.strength}</span></div>}
                      {item.magPow && <div><span className="text-ff-text-dim">Magick Power: </span><span className="text-ff-text">+{item.magPow}</span></div>}
                      {item.vitality && <div><span className="text-ff-text-dim">Vitality: </span><span className="text-ff-text">+{item.vitality}</span></div>}
                      {item.speed && <div><span className="text-ff-text-dim">Speed: </span><span className="text-ff-text">+{item.speed}</span></div>}
                      {item.element && <div><span className="text-ff-text-dim">Element: </span><span className="text-ff-text">{item.element}</span></div>}
                      {item.license && <div><span className="text-ff-text-dim">License: </span><span className="text-ff-text">{item.license}</span></div>}
                    </div>
                  )}

                  {tab === 'accessories' && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div><span className="text-ff-text-dim">Effect: </span><span className="text-ff-text">{item.effect ?? '—'}</span></div>
                      <div><span className="text-ff-text-dim">Defense: </span><span className="text-ff-text">{item.def ?? '—'}</span></div>
                      <div><span className="text-ff-text-dim">Mag Resist: </span><span className="text-ff-text">{item.magRes ?? '—'}</span></div>
                      {item.hp && <div><span className="text-ff-text-dim">HP: </span><span className="text-ff-text">+{item.hp}</span></div>}
                      {item.mp && <div><span className="text-ff-text-dim">MP: </span><span className="text-ff-text">+{item.mp}</span></div>}
                      {item.strength && <div><span className="text-ff-text-dim">Strength: </span><span className="text-ff-text">+{item.strength}</span></div>}
                      {item.magPow && <div><span className="text-ff-text-dim">Magick Power: </span><span className="text-ff-text">+{item.magPow}</span></div>}
                      {item.vitality && <div><span className="text-ff-text-dim">Vitality: </span><span className="text-ff-text">+{item.vitality}</span></div>}
                      {item.speed && <div><span className="text-ff-text-dim">Speed: </span><span className="text-ff-text">+{item.speed}</span></div>}
                      {item.element && <div><span className="text-ff-text-dim">Element: </span><span className="text-ff-text">{item.element}</span></div>}
                      {item.license && <div><span className="text-ff-text-dim">License: </span><span className="text-ff-text">{item.license}</span></div>}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {item.price != null && (
                      <div><span className="text-ff-text-dim">Price: </span><span className="text-ff-text">{Number(item.price).toLocaleString()} gil</span></div>
                    )}
                  </div>

                  {item.acquired && (
                    <div>
                      <h4 className="text-xs font-medium text-ff-gold mb-1">How to Acquire</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.acquired.split('; ').map((source, i) => (
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
            No items found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}
