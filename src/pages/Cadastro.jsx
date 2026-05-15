import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase/supabase"

export default function Cadastro(){
    const irPara = useNavigate()
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
                <button  onClick={() => handleOAuthLogin("google")}>
                    cadastrar com o google
                </button>
                   <p>ja tem conta? entre</p> <br />
            
                <button onClick={() => irPara("/")}>logar</button>
            </div>
        </div>
    )
}