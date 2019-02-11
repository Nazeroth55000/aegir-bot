const Discord = require('discord.js');
const Aegir = new Discord.Client();

var a = 0;
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var getDayNbr = Math.floor(diff / oneDay);
var tab = [
	['```INFLUENCE KRYTIENNE :```','**La Kryte Littorale :**','**La Jungle de Maguuma :**','**La Baie de Janthir :**','**Les Côtes Ternies :**','**Les Cascades Forestières :**'],
	['```INFLUENCE ASCALONIENNE :```','**Les Lointaines Cîmefroides :**','**Les Chaînes des Cîmefroides :**','**La Façade de Deldrimor :**','**L’Ancienne Ascalon :**','**Les Terres Natales Charrs :**'],
	['```INFLUENCE ORIENNE :```','**Le Cercle de Feu :**','**La Mer des Lamentations :**','**Les Ruines d’Orr :**','**Les Chaînes de Poîntebrume :**','**La Chaussée du Charognard :**'],
	['```INFLUENCE ELONIENNE :```','**Le Désert de Cristal :**','**Le Domaine de Kourna :**','**Les Etendues de Vabbi :**','**L’Archipel d’Istan :**','**La Désolation d’Elona :**']
];
var tab2 = [
	['*Bruine*','*Pluie*','*Pluie Battante*','*Orage*'],
	['*Flocons*','*Neige*','*Fortes Neiges*','*Blizzard*'],
	['*Nuageux*','*Éclaircie*','*Ensoleillé*','*Canicule*']
];
var tabrl = ['```RUMEURS LOINTAINES :```',"**Congères d'Antreneige :**",'**Contreforts du Voyageur :**','**Détroit des Gorges Glacées :**','**Lointaines Cimefroides :**','**Confins de Givramer :**'];
var tabrl2 = ['*Nuageux*','*Éclaircie*','*Ensoleillé*','*Bruine*','*Pluie*','*Flocons*','*Neige*','*Fortes Neiges*','*Blizzard*'];

Aegir.on('ready', function () {
	Aegir.user.setActivity("Aide : -help");
  console.log("Connected");
});

Aegir.login(process.env.TOKEN);

function getRandomInt(RandNbr) {
	if (RandNbr==750){
		var Calc = Math.floor(Math.random() * Math.floor(RandNbr));
		if (Calc>=0 && Calc<250){
			Calc=0;
		} else if (Calc>=250 && Calc<500){
			Calc=1;
		} else if (Calc>=500 && Calc<751){
			Calc=2;
		};
	} else if (RandNbr==3015){
		var Calc var Calc = Math.floor(Math.random() * Math.floor(RandNbr));
		if (Calc>=0 && Calc<335){
			Calc=0;
		} else if (Calc>=335 && Calc<670){
			Calc=1;
		} else if (Calc>=670 && Calc<1005){
			Calc=2;
		} else if (Calc>=1005 && Calc<1340){
			Calc=3;
		} else if (Calc>=1340 && Calc<1670){
			Calc=4;
		} else if (Calc>=1670 && Calc<2010){
			Calc=5;
		} else if (Calc>=2010 && Calc<2345){
			Calc=6;
		} else if (Calc>=2345 && Calc<2680){
			Calc=7;
		}else if (Calc>=2680 && Calc<3016){
			Calc=8;
		};
	} else {
		var Calc = Math.floor(Math.random() * Math.floor(RandNbr));
		if (Calc>=0 && Calc<250){
			Calc=0;
		} else if (Calc>=250 && Calc<500){
			Calc=1;
		} else if (Calc>=500 && Calc<750){
			Calc=2;
		} else if (Calc>=750 && Calc<1001){
			Calc=3;
		};
	};
	return Calc;
};

Aegir.on('message', msg => {
	if (msg.content === "-gw2météo") {
		for (var cpt=0;cpt<4;cpt++){
			var txt = '';
			for (var ckc=0;ckc<6;ckc++){
				var tpt = getRandomInt(1000);
				var tkt = getRandomInt(750);
					if (ckc==0){
						txt = tab[cpt][ckc];
					} else {
						if(cpt==0 && tkt==1){
							tkt=2;
						} else if(cpt==1) {
							if(ckc==1){
								tkt=1;
							} else if(tkt==1 && ckc==4 || ckc==5){
								tkt=2;
							} else if(tkt==2){
								tkt=0;
							};
						} else if(cpt==2){
							if(ckc==1){
								tkt=2;
							} else if(ckc==4){
								tkt=1;
							};
							if(tkt==1){
								tkt=2;
							};
						} else if(cpt==3){
							tkt=2;
						};
						txt = txt+tab[cpt][ckc]+' '+tab2[tkt][tpt]+'\n';
					};
			};
			msg.channel.sendMessage(txt);
		};
	} else if (msg.content === "-rlmétéo") {
		var pxp = '';
		for (var mtp=0;mtp<6;mtp++){
			var fdp = getRandomInt(3015);
			if (mtp==0){
				pxp = tabrl[mtp];
			} else {
				pxp = pxp+tabrl[mtp]+' '+tabrl2[fdp]+'\n';
			};
		};
		msg.channel.sendMessage(pxp);
	};
});

Aegir.on('message', helpMsg => {
	if (helpMsg.content === "-help") {
		if (a === 0){
			helpMsg.channel.sendMessage('"**Aucune aide ne vous sera apportez, ce bot ne donne que la météo et rien de plus.**"');
			a = 1;
		} else if (a === 1) {
			helpMsg.channel.sendMessage('"**Je n'+"'"+'ai que faire de vos suppliques.**"');
			a = 2;
		} else if (a === 2) {
			helpMsg.channel.sendMessage('"**Vous n'+"'"+'obtiendrez rien ainsi...**"');
			a = 0;
		};
	};
});
