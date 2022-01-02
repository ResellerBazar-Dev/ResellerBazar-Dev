import instance from "../api";
import {
  CONTACT_US_ENDPOINT,
  GET_CONTACT_US_ENDPOINT,
  EDIT_PROFILE_IMAGE_ENDPOINT,
  EDIT_PROFILE_ENDPOINT,
  GET_ALL_USERS_ENDPOINT,
  UPDATE_USER_STATUS_ENDPOINT,
  HELP_ENDPOINT,
  GET_HELP_ENDPOINT,
} from "../ApiEndpoints/ApiEndpoint";

export const ContactUsAction = (message) => {
  return instance.post(CONTACT_US_ENDPOINT, { message });
};

export const GetContactUsAction = () => {
  return instance.get(GET_CONTACT_US_ENDPOINT);
};

export const EditProfileImageAction = (imageData) => {
  return instance.post(EDIT_PROFILE_IMAGE_ENDPOINT, imageData);
};

export const EditProfileAction = (newUserData) => {
  return instance.post(EDIT_PROFILE_ENDPOINT, newUserData);
};

export const GetAllUsersAction = () => {
  return instance.get(GET_ALL_USERS_ENDPOINT);
};

export const UpdateUserStatusAction = (status_type, user_id) => {
  return instance.get(
    `${UPDATE_USER_STATUS_ENDPOINT}/${status_type}/${user_id}`
  );
};

export const helpAction = (message) => {
  return instance.post(HELP_ENDPOINT, { message });
};

export const getHelpAction = () => {
  return instance.get(GET_HELP_ENDPOINT);
};
