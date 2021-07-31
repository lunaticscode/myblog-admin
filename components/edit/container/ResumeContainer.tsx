import React, {useEffect, useState} from 'react';
import Profile from '../view/resume/Profile';
import Career from '../view/resume/Career';
import Skill from '../view/resume/Skill';
import ConfirmEdit from '../view/resume/ConfirmEdit';
import ActionBar from '../view/resume/ActionBar';
const { _EditPageLayout,  _EditPageWriteLayout, _EditPageConfirmLayout  } = require ('../../../styles/_pages/_edit');
const ResumeContainer:React.FC = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const onClickEditSaveBtn = () => {
        
    }
    const onClickEditTmpSaveBtn = () => {

    }
    return (
        <>  
            <_EditPageLayout>
                <_EditPageWriteLayout>
                    <Profile/>
                    <Career/>
                    <Skill/>
                </_EditPageWriteLayout>
                <_EditPageConfirmLayout>
                    <ConfirmEdit/>
                </_EditPageConfirmLayout>
            </_EditPageLayout>
            <ActionBar
                isLoading = { isLoading }
                onClickEditSaveBtn = { onClickEditSaveBtn }
                onClickEditTmpSaveBtn = { onClickEditTmpSaveBtn }
            />
        </>
    )
}
export default ResumeContainer;