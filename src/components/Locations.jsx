import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


// este es un objeto sólo he copiado el nombre del array...
export const Locations = ({ locations }) => {
    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="my-2 border glass d-flex flex-column align-items-center " style={{ width: "18rem" }}>
            <div>
                <img src={`https://cdn.thesimpsonsapi.com/200${locations.image_path}`} alt={locations.name} />
            </div>

            <div className="d-block">

                <h3> Lugar:
                    <Link to={`locations/${locations.id}`}>
                        {locations.name}
                    </Link>
                </h3>
                <p>Ciudad:  {locations.town}</p>
                <button type="button" class="btn btn-outline-danger" onClick={() => handleFavorite (contact.id)}
                     > 💖
                
                </button>

            </div>


        </div>
    );

};