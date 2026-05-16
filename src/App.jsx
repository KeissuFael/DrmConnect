import { BrowserRouter, Route, Routes } from "react-router-dom"; // Removido o 'data' não utilizado
import { useState, useEffect } from "react";
import { supabase } from "./supabase/supabase";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import PrivateRoute from "./components/hooks/PrivateRouter";
import ProblemasPagina from "./pages/ProblemasPagina";
export default function App(){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Adicionado para controlar o carregamento inicial

  useEffect(() => {
    async function carregarSessao() {
      try {
        //oi keissu
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setUser(session.user);
        }
      } catch (error) {
        console.error("Erro ao carregar sessão:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento da sessão local
      }
    }
    
    carregarSessao();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
        // Limpa os tokens do Google da URL sem recarregar a página
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
      } else {
        setUser(null);
      }
      setLoading(false); // Garante que o loading pare quando o Google responder
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route 
          path="/home" 
          element={
            // Passamos o loading para o PrivateRoute não barrar o usuário antes da hora
            <PrivateRoute user={user} loading={loading}>
              <ProblemasPagina />
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
