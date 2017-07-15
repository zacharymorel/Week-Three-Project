

let buttons = document.querySelectorAll('.includeInLoop');
let placeHolder = document.querySelector('.placeHolder')

let optOne = '';
let optTwo = '';
let sign = '';
let equalsButton = document.querySelector('.equals');
let answer = '';

buttons.forEach((currentNumber) => {
  // Exclude PlaceHolder, C, =
  currentNumber.addEventListener('click', () => {

    let text = currentNumber.innerText;
    placeHolder.textContent += text;
      if(sign === true) {
        optTwo += text;
      }
      else if ((text === '+') || (text === '-') || (text === 'X') || (text === '/')) {
        sign += text;
      }
      else {
        optOne += text;
      }
  });
});


equalsButton.addEventListener('click', () => {
  console.log(sign);

  if (sign === '+') {
    answer = parseInt(optOne, 10) + parseInt(optTwo, 10);
  }
  console.log(answer);
  if (sign === '-') {
    answer = parseInt(optOne, 10) - parseInt(optTwo, 10);
  }
  if (sign === 'X') {
    answer = parseInt(optOne, 10) * parseInt(optTwo, 10);
  }
  if (sign === '/') {
    answer = parseInt(optOne, 10) / parseInt(optTwo, 10);
  }

  answer += '';

  placeHolder.textContent = answer;

  optOne = '';
  optTwo = '';
  sign = '';
});
