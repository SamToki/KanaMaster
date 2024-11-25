// For SamToki.github.io/KanaMaster
// Released under GNU GPL v3 open source license.
// (C) 2023 SAM TOKI STUDIO

// Initialization
	// Declare variables
	"use strict";
		// Unsaved
		const CurrentVersion = 3.09,
		KanaGrid = [
			["", "<span lang=\"zh-CN\">准备</span>", "<span lang=\"zh-CN\">暂停</span>"],
			[0, "あ",   "か",   "さ",   "た",   "な",   "は",   "ま",   "や",   "ら",   "わ",   "が",   "ざ",   "だ",   "ば",   "ぱ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "い",   "き",   "し",   "ち",   "に",   "ひ",   "み",   "",     "り",   "",     "ぎ",   "じ",   "ぢ",   "び",   "ぴ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "う",   "く",   "す",   "つ",   "ぬ",   "ふ",   "む",   "ゆ",   "る",   "",     "ぐ",   "ず",   "づ",   "ぶ",   "ぷ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "え",   "け",   "せ",   "て",   "ね",   "へ",   "め",   "",     "れ",   "",     "げ",   "ぜ",   "で",   "べ",   "ぺ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "お",   "こ",   "そ",   "と",   "の",   "ほ",   "も",   "よ",   "ろ",   "を",   "ご",   "ぞ",   "ど",   "ぼ",   "ぽ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "ア",   "カ",   "サ",   "タ",   "ナ",   "ハ",   "マ",   "ヤ",   "ラ",   "ワ",   "ガ",   "ザ",   "ダ",   "バ",   "パ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "イ",   "キ",   "シ",   "チ",   "ニ",   "ヒ",   "ミ",   "",     "リ",   "",     "ギ",   "ジ",   "ヂ",   "ビ",   "ピ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "ウ",   "ク",   "ス",   "ツ",   "ヌ",   "フ",   "ム",   "ユ",   "ル",   "",     "グ",   "ズ",   "ヅ",   "ブ",   "プ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "エ",   "ケ",   "セ",   "テ",   "ネ",   "ヘ",   "メ",   "",     "レ",   "",     "ゲ",   "ゼ",   "デ",   "ベ",   "ペ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "オ",   "コ",   "ソ",   "ト",   "ノ",   "ホ",   "モ",   "ヨ",   "ロ",   "ヲ",   "ゴ",   "ゾ",   "ド",   "ボ",   "ポ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "ん",   "ン",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "きゃ", "しゃ", "ちゃ", "にゃ", "ひゃ", "みゃ", "",     "りゃ", "",     "ぎゃ", "じゃ", "",     "びゃ", "ぴゃ", "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "きゅ", "しゅ", "ちゅ", "にゅ", "ひゅ", "みゅ", "",     "りゅ", "",     "ぎゅ", "じゅ", "",     "びゅ", "ぴゅ", "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "きょ", "しょ", "ちょ", "にょ", "ひょ", "みょ", "",     "りょ", "",     "ぎょ", "じょ", "",     "びょ", "ぴょ", "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "キャ", "シャ", "チャ", "ニャ", "ヒャ", "ミャ", "",     "リャ", "",     "ギャ", "ジャ", "",     "ビャ", "ピャ", "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "キュ", "シュ", "チュ", "ニュ", "ヒュ", "ミュ", "",     "リュ", "",     "ギュ", "ジュ", "",     "ビュ", "ピュ", "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "キョ", "ショ", "チョ", "ニョ", "ヒョ", "ミョ", "",     "リョ", "",     "ギョ", "ジョ", "",     "ビョ", "ピョ", "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "イェ", "ウィ", "ウェ", "ウォ", "ヴァ", "ヴィ", "ヴ",   "ヴェ", "ヴォ", "クァ", "クィ", "クォ", "シェ", "チェ", "ティ", "テュ", "ファ", "フィ", "フェ", "フォ", "ジェ", "ディ", "デュ"],
			[0, "ゐ",   "ゑ",   "ヰ",   "ヱ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""]
		],
		RomajiGrid = [
			["", "<span lang=\"zh-CN\">准备</span>", "<span lang=\"zh-CN\">暂停</span>"],
			[0, "a",    "ka",   "sa",   "ta",   "na",   "ha",   "ma",   "ya",   "ra",   "wa",   "ga",   "za",   "da",   "ba",   "pa",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "i",    "ki",   "shi",  "chi",  "ni",   "hi",   "mi",   "",     "ri",   "",     "gi",   "ji",   "ji",   "bi",   "pi",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "u",    "ku",   "su",   "tsu",  "nu",   "fu",   "mu",   "yu",   "ru",   "",     "gu",   "zu",   "zu",   "bu",   "pu",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "e",    "ke",   "se",   "te",   "ne",   "he",   "me",   "",     "re",   "",     "ge",   "ze",   "de",   "be",   "pe",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "o",    "ko",   "so",   "to",   "no",   "ho",   "mo",   "yo",   "ro",   "wo",   "go",   "zo",   "do",   "bo",   "po",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "a",    "ka",   "sa",   "ta",   "na",   "ha",   "ma",   "ya",   "ra",   "wa",   "ga",   "za",   "da",   "ba",   "pa",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "i",    "ki",   "shi",  "chi",  "ni",   "hi",   "mi",   "",     "ri",   "",     "gi",   "ji",   "ji",   "bi",   "pi",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "u",    "ku",   "su",   "tsu",  "nu",   "fu",   "mu",   "yu",   "ru",   "",     "gu",   "zu",   "zu",   "bu",   "pu",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "e",    "ke",   "se",   "te",   "ne",   "he",   "me",   "",     "re",   "",     "ge",   "ze",   "de",   "be",   "pe",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "o",    "ko",   "so",   "to",   "no",   "ho",   "mo",   "yo",   "ro",   "wo",   "go",   "zo",   "do",   "bo",   "po",   "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "n",    "n",    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "kya",  "sha",  "cha",  "nya",  "hya",  "mya",  "",     "rya",  "",     "gya",  "ja",   "",     "bya",  "pya",  "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "kyu",  "shu",  "chu",  "nyu",  "hyu",  "myu",  "",     "ryu",  "",     "gyu",  "ju",   "",     "byu",  "pyu",  "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "kyo",  "sho",  "cho",  "nyo",  "hyo",  "myo",  "",     "ryo",  "",     "gyo",  "jo",   "",     "byo",  "pyo",  "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "kya",  "sha",  "cha",  "nya",  "hya",  "mya",  "",     "rya",  "",     "gya",  "ja",   "",     "bya",  "pya",  "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "kyu",  "shu",  "chu",  "nyu",  "hyu",  "myu",  "",     "ryu",  "",     "gyu",  "ju",   "",     "byu",  "pyu",  "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "",     "kyo",  "sho",  "cho",  "nyo",  "hyo",  "myo",  "",     "ryo",  "",     "gyo",  "jo",   "",     "byo",  "pyo",  "",     "",     "",     "",     "",     "",     "",     ""],
			[0, "ye",   "wi",   "we",   "wo",   "va",   "vi",   "v",    "ve",   "vo",   "kwa",  "kwi",  "kwo",  "she",  "che",  "ti",   "tyu",  "fa",   "fi",   "fe",   "fo",   "je",   "di",   "dyu"],
			[0, "wi",   "we",   "wi",   "we",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""]
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
			Audio: {
				VoiceVolume: 0,
				AlsoPlayVoiceOnMiss: false
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
					Initial: 8000, Final: 6000
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
		AnswerLog = {
			All: "", MissesOnly: "", Sequence: 1
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

	// Load
	window.onload = Load();
	function Load() {
		// User data
		if(localStorage.System != undefined) {
			System = JSON.parse(localStorage.getItem("System"));
		}
		switch(System.I18n.Language) {
			case "Auto":
				/* navigator.language ... */
				break;
			case "en-US":
				/* ChangeCursorOverall("wait");
				window.location.replace("index_" + System.I18n.Language + ".html"); */
				ShowDialog("System_LanguageUnsupported",
					"Error",
					"<span lang=\"en-US\">Sorry, this webpage currently does not support English (US).</span>",
					"", "", "", "<span lang=\"en-US\">OK</span>");
				break;
			case "ja-JP":
				ShowDialog("System_LanguageUnsupported",
					"Error",
					"<span lang=\"ja-JP\">すみません。このページは日本語にまだサポートしていません。</span>",
					"", "", "", "<span lang=\"ja-JP\">OK</span>");
				break;
			case "zh-CN":
				break;
			case "zh-TW":
				ShowDialog("System_LanguageUnsupported",
					"Error",
					"<span lang=\"zh-TW\">抱歉，本網頁暫不支援繁體中文。</span>",
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
		if(localStorage.KanaMaster_Subsystem != undefined) {
			Subsystem = JSON.parse(localStorage.getItem("KanaMaster_Subsystem"));
		}
		if(localStorage.KanaMaster_Game != undefined) {
			Game = JSON.parse(localStorage.getItem("KanaMaster_Game"));
		}
		if(localStorage.KanaMaster_AnswerLog != undefined) {
			AnswerLog = JSON.parse(localStorage.getItem("KanaMaster_AnswerLog"));
		}
		if(localStorage.KanaMaster_Highscore != undefined) {
			Highscore = JSON.parse(localStorage.getItem("KanaMaster_Highscore"));
		}

		// Refresh
		RefreshSystem();
		RefreshSubsystem();
		RefreshGame();
		RefreshAnswerLog();
		RefreshHighscore();

		// PWA
		navigator.serviceWorker.register("script_ServiceWorker.js").then(function(ServiceWorkerRegistration) {
			// Detect update (https://stackoverflow.com/a/41896649)
			ServiceWorkerRegistration.addEventListener("updatefound", function() {
				const ServiceWorkerInstallation = ServiceWorkerRegistration.installing;
				ServiceWorkerInstallation.addEventListener("statechange", function() {
					if(ServiceWorkerInstallation.state == "installed" && navigator.serviceWorker.controller != null) {
						Show("Label_HelpPWANewVersionReady");
						ShowDialog("System_PWANewVersionReady",
							"Info",
							"新版本已就绪，将在下次启动时生效。",
							"", "", "", "确定");
					}
				});
			});

			// Read service worker status (https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html)
			switch(true) {
				case ServiceWorkerRegistration.installing != null:
					ChangeText("Label_SettingsPWAServiceWorkerRegistration", "等待生效");
					break;
				case ServiceWorkerRegistration.waiting != null:
					ChangeText("Label_SettingsPWAServiceWorkerRegistration", "等待更新");
					Show("Label_HelpPWANewVersionReady");
					ShowDialog("System_PWANewVersionReady",
						"Info",
						"新版本已就绪，将在下次启动时生效。",
						"", "", "", "确定");
					break;
				case ServiceWorkerRegistration.active != null:
					ChangeText("Label_SettingsPWAServiceWorkerRegistration", "已生效");
					break;
				default:
					break;
			}
			if(navigator.serviceWorker.controller != null) {
				ChangeText("Label_SettingsPWAServiceWorkerController", "已生效");
			} else {
				ChangeText("Label_SettingsPWAServiceWorkerController", "未生效");
			}
		});

		// Ready
		setTimeout(HideToast, 0);
	}

	// Pause the game before exiting
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
	// Webpage
	function RefreshWebpage() {
		ShowDialog("System_RefreshingWebpage",
			"Info",
			"正在刷新网页...",
			"", "", "", "确定");
		ChangeCursorOverall("wait");
		window.location.reload();
	}

	// System
	function RefreshSystem() {
		// Topbar
		if(IsMobileLayout() == false) {
			HideHorizontally("Button_Nav");
			ChangeInert("DropctrlGroup_Nav", false);
		} else {
			Show("Button_Nav");
			ChangeInert("DropctrlGroup_Nav", true);
		}

		// Fullscreen
		if(IsFullscreen() == false) {
			Show("Topbar");
			ChangeText("Button_GameToggleFullscreen",
				"<svg class=\"Icon\" viewBox=\"0 0 16 16\" aria-hidden=\"true\">" +
				"	<path d=\"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707\"/>" +
				"</svg>");
			ChangeAriaLabel("Button_GameToggleFullscreen", "全屏");
		} else {
			Hide("Topbar");
			ChangeText("Button_GameToggleFullscreen",
				"<svg class=\"Icon\" viewBox=\"0 0 16 16\" aria-hidden=\"true\">" +
				"	<path d=\"M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z\"/>" +
				"</svg>");
			ChangeAriaLabel("Button_GameToggleFullscreen", "退出全屏");
		}

		// Settings
			// Display
			if(window.matchMedia("(prefers-contrast: more)").matches == false) {
				ChangeDisabled("Combobox_SettingsTheme", false);
			} else {
				System.Display.Theme = "HighContrast";
				ChangeDisabled("Combobox_SettingsTheme", true);
			}
			ChangeValue("Combobox_SettingsTheme", System.Display.Theme);
			switch(System.Display.Theme) {
				case "Auto":
					ChangeLink("ThemeVariant_Common", "../styles/common_Dark.css");
					ChangeMediaCondition("ThemeVariant_Common", "(prefers-color-scheme: dark)");
					ChangeLink("ThemeVariant_Style", "styles/style_Dark.css");
					ChangeMediaCondition("ThemeVariant_Style", "(prefers-color-scheme: dark)");
					break;
				case "Light":
					ChangeLink("ThemeVariant_Common", "");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "");
					ChangeMediaCondition("ThemeVariant_Style", "");
					break;
				case "Dark":
					ChangeLink("ThemeVariant_Common", "../styles/common_Dark.css");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "styles/style_Dark.css");
					ChangeMediaCondition("ThemeVariant_Style", "");
					break;
				case "Genshin":
					ChangeLink("ThemeVariant_Common", "../styles/common_Genshin.css");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "styles/style_Genshin.css");
					ChangeMediaCondition("ThemeVariant_Style", "");
					break;
				case "HighContrast":
					ChangeLink("ThemeVariant_Common", "../styles/common_HighContrast.css");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "styles/style_HighContrast.css");
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
				case "Genshin":
				case "GenshinFurina":
				case "GenshinNahida":
					ChangeCursorOverall("url(../cursors/" + System.Display.Cursor + ".cur), auto");
					break;
				default:
					AlertSystemError("The value of System.Display.Cursor \"" + System.Display.Cursor + "\" in function RefreshSystem is invalid.");
					break;
			}
			ChangeChecked("Checkbox_SettingsBlurBgImage", System.Display.BlurBgImage);
			if(System.Display.BlurBgImage == true) {
				AddClass("Ctnr_BgImage", "Blur");
			} else {
				RemoveClass("Ctnr_BgImage", "Blur");
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
			if(window.matchMedia("(prefers-reduced-motion: reduce)").matches == false) {
				ChangeDisabled("Combobox_SettingsAnim", false);
			} else {
				System.Display.Anim = 0;
				ChangeDisabled("Combobox_SettingsAnim", true);
			}
			ChangeValue("Combobox_SettingsAnim", System.Display.Anim);
			ChangeAnimOverall(System.Display.Anim);

			// Audio
			ChangeChecked("Checkbox_SettingsPlayAudio", System.Audio.PlayAudio);
			if(System.Audio.PlayAudio == true) {
				Show("Ctrl_SettingsVoiceVolume");
			} else {
				StopAllAudio();
				Hide("Ctrl_SettingsVoiceVolume");
			}
			if(System.Audio.PlayAudio == true && Subsystem.Audio.VoiceVolume > 0) {
				Show("Ctrl_SettingsAlsoPlayVoiceOnMiss");
			} else {
				Hide("Ctrl_SettingsAlsoPlayVoiceOnMiss");
			}

			// PWA
			if(window.matchMedia("(display-mode: standalone)").matches == true) {
				ChangeText("Label_SettingsPWAStandaloneDisplay", "是");
			} else {
				ChangeText("Label_SettingsPWAStandaloneDisplay", "否");
			}

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

			// User data
			ChangeValue("Textbox_SettingsUserDataImport", "");

		// Save user data
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
						ChangeFont("Button_GameAnswerOption" + Looper, "");
					}
					break;
				case "Sans":
				case "Serif":
					ChangeFont("Label_GameQuestion", Subsystem.Display.GameFont.toLowerCase());
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeFont("Button_GameAnswerOption" + Looper, Subsystem.Display.GameFont.toLowerCase());
					}
					break;
				default:
					AlertSystemError("The value of Subsystem.Display.GameFont \"" + Subsystem.Display.GameFont + "\" in function RefreshSubsystem is invalid.");
					break;
			}

			// Audio
			ChangeValue("Slider_SettingsVoiceVolume", Subsystem.Audio.VoiceVolume);
			if(Subsystem.Audio.VoiceVolume > 0) {
				ChangeText("Label_SettingsVoiceVolume", Subsystem.Audio.VoiceVolume + "%");
			} else {
				ChangeText("Label_SettingsVoiceVolume", "禁用");
			}
			ChangeVolume("Audio_Voice", Subsystem.Audio.VoiceVolume);
			if(System.Audio.PlayAudio == true && Subsystem.Audio.VoiceVolume > 0) {
				Show("Ctrl_SettingsAlsoPlayVoiceOnMiss");
			} else {
				Hide("Ctrl_SettingsAlsoPlayVoiceOnMiss");
			}
			ChangeChecked("Checkbox_SettingsAlsoPlayVoiceOnMiss", Subsystem.Audio.AlsoPlayVoiceOnMiss);

			// Dev
			ChangeChecked("Checkbox_SettingsCheat", Subsystem.Dev.Cheat);
			if(Subsystem.Dev.Cheat == true) {
				AddClass("Html", "Cheat");
			} else {
				RemoveClass("Html", "Cheat");
			}

		// Save user data
		localStorage.setItem("KanaMaster_Subsystem", JSON.stringify(Subsystem));
	}

	// Game
	function ClockGame() {
		// Change self update freq
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
			Game.Stats.CurrentTimeLimit = Game.Difficulty.TimeLimit.Initial - (Game.Difficulty.TimeLimit.Initial - Game.Difficulty.TimeLimit.Final) * (Game.Stats.Progress / 100);
			ChangeText("Label_GameCurrentTimeLimitValue", (Game.Stats.CurrentTimeLimit / 1000).toFixed(1) + "s");
			ChangeText("Label_GameAccuracyValue", Game.Stats.Accuracy.toFixed(2) + "%");
			ChangeText("Label_GameAvgReactionTimeValue", (Game.Stats.AvgReactionTime / 1000).toFixed(3) + "s");

			// Stats 2
				// Score
				if(System.Display.Anim > 0) {
					Game0.Stats.ScoreDisplay += (Game.Stats.Score - Game0.Stats.ScoreDisplay) / 5;
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
				ChangeProgring("ProgringFg_GameProgress", 100, Game.Stats.Progress);
				ChangeText("ProgringText_GameProgress", Game.Stats.Progress.toFixed(0) + "%");

				// HP
				if(Game.Status.IsRunning == true) {
					if(Game.Status.IsPaused == false) {
						Game.Stats.HP -= 0.02; // Approximately lose 1 HP every second.
					}
				} else {
					Game.Stats.HP = 0;
				}
				ChangeProgring("ProgringFg_GameHP", 100, Game.Stats.HP);
				ChangeText("ProgringText_GameHP", Game.Stats.HP.toFixed(0));
				if(Game.Status.IsRunning == true && Game.Stats.HP <= 20) {
					AddClass("ProgringText_GameHP", "RedText");
				} else {
					RemoveClass("ProgringText_GameHP", "RedText");
				}

				// Time left
				if(Game.Status.IsRunning == true && Game.Status.IsPaused == false) {
					if(Game.Status.IsCoolingDown == false) {
						Game.Stats.TimeLeft = Game.Stats.CurrentTimeLimit - (Date.now() - Game.Stats.StartTime2);
					} else {
						Game.Stats.TimeLeft = Game.Stats.CurrentTimeLimit * ((Date.now() - Game.Stats.StartTime2) / Game.Difficulty.Cooldown);
					}
				} else {
					Game.Stats.TimeLeft = 0;
				}
				ChangeProgring("ProgringFg_GameTimeLeft", 100, Game.Stats.TimeLeft / Game.Stats.CurrentTimeLimit * 100);
				if(Game.Status.IsRunning == true && Game.Status.IsPaused == false && System.Display.Anim > 0) {
					ChangeAnim("ProgringFg_GameTimeLeft", "100ms");
				} else {
					ChangeAnim("ProgringFg_GameTimeLeft", "");
				}
				ChangeText("ProgringText_GameTimeLeft", (Game.Stats.TimeLeft / 1000).toFixed(1) + "s");
				if(Game.Status.IsRunning == true && Game.Status.IsPaused == false && Game.Status.IsCoolingDown == false && Game.Stats.TimeLeft <= 1500) {
					AddClass("ProgringText_GameTimeLeft", "RedText");
				} else {
					RemoveClass("ProgringText_GameTimeLeft", "RedText");
				}

		// Question board & answer board
			// Text
			switch(Game.Mode.Questioning) {
				case "Kana":
					ChangeText("Label_GameQuestion", KanaGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]]);
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeText("Button_GameAnswerOption" + Looper, RomajiGrid[Game.Lottery.Answer[Looper][1]][Game.Lottery.Answer[Looper][2]]);
					}
					break;
				case "Romaji":
					ChangeText("Label_GameQuestion", RomajiGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]]);
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeText("Button_GameAnswerOption" + Looper, KanaGrid[Game.Lottery.Answer[Looper][1]][Game.Lottery.Answer[Looper][2]]);
					}
					break;
				default:
					AlertSystemError("The value of Game.Mode.Questioning \"" + Game.Mode.Questioning + "\" in function ClockGame is invalid.");
					break;
			}

			// Functionality
			if(Game.Status.IsRunning == true && Game.Status.IsPaused == false) {
				for(let Looper = 1; Looper <= 3; Looper++) {
					ChangeDisabled("Button_GameAnswerOption" + Looper, false);
				}
			} else {
				for(let Looper = 1; Looper <= 3; Looper++) {
					ChangeDisabled("Button_GameAnswerOption" + Looper, true);
				}
			}

			// Cheat
			for(let Looper = 1; Looper <= 3; Looper++) {
				RemoveClass("Button_GameAnswerOption" + Looper, "Active");
			}
			if(Subsystem.Dev.Cheat == true && Game.Lottery.CorrectAnswer > 0) {
				AddClass("Button_GameAnswerOption" + Game.Lottery.CorrectAnswer, "Active");
			}

		// Time up
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
			ChangeDisabled("Button_GameStart", true);
			RemoveClass("Button_GameStart", "Glow");
			ChangeDisabled("Button_GameReset", true);
			if(Game.Status.IsPaused == false) {
				// Freeze game
				Game.Status.IsPaused = true;

				// Show toast and update highscore
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
				Highscore[6][2] = new Date(Date.now()).toLocaleDateString(ReadLanguage("Html"));
				Highscore[6][3] = Game.Stats.Score.toString().padStart(8, "0");
				Highscore[6][5] = Game.Stats.Accuracy.toFixed(2) + "%";
				Highscore[6][6] = (Game.Stats.AvgReactionTime / 1000).toFixed(3) + "s";
				RefreshHighscore();

				// Reset game and scroll to highscore
				setTimeout(function() {
					ResetGame();
					ScrollIntoView("Highscore");
				}, System.Display.Anim * 2 + 1000);
			}
		}

		// Game over
		if(Game.Status.IsRunning == true && Game.Stats.HP <= 0) {
			Game.Stats.HP = 0;
			ChangeDisabled("Button_GameStart", true);
			RemoveClass("Button_GameStart", "Glow");
			ChangeDisabled("Button_GameReset", true);
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
		ChangeDisabled("Button_GameStart", false);
		if(Game.Status.IsRunning == false) {
			ChangeText("Button_GameStart", "开始");
			AddClass("Button_GameStart", "Glow");
			ChangeDisabled("Button_GameReset", true);
			ChangeDisabled("Fieldset_SettingsGameMode", false);
			ChangeDisabled("Fieldset_SettingsQuestionRange", false);
			ChangeDisabled("Fieldset_SettingsDifficulty", false);
		} else {
			if(Game.Status.IsPaused == false) {
				ChangeText("Button_GameStart", "暂停");
				RemoveClass("Button_GameStart", "Glow");
				ChangeDisabled("Button_GameReset", true);
			} else {
				ChangeText("Button_GameStart", "继续");
				AddClass("Button_GameStart", "Glow");
				ChangeDisabled("Button_GameReset", false);
			}
			ChangeDisabled("Fieldset_SettingsGameMode", true);
			ChangeDisabled("Fieldset_SettingsQuestionRange", true);
			ChangeDisabled("Fieldset_SettingsDifficulty", true);
		}

		// Settings
			// Game mode
			ChangeValue("Combobox_SettingsQuestioning", Game.Mode.Questioning);
			switch(Game.Mode.Progressing) {
				case "Quantity":
					ChangeChecked("Radiobtn_SettingsQuantity", true);
					ChangeChecked("Radiobtn_SettingsDuration", false);
					break;
				case "Duration":
					ChangeChecked("Radiobtn_SettingsQuantity", false);
					ChangeChecked("Radiobtn_SettingsDuration", true);
					break;
				default:
					AlertSystemError("The value of Game.Mode.Progressing \"" + Game.Mode.Progressing + "\" in function RefreshGame is invalid.");
					break;
			}
			ChangeValue("Textbox_SettingsQuantity", Game.Mode.Quantity);
			ChangeValue("Textbox_SettingsDuration", Game.Mode.Duration);

			// Question range
			let Counter = 0;
			for(let Looper = 1; Looper <= 19; Looper++) {
				ChangeChecked("Checkbox_SettingsQuestionRange" + Looper, Game.QuestionRange[Looper]);
				if(Game.QuestionRange[Looper] == true) {
					Counter++;
				}
			}
			if(Counter < 2) {
				SetQuestionRangeDefaultRange();
				ShowDialog("Game_QuestionRangeBelowMinimumRequirement",
					"Error",
					"出题范围过小，请至少选择两项。已恢复至默认范围。",
					"", "", "", "确定");
				return;
			}
			RemoveClass("Button_SettingsQuestionRangeDefaultRange", "Active");
			RemoveClass("Button_SettingsQuestionRangeBasicHiragana", "Active");
			RemoveClass("Button_SettingsQuestionRangeBasicKatakana", "Active");
			RemoveClass("Button_SettingsQuestionRangeExcludeObsolete", "Active");
			RemoveClass("Button_SettingsQuestionRangeSelectAll", "Active");
			if(JSON.stringify(Game.QuestionRange) == "[0,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false]") {
				AddClass("Button_SettingsQuestionRangeDefaultRange", "Active");
			}
			if(JSON.stringify(Game.QuestionRange) == "[0,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false]") {
				AddClass("Button_SettingsQuestionRangeBasicHiragana", "Active");
			}
			if(JSON.stringify(Game.QuestionRange) == "[0,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false]") {
				AddClass("Button_SettingsQuestionRangeBasicKatakana", "Active");
			}
			if(JSON.stringify(Game.QuestionRange) == "[0,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false]") {
				AddClass("Button_SettingsQuestionRangeExcludeObsolete", "Active");
			}
			if(JSON.stringify(Game.QuestionRange) == "[0,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]") {
				AddClass("Button_SettingsQuestionRangeSelectAll", "Active");
			}

			// Difficulty
			ChangeValue("Textbox_SettingsTimeLimitInitial", (Game.Difficulty.TimeLimit.Initial / 1000).toFixed(1));
			ChangeValue("Textbox_SettingsTimeLimitFinal", (Game.Difficulty.TimeLimit.Final / 1000).toFixed(1));
			ChangeValue("Textbox_SettingsCooldown", (Game.Difficulty.Cooldown / 1000).toFixed(1));
			ChangeValue("Textbox_SettingsHPDrain", Game.Difficulty.HPDrain);

		// Save user data
		localStorage.setItem("KanaMaster_Game", JSON.stringify(Game));
	}

	// Answer Log
	function RefreshAnswerLog() {
		// Refresh
		if(AnswerLog.All != "") {
			ChangeText("Label_AnswerLogAll", AnswerLog.All);
		} else {
			ChangeText("Label_AnswerLogAll", "(无记录)");
		}
		ScrollToBottom("Ctrl_AnswerLogAll");
		if(AnswerLog.MissesOnly != "") {
			ChangeText("Label_AnswerLogMissesOnly", AnswerLog.MissesOnly);
		} else {
			ChangeText("Label_AnswerLogMissesOnly", "(无记录)");
		}
		ScrollToBottom("Ctrl_AnswerLogMissesOnly");

		// Save user data
		localStorage.setItem("KanaMaster_AnswerLog", JSON.stringify(AnswerLog));
	}

	// Highscore
	function RefreshHighscore() {
		// Remove "Latest" from original highscore table
		for(let Looper = 1; Looper <= 5; Looper++) {
			Highscore[Looper][1] = "名次";
		}

		// Sort (bubble sort)
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
			RemoveClass("Item_HighscoreRow" + Looper, "GreenText");
			if(Highscore[Looper][1] == "最新") {
				AddClass("Item_HighscoreRow" + Looper, "GreenText");
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

		// Save user data
		localStorage.setItem("KanaMaster_Highscore", JSON.stringify(Highscore));
	}

// Cmds
	// Game
		// Ctrl
		function StartGame() {
			if(Game.Status.IsRunning == false) {
				ResetGame();
				Game.Status.IsRunning = true;
				Game.Status.IsCoolingDown = true;
				Game.Stats.StartTime = Date.now();
				Game.Stats.StartTime2 = Date.now();
				Game.Stats.HP = 100;
				Game.Lottery.Question[1] = [0, 0, 1];
				Game.Lottery.Answer = [
					0,
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];
				AnswerLog = {
					All: "", MissesOnly: "", Sequence: 1
				};
				ScrollIntoView("Game");
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
					Game.Status.IsPaused = false;
					Game.Status.IsCoolingDown = true;
					Game.Stats.StartTime = Date.now() - Game.Stats.ElapsedTime;
					Game.Stats.StartTime2 = Date.now();
					Game.Lottery.Question[1] = [0, 0, 1];
					Game.Lottery.Answer = [
						0,
						[0, 0, 0],
						[0, 0, 0],
						[0, 0, 0]
					];
					ScrollIntoView("Game");
				}
			}
			RefreshGame();
			RefreshAnswerLog();
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

				// Answer feedback
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
							ChangeLeft("Label_AnswerFeedback", "calc(100% - " + ReadWidth("Label_AnswerFeedback") / 4 * 5 + "px)");
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

				// Answer log
					// Prepare text
					let NewEntry = "#" + AnswerLog.Sequence + "　";
					switch(Game.Mode.Questioning) {
						case "Kana":
							NewEntry += KanaGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]] + "　" +
								RomajiGrid[Game.Lottery.Answer[Game.Lottery.CorrectAnswer][1]][Game.Lottery.Answer[Game.Lottery.CorrectAnswer][2]] + "　";
							break;
						case "Romaji":
							NewEntry += RomajiGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]] + "　" +
								KanaGrid[Game.Lottery.Answer[Game.Lottery.CorrectAnswer][1]][Game.Lottery.Answer[Game.Lottery.CorrectAnswer][2]] + "　";
							break;
						default:
							AlertSystemError("The value of Game.Mode.Questioning \"" + Game.Mode.Questioning + "\" in function AnswerGame is invalid.");
							break;
					}
					if(Selector == Game.Lottery.CorrectAnswer) {
						NewEntry += "正答　" + ((Game.Stats.CurrentTimeLimit - Game.Stats.TimeLeft) / 1000).toFixed(3) + "s";
					} else {
						if(Selector <= 3) {
							switch(Game.Mode.Questioning) {
								case "Kana":
									NewEntry += "错答: " + RomajiGrid[Game.Lottery.Answer[Selector][1]][Game.Lottery.Answer[Selector][2]];
									break;
								case "Romaji":
									NewEntry += "错答: " + KanaGrid[Game.Lottery.Answer[Selector][1]][Game.Lottery.Answer[Selector][2]];
									break;
								default:
									AlertSystemError("The value of Game.Mode.Questioning \"" + Game.Mode.Questioning + "\" in function AnswerGame is invalid.");
									break;
							}
						} else {
							NewEntry += "超时";
						}
					}
					NewEntry += "<br />";

					// Write
					AnswerLog.All += NewEntry;
					if(Selector != Game.Lottery.CorrectAnswer) {
						AnswerLog.MissesOnly += NewEntry;
					}
					AnswerLog.Sequence++;

				// Voice
				if(Selector == Game.Lottery.CorrectAnswer || Subsystem.Audio.AlsoPlayVoiceOnMiss == true) {
					PlayAudio("Audio_Voice", "audio/Kana_" + RomajiGrid[Game.Lottery.Answer[Game.Lottery.CorrectAnswer][1]][Game.Lottery.Answer[Game.Lottery.CorrectAnswer][2]] + ".mp3");
				}

				// Start cooldown
				Game.Status.IsCoolingDown = true;
				Game.Stats.StartTime2 = Date.now();

				// Refresh
				RefreshGame();
				RefreshAnswerLog();
			} else {
				ShowToast("正在冷却...");
			}
		}

	// Answer Log
	function AnswerLogAllCopyToClipboard() {
		navigator.clipboard.writeText(AnswerLog.All.replaceAll("<br />", "\n"));
		ShowDialog("AnswerLog_Copied",
			"Info",
			"已拷贝答题记录至剪贴板。",
			"", "", "", "确定");
	}
	function AnswerLogMissesOnlyCopyToClipboard() {
		navigator.clipboard.writeText(AnswerLog.MissesOnly.replaceAll("<br />", "\n"));
		ShowDialog("AnswerLog_Copied",
			"Info",
			"已拷贝仅含失误的答题记录至剪贴板。",
			"", "", "", "确定");
	}

	// Settings
		// Game mode
		function SetQuestioning() {
			Game.Mode.Questioning = ReadValue("Combobox_SettingsQuestioning");
			RefreshGame();
		}
		function SetProgressing(Value) {
			switch(Value) {
				case "Quantity":
				case "Duration":
					Game.Mode.Progressing = Value;
					RefreshGame();
					break;
				default:
					AlertSystemError("The value of Value \"" + Value + "\" in function SetProgressing is invalid.");
					break;
			}
		}
		function SetQuantity() {
			Game.Mode.Quantity = parseInt(Number(ReadValue("Textbox_SettingsQuantity"))); // Use parseInt(Number()) to force convert value to integer.
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

		// Question range
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
			if(Game.Difficulty.TimeLimit.Initial < Game.Difficulty.TimeLimit.Final) {
				Game.Difficulty.TimeLimit.Final = Game.Difficulty.TimeLimit.Initial;
			}
			if(Game.Difficulty.TimeLimit.Initial > Game.Difficulty.TimeLimit.Final + 5000) {
				Game.Difficulty.TimeLimit.Final = Game.Difficulty.TimeLimit.Initial - 5000;
			}
			RefreshGame();
		}
		function SetTimeLimitFinal() {
			Game.Difficulty.TimeLimit.Final = parseInt(Number(ReadValue("Textbox_SettingsTimeLimitFinal")) * 10) / 10 * 1000;
			if(Game.Difficulty.TimeLimit.Final < 1000) {
				Game.Difficulty.TimeLimit.Final = 1000;
			}
			if(Game.Difficulty.TimeLimit.Final > 10000) {
				Game.Difficulty.TimeLimit.Final = 10000;
			}
			if(Game.Difficulty.TimeLimit.Final > Game.Difficulty.TimeLimit.Initial) {
				Game.Difficulty.TimeLimit.Initial = Game.Difficulty.TimeLimit.Final;
			}
			if(Game.Difficulty.TimeLimit.Final < Game.Difficulty.TimeLimit.Initial - 5000) {
				Game.Difficulty.TimeLimit.Initial = Game.Difficulty.TimeLimit.Final + 5000;
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

		// Audio
		function SetVoiceVolume() {
			Subsystem.Audio.VoiceVolume = ReadValue("Slider_SettingsVoiceVolume");
			RefreshSubsystem();
		}
		function PreviewVoiceVolume() {
			PlayAudio("Audio_Voice", "audio/Kana_a.mp3");
		}
		function SetAlsoPlayVoiceOnMiss() {
			Subsystem.Audio.AlsoPlayVoiceOnMiss = IsChecked("Checkbox_SettingsAlsoPlayVoiceOnMiss");
			RefreshSubsystem();
		}

		// Dev
		function SetCheat() {
			Subsystem.Dev.Cheat = IsChecked("Checkbox_SettingsCheat");
			RefreshSubsystem();
		}

		// User data
		function ImportUserData() {
			if(ReadValue("Textbox_SettingsUserDataImport") != "") {
				if(ReadValue("Textbox_SettingsUserDataImport").startsWith("{\"System\":{\"Display\":{\"Theme\":") == true) {
					let Objects = JSON.parse(ReadValue("Textbox_SettingsUserDataImport"));
					Object.keys(Objects).forEach(function(ObjectName) {
						localStorage.setItem(ObjectName, JSON.stringify(Objects[ObjectName]));
					});
					RefreshWebpage();
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
				"\"KanaMaster_AnswerLog\":" + JSON.stringify(AnswerLog) + "," +
				"\"KanaMaster_Highscore\":" + JSON.stringify(Highscore) +
				"}");
			ShowDialog("System_UserDataExported",
				"Info",
				"已导出本页的用户数据至剪贴板。",
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
		let DialogEvent = Interaction.Dialog[Interaction.Dialog.length - 1].Event;
		Interaction.Dialog.splice(Interaction.Dialog.length - 1, 1);
		ShowDialog("Previous");
		switch(DialogEvent) {
			case "System_LanguageUnsupported":
			case "System_MajorUpdateDetected":
			case "System_PWANewVersionReady":
			case "System_RefreshingWebpage":
			case "System_JSONStringInvalid":
			case "System_UserDataExported":
			case "Game_QuestionRangeBelowMinimumRequirement":
			case "AnswerLog_Copied":
				switch(Selector) {
					case 3:
						break;
					default:
						AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						break;
				}
				break;
			case "System_ConfirmClearUserData":
				switch(Selector) {
					case 2:
						localStorage.clear();
						RefreshWebpage();
						break;
					case 3:
						break;
					default:
						AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						break;
				}
				break;
			case "System_Error":
				switch(Selector) {
					case 2:
						ScrollIntoView("Item_SettingsUserData");
						ShowIAmHere("Item_SettingsUserData");
						break;
					case 3:
						break;
					default:
						AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						break;
				}
				break;
			case "Subsystem_ConfirmGoToTutorial":
				switch(Selector) {
					case 2:
						ScrollIntoView("Item_HelpTutorial");
						ShowIAmHere("Item_HelpTutorial");
						break;
					case 3:
						break;
					default:
						AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						break;
				}
				break;
			default:
				AlertSystemError("The value of DialogEvent \"" + DialogEvent + "\" in function AnswerDialog is invalid.");
				break;
		}
	}

// Listeners
	// On keyboard
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
			ShowDialog("Subsystem_ConfirmGoToTutorial",
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
					Click("Button_GameAnswerOption" + Hotkey.key);
					if(System.Display.HotkeyIndicators == "ShowOnAnyKeyPress" || System.Display.HotkeyIndicators == "AlwaysShow") {
						ShowHotkeyIndicators();
					}
					break;
				case "S":
					Click("Button_GameStart");
					if(System.Display.HotkeyIndicators == "ShowOnAnyKeyPress" || System.Display.HotkeyIndicators == "AlwaysShow") {
						ShowHotkeyIndicators();
					}
					break;
				case "R":
					Click("Button_GameReset");
					if(System.Display.HotkeyIndicators == "ShowOnAnyKeyPress" || System.Display.HotkeyIndicators == "AlwaysShow") {
						ShowHotkeyIndicators();
					}
					break;
				case "F":
					Click("Button_GameToggleFullscreen");
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
			Game.Lottery.Question[1] = [0, Randomize(1, 19), Randomize(1, 23)];
		} while(
			// Prevent out of question range
			Game.QuestionRange[Game.Lottery.Question[1][1]] == false ||
			// Prevent blank entry
			RomajiGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]] == "" ||
			// Prevent same with previous question
			RomajiGrid[Game.Lottery.Question[1][1]][Game.Lottery.Question[1][2]] == RomajiGrid[Game.Lottery.Question[2][1]][Game.Lottery.Question[2][2]]
		);
	}
	function Questioner_GenerateAnswer1() {
		do {
			Game.Lottery.Answer[1] = [0, Randomize(1, 19), Randomize(1, 23)];
		} while(
			// Prevent out of question range
			Game.QuestionRange[Game.Lottery.Answer[1][1]] == false ||
			// Prevent blank entry
			RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] == "" ||
			// Prevent duplication
			RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] == RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]] ||
			RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] == RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]]
		);
	}
	function Questioner_GenerateAnswer2() {
		do {
			Game.Lottery.Answer[2] = [0, Randomize(1, 19), Randomize(1, 23)];
		} while(
			// Prevent out of question range
			Game.QuestionRange[Game.Lottery.Answer[2][1]] == false ||
			// Prevent blank entry
			RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]] == "" ||
			// Prevent duplication
			RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]] == RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] ||
			RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]] == RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]]
		);
	}
	function Questioner_GenerateAnswer3() {
		do {
			Game.Lottery.Answer[3] = [0, Randomize(1, 19), Randomize(1, 23)];
		} while(
			// Prevent out of question range
			Game.QuestionRange[Game.Lottery.Answer[3][1]] == false ||
			// Prevent blank entry
			RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]] == "" ||
			// Prevent duplication
			RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]] == RomajiGrid[Game.Lottery.Answer[1][1]][Game.Lottery.Answer[1][2]] ||
			RomajiGrid[Game.Lottery.Answer[3][1]][Game.Lottery.Answer[3][2]] == RomajiGrid[Game.Lottery.Answer[2][1]][Game.Lottery.Answer[2][2]]
		);
	}

// Error handling
function AlertSystemError(Message) {
	console.error("● 系统错误\n" +
		Message);
	ShowDialog("System_Error",
		"Error",
		"抱歉，发生了系统错误。您可尝试清空用户数据来修复错误，或向我提供反馈。<br />" +
		"<br />" +
		"错误信息：" + Message,
		"", "", "了解更多", "关闭");
}
