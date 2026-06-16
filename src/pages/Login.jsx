import { supabase } from "../supabase/supabase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/LoginCadastro.css"
/* auto explicativo */
export default function Login(){
    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")
    //aqui ele vai guarda os estados, para enviar para auth dps
    const irPara = useNavigate()
    // função para logar
     async function logar() {
        const res = await supabase.auth.signInWithPassword({
            email,
            password: senha
        })
        if(res.error){
           alert("Você inseriu algo errado!") 
        } else{
            alert("login feito!")
            irPara("/Home")
        }
    }
    // função para entrar com o google (codigo dado pelo samuel/sudosam)
    const handleOAuthLogin = async () => {
        // basicamente ele pega as chaves ja configurada no supabase, e usar dados vindo do google para entrar no site
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
    // função para envio do email para reseta senha
    async function resetSenha() {
        if(email == " " || email == ""){
            alert("insira seu email!")
            return
        }
        // aq ele vai enviar pro servidor SMTP enviar um email pre-configurado, com link para alterar a senha
        const res = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://drmconnect.vercel.app/resetSenha'
        })
        if(res.error){
            alert("Algo deu errado, verifique se inseriu o email corretamente!")
        } else{
            alert("vá no email e mude sua senha")   
        }
    }

    return(
        <div className="login-tudo">
            <h1>Login</h1>
        
            <div className="form-login">
                <input type="text" onChange={e => setEmail(e.target.value)} placeholder="Insira seu email"/><br />
                <input type="password" onChange={e => setSenha(e.target.value)} placeholder="Insira sua senha"/> <br />
              <button onClick={logar}>Logar</button> <br />
                <button onClick={handleOAuthLogin}>Entrar com o google</button> <br />
                <p>Não tem conta? crie!</p>
                <button onClick={() => irPara("/cadastro")}>Cadastrar</button> 
                <p>Esqueceu sua senha? redefinar</p>
                <button onClick={() => resetSenha()}>Redefinir senha</button>
            </div>
        </div>
    )
}