import { useProgress } from '../context/ProgressContext';
import { Download, Upload, RotateCcw, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const { progress, resetProgress, dispatch } = useProgress();
  const [showConfirm, setShowConfirm] = useState(false);
  const [importText, setImportText] = useState('');

  const handleExport = () => {
    const data = JSON.stringify(progress, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ff12-tracker-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    try {
      const parsed = JSON.parse(importText);
      dispatch({ type: 'IMPORT_PROGRESS', payload: parsed });
      setImportText('');
      alert('Progress imported successfully!');
    } catch {
      alert('Invalid JSON format');
    }
  };

  const handleReset = () => {
    resetProgress();
    setShowConfirm(false);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-ff-gold mb-4">Settings</h1>

      <div className="bg-ff-card rounded-xl border border-ff-border p-4 space-y-4">
        <h2 className="font-semibold">Export Progress</h2>
        <p className="text-sm text-ff-text-dim">
          Download your progress as a JSON file to back it up.
        </p>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-ff-gold/20 hover:bg-ff-gold/30 text-ff-gold px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <Download size={16} />
          Export Progress
        </button>
      </div>

      <div className="bg-ff-card rounded-xl border border-ff-border p-4 space-y-4">
        <h2 className="font-semibold">Import Progress</h2>
        <p className="text-sm text-ff-text-dim">
          Paste a previously exported JSON file to restore your progress.
        </p>
        <textarea
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder="Paste JSON here..."
          className="w-full bg-ff-bg border border-ff-border rounded-lg px-3 py-2 text-sm h-32 focus:outline-none focus:border-ff-gold/50"
        />
        <button
          onClick={handleImport}
          disabled={!importText}
          className="flex items-center gap-2 bg-ff-gold/20 hover:bg-ff-gold/30 text-ff-gold px-4 py-2 rounded-lg transition-colors text-sm disabled:opacity-50"
        >
          <Upload size={16} />
          Import Progress
        </button>
      </div>

      <div className="bg-ff-card rounded-xl border border-red-500/30 p-4 space-y-4">
        <h2 className="font-semibold text-red-400 flex items-center gap-2">
          <AlertTriangle size={18} />
          Reset Progress
        </h2>
        <p className="text-sm text-ff-text-dim">
          This will erase all your progress. This action cannot be undone.
        </p>
        {!showConfirm ? (
          <button
            onClick={() => setShowConfirm(true)}
            className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <RotateCcw size={16} />
            Reset All Progress
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Yes, Reset Everything
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="px-4 py-2 rounded-lg border border-ff-border text-ff-text-dim hover:bg-ff-card-hover transition-colors text-sm"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
