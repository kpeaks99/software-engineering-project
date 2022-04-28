// Two libraries needed for the code to work
// https://pdf-lib.js.org/#install
// https://github.com/rndme/download
// Put this in the file you want to use the function in import:
// import { fillForm } from "./fillForm";
// Test inputs: fillForm([8, 12, 14, 15, 16, 18], ['Leon the Great', 'hermit', 'Jim', 'Dwarf', 'Chaotic Evil', 'Wizard'], ['top fields 2, put stuff here'], [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0], [1, 1, 0, 0, 0, 0], ['Very cool', 'Wants to set stuff on fire', 'fire', 'bit too much fire'], [19, 25], 6, 'Likes fire, a lot', 'Fire, arson, other fire related crimes', 'gasoline, match, napalm', 'Arsonist', ['Firebolt', 'int', 10, 'fire', 'Flamethrower', 'dex', 12, 'fire +', 'Fist', 'str', 4, 'bludgeoning'], [0, 0, 200, 400, 800], [1, 'int'])


import { PDFDocument } from 'pdf-lib'
import download from 'downloadjs'
import raw from './CharSheet.pdf'

export async function fillForm(attributes, topFields1, topFields2, skillProf, saveProfs, traits, acSpeed, hp, backstory, otherProf, equipment, features, attacks, money, ifCaster) {
	//https://media.wizards.com/2016/dnd/downloads/5E_CharacterSheet_Fillable.pdf
	//The pdf being used to fill the form
	//Any errors will be outputed as an alert on the webpage
	  
	try {

		const formPdfBytes = await fetch(raw).then(res => res.arrayBuffer())
		const pdfDoc = await PDFDocument.load(formPdfBytes)
		const form = pdfDoc.getForm()

		//Top fields first page
		const nameField = form.getTextField('CharacterName');
		const classLevelField = form.getTextField('ClassLevel');
		const backgroundField = form.getTextField('Background');
		const playerNameField = form.getTextField('PlayerName');
		const raceField = form.getTextField('Race ');
		const alignmentField = form.getTextField('Alignment');
		const xpField = form.getTextField('XP');

		//Ability scores, saves, and associated skills
		const str = form.getTextField('STR');
		const strMod = form.getTextField('STRmod');
		const strSave = form.getTextField('ST Strength');

		const dex = form.getTextField('DEX');
		const dexMod = form.getTextField('DEXmod ');
		const dexSave = form.getTextField('ST Dexterity');

		const con = form.getTextField('CON');
		const conMod = form.getTextField('CONmod');
		const conSave = form.getTextField('ST Constitution');

		const wis = form.getTextField('WIS');
		const wisMod = form.getTextField('WISmod');
		const wisSave = form.getTextField('ST Wisdom');

		const intl = form.getTextField('INT');
		const intlMod = form.getTextField('INTmod');
		const intlSave = form.getTextField('ST Intelligence');

		const cha = form.getTextField('CHA');
		const chaMod = form.getTextField('CHamod');
		const chaSave = form.getTextField('ST Charisma');
		//proficiency fields
		const acrobaticsField = form.getTextField('Acrobatics');
		const animalField = form.getTextField('Animal');
		const arcanaField = form.getTextField('Arcana');
		const athleticsField = form.getTextField('Athletics');
		const deceptionField = form.getTextField('Deception ');
		const historyField = form.getTextField('History ');
		const insightField = form.getTextField('Insight');
		const intimidationField = form.getTextField('Intimidation');
		const investigationField = form.getTextField('Investigation ');
		const medicineField = form.getTextField('Medicine');
		const natureField = form.getTextField('Nature');
		const perceptionField = form.getTextField('Perception ');
		const performanceField = form.getTextField('Performance');
		const persuasionField = form.getTextField('Persuasion')
		const religionField = form.getTextField('Religion');
		const sleightField = form.getTextField('SleightofHand');
		const stealthField = form.getTextField('Stealth ');
		const survivalField = form.getTextField('Survival');

		const passWisField = form.getTextField('Passive');

		//Traits fields
		const personalityField = form.getTextField('PersonalityTraits ');
		const idealsField = form.getTextField('Ideals');
		const bondsField = form.getTextField('Bonds');
		const flawsField = form.getTextField('Flaws');

		// ac, initiative speed 
		const acField = form.getTextField('AC');
		const initiativeField = form.getTextField('Initiative');
		const speedField = form.getTextField('Speed');

		//Hit points and hit dice
		const hpMaxField = form.getTextField('HPMax');
		const hpCurrField = form.getTextField('HPCurrent');
		const hitDiceTotalField = form.getTextField('HDTotal');
		const hitDiceCurrField = form.getTextField('HD');

		//Other profs and equipment

		//Attacks

		//Second Page Fields


		//compute prof mods
		var strModifier = Math.floor((attributes[0] - 10 )/ 2);
		var dexModifier = Math.floor((attributes[1] - 10 )/ 2);
		var conModifier = Math.floor((attributes[2] - 10 )/ 2);
		var intlModifier = Math.floor((attributes[3] - 10 )/ 2);
		var wisModifier = Math.floor((attributes[4] - 10 )/ 2);
		var chaModifier = Math.floor((attributes[5] - 10 )/ 2);


		// Set attributes and compute prof bonus
		str.setText(String(attributes[0]));
		strMod.setText(String(strModifier));
		strSave.setText(String(strModifier + saveProfs[0] * 2));

		dex.setText(String(attributes[1]));
		dexMod.setText(String(dexModifier));
		dexSave.setText(String(dexModifier + saveProfs[1] * 2));

		con.setText(String(attributes[2]));
		conMod.setText(String(conModifier));
		conSave.setText(String(conModifier + saveProfs[2] * 2));

		wis.setText(String(attributes[3]));
		wisMod.setText(String(wisModifier));
		wisSave.setText(String(wisModifier + saveProfs[3] * 2));

		intl.setText(String(attributes[4]));
		intlMod.setText(String(intlModifier));
		intlSave.setText(String(intlModifier + saveProfs[4] * 2));

		cha.setText(String(attributes[5]));
		chaMod.setText(String(chaModifier));
		chaSave.setText(String(chaModifier + saveProfs[5] * 2));

		//set proficiency fields

		acrobaticsField.setText(String(dexModifier + skillProf[0] * 2));
		animalField.setText(String(wisModifier + skillProf[1] * 2));
		arcanaField.setText(String(intlModifier + skillProf[2] * 2));
		athleticsField.setText(String(strModifier + skillProf[3] * 2));
		deceptionField.setText(String(chaModifier + skillProf[4] * 2));
		historyField.setText(String(intlModifier + skillProf[5] * 2));
		insightField.setText(String(wisModifier + skillProf[6] * 2));
		intimidationField.setText(String(chaModifier + skillProf[7] * 2));
		investigationField.setText(String(intlModifier + skillProf[8] * 2));
		medicineField.setText(String(wisModifier + skillProf[9] * 2));
		natureField.setText(String(wisModifier + skillProf[10] * 2));
		perceptionField.setText(String(wisModifier + skillProf[11] * 2));
		performanceField.setText(String(chaModifier + skillProf[12] * 2));
		persuasionField.setText(String(chaModifier + skillProf[13] * 2));
		religionField.setText(String(intlModifier + skillProf[14] * 2));
		sleightField.setText(String(dexModifier + skillProf[15] * 2));
		stealthField.setText(String(dexModifier + skillProf[16] * 2));
		survivalField.setText(String(wisModifier + skillProf[17] * 2));
	
		passWisField.setText(String(wisModifier + skillProf[11] * 2 + 10));

		//set hp and hitDice

		hpMaxField.setText(String(hp + conModifier));
		hpCurrField.setText(String(hp + conModifier));
		hitDiceCurrField.setText('1d' + hp);
		hitDiceTotalField.setText('1');

		// Sets character description fields
		nameField.setText(topFields1[0]);
		classLevelField.setText('1 ' + topFields1[5]);
		backgroundField.setText(topFields1[1]);
		playerNameField.setText(topFields1[2]);
		raceField.setText(topFields1[3]);
		alignmentField.setText(topFields1[4]);
		xpField.setText('0');

		//Names the pdf the player character's name and downloads it
		const pdfBytes = await pdfDoc.save();
		download(pdfBytes, topFields[0], "application/pdf");
	} catch (error) {
		alert(error);

	}
	return "Completed";
}



