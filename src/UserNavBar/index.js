import React, { Component } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';




export default class UserNavBar extends Component{
	componentDidMount() {
  		let sidenav = document.querySelector('#slide-out');
  		M.Sidenav.init(sidenav, {});
	}

	render(){
		return(
		<React.Fragment>
			<div className="navbar-fixed">
			  	<nav>
				    <div className="nav-wrapper blue-grey darken-1">
				      	<a href="#!" className="brand-logo">DEPAC</a>
				      	<a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
				      	<ul className="right hide-on-med-and-down">
				      		{ 
				      			this.props.loggedIn === true
				      			&&
				      		
				      		<React.Fragment>
				      		<li><h5>Welcome {this.props.loggedInUser}!</h5></li>
				      	    <li>    
			                   <div className="center row">
			                      <div className="col s12 " >
			                        <div className="row" id="topbarsearch">
			                          <div className="input-field col s12">
			                            <i className="material-icons prefix">search</i>
			                            <input type="text" placeholder="search" id="autocomplete-input" value={this.props.inputValue} onChange={this.props.plantFilterOnChange} className="autocomplete white-text" />
			                            </div>
			                          </div>
			                        </div>
			                    </div>          
			                </li>
			                </React.Fragment>
			            	}
			            	<li><a href="#!" onClick={() => this.props.viewPlants()}>View All Posts</a></li>

			            	{ 
			            		this.props.loggedIn === true
			            		&&

			                <React.Fragment>
			                <li><a href="#!" onClick={() => this.props.getFavPlants()}>Favorites</a></li>
			                <li><a href="#!" onClick={() => this.props.getContributorPlants()}>Submission Dash</a></li>
			                <li><a href="#!" onClick={() => this.props.openPlantForm()}>Create Contribution</a></li>
			                <li>
			                  	<div className="chip">
			    					<img src={this.props.profileImg} alt="#" />
			    						{this.props.loggedInUser}
			  					</div> 
			  				</li>
			  				<li>
			  					<button 
			  						onClick={()=>this.props.logout()} className="waves-effect waves-light btn-small">Log Out
			  					</button>
			  				</li>
			                </React.Fragment>
			                }                     
				        	
				      	</ul>
				    </div>
				</nav>
			</div>
			<div>
				<ul id="slide-out" className="sidenav">
			      	{ 
			      		this.props.loggedIn === true
			      		&&
			      		
			      		<React.Fragment>
				      		<li><h5>Welcome {this.props.loggedInUser}!</h5></li>
				      	    <li>    
			                   <div className="center row">
			                      <div className="col s12 " >
			                        <div className="row" id="topbarsearch">
			                          <div className="input-field col s12">
			                            <i className="material-icons prefix">search</i>
			                            <input type="text" placeholder="search" value={this.props.inputValue} onChange={this.props.plantFilterOnChange} className="autocomplete white-text" />
			                            </div>
			                          </div>
			                        </div>
			                    </div>          
			                </li>
		                </React.Fragment>
		            }
		            <li><a href="#!" onClick={() => this.props.viewPlants()}>View All Posts</a></li>

		            { 
		            	this.props.loggedIn === true
		            	&&

		                <React.Fragment>
			                <li><a href="#!" onClick={() => this.props.getFavPlants()}>Favorites</a></li>
			                <li><a href="#!" onClick={() => this.props.getContributorPlants()}>Submission Dash</a></li>
			                <li><a href="#!" onClick={() => this.props.openPlantForm()}>Create Contribution</a></li>
			                <li>
			                  	<div className="chip">
			    					<img src={this.props.profileImg} alt="#" />
			    						{this.props.loggedInUser}
			  					</div> 
			  				</li>
			  				<li>
			  					<button 
			  						onClick={()=>this.props.logout()} className="waves-effect waves-light btn-small">Log Out
			  					</button>
			  				</li>
		                </React.Fragment>
		             }                     
			        	
			    </ul>
			</div>
		</React.Fragment>
		)
	}
}