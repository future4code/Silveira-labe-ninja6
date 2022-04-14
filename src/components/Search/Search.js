import React from "react";
import { MainSearch } from "./Styled";
import search from "../../img/search.png";
import eng from "../../img/engenheiro.png";

class Search extends React.Component {

    render () {
        return (
            <MainSearch>
                <div className="div-search">
                    <div className="search-box">
                        <div>
                            <h1 className="text-bold">Conectando quem precisa com quem sabe fazer</h1>
                        </div>
                        <div>
                            <p className="text-middle">Escolha o melhor produto para você.</p>
                        </div>
                        <div className="search">
                            <div>
                                <img id="img-search" src={search}/>
                            </div>
                            <div className="input">
                                <input placeholder="O que está buscando?"/>
                            </div>
                            <div className="div-button">
                                <button className="button">Buscar</button>
                            </div>
                        </div>
                    </div>
                    <div className="div-imagem">
                        <div className="div-contain">
                            <img id="engenheiro" src={eng}/>
                        </div>
                    </div>
                </div>
            </MainSearch>
        );
    }
}

export default Search;