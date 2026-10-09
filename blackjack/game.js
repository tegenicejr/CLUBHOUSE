/**
 * Games Clubhouse: 4-Player Casino Blackjack
 * Continuous play bug fix, Bankroll refill protection, 4 Seats (Pass & Play / CPU)
 */

const I18N = {
  ja: {
    gameTitle: "ブラックジャック",
    gameSubtitle: "4人対戦カジノエディション",
    btnStart: "ゲームスタート",
    btnResume: "つづきから",
    btnRules: "あそびかた",
    btnRecords: "戦績・役",
    btnSettings: "⚙️ 設定",
    btnBackTitle: "‹ タイトルへ",
    shoeLabel: "シュー残",
    dealerLabel: "ディーラー",
    balanceLabel: "所持チップ",
    activeSeatLabel: "ターン席",
    currentBetLabel: "1Pベット額",
    tableSlotsTitle: "テーブル座席設定（4人席）",
    slotYou: "あなた",
    slotCpu: "CPU",
    btnClear: "クリア",
    btnDeal: "全員で勝負 (Deal)",
    btnHit: "ヒット",
    btnStand: "スタンド",
    btnDouble: "ダブル",
    seqStep1Title: "起家・先手席決定ダイス",
    seqStep1Desc: "サイコロを振って最初の起家（カード配布・手番開始の基準席）を決定します。",
    btnRollDice: "サイコロを振る",
    seqRolling: "ダイスロール中...",
    seqResultFmt: "出目は【{val}】！ {seat}Pが起家席に決定しました。",
    seqStep3Desc: "席順が確定しました。テーブルへ着席してください。",
    btnStartMatch: "着席・対局開始",
    refillTitle: "チップ補給",
    refillDesc: "所持チップがなくなりました。カジノ倶楽部より+500チップを補給します。",
    btnGetRefill: "+500チップを受け取る",
    rulesTitle: "📖 あそびかた",
    rule1Head: "1. 基本ルール & 4人対局",
    rule1Text: "最大4人でディーラーに挑みます。各プレイヤーはディーラーとの間で勝負を行い、21に近い方が勝利します。",
    ruleDiceHead: "2. 開始ダイスの役割",
    ruleDiceText: "開始時のサイコロは「起家（最初のターンの開始席）」を決定するカジノの伝統儀式です。",
    btnGotIt: "了解",
    statsTitle: "🏆 戦績 & 実績",
    statPlayed: "プレイ数",
    statWon: "勝利数",
    statBJs: "BJ回数",
    statWinRate: "勝率",
    badgesHeading: "獲得アチーブメント",
    badgeFirstWin: "初勝利",
    badgeFirstWinDesc: "初めてディーラーに勝利する",
    badgeBJ: "ナチュラル21",
    badgeBJDesc: "ブラックジャックを達成する",
    badgeHighRoller: "ハイローラー",
    badgeHighRollerDesc: "所持チップ2,500枚を突破する",
    badgeFiveCard: "ファイブカード",
    badgeFiveCardDesc: "バーストせずに5枚引く",
    settingsTitle: "⚙️ ゲーム設定",
    labelLanguage: "言語 (Language)",
    labelSound: "効果音 (BGM/SE)",
    labelHaptics: "振動・ハプティクス",
    labelSpeed: "演出スピード",
    speedNormal: "通常 (Normal)",
    speedFast: "高速 (Fast)",
    btnResetData: "戦績・データ初期化",
    btnConfirm: "OK",
    btnCancel: "キャンセル",
    btnShareX: "Xで戦績を共有",
    btnNextRound: "次のディールへ",
    confirmResetTitle: "データ初期化",
    confirmResetMsg: "チップ残高と戦績をリセットしますか？",
    confirmTitleBack: "タイトルへ戻る",
    confirmTitleBackMsg: "進行中のゲームを終了してタイトルへ戻りますか？",
    shareTweet: "Games Clubhouseで4人対局ブラックジャックをプレイ中！所持チップ: {chips}枚 ♠️🎲"
  },
  en: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "4-Player Casino Edition",
    btnStart: "Start Game",
    btnResume: "Resume Game",
    btnRules: "How to Play",
    btnRecords: "Stats & Records",
    btnSettings: "⚙️ Settings",
    btnBackTitle: "‹ Title",
    shoeLabel: "Shoe",
    dealerLabel: "DEALER",
    balanceLabel: "Bankroll",
    activeSeatLabel: "Turn Seat",
    currentBetLabel: "1P Bet",
    tableSlotsTitle: "Table Seats Configuration (4P)",
    slotYou: "You",
    slotCpu: "CPU",
    btnClear: "Clear",
    btnDeal: "Deal Hands",
    btnHit: "Hit",
    btnStand: "Stand",
    btnDouble: "Double",
    seqStep1Title: "First Seat Cut",
    seqStep1Desc: "Roll the lucky die to decide the starting seat (First Dealer action).",
    btnRollDice: "Roll Die",
    seqRolling: "Rolling standard die...",
    seqResultFmt: "Rolled a {val}! Seat {seat}P starts as Head Seat.",
    seqStep3Desc: "Seating confirmed. Take your place at the table.",
    btnStartMatch: "Take Seat",
    refillTitle: "Chip Refill",
    refillDesc: "You ran out of chips! The Casino grants you a +500 refill.",
    btnGetRefill: "Claim +500 Chips",
    rulesTitle: "📖 How to Play",
    rule1Head: "1. 4-Player Action",
    rule1Text: "Up to 4 seats play simultaneously against the dealer. Nearest to 21 wins.",
    ruleDiceHead: "2. Purpose of the Starting Die",
    ruleDiceText: "The die roll determines the Head Seat (who starts the deal/actions).",
    btnGotIt: "Understood",
    statsTitle: "🏆 Stats & Badges",
    statPlayed: "Played",
    statWon: "Won",
    statBJs: "Blackjacks",
    statWinRate: "Win Rate",
    badgesHeading: "Achievements",
    badgeFirstWin: "First Win",
    badgeFirstWinDesc: "Win your first hand",
    badgeBJ: "Natural 21",
    badgeBJDesc: "Score a Blackjack",
    badgeHighRoller: "High Roller",
    badgeHighRollerDesc: "Hold over 2,500 chips",
    badgeFiveCard: "5-Card Charlie",
    badgeFiveCardDesc: "Draw 5 cards without busting",
    settingsTitle: "⚙️ Game Settings",
    labelLanguage: "Language",
    labelSound: "Sound Effects",
    labelHaptics: "Haptics (Vibration)",
    labelSpeed: "Animation Speed",
    speedNormal: "Normal",
    speedFast: "Fast",
    btnResetData: "Reset All Data",
    btnConfirm: "Confirm",
    btnCancel: "Cancel",
    btnShareX: "Share on X",
    btnNextRound: "Next Deal",
    confirmResetTitle: "Reset Data?",
    confirmResetMsg: "Reset all chip balance and records?",
    confirmTitleBack: "Return to Title?",
    confirmTitleBackMsg: "Return to title screen?",
    shareTweet: "Playing 4-Player Blackjack on Games Clubhouse! Chips: {chips} ♠️🎲"
  }
};

