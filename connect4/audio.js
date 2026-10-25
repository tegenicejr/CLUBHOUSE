class AudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.enabled = true;
    this.unlocked = false;
  }

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
        if (!this.masterGain) {
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);
        }
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

  playClick() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      // 玩具の押しボタンスイッチ音（高域のアタックと短いレゾナンス）
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(350, t + 0.04);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.04);
    } catch (e) {}
  }

  // プラスチックディスクがスロットを落ちて底/下のディスクに硬く激突する「カチッ・コトッ」音
  playDrop() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      
      // 1. スロットを滑り落ちる摩擦風音
      const slideOsc = this.ctx.createOscillator();
      const slideGain = this.ctx.createGain();
      slideOsc.type = 'sine';
      slideOsc.frequency.setValueAtTime(320, t);
      slideOsc.frequency.linearRampToValueAtTime(160, t + 0.08);
      slideGain.gain.setValueAtTime(0.18, t);
      slideGain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
      slideOsc.connect(slideGain);
      slideGain.connect(this.masterGain);
      slideOsc.start(t);
      slideOsc.stop(t + 0.08);

      // 2. ディスク同士の硬質プラスチック衝突アタック（カチッ）
      const hitOsc1 = this.ctx.createOscillator();
      const hitGain1 = this.ctx.createGain();
      hitOsc1.type = 'triangle';
      hitOsc1.frequency.setValueAtTime(1800, t + 0.07);
      hitOsc1.frequency.exponentialRampToValueAtTime(300, t + 0.12);
      hitGain1.gain.setValueAtTime(0.65, t + 0.07);
      hitGain1.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      hitOsc1.connect(hitGain1);
      hitGain1.connect(this.masterGain);
      hitOsc1.start(t + 0.07);
      hitOsc1.stop(t + 0.12);

      // 3. ボード本体の樹脂空洞の共鳴音（コトッ）
      const hitOsc2 = this.ctx.createOscillator();
      const hitGain2 = this.ctx.createGain();
      hitOsc2.type = 'sine';
      hitOsc2.frequency.setValueAtTime(220, t + 0.08);
      hitOsc2.frequency.exponentialRampToValueAtTime(90, t + 0.18);
      hitGain2.gain.setValueAtTime(0.45, t + 0.08);
      hitGain2.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      hitOsc2.connect(hitGain2);
      hitGain2.connect(this.masterGain);
      hitOsc2.start(t + 0.08);
      hitOsc2.stop(t + 0.18);
    } catch (e) {}
  }

  playWin() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
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

  playDraw() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(280, t);
      osc.frequency.linearRampToValueAtTime(150, t + 0.28);

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
