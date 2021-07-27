import '../styles/globals.css';
import React, {useEffect, useState} from 'react';
import { AppProps } from 'next/app';
import Login from '../components/Login';
import { authToken } from '../api_util/auth'
import { adminLogin } from '../api_util/login';

const AdminApp = ({ Component, pageProps } : AppProps, ) => {

  console.log(pageProps);
  
  const [ isAuth, setIsAuth ] = useState<boolean>(false);
  
  useEffect( () => {
    console.log( isAuth );
    checkAuth();    
  }, [])

  const checkAuth = async () => {
    const token = localStorage.getItem( 'token' );
    console.log( 'token => ', token ); 
    if( token ){
      const authResult = await authToken( token );
      if( authResult['res'] === 20000 ){ setIsAuth( true ); }
      else{ setIsAuth(false); }
    }
    else{
      setIsAuth(false);
    }
  }
  
  const authResult = async ( id: string, pw: string ) => {
    const result = await adminLogin( id, pw );
    console.log(result);
    if( result['res'] === 20000 ){
      setIsAuth(true);   
    }else{
      setIsAuth(false);
    }
    return true;   
  }
  const IS_DEBUG = process.env.IS_DEBUG
  return (
          <>
          { 
            ( !isAuth ) 
            ?
            <Login
              authResult = { authResult }
            />
            :
            <Component 
            {...pageProps}
            IS_DEBUG = { IS_DEBUG }
                       
            />
          }
       

          </>
          
  )
}

export default AdminApp
