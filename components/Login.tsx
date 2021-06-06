import React, { useEffect, useState } from 'react';
const { _LoginLayout, _LoginTitle, _LoginInputWrapper, _LoginInput, _LoginButton } = require('../styles/_components/_Login');
interface AdminAppProps {
    authResult: () => void
} 
const Login : React.FC <AdminAppProps> = ( { authResult } ) => {

    const [ inputCode, setInputCode ] = useState<string>( null );
    
    const onChangeInputCode = (e:any) => {
        console.log(e.target.value);
        const code = e.target.value;
        setInputCode( code );
    }

    const onClickLoginButton = ( ) => {
        if( !inputCode ) { 
            return; 
        }
        console.log(inputCode);
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