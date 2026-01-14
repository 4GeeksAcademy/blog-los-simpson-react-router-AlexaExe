export const getContacts = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters`)
    const data = await response.json()
    console.log("data de la API", data);
    dispatch({type: 'get_characters', payload: data.results}); 
    // el console.log fue sólo para confirmar que estaba cogiendo la API
     
    }
    

export const getLocations = async (dispatch) => {
const response = await fetch(`https://thesimpsonsapi.com/api/locations`)
const data = await response.json()
console.log(data);
dispatch ({type: 'get_locations', payload: data.results})
   // el console.log fue sólo para confirmar que estaba cogiendo la API  
}

