# React Redux Toolkit CODELAB

## 2023-10-13 User Story and Backlogs

User Register စလုပ်မယ်။
validation လည်း လိုမယ်။


### User Story for Register

** Story **

As a new user can register,
I want to create a new account on the platform,
so that I can access full range of services and features offered.

** Acceptance Criteria **

- Register Page ကို ရောက်တဲ့အခါ Regsiter လုပ်ဖို့အတွက် အောက်က အချက်တွေ တောင်းမယ်။
  - display name
  - email
  - password
  - confirm password
- Register လုပ်ဖို့ ဖြည့်လိုက်တဲ့ အချက်အလက် က မစုံရင် မစုံတဲ့အကြောင်း feedback ပြရမယ်။
- Authenticated လုပ်နေစဉ် အတောအတွင်းမှာ Loading Indicator ပြရမယ်။
- Email က စနစ်ထဲမှ ာရှိပြီးသားဆိုရင် ပြောင်းဖို့ပြောရမယ်။
- အောင်မြင်တယ်ဆိုရင် နောက် page တစ်ခုကို အလိုအလျောက် ပြောင်းသွားရမယ်။



**Definition of Done**:

- The registration process should be tested for functionality, security, and user-friendliness.
- Relevant error messages and notifications are displayed when needed.
- The email verification system should work reliably.
- All user stories related to registration should be implemented.
- The code is reviewed and approved by a team member.
- Documentation is updated to reflect the new registration process.

It's all about thinking, foucs.



### Local Validation ဘယ်လို လုပ်လိုက်လဲ?

- Internal State မှာ Form Data တစ်ခုလုံးကို သိမ်းထားပြီး input onChange မှာ သက်ဆိုင်ရာ data ကို setState လုပ်ပေးထားတယ်။
- onSubmit မှာ Field တစ်ခုချင်းစီကို စစ်ပြီး error object မှာ အကြောင်းပြချက်တွေ ရေးပေးထားတယ်။
- error object မှာ ရှင်းရင် api call ခေါ်ဖို့ သက်ဆိုင်ရာ Thunk Action ကို Dispatch လုပ်
- မရှင်းရင် setState(error) လုပ်

ဒါက Local အတွက် အတော်လေးအဆင်ပြေတဲ့ ကိစ္စ။




## 2023-10-11 Wed

- [ ] Register API Integration
- [ ] User Profile UI 
- [ ] Update user profile UI, API
- [ ] New Post UI, API
- [ ] Edit Post UI, API
- [ ] Context Menu for report, edit , delete article
- [ ] Up Vote, Down Vote and Comment display UI in home page and detail
- [ ] Create comment ui 
- [ ] Edit comment ui
- [ ] Delete comment ui
- [ ] Context menu for report , edit and delete comment 


- [ ] Deployment pipeline from cloudflare 

## 2023-10-10 Tue

Promise နဲ့ AsyncThunk အကြောင်း ရိပ်ဖမ်းသံဖမ်း နားလည်။

Http Error တွေကို လူလိုသူလိုနားလည်အောင် Exception Handling လုပ်ဖို့လိုမယ်။

အခု တကယ့် UI ကို ကြည့်ဖို့ လိုလာပြီ။



status နဲ့ error message ကို ကြည့်ဖို့ လိုမယ်။
Selector သုံးရမယ်။


Body ရဲ့ scroll က အောက်ဆုံးအထိ ရောက်လာရင် Pagination API ကို ခေါ်ဖို့လိုမယ်။
Body ရဲ့ scroll event ကိုလည်း ဒီ Page ကပဲ​ handle လုပ်သင့်တယ်။
Global မှာ မလုပ်သင့်။

စာရှည်ရင် ဖျတ်မယ်။



### State က code မှာ up to date မရ

it's always 1

