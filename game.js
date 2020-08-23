let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const actions = ['Rock', 'Paper', 'Scissors'];
    return actions[Math.floor(Math.random() * actions.length)];
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps === 'rock') {
        if (cs === 'paper') {
            return {'result' : 0, 'message' :  'You Lose! Paper beats Rock'};
        } else if (cs === 'scissors') {
            return {'result' : 1, 'message' : 'You Win! Rock beats Scissors'};
        } 

        return {'result' : 2, 'message' : 'Tie Game!'};
    } else if (ps === 'paper') {
        if (cs === 'rock') {
            return {'result' : 1, 'message' : 'You Win! Paper beats Rock'};
        } else if (cs === 'scissors') {
            return {'result' : 0, 'message' : 'You Lose! Scissors beats Paper'};
        } 

        return {'result' : 2, 'message' : 'Tie Game!'};
    } else if (ps === 'scissors') {
        if (cs === 'rock') {
            return {'result' : 0, 'message' : 'You Lose! Rock beats Scissors'};
        } else if (cs === 'paper') {
            return {'result' : 1, 'message' : 'You Win! Scissors beats Paper'};
        }

        return {'result' : 2, 'message' : 'Tie Game!'};
    }
}

function game(selection) {
    playerSelection = selection.toLowerCase();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    const gameTextDisplay = document.querySelector('#game-text');

    gameTextDisplay.textContent = result['message'];

    switch(result['result']) {
        case 0:
            ++computerScore;
            break;
        case 1:
            ++playerScore;
            break;
        case 2:
        default:
            break;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore === 5 || computerScore == 5) {
        const winnerText = playerScore == 5 ? 'Congratulations, you have won!' : 'Sorry, you lost the game, try again';
        alert(winnerText);
        playerScore = computerScore = 0;
        playerScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;
        gameTextDisplay.textContent = 'First to 5 wins!';
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', function (e) {
    game('rock');
});

paperButton.addEventListener('click', function (e) {
    game('paper');
});

scissorsButton.addEventListener('click', function (e) {
    game('scissors');
});