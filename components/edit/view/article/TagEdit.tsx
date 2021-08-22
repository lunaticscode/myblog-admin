import React, {useEffect, useState, useRef } from 'react';
const {} = require('../../../../styles/_pages/_edit');
import { editTagArrayState } from '../../../../recoil/state/editState';
import { useRecoilState } from 'recoil';
const TagEdit:React.FC = () => {
    
    const [ editTagArray, setEditTagArray ] = useRecoilState<string[]>(editTagArrayState);
    const [ nowEditTag, setNowTagEdit ] = useState<string | null>("");

    const editTagInputElem = useRef<HTMLInputElement>()

    const onChangeTagInput = ( e:any ) => {
        setNowTagEdit(e.target.value);
    }

    const onDeleteTagItem = ( deleteTag: string ) => {
        setEditTagArray( editTagArray.filter( tag => tag !== deleteTag ) )
    }

    const onKeyDownTagInput = (e:any) => {
        const key = e.key;
        if( editTagArray.length >= 6 ){
            return;
        }
        if( key === 'Enter' ){
            setEditTagArray( editTagArray.concat( nowEditTag ).filter( (val, index, array) => array.indexOf( val ) === index ) );
            setNowTagEdit("");
            editTagInputElem.current.value = '';
        }
    }

    return (
        <>
            <div style={{height:'100px'}}>
                <div className={"titleEdit_header"} >Tag.</div>
                <div className={"addedTagList"} >
                        {
                            ( editTagArray.length )
                            ?
                            editTagArray.map( tag => {
                            return <div 
                                        className={"tagItem"} 
                                        onClick={ () => onDeleteTagItem( tag ) }
                                    >
                                   {tag}
                                   </div>
                            })
                            :""
                        }
                </div>
                <input className={"addTag"} 
                       placeholder={"태그 입력(최대 6개)"} 
                       ref = { editTagInputElem }
                       onChange={ onChangeTagInput }
                       onKeyDown={ onKeyDownTagInput }
                />
            </div>
        </>
    )
}

export default TagEdit;
