import { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";
import { envImagensStorage } from "../services/uploadImages";
import { ImageUp } from 'lucide-react';
import Sidebar from "../layout/Sidebar"
import "../styles/perfil.css"
/* ESSA É A PAGINA PARA USUARIO EDITAR SEU PERFIL */
export default function PaginaDeUsuario(){
    const irPara = useNavigate()
    const [ mudarNome, setMudarNome ] = useState(false)
    // acima, quando o usuario quiser mudar seu perfil, ele se torna true, se n, false
    const [ nome, setNome ] = useState("")
    const [ urlImg, setUrlImg ] = useState(null)
    // antes de mudar, o sistema mostra como são sua foto e nome, aq ele guada isso para mudar dps
    const [ img, setImg ] = useState(null)
    // quando enviar um nova imagem, ele vai guarda aqui  

    useEffect(() => {
        // aqui ele vai buscar o usuario que guadar suas infos para exibir
        async function buscarUser(){
            const { data: { user }, error } = await supabase.auth.getUser()
            if(error){
                alert("algo deu errado, tente novamente mais tarde!")
                return
            }
            const nomeDeUsuario = user.user_metadata?.full_name || ""
            setNome(nomeDeUsuario)
            const avatar = user.user_metadata?.avatar_url
            setUrlImg(avatar)
            
        }
        buscarUser()
    }, [])
    // função para mudar o nome de usuario
    async function editar() {
        const res = await supabase.auth.updateUser({
            data: { full_name: nome }
        })
        if(res.error){
            alert("mudaça n funcionou")
        }else{
            // quando mudar, ele retorna o user para a home
            if(img !== null){
                const imgUrl = await envImagensStorage("perfilFotoDefault", img)
                const res = await supabase.auth.updateUser({
                    data:{
                        avatar_url: imgUrl
                    }
                })
                alert("Edição Feito")
                setMudarNome(false)
                irPara("/home")
            } else{
                alert("nome alterado")
                setMudarNome(false)
                irPara("/home")
            }
        } 
    }
    return(
        <div className="container-perfil">
            <Sidebar />
            <div className="vizualizar-perfil">
                <img src={urlImg} id="imagem-do-perfil"/>
                <h3><span>{nome}</span></h3>
                <button onClick={() => setMudarNome(true)}>Editar</button>    
            </div>
            {mudarNome && (
                <div className="edicao-de-perfil">
                    <div className="prin">
                    <label htmlFor="imagem-envio" style={{cursor: "pointer"}}><ImageUp /><br />Escolher Foto De Perfil</label>
                    <input id="imagem-envio" type="file" accept="image/png,image/jpeg" onChange={e => setImg(e.target.files[0])} style={{display: "none"}}/> <br />
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)}/> <br />
                    <button onClick={() => editar()}>Alterar</button>
                    </div>
                </div>
            ) }
       </div>
    )
}