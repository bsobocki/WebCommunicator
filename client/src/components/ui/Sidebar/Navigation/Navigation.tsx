import React from "react";
import styles from './navigationStyles.module.css';
import { NavigationButton } from "./Button";
import { faCableCar, faHelicopter, faHome, faSearch, faShip } from "@fortawesome/free-solid-svg-icons";

export const Navigation: React.FC = () => {
    return (
        <div className={styles.navigation}>
        <NavigationButton icon={faHome}/>
        <NavigationButton icon={faSearch}/>
        <NavigationButton icon={faHelicopter}/>
        <NavigationButton icon={faShip}/>
        <NavigationButton icon={faCableCar}/>
        </div>
    );
}