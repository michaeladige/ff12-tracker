import { useProgress } from '../context/ProgressContext';
import { Trophy, MapPin, Target, Zap } from 'lucide-react';

export default function Dashboard() {
  const { getStats, getOverallStats } = useProgress();
  const overall = getOverallStats();
  const mainQuests = getStats('mainQuests');
  const sideQuests = getStats('sideQuests');
  const hunts = getStats('hunts');
  const weapons = getStats('weapons');
  const armor = getStats('armor');
  const espers = getStats('espers');
  const trophies = getStats('trophies');

  const statCards = [
    {
      label: 'Main Quests',
      completed: mainQuests.completed,
      total: mainQuests.total,
      inProgress: mainQuests.inProgress,
      icon: MapPin,
      color: 'text-ff-gold',
    },
    {
      label: 'Side Quests',
      completed: sideQuests.completed,
      total: sideQuests.total,
      inProgress: sideQuests.inProgress,
      icon: Target,
      color: 'text-blue-400',
    },
    {
      label: 'Hunts',
      completed: hunts.completed,
      total: hunts.total,
      inProgress: hunts.inProgress,
      icon: Zap,
      color: 'text-red-400',
    },
    {
      label: 'Weapons',
      completed: weapons.completed,
      total: weapons.total,
      inProgress: weapons.inProgress,
      icon: Target,
      color: 'text-cyan-400',
    },
    {
      label: 'Armor',
      completed: armor.completed,
      total: armor.total,
      inProgress: armor.inProgress,
      icon: Target,
      color: 'text-purple-400',
    },
    {
      label: 'Espers',
      completed: espers.completed,
      total: espers.total,
      inProgress: espers.inProgress,
      icon: Zap,
      color: 'text-amber-400',
    },
    {
      label: 'Trophies',
      completed: trophies.completed,
      total: trophies.total,
      inProgress: trophies.inProgress,
      icon: Trophy,
      color: 'text-yellow-400',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-ff-blue to-ff-blue-dark rounded-2xl p-6 border border-ff-border">
        <h1 className="text-2xl font-bold text-ff-gold mb-2">
          Final Fantasy XII: The Zodiac Age
        </h1>
        <p className="text-ff-text-dim text-sm mb-4">Game Progress Tracker</p>
        <div className="relative h-4 bg-ff-bg rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-ff-gold to-ff-gold-light rounded-full transition-all duration-500"
            style={{ width: `${overall.percentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-ff-text-dim">
            {overall.completed} / {overall.total} items completed
          </span>
          <span className="text-ff-gold font-semibold">{overall.percentage}%</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {statCards.map((stat) => {
          const pct = stat.total > 0 ? Math.round((stat.completed / stat.total) * 100) : 0;
          return (
            <div
              key={stat.label}
              className="bg-ff-card rounded-xl border border-ff-border p-4 hover:border-ff-gold/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <stat.icon size={16} className={stat.color} />
                <span className="text-sm text-ff-text-dim">{stat.label}</span>
              </div>
              <div className="text-2xl font-bold text-ff-text mb-1">
                {stat.completed}
                <span className="text-sm font-normal text-ff-text-dim">/{stat.total}</span>
              </div>
              <div className="relative h-1.5 bg-ff-bg rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${
                    pct === 100 ? 'bg-emerald-400' : 'bg-ff-gold'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              {stat.inProgress > 0 && (
                <div className="text-xs text-amber-400 mt-2">
                  {stat.inProgress} in progress
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
