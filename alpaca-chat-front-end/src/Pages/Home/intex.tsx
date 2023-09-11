import style from './home.module.css';

import Chat from '../../Components/Chat'
const Home = () => {
    return (
        <div className={style.container}>
            <Chat/>
        </div>
    )
};

export default Home;