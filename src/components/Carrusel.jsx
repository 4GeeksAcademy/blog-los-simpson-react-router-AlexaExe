import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; //importo useReducer
import { ContactCard } from "./ContactCard"; //importo el componente individual de cada card

export const Carrusel = () => {

    const { store } = useGlobalReducer(); //hago esto para acceder al store

    return (
        <div className="Carrusel">



            <div className="container">
                <div className="scroll-container">
                    <div className="d-flex justify-content-around flex-wrap">

                        {/*lo cambié a un scroll horizontal como pedia la academia */}

                        {store.characters.map((character) => (

                            <ContactCard contact={character} key={character.id} />
                        ))}

                        {store.locations.map((character) => (

                            <ContactCard contact={character} key={character.id} />
                        ))}
                    </div>
                </div>

                {/* // usé "character" como nombre para representar cada personaje del array
                         */}

            </div>
        </div>

    );
};