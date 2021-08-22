import React, {useEffect, useState, useRef} from 'react';
import { editResultState, editTagArrayState } from '../../../../recoil/state/editState'
import { useRecoilValue } from 'recoil'
const { _EditPageConfirmLayout, _EditConfirmTitleLayout, _EditConfirmContentLayout, _EditConfirmTagLayout } = require('../../../../styles/_pages/_edit')

const ConfirmEdit:React.FC = () => {
    const _editResultState = useRecoilValue( editResultState );
    const _editTagState = useRecoilValue( editTagArrayState )
    const titleLayout = useRef<HTMLDivElement>();
    const contentLayout = useRef<HTMLDivElement>();
    

    useEffect( () => {
        if( 'title' in _editResultState && _editResultState.title ){
            titleLayout.current.innerHTML = _editResultState['title'];
        }
        if( 'content' in _editResultState && _editResultState.content ){
            contentLayout.current.innerHTML = _editResultState['content'];
            console.log(_editResultState['content']);
        }
    }, [_editResultState] )

    return (        
        <>
            <_EditConfirmTitleLayout>
                <div id="title" ref={titleLayout}/>
            </_EditConfirmTitleLayout>
            {
                ( _editTagState.length ) 
                ?
                <_EditConfirmTagLayout>
                {
                    _editTagState.map( tag => <div className={"confirmTagItem"} >{"# "+tag}</div> )   
                }
                </_EditConfirmTagLayout>
                :""
            }
            

            <_EditConfirmContentLayout>
                <div id="content" ref={contentLayout} />
            </_EditConfirmContentLayout>
        </>
    )
}

export default ConfirmEdit;