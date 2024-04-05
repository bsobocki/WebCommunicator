import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './navigationStyles.module.css';

export interface NavigationButtonProperties {
    icon: IconDefinition,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
};

export const NavigationButton: React.FC<NavigationButtonProperties> = ({ icon, onClick }) => {
    return (
        <button className={styles.naviButton} onClick={onClick}>
            <FontAwesomeIcon icon={icon}/>
        </button>
    );
}