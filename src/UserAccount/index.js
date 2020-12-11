import React from 'react'


export default function ShowAccountInfo(props){
	const accountInfo = props.userData.map(user => {
		return(
			<div className="col s12 m7 offset-m4" style={{width: "30em"}} >
      			<div className="card-panel large grey lighten-5 z-depth-3" key={user.id}>
      				<h4 className="card-title">Contributor Profile Chip</h4>
    				<img className="responsive-img circle" alt="user" src={user.profile_img} />
        			<h5 className="card-title center">Username: {user.username}</h5>
        			<h5 className="card-title center">Name: {user.first_name} {user.last_name}</h5>
        			<h5 className="card-title center">Email: {user.email}</h5>
        			
      			</div>
      			<div className="center-align">
      				<button className="waves-effect waves-light btn-large" onClick={() => props.viewPlants()}>back</button>
      			</div>
    		</div>
		)
	})

	return (
		<div className="row center-align">
		{accountInfo}
		</div>
	)
}
