export const RECEIVE_LIST_USERS = "RECEIVE_LIST_USERS";

export function receiveListUsers(listUsers) {
  return {
    type: RECEIVE_LIST_USERS,
    listUsers,
  };
}