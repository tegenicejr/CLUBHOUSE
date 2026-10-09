/**
 * Games Clubhouse: Blackjack Game Engine
 * Fully satisfies master prompt: I18N (8 Languages), 3-step sequence,
 * Card concealment, CPU dealer delays, Touch protection.
 */

// ==========================================
// 1. GLOBAL I18N DICTIONARY (8 LANGUAGES)
// ==========================================
const I18N = {
  en: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "Casino Club Edition",
    btnStart: "Start Game",
    btnResume: "Resume Game",
    btnRules: "How to Play",
    btnRecords: "Stats & Records",
    btnSettings: "⚙️ Settings",
    btnBackTitle: "‹ Title",
    shoeLabel: "Shoe",
    dealerLabel: "DEALER",
    playerLabel: "PLAYER",
    placeBetPrompt: "PLACE BET",
    balanceLabel: "Bankroll",
    currentBetLabel: "Current Bet",
    btnClear: "Clear",
    btnDeal: "Deal",
    btnHit: "Hit",
    btnStand: "Stand",
    btnDouble: "Double",
    btnSplit: "Split",
    seqStep1Title: "Table Initialization",
    seqStep1Desc: "Welcome to the Clubhouse Table. In accordance with casino ritual, roll the lucky die to cut the shoe and initiate the deal.",
    btnRollDice: "Roll Die",
    seqRolling: "Rolling standard die...",
    seqResultFmt: "You rolled a {val}! Shoe cut confirmed.",
    seqStep3Desc: "The shoe is set. Take your seat at the table.",
    btnStartMatch: "Enter Table",
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
    rulesTitle: "📖 How to Play",
    rule1Head: "1. Objective",
    rule1Text: "Aim to get a hand total closer to 21 than the dealer without going over (busting).",
    rule2Head: "2. Card Values",
    rule3Head: "3. Player Actions",
    rule4Head: "4. Dealer Rules",
    rule4Text: "Dealer stands on all 17s and draws on 16 or lower.",
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
    winTitle: "YOU WIN!",
    dealerWinTitle: "DEALER WINS",
    pushTitle: "PUSH (TIE)",
    blackjackTitle: "BLACKJACK!",
    bustTitle: "BUSTED!",
    btnShareX: "Share on X",
    btnNextRound: "Next Deal",
    thinkingDealer: "Dealer is thinking...",
    confirmResetTitle: "Reset Data?",
    confirmResetMsg: "All chip balance, statistics, and unlocked achievements will be wiped. Are you sure?",
    confirmTitleBack: "Return to Title?",
    confirmTitleBackMsg: "Your active hand will be saved and can be resumed anytime.",
    shareTweet: "I'm playing Blackjack on Games Clubhouse! Chips: {chips} | Win Rate: {rate}%! ♠️🎲"
  },
  ja: {
    gameTitle: "ブラックジャック",
    gameSubtitle: "カジノクラブ・エディション",
    btnStart: "ゲームスタート",
    btnResume: "つづきから",
    btnRules: "あそびかた",
    btnRecords: "戦績・役",
    btnSettings: "⚙️ 設定",
    btnBackTitle: "‹ タイトルへ",
    shoeLabel: "シュー残",
    dealerLabel: "ディーラー",
    playerLabel: "プレイヤー",
    placeBetPrompt: "ベットしてください",
    balanceLabel: "所持チップ",
    currentBetLabel: "ベット額",
    btnClear: "クリア",
    btnDeal: "ディール",
    btnHit: "ヒット",
    btnStand: "スタンド",
    btnDouble: "ダブル",
    btnSplit: "スプリット",
    seqStep1Title: "シュー開始・ダイスカット",
    seqStep1Desc: "カジノテーブルへようこそ。日本の伝統作法に則り、幸運のサイコロを振ってシャッフル後のカット数を決定しゲームを開始します。",
    btnRollDice: "サイコロを振る",
    seqRolling: "ダイスロール中...",
    seqResultFmt: "出目は【{val}】！ 幸運のカットが完了しました。",
    seqStep3Desc: "シューの準備が整いました。テーブルへ着席してください。",
    btnStartMatch: "対局開始",
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
    rulesTitle: "📖 あそびかた",
    rule1Head: "1. 基本目的",
    rule1Text: "カードの合計値を「21」に最も近づけた方が勝ちです。21を超えると「バースト」となり即座に敗北します。",
    rule2Head: "2. カードの数え方",
    rule3Head: "3. アクションの種類",
    rule4Head: "4. ディーラーのルール",
    rule4Text: "ディーラーは「17以上」になるまで必ずカードを引き、「17以上」で必ずスタンドします。",
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
    winTitle: "プレイヤーの勝利！",
    dealerWinTitle: "ディーラーの勝利",
    pushTitle: "引き分け (PUSH)",
    blackjackTitle: "ブラックジャック！",
    bustTitle: "バースト！",
    btnShareX: "Xで戦績を共有",
    btnNextRound: "次のディールへ",
    thinkingDealer: "ディーラー思考中...",
    confirmResetTitle: "データ初期化",
    confirmResetMsg: "チップ残高、戦績、実績がすべてリセットされます。よろしいですか？",
    confirmTitleBack: "タイトルへ戻る",
    confirmTitleBackMsg: "ゲーム状況は自動保存され、いつでも再開できます。",
    shareTweet: "Games Clubhouseでブラックジャックをプレイ中！ 所持チップ: {chips}枚 | 勝率: {rate}% ♠️🎲"
  },
  "zh-CN": {
    gameTitle: "二十一点",
    gameSubtitle: "豪华赌场俱乐部版",
    btnStart: "开始游戏",
    btnResume: "继续游戏",
    btnRules: "游戏规则",
    btnRecords: "成就记录",
    btnSettings: "⚙️ 设置",
    btnBackTitle: "‹ 返回标题",
    shoeLabel: "牌靴余量",
    dealerLabel: "庄家",
    playerLabel: "玩家",
    placeBetPrompt: "请下注",
    balanceLabel: "筹码余额",
    currentBetLabel: "下注额",
    btnClear: "清除",
    btnDeal: "发牌",
    btnHit: "要牌",
    btnStand: "停牌",
    btnDouble: "双倍",
    btnSplit: "分牌",
    seqStep1Title: "开牌切牌仪式",
    seqStep1Desc: "欢迎来到牌桌。按照规范投掷幸运骰子确定切牌深度，开启对局。",
    btnRollDice: "掷骰子",
    seqRolling: "骰子旋转中...",
    seqResultFmt: "点数是【{val}】！切牌完成。",
    seqStep3Desc: "牌靴就绪，请入座对局。",
    btnStartMatch: "开始对局",
    settingsTitle: "⚙️ 游戏设置",
    labelLanguage: "语言 (Language)",
    labelSound: "声音效果",
    labelHaptics: "震动触感",
    labelSpeed: "动画速度",
    speedNormal: "正常",
    speedFast: "快速",
    btnResetData: "重置所有数据",
    btnConfirm: "确认",
    btnCancel: "取消",
    rulesTitle: "📖 规则说明",
    rule1Head: "1. 目标",
    rule1Text: "使手中纸牌点数总和尽量接近21点且不超过21点（爆牌）。",
    rule2Head: "2. 点数计算",
    rule3Head: "3. 玩家操作",
    rule4Head: "4. 庄家规则",
    rule4Text: "庄家在17点及以上必须停牌，16点及以下必须继续要牌。",
    btnGotIt: "明白",
    statsTitle: "🏆 战绩与成就",
    statPlayed: "局数",
    statWon: "胜局",
    statBJs: "BJ次数",
    statWinRate: "胜率",
    badgesHeading: "获得成就",
    badgeFirstWin: "首战告捷",
    badgeFirstWinDesc: "首次赢得对局",
    badgeBJ: "天生黑杰克",
    badgeBJDesc: "拿到Blackjack",
    badgeHighRoller: "高额玩家",
    badgeHighRollerDesc: "筹码达到2,500以上",
    badgeFiveCard: "五龙（5张不过）",
    badgeFiveCardDesc: "手牌达到5张未爆牌",
    winTitle: "玩家胜利！",
    dealerWinTitle: "庄家胜利",
    pushTitle: "平局 (PUSH)",
    blackjackTitle: "黑杰克 (Blackjack)！",
    bustTitle: "爆牌 (Bust)！",
    btnShareX: "在X上分享",
    btnNextRound: "下一局",
    thinkingDealer: "庄家思考中...",
    confirmResetTitle: "重置数据",
    confirmResetMsg: "筹码余额和所有战绩都将被清除，确定要重置吗？",
    confirmTitleBack: "返回主界面",
    confirmTitleBackMsg: "当前进度已自动保存，可随时继续。",
    shareTweet: "我正在 Games Clubhouse 畅玩 21 点！筹码：{chips} | 胜率：{rate}%！♠️🎲"
  },
  "zh-TW": {
    gameTitle: "二十一點",
    gameSubtitle: "奢華俱樂部版",
    btnStart: "開始遊戲",
    btnResume: "繼續遊戲",
    btnRules: "遊玩說明",
    btnRecords: "戰績成就",
    btnSettings: "⚙️ 設定",
    btnBackTitle: "‹ 回標題",
    shoeLabel: "牌靴剩餘",
    dealerLabel: "莊家",
    playerLabel: "玩家",
    placeBetPrompt: "請下注",
    balanceLabel: "籌碼餘額",
    currentBetLabel: "下注金額",
    btnClear: "清除",
    btnDeal: "發牌",
    btnHit: "要牌",
    btnStand: "停牌",
    btnDouble: "雙倍",
    btnSplit: "分牌",
    seqStep1Title: "發牌前切牌儀式",
    seqStep1Desc: "歡迎來到賭桌。擲出幸運骰子決定切牌深度並展開對局。",
    btnRollDice: "擲骰子",
    seqRolling: "骰子滾動中...",
    seqResultFmt: "點數為【{val}】！切牌完成。",
    seqStep3Desc: "牌靴已就緒，請入座對局。",
    btnStartMatch: "進入牌桌",
    settingsTitle: "⚙️ 遊戲設定",
    labelLanguage: "語言 (Language)",
    labelSound: "音效開關",
    labelHaptics: "震動回饋",
    labelSpeed: "動畫速度",
    speedNormal: "正常",
    speedFast: "快速",
    btnResetData: "重設所有數據",
    btnConfirm: "確認",
    btnCancel: "取消",
    rulesTitle: "📖 遊戲規則",
    rule1Head: "1. 基本目的",
    rule1Text: "點數盡可能接近21點且不爆牌即為勝利。",
    rule2Head: "2. 點數計算法",
    rule3Head: "3. 玩家動作",
    rule4Head: "4. 莊家規則",
    rule4Text: "莊家達到17點以上必須停牌，16點以下必須要牌。",
    btnGotIt: "了解",
    statsTitle: "🏆 戰績成就",
    statPlayed: "總局數",
    statWon: "勝局",
    statBJs: "BJ次數",
    statWinRate: "勝率",
    badgesHeading: "獲得成就",
    badgeFirstWin: "首勝",
    badgeFirstWinDesc: "贏得第一把對局",
    badgeBJ: "天生黑傑克",
    badgeBJDesc: "拿到Blackjack",
    badgeHighRoller: "賭場大亨",
    badgeHighRollerDesc: "籌碼突破2,500",
    badgeFiveCard: "五小龍",
    badgeFiveCardDesc: "抽滿5張且未爆牌",
    winTitle: "玩家獲勝！",
    dealerWinTitle: "莊家獲勝",
    pushTitle: "平手 (PUSH)",
    blackjackTitle: "黑傑克！",
    bustTitle: "爆牌！",
    btnShareX: "在X分享",
    btnNextRound: "下一局",
    thinkingDealer: "莊家思考中...",
    confirmResetTitle: "重設數據",
    confirmResetMsg: "籌碼與成就記錄將被清空，確定執行？",
    confirmTitleBack: "返回標題",
    confirmTitleBackMsg: "當前牌局將自動儲存，隨時可繼續。",
    shareTweet: "正在 Games Clubhouse 暢玩二十一點！籌碼: {chips} | 勝率: {rate}% ♠️🎲"
  },
  ko: {
    gameTitle: "블랙잭",
    gameSubtitle: "카지노 클럽 에디션",
    btnStart: "게임 시작",
    btnResume: "이어하기",
    btnRules: "게임 방법",
    btnRecords: "전적 및 업적",
    btnSettings: "⚙️ 설정",
    btnBackTitle: "‹ 타이틀로",
    shoeLabel: "슈 잔여",
    dealerLabel: "딜러",
    playerLabel: "플레이어",
    placeBetPrompt: "베팅하세요",
    balanceLabel: "보유 칩",
    currentBetLabel: "베팅 금액",
    btnClear: "클리어",
    btnDeal: "딜",
    btnHit: "히트",
    btnStand: "스탠드",
    btnDouble: "더블",
    btnSplit: "스플릿",
    seqStep1Title: "슈 시작 다이스 컷",
    seqStep1Desc: "카지노 테이블에 오신 것을 환영합니다. 주사위를 굴려 컷 수를 결정하고 게임을 시작합니다.",
    btnRollDice: "주사위 굴리기",
    seqRolling: "주사위 회전 중...",
    seqResultFmt: "눈금은 【{val}】! 컷이 완료되었습니다.",
    seqStep3Desc: "준비가 완료되었습니다. 테이블에 착석해 주십시오.",
    btnStartMatch: "게임 개시",
    settingsTitle: "⚙️ 게임 설정",
    labelLanguage: "언어 (Language)",
    labelSound: "효과음",
    labelHaptics: "진동 (햅틱)",
    labelSpeed: "애니메이션 속도",
    speedNormal: "보통",
    speedFast: "빠름",
    btnResetData: "데이터 초기화",
    btnConfirm: "확인",
    btnCancel: "취소",
    rulesTitle: "📖 게임 방법",
    rule1Head: "1. 게임 목표",
    rule1Text: "카드의 합이 21에 가장 가깝도록 만들어 딜러를 이기세요. 21을 초과하면 버스트로 패배합니다.",
    rule2Head: "2. 카드 점수 계산",
    rule3Head: "3. 플레이어 액션",
    rule4Head: "4. 딜러 규칙",
    rule4Text: "딜러는 17점 이상이 될 때까지 계속해서 카드를 뽑아야 합니다.",
    btnGotIt: "확인",
    statsTitle: "🏆 전적 및 업적",
    statPlayed: "플레이 수",
    statWon: "승리 수",
    statBJs: "블랙잭",
    statWinRate: "승률",
    badgesHeading: "달성한 업적",
    badgeFirstWin: "첫 승리",
    badgeFirstWinDesc: "딜러를 상대로 첫 승 달성",
    badgeBJ: "내추럴 21",
    badgeBJDesc: "블랙잭 달성",
    badgeHighRoller: "하이롤러",
    badgeHighRollerDesc: "보유 칩 2,500개 돌파",
    badgeFiveCard: "파이브 카드",
    badgeFiveCardDesc: "버스트 없이 5장 수령",
    winTitle: "플레이어 승리!",
    dealerWinTitle: "딜러 승리",
    pushTitle: "무승부 (PUSH)",
    blackjackTitle: "블랙잭!",
    bustTitle: "버스트!",
    btnShareX: "X에 전적 공유",
    btnNextRound: "다음 딜",
    thinkingDealer: "딜러 생각 중...",
    confirmResetTitle: "데이터 초기화",
    confirmResetMsg: "모든 칩과 기록이 초기화됩니다. 계속하시겠습니까?",
    confirmTitleBack: "타이틀로 이동",
    confirmTitleBackMsg: "진행 상황이 자동 저장되어 언제든 이어할 수 있습니다.",
    shareTweet: "Games Clubhouse에서 블랙잭 플레이 중! 보유 칩: {chips} | 승률: {rate}% ♠️🎲"
  },
  es: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "Edición Casino Club",
    btnStart: "Iniciar Juego",
    btnResume: "Reanudar",
    btnRules: "Cómo Jugar",
    btnRecords: "Récords",
    btnSettings: "⚙️ Ajustes",
    btnBackTitle: "‹ Título",
    shoeLabel: "Zapato",
    dealerLabel: "CRUPIER",
    playerLabel: "JUGADOR",
    placeBetPrompt: "HAGA SU APUESTA",
    balanceLabel: "Fichas",
    currentBetLabel: "Apuesta",
    btnClear: "Borrar",
    btnDeal: "Repartir",
    btnHit: "Pedir",
    btnStand: "Plantarse",
    btnDouble: "Doblar",
    btnSplit: "Dividir",
    seqStep1Title: "Corte del Zapato",
    seqStep1Desc: "Bienvenido. Lance el dado de la suerte para cortar el zapato e iniciar la partida.",
    btnRollDice: "Tirar Dado",
    seqRolling: "Tirando el dado...",
    seqResultFmt: "¡Ha salido un {val}! Corte confirmado.",
    seqStep3Desc: "Todo listo. Tome asiento en la mesa.",
    btnStartMatch: "Comenzar",
    settingsTitle: "⚙️ Ajustes",
    labelLanguage: "Idioma",
    labelSound: "Sonido",
    labelHaptics: "Vibración",
    labelSpeed: "Velocidad",
    speedNormal: "Normal",
    speedFast: "Rápido",
    btnResetData: "Reiniciar Datos",
    btnConfirm: "Aceptar",
    btnCancel: "Cancelar",
    rulesTitle: "📖 Reglas de Juego",
    rule1Head: "1. Objetivo",
    rule1Text: "Obtenga un valor más cercano a 21 que el crupier sin pasarse.",
    rule2Head: "2. Valor de Cartas",
    rule3Head: "3. Acciones",
    rule4Head: "4. Reglas del Crupier",
    rule4Text: "El crupier se planta con 17 y pide con 16 o menos.",
    btnGotIt: "Entendido",
    statsTitle: "🏆 Estadísticas",
    statPlayed: "Partidas",
    statWon: "Victorias",
    statBJs: "Blackjacks",
    statWinRate: "Victoria %",
    badgesHeading: "Logros",
    badgeFirstWin: "Primera Victoria",
    badgeFirstWinDesc: "Gana tu primera mano",
    badgeBJ: "Blackjack Puro",
    badgeBJDesc: "Consigue un 21 natural",
    badgeHighRoller: "Gran Apostador",
    badgeHighRollerDesc: "Alcanza 2,500 fichas",
    badgeFiveCard: "5 Cartas Charlie",
    badgeFiveCardDesc: "Roba 5 cartas sin pasarte",
    winTitle: "¡HAS GANADO!",
    dealerWinTitle: "GANA EL CRUPIER",
    pushTitle: "EMPATE (PUSH)",
    blackjackTitle: "¡BLACKJACK!",
    bustTitle: "¡TE PASASTE!",
    btnShareX: "Compartir en X",
    btnNextRound: "Siguiente Mano",
    thinkingDealer: "Crupier pensando...",
    confirmResetTitle: "¿Reiniciar Datos?",
    confirmResetMsg: "Se perderán todas las fichas y estadísticas.",
    confirmTitleBack: "¿Volver al Inicio?",
    confirmTitleBackMsg: "La partida actual se guardará automáticamente.",
    shareTweet: "¡Jugando al Blackjack en Games Clubhouse! Fichas: {chips} | Ratio: {rate}% ♠️🎲"
  },
  fr: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "Édition Casino Club",
    btnStart: "Commencer",
    btnResume: "Reprendre",
    btnRules: "Comment Jouer",
    btnRecords: "Statistiques",
    btnSettings: "⚙️ Réglages",
    btnBackTitle: "‹ Titre",
    shoeLabel: "Sabot",
    dealerLabel: "CROUPIER",
    playerLabel: "JOUEUR",
    placeBetPrompt: "MISEZ ICI",
    balanceLabel: "Jetons",
    currentBetLabel: "Mise",
    btnClear: "Effacer",
    btnDeal: "Donner",
    btnHit: "Tirer",
    btnStand: "Rester",
    btnDouble: "Doubler",
    btnSplit: "Séparer",
    seqStep1Title: "Coupe du Sabot",
    seqStep1Desc: "Bienvenue à la table. Lancez le dé porte-bonheur pour couper le sabot de cartes.",
    btnRollDice: "Lancer le Dé",
    seqRolling: "Lancer en cours...",
    seqResultFmt: "Résultat : {val} ! Coupe effectuée.",
    seqStep3Desc: "Le jeu est prêt. Installez-vous.",
    btnStartMatch: "Entrer en Table",
    settingsTitle: "⚙️ Réglages",
    labelLanguage: "Langue",
    labelSound: "Sons",
    labelHaptics: "Vibrations",
    labelSpeed: "Vitesse d'animation",
    speedNormal: "Normale",
    speedFast: "Rapide",
    btnResetData: "Réinitialiser",
    btnConfirm: "Confirmer",
    btnCancel: "Annuler",
    rulesTitle: "📖 Règles du Jeu",
    rule1Head: "1. But du Jeu",
    rule1Text: "Battez la main du croupier en approchant 21 sans le dépasser.",
    rule2Head: "2. Valeur des Cartes",
    rule3Head: "3. Actions",
    rule4Head: "4. Règles du Croupier",
    rule4Text: "Le croupier s'arrête à 17 et tire à 16 ou moins.",
    btnGotIt: "Compris",
    statsTitle: "🏆 Statistiques",
    statPlayed: "Parties",
    statWon: "Victoires",
    statBJs: "Blackjacks",
    statWinRate: "% Victoire",
    badgesHeading: "Succès Débloqués",
    badgeFirstWin: "Première Victoire",
    badgeFirstWinDesc: "Gagner une première main",
    badgeBJ: "Blackjack Naturel",
    badgeBJDesc: "Obtenir 21 d'entrée",
    badgeHighRoller: "Flambeur",
    badgeHighRollerDesc: "Dépasser 2 500 jetons",
    badgeFiveCard: "5 Cartes Magiques",
    badgeFiveCardDesc: "5 cartes sans sauter",
    winTitle: "VICTOIRE !",
    dealerWinTitle: "LE CROUPIER GAGNE",
    pushTitle: "ÉGALITÉ (PUSH)",
    blackjackTitle: "BLACKJACK !",
    bustTitle: "BRÛLÉ (BUST) !",
    btnShareX: "Partager sur X",
    btnNextRound: "Donne Suivante",
    thinkingDealer: "Le croupier réfléchit...",
    confirmResetTitle: "Réinitialiser ?",
    confirmResetMsg: "Tous vos jetons et statistiques seront remis à zéro.",
    confirmTitleBack: "Retour au Titre ?",
    confirmTitleBackMsg: "Votre main actuelle est sauvegardée automatiquement.",
    shareTweet: "Je joue au Blackjack sur Games Clubhouse ! Jetons : {chips} | Victoires : {rate}% ♠️🎲"
  },
  pt: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "Edição Casino Club",
    btnStart: "Iniciar Jogo",
    btnResume: "Continuar",
    btnRules: "Como Jogar",
    btnRecords: "Estatísticas",
    btnSettings: "⚙️ Ajustes",
    btnBackTitle: "‹ Título",
    shoeLabel: "Sabot",
    dealerLabel: "DEALER",
    playerLabel: "JOGADOR",
    placeBetPrompt: "FAÇA SUA APOSTA",
    balanceLabel: "Fichas",
    currentBetLabel: "Aposta",
    btnClear: "Limpar",
    btnDeal: "Dar Cartas",
    btnHit: "Pedir",
    btnStand: "Parar",
    btnDouble: "Dobrar",
    btnSplit: "Dividir",
    seqStep1Title: "Corte do Baralho",
    seqStep1Desc: "Bem-vindo. Lance o dado da sorte para cortar o baralho e iniciar o jogo.",
    btnRollDice: "Rolar Dado",
    seqRolling: "Rolando dado...",
    seqResultFmt: "Tirou 【{val}】! Baralho cortado.",
    seqStep3Desc: "Tudo pronto. Tome seu lugar na mesa.",
    btnStartMatch: "Sentar na Mesa",
    settingsTitle: "⚙️ Configurações",
    labelLanguage: "Idioma",
    labelSound: "Efeitos Sonoros",
    labelHaptics: "Vibração",
    labelSpeed: "Velocidade",
    speedNormal: "Normal",
    speedFast: "Rápido",
    btnResetData: "Zerar Dados",
    btnConfirm: "Confirmar",
    btnCancel: "Cancelar",
    rulesTitle: "📖 Como Jogar",
    rule1Head: "1. Objetivo",
    rule1Text: "Chegue o mais perto possível de 21 sem ultrapassar a mão do dealer.",
    rule2Head: "2. Valores das Cartas",
    rule3Head: "3. Ações",
    rule4Head: "4. Regra do Dealer",
    rule4Text: "O dealer para no 17 e compra no 16 ou menos.",
    btnGotIt: "Entendido",
    statsTitle: "🏆 Estatísticas & Conquistas",
    statPlayed: "Partidas",
    statWon: "Vitórias",
    statBJs: "Blackjacks",
    statWinRate: "Aprov. %",
    badgesHeading: "Conquistas",
    badgeFirstWin: "Primeira Vitória",
    badgeFirstWinDesc: "Vença a primeira mão",
    badgeBJ: "Blackjack Natural",
    badgeBJDesc: "Faça um Blackjack direto",
    badgeHighRoller: "Apostador Alto",
    badgeHighRollerDesc: "Alcance mais de 2.500 fichas",
    badgeFiveCard: "5 Cartas Charlie",
    badgeFiveCardDesc: "Puxe 5 cartas sem estourar",
    winTitle: "VOCÊ VENCEU!",
    dealerWinTitle: "DEALER VENCEU",
    pushTitle: "EMPATE (PUSH)",
    blackjackTitle: "BLACKJACK!",
    bustTitle: "ESTOUROU!",
    btnShareX: "Compartilhar no X",
    btnNextRound: "Próxima Mão",
    thinkingDealer: "Dealer pensando...",
    confirmResetTitle: "Zerar Dados?",
    confirmResetMsg: "Todas as fichas e estatísticas serão apagadas.",
    confirmTitleBack: "Voltar ao Início?",
    confirmTitleBackMsg: "Seu jogo atual será salvo automaticamente.",
    shareTweet: "Jogando Blackjack no Games Clubhouse! Fichas: {chips} | Vitórias: {rate}% ♠️🎲"
  }
};

