let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'circle-cropped.png') {
      myImage.setAttribute('src','Ireland_1_68.png');
    } else {
      myImage.setAttribute('src','circle-cropped.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi ' + myName + '! I\'m Laura!';
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi ' + storedName + '! I\'m Laura!';
}
myButton.onclick = function() {
  setUserName();
}
