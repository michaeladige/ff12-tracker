import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { CheckCircle, Clock, Circle, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { getStatusColor, getStatusBg, formatStatus } from '../utils/progressUtils';

export default function ChecklistSection({ title, items, category, renderItem, searchPlaceholder }) {
  const { progress, toggleItem, getStats } = useProgress();
  const [expanded, setExpanded] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [statusMenu, setStatusMenu] = useState(false);

  const stats = getStats(category);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const status = progress[category]?.[item.id] || 'not_started';
    const matchesFilter = filter === 'all' || status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-ff-card rounded-xl border border-ff-border overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-ff-card-hover transition-colors"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-ff-gold">{title}</h2>
          <span className="text-sm text-ff-text-dim">
            {stats.completed}/{stats.total}
          </span>
          {stats.inProgress > 0 && (
            <span className="text-xs bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded-full">
              {stats.inProgress} in progress
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-ff-border">
          <div className="p-3 flex items-center gap-3 border-b border-ff-border/50">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder || 'Search...'}
              className="flex-1 bg-ff-bg border border-ff-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-ff-gold/50"
            />
            <div className="relative">
              <button
                onClick={() => setStatusMenu(!statusMenu)}
                className="flex items-center gap-2 bg-ff-bg border border-ff-border rounded-lg px-3 py-1.5 text-sm hover:border-ff-gold/50 transition-colors"
              >
                <Filter size={14} />
                <span>{filter === 'all' ? 'All' : formatStatus(filter)}</span>
              </button>
              {statusMenu && (
                <div className="absolute right-0 top-full mt-1 bg-ff-card border border-ff-border rounded-lg shadow-xl z-20 min-w-[140px]">
                  {['all', 'not_started', 'in_progress', 'completed'].map((f) => (
                    <button
                      key={f}
                      onClick={() => {
                        setFilter(f);
                        setStatusMenu(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-ff-card-hover ${
                        filter === f ? 'text-ff-gold' : ''
                      }`}
                    >
                      {f === 'all' ? 'All' : formatStatus(f)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="p-3 grid gap-1 max-h-[500px] overflow-y-auto">
            {filteredItems.map((item) => {
              const status = progress[category]?.[item.id] || 'not_started';
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(category, item.id)}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-lg border transition-all hover:bg-ff-card-hover ${
                    getStatusBg(status)
                  }`}
                >
                  <span className={`flex-shrink-0 ${getStatusColor(status)}`}>
                    {status === 'completed' ? (
                      <CheckCircle size={18} />
                    ) : status === 'in_progress' ? (
                      <Clock size={18} />
                    ) : (
                      <Circle size={18} />
                    )}
                  </span>
                  {renderItem ? renderItem(item, status) : (
                    <span className="text-sm">{item.name}</span>
                  )}
                </button>
              );
            })}
            {filteredItems.length === 0 && (
              <div className="text-center text-ff-text-dim py-8 text-sm">
                No items found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
