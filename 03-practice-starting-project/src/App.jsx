import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
      const [userInput, setUserInput] = useState({
        initialInvestment:10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

  const inputIsValid = userInput.duration > 0 
  
  function handleInputChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        });
    }


  return (
    <>
    <Header />
    <UserInput userInput={userInput} handleInputChange={handleInputChange}/>
    {inputIsValid && 
    <Results input={userInput}/>
    }
    {!inputIsValid && 
    <p className="center">Please enter a valid duration (greater than 0)</p>
    }
    </>
  )
}

export default App
