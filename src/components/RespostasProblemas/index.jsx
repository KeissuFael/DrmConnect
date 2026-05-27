import { useState, useEffect } from "react"
import Resposta from "./elements/Resposta"
import EnviarResposta from "./elements/EnviarResposta"
import { supabase } from "../../supabase/supabase"
import '../../styles/postResp.css'

export default function RespostasProblemas({ id, curtida }){
    const [ respostas, setRespostas ] = useState([])
    async function buscarRespostasProblemas() {
        const res = await supabase
        .from('problemas_respostas')
        .select('*')
        .eq('id_problema', id)

        if(res.error){
            console.log(res.error)
        } else{
            console.log(res.data)
            setRespostas(res.data)
        }
    }

    useEffect(() => {
        buscarRespostasProblemas()
    }, [id])
    return(
        <div className="resps">
            {respostas.map((item, index) => (
                respostas.length <= 0 ? <p>não há soluções</p> : <ul className="lista-respostas"><Resposta key={index} resp={item.description} user={item.user_responde} /></ul>
            ))}
            <EnviarResposta idP={id} quantidadeDeCurtidas={curtida} novaRes={buscarRespostasProblemas}/>
        </div>
    )
}