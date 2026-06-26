import { useState, useMemo } from 'react';
import { bosses, esperBosses } from '../data/bosses';
import { useProgress } from '../context/ProgressContext';
import { Crown, ChevronDown, ChevronRight, CheckCircle, Circle, Sparkles } from 'lucide-react';

export default function BossGuide() {
  const { toggleItem, progress } = useProgress();
  const [tab, setTab] = useState('story');
  const [expandedId, setExpandedId] = useState(null);
  const [partFilter, setPartFilter] = useState('All');

  const list = tab === 'story' ? bosses : esperBosses;
  const parts = useMemo(() => {
    if (tab === 'story') return ['All', ...new Set(bosses.map((b) => b.part))].sort();
    return ['All'];
  }, [tab]);

  const filtered = useMemo(() => {
    return list.filter((b) => partFilter === 'All' || b.part === partFilter);
  }, [list, partFilter]);

  const category = tab === 'story' ? 'storyBosses' : 'esperBosses';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Crown size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Boss Guide</h1>
        <span className="text-sm text-ff-text-dim ml-auto">{filtered.length} bosses</span>
      </div>

      <div className="flex gap-2 border-b border-ff-border">
        <button
          onClick={() => { setTab('story'); setPartFilter('All'); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${tab === 'story' ? 'text-ff-gold border-b-2 border-ff-gold' : 'text-ff-text-dim hover:text-ff-text'}`}
        >
          <Crown size={14} className="inline mr-1" /> Story Bosses
        </button>
        <button
          onClick={() => { setTab('esper'); setPartFilter('All'); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${tab === 'esper' ? 'text-ff-gold border-b-2 border-ff-gold' : 'text-ff-text-dim hover:text-ff-text'}`}
        >
          <Sparkles size={14} className="inline mr-1" /> Espers
        </button>
      </div>

      {tab === 'story' && (
        <div className="flex flex-wrap gap-2">
          {parts.map((p) => (
            <button
              key={p}
              onClick={() => setPartFilter(p)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${partFilter === p ? 'bg-ff-gold text-black' : 'bg-ff-card border border-ff-border text-ff-text-dim hover:text-ff-text'}`}
            >
              {p === 'All' ? 'All Parts' : `Part ${p}`}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-2">
        {filtered.map((boss) => {
          const isCompleted = progress[category]?.[boss.id] === 'completed';
          const isExpanded = expandedId === boss.id;

          return (
            <div key={boss.id} className="bg-ff-card border border-ff-border rounded-lg overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3">
                <button onClick={() => toggleItem(category, boss.id)} className="flex-shrink-0">
                  {isCompleted ? <CheckCircle size={18} className="text-green-400" /> : <Circle size={18} className="text-ff-text-dim" />}
                </button>
                <button onClick={() => setExpandedId(isExpanded ? null : boss.id)} className="flex items-center gap-2 flex-1 text-left">
                  {isExpanded ? <ChevronDown size={16} className="text-ff-text-dim" /> : <ChevronRight size={16} className="text-ff-text-dim" />}
                  <div>
                    <div className="text-sm font-medium">{boss.name}</div>
                    <div className="text-xs text-ff-text-dim">
                      {tab === 'story' && <>Part {boss.part} &middot; </>}
                      {boss.zone} &middot; HP: {boss.hp?.toLocaleString()}
                    </div>
                  </div>
                </button>
                <span className="text-xs text-ff-text-dim hidden sm:inline">Lv.{boss.recommendedLevel}</span>
              </div>

              {isExpanded && (
                <div className="px-4 pb-4 border-t border-ff-border pt-3 space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div><span className="text-ff-text-dim">HP:</span> <span className="text-ff-text">{boss.hp?.toLocaleString()}</span></div>
                    <div><span className="text-ff-text-dim">MP:</span> <span className="text-ff-text">{boss.mp?.toLocaleString()}</span></div>
                    <div><span className="text-ff-text-dim">Weakness:</span> {boss.elemental?.weaknesses?.length > 0 ? boss.elemental.weaknesses.join(', ') : <span className="text-ff-text-dim">None</span>}</div>
                    <div><span className="text-ff-text-dim">Rec. Level:</span> <span className="text-ff-text">{boss.recommendedLevel}</span></div>
                  </div>

                  {boss.drops?.length > 0 && (
                    <div className="text-xs">
                      <h4 className="font-medium text-ff-gold mb-1">Drops</h4>
                      <div className="flex flex-wrap gap-2">
                        {boss.drops.map((d, i) => (
                          <span key={i} className="bg-ff-card-hover px-2 py-1 rounded">{d.item} ({d.rate})</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {boss.steals?.length > 0 && (
                    <div className="text-xs">
                      <h4 className="font-medium text-ff-gold mb-1">Steals</h4>
                      <div className="flex flex-wrap gap-2">
                        {boss.steals.map((s, i) => (
                          <span key={i} className="bg-ff-card-hover px-2 py-1 rounded">{s.item} ({s.rate})</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {boss.strategy && (
                    <div className="text-xs">
                      <h4 className="font-medium text-ff-gold mb-1">Strategy</h4>
                      <p className="text-ff-text-dim">{boss.strategy}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
