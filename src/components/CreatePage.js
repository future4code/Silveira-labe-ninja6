import React from "react"
import axios from "axios"
import { URL, headers } from '../Api/Api'
import styled from 'styled-components'


const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    color: blue;
    border: 5px black;

`

const Button1 = styled.button`

color: black;
background-color: whitesmoke;

&:hover{
    color: red;
    background-color: aqua;
}



`



export default class CreatePage extends React.Component {
    state = {
        title: "",
        description: "",
        price: "",
        dueDate: "",
        paymentMethods: []
    }

    handleTitle = (event) => {
        this.setState({title: event.target.value})
    }

    handleDescription = (event) => {
        this.setState({description: event.target.value})
    }

    handlePrice = (event) => {
        this.setState({price: event.target.value})
    }

    handleDueDate = (event) => {
        this.setState({dueDate: event.target.value})
    }

    handlePaymentMethods = (event) => {
        let value = Array.from(event.target.selectedOptions, option => option.value)
        this.setState({ paymentMethods: value })
    }

    createJob = () => {
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            dueDate: this.state.dueDate,
            paymentMethods: this.state.paymentMethods,
        }

        axios.post(`${URL}/jobs`, body, headers)
        .then(() => {
            alert(`O serviço ${this.state.title} foi criado.`)
            this.setState({
                title: "",
                description: "",
                price: "",
                dueDate: "",
                paymentMethods: []
            })
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }

    render() {
        return (
            <CreateContainer>
                <h1>Cadastrar o seu serviço</h1>
                <input value={this.state.title} onChange={this.handleTitle} placeholder="Título" />
                <input value={this.state.description} onChange={this.handleDescription} placeholder="Descrição" />
                <input value={this.state.price} onChange={this.handlePrice} placeholder="Preço" type="number" />
                <select multiple value={this.state.paymentMethods} onChange={this.handlePaymentMethods}>
                    <option>Pix</option>
                    <option>Pix Parcelado</option>
                    <option>Cartão de Débito</option>
                    <option>Cartão de Crédito</option>
                    <option>PayPal</option>
                    <option>Boleto</option>
                    
                </select>
                <input value={this.state.dueDate} onChange={this.handleDueDate} placeholder="Prazo do Serviço" type="date" />
                <Button1 onClick={this.createJob}>Cadastrar Serviço</Button1>
            </CreateContainer>
        )
    }
}

