import React from 'react';
import CreateJob from './components/CreateJob/CreateJob';
import Footer from './components/Footer/Footer';

import Home from './components/Home' //
import ListPage from './components/ListPage'
import { createGlobalStyle } from "styled-components"
import DetailPage from './components/DetailPage'
import Cart from './components/Cart'
import C from './components/C/C' //
import Search from './components/Search/Search';

const Global = createGlobalStyle` //
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
  input {
    width: 400px;
    margin-bottom: 18px;
  }
  select {
    width: 350px;
    margin-bottom: 18px;
  }
`

class App extends React.Component {
	state = {
		currentPage: "",
		DetailId: "", 
    	cart: [] 
	};
	
	changePage = (pageName) => {
		this.setState({ currentPage: pageName })
	  }
	
	  goToDetailPage = (jobId) => {
		this.setState({currentPage: "detalhe", DetailId: jobId})
	  }
	
	  addCart = (job) => {
		const novoCart = [...this.state.cart, job]
		this.setState({cart: novoCart})
		alert(`Serviço ${job.title} adicionado ao carrinho`)
	  }
	
	  removerCart = (id) => {
		const toDelete = window.confirm("Concorda em remover o serviço do carrinho??")
		if (toDelete){
		  	const novoCart = this.state.cart.filter((cartItem) => {
			return cartItem.id !== id
		  })
		  this.setState({cart: novoCart})
		}
	  }
	
	  LimparCart = () => {
		this.setState({cart: []})
		alert("Obrigada!")
	  }
	
	  ToPage = () => {
		switch (this.state.currentPage) {
		  case "home":
			return <Home changePage={this.changePage} />
		  case "list":
			return <ListPage addCart={this.addCart} goToDetailPage={this.goToDetailPage}/>
		  case "form":
			return <CreateJob />
		  case "cart":
			return <Cart changePage={this.changePage} cart={this.state.cart} removerCart={this.removerCart} LimparCart={this.LimparCart}/>
		  case "detail":
			return <DetailPage jobId={this.state.DetailId} changePage={this.changePage}/>
		  default:
			return <Home changePage={this.changePage} />
		}
	  }

	render () {
		return	(
			<div>
				<Global/>
				<C 
					changePage={this.changePage} 
				/>
				<Search/>
				{this.ToPage()}
				<Footer 
					changePage={this.changePage}
				/>
      		</div>
		)
	};
};

export default App
