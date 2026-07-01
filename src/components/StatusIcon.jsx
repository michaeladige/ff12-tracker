import { CheckCircle, Circle, Sparkles } from 'lucide-react';

export default function StatusIcon({ status, size = 18 }) {
  if (status === 'completed') return <CheckCircle size={size} className="text-green-400" />;
  if (status === 'in_progress') return <Sparkles size={size} className="text-yellow-400" />;
  return <Circle size={size} className="text-ff-text-dim" />;
}
