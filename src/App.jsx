import { useState } from "react";

import Header from "./components/header";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <>
      <Header />
      <main>
        <UserInput
          userInput={userInput}
          setUserInput={setUserInput}
        />
      </main>
    </>
  );
}

export default App;
