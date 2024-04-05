export interface MessageInfoData {
    date: number;
    sender: 'user' | 'interlocutor';
    content: string;
}

export const ChatMessageRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    margin: '0px 16px 0px 16px',
    flexDirection: "row",
}

export const UserChatMessageRowStyle: React.CSSProperties = {
    ...ChatMessageRowStyle,
    justifyContent: 'flex-end'
}

export const InterlocutorChatMessageRowStyle: React.CSSProperties = {
    ...ChatMessageRowStyle,
    justifyContent: 'flex-start'
}

export const ChatMessagesStyle: React.CSSProperties = {
    maxWidth: '70%',
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: "column",
    gap: '4px',
    borderRadius: '15px'
}

export const UserChatMessageStyle: React.CSSProperties = {
    ...ChatMessagesStyle,
    background: 'white',
    color: 'black',
    alignItems: 'end'
}

export const InterlocutorChatMessageProps: React.CSSProperties = {
    ...ChatMessagesStyle,
    background: 'black',
    color: 'white'
}
  
export const ChatMessage: React.FC<MessageInfoData> = (messageData) => {
    return <div style={messageData.sender === 'user' ? UserChatMessageRowStyle : InterlocutorChatMessageRowStyle}>
        <div style={messageData.sender === 'user' ? UserChatMessageStyle : InterlocutorChatMessageProps}>
            <h4 className="budda">{messageData.sender}</h4>
            {messageData.content}
        </div>
    </div>
}