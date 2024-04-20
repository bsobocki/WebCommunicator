import { APPBAR_HEIGHT } from './constants';
import logo from '../../../assets/logo.png'
import { FormEvent, useState } from 'react';
import { WebSocketConnection } from '../../api/WebSocket/WebSocketConnection';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { SERVER_ADDR } from '../../api/addresses';

const AppBarStyle: React.CSSProperties = {
  height: `${APPBAR_HEIGHT}px`,
  width: '100%',
  background: 'black',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const AppBar: React.FC = () => {
  const sender: WebSocketConnection = new WebSocketConnection(SERVER_ADDR);
  const [userName, setUserName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!userName.trim()) return;
    console.log("trying to set user: ", userName);
    sender.resetConnection(userName);
  };

  return <nav style={AppBarStyle}>
    <img src={logo} style={{width: '45px', marginLeft: '8px'}}/>
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="text"
        value={userName}
        onChange={handleInputChange}
        placeholder="Type your user name here..."
        className={styles.inputBar}
      />
      <button type="submit" className={styles.sendButton}>
        <FontAwesomeIcon icon={faUser} />
      </button>
    </form>
  </nav>;
};
