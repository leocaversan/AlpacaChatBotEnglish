import style from './Messages.module.css';
import { MessagesProps } from '../../Props/Props';

const Messages = ({ isUser, text, img }: MessagesProps) => {
    return (
        <div className={isUser ? style.userMessages : style.botMessages}>            
            <div className={isUser ? style.userImgContainer : style.botImgContainer}>
                <img
                    className={isUser ? style.userMessagesImg : style.botMessagesImg}
                    src={isUser ? img : 'https://img2.gratispng.com/20180429/jow/kisspng-llama-alpaca-camelids-wool-5ae69107ed2163.4238124815250598479713.jpg'} 
                    alt="" />
            </div>
            <div className={style.userMessage}>
                {text}
            </div>
        </div>
    )
}

export default Messages;