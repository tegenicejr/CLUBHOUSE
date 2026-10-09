/**
 * Games Clubhouse: Blackjack Game Engine
 * - Clean DOM initialization without dead modal references
 * - Defaults to English (en), supports 8-language live switching
 * - Independent bankrolls for 2P-4P (500 chips, refill when empty)
 * - Exact win/loss chip calculation per seat
 * - Direct table start, no dice roll
 */

const I18N = {
  en: {
    btnStart: "Start Game",
    btnResume: "Resume Game",
    btnRules: "How to Play",
    btnRecords: "Records",
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
    payoutBJBadge: "3:2 Payout",
    ruleCountingHead: "Card Values",
    valFaceDesc: "Face Value",
    valTenDesc: "Count as 10",
    valAceDesc: "Counts as 1 or 11",
    ruleActionsHead: "Player Actions",
    hitSummary: "Draw another card",
    hitTip: "Take when far from 21",
    standSummary: "Lock your total",
    standTip: "End your turn at 17+",
    doubleSummary: "Double bet, draw 1 card",
    doubleTip: "Great when starting with 11",
    ruleDealerHead: "Dealer Strict Rules",
    flow16: "16 or less",
    flowMustHit: "Must Hit",
    flow17: "17 or more",
    flowMustStand: "Must Stand",
    btnGotIt: "Close",

    statsTitle: "🏆 Records & Badges",
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
  },
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
    payoutBJBadge: "1.5倍配当",
    ruleCountingHead: "カードの数え方",
    valFaceDesc: "そのままの数字",
    valTenDesc: "すべて 10",
    valAceDesc: "「1」または「11」どちらでもOK！",
    ruleActionsHead: "ターンの行動（アクション）",
    hitSummary: "カードをもう1枚引く",
    hitTip: "まだ21に遠いときに選択",
    standSummary: "現在の枚数で勝負を確定",
    standTip: "17以上など満足な合計値のとき",
    doubleSummary: "賭け金を2倍にし、1枚だけ引く",
    doubleTip: "最初の手札が「11」等の大チャンス時",
    ruleDealerHead: "ディーラーの絶対ルール",
    flow16: "16以下",
    flowMustHit: "必ずカードを引く",
    flow17: "17以上",
    flowMustStand: "必ずストップ（スタンド）",
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

    confirmTitleBack: "タイトルへ戻りますか？",
    confirmTitleBackMsg: "現在の進行状況は自動保存されます。",

    confirmOverwriteTitle: "新しくゲームを開始しますか？",
    confirmOverwriteMsg: "前回のプレイデータは上書きされ、\n最初からスタートします。",

    confirmResetTitle: "データを初期化しますか？",
    confirmResetMsg: "戦績や進行状況がすべて消去されます。\n元には戻せません。",

    btnCancel: "キャンセル",
    btnConfirm: "OK",

    btnShareX: "Xで戦績を共有",
    btnNextRound: "次のディールへ",
    shareTweet: "Games Clubhouseでブラックジャックをプレイ中！所持チップ: {chips}枚 ♠️🎲"
  },
  "zh-CN": {
    btnStart: "开始游戏",
    btnResume: "继续游戏",
    btnRules: "游戏规则",
    btnRecords: "成就记录",
    btnSettings: "⚙️ 设置",
    btnBackTitle: "‹ 返回标题",
    shoeLabel: "牌靴余量",
    dealerLabel: "庄家",
    balanceLabel: "筹码余额",
    activeSeatLabel: "当前回合",
    currentBetLabel: "1P 下注额",
    tableSlotsTitle: "玩家座席配置（最多4席）",
    slotNone: "空缺",
    slotCpu: "CPU",
    btnClear: "清除",
    btnDeal: "发牌",
    btnHit: "要牌",
    btnStand: "停牌",
    btnDouble: "双倍",
    refillTitle: "筹码补给",
    refillDesc: "筹码不足，俱乐部为您补给 500 筹码。",
    btnGetRefill: "领取 500 筹码",
    rulesTitle: "📖 规则说明",
    ruleGoalHead: "目标：达成 21 点",
    ruleGoalLead: "手牌点数尽可能接近 21 且不爆牌即为胜利。",
    ruleShowcaseBJ: "最强手牌：Blackjack",
    payoutBJBadge: "3:2 赔率",
    ruleCountingHead: "点数计算",
    valFaceDesc: "面值点数",
    valTenDesc: "计为 10 点",
    valAceDesc: "计为 1 或 11 点",
    ruleActionsHead: "玩家操作",
    hitSummary: "再抽一张牌",
    hitTip: "点数较小且未接近21时选择",
    standSummary: "确定当前点数",
    standTip: "达到17点以上时停牌",
    doubleSummary: "加倍下注且只抽一张牌",
    doubleTip: "初始两张牌为11点时极佳",
    ruleDealerHead: "庄家规则",
    flow16: "16点及以下",
    flowMustHit: "必须继续要牌",
    flow17: "17点及以上",
    flowMustStand: "必须停牌",
    btnGotIt: "关闭",
    statsTitle: "🏆 战绩成就",
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
    badgeFiveCard: "五龙",
    badgeFiveCardDesc: "手牌达到5张未爆牌",
    settingsTitle: "⚙️ 设置",
    labelLanguage: "语言",
    labelSound: "音效",
    labelHaptics: "震动",
    labelSpeed: "动画速度",
    speedNormal: "正常",
    speedFast: "快速",
    btnResetData: "重置所有数据",
    btnCloseSettings: "关闭",
    confirmTitleBack: "返回主界面",
    confirmTitleBackMsg: "当前进度已自动保存，可随时继续。",
    confirmOverwriteTitle: "确定要开启新游戏吗？",
    confirmOverwriteMsg: "当前保存的进度将被覆盖并清除。\n确定吗？",
    confirmResetTitle: "确定要重置数据吗？",
    confirmResetMsg: "所有战绩与进度将被清除。\n此操作无法撤销。",
    btnCancel: "取消",
    btnConfirm: "OK",
    btnShareX: "在X上分享",
    btnNextRound: "下一局",
    shareTweet: "在 Games Clubhouse 畅玩 21 点！筹码：{chips} ♠️🎲"
  },
  "zh-TW": {
    btnStart: "開始遊戲",
    btnResume: "繼續遊戲",
    btnRules: "遊玩說明",
    btnRecords: "戰績成就",
    btnSettings: "⚙️ 設定",
    btnBackTitle: "‹ 回標題",
    shoeLabel: "牌靴剩餘",
    dealerLabel: "莊家",
    balanceLabel: "籌碼餘額",
    activeSeatLabel: "目前回合",
    currentBetLabel: "1P 下注額",
    tableSlotsTitle: "座席配置（最多4席）",
    slotNone: "無",
    slotCpu: "CPU",
    btnClear: "清除",
    btnDeal: "發牌",
    btnHit: "要牌",
    btnStand: "停牌",
    btnDouble: "雙倍",
    refillTitle: "補充籌碼",
    refillDesc: "籌碼耗盡，為您補發 500 籌碼。",
    btnGetRefill: "領取 500 籌碼",
    rulesTitle: "📖 遊戲規則",
    ruleGoalHead: "目標：達成 21 點",
    ruleGoalLead: "點數盡可能接近 21 點且不爆牌即為勝利。",
    ruleShowcaseBJ: "最強手牌：Blackjack",
    payoutBJBadge: "3:2 賠率",
    ruleCountingHead: "點數計算法",
    valFaceDesc: "原始面值",
    valTenDesc: "計算為 10 點",
    valAceDesc: "算作 1 或 11 點",
    ruleActionsHead: "玩家動作",
    hitSummary: "再要一張牌",
    hitTip: "距離21點較遠時選擇",
    standSummary: "鎖定當前點數",
    standTip: "17點以上時選擇停牌",
    doubleSummary: "加倍注額並只拿一張牌",
    doubleTip: "首兩張為11點時極佳",
    ruleDealerHead: "莊家規則",
    flow16: "16點以下",
    flowMustHit: "必須要牌",
    flow17: "17點以上",
    flowMustStand: "必須停牌",
    btnGotIt: "關閉",
    statsTitle: "🏆 戰績成就",
    statPlayed: "局數",
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
    settingsTitle: "⚙️ 設定",
    labelLanguage: "語言",
    labelSound: "音效",
    labelHaptics: "震動",
    labelSpeed: "動畫速度",
    speedNormal: "正常",
    speedFast: "快速",
    btnResetData: "重設所有數據",
    btnCloseSettings: "關閉",
    confirmTitleBack: "返回標題",
    confirmTitleBackMsg: "當前牌局將自動儲存，隨時可繼續。",
    confirmOverwriteTitle: "開展全新對局？",
    confirmOverwriteMsg: "已儲存的牌局將會被覆蓋清除。\n確定嗎？",
    confirmResetTitle: "確定要重設數據嗎？",
    confirmResetMsg: "所有戰績與紀錄將被完全清除。\n無法恢復。",
    btnCancel: "取消",
    btnConfirm: "OK",
    btnShareX: "在X分享",
    btnNextRound: "下一局",
    shareTweet: "在 Games Clubhouse 暢玩二十一點！籌碼: {chips} ♠️🎲"
  },
  ko: {
    btnStart: "게임 시작",
    btnResume: "이어하기",
    btnRules: "게임 방법",
    btnRecords: "전적 및 업적",
    btnSettings: "⚙️ 설정",
    btnBackTitle: "‹ 타이틀로",
    shoeLabel: "슈 잔여",
    dealerLabel: "딜러",
    balanceLabel: "보유 칩",
    activeSeatLabel: "턴 좌석",
    currentBetLabel: "1P 베팅",
    tableSlotsTitle: "플레이어 좌석 설정 (최대 4석)",
    slotNone: "없음",
    slotCpu: "CPU",
    btnClear: "클리어",
    btnDeal: "딜",
    btnHit: "히트",
    btnStand: "스탠드",
    btnDouble: "더블",
    refillTitle: "칩 충전",
    refillDesc: "칩이 소진되었습니다. 500 칩을 충전해 드립니다.",
    btnGetRefill: "+500 칩 받기",
    rulesTitle: "📖 게임 방법",
    ruleGoalHead: "목표: 21 달성",
    ruleGoalLead: "카드 합이 21에 가장 가깝도록 만들어 딜러를 이기세요.",
    ruleShowcaseBJ: "최고의 족보: 블랙잭",
    payoutBJBadge: "3:2 배당",
    ruleCountingHead: "카드 점수 계산",
    valFaceDesc: "숫자 그대로",
    valTenDesc: "모두 10으로 계산",
    valAceDesc: "1 또는 11 둘 다 가능",
    ruleActionsHead: "플레이어 액션",
    hitSummary: "카드 한 장 더 뽑기",
    hitTip: "21에 미치지 못할 때",
    standSummary: "현재 합계로 승부",
    standTip: "17점 이상일 때 선택",
    doubleSummary: "판돈 2배 후 1장만 뽑기",
    doubleTip: "첫 2장이 11일 때 최적",
    ruleDealerHead: "딜러 필수 규칙",
    flow16: "16 이하",
    flowMustHit: "반드시 추가 드로우",
    flow17: "17 이상",
    flowMustStand: "반드시 스탠드",
    btnGotIt: "닫기",
    statsTitle: "🏆 전적 및 업적",
    statPlayed: "플레이 수",
    statWon: "승리 수",
    statBJs: "블랙잭",
    statWinRate: "승률",
    badgesHeading: "업적",
    badgeFirstWin: "첫 승리",
    badgeFirstWinDesc: "딜러를 상대로 첫 승 달성",
    badgeBJ: "내추럴 21",
    badgeBJDesc: "블랙잭 달성",
    badgeHighRoller: "하이롤러",
    badgeHighRollerDesc: "보유 칩 2,500개 돌파",
    badgeFiveCard: "파이브 카드",
    badgeFiveCardDesc: "버스트 없이 5장 수령",
    settingsTitle: "⚙️ 설정",
    labelLanguage: "언어",
    labelSound: "효과음",
    labelHaptics: "진동",
    labelSpeed: "애니메이션 속도",
    speedNormal: "보통",
    speedFast: "빠름",
    btnResetData: "데이터 초기화",
    btnCloseSettings: "닫기",
    confirmTitleBack: "타이틀로 이동",
    confirmTitleBackMsg: "진행 상황이 자동 저장되어 언제든 이어할 수 있습니다.",
    confirmOverwriteTitle: "새 게임을 시작하시겠습니까?",
    confirmOverwriteMsg: "저장된 기존 진행 상황이 삭제됩니다.\n계속하시겠습니까?",
    confirmResetTitle: "데이터를 초기화하시겠습니까?",
    confirmResetMsg: "전적과 진행 상황이 모두 삭제됩니다.\n되돌릴 수 없습니다.",
    btnCancel: "취소",
    btnConfirm: "OK",
    btnShareX: "X에 공유",
    btnNextRound: "다음 딜",
    shareTweet: "Games Clubhouse에서 블랙잭 플레이 중! 칩: {chips} ♠️🎲"
  },
  es: {
    btnStart: "Iniciar Juego",
    btnResume: "Reanudar",
    btnRules: "Cómo Jugar",
    btnRecords: "Récords",
    btnSettings: "⚙️ Ajustes",
    btnBackTitle: "‹ Título",
    shoeLabel: "Zapato",
    dealerLabel: "CRUPIER",
    balanceLabel: "Fichas",
    activeSeatLabel: "Turno",
    currentBetLabel: "Apuesta 1P",
    tableSlotsTitle: "Asientos de la Mesa (Máx 4)",
    slotNone: "Ninguno",
    slotCpu: "CPU",
    btnClear: "Borrar",
    btnDeal: "Repartir",
    btnHit: "Pedir",
    btnStand: "Plantarse",
    btnDouble: "Doblar",
    refillTitle: "Recarga de Fichas",
    refillDesc: "¡Sin fichas! El Casino le otorga +500 fichas.",
    btnGetRefill: "Reclamar 500 Fichas",
    rulesTitle: "📖 Reglas de Juego",
    ruleGoalHead: "Objetivo: 21",
    ruleGoalLead: "Acércate a 21 más que el crupier sin pasarte.",
    ruleShowcaseBJ: "Mano Máxima: Blackjack",
    payoutBJBadge: "Pago 3:2",
    ruleCountingHead: "Valor de Cartas",
    valFaceDesc: "Valor nominal",
    valTenDesc: "Valen 10",
    valAceDesc: "Vale 1 u 11",
    ruleActionsHead: "Acciones",
    hitSummary: "Pedir otra carta",
    hitTip: "Cuando estés lejos de 21",
    standSummary: "Plantarse con tu total",
    standTip: "Recomendado con 17+",
    doubleSummary: "Doblar apuesta y pedir 1",
    doubleTip: "Ideal al empezar con 11",
    ruleDealerHead: "Reglas del Crupier",
    flow16: "16 o menos",
    flowMustHit: "Debe pedir",
    flow17: "17 o más",
    flowMustStand: "Debe plantarse",
    btnGotIt: "Cerrar",
    statsTitle: "🏆 Estadísticas",
    statPlayed: "Partidas",
    statWon: "Victorias",
    statBJs: "Blackjacks",
    statWinRate: "% Victoria",
    badgesHeading: "Logros",
    badgeFirstWin: "Primera Victoria",
    badgeFirstWinDesc: "Gana tu primera mano",
    badgeBJ: "Blackjack Puro",
    badgeBJDesc: "Consigue un 21 natural",
    badgeHighRoller: "Gran Apostador",
    badgeHighRollerDesc: "Alcanza 2,500 fichas",
    badgeFiveCard: "5 Cartas Charlie",
    badgeFiveCardDesc: "Roba 5 cartas sin pasarte",
    settingsTitle: "⚙️ Ajustes",
    labelLanguage: "Idioma",
    labelSound: "Sonido",
    labelHaptics: "Vibración",
    labelSpeed: "Velocidad",
    speedNormal: "Normal",
    speedFast: "Rápido",
    btnResetData: "Reiniciar Datos",
    btnCloseSettings: "Cerrar",
    confirmTitleBack: "¿Volver al Inicio?",
    confirmTitleBackMsg: "La partida actual se guardará automáticamente.",
    confirmOverwriteTitle: "¿Nueva Partida?",
    confirmOverwriteMsg: "Se sobrescribirá la partida guardada.\n¿Continuar?",
    confirmResetTitle: "¿Reiniciar datos?",
    confirmResetMsg: "Se borrarán todas las estadísticas y fichas.\nNo se puede deshacer.",
    btnCancel: "Cancelar",
    btnConfirm: "OK",
    btnShareX: "Compartir en X",
    btnNextRound: "Siguiente Mano",
    shareTweet: "¡Blackjack en Games Clubhouse! Fichas: {chips} ♠️🎲"
  },
  fr: {
    btnStart: "Commencer",
    btnResume: "Reprendre",
    btnRules: "Comment Jouer",
    btnRecords: "Statistiques",
    btnSettings: "⚙️ Réglages",
    btnBackTitle: "‹ Titre",
    shoeLabel: "Sabot",
    dealerLabel: "CROUPIER",
    balanceLabel: "Jetons",
    activeSeatLabel: "Siège",
    currentBetLabel: "Mise 1P",
    tableSlotsTitle: "Configuration des Sièges (Max 4)",
    slotNone: "Aucun",
    slotCpu: "CPU",
    btnClear: "Effacer",
    btnDeal: "Donner",
    btnHit: "Tirer",
    btnStand: "Rester",
    btnDouble: "Doubler",
    refillTitle: "Recharge",
    refillDesc: "Plus de jetons ! Le Casino vous offre +500 jetons.",
    btnGetRefill: "Obtenir 500 Jetons",
    rulesTitle: "📖 Règles du Jeu",
    ruleGoalHead: "Objectif : 21",
    ruleGoalLead: "Approchez 21 sans dépasser le croupier.",
    ruleShowcaseBJ: "Main Ultime : Blackjack",
    payoutBJBadge: "Payé 3:2",
    ruleCountingHead: "Valeur des Cartes",
    valFaceDesc: "Valeur faciale",
    valTenDesc: "Valent 10",
    valAceDesc: "Vaut 1 ou 11",
    ruleActionsHead: "Actions",
    hitSummary: "Tirer une carte supplémentaire",
    hitTip: "Utile loin de 21",
    standSummary: "Garder son total",
    standTip: "Conseillé dès 17",
    doubleSummary: "Doubler la mise, 1 carte",
    doubleTip: "Idéal avec un total de 11",
    ruleDealerHead: "Règles du Croupier",
    flow16: "16 ou moins",
    flowMustHit: "Doit tirer",
    flow17: "17 ou plus",
    flowMustStand: "Doit rester",
    btnGotIt: "Fermer",
    statsTitle: "🏆 Statistiques",
    statPlayed: "Parties",
    statWon: "Victoires",
    statBJs: "Blackjacks",
    statWinRate: "% Victoire",
    badgesHeading: "Succès",
    badgeFirstWin: "Première Victoire",
    badgeFirstWinDesc: "Gagner une première main",
    badgeBJ: "Blackjack Naturel",
    badgeBJDesc: "Obtenir 21 d'entrée",
    badgeHighRoller: "Flambeur",
    badgeHighRollerDesc: "Dépasser 2 500 jetons",
    badgeFiveCard: "5 Cartes Magiques",
    badgeFiveCardDesc: "5 cartes sans sauter",
    settingsTitle: "⚙️ Réglages",
    labelLanguage: "Langue",
    labelSound: "Sons",
    labelHaptics: "Vibrations",
    labelSpeed: "Vitesse",
    speedNormal: "Normale",
    speedFast: "Rapide",
    btnResetData: "Réinitialiser",
    btnCloseSettings: "Fermer",
    confirmTitleBack: "Retour au Titre ?",
    confirmTitleBackMsg: "Votre main actuelle est sauvegardée automatiquement.",
    confirmOverwriteTitle: "Nouvelle Partie ?",
    confirmOverwriteMsg: "La progression sauvegardée sera effacée.\nConfirmer ?",
    confirmResetTitle: "Réinitialiser les données ?",
    confirmResetMsg: "Tous vos jetons et statistiques seront effacés.\nAction irréversible.",
    btnCancel: "Annuler",
    btnConfirm: "OK",
    btnShareX: "Partager sur X",
    btnNextRound: "Donne Suivante",
    shareTweet: "Blackjack sur Games Clubhouse ! Jetons : {chips} ♠️🎲"
  },
  pt: {
    btnStart: "Iniciar Jogo",
    btnResume: "Continuar",
    btnRules: "Como Jogar",
    btnRecords: "Estatísticas",
    btnSettings: "⚙️ Ajustes",
    btnBackTitle: "‹ Título",
    shoeLabel: "Sabot",
    dealerLabel: "DEALER",
    balanceLabel: "Fichas",
    activeSeatLabel: "Turno",
    currentBetLabel: "Aposta 1P",
    tableSlotsTitle: "Configuração dos Assentos (Máx 4)",
    slotNone: "Nenhum",
    slotCpu: "CPU",
    btnClear: "Limpar",
    btnDeal: "Dar Cartas",
    btnHit: "Pedir",
    btnStand: "Parar",
    btnDouble: "Dobrar",
    refillTitle: "Recarga de Fichas",
    refillDesc: "Suas fichas acabaram! O Clube lhe presenteia com +500 fichas.",
    btnGetRefill: "Resgatar 500 Fichas",
    rulesTitle: "📖 Como Jogar",
    ruleGoalHead: "Objetivo: 21",
    ruleGoalLead: "Aproxime-se de 21 sem ultrapassar o dealer.",
    ruleShowcaseBJ: "Melhor Mão: Blackjack",
    payoutBJBadge: "Pago 3:2",
    ruleCountingHead: "Valores das Cartas",
    valFaceDesc: "Valor facial",
    valTenDesc: "Valem 10",
    valAceDesc: "Vale 1 ou 11",
    ruleActionsHead: "Ações",
    hitSummary: "Pedir mais uma carta",
    hitTip: "Ideal quando longe de 21",
    standSummary: "Travar a pontuação",
    standTip: "Recomendado com 17+",
    doubleSummary: "Dobrar aposta e pedir 1",
    doubleTip: "Excelente começando com 11",
    ruleDealerHead: "Regras do Dealer",
    flow16: "16 ou menos",
    flowMustHit: "Deve pedir",
    flow17: "17 ou mais",
    flowMustStand: "Deve parar",
    btnGotIt: "Fechar",
    statsTitle: "🏆 Estatísticas",
    statPlayed: "Partidas",
    statWon: "Vitórias",
    statBJs: "Blackjacks",
    statWinRate: "% Vitória",
    badgesHeading: "Conquistas",
    badgeFirstWin: "Primeira Vitória",
    badgeFirstWinDesc: "Vença a primeira mão",
    badgeBJ: "Blackjack Natural",
    badgeBJDesc: "Faça um Blackjack direto",
    badgeHighRoller: "Apostador Alto",
    badgeHighRollerDesc: "Alcance mais de 2.500 fichas",
    badgeFiveCard: "5 Cartas Charlie",
    badgeFiveCardDesc: "Puxe 5 cartas sem estourar",
    settingsTitle: "⚙️ Configurações",
    labelLanguage: "Idioma",
    labelSound: "Sons",
    labelHaptics: "Vibração",
    labelSpeed: "Velocidade",
    speedNormal: "Normal",
    speedFast: "Rápido",
    btnResetData: "Zerar Dados",
    btnCloseSettings: "Fechar",
    confirmTitleBack: "Voltar ao Início?",
    confirmTitleBackMsg: "Seu jogo atual será salvo automaticamente.",
    confirmOverwriteTitle: "Novo Jogo?",
    confirmOverwriteMsg: "O jogo salvo será sobrescrito.\nContinuar?",
    confirmResetTitle: "Zerar todos os dados?",
    confirmResetMsg: "Todas as estatísticas e fichas serão apagadas.\nNão pode ser desfeito.",
    btnCancel: "Cancelar",
    btnConfirm: "OK",
    btnShareX: "Compartilhar no X",
    btnNextRound: "Próxima Mão",
    shareTweet: "Jogando Blackjack no Games Clubhouse! Fichas: {chips} ♠️🎲"
  }
};

