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

      case "PERSONAL_INVITATION":
      return {
        ...state,
        isPersonalInvitation: action.payload
      }

      case 'FORM_CHANGE':
          return {
            ...state,
            form: {
              checked: state.form.checked,
              message: action.payload,
            }
          }

      case 'CONFIRMATION':
          return {
            ...state,
            form: {
              checked: action.payload,
              message: state.form.message,
            }
          }

      case 'CLEAR_FORM':
        return{
          ...state,
          form: {
            checked: false,
          }
        }

      case 'SUBMISSION':
        return{
          ...state,
          submission: action.payload
        }

    default :
    return state;
  }
}

export default reducer;