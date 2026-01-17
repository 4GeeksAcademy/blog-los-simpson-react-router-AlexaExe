import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const { store, dispatch } = useGlobalReducer();


    useEffect(() => {

        // Lee el estado global store.favorites
        // cada vez que cambie el store.favorites actualizar tu favorites

        setFavorites(store.favorites || []);

    }, [store.favorites]);

    // si está vacío o null me muestra cargando favoritos
    // sí se hizo clic en el botón se muestran las tarjetas...
    if (!favorites || favorites.length === 0) {
        return (
            <p className="text-center mt-5">
                Cargando favoritos...
            </p>
        );
    }

    return (
        <div className="container mt-5">
            <div text-center mt-4>
                <h1 className="text-black mb-4">Favoritos</h1>

            </div>
            {favorites.map((fav) => {

                const isCharacter = fav.portrait_path; //representa al personaje
                const isLocation = fav.image_path;    //location

                return (

                    <div className="card mb-3 bg-dark text-light" key={fav.id}>
                        <div className="row g-0">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">

                                {/* imagen de cada elemento */}
                                <img
                                    src={isCharacter ? ` https://cdn.thesimpsonsapi.com/200${fav.portrait_path} ` : ` https://cdn.thesimpsonsapi.com/200${fav.image_path} ` }
                                    className="img-fluid rounded-start p-3"
                                    alt={fav.name}
                                    style={{ maxHeight: "300px" }}
                                />

                            </div>

                            {/* información de cada card */}

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{fav.name}</h5>

                                    {isCharacter && (

                                        <>
                                            <p><strong>Edad:</strong> {fav.age || "Desconocido"}</p>
                                            <p><strong>Ocupación:</strong> {fav.occupation || "Sin datos"}</p>
                                        </>

                                    )}

                                    {isLocation && (

                                        <>
                                            <p><strong>Ciudad:</strong> {fav.city || "Springfield"}</p>
                                            <p><strong>Tipo:</strong> {fav.occupation || "Lugar"}</p>
                                        </>

                                    )}

                                    {/* botón para eliminar favoritos */}
                                    <button
                                        className="btn btn-danger mt-2"
                                        onClick={() =>
                                            dispatch({
                                                type: "remove_from_favorites",
                                                payload: fav.id
                                            })
                                        }
                                    // el botón está enlazado al useEffect para que funcione
                                    >
                                        🗑️ Quitar de favoritos
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>

                );
            })}
        </div>

    );

};

export default Favorites;