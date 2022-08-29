import React from "react";
import { useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const WaitingForTurn = () => {
    return (
        <div className={ useClasses(styles.subContainer) }>
            <h2 className={ useClasses(styles.littleText) }>Waiting for the other player...</h2>
            <h2 className={ useClasses(styles.littleText) }>Do you have your hand ready?</h2>
        </div>
    );
};

export default WaitingForTurn;