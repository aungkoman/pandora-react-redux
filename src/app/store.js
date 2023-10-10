import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import articleSlice from '../features/articles/articleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    articles: articleSlice
  },
});
