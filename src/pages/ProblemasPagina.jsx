import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import Problemas from "../components/Problemas";
import RespostasProblemas from "../components/RespostasProblemas";
import { envImagensStorage } from "../services/uploadImages";

export default function ProblemasPagina(){
  const [ problemas, setProblemas ] = useState([])
  const [ titulo, setTitulo ] = useState("")
  const [ descricao, setDescricao ] = useState("")
  const [ img, setImg ] = useState(null)

   async function buscarProblemas(){
    const res = await supabase
    .from('problemas')
    .select('*')

    if(res.error){
      alert("olha o console")
      console.error(res.error)
    } else{
      setProblemas(res.data)
    }
  }

  async function desFazerLogin() {
    const res = supabase.auth.signOut()
  }

  async function criarProblema() {
    if(titulo == "" || descricao == ""){
      alert("escreva algo")
      return
    }

    try{
      let imgUrlLocal = await envImagensStorage(img)
      const { data: { user }, error } = await supabase.auth.getUser()
      if(!user || error){
        alert("usuário não logado!!")
        return
      }
      const usuarioNome = user.user_metadata?.full_name || user.user_metadata?.name ||  user.user_metadata?.display_name || "???" 
      const res = await supabase
      .from('problemas')
      .insert({
        user: usuarioNome,
        titulo,
        description: descricao,
        imagens: imgUrlLocal,
        id_user: user.id
      })
      buscarProblemas()
      alert("problema enviado!")
      setImg(null)
  }catch(error){
    console.error(error)
  }}

  useEffect(() => {
    buscarProblemas()
  }, [])  

  return(
    <div>
      <h1>Bem-vindo aos problemas.com</h1>
      <p>encontre a solução aq!!!!</p>
      <button onClick={() => desFazerLogin()}>Logout</button>
      <div>
        <input type="text" onChange={e => setTitulo(e.target.value)} placeholder="Titulo"/> <br />
        <textarea onChange={e => setDescricao(e.target.value)} placeholder="Descrição do Problema"></textarea> <br />
        <span>para colocar imagens, baixe e clique no botão abaixo</span> <br />
        <input type="file" accept="image/png,image/jpeg" onChange={e => setImg(e.target.files[0])} /><br />  
        <button onClick={criarProblema}>postar</button>
      </div>

      {problemas.map((item, index) =>(
        <div key={index} className="perguntas">
        <Problemas user={item.user} titulo={item.titulo} conteudo={item.description} imgs={item.imagens}/> <br />
        <RespostasProblemas id={item.id} /> 
        </div>
      ))}

    </div>
  )
}