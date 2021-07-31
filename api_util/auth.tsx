import { API_PATH } from './constants';
const API_URL = process.env.API_URL;

export const authToken = ( async ( token: string ) => {
    let result: object;
    await fetch( API_URL + API_PATH.AUTH.TOKEN, {
        method: 'get',
        headers: { 'Content-Type': 'application', 'Authorization': token },
    }).then( res => res.json() ).then( res => { result = res } )
    .catch( err => { console.log('error', err); result = { res: 50000, msg: 'fetch-error' } } )
    return result;
});

// module.exports = {  
//  authToken,
// }