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

    div.addedTagList{
        display: inline-block;
        margin-left:10px;
        div.tagItem{
            display: inline-block;
            margin: 0px 5px;
            font-size:13px;
            color:white;
            background: black;
            padding:3px 5px; 
            border-radius:5px;
            font-weight: 200;
            &:hover{ opacity: 0.2; cursor:pointer;}
        }
    }
    input.addTag{
        border:none;
        border-bottom:1px solid #eeeeee;
        width:120px;
        outline: none;
        margin-top:20px; margin-left:15px;
        text-align: left;
        
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
    margin-bottom:10px;
    border-bottom:1px solid #eeeeee;       
    min-height: 10vh;
`

const _EditConfirmTagLayout = styled.div<HTMLDivElement>`
    border-bottom:1px solid #eeeeee;
    padding-bottom:10px;
    margin-bottom:15px;

    div.confirmTagItem{
        display: inline-block;
        margin-right:5px;
        background: silver;
        color:white;
        padding:3px 5px; 
        border-radius: 5px;
    }
`

const _EditConfirmContentLayout = styled.div<HTMLDivElement>`
    white-space: nowrap;
    overflow-y: auto;
    max-height: 70vh;
    
    img {
        margin-top: 25px; 
        margin-bottom:25px;
        max-height:500px;
        align-items: center;
        max-width:100%;
    }
`
const _ProfileEditLayout = styled.div<HTMLDivElement>`
    padding:15px;
`

module.exports = { 
    _EditPageLayout, _EditPageWriteLayout, _EditPageConfirmLayout, _EditActionBarLayout,
    _EditActionButton, _ProfileEditLayout,
    _EditConfirmTitleLayout, _EditConfirmContentLayout, _EditConfirmTagLayout
}