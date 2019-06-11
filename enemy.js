let enemyArray = [];
let count = 0;
let second = 60;
const elGameField = document.querySelector(".gameField");
const elTarget = document.querySelector(".target");
const elEnemies = document.querySelector(".enemies");
const time = document.createElement("span");
const elCount = document.createElement("span");

class Enemy {
  constructor(enemyStartingPosition) {
    this.left = enemyStartingPosition;
    this.className = `enemies`;
    this.isDead = false;
    this.top = 0;
  }

  createElements() {
    let enemies = document.createElement("span");

    enemies.className = this.className;
    enemies.style.left = this.left;
    elTarget.appendChild(enemies);

    this.me = enemies;
  }

  removeEnemy() {
    let heroPosition = parseInt(
      elHero.style.left.substring(0, elHero.style.left.length - 2)
    );
    let leftPosition = parseInt(
      this.me.style.left.substring(0, this.me.style.left.length - 2)
    );

    if (leftPosition < heroPosition - 35 || leftPosition > heroPosition + 35) {
      this.isDead = true;
      this.me.style.display = "none";
    } else if (
      leftPosition >= heroPosition - 35 ||
      leftPosition <= heroPosition + 35
    ) {
      count++;
      showCount();
      this.me.style.backgroundPosition = "46px";
      var audio = new Audio("dying.wav");
      audio.play();
      this.me.style.top = "555px";
      this.isDead = true;
      setInterval(() => {
        this.me.style.display = "none";
      }, 1000);
    }
  }

  moveEnemies(intervalId) {
    let topPosition = parseInt(
      this.me.style.top.substring(0, this.me.style.top.length - 2)
    );

    if (topPosition >= 550) {
      this.removeEnemy();
    }

    if (this.isDead === false) {
      this.top += 1;
      this.me.style.top = this.top + "px";
    } else {
      clearInterval(intervalId);
    }
  }
}
