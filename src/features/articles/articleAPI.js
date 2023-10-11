import axios from 'axios';
import { ARTICLE_API_ENDPOINT } from './../../config/config';


// A mock function to mimic making an async request for data
export function articleSelectApi({ filter, page, accessToken }) {

    console.log("articleSelectApi");
    console.log({ filter, page, accessToken });
    

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
                setTimeout(() => resolve(response.data), 500);
                //resolve(response.data);
            })
            .catch(error => {
                setTimeout(() => reject(error), 500);
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


// A mock function to mimic making an async request for data
export function articleDetailSelectApi({ id, accessToken }) {

    console.log("articleDetailSelectApi");
    console.log({ id, accessToken  });
    

    return new Promise((resolve, reject) => {
        // TODO: filter need to be spread
        let endpoint = ARTICLE_API_ENDPOINT + "/" + id;
        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        };
        axios.get(endpoint, config)
            .then(response => {
                setTimeout(() => resolve(response.data), 500);
                //resolve(response.data);
            })
            .catch(error => {
                setTimeout(() => reject(error), 500);
                // reject(error);
            });
    });
}
