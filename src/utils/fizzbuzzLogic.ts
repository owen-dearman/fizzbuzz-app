function fizzbuzzLogic(currentState: number): number | string {
  if (currentState % 5 === 0 && currentState % 3 === 0) {
    return "FizzBuzz";
  } else if (currentState % 3 === 0) {
    return "Fizz";
  } else if (currentState % 5 === 0) {
    return "Buzz";
  } else {
    return currentState;
  }
}

export default fizzbuzzLogic;
