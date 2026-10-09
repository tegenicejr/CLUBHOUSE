/**
 * Games Clubhouse: Blackjack Game Engine (Multi-language & Settings Wording Aligned)
 */

const I18N = {
  ja: {
    gameTitle: "ブラックジャック",
    gameSubtitle: "カジノクラブ・エディション",
    btnStart: "ゲームスタート",
    btnRules: "あそびかた",
    btnRecords: "戦績・役",
    btnSettings: "⚙️ 設定",
    btnBackTitle: "‹ タイトルへ",
    shoeLabel: "シュー残",
    dealerLabel: "ディーラー",
    balanceLabel: "所持チップ",
    activeSeatLabel: "ターン席",
    currentBetLabel: "1P ベット額",
    tableSlotsTitle: "参加プレイヤー設定（最大4席）",
    slotYou: "あなた",
    slotNone: "なし",
    slotCpu: "CPU",
    slotHuman: "人(交代)",
    btnClear: "クリア",
    btnDeal: "ディール (Deal)",
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
    rule1Head: "1. 基本ルール & 対局人数",
    rule1Text: "1人プレイから最大4人席まで対応。各席とディーラーが1対1の勝負を行い、手札の合計値を21に最も近づけた方が勝ちとなります。",
    ruleDiceHead: "2. 開始ダイスの役割",
    ruleDiceText: "ゲーム開始時のサイコロは、テーブルの起家（カード配布・手番開始の基準席）を決定するカジノの伝統儀式です。",
    rule3Head: "3. アクション",
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
    settingsTitle: "⚙️ 設定",
    labelLanguage: "言語",
    labelSound: "効果音",
    labelHaptics: "振動",
    labelSpeed: "アニメーション速度",
    speedNormal: "通常",
    speedFast: "高速",
    btnResetData: "戦績・データ初期化",
    btnCloseSettings: "閉じる",
    confirmResetTitle: "データを初期化しますか？",
    confirmResetMsg: "戦績や進行状況がすべて消去されます。\n元には戻せません。",
    btnConfirmResetAction: "初期化する",
    btnConfirm: "OK",
    btnCancel: "キャンセル",
    btnShareX: "Xで戦績を共有",
    btnNextRound: "次のディールへ",
    confirmTitleBack: "タイトルへ戻る",
    confirmTitleBackMsg: "進行中のゲームを終了してタイトルへ戻りますか？",
    shareTweet: "Games Clubhouseでブラックジャックをプレイ中！所持チップ: {chips}枚 ♠️🎲"
  },
  en: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "Casino Club Edition",
    btnStart: "Start Game",
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
    slotYou: "You",
    slotNone: "None",
    slotCpu: "CPU",
    slotHuman: "Human",
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
    rule1Head: "1. Basic Rules & Seats",
    rule1Text: "Play solo or with up to 4 seats against the dealer. Nearest to 21 wins.",
    ruleDiceHead: "2. Purpose of the Starting Die",
    ruleDiceText: "The die roll determines the Head Seat (who starts the deal/actions).",
    rule3Head: "3. Player Actions",
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
    settingsTitle: "⚙️ Settings",
    labelLanguage: "Language",
    labelSound: "Sound",
    labelHaptics: "Vibration",
    labelSpeed: "Animation Speed",
    speedNormal: "Normal",
    speedFast: "Fast",
    btnResetData: "Reset All Data",
    btnCloseSettings: "Close",
    confirmResetTitle: "Reset all data?",
    confirmResetMsg: "All records, chips, and progress will be permanently erased.\nThis action cannot be undone.",
    btnConfirmResetAction: "Reset",
    btnConfirm: "Confirm",
    btnCancel: "Cancel",
    btnShareX: "Share on X",
    btnNextRound: "Next Deal",
    confirmTitleBack: "Return to Title?",
    confirmTitleBackMsg: "Exit current table and return to title?",
    shareTweet: "Playing Blackjack on Games Clubhouse! Chips: {chips} ♠️🎲"
  },
  "zh-CN": {
    gameTitle: "二十一点",
    gameSubtitle: "豪华赌场俱乐部版",
    btnStart: "开始游戏",
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
    slotYou: "您",
    slotNone: "空缺",
    slotCpu: "CPU",
    slotHuman: "真人",
    btnClear: "清除",
    btnDeal: "发牌",
    btnHit: "要牌",
    btnStand: "停牌",
    btnDouble: "双倍",
    seqStep1Title: "起家掷骰",
    seqStep1Desc: "投掷骰子以决定首位发牌顺序的起家席位。",
    btnRollDice: "掷骰子",
    seqRolling: "掷骰中...",
    seqResultFmt: "点数是【{val}】！{seat}P 成为起家席。",
    seqStep3Desc: "席位确定，请入座牌桌。",
    btnStartMatch: "开始对局",
    refillTitle: "筹码补给",
    refillDesc: "筹码不足，俱乐部为您补给 500 筹码。",
    btnGetRefill: "领取 500 筹码",
    rulesTitle: "📖 规则说明",
    rule1Head: "1. 规则与人数",
    rule1Text: "支持单人至4人对局。与庄家比拼，点数最接近21点者胜。",
    ruleDiceHead: "2. 起家骰子的作用",
    ruleDiceText: "决定谁是先手行动的起家席位。",
    rule3Head: "3. 玩家操作",
    btnGotIt: "明白",
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
    labelSound: "声音",
    labelHaptics: "震动",
    labelSpeed: "动画速度",
    speedNormal: "正常",
    speedFast: "快速",
    btnResetData: "重置所有数据",
    btnCloseSettings: "关闭",
    confirmResetTitle: "确定要重置数据吗？",
    confirmResetMsg: "所有战绩与进度将被清除。\n此操作无法撤销。",
    btnConfirmResetAction: "重置",
    btnConfirm: "确认",
    btnCancel: "取消",
    btnShareX: "在X上分享",
    btnNextRound: "下一局",
    confirmTitleBack: "返回主界面",
    confirmTitleBackMsg: "确定要退出当前对局并返回标题界面吗？",
    shareTweet: "在 Games Clubhouse 畅玩 21 点！筹码：{chips} ♠️🎲"
  },
  "zh-TW": {
    gameTitle: "二十一點",
    gameSubtitle: "奢華俱樂部版",
    btnStart: "開始遊戲",
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
    slotYou: "您",
    slotNone: "無",
    slotCpu: "CPU",
    slotHuman: "真人",
    btnClear: "清除",
    btnDeal: "發牌",
    btnHit: "要牌",
    btnStand: "停牌",
    btnDouble: "雙倍",
    seqStep1Title: "起家擲骰",
    seqStep1Desc: "擲骰決定起手發牌的起家席位。",
    btnRollDice: "擲骰子",
    seqRolling: "擲骰中...",
    seqResultFmt: "點數為【{val}】！{seat}P 為起家席。",
    seqStep3Desc: "席位已確定，請就座開局。",
    btnStartMatch: "入座開局",
    refillTitle: "補充籌碼",
    refillDesc: "籌碼耗盡，為您補發 500 籌碼。",
    btnGetRefill: "領取 500 籌碼",
    rulesTitle: "📖 遊戲規則",
    rule1Head: "1. 規則與人數",
    rule1Text: "支援單人或最多4人同桌。最接近21點且不爆牌者勝。",
    ruleDiceHead: "2. 擲骰意義",
    ruleDiceText: "決定最先行動的起家席位。",
    rule3Head: "3. 玩家動作",
    btnGotIt: "了解",
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
    confirmResetTitle: "確定要重設數據嗎？",
    confirmResetMsg: "所有戰績與紀錄將被完全清除。\n無法恢復。",
    btnConfirmResetAction: "重設",
    btnConfirm: "確認",
    btnCancel: "取消",
    btnShareX: "在X分享",
    btnNextRound: "下一局",
    confirmTitleBack: "返回標題",
    confirmTitleBackMsg: "確定離開目前遊戲？",
    shareTweet: "在 Games Clubhouse 暢玩二十一點！籌碼: {chips} ♠️🎲"
  },
  ko: {
    gameTitle: "블랙잭",
    gameSubtitle: "카지노 클럽 에디션",
    btnStart: "게임 시작",
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
    slotYou: "나",
    slotNone: "없음",
    slotCpu: "CPU",
    slotHuman: "사람",
    btnClear: "클리어",
    btnDeal: "딜",
    btnHit: "히트",
    btnStand: "스탠드",
    btnDouble: "더블",
    seqStep1Title: "선수 결정 다이스",
    seqStep1Desc: "주사위를 굴려 시작 좌석을 결정합니다.",
    btnRollDice: "주사위 굴리기",
    seqRolling: "굴리는 중...",
    seqResultFmt: "눈금은 【{val}】! {seat}P가 시작석입니다.",
    seqStep3Desc: "순서가 결정되었습니다. 착석하세요.",
    btnStartMatch: "착석 및 시작",
    refillTitle: "칩 충전",
    refillDesc: "칩이 소진되었습니다. 500 칩을 충전해 드립니다.",
    btnGetRefill: "+500 칩 받기",
    rulesTitle: "📖 게임 방법",
    rule1Head: "1. 기본 규칙",
    rule1Text: "1인에서 최대 4인까지 딜러와 대결합니다. 21에 가장 가까운 쪽이 승리합니다.",
    ruleDiceHead: "2. 주사위 역할",
    ruleDiceText: "턴의 기준 좌석을 정합니다.",
    rule3Head: "3. 액션",
    btnGotIt: "확인",
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
    confirmResetTitle: "데이터를 초기화하시겠습니까?",
    confirmResetMsg: "전적과 진행 상황이 모두 삭제됩니다.\n되돌릴 수 없습니다.",
    btnConfirmResetAction: "초기화하기",
    btnConfirm: "확인",
    btnCancel: "취소",
    btnShareX: "X에 공유",
    btnNextRound: "다음 딜",
    confirmTitleBack: "타이틀로 이동",
    confirmTitleBackMsg: "게임을 종료하고 타이틀로 돌아가시겠습니까?",
    shareTweet: "Games Clubhouse에서 블랙잭 플레이 중! 칩: {chips} ♠️🎲"
  },
  es: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "Edición Casino Club",
    btnStart: "Iniciar Juego",
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
    slotYou: "Tú",
    slotNone: "Ninguno",
    slotCpu: "CPU",
    slotHuman: "Humano",
    btnClear: "Borrar",
    btnDeal: "Repartir",
    btnHit: "Pedir",
    btnStand: "Plantarse",
    btnDouble: "Doblar",
    seqStep1Title: "Corte del Asiento",
    seqStep1Desc: "Tire el dado para determinar el asiento inicial.",
    btnRollDice: "Tirar Dado",
    seqRolling: "Tirando...",
    seqResultFmt: "¡Ha salido un {val}! Inicia el asiento {seat}P.",
    seqStep3Desc: "Asientos listos. Tome asiento.",
    btnStartMatch: "Comenzar",
    refillTitle: "Recarga de Fichas",
    refillDesc: "¡Sin fichas! El Casino le otorga +500 fichas.",
    btnGetRefill: "Reclamar 500 Fichas",
    rulesTitle: "📖 Reglas de Juego",
    rule1Head: "1. Reglas",
    rule1Text: "Juegue en solitario o con hasta 4 asientos. Quien más se acerque a 21 gana.",
    ruleDiceHead: "2. Función del Dado",
    ruleDiceText: "Determina qué asiento comienza las acciones.",
    rule3Head: "3. Acciones",
    btnGotIt: "Entendido",
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
    labelSpeed: "Velocidad de animación",
    speedNormal: "Normal",
    speedFast: "Rápido",
    btnResetData: "Reiniciar Datos",
    btnCloseSettings: "Cerrar",
    confirmResetTitle: "¿Reiniciar datos?",
    confirmResetMsg: "Se borrarán todas las estadísticas y fichas.\nNo se puede deshacer.",
    btnConfirmResetAction: "Reiniciar",
    btnConfirm: "Confirmar",
    btnCancel: "Cancelar",
    btnShareX: "Compartir en X",
    btnNextRound: "Siguiente Mano",
    confirmTitleBack: "¿Volver al Inicio?",
    confirmTitleBackMsg: "¿Desea salir de la mesa?",
    shareTweet: "¡Blackjack en Games Clubhouse! Fichas: {chips} ♠️🎲"
  },
  fr: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "Édition Casino Club",
    btnStart: "Commencer",
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
    slotYou: "Vous",
    slotNone: "Aucun",
    slotCpu: "CPU",
    slotHuman: "Humain",
    btnClear: "Effacer",
    btnDeal: "Donner",
    btnHit: "Tirer",
    btnStand: "Rester",
    btnDouble: "Doubler",
    seqStep1Title: "Tirage du Siège",
    seqStep1Desc: "Lancez le dé pour déterminer le premier siège à jouer.",
    btnRollDice: "Lancer le Dé",
    seqRolling: "Lancer en cours...",
    seqResultFmt: "Résultat : {val} ! Le siège {seat}P commence.",
    seqStep3Desc: "Prêt. Prenez place à la table.",
    btnStartMatch: "Commencer",
    refillTitle: "Recharge",
    refillDesc: "Plus de jetons ! Le Casino vous offre +500 jetons.",
    btnGetRefill: "Obtenir 500 Jetons",
    rulesTitle: "📖 Règles du Jeu",
    rule1Head: "1. But du Jeu",
    rule1Text: "Jouez en solo ou jusqu'à 4 joueurs. Approchez 21 sans le dépasser.",
    ruleDiceHead: "2. Rôle du Dé",
    ruleDiceText: "Détermine qui commence le tour.",
    rule3Head: "3. Actions",
    btnGotIt: "Compris",
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
    labelSpeed: "Vitesse d'animation",
    speedNormal: "Normale",
    speedFast: "Rapide",
    btnResetData: "Réinitialiser",
    btnCloseSettings: "Fermer",
    confirmResetTitle: "Réinitialiser les données ?",
    confirmResetMsg: "Tous vos jetons et statistiques seront définitivement effacés.\nCette action est irréversible.",
    btnConfirmResetAction: "Réinitialiser",
    btnConfirm: "Confirmer",
    btnCancel: "Annuler",
    btnShareX: "Partager sur X",
    btnNextRound: "Donne Suivante",
    confirmTitleBack: "Retour au Titre ?",
    confirmTitleBackMsg: "Quitter la table en cours ?",
    shareTweet: "Blackjack sur Games Clubhouse ! Jetons : {chips} ♠️🎲"
  },
  pt: {
    gameTitle: "BLACKJACK",
    gameSubtitle: "Edição Casino Club",
    btnStart: "Iniciar Jogo",
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
    slotYou: "Você",
    slotNone: "Nenhum",
    slotCpu: "CPU",
    slotHuman: "Humano",
    btnClear: "Limpar",
    btnDeal: "Dar Cartas",
    btnHit: "Pedir",
    btnStand: "Parar",
    btnDouble: "Dobrar",
    seqStep1Title: "Corte do Primeiro Assento",
    seqStep1Desc: "Lance o dado para definir o primeiro assento a jogar.",
    btnRollDice: "Rolar Dado",
    seqRolling: "Rolando...",
    seqResultFmt: "Tirou 【{val}】! Assento {seat}P começa.",
    seqStep3Desc: "Ordem definida. Sente-se à mesa.",
    btnStartMatch: "Entrar na Mesa",
    refillTitle: "Recarga de Fichas",
    refillDesc: "Suas fichas acabaram! O Clube lhe presenteia com +500 fichas.",
    btnGetRefill: "Resgatar 500 Fichas",
    rulesTitle: "📖 Como Jogar",
    rule1Head: "1. Regras Básicas",
    rule1Text: "Jogue sozinho ou com até 4 lugares. Aproxime-se de 21 sem estourar.",
    ruleDiceHead: "2. Função do Dado",
    ruleDiceText: "Define o primeiro assento a iniciar a rodada.",
    rule3Head: "3. Ações",
    btnGotIt: "Entendido",
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
    settingsTitle: "⚙️ Ajustes",
    labelLanguage: "Idioma",
    labelSound: "Efeitos Sonoros",
    labelHaptics: "Vibração",
    labelSpeed: "Velocidade",
    speedNormal: "Normal",
    speedFast: "Rápido",
    btnResetData: "Zerar Dados",
    btnCloseSettings: "Fechar",
    confirmResetTitle: "Zerar todos os dados?",
    confirmResetMsg: "Todas as estatísticas e fichas serão apagadas.\nNão pode ser desfeito.",
    btnConfirmResetAction: "Zerar",
    btnConfirm: "Confirmar",
    btnCancel: "Cancelar",
    btnShareX: "Compartilhar no X",
    btnNextRound: "Próxima Mão",
    confirmTitleBack: "Voltar ao Início?",
    confirmTitleBackMsg: "Deseja sair da mesa atual?",
    shareTweet: "Jogando Blackjack no Games Clubhouse! Fichas: {chips} ♠️🎲"
  }
};

