/**
 * Games Clubhouse: Storage & State Persistence Manager
 * Synchronizes clubhouse portal settings and tracks player bankroll & stats.
 */

class StorageManager {
  constructor() {
    this.SETTINGS_KEY = 'clubhouse_settings';
    this.GAME_STATE_KEY = 'clubhouse_bj_state';
    this.STATS_KEY = 'clubhouse_bj_stats';
  }

  // Common Settings (Inherited from/saved to Clubhouse Portal)
  getSettings() {
    const defaults = {
      lang: 'en',
      sound: true,
      vibrate: true,
      speed: 1.0
    };
    try {
      const saved = localStorage.getItem(this.SETTINGS_KEY);
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    } catch (e) {
      return defaults;
    }
  }

  saveSettings(settings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  }

  // Game Persistence (Auto-Save / Resume)
  getSavedState() {
    try {
      const saved = localStorage.getItem(this.GAME_STATE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  }

  saveState(state) {
    try {
      localStorage.setItem(this.GAME_STATE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }

  clearSavedState() {
    try {
      localStorage.removeItem(this.GAME_STATE_KEY);
    } catch (e) {
      console.error('Failed to clear state:', e);
    }
  }

  // Player Stats & Achievements
  getStats() {
    const defaults = {
      chips: 1000,
      gamesPlayed: 0,
      gamesWon: 0,
      blackjackCount: 0,
      achievements: {
        firstWin: false,
        blackjack: false,
        highRoller: false,
        fiveCard: false
      }
    };
    try {
      const saved = localStorage.getItem(this.STATS_KEY);
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    } catch (e) {
      return defaults;
    }
  }

  saveStats(stats) {
    try {
      localStorage.setItem(this.STATS_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error('Failed to save stats:', e);
    }
  }

  resetAllData() {
    try {
      localStorage.removeItem(this.GAME_STATE_KEY);
      localStorage.removeItem(this.STATS_KEY);
    } catch (e) {
      console.error('Failed to reset all data:', e);
    }
  }
}

window.storageManager = new StorageManager();