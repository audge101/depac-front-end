import React, { Component } from 'react'
import LoginContainer from '../LoginContainer'
import ShowAllPlants from '../ShowAllPlants'
import ShowUserPlants from '../ShowUserPlants'
import PlantToShow from '../PlantToShow'
import NewPlant from '../NewPlant'
import EditPlant from '../EditPlant'
import ShowFavPlants from '../ShowFavPlants'
import SearchList from '../SearchList'
//import M from 'materialize-css'
import UserNavBar from '../UserNavBar'

export default class DepacContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			plants: [],
			likes: [],
			favorites: [],
			accountPlants: [],
			accountFavPlants: [],
			inputValue: '',
			idOfPlantToShow: -1,
			idOfPlantToEdit: -1,
			loggedIn: false,
			loggedInUser: null,
			profileImg: '',
			conditionalView: ''
		}
	}


	getPlants = async() => {
		try{
			const url = process.env.REACT_APP_API_URL + '/directory/plants/'
			const plantsResponse = await fetch(url, {
				credentials: 'include',
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const plantsJson = await plantsResponse.json()
			this.setState({
				plants: plantsJson.data.plants,
				likes: plantsJson.data.likes,
				favorites: plantsJson.data.favorites
			})

			console.log(this.state.likes)
			console.log(this.state.favorites)
			console.log(plantsJson)
		}catch(err) {
			console.log("Error getting posts data", err)
		}
	}


	getContributorPlants = async() => {
		try{
			const url = process.env.REACT_APP_API_URL + '/directory/plants/userposts/'
			const accountPlantsResponse = await fetch(url, {
				credentials: 'include'
			})
			const contributorPlantsJson = await accountPlantsResponse.json()
			this.setState({
				accountPlants: contributorPlantsJson.data
			})
			this.showUserPlants()
		}catch(err){
			console.log("Error getting account posts data", err)
		}	
	}



	getFavPlants = async() => {
		try{
			const url = process.env.REACT_APP_API_URL + '/directory/plants/userfavorites/'
			const accountFavoritesResponse = await fetch(url, {
				credentials: 'include'
			})
			const favoritesPlantsJson = await accountFavoritesResponse.json()
			this.setState({
				accountFavPlants: favoritesPlantsJson.data
			})
			this.showFavPlants()
		}catch(err){
			console.log("Error getting account posts data", err)
		}	
	}


	createPlant = async(plantToAdd) => {
		try{
			const url = process.env.REACT_APP_API_URL + '/directory/plants/'
			const createPlantResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(plantToAdd)
			})
			const createPlantJson = await createPlantResponse.json()
			console.log("This is createplantjson: ", createPlantJson)
			if(createPlantResponse.status === 201 || createPlantResponse.status === 200){
				this.setState({
					plants: [...this.state.plants, createPlantJson.data],
					conditionalView: ''
				})
			}
			this.getPlants()
		}catch(err) {
			console.log("Error adding plant: ", err)
		}
	}



	deletePlant = async(id) => {
		try{
			const url = process.env.REACT_APP_API_URL + '/directory/plants/' + id
			const deletePlantResponse = await fetch(url, {
				credentials: 'include',
				method: 'DELETE'
			})
			const deletePlantJson = await deletePlantResponse.json()
			console.log("Here is the deletePlantJson: ", deletePlantJson)
			if(deletePlantJson.status === 200 || deletePlantJson.status === 201) {
				this.setState({
					plants: this.state.plants.filter(plant => plant.id !== id),
				})
			}
		}catch(err) {
			console.log("There was an error deleting plant with id: ", id)
		}
		this.getContributorPlants()
	}



	editPlant = (idOfPlantToEdit) => {
		this.setState({
			idOfPlantToEdit: idOfPlantToEdit,
			conditionalView: 'editPlant'
		})
	}


	updatePlant = async(updatedPlant) => {
		try{
			const url = process.env.REACT_APP_API_URL + '/directory/plants/' + this.state.idOfPlantToEdit
			const updatePlantResponse = await fetch(url, {
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(updatedPlant),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const updatePlantJson = await updatePlantResponse.json()
			console.log("this is your updatePlantJson: ", updatePlantJson)
			this.setState({
				idOfPlantToEdit: -1
			})
		}catch(err) {
			console.log("error trying to edit plant with id: ", updatedPlant)
		}
		this.getContributorPlants()
	}

	openPlantForm = async() => {
		this.setState({
		conditionalView: 'openPlantForm'
		})
	}

	viewPlants = async() => {
		this.setState({
		conditionalView: ''
		})
	}



	showUserPlants = async() => {
		this.setState({
		conditionalView: 'accountPlants'
		})
	}

	showFavPlants = async() => {
		this.setState({
			conditionalView: 'favoritePlants'
		})
	}

	login = async(loginInfo) => {
		const url = process.env.REACT_APP_API_URL + '/directory/users/login/'
		try{
			const loginResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(loginInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const loginJson = await loginResponse.json()
			if(loginResponse.status === 200) {
				this.setState({
					loggedIn: true,
					loggedInUser: loginJson.data.username,
					profileImg: loginJson.data.profile_img
				})
				console.log(loginJson.data)
			}
		}catch(error) {
			console.log("Error trying to log you in: ", error)
		}
	}


	register = async(registerUser) => {
		const url = 'http://localhost:8000/directory/users/register/'
		try{
			const registerUserResponse = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(registerUser)
			})
		    const registerJson = await registerUserResponse.json()
		    console.log("registerJson", registerJson);

		     // hungry for more?
		     // when user tries to register a duplicate username
		     // display the "already registered" message from the server
		     // on the screen in the form in red or something
		     // and highlight the appropriate field

		     if(registerUserResponse.status === 201) {
		       this.setState({
		         loggedIn: true,
		         loggedInUser: registerJson.data.username
		       })
		     }
		  } catch(err) {
		    console.error("Error trying to register with API")
		    console.error(err)
		  }
		}


	logout = async() => {
		try{
			const url = 'http://localhost:8000/directory/users/logout/'
			const logoutResponse = await fetch(url, {
				method: 'GET',
      			credentials: 'include'
    		})
			const logoutJson = await logoutResponse.json()
			console.log("logoutJson", logoutJson);
    		if(logoutResponse.status === 200) {
      		this.setState({
        		loggedIn: false,
        		loggedInUser: '',
        		conditionalView: ''
			    })
			}

		} catch(error) {
			console.error("Error logging out")
			console.error(error)
			}
		}


	componentDidMount(){
		this.getPlants()
	}

/*
	showAllPlants = () => {
		this.setState({
			conditionalView: ''
		})
	}
*/
	showOnePlant = (idOfPlantToShow) => {
		console.log("Trying to show plant with id: ", idOfPlantToShow)
		this.setState({
			idOfPlantToShow: idOfPlantToShow,
			conditionalView: "showThisPlant"
		})
	}


	addLike = async(id) => {
		console.log(id)
		try{
			const url = process.env.REACT_APP_API_URL + '/directory/plants/like/' + id
			const likePlantResponse = await fetch(url, {
				method: 'POST',
				credentials: 'include',
			})
			const likePlantJson = await likePlantResponse.json()
			console.log("Here is the likePlantJson: ", likePlantJson)
			if(likePlantJson.status === 200 || likePlantJson.status === 201) {
				this.setState({
					likes: [...this.state.likes, likePlantJson.data]
				})
			}
			this.getPlants()
		}catch(err) {
			console.log("There was an error liking this plant: ", err)
		}
	}


	deleteLike = async (id) => {
        console.log(id)
        try {
            const loggedInUser = this.state.loggedInUser
            const url = process.env.REACT_APP_API_URL + "/directory/plants/delete/" + id
            const deleteLikePlantResponse = await fetch(url, {
                method: "DELETE",
                credentials: "include",
            })
            const deleteLikePlantJson = await deleteLikePlantResponse.json()
            console.log("Here is the deleteLikePlantJson: ", deleteLikePlantJson)
            if(deleteLikePlantJson.status === 200 || deleteLikePlantJson.status === 201) {
                this.setState({
                    likes: this.state.likes.filter(like => like.username.user !== loggedInUser)
                })
            }
            this.getPlants()
        } catch(err) {
            console.log("There was an error deleting this like", err)
        }
    }


	addFav = async(id) => {
		console.log(id)
		try{
			const url = process.env.REACT_APP_API_URL + '/directory/plants/favorite/' + id
			const favPlantResponse = await fetch(url, {
				method: 'POST',
				credentials: 'include',
			})
			const favPlantJson = await favPlantResponse.json()
			console.log("Here is the favPlantJson: ", favPlantJson)
			if(favPlantJson.status === 200 || favPlantJson.status === 201) {
				this.setState({
					favorites: [...this.state.favorites, favPlantJson.data]
				})
			}
			this.getPlants()
		}catch(err) {
			console.log("There was an error favoriting this plant: ", err)
		}
	}

	deleteFav = async (id) => {
        console.log(id)
        try {
            const loggedInUser = this.state.loggedInUser
            const url = process.env.REACT_APP_API_URL + "/directory/plants/deletefav/" + id
            const deleteFavPlantResponse = await fetch(url, {
                method: "DELETE",
                credentials: "include",
            })
            const deleteFavPlantJson = await deleteFavPlantResponse.json()
            console.log("Here is the deleteFavPlantJson: ", deleteFavPlantJson)
            if(deleteFavPlantJson.status === 200 || deleteFavPlantJson.status === 201) {
                this.setState({
                    favorites: this.state.favorites.filter(favorite => favorite.username.user !== loggedInUser)
                })
            }
            this.getPlants()
        } catch(err) {
            console.log("There was an error deleting this like", err)
        }
    }

    plantFilterOnChange = (e) => {
    	console.log("hey from onChange search!: ", e.target.value)
    	this.setState({
    		inputValue: e.target.value
    	})
    }
/*

	closeShowPlant = () => {
		this.setState({
			idOfPlantToShow: -1,
			conditionalView: ''
		})
	}
*/



	closeEditPlant = () => {
		this.setState({
			idOfPlantToEdit: -1
		})
	}


	render(){

		const filteredPlants =
			this.state.plants.filter(plant =>{
				return plant.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
			})
		return(
			<React.Fragment>
				<UserNavBar
					loggedIn={this.state.loggedIn}
					loggedInUser={this.state.loggedInUser}
					createPlant={this.createPlant} 
					profileImg={this.state.profileImg}
					logout={this.logout}
					openPlantForm={this.openPlantForm}
					viewPlants={this.viewPlants}
					getContributorPlants={this.getContributorPlants}
					getFavPlants={this.getFavPlants}
					inputValue={this.state.inputValue}
					plantFilterOnChange={this.plantFilterOnChange} />


				<h2 className="center dirName">the directory of extraordinary plants and cacti</h2>
				<div className="indexContainer">
				{
					this.state.conditionalView === 'openPlantForm' &&
						<React.Fragment>

			    			<NewPlant
								loggedInUser={this.state.loggedInUser}
								createPlant={this.createPlant} 
								viewPlants={this.viewPlants}/>
		    			</React.Fragment>
				}

				{
					this.state.conditionalView === '' && this.state.loggedIn === true &&
						<React.Fragment>
						<h5 className="center">Click Anywhere on a Post to View More</h5> 
							<ShowAllPlants
								plants={this.state.plants}
								loggedInUser={this.state.loggedInUser} 
								likes={this.state.likes} 
								addLike={this.addLike}
								deleteLike={this.deleteLike}
								showOnePlant={this.showOnePlant}
								favorites={this.state.favorites}
								addFav={this.addFav}
								deleteFav={this.deleteFav}/>
						</React.Fragment>
				}

				{
					this.state.conditionalView === 'accountPlants' && this.state.loggedIn === true &&
					<React.Fragment>
						<h4>Account Submission Dashboard</h4>
						<ShowUserPlants
							accountPlants={this.state.accountPlants}
							getContributorPlants={this.getContributorPlants}
							deletePlant={this.deletePlant} 
							editPlant={this.editPlant} 
							showOnePlant={this.showOnePlant} 
							accountFavPlants={this.state.accountFavPlants}
							loggedInUser={this.state.loggedInUser}/>
					</React.Fragment>
				}

				{
					this.state.idOfPlantToEdit !== -1 && this.state.loggedIn === true &&
					<React.Fragment>
						<EditPlant
							key={this.state.idOfPlantToEdit}
							plantToEdit={this.state.plants.find((plant) => plant.id === this.state.idOfPlantToEdit)}
							deletePlant={this.deletePlant} 
							updatePlant={this.updatePlant} 
							showUserPlants={this.showUserPlants}/>
					</React.Fragment>
				}

				{
					this.state.conditionalView === 'showThisPlant' && this.state.loggedIn === true &&
					<React.Fragment>
						<PlantToShow
							key={this.state.idOfPlantToShow}
							plantToShow={this.state.plants.find((plant) => plant.id === this.state.idOfPlantToShow)}/>
					</React.Fragment>
				}

				{
					this.state.conditionalView === 'favoritePlants' && this.state.loggedIn === true &&
					<React.Fragment>
						<ShowFavPlants
							accountFavPlants={this.state.accountFavPlants}
							getFavPlants={this.getFavPlants} 
							showOnePlant={this.showOnePlant}
							loggedInUser={this.state.loggedInUser} />
					</React.Fragment>

				}

				{
					this.state.conditionalView === 'searchPlants' && this.state.loggedIn === true &&
					<React.Fragment>
						<SearchList 
							plants={this.sortPlants(filteredPlants)}
							plantFilterOnChange={this.plantFilterOnChange}
							inputValue={this.state.inputValue} />
					</React.Fragment>
				}

				{
					this.state.loggedIn === false &&
						<React.Fragment>
							<div>
								<h2 className="welcome">We are a user-driven and collaborative interactive database of medicinal and poisonous plants and the various ways that humans use them. Sign up or log in to search our database or become a contributor!
								</h2>   
			    			</div>
							<LoginContainer
								login={this.login}
								register={this.register} />
						</React.Fragment>
				}
				</div>
			</React.Fragment>
		)
	}
}