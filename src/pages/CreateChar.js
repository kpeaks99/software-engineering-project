import React, {useState, useMemo} from 'react';

//creates the character
function CreateChar() {

  const [abilScores, setAbilScores] = useState([
    {scoreName:'Strength', score: 0, scoreMod: 0},
    {scoreName:'Dexterity', score: 0, scoreMod: 0},
    {scoreName:'Constitution', score: 0, scoreMod: 0},
    {scoreName:'Intelligence', score: 0, scoreMod: 0},
    {scoreName:'Wisdom', score: 0, scoreMod: 0},
    {scoreName:'Charisma', score: 0, scoreMod: 0}
  ])

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
      <button onClick={genScores}>Generate Scores</button>

    </div>
    
  );
}


export default CreateChar;