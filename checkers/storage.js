/**
 * Games Clubhouse - Checkers Storage Manager
 * Handles local persistence, Clubhouse shared cross-game settings, and statistics.
 */
class StorageManager {
  constructor() {
    this.SETTING_KEY = 'gch_global_settings';
    this.CHECKERS_STATE_KEY = 'gch_checkers_state';
    this.CHECKERS_STATS_KEY = 'gch_checkers_stats';

    this.defaultSettings = {
      lang: 'en',
      sound: true,
      vibrate: true,
      speed: 'normal'
    };

    this.defaultStats = {
      matchesPlayed: 0,
      matchesWon: 0,
      maxCombo: 0,
      achievements: {
        first_win: false,
        crown_master: false,
        triple_strike: false,
        grandmaster: false
      }
    };
  }

  // Load merged settings (Clubhouse synced)
  getSettings() {
    try {
      const saved = localStorage.getItem(this.SETTING_KEY);
      if (saved) {
        return Object.assign({}, this.defaultSettings, JSON.parse(saved));
      }
    } catch (e) {
      console.warn('StorageManager: Unable to load settings', e);
    }
    return Object.assign({}, this.defaultSettings);
  }

  saveSettings(settings) {
    try {
      const merged = Object.assign(this.getSettings(), settings);
      localStorage.setItem(this.SETTING_KEY, JSON.stringify(merged));
    } catch (e) {
      console.warn('StorageManager: Unable to save settings', e);
    }
  }

  // Active match save & resume
  saveMatchState(state) {
    try {
      if (!state) {
        localStorage.removeItem(this.CHECKERS_STATE_KEY);
      } else {
        localStorage.setItem(this.CHECKERS_STATE_KEY, JSON.stringify(state));
      }
    } catch (e) {
      console.warn('StorageManager: Unable to save match state', e);
    }
  }

  getMatchState() {
    try {
      const state = localStorage.getItem(this.CHECKERS_STATE_KEY);
      return state ? JSON.parse(state) : null;
    } catch (e) {
      console.warn('StorageManager: Unable to retrieve match state', e);
      return null;
    }
  }

  clearMatchState() {
    try {
      localStorage.removeItem(this.CHECKERS_STATE_KEY);
    } catch (e) {
      console.warn('StorageManager: Unable to clear match state', e);
    }
  }

  // Stats and Achievements
  getStats() {
    try {
      const stats = localStorage.getItem(this.CHECKERS_STATS_KEY);
      if (stats) {
        return Object.assign({}, this.defaultStats, JSON.parse(stats));
      }
    } catch (e) {
      console.warn('StorageManager: Unable to load stats', e);
    }
    return Object.assign({}, this.defaultStats);
  }

  saveStats(stats) {
    try {
      localStorage.setItem(this.CHECKERS_STATS_KEY, JSON.stringify(stats));
    } catch (e) {
      console.warn('StorageManager: Unable to save stats', e);
    }
  }

  resetAllData() {
    try {
      localStorage.removeItem(this.CHECKERS_STATE_KEY);
      localStorage.removeItem(this.CHECKERS_STATS_KEY);
    } catch (e) {
      console.warn('StorageManager: Failed resetting data', e);
    }
  }
}

window.storageManager = new StorageManager();