import { APPBAR_HEIGHT } from './constants';
import logo from '../../../assets/logo.png'

const AppBarStyle: React.CSSProperties = {
  height: `${APPBAR_HEIGHT}px`,
  width: '100%',
  background: 'black',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

export const AppBar: React.FC = () => {
  return <nav style={AppBarStyle}>
    <img src={logo} style={{width: '45px', marginLeft: '8px'}}/>
  </nav>;
};
