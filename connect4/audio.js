class AudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.enabled = true;
    this.unlocked = false;
  }

  // ユーザーの初回タップ・クリックで確実に呼び出してアンロックする
  unlock() {
    if (this.unlocked && this.ctx && this.ctx.state === 'running') return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!this.ctx && AudioContext) {
        this.ctx = new AudioContext();
      }
      if (this.ctx) {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        // マスターゲインの構築
        if (!this.masterGain) {
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);
        }
        // ダミーの無音を再生してiOS Safariのロックを完全解除
        const buffer = this.ctx.createBuffer(1, 1, 22050);
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(this.ctx.destination);
        source.start(0);
        this.unlocked = true;
      }
    } catch (e) {
      console.warn("AudioContext unlock failed:", e);
    }
  }

  ensureContext() {
    if (!this.ctx) {
      this.unlock();
    } else if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // ボタンクリック音（軽快なピコッという音）
  playClick() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, t);
      osc.frequency.exponentialRampToValueAtTime(800, t + 0.05);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.05);
    } catch (e) {}
  }

  // ディスク投下音（コトン・カチャッという物理感のある2段階シンセ音）
  playDrop() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      
      // 1. 落下風音
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(400, t);
      osc1.frequency.exponentialRampToValueAtTime(140, t + 0.1);
      gain1.gain.setValueAtTime(0.4, t);
      gain1.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(t);
      osc1.stop(t + 0.1);

      // 2. 着地・底打ち音（カチッ）
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(220, t + 0.08);
      osc2.frequency.exponentialRampToValueAtTime(90, t + 0.16);
      gain2.gain.setValueAtTime(0.5, t + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
      osc2.connect(gain2);
      gain2.connect(this.masterGain);
      osc2.start(t + 0.08);
      osc2.stop(t + 0.16);
    } catch (e) {}
  }

  // 勝利ファンファーレ（明るいアルペジオ）
  playWin() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const t = this.ctx.currentTime + idx * 0.11;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.35, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 0.32);
      });
    } catch (e) {}
  }

  // 引き分け音
  playDraw() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, t);
      osc.frequency.linearRampToValueAtTime(160, t + 0.28);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.28);
    } catch (e) {}
  }
}

window.audioManager = new AudioManager();
