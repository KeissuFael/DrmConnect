import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase/supabase"
/* auto explicativo tbm */
export default function Cadastro(){
    const [ userName, setUserName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")
    // estado para gurda suas devidas infos
    const irPara = useNavigate()

    async function cadastrar() {
        // aqui eu cadastro o usuario como uma foto padrão
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
            // se der certo, o usuario tem que ir no email verificar sua conta
            alert("verifique seu email!")
        }
    }
    //função de cadastrar com o google (codigo do samuel/sudosam, grato)
    const handleOAuthLogin = async () => {
         // basicamente ele pega as chaves ja configurada no supabase, e usar dados vindo do google
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
            <h1>Cadastro</h1>

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