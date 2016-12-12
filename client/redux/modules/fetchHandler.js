import axios from 'axios'
/**
 * For fetching data from server
 *
 * returns a function
 */

 export function fetchAndInsert ({ callback, query_name, query, variables = {}, }) {

   return function () {
     return dispatch => {
       return axios.post('/graphql', {query, variables})
         .then((res) => {
           // abort if we have an error
           if (Object.keys(res.data).indexOf('errors') > 0 ) {
             return;
           }
           dispatch(callback(res.data.data[query_name]))
         })
         .catch((res) => {
           console.log(res)
         })
     }
   }

 }
