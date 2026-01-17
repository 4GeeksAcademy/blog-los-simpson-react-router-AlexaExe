export const initialStore = () => {
  return {

    characters: [],
    locations: [],
    favorites: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_characters':

      return {
        ...store,
        characters: action.payload
      };

    case 'get_locations':

      return {
        ...store,
        locations: action.payload
      };

    case 'add_to_favorites':
  
    const exists = store.favorites.find(fav => {
      // esta lógica hace que pueda coger los elementos no sólo por id, sino por tipo
      // y sí en caso se repite el id, se muestran ambos elementos...

      return fav.id === action.payload.id && fav.type === action.payload.type;
    });

    if (exists) {
        // Identifica si ya está en lista, no agrega nada
        return store;
    }

    // esta es para que si no estaba lo agrego
    return {
        ...store,
        favorites: [...store.favorites, action.payload]
    };

    case 'remove_from_favorites':

    return {
      ...store,
      favorites: store.favorites.filter(
        fav => fav.id !== action.payload
      )
    };

    default:
      throw Error('Unknown action.');
  }
}
