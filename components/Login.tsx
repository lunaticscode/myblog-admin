import React, { useEffect, useState } from 'react';
const { _LoginLayout, _LoginTitle, _LoginInputWrapper, _LoginInput, _LoginButton } = require('../styles/_components/_Login');
const IS_DEBUG = process.env.IS_DEBUG;

interface AdminAppProps {
    authResult: ( id: string, pw: string ) => Promise<boolean>
}
 
const Login : React.FC <AdminAppProps> = ( { authResult, } ) => {

    const [ inputId, setInputId ] = useState<string>(null);
    const [ inputPw, setInputPw ] = useState<string>(null);

    useEffect( () => {
        console.log( 'IS_DEBUG => ', IS_DEBUG );
    })

    const onChangeInputId = ( e: any ) => {
        const id = e.target.value.toString();
        setInputId( id );
    }
    const onChangeInputPassword = ( e: any ) => {
        const pw = e.target.value.toString();
        setInputPw( pw );
    }
            
    const onClickLoginButton = async () => { 
        const result = await authResult( inputId, inputPw ); 
    }
    
    return (
        <_LoginLayout>
            <_LoginTitle>
                관리자 인증
            </_LoginTitle>
            <br/>
            <_LoginInputWrapper>
                    <_LoginInput 
                        placeholder={"ID"} 
                        type={"text"}
                        onChange={ onChangeInputId }
                    />
                    <br/><br/>
                    <_LoginInput 
                        placeholder={"PW"} 
                        type={"password"}
                        onChange={ onChangeInputPassword }
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