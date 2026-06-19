import "../styles/termos.css"
import { useNavigate } from "react-router-dom"
export default function TermosDeUso() {
    const irPara = useNavigate()
    return(
        <div className="content-termos">
            <div className="termos">
                <h1>Termos de Uso e Política de Conduta – Drm Connect</h1>
                <p>Seja bem-vindo ao Drm Connect<br/>
                uma plataforma desenvolvida de forma independente para conectar alunos e professores da EEEP Deputado Roberto Mesquita, 
                facilitando a troca de conhecimentos, dúvidas e a comunicação escolar.<br/>
                Ao criar uma conta e utilizar nossa plataforma, você concorda e aceita integralmente as 
                regras abaixo. Se você não concordar com qualquer termo, não deverá utilizar o serviço.</p>
                <h2>1. Cadastro e Elegibilidade</h2>
                <ul>
                    <li><strong>Público-Alvo:</strong> O uso desta plataforma é exclusivo para alunos, professores e funcionários vinculados à EEEP Deputado Roberto Mesquita.</li>
                    <li><strong>E-mails Temporários Proibidos:</strong> O cadastro deve ser realizado obrigatoriamente com um endereço de e-mail válido, pessoal e permanente. 
                        É expressamente proibido o uso de e-mails descartáveis ou temporários. Contas criadas com esses serviços serão banidas imediatamente.</li>
                    <li><strong>Segurança da Conta:</strong> Você é o único responsável por resguardar sua senha e pelos atos praticados em seu perfil.</li>
                </ul>
                <h2>2. Uso Aceitável das Funcionalidades</h2>
                <p>A plataforma divide-se em espaços específicos, e o usuário compromete-se a usá-los com responsabilidade:</p>
                <ul>
                    <li><strong>Aba Comunidade:</strong> Espaço livre para interações sociais. É proibido o uso de linguagem ofensiva, preconceituosa, difamatória ou que configure cyberbullying.</li>
                    <li><strong>Aba Ajuda DRM:</strong> Espaço focado no suporte pedagógico e acadêmico. É proibido postar intencionalmente respostas falsas, plágios ou sabotar as dúvidas dos colegas.</li>
                    <li><strong>Aba Perfil:</strong> A foto de perfil e a bio devem respeitar o ambiente escolar, sendo proibidas imagens inadequadas, violentas ou de cunho sexual.</li>
                    <li><strong>Aba Feedback:</strong>Canal direto com o desenvolvedor para sugerir melhorias. Críticas construtivas são bem-vindas; ofensas não serão toleradas.</li>
                </ul>
                <h2>3. Sistema de Denúncias e Moderação</h2>
                <p>Para garantir a segurança de todos, a plataforma conta com um sistema de moderação híbrido:</p>
                <ul>
                    <li><strong>Denúncias/Reports:</strong> Os usuários têm o direito e o dever de denunciar qualquer publicação, comentário ou perfil que viole estes Termos.</li>
                    <li><strong>Ação dos Administradores:</strong> Os administradores reservam-se o direito de analisar as denúncias e, a seu exclusivo critério, remover conteúdos, advertir usuários ou suspender/excluir contas sem aviso prévio.</li>
                </ul>
                <h2>4. Limitação de Responsabilidade</h2>
                <p><strong>ATENÇÃO: Esta rede social é uma ferramenta independente de apoio pedagógico e social.</strong></p>
                <ul>
                    <li>O desenvolvedor não se responsabiliza pelas opiniões, respostas, mídias, links ou conteúdos gerados diretamente pelos usuários nas abas Comunidade, Ajuda DRM ou Perfis.</li>
                    <li>A responsabilidade legal, civil e penal por qualquer publicação é <strong>100% do autor da postagem.</strong></li>
                    <li>O desenvolvedor não garante o funcionamento ininterrupto da plataforma, podendo realizar manutenções ou modificações no sistema a qualquer momento.</li>
                </ul>
                <h2>5. Privacidade e Proteção de Dados</h2>
                <ul>
                    <li>Os dados coletados no cadastro servem estritamente para o funcionamento da rede social e autenticação do usuário.</li>
                    <li>Suas informações nunca serão vendidas, compartilhadas ou expostas para fins comerciais.</li>
                    <li>As senhas de acesso são criptografadas e armazenadas de forma segura.</li>
                </ul>
                <h2>6. Alterações nestes Termos</h2>
                <p>O desenvolvedor poderá atualizar estes Termos de Uso sempre que necessário para refletir novas funcionalidades ou regras de segurança. O uso continuado da plataforma após as alterações significará que você aceita os novos termos.</p>
            </div>
            <button onClick={() => irPara("/")}>Voltar</button>
        </div>
    )
}