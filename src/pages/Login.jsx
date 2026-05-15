import { supabase } from "../supabase/supabase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const irPara = useNavigate()

/*     async function logar() {
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
    } */

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
        <div className="login-tudo">
            <h1>Bem-vindo ao Problemas.com</h1>
            <p>encontre sua solução aqui</p>

            <div className="form-login">
{/*                <input type="text" onChange={e => setEmail(e.target.value)} />
           <input type="password" onChange={e => setSenha(e.target.value)} />
              <button onClick={logar}>Logar</button> <br />
    */}
                <button onClick={handleOAuthLogin}>Entrar com o google</button> <br />
                <p>Não tem conta? crie!</p>
                <button onClick={() => irPara("/cadastro")}>Cadastrar</button>
            </div>
        </div>
    )
}