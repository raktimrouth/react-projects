export default function UserInput({userInput,handleInputChange}){


    return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(event) => handleInputChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => handleInputChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event) => handleInputChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event) => handleInputChange('duration', event.target.value)}/>
            </p>
        </div>
    </section>
    );
}
