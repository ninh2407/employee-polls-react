import { RECEIVE_LIST_USERS } from "../actions/users"

export default function listUsers(state = {}, action) {
    switch (action.type) {
        case RECEIVE_LIST_USERS:
            return {
                ...action.listUsers
            };
        default:
            return state;
    }
}