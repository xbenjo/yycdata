//let apiRoot = window.location.hostname === 'localhost' 
//    ? 'http://localhost:8080/api'
//     : 'http://localhost:8080/api';
let apiRoot = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/api'
     : 'api';

export default {
    apiRoot: apiRoot
};