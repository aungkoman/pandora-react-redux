import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { articleSelectApi, articleDetailSelectApi, voteCreateApi } from './articleAPI';

// ဒါက Initial State
const initialState = {
    articles: [],
    status: 'idle', // idle, loading, error , succeded
    error: null,
    page : 1,
    should_load : false,
    prev_page : 0,
    article : {},
    article_status : 'idle',
    article_error : null
};

// Async Thunks
export const selectArticlesAsyncThunk = createAsyncThunk(
    'articles/select',
    async ({ filter, page2, accessToken }, { getState }) => { // <-- destructure getState method
        const state = getState(); // <-- invoke and access state object
        // console.log("selectArticlesAsyncThunk getState for pages");
        // console.log(state.articles.page);
        // console.log(state.articles.prev_page);
        // console.log(state.articles.status);
        if(state.articles.prev_page != state.articles.page){
            // console.log("need to throw");
            throw new Error('Whoops! still loading... ');
        }

        let page = state.articles.page;
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

export const voteCreateAsyncThunk = createAsyncThunk(
    'votes/create',
    async ({ article_id, vote_type, accessToken }) => {
        const response = await voteCreateApi({ article_id, vote_type, accessToken });
        return response.data;
    }
);

// Slice
export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        reset: (state) => {
            return initialState;
        },
        refreshPage: (state) => {
            state.page = initialState.page;
        },
        upVoteLocal: (state, action) => {
            // we need article id
            console.log("articleSlice->upVoteLocal");
            console.log(action.payload);
            let article_id = action.payload.article_id;
            // detail article
            console.log("original state");
            console.log(JSON.parse(JSON.stringify(state.article.user_vote)));
            console.log(JSON.parse(JSON.stringify(state.article.up_vote)));
            if(state.article.id == article_id){
                // need to check already vote or note
                // normal way ( new vote )
                if(state.article.user_vote == -1 ){
                    state.article.user_vote = 1;
                    state.article.up_vote++;
                    console.log("new vote");
                    console.log(JSON.parse(JSON.stringify(state.article.user_vote)));
                    console.log(JSON.parse(JSON.stringify(state.article.up_vote)));
                }
                // already down  vote
                else if(state.article.user_vote == 0){
                    state.article.user_vote = 1;
                    state.article.up_vote++;
                    state.article.down_vote--;
                    console.log("move vote");
                    console.log(JSON.parse(JSON.stringify(state.article.user_vote)));
                    console.log(JSON.parse(JSON.stringify(state.article.up_vote)));
                }
                // if already up vote
                else{
                    // don't need to do anything
                    console.log("already upvoted, remove upvote");
                    state.article.user_vote = -1;
                    state.article.up_vote--;
                    console.log("remove vote");
                    console.log(JSON.parse(JSON.stringify(state.article.user_vote)));
                    console.log(JSON.parse(JSON.stringify(state.article.up_vote)));
                }
                
            }
            // article repo
            /*
            for(let i=0; i < state.articles.length; i++){
                if(state.articles[i].id == article_id){
                    state.article.user_vote = 1;
                    state.article.up_vote++;
                }
            }
            */
        },
        downVoteLocal: (state, action) => {
            // we need article id
            console.log("articleSlice->downVoteLocal");
            console.log(action.payload);
            let article_id = action.payload.article_id;
            // detail article
            if(state.article.id == article_id){
                // need to check already vote or note
                // normal way ( new vote ), downvote
                if(state.article.user_vote == -1 ){
                    state.article.user_vote = 0;
                    state.article.down_vote++;
                }
                // already down  voted, so remove
                else if(state.article.user_vote == 0){
                    state.article.user_vote = -1;
                    state.article.down_vote--;
                }
                // if already up vote, remove upvote and add downvote
                else{
                    // don't need to do anything
                    console.log("already upvoted, remove upvote and increase downvote");
                    state.article.user_vote = 0;
                    state.article.down_vote++;
                    state.article.up_vote--;
                    console.log("new vote");
                    console.log(JSON.parse(JSON.stringify(state.article.user_vote)));
                    console.log(JSON.parse(JSON.stringify(state.article.up_vote)));
                    console.log(JSON.parse(JSON.stringify(state.article.down_vote)));

                }
                
            }
            // article repo
            /*
            for(let i=0; i < state.articles.length; i++){
                if(state.articles[i].id == article_id){
                    state.articles[i].user_vote = 1;
                    state.articles[i].up_vote++;
                }
            }
            */
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(selectArticlesAsyncThunk.pending, (state) => {
                state.status = 'loading';
                state.prev_page++; 
            })
            .addCase(selectArticlesAsyncThunk.fulfilled, (state, action) => {
                state.status = 'succeded';
                if(action.payload.length == 0){
                    // do nothing 
                }
                else{
                    // increase page 
                    state.page++;
                    console.log("state.page");
                    console.log(state.page);
                    state.articles.push(...action.payload);
                }
                
            })
            .addCase(selectArticlesAsyncThunk.rejected, (state, action) => {
                state.prev_page--; 
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
            })
            // vote create api listener
            .addCase(voteCreateAsyncThunk.pending, (state) => {
                //state.article_status = 'loading';
                console.log("voteCreateAsyncThunk.pending");
            })
            .addCase(voteCreateAsyncThunk.fulfilled, (state, action) => {
                //state.article_status = 'succeeded';
                //state.article = action.payload;
                console.log("voteCreateAsyncThunk.fulfilled");
            })
            .addCase(voteCreateAsyncThunk.rejected, (state, action) => {
                //state.article_status = 'error';
                //state.error = action.error.message; // Store the error message
                console.log("voteCreateAsyncThunk.rejected");
            });
    },
});



// actions
export const { reset, refreshPage, upVoteLocal, downVoteLocal } = articleSlice.actions;

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