class BlackjackEngine {
  constructor() {
    this.settings = window.storageManager.getSettings();
    this.stats = window.storageManager.getStats();

    // 1P single-player default
    this.seats = [
      { id: 0, type: 'human', name: '1P', hand: [], bet: 0, status: 'betting' },
      { id: 1, type: 'none',  name: '2P', hand: [], bet: 0, status: 'idle' },
      { id: 2, type: 'none',  name: '3P', hand: [], bet: 0, status: 'idle' },
      { id: 3, type: 'none',  name: '4P', hand: [], bet: 0, status: 'idle' }
    ];

    this.dealerHand = [];
    this.dealerHoleCardHidden = true;
    this.deck = [];
    this.currentSeatTurn = 0;
    this.gameState = 'betting';
    this.pendingConfirm = null;

    this.initDOM();
    this.applySettings();
    this.applyLanguage(this.settings.lang);
    this.checkBankrollRefill();
  }

  initDOM() {
    this.titleScreen = document.getElementById('title-screen');
    this.gameScreen = document.getElementById('game-screen');
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

    // Seat Cycle: none -> cpu -> human -> none
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
        } else if (nextType === 'cpu') {
          e.target.classList.add('state-cpu');
          e.target.textContent = dict.slotCpu;
        } else {
          e.target.classList.add('state-human');
          e.target.textContent = dict.slotHuman;
        }
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

