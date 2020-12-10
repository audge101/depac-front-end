import React, { Component } from 'react'


export default class LoginContainer extends Component {
	constructor(){
		super()
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			username: '',
			password: '',
			profile_img: '',
			action: 'Login'
		}
	}

	switchForm = () => {
		if(this.state.action === 'Login') {
			this.setState({ action: 'Register'})
		} else {
			this.setState({ action: 'Login'})
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
   		console.log(this.state);
   		if(this.state.action === 'Register') {
   			this.props.register(this.state)
   		} else {
   			this.props.login(this.state)
   		}
	}




	render(){
		return (
			<React.Fragment>
				<div className="col s12 m2 card-panel grey lighten-5  z-depth-5 login">
				    <form  onSubmit={this.handleSubmit} className="col s12 row">
				    	<h4>{this.state.action}</h4>
				    	{
				    		this.state.action === "Register"
				    		&&
				    	<React.Fragment>
				      	<div className="row">
					        <div className="input-field col s6">	
					          <input id="first_name" name="first_name" type="text" className="validate" onChange={this.handleChange} />
					          <label htmlFor="first_name">First Name</label>
					        </div>
					        <div className="input-field col s6">
					          <input id="last_name" name="last_name" type="text" className="validate" onChange={this.handleChange} />
					          <label htmlFor="last_name">Last Name</label>
					        </div>
					    </div>
					    <div className="row">
					        <div className="input-field col s12">
					          <input id="email" name="email" type="email" className="validate" onChange={this.handleChange}></input>
					          <label htmlFor="email">Email</label>
					        </div>
				      	</div>
				      	<div className="row">
					        <div className="input-field col s12">
					          <input id="profile_img" name="profile_img" type="profile_img" className="validate" onChange={this.handleChange}></input>
					          <label htmlFor="profile_img" style={{paddingTop: "7px"}}>Profile Image URL</label>
					        </div>
				      	</div>
				      	</React.Fragment>
				      	}
					    <div className="row">
					        <div className="input-field col s12">
					          <input id="username" name="username" type="username" className="validate" onChange={this.handleChange}/>
					          <label className="p" htmlFor="username" style={{paddingTop: "7px"}}>Username</label>
					        </div>
					    </div>
					    <div className="row">
					        <div className="input-field col s12">
					          <input id="password" name="password" type="password" className="validate" onChange={this.handleChange}/>
					          <label htmlFor="password">Password</label>
					        </div>
					    </div>
				      	<button className="pulse btn waves-effect waves-light" type="submit">
			            	{ this.state.action === "Login" ? "Log in" : "Sign up"}
			            	<i className="material-icons right">send</i>
			          	</button>
			    	</form>
			        {
			          this.state.action === "Login"
			          ?
			          <p>
			            Need an account? Sign up <span className="fake-link" onClick={this.switchForm} style={{color: "#9d4c4a"}}>here</span>.
			          </p>
			          :
			          <p>
			            Already have an account? Log in <span className="fake-link" onClick={this.switchForm} style={{color: "#9d4c4a"}}>here</span>.
			          </p>
			        }
		  		</div>
		  	</React.Fragment>
		)
	}
}