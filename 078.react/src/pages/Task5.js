import { useState } from "react";

function Task5() {
    const [input, setInput] = useState();

    const setInputVal = (event) => {
        setInput(event.target.value);
    }
      
    return (   
        <div>
            <p>{input}</p>
            <input onChange={setInputVal} />
        </div>
    )
}
export default Task5;