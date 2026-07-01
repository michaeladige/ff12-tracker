import { useProgress } from '../context/ProgressContext';
import { ArrowLeft } from 'lucide-react';
import StatusIcon from './StatusIcon';

export default function QuestDetail({ quest, onBack }) {
  const { toggleItem, progress } = useProgress();

  const status = progress[quest.category]?.[quest.id];
  const isInProgress = status === 'in_progress';

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-ff-text-dim hover:text-ff-text"
      >
        <ArrowLeft size={16} />
        <span>Back to Quests</span>
      </button>

      <div className="bg-ff-card border border-ff-border rounded-lg p-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => toggleItem(quest.category, quest.id)}
            className="flex-shrink-0"
          >
            <StatusIcon status={status} size={20} />
          </button>
          <div>
            <h1 className="text-xl font-bold">{quest.name}</h1>
            <div className="text-sm text-ff-text-dim">
              {quest.chapter && <>{quest.chapter} &middot; </>}
              {quest.type && <>{quest.type} &middot; </>}
              {quest.zone}
            </div>
          </div>
        </div>

        {isInProgress && (
          <div className="text-xs text-yellow-400 mb-4">In Progress</div>
        )}

        {quest.details && (
          <div className="bg-ff-bg rounded-lg p-4">
            <h3 className="text-sm font-medium text-ff-gold mb-2">Walkthrough</h3>
            <div className="text-sm text-ff-text-dim whitespace-pre-wrap leading-relaxed">
              {quest.details}
            </div>
          </div>
        )}

        {quest.reward != null && (
          <div className="mt-4 text-sm">
            <span className="text-ff-text-dim">Reward: </span>
            <span className="text-ff-gold">{quest.reward.toLocaleString()} gil</span>
          </div>
        )}
      </div>
    </div>
  );
}
