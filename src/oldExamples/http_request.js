import Axios from 'axios';

let BASE_URL = 'http://localhost:8080'

export default function get(data){
    options = {url: `${BASE_URL}${data}`}
    Axios(options).then(resp => console.log(resp)).catch(error=>console.log(error));
    return 'success'
}