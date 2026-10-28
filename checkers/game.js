/**
 * Games Clubhouse - Checkers Engine & Application Coordinator
 * Exact 3D Single Dice Drop Engine Implementation + Robust State Transition
 */

// ============================================================================
// 1. I18N Dictionaries (8 Languages)
// ============================================================================
const I18N = {
  en: {
    back_to_clubhouse: "CLUB HOUSE",
    subtitle_desc: "CLASSIC DRAUGHTS 8×8",
    label_mode: "MODE",
    mode_cpu: "vs CPU",
    mode_pass: "2P Pass&Play",
    label_difficulty: "DIFFICULTY",
    diff_easy: "Easy",
    diff_normal: "Normal",
    diff_hard: "Hard",
    btn_resume: "RESUME MATCH",
    btn_start_match: "START MATCH",
    btn_rules: "How to Play",
    btn_stats: "Stats & Records",
    btn_settings: "⚙️ Settings",
    nav_title: "Title",
    tag_thinking: "Thinking...",
    hud_captured: "Captured",
    your_turn: "Your Turn",
    opponent_turn: "Opponent Turn",
    turn_player1: "Player 1's Turn",
    turn_player2: "Player 2's Turn",
    must_jump_warning: "A jump is mandatory!",
    btn_undo: "Undo",
    btn_resign: "Resign",
    curtain_desc: "Please pass the device. Tap anywhere when you are ready to play.",
    curtain_ready: "I'm Ready",
    seq_title: "Determining First Player",
    seq_rule_desc: "In Checkers, Red pieces move first. Roll the dice to decide who plays first!",
    badge_you: "You",
    badge_cpu: "CPU",
    badge_p1: "Player 1",
    badge_p2: "Player 2",
    seq_btn_roll: "Roll the Dice",
    seq_tie_text: "A tie! Rolling again...",
    seq_win_you: "You rolled higher! You move first (Red).",
    seq_win_opp: "Opponent rolled higher! They move first.",
    seq_btn_play: "Start Match",
    rules_modal_title: "How to Play Checkers",
    rule1_title: "1. Diagonal Forward Movement",
    rule1_desc: "Pieces move diagonally forward across dark squares, one tile at a time.",
    rule2_title: "2. Mandatory Jump Capture",
    rule2_desc: "Jump over an adjacent opposing piece to capture it. When available, jumps are mandatory!",
    rule3_title: "3. Multi-Jump Streaks",
    rule3_desc: "If another jump is immediately open after capturing, you must continue hopping.",
    rule4_title: "4. Crowning into a King",
    rule4_desc: "Reaching the far back row crowns your piece, allowing it to move and capture backward!",
    stats_modal_title: "Records & Achievements",
    stat_played: "Matches",
    stat_won: "Victories",
    stat_rate: "Win Rate",
    stat_combo: "Max Hop Combo",
    header_achievements: "Achievements",
    achieve_first_win: "First Blood",
    achieve_first_win_desc: "Win your very first checkers match.",
    achieve_crown: "Crown Jewel",
    achieve_crown_desc: "Crown 3 or more pieces in a single match.",
    achieve_triple: "Triple Strike",
    achieve_triple_desc: "Execute a 3-jump combo in a single turn.",
    achieve_gm: "Grandmaster",
    achieve_gm_desc: "Defeat the Hard CPU without losing more than 3 pieces.",
    settings_modal_title: "⚙️ Settings",
    setting_lang_label: "Language",
    setting_sound_label: "Sound Effects",
    setting_vibrate_label: "Haptics",
    setting_speed_label: "Animation Speed",
    speed_normal: "Normal",
    speed_fast: "Fast",
    btn_reset_data: "Reset Statistics & Records",
    confirm_title: "Confirm Action",
    confirm_resign: "Are you sure you want to resign this match?",
    confirm_reset: "Reset all saved statistics and records? This cannot be undone.",
    btn_cancel: "Cancel",
    btn_confirm: "OK",
    victory_title: "Victory!",
    defeat_title: "Defeat",
    p1_win_title: "Player 1 Wins!",
    p2_win_title: "Player 2 Wins!",
    victory_reason_wipe: "All opposing pieces captured.",
    victory_reason_trapped: "The opponent has no legal moves left.",
    btn_share_x: "Share on X",
    btn_play_again: "Play Again",
    btn_back_menu: "Return to Menu"
  },
  ja: {
    back_to_clubhouse: "CLUB HOUSE",
    subtitle_desc: "クラシック チェッカーズ 8×8",
    label_mode: "対戦形式",
    mode_cpu: "vs CPU",
    mode_pass: "2P 対面対戦",
    label_difficulty: "難易度",
    diff_easy: "初級",
    diff_normal: "中級",
    diff_hard: "上級",
    btn_resume: "つづきから再開",
    btn_start_match: "対局を開始する",
    btn_rules: "あそびかた",
    btn_stats: "戦績・実績",
    btn_settings: "⚙️ 設定",
    nav_title: "タイトル",
    tag_thinking: "考え中...",
    hud_captured: "獲得数",
    your_turn: "あなた手番",
    opponent_turn: "相手手番",
    turn_player1: "プレイヤー1の手番",
    turn_player2: "プレイヤー2の手番",
    must_jump_warning: "ジャンプ捕獲が義務付けられています！",
    btn_undo: "待った",
    btn_resign: "投了",
    curtain_desc: "相手に端末を渡してください。準備ができたらタップしてください。",
    curtain_ready: "準備完了",
    seq_title: "先手・後手決定",
    seq_rule_desc: "チェッカーズは【赤駒】が先手です。サイコロを振って出目の大きい方が先手となります！",
    badge_you: "あなた",
    badge_cpu: "CPU",
    badge_p1: "1P",
    badge_p2: "2P",
    seq_btn_roll: "サイコロを振る",
    seq_tie_text: "同点です！もう一度振ります...",
    seq_win_you: "あなたの勝ち！先手（赤駒）に決定しました。",
    seq_win_opp: "相手の勝ち！後手（黒駒）に決定しました。",
    seq_btn_play: "対局を開始する",
    rules_modal_title: "あそびかた（図解）",
    rule1_title: "1. 斜め前方への移動",
    rule1_desc: "駒は濃い色のマスだけを斜め前方に1マス進めます。",
    rule2_title: "2. 駒の捕獲（強制ジャンプ）",
    rule2_desc: "相手駒の奥が空いていれば飛び越えて取れます。取れる駒がある時はジャンプが義務です！",
    rule3_title: "3. 連続ジャンプ（連鎖）",
    rule3_desc: "飛び越えた後にさらに取れる駒がある場合、同一ターン内で連続して取り続けます。",
    rule4_title: "4. キング化と後退移動",
    rule4_desc: "相手陣の最奥列に達すると「キング」に昇格。斜め後方への移動・捕獲も可能になります！",
    stats_modal_title: "戦績・やりこみ実績",
    stat_played: "総対局数",
    stat_won: "勝利数",
    stat_rate: "勝率",
    stat_combo: "最大連続跳躍",
    header_achievements: "実績コレクション",
    achieve_first_win: "初陣の栄光",
    achieve_first_win_desc: "チェッカーズで初めて勝利する。",
    achieve_crown: "クラウン・ジュエル",
    achieve_crown_desc: "1回の対局で3個以上キングを作る。",
    achieve_triple: "トリプル・ストライク",
    achieve_triple_desc: "1手番で3連続ジャンプを達成する。",
    achieve_gm: "グランドマスター",
    achieve_gm_desc: "駒損3個以内で上級CPUに勝利する。",
    settings_modal_title: "⚙️ 設定",
    setting_lang_label: "言語（Language）",
    setting_sound_label: "効果音",
    setting_vibrate_label: "振動・ハプティクス",
    setting_speed_label: "演出速度",
    speed_normal: "通常",
    speed_fast: "高速",
    btn_reset_data: "戦績・実績データを初期化",
    confirm_title: "確認",
    confirm_resign: "対局を投了しますか？",
    confirm_reset: "戦績や実績データをリセットしますか？この操作は取り消せません。",
    btn_cancel: "キャンセル",
    btn_confirm: "OK",
    victory_title: "勝利！",
    defeat_title: "敗北",
    p1_win_title: "プレイヤー1の勝利！",
    p2_win_title: "プレイヤー2の勝利！",
    victory_reason_wipe: "相手のすべての駒を獲得しました。",
    victory_reason_trapped: "相手の手番で合法手がなくなりました。",
    btn_share_x: "Xで共有",
    btn_play_again: "もう一度遊ぶ",
    btn_back_menu: "メニューへ戻る"
  },
  "zh-CN": {
    back_to_clubhouse: "返回大厅",
    subtitle_desc: "经典西洋跳棋 8×8",
    label_mode: "对战模式",
    mode_cpu: "人机对战",
    mode_pass: "双人同屏",
    label_difficulty: "难度选择",
    diff_easy: "初级",
    diff_normal: "中级",
    diff_hard: "高级",
    btn_resume: "继续对局",
    btn_start_match: "开始对局",
    btn_rules: "游戏规则",
    btn_stats: "战绩与成就",
    btn_settings: "⚙️ 设置",
    nav_title: "主页",
    tag_thinking: "思考中...",
    hud_captured: "吃子数",
    your_turn: "轮到您的回合",
    opponent_turn: "对手回合",
    turn_player1: "玩家 1 回合",
    turn_player2: "玩家 2 回合",
    must_jump_warning: "必须执行跳吃！",
    btn_undo: "悔棋",
    btn_resign: "认输",
    curtain_desc: "请将设备交给对方，准备就绪后点击屏幕。",
    curtain_ready: "准备就绪",
    seq_title: "先手裁定",
    seq_rule_desc: "西洋跳棋中红棋先手。掷骰子点数大者先走！",
    badge_you: "您",
    badge_cpu: "电脑",
    badge_p1: "玩家 1",
    badge_p2: "玩家 2",
    seq_btn_roll: "掷骰子",
    seq_tie_text: "平局！重新掷骰子...",
    seq_win_you: "您赢了！您获得先手权（红棋）。",
    seq_win_opp: "对手获胜！对手获得先手权。",
    seq_btn_play: "进入棋盘",
    rules_modal_title: "图解规则说明",
    rule1_title: "1. 斜向单步前进",
    rule1_desc: "棋子只能沿深色方格向前斜向移动一格。",
    rule2_title: "2. 强制跳吃",
    rule2_desc: "对方棋子后方若有空位则必须跳过并吃掉该棋子。吃子是强制性的！",
    rule3_title: "3. 连续跳跃",
    rule3_desc: "跳吃后若仍有可吃棋子，可在同回合内连续跳吃。",
    rule4_title: "4. 加冕成王",
    rule4_desc: "抵达对方底线后升级为王棋，王棋拥有向后斜行和吃子的能力！",
    stats_modal_title: "战绩与成就",
    stat_played: "总局数",
    stat_won: "胜利",
    stat_rate: "胜率",
    stat_combo: "最高连跳",
    header_achievements: "成就殿堂",
    achieve_first_win: "首场胜利",
    achieve_first_win_desc: "赢得首场跳棋胜利。",
    achieve_crown: "王冠加冕",
    achieve_crown_desc: "单局内获得3个及以上王棋。",
    achieve_triple: "三连击破",
    achieve_triple_desc: "单回合完成连续3次跳吃。",
    achieve_gm: "宗师之境",
    achieve_gm_desc: "在损失不超过3子的情况下战胜高级电脑。",
    settings_modal_title: "⚙️ 设置",
    setting_lang_label: "语言",
    setting_sound_label: "游戏音效",
    setting_vibrate_label: "震动触感",
    setting_speed_label: "动画速度",
    speed_normal: "正常",
    speed_fast: "快速",
    btn_reset_data: "重置战绩与成就数据",
    confirm_title: "确认操作",
    confirm_resign: "确定要投降认输吗？",
    confirm_reset: "确定要清除所有战绩和成就吗？此操作不可撤销。",
    btn_cancel: "取消",
    btn_confirm: "确定",
    victory_title: "胜利！",
    defeat_title: "惜败",
    p1_win_title: "玩家 1 获胜！",
    p2_win_title: "玩家 2 获胜！",
    victory_reason_wipe: "已吃光对手的所有棋子。",
    victory_reason_trapped: "对手已无棋可走。",
    btn_share_x: "在 X 上分享",
    btn_play_again: "再来一局",
    btn_back_menu: "返回菜单"
  },
  "zh-TW": {
    back_to_clubhouse: "返回大廳",
    subtitle_desc: "經典西洋跳棋 8×8",
    label_mode: "對戰模式",
    mode_cpu: "人機對戰",
    mode_pass: "雙人同屏",
    label_difficulty: "難度選擇",
    diff_easy: "初級",
    diff_normal: "中級",
    diff_hard: "高級",
    btn_resume: "繼續對局",
    btn_start_match: "開始對局",
    btn_rules: "遊戲規則",
    btn_stats: "戰績與成就",
    btn_settings: "⚙️ 設定",
    nav_title: "主頁",
    tag_thinking: "思考中...",
    hud_captured: "吃子數",
    your_turn: "輪到您的回合",
    opponent_turn: "對手回合",
    turn_player1: "玩家 1 回合",
    turn_player2: "玩家 2 回合",
    must_jump_warning: "必須執行跳吃！",
    btn_undo: "悔棋",
    btn_resign: "認輸",
    curtain_desc: "請將裝置交給對方，準備就緒後點擊螢幕。",
    curtain_ready: "準備就緒",
    seq_title: "先手裁定",
    seq_rule_desc: "西洋跳棋中紅棋先手。擲骰子點數大者先走！",
    badge_you: "您",
    badge_cpu: "電腦",
    badge_p1: "玩家 1",
    badge_p2: "玩家 2",
    seq_btn_roll: "擲骰子",
    seq_tie_text: "平局！重新擲骰子...",
    seq_win_you: "您贏了！您獲得先手權（紅棋）。",
    seq_win_opp: "對手獲勝！對手獲得先手權。",
    seq_btn_play: "進入棋盤",
    rules_modal_title: "圖解規則說明",
    rule1_title: "1. 斜向單步前進",
    rule1_desc: "棋子只能沿深色方格向前斜向移動一格。",
    rule2_title: "2. 強制跳吃",
    rule2_desc: "對方棋子後方若有空位則必須跳過並吃掉該棋子。吃子是強制性的！",
    rule3_title: "3. 連續跳躍",
    rule3_desc: "跳吃後若仍有可吃棋子，可在同回合內連續跳吃。",
    rule4_title: "4. 加冕成王",
    rule4_desc: "抵達對方底線後升級為王棋，王棋擁有向後斜行和吃子的能力！",
    stats_modal_title: "戰績與成就",
    stat_played: "總局數",
    stat_won: "勝利",
    stat_rate: "勝率",
    stat_combo: "最高連跳",
    header_achievements: "成就殿堂",
    achieve_first_win: "首場勝利",
    achieve_first_win_desc: "贏得首場跳棋勝利。",
    achieve_crown: "王冠加冕",
    achieve_crown_desc: "單局內獲得3個及以上王棋。",
    achieve_triple: "三連擊破",
    achieve_triple_desc: "單回合完成連續3次跳吃。",
    achieve_gm: "宗師之境",
    achieve_gm_desc: "在損失不超過3子的情況下戰勝高級電腦。",
    settings_modal_title: "⚙️ 設定",
    setting_lang_label: "語言",
    setting_sound_label: "遊戲音效",
    setting_vibrate_label: "震動觸感",
    setting_speed_label: "動畫速度",
    speed_normal: "正常",
    speed_fast: "快速",
    btn_reset_data: "重置戰績與成就數據",
    confirm_title: "確認操作",
    confirm_resign: "確定要投降認輸嗎？",
    confirm_reset: "確定要清除所有戰績和成就嗎？此操作不可撤銷。",
    btn_cancel: "取消",
    btn_confirm: "確定",
    victory_title: "勝利！",
    defeat_title: "惜敗",
    p1_win_title: "玩家 1 獲勝！",
    p2_win_title: "玩家 2 獲勝！",
    victory_reason_wipe: "已吃光對手的所有棋子。",
    victory_reason_trapped: "對手已無棋可走。",
    btn_share_x: "在 X 上分享",
    btn_play_again: "再來一局",
    btn_back_menu: "返回選單"
  },
  ko: {
    back_to_clubhouse: "클럽하우스",
    subtitle_desc: "클래식 체커스 8×8",
    label_mode: "대전 모드",
    mode_cpu: "vs CPU",
    mode_pass: "2인 화면공유",
    label_difficulty: "난이도",
    diff_easy: "초급",
    diff_normal: "중급",
    diff_hard: "고급",
    btn_resume: "이어하기",
    btn_start_match: "대국 시작",
    btn_rules: "게임 방법",
    btn_stats: "전적 및 업적",
    btn_settings: "⚙️ 설정",
    nav_title: "홈",
    tag_thinking: "생각 중...",
    hud_captured: "포획 수",
    your_turn: "당신의 차례",
    opponent_turn: "상대방 차례",
    turn_player1: "플레이어 1 차례",
    turn_player2: "플레이어 2 차례",
    must_jump_warning: "말 뛰어넘기(점프)가 필수입니다!",
    btn_undo: "무르기",
    btn_resign: "기권",
    curtain_desc: "기기를 상대에게 넘겨주세요. 준비되면 화면을 터치하세요.",
    curtain_ready: "준비 완료",
    seq_title: "선공 결정",
    seq_rule_desc: "체커스는 빨간 말이 선공입니다. 주사위를 굴려 높은 쪽이 선공이 됩니다!",
    badge_you: "나",
    badge_cpu: "CPU",
    badge_p1: "1P",
    badge_p2: "2P",
    seq_btn_roll: "주사위 굴리기",
    seq_tie_text: "동점입니다! 다시 굴립니다...",
    seq_win_you: "승리! 당신이 선공(빨간 말)이 됩니다.",
    seq_win_opp: "패배! 상대가 선공이 됩니다.",
    seq_btn_play: "판으로 이동",
    rules_modal_title: "게임 방법 (그림 설명)",
    rule1_title: "1. 대각선 전진 이동",
    rule1_desc: "말은 짙은 색 칸만 대각선 앞으로 한 칸씩 전진할 수 있습니다.",
    rule2_title: "2. 말 잡기 (강제 점프)",
    rule2_desc: "상대 말 뒤가 비어 있다면 뛰어넘어 잡아야 합니다. 잡을 수 있을 땐 점프가 필수입니다!",
    rule3_title: "3. 연속 점프",
    rule3_desc: "말을 잡은 뒤 연이어 잡을 수 있는 말이 있다면 같은 턴에 계속 잡아야 합니다.",
    rule4_title: "4. 킹(King) 승급과 후진",
    rule4_desc: "상대 진영 끝 행에 도달하면 킹으로 승급하여 대각선 뒤쪽으로도 이동 및 포획이 가능해집니다!",
    stats_modal_title: "전적 및 달성 업적",
    stat_played: "총 경기",
    stat_won: "승리",
    stat_rate: "승률",
    stat_combo: "최대 연속 점프",
    header_achievements: "업적 컬렉션",
    achieve_first_win: "첫 승리의 영광",
    achieve_first_win_desc: "체커스에서 첫 승리를 거둡니다.",
    achieve_crown: "크라운 주얼",
    achieve_crown_desc: "단일 대국에서 킹을 3개 이상 만듭니다.",
    achieve_triple: "트리플 스트라이크",
    achieve_triple_desc: "한 턴에 3연속 점프를 성공합니다.",
    achieve_gm: "그랜드마스터",
    achieve_gm_desc: "말 손실 3개 이하로 고급 CPU를 상대로 승리합니다.",
    settings_modal_title: "⚙️ 설정",
    setting_lang_label: "언어 (Language)",
    setting_sound_label: "효과음",
    setting_vibrate_label: "진동",
    setting_speed_label: "애니메이션 속도",
    speed_normal: "보통",
    speed_fast: "빠름",
    btn_reset_data: "전적 및 기록 초기화",
    confirm_title: "확인",
    confirm_resign: "정말 기권하시겠습니까?",
    confirm_reset: "모든 전적과 업적을 초기화하시겠습니까? 되돌릴 수 없습니다.",
    btn_cancel: "취소",
    btn_confirm: "확인",
    victory_title: "승리!",
    defeat_title: "패배",
    p1_win_title: "플레이어 1 승리!",
    p2_win_title: "플레이어 2 승리!",
    victory_reason_wipe: "상대의 모든 말을 포획했습니다.",
    victory_reason_trapped: "상대방의 둘 수 있는 수가 없습니다.",
    btn_share_x: "X로 공유하기",
    btn_play_again: "다시 하기",
    btn_back_menu: "메뉴로 돌아가기"
  },
  es: {
    back_to_clubhouse: "CLUB HOUSE",
    subtitle_desc: "DAMAS CLÁSICAS 8×8",
    label_mode: "MODO",
    mode_cpu: "vs CPU",
    mode_pass: "2P Pasa y Juega",
    label_difficulty: "DIFICULTAD",
    diff_easy: "Fácil",
    diff_normal: "Normal",
    diff_hard: "Difícil",
    btn_resume: "CONTINUAR PARTIDA",
    btn_start_match: "INICIAR PARTIDA",
    btn_rules: "Cómo Jugar",
    btn_stats: "Estadísticas",
    btn_settings: "⚙️ Ajustes",
    nav_title: "Menú",
    tag_thinking: "Pensando...",
    hud_captured: "Capturas",
    your_turn: "Tu Turno",
    opponent_turn: "Turno Rival",
    turn_player1: "Turno de Jugador 1",
    turn_player2: "Turno de Jugador 2",
    must_jump_warning: "¡La captura por salto es obligatoria!",
    btn_undo: "Deshacer",
    btn_resign: "Rendirse",
    curtain_desc: "Pasa el dispositivo. Toca cuando estés listo para jugar.",
    curtain_ready: "Listo",
    seq_title: "Determinar Quién Inicia",
    seq_rule_desc: "En las damas, las rojas mueven primero. ¡Lanza el dado!",
    badge_you: "Tú",
    badge_cpu: "CPU",
    badge_p1: "Jugador 1",
    badge_p2: "Jugador 2",
    seq_btn_roll: "Lanzar Dado",
    seq_tie_text: "¡Empate! Volviendo a lanzar...",
    seq_win_you: "¡Ganaste el tiro! Mueves primero (Rojas).",
    seq_win_opp: "El rival ganó el tiro. Mueve primero.",
    seq_btn_play: "Empezar Juego",
    rules_modal_title: "Cómo Jugar Damas",
    rule1_title: "1. Movimiento Diagonal",
    rule1_desc: "Las fichas avanzan en diagonal por las casillas oscuras, un paso a la vez.",
    rule2_title: "2. Captura Obligatoria",
    rule2_desc: "Salta sobre la ficha rival si la casilla posterior está libre. ¡Comer es obligatorio!",
    rule3_title: "3. Saltos Múltiples",
    rule3_desc: "Si hay otra captura disponible tras saltar, debes continuar en el mismo turno.",
    rule4_title: "4. Coronación (Dama)",
    rule4_desc: "Llegar a la última fila corona tu ficha como Dama, pudiendo mover y capturar hacia atrás.",
    stats_modal_title: "Récords y Logros",
    stat_played: "Partidas",
    stat_won: "Victorias",
    stat_rate: "% Victoria",
    stat_combo: "Salto Máximo",
    header_achievements: "Logros",
    achieve_first_win: "Primera Victoria",
    achieve_first_win_desc: "Gana tu primera partida de damas.",
    achieve_crown: "Joya Coronada",
    achieve_crown_desc: "Consigue 3 o más Damas en una partida.",
    achieve_triple: "Golpe Triple",
    achieve_triple_desc: "Realiza una cadena de 3 saltos consecutivos.",
    achieve_gm: "Gran Maestro",
    achieve_gm_desc: "Derrota a la CPU Difícil perdiendo 3 piezas o menos.",
    settings_modal_title: "⚙️ Ajustes",
    setting_lang_label: "Idioma",
    setting_sound_label: "Efectos de Sonido",
    setting_vibrate_label: "Vibración",
    setting_speed_label: "Velocidad de Animación",
    speed_normal: "Normal",
    speed_fast: "Rápida",
    btn_reset_data: "Reiniciar Estadísticas",
    confirm_title: "Confirmar Acción",
    confirm_resign: "¿Seguro que deseas rendirte?",
    confirm_reset: "¿Reiniciar estadísticas? Esta acción no se puede deshacer.",
    btn_cancel: "Cancelar",
    btn_confirm: "OK",
    victory_title: "¡Victoria!",
    defeat_title: "Derrota",
    p1_win_title: "¡Jugador 1 Gana!",
    p2_win_title: "¡Jugador 2 Gana!",
    victory_reason_wipe: "Todas las piezas rivales fueron capturadas.",
    victory_reason_trapped: "El rival no tiene movimientos válidos.",
    btn_share_x: "Compartir en X",
    btn_play_again: "Jugar Otra Vez",
    btn_back_menu: "Volver al Menú"
  },
  fr: {
    back_to_clubhouse: "CLUB HOUSE",
    subtitle_desc: "DAMES CLASSIQUES 8×8",
    label_mode: "MODE",
    mode_cpu: "vs CPU",
    mode_pass: "2J Passe & Joue",
    label_difficulty: "DIFFICULTÉ",
    diff_easy: "Facile",
    diff_normal: "Normal",
    diff_hard: "Difficile",
    btn_resume: "REPRENDRE LA PARTIE",
    btn_start_match: "COMMENCER LE MATCH",
    btn_rules: "Règles du jeu",
    btn_stats: "Statistiques",
    btn_settings: "⚙️ Paramètres",
    nav_title: "Accueil",
    tag_thinking: "Réflexion...",
    hud_captured: "Capturées",
    your_turn: "À votre tour",
    opponent_turn: "Tour adverse",
    turn_player1: "Tour du Joueur 1",
    turn_player2: "Tour du Joueur 2",
    must_jump_warning: "La prise par saut est obligatoire !",
    btn_undo: "Annuler",
    btn_resign: "Abandonner",
    curtain_desc: "Passez l'appareil. Touchez l'écran quand vous êtes prêt.",
    curtain_ready: "Je suis prêt",
    seq_title: "Tirage au sort",
    seq_rule_desc: "Aux dames, les pions rouges débutent. Lancez le dé !",
    badge_you: "Vous",
    badge_cpu: "CPU",
    badge_p1: "Joueur 1",
    badge_p2: "Joueur 2",
    seq_btn_roll: "Lancer le dé",
    seq_tie_text: "Égalité ! Nouveau lancer...",
    seq_win_you: "Vous commencez la partie (Rouges) !",
    seq_win_opp: "L'adversaire commence la partie.",
    seq_btn_play: "Aller au damier",
    rules_modal_title: "Règles des Dames",
    rule1_title: "1. Déplacement diagonal",
    rule1_desc: "Les pions avancent d'une case en diagonale sur les cases sombres.",
    rule2_title: "2. Prise obligatoire",
    rule2_desc: "Sautez par-dessus un pion adverse vers la case vide suivante. La prise est obligatoire !",
    rule3_title: "3. Prises en cascade",
    rule3_desc: "Si une autre prise est possible immédiatement, continuez dans le même tour.",
    rule4_title: "4. Promotion en Dame",
    rule4_desc: "Atteindre la dernière ligne couronne votre pion en Dame, lui permettant de reculer.",
    stats_modal_title: "Statistiques & Succès",
    stat_played: "Parties",
    stat_won: "Victoires",
    stat_rate: "Taux de Victoire",
    stat_combo: "Combo Max",
    header_achievements: "Succès",
    achieve_first_win: "Première Victoire",
    achieve_first_win_desc: "Gagner votre première partie.",
    achieve_crown: "Couronnement",
    achieve_crown_desc: "Créer 3 Dames ou plus en une partie.",
    achieve_triple: "Coup Triple",
    achieve_triple_desc: "Exécuter un enchaînement de 3 sauts d'affilée.",
    achieve_gm: "Grand Maître",
    achieve_gm_desc: "Vaincre l'IA Difficile en perdant 3 pions maximum.",
    settings_modal_title: "⚙️ Paramètres",
    setting_lang_label: "Langue",
    setting_sound_label: "Effets sonores",
    setting_vibrate_label: "Vibrations",
    setting_speed_label: "Vitesse d'animation",
    speed_normal: "Normale",
    speed_fast: "Rapide",
    btn_reset_data: "Réinitialiser les données",
    confirm_title: "Confirmation",
    confirm_resign: "Voulez-vous vraiment abandonner ?",
    confirm_reset: "Réinitialiser toutes les données ?",
    btn_cancel: "Annuler",
    btn_confirm: "Valider",
    victory_title: "Victoire !",
    defeat_title: "Défaite",
    p1_win_title: "Le Joueur 1 gagne !",
    p2_win_title: "Le Joueur 2 gagne !",
    victory_reason_wipe: "Tous les pions adverses ont été pris.",
    victory_reason_trapped: "L'adversaire n'a plus aucun coup valide.",
    btn_share_x: "Partager sur X",
    btn_play_again: "Rejouer",
    btn_back_menu: "Menu principal"
  },
  pt: {
    back_to_clubhouse: "CLUB HOUSE",
    subtitle_desc: "DAMAS CLÁSICAS 8×8",
    label_mode: "MODO",
    mode_cpu: "vs CPU",
    mode_pass: "2P Passa e Joga",
    label_difficulty: "DIFICULDADE",
    diff_easy: "Fácil",
    diff_normal: "Normal",
    diff_hard: "Difícil",
    btn_resume: "CONTINUAR PARTIDA",
    btn_start_match: "INICIAR PARTIDA",
    btn_rules: "Como Jogar",
    btn_stats: "Estatísticas",
    btn_settings: "⚙️ Configurações",
    nav_title: "Início",
    tag_thinking: "Pensando...",
    hud_captured: "Capturas",
    your_turn: "Sua Vez",
    opponent_turn: "Vez do Oponente",
    turn_player1: "Vez do Jogador 1",
    turn_player2: "Vez do Jogador 2",
    must_jump_warning: "Captura com salto é obrigatória!",
    btn_undo: "Desfazer",
    btn_resign: "Desistir",
    curtain_desc: "Passe o dispositivo. Toque na tela quando estiver pronto.",
    curtain_ready: "Estou Pronto",
    seq_title: "Decisão do Primeiro a Jogar",
    seq_rule_desc: "Nas damas, as vermelhas começam. Role o dado!",
    badge_you: "Você",
    badge_cpu: "CPU",
    badge_p1: "Jogador 1",
    badge_p2: "Jogador 2",
    seq_btn_roll: "Rolar Dado",
    seq_tie_text: "Empate! Rolando de novo...",
    seq_win_you: "Você tirou mais alto! Começa jogando (Vermelhas).",
    seq_win_opp: "Oponente tirou mais alto! Ele começa.",
    seq_btn_play: "Ir ao Tabuleiro",
    rules_modal_title: "Como Jogar Damas",
    rule1_title: "1. Movimento Diagonal",
    rule1_desc: "As peças movem-se na diagonal apenas pelas casas escuras.",
    rule2_title: "2. Captura Obrigatória",
    rule2_desc: "Pule a peça inimiga se houver espaço livre atrás. O salto é obrigatório!",
    rule3_title: "3. Saltos Múltiplos",
    rule3_desc: "Se houver outro salto após a captura, continue na mesma jogada.",
    rule4_title: "4. Promoção à Dama",
    rule4_desc: "Alcançar a última fileira coroa sua peça, permitindo mover e capturar para trás.",
    stats_modal_title: "Recordes e Conquistas",
    stat_played: "Partidas",
    stat_won: "Vitórias",
    stat_rate: "% Vitórias",
    stat_combo: "Salto Máximo",
    header_achievements: "Conquistas",
    achieve_first_win: "Primeira Vitória",
    achieve_first_win_desc: "Vença sua primeira partida de damas.",
    achieve_crown: "Jóia da Coroa",
    achieve_crown_desc: "Coroe 3 ou mais damas em uma partida.",
    achieve_triple: "Golpe Triplo",
    achieve_triple_desc: "Execute 3 saltos consecutivos no mesmo turno.",
    achieve_gm: "Grão-Mestre",
    achieve_gm_desc: "Vença a CPU Difícil perdendo no máximo 3 peças.",
    settings_modal_title: "⚙️ Configurações",
    setting_lang_label: "Idioma",
    setting_sound_label: "Efeitos Sonoros",
    setting_vibrate_label: "Vibração",
    setting_speed_label: "Velocidade da Animação",
    speed_normal: "Normal",
    speed_fast: "Rápida",
    btn_reset_data: "Redefinir Estatísticas",
    confirm_title: "Confirmar Ação",
    confirm_resign: "Tem certeza que deseja desistir?",
    confirm_reset: "Redefinir estatísticas? Isso não poderá ser desfeito.",
    btn_cancel: "Cancelar",
    btn_confirm: "OK",
    victory_title: "Vitória!",
    defeat_title: "Derrota",
    p1_win_title: "Jogador 1 Venceu!",
    p2_win_title: "Jogador 2 Venceu!",
    victory_reason_wipe: "Todas as peças oponentes foram capturadas.",
    victory_reason_trapped: "Oponente não tem jogadas válidas.",
    btn_share_x: "Compartilhar no X",
    btn_play_again: "Jogar Novamente",
    btn_back_menu: "Menu Inicial"
  }
};

