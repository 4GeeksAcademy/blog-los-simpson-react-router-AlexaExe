import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; //no entiendo esto... 


const ContactDetails = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const { store, dispatch } = useGlobalReducer();


    useEffect(() => {
        

    }, []);

    return (
        <div>
            <h1>Detalles del personaje</h1>
            <p>Pruebas</p>
        </div>
    );


};

export default ContactDetails;