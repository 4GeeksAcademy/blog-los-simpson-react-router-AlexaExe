import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts, getLocations } from "../components/Services/APIServices.js";
import { ContactCard } from "../components/ContactCard.jsx";
import { Locations } from "../components/Locations.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		
		getContacts(dispatch),
		getLocations (dispatch)

	}, [])


	return (

		<div className="text-center mt-5">
			<div className="container">
				<div className="scroll-container">

					{

						store.characters && store.characters.map(characters => {

							return (
								<ContactCard contact={characters} key={characters.id} />

							)

						})
					}

					

				</div>
				<div className="scroll-container">
					{

						store.locations && store.locations.map(locations => { //si existe hace el map 

							return (
								<Locations locations={locations} key={locations.id} />

							)

						})
					}
				</div>
			</div>

		</div>
	);
}; 