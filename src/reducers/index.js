const reducer = (state, action) => {

  switch(action.type){
  
    case "WINDOW_SIZE":
      return {
        ...state,
        windowSize: action.payload
      }

      case "HERO_SIZE":
      return {
        ...state,
        hero: action.payload
      }

      case "HOME_SIZE":
      return {
        ...state,
        home: action.payload
      }

      case "PHOTO_SIZE":
      return {
        ...state,
        photoContainer: action.payload
      }

      case "DISPLAY_PHOTO":
      return {
        ...state,
        currentPhoto: action.payload
      }

    default :
    return state;
  }
}

export default reducer;