import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom";
import Favorites from "../pages/Favorites";


// este es un objeto sólo he copiado el nombre del array...
export const ContactCard = ({ contact }) => {
    const { store, dispatch } = useGlobalReducer()
    const handleClick = () => {
       
        dispatch({
            type: "add_to_favorites",
            payload: {
                ...contact , 
                type:"character" } //me traigo el contact inicial y filtro por tipo
        });
    };


    return (
        <div className="my-2 border glass d-flex flex-column align-items-center " style={{ width: "18rem" }}>
            <div>
                <img src={`https://cdn.thesimpsonsapi.com/200${contact.portrait_path}`} alt={contact.name} />
            </div>

            <div className="d-block">

                <h3>Personaje:{contact.name}
                </h3>

                <p>Edad: {contact.age ? contact.age : "desconocido"}</p>
                <p>Género: {contact.gender}</p>

                <div className="d-flex justify-content-around">

                <Link to={`/favorites/${contact.id}`}>
                    <button type="button" class="btn btn-outline-danger" onClick={handleClick}

                    > 💖

                    </button>
                </Link>

                <Link to={`/characters/${contact.id}`}>
                    <button className="btn btn-outline-success gap-2">Leer más</button>
                </Link>
                </div>
            </div>


        </div>

    );


};