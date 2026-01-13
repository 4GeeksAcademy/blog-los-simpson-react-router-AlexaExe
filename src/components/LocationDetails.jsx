import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; //no entiendo esto... 

// // Array → plural
// store.locations

// Elemento individual → singular
// // location

// Si uso:
// useState(null)
// 👉 SIEMPRE singular

const LocationDetails = () => {
    const { id } = useParams();
    const [location, setLocation] = useState(null);
    const { store } = useGlobalReducer();

    useEffect(() => {

        if (store.locations && store.locations.length > 0) {
            const found = store.locations.find(
                location => location.id === parseInt(id)
            );
            setLocation(found);
        }
    }, [id, store.locations]);

    if (!location) {
        return (
            <p className="text-center mt-5">
                Cargando ubicación...
            </p>
        );
    }

    return (

        <div className="container mt-5">
            <div className="card bg-dark text-light">
                <div className="card-body">
                    <img src={`https://cdn.thesimpsonsapi.com/200${location.image_path}`} 
                    className="img-fluid rounded p-3"
                    alt={location.name} 
                    style={{ maxHeight: "300px"}}/>

                    <h2 className="card-title"> <strong>Nombre: </strong>{location.name}</h2>
                    <p><strong>Ciudad:</strong> {location.town || "No disponible"}</p>
                    <p><strong>uso:</strong> {location.use || "No especificado"}</p>
                    
                </div>
            </div>
        </div>

    );

};


export default LocationDetails;