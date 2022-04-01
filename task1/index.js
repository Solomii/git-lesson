function dotCalculator(equation) {
  let spl = equation.split(" ");
  let firstPartNumberOfDots = spl[0].length;
  let operation = spl[1];
  let secondPartNumberOfDots = spl[2].length;
  let numberOfDotsInResult;
  
    if (operation === '+') {
    numberOfDotsInResult = firstPartNumberOfDots + secondPartNumberOfDots;
  } else if (operation === '-') {
     numberOfDotsInResult = firstPartNumberOfDots - secondPartNumberOfDots;
  } else if (operation ==='*') {
     numberOfDotsInResult = firstPartNumberOfDots * secondPartNumberOfDots;
  } else if (operation ==='//') {
    numberOfDotsInResult = Math.floor(firstPartNumberOfDots / secondPartNumberOfDots);
  } else {
    throw Error("Wrong input!")
  }
  return '.'.repeat(numberOfDotsInResult)
}

console.log(dotCalculator("..... + ..............."));
console.log(dotCalculator("..... - ..."));
console.log(dotCalculator("..... - ."));
console.log(dotCalculator("..... * ..."));
console.log(dotCalculator("..... * .."));
console.log(dotCalculator("..... // .."));
console.log(dotCalculator("..... // ."));
console.log(dotCalculator(". // .."));
console.log(dotCalculator(".. - .."));