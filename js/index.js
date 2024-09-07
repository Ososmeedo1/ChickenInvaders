

const chicken = document.getElementById("chicken")
const rocket = document.getElementById("rocket")
const containerOfAll = document.querySelector("header")
let rocketContainer = document.querySelector(".rocket")
const containerSize = containerOfAll.getBoundingClientRect();
const sound = new Audio('./silenced-shotgun-gunshot-105776.mp3')




let container = [];
let positionY = 0;
let positionX = 0;


for (let i = 0; i < 39; i++) {
  container += `
      <img src="images/Chicken.png" alt="">
  `

  chicken.innerHTML = container
}

window.addEventListener('keydown', (e) => {
  if (e.code == "ArrowUp") {
    positionY += 20
    rocketContainer.style.bottom = positionY + "px"
    if (positionY >= containerSize.height - 110) {
      positionY = containerSize.height - 110
    }
  }

  else if (e.code == "ArrowDown") {
    positionY -= 20
    rocketContainer.style.bottom = positionY + "px"
    if (positionY <= 30) {
      positionY = 30
    }
  }

  else if (e.code == "ArrowRight") {
    positionX += 20
    rocketContainer.style.left = positionX + "px"

    if (positionX >= containerSize.right - 150) {
      positionX = containerSize.right - 150
    }
  }

  else if (e.code == "ArrowLeft") {
    positionX -= 20
    rocketContainer.style.left = positionX + "px"

    if (positionX <= 0) {
      positionX = 0;
      rocketContainer.style.left = positionX;
    }
  }

  else if(e.code = 'Space') {
    let bullet = document.createElement('img')
    bullet.classList.add('bullet')
    bullet.src = '../images/Bullet.png '
    rocketContainer.append(bullet)
    sound.play();


    let bulletPosition = 0;


    let bulletInterval = setInterval(function () {
      bulletPosition += 10
      bullet.style.bottom = bulletPosition + 'px'

      if (bulletPosition > 1000) {
        clearInterval(bulletInterval)
        rocketContainer.removeChild(bullet)
      }
  }, 10  )
  }

})