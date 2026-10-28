class StorageManager {
  constructor() {
    this.KEY_SETTINGS = 'gch_c4_settings';
    this.KEY_SAVE = 'gch_c4_saved_game';
    this.KEY_STATS = 'gch_c4_stats';
    this.KEY_ACHIEVEMENTS = 'gch_c4_achievements';
    this.KEY_CLUBHOUSE = 'gch_clubhouse_shared_settings';
  }

  getSettings() {
    const defaults = {
      lang: 'en',
      sound: true,
      vibration: true,
      fastAnim: false
    };

    let current = { ...defaults };

    // 1. コネクトフォーの古いローカル保存をベースとして取得
    try {
      const local = JSON.parse(localStorage.getItem(this.KEY_SETTINGS));
      if (local) current = { ...current, ...local };
    } catch (e) {}

    // 2. 他ゲーム（2048, BG, BJ）やクラブハウスの更新を最優先で吸い上げる
    try {
      // --- A. 言語 (Lang) ---
      let targetLang = null;
      const langKeys = ['clubhouse_lang', 'bj_lang', 'bg_lang', '2048_lang', 'c4_lang'];
      for (const k of langKeys) {
        const val = localStorage.getItem(k);
        if (val) {
          targetLang = val;
          break;
        }
      }
      // BJ固有オブジェクトキー (clubhouse_settings)
      if (!targetLang) {
        try {
          const bjObj = JSON.parse(localStorage.getItem('clubhouse_settings'));
          if (bjObj && bjObj.lang) targetLang = bjObj.lang;
        } catch (e) {}
      }
      // BG固有オブジェクトキー (gch_bg_settings)
      if (!targetLang) {
        try {
          const bgObj = JSON.parse(localStorage.getItem('gch_bg_settings'));
          if (bgObj && bgObj.lang) targetLang = bgObj.lang;
        } catch (e) {}
      }
      if (targetLang) {
        current.lang = targetLang;
      }

      // --- B. 効果音 (Sound) ---
      let targetSound = null;
      const mutedKeys = ['clubhouse_muted', 'bj_muted', 'bg_muted', '2048_muted', 'c4_muted'];
      for (const k of mutedKeys) {
        const val = localStorage.getItem(k);
        if (val !== null && val !== undefined) {
          targetSound = (val !== 'true' && val !== true);
          break;
        }
      }
      if (targetSound === null) {
        try {
          const bjObj = JSON.parse(localStorage.getItem('clubhouse_settings'));
          if (bjObj && bjObj.sound !== undefined) targetSound = !!bjObj.sound;
        } catch (e) {}
      }
      if (targetSound === null) {
        try {
          const bgObj = JSON.parse(localStorage.getItem('gch_bg_settings'));
          if (bgObj && bgObj.sound !== undefined) targetSound = !!bgObj.sound;
        } catch (e) {}
      }
      if (targetSound !== null) {
        current.sound = targetSound;
      }

      // --- C. 振動 (Vibration) ---
      let targetVib = null;
      const vibKeys = ['clubhouse_vibration', 'bj_vibration', 'bg_vibration', '2048_vibration', 'c4_vibration'];
      for (const k of vibKeys) {
        const val = localStorage.getItem(k);
        if (val !== null && val !== undefined) {
          targetVib = (val !== 'false' && val !== false);
          break;
        }
      }
      if (targetVib === null) {
        try {
          const bjObj = JSON.parse(localStorage.getItem('clubhouse_settings'));
          if (bjObj && (bjObj.vibrate !== undefined || bjObj.vibration !== undefined)) {
            targetVib = bjObj.vibrate !== undefined ? !!bjObj.vibrate : !!bjObj.vibration;
          }
        } catch (e) {}
      }
      if (targetVib === null) {
        try {
          const bgObj = JSON.parse(localStorage.getItem('gch_bg_settings'));
          if (bgObj && bgObj.haptics !== undefined) targetVib = !!bgObj.haptics;
        } catch (e) {}
      }
      if (targetVib !== null) {
        current.vibration = targetVib;
      }

      // --- D. 速度 (fastAnim / Speed) ---
      let targetFast = null;
      const speedKeys = ['clubhouse_speed', 'bj_speed', 'bg_speed', '2048_speed', 'c4_speed'];
      for (const k of speedKeys) {
        const val = localStorage.getItem(k);
        if (val) {
          targetFast = (val === 'fast');
          break;
        }
      }
      if (targetFast === null) {
        try {
          const bgObj = JSON.parse(localStorage.getItem('gch_bg_settings'));
          if (bgObj && bgObj.fastAnim !== undefined) targetFast = !!bgObj.fastAnim;
        } catch (e) {}
      }
      if (targetFast !== null) {
        current.fastAnim = targetFast;
      }
    } catch (e) {}

    return current;
  }

  saveSettings(settings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };

      // 1. コネクトフォー本体のローカル保存
      localStorage.setItem(this.KEY_SETTINGS, JSON.stringify(updated));

      // 2. クラブハウス共有キー（旧互換）
      try {
        const club = JSON.parse(localStorage.getItem(this.KEY_CLUBHOUSE)) || {};
        club.lang = updated.lang;
        club.sound = updated.sound;
        club.vibration = updated.vibration;
        localStorage.setItem(this.KEY_CLUBHOUSE, JSON.stringify(club));
      } catch (e) {}

      // 3. 全ゲーム共通キー群へ一括保存
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

      // 4. バックギャモン固有キー（gch_bg_settings）も更新
      try {
        localStorage.setItem('gch_bg_settings', JSON.stringify({
          lang: lang,
          sound: updated.sound,
          haptics: isVib,
          fastAnim: updated.fastAnim
        }));
      } catch (e) {}

      // 5. ブラックジャック固有キー（clubhouse_settings）も更新
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
