import React, {useState, useMemo, useEffect} from 'react';

//creates the character
function CreateChar() {

  const [abilScores, setAbilScores] = useState([
    {scoreName:'Strength', score: 0, scoreMod: 0},
    {scoreName:'Dexterity', score: 0, scoreMod: 0},
    {scoreName:'Constitution', score: 0, scoreMod: 0},
    {scoreName:'Intelligence', score: 0, scoreMod: 0},
    {scoreName:'Wisdom', score: 0, scoreMod: 0},
    {scoreName:'Charisma', score: 0, scoreMod: 0}
  ]);

  /*useEffect(() => {
    setCleric(prevCleric => prevCleric - 1);
  });*/

  const [barbarian, setBarbarian] = useState();
  const [wizard, setWizard] = useState();
  const [cleric, setCleric] = useState(0);

  const genScores = () =>{

    //setAbilScores(prevAbilScore => prevAbilScore[0].score = 1 );
    let newScores = [...abilScores];
    for(let i = 0; i < abilScores.length; i++){
      newScores[i].score = Math.floor(Math.random() * 11) + 8;
      switch(newScores[i].score){
        case 8:
        case 9:
          newScores[i].scoreMod = -1;
          break;
        case 10:
        case 11:
          newScores[i].scoreMod = 0;
          break;
        case 12:
        case 13:
          newScores[i].scoreMod = 1;
          break;
        case 14:
        case 15:
          newScores[i].scoreMod = 2;
          break;
        case 16:
        case 17:
          newScores[i].scoreMod = 3;
          break;
        case 18:
          newScores[i].scoreMod = 4;
          break;

      }
    }

    setAbilScores(newScores)
    
    
    console.log(abilScores);
  }

  const [questions, setQuestions] = useState([
    {isChecked: false},
    {qName: 'q1', checkedBttn: ''},
    {qName: 'q2', checkedBttn: ''},
    {qName: 'q3', checkedBttn: ''},
    {qName: 'q4', checkedBttn: ''},
    {qName: 'q5', checkedBttn: ''},
    {qName: 'q6', checkedBttn: ''},
    {qName: 'q7', checkedBttn: ''},
    {qName: 'q8', checkedBttn: ''},
    {qName: 'q9', checkedBttn: ''},
    {qName: 'q10', checkedBttn: ''},
    {qName: 'q11', checkedBttn: ''},
    {qName: 'q12', checkedBttn: ''},
    {qName: 'q13', checkedBttn: ''},
    {qName: 'q14', checkedBttn: ''},
    {qName: 'q15', checkedBttn: ''},
  ]);



  const buttonChange = (eValue, eName) => {
    let newQuestions = [...questions];
    let index = newQuestions.findIndex(q => q.qName === eName);
    newQuestions[index].checkedBttn = eValue;

    setQuestions(newQuestions);

  }



  return (
    
    <div>
      <h2>Create Your Character!</h2>
      <table>
        <thead>
          <tr>
            <th>STRENGTH</th>
            <th>DEXTERITY</th>
            <th>CONSTITUTION</th>
            <th>INTELLIGENCE</th>
            <th>WISDOM</th>
            <th>CHARISMA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {abilScores.map((aScores) => (
              <td key={aScores.scoreName}>{aScores.score}</td>
            ))}
          </tr>
          <tr>
            {abilScores.map((aScores) => (
              <td key={aScores.scoreName}>{aScores.scoreMod}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <button onClick={genScores}>Generate Scores</button><br></br>

      <form>
          <p>1. What type of hobby do you like the best?</p>
          <label for = "praying">                                            
             <input id ="praying" type="radio" name= "q1" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> praying
            </label>
            
            <br></br>

            <label for = "reading">                                          
              <input id = "reading" type="radio" name= "q1" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> reading
              </label>

              <br></br>

              <label for = "fighting">                                        
              <input id = "fighting" type="radio" name= "q1" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> fighting
              </label>
              
              <br></br>

              <label for = "sleeping">
              <input id = "sleeping" type="radio" name= "q1" /> sleeping
              </label>
            <br></br>
            <p>2. What type of personality are you?</p>
              <label for = "Honorable">						
              <input id = "Honorable" type="radio" name= "q2" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Honorable
              </label>

              <br></br>

              <label for = "crafty">						
              <input id = "crafty" type="radio" name= "q2" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Crafty
              </label>

              <br></br>              

              <label for = "righteous">						
              <input id = "righteous" type="radio" name= "q2" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Righteous
              </label>

              <br></br>

            <p>3. What do you depend upon?</p>
              <label for = "Yourself">						
              <input id = "Yourself" type="radio" name= "q3" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Yourself
              </label>

              <br></br>

              <label for = "An Institution/University">				
              <input id = "An Institution" type="radio" name= "q3" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> An Institution
              </label>

              <br></br>

              <label for = "A Church">						
              <input id = "A Church" type="radio" name= "q3" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> A Church
              </label>

              <br></br>

            <p>4. What Item do you prefer the most?</p>
              <label for = "An Axe">						
              <input id = "An Axe" type="radio" name= "q4" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> An Axe
              </label>

              <br></br>

              <label for = "A Wand">						
              <input id = "A Wand" type="radio" name= "q4" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> A Wand
              </label>

              <br></br>

              <label for = "Mace/Sword">					
              <input id = "Mace/Sword" type="radio" name= "q4" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> A Mace or Sword
              </label>

              <br></br>

              <p>5. What body type do you prefer?</p>
              <label for = "Short">
              <input id = "Short" type="radio" name= "q5" /> Short
              </label>

              <br></br>

              <label for = "Average">						
              <input id = "Average" type="radio" name= "q5" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Average
              </label>

              <br></br>

              <label for = "Above Average">					
              <input id = "Above Average" type="radio" name= "q5" value="barbarian cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Above Average
              </label>

              <br></br>

              <label for = "Large">						
              <input id = "Large" type="radio" name= "q5" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Large
              </label>

              <br></br>

              <label for = "Enormous">
              <input id = "Enormous" type="radio" name= "q5" /> Enormous
              </label>

              <br></br>

              <p>6. What fighting style do you like?</p>
              <label for = "Aggressive/Up Close">						
              <input id = "Aggressive/Up Close" type="radio" name= "q6" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Aggressive 
              </label>

              <br></br>

              <label for = "Close Range">							
              <input id = "Close Range" type="radio" name= "q6" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Close Range
              </label>

              <br></br>

              <label for = "Distant/Long Range">						
              <input id = "Distant/Long Range" type="radio" name= "q6" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Distant and Long Range
              </label>

              <br></br>

              <p>7. Where do you feel most at peace?</p>
              <label for = "Near Nature">						
              <input id = "Near Nature" type="radio" name= "q7" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Near Nature
              </label>

              <br></br>

              <label for = "Near a Cathedral">						
              <input id = "Near a Cathedral" type="radio" name= "q7" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Near a Cathedral
              </label>

              <br></br>

              <label for = "Near a Library">						
              <input id = "Near a Library" type="radio" name= "q7" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Near a Library
              </label>

              <br></br>

              <p>8. How tough can you be?</p>
              <label for = "I can barely take a few punches">									
              <input id = "I can barely take a few punches" type="radio" name= "q8" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> I can barely take a few punches
              </label>

              <br></br>

              <label for = "I can take a beating and still stand">								
              <input id = "I can take a beating and still stand" type="radio" name= "q8" value="wizard cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> I can take a beating and still stand
              </label>

              <br></br>

              <label for = "When someone punches me their hand breaks">								
              <input id = "When someone punches me their hand breaks" type="radio" name= "q8" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> When someone punches me their hand breaks
              </label>

              <br></br>

              <label for = "I can endure the wrath of gods -_-">								
              <input id = "I can endure the wrath of gods" type="radio" name= "q8" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> I can endure the wrath of gods
              </label>

              <br></br>

              <p>9. When it comes to weight......</p>
              <label for = "I can't really lift most things">									
              <input id = "I can't really lift most things" type="radio" name= "q9" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> I can't really lift most things
              </label>

              <br></br>

              <label for = "I can lift a decent amount of things">								
              <input id = "I can lift a decent amount of things" type="radio" name= "q9" value="wizard cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> I can lift a decent amount of things
              </label>

              <br></br>

              <label for = "I can lift a lot of things">									
              <input id = "I can lift a lot of things" type="radio" name= "q9" value="cleric barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> I can lift a lot of things
              </label>

              <br></br>

              <p>10. How educated are you?</p>
              <label for = "What's edumacation?">							
              <input id = "What's edumacation?" type="radio" name= "q10" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> What's edumacation?
              </label>

              <br></br>

              <label for = "I know my stuff">								
              <input id = "I know my stuff" type="radio" name= "q10" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> I know my stuff
              </label>

              <br></br>

              <label for = "I invented the word education...">						
              <input id = "I invented the word education..." type="radio" name= "q10" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> I invented the word education...
              </label>

              <br></br>
              
              <p>11. Between the few choices it's better to be...</p>
              <label for = "Graceful">						
              <input id = "Graceful" type="radio" name= "q11" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Graceful
              </label>

              <br></br>

              <label for = "Tough">						
              <input id = "Tough" type="radio" name= "q11" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Tough
              </label>

              <br></br>
              
              <label for = "Somewhere in between">				
              <input id = "Somewhere in between" type="radio" name= "q11" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Somewhere in between
              </label>


              <br></br>

              <p>12. What type of armor are you wearing?</p>
              <label for = "light">					
              <input id = "light" type="radio" name= "q12" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> light
              </label>

              <br></br>

              <label for = "medium">					
              <input id = "medium" type="radio" name= "q12" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> medium
              </label>

              <br></br>

              <label for = "heavy">					
              <input id = "heavy" type="radio" name= "q12" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> heavy
              </label>

              <p>13. Do you believe in gods?</p>
              <label for = "yes">					
              <input id = "yes" type="radio" name= "q13" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Yes
              </label>

              <br></br>

              <label for = "no">					
              <input id = "no" type="radio" name= "q13" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> No
              </label>

              <br></br>
              
              <label for = "eh">					
              <input id = "eh" type="radio" name= "q13" value="wizard barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Eh
              </label>

              <br></br>

              <p>14. It is better to be....</p>
              <label for = "Physically Strong">							
              <input id = "Physically Strong" type="radio" name= "q14" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Physically Strong
              </label>

              <br></br>

              <label for = "Spiritually Strong">						
              <input id = "Spiritually Strong" type="radio" name= "q14" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Spiritually Strong
              </label>

              <br></br>

              <label for = "Mentally Strong">						
              <input id = "Mentally Strong" type="radio" name= "q14" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Mentally Strong
              </label>

              <br></br>

              <p>15. How do you handle combat?</p>
              <label for = "Hiding behind others">					
              <input id = "Hiding behind others" type="radio" name= "q15" value="cleric" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Hiding behind others
              </label>

              <br></br>

              <label for = "Get an advantage point">					
              <input id = "Get an advantage point" type="radio" name= "q15" value="wizard" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Get an advantage point
              </label>

              <br></br>

              <label for = "Advance Immediately">					
              <input id = "Advance Immediately" type="radio" name= "q15" value="barbarian" onChange={(e) => buttonChange(e.target.value, e.target.name)}/> Advance Immediately
              </label>

         </form>

      <p>{barbarian}</p>
      <p>{wizard}</p>
      <p>{questions[1].checkedBttn}</p>
      <p>{questions[2].checkedBttn}</p>
      <p>{questions[3].checkedBttn}</p>
      <p>{questions[4].checkedBttn}</p>
      <p>{questions[5].checkedBttn}</p>
      <p>{questions[6].checkedBttn}</p>
      <p>{questions[7].checkedBttn}</p>
      <p>{questions[8].checkedBttn}</p>
      <p>{questions[9].checkedBttn}</p>
      <p>{questions[10].checkedBttn}</p>
      <p>{questions[11].checkedBttn}</p>
      <p>{questions[12].checkedBttn}</p>
      <p>{questions[13].checkedBttn}</p>
      <p>{questions[14].checkedBttn}</p>
      <p>{questions[15].checkedBttn}</p>
    </div>
    
  );
}


export default CreateChar;