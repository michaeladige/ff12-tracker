import { createContext, useContext, useReducer, useEffect } from 'react';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'ff12-tracker-progress';

const initialState = {
  mainQuests: {},
  sideQuests: {},
  hunts: {},
  eliteHunts: {},
  weapons: {},
  armor: {},
  accessories: {},
  shields: {},
  espers: {},
  trophies: {},
  characters: {},
  zones: {},
  magic: {},
  technicks: {},
};

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...initialState, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return initialState;
}

function progressReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_ITEM': {
      const { category, itemId } = action.payload;
      const currentStatus = state[category]?.[itemId];
      let nextStatus;
      if (currentStatus === undefined || currentStatus === 'not_started') {
        nextStatus = 'in_progress';
      } else if (currentStatus === 'in_progress') {
        nextStatus = 'completed';
      } else {
        nextStatus = 'not_started';
      }
      return {
        ...state,
        [category]: {
          ...state[category],
          [itemId]: nextStatus,
        },
      };
    }
    case 'SET_STATUS': {
      const { category, itemId, status } = action.payload;
      return {
        ...state,
        [category]: {
          ...state[category],
          [itemId]: status,
        },
      };
    }
    case 'SET_ALL_STATUS': {
      const { category, status } = action.payload;
      return {
        ...state,
        [category]: {
          ...Object.fromEntries(
            Object.keys(state[category]).map((k) => [k, status])
          ),
        },
      };
    }
    case 'RESET_PROGRESS':
      return initialState;
    case 'IMPORT_PROGRESS':
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
}

export function ProgressProvider({ children }) {
  const [state, dispatch] = useReducer(progressReducer, null, loadProgress);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }, [state]);

  const toggleItem = (category, itemId) => {
    dispatch({ type: 'TOGGLE_ITEM', payload: { category, itemId } });
  };

  const setStatus = (category, itemId, status) => {
    dispatch({ type: 'SET_STATUS', payload: { category, itemId, status } });
  };

  const setAllStatus = (category, status) => {
    dispatch({ type: 'SET_ALL_STATUS', payload: { category, status } });
  };

  const resetProgress = () => {
    dispatch({ type: 'RESET_PROGRESS' });
  };

  const getStats = (category) => {
    const items = state[category] || {};
    const values = Object.values(items);
    return {
      total: values.length,
      completed: values.filter((v) => v === 'completed').length,
      inProgress: values.filter((v) => v === 'in_progress').length,
      notStarted: values.filter((v) => v === 'not_started' || v === undefined).length,
    };
  };

  const getOverallStats = () => {
    let total = 0;
    let completed = 0;
    const categories = ['mainQuests', 'sideQuests', 'hunts', 'weapons', 'armor', 'accessories', 'espers', 'trophies'];
    categories.forEach((cat) => {
      const stats = getStats(cat);
      total += stats.total;
      completed += stats.completed;
    });
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  return (
    <ProgressContext.Provider
      value={{
        progress: state,
        toggleItem,
        setStatus,
        setAllStatus,
        resetProgress,
        getStats,
        getOverallStats,
        dispatch,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
