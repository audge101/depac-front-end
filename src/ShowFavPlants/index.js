import React from 'react'


export default function ShowFavPlants(props){
	console.log("These are the props in ShowFavPlants: ", props)
	const allFavoritePlants = props.accountFavPlants.map(plant => {
		return(
		    <div className="col s12 m4 ">
		      	<div className="card z-depth-3 hoverable" key={plant.post.id}>
			        <div className="card-image">
			          <img className="indexImage" src={plant.post.plant_img} alt="plant" onClick={()=>props.showOnePlant(plant.post.id)}/>
			          <span className="card-title">{plant.post.name}</span>
			        </div>
		        <div className="card-content" onClick={()=>props.showOnePlant(plant.post.id)}>
		          <p>{plant.post.description}</p>
		        </div>
		        <div className="card-action">
		        	<img 
		        		src={plant.post.owner.profile_img} 
		        		alt="" style={{width: '24px'}}
		        		class="circle responsive-img" />
		          	<a href="#!">{plant.post.owner.username}</a>
		          	<i className="material-icons right greyIcon">bookmark</i>
		        </div>
		    </div>
		</div>
		)
	})

	return (
		<div className="row">
			{allFavoritePlants}
		</div>
	)
}