import "./style.css"

export default function PerguntaDetalhada({ user, user_avatar, titulo, descricao}){
    return(
        <div className="post-card-detalhado">
            <div className="usuario-info">
                <img src={user_avatar} />
                <p><span>{user}</span></p>
                </div>
            <div className="post-info">
                <h1>{titulo}</h1>
                <p><span>{descricao}</span></p>
            </div>
        </div>
    )
}