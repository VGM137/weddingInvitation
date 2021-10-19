export const windowResize = (payload) => ({
  type: "WINDOW_SIZE",
  payload 
 });

 export const heroSize = (payload) => ({
  type: "HERO_SIZE",
  payload 
 });

 export const homeSize = (payload) => ({
  type: "HOME_SIZE",
  payload 
 });

 export const photoContainerSize = (payload) => ({
  type: "PHOTO_SIZE",
  payload 
 });

 export const displayPhoto = (payload) => ({
  type: "DISPLAY_PHOTO",
  payload 
 });

 export const isPersonalInvitation = (payload) => ({
  type: "PERSONAL_INVITATION",
  payload 
 });

 export const formChange = (payload) => ({
  type: 'FORM_CHANGE',
  payload,
});

export const confirmation = (payload) => ({
  type: 'CONFIRMATION',
  payload,
});

export const clearForm = (payload) => ({
  type: 'CLEAR_FORM',
  payload,
});

export const handleSubmission = (payload) => ({
  type: 'SUBMISSION',
  payload,
});