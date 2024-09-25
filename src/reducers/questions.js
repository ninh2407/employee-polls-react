import { RECEIVE_QUESTIONS, SAVE_QUESTION } from "../actions/questions"

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case SAVE_QUESTION:
                return {
                    ...state,
                    [action.questions.id] : action.questions
                };
        default:
            return state;
    }
}