class BlackjackEngine {
  constructor() {
    this.settings = window.storageManager.getSettings();
    this.stats = window.storageManager.getStats();

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
    // 画面
    this.titleScreen = document.getElementById('title-screen');
    this.gameScreen = document.getElementById('game-screen');

    // タイトルボタン
    this.btnResumeGame = document.getElementById('btn-resume-game');
    this.btnStartGame = document.getElementById('btn-start-game');
    this.btnRules = document.getElementById('btn-rules');
    this.btnAchievements = document.getElementById('btn-achievements');
    this.btnSettingsTitle = document.getElementById('btn-settings-title');
    this.titleChipsDisplay = document.getElementById('title-chips-display');

    // 盤面ヘッダー
    this.btnToTitle = document.getElementById('btn-to-title');
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.btnSettingsTable = document.getElementById('btn-settings-table');
    this.shoeCountEl = document.getElementById('shoe-count');
    this.dealerScoreEl = document.getElementById('dealer-score');
    this.dealerCardsEl = document.getElementById('dealer-cards');
    this.tableToast = document.getElementById('table-toast');
    this.toastText = document.getElementById('toast-text');

    // フッター情報
    this.playerChipsEl = document.getElementById('player-chips');
    this.playerBetEl = document.getElementById('player-bet');
    this.activeTurnIndicator = document.getElementById('active-turn-indicator');

    // 操作パネル
    this.chipControls = document.getElementById('chip-controls');
    this.actionControls = document.getElementById('action-controls');
    this.btnClearBet = document.getElementById('btn-clear-bet');
    this.btnDeal = document.getElementById('btn-deal');
    this.btnHit = document.getElementById('btn-hit');
    this.btnStand = document.getElementById('btn-stand');
    this.btnDouble = document.getElementById('btn-double');

    // チップ補給モーダル
    this.modalRefill = document.getElementById('modal-refill');
    this.btnRefillChips = document.getElementById('btn-refill-chips');

    // 設定モーダル
    this.modalSettings = document.getElementById('modal-settings');
    this.btnCloseSettings = document.getElementById('btn-close-settings');
    this.btnSaveSettings = document.getElementById('btn-save-settings');
    this.selectLanguage = document.getElementById('select-language');
    this.toggleSound = document.getElementById('toggle-sound');
    this.toggleVibrate = document.getElementById('toggle-vibrate');
    this.selectSpeed = document.getElementById('select-speed');
    this.btnResetData = document.getElementById('btn-reset-data');

    // あそびかたモーダル
    this.modalRules = document.getElementById('modal-rules');
    this.btnCloseRules = document.getElementById('btn-close-rules');
    this.btnRulesAck = document.getElementById('btn-rules-ack');

    // 実績モーダル
    this.modalAchievements = document.getElementById('modal-achievements');
    this.btnCloseAchievements = document.getElementById('btn-close-achievements');
    this.btnStatsAck = document.getElementById('btn-stats-ack');

    // 汎用確認ダイアログ
    this.modalConfirm = document.getElementById('modal-confirm');
    this.confirmTitle = document.getElementById('confirm-title');
    this.confirmBox = document.getElementById('confirm-box');
    this.confirmMessage = document.getElementById('confirm-message');
    this.btnConfirmCancel = document.getElementById('btn-confirm-cancel');
    this.btnConfirmOk = document.getElementById('btn-confirm-ok');

    // リザルトモーダル
    this.modalRoundResult = document.getElementById('modal-round-result');
    this.resultHeadline = document.getElementById('result-headline');
    this.resultPayoutText = document.getElementById('result-payout-text');
    this.resultSeatsSummary = document.getElementById('result-seats-summary');
    this.btnShareX = document.getElementById('btn-share-x');
    this.btnNextRound = document.getElementById('btn-next-round');

    this.bindEvents();
  }

