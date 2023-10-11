import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { articleSelectApi, articleDetailSelectApi } from './articleAPI';

// ဒါက Initial State
const initialState = {
    articles: [],
    status: 'idle', // idle, loading, error , succeded
    error: null,
    page : 1,
    article : {},
    article_status : 'idle',
    article_error : null
};

export const selectArticlesAsyncThunk = createAsyncThunk(
    'articles/select',
    async ({ filter, page, accessToken }) => {
        const response = await articleSelectApi({ filter, page, accessToken });
        return response.data;
    }
);


export const selectArticleDetailAsyncThunk = createAsyncThunk(
    'articles/detail',
    async ({ id, accessToken }) => {
        const response = await articleDetailSelectApi({ id, accessToken });
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
        refreshPage: (state) => {
            state.page = initialState.page;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(selectArticlesAsyncThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(selectArticlesAsyncThunk.fulfilled, (state, action) => {
                state.status = 'succeded';
                // increase page 
                state.page++;
                state.articles.push(...action.payload);
            })
            .addCase(selectArticlesAsyncThunk.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message; // Store the error message
            })
            // detail api listener
            .addCase(selectArticleDetailAsyncThunk.pending, (state) => {
                state.article_status = 'loading';
            })
            .addCase(selectArticleDetailAsyncThunk.fulfilled, (state, action) => {
                state.article_status = 'succeeded';
                state.article = action.payload;
            })
            .addCase(selectArticleDetailAsyncThunk.rejected, (state, action) => {
                state.article_status = 'error';
                state.error = action.error.message; // Store the error message
            });
    },
});

// actions
export const { reset, refreshPage } = articleSlice.actions;

// selectors
// article list
export const selectArticles = (state) => state.articles.articles;
export const selectArticlesStatus = (state) => state.articles.status;
export const selectArticlesError = (state) => state.articles.error;
export const selectArticlesPage = (state) => state.articles.page;
// article detail
export const selectArticleDetail = (state) => state.articles.article;
export const selectArticleDetailStatus = (state) => state.articles.article_status;
export const selectArticleDetailError = (state) => state.articles.article_error;


// ဒါက Gloal State ထဲက ယူပြရမှာ။ 
// Combined Reducer ခေါ်မလားပဲ။
// export reducer
// ဒါက combined reducer က ယူသုံးဖို့ ထင်ရဲ့။
export default articleSlice.reducer;