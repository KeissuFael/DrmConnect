import { useState } from "react";
import { supabase } from "../../../supabase/supabase";

export default function EnviarResposta({ id, novaRes }){
    const [description, setDescription] = useState('')
    
    async function responderProblemas() {
        if(description == ''){
            alert('coloque algo')
            return
        }
        const res = await supabase
        .from('problemas_respostas')
        .insert({
            id_problema: id,
            description
        })

        if(res.error){
            console.log(res.error)
        } else{
            alert("deu bom")
            novaRes()
        }
    }
    return(
        <>
        <input type="text" onChange={e => setDescription(e.target.value)}/>
        <button onClick={() => responderProblemas()}>Enviar</button>
        </>
    )
}