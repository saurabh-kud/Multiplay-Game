"use strict";

// sececting element
const score0el = document.querySelector("#score-0");
const score1el = document.querySelector("#score-1");
const currentScore0El = document.querySelector("#current-0");
const currentScore1El = document.querySelector("#current-1");
const holdEl = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const rolldiceel = document.querySelector(".btn--roll");
let diceel = document.querySelector(".dice");
const again = document.querySelector(".btn--new");

// setting value 0
score0el.innerHTML = 0;
score1el.innerHTML = 0;
// diceel.classList.add("hidden");
let activePlayer;
let scores;
let currentScore;
let game;
// again button call function
const init = function () {
  activePlayer = 0;
  diceel = document.querySelector(".dice");
  currentScore = 0;
  scores = [0, 0];
  game = true;

  score0el.innerHTML = 0;
  score1el.innerHTML = 0;
  currentScore0El.innerHTML = 0;
  currentScore1El.innerHTML = 0;

  diceel.classList.add("hidden");
  player0.classList.add("active-player");
  player1.classList.remove("active-player");
  player0.classList.remove("player-winner");
  player1.classList.remove("player-winner");
};
init();

// switch player function
const swithPlayer = function () {
  document.getElementById(`current-${activePlayer}`).innerHTML = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active-player");
  player1.classList.toggle("active-player");
};

//when dice roll
rolldiceel.addEventListener("click", function (e) {
  if (game) {
    //generate random dice roll
    const randNum = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceel.src = `dice-${randNum}.png`;
    diceel.classList.remove("hidden");
    console.log(e);
    //check for dice roll 1
    if (randNum !== 1) {
      currentScore += randNum;

      document.getElementById(`current-${activePlayer}`).innerHTML =
        currentScore;
    } else {
      swithPlayer();
    }
  }
});

//when click hold button

holdEl.addEventListener("click", function () {
  if (game) {
    scores[activePlayer] += currentScore;
    // currentScore = 0;
    document.getElementById(`score-${activePlayer}`).innerHTML =
      scores[activePlayer];
    if (currentScore && scores[activePlayer] < 50) {
      // document.getElementById(`score-${activePlayer}`).innerHTML =
      //   scores[activePlayer];
      swithPlayer();
    } else if (scores[activePlayer] >= 50) {
      console.log(`${activePlayer + 1} won`);
      player0.classList.remove("active-player");
      player1.classList.remove("active-player");
      activePlayer == 0
        ? player0.classList.add("player-winner")
        : player1.classList.add("player-winner");
      game = false;
    }
  }
});

//for again button

again.addEventListener("click", init);
