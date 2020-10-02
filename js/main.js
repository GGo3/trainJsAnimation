const moveForwardButton = document.querySelector('.move__forward-btn');
const moveBackwardButton = document.querySelector('.move__backward-btn');
const elTrainBlock = document.querySelector('.train_block');
const elTrain = document.querySelector('.train_img');
const elTrainWheels = document.querySelectorAll('.wheels-dormancy');
const elTrainLight = document.querySelector('.train-light');
const elTrainLightStatus = document.querySelector('.light__swith-status');
const twoWays = 2;

const moveForwardBtn = (event) => {
  elTrainBlock.classList.toggle('train__move-forward');
  elTrain.classList.toggle('train__move-animation');
  for ( let i = 0; i < elTrainWheels.length; i++) {
    elTrainWheels[i].classList.toggle('wheels_rotate-forward');
  }
}
const moveBackwardBtn = (event) => {
  elTrainBlock.classList.toggle('train__move-backward');
  elTrain.classList.toggle('train__move-animation');
  for ( let i = 0; i < elTrainWheels.length; i++) {
    elTrainWheels[i].classList.toggle('wheels_rotate-backward');
  }
}

const moveKeydownForTrain = (event) => {
  if (event.code == 'ArrowLeft') {
    elTrainBlock.classList.add('train__move-forward');
    elTrain.classList.add('train__move-animation');
    for ( let i = 0; i < elTrainWheels.length; i++) {
      elTrainWheels[i].classList.add('wheels_rotate-forward');
    }
  } else if (event.code == 'ArrowRight') {
    elTrainBlock.classList.add('train__move-backward');
    elTrain.classList.add('train__move-animation');
    for ( let i = 0; i < elTrainWheels.length; i++) {
      elTrainWheels[i].classList.add('wheels_rotate-backward');
    }
  }
}
const moveKeyupForTrain = (event) => {
  if (event.code == 'ArrowLeft') {
    elTrainBlock.classList.remove('train__move-forward');
    elTrain.classList.remove('train__move-animation');
    for ( let i = 0; i < elTrainWheels.length; i++) {
      elTrainWheels[i].classList.remove('wheels_rotate-forward');
    }
  } else if (event.code == 'ArrowRight') {
    elTrainBlock.classList.remove('train__move-backward');
    elTrain.classList.remove('train__move-animation');
    for ( let i = 0; i < elTrainWheels.length; i++) {
      elTrainWheels[i].classList.remove('wheels_rotate-backward');
    }
  }
}
const lightSwitchOftrain = (event) => {
  if (event.code == 'KeyF') {
    elTrainLight.classList.toggle('light-on');
    if (elTrainLightStatus.textContent == 'Light off') {
      elTrainLightStatus.textContent = 'Light on';
    } else elTrainLightStatus.textContent = 'Light off';
    
  }
}

moveForwardButton.addEventListener('mousedown', moveForwardBtn);
moveForwardButton.addEventListener('mouseup', moveForwardBtn);
moveBackwardButton.addEventListener('mousedown', moveBackwardBtn);
moveBackwardButton.addEventListener('mouseup', moveBackwardBtn);
document.addEventListener('keydown', moveKeydownForTrain);
document.addEventListener('keyup', moveKeyupForTrain);
document.addEventListener('keydown', lightSwitchOftrain);


