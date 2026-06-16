import EnviarResposta from "./elements/EnviarResposta";
import RespostasVisor from "./elements/RespostasVisor";
import "./style.css"

export default function RespostasPergunta({ respostas, funcaoDeAtualizar, id }){
    return(
        <div className="respostas-tudo">
            <div className="respostas-enviar">
            <EnviarResposta id={id} funcao={funcaoDeAtualizar}/>
            </div>
            <div className="ver-respostas">
            <RespostasVisor respostas={respostas} />
            </div>
        </div>
    )
}