import React, { Component } from 'react'

export default class EditPlant extends Component {
	constructor(props) {
		super(props)

		this.state = {
	       	name: props.plantToEdit.name,
	      	locations: props.plantToEdit.locations,
	      	description: props.plantToEdit.description,
	      	applications: props.plantToEdit.applications,
	      	cultural_importance: props.plantToEdit.cultural_importance,
	      	misc_uses: props.plantToEdit.misc_uses,
	      	plant_img: props.plantToEdit.plant_img,
	      	cultural_img_1: props.plantToEdit.cultural_img_1,
	      	cultural_img_2: props.plantToEdit.cultural_img_2,
	      	cultural_img_3: props.plantToEdit.cultural_img_3,
	      	cultivated: props.plantToEdit.cultivated,
		    wild: props.plantToEdit.wild,
		    rare: props.plantToEdit.rare,
		    endangered: props.plantToEdit.endangered,
		    poisonous: props.plantToEdit.poisonous,
		    medicinal: props.plantToEdit.medicinal,
		    psychoactive: props.plantToEdit.psychoactive,
		    anti_aging: props.plantToEdit.anti_aging,
		    superfood: props.plantToEdit.superfood,
		    ecological_considerations: props.plantToEdit.ecological_considerations,
		    resource_link_1: props.plantToEdit.resource_link_1,
		    resource_link_2: props.plantToEdit.resource_link_2,
		    resource_link_3: props.plantToEdit.resource_link_3      
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  	handleCheck = (e) => {
  		this.setState({
  			[e.target.name]: !this.state[e.target.name]
  		})
  	}

  	toggleCheckbox = () => {

  	}


	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updatePlant(this.state)
	}

	render() {
		return(
			<React.Fragment>
		        <div className="row">
		    		<div className="col s12">
		      			<div className="card">
		        			<div className="card-content black-text">
		        				<h4 className="center"> Edit Plant Submission</h4>
		        				<form onSubmit={this.handleSubmit}>

		          				<input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
		          				<label>Name</label>

		          				<input id="locations" name="locations" type="text" value={this.state.locations} onChange={this.handleChange} />
		          				<label>Locations Found</label>

		          				<input id="description" name="description" type="text" className="validate" value={this.state.description} onChange={this.handleChange} />
		          				<label>Describe the Plant Characteristics</label>

		          				<input id="applications" name="applications" type="text" className="validate" value={this.state.applications} onChange={this.handleChange} />
		          				<label>Human Applications</label>

		          				<input id="cultural_importance" name="cultural_importance" type="text" className="validate" value={this.state.cultural_importance} onChange={this.handleChange} />
		          				<label>Cultural and/or Spiritual Significance</label>

		          				<input id="misc_uses" name="misc_uses" type="text" className="validate" value={this.state.misc_uses} onChange={this.handleChange} />
		          				<label>Miscellaneous Uses by Humans</label>

		          				<input id="plant_img" name="plant_img" type="text" className="validate" value={this.state.plant_img} onChange={this.handleChange} />
		          				<label>Plant Image URL</label>

		          				<input id="cultural_img_1" name="cultural_img_1" type="text" className="validate" value={this.state.cultural_img_1} onChange={this.handleChange} />
		          				<label>Cultural Depictions Image URL</label>

		          				<input id="cultural_img_2" name="cultural_img_2" type="text" className="validate" value={this.state.cultural_img_2} onChange={this.handleChange} />
		          				<label>Cultural Depictions Image URL</label>

		          				<input id="cultural_img_3" name="cultural_img_3" type="text" className="validate" value={this.state.cultural_img_3} onChange={this.handleChange} />
		          				<label>Cultural Depictions Image URL</label>

		          			    <div>
		          			    	<h6>IMPORTANT PLANT CHARACTERISTICS (please consider carefully)</h6>
		          			    	<p>
			      						<label>
			        					<input 
			        						id="cultivated" 
			        						type="checkbox" 
			        						name="cultivated"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.cultivated}/>
			        					<span>Cultivated</span>
			        					</label>
		        					</p>

		        					<p>
			      						<label>
			        					<input 
			        						id="wild" 
			        						type="checkbox" 
			        						name="wild"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.wild}/>
			        					<span>Wild</span>
			      						</label>
		      						</p>

		      						<p>
			      						<label>
			        					<input 
			        						id="rare" 
			        						type="checkbox" 
			        						name="rare"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.rare}/>
			        					<span>Rare</span>
			      						</label>
		      						</p>

		      						<p>
			      						<label>
			        					<input 
			        						id="endangered" 
			        						type="checkbox" 
			        						name="endangered"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.endangered}/>
			        					<span>Endangered</span>
			      						</label>
		      						</p>

		      						<p>
			      						<label>
			        					<input 
			        						id="medicinal" 
			        						type="checkbox" 
			        						name="medicinal"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.medicinal}/>
			        					<span>Medicinal</span>
			      						</label>
		      						</p>

		      						<p>
			      						<label>
			        					<input 
			        						id="poisonous" 
			        						type="checkbox" 
			        						name="poisonous"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.poisonous}/>
			        					<span>Poisonous</span>
			      						</label>
		      						</p>

		      						<p>
			      						<label>
			        					<input 
			        						id="psychoactive" 
			        						type="checkbox" 
			        						name="psychoactive"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.psychoactive}/>
			        					<span>Psychoactive</span>
			      						</label>
		      						</p>

		      						<p>
			      						<label>
			        					<input 
			        						id="anti_aging" 
			        						type="checkbox" 
			        						name="anti_aging"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.anti_aging}/>
			        					<span>Anti-Aging</span>
			      						</label>
		      						</p>

		      						<p>
			      						<label>
			        					<input 
			        						id="superfood" 
			        						type="checkbox" 
			        						name="superfood"
			        						onClick={this.handleCheck } 
			        						defaultChecked={this.state.superfood} />
			        					<span>Superfood</span>
			      						</label>
		      						</p>
		    					</div>

		           				<input id="ecological_considerations" name="ecological_considerations" type="text" className="validate" value={this.state.ecological_considerations} onChange={this.handleChange} />
		          				<label>Ecological Considerations</label>

		          				<input id="resource_link_1" name="resource_link_1" type="text" className="validate" value={this.state.resource_link_1} onChange={this.handleChange} />
		          				<label>Resource Link</label>

		          				<input id="resource_link_2" name="resource_link_2" type="text" className="validate" value={this.state.resource_link_2} onChange={this.handleChange} />
		          				<label>Additional Resource Link</label>

		          				<input id="resource_link_3" name="resource_link_3" type="text" className="validate" value={this.state.resource_link_3} onChange={this.handleChange} />
		          				<label>Additional Resource Link</label>

		          				<div>
		          					<button className="btn waves-effect waves-light" type="submit" style={{marginTop:"2%"}}>Update Plant Submission
		          						<i className="material-icons right">send</i>
		          					</button>
		          				</div>
		        			</form>
		        			<div>
		          				<button type="submit" className="btn waves-effect waves-light red accent-1" onClick={() => this.props.showUserPlants()} style={{marginTop:"2%"}}>Close Form
		          					<i className="material-icons right">cancel</i>
		          				</button>
		          			</div>
		        		</div>
		       		</div>
		        </div>
		    </div>
      	</React.Fragment>

		)
	}
}