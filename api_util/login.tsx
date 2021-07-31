import { API_PATH } from './constants';
const API_URL = process.env.API_URL;

const setToken = (token: string) => {
    localStorage.setItem( 'token', token );
}

export const adminLogin = ( async ( id: string, pw: string ) => {
    let result;
    await fetch( API_URL + API_PATH.USER.LOGIN, {
        method : 'post',
        body: JSON.stringify( { id: id, pw: pw } ),
        headers: { 'Content-Type': 'application/json' }
    })
    .then( res => res.json() ).then( res => { result = res } )
    .catch( err => {console.log( err ); result = { res: 50000, msg: 'fetch-error' } } );
    setToken( result['token'] );
    return result;
});

// module.exports = {  
//     adminLogin,
// }