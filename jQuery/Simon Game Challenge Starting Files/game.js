const buttonColors = ['red', 'blue', 'green', 'yellow']
var gamePattern = []
var userClickedPattern = []
var level = 0;
var gameState = false;


$(document).keypress(function() {
  if (gameState == false) {
    $('#level-title').text('Level' + level)
    nextSequence()
    gameState = true;
  }
})
// after click corresponding button, store the info in userClickedPattern
$('.btn').click(function() {
  var userChosenColor = $(this).attr('id')
  userClickedPattern.push(userChosenColor)
  // console.log(userClickedPattern)

  animatePress(userChosenColor)
  playSound(userChosenColor)

  checkAnswer(userClickedPattern.length - 1)

})

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    // console.log(userClickedPattern)
    // console.log(gamePattern)
    console.log('success')

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence()
      }, 1000)
    }

  } else {
    playSound('wrong')
    $('body').addClass('game-over')

    setTimeout(function() {
      $('body').removeClass('game-over')
    }, 200)

    $('#level-title').text('Game Over, Press Any Key to Restart')
    console.log('wrong')
    startOver()
  }
}

function startOver() {
  if ($('#level-title').text() == 'Game Over, Press Any Key to Restart') {
    level = 0
    gamePattern = []
    gameState = false;
  }
}

function nextSequence() {

  userClickedPattern = [];
  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4)
  var randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor);



  $('#' + randomChosenColor).fadeOut(250).fadeIn(250)
  playSound(randomChosenColor)

  // if (gameState === false) {
  //   $(document).keypress(function(e) {
  //     $('#level-title').text('Level ' + level)
  //     gameState = true;
  //   })
  // }
  //
  // level++
  //
  // $('.btn').click(function() {
  //   $('#level-title').text('Level' + level)
  // })
}

function playSound(name) {
  var aduio = new Audio('sounds/' + name + '.mp3')
  aduio.play()
}

// // add EventListener : make sound when click the right button
// for (var i = 0; i < 4; i++) {
//   document.querySelectorAll('.btn')[i].addEventListener('click', function() {
//     makeSound(this.id)
//   })
// }
//
// // callback function, make sound
// function makeSound(id) {
//
//   switch (id) {
//     case 'green':
//       var greenSound = new Audio('sounds/green.mp3')
//       greenSound.play();
//       break;
//
//     case 'blue':
//       var blueSound = new Audio('sounds/blue.mp3')
//       blueSound.play();
//       break;
//
//     case 'yellow':
//       var yellowSound = new Audio('sounds/yellow.mp3')
//       yellowSound.play();
//       break;
//
//     case 'red':
//       var redSound = new Audio('sounds/red.mp3')
//       redSound.play();
//       break;
//
//     default:
//       var wrongSound = new Audio('sounds/wrong.mp3')
//       wrongSound.play()
//   }
// }

// animate press when click the button
function animatePress(currentColor) {
  $("#" + currentColor).addClass('pressed')

  setTimeout(function() {
    $("#" + currentColor).removeClass('pressed')
  }, 100)
}



// after click the button, the button will flash
// animate function
// $(document)
//   .on('click', '#blue', function() {
//     $('#blue').fadeOut(250).fadeIn(250)
//   })
//   .on('click', '#yellow', function() {
//     $('#yellow').fadeOut(250).fadeIn(250)
//   })
//   .on('click', '#red', function() {
//     $('#red').fadeOut(250).fadeIn(250)
//   })
//   .on('click', '#green', function() {
//     $('#green').fadeOut(250).fadeIn(250)
//   })

//Same effect but less nested
// $('#yellow').click(function() {
//   $('#yellow').fadeOut(250).fadeIn(250);
// });
//
// $('#red').click(function() {
//   $('#red').fadeOut(250).fadeIn(250);
// });
//
// $('#blue').click(function() {
//   $('#blue').fadeOut(250).fadeIn(250);
// });
//
// $('#green').click(function() {
//   $('#green').fadeOut(250).fadeIn(250);
// });



// try to store the click button info into userClickedPattern
// but this function can only store on at the same time
// $('.btn').on('click', function() {
//
//   var userChosenColor = [];
//   switch (this.id) {
//     case 'green':
//       userChosenColor.push(this.id)
//       console.log(userChosenColor)
//       break;
//
//     case 'blue':
//       userChosenColor.push(this.id)
//       console.log(userChosenColor)
//       break;
//
//     case 'yellow':
//       userChosenColor.push(this.id)
//       console.log(userChosenColor)
//       break;
//
//     case 'red':
//       userChosenColor.push(this.id)
//       console.log(userChosenColor)
//       break;
//
//     default:
//       console.log(id)
//   }
// })
