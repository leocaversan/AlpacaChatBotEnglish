import { useState } from 'react';
import style from './Chat.module.css';
import Messages from '../Messages';

import { MessageProps } from '../../Props/Props';

const Chat = () => {

    const [messages, setMessages] = useState<MessageProps[]>([])
    const [newMessage, setNewMessage] = useState('')

    const handleSendMessage = (isUser: boolean) => {
        if (newMessage) {
            const newMessageObj: MessageProps = {
                text: newMessage,
                isUser: isUser
            }
            setMessages([...messages, newMessageObj])
            setNewMessage('')
        }}
        
    return (
        <div className={style.container}>
            <div className={style.chat}>
                {messages.map((message, index) => (
                    <div className={message.isUser ? style.userMessages : style.botMessages} key={index.toString()}>
                        <Messages
                            isUser={message.isUser}
                            text={message.text}
                            key={index} img={'https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg'} />
                    </div>
                ))}
            </div>
            <div className={style.inputContainer}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className={style.input}
                    placeholder="Digite sua mensagem aqui"
                    onKeyDown={(event) => {
                        if (event.key === 'Enter')
                            handleSendMessage(true)
                    }}
                />
                <button
                    onClick={() => {
                        handleSendMessage(false)
                    }}>
                    Submit
                </button>

            </div>
        </div>
    )
}

export default Chat;