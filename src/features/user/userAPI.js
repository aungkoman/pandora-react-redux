const axios = require('axios');

// A mock function to mimic making an async request for data
export function loginApi({email, password}) {

    /* ဒီမှာ Promise တစ်ခု return လုပ်ရမယ် */
    // Define the URL you want to send the POST request to
    const apiUrl = 'https://example.com/api/resource';

    // Define the data you want to send in the request body (usually as an object)
    const postData = {
      email,
      password
    };

    // Send the POST request
    return axios.post(apiUrl, postData)
    .then((response) => {
      // Handle the response data here
      console.log('Response:', response.data);
      return response.data;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
      return error;
    });
}
  