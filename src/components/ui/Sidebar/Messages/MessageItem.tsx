import { useState } from 'react';
import styles from './messageItemStyles.module.css'
import { ChatData } from '../../../../interface/data';

export const MsgItem: React.FC<ChatData> = ({ title, messages }) => {
  const [isHovered, setIsHovered] = useState(false);
  let message = messages[messages.length-1].content;
  message = message === '' ? 'No messages' : message;

  return (
    <div
      className={styles.messageButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.item}>
        <h4 style={isHovered ? { color: 'black' } : { color: 'white' }}>{title}</h4>
        {message}
      </div>
    </div>
  );
};
