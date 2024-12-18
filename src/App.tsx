import { useState } from 'react'
import './App.css'

function App() {
        const [counters, setCounters] = useState([
            { count: 0},
        ]);

        const addCounter = () => {
            setCounters([...counters, { count: 0}]);
        };

        const handleCountChange = (index: number, delta: number) => {
            const updatedCounters = [...counters];
            updatedCounters[index].count += delta;
            setCounters(updatedCounters);
        };

        const removeCounter = (index: number) => {
            const updatedCounters = [...counters];
            updatedCounters.splice(index, 1);
            setCounters(updatedCounters);
        };

        return (
            <div className="counter-challenge-container">
                <button className="add-button" onClick={addCounter}>
                    Add Counter
                </button>
                <h2 className="counter-challenge-title">Counter Challenge</h2>
                <div className="counters">
                    {counters.map((counter, index) => (
                        <div key={index} className="counter-container" style={{margin: '5px'}}>
                            <button style={{background: 'red', margin: "10px"}}
                                onClick={() => handleCountChange(index, -1)}
                            >
                                -
                            </button>
                            <span className="counter-value">{counter.count}</span>
                            <button style={{background: 'green', margin: "10px"}}
                                onClick={() => handleCountChange(index, 1)}
                            >
                                +
                            </button>
                            <button onClick={() => removeCounter(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <div
                    className="total-container">Total: {counters.reduce((total, counter) => total + counter.count, 0)}</div>
            </div>
        );
}

export default App