// ============================================================================
// 2. Exact 3D Single Dice Drop Engine Implementation (Guarded & Robust)
// ============================================================================
class SingleDiceDropEngine {
  constructor(canvasId, trayId) {
    this.canvas = document.getElementById(canvasId);
    this.tray = document.getElementById(trayId);
    this.initialized = false;
    this.isRolling = false;
  }

  init() {
    if (this.initialized || !this.canvas || !this.tray) return;

    // Web Audio 着地音
    this.AudioEngine = {
      ctx: null,
      init() {
        if (!this.ctx) {
          const AC = window.AudioContext || window.webkitAudioContext;
          if (AC) this.ctx = new AC();
        }
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
      },
      playHit(vol = 0.3, pitch = 140) {
        if (window.soundEffects && !window.soundEffects.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(pitch + (Math.random() * 30 - 15), now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.05);

        gain.gain.setValueAtTime(vol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
      }
    };

    // Fallback dimension check
    const width = this.tray.clientWidth || 320;
    const height = this.tray.clientHeight || 190;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 7.8);
    this.camera.lookAt(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.45);
    dirLight.position.set(2, 6, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    this.scene.add(dirLight);

    const floorGeo = new THREE.PlaneGeometry(15, 15);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.45 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(0, 0, -0.6);
    floor.receiveShadow = true;
    this.scene.add(floor);

    this.materials = [
      new THREE.MeshLambertMaterial({ map: this.createDiceFaceTexture(2) }),
      new THREE.MeshLambertMaterial({ map: this.createDiceFaceTexture(5) }),
      new THREE.MeshLambertMaterial({ map: this.createDiceFaceTexture(3) }),
      new THREE.MeshLambertMaterial({ map: this.createDiceFaceTexture(4) }),
      new THREE.MeshLambertMaterial({ map: this.createDiceFaceTexture(1) }),
      new THREE.MeshLambertMaterial({ map: this.createDiceFaceTexture(6) })
    ];

    this.FaceRotations = {
      1: new THREE.Euler(0, 0, 0),
      2: new THREE.Euler(0, -Math.PI / 2, 0),
      3: new THREE.Euler(Math.PI / 2, 0, 0),
      4: new THREE.Euler(-Math.PI / 2, 0, 0),
      5: new THREE.Euler(0, Math.PI / 2, 0),
      6: new THREE.Euler(0, Math.PI, 0)
    };

    const roundedGeo = this.createRoundedDiceGeometry(1.3, 0.2, 7);
    this.diceMesh = new THREE.Mesh(roundedGeo, this.materials);
    this.diceMesh.castShadow = true;
    this.diceMesh.visible = false;
    this.scene.add(this.diceMesh);

    this.initialized = true;

    const renderLoop = () => {
      requestAnimationFrame(renderLoop);
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
    };
    renderLoop();
  }

  resize() {
    if (!this.initialized || !this.renderer || !this.tray) return;
    const w = this.tray.clientWidth || 320;
    const h = this.tray.clientHeight || 190;
    if (w > 0 && h > 0) {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    }
  }

  createDiceFaceTexture(val) {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');

    ctx.fillStyle = '#f8f8fa';
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = '#d2d5dc';
    ctx.lineWidth = 12;
    ctx.strokeRect(0, 0, 256, 256);

    const isOne = (val === 1);
    const pipRadius = isOne ? 44 : 23;
    const pipColor = isOne ? '#e02418' : '#141517';

    const pips = {
      1: [[128, 128]],
      2: [[68, 68], [188, 188]],
      3: [[68, 68], [128, 128], [188, 188]],
      4: [[68, 68], [188, 68], [68, 188], [188, 188]],
      5: [[66, 66], [190, 66], [128, 128], [66, 190], [190, 190]],
      6: [[68, 62], [188, 62], [68, 128], [188, 128], [68, 194], [188, 194]]
    }[val];

    pips.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, pipRadius, 0, Math.PI * 2);
      ctx.fillStyle = pipColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x - pipRadius * 0.2, y - pipRadius * 0.2, pipRadius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = isOne ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.15)';
      ctx.fill();
    });

    return new THREE.CanvasTexture(c);
  }

  createRoundedDiceGeometry(size = 1.3, radius = 0.2, segments = 7) {
    const geo = new THREE.BoxGeometry(size, size, size, segments, segments, segments);
    const pos = geo.attributes.position;
    const half = size / 2;
    const innerHalf = half - radius;

    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      let cx = Math.max(-innerHalf, Math.min(innerHalf, x));
      let cy = Math.max(-innerHalf, Math.min(innerHalf, y));
      let cz = Math.max(-innerHalf, Math.min(innerHalf, z));

      let dx = x - cx;
      let dy = y - cy;
      let dz = z - cz;

      let len = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (len > 0) {
        pos.setXYZ(i, cx + (dx / len) * radius, cy + (dy / len) * radius, cz + (dz / len) * radius);
      }
    }
    geo.computeVertexNormals();
    return geo;
  }

  animateSingleDrop(targetValue, onComplete) {
    if (!this.initialized) this.init();
    this.isRolling = true;
    this.diceMesh.visible = true;

    const startTime = performance.now();
    const duration = 1050;
    const startY = 4.5;
    const targetX = 0;

    const targetEuler = this.FaceRotations[targetValue];
    const targetQuat = new THREE.Quaternion().setFromEuler(targetEuler);

    const extraTurnsX = Math.floor(Math.random() * 2) + 3;
    const extraTurnsY = Math.floor(Math.random() * 2) + 3;
    const totalAngleX = extraTurnsX * Math.PI * 2;
    const totalAngleY = extraTurnsY * Math.PI * 2;

    const driftX = (Math.random() - 0.5) * 0.4;

    let soundBounced1 = false;
    let soundBounced2 = false;

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      let y = 0;
      if (progress < 0.44) {
        const p = progress / 0.44;
        y = startY * (1 - p * p);
      } else if (progress < 0.74) {
        if (!soundBounced1) {
          if (this.AudioEngine) this.AudioEngine.playHit(0.35, 170);
          soundBounced1 = true;
        }
        const p = (progress - 0.44) / 0.3;
        y = Math.sin(p * Math.PI) * 1.15;
      } else if (progress < 0.92) {
        if (!soundBounced2) {
          if (this.AudioEngine) this.AudioEngine.playHit(0.2, 220);
          soundBounced2 = true;
        }
        const p = (progress - 0.74) / 0.18;
        y = Math.sin(p * Math.PI) * 0.3;
      } else {
        y = 0;
      }

      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const remain = 1 - easeProgress;

      const rotX = targetEuler.x + totalAngleX * remain;
      const rotY = targetEuler.y + totalAngleY * remain;
      const rotZ = targetEuler.z + Math.sin(progress * Math.PI) * 0.35;

      this.diceMesh.rotation.set(rotX, rotY, rotZ);

      const currentX = targetX + driftX * remain;
      this.diceMesh.position.set(currentX, y, 0);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        if (this.AudioEngine) this.AudioEngine.playHit(0.08, 260);
        this.diceMesh.position.set(targetX, 0, 0);
        this.diceMesh.quaternion.copy(targetQuat);
        this.isRolling = false;
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(frame);
  }
}

