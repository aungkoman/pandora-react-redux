import axios from 'axios';

// A mock function to mimic making an async request for data
export function loginApi({email, password}) {

    console.log("loginApi");
    console.log({email, password});

    /* ဒီမှာ Promise တစ်ခု return လုပ်ရမယ် */
    // Define the URL you want to send the POST request to
    const apiUrl = 'http://localhost/pandora/public/api/v1/login';

    // Define the data you want to send in the request body (usually as an object)
    const postData = {
      email,
      password
    };

    return new Promise((resolve, reject) => {
      axios.post(apiUrl, postData)
        .then(response => {
          setTimeout(() => resolve(response.data), 3000);
          //resolve(response.data);
        })
        .catch(error => {
          setTimeout(() => reject(error), 3000);
          // reject(error);
        });
    });


    // Send the POST request
    /*
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
    */
}
  