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
			} else if  (playerSelection === "Rock" && computerSelection === "Scissors")
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

	const buttons = document.querySelector("#container");
	const results = document.querySelector("#results");
	const score = document.querySelector("#score");
	const outcome = document.querySelector("#outcome");
	
	buttons.addEventListener("click", (e) => { 
		playerSelection = e.target.id;
		computerSelection = getComputerChoice()
		result = playRound(playerSelection, computerSelection)
		
		if(result.slice(4,7) === "win" )  playerScore++ 
			else if (result.slice(4,8) === "lose") computerScore++
	
	results.textContent = result
	score.textContent = `That's ${computerScore} for me, ${playerScore} for you.`
	if (playerScore === 5) { outcome.textContent = "You won the game!"; return }
	if (computerScore === 5) {outcome.textContent = "I won the game!"; return }

	});
};

game()


