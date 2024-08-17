// For SamToki.github.io/KanaMaster
// Released under GNU GPL v3 open source license.
// (C) 2023 SAM TOKI STUDIO

// Initialization
	// Declare Variables
	"use strict";
		// Unsaved
		const CurrentVersion = 1.15,
		KanaGrid = [
			["", "准备", "暂停"],
			[0, "あ",   "か",   "さ",   "た",   "な",   "は",   "ま",   "や",   "ら",   "わ",   "が",   "ざ",   "だ",   "ば",   "ぱ",   "",     "",     "",     "",     ""],
			[0, "い",   "き",   "し",   "ち",   "に",   "ひ",   "み",   "",     "り",   "",     "ぎ",   "じ",   "ぢ",   "び",   "ぴ",   "",     "",     "",     "",     ""],
			[0, "う",   "く",   "す",   "つ",   "ぬ",   "ふ",   "む",   "ゆ",   "る",   "",     "ぐ",   "ず",   "づ",   "ぶ",   "ぷ",   "",     "",     "",     "",     ""],
			[0, "え",   "け",   "せ",   "て",   "ね",   "へ",   "め",   "",     "れ",   "",     "げ",   "ぜ",   "で",   "べ",   "ぺ",   "",     "",     "",     "",     ""],
			[0, "お",   "こ",   "そ",   "と",   "の",   "ほ",   "も",   "よ",   "ろ",   "を",   "ご",   "ぞ",   "ど",   "ぼ",   "ぽ",   "",     "",     "",     "",     ""],
			[0, "ア",   "カ",   "サ",   "タ",   "ナ",   "ハ",   "マ",   "ヤ",   "ラ",   "ワ",   "ガ",   "ザ",   "ダ",   "バ",   "パ",   "",     "",     "",     "",     ""],
			[0, "イ",   "キ",   "シ",   "チ",   "ニ",   "ヒ",   "ミ",   "",     "リ",   "",     "ギ",   "ジ",   "ヂ",   "ビ",   "ピ",   "",     "",     "",     "",     ""],
			[0, "ウ",   "ク",   "ス",   "ツ",   "ヌ",   "フ",   "ム",   "ユ",   "ル",   "",     "グ",   "ズ",   "ヅ",   "ブ",   "プ",   "",     "",     "",     "",     ""],
			[0, "エ",   "ケ",   "セ",   "テ",   "ネ",   "ヘ",   "メ",   "",     "レ",   "",     "ゲ",   "ゼ",   "デ",   "ベ",   "ペ",   "",     "",     "",     "",     ""],
			[0, "オ",   "コ",   "ソ",   "ト",   "ノ",   "ホ",   "モ",   "ヨ",   "ロ",   "ヲ",   "ゴ",   "ゾ",   "ド",   "ボ",   "ポ",   "",     "",     "",     "",     ""],
			[0, "ん",   "ン",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "きゃ", "しゃ", "ちゃ", "にゃ", "ひゃ", "みゃ", "",     "りゃ", "",     "ぎゃ", "じゃ", "",     "びゃ", "ぴゃ", "",     "",     "",     "",     ""],
			[0, "",     "きゅ", "しゅ", "ちゅ", "にゅ", "ひゅ", "みゅ", "",     "りゅ", "",     "ぎゅ", "じゅ", "",     "びゅ", "ぴゅ", "",     "",     "",     "",     ""],
			[0, "",     "きょ", "しょ", "ちょ", "にょ", "ひょ", "みょ", "",     "りょ", "",     "ぎょ", "じょ", "",     "びょ", "ぴょ", "",     "",     "",     "",     ""],
			[0, "",     "キャ", "シャ", "チャ", "ニャ", "ヒャ", "ミャ", "",     "リャ", "",     "ギャ", "ジャ", "",     "ビャ", "ピャ", "",     "",     "",     "",     ""],
			[0, "",     "キュ", "シュ", "チュ", "ニュ", "ヒュ", "ミュ", "",     "リュ", "",     "ギュ", "ジュ", "",     "ビュ", "ピュ", "",     "",     "",     "",     ""],
			[0, "",     "キョ", "ショ", "チョ", "ニョ", "ヒョ", "ミョ", "",     "リョ", "",     "ギョ", "ジョ", "",     "ビョ", "ピョ", "",     "",     "",     "",     ""],
			[0, "ウィ", "ウェ", "ウォ", "ヴァ", "ヴィ", "ヴ",   "ヴェ", "ヴォ", "クァ", "クィ", "クォ", "シェ", "ジェ", "チェ", "ティ", "ディ", "ファ", "フィ", "フェ", "フォ"],
			[0, "ゐ",   "ゑ",   "ヰ",   "ヱ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""]
		],
		RomajiGrid = [
			["", "准备", "暂停"],
			[0, "a",    "ka",   "sa",   "ta",   "na",   "ha",   "ma",   "ya",   "ra",   "wa",   "ga",   "za",   "da",   "ba",   "pa",   "",     "",     "",     "",     ""],
			[0, "i",    "ki",   "shi",  "chi",  "ni",   "hi",   "mi",   "",     "ri",   "",     "gi",   "ji",   "ji",   "bi",   "pi",   "",     "",     "",     "",     ""],
			[0, "u",    "ku",   "su",   "tsu",  "nu",   "fu",   "mu",   "yu",   "ru",   "",     "gu",   "zu",   "zu",   "bu",   "pu",   "",     "",     "",     "",     ""],
			[0, "e",    "ke",   "se",   "te",   "ne",   "he",   "me",   "",     "re",   "",     "ge",   "ze",   "de",   "be",   "pe",   "",     "",     "",     "",     ""],
			[0, "o",    "ko",   "so",   "to",   "no",   "ho",   "mo",   "yo",   "ro",   "wo",   "go",   "zo",   "do",   "bo",   "po",   "",     "",     "",     "",     ""],
			[0, "a",    "ka",   "sa",   "ta",   "na",   "ha",   "ma",   "ya",   "ra",   "wa",   "ga",   "za",   "da",   "ba",   "pa",   "",     "",     "",     "",     ""],
			[0, "i",    "ki",   "shi",  "chi",  "ni",   "hi",   "mi",   "",     "ri",   "",     "gi",   "ji",   "ji",   "bi",   "pi",   "",     "",     "",     "",     ""],
			[0, "u",    "ku",   "su",   "tsu",  "nu",   "fu",   "mu",   "yu",   "ru",   "",     "gu",   "zu",   "zu",   "bu",   "pu",   "",     "",     "",     "",     ""],
			[0, "e",    "ke",   "se",   "te",   "ne",   "he",   "me",   "",     "re",   "",     "ge",   "ze",   "de",   "be",   "pe",   "",     "",     "",     "",     ""],
			[0, "o",    "ko",   "so",   "to",   "no",   "ho",   "mo",   "yo",   "ro",   "wo",   "go",   "zo",   "do",   "bo",   "po",   "",     "",     "",     "",     ""],
			[0, "n",    "n",    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "kya",  "sha",  "cha",  "nya",  "hya",  "mya",  "",     "rya",  "",     "gya",  "ja",   "",     "bya",  "pya",  "",     "",     "",     "",     ""],
			[0, "",     "kyu",  "shu",  "chu",  "nyu",  "hyu",  "myu",  "",     "ryu",  "",     "gyu",  "ju",   "",     "byu",  "pyu",  "",     "",     "",     "",     ""],
			[0, "",     "kyo",  "sho",  "cho",  "nyo",  "hyo",  "myo",  "",     "ryo",  "",     "gyo",  "jo",   "",     "byo",  "pyo",  "",     "",     "",     "",     ""],
			[0, "",     "kya",  "sha",  "cha",  "nya",  "hya",  "mya",  "",     "rya",  "",     "gya",  "ja",   "",     "bya",  "pya",  "",     "",     "",     "",     ""],
			[0, "",     "kyu",  "shu",  "chu",  "nyu",  "hyu",  "myu",  "",     "ryu",  "",     "gyu",  "ju",   "",     "byu",  "pyu",  "",     "",     "",     "",     ""],
			[0, "",     "kyo",  "sho",  "cho",  "nyo",  "hyo",  "myo",  "",     "ryo",  "",     "gyo",  "jo",   "",     "byo",  "pyo",  "",     "",     "",     "",     ""],
			[0, "wi",   "we",   "wo",   "va",   "vi",   "v",    "ve",   "vo",   "kwa",  "kwi",  "kwo",  "she",  "je",   "che",  "ti",   "di",   "fa",   "fi",   "fe",   "fo"],
			[0, "wi",   "we",   "wi",   "we",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""]
		];
		var Game0 = {
			Stats: {
				ScoreDisplay: 0
			}
		};
		Automation.ClockGame = null;

		// Saved
		var Subsystem = {
			Display: {
				GameFont: "Default"
			},
			Dev: {
				Cheat: false
			}
		},
		Game = {
			Mode: {
				Questioning: "Kana",
				Progressing: "Quantity", Quantity: 50, Duration: 3
			},
			QuestionRange: [0, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false],
			Difficulty: {
				TimeLimit: {
					Initial: 8000, Normal: 6000
				},
				Cooldown: 1000,
				HPDrain: 10
			},
			Status: {
				IsRunning: false, IsCoolingDown: false, IsPaused: false
			},
			Stats: {
				TotalCount: 0, MissCount: 0, Combo: 0, MaxCombo: 0,
				StartTime: 0, ElapsedTime: 0, CurrentTimeLimit: 0, Accuracy: 0, AvgReactionTime: 0,
				StartTime2: 0, Score: 0, Progress: 0, HP: 0, TimeLeft: 0
			},
			Lottery: {
				Question: [
					0,
					[0, 0, 0],
					[0, 0, 0]
				],
				Answer: [
					0,
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				],
				CorrectAnswer: 0
			}
		},
		Highscore = [
			0,
			[0, "#1", "", "", "", "", ""],
			[0, "#2", "", "", "", "", ""],
			[0, "#3", "", "", "", "", ""],
			[0, "#4", "", "", "", "", ""],
			[0, "#5", "", "", "", "", ""],
			[0, "#6", "", "", "", "", ""]
		];

	// Load User Data
	window.onload = Load();
	function Load() {
		if(localStorage.System != undefined) {
			System = JSON.parse(localStorage.getItem("System"));
		} else {
			System.I18n.Language = "zh-CN";
		}
		switch(System.I18n.Language) {
			case "en-US":
				ShowDialog("System_LanguageUnsupported",
					"Error",
					"<span lang=\"en-US\">Sorry, this page currently does not support English (US).</span>",
					"", "", "", "<span lang=\"en-US\">OK</span>");
				break;
			case "ja-JP":
				ShowDialog("System_LanguageUnsupported",
					"Error",
					"<span lang=\"ja-JP\">すみません。このページは日本語にまだサポートしていません。</span>",
					"", "", "", "<span lang=\"ja-JP\">OK</span>");
				break;
			case "zh-CN":
				/* ChangeCursorOverall("wait");
				window.location.replace("index.html"); */
				break;
			case "zh-TW":
				ShowDialog("System_LanguageUnsupported",
					"Error",
					"<span lang=\"zh-TW\">抱歉，本頁面暫不支援繁體中文。</span>",
					"", "", "", "<span lang=\"zh-TW\">確定</span>");
				break;
			default:
				AlertSystemError("The value of System.I18n.Language \"" + System.I18n.Language + "\" in function Load is invalid.");
				break;
		}
		if(System.Version.KanaMaster != undefined) {
			if(Math.floor(CurrentVersion) - Math.floor(System.Version.KanaMaster) >= 1) {
				ShowDialog("System_MajorUpdateDetected",
					"Info",
					"检测到大版本更新。若您继续使用旧版本的用户数据，则有可能发生兼容性问题。敬请留意。",
					"", "", "", "确定");
				System.Version.KanaMaster = CurrentVersion;
			}
		} else {
			System.Version.KanaMaster = CurrentVersion;
		}
		RefreshSystem();
		if(localStorage.KanaMaster_Subsystem != undefined) {
			Subsystem = JSON.parse(localStorage.getItem("KanaMaster_Subsystem"));
		}
		RefreshSubsystem();
		if(localStorage.KanaMaster_Game != undefined) {
			Game = JSON.parse(localStorage.getItem("KanaMaster_Game"));
		}
		RefreshGame();
		if(localStorage.KanaMaster_Highscore != undefined) {
			Highscore = JSON.parse(localStorage.getItem("KanaMaster_Highscore"));
		}
		RefreshHighscore();
		setTimeout(HideToast, 0);
	}

	// Pause Before Exiting
	window.onbeforeunload = Exit();
	function Exit() {
		if(Game.Status.IsRunning == true && Game.Status.IsPaused == false) {
			Game.Status.IsPaused = true;
			Game.Lottery.Question[1] = [0, 0, 2];
			Game.Lottery.Answer = [
				0,
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
			];
			RefreshGame();
		}
	}

// Simplifications
	// Write
		// Class
		function ChangeAnswerFeedbackColor(Value) {
			RemoveClass("Label_AnswerFeedback", "Perfect");
			RemoveClass("Label_AnswerFeedback", "Great");
			RemoveClass("Label_AnswerFeedback", "Good");
			RemoveClass("Label_AnswerFeedback", "Miss");
			AddClass("Label_AnswerFeedback", Value);
		}

// Refresh
	// System
	function RefreshSystem() {
		// Settings
			// Display
			ChangeValue("Combobox_SettingsTheme", System.Display.Theme);
			switch(System.Display.Theme) {
				case "Auto":
					ChangeLink("ThemeVariant_Common", "../common_Dark.css");
					ChangeMediaCondition("ThemeVariant_Common", "(prefers-color-scheme: dark)");
					ChangeLink("ThemeVariant_Style", "style_Dark.css");
					ChangeMediaCondition("ThemeVariant_Style", "(prefers-color-scheme: dark)");
					break;
				case "Light":
					ChangeLink("ThemeVariant_Common", "");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "");
					ChangeMediaCondition("ThemeVariant_Style", "");
					break;
				case "Dark":
					ChangeLink("ThemeVariant_Common", "../common_Dark.css");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "style_Dark.css");
					ChangeMediaCondition("ThemeVariant_Style", "");
					break;
				case "Genshin":
					ChangeLink("ThemeVariant_Common", "../common_Genshin.css");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "style_Genshin.css");
					ChangeMediaCondition("ThemeVariant_Style", "");
					break;
				case "HighContrast":
					ChangeLink("ThemeVariant_Common", "../common_HighContrast.css");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "style_HighContrast.css");
					ChangeMediaCondition("ThemeVariant_Style", "");
					break;
				default:
					AlertSystemError("The value of System.Display.Theme \"" + System.Display.Theme + "\" in function RefreshSystem is invalid.");
					break;
			}
			ChangeValue("Combobox_SettingsCursor", System.Display.Cursor);
			switch(System.Display.Cursor) {
				case "Default":
					ChangeCursorOverall("");
					break;
				case "BTRAhoge":
					ChangeCursorOverall("url(../cursors/BTRAhoge.cur), auto");
					break;
				case "Genshin":
					ChangeCursorOverall("url(../cursors/Genshin.cur), auto");
					break;
				case "GenshinNahida":
					ChangeCursorOverall("url(../cursors/GenshinNahida.cur), auto");
					break;
				case "GenshinFurina":
					ChangeCursorOverall("url(../cursors/GenshinFurina.cur), auto");
					break;
				default:
					AlertSystemError("The value of System.Display.Cursor \"" + System.Display.Cursor + "\" in function RefreshSystem is invalid.");
					break;
			}
			ChangeChecked("Checkbox_SettingsBlurBgImage", System.Display.BlurBgImage);
			if(System.Display.BlurBgImage == true) {
				ChangeFilter("Ctnr_BgImage", "blur(20px)");
			} else {
				ChangeFilter("Ctnr_BgImage", "");
			}
			ChangeChecked("Checkbox_SettingsShowTopbar", System.Display.ShowTopbar);
			if(System.Display.ShowTopbar == true && IsFullscreen() == false) {
				Show("Topbar");
			} else {
				Hide("Topbar");
			}
			ChangeValue("Combobox_SettingsHotkeyIndicators", System.Display.HotkeyIndicators);
			switch(System.Display.HotkeyIndicators) {
				case "Disabled":
					FadeHotkeyIndicators();
					break;
				case "ShowOnWrongKeyPress":
				case "ShowOnAnyKeyPress":
					break;
				case "AlwaysShow":
					ShowHotkeyIndicators();
					break;
				default:
					AlertSystemError("The value of System.Display.HotkeyIndicators \"" + System.Display.HotkeyIndicators + "\" in function RefreshSystem is invalid.");
					break;
			}
			ChangeValue("Combobox_SettingsAnim", System.Display.Anim);
			ChangeAnimOverall(System.Display.Anim);

			// Dev
			ChangeChecked("Checkbox_SettingsTryToOptimizePerformance", System.Dev.TryToOptimizePerformance);
			if(System.Dev.TryToOptimizePerformance == true) {
				AddClass("Html", "PerformanceOptimization");
			} else {
				RemoveClass("Html", "PerformanceOptimization");
			}
			ChangeChecked("Checkbox_SettingsShowDebugOutlines", System.Dev.ShowDebugOutlines);
			ChangeShowDebugOutlines(System.Dev.ShowDebugOutlines);
			ChangeChecked("Checkbox_SettingsUseOldTypeface", System.Dev.UseOldTypeface);
			if(System.Dev.UseOldTypeface == true) {
				ChangeLanguage("Html", "ja-JP");
			} else {
				ChangeLanguage("Html", "zh-CN");
			}
			ChangeValue("Textbox_SettingsFont", System.Dev.Font);
			ChangeFont("Html", System.Dev.Font);

			// User Data
			ChangeValue("Textbox_SettingsUserDataImport", "");

		// Save User Data
		localStorage.setItem("System", JSON.stringify(System));
	}
	function RefreshSubsystem() {
		// Settings
			// Display
			ChangeValue("Combobox_SettingsGameFont", Subsystem.Display.GameFont);
			switch(Subsystem.Display.GameFont) {
				case "Default":
					ChangeFont("Label_GameQuestion", "");
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeFont("Cmdbtn_GameAnswerOption" + Looper, "");
					}
					break;
				case "Sans":
				case "Serif":
					ChangeFont("Label_GameQuestion", Subsystem.Display.GameFont.toLowerCase());
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeFont("Cmdbtn_GameAnswerOption" + Looper, Subsystem.Display.GameFont.toLowerCase());
					}
					break;
				default:
					AlertSystemError("The value of Subsystem.Display.GameFont \"" + Subsystem.Display.GameFont + "\" in function RefreshSubsystem is invalid.");
					break;
			}

			// Dev
			ChangeChecked("Checkbox_SettingsCheat", Subsystem.Dev.Cheat);
			if(Subsystem.Dev.Cheat == true) {
				AddClass("Html", "Cheat");
			} else {
				RemoveClass("Html", "Cheat");
			}

		// Save User Data
		localStorage.setItem("KanaMaster_Subsystem", JSON.stringify(Subsystem));
	}

	// Game
	function ClockGame() {
		// Change Self Update Freq
		clearInterval(Automation.ClockGame);
		if(Game.Status.IsRunning == true) {
			Automation.ClockGame = setInterval(ClockGame, 20);
		}

		// Stats
			// Stats 1
			ChangeText("Label_GameTotalCountValue", Game.Stats.TotalCount);
			ChangeText("Label_GameMissCountValue", Game.Stats.MissCount);
			ChangeText("Label_GameComboValue", Game.Stats.Combo);
			if(Game.Stats.Combo > Game.Stats.MaxCombo) {
				Game.Stats.MaxCombo = Game.Stats.Combo;
			}
			ChangeText("Label_GameMaxComboValue", Game.Stats.MaxCombo);
			if(Game.Status.IsRunning == true) {
				if(Game.Status.IsPaused == false) {
					Game.Stats.ElapsedTime = Date.now() - Game.Stats.StartTime;
				} else {
					Game.Stats.StartTime = Date.now() - Game.Stats.ElapsedTime;
				}
			}
			ChangeText("Label_GameElapsedTimeValue", Math.floor(Game.Stats.ElapsedTime / 60000) + ":" + Math.floor(Game.Stats.ElapsedTime % 60000 / 1000).toString().padStart(2, "0"));
			if(Game.Stats.Progress <= 20) {
				Game.Stats.CurrentTimeLimit = Game.Difficulty.TimeLimit.Initial - (Game.Difficulty.TimeLimit.Initial - Game.Difficulty.TimeLimit.Normal) * (Game.Stats.Progress / 20);
			} else {
				Game.Stats.CurrentTimeLimit = Game.Difficulty.TimeLimit.Normal;
			}
			ChangeText("Label_GameCurrentTimeLimitValue", (Game.Stats.CurrentTimeLimit / 1000).toFixed(1) + "s");
			ChangeText("Label_GameAccuracyValue", Game.Stats.Accuracy.toFixed(2) + "%");
			ChangeText("Label_GameAvgReactionTimeValue", (Game.Stats.AvgReactionTime / 1000).toFixed(3) + "s");

			// Stats 2
				// Score
				if(System.Display.Anim > 0) {
					Game0.Stats.ScoreDisplay += (Game.Stats.Score - Game0.Stats.ScoreDisplay) / 5;
					if(Math.abs(Game.Stats.Score - Game0.Stats.ScoreDisplay) < 0.1) {
						Game0.Stats.ScoreDisplay = Game.Stats.Score;
					}
				} else {
					Game0.Stats.ScoreDisplay = Game.Stats.Score;
				}
				ChangeText("Label_GameScore", Game0.Stats.ScoreDisplay.toFixed(0).toString().padStart(8, "0"));

				// Progress
				switch(Game.Mode.Progressing) {
					case "Quantity":
						Game.Stats.Progress = Game.Stats.TotalCount / Game.Mode.Quantity * 100;
						break;
					case "Duration":
						Game.Stats.Progress = Game.Stats.ElapsedTime / (Game.Mode.Duration * 60000) * 100;
						break;
					default:
						AlertSystemError("The value of Game.Mode.Progressing \"" + Game.Mode.Progressing + "\" in function ClockGame is invalid.");
						break;
				}
				ChangeProgring("ProgringFg_GameProgress", 289.03, Game.Stats.Progress);
				ChangeText("ProgringText_GameProgress", Game.Stats.Progress.toFixed(0) + "%");

				// HP
				if(Game.Status.IsRunning == true) {
					if(Game.Status.IsPaused == false) {
						Game.Stats.HP -= 0.02; // Lose 1 HP every second.
					}
				} else {
					Game.Stats.HP = 0;
				}
				ChangeProgring("ProgringFg_GameHP", 289.03, Game.Stats.HP);
				if(Game.Status.IsRunning == true && Game.Status.IsPaused == false && System.Display.Anim > 0) {
					ChangeAnim("ProgringFg_GameHP", "100ms");
					ChangeAnim("ProgringFg_GameTimeLeft", "100ms");
				} else {
					ChangeAnim("ProgringFg_GameHP", "");
					ChangeAnim("ProgringFg_GameTimeLeft", "");
				}
				ChangeText("ProgringText_GameHP", Game.Stats.HP.toFixed(0));
				if(Game.Status.IsRunning == true && Game.Stats.HP <= 20) {
					AddClass("ProgringText_GameHP", "EmphasizedText");
				} else {
					RemoveClass("ProgringText_GameHP", "EmphasizedText");
				}

				// Time Left
				if(Game.Status.IsRunning == true && Game.Status.IsPaused == false) {
					if(Game.Status.IsCoolingDown == false) {
						Game.Stats.TimeLeft = Game.Stats.CurrentTimeLimit - (Date.now() - Game.Stats.StartTime2);
					} else {
						Game.Stats.TimeLeft = Game.Stats.CurrentTimeLimit * ((Date.now() - Game.Stats.StartTime2) / Game.Difficulty.Cooldown);
					}
				} else {
					Game.Stats.TimeLeft = 0;
				}
				ChangeProgring("ProgringFg_GameTimeLeft", 289.03, Game.Stats.TimeLeft / Game.Stats.CurrentTimeLimit * 100);
				ChangeText("ProgringText_GameTimeLeft", (Game.Stats.TimeLeft / 1000).toFixed(1) + "s");
				if(Game.Status.IsRunning == true && Game.Status.IsPaused == false && Game.Status.IsCoolingDown == false && Game.Stats.TimeLeft <= 1500) {
					AddClass("ProgringText_GameTimeLeft", "EmphasizedText");
				} else {
					RemoveClass("ProgringText_GameTimeLeft", "EmphasizedText");
				}

		// Question Board & Answer Board
			// Text
			switch(Game.Mode.Questioning) {
				case "Kana":
					ChangeText("Label_GameQuestion", KanaGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]]);
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeText("Cmdbtn_GameAnswerOption" + Looper, RomajiGrid[Game.Lottery.Answer[Looper][1]][Game.Lottery.Answer[Looper][2]]);
					}
					break;
				case "Romaji":
					ChangeText("Label_GameQuestion", RomajiGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]]);
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeText("Cmdbtn_GameAnswerOption" + Looper, KanaGrid[Game.Lottery.Answer[Looper][1]][Game.Lottery.Answer[Looper][2]]);
					}
					break;
				default:
					AlertSystemError("The value of Game.Mode.Questioning \"" + Game.Mode.Questioning + "\" in function ClockGame is invalid.");
					break;
			}

			// Functionality
			if(Game.Status.IsRunning == true && Game.Status.IsPaused == false) {
				for(let Looper = 1; Looper <= 3; Looper++) {
					ChangeDisabled("Cmdbtn_GameAnswerOption" + Looper, false);
				}
			} else {
				for(let Looper = 1; Looper <= 3; Looper++) {
					ChangeDisabled("Cmdbtn_GameAnswerOption" + Looper, true);
				}
			}

			// Cheat
			for(let Looper = 1; Looper <= 3; Looper++) {
				RemoveClass("Cmdbtn_GameAnswerOption" + Looper, "Active");
			}
			if(Subsystem.Dev.Cheat == true && Game.Lottery.CorrectAnswer > 0) {
				AddClass("Cmdbtn_GameAnswerOption" + Game.Lottery.CorrectAnswer, "Active");
			}

		// Time Up
		if(Game.Status.IsRunning == true && Game.Status.IsPaused == false) {
			if(Game.Status.IsCoolingDown == false) {
				if(Game.Stats.TimeLeft <= 0) {
					AnswerGame(4);
				}
			} else {
				if(Game.Stats.TimeLeft >= Game.Stats.CurrentTimeLimit) {
					HideToast();
					Questioner();
				}
			}
		}

		// Victory
		if(Game.Status.IsRunning == true && Game.Stats.Progress >= 100) {
			Game.Stats.Progress = 100;
			ChangeDisabled("Cmdbtn_GameStart", true);
			RemoveClass("Cmdbtn_GameStart", "Glow");
			ChangeDisabled("Cmdbtn_GameReset", true);
			if(Game.Status.IsPaused == false) {
				// Freeze Game
				Game.Status.IsPaused = true;

				// Show Toast & Update Highscore
				if(Game.Stats.MissCount == 0) {
					if(Game.Stats.Accuracy == 100) {
						ShowToast("ALL PERFECT!");
						Highscore[6][4] = Game.Stats.MaxCombo + " (AP)";
					} else {
						ShowToast("FULL COMBO!");
						Highscore[6][4] = Game.Stats.MaxCombo + " (FC)";
					}
				} else {
					ShowToast("胜利!");
					Highscore[6][4] = Game.Stats.MaxCombo;
				}
				Highscore[6][1] = "最新";
				Highscore[6][2] = new Date().getFullYear() + "/" + (new Date().getMonth() + 1).toString().padStart(2, "0") + "/" + new Date().getDate().toString().padStart(2, "0");
				Highscore[6][3] = Game.Stats.Score.toString().padStart(8, "0");
				Highscore[6][5] = Game.Stats.Accuracy.toFixed(2) + "%";
				Highscore[6][6] = (Game.Stats.AvgReactionTime / 1000).toFixed(3) + "s";
				RefreshHighscore();

				// Reset Game and Scroll to Highscore
				setTimeout(function() {
					ResetGame();
					window.location.replace("#Highscore");
				}, System.Display.Anim * 2 + 1000);
			}
		}

		// Game Over
		if(Game.Status.IsRunning == true && Game.Stats.HP <= 0) {
			Game.Stats.HP = 0;
			ChangeDisabled("Cmdbtn_GameStart", true);
			RemoveClass("Cmdbtn_GameStart", "Glow");
			ChangeDisabled("Cmdbtn_GameReset", true);
			if(Game.Status.IsPaused == false) {
				Game.Status.IsPaused = true;
				ShowToast("游戏结束");
				setTimeout(ResetGame, System.Display.Anim * 2 + 1000);
			}
		}
	}
	function RefreshGame() {
		// Call
		ClockGame();

		// Ctrls
		ChangeDisabled("Cmdbtn_GameStart", false);
		if(Game.Status.IsRunning == false) {
			ChangeText("Cmdbtn_GameStart", "开始");
			AddClass("Cmdbtn_GameStart", "Glow");
			ChangeDisabled("Cmdbtn_GameReset", true);
			ChangeDisabled("Fieldset_SettingsGameMode", false);
			ChangeDisabled("Fieldset_SettingsQuestionRange", false);
			ChangeDisabled("Fieldset_SettingsDifficulty", false);
		} else {
			if(Game.Status.IsPaused == false) {
				ChangeText("Cmdbtn_GameStart", "暂停");
				RemoveClass("Cmdbtn_GameStart", "Glow");
				ChangeDisabled("Cmdbtn_GameReset", true);
			} else {
				ChangeText("Cmdbtn_GameStart", "继续");
				AddClass("Cmdbtn_GameStart", "Glow");
				ChangeDisabled("Cmdbtn_GameReset", false);
			}
			ChangeDisabled("Fieldset_SettingsGameMode", true);
			ChangeDisabled("Fieldset_SettingsQuestionRange", true);
			ChangeDisabled("Fieldset_SettingsDifficulty", true);
		}

		// Settings
			// Game Mode
			ChangeValue("Combobox_SettingsQuestioning", Game.Mode.Questioning);
			ChangeValue("Combobox_SettingsProgressing", Game.Mode.Progressing);
			switch(Game.Mode.Progressing) {
				case "Quantity":
					Hide("Ctrl_SettingsDuration");
					Show("Ctrl_SettingsQuantity");
					break;
				case "Duration":
					Hide("Ctrl_SettingsQuantity");
					Show("Ctrl_SettingsDuration");
					break;
				default:
					AlertSystemError("The value of Game.Mode.Progressing \"" + Game.Mode.Progressing + "\" in function RefreshGame is invalid.");
					break;
			}
			ChangeValue("Textbox_SettingsQuantity", Game.Mode.Quantity);
			ChangeValue("Textbox_SettingsDuration", Game.Mode.Duration);

			// Question Range
			let Counter = 0;
			for(let Looper = 1; Looper <= 19; Looper++) {
				ChangeChecked("Checkbox_SettingsQuestionRange" + Looper, Game.QuestionRange[Looper]);
				if(Game.QuestionRange[Looper] == true) {
					Counter++;
				}
			}
			if(Counter < 2) {
				setTimeout(function() {
					SetQuestionRangeDefaultRange();
					ShowDialog("Game_QuestionRangeBelowMinimumRequirement",
						"Error",
						"出题范围过小，请至少选择两项。已恢复至默认范围。",
						"", "", "", "确定");
				}, 0);
			}
			RemoveClass("Cmdbtn_SettingsQuestionRangeDefaultRange", "Active");
			RemoveClass("Cmdbtn_SettingsQuestionRangeBasicHiragana", "Active");
			RemoveClass("Cmdbtn_SettingsQuestionRangeBasicKatakana", "Active");
			RemoveClass("Cmdbtn_SettingsQuestionRangeExcludeObsolete", "Active");
			RemoveClass("Cmdbtn_SettingsQuestionRangeSelectAll", "Active");
			if(JSON.stringify(Game.QuestionRange) == "[0,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false]") {
				AddClass("Cmdbtn_SettingsQuestionRangeDefaultRange", "Active");
			}
			if(JSON.stringify(Game.QuestionRange) == "[0,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false]") {
				AddClass("Cmdbtn_SettingsQuestionRangeBasicHiragana", "Active");
			}
			if(JSON.stringify(Game.QuestionRange) == "[0,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false]") {
				AddClass("Cmdbtn_SettingsQuestionRangeBasicKatakana", "Active");
			}
			if(JSON.stringify(Game.QuestionRange) == "[0,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false]") {
				AddClass("Cmdbtn_SettingsQuestionRangeExcludeObsolete", "Active");
			}
			if(JSON.stringify(Game.QuestionRange) == "[0,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]") {
				AddClass("Cmdbtn_SettingsQuestionRangeSelectAll", "Active");
			}

			// Difficulty
			ChangeValue("Textbox_SettingsTimeLimitInitial", (Game.Difficulty.TimeLimit.Initial / 1000).toFixed(1));
			ChangeValue("Textbox_SettingsTimeLimitNormal", (Game.Difficulty.TimeLimit.Normal / 1000).toFixed(1));
			ChangeValue("Textbox_SettingsCooldown", (Game.Difficulty.Cooldown / 1000).toFixed(1));
			ChangeValue("Textbox_SettingsHPDrain", Game.Difficulty.HPDrain);
		
		// Save User Data
		localStorage.setItem("KanaMaster_Game", JSON.stringify(Game));
	}

	// Highscore
	function RefreshHighscore() {
		// Remove "Latest" From Original Highscore Table
		for(let Looper = 1; Looper <= 5; Looper++) {
			Highscore[Looper][1] = "名次";
		}

		// Sort (Bubble Sort)
		for(let Looper = 1; Looper <= 5; Looper++) {
			for(let Looper2 = 5; Looper2 >= 1; Looper2--) {
				if(parseInt(Number(Highscore[Looper2 + 1][3])) > parseInt(Number(Highscore[Looper2][3]))) {
					Highscore[0] = Highscore[Looper2];
					Highscore[Looper2] = Highscore[Looper2 + 1];
					Highscore[Looper2 + 1] = Highscore[0];
				}
			}
		}
		Highscore[0] = 0;

		// Refresh
		for(let Looper = 1; Looper <= 6; Looper++) {
			RemoveClass("Item_HighscoreRow" + Looper, "Box");
			if(Highscore[Looper][1] == "最新") {
				AddClass("Item_HighscoreRow" + Looper, "Box");
			} else {
				Highscore[Looper][1] = "#" + Looper;
			}
			ChangeText("Label_HighscoreRow" + Looper + "Sequence", Highscore[Looper][1]);
			ChangeText("Label_HighscoreRow" + Looper + "Date", Highscore[Looper][2]);
			ChangeText("Label_HighscoreRow" + Looper + "Score", Highscore[Looper][3]);
			ChangeText("Label_HighscoreRow" + Looper + "MaxCombo", Highscore[Looper][4]);
			ChangeText("Label_HighscoreRow" + Looper + "Accuracy", Highscore[Looper][5]);
			ChangeText("Label_HighscoreRow" + Looper + "AvgReactionTime", Highscore[Looper][6]);
		}

		// Save User Data
		localStorage.setItem("KanaMaster_Highscore", JSON.stringify(Highscore));
	}

