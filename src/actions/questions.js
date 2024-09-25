import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { handleInitData } from "./init";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(questions) {
  return {
    type: SAVE_QUESTION,
    questions,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(question)
      .then((questions) => dispatch(addQuestion(questions)))
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestionAnswer(ans) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer(ans)
      .then(() => dispatch(handleInitData()))
      .then(() => dispatch(hideLoading()));
  };
}