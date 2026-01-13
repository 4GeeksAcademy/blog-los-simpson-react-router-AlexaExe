export const initialStore = () => {
  return {

    characters: null,
    locations: null,
  }
}

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

        default:
      throw Error('Unknown action.');
      }
  }
