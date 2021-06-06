import React, { useEffect, useState } from 'react';
const { _LoginLayout, _LoginTitle, _LoginInputWrapper, _LoginInput, _LoginButton } = require('../styles/_components/_Login');
const { adminAuth } = require('../api_util/auth');
const IS_DEBUG = process.env.IS_DEBUG;

interface AdminAppProps {
    authResult: () => void
} 
const Login : React.FC <AdminAppProps> = ( { authResult } ) => {

    const [ inputCode, setInputCode ] = useState<string>( null );
    useEffect( () => {
        
    })
    const onChangeInputCode = ( e:any ) => {
        const code = e.target.value;
        setInputCode( code );
    }

    const onClickLoginButton = ( ) => {
        if( !inputCode ) { 
            return; 
        }
        IS_DEBUG && console.log(inputCode);
        IS_DEBUG && console.log(adminAuth(inputCode));
    }

    return (
        <_LoginLayout>
            <_LoginTitle>
                관리자 인증
            </_LoginTitle>
            <br/>
            <_LoginInputWrapper>
                    <_LoginInput 
                        placeholder={"코드 입력"} 
                        type={"password"}
                        onChange={ onChangeInputCode }
                    />
            </_LoginInputWrapper>
            <br/>
            <_LoginButton
                onClick ={ onClickLoginButton }
            >
                Enter
            </_LoginButton>
        </_LoginLayout>
        
    )
}

export default Login;