class Blackjack4PGame {
  constructor() {
    this.settings = window.storageManager.getSettings();
    this.stats = window.storageManager.getStats();

    this.seats = [
      { id: 0, type: 'human', name: '1P', hand: [], bet: 0, status: 'betting' },
      { id: 1, type: 'cpu', name: '2P', hand: [], bet: 50, status: 'betting' },
      { id: 2, type: 'cpu', name: '3P', hand: [], bet: 50, status: 'betting' },
      { id: 3, type: 'cpu', name: '4P', hand: [], bet: 50, status: 'betting' }
    ];

    this.dealerHand = [];
    this.dealerHoleCardHidden = true;
    this.deck = [];
    this.currentSeatTurn = 0;
    this.gameState = 'betting'; // 'betting' | 'playing' | 'dealer' | 'round_over'

    this.initDOM();
    this.applySettings();
    this.applyLanguage(this.settings.lang);
    this.checkBankrollRefill();
  }

  initDOM() {
    this.titleScreen = document.getElementById('title-screen');
    this.gameScreen = document.getElementById('game-screen');
    this.btnStartGame = document.getElementById('btn-start-game');
    this.btnResumeGame = document.getElementById('btn-resume-game');
    this.btnRules = document.getElementById('btn-rules');
    this.btnAchievements = document.getElementById('btn-achievements');
    this.btnSettingsTitle = document.getElementById('btn-settings-title');
    this.titleChipsDisplay = document.getElementById('title-chips-display');

    this.btnToTitle = document.getElementById('btn-to-title');
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.btnSettingsTable = document.getElementById('btn-settings-table');
    this.shoeCountEl = document.getElementById('shoe-count');
    this.dealerScoreEl = document.getElementById('dealer-score');
    this.dealerCardsEl = document.getElementById('dealer-cards');
    this.tableToast = document.getElementById('table-toast');
    this.toastText = document.getElementById('toast-text');

    this.playerChipsEl = document.getElementById('player-chips');
    this.playerBetEl = document.getElementById('player-bet');
    this.activeTurnIndicator = document.getElementById('active-turn-indicator');

    this.chipControls = document.getElementById('chip-controls');
    this.actionControls = document.getElementById('action-controls');
    this.btnClearBet = document.getElementById('btn-clear-bet');
    this.btnDeal = document.getElementById('btn-deal');
    this.btnHit = document.getElementById('btn-hit');
    this.btnStand = document.getElementById('btn-stand');
    this.btnDouble = document.getElementById('btn-double');

    // Modals
    this.modalSequence = document.getElementById('modal-sequence');
    this.seqStep1 = document.getElementById('seq-step-1');
    this.seqStep2 = document.getElementById('seq-step-2');
    this.seqStep3 = document.getElementById('seq-step-3');
    this.btnSeqRoll = document.getElementById('btn-seq-roll');
    this.btnSeqConfirm = document.getElementById('btn-seq-confirm');
    this.seqResultMessage = document.getElementById('seq-result-message');
    this.resultDice = document.getElementById('result-dice');

    this.modalRefill = document.getElementById('modal-refill');
    this.btnRefillChips = document.getElementById('btn-refill-chips');

    this.modalSettings = document.getElementById('modal-settings');
    this.btnCloseSettings = document.getElementById('btn-close-settings');
    this.btnSaveSettings = document.getElementById('btn-save-settings');
    this.selectLanguage = document.getElementById('select-language');
    this.toggleSound = document.getElementById('toggle-sound');
    this.toggleVibrate = document.getElementById('toggle-vibrate');
    this.selectSpeed = document.getElementById('select-speed');
    this.btnResetData = document.getElementById('btn-reset-data');

    this.modalRules = document.getElementById('modal-rules');
    this.btnCloseRules = document.getElementById('btn-close-rules');
    this.btnRulesAck = document.getElementById('btn-rules-ack');

    this.modalAchievements = document.getElementById('modal-achievements');
    this.btnCloseAchievements = document.getElementById('btn-close-achievements');
    this.btnStatsAck = document.getElementById('btn-stats-ack');

    this.modalConfirm = document.getElementById('modal-confirm');
    this.confirmTitle = document.getElementById('confirm-title');
    this.confirmMessage = document.getElementById('confirm-message');
    this.btnConfirmCancel = document.getElementById('btn-confirm-cancel');
    this.btnConfirmOk = document.getElementById('btn-confirm-ok');

    this.modalRoundResult = document.getElementById('modal-round-result');
    this.resultHeadline = document.getElementById('result-headline');
    this.resultPayoutText = document.getElementById('result-payout-text');
    this.resultSeatsSummary = document.getElementById('result-seats-summary');
    this.btnShareX = document.getElementById('btn-share-x');
    this.btnNextRound = document.getElementById('btn-next-round');

    this.bindEvents();
  }