// ============================================================================
// 3. Checkers Logic Engine
// ============================================================================
const PIECE_NONE = 0;
const PIECE_RED = 1;     // Player 1 (Red starts)
const PIECE_BLACK = 2;   // Player 2 / CPU (Black)
const KING_MASK = 4;

class CheckersEngine {
  constructor() {
    this.board = new Array(64).fill(PIECE_NONE);
    this.turn = PIECE_RED;
    this.selectedSquare = null;
    this.multiJumpSquare = null;
    this.history = [];
    this.capturedCount = { [PIECE_RED]: 0, [PIECE_BLACK]: 0 };
    this.kingsCreatedInMatch = 0;
    this.currentComboCount = 0;
    this.maxComboInMatch = 0;
  }

  reset() {
    this.board.fill(PIECE_NONE);
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 8; c++) {
        if ((r + c) % 2 === 1) this.board[r * 8 + c] = PIECE_BLACK;
      }
    }
    for (let r = 5; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if ((r + c) % 2 === 1) this.board[r * 8 + c] = PIECE_RED;
      }
    }
    this.turn = PIECE_RED;
    this.selectedSquare = null;
    this.multiJumpSquare = null;
    this.history = [];
    this.capturedCount = { [PIECE_RED]: 0, [PIECE_BLACK]: 0 };
    this.kingsCreatedInMatch = 0;
    this.currentComboCount = 0;
    this.maxComboInMatch = 0;
  }

  isPieceOwner(piece, player) {
    if (piece === PIECE_NONE) return false;
    return (piece & 3) === player;
  }

  isKing(piece) {
    return (piece & KING_MASK) !== 0;
  }

  getPieceColor(piece) {
    return piece & 3;
  }

  getLegalMoves(player = this.turn, restrictSquare = this.multiJumpSquare) {
    const jumps = [];
    const steps = [];

    const squaresToCheck = restrictSquare !== null 
      ? [restrictSquare] 
      : Array.from({ length: 64 }, (_, i) => i);

    for (const sq of squaresToCheck) {
      const piece = this.board[sq];
      if (!this.isPieceOwner(piece, player)) continue;

      const row = Math.floor(sq / 8);
      const col = sq % 8;
      const king = this.isKing(piece);

      const dirs = [];
      if (king) {
        dirs.push([-1, -1], [-1, 1], [1, -1], [1, 1]);
      } else if (player === PIECE_RED) {
        dirs.push([-1, -1], [-1, 1]); // Red moves up (-1)
      } else {
        dirs.push([1, -1], [1, 1]);   // Black moves down (+1)
      }

      for (const [dr, dc] of dirs) {
        const nr = row + dr;
        const nc = col + dc;

        if (restrictSquare === null && nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          const target = nr * 8 + nc;
          if (this.board[target] === PIECE_NONE) {
            steps.push({ from: sq, to: target, captured: null, isJump: false });
          }
        }

        const jumpR = row + dr * 2;
        const jumpC = col + dc * 2;
        if (jumpR >= 0 && jumpR < 8 && jumpC >= 0 && jumpC < 8) {
          const middleSq = (row + dr) * 8 + (col + dc);
          const landingSq = jumpR * 8 + jumpC;
          const middlePiece = this.board[middleSq];

          if (middlePiece !== PIECE_NONE && 
              !this.isPieceOwner(middlePiece, player) && 
              this.board[landingSq] === PIECE_NONE) {
            jumps.push({ from: sq, to: landingSq, captured: middleSq, isJump: true });
          }
        }
      }
    }

    return jumps.length > 0 ? jumps : steps;
  }

  applyMove(move) {
    this.history.push({
      board: [...this.board],
      turn: this.turn,
      capturedCount: { ...this.capturedCount },
      multiJumpSquare: this.multiJumpSquare,
      currentComboCount: this.currentComboCount
    });

    const piece = this.board[move.from];
    this.board[move.from] = PIECE_NONE;
    let placedPiece = piece;

    let crowned = false;
    const destRow = Math.floor(move.to / 8);

    if (!this.isKing(piece)) {
      if ((this.turn === PIECE_RED && destRow === 0) || (this.turn === PIECE_BLACK && destRow === 7)) {
        placedPiece |= KING_MASK;
        crowned = true;
        this.kingsCreatedInMatch++;
      }
    }

    this.board[move.to] = placedPiece;

    if (move.isJump) {
      this.board[move.captured] = PIECE_NONE;
      this.capturedCount[this.turn]++;
      this.currentComboCount++;
      if (this.currentComboCount > this.maxComboInMatch) {
        this.maxComboInMatch = this.currentComboCount;
      }

      if (!crowned) {
        const nextJumps = this.getLegalMoves(this.turn, move.to);
        if (nextJumps.length > 0 && nextJumps[0].isJump) {
          this.multiJumpSquare = move.to;
          return { multiJump: true, crowned: false, jump: true };
        }
      }
    }

    this.currentComboCount = 0;
    this.multiJumpSquare = null;
    this.turn = this.turn === PIECE_RED ? PIECE_BLACK : PIECE_RED;

    return { multiJump: false, crowned, jump: move.isJump };
  }

  undo() {
    if (this.history.length === 0) return false;
    const snap = this.history.pop();
    this.board = snap.board;
    this.turn = snap.turn;
    this.capturedCount = snap.capturedCount;
    this.multiJumpSquare = snap.multiJumpSquare;
    this.currentComboCount = snap.currentComboCount;
    this.selectedSquare = null;
    return true;
  }

  checkGameOver() {
    const moves = this.getLegalMoves(this.turn);
    if (moves.length === 0) {
      const winner = this.turn === PIECE_RED ? PIECE_BLACK : PIECE_RED;
      return { over: true, winner, reason: 'trapped' };
    }
    return { over: false };
  }

  evaluate(player) {
    let score = 0;
    for (let i = 0; i < 64; i++) {
      const piece = this.board[i];
      if (piece === PIECE_NONE) continue;
      const isOwner = (piece & 3) === player;
      const king = this.isKing(piece);
      let val = king ? 35 : 10;

      const r = Math.floor(i / 8);
      const c = i % 8;
      if (r >= 2 && r <= 5 && c >= 2 && c <= 5) val += 3;
      if (!king) {
        if ((player === PIECE_BLACK && r === 0) || (player === PIECE_RED && r === 7)) {
          val += 4;
        }
      }

      score += isOwner ? val : -val;
    }
    return score;
  }
}

