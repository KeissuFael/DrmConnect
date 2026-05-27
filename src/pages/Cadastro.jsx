import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase/supabase"

export default function Cadastro(){
    const [ userName, setUserName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")
    const irPara = useNavigate()

    async function cadastrar() {
        const res = await supabase.auth.signUp({
            email,
            password: senha,
            options:{
                data:{
                    full_name: userName,
                    avatar_url: 'https://scnxpjdfdwphaxgonxvq.supabase.co/storage/v1/object/public/perfilFotoDefault/219eaea67aafa864db091919ce3f5d82.jpg'
                }
            }
        })
        if(res.error){
            alert("algo deu errado, volte mais tarde")
        } else{
            alert("verifique seu email!")
        }
    }

    const handleOAuthLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${window.location.origin}/home`,
            queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            },
        },
        });
        if (error) toast.error(error.message);
    };
    return(
        <div className="cadastro-tudo">
            <h1>Bem-vindo ao Problemas.com</h1>
            <p>encontre sua solução aqui</p>

            <div className="form-cadastro">
                <input type="text" placeholder="Nome de Usuario" onChange={e => setUserName(e.target.value)}/> <br />
                <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} /> <br />
                <input type="text" placeholder="senha" onChange={e => setSenha(e.target.value)}/> <br />
                <button onClick={() => cadastrar()}>Cadastrar</button>
                <button  onClick={() => handleOAuthLogin("google")}>
                    cadastrar com o google
                </button>
                   <p>ja tem conta? entre</p> <br />
            
                <button onClick={() => irPara("/")}>logar</button>
            </div>
        </div>
    )
}