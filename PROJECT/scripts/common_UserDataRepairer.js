// For SamToki.github.io
// Released under GNU GPL v3 open source license.
// © 2023 SAM TOKI STUDIO

// Initialization
	// Declare variables
	"use strict";

	// Repair user data: Solves incompatibility after major version updates. A repairer may get removed if older than 12 months.
	window.onload = RepairUserData();
	function RepairUserData() {
		// Timer+Lottery
			// v3.00 (2024/11/07)
			// Rename variable (Ringtone volume)
			if(localStorage.TimerPlusLottery_Subsystem != undefined) {
				let Subsystem = JSON.parse(localStorage.getItem("TimerPlusLottery_Subsystem"));
				if(Subsystem.Audio.RingtoneVolume == undefined) {
					Subsystem.Audio.RingtoneVolume = Subsystem.Audio.SoundVolume;
					delete Subsystem.Audio.SoundVolume;
					localStorage.setItem("TimerPlusLottery_Subsystem", JSON.stringify(Subsystem));
					console.info("● User Data Repairer\n" +
						"Repaired user data \"TimerPlusLottery Subsystem Audio RingtoneVolume\".");
				}
			}

		// KanaMaster
			// v2.00 (2024/10/04)
			// New feature (Audio)
			if(localStorage.KanaMaster_Subsystem != undefined) {
				let Subsystem = JSON.parse(localStorage.getItem("KanaMaster_Subsystem"));
				if(Subsystem.Audio == undefined) {
					Subsystem.Audio = {
						VoiceVolume: 0,
						AlsoPlayVoiceOnMiss: false
					};
					localStorage.setItem("KanaMaster_Subsystem", JSON.stringify(Subsystem));
					console.info("● User Data Repairer\n" +
						"Repaired user data \"KanaMaster Subsystem Audio\".");
				}
			}

			// v3.00 (2024/10/13)
			// Rename variable (Final time limit)
			if(localStorage.KanaMaster_Game != undefined) {
				let Game = JSON.parse(localStorage.getItem("KanaMaster_Game"));
				if(Game.Difficulty.TimeLimit.Final == undefined) {
					Game.Difficulty.TimeLimit.Final = Game.Difficulty.TimeLimit.Normal;
					delete Game.Difficulty.TimeLimit.Normal;
					localStorage.setItem("KanaMaster_Game", JSON.stringify(Game));
					console.info("● User Data Repairer\n" +
						"Repaired user data \"KanaMaster Game Difficulty TimeLimit Final\".");
				}
			}

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
					console.info("● User Data Repairer\n" +
						"Repaired user data \"KanaMaster Highscore\".");
				}
			}

		// Yamanobo-Ryou
			// v2.00 (2025/01/08)
			// Optimize user data structure
			if(localStorage.YamanoboRyou_Game != undefined) {
				let Game = JSON.parse(localStorage.getItem("YamanoboRyou_Game"));
				if(Game.Terrain.Data[0].C == undefined) {
					let NewObject = [
						{C: "", A: 0}
					];
					for(let Looper = 1; Looper < Game.Terrain.Data.length; Looper++) {
						NewObject[Looper] = {
							C: Game.Terrain.Data[Looper][1],
							A: Game.Terrain.Data[Looper][2]
						}
					}
					Game.Terrain.Data = structuredClone(NewObject);
					localStorage.setItem("YamanoboRyou_Game", JSON.stringify(Game));
					console.info("● User Data Repairer\n" +
						"Repaired user data \"YamanoboRyou Game Terrain Data\".");
				}
			}
			if(localStorage.YamanoboRyou_Highscore != undefined) {
				let Highscore = JSON.parse(localStorage.getItem("YamanoboRyou_Highscore"));
				if(Highscore[1].Sequence == undefined) {
					let NewObject = [
						0,
						{Sequence: Highscore[1][1], Date: Highscore[1][2], Score: Highscore[1][3], AvgSpeed: Highscore[1][4], AvgKeystrokeSpeed: Highscore[1][5], Accuracy: Highscore[1][6]},
						{Sequence: Highscore[2][1], Date: Highscore[2][2], Score: Highscore[2][3], AvgSpeed: Highscore[2][4], AvgKeystrokeSpeed: Highscore[2][5], Accuracy: Highscore[2][6]},
						{Sequence: Highscore[3][1], Date: Highscore[3][2], Score: Highscore[3][3], AvgSpeed: Highscore[3][4], AvgKeystrokeSpeed: Highscore[3][5], Accuracy: Highscore[3][6]},
						{Sequence: Highscore[4][1], Date: Highscore[4][2], Score: Highscore[4][3], AvgSpeed: Highscore[4][4], AvgKeystrokeSpeed: Highscore[4][5], Accuracy: Highscore[4][6]},
						{Sequence: Highscore[5][1], Date: Highscore[5][2], Score: Highscore[5][3], AvgSpeed: Highscore[5][4], AvgKeystrokeSpeed: Highscore[5][5], Accuracy: Highscore[5][6]},
						{Sequence: Highscore[6][1], Date: Highscore[6][2], Score: Highscore[6][3], AvgSpeed: Highscore[6][4], AvgKeystrokeSpeed: Highscore[6][5], Accuracy: Highscore[6][6]}
					];
					localStorage.setItem("YamanoboRyou_Highscore", JSON.stringify(NewObject));
					console.info("● User Data Repairer\n" +
						"Repaired user data \"YamanoboRyou Highscore\".");
				}
			}

			// v2.02 (2025/01/09)
			// Optimize user data structure
			if(localStorage.YamanoboRyou_Game != undefined) {
				let Game = JSON.parse(localStorage.getItem("YamanoboRyou_Game"));
				if(Game.Stats.Keystroke == undefined) {
					Game.Stats.Keystroke = {
						Count: Game.Stats.KeystrokeCount,
						Timestamp: Game.Stats.KeystrokeTimestamp
					};
					delete Game.Stats.KeystrokeCount;
					delete Game.Stats.KeystrokeTimestamp;
					localStorage.setItem("YamanoboRyou_Game", JSON.stringify(Game));
					console.info("● User Data Repairer\n" +
						"Repaired user data \"YamanoboRyou Game Stats Keystroke\".");
				}
			}

		// GPS-PFD
			// v0.31 (2025/06/08) Beta Test
			// New feature
			if(localStorage.GPSPFD_PFD != undefined) {
				let PFD = JSON.parse(localStorage.getItem("GPSPFD_PFD"));
				if(PFD.Speed.TakeOff == undefined) {
					PFD.Speed.TakeOff = {
						V1: 72.016, VR: 74.588
					};
					PFD.Heading = {
						Mode: "GPS"
					};
					PFD.MCP = {
						Speed: {
							IsEnabled: false, Value: 0
						},
						Altitude: {
							IsEnabled: false, Value: 0
						},
						Heading: {
							IsEnabled: false, Value: 0
						}
					};
					localStorage.setItem("GPSPFD_PFD", JSON.stringify(PFD));
					console.info("● User Data Repairer\n" +
						"Repaired user data \"GPSPFD PFD\".");
				}
			}

			// v0.35 (2025/07/17) Beta Test
			// New feature
			if(localStorage.GPSPFD_PFD != undefined) {
				let PFD = JSON.parse(localStorage.getItem("GPSPFD_PFD"));
				if(PFD.MCP.Speed.Mode == undefined) {
					PFD.MCP.Speed.Mode = "IAS";
					PFD.MCP.Speed.IAS = PFD.MCP.Speed.Value;
					PFD.MCP.Speed.MachNumber = 0;
					delete PFD.MCP.Speed.Value;
					localStorage.setItem("GPSPFD_PFD", JSON.stringify(PFD));
					console.info("● User Data Repairer\n" +
						"Repaired user data \"GPSPFD PFD\".");
				}
			}
	}
