import React from 'react'


export default function SearchList(props) {
	const filteredPlants = this.state.plants.filter(plant => {
		return plant.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
	})

	return(
		<React.Fragment>
			{filteredPlants}
		</React.Fragment>
	)
}