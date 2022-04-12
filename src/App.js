import React from 'react';
import { AppContainer } from './components/AppContainer';
import CreateJob from './components/CreateJob/CreateJob';

class App extends React.Component {
	state = {
		currentScreen: ""
	};

	goToCreateJob = () => this.setState({currentScreen: "register"});
	goToCards = () => this.setState({currentScreen: "cards"});
	goToHome = () => this.setState({currentScreen: "home"});

	changeScreen = () => {
		switch (this.state.currentScreen) {
			case "register":
			
				return (
					<CreateJob goToHome={this.goToHome}/>
				)
			
			case "cards":
			
				return (
					<div>
						<h1>cards</h1>
						<button onClick={this.goToHome}>Home</button>
					</div>
				)

			case "home":

				return (
					<AppContainer 
						goToCreateJob={this.goToCreateJob} 
						goToCards={this.goToCards}
					/>
				)

			default:

				return (
					<AppContainer 
						goToCreateJob={this.goToCreateJob} 
						goToCards={this.goToCards}
					/>
				)
		};
	};
	render () {
		return	(
			<div>
				{this.changeScreen()}
			</div>
		)
	};
};

export default App