  bindEvents() {
    // つづきから
    if (this.btnResumeGame) {
      this.btnResumeGame.addEventListener('click', () => {
        this.resumeSavedGame();
      });
    }

    // ゲームスタート
    if (this.btnStartGame) {
      this.btnStartGame.addEventListener('click', () => {
        const saved = window.storageManager.getSavedGameState();
        if (saved) {
          const dict = I18N[this.settings.lang] || I18N.en;
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
    }

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

        const dict = I18N[this.settings.lang] || I18N.en;
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

    // チップベット
    document.querySelectorAll('.casino-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.value, 10);
        this.placePlayerBet(val);
      });
    });

    if (this.btnClearBet) this.btnClearBet.addEventListener('click', () => this.clearPlayerBet());
    if (this.btnDeal) this.btnDeal.addEventListener('click', () => this.startDealRound());

    if (this.btnHit) this.btnHit.addEventListener('click', () => this.activePlayerHit());
    if (this.btnStand) this.btnStand.addEventListener('click', () => this.activePlayerStand());
    if (this.btnDouble) this.btnDouble.addEventListener('click', () => this.activePlayerDouble());

    if (this.btnNextRound) {
      this.btnNextRound.addEventListener('click', () => {
        this.modalRoundResult.classList.add('hidden');
        this.prepareNextRound();
      });
    }

    // チップ補給
    if (this.btnRefillChips) {
      this.btnRefillChips.addEventListener('click', () => {
        this.stats.chips += 500;
        this.seats[0].chips = this.stats.chips;
        window.storageManager.saveStats(this.stats);
        this.updateBalanceUI();
        this.modalRefill.classList.add('hidden');
        this.showToast('+500 Chips Claimed!');
      });
    }

    // タイトルへ戻る
    if (this.btnToTitle) {
      this.btnToTitle.addEventListener('click', () => {
        const dict = I18N[this.settings.lang] || I18N.en;
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
    }

    // 確認モーダルボタン
    if (this.btnConfirmCancel) {
      this.btnConfirmCancel.addEventListener('click', () => {
        this.modalConfirm.classList.add('hidden');
        this.pendingConfirm = null;
      });
    }

    if (this.btnConfirmOk) {
      this.btnConfirmOk.addEventListener('click', () => {
        this.modalConfirm.classList.add('hidden');
        if (this.pendingConfirm) {
          this.pendingConfirm();
          this.pendingConfirm = null;
        }
      });
    }

    // あそびかた
    if (this.btnRules) this.btnRules.addEventListener('click', () => this.modalRules.classList.remove('hidden'));
    if (this.btnCloseRules) this.btnCloseRules.addEventListener('click', () => this.modalRules.classList.add('hidden'));
    if (this.btnRulesAck) this.btnRulesAck.addEventListener('click', () => this.modalRules.classList.add('hidden'));

    // 戦績
    if (this.btnAchievements) {
      this.btnAchievements.addEventListener('click', () => {
        this.updateStatsUI();
        this.modalAchievements.classList.remove('hidden');
      });
    }
    if (this.btnCloseAchievements) this.btnCloseAchievements.addEventListener('click', () => this.modalAchievements.classList.add('hidden'));
    if (this.btnStatsAck) this.btnStatsAck.addEventListener('click', () => this.modalAchievements.classList.add('hidden'));

    // 設定
    if (this.btnSettingsTitle) this.btnSettingsTitle.addEventListener('click', () => this.modalSettings.classList.remove('hidden'));
    if (this.btnSettingsTable) this.btnSettingsTable.addEventListener('click', () => this.modalSettings.classList.remove('hidden'));
    if (this.btnCloseSettings) this.btnCloseSettings.addEventListener('click', () => this.modalSettings.classList.add('hidden'));
    if (this.btnSaveSettings) this.btnSaveSettings.addEventListener('click', () => this.modalSettings.classList.add('hidden'));

    if (this.selectLanguage) {
      this.selectLanguage.addEventListener('change', (e) => {
        this.settings.lang = e.target.value;
        window.storageManager.saveSettings(this.settings);
        this.applyLanguage(this.settings.lang);
      });
    }

    if (this.toggleSound) {
      this.toggleSound.addEventListener('change', (e) => {
        this.settings.sound = e.target.checked;
        window.soundSystem.setEnabled(this.settings.sound);
        if (this.btnSoundToggle) this.btnSoundToggle.textContent = this.settings.sound ? '🔊' : '🔇';
        window.storageManager.saveSettings(this.settings);
      });
    }

    if (this.btnSoundToggle) {
      this.btnSoundToggle.addEventListener('click', () => {
        this.settings.sound = !this.settings.sound;
        if (this.toggleSound) this.toggleSound.checked = this.settings.sound;
        window.soundSystem.setEnabled(this.settings.sound);
        this.btnSoundToggle.textContent = this.settings.sound ? '🔊' : '🔇';
        window.storageManager.saveSettings(this.settings);
      });
    }

    if (this.selectSpeed) {
      this.selectSpeed.addEventListener('change', (e) => {
        this.settings.speed = parseFloat(e.target.value);
        document.documentElement.style.setProperty('--speed-factor', this.settings.speed);
        window.storageManager.saveSettings(this.settings);
      });
    }

    // データ初期化
    if (this.btnResetData) {
      this.btnResetData.addEventListener('click', () => {
        const dict = I18N[this.settings.lang] || I18N.en;
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
          this.showToast('Data Reset Complete');
        };
        this.modalConfirm.classList.remove('hidden');
      });
    }

    if (this.btnShareX) {
      this.btnShareX.addEventListener('click', () => {
        const dict = I18N[this.settings.lang] || I18N.en;
        const text = dict.shareTweet.replace('{chips}', this.stats.chips.toLocaleString());
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
      });
    }
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
    if (saved && this.btnResumeGame) {
      this.btnResumeGame.classList.remove('hidden');
    } else if (this.btnResumeGame) {
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
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });
    if (this.selectLanguage) this.selectLanguage.value = lang;

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

    if (this.btnConfirmCancel) this.btnConfirmCancel.textContent = dict.btnCancel;
    if (this.btnConfirmOk) this.btnConfirmOk.textContent = dict.btnConfirm;
  }

