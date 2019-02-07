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
	['*Averse*','*Pluie*','*Pluie Battante*','*Orage*'],
    ['*Flocons*','*Neige*','*Fortes Neiges*','*Blizzard*'],
    ['*Nuageux*','*Eclaircie*','*Ensoleillé*','*Canicule*']
];

Aegir.on('ready', function () {
	Aegir.user.setActivity("Aide : -help");
  console.log("Connected");
});

Aegir.login(process.env.TOKEN);

function getRandomInt(RandNbr) {
	if (RandNbr==2){
		var Calc = Math.floor(Math.random() * Math.floor(RandNbr));
	} else {
		var Calc = Math.floor(Math.random() * Math.floor(RandNbr));
		if (Calc>=0 && Calc<25){
			Calc=0;
		} else if (Calc>=25 && Calc<75){
			Calc=1;
		} else if (Calc>=75 && Calc<96){
			Calc=2;
		} else if (Calc>=96 && Calc<101){
			Calc=3;
		}
	}
	return Calc;
};

Aegir.on('message', msg => {
	if (msg.content === "-gw2météo") {
			for (var cpt=0;cpt<4;cpt++){
				for (var ckc=0;ckc<6;ckc++){
					var randinfluence = getRandomInt(100);
					var tkt = getRandomInt(2);
					if (ckc==0){
						msg.channel.sendMessage(tab[cpt][ckc]);
					} else {
						if(cpt==0){
                        	if(tkt==1){
                                tkt=2;
							};
                            msg.channel.sendMessage(tab[cpt][ckc]+' '+tab2[tkt][randinfluence]);
                        } else if(cpt==1) {
                        	if(ckc==1){
								tkt=1;
							} else if(ckc==4 || ckc==5){
								if(tkt==1){
                                	tkt=2;
                                };
							} else {
								if(tkt==2){
                                	tkt=0;
                                };
							};
                            msg.channel.sendMessage(tab[cpt][ckc]+' '+tab2[tkt][randinfluence]);
                        } else if(cpt==2){
							if(ckc==1){
								tkt=2;
							} else if(ckc==4){
								tkt=1;
							} else {
								if(tkt==1){
                                	tkt=2;
                                };
							};
							msg.channel.sendMessage(tab[cpt][ckc]+' '+tab2[tkt][randinfluence]);
						} else if(cpt==3){
							tkt=2;
							msg.channel.sendMessage(tab[cpt][ckc]+' '+tab2[tkt][randinfluence]);
						} else {
							msg.channel.sendMessage(tab[cpt][ckc]+' '+tab2[tkt][randinfluence]);
						};
					};
				};
			};	
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
