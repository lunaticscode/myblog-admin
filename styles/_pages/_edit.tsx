import styled, {css} from 'styled-components';

const _EditPageLayout = styled.div<HTMLDivElement>`
    width: 100%;
    min-width: 1300px;
    display: flex;
    justify-content: space-between;
`

const _EditPageWriteLayout = styled.div<HTMLDivElement>`
    width: 50%;
    
    div.titleEdit_header{
        height: 40px;
        line-height: 40px;
        color: gray;
        font-weight: bold;
        text-indent: 15px;
        box-shadow: 0px 0px 4px silver;
    }
        
    div.contentEdit_header{
        height: 40px;
        line-height: 40px;
        color: gray;
        font-weight: bold;
        text-indent: 15px;
        box-shadow: 0px 1px 4px silver;
    }
    div.ql-toolbar.ql-snow{
        border:none;
        //border-bottom:1px solid #eeeeee;
    }
    
    div.ql-container.ql-snow{
        border:none;
    }
` 
const _EditPageConfirmLayout = styled.div<HTMLDivElement>`
    width:50%;
    padding:20px;
    height:calc( 100vh - 58px );
    background: white;
    box-shadow: -5px 0px 5px silver;

    p {
        margin:0px;
    }
`

const _EditActionBarLayout = styled.div<HTMLDivElement>`
    width:100%;
    height:58px;
    background: gray;
    line-height: 58px;
`
interface _EditActionButtonProps {
    isLoading: boolean;
}
const _EditActionButton = styled.div<_EditActionButtonProps>`
    line-height: initial;
    width:100px;
    padding:5px 0px;
    text-align: center;
    font-size:15px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
    margin-right:10px;
    position: relative;
    top:15px;
    float: right;
    &:hover{
        background: white;
        color: skyblue;
        cursor: pointer;
    }
    ${ props => ( props.isLoading ) && css `
        &:hover{
            cursor: progress;
            border: 1px solid silver;
            background: silver;
            color:gray; 
            font-weight: 400;
        }
    `}
`
interface _EditConfirmTitleLayoutProps {
    isActive: boolean;
} 
const _EditConfirmTitleLayout = styled.div<_EditConfirmTitleLayoutProps>`
    margin-bottom:20px;
    border-bottom:1px solid silver;       
`
const _EditConfirmContentLayout = styled.div<HTMLDivElement>`
    img {
        margin-top: 25px; 
        margin-bottom:25px;
        max-height:500px;
        align-items: center;
        max-width:100%;
    }
`

module.exports = { 
    _EditPageLayout, _EditPageWriteLayout, _EditPageConfirmLayout, _EditActionBarLayout,
    _EditActionButton, _EditConfirmTitleLayout, _EditConfirmContentLayout
}