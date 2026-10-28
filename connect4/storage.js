class StorageManager {
  constructor() {
    this.KEY_SETTINGS = 'gch_c4_settings';
    this.KEY_SAVE = 'gch_c4_saved_game';
    this.KEY_STATS = 'gch_c4_stats';
    this.KEY_ACHIEVEMENTS = 'gch_c4_achievements';
    this.KEY_CLUBHOUSE = 'gch_clubhouse_shared_settings';
  }

  getSettings() {
    // 1. デフォルト設定
    const defaults = {
      lang: 'en',
      sound: true,
      vibration: true,
      fastAnim: false
    };

    let current = { ...defaults };

    // 2. 既存のローカル保存を読み出し
    try {
      const local = JSON.parse(localStorage.getItem(this.KEY_SETTINGS));
      if (local) current = { ...current, ...local };
    } catch (e) {}

    // 3. クラブハウスおよび他ゲームの共通キーを最優先で同期
    try {
      const globalLang = localStorage.getItem('c4_lang') ||
                         localStorage.getItem('clubhouse_lang') ||
                         localStorage.getItem('bj_lang') ||
                         localStorage.getItem('bg_lang') ||
                         localStorage.getItem('2048_lang');
      if (globalLang) {
        current.lang = globalLang;
      }

      const globalMuted = localStorage.getItem('c4_muted') ??
                          localStorage.getItem('clubhouse_muted') ??
                          localStorage.getItem('bj_muted') ??
                          localStorage.getItem('bg_muted') ??
                          localStorage.getItem('2048_muted');
      if (globalMuted !== null && globalMuted !== undefined) {
        current.sound = (globalMuted !== 'true' && globalMuted !== true);
      }

      const globalVib = localStorage.getItem('c4_vibration') ??
                        localStorage.getItem('clubhouse_vibration') ??
                        localStorage.getItem('bj_vibration') ??
                        localStorage.getItem('bg_vibration') ??
                        localStorage.getItem('2048_vibration');
      if (globalVib !== null && globalVib !== undefined) {
        current.vibration = (globalVib !== 'false' && globalVib !== false);
      }

      const globalSpeed = localStorage.getItem('c4_speed') ||
                          localStorage.getItem('clubhouse_speed') ||
                          localStorage.getItem('bj_speed') ||
                          localStorage.getItem('bg_speed') ||
                          localStorage.getItem('2048_speed');
      if (globalSpeed) {
        current.fastAnim = (globalSpeed === 'fast');
      }
    } catch (e) {}

    return current;
  }

  saveSettings(settings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };

      // コネクトフォー本体の保存キーに保存
      localStorage.setItem(this.KEY_SETTINGS, JSON.stringify(updated));

      // クラブハウス共有キー（旧形式）も更新
      try {
        const club = JSON.parse(localStorage.getItem(this.KEY_CLUBHOUSE)) || {};
        club.lang = updated.lang;
        club.sound = updated.sound;
        club.vibration = updated.vibration;
        localStorage.setItem(this.KEY_CLUBHOUSE, JSON.stringify(club));
      } catch (e) {}

      // 全ゲーム共通キー（新形式）へ双方向同期
      const lang = updated.lang || 'en';
      const isMuted = !updated.sound;
      const isVib = !!updated.vibration;
      const speedStr = updated.fastAnim ? 'fast' : 'normal';

      ['clubhouse', 'c4', 'bj', 'bg', '2048'].forEach(prefix => {
        localStorage.setItem(`${prefix}_lang`, lang);
        localStorage.setItem(`${prefix}_muted`, isMuted);
        localStorage.setItem(`${prefix}_vibration`, isVib);
        localStorage.setItem(`${prefix}_speed`, speedStr);
      });

      // バックギャモン独自キー（gch_bg_settings）も更新
      try {
        localStorage.setItem('gch_bg_settings', JSON.stringify({
          lang: lang,
          sound: updated.sound,
          haptics: isVib,
          fastAnim: updated.fastAnim
        }));
      } catch (e) {}

      // ブラックジャック独自キー（clubhouse_settings）も更新
      try {
        localStorage.setItem('clubhouse_settings', JSON.stringify({
          lang: lang,
          sound: updated.sound,
          vibrate: isVib,
          speed: updated.fastAnim ? 1.5 : 1.0
        }));
      } catch (e) {}

      return updated;
    } catch (e) {
      return settings;
    }
  }

  getSavedGame() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY_SAVE));
    } catch (e) {
      return null;
    }
  }

  saveGame(state) {
    try {
      if (!state) {
        localStorage.removeItem(this.KEY_SAVE);
      } else {
        localStorage.setItem(this.KEY_SAVE, JSON.stringify(state));
      }
    } catch (e) {}
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
    try {
      localStorage.setItem(this.KEY_STATS, JSON.stringify(stats));
    } catch (e) {}
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
    try {
      localStorage.setItem(this.KEY_ACHIEVEMENTS, JSON.stringify(ach));
    } catch (e) {}
  }

  clearAllData() {
    try {
      localStorage.removeItem(this.KEY_SETTINGS);
      localStorage.removeItem(this.KEY_SAVE);
      localStorage.removeItem(this.KEY_STATS);
      localStorage.removeItem(this.KEY_ACHIEVEMENTS);
    } catch (e) {}
  }
}

window.storageManager = new StorageManager();
