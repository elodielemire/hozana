import React, {useState, useRef} from "react";

import "./styles.css";
import {Comments} from "./Comments";
import {Popin} from "./Popin.tsx";

export function App() {
    const [isPopinVisible, setIsPopinVisible] = useState(false)
    const [name, setName] = useState("")

    return (
        <div className="App">
            <div className="blur">
                <h1>Priez pour vos ami(e)s !</h1>
                <div className="name-container">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nom de votre ami(e)"
                    />
                    <button onClick={() => setIsPopinVisible(true)}>Prier</button>
                </div>

                {isPopinVisible &&
                    <Popin name={name} setVisibility={() => setIsPopinVisible(false)}/>
                }

                <Comments/>
            </div>
        </div>
    );
}
