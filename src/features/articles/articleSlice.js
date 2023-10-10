import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { articleSelectApi } from './articleAPI';

// ဒါက Initial State
const initialState = {
    articles: [],
    status: 'idle', // idle, loading, error , succeeded
    error: null
};

export const selectArticlesAsyncThunk = createAsyncThunk(
    'articles/select',
    async ({ filter, page, accessToken }) => {
        const response = await articleSelectApi({ filter, page, accessToken });
        return response.data;
    }
);

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        reset: (state) => {
            return initialState;
        },
        reset: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(selectArticlesAsyncThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(selectArticlesAsyncThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles.push(...action.payload);
            })
            .addCase(selectArticlesAsyncThunk.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message; // Store the error message
            });
    },
});

// actions
export const { reset } = articleSlice.actions;

// selectors
export const selectArticles = (state) => state.articles.articles;


// ဒါက Gloal State ထဲက ယူပြရမှာ။ 
// Combined Reducer ခေါ်မလားပဲ။
// export reducer
// ဒါက combined reducer က ယူသုံးဖို့ ထင်ရဲ့။
export default articleSlice.reducer;