import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom";
import Favorites from "../pages/Favorites";



export const ContactCard = ({ contact }) => {
    const { store, dispatch } = useGlobalReducer()
    const handleClick = () => {
        dispatch({
            type: "add_to_favorites",
            payload: contact
        });
    };

    return (
        <div className="my-2 border glass d-flex flex-column align-items-center " style={{ width: "18rem" }}>
            <div>
                <img src={`https://cdn.thesimpsonsapi.com/200${contact.portrait_path}`} alt={contact.name} />
            </div>

            <div className="d-block">

                <h3>Personaje:
                    <Link to={`/characters/${contact.id}`}>
                        {contact.name}
                    </Link>
                </h3>

                <p>Edad: {contact.age ? contact.age : "desconocido"}</p>
                <p>Género: {contact.gender}</p>

                <Link to={`/favorites/${contact.id}`}>
                    <button type="button" class="btn btn-outline-danger" onClick={handleClick}

                    > 💖

                    </button>
                </Link>
            </div>


        </div>

    )






}