class StorageManager {
  constructor() {
    this.SETTINGS_KEY = 'clubhouse_settings';
    this.STATS_KEY = 'clubhouse_bj_stats';
    this.GAME_STATE_KEY = 'clubhouse_bj_active_save';
  }

  getSettings() {
    // 1. ブラックジャック自身のローカル設定を取得
    const defaults = { lang: 'en', sound: true, vibrate: true, speed: 1.0 };
    let current = { ...defaults };
    try {
      const saved = localStorage.getItem(this.SETTINGS_KEY);
      if (saved) current = { ...current, ...JSON.parse(saved) };
    } catch (e) {}

    // 2. クラブハウス・他ゲーム共通キーがあれば最優先で上書き同期
    const globalLang = localStorage.getItem('bj_lang') ||
                       localStorage.getItem('clubhouse_lang') ||
                       localStorage.getItem('bg_lang') ||
                       localStorage.getItem('2048_lang');
    if (globalLang) {
      current.lang = globalLang;
    }

    const globalMuted = localStorage.getItem('bj_muted') ??
                        localStorage.getItem('clubhouse_muted') ??
                        localStorage.getItem('bg_muted') ??
                        localStorage.getItem('2048_muted');
    if (globalMuted !== null && globalMuted !== undefined) {
      current.sound = (globalMuted !== 'true' && globalMuted !== true);
    }

    const globalVib = localStorage.getItem('bj_vibration') ??
                      localStorage.getItem('clubhouse_vibration') ??
                      localStorage.getItem('bg_vibration') ??
                      localStorage.getItem('2048_vibration');
    if (globalVib !== null && globalVib !== undefined) {
      current.vibrate = (globalVib !== 'false' && globalVib !== false);
    }

    const globalSpeed = localStorage.getItem('bj_speed') ||
                        localStorage.getItem('clubhouse_speed') ||
                        localStorage.getItem('bg_speed') ||
                        localStorage.getItem('2048_speed');
    if (globalSpeed) {
      // speed が 'fast' の場合は 1.5 または 2.0、'normal' の場合は 1.0 に対応
      current.speed = (globalSpeed === 'fast') ? 1.5 : 1.0;
    }

    return current;
  }

  saveSettings(settings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(updated));

      // クラブハウス・他ゲーム用共通キーへ同時書き出し（双方向同期）
      const lang = updated.lang || 'en';
      const isMuted = !updated.sound;
      const isVib = !!updated.vibrate;
      const speedStr = (updated.speed > 1.0 || updated.speed === 'fast') ? 'fast' : 'normal';

      ['clubhouse', 'bj', 'bg', '2048'].forEach(prefix => {
        localStorage.setItem(`${prefix}_lang`, lang);
        localStorage.setItem(`${prefix}_muted`, isMuted);
        localStorage.setItem(`${prefix}_vibration`, isVib);
        localStorage.setItem(`${prefix}_speed`, speedStr);
      });

      // バックギャモン独自キー（gch_bg_settings）も同時更新
      try {
        const bgSettings = {
          lang: lang,
          sound: updated.sound,
          haptics: isVib,
          fastAnim: speedStr === 'fast'
        };
        localStorage.setItem('gch_bg_settings', JSON.stringify(bgSettings));
      } catch (e) {}

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
