const createObj = () => {
  let en = new Enemy(`${Math.random() * (800 - 45)}px`);
  en.createElements();

  enemyArray.push(en);

  const intervalId = setInterval(function() {
    if (second > 0) {
      en.moveEnemies(intervalId);
    }
  }, 10);
};

const showCount = () => {
  elCount.className = "enemyCount";
  elCount.innerHTML = `killed: ${count}`;
  elGameField.appendChild(elCount);
  if (second === 0) {
    elCount.style.top = "43%";
    elCount.style.left = "38%";
    elCount.style.color = "black";
    elCount.style.fontSize = "40px";
    elCount.innerHTML += "<br>Game OVER";
  }
};

const showTime = () => {
  time.className = "timeSpan";
  time.innerHTML = `${second}`;
  elGameField.appendChild(time);
  second--;

  if (second === 0) {
    elGameField.style.opacity = 0.7;
    time.innerHTML = "";
    showCount();
    showScore(second);
  }
};

const startTheGame = () => {
  setInterval(() => {
    if (second > 0) {
      createObj();
      showTime();
    }
  }, 1000);
};

document.addEventListener("keydown", character.moveHero);
document.addEventListener("keyup", character.heroFace);
