import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.bubble.css';
import dynamic from 'next/dynamic';
const  { _ProfileEditLayout } = require('../../../../styles/_pages/_edit');
const Quill = dynamic( async() => await import('react-quill'), {ssr: false} ); 

const Profile:React.FC = () => {
    const modules = {
        toolbar: [
          [{ 'header': [1] }],
          //['bold', 'italic', 'underline','strike', 'blockquote'],
          //[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          //['link', 'image'],
          [{ 'color': [] }],          // dropdown with defaults from theme
          ['clean']
        ],
    }
    
    const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
    ]
    return(
        <>
            <_ProfileEditLayout>
            <Quill
                  style={{ height:'100%', width:'100%' }}
                  theme="bubble"
                  //onChange={ ( content, delta, source, editor ) => onChangeEditContent(content, editor) }
                  modules={modules}
                  formats={formats}
            ></Quill>
            </_ProfileEditLayout>
            
        
        </>
    )
}

export default Profile;