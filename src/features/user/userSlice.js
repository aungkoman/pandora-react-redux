import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginApi, registerApi } from './userAPI';

// ဒါက Initial State
const initialState = {
  user: {
    "id": 0,
    "uid": null,
    "name": "admin",
    "phone": null,
    "city": null,
    "age": null,
    "gender": null,
    "photo_url": "https://i.ibb.co/tZd24nZ/fotor-ai-2023053095036.png",
    "email": "admin@email.com",
    "email_verified_at": null,
    "role_id": 2,
    "created_at": "2023-09-27T02:37:44.000000Z",
    "updated_at": "2023-09-27T02:37:44.000000Z",
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9"
  },
  status: 'idle', // idle, loading, error , succeeded
  error: null,
  errors : {}, // for user register form validation errors
};

export const loginAsync = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    console.log("loginAsync started");
    // ဒီ function စခေါ်တာနဲ့ pending action ကို dispatch လုပ်မယ်။
    // TODO: try catch this future 
    // ဒီမှာ မ catch ဘူးဆိုတာကဘာလဲ?
    // exception တက်ခဲ့ရင် error action ကို dispatch လုပ်မှာလား? ဒါလည်း မပြောတက်။
    // အခုလောလောဆယ် UI Component ကနေ Login ဝင်ချင်ရင် လုပ်စရာလိုတာက ဒီ​ Thunk Creator ကို Dispatch လုပ်ရုံပဲ
    // ဒါမျိုး dispatch(loginAsync({email, password}));

    const response = await loginApi({ email, password });
    console.log("loginAsync response");
    console.log(response);
    // The value we return becomes the `fulfilled` action payload
    // return ပြန်လိုက်တာနဲ့ ဒီ Thunk က fulfilled action ကို ထုတ်ပေး (dispatch) မယ်။
    return response.data;
  }
);


export const registerThunk = createAsyncThunk(
  'user/register',
  async ({ name, email, password, confirm_password }) => {
    const response = await registerApi({ name, email, password, confirm_password });
    console.log(response);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logout: (state) => {
      return initialState;
    },
    setErrors: (state, action)  => {
      state.errors = action.payload ;
      //console.log("userSlice->setErrors");
      //console.log(localErrors);
    },
    setStatusIdle: (state) => {
      state.status = "idle";
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        console.log("loginAsync.pending");
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log("loginAsync.fulfilled");
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        console.log("loginAsync.rejected");
        state.status = 'error';
        state.error = action.error.message; // Store the error message
      })

      .addCase(registerThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message; // Store the error message
      });
  },
});

// actions

export const { logout, setErrors, setStatusIdle, increment, decrement, incrementByAmount } = userSlice.actions;
// selectors
export const loginStatus = (state) => state.user.status;
export const loginError = (state) => state.user.error;
export const loggedInUser = (state) => state.user.user;
export const selectUserRegistrationValidationError = (state) => state.user.errors;

// export reducer
// ဒါက combined reducer က ယူသုံးဖို့ ထင်ရဲ့။
// ဒါက Gloal State ထဲက ယူပြရမှာ။ 
// Combined Reducer ခေါ်မလားပဲ။
export default userSlice.reducer;