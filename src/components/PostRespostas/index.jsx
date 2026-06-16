import { useState, useEffect } from "react"
import Resposta from "./elements/Resposta"
import EnviarResposta from "./elements/EnviarResposta"
import { supabase } from "../../supabase/supabase"
import '../../styles/postResp.css'

export default function PostRespostas({ id, curtida }){
    const [ respostas, setRespostas ] = useState([])
    async function buscarRespostas() {
        const res = await supabase
        .from("post_respostas")
        .select('*')
        .eq('id_post', id)

        if(res.error){
            console.log(res.error)
        } else{
            setRespostas(res.data)
        }
    }

    useEffect(() => {
        buscarRespostas()
    }, [id, curtida])
    return(
        <div className="resps">
            <EnviarResposta idP={id} quantidadeDeCurtidas={curtida} novaRes={buscarRespostas}/>
            {respostas.map((item, index) => (
                respostas.length <= 0 ? <p>não há soluções</p> : <ul className="lista-respostas"><Resposta key={item.id} resp={item.description} user={item.user_responde} /></ul>
            ))}
        </div>
    )
}