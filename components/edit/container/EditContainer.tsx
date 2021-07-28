import React, {useEffect, useState} from 'react';
import QuillEdit from '../view/QuillEdit';
import ConfirmEdit from '../view/ConfirmEdit';
import ActionBar from '../view/ActionBar';
import TitleQuillEdit from '../view/TitleQuillEdit';
const { _EditPageLayout,  _EditPageWriteLayout,  } = require ('../../../styles/_pages/_edit');

const EditContainer:React.FC = () => {
    
    return (
        <>
        <_EditPageLayout>
            
          <_EditPageWriteLayout>
            <TitleQuillEdit/>
            <QuillEdit/>                
          </_EditPageWriteLayout>

            
            <ConfirmEdit/>
            
        </_EditPageLayout>
        
            <ActionBar/>
        </>
    )
}

export default EditContainer;