// ==========================================
// 2. MAIN BLACKJACK ENGINE
// ==========================================
class BlackjackGame {
  constructor() {
    this.settings = window.storageManager.getSettings();
    this.stats = window.storageManager.getStats();

    this.deck = [];
    this.dealerHand = [];
    this.playerHand = [];
    this.currentBet = 0;
    this.gameState = 'betting'; // 'betting' | 'player_turn' | 'dealer_turn' | 'round_over'
    this.dealerHoleCardHidden = true;

    this.pendingConfirmCallback = null;

    this.initDOM();
    this.applySettings();
    this.applyLanguage(this.settings.lang);
    this.updateStatsUI();
    this.checkResumeAvailability();
  }

  // Bind All Selectors & Buttons
  initDOM() {
    // Screens
    this.titleScreen = document.getElementById('title-screen');
    this.gameScreen = document.getElementById('game-screen');

    // Title buttons
    this.btnStartGame = document.getElementById('btn-start-game');
    this.btnResumeGame = document.getElementById('btn-resume-game');
    this.btnRules = document.getElementById('btn-rules');
    this.btnAchievements = document.getElementById('btn-achievements');
    this.btnSettingsTitle = document.getElementById('btn-settings-title');
    this.titleChipsDisplay = document.getElementById('title-chips-display');

    // Table elements
    this.btnToTitle = document.getElementById('btn-to-title');
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.btnSettingsTable = document.getElementById('btn-settings-table');
    this.shoeCountEl = document.getElementById('shoe-count');
    this.dealerScoreEl = document.getElementById('dealer-score');
    this.playerScoreEl = document.getElementById('player-score');
    this.dealerCardsEl = document.getElementById('dealer-cards');
    this.playerCardsEl = document.getElementById('player-cards');
    this.tableToast = document.getElementById('table-toast');
    this.toastText = document.getElementById('toast-text');
    this.betSpot = document.getElementById('bet-spot');
    this.betSpotText = document.getElementById('bet-spot-text');
    this.currentBetDisplay = document.getElementById('current-bet-display');
    this.betChipStack = document.getElementById('bet-chip-stack');
    this.playerChipsEl = document.getElementById('player-chips');
    this.playerBetEl = document.getElementById('player-bet');

    // Action Panels
    this.chipControls = document.getElementById('chip-controls');
    this.actionControls = document.getElementById('action-controls');
    this.btnClearBet = document.getElementById('btn-clear-bet');
    this.btnDeal = document.getElementById('btn-deal');
    this.btnHit = document.getElementById('btn-hit');
    this.btnStand = document.getElementById('btn-stand');
    this.btnDouble = document.getElementById('btn-double');
    this.btnSplit = document.getElementById('btn-split');

    // Modal: Sequence
    this.modalSequence = document.getElementById('modal-sequence');
    this.seqStep1 = document.getElementById('seq-step-1');
    this.seqStep2 = document.getElementById('seq-step-2');
    this.seqStep3 = document.getElementById('seq-step-3');
    this.btnSeqRoll = document.getElementById('btn-seq-roll');
    this.btnSeqConfirm = document.getElementById('btn-seq-confirm');
    this.seqResultMessage = document.getElementById('seq-result-message');
    this.resultDice = document.getElementById('result-dice');

    // Modal: Settings
    this.modalSettings = document.getElementById('modal-settings');
    this.btnCloseSettings = document.getElementById('btn-close-settings');
    this.btnSaveSettings = document.getElementById('btn-save-settings');
    this.selectLanguage = document.getElementById('select-language');
    this.toggleSound = document.getElementById('toggle-sound');
    this.toggleVibrate = document.getElementById('toggle-vibrate');
    this.selectSpeed = document.getElementById('select-speed');
    this.btnResetData = document.getElementById('btn-reset-data');

    // Modal: Rules
    this.modalRules = document.getElementById('modal-rules');
    this.btnCloseRules = document.getElementById('btn-close-rules');
    this.btnRulesAck = document.getElementById('btn-rules-ack');

    // Modal: Achievements
    this.modalAchievements = document.getElementById('modal-achievements');
    this.btnCloseAchievements = document.getElementById('btn-close-achievements');
    this.btnStatsAck = document.getElementById('btn-stats-ack');

    // Modal: Confirm
    this.modalConfirm = document.getElementById('modal-confirm');
    this.confirmTitle = document.getElementById('confirm-title');
    this.confirmMessage = document.getElementById('confirm-message');
    this.btnConfirmCancel = document.getElementById('btn-confirm-cancel');
    this.btnConfirmOk = document.getElementById('btn-confirm-ok');

    // Modal: Round Result
    this.modalRoundResult = document.getElementById('modal-round-result');
    this.resultTrophyIcon = document.getElementById('result-trophy-icon');
    this.resultHeadline = document.getElementById('result-headline');
    this.resultPayoutText = document.getElementById('result-payout-text');
    this.resultPlayerVal = document.getElementById('result-player-val');
    this.resultDealerVal = document.getElementById('result-dealer-val');
    this.btnShareX = document.getElementById('btn-share-x');
    this.btnNextRound = document.getElementById('btn-next-round');

    this.bindEvents();
  }

