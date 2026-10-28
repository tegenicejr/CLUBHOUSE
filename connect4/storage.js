class StorageManager {
  constructor() {
    this.SETTINGS_KEY = 'clubhouse_c4_settings';
    this.STATS_KEY = 'clubhouse_c4_stats';
    this.GAME_STATE_KEY = 'clubhouse_c4_active_save';
  }

  getSettings() {
    // 既存のゲーム実装が壊れないよう両方の形式（数値speed・真偽値fastAnim）を保持
    const defaults = {
      lang: 'en',
      sound: true,
      vibrate: true,
      speed: 1.0,
      fastAnim: false
    };

    let current = { ...defaults };
    try {
      const saved = localStorage.getItem(this.SETTINGS_KEY);
      if (saved) {
        current = { ...current, ...JSON.parse(saved) };
      }
    } catch (e) {}

    // クラブハウス・他ゲーム共通キーからの上書き同期
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
        current.vibrate = (globalVib !== 'false' && globalVib !== false);
      }

      const globalSpeed = localStorage.getItem('c4_speed') ||
                          localStorage.getItem('clubhouse_speed') ||
                          localStorage.getItem('bj_speed') ||
                          localStorage.getItem('bg_speed') ||
                          localStorage.getItem('2048_speed');
      if (globalSpeed) {
        const isFast = (globalSpeed === 'fast' || globalSpeed > 1.0);
        current.speed = isFast ? 1.5 : 1.0;
        current.fastAnim = isFast;
      }
    } catch (e) {}

    return current;
  }

  saveSettings(settings) {
    try {
      const current = this.getSettings();
      const isFast = settings.fastAnim || settings.speed > 1.0 || settings.speed === 'fast';
      const updated = {
        ...current,
        ...settings,
        fastAnim: !!isFast,
        speed: isFast ? 1.5 : 1.0
      };

      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(updated));

      // クラブハウス共通キー群への同期
      const lang = updated.lang || 'en';
      const isMuted = !updated.sound;
      const isVib = !!updated.vibrate;
      const speedStr = isFast ? 'fast' : 'normal';

      ['clubhouse', 'c4', 'bj', 'bg', '2048'].forEach(prefix => {
        localStorage.setItem(`${prefix}_lang`, lang);
        localStorage.setItem(`${prefix}_muted`, isMuted);
        localStorage.setItem(`${prefix}_vibration`, isVib);
        localStorage.setItem(`${prefix}_speed`, speedStr);
      });

      // 他ゲーム独自キーへの同期
      try {
        localStorage.setItem('clubhouse_settings', JSON.stringify({
          lang: lang,
          sound: updated.sound,
          vibrate: isVib,
          speed: updated.speed
        }));
      } catch (e) {}

      return updated;
    } catch (e) {
      return settings;
    }
  }

  getStats() {
    const defaults = { gamesPlayed: 0, player1Wins: 0, player2Wins: 0, draws: 0 };
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
