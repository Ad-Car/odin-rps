function getComputerChoice() {
	let randomInt = Math.floor(Math.random() * 3)
	if ( randomInt === 0 ) {
		return "Rock"
	}
	else if ( randomInt === 1 ) {
		return "Paper"
	} else {
		return "Scissors"
	}
}
function game() {
	let playerScore = 0
	let computerScore = 0
	let playerSelection
	let computerSelection
	let result


//
//
//	for (let i = 0; i < 5; i++) {
//
		function playRound(playerSelection, computerSelection) {
			playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase() 

			if (playerSelection === computerSelection) {
				return `Draw! ${playerSelection} matches ${computerSelection}`
			} else if  (playerSelection === "Paper"
				&& computerSelection === "Rock") { 
				return "You win! Paper beats rock"
			} else if  (playerSelection === "Scissors"
				&& computerSelection === "Paper") {
				return "You win! Scissors beat Paper"
			} else if  (playerSelection === "Rock"
				&& computerSelection === "Scissors")
				return "You win! Rock beats Scissors"
			else if  (playerSelection === "Scissors"
				&& computerSelection === "Rock") {
				return "You lose! Scissors blunted by Rock"	
			} else if (playerSelection === "Rock"
				&& computerSelection === "Paper") {
				return "You lose! Rock covered by Paper"
			} else if (playerSelection === "Paper"
				&& computerSelection === "Scissors") {
				return "You lose! Paper cut by Scissors"
			}
		}

//		playerSelection = prompt("Enter rock, paper or scissors...","rock");

	const buttons = document.querySelector("#container");

	buttons.addEventListener("click", (e) => { 
		console.log(e.target.id); 
		playerSelection = e.target.id;
		computerSelection = getComputerChoice()
		console.log(`Computer: ${computerSelection}`)
		result = playRound(playerSelection, computerSelection)
		
		if(result.slice(4,7) === "win" )  playerScore++ 
			else if (result.slice(4,8) === "lose") computerScore++

		alert(result)
//}

		if (playerScore === computerScore) alert("Game is a draw")
		if (playerScore > computerScore) alert(`You won the game ${playerScore}:${computerScore}!`)
		if (playerScore < computerScore) alert(`You lost the game ${playerScore}:${computerScore}!`)

	});


};
	


game()


