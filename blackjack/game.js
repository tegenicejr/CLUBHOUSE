/**
 * Games Clubhouse: Blackjack Game Engine
 * - 2P, 3P, 4P have independent bankrolls (starting at 500 chips).
 * - Exact chip win/loss calculations for each seat.
 * - Auto-refill (+500 chips) when any active seat runs out of chips.
 * - Full state persistence across rounds and title exits.
 */

const I18N = {
  ja: {
    btnStart: "ゲームスタート",
    btnResume: "つづきから",
    btnRules: "あそびかた",
    btnRecords: "戦績・実績",
    btnSettings: "⚙️ 設定",
    btnBackTitle: "‹ タイトルへ",
    shoeLabel: "シュー残",
    dealerLabel: "ディーラー",
    balanceLabel: "所持チップ",
    activeSeatLabel: "ターン席",
    currentBetLabel: "1P ベット額",
    tableSlotsTitle: "参加プレイヤー設定（最大4席）",
    slotNone: "なし",
    slotCpu: "CPU",
    btnClear: "クリア",
    btnDeal: "ディール (Deal)",
    btnHit: "ヒット",
    btnStand: "スタンド",
    btnDouble: "ダブル",
    refillTitle: "チップ補給",
    refillDesc: "所持チップがなくなりました。カジノ倶楽部より+500チップを補給します。",
    btnGetRefill: "+500チップを受け取る",

    rulesTitle: "📖 あそびかた",
    ruleGoalHead: "目指すゴール：21",
    ruleGoalLead: "カードの合計を「21」に最も近づけた方の勝ち！21を超えると即負け（バースト）。",
    ruleShowcaseBJ: "最強の手：ブラックジャック",
    ruleCountingHead: "カードの数え方",
    ruleActionsHead: "ターンの行動（アクション）",
    ruleDealerHead: "ディーラーの絶対ルール",
    btnGotIt: "閉じる",

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
    settingsTitle: "⚙️ 設定",
    labelLanguage: "言語 (Language)",
    labelSound: "効果音 (BGM/SE)",
    labelHaptics: "振動 (Vibration)",
    labelSpeed: "速度 (Speed)",
    speedNormal: "通常",
    speedFast: "高速",
    btnResetData: "データ初期化",
    btnCloseSettings: "閉じる",

    confirmTitleBack: "タイトルへ戻る",
    confirmTitleBackMsg: "現在のゲーム状況は自動保存されます。",

    confirmOverwriteTitle: "新しくゲームを開始しますか？",
    confirmOverwriteMsg: "前回のプレイデータは上書きされ、最初からスタートします。",

    confirmResetTitle: "データを初期化しますか？",
    confirmResetMsg: "戦績や進行状況がすべて消去されます。\n元には戻せません。",

    btnCancel: "キャンセル",
    btnConfirm: "OK",

    btnShareX: "Xで戦績を共有",
    btnNextRound: "次のディールへ",
    shareTweet: "Games Clubhouseでブラックジャックをプレイ中！所持チップ: {chips}枚 ♠️🎲"
  },
  en: {
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
    tableSlotsTitle: "Table Seats Configuration (Max 4)",
    slotNone: "None",
    slotCpu: "CPU",
    btnClear: "Clear",
    btnDeal: "Deal Hands",
    btnHit: "Hit",
    btnStand: "Stand",
    btnDouble: "Double",
    refillTitle: "Chip Refill",
    refillDesc: "You ran out of chips! The Casino grants you a +500 refill.",
    btnGetRefill: "Claim +500 Chips",

    rulesTitle: "📖 How to Play",
    ruleGoalHead: "Objective: Reach 21",
    ruleGoalLead: "Get closer to 21 than the dealer without going over (bust).",
    ruleShowcaseBJ: "Ultimate Hand: Blackjack",
    ruleCountingHead: "Card Values",
    ruleActionsHead: "Player Actions",
    ruleDealerHead: "Dealer Strict Rules",
    btnGotIt: "Close",

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
    settingsTitle: "⚙️ Settings",
    labelLanguage: "Language",
    labelSound: "Sound",
    labelHaptics: "Vibration",
    labelSpeed: "Animation Speed",
    speedNormal: "Normal",
    speedFast: "Fast",
    btnResetData: "Reset All Data",
    btnCloseSettings: "Close",

    confirmTitleBack: "Return to Title",
    confirmTitleBackMsg: "Your current progress is automatically saved.\nYou can resume anytime.",

    confirmOverwriteTitle: "Start New Game?",
    confirmOverwriteMsg: "Your saved progress will be overwritten and erased.\nAre you sure?",

    confirmResetTitle: "Reset all data?",
    confirmResetMsg: "All records, chips, and progress will be permanently erased.\nThis action cannot be undone.",

    btnCancel: "Cancel",
    btnConfirm: "OK",

    btnShareX: "Share on X",
    btnNextRound: "Next Deal",
    shareTweet: "Playing Blackjack on Games Clubhouse! Chips: {chips} ♠️🎲"
  }
};

