class StorageManager {
  // --- 共通設定管理（クラブハウス・バックギャモン完全同期） ---
  static getSettings() {
    const lang = localStorage.getItem('2048_lang') || 
                 localStorage.getItem('clubhouse_lang') || 
                 localStorage.getItem('bg_lang') || 
                 'en';

    const globalMuted = localStorage.getItem('2048_muted') ?? 
                        localStorage.getItem('clubhouse_muted') ?? 
                        localStorage.getItem('bg_muted');
    const sound = (globalMuted !== 'true' && globalMuted !== true);

    const globalVib = localStorage.getItem('2048_vibration') ?? 
                      localStorage.getItem('clubhouse_vibration') ?? 
                      localStorage.getItem('bg_vibration');
    const vibration = (globalVib !== 'false' && globalVib !== false);

    const globalSpeed = localStorage.getItem('2048_speed') || 
                        localStorage.getItem('clubhouse_speed') || 
                        localStorage.getItem('bg_speed') || 
                        'normal';

    return {
      lang,
      sound,
      vibration,
      speed: globalSpeed,
      fastAnim: globalSpeed === 'fast'
    };
  }

  static saveSettings(settings) {
    const lang = settings.lang || 'en';
    const isMuted = settings.sound === false;
    const isVib = settings.vibration !== false;
    const speed = settings.speed || (settings.fastAnim ? 'fast' : 'normal');

    // 2048、クラブハウス、バックギャモンの全共通プレフィックスへ同期書き込み
    ['2048', 'clubhouse', 'bg'].forEach(prefix => {
      localStorage.setItem(`${prefix}_lang`, lang);
      localStorage.setItem(`${prefix}_muted`, isMuted);
      localStorage.setItem(`${prefix}_vibration`, isVib);
      localStorage.setItem(`${prefix}_speed`, speed);
    });

    // バックギャモン形式のオブジェクト（gch_bg_settings）も同時更新
    try {
      const bgSettings = {
        lang: lang,
        sound: !isMuted,
        haptics: isVib,
        fastAnim: speed === 'fast'
      };
      localStorage.setItem('gch_bg_settings', JSON.stringify(bgSettings));
    } catch (e) {}
  }

  // --- スコア管理 ---
  static getBestScore(size = 4) {
    const key = `2048_best_${size}`;
    return parseInt(localStorage.getItem(key)) || 0;
  }

  static setBestScore(score, size = 4) {
    const key = `2048_best_${size}`;
    const currentBest = this.getBestScore(size);
    if (score > currentBest) {
      localStorage.setItem(key, score);
      return score;
    }
    return currentBest;
  }

  // --- 1手戻す用スタック ---
  static saveState(grid, score) {
    const history = JSON.parse(localStorage.getItem('2048_history') || '[]');
    history.push({ grid, score });
    if (history.length > 30) history.shift();
    localStorage.setItem('2048_history', JSON.stringify(history));
  }

  static popState() {
    const history = JSON.parse(localStorage.getItem('2048_history') || '[]');
    if (history.length === 0) return null;
    const last = history.pop();
    localStorage.setItem('2048_history', JSON.stringify(history));
    return last;
  }

  static clearHistory() {
    localStorage.removeItem('2048_history');
  }

  // --- オートセーブ（進行中の盤面・タイム・手数） ---
  static saveCurrentGame(gameData) {
    localStorage.setItem('2048_saved_game', JSON.stringify(gameData));
  }

  static loadCurrentGame() {
    const data = localStorage.getItem('2048_saved_game');
    return data ? JSON.parse(data) : null;
  }

  static clearCurrentGame() {
    localStorage.removeItem('2048_saved_game');
  }

  // --- アンロック済みタイル図鑑 ---
  static getUnlockedTiles() {
    const data = localStorage.getItem('2048_unlocked_tiles');
    return data ? JSON.parse(data) : [2, 4];
  }

  static unlockTile(value) {
    const unlocked = this.getUnlockedTiles();
    if (!unlocked.includes(value)) {
      unlocked.push(value);
      localStorage.setItem('2048_unlocked_tiles', JSON.stringify(unlocked));
    }
  }
}
