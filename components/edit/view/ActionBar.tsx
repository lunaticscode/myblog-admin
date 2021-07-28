import React, {useEffect, useState} from 'react';
const { _EditActionBarLayout, _EditActionButton } = require('../../../styles/_pages/_edit');
const ActionBar:React.FC = () => {
    return(
        <_EditActionBarLayout>
                <_EditActionButton>
                    저장
                </_EditActionButton>
        </_EditActionBarLayout>
    )
}

export default ActionBar;