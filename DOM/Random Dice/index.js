var rand1 = Math.floor(Math.random() * 6 + 1)
var randPic1 = 'images/' + 'dice' + rand1 + ".png"

document.querySelector('.img1').setAttribute('src', randPic1)


var rand2 = Math.floor(Math.random() * 6 + 1)
var randPic2 = 'images/' + 'dice' + rand2 + ".png"

document.querySelector('.img2').setAttribute('src', randPic2)


if (rand1 > rand2) {
  document.querySelector('h1').textContent = 'Player One Wins'
} else if (rand1 < rand2) {
  document.querySelector('h1').textContent = 'Player Two Wins'
} else {
  document.querySelector('h1').textContent = 'No Winner'
}
