import React, {useEffect, useState} from 'react';
import QuillEdit from '../view/article/QuillEdit';
import ConfirmEdit from '../view/article/ConfirmEdit';
import ActionBar from '../view/article/ActionBar';
import TitleQuillEdit from '../view/article/TitleQuillEdit';
import { useRecoilValue, selector } from 'recoil';

const { _EditPageLayout,  _EditPageWriteLayout, _EditPageConfirmLayout,  } = require ('../../../styles/_pages/_edit');
const sleep = async() => {
  return await new Promise(( resolve, reject ) => {
    setTimeout( () => {
        resolve();
    }, 3000)
  })
}

const EditContainer:React.FC = () => {
    
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

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

          <_EditPageConfirmLayout>
            <ConfirmEdit/> 
          </_EditPageConfirmLayout>
            
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