// ============================================================================
// 4. Minimax AI Engine
// ============================================================================
class CheckersCPU {
  static getBestMove(engine, difficulty = 'normal') {
    const legalMoves = engine.getLegalMoves(PIECE_BLACK);
    if (legalMoves.length === 0) return null;
    if (legalMoves.length === 1) return legalMoves[0];

    if (difficulty === 'easy') {
      return legalMoves[Math.floor(Math.random() * legalMoves.length)];
    }

    const depth = difficulty === 'hard' ? 4 : 2;
    let bestVal = -Infinity;
    let bestMove = legalMoves[0];

    for (const move of legalMoves) {
      const cloned = new CheckersEngine();
      cloned.board = [...engine.board];
      cloned.turn = engine.turn;
      cloned.multiJumpSquare = engine.multiJumpSquare;
      cloned.applyMove(move);

      const val = CheckersCPU.minimax(cloned, depth - 1, -Infinity, Infinity, false, PIECE_BLACK);
      if (val > bestVal) {
        bestVal = val;
        bestMove = move;
      }
    }
    return bestMove;
  }

  static minimax(engine, depth, alpha, beta, isMaximizing, cpuPlayer) {
    const overCheck = engine.checkGameOver();
    if (overCheck.over) {
      return overCheck.winner === cpuPlayer ? 1000 : -1000;
    }
    if (depth <= 0) {
      return engine.evaluate(cpuPlayer);
    }

    const moves = engine.getLegalMoves(engine.turn);

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const m of moves) {
        const sim = new CheckersEngine();
        sim.board = [...engine.board];
        sim.turn = engine.turn;
        sim.multiJumpSquare = engine.multiJumpSquare;
        sim.applyMove(m);

        const evalScore = CheckersCPU.minimax(sim, depth - 1, alpha, beta, sim.turn === cpuPlayer, cpuPlayer);
        maxEval = Math.max(maxEval, evalScore);
        alpha = Math.max(alpha, evalScore);
        if (beta <= alpha) break;
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (const m of moves) {
        const sim = new CheckersEngine();
        sim.board = [...engine.board];
        sim.turn = engine.turn;
        sim.multiJumpSquare = engine.multiJumpSquare;
        sim.applyMove(m);

        const evalScore = CheckersCPU.minimax(sim, depth - 1, alpha, beta, sim.turn === cpuPlayer, cpuPlayer);
        minEval = Math.min(minEval, evalScore);
        beta = Math.min(beta, evalScore);
        if (beta <= alpha) break;
      }
      return minEval;
    }
  }
}

