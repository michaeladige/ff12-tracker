export function getStatusColor(status) {
  switch (status) {
    case 'completed':
      return 'text-emerald-400';
    case 'in_progress':
      return 'text-amber-400';
    case 'not_started':
    default:
      return 'text-gray-500';
  }
}

export function getStatusBg(status) {
  switch (status) {
    case 'completed':
      return 'bg-emerald-400/10 border-emerald-400/30';
    case 'in_progress':
      return 'bg-amber-400/10 border-amber-400/30';
    case 'not_started':
    default:
      return 'bg-gray-400/5 border-gray-600/20';
  }
}

export function getStatusIcon(status) {
  switch (status) {
    case 'completed':
      return 'check';
    case 'in_progress':
      return 'clock';
    case 'not_started':
    default:
      return 'circle';
  }
}

export function formatStatus(status) {
  switch (status) {
    case 'completed':
      return 'Completed';
    case 'in_progress':
      return 'In Progress';
    case 'not_started':
    default:
      return 'Not Started';
  }
}

export function calculatePercentage(completed, total) {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function exportProgress(progress) {
  return JSON.stringify(progress, null, 2);
}

export function importProgress(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}
