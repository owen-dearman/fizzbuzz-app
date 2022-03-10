import { useState } from "react";
import fizzBuzzLogic from "./fizzbuzzLogic";

function FizzBuzz(): JSX.Element {
  const [currentNumber, queueRenderForNextNumber] = useState(1);
  const [fizzBuzzState, logNextFizzBuzzNumber] = useState<(number | string)[]>(
    []
  );

  //adds one to current number and adds corresponding FizzBuzz state to storage
  const addNext = () => {
    queueRenderForNextNumber(currentNumber + 1);
    const state = fizzBuzzLogic(currentNumber);
    logNextFizzBuzzNumber((prev) => [...prev, state]);
  };

  //maps storage to
  const fizzBuzzLayout: JSX.Element[] = fizzBuzzState.map(fbStorage);

  return (
    <>
      <h1>Let's Play FizzBuzz</h1>
      <p>Just click next to reveal the number</p>
      <ul style={{ listStyleType: "none" }}>{fizzBuzzLayout}</ul>
      <button onClick={addNext}>NEXT</button>
    </>
  );
}

function fbStorage(number: string | number): JSX.Element {
  return (
    <>
      <li style={{ fontSize: 20 }}>{number}</li>
    </>
  );
}

export default FizzBuzz;
