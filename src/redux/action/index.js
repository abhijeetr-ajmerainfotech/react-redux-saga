import { GET_USERS_REQUESTED, REMOVE_USERS_SUCCESS } from "../types";

export function getUsers() {
  return {
    type: GET_USERS_REQUESTED,
  };
}
export function removeUsers(id) {
  return {
    type: REMOVE_USERS_SUCCESS,
    data: id
  };
}