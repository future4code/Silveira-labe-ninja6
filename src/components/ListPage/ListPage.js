import React from "react";
import axios from "axios";
import { URL, headers } from '../Api/Api.js';
import Card from "../Card/Card.js";
import { ListContainer, Filters, Master } from "./Styled.js";

export default class ListPage extends React.Component {
    state = {
        jobsList: [],
        filterList: [],
        MenorValor: "",
        MaiorValor: "",
        Pesquisa: "",
        Ord: "",
        confirma: false
    };

    componentDidMount() {
        this.setState({confirma: this.props.confirma});
        this.getJobs();
        this.filterJobs();
    };

    componentDidUpdate(prevProps, prevState){
        if(
            this.state.MenorValor !== prevState.MenorValor ||
            this.state.MaiorValor !== prevState.MaiorValor ||
            this.state.Pesquisa !== prevState.Pesquisa ||
            this.state.Ord !== prevState.Ord 
        ) {
            this.filterJobs()
        }
    }

    handleMenorValor = (event) => {
        this.setState({MenorValor: event.target.value})
    }

    handleMaiorValor = (event) => {
        this.setState({MaiorValor: event.target.value})
    }

    handlePesquisa = (event) => {
        if(this.state.confirma){
            this.setState({Pesquisa: this.props.search})
            
        }
        else{
        this.setState({Pesquisa: event.target.value})
        }
    }

    handleOrd = (event) => {
        this.setState({Ord: event.target.value})
    }

    getJobs = () => {
        axios.get(`${URL}/jobs`, headers)
            .then((response) => {
                if(this.state.confirma === false){
                    this.setState({ jobsList: response.data.jobs, filterList: response.data.jobs })
                }
                else{
                    const newList = localStorage.getItem("filterList")
                    this.setState({jobsList: JSON.parse(newList), filterList: JSON.parse(newList)})
                }
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
                const PesquisaText = this.state.Pesquisa.toLocaleLowerCase()
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
    }

    render() {

        const jobComponents = this.state.filterList.map((job) => {
            return (
                <div>
                    <Card key={job.id} job={job} goToDetailPage={this.props.goToDetailPage} addCart={this.props.addCart}/>
                </div>
            )
        })

        return (
            <Master>
                <Filters>
                    <div className="div-control">
                        <input value={this.state.MenorValor} onChange={this.handleMenorValor} placeholder="Valor Mínimo"/>
                        <input value={this.state.MaiorValor} onChange={this.handleMaiorValor} placeholder="Valor Máximo"/>
                        <input value={this.state.Pesquisa} onChange={this.handlePesquisa} placeholder="Busca por Nome"/>
                        <select value={this.state.Ord} onChange={this.handleOrd}>
                            <option>Não Ordenado</option>
                            <option>Menor Valor</option>
                            <option>Maior Valor</option>
                            <option>Nome</option>
                            <option>Prazo</option>
                        </select>
                    </div>
                </Filters>
                <hr/>
                <ListContainer>
                    <div className="div-jobs">
                        {jobComponents}
                    </div>
                </ListContainer>
            </Master>
        )
    }
}