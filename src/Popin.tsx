import React, {useState, useEffect} from "react";

import "./styles.css";
import candle from "./assets/candle.gif";

interface PopinProps {
    name: string;
    setVisibility: () => void;
}

export const Popin: React.FC<PopinProps> = (props) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        timeout = setTimeout(() => {
            setIsButtonDisabled(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="Popin">
            <h2>Vous priez maintenant pour {props.name ? <span>{props.name}</span> : "vos ami(e)s"}</h2>
            <img src={candle} height="60%" alt="Bougie" />
            <br />
            <br />
            <button className="button-black" disabled={isButtonDisabled} onClick={() => {props.setVisibility()}}>Amen !</button>
        </div>
    );
};
