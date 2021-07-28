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
    height:calc( 100vh - 58px );
    background: white;
    box-shadow: -5px 0px 5px silver;
`

const _EditActionBarLayout = styled.div<HTMLDivElement>`
    width:100%;
    height:58px;
    background: gray;
    line-height: 58px;
`

const _EditActionButton = styled.div<HTMLDivElement>`
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
`

module.exports = { 
    _EditPageLayout, _EditPageWriteLayout, _EditPageConfirmLayout, _EditActionBarLayout,
    _EditActionButton
}