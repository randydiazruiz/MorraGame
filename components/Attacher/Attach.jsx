import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const Attach = () => {
    const [ctcInfoStr, setCtcInfoStr] = useState("");
    const { attach } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>
            <h3 className={ useClasses() }>Please paste the contract info to attach to:</h3>
            <input
                className={ useClasses(styles.fieldsAttacher) }
                placeholder="Enter contract info"
                onChange={ (e) => setCtcInfoStr(e.currentTarget.value) }
            />
            <button className={ useClasses(styles.actionButton) } disabled={ !ctcInfoStr } onClick={ () => attach(ctcInfoStr) }>
                Attach
            </button>
        </div>

    );
};

export default Attach;