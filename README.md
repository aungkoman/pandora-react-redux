# React Redux Toolkit CODELAB

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
