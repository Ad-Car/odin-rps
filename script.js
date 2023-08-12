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

function playRound(playerSelection, computerSelection) {
	//rock rock = draw
	//	draw
	//paper rock = paper beats rock
	//	player wins
	//scissors rock = scissors lose to rock
	//	player loses
	//rock paper = rock loses to paper
	//	player loses
	//paper paper = draw 
	//scissors paper = scissors beat paper
	//	player wins
	//rock scissors = rock beats scissors
	//	player wins
	//paper scissors = paper loses to scissors
	//	player loses
	//scissors scissors = draw
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
					return "You lose! Rock covered by Raper"
} else if (playerSelection === "Paper"
					&& computerSelection === "Scissors") {
					return "You lose! Paper cut by Scissors"
}
}
const playerSelection = "Rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))