// Cmds
	// Game
		// Ctrl
		function StartGame() {
			if(Game.Status.IsRunning == false) {
				ResetGame();
				Game.Status.IsRunning = true; Game.Status.IsPaused = false; Game.Status.IsCoolingDown = true;
				Game.Stats.StartTime = Date.now(); Game.Stats.StartTime2 = Date.now(); Game.Stats.HP = 100;
				Game.Lottery.Question[1] = [0, 0, 1];
				Game.Lottery.Answer = [
					0,
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];
				window.location.replace("#Game");
			} else {
				if(Game.Status.IsPaused == false) {
					Game.Status.IsPaused = true;
					Game.Lottery.Question[1] = [0, 0, 2];
					Game.Lottery.Answer = [
						0,
						[0, 0, 0],
						[0, 0, 0],
						[0, 0, 0]
					];
					// ShowToast("游戏暂停");
				} else {
					Game.Status.IsPaused = false; Game.Status.IsCoolingDown = true;
					Game.Stats.StartTime = Date.now() - Game.Stats.ElapsedTime;
					Game.Stats.StartTime2 = Date.now();
					Game.Lottery.Question[1] = [0, 0, 1];
					Game.Lottery.Answer = [
						0,
						[0, 0, 0],
						[0, 0, 0],
						[0, 0, 0]
					];
					window.location.replace("#Game");
				}
			}
			RefreshGame();
		}
		function ResetGame() {
			Game.Status = {
				IsRunning: false, IsCoolingDown: false, IsPaused: false
			};
			Game.Stats = {
				TotalCount: 0, MissCount: 0, Combo: 0, MaxCombo: 0,
				StartTime: 0, ElapsedTime: 0, CurrentTimeLimit: 0, Accuracy: 0, AvgReactionTime: 0,
				StartTime2: 0, Score: 0, Progress: 0, HP: 0, TimeLeft: 0
			};
			Game.Lottery = {
				Question: [
					0,
					[0, 0, 0],
					[0, 0, 0]
				],
				Answer: [
					0,
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				],
				CorrectAnswer: 0
			};
			Game0.Stats.ScoreDisplay = 0;
			RefreshGame();
		}

		// Answer
		function AnswerGame(Selector) {
			if(Game.Status.IsCoolingDown == false) {
				// Stats
				if(Selector == Game.Lottery.CorrectAnswer) {
					Game.Stats.TotalCount++;
					Game.Stats.Combo++;
					switch(true) {
						case Game.Stats.TimeLeft / Game.Stats.CurrentTimeLimit >= 0.5:
							Game.Stats.Accuracy = (Game.Stats.Accuracy * (Game.Stats.TotalCount + Game.Stats.MissCount - 1) + 100) / (Game.Stats.TotalCount + Game.Stats.MissCount);
							ChangeText("Label_AnswerFeedback", "Perfect");
							ChangeAnswerFeedbackColor("Perfect");
							break;
						case Game.Stats.TimeLeft / Game.Stats.CurrentTimeLimit >= 0.2:
							Game.Stats.Accuracy = (Game.Stats.Accuracy * (Game.Stats.TotalCount + Game.Stats.MissCount - 1) + 80) / (Game.Stats.TotalCount + Game.Stats.MissCount);
							ChangeText("Label_AnswerFeedback", "Great");
							ChangeAnswerFeedbackColor("Great");
							break;
						case Game.Stats.TimeLeft / Game.Stats.CurrentTimeLimit >= 0:
							Game.Stats.Accuracy = (Game.Stats.Accuracy * (Game.Stats.TotalCount + Game.Stats.MissCount - 1) + 60) / (Game.Stats.TotalCount + Game.Stats.MissCount);
							ChangeText("Label_AnswerFeedback", "Good");
							ChangeAnswerFeedbackColor("Good");
							break;
						default:
							AlertSystemError("The value of Game.Stats.TimeLeft \"" + Game.Stats.TimeLeft + "\" in function AnswerGame is invalid.");
							break;
					}
					Game.Stats.AvgReactionTime = (Game.Stats.AvgReactionTime * (Game.Stats.TotalCount - 1) + (Game.Stats.CurrentTimeLimit - Game.Stats.TimeLeft)) / Game.Stats.TotalCount;
					Game.Stats.Score += Math.floor((10000 - (Game.Stats.CurrentTimeLimit - Game.Stats.TimeLeft)) / 100 * Game.Stats.Combo);
					if(Game.Stats.Score > 99999999) {
						Game.Stats.Score = 99999999;
					}
					Game.Stats.HP += 10;
					if(Game.Stats.HP > 100) {
						Game.Stats.HP = 100;
					}
				} else {
					Game.Stats.MissCount++;
					Game.Stats.Combo = 0;
					if(Game.Stats.TotalCount > 0) {
						Game.Stats.Accuracy = (Game.Stats.Accuracy * (Game.Stats.TotalCount + Game.Stats.MissCount - 1)) / (Game.Stats.TotalCount + Game.Stats.MissCount);
					} else { // When wrongly answering the first question...
						Game.Stats.Accuracy = 0;
					}
					Game.Stats.HP -= Game.Difficulty.HPDrain;
					ChangeText("Label_AnswerFeedback", "Miss!");
					ChangeAnswerFeedbackColor("Miss");
				}

				// Answer Feedback
					// Phase 1
					ChangeAnim("Label_AnswerFeedback", "none");
					Fade("Label_AnswerFeedback");
					ChangeTop("Label_AnswerFeedback", "-30px");
					switch(Game.Lottery.CorrectAnswer) {
						case 1:
							ChangeLeft("Label_AnswerFeedback", ReadWidth("Label_AnswerFeedback") / 4 + "px");
							break;
						case 2:
							ChangeLeft("Label_AnswerFeedback", "calc(50% - " + ReadWidth("Label_AnswerFeedback") / 2 + "px)");
							break;
						case 3:
							ChangeLeft("Label_AnswerFeedback", "calc(100% - " + ReadWidth("Label_AnswerFeedback") * 5 / 4 + "px)");
							break;
						default:
							AlertSystemError("The value of Game.Lottery.CorrectAnswer \"" + Game.Lottery.CorrectAnswer + "\" in function AnswerGame is invalid.");
							break;
					}
					ChangeScale("Label_AnswerFeedback", 1.5);

					// Phase 2
					setTimeout(function() {
						ChangeAnim("Label_AnswerFeedback", "");
						Show("Label_AnswerFeedback");
						ChangeScale("Label_AnswerFeedback", "");
					}, 20);

					// Phase 3
					if(System.Display.Anim > 0) {
						setTimeout(function() {
							ChangeAnim("Label_AnswerFeedback", "750ms");
							Fade("Label_AnswerFeedback");
							ChangeTop("Label_AnswerFeedback", "-40px");
						}, 40 + System.Display.Anim);
					} else {
						setTimeout(function() {
							ChangeAnim("Label_AnswerFeedback", "none");
							Fade("Label_AnswerFeedback");
							ChangeTop("Label_AnswerFeedback", "-40px");
						}, 1040);
					}

				// Start Cooldown
				Game.Status.IsCoolingDown = true;
				Game.Stats.StartTime2 = Date.now();
				RefreshGame();
			} else {
				ShowToast("正在冷却...");
			}
		}

	// Settings
		// Game Mode
		function SetQuestioning() {
			Game.Mode.Questioning = ReadValue("Combobox_SettingsQuestioning");
			RefreshGame();
		}
		function SetProgressing() {
			Game.Mode.Progressing = ReadValue("Combobox_SettingsProgressing");
			RefreshGame();
		}
		function SetQuantity() {
			Game.Mode.Quantity = parseInt(Number(ReadValue("Textbox_SettingsQuantity")));
			if(Game.Mode.Quantity < 5) {
				Game.Mode.Quantity = 5;
			}
			if(Game.Mode.Quantity > 999) {
				Game.Mode.Quantity = 999;
			}
			RefreshGame();
		}
		function SetDuration() {
			Game.Mode.Duration = parseInt(Number(ReadValue("Textbox_SettingsDuration")));
			if(Game.Mode.Duration < 1) {
				Game.Mode.Duration = 1;
			}
			if(Game.Mode.Duration > 60) {
				Game.Mode.Duration = 60;
			}
			RefreshGame();
		}

		// Question Range
		function SetQuestionRange(Selector) {
			Game.QuestionRange[Selector] = IsChecked("Checkbox_SettingsQuestionRange" + Selector);
			RefreshGame();
		}
		function SetQuestionRangeDefaultRange() {
			Game.QuestionRange = [0, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false];
			RefreshGame();
		}
		function SetQuestionRangeBasicHiragana() {
			Game.QuestionRange = [0, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
			RefreshGame();
		}
		function SetQuestionRangeBasicKatakana() {
			Game.QuestionRange = [0, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false];
			RefreshGame();
		}
		function SetQuestionRangeExcludeObsolete() {
			Game.QuestionRange = [0, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false];
			RefreshGame();
		}
		function SetQuestionRangeSelectAll() {
			Game.QuestionRange = [0, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
			RefreshGame();
		}

		// Difficulty
		function SetTimeLimitInitial() {
			Game.Difficulty.TimeLimit.Initial = parseInt(Number(ReadValue("Textbox_SettingsTimeLimitInitial")) * 10) / 10 * 1000;
			if(Game.Difficulty.TimeLimit.Initial < 1000) {
				Game.Difficulty.TimeLimit.Initial = 1000;
			}
			if(Game.Difficulty.TimeLimit.Initial > 10000) {
				Game.Difficulty.TimeLimit.Initial = 10000;
			}
			if(Game.Difficulty.TimeLimit.Initial < Game.Difficulty.TimeLimit.Normal) {
				Game.Difficulty.TimeLimit.Normal = Game.Difficulty.TimeLimit.Initial;
			}
			if(Game.Difficulty.TimeLimit.Initial > Game.Difficulty.TimeLimit.Normal + 6000) {
				Game.Difficulty.TimeLimit.Normal = Game.Difficulty.TimeLimit.Initial - 6000;
			}
			RefreshGame();
		}
		function SetTimeLimitNormal() {
			Game.Difficulty.TimeLimit.Normal = parseInt(Number(ReadValue("Textbox_SettingsTimeLimitNormal")) * 10) / 10 * 1000;
			if(Game.Difficulty.TimeLimit.Normal < 1000) {
				Game.Difficulty.TimeLimit.Normal = 1000;
			}
			if(Game.Difficulty.TimeLimit.Normal > 10000) {
				Game.Difficulty.TimeLimit.Normal = 10000;
			}
			if(Game.Difficulty.TimeLimit.Normal > Game.Difficulty.TimeLimit.Initial) {
				Game.Difficulty.TimeLimit.Initial = Game.Difficulty.TimeLimit.Normal;
			}
			if(Game.Difficulty.TimeLimit.Normal < Game.Difficulty.TimeLimit.Initial - 6000) {
				Game.Difficulty.TimeLimit.Initial = Game.Difficulty.TimeLimit.Normal + 6000;
			}
			RefreshGame();
		}
		function SetCooldown() {
			Game.Difficulty.Cooldown = parseInt(Number(ReadValue("Textbox_SettingsCooldown")) * 10) / 10 * 1000;
			if(Game.Difficulty.Cooldown < 200) {
				Game.Difficulty.Cooldown = 200;
			}
			if(Game.Difficulty.Cooldown > 10000) {
				Game.Difficulty.Cooldown = 10000;
			}
			RefreshGame();
		}
		function SetHPDrain() {
			Game.Difficulty.HPDrain = parseInt(Number(ReadValue("Textbox_SettingsHPDrain")));
			if(Game.Difficulty.HPDrain < 5) {
				Game.Difficulty.HPDrain = 5;
			}
			if(Game.Difficulty.HPDrain > 100) {
				Game.Difficulty.HPDrain = 100;
			}
			RefreshGame();
		}

		// Display
		function SetGameFont() {
			Subsystem.Display.GameFont = ReadValue("Combobox_SettingsGameFont");
			RefreshSubsystem();
		}

		// Dev
		function SetCheat() {
			Subsystem.Dev.Cheat = IsChecked("Checkbox_SettingsCheat");
			RefreshSubsystem();
		}

		// User Data
		function ImportUserData() {
			if(ReadValue("Textbox_SettingsUserDataImport") != "") {
				if(ReadValue("Textbox_SettingsUserDataImport").startsWith("{\"System\":{\"Display\":{\"Theme\":") == true) {
					let Objects = JSON.parse(ReadValue("Textbox_SettingsUserDataImport"));
					Object.keys(Objects).forEach(function(ObjectName) {
						localStorage.setItem(ObjectName, JSON.stringify(Objects[ObjectName]));
					});
					ChangeCursorOverall("wait");
					window.location.reload();
				} else {
					ShowDialog("System_JSONStringInvalid",
						"Error",
						"您键入的 JSON 字符串不合法。",
						"", "", "", "确定");
					RefreshSystem();
				}
			}
		}
		function ExportUserData() {
			navigator.clipboard.writeText("{" +
				"\"System\":" + JSON.stringify(System) + "," +
				"\"KanaMaster_Subsystem\":" + JSON.stringify(Subsystem) + "," +
				"\"KanaMaster_Game\":" + JSON.stringify(Game) + "," +
				"\"KanaMaster_Highscore\":" + JSON.stringify(Highscore) +
				"}");
			ShowDialog("System_UserDataExported",
				"Info",
				"已导出用户数据至剪贴板。",
				"", "", "", "确定");
		}
		function ConfirmClearUserData() {
			ShowDialog("System_ConfirmClearUserData",
				"Caution",
				"您确认要清空用户数据？",
				"", "", "清空", "取消");
		}

	// Dialog
	function AnswerDialog(Selector) {
		switch(Interaction.DialogEvent) {
			case "System_LanguageUnsupported":
			case "System_MajorUpdateDetected":
			case "System_JSONStringInvalid":
			case "System_UserDataExported":
			case "Game_QuestionRangeBelowMinimumRequirement":
				switch(Selector) {
					case 3:
						break;
					default:
						setTimeout(function() {
							AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						}, 0);
						break;
				}
				break;
			case "System_ConfirmClearUserData":
				switch(Selector) {
					case 2:
						localStorage.clear();
						ChangeCursorOverall("wait");
						window.location.reload();
						break;
					case 3:
						break;
					default:
						setTimeout(function() {
							AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						}, 0);
						break;
				}
				break;
			case "System_ConfirmGoToTutorial":
				switch(Selector) {
					case 2:
						window.location.replace("#Item_HelpTutorial");
						break;
					case 3:
						break;
					default:
						setTimeout(function() {
							AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						}, 0);
						break;
				}
				break;
			case "System_Error":
				switch(Selector) {
					case 2:
						window.location.replace("#Item_SettingsUserData");
						break;
					case 3:
						break;
					default:
						setTimeout(function() {
							AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						}, 0);
						break;
				}
				break;
			default:
				setTimeout(function() {
					AlertSystemError("The value of Interaction.DialogEvent \"" + Interaction.DialogEvent + "\" in function AnswerDialog is invalid.");
				}, 0);
				return;
		}
		HideDialog();
	}

// Listeners
	// On Keyboard
	document.addEventListener("keydown", function(Hotkey) {
		if(Hotkey.key == "F1") {
			if(Game.Status.IsRunning == true && Game.Status.IsPaused == false) { // Make sure the game is paused before showing the dialog.
				Game.Status.IsPaused = true;
				Game.Lottery.Question[1] = [0, 0, 2];
				Game.Lottery.Answer = [
					0,
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];
				RefreshGame();
			}
			ShowDialog("System_ConfirmGoToTutorial",
				"Question",
				"您按下了 F1 键。是否前往教程？",
				"", "", "前往", "取消");
			if(System.Display.HotkeyIndicators == "ShowOnAnyKeyPress" || System.Display.HotkeyIndicators == "AlwaysShow") {
				ShowHotkeyIndicators();
			}
		}
		if(document.activeElement.tagName.toLowerCase() != "input" && document.activeElement.tagName.toLowerCase() != "textarea") { // Prevent hotkey activation when inputing text etc.
			switch(Hotkey.key.toUpperCase()) {
				case "1":
				case "2":
				case "3":
					Click("Cmdbtn_GameAnswerOption" + Hotkey.key);
					if(System.Display.HotkeyIndicators == "ShowOnAnyKeyPress" || System.Display.HotkeyIndicators == "AlwaysShow") {
						ShowHotkeyIndicators();
					}
					break;
				case "S":
					Click("Cmdbtn_GameStart");
					if(System.Display.HotkeyIndicators == "ShowOnAnyKeyPress" || System.Display.HotkeyIndicators == "AlwaysShow") {
						ShowHotkeyIndicators();
					}
					break;
				case "R":
					Click("Cmdbtn_GameReset");
					if(System.Display.HotkeyIndicators == "ShowOnAnyKeyPress" || System.Display.HotkeyIndicators == "AlwaysShow") {
						ShowHotkeyIndicators();
					}
					break;
				default:
					if((System.Display.HotkeyIndicators == "ShowOnWrongKeyPress" && IsWrongKeyNegligible(Hotkey.key) == false && Hotkey.key != "F1") ||
					System.Display.HotkeyIndicators == "ShowOnAnyKeyPress" || System.Display.HotkeyIndicators == "AlwaysShow") {
						ShowHotkeyIndicators();
					}
					break;
			}
		}
	});

// Features
	// Game
	function Questioner() {
		Game.Lottery.Question[2] = Game.Lottery.Question[1];
		Questioner_GenerateQuestion();
		Game.Lottery.CorrectAnswer = Randomize(1, 3);
		switch(Game.Lottery.CorrectAnswer) {
			case 1:
				Game.Lottery.Answer[1] = Game.Lottery.Question[1];
				Questioner_GenerateAnswer2();
				Questioner_GenerateAnswer3();
				break;
			case 2:
				Game.Lottery.Answer[2] = Game.Lottery.Question[1];
				Questioner_GenerateAnswer1();
				Questioner_GenerateAnswer3();
				break;
			case 3:
				Game.Lottery.Answer[3] = Game.Lottery.Question[1];
				Questioner_GenerateAnswer1();
				Questioner_GenerateAnswer2();
				break;
			default:
				AlertSystemError("The value of Game.Lottery.CorrectAnswer \"" + Game.Lottery.CorrectAnswer + "\" in function Questioner is invalid.");
				break;
		}
		Game.Status.IsCoolingDown = false;
		Game.Stats.StartTime2 = Date.now();
	}
	function Questioner_GenerateQuestion() {
		do {
			Game.Lottery.Question[1] = [0, Randomize(1, 19), Randomize(1, 20)];
		} while(
			// Prevent Out of Question Range
			Game.QuestionRange[Game.Lottery.Question[1][1]] == false ||
			// Prevent Blank Entry
			RomajiGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]] == "" ||
			// Prevent Same with Previous Question
			RomajiGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]] == RomajiGrid[Game.Lottery.Question[2][1]][Game.Lottery.Question[2][2]]
		);
	}
	function Questioner_GenerateAnswer1() {
		do {
			Game.Lottery.Answer[1] = [0, Randomize(1, 19), Randomize(1, 20)];
		} while(
			// Prevent Out of Question Range
			Game.QuestionRange[Game.Lottery.Answer[1][1]] == false ||
			// Prevent Blank Entry
			RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] == "" ||
			// Prevent Duplication
			RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] == RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]] ||
			RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] == RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]]
		);
	}
	function Questioner_GenerateAnswer2() {
		do {
			Game.Lottery.Answer[2] = [0, Randomize(1, 19), Randomize(1, 20)];
		} while(
			// Prevent Out of Question Range
			Game.QuestionRange[Game.Lottery.Answer[2][1]] == false ||
			// Prevent Blank Entry
			RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]] == "" ||
			// Prevent Duplication
			RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]] == RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] ||
			RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]] == RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]]
		);
	}
	function Questioner_GenerateAnswer3() {
		do {
			Game.Lottery.Answer[3] = [0, Randomize(1, 19), Randomize(1, 20)];
		} while(
			// Prevent Out of Question Range
			Game.QuestionRange[Game.Lottery.Answer[3][1]] == false ||
			// Prevent Blank Entry
			RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]] == "" ||
			// Prevent Duplication
			RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]] == RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] ||
			RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]] == RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]]
		);
	}

// Error Handling
function AlertSystemError(Message) {
	console.error("● 系统错误\n" +
		Message);
	ShowDialog("System_Error",
		"Error",
		"抱歉，发生了系统错误。您可在浏览器控制台查看错误信息，或尝试清空用户数据以解决问题。是否前往用户数据？",
		"", "", "前往", "取消");
}