page ဆိုတဲ့ state တစ်ခု ရှိတယ်။
ui မှာ စစ်ကြည့်ရင်လည်း up to date ဖြစ်တယ်။
ဒါပေမယ့် function ထဲမှာ console.log ထုတ်ကြည့်ရင် it's alway initial value.



Time One
---
prev_page 0 
page 1

Time Two
---
prev_page 1
page 1
-> it's valid, make api request

Time Three (same event dispatched )
----
prev_page 2
page 1
-> it's invalid, throw an error 

Error ဖြစ်သွားရင် ပြန်လျော့ပေး


*** Article Detail *** ရပြီ။





*** Functional Component တစ်ခုရဲ့ Lifecycle ကို သိဖို့လိုလာပြီ​ ***

useEffect hook က ဘယ်ချိန်မှာ run မှာလဲ?

နှစ်ချိန်မှာ Run တယ်။

- After the initial render 
- When dependencies change



Initial Render နဲ့ Rerender ဆိုတာ ရှိတယ်။
Component တစ်ခု စပြီး UI ပေါ်တင်ဖို့ Initial Render လုပ်တယ်။
ပြီးရင် အကြောင်းအမျိုးမျိုးနဲ့ Rerender လည်း လုပ်တယ်။

dependency changes ဖြစ်ရင် useEffect က ပြန် run မယ်မထင်ရဘူးပေါ့။
မှန်တယ်။ ReRender လုပ်တဲ့အချိန် useEffect ကို မခေါ်တော့ဘူး။ 


The useEffect hook in React runs after the initial render of the component and can run subsequent times based on the dependencies you specify. It allows you to perform side effects in your functional components, such as data fetching, subscriptions, or in the case of navigation, route changes. Here's when useEffect runs:

After the Initial Render: By default, the code inside the useEffect callback runs immediately after the initial render of the component. This is similar to the componentDidMount lifecycle method in class components.

When Dependencies Change: You can pass an array of dependencies as the second argument to useEffect. If any of the dependencies change between renders, the useEffect callback will run again after the component re-renders. If you pass an empty array ([]) as the second argument, the effect runs only after the initial render and doesn't have any dependencies to watch for changes.



## 2023-10-09 API for Login and Register

- [ ] Login API

ဒါကို ဘယ်မှာ ရေးရမလဲ?
asyncExtra ဆိုပြီး Reducer မှာ ရေးမယ်။

ဒီ action ကို Form Submit Handler က ခေါ်ပေး (​ dispatch ) လုပ်မယ်။

internal state ကို loading ပြင်မယ်။
ခလုပ်ကို disabled and loading indicator ပြောင်းမယ်။



UI တော့ အိုကေပြီ။
တစ်ခုပဲ
API က Result ကိုဘယ်လိုပြမလဲ?

API အရင်ရေးလိုက်ဉီးမယ်။
အခုက UI မှာ Result ပြဖို့ Logic ကို လုံးဝစဉ်းစားလို့မရ ေသး။

နောက်တစ်ခု Form Validation ကို ဘယ်လို Handle လုပ်ကြမလဲ?


### မသိခြင်းများ

- [ ] JS မှာ Promise ဆိုတာ ဘာလဲ?
- [ ] axios.post က ဘာကို Return ပြန်ပေးမှာလဲ?
- [ ] createAsyncThunk က ဘာတွေကို လက်ခံပြီး ဘယ်ချိန်မှာ pending, fulfilled စတဲ့ event တွေ ထုတ်ပေးမှာလဲ? 
- [ ] .addCase(loginAsync.pending, (state) => { state.status = 'loading'; }) ဒီမှာ ဘယ်လို listen လုပ်ရမလဲ?


ဒါတွေ ပြန်ဖတ်ဖို့ လိုနေပြီ။





## 2023-10-08 Sun

- [ ] List required pages
- [ ] Add ui component for each page
- [ ] Link each other
- [ ] Integrate API

### Required Pages

