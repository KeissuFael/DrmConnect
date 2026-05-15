import { Navigate } from "react-router-dom";

export default function PrivateRoute({ user, loading, children }) {
  // Se o Supabase ainda está validando o callback do Google, exibe o carregamento
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Autenticando sessão...</p>
      </div>
    );
  }

  // Se o carregamento terminou e não há usuário, joga para o login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Se há usuário, renderiza a página protegida (ProblemasPagina)
  return children;
}
