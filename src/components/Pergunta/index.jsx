import { Link } from 'react-router-dom';
import Titulo from './elements/Titulo';
import User from './elements/User';
import "./style.css"

export default function Pergunta({ titulo, user, userAvatar }){
    return(
    <div className='pergunta-normal-tudo'>
        <div className='info-pergunta'>
            <User user_avatar={userAvatar}>{user}</User>
        </div>
            <div className='titulo-pergunta'>
            <Titulo>{titulo}</Titulo>
            </div>
    </div>
    )
}