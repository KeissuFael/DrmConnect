import Descricao from "./elements/Descricao";
import Titulo from "./elements/Titulo";
import '../../styles/postCard.css'

export default function Problemas({ user, titulo, conteudo, imgs, avatar }){
    return(
        <div className="content-post">
            <div className="cabeca-post">
                {avatar == null ? <span>{user}</span> : <span><img src={avatar} style={{width: "30px", borderRadius:"360px"}}/> {user}</span>} <br />
            </div>
            <div className="corpo-post">
                <Descricao conteudo={conteudo} />
                {imgs == null ? <span></span> : <img src={imgs} style={{width: "100px"}}/>} 
            </div>
        </div>
    )
}