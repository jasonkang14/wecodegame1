const elUser = document.querySelector(".user");
const elUserBtn = document.querySelector(".userBtn");
const elUserInput = document.querySelector(".user-input");
const elInputWrap = document.querySelector(".input-wrap");
const elRestartBtn = document.createElement("button");
let scoreArr = [];

class Users {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const getUserName = () => {
  const elUserName = document.createElement("div");
  elUserName.className = "userName";
  elUserName.innerHTML = `Welcome! ${elUserInput.value}`;
  elUserInput.value = "";
  elUser.appendChild(elUserName);
  elInputWrap.style.display = "none";
};

const restartTheGame = () => {
  elRestartBtn.className = "restartBtn";
  elRestartBtn.innerHTML = "Do you wanna play again?";
  elGameField.appendChild(elRestartBtn);
};

const showScore = second => {
  if (second === 0) {
    const elScore = document.createElement("div");
    elScore.className = "score";
    elScore.innerHTML = `Your score is: ${count}`;
    elUser.appendChild(elScore);
    let user = new Users(elUserInput.value, elScore.innerHTML);
    scoreArr.push(user);
    restartTheGame();
  }
};

elUserBtn.addEventListener("click", getUserName);
elUserBtn.addEventListener("click", startTheGame);
elRestartBtn.addEventListener("click", startTheGame);