// ============================================================================
// 5. Application Coordinator
// ============================================================================
class AppCoordinator {
  constructor() {
    this.engine = new CheckersEngine();
    this.mode = 'cpu';
    this.difficulty = 'normal';
    this.lang = 'ja';
    this.speed = 'normal';
    this.ruleStep = 1;
    this.cpuThinkingTimer = null;

    this.diceEngine = new SingleDiceDropEngine('webgl-canvas', 'tray');
    this.rollPhase = 1;
    this.rollP1 = 0;
    this.rollP2 = 0;
    this.firstPlayerDecided = PIECE_RED;

    this.cacheDom();
    this.loadStateAndSettings();
    this.bindEvents();
    this.renderBoard();
    this.checkResumeAvailability();
  }

  cacheDom() {
    this.domTitleScreen = document.getElementById('titleScreen');
    this.domGameScreen = document.getElementById('gameScreen');
    this.domSequenceModal = document.getElementById('sequenceModal');
    this.domRulesModal = document.getElementById('rulesModal');
    this.domStatsModal = document.getElementById('statsModal');
    this.domSettingsModal = document.getElementById('settingsModal');
    this.domConfirmModal = document.getElementById('confirmModal');
    this.domResultModal = document.getElementById('resultModal');
    this.domPassCurtain = document.getElementById('passCurtainModal');
    this.domToast = document.getElementById('toastNotification');

    this.domBoardGrid = document.getElementById('boardGrid');
    this.domTurnBadge = document.getElementById('turnDiscBadge');
    this.domTurnText = document.getElementById('turnStatusText');
    this.domPlayerCap = document.getElementById('playerCaptureCount');
    this.domOpponentCap = document.getElementById('opponentCaptureCount');
    this.domOpponentIcon = document.getElementById('opponentIcon');
    this.domOpponentName = document.getElementById('opponentNameLabel');
    this.domCpuThinking = document.getElementById('cpuThinkingIndicator');

    this.domSettingLang = document.getElementById('settingLanguage');
    this.domSettingSound = document.getElementById('settingSoundToggle');
    this.domSettingVibrate = document.getElementById('settingVibrateToggle');
    this.domSpeedTabs = document.getElementById('settingSpeedSelector');
    this.domAudioStatusIcon = document.getElementById('audioStatusIcon');
  }

