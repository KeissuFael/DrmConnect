import { useEffect, useState } from "react";
import { supabase } from "./supabase/supabase";
import Problemas from "./components/Problemas";
import RespostasProblemas from "./components/RespostasProblemas";
import { envImagensStorage } from "./services/uploadImages";

export default function App(){
  const [ problemas, setProblemas ] = useState([])
  const [ nome, setNome ] = useState("")
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

  async function criarProblema() {
    if(titulo == "" || descricao == ""){
      alert("escreva algo")
      return
    }

    try{
      let imgUrlLocal = await envImagensStorage(img)
      const res = await supabase
      .from('problemas')
      .insert({
        user: nome,
        titulo,
        description: descricao,
        imagens: imgUrlLocal
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
      <div>
        <input type="text" onChange={e => setNome(e.target.value)} placeholder="Nome De Usuário"/> <br />
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