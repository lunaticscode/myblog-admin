import '../styles/globals.css';
import React, {useEffect, useState} from 'react';
import { AppProps } from 'next/app';
import Login from '../components/Login';
const AdminApp = ({ Component, pageProps } : AppProps ) => {
  
  console.log(pageProps);
  
  const [ isAuth, setIsAuth ] = useState<boolean>(false);
  
  useEffect( () => {
    console.log( isAuth );
    checkAuth();    
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem( 'hw-admin-token' );
    console.log( 'token => ', token ); 
    if( token ){
      setIsAuth(true);
    }
  }
  
  const authResult = ( ) => { setIsAuth(true); }

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
            />
          }
       

          </>
          
  )
}

export default AdminApp
