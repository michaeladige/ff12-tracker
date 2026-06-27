import { useProgress } from '../context/ProgressContext';
import { mainQuests, sideQuests, hunts, eliteHunts } from '../data/quests';
import { weapons, shields, armor, accessories } from '../data/equipment';
import { magicSpells, technicks } from '../data/recipes';
import { enemies } from '../data/bestiary';
import { Trophy, MapPin, Target, Zap, Bug, Sword, ShieldCheck, Shirt, Gem, Wand2, Skull } from 'lucide-react';

export default function Dashboard() {
  const { getStats } = useProgress();

  // Get actual totals from data files
  const totalMainQuests = mainQuests.length;
  const totalSideQuests = sideQuests.length;
  const totalHunts = hunts.length + eliteHunts.length;
  const totalWeapons = weapons.length;
  const totalArmor = armor.length + shields.length;
  const totalAccessories = accessories.length;
  const totalEspers = enemies.filter(e => e.zone === 'Espers').length;
  const totalMagic = magicSpells.length + technicks.length;

  // Get progress stats
  const mainQuestStats = getStats('mainQuests');
  const sideQuestStats = getStats('sideQuests');
  const huntStats = getStats('hunts');
  const eliteHuntStats = getStats('eliteHunts');
  const weaponStats = getStats('weapons');
  const armorStats = getStats('armor');
  const shieldStats = getStats('shields');
  const accessoryStats = getStats('accessories');
  const esperStats = getStats('espers');
  const magicStats = getStats('magic');
  const technickStats = getStats('technicks');

  // Calculate completed counts
  const completedMainQuests = mainQuestStats.completed;
  const completedSideQuests = sideQuestStats.completed;
  const completedHunts = huntStats.completed + eliteHuntStats.completed;
  const completedWeapons = weaponStats.completed;
  const completedArmor = armorStats.completed + shieldStats.completed;
  const completedAccessories = accessoryStats.completed;
  const completedEspers = esperStats.completed;
  const completedMagic = magicStats.completed + technickStats.completed;

  // Calculate overall stats
  const overallTotal = totalMainQuests + totalSideQuests + totalHunts + totalWeapons + totalArmor + totalAccessories + totalEspers + totalMagic;
  const overallCompleted = completedMainQuests + completedSideQuests + completedHunts + completedWeapons + completedArmor + completedAccessories + completedEspers + completedMagic;
  const overallPercentage = overallTotal > 0 ? Math.round((overallCompleted / overallTotal) * 100) : 0;

  const statCards = [
    {
      label: 'Main Quests',
      completed: completedMainQuests,
      total: totalMainQuests,
      inProgress: mainQuestStats.inProgress,
      icon: MapPin,
      color: 'text-ff-gold',
    },
    {
      label: 'Side Quests',
      completed: completedSideQuests,
      total: totalSideQuests,
      inProgress: sideQuestStats.inProgress,
      icon: Target,
      color: 'text-blue-400',
    },
    {
      label: 'Hunts',
      completed: completedHunts,
      total: totalHunts,
      inProgress: huntStats.inProgress + eliteHuntStats.inProgress,
      icon: Skull,
      color: 'text-red-400',
    },
    {
      label: 'Weapons',
      completed: completedWeapons,
      total: totalWeapons,
      inProgress: weaponStats.inProgress,
      icon: Sword,
      color: 'text-cyan-400',
    },
    {
      label: 'Armor & Shields',
      completed: completedArmor,
      total: totalArmor,
      inProgress: armorStats.inProgress + shieldStats.inProgress,
      icon: ShieldCheck,
      color: 'text-purple-400',
    },
    {
      label: 'Accessories',
      completed: completedAccessories,
      total: totalAccessories,
      inProgress: accessoryStats.inProgress,
      icon: Gem,
      color: 'text-pink-400',
    },
    {
      label: 'Espers',
      completed: completedEspers,
      total: totalEspers,
      inProgress: esperStats.inProgress,
      icon: Zap,
      color: 'text-amber-400',
    },
    {
      label: 'Magicks & Technicks',
      completed: completedMagic,
      total: totalMagic,
      inProgress: magicStats.inProgress + technickStats.inProgress,
      icon: Wand2,
      color: 'text-green-400',
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
            style={{ width: `${overallPercentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-ff-text-dim">
            {overallCompleted} / {overallTotal} items completed
          </span>
          <span className="text-ff-gold font-semibold">{overallPercentage}%</span>
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
