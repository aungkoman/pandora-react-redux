const axios = require('axios');

// A mock function to mimic making an async request for data
export function loginApi({email, password}) {

    /* ဒီမှာ Promise တစ်ခု return လုပ်ရမယ် */
    return axios.post('/user', document.querySelector('#my-form'), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
}
  