const result = document.querySelector(".resultado");
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumnber = 0
let machineScoreNumnber = 0



const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
  // console.log(humanChoice)

  // console.log('retorno' + playMachine())
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNamber = Math.floor(Math.random() * 3);

  // console.log(randomNamber)

  return choices[randomNamber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate!";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {humanScoreNumnber++
    humanScore.innerHTML =humanScoreNumnber
    result.innerHTML = "Você ganhou!";
  } else {machineScoreNumnber++
    machineScore.innerHTML = machineScoreNumnber
    result.innerHTML = "Você perdeu para Mirian!";
  }
};

/*
Papel -> Pedra -> Tesoura 
*/
