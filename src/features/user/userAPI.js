import axios from 'axios';

import { LOGIN_API_ENDPOINT, REGISTER_API_ENDPOINT } from './../../config/config';

// A mock function to mimic making an async request for data
export function loginApi({ email, password }) {

  console.log("loginApi");
  console.log({ email, password });

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


export function registerApi({ name, email, password, confirm_password }) {
  console.log("registerApi");
  console.log({ name, email, password, confirm_password });
  // Define the data you want to send in the request body (usually as an object)
  const postData = { name, email, password, confirm_password };
  return new Promise((resolve, reject) => {
    axios.post(REGISTER_API_ENDPOINT, postData)
      .then(response => {
        setTimeout(() => resolve(response.data), 3000);
        //resolve(response.data);
      })
      .catch(error => {
        // setTimeout(() => reject(error), 3000);
        // reject(error);
        console.error("Registration failed:", error);

        if (error.response) {
          // The request was made, but the server responded with a status code other than 2xx
          console.error("Server responded with status code:", error.response.status);
          console.error("Response data:", error.response.data);
          console.log(error.response.data);
          console.log(error.response.data.errors);

          reject({"message" : JSON.stringify(error.response.data.errors)});
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received. The request may have failed.");
          reject("No response received");
        } else {
          // Something else went wrong
          console.error("An error occurred while making the request:", error.message);
          reject("Request failed: " + error.message);
        }
      });
  });
}
