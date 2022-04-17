import React from "react";
import { Rodape, Button_home } from "./Styled";
import certificacao from "../../img/ra-1000-md.png"
import instagram from "../../img/instagram.png"
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import youtube from "../../img/youtube.png"

const Footer = (props) => {
    return (
        <Rodape>
            <section className="services">
                <div className="div-services">
                    <div className="div-services-columns">
                        <h3>Serviços</h3>
                        <button className="button-informations">Assistência Técnica</button>
                        <button className="button-informations">Aulas</button>
                        <button className="button-informations">Auto</button>
                        <button className="button-informations">Consultoria</button>
                        <button className="button-informations">Design e Tecnologia</button>
                    </div>
                    <div className="div-services-columns">
                        <h3></h3>
                        <button className="button-informations">Eventos</button>
                        <button className="button-informations">Moda e Beleza</button>
                        <button className="button-informations">Reformas</button>
                        <button className="button-informations">Saúde</button>
                        <button className="button-informations">Serviços Domésticos</button>
                    </div>
                    <div className="div-services-columns">
                        <h3>Institucional</h3>
                        <button className="button-informations">Quem Somos</button>
                        <button className="button-informations">Relação com Investidores</button>
                        <button className="button-informations">Trabalhe Conosco</button>
                        <button className="button-informations">Profissionais Verificados</button>
                        <button className="button-informations">Blog do GetNinjas</button>
                    </div>
                    <div className="div-services-columns-rs">
                        <h3>Redes Sociais</h3>
                        <div className="div-services-rs">
                            <a href="https://www.instagram.com/" target="_blank"><img className="img-redes" src={instagram}/></a>
                            <a href="https://www.facebook.com/" target="_blank"><img className="img-redes" src={facebook}/></a>
                            <a href="https://www.twitter.com/" target="_blank"><img className="img-redes" src={twitter}/></a>
                            <a href="https://www.youtube.com/" target="_blank"><img className="img-redes" src={youtube}/></a>
                        </div>
                    </div>
                    <div className="div-services-columns-img">
                        <h3>Certificações</h3>
                        <img src={certificacao}/>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="informations">
                <div className="informations-content">
                    <div>
                        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,900&display=swap" rel="stylesheet"/>
                        <Button_home onClick={() => props.changePage("home")}><h2 className="titulo">LabeNinjas</h2></Button_home>
                    </div>
                    <div className="div-buttons">
                        <button className="button-informations">Imprensa</button>
                        <button className="button-informations">Ajuda</button>
                        <button className="button-informations">Termos de Uso</button>
                        <button className="button-informations">Política de Privacidade</button>
                    </div>
                </div>
            </section>
            <section className="copyright">
                <div className="copyright-text">
                    <p>©2011 - 2022, LabeNinjas Serviços de Internet. CNPJ 01.234.567/0008-90 - Avenida Brigadeiro Faria Lima, 1234 - cj 56 - São Paulo/SP - Brasil</p>
                </div>
            </section>
        </Rodape>
    );
};

export default Footer;