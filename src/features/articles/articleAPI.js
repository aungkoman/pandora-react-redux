import axios from 'axios';
import { ARTICLE_API_ENDPOINT } from './config';


// A mock function to mimic making an async request for data
export function articleSelectApi({ filter, page, accessToken }) {

    console.log("articleSelectApi");
    console.log({ filter, page, accessToken });


    // Define the data you want to send in the request body (usually as an object)
    const postData = {
        email,
        password
    };

    return new Promise((resolve, reject) => {
        // TODO: filter need to be spread
        let endpoint = ARTICLE_API_ENDPOINT + "?page=" + page;
        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        };
        axios.get(endpoint, config)
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
