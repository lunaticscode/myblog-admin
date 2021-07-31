import React, {useEffect, useState} from 'react';
const { _EditActionBarLayout, _EditActionButton } = require('../../../../styles/_pages/_edit');

interface ActionBarProps {
    isLoading: boolean;
    onClickEditSaveBtn: () => void; 
    onClickEditTmpSaveBtn: () => void;
}

const ActionBar:React.FC <ActionBarProps> = ({ isLoading, onClickEditSaveBtn, onClickEditTmpSaveBtn }) => {

    return(
        <_EditActionBarLayout>
                <_EditActionButton
                    isLoading = { isLoading }
                    onClick={() => onClickEditSaveBtn() }
                >
                    저장
                </_EditActionButton>
                <_EditActionButton
                    isLoading = { isLoading }
                    onClick={() => onClickEditTmpSaveBtn() }
                >
                    임시저장
                </_EditActionButton>
        </_EditActionBarLayout>
    )
    
}

export default ActionBar;