  applySettings() {
    if (this.selectLanguage) this.selectLanguage.value = this.settings.lang;
    if (this.toggleSound) this.toggleSound.checked = this.settings.sound;
    if (this.toggleVibrate) this.toggleVibrate.checked = this.settings.vibrate;
    if (this.selectSpeed) this.selectSpeed.value = this.settings.speed.toString();
    document.documentElement.style.setProperty('--speed-factor', this.settings.speed);
    window.soundSystem.setEnabled(this.settings.sound);
  }

  checkBankrollRefill() {
    if (this.stats.chips <= 0 && this.seats[0].bet === 0 && this.modalRefill) {
      this.modalRefill.classList.remove('hidden');
    }
  }

  showToast(text, duration = 1200) {
    if (!this.toastText || !this.tableToast) return;
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
    if (this.shoeCountEl) this.shoeCountEl.textContent = this.deck.length;
  }

  drawCard() {
    if (this.deck.length < 24) this.initShoe();
    const c = this.deck.pop();
    if (this.shoeCountEl) this.shoeCountEl.textContent = this.deck.length;
    return c;
  }

  placePlayerBet(val) {
    if (this.gameState !== 'betting') return;
    if (this.stats.chips < val) {
      this.showToast(this.settings.lang === 'ja' ? 'チップが不足しています' : 'Not enough chips');
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
    if (this.titleChipsDisplay) this.titleChipsDisplay.textContent = this.stats.chips.toLocaleString();
    if (this.playerChipsEl) this.playerChipsEl.textContent = this.stats.chips.toLocaleString();
    if (this.playerBetEl) this.playerBetEl.textContent = this.seats[0].bet.toLocaleString();

    for (let i = 1; i < 4; i++) {
      const s = this.seats[i];
      if (s.type === 'cpu') {
        s.bet = Math.min(50, s.chips);
      } else if (s.type === 'human') {
        if (s.bet === 0) s.bet = Math.min(50, s.chips);
      } else {
        s.bet = 0;
      }
    }

    for (let i = 0; i < 4; i++) {
      const s = this.seats[i];
      const sEl = document.getElementById(`seat-${i}`);
      if (!sEl) continue;
      
      let chipsPill = sEl.querySelector('.seat-chips-pill');
      if (!chipsPill) {
        chipsPill = document.createElement('div');
        chipsPill.className = 'seat-chips-pill';
        sEl.insertBefore(chipsPill, sEl.querySelector('.seat-cards'));
      }
      chipsPill.textContent = s.type !== 'none' ? `🪙${s.chips.toLocaleString()}` : '';

      const betVal = sEl.querySelector('.seat-bet-val');
      if (betVal) betVal.textContent = s.bet.toLocaleString();
      sEl.classList.toggle('is-empty', s.type === 'none');
    }

    if (this.btnDeal) {
      this.btnDeal.classList.toggle('disabled', this.seats[0].bet <= 0);
    }
  }

  async startDealRound() {
    if (this.seats[0].bet <= 0) return;
    this.gameState = 'playing';

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
      if (!sEl) continue;
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
    if (!this.dealerCardsEl) return;
    this.dealerCardsEl.innerHTML = '';
    const sc = this.calculateHand(this.dealerHand, this.dealerHoleCardHidden);
    if (this.dealerScoreEl) this.dealerScoreEl.textContent = this.dealerHoleCardHidden ? '?' : sc.best;

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
    if (this.activeTurnIndicator) this.activeTurnIndicator.textContent = cur.name;
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
    if (this.activeTurnIndicator) this.activeTurnIndicator.textContent = 'DEALER';

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
      let outcome = 'lose';

      if (pScore.isBust) outcome = 'lose';
      else if (dScore.isBust) outcome = 'win';
      else if (pScore.best > dScore.best) outcome = 'win';
      else if (pScore.best < dScore.best) outcome = 'lose';
      else outcome = 'push';

      let seatGain = 0;

      if (pScore.isBJ && outcome === 'win') {
        const payout = Math.floor(s.bet * 2.5);
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

      if (s.chips <= 0) {
        s.chips += 500;
        if (i === 0) {
          this.stats.chips = s.chips;
        }
        this.showToast(this.settings.lang === 'ja' ? `${s.name} に500チップ補充！` : `${s.name} refilled +500 chips!`, 1600);
      }

      const div = document.createElement('div');
      div.className = `res-seat-box ${outcome}`;
      const sign = seatGain >= 0 ? '+' : '';
      div.innerHTML = `<strong>${s.name}</strong>: ${pScore.best} (${outcome.toUpperCase()})<br><small>${sign}${seatGain} (${this.settings.lang === 'ja' ? '残' : 'Bal'}: ${s.chips})</small>`;
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
    if (this.activeTurnIndicator) this.activeTurnIndicator.textContent = 'BETTING';

    this.updateBalanceUI();
    this.checkBankrollRefill();
    this.saveCurrentGame();
  }

  updateStatsUI() {
    const elPlayed = document.getElementById('stat-games-played');
    const elWon = document.getElementById('stat-games-won');
    const elBJs = document.getElementById('stat-bj-count');
    const elRate = document.getElementById('stat-win-rate');

    if (elPlayed) elPlayed.textContent = this.stats.gamesPlayed;
    if (elWon) elWon.textContent = this.stats.gamesWon;
    if (elBJs) elBJs.textContent = this.stats.blackjackCount;

    const rate = this.stats.gamesPlayed > 0 ? Math.round((this.stats.gamesWon / this.stats.gamesPlayed) * 100) : 0;
    if (elRate) elRate.textContent = `${rate}%`;

    const dict = I18N[this.settings.lang] || I18N.en;
    const badgeContainer = document.getElementById('achievements-list');
    if (!badgeContainer) return;
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
