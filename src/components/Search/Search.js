import React from "react";
import { MainSearch } from "./Styled";
import search from "../../img/search.png";
import eng from "../../img/engenheiro.png";
import axios from "axios";
import { URL, headers } from "../Api/Api";
import Card from "../Card/Card";

class Search extends React.Component {

    state = {
        jobsList: [],
        filterList: [],
        pesquisa: ""
    }

    componentDidMount() {
        this.getJobs();
        this.filterJobs();
    };

    componentDidUpdate(prevProps, prevState){
        if(
            this.state.MenorValor !== prevState.MenorValor ||
            this.state.MaiorValor !== prevState.MaiorValor ||
            this.state.pesquisa !== prevState.pesquisa ||
            this.state.Ord !== prevState.Ord 
        ) {
            this.filterJobs()
        }
    }

    handlePesquisa = (event) => {
        this.setState({pesquisa: event.target.value})
        localStorage.setItem("Pesquisa", JSON.stringify(this.state.filterList))
    }

    onChangePesquisa = (e) => this.setState({pesquisa: e.target.value});

    getJobs = () => {
        axios.get(`${URL}/jobs`, headers)
            .then((response) => {
                this.setState({ jobsList: response.data.jobs, filterList: response.data.jobs })
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    filterJobs = () => {
        const maximo = this.state.MaiorValor ? Number(this.state.MaiorValor) : Infinity
        const minimo = this.state.MenorValor ? Number(this.state.MenorValor) : -Infinity
        
        const novoJobsList = this.state.jobsList
            .filter((job) => job.price >= minimo)
            .filter((job) => job.price <= maximo)
            .filter((job) => {
                const jobTitle = job.title.toLowerCase()
                const jobDescription = job.description.toLowerCase()
                const PesquisaText = this.state.pesquisa.toLocaleLowerCase()
                return jobTitle.includes(PesquisaText) || jobDescription.includes(PesquisaText)
            }).sort((a, b) => {
                switch (this.state.Ord){
                    case "Menor Valor":
                        return a.price - b.price
                    case "Maior Valor":
                        return b.price - a.price
                    case "Nome":
                        return a.title.localeCompare(b.title)
                    case "Prazo":
                        return a.dueDate.localeCompare(b.dueDate)
                }
            })

        this.setState({filterList: novoJobsList});
        localStorage.setItem("filterList", JSON.stringify(this.state.filterList));
    }

    render () {
        const jobComponents = this.state.filterList.map((job) => {
            return <Card key={job.id} job={job} goToDetailPage={this.props.goToDetailPage} addCart={this.props.addCart}/> 
        });

        const list = this.state.jobsList.map((job, index) => {
            if (index < 3) {
                return <Card key={job.id} job={job} goToDetailPage={this.props.goToDetailPage} addCart={this.props.addCart}/> 
            }
        });

        return (
            <MainSearch>
                <div className="main">
                    <div className="div-search">
                        <div className="search-box">
                            <div>
                                <h1 className="text-bold">Conectando quem precisa com quem sabe fazer</h1>
                            </div>
                            <div>
                                <p className="text-middle">Escolha o melhor produto para voc??.</p>
                            </div>
                            <div className="search">
                                <div>
                                    <img id="img-search" src={search}/>
                                </div>
                                <div className="input">
                                    <input value={this.state.pesquisa} onChange={this.handlePesquisa} placeholder="O que est?? buscando?"/>
                                </div>
                                <div className="div-button">
                                    <button className="buttonSearch" onClick={() => this.props.goToList(this.state.pesquisa)}>Buscar</button>
                                </div>
                            </div>
                        </div>
                        <div className="div-imagem">
                            <div className="div-contain">
                                <img id="engenheiro" src={eng}/>
                            </div>
                        </div>
                    </div>
                    <div className="div-cards">
                        <div className="text-servicos">
                            <h2>Os servi??os mais pedidos</h2>
                            <p>Produtos com a maior qualidade</p>
                        </div>
                        <div className="div-button-text">
                            <button className="button-list" onClick={() => this.props.changePage("list")}>Contratar um labeninja</button>
                        </div>
                        <hr/>
                        <div className="cards">
                            {list}
                        </div>
                    </div>
                </div>
            </MainSearch>
        );
    }
}

export default Search;