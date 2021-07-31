import React, {useEffect, useState} from 'react';
import QuillEdit from '../view/QuillEdit';
import ConfirmEdit from '../view/ConfirmEdit';
import ActionBar from '../view/ActionBar';
import TitleQuillEdit from '../view/TitleQuillEdit';
import { editTitleState, editContentState } from '../../../recoil/status'
import { useRecoilValue } from 'recoil';
const { _EditPageLayout,  _EditPageWriteLayout,  } = require ('../../../styles/_pages/_edit');

const sleep = async() => {
  return await new Promise(( resolve, reject ) => {
    setTimeout( () => {
        resolve();
    }, 3000)
  })
}

const EditContainer:React.FC = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const _editTitle = useRecoilValue( editTitleState );
    const _editContent = useRecoilValue( editContentState );

    console.log( 'editTitle => ', _editTitle );
    console.log( 'editContent => ', _editContent );
    
    const handleClickEditSaveBtn = async () => {
      setIsLoading(true);
      await sleep()
      setIsLoading(false);
      console.log('clicked-save-btn')
    }
    
    const handleClickEditTmpSaveBtn = () => {
      console.log('clicked-tmp-save-btn');
    }

    return (
          <>
        <_EditPageLayout> 
          <_EditPageWriteLayout>
              <TitleQuillEdit/>
              <QuillEdit/>                
          </_EditPageWriteLayout>

            
              <ConfirmEdit/>
            
        </_EditPageLayout>
        
            <ActionBar
              isLoading = { isLoading }
              onClickEditSaveBtn={ handleClickEditSaveBtn }
              onClickEditTmpSaveBtn={ handleClickEditTmpSaveBtn }
            />
            </>
    )
}

export default EditContainer;