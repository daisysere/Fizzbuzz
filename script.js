function fizzbuzz() {
  let text;
  text = document.getElementById('getnumber').value;
  if (text == 0) {
    text = 'Invalid Output';
  }else if ((text % 3 === 0) && (text % 5 === 0)) {
      text='FizzBuzz';
  } else if (text % 3 === 0) {
      text='Fizz';
  } else if (text % 5 === 0) {
      text='Buzz';
  }
  document.getElementById('result').innerHTML=text;
  console.log(document.getElementById('getnumber').value)
}
  
  enterNumber();