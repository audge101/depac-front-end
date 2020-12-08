import React, { Component } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';


export default class PlantToShow extends Component{
	componentDidMount(){
    		let slider = document.querySelector('.slider');
    		M.Slider.init(slider, {});
    		let materialBox = document.querySelector('.materialboxed')
    		M.Materialbox.init(materialBox, {})
	}		

	render(){
	return(
		<div className="row">
    		<div className="col s12 m6 l6">
    			  <div className="slider">
    				<ul className="slides hoverable" id="slider">
      					<li>
        					<img src={this.props.plantToShow.cultural_img_1} alt="cultural plant representation"/>
      					</li>
     					<li>
        					<img src={this.props.plantToShow.cultural_img_2} alt="cultural plant representation"/>
      					</li>
      					<li>
        					<img src={this.props.plantToShow.cultural_img_3} alt="cultural plant representation"/>
      					</li>
    				</ul>
  				</div>      
	    		<div className="card red lighten-2 z-depth-5 hoverable">
	    			<div className="card-content white-text">
	          			<span className="card-title"><h1>{this.props.plantToShow.name}</h1></span>
	          			<p>{this.props.plantToShow.description}</p>
	        		</div>	
	        	</div>
	        	<div className="card brown lighten-1 z-depth-2">
	    			<div className="card-content white-text">
	          				<span className="card-title">Applications</span>
	          				<p>{this.props.plantToShow.applications}</p>
	        			</div>	
	        		</div>
	        	<div className="card brown lighten-1 z-depth-2">
	    			<div className="card-content white-text">
	          			<span className="card-title">Cultural and Spiritual Significance</span>
	          			<p>{this.props.plantToShow.cultural_importance}</p>
	        		</div>	
	        	</div>
	        	<div className="card deep-purple lighten-1 z-depth-2">
        			<div className="card-content white-text">
          				<span className="card-title">Additional Uses:</span>
          				<p>{this.props.plantToShow.misc_uses}</p>
        			</div>
        			<div className="card-content white-text">
          				<span className="card-title">Resource Links:</span>
          				<p><a href={this.props.plantToShow.resource_link_1} target="_blank">{this.props.plantToShow.resource_link_1}</a></p>
          				<p><a href={this.props.plantToShow.resource_link_2} target="_blank">{this.props.plantToShow.resource_link_2}</a></p>
          				<p><a href={this.props.plantToShow.resource_link_3} target="_blank">{this.props.plantToShow.resource_link_3}</a></p>
 
        			</div>
      			</div>
	        	
      		</div>
      		<div className="row">
      		<div className="col s10 m5 push-l1">
      		 <img className="materialboxed hoverable responsive-img" width="650" src={this.props.plantToShow.plant_img} />
      		 
 				<div className="card deep-purple lighten-1 z-depth-2 push-m1">
        			<div className="card-content white-text">
          				<span className="card-title">Ecological Considerations:</span>
          				<p>{this.props.plantToShow.ecological_considerations}</p>
        			</div>
        			<div className="card-content white-text">
          				<span className="card-title">Locations Found</span>
          				<p>{this.props.plantToShow.locations}</p>
 
        			</div>
      			</div>
      			<div className="card deep-orange lighten-2 z-depth-4">
        			<div className="card-content white-text">
          				<span className="card-title">Properties</span>
          				<p>{this.props.plantToShow.isCultivated}</p>
        			</div>
      			</div>
      			
      			</div>
      			</div>
      		</div>
	)
}
}