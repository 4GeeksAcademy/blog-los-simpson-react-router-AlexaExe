import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; //no entiendo esto... 


const ContactDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const { store } = useGlobalReducer();


    useEffect(() => {
        if (store.characters && store.characters.length > 0) {
            const found = store.characters.find(
                character => character.id === parseInt(id)
            );
            setCharacter(found);
        }
    }, [id, store.characters]);

    if (!character) {
        return (
            <p className="text-center mt-5">
                Cargando personaje...
            </p>
        );
    }

    return (
        <div className="container mt-5">
            <div className="card bg-dark text-light">
                <div className="row g-0">

                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img
                            src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`}
                            className="img-fluid rounded-start p-3"
                            alt={character.name}
                            style={{ maxHeight: "300px"}}
                        />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{character.name}</h2>

                            <p><strong>Edad:</strong> {character.age || "Desconocido"}</p>
                            <p><strong>Ocupación:</strong> {character.occupation || "Sin datos"}</p>
                            <p><strong>Cumpleaños:</strong> {character.birthdate || "No disponible"}</p>
                            <p><strong>Descripción:</strong> {character.phrases || "No proporcionada"}</p>
                            <p><strong>Género:</strong> {character.gender || "Sin clasificar"}</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );


};

export default ContactDetails;