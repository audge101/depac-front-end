import React from 'react'


export default function ShowAllPlants(props){

	const allPlants = props.plants.map(plant => {
	const likes = props.likes.filter(like => like.post.id === plant.id)
	const favorites = props.favorites.filter(favorite=> favorite.post.id === plant.id)
	const favedUser = favorites.filter(favorite => favorite.user.username === props.loggedInUser)
	console.log("These are the likes: ", likes)
	console.log(props.loggedInUser)
	const likedUser = likes.filter(like => like.user.username === props.loggedInUser)
	console.log("This is likedUser info: ", likedUser)

	return(
	    <div className="col s12 m4">
	      	<div className="card large z-depth-3 hoverable" key={plant.id}>
	        	<div className="card-image" onClick={()=>props.showOnePlant(plant.id)}>
	          		<img className="indexImage" src={plant.plant_img} alt="plant"/>
	          		<span className="card-title">{plant.name}</span>
	        	</div>
	        	<div className="card-content cardBody" onClick={()=>props.showOnePlant(plant.id)}>
	          		<p>{plant.description}</p>
	        	</div>
	        	<div className="card-action">
	        		<img 
	        			src={plant.owner.profile_img} 
	        			alt="" style={{width: '50px'}}
	        			className="circle avatarImg responsive-img" />
	          		<a href="#!" className="cyan-text text-darken-3">{plant.owner.username}</a>
	          		{
	          		likedUser.length < 1 
		          		?
		          		<React.Fragment>
			          		<p className="right ">{likes.length}</p>
			          		<i className="material-icons small right greyIcon" onClick={() => props.addLike(plant.id)}>favorite_border</i>
		          		</React.Fragment>
		          		:
		          		<React.Fragment>
			          		<p className="right greyIcon">{likes.length}</p>
			          		<i className="material-icons small right redIcon" onClick={()=>props.deleteLike(plant.id)}>favorite</i>
			        	</React.Fragment>	
	          		}
	          	
		          	{
		          	favedUser.length < 1
		          		?
		          		<React.Fragment>
		          			<i className="material-icons small right greyIcon" onClick={()=>props.addFav(plant.id)}>bookmark_border</i>
		          		</React.Fragment>
		          		:
		          		<React.Fragment>
		          			<i className="material-icons small right greyIcon" onClick={()=>props.deleteFav(plant.id)}>bookmark</i>
		          		</React.Fragment>
		          	}
	        	</div>
	    	</div>
		</div>
		)
	})

	return (
			<div className="row">
			{allPlants}
			</div>
	)
}