- [x] Login
- [x] Register
- [x] Newsfeed
- [ ] Detail
- [ ] Profile
- [ ] Edit profile
- [ ] Create article
- [ ] Edit article


** Flutter is easier than HTML,CSS

ကျွန်တော့အတွက်ကတော့ အတော်လေး ရှုပ်ထွေးတဲ့ ရေးထုံးတွေ စဖြစ်လာပါပြီ။


```jsx
<Container sx={{ py: { xs: 8, lg: 16 } }}>
        <Box
          sx={{
            mx: "auto",
            mb: { lg: 16, sm: 8 },
            maxWidth: "sm",
            textAlign: "center",
          }}
        >
```

ဒါတွေ နားလည်ဖို့က သူ့ Library ကို အချိန်ပေးပြီး ဖတ်မှပဲ​ဖြစ်မယ်။
မဟုတ်ရင် မရင်းနှီးတဲ့ ရေးထုံးတွေနဲ့ စိတ်ညစ်ရလိမ့်မယ်။

ဘာတစ်ခုမှကို ချရေးမထားတာလည်း ပြဿနာ
ကွန်ပျူတာရှေ့ရောက်ရင် ကိုယ်လုပ်ရမယ့် အလုပ်ကို ကိုယ်မသိတော့ဘူး။
အရာရာဟာ ထွေပြားနေရော။

IDE က အထောက်အကူမပြုတာကလည်း ပြဿနာ။


## 2023-10-07 Sat 

- [ ] UI Kit ထဲက လိုသမျှတွေ Page အလိုက် ထည့်ထားရန်
- [ ] Internal State မှာ ရှင်းရမယ့် ကိစ္စတွေ လိုက်ရှင်းထားမယ်
- [ ] API Integration -> Register, Login, Select , Vote, Comment 


## Side Note

ပရောဂျက်ကို ပြန်ကိုင်လိုက်ရင် ဘာလုပ်လို့ ဘာကိုင်ရမှန်းမသိ
ပရောဂျက်ရဲ့ ဘယ်အပိုင်းကို ရောက်လို့ ဘာဆက်လုပ်ရမလဲ လဲမသိ
အတော်ကို ယောင်ချာချာ အခြေအနေ။


## 2023-09-28 Loading State

ခလုပ်ကိုပဲ Loading ခလုပ်နဲ့ အစားထိုးလိုက်မယ်။


### Login အရင်လုပ်မယ်။

နှိပ်လိုက်ရင် Form Validation လုပ်ပြီးတာနဲ့  5 sec စောင့်မယ်။
if နဲ့ စစ်ပြီး အခြေအနေပြမယ်။

ဘာတွေလိုမလဲ?

- [ ] login_submit_enable 

Pandora ကို React-Redux-Toolkit နဲ့ ရေးရန်။
UI အနေနဲ့ Material UI ကိုသုံးပြီး
State Management ကို Redux-React သုံးမယ်။

Material UI and Icons
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

Material UI နမူနာ App ကို ဒီမှာ ကြည့်လို့ရတယ်။

https://codesandbox.io/s/github/mui/material-ui/tree/master/examples/material-ui-cra

Screen Flow ကို ပြန်ကြည့်ပြီး
Route နဲ့ သက်ဆိုင်ရာ Page တွေ 
Navigation တွေ မှန်အောင် အရင်လုပ်ရမယ်။

State Management အပိုင်းက အတော်လေး ရိုးရှင်းတယ်။

dispatch နဲ့ selector hook တွေသုံးပြီးအလုပ်လုပ်ရုံပဲ။
UI ကိုပဲ​ smooth ဖြစ်အောင် ဂရုစိုက်ရမယ်။


Routing အတွက်
```bash
npm install react-router-dom localforage match-sorter sort-by
```

## Git Ignore

```bash
git rm -r --cached node_modules ; 
git rm -r --cached build ; git status
```
### Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

###### Available Scripts

In the project directory, you can run:

######### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

######### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

######### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

######### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

###### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
