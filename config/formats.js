'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// USUM Formats	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
	},
	{
		name: "[Gen 7] Random Battle",
		desc: [
			`Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Unrated Random Battle",

		mod: 'gen7',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3621042/">OU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3621329/">OU Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3626219/">OU Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},

{
		name: "[Gen7]Gen 1 Throwback",
		desc: ["SUTD FTLF 2018 Format"],

		mod: 'gen1T',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Drought','Baton Pass',"Mew","Mewtwo","Eviolite","Charizardite X","Charizardite Y","Beedrillite","Pidgeotite","Blastoisinite","Slowbronite","Alakazite","Aerodactylite","Gengarite","Gyaradosite","Kangaskhanite","Pinsirite","Venusaurite","Snorlium Z","Eevium Z","Pikanium Z","Fairium Z","Darkinium Z","Dragonium Z","Icium Z","Psychium Z","Electrium Z","Grassium Z","Waterium Z","Firium Z","Steelium Z","Ghostium Z","Buginium Z","Rockium Z","Groundium Z","Poisonium Z","Flyinium Z","Fightinium Z","Normalium Z","Diglett-Alola","Dugtrio-Alola","Exeggutor-Alola","Geodude-Alola","Graveler-Alola","Golem-Alola","Grimer-Alola","Marowak-Alola","Meowth-Alola","Muk-Alola","Vulpix-Alola","Ninetales-Alola","Persian-Alola","Marowak-Alola-Totem"],
	},

]
