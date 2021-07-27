import { API_PATH } from './constants';
const API_URL = process.env.API_URL;

export const authToken = ( async ( token: string ) => {
    let result: object;
    await fetch( API_URL + API_PATH.AUTH.TOKEN, {
        method: 'get',
        headers: { 'Content-Type': 'application', 'Authorization': token },
    }).then( res => res.json() ).catch( err => { console.log(err); result = { res: 50000, msg: 'fetch-error' } } )
    .then( res => { result = res } );
    return result;
});

// module.exports = {  
//  authToken,
// }