class StorageManager {
  constructor() {
    this.SETTINGS_KEY = 'gch_bg_settings';
    this.STATE_KEY = 'gch_bg_save';
    this.STATS_KEY = 'gch_bg_stats';
  }

  getSettings() {
    // 1. まずローカルの保存データを取得
    let local = null;
    try {
      const raw = localStorage.getItem(this.SETTINGS_KEY);
      if (raw) local = JSON.parse(raw);
    } catch (e) {
      local = null;
    }

    const defaults = {
      lang: 'en',
      sound: true,
      haptics: true,
      fastAnim: false
    };

    const current = Object.assign({}, defaults, local || {});

    // 2. クラブハウス共通キー（bg_ / clubhouse_ / 2048_）があればそれを最優先で上書き
    const globalLang = localStorage.getItem('bg_lang') || 
                       localStorage.getItem('clubhouse_lang') || 
                       localStorage.getItem('2048_lang');
    if (globalLang) {
      current.lang = globalLang;
    }

    const globalMuted = localStorage.getItem('bg_muted') ?? 
                        localStorage.getItem('clubhouse_muted') ?? 
                        localStorage.getItem('2048_muted');
    if (globalMuted !== null && globalMuted !== undefined) {
      // クラブハウス側は muted=true なので、soundEnabled は反転
      current.sound = (globalMuted !== 'true' && globalMuted !== true);
    }

    const globalVib = localStorage.getItem('bg_vibration') ?? 
                      localStorage.getItem('clubhouse_vibration') ?? 
                      localStorage.getItem('2048_vibration');
    if (globalVib !== null && globalVib !== undefined) {
      current.haptics = (globalVib !== 'false' && globalVib !== false);
    }

    const globalSpeed = localStorage.getItem('bg_speed') || 
                        localStorage.getItem('clubhouse_speed') || 
                        localStorage.getItem('2048_speed');
    if (globalSpeed) {
      current.fastAnim = (globalSpeed === 'fast');
    }

    return current;
  }

  saveSettings(settings) {
    // バックギャモン自身のJSONに保存
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));

    // クラブハウス共通キー群にも同時保存（双方向連動）
    const isMuted = !settings.sound;
    const isVib = !!settings.haptics;
    const speed = settings.fastAnim ? 'fast' : 'normal';

    ['clubhouse', 'bg', '2048'].forEach(prefix => {
      localStorage.setItem(`${prefix}_lang`, settings.lang);
      localStorage.setItem(`${prefix}_muted`, isMuted);
      localStorage.setItem(`${prefix}_vibration`, isVib);
      localStorage.setItem(`${prefix}_speed`, speed);
    });
  }

  getStats() {
    const raw = localStorage.getItem(this.STATS_KEY);
    return raw ? JSON.parse(raw) : {
      gamesPlayed: 0,
      whiteWins: 0,
      blackWins: 0,
      gammons: 0,
      backgammons: 0
    };
  }

  saveStats(stats) {
    localStorage.setItem(this.STATS_KEY, JSON.stringify(stats));
  }

  getSaveState() {
    const raw = localStorage.getItem(this.STATE_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  saveState(state) {
    localStorage.setItem(this.STATE_KEY, JSON.stringify(state));
  }

  clearSaveState() {
    localStorage.removeItem(this.STATE_KEY);
  }

  clearAllData() {
    localStorage.removeItem(this.SETTINGS_KEY);
    localStorage.removeItem(this.STATE_KEY);
    localStorage.removeItem(this.STATS_KEY);
  }
}

const storage = new StorageManager();
