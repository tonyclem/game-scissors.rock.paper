const game = () => {
  let pScore = 0;
  let cScore = 0;

  //  Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //   Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // Computer Match
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer Chooice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // Here is where we call compare hands
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          // Updating Image
          playerHand.src = `./gmImage/${this.textContent}.png`;
          computerHand.src = `./gmImage/${computerChoice}.png`;
        }, 2000);

        // Animations
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updataScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    // Updata Text
    const winner = document.querySelector(".winner");
    // Checking for tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updataScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updataScore();
        return;
      }
    }

    // Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updataScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updataScore();
        return;
      }
    }

    // Check for Rock
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updataScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updataScore();
        return;
      }
    }
  };

  // It call all the inner function
  startGame();
  playMatch();
};

// Start the game function
game();
