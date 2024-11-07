// For SamToki.github.io
// Released under GNU GPL v3 open source license.
// (C) 2023 SAM TOKI STUDIO

// Initialization
	// Declare variables
	"use strict";

	// Repair user data: Solves incompatibility after major version updates.
	window.onload = RepairUserData();
	function RepairUserData() {
		// Timer+Lottery
			// v3.00 variable renaming: Ringtone volume
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
			// v2.00 new feature: Audio
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

			// v3.00 variable renaming: Final time limit
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
	}
