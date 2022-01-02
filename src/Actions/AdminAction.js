import instance from "../api";
import {
  GET_ADMIN_DAHSBOARD_DETAILS_ENDPOINT,
  GET_ALL_HELP_MESSAGES_ENDPOINT,
} from "../ApiEndpoints/ApiEndpoint";

export const GetAdminDashboardDataAction = () => {
  return instance.get(GET_ADMIN_DAHSBOARD_DETAILS_ENDPOINT);
};

export const GetAllHelpMessagesAction = () => {
  return instance.get(GET_ALL_HELP_MESSAGES_ENDPOINT);
};