    // Refill
    this.btnRefillChips.addEventListener('click', () => {
      this.stats.chips += 500;
      window.storageManager.saveStats(this.stats);
      this.updateBalanceUI();
      this.modalRefill.classList.add('hidden');
      this.showToast('+500 Chips Claimed!');
    });

    // Back to Title
    this.btnToTitle.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.ja;
      this.confirmTitle.textContent = dict.confirmTitleBack;
      this.confirmMessage.textContent = dict.confirmTitleBackMsg;
      this.btnConfirmOk.textContent = dict.btnConfirm;
      this.pendingConfirm = () => {
        this.gameScreen.classList.remove('active');
        this.titleScreen.classList.add('active');
      };
      this.modalConfirm.classList.remove('hidden');
    });

    this.btnConfirmCancel.addEventListener('click', () => this.modalConfirm.classList.add('hidden'));
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

    // Reset Data with user-specified Japanese confirmation
    this.btnResetData.addEventListener('click', () => {
      const dict = I18N[this.settings.lang] || I18N.ja;
      this.confirmTitle.textContent = dict.confirmResetTitle;
      this.confirmMessage.textContent = dict.confirmResetMsg;
      this.btnConfirmOk.textContent = dict.btnConfirmResetAction;

      this.pendingConfirm = () => {
        window.storageManager.resetAllData();
        this.stats = window.storageManager.getStats();
        this.updateBalanceUI();
        this.updateStatsUI();
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

  applyLanguage(lang) {
    const dict = I18N[lang] || I18N.ja;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });
    this.selectLanguage.value = lang;

    // Slot toggle texts
    document.querySelectorAll('.slot-type-btn').forEach(btn => {
      const type = btn.dataset.type;
      if (type === 'human' && btn.dataset.seat === '0') btn.textContent = dict.slotYou;
      else if (type === 'none') btn.textContent = dict.slotNone;
      else if (type === 'cpu') btn.textContent = dict.slotCpu;
      else if (type === 'human') btn.textContent = dict.slotHuman;
    });
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

  rollStartingSeatDice() {
    this.seqStep1.classList.add('hidden');
    this.seqStep2.classList.remove('hidden');
    window.soundSystem.playDiceRoll();

    const activeSeatIndices = this.seats.filter(s => s.type !== 'none').map(s => s.id);

    setTimeout(() => {
      const chosenSeat = activeSeatIndices[Math.floor(Math.random() * activeSeatIndices.length)];
      const rollVal = chosenSeat + 1;

      this.renderDice(this.resultDice, rollVal);
      const dict = I18N[this.settings.lang] || I18N.ja;
      this.seqResultMessage.textContent = dict.seqResultFmt.replace('{val}', rollVal).replace('{seat}', rollVal);
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

    for (let i = 1; i < 4; i++) {
      if (this.seats[i].type === 'cpu') this.seats[i].bet = 50;
      else if (this.seats[i].type === 'human' && this.seats[i].bet === 0) this.seats[i].bet = 50;
      else if (this.seats[i].type === 'none') this.seats[i].bet = 0;
    }

    for (let i = 0; i < 4; i++) {
      const s = this.seats[i];
      const sEl = document.getElementById(`seat-${i}`);
      sEl.querySelector('.seat-bet-val').textContent = s.bet;
      sEl.classList.toggle('is-empty', s.type === 'none');
    }

    this.btnDeal.classList.toggle('disabled', this.seats[0].bet <= 0);
  }

  async startDealRound() {
    if (this.seats[0].bet <= 0) return;
    this.gameState = 'playing';

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
        if (this.seats[i].type !== 'none') {
          await this.dealCardToSeat(i);
        }
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
    while (this.currentSeatTurn < 4 && this.seats[this.currentSeatTurn].type === 'none') {
      this.currentSeatTurn++;
    }

    if (this.currentSeatTurn >= 4) {
      this.runDealerPhase();
      return;
    }

    const cur = this.seats[this.currentSeatTurn];
    this.activeTurnIndicator.textContent = `${cur.name} (${cur.type.toUpperCase()})`;
    this.renderSeats();

    if (this.calculateHand(cur.hand).isBJ) {
      this.currentSeatTurn++;
      this.advanceTurn();
      return;
    }

    if (cur.type === 'human') {
      this.actionControls.classList.remove('hidden');
      this.btnDouble.classList.toggle('disabled', cur.hand.length !== 2 || this.stats.chips < cur.bet);
    } else {
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
      if (s.type === 'none') continue;

      const pScore = this.calculateHand(s.hand);
      let outcome = 'lose';

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

    for (let i = 0; i < 4; i++) {
      this.seats[i].hand = [];
      this.seats[i].status = this.seats[i].type === 'none' ? 'idle' : 'betting';
      if (i > 0 && this.seats[i].type === 'cpu') this.seats[i].bet = 50;
      else if (this.seats[i].type === 'none') this.seats[i].bet = 0;
    }

    this.seats[0].bet = 0;
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
  window.blackjackGame = new BlackjackEngine();
});
