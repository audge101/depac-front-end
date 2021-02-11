import React, { Component } from 'react'



export default function ShowUserPlants(props){
	console.log("These are the props in ShowUserPlants: ", props)
	const allAccountPlants = props.accountPlants.map(plant => {
		
		return(
		    <div className="col s12 m4">
		        <div className="card large z-depth-3 hoverable" key={plant.id}>
		        	<div className="card-image">
		          		<img className="indexImage" src={plant.plant_img} alt="plant" onClick={()=>props.showOnePlant(plant.id)}/>
		          		<span className="card-title">{plant.name}</span>
		        	</div>
		        	<div className="card-content" onClick={()=>props.showOnePlant(plant.id)}>
		          		<p>{plant.description}</p>
		        	</div>
		        	<div className="card-action">
		        		<img 
		        			src={plant.owner.profile_img} 
		        			alt="" style={{width: '27px'}}
		        			className="circle responsive-img smallAvatarImg" />
		          		<a href="#">{plant.owner.username}</a>
		          		<i className="material-icons right redIcon" onClick={()=>props.deletePlant(plant.id)}>delete_forever</i>
		          		<i className="material-icons right greyIcon" onClick={()=>props.editPlant(plant.id)}>edit</i>
		        	</div>
		      	</div>
		    </div>
		)
	})

	return (
		<div className="row">
			{allAccountPlants}
		</div>
	)
}