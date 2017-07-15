

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
    answer = parseInt(optOne) + parseInt(optTwo);
  }
  if (sign === '-') {
    answer = parseInt(optOne) - parseInt(optTwo);
  }
  if (sign === 'X') {
    answer = parseInt(optOne) * parseInt(optTwo);
  }
  if (sign === '/') {
    answer = parseInt(optOne) / parseInt(optTwo);
  }

  console.log(answer);

  answer = `${answer}`;

  placeHolder.textContent = answer;


  optOne = '';
  optTwo = '';
  sign = '';
});
