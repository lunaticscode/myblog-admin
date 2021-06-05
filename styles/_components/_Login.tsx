import styled, {css} from 'styled-components';

const _LoginLayout = styled.div`
    text-align: center;
    margin-top: 20vh;
    width:90%;
    margin-left:5%;
`

const _LoginTitle = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 20px;
`

const _LoginInputWrapper = styled.div`
    margin-bottom: 10px;
    text-align: center;
`

const _LoginInput = styled.input`
    outline: none;
    border: none;
    text-align: center;
    border-bottom:1px solid silver;
    &.active{
        border-bottom:1px solid skyblue;
    }
    &::placeholder{
        color:silver;
    }
`

const _LoginButton = styled.div`
    width:150px;
    margin-left:calc( 50% - 75px );
    //margin-left:25%;
    font-size:15px;
    padding:5px 0px;
    border-radius:5px;
    border: 1px solid silver;
    color: silver;
    &:hover{
        border: 1px solid skyblue;
        cursor: pointer;
        background: skyblue;
        color:white;
        box-shadow: 0px 0px 5px silver;
    }
`

module.exports = { 
                   _LoginLayout, 
                   _LoginTitle, 
                   _LoginInputWrapper, 
                   _LoginInput, 
                   _LoginButton,
                }