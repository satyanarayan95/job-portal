import axios from 'axios';

export const instance = new axios.create({
    baseURL:'https://jobs-api.squareboat.info/api/v1',
})

export const jobHeader =token =>{
  console.log(token);
    if (token) {
        // Apply to every request
      return  instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        // Delete auth header
       return delete instance.defaults.headers.common['Authorization'];
    }
}

