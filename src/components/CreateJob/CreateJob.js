import React from "react";
import { createJob } from "../../services/requests";
import { CreateContainer, Button_enviar } from "./Styled.js";
import trabalho from "../../img/trabalho.jpg"; 

class CreateJob extends React.Component {
    state = {
        body: {
            title:"",
            description:"",
            price:0,
            paymentMethods:[],
            dueDate:""
        }
    };

    resetInput = () => this.setState({body: {title: "", description:"", price:0, paymentMethods:[], dueDate:""}});

    onChangeTittle = (e) => this.setState({body: {...this.state.body, title: e.target.value}});
    onChangeDescription = (e) => this.setState({body: {...this.state.body ,description: e.target.value}});
    onChangePrice = (e) => this.setState({body: {...this.state.body, price: e.target.value}});
    onChangePaymentMethods = (e) => this.setState({body: {...this.state.body, paymentMethods: Array.from(e.target.selectedOptions, option => option.value)}});
    
    onChangeDueDate = (e) => this.setState({body: {...this.state.body, dueDate: e.target.value}});

    render() {
        console.log(this.state.body)
        return (
            <CreateContainer>
                <div className="div-contain">
                    <div className="div-form">
                        <div className="div-control">
                            <div>
                                <h1>Cadastre o seu Serviço!</h1>
                                <p>O seu <span>alcance</span> como jamais imaginou.</p>
                            </div>
                            <input value={this.state.body.title} onChange={this.onChangeTittle} placeholder="Título"/>
                            <input value={this.state.body.description} onChange={this.onChangeDescription} placeholder="Descrição"/>
                            <input value={this.state.body.price} onChange={this.onChangePrice} type="number" placeholder="Preço"/>
                            <select multiple value={this.state.body.paymentMethods} onChange={this.onChangePaymentMethods}>
                                <option value={"cartao-debito"}>Cartão de Débito</option>
                                <option value={"cartao-credito"}>Cartão de Crédito</option>
                                <option value={"paypal"}>PayPal</option>
                                <option value={"boleto"}>Boleto</option>
                                <option value={"pix"}>Pix</option>
                            </select>
                            <input value={this.state.body.dueDate} onChange={this.onChangeDueDate} type="date" placeholder="Prazo do Serviço"/>
                            <Button_enviar onClick={() => createJob(this.state.body, this.resetInput)}>Cadastrar Serviço</Button_enviar><br/>
                            {/* <hr/>
                            <button onClick={this.props.goToHome}>Home</button> */}
                        </div>
                    </div>
                    <div className="div-imagem">
                        <div className="div-trabalho-img">
                            <img className="img-trabalho" src={trabalho}/>
                        </div>
                    </div>
                </div>
                
            </CreateContainer>
        )
    }
}

export default CreateJob;