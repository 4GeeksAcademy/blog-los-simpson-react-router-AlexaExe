import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


// este es un objeto sólo he copiado el nombre del array...
export const Locations = ({ locations }) => {
    const { store, dispatch } = useGlobalReducer()
    const handleClick = () => {
        
        dispatch({
        type:"add_to_favorites",
        payload: {
                ...locations , 
                type: "location" } //me traigo el locations inicial y filtro por tipo 
        }); 

    }

    return (
        <div className="my-2 border glass d-flex flex-column align-items-center " style={{ width: "18rem" }}>
            <div>
                <img src={`https://cdn.thesimpsonsapi.com/200${locations.image_path}`} alt={locations.name} />
            </div>

            <div className="d-block">

                <h3> Lugar: {locations.name}
                </h3>
                <p>Ciudad:  {locations.town ? locations.town : "desconocido"}</p>

                <div className="d-flex justify-content-around">
                <Link to={`/favorites/${locations.id}`}>
                <button type="button" class="btn btn-outline-danger" onClick={handleClick}
                
                > 💖

                </button>
                </Link>

                <Link to={`locations/${locations.id}`}>
                    <button className="btn btn-outline-success gap-2">Leer más</button>
                </Link>
                </div>

            </div>


        </div>
    );

};