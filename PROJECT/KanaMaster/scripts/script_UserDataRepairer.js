// For SamToki.github.io/KanaMaster
// Released under GNU GPL v3 open source license.
// © 2023 SAM TOKI STUDIO

// Initialization
	// Declare variables
	"use strict";

	// Repair user data: Solves incompatibility after version updates. A repairer may get removed if older than 24 months.
	function RepairUserData() {
		// System
			// v9.00 (2025/12/14)
			// Rename value (Mouse cursor)
			if(localStorage.System != undefined) {
				let System = JSON.parse(localStorage.getItem("System"));
				if(System.Display.Cursor == "Default") {
					System.Display.Cursor = "None";
					localStorage.setItem("System", JSON.stringify(System));
				}
			}

			// v10.00 (2026/02/08)
			// New feature (Fieldset collapsing)
			if(localStorage.System != undefined) {
				let System = JSON.parse(localStorage.getItem("System"));
				if(System.CollapsedFieldset == undefined) {
					System.CollapsedFieldset = [0];
					localStorage.setItem("System", JSON.stringify(System));
				}
			}

		// KanaMaster
			// v4.00 (2025/01/08)
			// Optimize user data structure
			if(localStorage.KanaMaster_Highscore != undefined) {
				let Highscore = JSON.parse(localStorage.getItem("KanaMaster_Highscore"));
				if(Highscore[1].Sequence == undefined) {
					let NewObject = [
						0,
						{Sequence: Highscore[1][1], Date: Highscore[1][2], Score: Highscore[1][3], MaxCombo: Highscore[1][4], Accuracy: Highscore[1][5], AvgReactionTime: Highscore[1][6]},
						{Sequence: Highscore[2][1], Date: Highscore[2][2], Score: Highscore[2][3], MaxCombo: Highscore[2][4], Accuracy: Highscore[2][5], AvgReactionTime: Highscore[2][6]},
						{Sequence: Highscore[3][1], Date: Highscore[3][2], Score: Highscore[3][3], MaxCombo: Highscore[3][4], Accuracy: Highscore[3][5], AvgReactionTime: Highscore[3][6]},
						{Sequence: Highscore[4][1], Date: Highscore[4][2], Score: Highscore[4][3], MaxCombo: Highscore[4][4], Accuracy: Highscore[4][5], AvgReactionTime: Highscore[4][6]},
						{Sequence: Highscore[5][1], Date: Highscore[5][2], Score: Highscore[5][3], MaxCombo: Highscore[5][4], Accuracy: Highscore[5][5], AvgReactionTime: Highscore[5][6]},
						{Sequence: Highscore[6][1], Date: Highscore[6][2], Score: Highscore[6][3], MaxCombo: Highscore[6][4], Accuracy: Highscore[6][5], AvgReactionTime: Highscore[6][6]}
					];
					localStorage.setItem("KanaMaster_Highscore", JSON.stringify(NewObject));
				}
			}

			// v4.06 (2025/10/29)
			// Rename values (Game font)
			if(localStorage.KanaMaster_Subsystem != undefined) {
				let Subsystem = JSON.parse(localStorage.getItem("KanaMaster_Subsystem"));
				switch(Subsystem.Display.GameFont) {
					case "Default":
						Subsystem.Display.GameFont = "Inherit";
						localStorage.setItem("KanaMaster_Subsystem", JSON.stringify(Subsystem));
						break;
					case "Sans":
						Subsystem.Display.GameFont = "Sans-serif";
						localStorage.setItem("KanaMaster_Subsystem", JSON.stringify(Subsystem));
						break;
					default:
						break;
				}
			}

			// v5.00 (2025/11/12)
			// Change question range structure
			if(localStorage.KanaMaster_Game != undefined) {
				let Game = JSON.parse(localStorage.getItem("KanaMaster_Game"));
				if(Game.QuestionRange.length != 28) {
					Game.QuestionRange = [
						0,
						true, true, true, true, true, true, true, true, true, true,
						true, true, true, true, true, true, true, true, true, true,
						true,
						false, false,
						false, false,
						false, false
					];
					localStorage.setItem("KanaMaster_Game", JSON.stringify(Game));
				}
			}
	}
