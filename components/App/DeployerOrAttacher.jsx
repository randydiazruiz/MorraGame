import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const DeployerOrAttacher = () => {
    const { selectDeployer, selectAttacher } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>
            <h2 className={ useClasses(styles.littleText) }>Please select a role</h2>
            <div className={ useClasses(styles.orderContainer) }>
                <span className={ useClasses(styles.littleText) }>Set the wager, deploy the contract</span>
                <button onClick={ () => selectDeployer() } className={ useClasses(styles.actionButton) } title="Set the wager, deploy the contract">Deployer</button>       
            </div>
            <div className={ useClasses(styles.orderContainer) }>
                <span className={ useClasses(styles.littleText) }>Attach to the Deployer's contract</span>
                <button onClick={ () => selectAttacher() } className={ useClasses(styles.actionButton) } title="Attach to the Deployer's contract">Attacher</button>
            </div>
        </div>
    );
};

export default DeployerOrAttacher;