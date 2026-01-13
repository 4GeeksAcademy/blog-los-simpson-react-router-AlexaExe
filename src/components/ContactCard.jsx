import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom";



export const ContactCard = ({ contact }) => {
    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="my-2 border glass d-flex flex-column align-items-center " style={{ width: "18rem" }}>
            <div>
                <img src={`https://cdn.thesimpsonsapi.com/200${contact.portrait_path}`} alt={contact.name} />
            </div>

            <div>

                <h3>Personaje: 
                    <Link to={`/characters/${contact.id}`}>
                        {contact.name}
                    </Link>
                </h3>

                <p>Edad: {contact.age ? contact.age : "desconocido"}</p>
                <p>Género: {contact.gender}</p>
                <p>Ocupación:  {contact.occupation}</p>

            </div>


        </div>

    )






}