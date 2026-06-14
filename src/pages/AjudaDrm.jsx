import { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase";
import { Link, useNavigate } from "react-router-dom";
import Pergunta from "../components/Pergunta";
import { buscarImagem } from "../services/sercheAvatar";
import Sidebar from "../layout/Sidebar"
import "../styles/ajudaDRM.css"
/* PAGINA DE PERGUNTAS / AJUDADRM */
export default function AjudaDrm(){
    const [perguntas, setPerguntas] = useState([])
    // aqui ele amazenar os objetos da perguntas
    const [pagina, setPagina] = useState(0)
    const [carregamento, setCarregamento] = useState(false)
    const [temMais, setTemMais] = useState(true)
    // usa o mesmo sistema de puxar 10 pergunta (mais explicaçao no Home.jsx)
    const irPara = useNavigate()

    async function buscarPerguntas(estaPagina) {
        setCarregamento(true)
        //mais explicaçao no Home.jsx
        const comeca = estaPagina * 10
        const ate = comeca + 10 - 1        
        const res = await supabase
        .from("perguntas")
        .select("*")
        .order("create_at", {ascending: false})
        .range(comeca, ate)

        if(res.error){
            alert("algo deu errado " + res.error.message)
        } else{
            if(res.data.length < 10){
                setTemMais(false)
            }
            setPerguntas((perguntasAnteriores) => {
                const perguntasFiltro = res.data.filter(
                (novaPergunta) => !perguntasAnteriores.some((perguntatAntigo) => perguntatAntigo.id === novaPergunta.id)
                )
                return [...perguntasAnteriores, ...perguntasFiltro]
            })
        }
        setCarregamento(false)
    }
    // mais explicaçao no Home.jsx
    const verMais = () => {
        if(!carregamento && temMais){
        setPagina((paginaAnterio) => paginaAnterio + 1)
        }
    }

    useEffect(() => {
        buscarPerguntas(pagina)
    }, [pagina]) // mais explicaçao no Home.jsx


    // na linha 64, quando ele clicar na pergunta ele vai ser jogar para o componente da pergunta, e la, ele vai puxa a pegunta com o id da url
    return(
        <div className="ajudadrm-tudo">
            <Sidebar />
            <div className="form-ajuda">
            <div className="enviar-pergunta">
                <h3>Crie um pergunta</h3>
                <button onClick={() => irPara("/criarpergunta")}>Criar</button>
            </div>
            <div className="perguntas">
                {perguntas.map((item) => (
                    <Link 
                    to={`/perguntas/${item.id}`}
                    key={item.id}>
                        <Pergunta titulo={item.titulo} user={item.user_nome} userAvatar={item.user_avatar}/>
                        <hr />
                    </Link>
                ))}
            </div>

            {carregamento ? (<p>Carregando posts...</p>) : temMais ? (
                    <button onClick={verMais} style={{ cursor: 'pointer' }}>
                    Carregar mais
                    </button>
                ) : (
                    <p style={{ color: 'gray' }}>Você zerou essa aba!!</p>
                )}
            </div>
        </div>
    )
}