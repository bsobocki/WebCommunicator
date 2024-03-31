import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './navigationStyles.module.css';

export interface NavigationButtonProperties {
    icon: IconDefinition
};

export const NavigationButton: React.FC<NavigationButtonProperties> = ({ icon }) => {
    return (
        <button className={styles.naviButton}>
            <FontAwesomeIcon icon={icon}/>
        </button>
    );
}