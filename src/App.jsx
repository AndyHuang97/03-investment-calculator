import { useState } from "react";

import Header from "./components/header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((pervUserInput) => ({
      ...pervUserInput,
      [inputIdentifier]: +newValue, // "+" Convert string to number
    }));
  }

  const inputIsValid =
    userInput.initialInvestment > 0 &&
    userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">
          Please enter valid values (positive numbers).
        </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
