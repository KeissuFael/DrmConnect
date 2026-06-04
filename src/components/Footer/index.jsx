import logoEp from "./../../assets/paginaInicial/patriocinadores/logoEP.png"
import instagram from "./../../assets/paginaInicial/socialMedias/Instagram_logo.png"
import tiktok from "./../../assets/paginaInicial/socialMedias/tiktok_logo.png"
import animeProfile from "./../../assets/paginaInicial/patriocinadores/animeprofile.png"
import "./footer.css"

export default function Footer(){
    return(
        <footer>
            <div className="criadores">
                <img src={logoEp} className="logoEp" alt="logo da ep"/>
                <p>EEEP Deputado Roberto Mesquita</p>
                <p>Feito por: 2°Desenvolvimentos de Sistemas</p>
            </div>
            <div className="mediasSociais">
                <h3>Redes sociais</h3>
                <div className="icones">
                    <a href="https://www.instagram.com/2anodesenv.sistemas/" target="_blank">
                        <img src={instagram} className="logoInsta" alt="logo do instagram"/>
                    </a>
                    <a href="https://www.tiktok.com/@segundo.ds2025" target="_blank">
                        <img src={tiktok} className="logoTTK" alt="logo do tiktok"/>
                    </a>
                </div>
            </div>
            <div className="patriocinadores">
                <h3>Patriocinadores</h3>
                <a href="https://animeprofile.com.br/"  target="_blank">
                    <img src={animeProfile} className="logoAP" alt="logo do anime profile" />
                </a>
            </div>
        </footer>
    )
}