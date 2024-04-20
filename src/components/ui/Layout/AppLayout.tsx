import { FC, ReactNode } from 'react';
import { APPBAR_HEIGHT } from '../AppBar/constants';

export interface AppLayoutProps {
  appBar: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ appBar, sidebar, children }) => {
  return (
    <div style={{ height: '100%' }}>
      {appBar}
      <div style={{ display: 'flex', height: `calc(100% - ${APPBAR_HEIGHT}px)` }}>
        {sidebar}
        <div style={{ height: '100%', display: 'flex', width: '100%', padding: '0px 0px 16px 0px', boxSizing: 'border-box'}}>
          {children}
        </div>
      </div>
    </div>
  );
};