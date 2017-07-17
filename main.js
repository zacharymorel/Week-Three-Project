

let buttons = document.querySelectorAll('.includeInLoop');
let placeHolder = document.querySelector('.placeHolder')

let optOne = '';
let optTwo = '';
let sign = '';
let equalsButton = document.querySelector('.equals');
let answer = '';

let clearButton = document.querySelector('.clear');

buttons.forEach((currentNumber) => {
  // Exclude PlaceHolder, C, =
  currentNumber.addEventListener('click', () => {
    let value = currentNumber.innerText;
    placeHolder.textContent += value;
      if(sign != '') {
        optTwo += value;
        console.log(optTwo);
      }
      else if ((value === '+') || (value === '-') || (value === 'X') || (value === '/')) {
        sign = value;
        console.log(sign);
      }
      else {
        optOne += value;
        console.log(optOne);
      }
  });
});


equalsButton.addEventListener('click', () => {
  console.log(sign);

  if (sign === '+') {
    answer = Number(optOne) + Number(optTwo);
  }
  console.log(answer);
  if (sign === '-') {
    answer = Number(optOne) - Number(optTwo);
  }
  if (sign === 'X') {
    answer = Number(optOne) * Number(optTwo);
  }
  if (sign === '/') {
    answer = Number(optOne) / Number(optTwo);
  }

  answer = `${answer}`;

  placeHolder.textContent = answer;

  console.log(answer);

});

clearButton.addEventListener('click', ()=>{
  optOne = '';
  optTwo = '';
  sign = '';
  //make the JS varabiles Clear completely.
  placeHolder.textContent = '';
});
