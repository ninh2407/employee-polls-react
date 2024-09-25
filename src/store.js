import { configureStore } from '@reduxjs/toolkit';
import authedUser from "./reducers/authedUser";
import listUsers from "./reducers/users";
import questions from "./reducers/questions";

export const store = configureStore({
    reducer: {
        listUsers,
        authedUser,
        questions,
    },
});