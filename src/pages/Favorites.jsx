import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; 

const Favorites = () => {
    
    const { store } = useGlobalReducer();

    if (!store.favorites || store.favorites.length === 0){

        
        return (
            <div>
       <h1>Cargando favoritos... </h1>
       
    </div>
    );
}
        return(
            <div>
                <h1>Favoritos</h1>
                {store.favorites.map((fav,index) => (
                <div key={index}>
                <p>{fav.name}

                </p>
                </div>
                ))              
                }
            </div>
        );

};

export default Favorites;