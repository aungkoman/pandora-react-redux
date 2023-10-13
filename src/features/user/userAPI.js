import axios from 'axios';

import { LOGIN_API_ENDPOINT, REGISTER_API_ENDPOINT } from './../../config/config';

// A mock function to mimic making an async request for data
export function loginApi({email, password}) {

    console.log("loginApi");
    console.log({email, password});

    /* ဒီမှာ Promise တစ်ခု return လုပ်ရမယ် */

    // Define the data you want to send in the request body (usually as an object)
    const postData = {
      email,
      password
    };

    return new Promise((resolve, reject) => {
      axios.post(LOGIN_API_ENDPOINT, postData)
        .then(response => {
          setTimeout(() => resolve(response.data), 3000);
          //resolve(response.data);
        })
        .catch(error => {
          setTimeout(() => reject(error), 3000);
          // reject(error);
        });
    });
}


export function registerApi({username, email, password, confirm_password}) {
  console.log("registerApi");
  console.log({username, email, password, confirm_password});
  // Define the data you want to send in the request body (usually as an object)
  const postData = {username, email, password, confirm_password};
  return new Promise((resolve, reject) => {
    axios.post(REGISTER_API_ENDPOINT, postData)
      .then(response => {
        setTimeout(() => resolve(response.data), 3000);
        //resolve(response.data);
      })
      .catch(error => {
        setTimeout(() => reject(error), 3000);
        // reject(error);
      });
  });
}
  