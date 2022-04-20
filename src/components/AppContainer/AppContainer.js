import React, { Component } from 'react'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <p>Pronto para começar!</p>
        <button onClick={this.props.goToCreateJob}>Quero ser um Ninja</button>
        <button onClick={this.props.goToCards}>Contratar um Ninja</button>
      </div>
    )
  }
}
