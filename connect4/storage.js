class StorageManager {
  constructor() {
    this.KEY_SETTINGS = 'gch_c4_settings';
    this.KEY_SAVE = 'gch_c4_saved_game';
    this.KEY_STATS = 'gch_c4_stats';
    this.KEY_ACHIEVEMENTS = 'gch_c4_achievements';
    this.KEY_CLUBHOUSE = 'gch_clubhouse_shared_settings';
  }

  getSettings() {
    let club = {};
    try {
      club = JSON.parse(localStorage.getItem(this.KEY_CLUBHOUSE)) || {};
    } catch (e) {}

    const defaults = {
      lang: club.lang || 'ja',
      sound: club.sound !== undefined ? club.sound : true,
      vibration: club.vibration !== undefined ? club.vibration : true,
      fastAnim: false
    };

    try {
      const local = JSON.parse(localStorage.getItem(this.KEY_SETTINGS)) || {};
      return { ...defaults, ...local };
    } catch (e) {
      return defaults;
    }
  }

  saveSettings(settings) {
    localStorage.setItem(this.KEY_SETTINGS, JSON.stringify(settings));
    try {
      const club = JSON.parse(localStorage.getItem(this.KEY_CLUBHOUSE)) || {};
      club.lang = settings.lang;
      club.sound = settings.sound;
      club.vibration = settings.vibration;
      localStorage.setItem(this.KEY_CLUBHOUSE, JSON.stringify(club));
    } catch (e) {}
  }

  getSavedGame() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY_SAVE));
    } catch (e) {
      return null;
    }
  }

  saveGame(state) {
    if (!state) {
      localStorage.removeItem(this.KEY_SAVE);
    } else {
      localStorage.setItem(this.KEY_SAVE, JSON.stringify(state));
    }
  }

  getStats() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY_STATS)) || {
        totalGames: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        winStreak: 0,
        bestStreak: 0
      };
    } catch (e) {
      return { totalGames: 0, wins: 0, losses: 0, draws: 0, winStreak: 0, bestStreak: 0 };
    }
  }

  saveStats(stats) {
    localStorage.setItem(this.KEY_STATS, JSON.stringify(stats));
  }

  getAchievements() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY_ACHIEVEMENTS)) || {
        firstWin: false,
        allDirections: false,
        quickWin: false,
        hardWin: false,
        centerWin: false
      };
    } catch (e) {
      return {
        firstWin: false,
        allDirections: false,
        quickWin: false,
        hardWin: false,
        centerWin: false
      };
    }
  }

  saveAchievements(ach) {
    localStorage.setItem(this.KEY_ACHIEVEMENTS, JSON.stringify(ach));
  }

  clearAllData() {
    localStorage.removeItem(this.KEY_SETTINGS);
    localStorage.removeItem(this.KEY_SAVE);
    localStorage.removeItem(this.KEY_STATS);
    localStorage.removeItem(this.KEY_ACHIEVEMENTS);
  }
}

window.storageManager = new StorageManager();