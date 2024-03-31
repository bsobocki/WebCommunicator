import React from 'react';

export const ChatTitleStyle: React.CSSProperties = {
  width: '100%',
  height: '60px',
  borderBottom: '1px solid grey',
  borderTop: '1px solid grey',
  color: 'white',
  alignItems: 'center',
  display: 'flex'
};

export interface ChatTitleProps {
  title: string;
}

export const ChatTitle: React.FC<ChatTitleProps> = (props) => {
  return (
    <div style={ChatTitleStyle}>
      <h3 style={{padding: '16px'}}>{props.title}</h3>
    </div>
  );
};