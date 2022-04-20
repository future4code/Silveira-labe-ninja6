import React from "react"
import { URL, headers } from '../Api/Api'
import axios from "axios"
import { Data } from "./Data"
import styled from 'styled-components'

const DetailContainer = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 3px aqua;
`


export default class DetailPage extends React.Component {
    state = {
        job: {}
    }

    componentDidMount() {
        this.getJob()
    }

    getJob = () => {
        axios.get(`${URL}/jobs/${this.props.jobId}`, headers)
            .then((response) => {
                this.setState({ job: response.data })
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    render() {
        const paymentComponents = this.state.job.paymentMethods && this.state.job.paymentMethods.map((pay) => {
            return <li key={pay}>{pay}</li>
        })

        return (
            <DetailContainer>
                {
                    this.state.job.title && <h1>{this.state.job.title}</h1>
                }
                {
                    this.state.job.price && <p>Preço: R${this.state.job.price.toFixed(2)}</p>
                }
                {
                    this.state.job.dueDate && <p>Prazo: {Data(this.state.job.dueDate)}</p>
                }
                {
                    this.state.job.description && <p>{this.state.job.description}</p>
                }
                <div>
                    {paymentComponents}
                </div>
                <button onClick={() => this.props.changePage("list")}>Voltar para a Lista</button>
            </DetailContainer>
        )
    }
}

