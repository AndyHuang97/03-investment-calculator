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

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onChange={handleChange} />
        <Results input={userInput} />
      </main>
    </>
  );
}

export default App;