  loadStateAndSettings() {
    const settings = window.storageManager.getSettings();
    this.lang = settings.lang || 'ja';
    this.speed = settings.speed || 'normal';
    this.applyLanguage(this.lang);

    window.soundEffects.setEnabled(settings.sound !== false);
    if (this.domSettingSound) this.domSettingSound.checked = settings.sound !== false;
    if (this.domSettingVibrate) this.domSettingVibrate.checked = settings.vibrate !== false;
    if (this.domSettingLang) this.domSettingLang.value = this.lang;

    this.updateSpeedUI(this.speed);
    this.updateAudioIcon(settings.sound !== false);
  }

  applyLanguage(lang) {
    this.lang = I18N[lang] ? lang : 'ja';
    const dict = I18N[this.lang];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });

    if (this.domSettingLang) this.domSettingLang.value = this.lang;
    this.updateHUD();
    this.renderAchievementsList();
  }

  bindEvents() {
    document.getElementById('modeSelector').addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-tab');
      if (!btn) return;
      document.querySelectorAll('#modeSelector .pill-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.mode = btn.dataset.mode;
      document.getElementById('difficultyRow').style.display = this.mode === 'cpu' ? 'flex' : 'none';
      this.updateHUD();
    });

    document.getElementById('difficultySelector').addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-tab');
      if (!btn) return;
      document.querySelectorAll('#difficultySelector .pill-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.difficulty = btn.dataset.diff;
      this.updateHUD();
    });

    document.getElementById('btnStartGame').addEventListener('click', () => this.openSequenceModal());
    document.getElementById('btnResumeGame').addEventListener('click', () => this.resumeSavedMatch());
    document.getElementById('btnGameToTitle').addEventListener('click', () => {
      this.showScreen('title');
      this.checkResumeAvailability();
    });

    document.getElementById('btnResignMatch').addEventListener('click', () => {
      this.showConfirm(
        I18N[this.lang].confirm_title,
        I18N[this.lang].confirm_resign,
        () => this.resignGame()
      );
    });

    document.getElementById('btnUndoMove').addEventListener('click', () => {
      if (this.mode === 'cpu' && this.engine.turn === PIECE_BLACK) return;
      if (this.engine.undo()) {
        if (this.mode === 'cpu' && this.engine.turn === PIECE_BLACK) {
          this.engine.undo();
        }
        window.soundEffects.playMove();
        this.renderBoard();
        this.updateHUD();
        this.persistGameState();
      }
    });

    document.getElementById('btnAudioToggle').addEventListener('click', () => {
      const next = !window.soundEffects.enabled;
      window.soundEffects.setEnabled(next);
      window.storageManager.saveSettings({ sound: next });
      if (this.domSettingSound) this.domSettingSound.checked = next;
      this.updateAudioIcon(next);
    });

    document.getElementById('btnOpenRules').addEventListener('click', () => this.openRulesModal());
    document.getElementById('btnCloseRules').addEventListener('click', () => this.closeRulesModal());
    document.getElementById('btnPrevRule').addEventListener('click', () => this.changeRuleStep(-1));
    document.getElementById('btnNextRule').addEventListener('click', () => this.changeRuleStep(1));

    document.getElementById('btnOpenStats').addEventListener('click', () => this.openStatsModal());
    document.getElementById('btnCloseStats').addEventListener('click', () => this.closeStatsModal());

    document.getElementById('btnOpenSettings').addEventListener('click', () => this.openSettingsModal());
    document.getElementById('btnCloseSettings').addEventListener('click', () => this.closeSettingsModal());

    this.domSettingLang.addEventListener('change', (e) => {
      this.applyLanguage(e.target.value);
      window.storageManager.saveSettings({ lang: e.target.value });
    });

    this.domSettingSound.addEventListener('change', (e) => {
      window.soundEffects.setEnabled(e.target.checked);
      window.storageManager.saveSettings({ sound: e.target.checked });
      this.updateAudioIcon(e.target.checked);
    });

    this.domSettingVibrate.addEventListener('change', (e) => {
      window.storageManager.saveSettings({ vibrate: e.target.checked });
    });

    this.domSpeedTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-tab');
      if (!btn) return;
      this.updateSpeedUI(btn.dataset.speed);
      window.storageManager.saveSettings({ speed: btn.dataset.speed });
    });

    document.getElementById('btnResetAllData').addEventListener('click', () => {
      this.showConfirm(
        I18N[this.lang].confirm_title,
        I18N[this.lang].confirm_reset,
        () => {
          window.storageManager.resetAllData();
          this.checkResumeAvailability();
          this.closeSettingsModal();
          this.showToast("Data reset complete.");
        }
      );
    });

    // 3D Dice Events
    document.getElementById('btnRollDice').addEventListener('click', () => this.handleDiceRollClick());
    document.getElementById('tray').addEventListener('click', () => this.handleDiceRollClick());
    document.getElementById('btnStartGameConfirmed').addEventListener('click', () => this.finalizeMatchStart());

    document.getElementById('btnCurtainDismiss').addEventListener('click', () => {
      this.domPassCurtain.classList.remove('active');
    });

    document.getElementById('btnRematch').addEventListener('click', () => {
      this.domResultModal.classList.remove('active');
      this.openSequenceModal();
    });

    document.getElementById('btnResultBackTitle').addEventListener('click', () => {
      this.domResultModal.classList.remove('active');
      this.showScreen('title');
      this.checkResumeAvailability();
    });

    document.getElementById('btnShareTwitter').addEventListener('click', () => this.shareOnX());
  }

  // ==========================================================================
  // 3-Stage First Player Determination (Guaranteed Rendering)
  // ==========================================================================
  openSequenceModal() {
    const dict = I18N[this.lang];
    this.rollPhase = 1;
    this.rollP1 = 0;
    this.rollP2 = 0;

    document.getElementById('diceLabelP1').textContent = this.mode === 'cpu' ? dict.badge_you : dict.badge_p1;
    document.getElementById('diceLabelP2').textContent = this.mode === 'cpu' ? dict.badge_cpu : dict.badge_p2;
    document.getElementById('diceValP1').textContent = '-';
    document.getElementById('diceValP2').textContent = '-';
    document.getElementById('diceTurnTag').textContent = `${document.getElementById('diceLabelP1').textContent} の投下`;
    document.getElementById('seqResultText').textContent = "ボタンを押してサイコロを振ってください";

    const btnRoll = document.getElementById('btnRollDice');
    const btnPlay = document.getElementById('btnStartGameConfirmed');
    btnRoll.classList.remove('hidden');
    btnPlay.classList.add('hidden');

    this.domSequenceModal.classList.add('active');

    // DOM描画完了後に確実にThree.jsを初期化
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (!this.diceEngine.initialized) {
          this.diceEngine.init();
        } else {
          this.diceEngine.resize();
        }
      }, 50);
    });
  }

  handleDiceRollClick() {
    if (this.diceEngine.isRolling) return;

    const dict = I18N[this.lang];
    const val = Math.floor(Math.random() * 6) + 1;
    document.getElementById('seqResultText').textContent = "振っています...";

    this.diceEngine.animateSingleDrop(val, () => {
      if (this.rollPhase === 1) {
        this.rollP1 = val;
        document.getElementById('diceValP1').textContent = val;
        this.rollPhase = 2;
        const p2Name = document.getElementById('diceLabelP2').textContent;
        document.getElementById('diceTurnTag').textContent = `${p2Name} の投下`;

        if (this.mode === 'cpu') {
          document.getElementById('seqResultText').textContent = "CPUがサイコロを振ります...";
          setTimeout(() => this.handleDiceRollClick(), 800);
        } else {
          document.getElementById('seqResultText').textContent = `${p2Name}の番です。サイコロを振ってください！`;
        }
      } else if (this.rollPhase === 2) {
        this.rollP2 = val;
        document.getElementById('diceValP2').textContent = val;

        if (this.rollP1 === this.rollP2) {
          document.getElementById('seqResultText').textContent = dict.seq_tie_text;
          setTimeout(() => {
            this.rollPhase = 1;
            document.getElementById('diceValP1').textContent = '-';
            document.getElementById('diceValP2').textContent = '-';
            document.getElementById('diceTurnTag').textContent = `${document.getElementById('diceLabelP1').textContent} の投下`;
            document.getElementById('seqResultText').textContent = "もう一度サイコロを振ってください";
          }, 1200);
          return;
        }

        const p1Won = this.rollP1 > this.rollP2;
        this.firstPlayerDecided = p1Won ? PIECE_RED : PIECE_BLACK;

        document.getElementById('seqResultText').textContent = p1Won ? dict.seq_win_you : dict.seq_win_opp;
        document.getElementById('btnRollDice').classList.add('hidden');
        document.getElementById('btnStartGameConfirmed').classList.remove('hidden');
      }
    });
  }

  finalizeMatchStart() {
    this.domSequenceModal.classList.remove('active');
    this.engine.reset();
    this.showScreen('game');
    this.renderBoard();
    this.updateHUD();
    this.persistGameState();

    if (this.firstPlayerDecided === PIECE_BLACK) {
      if (this.mode === 'cpu') {
        this.scheduleCpuMove();
      } else {
        this.showPassCurtain();
      }
    }
  }

  // ==========================================================================
  // Board Rendering & Move Interaction
  // ==========================================================================
  renderBoard() {
    this.domBoardGrid.innerHTML = '';
    const legalMoves = this.engine.getLegalMoves();
    const hasJumps = legalMoves.length > 0 && legalMoves[0].isJump;

    const movableSquares = new Set(legalMoves.map(m => m.from));
    const targetSquares = new Map();

    if (this.engine.selectedSquare !== null) {
      legalMoves
        .filter(m => m.from === this.engine.selectedSquare)
        .forEach(m => targetSquares.set(m.to, m));
    }

    for (let i = 0; i < 64; i++) {
      const row = Math.floor(i / 8);
      const col = i % 8;
      const isDark = (row + col) % 2 === 1;

      const cell = document.createElement('div');
      cell.className = `board-cell ${isDark ? 'dark' : 'light'}`;
      cell.dataset.index = i;

      if (targetSquares.has(i)) {
        const move = targetSquares.get(i);
        cell.classList.add(move.isJump ? 'valid-jump' : 'valid-move');
        cell.classList.add('clickable');
        cell.addEventListener('click', () => this.handleCellClick(i));
      }

      const pieceVal = this.engine.board[i];
      if (pieceVal !== PIECE_NONE) {
        const pieceEl = document.createElement('div');
        const color = this.engine.getPieceColor(pieceVal);
        const isKing = this.engine.isKing(pieceVal);

        pieceEl.className = `piece ${color === PIECE_RED ? 'red' : 'black'}`;
        if (isKing) pieceEl.classList.add('king');

        if (this.engine.turn === color && movableSquares.has(i)) {
          pieceEl.classList.add('selectable');
          if (hasJumps) pieceEl.classList.add('must-jump');
        }

        if (this.engine.selectedSquare === i) {
          pieceEl.classList.add('selected');
        }

        if (this.engine.turn === color && (this.mode === 'pass' || color === PIECE_RED)) {
          pieceEl.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handlePieceClick(i);
          });
        }

        cell.appendChild(pieceEl);
      }

      this.domBoardGrid.appendChild(cell);
    }
  }

  handlePieceClick(sq) {
    if (this.mode === 'cpu' && this.engine.turn === PIECE_BLACK) return;
    const legalMoves = this.engine.getLegalMoves();
    const canMoveThis = legalMoves.some(m => m.from === sq);

    if (!canMoveThis) {
      if (legalMoves.length > 0 && legalMoves[0].isJump) {
        this.showToast(I18N[this.lang].must_jump_warning);
        this.vibrate(50);
      }
      return;
    }

    this.engine.selectedSquare = sq;
    window.soundEffects.playMove();
    this.renderBoard();
  }

  handleCellClick(targetSq) {
    if (this.engine.selectedSquare === null) return;
    const moves = this.engine.getLegalMoves();
    const chosenMove = moves.find(m => m.from === this.engine.selectedSquare && m.to === targetSq);

    if (chosenMove) {
      this.executeMove(chosenMove);
    }
  }

  executeMove(move) {
    const res = this.engine.applyMove(move);

    if (res.jump) {
      window.soundEffects.playCapture();
      this.vibrate(60);
    } else {
      window.soundEffects.playMove();
    }

    if (res.crowned) {
      window.soundEffects.playKing();
    }

    this.engine.selectedSquare = res.multiJump ? move.to : null;
    this.renderBoard();
    this.updateHUD();
    this.persistGameState();

    const overCheck = this.engine.checkGameOver();
    if (overCheck.over) {
      this.finishGame(overCheck);
      return;
    }

    if (this.mode === 'pass' && !res.multiJump) {
      this.showPassCurtain();
      return;
    }

    if (this.mode === 'cpu' && this.engine.turn === PIECE_BLACK) {
      this.scheduleCpuMove();
    }
  }

  scheduleCpuMove() {
    this.domCpuThinking.classList.remove('hidden');
    const delay = this.speed === 'fast' ? 450 : 900;

    clearTimeout(this.cpuThinkingTimer);
    this.cpuThinkingTimer = setTimeout(() => {
      this.domCpuThinking.classList.add('hidden');
      const bestMove = CheckersCPU.getBestMove(this.engine, this.difficulty);
      if (bestMove) {
        this.executeMove(bestMove);
      }
    }, delay);
  }

  // ==========================================================================
  // HUD & Persistence
  // ==========================================================================
  updateHUD() {
    const dict = I18N[this.lang];
    const isRedTurn = this.engine.turn === PIECE_RED;

    this.domTurnBadge.className = `turn-disc-badge ${isRedTurn ? 'red' : 'black'}`;

    if (this.mode === 'cpu') {
      this.domTurnText.textContent = isRedTurn ? dict.your_turn : dict.opponent_turn;
      this.domOpponentIcon.textContent = '🤖';
      this.domOpponentName.textContent = `CPU (${dict['diff_' + this.difficulty]})`;
    } else {
      this.domTurnText.textContent = isRedTurn ? dict.turn_player1 : dict.turn_player2;
      this.domOpponentIcon.textContent = '👤';
      this.domOpponentName.textContent = dict.badge_p2;
    }

    this.domPlayerCap.textContent = this.engine.capturedCount[PIECE_RED];
    this.domOpponentCap.textContent = this.engine.capturedCount[PIECE_BLACK];
    document.getElementById('btnUndoMove').style.display = this.mode === 'cpu' ? 'inline-block' : 'none';
  }

  showPassCurtain() {
    const dict = I18N[this.lang];
    const label = this.engine.turn === PIECE_RED ? dict.turn_player1 : dict.turn_player2;
    document.getElementById('curtainTargetLabel').textContent = label;
    this.domPassCurtain.classList.add('active');
  }

  finishGame(overCheck) {
    window.soundEffects.playVictory();
    this.vibrate([100, 50, 150]);
    window.storageManager.clearMatchState();

    const stats = window.storageManager.getStats();
    stats.matchesPlayed++;

    const isUserWin = overCheck.winner === PIECE_RED;
    if (isUserWin) {
      stats.matchesWon++;
      stats.achievements.first_win = true;
      if (this.engine.kingsCreatedInMatch >= 3) stats.achievements.crown_master = true;
      if (this.engine.maxComboInMatch >= 3) stats.achievements.triple_strike = true;
      if (this.mode === 'cpu' && this.difficulty === 'hard' && this.engine.capturedCount[PIECE_BLACK] <= 3) {
        stats.achievements.grandmaster = true;
      }
    }
    if (this.engine.maxComboInMatch > stats.maxCombo) {
      stats.maxCombo = this.engine.maxComboInMatch;
    }
    window.storageManager.saveStats(stats);

    const dict = I18N[this.lang];
    const titleEl = document.getElementById('resultWinnerTitle');
    const descEl = document.getElementById('resultWinnerDesc');

    if (this.mode === 'cpu') {
      titleEl.textContent = isUserWin ? dict.victory_title : dict.defeat_title;
    } else {
      titleEl.textContent = overCheck.winner === PIECE_RED ? dict.p1_win_title : dict.p2_win_title;
    }

    descEl.textContent = overCheck.reason === 'wipe' ? dict.victory_reason_wipe : dict.victory_reason_trapped;
    this.domResultModal.classList.add('active');
  }

  resignGame() {
    const winner = this.engine.turn === PIECE_RED ? PIECE_BLACK : PIECE_RED;
    this.finishGame({ over: true, winner, reason: 'trapped' });
  }

  persistGameState() {
    const state = {
      board: this.engine.board,
      turn: this.engine.turn,
      mode: this.mode,
      difficulty: this.difficulty,
      capturedCount: this.engine.capturedCount,
      kings: this.engine.kingsCreatedInMatch,
      multiJump: this.engine.multiJumpSquare
    };
    window.storageManager.saveMatchState(state);
  }

  checkResumeAvailability() {
    const state = window.storageManager.getMatchState();
    const btn = document.getElementById('btnResumeGame');
    if (state && state.board) {
      btn.classList.remove('hidden');
    } else {
      btn.classList.add('hidden');
    }
  }

  resumeSavedMatch() {
    const state = window.storageManager.getMatchState();
    if (!state) return;
    this.engine.board = state.board;
    this.engine.turn = state.turn;
    this.mode = state.mode;
    this.difficulty = state.difficulty;
    this.engine.capturedCount = state.capturedCount;
    this.engine.kingsCreatedInMatch = state.kings || 0;
    this.engine.multiJumpSquare = state.multiJump || null;

    this.showScreen('game');
    this.renderBoard();
    this.updateHUD();

    if (this.mode === 'cpu' && this.engine.turn === PIECE_BLACK) {
      this.scheduleCpuMove();
    }
  }

  showScreen(name) {
    if (name === 'title') {
      this.domTitleScreen.classList.add('active');
      this.domGameScreen.classList.remove('active');
    } else {
      this.domTitleScreen.classList.remove('active');
      this.domGameScreen.classList.add('active');
    }
  }

  openRulesModal() {
    this.ruleStep = 1;
    this.updateRuleCarousel();
    this.domRulesModal.classList.add('active');
  }

  closeRulesModal() {
    this.domRulesModal.classList.remove('active');
  }

  changeRuleStep(delta) {
    this.ruleStep = Math.max(1, Math.min(4, this.ruleStep + delta));
    this.updateRuleCarousel();
  }

  updateRuleCarousel() {
    document.querySelectorAll('.rule-slide').forEach(slide => {
      slide.classList.toggle('active', parseInt(slide.dataset.step, 10) === this.ruleStep);
    });

    const dots = document.querySelectorAll('#carouselDots .dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx + 1 === this.ruleStep);
    });
  }

  openStatsModal() {
    const stats = window.storageManager.getStats();
    document.getElementById('statMatchesPlayed').textContent = stats.matchesPlayed;
    document.getElementById('statMatchesWon').textContent = stats.matchesWon;
    const rate = stats.matchesPlayed > 0 ? Math.round((stats.matchesWon / stats.matchesPlayed) * 100) : 0;
    document.getElementById('statWinRate').textContent = `${rate}%`;
    document.getElementById('statMaxCombo').textContent = stats.maxCombo;

    this.renderAchievementsList();
    this.domStatsModal.classList.add('active');
  }

  closeStatsModal() {
    this.domStatsModal.classList.remove('active');
  }

  renderAchievementsList() {
    const list = document.getElementById('achievementList');
    if (!list) return;
    list.innerHTML = '';
    const stats = window.storageManager.getStats();
    const dict = I18N[this.lang];

    const defs = [
      { key: 'first_win', icon: '⚔️', title: dict.achieve_first_win, desc: dict.achieve_first_win_desc },
      { key: 'crown_master', icon: '👑', title: dict.achieve_crown, desc: dict.achieve_crown_desc },
      { key: 'triple_strike', icon: '⚡', title: dict.achieve_triple, desc: dict.achieve_triple_desc },
      { key: 'grandmaster', icon: '🏆', title: dict.achieve_gm, desc: dict.achieve_gm_desc }
    ];

    defs.forEach(d => {
      const unlocked = stats.achievements[d.key];
      const li = document.createElement('li');
      li.className = `achievement-item ${unlocked ? 'unlocked' : 'locked'}`;
      li.innerHTML = `
        <div class="achieve-icon">${d.icon}</div>
        <div class="achieve-content">
          <span class="achieve-title">${d.title}</span>
          <span class="achieve-desc">${d.desc}</span>
        </div>
      `;
      list.appendChild(li);
    });
  }

  openSettingsModal() {
    this.domSettingsModal.classList.add('active');
  }

  closeSettingsModal() {
    this.domSettingsModal.classList.remove('active');
  }

  updateSpeedUI(spd) {
    this.speed = spd;
    document.querySelectorAll('#settingSpeedSelector .pill-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.speed === spd);
    });
  }

  updateAudioIcon(enabled) {
    this.domAudioStatusIcon.textContent = enabled ? '🔊' : '🔇';
  }

  showConfirm(title, message, onOk) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    this.domConfirmModal.classList.add('active');

    const okBtn = document.getElementById('btnConfirmOk');
    const cancelBtn = document.getElementById('btnConfirmCancel');

    const cleanup = () => {
      this.domConfirmModal.classList.remove('active');
      okBtn.removeEventListener('click', handleOk);
      cancelBtn.removeEventListener('click', handleCancel);
    };

    const handleOk = () => {
      cleanup();
      onOk();
    };

    const handleCancel = () => {
      cleanup();
    };

    okBtn.addEventListener('click', handleOk);
    cancelBtn.addEventListener('click', handleCancel);
  }

  showToast(msg) {
    this.domToast.textContent = msg;
    this.domToast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.domToast.classList.remove('show');
    }, 1800);
  }

  vibrate(ms) {
    const settings = window.storageManager.getSettings();
    if (settings.vibrate !== false && navigator.vibrate) {
      try {
        navigator.vibrate(ms);
      } catch (e) {}
    }
  }

  shareOnX() {
    const text = encodeURIComponent("Checkers match completed on Games Clubhouse! 👑🔴⚫️");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }
}

// Ensure startup when DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  window.app = new AppCoordinator();
});
