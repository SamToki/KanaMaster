// For SamToki.github.io/KanaMaster
// Released under GNU GPL v3 open source license.
// © 2023 SAM TOKI STUDIO

// Initialization
	// Declare variables
	"use strict";
		// Unsaved
		const CurrentVersion = 5.02,
		KanaGrid = [
			["", "<span lang=\"zh-CN\">准备</span>", "<span lang=\"zh-CN\">暂停</span>"],
			[5,  "あ",   "い",   "う",   "え",   "お",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "か",   "き",   "く",   "け",   "こ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "さ",   "し",   "す",   "せ",   "そ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "た",   "ち",   "つ",   "て",   "と",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "な",   "に",   "ぬ",   "ね",   "の",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "は",   "ひ",   "ふ",   "へ",   "ほ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ま",   "み",   "む",   "め",   "も",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[3,  "や",   "",     "ゆ",   "",     "よ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ら",   "り",   "る",   "れ",   "ろ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[2,  "わ",   "",     "",     "",     "を",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ア",   "イ",   "ウ",   "エ",   "オ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "カ",   "キ",   "ク",   "ケ",   "コ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "サ",   "シ",   "ス",   "セ",   "ソ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "タ",   "チ",   "ツ",   "テ",   "ト",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ナ",   "ニ",   "ヌ",   "ネ",   "ノ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ハ",   "ヒ",   "フ",   "ヘ",   "ホ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "マ",   "ミ",   "ム",   "メ",   "モ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[3,  "ヤ",   "",     "ユ",   "",     "ヨ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ラ",   "リ",   "ル",   "レ",   "ロ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[2,  "ワ",   "",     "",     "",     "ヲ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[2,  "ん",   "ン",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[25, "が",   "ぎ",   "ぐ",   "げ",   "ご",   "ざ",   "じ",   "ず",   "ぜ",   "ぞ",   "だ",   "ぢ",   "づ",   "で",   "ど",   "ば",   "び",   "ぶ",   "べ",   "ぼ",   "ぱ",   "ぴ",   "ぷ",   "ぺ",   "ぽ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[25, "ガ",   "ギ",   "グ",   "ゲ",   "ゴ",   "ザ",   "ジ",   "ズ",   "ゼ",   "ゾ",   "ダ",   "ヂ",   "ヅ",   "デ",   "ド",   "バ",   "ビ",   "ブ",   "ベ",   "ボ",   "パ",   "ピ",   "プ",   "ペ",   "ポ",   "",     "",     "",     "",     "",     "",     "",     ""],
			[33, "きゃ", "きゅ", "きょ", "しゃ", "しゅ", "しょ", "ちゃ", "ちゅ", "ちょ", "にゃ", "にゅ", "にょ", "ひゃ", "ひゅ", "ひょ", "みゃ", "みゅ", "みょ", "りゃ", "りゅ", "りょ", "ぎゃ", "ぎゅ", "ぎょ", "じゃ", "じゅ", "じょ", "びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ", "ぴょ"],
			[33, "キャ", "キュ", "キョ", "シャ", "シュ", "ショ", "チャ", "チュ", "チョ", "ニャ", "ニュ", "ニョ", "ヒャ", "ヒュ", "ヒョ", "ミャ", "ミュ", "ミョ", "リャ", "リュ", "リョ", "ギャ", "ギュ", "ギョ", "ジャ", "ジュ", "ジョ", "ビャ", "ビュ", "ビョ", "ピャ", "ピュ", "ピョ"],
			[27, "イェ", "ウィ", "ウェ", "ウォ", "ヴァ", "ヴィ", "ヴ",   "ヴェ", "ヴォ", "クァ", "クィ", "クェ", "クォ", "シェ", "スィ", "チェ", "ティ", "テュ", "トゥ", "ファ", "フィ", "フェ", "フォ", "ジェ", "ディ", "デュ", "ドゥ", "",     "",     "",     "",     "",     ""],
			[4,  "ゐ",   "ゑ",   "ヰ",   "ヱ",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""]
		],
		RomajiGrid = [
			["", "<span lang=\"zh-CN\">准备</span>", "<span lang=\"zh-CN\">暂停</span>"],
			[5,  "a",    "i",    "u",    "e",    "o",    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ka",   "ki",   "ku",   "ke",   "ko",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "sa",   "shi",  "su",   "se",   "so",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ta",   "chi",  "tsu",  "te",   "to",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "na",   "ni",   "nu",   "ne",   "no",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ha",   "hi",   "fu",   "he",   "ho",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ma",   "mi",   "mu",   "me",   "mo",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[3,  "ya",   "",     "yu",   "",     "yo",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ra",   "ri",   "ru",   "re",   "ro",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[2,  "wa",   "",     "",     "",     "wo",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "a",    "i",    "u",    "e",    "o",    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ka",   "ki",   "ku",   "ke",   "ko",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "sa",   "shi",  "su",   "se",   "so",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ta",   "chi",  "tsu",  "te",   "to",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "na",   "ni",   "nu",   "ne",   "no",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ha",   "hi",   "fu",   "he",   "ho",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ma",   "mi",   "mu",   "me",   "mo",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[3,  "ya",   "",     "yu",   "",     "yo",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[5,  "ra",   "ri",   "ru",   "re",   "ro",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[2,  "wa",   "",     "",     "",     "wo",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[2,  "n",    "n",    "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""],
			[25, "ga",   "gi",   "gu",   "ge",   "go",   "za",   "ji",   "zu",   "ze",   "zo",   "da",   "ji",   "zu",   "de",   "do",   "ba",   "bi",   "bu",   "be",   "bo",   "pa",   "pi",   "pu",   "pe",   "po",   "",     "",     "",     "",     "",     "",     "",     ""],
			[25, "ga",   "gi",   "gu",   "ge",   "go",   "za",   "ji",   "zu",   "ze",   "zo",   "da",   "ji",   "zu",   "de",   "do",   "ba",   "bi",   "bu",   "be",   "bo",   "pa",   "pi",   "pu",   "pe",   "po",   "",     "",     "",     "",     "",     "",     "",     ""],
			[33, "kya",  "kyu",  "kyo",  "sha",  "shu",  "sho",  "cha",  "chu",  "cho",  "nya",  "nyu",  "nyo",  "hya",  "hyu",  "hyo",  "mya",  "myu",  "myo",  "rya",  "ryu",  "ryo",  "gya",  "gyu",  "gyo",  "ja",   "ju",   "jo",   "bya",  "byu",  "byo",  "pya",  "pyu",  "pyo"],
			[33, "kya",  "kyu",  "kyo",  "sha",  "shu",  "sho",  "cha",  "chu",  "cho",  "nya",  "nyu",  "nyo",  "hya",  "hyu",  "hyo",  "mya",  "myu",  "myo",  "rya",  "ryu",  "ryo",  "gya",  "gyu",  "gyo",  "ja",   "ju",   "jo",   "bya",  "byu",  "byo",  "pya",  "pyu",  "pyo"],
			[27, "ye",   "wi",   "we",   "wo",   "va",   "vi",   "v",    "ve",   "vo",   "kwa",  "kwi",  "kwe",  "kwo",  "she",  "si",   "che",  "ti",   "tyu",  "tu",   "fa",   "fi",   "fe",   "fo",   "je",   "di",   "dyu",  "du",   "",     "",     "",     "",     "",     ""],
			[4,  "wi",   "we",   "wi",   "we",   "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     "",     ""]
		],
		Preset = {
			Game: {
				QuestionRange: [
					0,
					{
						Name: "DefaultRange",
						Content: [
							0,
							true, true, true, true, true, true, true, true, true, true,
							true, true, true, true, true, true, true, true, true, true,
							true,
							false, false,
							false, false,
							false, false
						]
					},
					{
						Name: "Beginner",
						Content: [
							0,
							true, true, false, false, false, false, false, false, false, false,
							false, false, false, false, false, false, false, false, false, false,
							false,
							false, false,
							false, false,
							false, false
						]
					},
					{
						Name: "BasicHiragana",
						Content: [
							0,
							true, true, true, true, true, true, true, true, true, true,
							false, false, false, false, false, false, false, false, false, false,
							false,
							false, false,
							false, false,
							false, false
						]
					},
					{
						Name: "BasicKatakana",
						Content: [
							0,
							false, false, false, false, false, false, false, false, false, false,
							true, true, true, true, true, true, true, true, true, true,
							false,
							false, false,
							false, false,
							false, false
						]
					},
					{
						Name: "Dakuon",
						Content: [
							0,
							false, false, false, false, false, false, false, false, false, false,
							false, false, false, false, false, false, false, false, false, false,
							false,
							true, true,
							false, false,
							false, false
						]
					},
					{
						Name: "Youon",
						Content: [
							0,
							false, false, false, false, false, false, false, false, false, false,
							false, false, false, false, false, false, false, false, false, false,
							false,
							false, false,
							true, true,
							true, false
						]
					},
					{
						Name: "AllButObsoleteKana",
						Content: [
							0,
							true, true, true, true, true, true, true, true, true, true,
							true, true, true, true, true, true, true, true, true, true,
							true,
							true, true,
							true, true,
							true, false
						]
					},
					{
						Name: "SelectAll",
						Content: [
							0,
							true, true, true, true, true, true, true, true, true, true,
							true, true, true, true, true, true, true, true, true, true,
							true,
							true, true,
							true, true,
							true, true
						]
					}
				]
			}
		};
		var Game0 = {
			QuestionRangeKanaCount: 0,
			Stats: {
				ClockTime: 0, StartTime: 0, CurrentTimeLimit: 0,
				ScoreDisplay: 0, Progress: 0, StartTime2: 0, TimeLeft: 0
			},
			Lottery: {
				Question: {
					Row: 0, Column: 0
				},
				PreviousQuestion: {
					Row: 0, Column: 0
				},
				Answer: [
					0,
					{Row: 0, Column: 0},
					{Row: 0, Column: 0},
					{Row: 0, Column: 0}
				],
				CorrectAnswer: 0
			}
		};
		Automation.ClockGame = null;

		// Saved
		var Subsystem = {
			Display: {
				GameFont: "Inherit"
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
			QuestionRange: structuredClone(Preset.Game.QuestionRange[1].Content),
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
				ElapsedTime: 0, Accuracy: 0, AvgReactionTime: 0,
				Score: 0, HP: 0
			}
		},
		AnswerLog = {
			All: "", MissesOnly: "", Sequence: 1
		},
		Highscore = [
			0,
			{Sequence: "#1", Date: "", Score: "", MaxCombo: "", Accuracy: "", AvgReactionTime: ""},
			{Sequence: "#2", Date: "", Score: "", MaxCombo: "", Accuracy: "", AvgReactionTime: ""},
			{Sequence: "#3", Date: "", Score: "", MaxCombo: "", Accuracy: "", AvgReactionTime: ""},
			{Sequence: "#4", Date: "", Score: "", MaxCombo: "", Accuracy: "", AvgReactionTime: ""},
			{Sequence: "#5", Date: "", Score: "", MaxCombo: "", Accuracy: "", AvgReactionTime: ""},
			{Sequence: "#6", Date: "", Score: "", MaxCombo: "", Accuracy: "", AvgReactionTime: ""}
		];

	// Load
	window.onload = Load();
	function Load() {
		// User data
		RepairUserData();
		if(localStorage.System != undefined) {
			System = JSON.parse(localStorage.getItem("System"));
		}
		switch(System.I18n.Language) {
			case "Auto":
				// navigator.languages ...
				break;
			case "en-US":
				/* ChangeCursorOverall("wait");
				window.location.replace("index_en-US.html"); */
				ShowDialog("System_LanguageUnsupported",
					"Caution",
					"<span lang=\"en-US\">Sorry, this webpage currently does not support English (US).</span>",
					"", "", "", "<span lang=\"en-US\">OK</span>");
				break;
			case "ja-JP":
				ShowDialog("System_LanguageUnsupported",
					"Caution",
					"<span lang=\"ja-JP\">すみません。このページは日本語にまだサポートしていません。</span>",
					"", "", "", "<span lang=\"ja-JP\">OK</span>");
				break;
			case "zh-CN":
				break;
			case "zh-TW":
				ShowDialog("System_LanguageUnsupported",
					"Caution",
					"<span lang=\"zh-TW\">抱歉，本網頁暫不支援繁體中文。</span>",
					"", "", "", "<span lang=\"zh-TW\">確定</span>");
				break;
			default:
				AlertSystemError("The value of System.I18n.Language \"" + System.I18n.Language + "\" in function Load is invalid.");
				break;
		}
		if(System.Version.KanaMaster != undefined && System0.RepairedUserData != "") {
			ShowDialog("System_MajorUpdateDetected",
				"Info",
				"检测到影响用户数据的版本更新。若您继续使用旧版本的用户数据，则有可能发生兼容性问题。敬请留意。<br />" +
				"<br />" +
				"版本：v" + System.Version.KanaMaster.toFixed(2) + " → v" + CurrentVersion.toFixed(2) + "<br />" +
				"已修复用户数据：" + System0.RepairedUserData,
				"", "", "", "确定");
		}
		System.Version.KanaMaster = CurrentVersion;
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
		HighlightActiveSectionInNav();
		RefreshSystem();
		RefreshSubsystem();
		RefreshGame();
		RefreshAnswerLog();
		RefreshHighscore();

		// PWA
		if(navigator.serviceWorker != undefined) {
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
						AddClass("Label_SettingsPWAServiceWorkerRegistration", "GreenText");
						break;
					case ServiceWorkerRegistration.waiting != null:
						ChangeText("Label_SettingsPWAServiceWorkerRegistration", "等待更新");
						AddClass("Label_SettingsPWAServiceWorkerRegistration", "GreenText");
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
		} else {
			ChangeText("Label_SettingsPWAServiceWorkerRegistration", "不可用");
			ChangeText("Label_SettingsPWAServiceWorkerController", "不可用");
		}

		// Ready
		setTimeout(HideToast, 0);
	}

	// Pause the game before exiting
	window.onbeforeunload = Exit();
	function Exit() {
		if(Game.Status.IsRunning && Game.Status.IsPaused == false) {
			Game.Status.IsPaused = true;
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
			ChangeTooltip("Button_GameToggleFullscreen", "全屏");
			ChangeAriaLabel("Button_GameToggleFullscreen", "全屏");
		} else {
			Hide("Topbar");
			ChangeText("Button_GameToggleFullscreen",
				"<svg class=\"Icon\" viewBox=\"0 0 16 16\" aria-hidden=\"true\">" +
				"	<path d=\"M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z\"/>" +
				"</svg>");
			ChangeTooltip("Button_GameToggleFullscreen", "退出全屏");
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
				case "AtelierSophie2":
					ChangeLink("ThemeVariant_Common", "../styles/common_AtelierSophie2.css");
					ChangeMediaCondition("ThemeVariant_Common", "");
					ChangeLink("ThemeVariant_Style", "styles/style_AtelierSophie2.css");
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
				case "None":
					ChangeCursorOverall("");
					break;
				case "BTRAhoge":
				case "Genshin":
				case "GenshinFurina":
				case "GenshinNahida":
				case "SilentWitch":
					ChangeCursorOverall("url(../cursors/" + System.Display.Cursor + ".cur), auto");
					break;
				default:
					AlertSystemError("The value of System.Display.Cursor \"" + System.Display.Cursor + "\" in function RefreshSystem is invalid.");
					break;
			}
			ChangeChecked("Checkbox_SettingsBlurBgImage", System.Display.BlurBgImage);
			if(System.Display.BlurBgImage) {
				AddClass("BgImage", "Blur");
			} else {
				RemoveClass("BgImage", "Blur");
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
			if(System.Audio.PlayAudio) {
				Show("Ctrl_SettingsVoiceVolume");
				ChangeValue("Slider_SettingsVoiceVolume", Subsystem.Audio.VoiceVolume);
				if(Subsystem.Audio.VoiceVolume > 0) {
					ChangeText("Label_SettingsVoiceVolume", Subsystem.Audio.VoiceVolume + "%");
				} else {
					ChangeText("Label_SettingsVoiceVolume", "禁用");
				}
				ChangeVolume("Audio_Voice", Subsystem.Audio.VoiceVolume);
				if(Subsystem.Audio.VoiceVolume > 0) {
					Show("Ctrl_SettingsAlsoPlayVoiceOnMiss");
					ChangeChecked("Checkbox_SettingsAlsoPlayVoiceOnMiss", Subsystem.Audio.AlsoPlayVoiceOnMiss);
				} else {
					Hide("Ctrl_SettingsAlsoPlayVoiceOnMiss");
				}
			} else {
				StopAllAudio();
				Hide("Ctrl_SettingsVoiceVolume");
				Hide("Ctrl_SettingsAlsoPlayVoiceOnMiss");
			}

			// PWA
			if(window.matchMedia("(display-mode: standalone)").matches) {
				ChangeText("Label_SettingsPWAStandaloneDisplay", "是");
			} else {
				ChangeText("Label_SettingsPWAStandaloneDisplay", "否");
			}

			// Dev
			ChangeChecked("Checkbox_SettingsTryToOptimizePerformance", System.Dev.TryToOptimizePerformance);
			if(System.Dev.TryToOptimizePerformance) {
				AddClass("Html", "TryToOptimizePerformance");
				Automation.ClockRate = 40;
			} else {
				RemoveClass("Html", "TryToOptimizePerformance");
				Automation.ClockRate = 20;
			}
			ChangeChecked("Checkbox_SettingsShowDebugOutlines", System.Dev.ShowDebugOutlines);
			if(System.Dev.ShowDebugOutlines) {
				AddClass("Html", "ShowDebugOutlines");
			} else {
				RemoveClass("Html", "ShowDebugOutlines");
			}

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
				case "Inherit":
					ChangeFont("Label_GameQuestion", ""); // Not set as "Inherit" because that would cause wrong display when with specified language like Japanese.
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeFont("Button_GameAnswerOption" + Looper, "");
					}
					break;
				case "Sans-serif":
				case "Serif":
					ChangeFont("Label_GameQuestion", Subsystem.Display.GameFont);
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeFont("Button_GameAnswerOption" + Looper, Subsystem.Display.GameFont);
					}
					break;
				default:
					AlertSystemError("The value of Subsystem.Display.GameFont \"" + Subsystem.Display.GameFont + "\" in function RefreshSubsystem is invalid.");
					break;
			}

			// Audio
			if(System.Audio.PlayAudio) {
				ChangeValue("Slider_SettingsVoiceVolume", Subsystem.Audio.VoiceVolume);
				if(Subsystem.Audio.VoiceVolume > 0) {
					ChangeText("Label_SettingsVoiceVolume", Subsystem.Audio.VoiceVolume + "%");
				} else {
					ChangeText("Label_SettingsVoiceVolume", "禁用");
				}
				ChangeVolume("Audio_Voice", Subsystem.Audio.VoiceVolume);
				if(Subsystem.Audio.VoiceVolume > 0) {
					Show("Ctrl_SettingsAlsoPlayVoiceOnMiss");
					ChangeChecked("Checkbox_SettingsAlsoPlayVoiceOnMiss", Subsystem.Audio.AlsoPlayVoiceOnMiss);
				} else {
					Hide("Ctrl_SettingsAlsoPlayVoiceOnMiss");
				}
			}

			// Dev
			ChangeChecked("Checkbox_SettingsCheat", Subsystem.Dev.Cheat);
			if(Subsystem.Dev.Cheat) {
				AddClass("Html", "Cheat");
			} else {
				RemoveClass("Html", "Cheat");
			}

		// Save user data
		localStorage.setItem("KanaMaster_Subsystem", JSON.stringify(Subsystem));
	}

	// Game
	function ClockGame() {
		// Automation
		clearTimeout(Automation.ClockGame);
		if(Game.Status.IsRunning) {
			Automation.ClockGame = setTimeout(ClockGame, Automation.ClockRate);
		}

		// Update essentials
		Game0.Stats.ClockTime = Date.now();
		switch(Game.Mode.Progressing) {
			case "Quantity":
				Game0.Stats.Progress = Game.Stats.TotalCount / Game.Mode.Quantity * 100;
				break;
			case "Duration":
				Game0.Stats.Progress = Game.Stats.ElapsedTime / (Game.Mode.Duration * 60000) * 100;
				break;
			default:
				AlertSystemError("The value of Game.Mode.Progressing \"" + Game.Mode.Progressing + "\" in function ClockGame is invalid.");
				break;
		}

		// Stats
			// Stats 1
			ChangeText("Label_GameTotalCount", Game.Stats.TotalCount);
			ChangeText("Label_GameMissCount", Game.Stats.MissCount);
			ChangeText("Label_GameCombo", Game.Stats.Combo);
			if(Game.Stats.Combo > Game.Stats.MaxCombo) {
				Game.Stats.MaxCombo = Game.Stats.Combo;
			}
			ChangeText("Label_GameMaxCombo", Game.Stats.MaxCombo);
			if(Game.Status.IsRunning) {
				if(Game.Status.IsPaused == false) {
					Game.Stats.ElapsedTime = Game0.Stats.ClockTime - Game0.Stats.StartTime;
				} else {
					Game0.Stats.StartTime = Game0.Stats.ClockTime - Game.Stats.ElapsedTime;
				}
			}
			ChangeText("Label_GameElapsedTime", Math.trunc(Game.Stats.ElapsedTime / 60000) + ":" + Math.trunc(Game.Stats.ElapsedTime % 60000 / 1000).toString().padStart(2, "0"));
			Game0.Stats.CurrentTimeLimit = Game.Difficulty.TimeLimit.Initial - (Game.Difficulty.TimeLimit.Initial - Game.Difficulty.TimeLimit.Final) * (Game0.Stats.Progress / 100);
			ChangeText("Label_GameCurrentTimeLimit", (Game0.Stats.CurrentTimeLimit / 1000).toFixed(1) + "s");
			ChangeText("Label_GameAccuracy", Game.Stats.Accuracy.toFixed(2) + "%");
			ChangeText("Label_GameAvgReactionTime", (Game.Stats.AvgReactionTime / 1000).toFixed(3) + "s");

			// Stats 2
				// Score
				if(System.Display.Anim > 0) {
					Game0.Stats.ScoreDisplay += (Game.Stats.Score - Game0.Stats.ScoreDisplay) / 5;
				} else {
					Game0.Stats.ScoreDisplay = Game.Stats.Score;
				}
				ChangeText("Label_GameScore", Game0.Stats.ScoreDisplay.toFixed(0).toString().padStart(8, "0"));

				// Progress (Value is updated above)
				ChangeProgring("ProgringFg_GameProgress", 100, Game0.Stats.Progress);
				ChangeText("ProgringText_GameProgress", Game0.Stats.Progress.toFixed(0) + "%");

				// HP
				if(Game.Status.IsRunning) {
					if(Game.Status.IsPaused == false) {
						Game.Stats.HP -= 0.02; // Approximately lose 1 HP every second.
					}
				} else {
					Game.Stats.HP = 0;
				}
				ChangeProgring("ProgringFg_GameHP", 100, Game.Stats.HP);
				ChangeText("ProgringText_GameHP", Game.Stats.HP.toFixed(0));
				if(Game.Status.IsRunning && Game.Stats.HP <= 20) {
					AddClass("ProgringText_GameHP", "RedText");
				} else {
					RemoveClass("ProgringText_GameHP", "RedText");
				}

				// Time left
				if(Game.Status.IsRunning && Game.Status.IsPaused == false) {
					if(Game.Status.IsCoolingDown == false) {
						Game0.Stats.TimeLeft = Game0.Stats.CurrentTimeLimit - (Game0.Stats.ClockTime - Game0.Stats.StartTime2);
					} else {
						Game0.Stats.TimeLeft = Game0.Stats.CurrentTimeLimit * ((Game0.Stats.ClockTime - Game0.Stats.StartTime2) / Game.Difficulty.Cooldown);
					}
				} else {
					Game0.Stats.TimeLeft = 0;
				}
				ChangeProgring("ProgringFg_GameTimeLeft", 100, Game0.Stats.TimeLeft / Game0.Stats.CurrentTimeLimit * 100);
				if(Game.Status.IsRunning && Game.Status.IsPaused == false && System.Display.Anim > 0) {
					ChangeAnim("ProgringFg_GameTimeLeft", "100ms");
				} else {
					ChangeAnim("ProgringFg_GameTimeLeft", "");
				}
				ChangeText("ProgringText_GameTimeLeft", (Game0.Stats.TimeLeft / 1000).toFixed(1) + "s");
				if(Game.Status.IsRunning && Game.Status.IsPaused == false && Game.Status.IsCoolingDown == false && Game0.Stats.TimeLeft <= 1500) {
					AddClass("ProgringText_GameTimeLeft", "RedText");
				} else {
					RemoveClass("ProgringText_GameTimeLeft", "RedText");
				}

		// Question board & answer board
			// Text
			if(Game.Status.IsRunning && Game.Status.IsPaused && Game0.Stats.Progress < 100) {
				Game0.Lottery.Question = {
					Row: 0, Column: 2
				};
				Game0.Lottery.Answer = [
					0,
					{Row: 0, Column: 0},
					{Row: 0, Column: 0},
					{Row: 0, Column: 0}
				];
			}
			switch(Game.Mode.Questioning) {
				case "Kana":
					ChangeText("Label_GameQuestion", KanaGrid[Game0.Lottery.Question.Row][Game0.Lottery.Question.Column]);
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeText("Button_GameAnswerOption" + Looper, RomajiGrid[Game0.Lottery.Answer[Looper].Row][Game0.Lottery.Answer[Looper].Column]);
					}
					break;
				case "Romaji":
					ChangeText("Label_GameQuestion", RomajiGrid[Game0.Lottery.Question.Row][Game0.Lottery.Question.Column]);
					for(let Looper = 1; Looper <= 3; Looper++) {
						ChangeText("Button_GameAnswerOption" + Looper, KanaGrid[Game0.Lottery.Answer[Looper].Row][Game0.Lottery.Answer[Looper].Column]);
					}
					break;
				default:
					AlertSystemError("The value of Game.Mode.Questioning \"" + Game.Mode.Questioning + "\" in function ClockGame is invalid.");
					break;
			}

			// Functionality
			if(Game.Status.IsRunning && Game.Status.IsPaused == false) {
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
			if(Subsystem.Dev.Cheat && Game0.Lottery.CorrectAnswer > 0) {
				AddClass("Button_GameAnswerOption" + Game0.Lottery.CorrectAnswer, "Active");
			}

		// Time up
		if(Game.Status.IsRunning && Game.Status.IsPaused == false) {
			if(Game.Status.IsCoolingDown == false) {
				if(Game0.Stats.TimeLeft <= 0) {
					AnswerGame(4);
				}
			} else {
				if(Game0.Stats.TimeLeft >= Game0.Stats.CurrentTimeLimit) {
					HideToast();
					Questioner();
				}
			}
		}

		// Victory
		if(Game.Status.IsRunning && Game0.Stats.Progress >= 100) {
			Game0.Stats.Progress = 100;
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
						Highscore[6].MaxCombo = Game.Stats.MaxCombo + " (AP)";
					} else {
						ShowToast("FULL COMBO!");
						Highscore[6].MaxCombo = Game.Stats.MaxCombo + " (FC)";
					}
				} else {
					ShowToast("胜利!");
					Highscore[6].MaxCombo = Game.Stats.MaxCombo;
				}
				Highscore[6].Sequence = "最新";
				Highscore[6].Date = new Date(Game0.Stats.ClockTime).toLocaleDateString(ReadLanguage("Html"));
				Highscore[6].Score = Game.Stats.Score.toString().padStart(8, "0");
				Highscore[6].Accuracy = Game.Stats.Accuracy.toFixed(2) + "%";
				Highscore[6].AvgReactionTime = (Game.Stats.AvgReactionTime / 1000).toFixed(3) + "s";
				RefreshHighscore();

				// Reset game and scroll to highscore
				setTimeout(function() {
					ResetGame();
					ScrollIntoView("Highscore");
				}, System.Display.Anim * 2 + 1000);
			}
		}

		// Game over
		if(Game.Status.IsRunning && Game.Stats.HP <= 0) {
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
			ChangeValue("Combobox_SettingsQuestionRangePreset", "");
			for(let Looper = 1; Looper < Preset.Game.QuestionRange.length; Looper++) {
				if(JSON.stringify(Game.QuestionRange) == JSON.stringify(Preset.Game.QuestionRange[Looper].Content)) {
					ChangeValue("Combobox_SettingsQuestionRangePreset", Preset.Game.QuestionRange[Looper].Name);
				}
			}
			Game0.QuestionRangeKanaCount = 0;
			for(let Looper = 1; Looper < Game.QuestionRange.length; Looper++) {
				ChangeChecked("Checkbox_SettingsQuestionRange" + Looper, Game.QuestionRange[Looper]);
				if(Game.QuestionRange[Looper] == true) {
					Game0.QuestionRangeKanaCount += KanaGrid[Looper][0];
				}
			}
			ChangeText("Label_SettingsKanaSelectionCount", "已选 " + Game0.QuestionRangeKanaCount);
			if(Game0.QuestionRangeKanaCount < 6) {
				AddClass("Label_SettingsKanaSelectionCount", "RedText");
			} else {
				RemoveClass("Label_SettingsKanaSelectionCount", "RedText");
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
			Highscore[Looper].Sequence = "名次";
		}

		// Sort (bubble sort)
		for(let Looper = 1; Looper <= 5; Looper++) {
			for(let Looper2 = 5; Looper2 >= 1; Looper2--) {
				if(Number(Highscore[Looper2 + 1].Score) > Number(Highscore[Looper2].Score)) {
					let Swapper = structuredClone(Highscore[Looper2]);
					Highscore[Looper2] = structuredClone(Highscore[Looper2 + 1]);
					Highscore[Looper2 + 1] = structuredClone(Swapper);
				}
			}
		}

		// Refresh
		for(let Looper = 1; Looper <= 6; Looper++) {
			if(Highscore[Looper].Sequence == "最新") {
				AddClass("Item_HighscoreRow" + Looper, "GreenText");
			} else {
				Highscore[Looper].Sequence = "#" + Looper;
				RemoveClass("Item_HighscoreRow" + Looper, "GreenText");
			}
			ChangeText("Label_HighscoreRow" + Looper + "Sequence", Highscore[Looper].Sequence);
			ChangeText("Label_HighscoreRow" + Looper + "Date", Highscore[Looper].Date);
			ChangeText("Label_HighscoreRow" + Looper + "Score", Highscore[Looper].Score);
			ChangeText("Label_HighscoreRow" + Looper + "MaxCombo", Highscore[Looper].MaxCombo);
			ChangeText("Label_HighscoreRow" + Looper + "Accuracy", Highscore[Looper].Accuracy);
			ChangeText("Label_HighscoreRow" + Looper + "AvgReactionTime", Highscore[Looper].AvgReactionTime);
		}

		// Save user data
		localStorage.setItem("KanaMaster_Highscore", JSON.stringify(Highscore));
	}

// Cmds
	// Game
		// Ctrl
		function StartGame() {
			Game0.Stats.ClockTime = Date.now();
			if(Game.Status.IsRunning == false) {
				if(Game0.QuestionRangeKanaCount >= 6) {
					ResetGame();
					Game.Status.IsRunning = true;
					Game.Status.IsCoolingDown = true;
					Game0.Stats.StartTime = Game0.Stats.ClockTime;
					Game0.Stats.StartTime2 = Game0.Stats.ClockTime;
					Game.Stats.HP = 100;
					Game0.Lottery.Question = {
						Row: 0, Column: 1
					};
					Game0.Lottery.Answer = [
						0,
						{Row: 0, Column: 0},
						{Row: 0, Column: 0},
						{Row: 0, Column: 0}
					];
					AnswerLog = {
						All: "", MissesOnly: "", Sequence: 1
					};
					ScrollIntoView("Game");
				} else {
					ShowDialog("Game_QuestionRangeBelowMinimumRequirement",
						"Error",
						"出题范围过小。请前往调整出题范围。",
						"", "", "前往", "取消");
				}
			} else {
				if(Game.Status.IsPaused == false) {
					Game.Status.IsPaused = true;
					// ShowToast("游戏暂停");
				} else {
					Game.Status.IsPaused = false;
					Game.Status.IsCoolingDown = true;
					Game0.Stats.StartTime = Game0.Stats.ClockTime - Game.Stats.ElapsedTime;
					Game0.Stats.StartTime2 = Game0.Stats.ClockTime;
					Game0.Lottery.Question = {
						Row: 0, Column: 1
					};
					Game0.Lottery.Answer = [
						0,
						{Row: 0, Column: 0},
						{Row: 0, Column: 0},
						{Row: 0, Column: 0}
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
				ElapsedTime: 0, Accuracy: 0, AvgReactionTime: 0,
				Score: 0, HP: 0
			};
			Game0 = {
				Stats: {
					ClockTime: 0, StartTime: 0, CurrentTimeLimit: 0,
					ScoreDisplay: 0, Progress: 0, StartTime2: 0, TimeLeft: 0
				},
				Lottery: {
					Question: {
						Row: 0, Column: 0
					},
					PreviousQuestion: {
						Row: 0, Column: 0
					},
					Answer: [
						0,
						{Row: 0, Column: 0},
						{Row: 0, Column: 0},
						{Row: 0, Column: 0}
					],
					CorrectAnswer: 0
				}
			};
			RefreshGame();
		}

		// Answer
		function AnswerGame(Selector) {
			if(Game.Status.IsCoolingDown == false) {
				// Stats
				if(Selector == Game0.Lottery.CorrectAnswer) {
					Game.Stats.TotalCount++;
					Game.Stats.Combo++;
					switch(true) {
						case Game0.Stats.TimeLeft / Game0.Stats.CurrentTimeLimit >= 0.5:
							Game.Stats.Accuracy = (Game.Stats.Accuracy * (Game.Stats.TotalCount + Game.Stats.MissCount - 1) + 100) / (Game.Stats.TotalCount + Game.Stats.MissCount);
							ChangeText("Label_AnswerFeedback", "Perfect");
							ChangeAnswerFeedbackColor("Perfect");
							break;
						case Game0.Stats.TimeLeft / Game0.Stats.CurrentTimeLimit >= 0.2:
							Game.Stats.Accuracy = (Game.Stats.Accuracy * (Game.Stats.TotalCount + Game.Stats.MissCount - 1) + 80) / (Game.Stats.TotalCount + Game.Stats.MissCount);
							ChangeText("Label_AnswerFeedback", "Great");
							ChangeAnswerFeedbackColor("Great");
							break;
						case Game0.Stats.TimeLeft / Game0.Stats.CurrentTimeLimit >= 0:
							Game.Stats.Accuracy = (Game.Stats.Accuracy * (Game.Stats.TotalCount + Game.Stats.MissCount - 1) + 60) / (Game.Stats.TotalCount + Game.Stats.MissCount);
							ChangeText("Label_AnswerFeedback", "Good");
							ChangeAnswerFeedbackColor("Good");
							break;
						default:
							AlertSystemError("The value of Game0.Stats.TimeLeft \"" + Game0.Stats.TimeLeft + "\" in function AnswerGame is invalid.");
							break;
					}
					Game.Stats.AvgReactionTime = (Game.Stats.AvgReactionTime * (Game.Stats.TotalCount - 1) + (Game0.Stats.CurrentTimeLimit - Game0.Stats.TimeLeft)) / Game.Stats.TotalCount;
					Game.Stats.Score += Math.trunc((10000 - (Game0.Stats.CurrentTimeLimit - Game0.Stats.TimeLeft)) / 100 * Game.Stats.Combo);
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
					switch(Game0.Lottery.CorrectAnswer) {
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
							AlertSystemError("The value of Game0.Lottery.CorrectAnswer \"" + Game0.Lottery.CorrectAnswer + "\" in function AnswerGame is invalid.");
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
							NewEntry += KanaGrid[Game0.Lottery.Question.Row][Game0.Lottery.Question.Column] + "　" +
								RomajiGrid[Game0.Lottery.Answer[Game0.Lottery.CorrectAnswer].Row][Game0.Lottery.Answer[Game0.Lottery.CorrectAnswer].Column] + "　";
							break;
						case "Romaji":
							NewEntry += RomajiGrid[Game0.Lottery.Question.Row][Game0.Lottery.Question.Column] + "　" +
								KanaGrid[Game0.Lottery.Answer[Game0.Lottery.CorrectAnswer].Row][Game0.Lottery.Answer[Game0.Lottery.CorrectAnswer].Column] + "　";
							break;
						default:
							AlertSystemError("The value of Game.Mode.Questioning \"" + Game.Mode.Questioning + "\" in function AnswerGame is invalid.");
							break;
					}
					if(Selector == Game0.Lottery.CorrectAnswer) {
						NewEntry += "正答　" + ((Game0.Stats.CurrentTimeLimit - Game0.Stats.TimeLeft) / 1000).toFixed(3) + "s";
					} else {
						if(Selector <= 3) {
							switch(Game.Mode.Questioning) {
								case "Kana":
									NewEntry += "错答: " + RomajiGrid[Game0.Lottery.Answer[Selector].Row][Game0.Lottery.Answer[Selector].Column];
									break;
								case "Romaji":
									NewEntry += "错答: " + KanaGrid[Game0.Lottery.Answer[Selector].Row][Game0.Lottery.Answer[Selector].Column];
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
					if(Selector != Game0.Lottery.CorrectAnswer) {
						AnswerLog.MissesOnly += NewEntry;
					}
					AnswerLog.Sequence++;

				// Voice
				if(Selector == Game0.Lottery.CorrectAnswer || Subsystem.Audio.AlsoPlayVoiceOnMiss) {
					PlayAudio("Audio_Voice", "audio/Kana_" + RomajiGrid[Game0.Lottery.Answer[Game0.Lottery.CorrectAnswer].Row][Game0.Lottery.Answer[Game0.Lottery.CorrectAnswer].Column] + ".mp3");
				}

				// Start cooldown
				Game.Status.IsCoolingDown = true;
				Game0.Stats.StartTime2 = Date.now();

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
			Game.Mode.Quantity = CheckRangeAndCorrect(Math.trunc(ReadValue("Textbox_SettingsQuantity")), 5, 999);
			RefreshGame();
		}
		function SetDuration() {
			Game.Mode.Duration = CheckRangeAndCorrect(Math.trunc(ReadValue("Textbox_SettingsDuration")), 1, 60);
			RefreshGame();
		}

		// Question range
		function SetQuestionRangePreset() {
			for(let Looper = 1; Looper < Preset.Game.QuestionRange.length; Looper++) {
				if(ReadValue("Combobox_SettingsQuestionRangePreset") == Preset.Game.QuestionRange[Looper].Name) {
					Game.QuestionRange = structuredClone(Preset.Game.QuestionRange[Looper].Content);
				}
			}
			RefreshGame();
		}
		function SetQuestionRange(Selector) {
			Game.QuestionRange[Selector] = IsChecked("Checkbox_SettingsQuestionRange" + Selector);
			RefreshGame();
		}

		// Difficulty
		function SetTimeLimitInitial() {
			Game.Difficulty.TimeLimit.Initial = CheckRangeAndCorrect(Math.trunc(ReadValue("Textbox_SettingsTimeLimitInitial") * 10) / 10 * 1000, 1000, 10000);
			if(Game.Difficulty.TimeLimit.Initial < Game.Difficulty.TimeLimit.Final) {
				Game.Difficulty.TimeLimit.Final = Game.Difficulty.TimeLimit.Initial;
			}
			if(Game.Difficulty.TimeLimit.Initial > Game.Difficulty.TimeLimit.Final + 5000) {
				Game.Difficulty.TimeLimit.Final = Game.Difficulty.TimeLimit.Initial - 5000;
			}
			RefreshGame();
		}
		function SetTimeLimitFinal() {
			Game.Difficulty.TimeLimit.Final = CheckRangeAndCorrect(Math.trunc(ReadValue("Textbox_SettingsTimeLimitFinal") * 10) / 10 * 1000, 1000, 10000);
			if(Game.Difficulty.TimeLimit.Final < Game.Difficulty.TimeLimit.Initial - 5000) {
				Game.Difficulty.TimeLimit.Initial = Game.Difficulty.TimeLimit.Final + 5000;
			}
			if(Game.Difficulty.TimeLimit.Final > Game.Difficulty.TimeLimit.Initial) {
				Game.Difficulty.TimeLimit.Initial = Game.Difficulty.TimeLimit.Final;
			}
			RefreshGame();
		}
		function SetCooldown() {
			Game.Difficulty.Cooldown = CheckRangeAndCorrect(Math.trunc(ReadValue("Textbox_SettingsCooldown") * 10) / 10 * 1000, 200, 10000);
			RefreshGame();
		}
		function SetHPDrain() {
			Game.Difficulty.HPDrain = CheckRangeAndCorrect(Math.trunc(ReadValue("Textbox_SettingsHPDrain")), 5, 100);
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
			PlayAudio("Audio_Voice", "../audio/Beep.mp3");
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
				if(ReadValue("Textbox_SettingsUserDataImport").startsWith("{\"System\":{\"Display\":{\"Theme\":")) {
					let UserData = JSON.parse(ReadValue("Textbox_SettingsUserDataImport"));
					Object.keys(UserData).forEach(function(SubobjectName) {
						localStorage.setItem(SubobjectName, JSON.stringify(UserData[SubobjectName]));
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
				"已导出本网页的用户数据至剪贴板。",
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
		let DialogEvent = System0.Dialog[System0.Dialog.length - 1].Event;
		ShowDialog("Previous");
		switch(DialogEvent) {
			case "System_LanguageUnsupported":
			case "System_MajorUpdateDetected":
			case "System_PWANewVersionReady":
			case "System_RefreshingWebpage":
			case "System_JSONStringInvalid":
			case "System_UserDataExported":
			case "AnswerLog_Copied":
				switch(Selector) {
					case 3:
						break;
					default:
						AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						break;
				}
				break;
			case "Game_QuestionRangeBelowMinimumRequirement":
				switch(Selector) {
					case 2:
						ScrollIntoView("Item_SettingsQuestionRange");
						ShowIAmHere("Item_SettingsQuestionRange");
						break;
					case 3:
						break;
					default:
						AlertSystemError("The value of Selector \"" + Selector + "\" in function AnswerDialog is invalid.");
						break;
				}
				break;
			case "System_ConfirmGoToTutorial":
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
					case 1:
						ScrollIntoView("Item_HelpGetInvolved");
						ShowIAmHere("Item_HelpGetInvolved");
						break;
					case 2:
						ForceStop();
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
			if(Game.Status.IsRunning && Game.Status.IsPaused == false) { // Make sure the game is paused before showing the dialog.
				Game.Status.IsPaused = true;
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

	// On visibility change
	window.addEventListener("visibilitychange", function() {
		if(document.visibilityState == "hidden" && Game.Status.IsRunning && Game.Status.IsPaused == false) {
			Game.Status.IsPaused = true;
			RefreshGame();
		}
	});

// Features
	// Game
	function Questioner() {
		Game0.Lottery.PreviousQuestion = structuredClone(Game0.Lottery.Question);
		GenerateQuestion();
		Game0.Lottery.CorrectAnswer = Randomize(1, 3);
		switch(Game0.Lottery.CorrectAnswer) {
			case 1:
				Game0.Lottery.Answer[1] = structuredClone(Game0.Lottery.Question);
				GenerateAnswer2();
				GenerateAnswer3();
				break;
			case 2:
				Game0.Lottery.Answer[2] = structuredClone(Game0.Lottery.Question);
				GenerateAnswer1();
				GenerateAnswer3();
				break;
			case 3:
				Game0.Lottery.Answer[3] = structuredClone(Game0.Lottery.Question);
				GenerateAnswer1();
				GenerateAnswer2();
				break;
			default:
				AlertSystemError("The value of Game0.Lottery.CorrectAnswer \"" + Game0.Lottery.CorrectAnswer + "\" in function Questioner is invalid.");
				break;
		}
		Game.Status.IsCoolingDown = false;
		Game0.Stats.StartTime2 = Date.now();
	}
		// Sub-functions
		function GenerateQuestion() {
			do {
				Game0.Lottery.Question = {
					Row: Randomize(1, 27), Column: Randomize(1, 33)
				};
			} while(
				// Prevent out of question range
				Game.QuestionRange[Game0.Lottery.Question.Row] == false ||
				// Prevent blank entry
				RomajiGrid[Game0.Lottery.Question.Row][Game0.Lottery.Question.Column] == "" ||
				// Prevent same with previous question
				RomajiGrid[Game0.Lottery.Question.Row][Game0.Lottery.Question.Column] == RomajiGrid[Game0.Lottery.PreviousQuestion.Row][Game0.Lottery.PreviousQuestion.Column]
			);
		}
		function GenerateAnswer1() {
			do {
				Game0.Lottery.Answer[1] = {
					Row: Randomize(1, 27), Column: Randomize(1, 33)
				};
			} while(
				// Prevent out of question range
				Game.QuestionRange[Game0.Lottery.Answer[1].Row] == false ||
				// Prevent blank entry
				RomajiGrid[Game0.Lottery.Answer[1].Row][Game0.Lottery.Answer[1].Column] == "" ||
				// Prevent duplication
				RomajiGrid[Game0.Lottery.Answer[1].Row][Game0.Lottery.Answer[1].Column] == RomajiGrid[Game0.Lottery.Answer[2].Row][Game0.Lottery.Answer[2].Column] ||
				RomajiGrid[Game0.Lottery.Answer[1].Row][Game0.Lottery.Answer[1].Column] == RomajiGrid[Game0.Lottery.Answer[3].Row][Game0.Lottery.Answer[3].Column]
			);
		}
		function GenerateAnswer2() {
			do {
				Game0.Lottery.Answer[2] = {
					Row: Randomize(1, 27), Column: Randomize(1, 33)
				};
			} while(
				// Prevent out of question range
				Game.QuestionRange[Game0.Lottery.Answer[2].Row] == false ||
				// Prevent blank entry
				RomajiGrid[Game0.Lottery.Answer[2].Row][Game0.Lottery.Answer[2].Column] == "" ||
				// Prevent duplication
				RomajiGrid[Game0.Lottery.Answer[2].Row][Game0.Lottery.Answer[2].Column] == RomajiGrid[Game0.Lottery.Answer[1].Row][Game0.Lottery.Answer[1].Column] ||
				RomajiGrid[Game0.Lottery.Answer[2].Row][Game0.Lottery.Answer[2].Column] == RomajiGrid[Game0.Lottery.Answer[3].Row][Game0.Lottery.Answer[3].Column]
			);
		}
		function GenerateAnswer3() {
			do {
				Game0.Lottery.Answer[3] = {
					Row: Randomize(1, 27), Column: Randomize(1, 33)
				};
			} while(
				// Prevent out of question range
				Game.QuestionRange[Game0.Lottery.Answer[3].Row] == false ||
				// Prevent blank entry
				RomajiGrid[Game0.Lottery.Answer[3].Row][Game0.Lottery.Answer[3].Column] == "" ||
				// Prevent duplication
				RomajiGrid[Game0.Lottery.Answer[3].Row][Game0.Lottery.Answer[3].Column] == RomajiGrid[Game0.Lottery.Answer[1].Row][Game0.Lottery.Answer[1].Column] ||
				RomajiGrid[Game0.Lottery.Answer[3].Row][Game0.Lottery.Answer[3].Column] == RomajiGrid[Game0.Lottery.Answer[2].Row][Game0.Lottery.Answer[2].Column]
			);
		}

// Error handling
function AlertSystemError(Message) {
	console.error("● 系统错误\n" +
		Message);
	ShowDialog("System_Error",
		"Error",
		"抱歉，发生了系统错误。若错误持续发生，请前往提供反馈。若无法关闭对话框，请点击「强制停止」。<br />" +
		"<br />" +
		"错误信息：" + Message,
		"", "前往", "强制停止", "关闭");
}
