import { useState, useMemo } from 'react';
import { huntDetails, eliteHuntDetails } from '../data/huntDetails';
import { useProgress } from '../context/ProgressContext';
import { Target, ChevronDown, ChevronRight, CheckCircle, Circle, Trophy, Sparkles } from 'lucide-react';

export default function HuntGuide() {
  const { toggleItem, progress } = useProgress();
  const [tab, setTab] = useState('regular');
  const [expandedId, setExpandedId] = useState(null);
  const [rankFilter, setRankFilter] = useState('All');

  const hunts = tab === 'regular' ? huntDetails : eliteHuntDetails;
  const ranks = useMemo(() => {
    if (tab === 'elite') return ['All'];
    return ['All', ...new Set(huntDetails.map((h) => h.rank))].sort();
  }, [tab]);

  const filtered = useMemo(() => {
    return hunts.filter((h) => rankFilter === 'All' || h.rank === rankFilter);
  }, [hunts, rankFilter]);

  const category = tab === 'regular' ? 'hunts' : 'eliteHunts';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Target size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Hunt Guide</h1>
        <span className="text-sm text-ff-text-dim ml-auto">{filtered.length} hunts</span>
      </div>

      <div className="flex gap-2 border-b border-ff-border">
        <button
          onClick={() => { setTab('regular'); setRankFilter('All'); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${tab === 'regular' ? 'text-ff-gold border-b-2 border-ff-gold' : 'text-ff-text-dim hover:text-ff-text'}`}
        >
          <Target size={14} className="inline mr-1" /> Regular Hunts
        </button>
        <button
          onClick={() => { setTab('elite'); setRankFilter('All'); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${tab === 'elite' ? 'text-ff-gold border-b-2 border-ff-gold' : 'text-ff-text-dim hover:text-ff-text'}`}
        >
          <Trophy size={14} className="inline mr-1" /> Elite Hunts
        </button>
      </div>

      {tab === 'regular' && (
        <div className="flex flex-wrap gap-2">
          {ranks.map((r) => (
            <button
              key={r}
              onClick={() => setRankFilter(r)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${rankFilter === r ? 'bg-ff-gold text-black' : 'bg-ff-card border border-ff-border text-ff-text-dim hover:text-ff-text'}`}
            >
              {r === 'All' ? 'All Ranks' : `Rank ${r}`}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-2">
        {filtered.map((hunt) => {
          const status = progress[category]?.[hunt.id];
          const isCompleted = status === 'completed';
          const isInProgress = status === 'in_progress';
          const isExpanded = expandedId === hunt.id;

          const getStatusIcon = () => {
            if (isCompleted) return <CheckCircle size={18} className="text-green-400" />;
            if (isInProgress) return <Sparkles size={18} className="text-yellow-400" />;
            return <Circle size={18} className="text-ff-text-dim" />;
          };

          return (
            <div key={hunt.id} className={`bg-ff-card border rounded-lg overflow-hidden ${isCompleted ? 'border-green-800/50' : isInProgress ? 'border-yellow-800/50' : 'border-ff-border'}`}>
              <div className="flex items-center gap-3 px-4 py-3">
                <button onClick={() => toggleItem(category, hunt.id)} className="flex-shrink-0">
                  {getStatusIcon()}
                </button>
                <button onClick={() => setExpandedId(isExpanded ? null : hunt.id)} className="flex items-center gap-2 flex-1 text-left">
                  {isExpanded ? <ChevronDown size={16} className="text-ff-text-dim" /> : <ChevronRight size={16} className="text-ff-text-dim" />}
                  <div>
                    <div className="text-sm font-medium">{hunt.name}</div>
                    <div className="text-xs text-ff-text-dim">
                      {tab === 'regular' && <>Rank {hunt.rank} &middot; </>}
                      Target: {hunt.target} &middot; {hunt.reward.toLocaleString()} gil
                    </div>
                  </div>
                </button>
                <span className="text-xs text-ff-text-dim hidden sm:inline">Lv.{hunt.recommendedLevel}</span>
              </div>
              {isInProgress && (
                <div className="px-4 pb-2 text-xs text-yellow-400">
                  In Progress
                </div>
              )}

              {isExpanded && (
                <div className="px-4 pb-4 border-t border-ff-border pt-3 space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div><span className="text-ff-text-dim">Target:</span> <span className="text-ff-text">{hunt.target}</span></div>
                    <div><span className="text-ff-text-dim">Zone:</span> <span className="text-ff-text">{hunt.zone}</span></div>
                    <div><span className="text-ff-text-dim">Level:</span> <span className="text-ff-text">{hunt.recommendedLevel}</span></div>
                    <div><span className="text-ff-text-dim">Reward:</span> <span className="text-ff-gold">{hunt.reward.toLocaleString()} gil</span></div>
                  </div>

                  {hunt.targetStats && (
                    <div className="bg-ff-bg rounded-lg p-3">
                      <h4 className="text-xs font-medium text-ff-gold mb-2">Target Stats</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div>HP: {hunt.targetStats.hp?.toLocaleString()}</div>
                        <div>MP: {hunt.targetStats.mp?.toLocaleString()}</div>
                        <div>Weakness: {hunt.targetStats.elemental?.weaknesses?.join(', ') || 'None'}</div>
                      </div>
                      {hunt.targetStats.drops?.length > 0 && (
                        <div className="mt-2 text-xs">
                          <span className="text-ff-text-dim">Drops: </span>
                          {hunt.targetStats.drops.map((d, i) => (
                            <span key={i} className="bg-ff-card-hover px-2 py-0.5 rounded mr-1">{d.item} ({d.rate})</span>
                          ))}
                        </div>
                      )}
                      {hunt.targetStats.steals?.length > 0 && (
                        <div className="mt-1 text-xs">
                          <span className="text-ff-text-dim">Steals: </span>
                          {hunt.targetStats.steals.map((s, i) => (
                            <span key={i} className="bg-ff-card-hover px-2 py-0.5 rounded mr-1">{s.item} ({s.rate})</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {hunt.strategy && (
                    <div className="text-xs">
                      <h4 className="font-medium text-ff-gold mb-1">Strategy</h4>
                      <p className="text-ff-text-dim">{hunt.strategy}</p>
                    </div>
                  )}

                  {hunt.walkthrough && (
                    <div className="text-xs">
                      <h4 className="font-medium text-ff-gold mb-1">Walkthrough</h4>
                      <pre className="text-ff-text-dim whitespace-pre-wrap font-sans">{hunt.walkthrough}</pre>
                    </div>
                  )}

                  <div className="text-xs text-ff-text-dim">Client: {hunt.client}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