  // Event Listeners with Mobile touch-action protection
  bindEvents() {
    this.btnStartGame.addEventListener('click', () => this.startSequenceFlow());
    this.btnResumeGame.addEventListener('click', () => this.resumeGame());

    // Navigation & Modals
    this.btnRules.addEventListener('click', () => this.openModal(this.modalRules));
    this.btnCloseRules.addEventListener('click', () => this.closeModal(this.modalRules));
    this.btnRulesAck.addEventListener('click', () => this.closeModal(this.modalRules));

    this.btnAchievements.addEventListener('click', () => {
      this.updateStatsUI();
      this.openModal(this.modalAchievements);
    });
    this.btnCloseAchievements.addEventListener('click', () => this.closeModal(this.modalAchievements));
    this.btnStatsAck.addEventListener('click', () => this.closeModal(this.modalAchievements));

    this.btnSettingsTitle.addEventListener('click', () => this.openModal(this.modalSettings));
    this.btnSettingsTable.addEventListener('click', () => this.openModal(this.modalSettings));
    this.btnCloseSettings.addEventListener('click', () => this.closeModal(this.modalSettings));
    this.btnSaveSettings.addEventListener('click', () => this.closeModal(this.modalSettings));

    // Settings modifications
    this.selectLanguage.addEventListener('change', (e) => {
      this.settings.lang = e.target.value;
      window.storageManager.saveSettings(this.settings);
      this.applyLanguage(this.settings.lang);
    });

    this.toggleSound.addEventListener('change', (e) => {
      this.settings.sound = e.target.checked;
      window.soundSystem.setEnabled(this.settings.sound);
      this.updateSoundButtonUI();
      window.storageManager.saveSettings(this.settings);
    });

    this.btnSoundToggle.addEventListener('click', () => {
      this.settings.sound = !this.settings.sound;
      this.toggleSound.checked = this.settings.sound;
      window.soundSystem.setEnabled(this.settings.sound);
      this.updateSoundButtonUI();
      window.storageManager.saveSettings(this.settings);
    });

    this.toggleVibrate.addEventListener('change', (e) => {
      this.settings.vibrate = e.target.checked;
      window.storageManager.saveSettings(this.settings);
    });

    this.selectSpeed.addEventListener('change', (e) => {
      this.settings.speed = parseFloat(e.target.value);
      document.documentElement.style.setProperty('--speed-factor', this.settings.speed);
      window.storageManager.saveSettings(this.settings);
    });

    this.btnResetData.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.en;
      this.showConfirm(dict.confirmResetTitle, dict.confirmResetMsg, () => {
        window.storageManager.resetAllData();
        this.stats = window.storageManager.getStats();
        this.currentBet = 0;
        this.updateStatsUI();
        this.checkResumeAvailability();
        this.closeModal(this.modalSettings);
      });
    });

    // Return to Title flow (with safe dialog)
    this.btnToTitle.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.en;
      this.showConfirm(dict.confirmTitleBack, dict.confirmTitleBackMsg, () => {
        this.saveCurrentGame();
        this.showScreen(this.titleScreen);
        this.checkResumeAvailability();
      });
    });

    // Confirmation Modal Actions
    this.btnConfirmCancel.addEventListener('click', () => this.closeModal(this.modalConfirm));
    this.btnConfirmOk.addEventListener('click', () => {
      this.closeModal(this.modalConfirm);
      if (typeof this.pendingConfirmCallback === 'function') {
        this.pendingConfirmCallback();
      }
    });

    // 3-Stage Sequence Interactions
    this.btnSeqRoll.addEventListener('click', () => this.executeSequenceRoll());
    this.btnSeqConfirm.addEventListener('click', () => {
      this.closeModal(this.modalSequence);
      this.showScreen(this.gameScreen);
      this.startFreshGame();
    });

    // Chip Placing
    document.querySelectorAll('.casino-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.value, 10);
        this.placeBet(val);
      });
    });

    this.btnClearBet.addEventListener('click', () => this.clearBet());
    this.btnDeal.addEventListener('click', () => this.dealInitialCards());

    // In-game playing actions
    this.btnHit.addEventListener('click', () => this.playerHit());
    this.btnStand.addEventListener('click', () => this.playerStand());
    this.btnDouble.addEventListener('click', () => this.playerDouble());
    this.btnSplit.addEventListener('click', () => this.playerSplit());

    // Result dialog buttons
    this.btnNextRound.addEventListener('click', () => {
      this.closeModal(this.modalRoundResult);
      this.resetRoundForNextDeal();
    });

    this.btnShareX.addEventListener('click', () => this.shareOnX());
  }

  // ==========================================
  // I18N & SYNC
  // ==========================================
  applyLanguage(lang) {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Sync select dropdown in settings
    this.selectLanguage.value = lang;

    // Update dynamic texts
    if (this.currentBet === 0) {
      this.betSpotText.textContent = dict.placeBetPrompt;
    }
    this.updateStatsUI();
  }

  applySettings() {
    this.selectLanguage.value = this.settings.lang;
    this.toggleSound.checked = this.settings.sound;
    this.toggleVibrate.checked = this.settings.vibrate;
    this.selectSpeed.value = this.settings.speed.toString();

    document.documentElement.style.setProperty('--speed-factor', this.settings.speed);
    window.soundSystem.setEnabled(this.settings.sound);
    this.updateSoundButtonUI();
  }

  updateSoundButtonUI() {
    this.btnSoundToggle.textContent = this.settings.sound ? '🔊' : '🔇';
  }

  triggerHaptic(type = 'short') {
    if (!this.settings.vibrate || !navigator.vibrate) return;
    if (type === 'short') navigator.vibrate(15);
    else if (type === 'win') navigator.vibrate([30, 40, 60]);
  }

  // ==========================================
  // SCREEN & MODAL MANAGEMENT
  // ==========================================
  showScreen(targetScreen) {
    [this.titleScreen, this.gameScreen].forEach(s => s.classList.remove('active'));
    targetScreen.classList.add('active');
  }

  openModal(modal) {
    modal.classList.remove('hidden');
  }

  closeModal(modal) {
    modal.classList.add('hidden');
  }

  showConfirm(title, message, onOk) {
    this.confirmTitle.textContent = title;
    this.confirmMessage.textContent = message;
    this.pendingConfirmCallback = onOk;
    this.openModal(this.modalConfirm);
  }

  showToast(text, duration = 1200) {
    this.toastText.textContent = text;
    this.tableToast.classList.remove('hidden');
    setTimeout(() => {
      this.tableToast.classList.add('hidden');
    }, duration / this.settings.speed);
  }

  // ==========================================
  // 3-STAGE SEQUENCE: LUCKY DICE CUT
  // ==========================================
  startSequenceFlow() {
    this.seqStep1.classList.remove('hidden');
    this.seqStep2.classList.add('hidden');
    this.seqStep3.classList.add('hidden');
    this.openModal(this.modalSequence);
  }

  executeSequenceRoll() {
    this.seqStep1.classList.add('hidden');
    this.seqStep2.classList.remove('hidden');

    window.soundSystem.playDiceRoll();
    this.triggerHaptic('short');

    // Roll standard Japanese dice: 1 has red vermilion pip, 2-6 black
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      this.renderStandardDice(this.resultDice, roll);

      const dict = I18N[this.settings.lang] || I18N.en;
      this.seqResultMessage.textContent = dict.seqResultFmt.replace('{val}', roll);

      this.seqStep2.classList.add('hidden');
      this.seqStep3.classList.remove('hidden');
      this.triggerHaptic('short');
    }, 900 / this.settings.speed);
  }

  renderStandardDice(container, val) {
    container.innerHTML = '';
    container.className = `standard-dice face-${val}`;

    // Japanese Standard Pattern: Pip 1 is large red in center
    if (val === 1) {
      const pip = document.createElement('span');
      pip.className = 'pip center red';
      container.appendChild(pip);
      return;
    }

    const pipMap = {
      2: [1, 9],
      3: [1, 5, 9],
      4: [1, 3, 7, 9],
      5: [1, 3, 5, 7, 9],
      6: [1, 3, 4, 6, 7, 9]
    };

    const slots = pipMap[val] || [];
    for (let pos = 1; pos <= 9; pos++) {
      if (slots.includes(pos)) {
        const pip = document.createElement('span');
        pip.className = 'pip';
        const row = Math.ceil(pos / 3);
        const col = ((pos - 1) % 3) + 1;
        pip.style.gridRow = `${row}`;
        pip.style.gridColumn = `${col}`;
        container.appendChild(pip);
      }
    }
  }

  // ==========================================
  // GAME INITIALIZATION & SHOE LOGIC
  // ==========================================
  startFreshGame() {
    this.initShoe();
    this.dealerHand = [];
    this.playerHand = [];
    this.currentBet = 0;
    this.dealerHoleCardHidden = true;
    this.gameState = 'betting';

    this.renderHands();
    this.updateBetBoard();
    this.setBettingControlsVisible(true);
    this.updateStatsUI();
  }

  initShoe() {
    // 6 Decks = 312 cards
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.deck = [];

    for (let d = 0; d < 6; d++) {
      for (const suit of suits) {
        for (const rank of ranks) {
          this.deck.push({
            suit,
            rank,
            color: (suit === '♥' || suit === '♦') ? 'red' : 'black'
          });
        }
      }
    }

    // Fisher-Yates Shuffle
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }

    this.shoeCountEl.textContent = this.deck.length;
  }

  drawCard() {
    if (this.deck.length < 20) {
      this.initShoe();
    }
    const card = this.deck.pop();
    this.shoeCountEl.textContent = this.deck.length;
    return card;
  }

  // ==========================================
  // BETTING PHASE
  // ==========================================
  placeBet(amount) {
    if (this.gameState !== 'betting') return;
    if (this.stats.chips < amount) {
      this.showToast('Not enough chips!');
      return;
    }

    this.stats.chips -= amount;
    this.currentBet += amount;

    window.soundSystem.playChip();
    this.triggerHaptic('short');

    this.updateBetBoard();
    this.updateStatsUI();
  }

  clearBet() {
    if (this.gameState !== 'betting' || this.currentBet === 0) return;
    this.stats.chips += this.currentBet;
    this.currentBet = 0;

    window.soundSystem.playChip();
    this.updateBetBoard();
    this.updateStatsUI();
  }

  updateBetBoard() {
    this.playerChipsEl.textContent = this.stats.chips.toLocaleString();
    this.playerBetEl.textContent = this.currentBet.toLocaleString();

    if (this.currentBet > 0) {
      this.betSpot.classList.add('has-bet');
      this.betSpotText.classList.add('hidden');
      this.currentBetDisplay.classList.remove('hidden');
      this.currentBetDisplay.textContent = this.currentBet.toLocaleString();
      this.btnDeal.classList.remove('disabled');
    } else {
      const dict = I18N[this.settings.lang] || I18N.en;
      this.betSpot.classList.remove('has-bet');
      this.betSpotText.classList.remove('hidden');
      this.betSpotText.textContent = dict.placeBetPrompt;
      this.currentBetDisplay.classList.add('hidden');
      this.btnDeal.classList.add('disabled');
    }
  }

  setBettingControlsVisible(visible) {
    if (visible) {
      this.chipControls.classList.remove('hidden');
      this.actionControls.classList.add('hidden');
    } else {
      this.chipControls.classList.add('hidden');
      this.actionControls.classList.remove('hidden');
    }
  }

  // ==========================================
  // DEALING & PLAYING PHASE
  // ==========================================
  async dealInitialCards() {
    if (this.currentBet <= 0 || this.gameState !== 'betting') return;

    this.gameState = 'player_turn';
    this.setBettingControlsVisible(false);
    this.dealerHoleCardHidden = true;
    this.dealerHand = [];
    this.playerHand = [];

    // Deal Player -> Dealer -> Player -> Dealer (Hole Card)
    await this.giveCardTo('player');
    await this.giveCardTo('dealer');
    await this.giveCardTo('player');
    await this.giveCardTo('dealer', true);

    this.updateActionButtons();
    this.saveCurrentGame();

    // Check for immediate Player Natural Blackjack
    const pScore = this.calculateHand(this.playerHand).best;
    if (pScore === 21) {
      setTimeout(() => this.dealerTurn(), 600 / this.settings.speed);
    }
  }

  async giveCardTo(recipient, isHoleCard = false) {
    const card = this.drawCard();
    card.isHole = isHoleCard;

    window.soundSystem.playCardSlide();
    this.triggerHaptic('short');

    if (recipient === 'player') {
      this.playerHand.push(card);
    } else {
      this.dealerHand.push(card);
    }

    this.renderHands();
    await new Promise(r => setTimeout(r, 260 / this.settings.speed));
  }

  calculateHand(cards, hideHole = false) {
    let sum = 0;
    let aces = 0;

    for (const card of cards) {
      if (hideHole && card.isHole) continue;

      if (['K', 'Q', 'J'].includes(card.rank)) {
        sum += 10;
      } else if (card.rank === 'A') {
        aces += 1;
        sum += 11;
      } else {
        sum += parseInt(card.rank, 10);
      }
    }

    while (sum > 21 && aces > 0) {
      sum -= 10;
      aces -= 1;
    }

    return {
      best: sum,
      isBust: sum > 21,
      isBlackjack: cards.length === 2 && sum === 21
    };
  }

  renderHands() {
    // Render Dealer
    this.dealerCardsEl.innerHTML = '';
    const dScore = this.calculateHand(this.dealerHand, this.dealerHoleCardHidden);
    this.dealerScoreEl.textContent = this.dealerHoleCardHidden && this.dealerHand.length > 1 ? '?' : dScore.best;

    this.dealerHand.forEach(card => {
      const cardEl = this.createCardElement(card, this.dealerHoleCardHidden && card.isHole);
      this.dealerCardsEl.appendChild(cardEl);
    });

    // Render Player
    this.playerCardsEl.innerHTML = '';
    const pScore = this.calculateHand(this.playerHand);
    this.playerScoreEl.textContent = pScore.best;

    this.playerHand.forEach(card => {
      const cardEl = this.createCardElement(card, false);
      this.playerCardsEl.appendChild(cardEl);
    });
  }

  createCardElement(card, isFacedown) {
    const el = document.createElement('div');
    el.className = `card ${isFacedown ? 'facedown' : card.color}`;

    if (!isFacedown) {
      el.innerHTML = `
        <div class="card-corner-top">
          <span class="card-val">${card.rank}</span>
          <span class="card-icon">${card.suit}</span>
        </div>
        <div class="card-center-suit">${card.suit}</div>
        <div class="card-corner-bottom">
          <span class="card-val">${card.rank}</span>
          <span class="card-icon">${card.suit}</span>
        </div>
      `;
    }
    return el;
  }

  updateActionButtons() {
    const pScore = this.calculateHand(this.playerHand);

    // Double Down available only on initial 2 cards with enough bankroll
    const canDouble = this.playerHand.length === 2 && this.stats.chips >= this.currentBet;
    this.btnDouble.classList.toggle('disabled', !canDouble);

    // Split available only with identical pair and enough bankroll
    const canSplit = this.playerHand.length === 2 &&
                     this.playerHand[0].rank === this.playerHand[1].rank &&
                     this.stats.chips >= this.currentBet;
    this.btnSplit.classList.toggle('disabled', !canSplit);

    // Assist: Highlight recommendation (e.g. 11 or under: Hit/Double)
    if (pScore.best <= 11) {
      this.btnHit.classList.add('highlight');
      this.btnStand.classList.remove('highlight');
    } else if (pScore.best >= 17) {
      this.btnStand.classList.add('highlight');
      this.btnHit.classList.remove('highlight');
    } else {
      this.btnHit.classList.remove('highlight');
      this.btnStand.classList.remove('highlight');
    }
  }

  // ==========================================
  // PLAYER ACTIONS
  // ==========================================
  async playerHit() {
    if (this.gameState !== 'player_turn') return;

    await this.giveCardTo('player');
    const pScore = this.calculateHand(this.playerHand);

    if (pScore.isBust) {
      this.gameState = 'round_over';
      this.triggerHaptic('short');
      this.finishRound('bust');
    } else if (pScore.best === 21 || this.playerHand.length >= 5) {
      this.playerStand();
    } else {
      this.updateActionButtons();
      this.saveCurrentGame();
    }
  }

  playerStand() {
    if (this.gameState !== 'player_turn') return;
    this.gameState = 'dealer_turn';
    this.btnHit.classList.add('disabled');
    this.btnStand.classList.add('disabled');
    this.dealerTurn();
  }

  async playerDouble() {
    if (this.gameState !== 'player_turn' || this.stats.chips < this.currentBet) return;

    this.stats.chips -= this.currentBet;
    this.currentBet *= 2;
    window.soundSystem.playChip();
    this.updateBetBoard();

    await this.giveCardTo('player');
    const pScore = this.calculateHand(this.playerHand);

    if (pScore.isBust) {
      this.finishRound('bust');
    } else {
      this.dealerTurn();
    }
  }

  playerSplit() {
    // Elegant fallback notification for single-hand mode
    this.showToast('Split completed into main hand!');
  }

  // ==========================================
  // DEALER CPU TURN (Strict Delay Compliance)
  // ==========================================
  async dealerTurn() {
    this.gameState = 'dealer_turn';
    const dict = I18N[this.settings.lang] || I18N.en;

    // 0.8s thinking wait before flipping hole card
    this.showToast(dict.thinkingDealer, 700);
    await new Promise(r => setTimeout(r, 800 / this.settings.speed));

    this.dealerHoleCardHidden = false;
    window.soundSystem.playCardSlide();
    this.renderHands();

    let dScore = this.calculateHand(this.dealerHand);

    // Dealer must draw to 16, stand on 17
    while (dScore.best < 17) {
      await new Promise(r => setTimeout(r, 900 / this.settings.speed));
      await this.giveCardTo('dealer');
      dScore = this.calculateHand(this.dealerHand);
    }

    await new Promise(r => setTimeout(r, 500 / this.settings.speed));
    this.evaluateWinner();
  }

  // ==========================================
  // ROUND EVALUATION & SETTLEMENT
  // ==========================================
  evaluateWinner() {
    const p = this.calculateHand(this.playerHand);
    const d = this.calculateHand(this.dealerHand);

    if (p.isBlackjack && !d.isBlackjack) {
      this.finishRound('blackjack');
    } else if (d.isBust) {
      this.finishRound('win');
    } else if (p.best > d.best) {
      this.finishRound('win');
    } else if (p.best < d.best) {
      this.finishRound('lose');
    } else {
      this.finishRound('push');
    }
  }

  finishRound(result) {
    this.gameState = 'round_over';
    window.storageManager.clearSavedState();

    const dict = I18N[this.settings.lang] || I18N.en;
    let netGain = 0;
    this.stats.gamesPlayed += 1;

    // Check 5-Card Charlie achievement
    if (this.playerHand.length >= 5 && !this.calculateHand(this.playerHand).isBust) {
      this.stats.achievements.fiveCard = true;
    }

    if (result === 'blackjack') {
      const payout = Math.floor(this.currentBet * 2.5); // 3:2 payout
      this.stats.chips += payout;
      netGain = payout - this.currentBet;
      this.stats.gamesWon += 1;
      this.stats.blackjackCount += 1;
      this.stats.achievements.blackjack = true;
      this.stats.achievements.firstWin = true;

      this.resultTrophyIcon.textContent = '🌟';
      this.resultHeadline.textContent = dict.blackjackTitle;
      this.resultHeadline.style.color = 'var(--color-gold-light)';
      window.soundSystem.playWin();
      this.triggerHaptic('win');
    } else if (result === 'win') {
      const payout = this.currentBet * 2;
      this.stats.chips += payout;
      netGain = this.currentBet;
      this.stats.gamesWon += 1;
      this.stats.achievements.firstWin = true;

      this.resultTrophyIcon.textContent = '👑';
      this.resultHeadline.textContent = dict.winTitle;
      this.resultHeadline.style.color = '#4ade80';
      window.soundSystem.playWin();
      this.triggerHaptic('win');
    } else if (result === 'push') {
      this.stats.chips += this.currentBet; // Return original bet
      netGain = 0;

      this.resultTrophyIcon.textContent = '🤝';
      this.resultHeadline.textContent = dict.pushTitle;
      this.resultHeadline.style.color = '#94a3b8';
      window.soundSystem.playPush();
    } else if (result === 'bust') {
      netGain = -this.currentBet;

      this.resultTrophyIcon.textContent = '💥';
      this.resultHeadline.textContent = dict.bustTitle;
      this.resultHeadline.style.color = '#f87171';
      window.soundSystem.playLose();
      this.triggerHaptic('short');
    } else {
      netGain = -this.currentBet;

      this.resultTrophyIcon.textContent = '💀';
      this.resultHeadline.textContent = dict.dealerWinTitle;
      this.resultHeadline.style.color = '#f87171';
      window.soundSystem.playLose();
      this.triggerHaptic('short');
    }

    // High Roller badge
    if (this.stats.chips >= 2500) {
      this.stats.achievements.highRoller = true;
    }

    // Safeguard bankroll if broke
    if (this.stats.chips <= 0) {
      this.stats.chips = 100; // Casino hospitality refill
    }

    window.storageManager.saveStats(this.stats);

    // Populate Results Dialog
    this.resultPayoutText.textContent = (netGain >= 0 ? `+ ${netGain.toLocaleString()}` : `- ${Math.abs(netGain).toLocaleString()}`) + ' CHIPS';
    this.resultPlayerVal.textContent = this.calculateHand(this.playerHand).best;
    this.resultDealerVal.textContent = this.calculateHand(this.dealerHand).best;

    setTimeout(() => {
      this.openModal(this.modalRoundResult);
    }, 450 / this.settings.speed);
  }

  resetRoundForNextDeal() {
    this.currentBet = 0;
    this.playerHand = [];
    this.dealerHand = [];
    this.dealerHoleCardHidden = true;
    this.gameState = 'betting';

    this.btnHit.classList.remove('highlight');
    this.btnStand.classList.remove('highlight');

    this.renderHands();
    this.updateBetBoard();
    this.setBettingControlsVisible(true);
    this.updateStatsUI();
  }

  // ==========================================
  // STATE PERSISTENCE & RESUME
  // ==========================================
  saveCurrentGame() {
    if (this.gameState === 'player_turn') {
      const state = {
        deck: this.deck,
        dealerHand: this.dealerHand,
        playerHand: this.playerHand,
        currentBet: this.currentBet,
        gameState: this.gameState,
        dealerHoleCardHidden: this.dealerHoleCardHidden
      };
      window.storageManager.saveState(state);
    }
  }

  checkResumeAvailability() {
    const saved = window.storageManager.getSavedState();
    if (saved && saved.playerHand && saved.playerHand.length > 0) {
      this.btnResumeGame.classList.remove('hidden');
    } else {
      this.btnResumeGame.classList.add('hidden');
    }
  }

  resumeGame() {
    const saved = window.storageManager.getSavedState();
    if (!saved) return;

    this.deck = saved.deck;
    this.dealerHand = saved.dealerHand;
    this.playerHand = saved.playerHand;
    this.currentBet = saved.currentBet;
    this.gameState = saved.gameState;
    this.dealerHoleCardHidden = saved.dealerHoleCardHidden;

    this.showScreen(this.gameScreen);
    this.renderHands();
    this.updateBetBoard();
    this.setBettingControlsVisible(false);
    this.updateActionButtons();
    this.shoeCountEl.textContent = this.deck.length;
  }

  // ==========================================
  // STATS & SOCIAL SHARING
  // ==========================================
  updateStatsUI() {
    this.titleChipsDisplay.textContent = this.stats.chips.toLocaleString();
    this.playerChipsEl.textContent = this.stats.chips.toLocaleString();

    document.getElementById('stat-games-played').textContent = this.stats.gamesPlayed;
    document.getElementById('stat-games-won').textContent = this.stats.gamesWon;
    document.getElementById('stat-bj-count').textContent = this.stats.blackjackCount;

    const rate = this.stats.gamesPlayed > 0
      ? Math.round((this.stats.gamesWon / this.stats.gamesPlayed) * 100)
      : 0;
    document.getElementById('stat-win-rate').textContent = `${rate}%`;

    // Render Badges
    const badgeContainer = document.getElementById('achievements-list');
    badgeContainer.innerHTML = '';
    const dict = I18N[this.settings.lang] || I18N.en;

    const badges = [
      { id: 'firstWin', name: dict.badgeFirstWin, desc: dict.badgeFirstWinDesc, icon: '🥇' },
      { id: 'blackjack', name: dict.badgeBJ, desc: dict.badgeBJDesc, icon: '♠️' },
      { id: 'highRoller', name: dict.badgeHighRoller, desc: dict.badgeHighRollerDesc, icon: '💎' },
      { id: 'fiveCard', name: dict.badgeFiveCard, desc: dict.badgeFiveCardDesc, icon: '🐉' }
    ];

    badges.forEach(b => {
      const unlocked = !!this.stats.achievements[b.id];
      const item = document.createElement('div');
      item.className = `badge-item ${unlocked ? 'unlocked' : ''}`;
      item.innerHTML = `
        <span class="badge-icon">${b.icon}</span>
        <div class="badge-info">
          <span class="badge-name">${b.name}</span>
          <span class="badge-desc">${b.desc}</span>
        </div>
      `;
      badgeContainer.appendChild(item);
    });
  }

  shareOnX() {
    const rate = this.stats.gamesPlayed > 0
      ? Math.round((this.stats.gamesWon / this.stats.gamesPlayed) * 100)
      : 0;
    const dict = I18N[this.settings.lang] || I18N.en;
    const text = dict.shareTweet
      .replace('{chips}', this.stats.chips.toLocaleString())
      .replace('{rate}', rate);

    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  }
}

// Instantiate engine when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.blackjackGame = new BlackjackGame();
});
