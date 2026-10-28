class StorageManager {
  constructor() {
    this.SETTINGS_KEY = 'clubhouse_c4_settings';
    this.STATS_KEY = 'clubhouse_c4_stats';
    this.GAME_STATE_KEY = 'clubhouse_c4_active_save';
  }

  getSettings() {
    // 1. ローカル初期値
    const defaults = { lang: 'en', sound: true, vibrate: true, speed: 1.0 };
    let current = { ...defaults };
    try {
      const saved = localStorage.getItem(this.SETTINGS_KEY);
      if (saved) current = { ...current, ...JSON.parse(saved) };
    } catch (e) {}

    // 2. クラブハウス・他ゲーム共通キーがあれば最優先で同期
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
      current.vibrate = (globalVib !== 'false' && globalVib !== false);
    }

    const globalSpeed = localStorage.getItem('c4_speed') ||
                        localStorage.getItem('clubhouse_speed') ||
                        localStorage.getItem('bj_speed') ||
                        localStorage.getItem('bg_speed') ||
                        localStorage.getItem('2048_speed');
    if (globalSpeed) {
      current.speed = (globalSpeed === 'fast') ? 1.5 : 1.0;
    }

    return current;
  }

  saveSettings(settings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(updated));

      // クラブハウスおよび全ゲームの共通キーへ双方向同期
      const lang = updated.lang || 'en';
      const isMuted = !updated.sound;
      const isVib = !!updated.vibrate;
      const speedStr = (updated.speed > 1.0 || updated.speed === 'fast') ? 'fast' : 'normal';

      ['clubhouse', 'c4', 'bj', 'bg', '2048'].forEach(prefix => {
        localStorage.setItem(`${prefix}_lang`, lang);
        localStorage.setItem(`${prefix}_muted`, isMuted);
        localStorage.setItem(`${prefix}_vibration`, isVib);
        localStorage.setItem(`${prefix}_speed`, speedStr);
      });

      // バックギャモン独自キー（gch_bg_settings）も更新
      try {
        const bgSettings = {
          lang: lang,
          sound: updated.sound,
          haptics: isVib,
          fastAnim: speedStr === 'fast'
        };
        localStorage.setItem('gch_bg_settings', JSON.stringify(bgSettings));
      } catch (e) {}

      // ブラックジャック独自キー（clubhouse_settings）も更新
      try {
        const bjSettings = {
          lang: lang,
          sound: updated.sound,
          vibrate: isVib,
          speed: updated.speed
        };
        localStorage.setItem('clubhouse_settings', JSON.stringify(bjSettings));
      } catch (e) {}

      return updated;
    } catch (e) {}
  }

  getStats() {
    const defaults = {
      gamesPlayed: 0,
      player1Wins: 0,
      player2Wins: 0,
      draws: 0
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

  saveGameState(state) {
    try {
      localStorage.setItem(this.GAME_STATE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  getSavedGameState() {
    try {
      const saved = localStorage.getItem(this.GAME_STATE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  }

  clearGameState() {
    try {
      localStorage.removeItem(this.GAME_STATE_KEY);
    } catch (e) {}
  }

  resetAllData() {
    try {
      localStorage.removeItem(this.STATS_KEY);
      localStorage.removeItem(this.GAME_STATE_KEY);
    } catch (e) {}
  }
}
window.storageManager = new StorageManager();
