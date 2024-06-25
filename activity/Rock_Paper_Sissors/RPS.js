let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscr = document.querySelector("#user-score");
const compscr = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "sissor"];

  const randomidx = Math.floor(Math.random() * 3);

  return options[randomidx];
};

const showwinner = (userwin) => {
  if (userwin) {
    userscore++;
    userscr.innerText = userscore;
    console.log("you win...");
    msg.innerText = "user win...";
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscr.innerText = compscore;
    console.log("you lose");
    msg.innerText = "user lose...";
    msg.style.backgroundColor = "red";
  }
};

const drawgame = () => {
  console.log("game was Draw");
  msg.innerText = "Game was Draw...";
  msg.style.backgroundColor = " #081b31 ";
};
const playgame = (userchoice) => {
  console.log("user choice = ", userchoice);

  const compchoice = gencompchoice();

  console.log("computer choice =", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;

    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "sissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }

    showwinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
