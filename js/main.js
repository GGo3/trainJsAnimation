const moveForwardButton = document.querySelector('.move__forward-btn');
const moveBackwardButton = document.querySelector('.move__backward-btn');
const elForestBg = document.querySelector('.forest');
const elTrain = document.querySelector('.train_img');
const elTrainWheels = document.querySelectorAll('.wheels-dormancy');

const moveForwardBtn = (event) => {
  elForestBg.classList.toggle('forest__move-forward');
  elTrain.classList.toggle('train__move-animation');
  for ( let i = 0; i < elTrainWheels.length; i++) {
    elTrainWheels[i].classList.toggle('wheels_rotate-forward');
  }
}
const moveBackwardBtn = (event) => {
  elForestBg.classList.toggle('forest__move-backward');
  elTrain.classList.toggle('train__move-animation');
  for ( let i = 0; i < elTrainWheels.length; i++) {
    elTrainWheels[i].classList.toggle('wheels_rotate-backward');
  }
}
const moveKeysForTrain = (event) => {
  if (event.code == 'ArrowLeft') {
    elForestBg.classList.toggle('forest__move-forward');
    elTrain.classList.toggle('train__move-animation');
    for ( let i = 0; i < elTrainWheels.length; i++) {
      elTrainWheels[i].classList.toggle('wheels_rotate-forward');
    }
  } else if (event.code == 'ArrowRight') {
    elForestBg.classList.toggle('forest__move-backward');
    elTrain.classList.toggle('train__move-animation');
    for ( let i = 0; i < elTrainWheels.length; i++) {
      elTrainWheels[i].classList.toggle('wheels_rotate-backward');
    }
  }
}

moveForwardButton.addEventListener('click', moveForwardBtn);
moveBackwardButton.addEventListener('click', moveBackwardBtn);
document.addEventListener('keydown', moveKeysForTrain);




// let el = document.addEventListener('keydown', (event) => {
//   if (event.code == 'ArrowLeft') {
//     testColor.classList.toggle('testcolor2');
//   }
//   console.log(event.code, event.key);
// });

// const cangeKeyColor = (event) => {
//   if (event.key == 'ArrowLeft') {
//     testColor.classList.toggle('testcolor2');
//   }
//   console.log(event.code, event.key);
// }

// document.addEventListener('keydown', cangeKeyColor);
// document.addEventListener('keyup', cangeKeyColor);


// const elBody = document.querySelector('body');
// let rectangle = '';
// for ( let i = 0; i <4; i++) {
//   rectangle = rectangle + `<div class="block blue"></div>`;
// }
// console.log(elBody);
// elBody.innerHTML = rectangle;

// const elRectangle = document.querySelectorAll('.block');

// const changeRectangleColor = (event) => { 
//   event.target.classList.toggle('red');
// }

// for (k = 0; k < elRectangle.length; k++) {
//   elRectangle[k].addEventListener('mousedown',changeRectangleColor);
//   elRectangle[k].addEventListener('mouseup',changeRectangleColor);
// }

