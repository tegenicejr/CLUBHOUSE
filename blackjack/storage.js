class StorageManager {
  constructor() {
    this.SETTINGS_KEY = 'clubhouse_settings';
    this.STATS_KEY = 'clubhouse_bj_stats';
  }

  getSettings() {
    const defaults = { lang: 'ja', sound: true, vibrate: true, speed: 1.0 };
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
    } catch (e) {}
  }

  getStats() {
    const defaults = {
      chips: 1000,
      gamesPlayed: 0,
      gamesWon: 0,
      blackjackCount: 0,
      achievements: { firstWin: false, blackjack: false, highRoller: false, fiveCard: false }
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
    } catch (e) {}
  }

  resetAllData() {
    try {
      localStorage.removeItem(this.STATS_KEY);
    } catch (e) {}
  }
}
window.storageManager = new StorageManager();