class BlackjackEngine {
  constructor() {
    this.settings = window.storageManager.getSettings();
    this.stats = window.storageManager.getStats();

    // 2P〜4Pは初期チップ500
    this.seats = [
      { id: 0, type: 'human', name: '1P', hand: [], bet: 0, chips: this.stats.chips, status: 'betting' },
      { id: 1, type: 'none',  name: '2P', hand: [], bet: 0, chips: 500, status: 'idle' },
      { id: 2, type: 'none',  name: '3P', hand: [], bet: 0, chips: 500, status: 'idle' },
      { id: 3, type: 'none',  name: '4P', hand: [], bet: 0, chips: 500, status: 'idle' }
    ];

    this.dealerHand = [];
    this.dealerHoleCardHidden = true;
    this.deck = [];
    this.currentSeatTurn = 0;
    this.gameState = 'betting';
    this.isGameActive = false;

    this.pendingConfirm = null;

    this.initDOM();
    this.applySettings();
    this.applyLanguage(this.settings.lang);
    this.checkResumeAvailability();
    this.checkBankrollRefill();
  }

  initDOM() {
    this.titleScreen = document.getElementById('title-screen');
    this.gameScreen = document.getElementById('game-screen');
    this.btnResumeGame = document.getElementById('btn-resume-game');
    this.btnStartGame = document.getElementById('btn-start-game');
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
    this.confirmBox = document.getElementById('confirm-box');
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
    this.btnResumeGame.addEventListener('click', () => {
      this.resumeSavedGame();
    });

    this.btnStartGame.addEventListener('click', () => {
      const saved = window.storageManager.getSavedGameState();
      if (saved) {
        const dict = I18N[this.settings.lang] || I18N.ja;
        this.confirmTitle.textContent = dict.confirmOverwriteTitle;
        this.confirmMessage.textContent = dict.confirmOverwriteMsg;
        this.confirmBox.classList.add('warning-style');
        
        this.btnConfirmCancel.textContent = dict.btnCancel;
        this.btnConfirmOk.textContent = dict.btnConfirm;
        this.btnConfirmOk.className = 'btn-primary';

        this.pendingConfirm = () => {
          window.storageManager.clearGameState();
          this.checkResumeAvailability();
          this.enterGameDirectly();
        };
        this.modalConfirm.classList.remove('hidden');
      } else {
        this.enterGameDirectly();
      }
    });

    // 座席切り替え
    document.querySelectorAll('.slot-type-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const seatIdx = parseInt(e.target.dataset.seat, 10);
        if (seatIdx === 0) return;

        const cur = this.seats[seatIdx].type;
        let nextType = 'none';
        if (cur === 'none') nextType = 'cpu';
        else if (cur === 'cpu') nextType = 'human';
        else nextType = 'none';

        this.seats[seatIdx].type = nextType;
        e.target.dataset.type = nextType;

        const dict = I18N[this.settings.lang] || I18N.ja;
        e.target.classList.remove('state-none', 'state-cpu', 'state-human');

        if (nextType === 'none') {
          e.target.classList.add('state-none');
          e.target.textContent = dict.slotNone;
          this.seats[seatIdx].bet = 0;
        } else if (nextType === 'cpu') {
          e.target.classList.add('state-cpu');
          e.target.textContent = dict.slotCpu;
        } else {
          e.target.classList.add('state-human');
          e.target.textContent = `${seatIdx + 1}P`;
        }
        this.updateBalanceUI();
      });
    });

    // チップ操作
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

    // チップ補給（1P用手動ボタン）
    this.btnRefillChips.addEventListener('click', () => {
      this.stats.chips += 500;
      this.seats[0].chips = this.stats.chips;
      window.storageManager.saveStats(this.stats);
      this.updateBalanceUI();
      this.modalRefill.classList.add('hidden');
      this.showToast('+500 Chips Claimed!');
    });

    // タイトルへ戻る
    this.btnToTitle.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.ja;
      this.confirmTitle.textContent = dict.confirmTitleBack;
      this.confirmMessage.textContent = dict.confirmTitleBackMsg;
      this.confirmBox.classList.remove('warning-style');
      
      this.btnConfirmCancel.textContent = dict.btnCancel;
      this.btnConfirmOk.textContent = dict.btnConfirm;
      this.btnConfirmOk.className = 'btn-primary';

      this.pendingConfirm = () => {
        this.isGameActive = false;
        this.saveCurrentGame();
        this.gameScreen.classList.remove('active');
        this.titleScreen.classList.add('active');
        this.checkResumeAvailability();
      };
      this.modalConfirm.classList.remove('hidden');
    });

    this.btnConfirmCancel.addEventListener('click', () => {
      this.modalConfirm.classList.add('hidden');
      this.pendingConfirm = null;
    });

    this.btnConfirmOk.addEventListener('click', () => {
      this.modalConfirm.classList.add('hidden');
      if (this.pendingConfirm) {
        this.pendingConfirm();
        this.pendingConfirm = null;
      }
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

    // データ初期化
    this.btnResetData.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.ja;
      this.confirmTitle.textContent = dict.confirmResetTitle;
      this.confirmMessage.textContent = dict.confirmResetMsg;
      this.confirmBox.classList.add('warning-style');

      this.btnConfirmCancel.textContent = dict.btnCancel;
      this.btnConfirmOk.textContent = dict.btnConfirm;
      this.btnConfirmOk.className = 'btn-danger-confirm';

      this.pendingConfirm = () => {
        window.storageManager.resetAllData();
        this.stats = window.storageManager.getStats();
        this.seats[0].chips = this.stats.chips;
        this.seats[1].chips = 500;
        this.seats[2].chips = 500;
        this.seats[3].chips = 500;
        this.updateBalanceUI();
        this.updateStatsUI();
        this.checkResumeAvailability();
        this.modalSettings.classList.add('hidden');
        this.showToast('データ初期化完了');
      };
      this.modalConfirm.classList.remove('hidden');
    });

    this.btnShareX.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.ja;
      const text = dict.shareTweet.replace('{chips}', this.stats.chips.toLocaleString());
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  enterGameDirectly() {
    this.titleScreen.classList.remove('active');
    this.gameScreen.classList.add('active');
    this.startFreshGame();
  }

  saveCurrentGame() {
    this.seats[0].chips = this.stats.chips;
    const saveData = {
      deck: this.deck,
      seats: this.seats,
      dealerHand: this.dealerHand,
      dealerHoleCardHidden: this.dealerHoleCardHidden,
      currentSeatTurn: this.currentSeatTurn,
      gameState: this.gameState
    };
    window.storageManager.saveGameState(saveData);
  }

  checkResumeAvailability() {
    const saved = window.storageManager.getSavedGameState();
    if (saved) {
      this.btnResumeGame.classList.remove('hidden');
    } else {
      this.btnResumeGame.classList.add('hidden');
    }
  }

  resumeSavedGame() {
    const saved = window.storageManager.getSavedGameState();
    if (!saved) return;

    this.deck = saved.deck;
    this.seats = saved.seats;
    this.dealerHand = saved.dealerHand;
    this.dealerHoleCardHidden = saved.dealerHoleCardHidden;
    this.currentSeatTurn = saved.currentSeatTurn;
    this.gameState = saved.gameState;

    // 1Pチップを同期
    if (this.seats[0]) {
      this.stats.chips = this.seats[0].chips;
    }

    this.isGameActive = true;
    this.titleScreen.classList.remove('active');
    this.gameScreen.classList.add('active');

    this.renderDealer();
    this.renderSeats();
    this.updateBalanceUI();
    this.shoeCountEl.textContent = this.deck.length;

    if (this.gameState === 'playing') {
      this.chipControls.classList.add('hidden');
      this.actionControls.classList.remove('hidden');
      this.advanceTurn();
    } else {
      this.chipControls.classList.remove('hidden');
      this.actionControls.classList.add('hidden');
      this.activeTurnIndicator.textContent = 'BETTING';
    }
  }

  applyLanguage(lang) {
    const dict = I18N[lang] || I18N.ja;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });
    this.selectLanguage.value = lang;

    document.querySelectorAll('.slot-type-btn').forEach(btn => {
      const seat = parseInt(btn.dataset.seat, 10);
      const type = btn.dataset.type;
      if (seat === 0) {
        btn.textContent = '1P';
      } else if (type === 'none') {
        btn.textContent = dict.slotNone;
      } else if (type === 'cpu') {
        btn.textContent = dict.slotCpu;
      } else {
        btn.textContent = `${seat + 1}P`;
      }
    });

    this.btnConfirmCancel.textContent = dict.btnCancel;
    this.btnConfirmOk.textContent = dict.btnConfirm;
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

  startFreshGame() {
    this.isGameActive = true;
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
    this.seats[0].chips = this.stats.chips;
    this.seats[0].bet += val;
    window.soundSystem.playChip();
    this.updateBalanceUI();
    this.saveCurrentGame();
  }

  clearPlayerBet() {
    if (this.gameState !== 'betting' || this.seats[0].bet === 0) return;
    this.stats.chips += this.seats[0].bet;
    this.seats[0].chips = this.stats.chips;
    this.seats[0].bet = 0;
    window.soundSystem.playChip();
    this.updateBalanceUI();
    this.saveCurrentGame();
  }

  updateBalanceUI() {
    this.seats[0].chips = this.stats.chips;
    this.titleChipsDisplay.textContent = this.stats.chips.toLocaleString();
    this.playerChipsEl.textContent = this.stats.chips.toLocaleString();
    this.playerBetEl.textContent = this.seats[0].bet.toLocaleString();

    // 2P〜4Pのベット額決定＆残高表示更新
    for (let i = 1; i < 4; i++) {
      const s = this.seats[i];
      if (s.type === 'cpu') {
        // ベット額は50チップ固定（残高が足りない場合は全額）
        s.bet = Math.min(50, s.chips);
      } else if (s.type === 'human') {
        if (s.bet === 0) s.bet = Math.min(50, s.chips);
      } else {
        s.bet = 0;
      }
    }

    // 全座席のチップ残高・ベット額をUIに反映
    for (let i = 0; i < 4; i++) {
      const s = this.seats[i];
      const sEl = document.getElementById(`seat-${i}`);
      
      // 席のチップ残高バッジ
      let chipsPill = sEl.querySelector('.seat-chips-pill');
      if (!chipsPill) {
        chipsPill = document.createElement('div');
        chipsPill.className = 'seat-chips-pill';
        sEl.insertBefore(chipsPill, sEl.querySelector('.seat-cards'));
      }
      chipsPill.textContent = s.type !== 'none' ? `🪙${s.chips.toLocaleString()}` : '';

      // ベット額表示
      sEl.querySelector('.seat-bet-val').textContent = s.bet.toLocaleString();
      sEl.classList.toggle('is-empty', s.type === 'none');
    }

    this.btnDeal.classList.toggle('disabled', this.seats[0].bet <= 0);
  }

  async startDealRound() {
    if (this.seats[0].bet <= 0) return;
    this.gameState = 'playing';

    // 2P〜4Pのベット額を残高から差し引く
    for (let i = 1; i < 4; i++) {
      const s = this.seats[i];
      if (s.type !== 'none' && s.bet > 0) {
        s.chips = Math.max(0, s.chips - s.bet);
      }
    }
    this.updateBalanceUI();

    this.chipControls.classList.add('hidden');
    this.actionControls.classList.remove('hidden');

    this.dealerHand = [];
    this.dealerHoleCardHidden = true;
    this.seats.forEach(s => {
      s.hand = [];
      s.status = s.type === 'none' ? 'idle' : 'playing';
    });

    for (let round = 0; round < 2; round++) {
      for (let i = 0; i < 4; i++) {
        if (!this.isGameActive) return;
        if (this.seats[i].type !== 'none') {
          await this.dealCardToSeat(i);
        }
      }
      if (!this.isGameActive) return;
      await this.dealCardToDealer(round === 1);
    }

    this.currentSeatTurn = 0;
    this.saveCurrentGame();
    this.advanceTurn();
  }

  async dealCardToSeat(seatIdx) {
    if (!this.isGameActive) return;
    const card = this.drawCard();
    this.seats[seatIdx].hand.push(card);
    window.soundSystem.playCardSlide();
    this.renderSeats();
    await new Promise(r => setTimeout(r, 160 / this.settings.speed));
  }

  async dealCardToDealer(isHole) {
    if (!this.isGameActive) return;
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
      if (s.type === 'none') {
        scoreEl.textContent = '-';
        sEl.classList.remove('active-turn');
        continue;
      }

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

  async advanceTurn() {
    if (!this.isGameActive) return;

    while (this.currentSeatTurn < 4 && this.seats[this.currentSeatTurn].type === 'none') {
      this.currentSeatTurn++;
    }

    if (this.currentSeatTurn >= 4) {
      this.runDealerPhase();
      return;
    }

    const cur = this.seats[this.currentSeatTurn];
    this.activeTurnIndicator.textContent = cur.name;
    this.renderSeats();
    this.saveCurrentGame();

    if (this.calculateHand(cur.hand).isBJ) {
      this.currentSeatTurn++;
      this.advanceTurn();
      return;
    }

    if (cur.type === 'human') {
      this.actionControls.classList.remove('hidden');
      const canDouble = cur.hand.length === 2 && (cur.id === 0 ? this.stats.chips >= cur.bet : cur.chips >= cur.bet);
      this.btnDouble.classList.toggle('disabled', !canDouble);
    } else {
      this.actionControls.classList.add('hidden');
      await this.runCPUTurn(this.currentSeatTurn);
      if (!this.isGameActive) return;
      this.currentSeatTurn++;
      this.advanceTurn();
    }
  }

  async runCPUTurn(seatIdx) {
    if (!this.isGameActive) return;
    const seat = this.seats[seatIdx];
    await new Promise(r => setTimeout(r, 600 / this.settings.speed));

    while (this.isGameActive && this.calculateHand(seat.hand).best < 16) {
      await this.dealCardToSeat(seatIdx);
      if (!this.isGameActive) return;
      await new Promise(r => setTimeout(r, 650 / this.settings.speed));
    }
  }

  async activePlayerHit() {
    if (!this.isGameActive) return;
    await this.dealCardToSeat(this.currentSeatTurn);
    const score = this.calculateHand(this.seats[this.currentSeatTurn].hand);
    if (score.isBust || score.best === 21) {
      this.currentSeatTurn++;
      this.advanceTurn();
    }
  }

  activePlayerStand() {
    if (!this.isGameActive) return;
    this.currentSeatTurn++;
    this.advanceTurn();
  }

  async activePlayerDouble() {
    if (!this.isGameActive) return;
    const cur = this.seats[this.currentSeatTurn];
    if (this.currentSeatTurn === 0) {
      this.stats.chips -= cur.bet;
      cur.chips = this.stats.chips;
      cur.bet *= 2;
    } else {
      cur.chips -= cur.bet;
      cur.bet *= 2;
    }
    this.updateBalanceUI();
    await this.dealCardToSeat(this.currentSeatTurn);
    this.currentSeatTurn++;
    this.advanceTurn();
  }

  async runDealerPhase() {
    if (!this.isGameActive) return;
    this.gameState = 'dealer';
    this.actionControls.classList.add('hidden');
    this.activeTurnIndicator.textContent = 'DEALER';

    this.showToast('Dealer Turn...');
    await new Promise(r => setTimeout(r, 700 / this.settings.speed));
    if (!this.isGameActive) return;

    this.dealerHoleCardHidden = false;
    this.renderDealer();

    while (this.isGameActive && this.calculateHand(this.dealerHand).best < 17) {
      await new Promise(r => setTimeout(r, 750 / this.settings.speed));
      if (!this.isGameActive) return;
      await this.dealCardToDealer(false);
    }

    if (!this.isGameActive) return;
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
      if (s.type === 'none') continue;

      const pScore = this.calculateHand(s.hand);
      let outcome = 'lose'; // 'win' | 'lose' | 'push'

      if (pScore.isBust) outcome = 'lose';
      else if (dScore.isBust) outcome = 'win';
      else if (pScore.best > dScore.best) outcome = 'win';
      else if (pScore.best < dScore.best) outcome = 'lose';
      else outcome = 'push';

      let seatGain = 0;

      // チップ増減計算
      if (pScore.isBJ && outcome === 'win') {
        const payout = Math.floor(s.bet * 2.5); // 3:2 配当
        s.chips += payout;
        seatGain = payout - s.bet;
        if (i === 0) {
          this.stats.blackjackCount++;
          this.stats.achievements.blackjack = true;
        }
      } else if (outcome === 'win') {
        const payout = s.bet * 2;
        s.chips += payout;
        seatGain = s.bet;
      } else if (outcome === 'push') {
        s.chips += s.bet;
        seatGain = 0;
      } else {
        seatGain = -s.bet;
      }

      if (i === 0) {
        mainGain = seatGain;
        this.stats.chips = s.chips;
        if (outcome === 'win') {
          this.stats.gamesWon++;
          this.stats.achievements.firstWin = true;
        }
      }

      // 破産時の救済処理：チップが0になったら+500追加
      if (s.chips <= 0) {
        s.chips += 500;
        if (i === 0) {
          this.stats.chips = s.chips;
        }
        this.showToast(`${s.name} に500チップ補充！`, 1600);
      }

      // リザルトモーダルへの記載
      const div = document.createElement('div');
      div.className = `res-seat-box ${outcome}`;
      const sign = seatGain >= 0 ? '+' : '';
      div.innerHTML = `<strong>${s.name}</strong>: ${pScore.best} (${outcome.toUpperCase()})<br><small>${sign}${seatGain} (残: ${s.chips})</small>`;
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
    window.storageManager.clearGameState();

    this.updateBalanceUI();
    this.modalRoundResult.classList.remove('hidden');
    this.checkBankrollRefill();
    this.checkResumeAvailability();
  }

  prepareNextRound() {
    this.gameState = 'betting';
    this.dealerHand = [];
    this.dealerHoleCardHidden = true;

    for (let i = 0; i < 4; i++) {
      this.seats[i].hand = [];
      this.seats[i].status = this.seats[i].type === 'none' ? 'idle' : 'betting';
      if (i > 0 && this.seats[i].type !== 'none') {
        this.seats[i].bet = Math.min(50, this.seats[i].chips);
      } else if (this.seats[i].type === 'none') {
        this.seats[i].bet = 0;
      }
    }

    this.seats[0].bet = 0;
    this.renderDealer();
    this.renderSeats();

    this.chipControls.classList.remove('hidden');
    this.actionControls.classList.add('hidden');
    this.activeTurnIndicator.textContent = 'BETTING';

    this.updateBalanceUI();
    this.checkBankrollRefill();
    this.saveCurrentGame();
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
  window.blackjackGame = new BlackjackEngine();
});
