const elHero = document.querySelector(".hero");

class Hero {
  constructor(startingPosition) {
    this.hero = elHero;
    this.left = startingPosition;
    this.hero.style.left = window.getComputedStyle(elHero).left;
  }

  moveHero() {
    this.hero = elHero;
    let left = parseInt(
      this.hero.style.left.substring(0, this.hero.style.left.length - 2)
    );
    if (event.keyCode === 37 && left !== 0) {
      this.hero.style.backgroundPosition = "70px";
      this.hero.style.left = `${left - 10}px`;
    } else if (event.keyCode === 39 && left < 760) {
      this.hero.style.backgroundPosition = "36px";
      this.hero.style.left = `${left + 10}px`;
    }
    this.left = this.hero.style.left;
  }

  heroFace() {
    this.hero = elHero;
    this.hero.style.backgroundPosition = "0px";
  }
}

let character = new Hero("400px");
