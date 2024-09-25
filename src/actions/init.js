
import { receiveListUsers } from "./users"
import { receiveQuestions } from "./questions";
import { getInitData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitData().then(({users, questions}) => {
            dispatch(receiveListUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        })
    }
}