  bindEvents() {
    this.btnStartGame.addEventListener('click', () => {
      this.seqStep1.classList.remove('hidden');
      this.seqStep2.classList.add('hidden');
      this.seqStep3.classList.add('hidden');
      this.modalSequence.classList.remove('hidden');
    });

    this.btnSeqRoll.addEventListener('click', () => this.rollStartingSeatDice());
    this.btnSeqConfirm.addEventListener('click', () => {
      this.modalSequence.classList.add('hidden');
      this.titleScreen.classList.remove('active');
      this.gameScreen.classList.add('active');
      this.startFreshGame();
    });

    // Seat type toggles (Human / CPU)
    document.querySelectorAll('.slot-type-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const seatIdx = parseInt(e.target.dataset.seat, 10);
        if (seatIdx === 0) return; // Seat 0 is always main player
        const currentType = this.seats[seatIdx].type;
        const nextType = currentType === 'cpu' ? 'human' : 'cpu';
        this.seats[seatIdx].type = nextType;
        e.target.dataset.type = nextType;
        e.target.textContent = nextType === 'human' ? 'Pass&Play' : 'CPU';
        e.target.classList.toggle('active', nextType === 'human');
      });
    });

    // Betting chips
    document.querySelectorAll('.casino-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.value, 10);
        this.placePlayerBet(val);
      });
    });

    this.btnClearBet.addEventListener('click', () => this.clearPlayerBet());
    this.btnDeal.addEventListener('click', () => this.startDealRound());

    this.btnHit.addEventListener('click', () => this.activePlayerHit());
    this.btnStand.addEventListener('click', () => this.activePlayerStand());
    this.btnDouble.addEventListener('click', () => this.activePlayerDouble());

    this.btnNextRound.addEventListener('click', () => {
      this.modalRoundResult.classList.add('hidden');
      this.prepareNextRound();
    });

    // Bankruptcy rescue
    this.btnRefillChips.addEventListener('click', () => {
      this.stats.chips += 500;
      window.storageManager.saveStats(this.stats);
      this.updateBalanceUI();
      this.modalRefill.classList.add('hidden');
      this.showToast('+500 Chips Claimed!');
    });

    // Navigation & Settings
    this.btnToTitle.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.ja;
      this.confirmTitle.textContent = dict.confirmTitleBack;
      this.confirmMessage.textContent = dict.confirmTitleBackMsg;
      this.pendingConfirm = () => {
        this.gameScreen.classList.remove('active');
        this.titleScreen.classList.add('active');
      };
      this.modalConfirm.classList.remove('hidden');
    });

    this.btnConfirmCancel.addEventListener('click', () => this.modalConfirm.classList.add('hidden'));
    this.btnConfirmOk.addEventListener('click', () => {
      this.modalConfirm.classList.add('hidden');
      if (this.pendingConfirm) this.pendingConfirm();
    });

    this.btnRules.addEventListener('click', () => this.modalRules.classList.remove('hidden'));
    this.btnCloseRules.addEventListener('click', () => this.modalRules.classList.add('hidden'));
    this.btnRulesAck.addEventListener('click', () => this.modalRules.classList.add('hidden'));

    this.btnAchievements.addEventListener('click', () => {
      this.updateStatsUI();
      this.modalAchievements.classList.remove('hidden');
    });
    this.btnCloseAchievements.addEventListener('click', () => this.modalAchievements.classList.add('hidden'));
    this.btnStatsAck.addEventListener('click', () => this.modalAchievements.classList.add('hidden'));

    this.btnSettingsTitle.addEventListener('click', () => this.modalSettings.classList.remove('hidden'));
    this.btnSettingsTable.addEventListener('click', () => this.modalSettings.classList.remove('hidden'));
    this.btnCloseSettings.addEventListener('click', () => this.modalSettings.classList.add('hidden'));
    this.btnSaveSettings.addEventListener('click', () => this.modalSettings.classList.add('hidden'));

    this.selectLanguage.addEventListener('change', (e) => {
      this.settings.lang = e.target.value;
      window.storageManager.saveSettings(this.settings);
      this.applyLanguage(this.settings.lang);
    });

    this.toggleSound.addEventListener('change', (e) => {
      this.settings.sound = e.target.checked;
      window.soundSystem.setEnabled(this.settings.sound);
      this.btnSoundToggle.textContent = this.settings.sound ? '🔊' : '🔇';
      window.storageManager.saveSettings(this.settings);
    });

    this.btnSoundToggle.addEventListener('click', () => {
      this.settings.sound = !this.settings.sound;
      this.toggleSound.checked = this.settings.sound;
      window.soundSystem.setEnabled(this.settings.sound);
      this.btnSoundToggle.textContent = this.settings.sound ? '🔊' : '🔇';
      window.storageManager.saveSettings(this.settings);
    });

    this.selectSpeed.addEventListener('change', (e) => {
      this.settings.speed = parseFloat(e.target.value);
      document.documentElement.style.setProperty('--speed-factor', this.settings.speed);
      window.storageManager.saveSettings(this.settings);
    });

    this.btnResetData.addEventListener('click', () => {
      window.storageManager.resetAllData();
      this.stats = window.storageManager.getStats();
      this.updateBalanceUI();
      this.updateStatsUI();
      this.modalSettings.classList.add('hidden');
    });

    this.btnShareX.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.ja;
      const text = dict.shareTweet.replace('{chips}', this.stats.chips.toLocaleString());
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  applyLanguage(lang) {
    const dict = I18N[lang] || I18N.ja;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });
    this.selectLanguage.value = lang;
  }

  applySettings() {
    this.selectLanguage.value = this.settings.lang;
    this.toggleSound.checked = this.settings.sound;
    this.toggleVibrate.checked = this.settings.vibrate;
    this.selectSpeed.value = this.settings.speed.toString();
    document.documentElement.style.setProperty('--speed-factor', this.settings.speed);
    window.soundSystem.setEnabled(this.settings.sound);
  }

  checkBankrollRefill() {
    if (this.stats.chips <= 0 && this.seats[0].bet === 0) {
      this.modalRefill.classList.remove('hidden');
    }
  }

  showToast(text, duration = 1200) {
    this.toastText.textContent = text;
    this.tableToast.classList.remove('hidden');
    setTimeout(() => this.tableToast.classList.add('hidden'), duration / this.settings.speed);
  }

  // 3-Stage Starting Seat Dice
  rollStartingSeatDice() {
    this.seqStep1.classList.add('hidden');
    this.seqStep2.classList.remove('hidden');
    window.soundSystem.playDiceRoll();

    setTimeout(() => {
      // 1 to 4 to match 4 seats
      const roll = Math.floor(Math.random() * 4) + 1;
      this.renderDice(this.resultDice, roll);
      const dict = I18N[this.settings.lang] || I18N.ja;
      this.seqResultMessage.textContent = dict.seqResultFmt.replace('{val}', roll).replace('{seat}', roll);
      this.seqStep2.classList.add('hidden');
      this.seqStep3.classList.remove('hidden');
    }, 700 / this.settings.speed);
  }

  renderDice(el, val) {
    el.innerHTML = '';
    el.className = `standard-dice face-${val}`;
    if (val === 1) {
      const p = document.createElement('span');
      p.className = 'pip center red';
      el.appendChild(p);
      return;
    }
    const pipMap = { 2: [1, 9], 3: [1, 5, 9], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] };
    (pipMap[val] || []).forEach(pos => {
      const p = document.createElement('span');
      p.className = 'pip';
      p.style.gridRow = `${Math.ceil(pos / 3)}`;
      p.style.gridColumn = `${((pos - 1) % 3) + 1}`;
      el.appendChild(p);
    });
  }

  // Game Engine
  startFreshGame() {
    this.initShoe();
    this.prepareNextRound();
  }

  initShoe() {
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.deck = [];
    for (let d = 0; d < 6; d++) {
      for (const suit of suits) {
        for (const rank of ranks) {
          this.deck.push({ suit, rank, color: (suit === '♥' || suit === '♦') ? 'red' : 'black' });
        }
      }
    }
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
    this.shoeCountEl.textContent = this.deck.length;
  }

  drawCard() {
    if (this.deck.length < 24) this.initShoe();
    const c = this.deck.pop();
    this.shoeCountEl.textContent = this.deck.length;
    return c;
  }

  placePlayerBet(val) {
    if (this.gameState !== 'betting') return;
    if (this.stats.chips < val) {
      this.showToast('チップが不足しています');
      this.checkBankrollRefill();
      return;
    }
    this.stats.chips -= val;
    this.seats[0].bet += val;
    window.soundSystem.playChip();
    this.updateBalanceUI();
  }

  clearPlayerBet() {
    if (this.gameState !== 'betting' || this.seats[0].bet === 0) return;
    this.stats.chips += this.seats[0].bet;
    this.seats[0].bet = 0;
    window.soundSystem.playChip();
    this.updateBalanceUI();
  }

  updateBalanceUI() {
    this.titleChipsDisplay.textContent = this.stats.chips.toLocaleString();
    this.playerChipsEl.textContent = this.stats.chips.toLocaleString();
    this.playerBetEl.textContent = this.seats[0].bet.toLocaleString();

    // CPU automatic bets if active
    for (let i = 1; i < 4; i++) {
      if (this.seats[i].type === 'cpu') this.seats[i].bet = 50;
      else if (this.seats[i].bet === 0) this.seats[i].bet = 50;
    }

    // Render seats bet value
    for (let i = 0; i < 4; i++) {
      const sEl = document.getElementById(`seat-${i}`);
      sEl.querySelector('.seat-bet-val').textContent = this.seats[i].bet;
    }

    this.btnDeal.classList.toggle('disabled', this.seats[0].bet <= 0);
  }

  // Dealing Round
  async startDealRound() {
    if (this.seats[0].bet <= 0) return;
    this.gameState = 'playing';

    this.chipControls.classList.add('hidden');
    this.actionControls.classList.remove('hidden');

    this.dealerHand = [];
    this.dealerHoleCardHidden = true;
    this.seats.forEach(s => { s.hand = []; s.status = 'playing'; });

    // Initial 2 cards to all 4 seats then dealer
    for (let round = 0; round < 2; round++) {
      for (let i = 0; i < 4; i++) {
        await this.dealCardToSeat(i);
      }
      await this.dealCardToDealer(round === 1);
    }

    this.currentSeatTurn = 0;
    this.advanceTurn();
  }

  async dealCardToSeat(seatIdx) {
    const card = this.drawCard();
    this.seats[seatIdx].hand.push(card);
    window.soundSystem.playCardSlide();
    this.renderSeats();
    await new Promise(r => setTimeout(r, 160 / this.settings.speed));
  }

  async dealCardToDealer(isHole) {
    const card = this.drawCard();
    card.isHole = isHole;
    this.dealerHand.push(card);
    window.soundSystem.playCardSlide();
    this.renderDealer();
    await new Promise(r => setTimeout(r, 160 / this.settings.speed));
  }

  calculateHand(cards, hideHole = false) {
    let sum = 0, aces = 0;
    for (const c of cards) {
      if (hideHole && c.isHole) continue;
      if (['K', 'Q', 'J'].includes(c.rank)) sum += 10;
      else if (c.rank === 'A') { aces += 1; sum += 11; }
      else sum += parseInt(c.rank, 10);
    }
    while (sum > 21 && aces > 0) { sum -= 10; aces -= 1; }
    return { best: sum, isBust: sum > 21, isBJ: cards.length === 2 && sum === 21 };
  }

  renderSeats() {
    for (let i = 0; i < 4; i++) {
      const s = this.seats[i];
      const sEl = document.getElementById(`seat-${i}`);
      const cardsEl = sEl.querySelector('.seat-cards');
      const scoreEl = sEl.querySelector('.seat-score');

      cardsEl.innerHTML = '';
      const sc = this.calculateHand(s.hand);
      scoreEl.textContent = sc.best;

      s.hand.forEach(c => {
        const el = document.createElement('div');
        el.className = `card ${c.color}`;
        el.innerHTML = `<span class="card-val">${c.rank}</span><span class="card-icon">${c.suit}</span><span class="card-center-suit">${c.suit}</span>`;
        cardsEl.appendChild(el);
      });

      sEl.classList.toggle('active-turn', this.gameState === 'playing' && this.currentSeatTurn === i);
    }
  }

  renderDealer() {
    this.dealerCardsEl.innerHTML = '';
    const sc = this.calculateHand(this.dealerHand, this.dealerHoleCardHidden);
    this.dealerScoreEl.textContent = this.dealerHoleCardHidden ? '?' : sc.best;

    this.dealerHand.forEach(c => {
      const isFacedown = this.dealerHoleCardHidden && c.isHole;
      const el = document.createElement('div');
      el.className = `card ${isFacedown ? 'facedown' : c.color}`;
      if (!isFacedown) {
        el.innerHTML = `<span class="card-val">${c.rank}</span><span class="card-icon">${c.suit}</span><span class="card-center-suit">${c.suit}</span>`;
      }
      this.dealerCardsEl.appendChild(el);
    });
  }

  // Turn Flow Across 4 Seats
  async advanceTurn() {
    if (this.currentSeatTurn >= 4) {
      this.runDealerPhase();
      return;
    }

    const cur = this.seats[this.currentSeatTurn];
    this.activeTurnIndicator.textContent = `${cur.name} (${cur.type.toUpperCase()})`;
    this.renderSeats();

    // Check immediate Blackjack
    if (this.calculateHand(cur.hand).isBJ) {
      this.currentSeatTurn++;
      this.advanceTurn();
      return;
    }

    if (cur.type === 'human') {
      this.actionControls.classList.remove('hidden');
      this.btnDouble.classList.toggle('disabled', cur.hand.length !== 2 || this.stats.chips < cur.bet);
    } else {
      // CPU logic with intentional delay
      this.actionControls.classList.add('hidden');
      await this.runCPUTurn(this.currentSeatTurn);
      this.currentSeatTurn++;
      this.advanceTurn();
    }
  }

  async runCPUTurn(seatIdx) {
    const seat = this.seats[seatIdx];
    await new Promise(r => setTimeout(r, 600 / this.settings.speed));

    while (this.calculateHand(seat.hand).best < 16) {
      await this.dealCardToSeat(seatIdx);
      await new Promise(r => setTimeout(r, 650 / this.settings.speed));
    }
  }

  // Human Player Actions
  async activePlayerHit() {
    await this.dealCardToSeat(this.currentSeatTurn);
    const score = this.calculateHand(this.seats[this.currentSeatTurn].hand);
    if (score.isBust || score.best === 21) {
      this.currentSeatTurn++;
      this.advanceTurn();
    }
  }

  activePlayerStand() {
    this.currentSeatTurn++;
    this.advanceTurn();
  }

  async activePlayerDouble() {
    const cur = this.seats[this.currentSeatTurn];
    if (this.currentSeatTurn === 0) {
      this.stats.chips -= cur.bet;
      cur.bet *= 2;
      this.updateBalanceUI();
    }
    await this.dealCardToSeat(this.currentSeatTurn);
    this.currentSeatTurn++;
    this.advanceTurn();
  }

  // Dealer Phase & Resolution
  async runDealerPhase() {
    this.gameState = 'dealer';
    this.actionControls.classList.add('hidden');
    this.activeTurnIndicator.textContent = 'DEALER';

    this.showToast('Dealer Turn...');
    await new Promise(r => setTimeout(r, 700 / this.settings.speed));

    this.dealerHoleCardHidden = false;
    this.renderDealer();

    while (this.calculateHand(this.dealerHand).best < 17) {
      await new Promise(r => setTimeout(r, 750 / this.settings.speed));
      await this.dealCardToDealer(false);
    }

    await new Promise(r => setTimeout(r, 500 / this.settings.speed));
    this.settleRoundResults();
  }

  settleRoundResults() {
    this.gameState = 'round_over';
    this.stats.gamesPlayed++;
    const dScore = this.calculateHand(this.dealerHand);

    this.resultSeatsSummary.innerHTML = '';
    let mainGain = 0;

    for (let i = 0; i < 4; i++) {
      const s = this.seats[i];
      const pScore = this.calculateHand(s.hand);
      let outcome = 'lose'; // 'win' | 'lose' | 'push'

      if (pScore.isBust) outcome = 'lose';
      else if (dScore.isBust) outcome = 'win';
      else if (pScore.best > dScore.best) outcome = 'win';
      else if (pScore.best < dScore.best) outcome = 'lose';
      else outcome = 'push';

      if (i === 0) {
        if (pScore.isBJ && outcome === 'win') {
          const payout = Math.floor(s.bet * 2.5);
          this.stats.chips += payout;
          mainGain = payout - s.bet;
          this.stats.gamesWon++;
          this.stats.blackjackCount++;
          this.stats.achievements.blackjack = true;
          this.stats.achievements.firstWin = true;
        } else if (outcome === 'win') {
          this.stats.chips += s.bet * 2;
          mainGain = s.bet;
          this.stats.gamesWon++;
          this.stats.achievements.firstWin = true;
        } else if (outcome === 'push') {
          this.stats.chips += s.bet;
          mainGain = 0;
        } else {
          mainGain = -s.bet;
        }
      }

      // Add to results grid
      const div = document.createElement('div');
      div.className = `res-seat-box ${outcome}`;
      div.textContent = `${s.name}: ${pScore.best} (${outcome.toUpperCase()})`;
      this.resultSeatsSummary.appendChild(div);
    }

    if (mainGain > 0) {
      this.resultHeadline.textContent = 'YOU WIN!';
      this.resultHeadline.style.color = '#4ade80';
      window.soundSystem.playWin();
    } else if (mainGain === 0) {
      this.resultHeadline.textContent = 'PUSH';
      this.resultHeadline.style.color = '#94a3b8';
    } else {
      this.resultHeadline.textContent = 'DEALER WINS';
      this.resultHeadline.style.color = '#f87171';
      window.soundSystem.playLose();
    }

    this.resultPayoutText.textContent = `${mainGain >= 0 ? '+' : ''}${mainGain} CHIPS`;
    window.storageManager.saveStats(this.stats);

    this.updateBalanceUI();
    this.modalRoundResult.classList.remove('hidden');
    this.checkBankrollRefill();
  }

  prepareNextRound() {
    this.gameState = 'betting';
    this.dealerHand = [];
    this.dealerHoleCardHidden = true;

    // Reset Seat Hands and keep previous bet ready
    for (let i = 0; i < 4; i++) {
      this.seats[i].hand = [];
      this.seats[i].status = 'betting';
      if (i > 0 && this.seats[i].type === 'cpu') this.seats[i].bet = 50;
    }

    this.seats[0].bet = 0; // Require re-bet or keep
    this.renderDealer();
    this.renderSeats();

    this.chipControls.classList.remove('hidden');
    this.actionControls.classList.add('hidden');
    this.activeTurnIndicator.textContent = 'BETTING';

    this.updateBalanceUI();
    this.checkBankrollRefill();
  }

  updateStatsUI() {
    document.getElementById('stat-games-played').textContent = this.stats.gamesPlayed;
    document.getElementById('stat-games-won').textContent = this.stats.gamesWon;
    document.getElementById('stat-bj-count').textContent = this.stats.blackjackCount;
    const rate = this.stats.gamesPlayed > 0 ? Math.round((this.stats.gamesWon / this.stats.gamesPlayed) * 100) : 0;
    document.getElementById('stat-win-rate').textContent = `${rate}%`;

    const dict = I18N[this.settings.lang] || I18N.ja;
    const badgeContainer = document.getElementById('achievements-list');
    badgeContainer.innerHTML = '';
    const badges = [
      { id: 'firstWin', name: dict.badgeFirstWin, desc: dict.badgeFirstWinDesc, icon: '🥇' },
      { id: 'blackjack', name: dict.badgeBJ, desc: dict.badgeBJDesc, icon: '♠️' },
      { id: 'highRoller', name: dict.badgeHighRoller, desc: dict.badgeHighRollerDesc, icon: '💎' },
      { id: 'fiveCard', name: dict.badgeFiveCard, desc: dict.badgeFiveCardDesc, icon: '🐉' }
    ];
    badges.forEach(b => {
      const div = document.createElement('div');
      div.className = `badge-item ${this.stats.achievements[b.id] ? 'unlocked' : ''}`;
      div.innerHTML = `<span class="badge-icon">${b.icon}</span><div><strong>${b.name}</strong><br><small>${b.desc}</small></div>`;
      badgeContainer.appendChild(div);
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.blackjackGame = new Blackjack4PGame();
});
