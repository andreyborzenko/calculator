import './App.css';
import Buttons from "./Buttons";
import ResultComponent from "./ResultComponent";
import React, { useState } from 'react';

function App() {

        const [state, setState] = useState("");

        let calculate = () => {
            setState((eval(state) || "" ) + "")
        };


        let onClick = button => {

        if(button === "="){
            calculate()
        }


        else {
            setState(state + button)
        }
        };



        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result={state}/>
                    <Buttons onClick={onClick}/>
                </div>
            </div>
        );
}

export default App;
