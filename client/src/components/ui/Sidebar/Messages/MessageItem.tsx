import { useState } from 'react';
import { ChatData } from '../../../../data/itemListData';
import styles from './messageItemStyles.module.css'

export const MsgItem: React.FC<ChatData> = ({ title, lastMessage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.messageButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.item}>
        <h4 style={isHovered ? { color: 'black' } : { color: 'white' }}>{title}</h4>
        {lastMessage}
      </div>
    </div>
  );
};
